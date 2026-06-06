'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { GRUPOS } from '@/data/fixture'
import { cargarResultados, calcularTabla, type PosicionEquipo } from '@/lib/prode'
import { Home, Trophy } from 'lucide-react'

export default function TablaPage() {
  const router = useRouter()
  const [tablas, setTablas] = useState<Record<string, PosicionEquipo[]>>({})
  const [grupoActivo, setGrupoActivo] = useState('A')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const resultados = cargarResultados()
    const t: Record<string, PosicionEquipo[]> = {}
    GRUPOS.forEach(g => { t[g] = calcularTabla(g, resultados) })
    setTablas(t)
  }, [])

  const tabla = tablas[grupoActivo] || []

  if (!mounted) return (
    <main className="min-h-dvh bg-plum-dark flex items-center justify-center">
      <div className="text-6xl animate-float">📊</div>
    </main>
  )

  return (
    <main className="min-h-dvh bg-plum-dark flex flex-col">

      {/* Header */}
      <header className="sticky top-0 z-30 bg-plum-dark/95 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <button onClick={() => router.push('/')} className="p-2 rounded-xl bg-white/10 text-white/70">
            <Home className="w-4 h-4" />
          </button>
          <div className="font-display text-xl text-white">TABLA DE POSICIONES</div>
          <button onClick={() => router.push('/fixture')} className="p-2 rounded-xl bg-white/10 text-white/70">
            <Trophy className="w-4 h-4" />
          </button>
        </div>

        {/* Selector de grupos */}
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {'ABCDEFGHIJKL'.split('').map(g => (
            <button
              key={g}
              onClick={() => setGrupoActivo(g)}
              className={`w-9 h-9 rounded-xl text-sm font-bold transition-all flex-shrink-0 ${
                grupoActivo === g ? 'tab-active' : 'bg-white/10 text-white/50'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </header>

      <div className="flex-1 px-4 py-4 pb-24">

        {/* Título grupo */}
        <div className="text-center mb-4">
          <h2 className="font-display text-3xl text-white">GRUPO {grupoActivo}</h2>
          <p className="text-white/30 text-xs mt-1">Top 2 clasifican · 3° puede avanzar</p>
        </div>

        {/* Leyenda */}
        <div className="flex items-center gap-3 mb-3 px-1 flex-wrap">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-yellow-400" />
            <span className="text-white/40 text-xs">1°</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-gray-400" />
            <span className="text-white/40 text-xs">2°</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-amber-700" />
            <span className="text-white/40 text-xs">3°</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-green-500" />
            <span className="text-white/40 text-xs">Posible clasificado</span>
          </div>
        </div>

        {/* Tabla del grupo */}
        <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-[auto_1fr_repeat(6,_auto)] gap-1 px-3 py-2 text-xs text-white/30 font-bold border-b border-white/10">
            <span className="w-5">#</span>
            <span>Equipo</span>
            <span className="w-7 text-center">PJ</span>
            <span className="w-7 text-center">PG</span>
            <span className="w-7 text-center">PE</span>
            <span className="w-7 text-center">PP</span>
            <span className="w-7 text-center">DG</span>
            <span className="w-8 text-center font-black text-white/50">PTS</span>
          </div>

          {tabla.map((equipo, idx) => {
            const posClass = idx === 0 ? 'pos-1' : idx === 1 ? 'pos-2' : idx === 2 ? 'pos-3 clasificado' : ''
            return (
              <div
                key={equipo.codigo}
                className={`grid grid-cols-[auto_1fr_repeat(6,_auto)] gap-1 px-3 py-3 items-center border-b border-white/5 last:border-0 pos-row ${posClass}`}
              >
                <span className="w-5 text-xs text-white/40 font-bold">{idx + 1}</span>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-lg flex-shrink-0">{equipo.bandera}</span>
                  <span className="text-white text-xs font-semibold truncate">{equipo.nombre}</span>
                </div>
                <span className="w-7 text-center text-xs text-white/60">{equipo.PJ}</span>
                <span className="w-7 text-center text-xs text-green-400">{equipo.PG}</span>
                <span className="w-7 text-center text-xs text-yellow-400">{equipo.PE}</span>
                <span className="w-7 text-center text-xs text-red-400">{equipo.PP}</span>
                <span className="w-7 text-center text-xs text-white/60">
                  {equipo.DG > 0 ? `+${equipo.DG}` : equipo.DG}
                </span>
                <span className="w-8 text-center text-sm font-black text-white">{equipo.PTS}</span>
              </div>
            )
          })}
        </div>

        {/* Resumen todos los grupos */}
        <div className="mt-6">
          <h3 className="font-display text-xl text-white/60 mb-3">Resumen todos los grupos</h3>
          <div className="grid grid-cols-2 gap-3">
            {GRUPOS.map(g => {
              const t = tablas[g] || []
              return (
                <button
                  key={g}
                  onClick={() => setGrupoActivo(g)}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 text-left hover:bg-white/8 transition-all"
                >
                  <div className="text-xs text-white/40 font-bold mb-2">GRUPO {g}</div>
                  {t.slice(0, 2).map((e, i) => (
                    <div key={e.codigo} className="flex items-center gap-1.5 mb-1">
                      <span className="text-xs text-white/30 w-3">{i + 1}°</span>
                      <span className="text-sm">{e.bandera}</span>
                      <span className="text-xs text-white/70 flex-1 truncate">{e.nombre}</span>
                      <span className="text-xs font-bold text-white">{e.PTS}</span>
                    </div>
                  ))}
                  {t[2] && (
                    <div className="flex items-center gap-1.5 mt-1 pt-1 border-t border-white/10">
                      <span className="text-xs text-white/20 w-3">3°</span>
                      <span className="text-sm opacity-60">{t[2].bandera}</span>
                      <span className="text-xs text-white/30 flex-1 truncate">{t[2].nombre}</span>
                      <span className="text-xs font-bold text-white/40">{t[2].PTS}</span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Ranking de terceros */}
        <TablaTerceros tablas={tablas} />

      </div>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-plum-dark/95 backdrop-blur-md border-t border-white/10 safe-bottom">
        <div className="flex items-center justify-around px-4 py-3 max-w-md mx-auto">
          {[
            { icon: '🏠', label: 'Inicio',    action: () => router.push('/') },
            { icon: '⚽', label: 'Fixture',   action: () => router.push('/fixture') },
            { icon: '📊', label: 'Tabla',     action: undefined, active: true },
            { icon: '🔗', label: 'Compartir', action: () => router.push('/fixture') },
          ].map((btn, i) => (
            <button
              key={i}
              onClick={btn.action}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl ${btn.active ? 'text-plum-orange' : 'text-white/40'}`}
            >
              <span className="text-xl">{btn.icon}</span>
              <span className="text-xs font-semibold">{btn.label}</span>
            </button>
          ))}
        </div>
      </nav>

    </main>
  )
}

