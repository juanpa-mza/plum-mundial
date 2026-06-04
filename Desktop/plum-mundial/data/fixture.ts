export type Equipo = {
  codigo: string
  nombre: string
  bandera: string
  grupo: string
}

export type Partido = {
  id: string
  fase: 'grupos' | 'dieciseisavos' | 'octavos' | 'cuartos' | 'semifinal' | 'final' | 'tercero'
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
  // DIECISEISAVOS (32 → 16) — 16 partidos
  { id: 'D16_1',  fase: 'dieciseisavos', fecha: '27 Jun', hora: '18:00', local: '1A', visitante: '3DEF', estadio: 'MetLife Stadium' },
  { id: 'D16_2',  fase: 'dieciseisavos', fecha: '27 Jun', hora: '21:00', local: '1C', visitante: '3ABF', estadio: 'SoFi Stadium' },
  { id: 'D16_3',  fase: 'dieciseisavos', fecha: '28 Jun', hora: '18:00', local: '1B', visitante: '3ACD', estadio: 'Rose Bowl' },
  { id: 'D16_4',  fase: 'dieciseisavos', fecha: '28 Jun', hora: '21:00', local: '1D', visitante: '3BCE', estadio: 'AT&T Stadium' },
  { id: 'D16_5',  fase: 'dieciseisavos', fecha: '29 Jun', hora: '18:00', local: '1E', visitante: '3GHI', estadio: 'Levi\'s Stadium' },
  { id: 'D16_6',  fase: 'dieciseisavos', fecha: '29 Jun', hora: '21:00', local: '1G', visitante: '3EFH', estadio: 'Arrowhead Stadium' },
  { id: 'D16_7',  fase: 'dieciseisavos', fecha: '30 Jun', hora: '18:00', local: '1F', visitante: '3IJK', estadio: 'MetLife Stadium' },
  { id: 'D16_8',  fase: 'dieciseisavos', fecha: '30 Jun', hora: '21:00', local: '1H', visitante: '3JKL', estadio: 'SoFi Stadium' },
  { id: 'D16_9',  fase: 'dieciseisavos', fecha: '01 Jul', hora: '18:00', local: '1I', visitante: '2L', estadio: 'Rose Bowl' },
  { id: 'D16_10', fase: 'dieciseisavos', fecha: '01 Jul', hora: '21:00', local: '1K', visitante: '2J', estadio: 'AT&T Stadium' },
  { id: 'D16_11', fase: 'dieciseisavos', fecha: '02 Jul', hora: '18:00', local: '1J', visitante: '2K', estadio: 'Levi\'s Stadium' },
  { id: 'D16_12', fase: 'dieciseisavos', fecha: '02 Jul', hora: '21:00', local: '1L', visitante: '2I', estadio: 'Arrowhead Stadium' },
  { id: 'D16_13', fase: 'dieciseisavos', fecha: '03 Jul', hora: '18:00', local: '2A', visitante: '2D', estadio: 'MetLife Stadium' },
  { id: 'D16_14', fase: 'dieciseisavos', fecha: '03 Jul', hora: '21:00', local: '2B', visitante: '2C', estadio: 'SoFi Stadium' },
  { id: 'D16_15', fase: 'dieciseisavos', fecha: '04 Jul', hora: '18:00', local: '2E', visitante: '2H', estadio: 'Rose Bowl' },
  { id: 'D16_16', fase: 'dieciseisavos', fecha: '04 Jul', hora: '21:00', local: '2F', visitante: '2G', estadio: 'AT&T Stadium' },

  // OCTAVOS (16 → 8) — 8 partidos
  { id: 'R16_1',  fase: 'octavos', fecha: '07 Jul', hora: '18:00', local: 'W D16_1', visitante: 'W D16_2', estadio: 'MetLife Stadium' },
  { id: 'R16_2',  fase: 'octavos', fecha: '07 Jul', hora: '21:00', local: 'W D16_3', visitante: 'W D16_4', estadio: 'SoFi Stadium' },
  { id: 'R16_3',  fase: 'octavos', fecha: '08 Jul', hora: '18:00', local: 'W D16_5', visitante: 'W D16_6', estadio: 'Rose Bowl' },
  { id: 'R16_4',  fase: 'octavos', fecha: '08 Jul', hora: '21:00', local: 'W D16_7', visitante: 'W D16_8', estadio: 'AT&T Stadium' },
  { id: 'R16_5',  fase: 'octavos', fecha: '09 Jul', hora: '18:00', local: 'W D16_9', visitante: 'W D16_10', estadio: 'Levi\'s Stadium' },
  { id: 'R16_6',  fase: 'octavos', fecha: '09 Jul', hora: '21:00', local: 'W D16_11', visitante: 'W D16_12', estadio: 'Arrowhead Stadium' },
  { id: 'R16_7',  fase: 'octavos', fecha: '10 Jul', hora: '18:00', local: 'W D16_13', visitante: 'W D16_14', estadio: 'MetLife Stadium' },
  { id: 'R16_8',  fase: 'octavos', fecha: '10 Jul', hora: '21:00', local: 'W D16_15', visitante: 'W D16_16', estadio: 'SoFi Stadium' },

  // CUARTOS
  { id: 'QF_1',   fase: 'cuartos',   fecha: '13 Jul', hora: '21:00', local: 'W R16_1', visitante: 'W R16_2', estadio: 'MetLife Stadium' },
  { id: 'QF_2',   fase: 'cuartos',   fecha: '14 Jul', hora: '21:00', local: 'W R16_3', visitante: 'W R16_4', estadio: 'Rose Bowl' },
  { id: 'QF_3',   fase: 'cuartos',   fecha: '15 Jul', hora: '21:00', local: 'W R16_5', visitante: 'W R16_6', estadio: 'AT&T Stadium' },
  { id: 'QF_4',   fase: 'cuartos',   fecha: '16 Jul', hora: '21:00', local: 'W R16_7', visitante: 'W R16_8', estadio: 'SoFi Stadium' },

  // SEMIFINALES
  { id: 'SF_1',   fase: 'semifinal', fecha: '19 Jul', hora: '21:00', local: 'W QF_1', visitante: 'W QF_2', estadio: 'MetLife Stadium' },
  { id: 'SF_2',   fase: 'semifinal', fecha: '20 Jul', hora: '21:00', local: 'W QF_3', visitante: 'W QF_4', estadio: 'Rose Bowl' },

  // TERCER PUESTO
  { id: 'TER',    fase: 'tercero',   fecha: '25 Jul', hora: '18:00', local: 'L SF_1', visitante: 'L SF_2', estadio: 'AT&T Stadium' },

  // FINAL
  { id: 'FINAL',  fase: 'final',     fecha: '26 Jul', hora: '21:00', local: 'W SF_1', visitante: 'W SF_2', estadio: 'MetLife Stadium' },
]

export const GRUPOS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

export const FASE_LABELS: Record<string, string> = {
  grupos:         '⚽ Fase de Grupos',
  dieciseisavos:  '🔱 Dieciseisavos de Final',
  octavos:        '⚡ Octavos de Final',
  cuartos:        '🔥 Cuartos de Final',
  semifinal:      '🌟 Semifinales',
  tercero:        '🥉 Tercer Puesto',
  final:          '🏆 Gran Final',
}
