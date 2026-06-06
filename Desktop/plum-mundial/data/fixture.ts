export type Equipo = {
  codigo: string
  nombre: string
  bandera: string
  grupo: string
}

export type Partido = {
  id: string
  numero: number
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

export const EQUIPOS: Equipo[] = [
  // GRUPO A
  { codigo: 'MEX', nombre: 'México',              bandera: '🇲🇽', grupo: 'A' },
  { codigo: 'RSA', nombre: 'Sudáfrica',           bandera: '🇿🇦', grupo: 'A' },
  { codigo: 'KOR', nombre: 'Corea del Sur',       bandera: '🇰🇷', grupo: 'A' },
  { codigo: 'CZE', nombre: 'República Checa',     bandera: '🇨🇿', grupo: 'A' },
  // GRUPO B
  { codigo: 'CAN', nombre: 'Canadá',              bandera: '🇨🇦', grupo: 'B' },
  { codigo: 'BIH', nombre: 'Bosnia y Herz.',      bandera: '🇧🇦', grupo: 'B' },
  { codigo: 'QAT', nombre: 'Catar',               bandera: '🇶🇦', grupo: 'B' },
  { codigo: 'SUI', nombre: 'Suiza',               bandera: '🇨🇭', grupo: 'B' },
  // GRUPO C
  { codigo: 'BRA', nombre: 'Brasil',              bandera: '🇧🇷', grupo: 'C' },
  { codigo: 'MAR', nombre: 'Marruecos',           bandera: '🇲🇦', grupo: 'C' },
  { codigo: 'HAI', nombre: 'Haití',               bandera: '🇭🇹', grupo: 'C' },
  { codigo: 'SCO', nombre: 'Escocia',             bandera: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', grupo: 'C' },
  // GRUPO D
  { codigo: 'USA', nombre: 'Estados Unidos',      bandera: '🇺🇸', grupo: 'D' },
  { codigo: 'PAR', nombre: 'Paraguay',            bandera: '🇵🇾', grupo: 'D' },
  { codigo: 'AUS', nombre: 'Australia',           bandera: '🇦🇺', grupo: 'D' },
  { codigo: 'TUR', nombre: 'Turquía',             bandera: '🇹🇷', grupo: 'D' },
  // GRUPO E
  { codigo: 'ALE', nombre: 'Alemania',            bandera: '🇩🇪', grupo: 'E' },
  { codigo: 'CUR', nombre: 'Curazao',             bandera: '🇨🇼', grupo: 'E' },
  { codigo: 'CIV', nombre: 'Costa de Marfil',     bandera: '🇨🇮', grupo: 'E' },
  { codigo: 'ECU', nombre: 'Ecuador',             bandera: '🇪🇨', grupo: 'E' },
  // GRUPO F
  { codigo: 'HOL', nombre: 'Países Bajos',        bandera: '🇳🇱', grupo: 'F' },
  { codigo: 'JPN', nombre: 'Japón',               bandera: '🇯🇵', grupo: 'F' },
  { codigo: 'SWE', nombre: 'Suecia',              bandera: '🇸🇪', grupo: 'F' },
  { codigo: 'TUN', nombre: 'Túnez',               bandera: '🇹🇳', grupo: 'F' },
  // GRUPO G
  { codigo: 'IRN', nombre: 'Irán',                bandera: '🇮🇷', grupo: 'G' },
  { codigo: 'NZL', nombre: 'Nueva Zelanda',       bandera: '🇳🇿', grupo: 'G' },
  { codigo: 'BEL', nombre: 'Bélgica',             bandera: '🇧🇪', grupo: 'G' },
  { codigo: 'EGY', nombre: 'Egipto',              bandera: '🇪🇬', grupo: 'G' },
  // GRUPO H
  { codigo: 'ESP', nombre: 'España',              bandera: '🇪🇸', grupo: 'H' },
  { codigo: 'CPV', nombre: 'Cabo Verde',          bandera: '🇨🇻', grupo: 'H' },
  { codigo: 'KSA', nombre: 'Arabia Saudita',      bandera: '🇸🇦', grupo: 'H' },
  { codigo: 'URU', nombre: 'Uruguay',             bandera: '🇺🇾', grupo: 'H' },
  // GRUPO I
  { codigo: 'FRA', nombre: 'Francia',             bandera: '🇫🇷', grupo: 'I' },
  { codigo: 'SEN', nombre: 'Senegal',             bandera: '🇸🇳', grupo: 'I' },
  { codigo: 'IRQ', nombre: 'Irak',                bandera: '🇮🇶', grupo: 'I' },
  { codigo: 'NOR', nombre: 'Noruega',             bandera: '🇳🇴', grupo: 'I' },
  // GRUPO J
  { codigo: 'ARG', nombre: 'Argentina',           bandera: '🇦🇷', grupo: 'J' },
  { codigo: 'DZA', nombre: 'Argelia',             bandera: '🇩🇿', grupo: 'J' },
  { codigo: 'AUT', nombre: 'Austria',             bandera: '🇦🇹', grupo: 'J' },
  { codigo: 'JOR', nombre: 'Jordania',            bandera: '🇯🇴', grupo: 'J' },
  // GRUPO K
  { codigo: 'POR', nombre: 'Portugal',            bandera: '🇵🇹', grupo: 'K' },
  { codigo: 'COD', nombre: 'RD Congo',            bandera: '🇨🇩', grupo: 'K' },
  { codigo: 'UZB', nombre: 'Uzbekistán',          bandera: '🇺🇿', grupo: 'K' },
  { codigo: 'COL', nombre: 'Colombia',            bandera: '🇨🇴', grupo: 'K' },
  // GRUPO L
  { codigo: 'ING', nombre: 'Inglaterra',          bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grupo: 'L' },
  { codigo: 'CRO', nombre: 'Croacia',             bandera: '🇭🇷', grupo: 'L' },
  { codigo: 'GHA', nombre: 'Ghana',               bandera: '🇬🇭', grupo: 'L' },
  { codigo: 'PAN', nombre: 'Panamá',              bandera: '🇵🇦', grupo: 'L' },
]

export const PARTIDOS_GRUPOS: Partido[] = [
  // ── GRUPO A ──
  { id:'A1', numero:1,  fase:'grupos', grupo:'A', fecha:'11 Jun', hora:'16:00', local:'MEX', visitante:'RSA', estadio:'Estadio Azteca, Cdad. de México', jornada:1 },
  { id:'A2', numero:2,  fase:'grupos', grupo:'A', fecha:'11 Jun', hora:'23:00', local:'KOR', visitante:'CZE', estadio:'Estadio Chivas, Guadalajara', jornada:1 },
  { id:'A3', numero:25, fase:'grupos', grupo:'A', fecha:'18 Jun', hora:'13:00', local:'CZE', visitante:'RSA', estadio:'Mercedes-Benz Stadium, Atlanta', jornada:2 },
  { id:'A4', numero:28, fase:'grupos', grupo:'A', fecha:'18 Jun', hora:'22:00', local:'MEX', visitante:'KOR', estadio:'Estadio Chivas, Guadalajara', jornada:2 },
  { id:'A5', numero:53, fase:'grupos', grupo:'A', fecha:'24 Jun', hora:'22:00', local:'CZE', visitante:'MEX', estadio:'Estadio Azteca, Cdad. de México', jornada:3 },
  { id:'A6', numero:54, fase:'grupos', grupo:'A', fecha:'24 Jun', hora:'22:00', local:'RSA', visitante:'KOR', estadio:'Estadio BBVA, Monterrey', jornada:3 },
  // ── GRUPO B ──
  { id:'B1', numero:3,  fase:'grupos', grupo:'B', fecha:'12 Jun', hora:'16:00', local:'CAN', visitante:'BIH', estadio:'Est. Nacional de Canadá, Toronto', jornada:1 },
  { id:'B2', numero:8,  fase:'grupos', grupo:'B', fecha:'13 Jun', hora:'16:00', local:'QAT', visitante:'SUI', estadio:"Levi's Stadium, San Francisco", jornada:1 },
  { id:'B3', numero:26, fase:'grupos', grupo:'B', fecha:'18 Jun', hora:'16:00', local:'SUI', visitante:'BIH', estadio:'SoFi Stadium, Los Ángeles', jornada:2 },
  { id:'B4', numero:27, fase:'grupos', grupo:'B', fecha:'18 Jun', hora:'19:00', local:'CAN', visitante:'QAT', estadio:'Estadio BC Place, Vancouver', jornada:2 },
  { id:'B5', numero:51, fase:'grupos', grupo:'B', fecha:'24 Jun', hora:'22:00', local:'SUI', visitante:'CAN', estadio:'Estadio BC Place, Vancouver', jornada:3 },
  { id:'B6', numero:52, fase:'grupos', grupo:'B', fecha:'24 Jun', hora:'22:00', local:'BIH', visitante:'QAT', estadio:'Lumen Field, Seattle', jornada:3 },
  // ── GRUPO C ──
  { id:'C1', numero:7,  fase:'grupos', grupo:'C', fecha:'13 Jun', hora:'19:00', local:'BRA', visitante:'MAR', estadio:'MetLife Stadium, Nueva York/NJ', jornada:1 },
  { id:'C2', numero:5,  fase:'grupos', grupo:'C', fecha:'13 Jun', hora:'22:00', local:'HAI', visitante:'SCO', estadio:'Gillette Stadium, Boston', jornada:1 },
  { id:'C3', numero:29, fase:'grupos', grupo:'C', fecha:'19 Jun', hora:'22:00', local:'BRA', visitante:'HAI', estadio:'Lincoln Financial Field, Filadelfia', jornada:2 },
  { id:'C4', numero:30, fase:'grupos', grupo:'C', fecha:'19 Jun', hora:'19:00', local:'SCO', visitante:'MAR', estadio:'Gillette Stadium, Boston', jornada:2 },
  { id:'C5', numero:49, fase:'grupos', grupo:'C', fecha:'24 Jun', hora:'22:00', local:'SCO', visitante:'BRA', estadio:'Hard Rock Stadium, Miami', jornada:3 },
  { id:'C6', numero:50, fase:'grupos', grupo:'C', fecha:'24 Jun', hora:'22:00', local:'MAR', visitante:'HAI', estadio:'Mercedes-Benz Stadium, Atlanta', jornada:3 },
  // ── GRUPO D ──
  { id:'D1', numero:4,  fase:'grupos', grupo:'D', fecha:'12 Jun', hora:'22:00', local:'USA', visitante:'PAR', estadio:'SoFi Stadium, Los Ángeles', jornada:1 },
  { id:'D2', numero:6,  fase:'grupos', grupo:'D', fecha:'14 Jun', hora:'01:00', local:'AUS', visitante:'TUR', estadio:'Estadio BC Place, Vancouver', jornada:1 },
  { id:'D3', numero:31, fase:'grupos', grupo:'D', fecha:'20 Jun', hora:'01:00', local:'TUR', visitante:'PAR', estadio:"Levi's Stadium, San Francisco", jornada:2 },
  { id:'D4', numero:32, fase:'grupos', grupo:'D', fecha:'19 Jun', hora:'16:00', local:'USA', visitante:'AUS', estadio:'Lumen Field, Seattle', jornada:2 },
  { id:'D5', numero:59, fase:'grupos', grupo:'D', fecha:'25 Jun', hora:'23:00', local:'TUR', visitante:'USA', estadio:'SoFi Stadium, Los Ángeles', jornada:3 },
  { id:'D6', numero:60, fase:'grupos', grupo:'D', fecha:'25 Jun', hora:'23:00', local:'PAR', visitante:'AUS', estadio:"Levi's Stadium, San Francisco", jornada:3 },
  // ── GRUPO E ──
  { id:'E1', numero:9,  fase:'grupos', grupo:'E', fecha:'14 Jun', hora:'14:00', local:'ALE', visitante:'CUR', estadio:'NRG Stadium, Houston', jornada:1 },
  { id:'E2', numero:10, fase:'grupos', grupo:'E', fecha:'14 Jun', hora:'20:00', local:'CIV', visitante:'ECU', estadio:'Lincoln Financial Field, Filadelfia', jornada:1 },
  { id:'E3', numero:33, fase:'grupos', grupo:'E', fecha:'20 Jun', hora:'17:00', local:'ALE', visitante:'CIV', estadio:'BMO Field, Toronto', jornada:2 },
  { id:'E4', numero:34, fase:'grupos', grupo:'E', fecha:'20 Jun', hora:'21:00', local:'ECU', visitante:'CUR', estadio:'Arrowhead Stadium, Kansas City', jornada:2 },
  { id:'E5', numero:56, fase:'grupos', grupo:'E', fecha:'25 Jun', hora:'17:00', local:'ECU', visitante:'ALE', estadio:'MetLife Stadium, Nueva York/NJ', jornada:3 },
  { id:'E6', numero:55, fase:'grupos', grupo:'E', fecha:'25 Jun', hora:'17:00', local:'CUR', visitante:'CIV', estadio:'Lincoln Financial Field, Filadelfia', jornada:3 },
  // ── GRUPO F ──
  { id:'F1', numero:11, fase:'grupos', grupo:'F', fecha:'14 Jun', hora:'17:00', local:'HOL', visitante:'JPN', estadio:'AT&T Stadium, Dallas', jornada:1 },
  { id:'F2', numero:12, fase:'grupos', grupo:'F', fecha:'14 Jun', hora:'23:00', local:'SWE', visitante:'TUN', estadio:'Estadio BBVA, Monterrey', jornada:1 },
  { id:'F3', numero:35, fase:'grupos', grupo:'F', fecha:'20 Jun', hora:'14:00', local:'HOL', visitante:'SWE', estadio:'NRG Stadium, Houston', jornada:2 },
  { id:'F4', numero:36, fase:'grupos', grupo:'F', fecha:'21 Jun', hora:'01:00', local:'TUN', visitante:'JPN', estadio:'Estadio BBVA, Monterrey', jornada:2 },
  { id:'F5', numero:57, fase:'grupos', grupo:'F', fecha:'25 Jun', hora:'20:00', local:'JPN', visitante:'SWE', estadio:'Arrowhead Stadium, Kansas City', jornada:3 },
  { id:'F6', numero:58, fase:'grupos', grupo:'F', fecha:'25 Jun', hora:'20:00', local:'TUN', visitante:'HOL', estadio:'AT&T Stadium, Dallas', jornada:3 },
  // ── GRUPO G ──
  { id:'G1', numero:15, fase:'grupos', grupo:'G', fecha:'15 Jun', hora:'16:00', local:'IRN', visitante:'NZL', estadio:'SoFi Stadium, Los Ángeles', jornada:1 },
  { id:'G2', numero:16, fase:'grupos', grupo:'G', fecha:'15 Jun', hora:'22:00', local:'BEL', visitante:'EGY', estadio:'Lumen Field, Seattle', jornada:1 },
  { id:'G3', numero:39, fase:'grupos', grupo:'G', fecha:'21 Jun', hora:'16:00', local:'BEL', visitante:'IRN', estadio:'SoFi Stadium, Los Ángeles', jornada:2 },
  { id:'G4', numero:40, fase:'grupos', grupo:'G', fecha:'21 Jun', hora:'22:00', local:'NZL', visitante:'EGY', estadio:'Estadio BC Place, Vancouver', jornada:2 },
  { id:'G5', numero:64, fase:'grupos', grupo:'G', fecha:'27 Jun', hora:'00:00', local:'NZL', visitante:'BEL', estadio:'Estadio BC Place, Vancouver', jornada:3 },
  { id:'G6', numero:63, fase:'grupos', grupo:'G', fecha:'27 Jun', hora:'00:00', local:'EGY', visitante:'IRN', estadio:'Lumen Field, Seattle', jornada:3 },
  // ── GRUPO H ──
  { id:'H1', numero:14, fase:'grupos', grupo:'H', fecha:'15 Jun', hora:'13:00', local:'ESP', visitante:'CPV', estadio:'Mercedes-Benz Stadium, Atlanta', jornada:1 },
  { id:'H2', numero:13, fase:'grupos', grupo:'H', fecha:'15 Jun', hora:'19:00', local:'KSA', visitante:'URU', estadio:'Hard Rock Stadium, Miami', jornada:1 },
  { id:'H3', numero:38, fase:'grupos', grupo:'H', fecha:'21 Jun', hora:'13:00', local:'ESP', visitante:'KSA', estadio:'Mercedes-Benz Stadium, Atlanta', jornada:2 },
  { id:'H4', numero:37, fase:'grupos', grupo:'H', fecha:'21 Jun', hora:'19:00', local:'URU', visitante:'CPV', estadio:'Hard Rock Stadium, Miami', jornada:2 },
  { id:'H5', numero:66, fase:'grupos', grupo:'H', fecha:'26 Jun', hora:'21:00', local:'URU', visitante:'ESP', estadio:'Estadio Chivas, Guadalajara', jornada:3 },
  { id:'H6', numero:65, fase:'grupos', grupo:'H', fecha:'26 Jun', hora:'21:00', local:'CPV', visitante:'KSA', estadio:'NRG Stadium, Houston', jornada:3 },
  // ── GRUPO I ──
  { id:'I1', numero:17, fase:'grupos', grupo:'I', fecha:'16 Jun', hora:'16:00', local:'FRA', visitante:'SEN', estadio:'MetLife Stadium, Nueva York/NJ', jornada:1 },
  { id:'I2', numero:18, fase:'grupos', grupo:'I', fecha:'16 Jun', hora:'19:00', local:'IRQ', visitante:'NOR', estadio:'Gillette Stadium, Boston', jornada:1 },
  { id:'I3', numero:42, fase:'grupos', grupo:'I', fecha:'22 Jun', hora:'18:00', local:'FRA', visitante:'IRQ', estadio:'Lincoln Financial Field, Filadelfia', jornada:2 },
  { id:'I4', numero:41, fase:'grupos', grupo:'I', fecha:'22 Jun', hora:'21:00', local:'NOR', visitante:'SEN', estadio:'MetLife Stadium, Nueva York/NJ', jornada:2 },
  { id:'I5', numero:61, fase:'grupos', grupo:'I', fecha:'26 Jun', hora:'16:00', local:'NOR', visitante:'FRA', estadio:'Gillette Stadium, Boston', jornada:3 },
  { id:'I6', numero:62, fase:'grupos', grupo:'I', fecha:'26 Jun', hora:'16:00', local:'SEN', visitante:'IRQ', estadio:'BMO Field, Toronto', jornada:3 },
  // ── GRUPO J ──
  { id:'J1', numero:19, fase:'grupos', grupo:'J', fecha:'16 Jun', hora:'22:00', local:'ARG', visitante:'DZA', estadio:'Arrowhead Stadium, Kansas City', jornada:1 },
  { id:'J2', numero:20, fase:'grupos', grupo:'J', fecha:'17 Jun', hora:'01:00', local:'AUT', visitante:'JOR', estadio:"Levi's Stadium, San Francisco", jornada:1 },
  { id:'J3', numero:43, fase:'grupos', grupo:'J', fecha:'22 Jun', hora:'14:00', local:'ARG', visitante:'AUT', estadio:'AT&T Stadium, Dallas', jornada:2 },
  { id:'J4', numero:44, fase:'grupos', grupo:'J', fecha:'23 Jun', hora:'00:00', local:'JOR', visitante:'DZA', estadio:"Levi's Stadium, San Francisco", jornada:2 },
  { id:'J5', numero:70, fase:'grupos', grupo:'J', fecha:'27 Jun', hora:'23:00', local:'JOR', visitante:'ARG', estadio:'AT&T Stadium, Dallas', jornada:3 },
  { id:'J6', numero:69, fase:'grupos', grupo:'J', fecha:'27 Jun', hora:'23:00', local:'DZA', visitante:'AUT', estadio:'Arrowhead Stadium, Kansas City', jornada:3 },
  // ── GRUPO K ──
  { id:'K1', numero:23, fase:'grupos', grupo:'K', fecha:'17 Jun', hora:'14:00', local:'POR', visitante:'COD', estadio:'NRG Stadium, Houston', jornada:1 },
  { id:'K2', numero:24, fase:'grupos', grupo:'K', fecha:'17 Jun', hora:'23:00', local:'UZB', visitante:'COL', estadio:'Estadio Azteca, Cdad. de México', jornada:1 },
  { id:'K3', numero:47, fase:'grupos', grupo:'K', fecha:'23 Jun', hora:'14:00', local:'POR', visitante:'UZB', estadio:'NRG Stadium, Houston', jornada:2 },
  { id:'K4', numero:48, fase:'grupos', grupo:'K', fecha:'23 Jun', hora:'23:00', local:'COL', visitante:'COD', estadio:'Estadio Chivas, Guadalajara', jornada:2 },
  { id:'K5', numero:71, fase:'grupos', grupo:'K', fecha:'27 Jun', hora:'20:00', local:'COL', visitante:'POR', estadio:'Hard Rock Stadium, Miami', jornada:3 },
  { id:'K6', numero:72, fase:'grupos', grupo:'K', fecha:'27 Jun', hora:'20:00', local:'COD', visitante:'UZB', estadio:'Mercedes-Benz Stadium, Atlanta', jornada:3 },
  // ── GRUPO L ──
  { id:'L1', numero:22, fase:'grupos', grupo:'L', fecha:'17 Jun', hora:'17:00', local:'ING', visitante:'CRO', estadio:'AT&T Stadium, Dallas', jornada:1 },
  { id:'L2', numero:21, fase:'grupos', grupo:'L', fecha:'17 Jun', hora:'20:00', local:'GHA', visitante:'PAN', estadio:'BMO Field, Toronto', jornada:1 },
  { id:'L3', numero:45, fase:'grupos', grupo:'L', fecha:'23 Jun', hora:'17:00', local:'ING', visitante:'GHA', estadio:'Gillette Stadium, Boston', jornada:2 },
  { id:'L4', numero:46, fase:'grupos', grupo:'L', fecha:'23 Jun', hora:'20:00', local:'PAN', visitante:'CRO', estadio:'BMO Field, Toronto', jornada:2 },
  { id:'L5', numero:67, fase:'grupos', grupo:'L', fecha:'27 Jun', hora:'18:00', local:'PAN', visitante:'ING', estadio:'MetLife Stadium, Nueva York/NJ', jornada:3 },
  { id:'L6', numero:68, fase:'grupos', grupo:'L', fecha:'27 Jun', hora:'18:00', local:'CRO', visitante:'GHA', estadio:'Lincoln Financial Field, Filadelfia', jornada:3 },
]

export const PARTIDOS_ELIMINATORIOS: Partido[] = [
  // ── DIECISEISAVOS ──
  { id:'P73', numero:73, fase:'dieciseisavos', fecha:'28 Jun', hora:'16:00', local:'2A', visitante:'2B', estadio:'SoFi Stadium, Los Ángeles' },
  { id:'P74', numero:74, fase:'dieciseisavos', fecha:'29 Jun', hora:'14:00', local:'1E', visitante:'3A/B/C/D/F', estadio:'Gillette Stadium, Boston' },
  { id:'P75', numero:75, fase:'dieciseisavos', fecha:'29 Jun', hora:'17:00', local:'1F', visitante:'2C', estadio:'Est. Monterrey, Monterrey' },
  { id:'P76', numero:76, fase:'dieciseisavos', fecha:'29 Jun', hora:'22:00', local:'1C', visitante:'2F', estadio:'NRG Stadium, Houston' },
  { id:'P77', numero:77, fase:'dieciseisavos', fecha:'30 Jun', hora:'14:00', local:'1I', visitante:'3C/D/F/G/H', estadio:'MetLife Stadium, Nueva York/NJ' },
  { id:'P78', numero:78, fase:'dieciseisavos', fecha:'30 Jun', hora:'18:00', local:'2E', visitante:'2I', estadio:'AT&T Stadium, Dallas' },
  { id:'P79', numero:79, fase:'dieciseisavos', fecha:'30 Jun', hora:'22:00', local:'1A', visitante:'3C/E/F/H/I', estadio:'Estadio Azteca, Cdad. de México' },
  { id:'P80', numero:80, fase:'dieciseisavos', fecha:'1 Jul',  hora:'13:00', local:'1L', visitante:'3E/H/I/J/K', estadio:'Mercedes-Benz Stadium, Atlanta' },
  { id:'P81', numero:81, fase:'dieciseisavos', fecha:'1 Jul',  hora:'17:00', local:'1D', visitante:'3B/E/F/I/J', estadio:"Levi's Stadium, San Francisco" },
  { id:'P82', numero:82, fase:'dieciseisavos', fecha:'1 Jul',  hora:'21:00', local:'1G', visitante:'3A/E/H/I/J', estadio:'Lumen Field, Seattle' },
  { id:'P83', numero:83, fase:'dieciseisavos', fecha:'2 Jul',  hora:'16:00', local:'2K', visitante:'2L', estadio:'Est. Nacional de Canadá, Toronto' },
  { id:'P84', numero:84, fase:'dieciseisavos', fecha:'2 Jul',  hora:'20:00', local:'1H', visitante:'2J', estadio:'SoFi Stadium, Los Ángeles' },
  { id:'P85', numero:85, fase:'dieciseisavos', fecha:'3 Jul',  hora:'00:00', local:'1B', visitante:'3E/F/G/I/J', estadio:'Estadio BC Place, Vancouver' },
  { id:'P86', numero:86, fase:'dieciseisavos', fecha:'3 Jul',  hora:'15:00', local:'1J', visitante:'2H', estadio:'Hard Rock Stadium, Miami' },
  { id:'P87', numero:87, fase:'dieciseisavos', fecha:'3 Jul',  hora:'17:00', local:'1K', visitante:'3D/E/I/J/L', estadio:'Arrowhead Stadium, Kansas City' },
  { id:'P88', numero:88, fase:'dieciseisavos', fecha:'3 Jul',  hora:'22:00', local:'2D', visitante:'2G', estadio:'AT&T Stadium, Dallas' },
  // ── OCTAVOS ──
  { id:'P89', numero:89, fase:'octavos', fecha:'4 Jul',  hora:'14:00', local:'W P74', visitante:'W P77', estadio:'Lincoln Financial Field, Filadelfia' },
  { id:'P90', numero:90, fase:'octavos', fecha:'4 Jul',  hora:'18:00', local:'W P73', visitante:'W P75', estadio:'NRG Stadium, Houston' },
  { id:'P91', numero:91, fase:'octavos', fecha:'5 Jul',  hora:'17:00', local:'W P76', visitante:'W P78', estadio:'MetLife Stadium, Nueva York/NJ' },
  { id:'P92', numero:92, fase:'octavos', fecha:'5 Jul',  hora:'21:00', local:'W P79', visitante:'W P80', estadio:'Estadio Azteca, Cdad. de México' },
  { id:'P93', numero:93, fase:'octavos', fecha:'6 Jul',  hora:'16:00', local:'W P83', visitante:'W P84', estadio:'AT&T Stadium, Dallas' },
  { id:'P94', numero:94, fase:'octavos', fecha:'6 Jul',  hora:'21:00', local:'W P81', visitante:'W P82', estadio:'Lumen Field, Seattle' },
  { id:'P95', numero:95, fase:'octavos', fecha:'7 Jul',  hora:'13:00', local:'W P86', visitante:'W P88', estadio:'Mercedes-Benz Stadium, Atlanta' },
  { id:'P96', numero:96, fase:'octavos', fecha:'7 Jul',  hora:'15:00', local:'W P85', visitante:'W P87', estadio:'Estadio BC Place, Vancouver' },
  // ── CUARTOS ──
  { id:'P97',  numero:97,  fase:'cuartos',   fecha:'9 Jul',  hora:'17:00', local:'W P89', visitante:'W P90', estadio:'Gillette Stadium, Boston' },
  { id:'P98',  numero:98,  fase:'cuartos',   fecha:'10 Jul', hora:'16:00', local:'W P93', visitante:'W P94', estadio:'SoFi Stadium, Los Ángeles' },
  { id:'P99',  numero:99,  fase:'cuartos',   fecha:'11 Jul', hora:'18:00', local:'W P91', visitante:'W P92', estadio:'Hard Rock Stadium, Miami' },
  { id:'P100', numero:100, fase:'cuartos',   fecha:'11 Jul', hora:'22:00', local:'W P95', visitante:'W P96', estadio:'Arrowhead Stadium, Kansas City' },
  // ── SEMIFINALES ──
  { id:'P101', numero:101, fase:'semifinal', fecha:'14 Jul', hora:'16:00', local:'W P97', visitante:'W P98', estadio:'AT&T Stadium, Dallas' },
  { id:'P102', numero:102, fase:'semifinal', fecha:'15 Jul', hora:'16:00', local:'W P99', visitante:'W P100', estadio:'Mercedes-Benz Stadium, Atlanta' },
  // ── TERCER PUESTO ──
  { id:'P103', numero:103, fase:'tercero',   fecha:'18 Jul', hora:'18:00', local:'L P101', visitante:'L P102', estadio:'Hard Rock Stadium, Miami' },
  // ── FINAL ──
  { id:'P104', numero:104, fase:'final',     fecha:'19 Jul', hora:'16:00', local:'W P101', visitante:'W P102', estadio:'MetLife Stadium, Nueva York/NJ' },
]

export const GRUPOS = ['A','B','C','D','E','F','G','H','I','J','K','L']

export const FASE_LABELS: Record<string, string> = {
  grupos:        '⚽ Fase de Grupos',
  dieciseisavos: '🔱 Dieciseisavos de Final',
  octavos:       '⚡ Octavos de Final',
  cuartos:       '🔥 Cuartos de Final',
  semifinal:     '🌟 Semifinales',
  tercero:       '🥉 Tercer Puesto',
  final:         '🏆 Gran Final',
}