// ── Ranking de los 12 terceros ─────────────────────────────────────────────
function TablaTerceros({ tablas }: { tablas: Record<string, PosicionEquipo[]> }) {
  const terceros = Object.entries(tablas)
    .filter(([, t]) => t[2])
    .map(([grupo, t]) => ({ ...t[2], grupo }))
    .sort((a, b) =>
      b.PTS - a.PTS || b.DG - a.DG || b.GF - a.GF || b.PG - a.PG
    )

  if (terceros.length === 0) return null

  return (
    <div className="mt-6">
      <h3 className="font-display text-xl text-white/60 mb-1">Ranking de Terceros</h3>
      <p className="text-xs text-white/30 mb-3">Los 8 mejores terceros clasifican a los dieciseisavos</p>

      <div className="flex items-center gap-4 mb-3 px-1">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-green-500" />
          <span className="text-white/40 text-xs">Clasificado (Top 8)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-red-800" />
          <span className="text-white/40 text-xs">Eliminado</span>
        </div>
      </div>

      <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
        <div className="grid grid-cols-[auto_auto_1fr_repeat(5,_auto)] gap-1 px-3 py-2 text-xs text-white/30 font-bold border-b border-white/10">
          <span className="w-5">#</span>
          <span className="w-6">Gpo</span>
          <span>Equipo</span>
          <span className="w-7 text-center">PJ</span>
          <span className="w-7 text-center">DG</span>
          <span className="w-7 text-center">GF</span>
          <span className="w-7 text-center">PG</span>
          <span className="w-8 text-center font-black text-white/50">PTS</span>
        </div>

        {terceros.map((equipo, idx) => {
          const clasificado = idx < 8
          const rowClass = clasificado
            ? 'border-l-2 border-green-500 bg-green-950/20'
            : 'border-l-2 border-red-900 bg-red-950/10 opacity-60'
          return (
            <div
              key={`${equipo.codigo}-${equipo.grupo}`}
              className={`grid grid-cols-[auto_auto_1fr_repeat(5,_auto)] gap-1 px-3 py-2.5 items-center border-b border-white/5 last:border-0 ${rowClass}`}
            >
              <span className="w-5 text-xs font-bold" style={{ color: clasificado ? '#4ade80' : '#f87171' }}>
                {idx + 1}
              </span>
              <span className="w-6 text-xs text-white/40 font-bold">{equipo.grupo}</span>
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-base flex-shrink-0">{equipo.bandera}</span>
                <span className="text-white text-xs font-semibold truncate">{equipo.nombre}</span>
                {idx === 7 && (
                  <span className="text-xs bg-green-500/20 text-green-400 rounded-full px-1.5 py-0.5 flex-shrink-0 ml-1">límite</span>
                )}
              </div>
              <span className="w-7 text-center text-xs text-white/50">{equipo.PJ}</span>
              <span className="w-7 text-center text-xs text-white/50">
                {equipo.DG > 0 ? `+${equipo.DG}` : equipo.DG}
              </span>
              <span className="w-7 text-center text-xs text-white/50">{equipo.GF}</span>
              <span className="w-7 text-center text-xs text-green-400">{equipo.PG}</span>
              <span className="w-8 text-center text-sm font-black text-white">{equipo.PTS}</span>
            </div>
          )
        })}
      </div>

      {terceros.length < 12 && (
        <p className="text-center text-white/20 text-xs mt-3">
          Faltan {12 - terceros.length} grupo{12 - terceros.length !== 1 ? 's' : ''} para completar el ranking
        </p>
      )}
    </div>
  )
}
