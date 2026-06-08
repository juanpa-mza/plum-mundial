'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { PARTIDOS_GRUPOS, PARTIDOS_ELIMINATORIOS, EQUIPOS, FASE_LABELS, type Partido, type Resultado } from '@/data/fixture'
import { cargarResultados, guardarResultados, cargarUsuario, generarURLCompartir } from '@/lib/prode'
import { Home, BarChart2, Share2, Check, Edit2 } from 'lucide-react'

const FASES_ORDEN = ['grupos', 'dieciseisavos', 'octavos', 'cuartos', 'semifinal', 'tercero', 'final'] as const

// Mapa de banderas para fases eliminatorias
const BANDERAS: Record<string, string> = {
  // Grupos
  '1A':'🇲🇽','2A':'🇲🇽','1B':'🇨🇦','2B':'🇨🇦','1C':'🇧🇷','2C':'🇧🇷',
  '1D':'🇺🇸','2D':'🇺🇸','1E':'🇩🇪','2E':'🇩🇪','1F':'🇳🇱','2F':'🇳🇱',
  '1G':'🇮🇷','2G':'🇮🇷','1H':'🇪🇸','2H':'🇪🇸','1I':'🇫🇷','2I':'🇫🇷',
  '1J':'🇦🇷','2J':'🇦🇷','1K':'🇵🇹','2K':'🇵🇹','1L':'🏴󠁧󠁢󠁥󠁮󠁧󠁿','2L':'🏴󠁧󠁢󠁥󠁮󠁧󠁿',
}

function getBandera(codigo: string, equiposPersonalizados: Record<string, string>): string {
  if (equiposPersonalizados[codigo]) return ''
  const eq = EQUIPOS.find(e => e.codigo === codigo)
  if (eq) return eq.bandera
  return BANDERAS[codigo] || '🏳️'
}

export default function FixturePage() {
  const router = useRouter()
  const [resultados, setResultados] = useState<Record<string, Resultado>>({})
  const [equiposPersonalizados, setEquiposPersonalizados] = useState<Record<string, string>>({})
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
    const saved = localStorage.getItem('plum_equipos_custom')
    if (saved) setEquiposPersonalizados(JSON.parse(saved))
  }, [])

  const handleScore = useCallback((partidoId: string, lado: 'local' | 'visitante' | 'penales_local' | 'penales_visitante', valor: string) => {
    const num = valor === '' ? null : Math.max(0, Math.min(99, parseInt(valor) || 0))
    setResultados(prev => {
      const actual = prev[partidoId] || { partido_id: partidoId, goles_local: null, goles_visitante: null }
      const nuevo = {
        ...prev,
        [partidoId]: {
          ...actual,
          partido_id: partidoId,
          goles_local:        lado === 'local'             ? num : actual.goles_local,
          goles_visitante:    lado === 'visitante'         ? num : actual.goles_visitante,
          penales_local:      lado === 'penales_local'     ? num : (actual as any).penales_local     ?? null,
          penales_visitante:  lado === 'penales_visitante' ? num : (actual as any).penales_visitante ?? null,
        }
      }
      guardarResultados(nuevo)
      return nuevo
    })
    setGuardado(true)
    setTimeout(() => setGuardado(false), 1500)
  }, [])

  const handleEquipoPersonalizado = useCallback((key: string, valor: string) => {
    setEquiposPersonalizados(prev => {
      const nuevo = { ...prev, [key]: valor }
      localStorage.setItem('plum_equipos_custom', JSON.stringify(nuevo))
      return nuevo
    })
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
    const texto = `🍊 Mi Fixture Plum Mundial 2026\n⚽ ${totalCompletados} partidos completados\n${url}`
    if (navigator.share) {
      await navigator.share({ title: 'Mi Fixture Plum Mundial', text: texto, url })
    } else {
      navigator.clipboard.writeText(url)
      setShowShare(true)
      setTimeout(() => setShowShare(false), 2500)
    }
  }

  if (!mounted) return <LoadingScreen />

  const esEliminatoria = faseActiva !== 'grupos'

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
        <div className="flex gap-1.5 px-4 pb-3 overflow-x-auto">
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
        <div className="text-center mb-2">
          <span className="font-display text-2xl text-white/80">
            {faseActiva === 'grupos' ? `GRUPO ${grupoActivo}` : FASE_LABELS[faseActiva]}
          </span>
        </div>

        {esEliminatoria && (
          <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 text-xs text-white/40 border border-white/10">
            <Edit2 className="w-3 h-3 flex-shrink-0" />
            Tocá el nombre del equipo para editarlo
          </div>
        )}

        {partidosFase.map(partido => (
          esEliminatoria ? (
            <EliminatoriaCard
              key={partido.id}
              partido={partido}
              resultado={resultados[partido.id]}
              equiposPersonalizados={equiposPersonalizados}
              onScore={handleScore}
              onEquipo={handleEquipoPersonalizado}
              getBandera={getBandera}
            />
          ) : (
            <MatchCard
              key={partido.id}
              partido={partido}
              resultado={resultados[partido.id]}
              getEquipo={getEquipo}
              onScore={handleScore}
            />
          )
        ))}
      </div>

      {guardado && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white rounded-2xl px-4 py-2 flex items-center gap-2 text-sm font-bold animate-pop shadow-lg">
          <Check className="w-4 h-4" />
          Guardado automáticamente
        </div>
      )}

      {showShare && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-plum-orange text-white rounded-2xl px-4 py-2 flex items-center gap-2 text-sm font-bold animate-pop shadow-lg">
          <Share2 className="w-4 h-4" />
          ¡Link copiado!
        </div>
      )}

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-plum-dark/95 backdrop-blur-md border-t border-white/10 safe-bottom">
        <div className="flex items-center justify-around px-4 py-3 max-w-md mx-auto">
          <NavBtn icon="🏠" label="Inicio"    onClick={() => router.push('/')} />
          <NavBtn icon="⚽" label="Fixture"   active />
          <NavBtn icon="📊" label="Tabla"     onClick={() => router.push('/tabla')} />
          <NavBtn icon="🔗" label="Compartir" onClick={handleCompartir} />
        </div>
      </nav>
    </main>
  )
}

