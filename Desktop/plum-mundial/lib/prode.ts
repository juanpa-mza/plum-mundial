import { EQUIPOS, PARTIDOS_GRUPOS, type Resultado } from '@/data/fixture'

const KEY_RESULTADOS = 'plum_mundial_resultados'
const KEY_USER = 'plum_mundial_user'

// ── Persistencia ──────────────────────────────────────────────
export function guardarResultados(resultados: Record<string, Resultado>) {
  localStorage.setItem(KEY_RESULTADOS, JSON.stringify(resultados))
}

export function cargarResultados(): Record<string, Resultado> {
  if (typeof window === 'undefined') return {}
  const raw = localStorage.getItem(KEY_RESULTADOS)
  return raw ? JSON.parse(raw) : {}
}

export function guardarUsuario(nombre: string) {
  localStorage.setItem(KEY_USER, nombre)
}

export function cargarUsuario(): string {
  if (typeof window === 'undefined') return ''
  return localStorage.getItem(KEY_USER) || ''
}

// ── Tabla de posiciones ───────────────────────────────────────
export type PosicionEquipo = {
  codigo: string
  nombre: string
  bandera: string
  grupo: string
  PJ: number // partidos jugados
  PG: number // ganados
  PE: number // empatados
  PP: number // perdidos
  GF: number // goles a favor
  GC: number // goles en contra
  DG: number // diferencia de gol
  PTS: number // puntos
}

export function calcularTabla(
  grupo: string,
  resultados: Record<string, Resultado>
): PosicionEquipo[] {
  const equipos = EQUIPOS.filter(e => e.grupo === grupo)
  const partidos = PARTIDOS_GRUPOS.filter(p => p.grupo === grupo)

  const tabla: Record<string, PosicionEquipo> = {}
  equipos.forEach(e => {
    tabla[e.codigo] = { ...e, PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, DG: 0, PTS: 0 }
  })

  partidos.forEach(p => {
    const res = resultados[p.id]
    if (!res || res.goles_local === null || res.goles_visitante === null) return

    const gl = res.goles_local
    const gv = res.goles_visitante
    const local = tabla[p.local]
    const visit = tabla[p.visitante]
    if (!local || !visit) return

    local.PJ++; visit.PJ++
    local.GF += gl; local.GC += gv
    visit.GF += gv; visit.GC += gl
    local.DG = local.GF - local.GC
    visit.DG = visit.GF - visit.GC

    if (gl > gv) {
      local.PG++; local.PTS += 3
      visit.PP++
    } else if (gl < gv) {
      visit.PG++; visit.PTS += 3
      local.PP++
    } else {
      local.PE++; local.PTS++
      visit.PE++; visit.PTS++
    }
  })

  return Object.values(tabla).sort((a, b) =>
    b.PTS - a.PTS || b.DG - a.DG || b.GF - a.GF
  )
}

// ── Compartir ──────────────────────────────────────────────────
export function generarTextoCompartir(
  nombre: string,
  resultados: Record<string, Resultado>
): string {
  const total = Object.keys(resultados).length
  const texto = `🍊 ${nombre || 'Mi'} Prode - Plum Mundial 2026\n` +
    `⚽ ${total} partidos pronosticados\n` +
    `🔗 ${window.location.origin}\n\n` +
    `¡Viví el Mundial con Plum! 🟠🟣`
  return texto
}

export function generarURLCompartir(resultados: Record<string, Resultado>): string {
  const encoded = btoa(encodeURIComponent(JSON.stringify(resultados)))
  return `${window.location.origin}?prode=${encoded}`
}
