'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { PARTIDOS_GRUPOS, PARTIDOS_ELIMINATORIOS, EQUIPOS, FASE_LABELS, type Partido, type Resultado } from '@/data/fixture'
import { cargarResultados, guardarResultados, cargarUsuario, generarURLCompartir } from '@/lib/prode'
import { Home, BarChart2, Share2, Instagram, Check, Trophy } from 'lucide-react'

const FASES_ORDEN = ['grupos', 'dieciseisavos', 'octavos', 'cuartos', 'semifinal', 'tercero', 'final'] as const

export default function FixturePage() {
  const router = useRouter()
  const [resultados, setResultados] = useState<Record<string, Resultado>>({})
  const [faseActiva, setFaseActiva] = useState<string>('grupos')
  const [grupoActivo, setGrupoActivo] = useState('A')
  const [guardado, setGuardado] = useState(false)
  const [usuario, setUsuario] = useState('')
  const [mounted, setMounted] = useState(false)
  const [showShare, setShowShare] = useState(false)

  useEffect(() => {
    setMounted(true)
    setResultados(cargarResultados())
    setUsuario(cargarUsuario())
  }, [])

  const handleScore = useCallback((partidoId: string, lado: 'local' | 'visitante', valor: string) => {
    const num = valor === '' ? null : Math.max(0, Math.min(99, parseInt(valor) || 0))
    setResultados(prev => {
      const nuevo = {
        ...prev,
        [partidoId]: {
          partido_id: partidoId,
          goles_local:    lado === 'local'    ? num : (prev[partidoId]?.goles_local    ?? null),
          goles_visitante: lado === 'visitante' ? num : (prev[partidoId]?.goles_visitante ?? null),
        }
      }
      guardarResultados(nuevo)
      return nuevo
    })
    setGuardado(true)
    setTimeout(() => setGuardado(false), 1500)
  }, [])

  const getEquipo = (codigo: string) => EQUIPOS.find(e => e.codigo === codigo)

  const partidosFase = faseActiva === 'grupos'
    ? PARTIDOS_GRUPOS.filter(p => p.grupo === grupoActivo)
    : PARTIDOS_ELIMINATORIOS.filter(p => p.fase === faseActiva)

  const totalCompletados = Object.values(resultados).filter(
    r => r.goles_local !== null && r.goles_visitante !== null
  ).length

  const handleCompartir = async () => {
    const url = generarURLCompartir(resultados)
    const texto = `🍊 Mi Prode Plum Mundial 2026\n⚽ ${totalCompletados} partidos pronosticados\n${url}`
    if (navigator.share) {
      await navigator.share({ title: 'Mi Prode Plum Mundial', text: texto, url })
    } else {
      navigator.clipboard.writeText(url)
      setShowShare(true)
      setTimeout(() => setShowShare(false), 2500)
    }
  }

  if (!mounted) return <LoadingScreen />

  return (
    <main className="min-h-dvh bg-plum-dark flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-plum-dark/95 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => router.push('/')} className="p-2 rounded-xl bg-white/10 text-white/70">
            <Home className="w-4 h-4" />
          </button>
          <div className="text-center">
            <div className="font-display text-xl text-white leading-none">PLUM MUNDIAL</div>
            {usuario && <div className="text-xs text-white/40">{usuario}</div>}
          </div>
          <div className="flex gap-2">
            <button onClick={() => router.push('/tabla')} className="p-2 rounded-xl bg-white/10 text-white/70">
              <BarChart2 className="w-4 h-4" />
            </button>
            <button onClick={handleCompartir} className="p-2 rounded-xl bg-plum-orange/20 text-plum-orange">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-4 pb-3">
          <div className="flex items-center justify-between text-xs text-white/40 mb-1">
            <span>{totalCompletados} partidos completados</span>
            <span>{PARTIDOS_GRUPOS.length + PARTIDOS_ELIMINATORIOS.length} totales</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(totalCompletados / (PARTIDOS_GRUPOS.length + PARTIDOS_ELIMINATORIOS.length)) * 100}%`,
                background: 'linear-gradient(90deg, #FF6B00, #C2185B)'
              }}
            />
          </div>
        </div>

        {/* Tabs de fases */}
        <div className="flex gap-1.5 px-4 pb-3 overflow-x-auto scrollbar-hide">
          {FASES_ORDEN.map(fase => (
            <button
              key={fase}
              onClick={() => setFaseActiva(fase)}
              className={`whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-bold transition-all flex-shrink-0 ${
                faseActiva === fase ? 'tab-active' : 'bg-white/10 text-white/50 hover:bg-white/15'
              }`}
            >
              {fase === 'grupos' ? '⚽ Grupos' :
               fase === 'dieciseisavos' ? '🔱 16avos' :
               fase === 'octavos' ? '⚡ Octavos' :
               fase === 'cuartos' ? '🔥 Cuartos' :
               fase === 'semifinal' ? '🌟 Semis' :
               fase === 'tercero' ? '🥉 3° Puesto' : '🏆 Final'}
            </button>
          ))}
        </div>

        {/* Sub-tabs grupos */}
        {faseActiva === 'grupos' && (
          <div className="flex gap-1.5 px-4 pb-3 overflow-x-auto">
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
        )}
      </header>

      {/* Contenido */}
      <div className="flex-1 px-4 py-4 space-y-3 pb-24">
        {faseActiva === 'grupos' && (
          <div className="text-center mb-2">
            <span className="font-display text-2xl text-white/80">GRUPO {grupoActivo}</span>
          </div>
        )}

        {faseActiva !== 'grupos' && (
          <div className="text-center mb-2">
            <span className="font-display text-2xl text-white/80">
              {FASE_LABELS[faseActiva]}
            </span>
          </div>
        )}

        {partidosFase.map(partido => (
          <MatchCard
            key={partido.id}
            partido={partido}
            resultado={resultados[partido.id]}
            getEquipo={getEquipo}
            onScore={handleScore}
          />
        ))}
      </div>

      {/* Toast guardado */}
      {guardado && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white rounded-2xl px-4 py-2 flex items-center gap-2 text-sm font-bold animate-pop shadow-lg">
          <Check className="w-4 h-4" />
          Guardado automáticamente
        </div>
      )}

      {/* Toast compartir */}
      {showShare && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-plum-orange text-white rounded-2xl px-4 py-2 flex items-center gap-2 text-sm font-bold animate-pop shadow-lg">
          <Share2 className="w-4 h-4" />
          ¡Link copiado!
        </div>
      )}

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-plum-dark/95 backdrop-blur-md border-t border-white/10 safe-bottom">
        <div className="flex items-center justify-around px-4 py-3 max-w-md mx-auto">
          <NavBtn icon="🏠" label="Inicio" onClick={() => router.push('/')} />
          <NavBtn icon="⚽" label="Fixture" active />
          <NavBtn icon="📊" label="Tabla" onClick={() => router.push('/tabla')} />
          <NavBtn icon="🔗" label="Compartir" onClick={handleCompartir} />
        </div>
      </nav>
    </main>
  )
}

function MatchCard({ partido, resultado, getEquipo, onScore }: {
  partido: Partido
  resultado?: Resultado
  getEquipo: (c: string) => any
  onScore: (id: string, lado: 'local' | 'visitante', val: string) => void
}) {
  const local = getEquipo(partido.local)
  const visit = getEquipo(partido.visitante)
  const completado = resultado?.goles_local !== null && resultado?.goles_visitante !== null
    && resultado?.goles_local !== undefined && resultado?.goles_visitante !== undefined

  const gl = resultado?.goles_local
  const gv = resultado?.goles_visitante
  const ganadorLocal = gl !== null && gl !== undefined && gv !== null && gv !== undefined && gl > gv
  const ganadorVisit = gl !== null && gl !== undefined && gv !== null && gv !== undefined && gv > gl

  return (
    <div className={`match-card p-4 ${completado ? 'completed' : ''}`}>
      {/* Fecha y estadio */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-white/40 font-medium">{partido.fecha} · {partido.hora}</span>
        <span className="text-xs text-white/30 truncate ml-2 max-w-[140px]">{partido.estadio}</span>
      </div>

      {/* Equipos y marcador */}
      <div className="flex items-center gap-3">
        {/* Local */}
        <div className={`flex-1 text-right transition-all ${ganadorLocal ? 'opacity-100' : ganadorVisit ? 'opacity-40' : 'opacity-100'}`}>
          <div className="text-2xl mb-1">{local?.bandera || '🏳️'}</div>
          <div className="text-white text-xs font-bold leading-tight">
            {local?.nombre || partido.local}
          </div>
        </div>

        {/* Score */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <input
            type="number"
            min="0" max="99"
            value={gl ?? ''}
            onChange={e => onScore(partido.id, 'local', e.target.value)}
            className={`score-input ${completado ? 'filled' : ''}`}
            placeholder="-"
          />
          <span className="text-white/30 font-display text-xl">:</span>
          <input
            type="number"
            min="0" max="99"
            value={gv ?? ''}
            onChange={e => onScore(partido.id, 'visitante', e.target.value)}
            className={`score-input ${completado ? 'filled' : ''}`}
            placeholder="-"
          />
        </div>

        {/* Visitante */}
        <div className={`flex-1 text-left transition-all ${ganadorVisit ? 'opacity-100' : ganadorLocal ? 'opacity-40' : 'opacity-100'}`}>
          <div className="text-2xl mb-1">{visit?.bandera || '🏳️'}</div>
          <div className="text-white text-xs font-bold leading-tight">
            {visit?.nombre || partido.visitante}
          </div>
        </div>
      </div>

      {/* Indicador completado */}
      {completado && (
        <div className="mt-2 flex justify-center">
          <span className="text-xs text-yellow-400/70 flex items-center gap-1">
            <Check className="w-3 h-3" /> Guardado
          </span>
        </div>
      )}
    </div>
  )
}

function NavBtn({ icon, label, onClick, active }: { icon: string; label: string; onClick?: () => void; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all ${active ? 'text-plum-orange' : 'text-white/40'}`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-xs font-semibold">{label}</span>
    </button>
  )
}

function LoadingScreen() {
  return (
    <main className="min-h-dvh bg-plum-dark flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl animate-float mb-4">⚽</div>
        <div className="font-display text-2xl text-white/50">Cargando fixture...</div>
      </div>
    </main>
  )
}