// ── Tarjeta para fase de grupos ────────────────────────────────────────────
function MatchCard({ partido, resultado, getEquipo, onScore }: {
  partido: Partido
  resultado?: Resultado
  getEquipo: (c: string) => any
  onScore: (id: string, lado: 'local' | 'visitante', val: string) => void
}) {
  const local = getEquipo(partido.local)
  const visit = getEquipo(partido.visitante)
  const gl = resultado?.goles_local
  const gv = resultado?.goles_visitante
  const completado = gl !== null && gl !== undefined && gv !== null && gv !== undefined
  const ganadorLocal = completado && gl > gv
  const ganadorVisit = completado && gv > gl

  return (
    <div className={`match-card p-4 ${completado ? 'completed' : ''}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-white/40 font-medium">
          P{partido.numero} · {partido.fecha} · {partido.hora}
        </span>
        <span className="text-xs text-white/30 truncate ml-2 max-w-[150px]">{partido.estadio}</span>
      </div>

      <div className="flex items-center gap-3">
        <div className={`flex-1 text-right transition-all ${ganadorLocal ? 'opacity-100' : ganadorVisit ? 'opacity-40' : 'opacity-100'}`}>
          <div className="text-2xl mb-1">{local?.bandera || '🏳️'}</div>
          <div className="text-white text-xs font-bold leading-tight">{local?.nombre || partido.local}</div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <input
            type="number" min="0" max="99"
            value={gl ?? ''}
            onChange={e => onScore(partido.id, 'local', e.target.value)}
            className={`score-input ${completado ? 'filled' : ''}`}
            placeholder="-"
          />
          <span className="text-white/30 font-display text-xl">:</span>
          <input
            type="number" min="0" max="99"
            value={gv ?? ''}
            onChange={e => onScore(partido.id, 'visitante', e.target.value)}
            className={`score-input ${completado ? 'filled' : ''}`}
            placeholder="-"
          />
        </div>

        <div className={`flex-1 text-left transition-all ${ganadorVisit ? 'opacity-100' : ganadorLocal ? 'opacity-40' : 'opacity-100'}`}>
          <div className="text-2xl mb-1">{visit?.bandera || '🏳️'}</div>
          <div className="text-white text-xs font-bold leading-tight">{visit?.nombre || partido.visitante}</div>
        </div>
      </div>

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

// ── Tarjeta para fases eliminatorias (con edición de equipos) ──────────────
function EliminatoriaCard({ partido, resultado, equiposPersonalizados, onScore, onEquipo, getBandera }: {
  partido: Partido
  resultado?: Resultado
  equiposPersonalizados: Record<string, string>
  onScore: (id: string, lado: 'local' | 'visitante', val: string) => void
  onEquipo: (key: string, valor: string) => void
  getBandera: (codigo: string, custom: Record<string, string>) => string
}) {
  const keyLocal = `${partido.id}_local`
  const keyVisit = `${partido.id}_visitante`
  const nombreLocal    = equiposPersonalizados[keyLocal]    || partido.local
  const nombreVisitante = equiposPersonalizados[keyVisit]   || partido.visitante
  const banderaLocal   = getBandera(equiposPersonalizados[keyLocal]    ? '_custom' : partido.local,    equiposPersonalizados)
  const banderaVisit   = getBandera(equiposPersonalizados[keyVisit]    ? '_custom' : partido.visitante, equiposPersonalizados)

  const equipoLocal = EQUIPOS.find(e => e.nombre === equiposPersonalizados[keyLocal])
  const equipoVisit = EQUIPOS.find(e => e.nombre === equiposPersonalizados[keyVisit])

  const gl = resultado?.goles_local
  const gv = resultado?.goles_visitante
  const pl = (resultado as any)?.penales_local
  const pv = (resultado as any)?.penales_visitante
  const completado = gl !== null && gl !== undefined && gv !== null && gv !== undefined
  const empate = completado && gl === gv
  const ganadorLocal = completado && (gl > gv || (empate && pl !== null && pl !== undefined && pv !== null && pv !== undefined && pl > pv))
  const ganadorVisit = completado && (gv > gl || (empate && pl !== null && pl !== undefined && pv !== null && pv !== undefined && pv > pl))

  return (
    <div className={`match-card p-4 ${completado ? 'completed' : ''}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-white/40 font-medium">
          P{partido.numero} · {partido.fecha} · {partido.hora}
        </span>
        <span className="text-xs text-white/30 truncate ml-2 max-w-[150px]">{partido.estadio}</span>
      </div>

      <div className="flex items-center gap-2">
        {/* Equipo local */}
        <div className={`flex-1 text-right transition-all ${ganadorLocal ? 'opacity-100' : ganadorVisit ? 'opacity-40' : 'opacity-100'}`}>
          <div className="text-2xl mb-1">
            {equipoLocal?.bandera || EQUIPOS.find(e => e.nombre === nombreLocal)?.bandera || '🏳️'}
          </div>
          <input
            type="text"
            value={equiposPersonalizados[keyLocal] || ''}
            onChange={e => onEquipo(keyLocal, e.target.value)}
            placeholder={partido.local}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-white text-xs font-bold text-right focus:outline-none focus:border-plum-orange transition-colors placeholder-white/20"
          />
        </div>

        {/* Score */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <input
            type="number" min="0" max="99"
            value={gl ?? ''}
            onChange={e => onScore(partido.id, 'local', e.target.value)}
            className={`score-input ${completado ? 'filled' : ''}`}
            placeholder="-"
          />
          <span className="text-white/30 font-display text-xl">:</span>
          <input
            type="number" min="0" max="99"
            value={gv ?? ''}
            onChange={e => onScore(partido.id, 'visitante', e.target.value)}
            className={`score-input ${completado ? 'filled' : ''}`}
            placeholder="-"
          />
        </div>

        {/* Equipo visitante */}
        <div className={`flex-1 text-left transition-all ${ganadorVisit ? 'opacity-100' : ganadorLocal ? 'opacity-40' : 'opacity-100'}`}>
          <div className="text-2xl mb-1">
            {equipoVisit?.bandera || EQUIPOS.find(e => e.nombre === nombreVisitante)?.bandera || '🏳️'}
          </div>
          <input
            type="text"
            value={equiposPersonalizados[keyVisit] || ''}
            onChange={e => onEquipo(keyVisit, e.target.value)}
            placeholder={partido.visitante}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-white text-xs font-bold text-left focus:outline-none focus:border-plum-orange transition-colors placeholder-white/20"
          />
        </div>
      </div>

      {/* Penales — aparecen solo si hay empate */}
      {empate && (
        <div className="mt-3 flex items-center justify-center gap-3 animate-slide-up">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl px-3 py-2 flex items-center gap-3">
            <span className="text-xs text-yellow-400/80 font-bold uppercase tracking-wider">🥅 Penales</span>
            <input
              type="number" min="0" max="20"
              value={pl ?? ''}
              onChange={e => onScore(partido.id, 'penales_local', e.target.value)}
              placeholder="-"
              className="score-input"
              style={{ borderColor: '#eab308', background: 'rgba(234,179,8,0.12)', color: '#fde047', width: '44px', height: '44px', fontSize: '1.1rem' }}
            />
            <span className="text-yellow-500/50 font-display text-lg">-</span>
            <input
              type="number" min="0" max="20"
              value={pv ?? ''}
              onChange={e => onScore(partido.id, 'penales_visitante', e.target.value)}
              placeholder="-"
              className="score-input"
              style={{ borderColor: '#eab308', background: 'rgba(234,179,8,0.12)', color: '#fde047', width: '44px', height: '44px', fontSize: '1.1rem' }}
            />
          </div>
        </div>
      )}

      {/* Sugerencias de equipos */}
      <TeamSuggest
        keyField={keyLocal}
        valor={equiposPersonalizados[keyLocal] || ''}
        onSelect={(nombre) => onEquipo(keyLocal, nombre)}
      />

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

// ── Sugerencias de autocompletado ──────────────────────────────────────────
function TeamSuggest({ keyField, valor, onSelect }: {
  keyField: string
  valor: string
  onSelect: (nombre: string) => void
}) {
  if (!valor || valor.length < 2) return null
  const sugerencias = EQUIPOS.filter(e =>
    e.nombre.toLowerCase().includes(valor.toLowerCase()) && e.nombre !== valor
  ).slice(0, 4)
  if (!sugerencias.length) return null

  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {sugerencias.map(e => (
        <button
          key={e.codigo}
          onClick={() => onSelect(e.nombre)}
          className="flex items-center gap-1 bg-white/10 hover:bg-plum-orange/20 border border-white/10 hover:border-plum-orange/40 rounded-lg px-2 py-1 text-xs text-white/70 hover:text-white transition-all"
        >
          {e.bandera} {e.nombre}
        </button>
      ))}
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
