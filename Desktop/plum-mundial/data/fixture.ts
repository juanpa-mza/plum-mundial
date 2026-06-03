export type Equipo = {
  codigo: string
  nombre: string
  bandera: string
  grupo: string
}

export type Partido = {
  id: string
  fase: 'grupos' | 'octavos' | 'cuartos' | 'semifinal' | 'final' | 'tercero'
  grupo?: string
  fecha: string
  hora: string
  local: string
  visitante: string
  estadio: string
  jornada?: number
}

export type Resultado = {
  partido_id: string
  goles_local: number | null
  goles_visitante: number | null
}

// Equipos Mundial 2026 (48 equipos, 12 grupos)
export const EQUIPOS: Equipo[] = [
  // Grupo A
  { codigo: 'USA', nombre: 'Estados Unidos', bandera: '🇺🇸', grupo: 'A' },
  { codigo: 'MEX', nombre: 'México',         bandera: '🇲🇽', grupo: 'A' },
  { codigo: 'CAN', nombre: 'Canadá',         bandera: '🇨🇦', grupo: 'A' },
  { codigo: 'URU', nombre: 'Uruguay',        bandera: '🇺🇾', grupo: 'A' },
  // Grupo B
  { codigo: 'ARG', nombre: 'Argentina',      bandera: '🇦🇷', grupo: 'B' },
  { codigo: 'CHI', nombre: 'Chile',          bandera: '🇨🇱', grupo: 'B' },
  { codigo: 'PER', nombre: 'Perú',           bandera: '🇵🇪', grupo: 'B' },
  { codigo: 'AUS', nombre: 'Australia',      bandera: '🇦🇺', grupo: 'B' },
  // Grupo C
  { codigo: 'ESP', nombre: 'España',         bandera: '🇪🇸', grupo: 'C' },
  { codigo: 'POR', nombre: 'Portugal',       bandera: '🇵🇹', grupo: 'C' },
  { codigo: 'MAR', nombre: 'Marruecos',      bandera: '🇲🇦', grupo: 'C' },
  { codigo: 'CRC', nombre: 'Costa Rica',     bandera: '🇨🇷', grupo: 'C' },
  // Grupo D
  { codigo: 'FRA', nombre: 'Francia',        bandera: '🇫🇷', grupo: 'D' },
  { codigo: 'BEL', nombre: 'Bélgica',        bandera: '🇧🇪', grupo: 'D' },
  { codigo: 'POL', nombre: 'Polonia',        bandera: '🇵🇱', grupo: 'D' },
  { codigo: 'TUN', nombre: 'Túnez',          bandera: '🇹🇳', grupo: 'D' },
  // Grupo E
  { codigo: 'ALE', nombre: 'Alemania',       bandera: '🇩🇪', grupo: 'E' },
  { codigo: 'HOL', nombre: 'Países Bajos',   bandera: '🇳🇱', grupo: 'E' },
  { codigo: 'DIN', nombre: 'Dinamarca',      bandera: '🇩🇰', grupo: 'E' },
  { codigo: 'SER', nombre: 'Serbia',         bandera: '🇷🇸', grupo: 'E' },
  // Grupo F
  { codigo: 'BRA', nombre: 'Brasil',         bandera: '🇧🇷', grupo: 'F' },
  { codigo: 'COL', nombre: 'Colombia',       bandera: '🇨🇴', grupo: 'F' },
  { codigo: 'ECU', nombre: 'Ecuador',        bandera: '🇪🇨', grupo: 'F' },
  { codigo: 'PAR', nombre: 'Paraguay',       bandera: '🇵🇾', grupo: 'F' },
  // Grupo G
  { codigo: 'ING', nombre: 'Inglaterra',     bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grupo: 'G' },
  { codigo: 'CRO', nombre: 'Croacia',        bandera: '🇭🇷', grupo: 'G' },
  { codigo: 'ALB', nombre: 'Albania',        bandera: '🇦🇱', grupo: 'G' },
  { codigo: 'NGA', nombre: 'Nigeria',        bandera: '🇳🇬', grupo: 'G' },
  // Grupo H
  { codigo: 'ITA', nombre: 'Italia',         bandera: '🇮🇹', grupo: 'H' },
  { codigo: 'SUE', nombre: 'Suecia',         bandera: '🇸🇪', grupo: 'H' },
  { codigo: 'UKR', nombre: 'Ucrania',        bandera: '🇺🇦', grupo: 'H' },
  { codigo: 'CAM', nombre: 'Camerún',        bandera: '🇨🇲', grupo: 'H' },
  // Grupo I
  { codigo: 'JPN', nombre: 'Japón',          bandera: '🇯🇵', grupo: 'I' },
  { codigo: 'COR', nombre: 'Corea del Sur',  bandera: '🇰🇷', grupo: 'I' },
  { codigo: 'IND', nombre: 'Indonesia',      bandera: '🇮🇩', grupo: 'I' },
  { codigo: 'SAU', nombre: 'Arabia Saudita', bandera: '🇸🇦', grupo: 'I' },
  // Grupo J
  { codigo: 'POR2', nombre: 'Portugal',      bandera: '🇵🇹', grupo: 'J' },
  { codigo: 'TUR', nombre: 'Turquía',        bandera: '🇹🇷', grupo: 'J' },
  { codigo: 'GEO', nombre: 'Georgia',        bandera: '🇬🇪', grupo: 'J' },
  { codigo: 'SEN', nombre: 'Senegal',        bandera: '🇸🇳', grupo: 'J' },
  // Grupo K
  { codigo: 'SUL', nombre: 'Suiza',          bandera: '🇨🇭', grupo: 'K' },
  { codigo: 'AUT', nombre: 'Austria',        bandera: '🇦🇹', grupo: 'K' },
  { codigo: 'ESC', nombre: 'Escocia',        bandera: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', grupo: 'K' },
  { codigo: 'KAZ', nombre: 'Kazajistán',     bandera: '🇰🇿', grupo: 'K' },
  // Grupo L
  { codigo: 'MEX2', nombre: 'México',        bandera: '🇲🇽', grupo: 'L' },
  { codigo: 'EGY', nombre: 'Egipto',         bandera: '🇪🇬', grupo: 'L' },
  { codigo: 'GHA', nombre: 'Ghana',          bandera: '🇬🇭', grupo: 'L' },
  { codigo: 'NZL', nombre: 'Nueva Zelanda',  bandera: '🇳🇿', grupo: 'L' },
]

// Partidos fase de grupos (simplificado — 4 grupos como demo funcional)
export const PARTIDOS_GRUPOS: Partido[] = [
  // GRUPO A
  { id: 'A1', fase: 'grupos', grupo: 'A', fecha: '11 Jun', hora: '15:00', local: 'USA', visitante: 'URU', estadio: 'SoFi Stadium', jornada: 1 },
  { id: 'A2', fase: 'grupos', grupo: 'A', fecha: '11 Jun', hora: '18:00', local: 'MEX', visitante: 'CAN', estadio: 'Rose Bowl', jornada: 1 },
  { id: 'A3', fase: 'grupos', grupo: 'A', fecha: '15 Jun', hora: '15:00', local: 'USA', visitante: 'MEX', estadio: 'MetLife Stadium', jornada: 2 },
  { id: 'A4', fase: 'grupos', grupo: 'A', fecha: '15 Jun', hora: '18:00', local: 'URU', visitante: 'CAN', estadio: 'Levi\'s Stadium', jornada: 2 },
  { id: 'A5', fase: 'grupos', grupo: 'A', fecha: '19 Jun', hora: '18:00', local: 'USA', visitante: 'CAN', estadio: 'AT&T Stadium', jornada: 3 },
  { id: 'A6', fase: 'grupos', grupo: 'A', fecha: '19 Jun', hora: '18:00', local: 'MEX', visitante: 'URU', estadio: 'Arrowhead Stadium', jornada: 3 },
  // GRUPO B
  { id: 'B1', fase: 'grupos', grupo: 'B', fecha: '12 Jun', hora: '15:00', local: 'ARG', visitante: 'AUS', estadio: 'MetLife Stadium', jornada: 1 },
  { id: 'B2', fase: 'grupos', grupo: 'B', fecha: '12 Jun', hora: '18:00', local: 'CHI', visitante: 'PER', estadio: 'Rose Bowl', jornada: 1 },
  { id: 'B3', fase: 'grupos', grupo: 'B', fecha: '16 Jun', hora: '15:00', local: 'ARG', visitante: 'CHI', estadio: 'AT&T Stadium', jornada: 2 },
  { id: 'B4', fase: 'grupos', grupo: 'B', fecha: '16 Jun', hora: '18:00', local: 'AUS', visitante: 'PER', estadio: 'SoFi Stadium', jornada: 2 },
  { id: 'B5', fase: 'grupos', grupo: 'B', fecha: '20 Jun', hora: '18:00', local: 'ARG', visitante: 'PER', estadio: 'Levi\'s Stadium', jornada: 3 },
  { id: 'B6', fase: 'grupos', grupo: 'B', fecha: '20 Jun', hora: '18:00', local: 'CHI', visitante: 'AUS', estadio: 'Arrowhead Stadium', jornada: 3 },
  // GRUPO C
  { id: 'C1', fase: 'grupos', grupo: 'C', fecha: '12 Jun', hora: '12:00', local: 'ESP', visitante: 'CRC', estadio: 'SoFi Stadium', jornada: 1 },
  { id: 'C2', fase: 'grupos', grupo: 'C', fecha: '12 Jun', hora: '21:00', local: 'POR', visitante: 'MAR', estadio: 'MetLife Stadium', jornada: 1 },
  { id: 'C3', fase: 'grupos', grupo: 'C', fecha: '16 Jun', hora: '12:00', local: 'ESP', visitante: 'POR', estadio: 'Rose Bowl', jornada: 2 },
  { id: 'C4', fase: 'grupos', grupo: 'C', fecha: '16 Jun', hora: '21:00', local: 'MAR', visitante: 'CRC', estadio: 'AT&T Stadium', jornada: 2 },
  { id: 'C5', fase: 'grupos', grupo: 'C', fecha: '20 Jun', hora: '21:00', local: 'ESP', visitante: 'MAR', estadio: 'SoFi Stadium', jornada: 3 },
  { id: 'C6', fase: 'grupos', grupo: 'C', fecha: '20 Jun', hora: '21:00', local: 'POR', visitante: 'CRC', estadio: 'Levi\'s Stadium', jornada: 3 },
  // GRUPO D
  { id: 'D1', fase: 'grupos', grupo: 'D', fecha: '13 Jun', hora: '15:00', local: 'FRA', visitante: 'TUN', estadio: 'AT&T Stadium', jornada: 1 },
  { id: 'D2', fase: 'grupos', grupo: 'D', fecha: '13 Jun', hora: '18:00', local: 'BEL', visitante: 'POL', estadio: 'Rose Bowl', jornada: 1 },
  { id: 'D3', fase: 'grupos', grupo: 'D', fecha: '17 Jun', hora: '15:00', local: 'FRA', visitante: 'BEL', estadio: 'MetLife Stadium', jornada: 2 },
  { id: 'D4', fase: 'grupos', grupo: 'D', fecha: '17 Jun', hora: '18:00', local: 'TUN', visitante: 'POL', estadio: 'SoFi Stadium', jornada: 2 },
  { id: 'D5', fase: 'grupos', grupo: 'D', fecha: '21 Jun', hora: '18:00', local: 'FRA', visitante: 'POL', estadio: 'Levi\'s Stadium', jornada: 3 },
  { id: 'D6', fase: 'grupos', grupo: 'D', fecha: '21 Jun', hora: '18:00', local: 'BEL', visitante: 'TUN', estadio: 'Arrowhead Stadium', jornada: 3 },
]

// Fases eliminatorias (con slots vacíos que se completan)
export const PARTIDOS_ELIMINATORIOS: Partido[] = [
  { id: 'R32_1',  fase: 'octavos',    fecha: '28 Jun', hora: '18:00', local: '1A', visitante: '2B', estadio: 'MetLife Stadium' },
  { id: 'R32_2',  fase: 'octavos',    fecha: '28 Jun', hora: '21:00', local: '1B', visitante: '2A', estadio: 'SoFi Stadium' },
  { id: 'R32_3',  fase: 'octavos',    fecha: '29 Jun', hora: '18:00', local: '1C', visitante: '2D', estadio: 'Rose Bowl' },
  { id: 'R32_4',  fase: 'octavos',    fecha: '29 Jun', hora: '21:00', local: '1D', visitante: '2C', estadio: 'AT&T Stadium' },
  { id: 'R32_5',  fase: 'octavos',    fecha: '30 Jun', hora: '18:00', local: '1E', visitante: '2F', estadio: 'Levi\'s Stadium' },
  { id: 'R32_6',  fase: 'octavos',    fecha: '30 Jun', hora: '21:00', local: '1F', visitante: '2E', estadio: 'Arrowhead Stadium' },
  { id: 'R32_7',  fase: 'octavos',    fecha: '01 Jul', hora: '18:00', local: '1G', visitante: '2H', estadio: 'MetLife Stadium' },
  { id: 'R32_8',  fase: 'octavos',    fecha: '01 Jul', hora: '21:00', local: '1H', visitante: '2G', estadio: 'SoFi Stadium' },
  { id: 'QF_1',   fase: 'cuartos',    fecha: '05 Jul', hora: '21:00', local: 'W R32_1', visitante: 'W R32_2', estadio: 'MetLife Stadium' },
  { id: 'QF_2',   fase: 'cuartos',    fecha: '06 Jul', hora: '21:00', local: 'W R32_3', visitante: 'W R32_4', estadio: 'Rose Bowl' },
  { id: 'QF_3',   fase: 'cuartos',    fecha: '07 Jul', hora: '21:00', local: 'W R32_5', visitante: 'W R32_6', estadio: 'AT&T Stadium' },
  { id: 'QF_4',   fase: 'cuartos',    fecha: '08 Jul', hora: '21:00', local: 'W R32_7', visitante: 'W R32_8', estadio: 'SoFi Stadium' },
  { id: 'SF_1',   fase: 'semifinal',  fecha: '14 Jul', hora: '21:00', local: 'W QF_1', visitante: 'W QF_2', estadio: 'MetLife Stadium' },
  { id: 'SF_2',   fase: 'semifinal',  fecha: '15 Jul', hora: '21:00', local: 'W QF_3', visitante: 'W QF_4', estadio: 'Rose Bowl' },
  { id: 'TER',    fase: 'tercero',    fecha: '18 Jul', hora: '18:00', local: 'L SF_1', visitante: 'L SF_2', estadio: 'AT&T Stadium' },
  { id: 'FINAL',  fase: 'final',      fecha: '19 Jul', hora: '21:00', local: 'W SF_1', visitante: 'W SF_2', estadio: 'MetLife Stadium' },
]

export const GRUPOS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

export const FASE_LABELS: Record<string, string> = {
  grupos:    '⚽ Fase de Grupos',
  octavos:   '⚡ Octavos de Final',
  cuartos:   '🔥 Cuartos de Final',
  semifinal: '🌟 Semifinales',
  tercero:   '🥉 Tercer Puesto',
  final:     '🏆 Gran Final',
}
