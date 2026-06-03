'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Instagram, ChevronRight, Trophy, Users, Share2 } from 'lucide-react'
import { cargarUsuario, guardarUsuario } from '@/lib/prode'

const CONFETTI_COLORS = ['#FF6B00', '#FFB347', '#FFD700', '#C2185B', '#6B21A8', '#fff', '#22c55e']

export default function HomePage() {
  const router = useRouter()
  const [nombre, setNombre] = useState('')
  const [showInput, setShowInput] = useState(false)
  const [confetti, setConfetti] = useState<{ id: number; x: number; color: string; delay: number; dur: number }[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const user = cargarUsuario()
    if (user) setNombre(user)

    // Confetti de fondo
    setConfetti(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      delay: Math.random() * 4,
      dur: 3 + Math.random() * 4,
    })))
  }, [])

  const handleComenzar = () => {
    if (!showInput) { setShowInput(true); return }
    if (nombre.trim()) {
      guardarUsuario(nombre.trim())
      router.push('/fixture')
    }
  }

  return (
    <main className="min-h-dvh flex flex-col items-center justify-between relative overflow-hidden bg-plum-dark">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-plum-grad opacity-20 field-lines" />
      <div className="absolute top-[-100px] right-[-100px] w-80 h-80 rounded-full bg-plum-orange opacity-10 blur-3xl animate-float" />
      <div className="absolute bottom-[-80px] left-[-80px] w-96 h-96 rounded-full bg-plum-violet opacity-15 blur-3xl animate-float-slow" />

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {confetti.map(c => (
          <div
            key={c.id}
            className="confetti-piece"
            style={{
              left: `${c.x}%`,
              backgroundColor: c.color,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.dur}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 w-full flex justify-between items-center px-4 pt-6">
        <div className="text-xs text-white/40 font-semibold uppercase tracking-widest">Mundial 2026</div>
        <a
          href="https://instagram.com/jugosplum"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 text-xs text-white/70 hover:bg-white/20 transition-all"
        >
          <Instagram className="w-3 h-3" />
          @jugosplum
        </a>
      </div>

      {/* Hero */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8 text-center">
        {/* Logo Plum */}
        <div className="mb-4 animate-float" style={{ filter: 'drop-shadow(0 0 30px rgba(255,107,0,0.5))' }}>
          <img src="/logo-plum.png" alt="Jugos Plum" className="w-28 h-28 object-contain mx-auto" />
        </div>

        {/* Logo texto */}
        <div className="mb-2">
          <div className="font-display text-6xl sm:text-7xl leading-none" style={{ background: 'linear-gradient(135deg, #FF6B00, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            PLUM
          </div>
          <div className="font-display text-5xl sm:text-6xl text-white leading-none">
            MUNDIAL
          </div>
          <div className="font-display text-2xl text-white/40 leading-none tracking-widest">
            2026
          </div>
        </div>

        {/* Tagline */}
        <p className="text-white/70 text-lg font-semibold mt-4 mb-8 max-w-xs leading-snug">
          Viví el Mundial con Plum 🍊
        </p>

        {/* Features rápidos */}
        <div className="grid grid-cols-3 gap-3 mb-8 w-full max-w-xs">
          {[
            { icon: '⚽', label: 'Fixture completo' },
            { icon: '📊', label: 'Tabla en vivo' },
            { icon: '🔗', label: 'Compartí tu prode' },
          ].map((f, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-3 text-center border border-white/10">
              <div className="text-2xl mb-1">{f.icon}</div>
              <div className="text-white/50 text-xs font-semibold leading-tight">{f.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {showInput && (
          <div className="w-full max-w-xs mb-4 animate-slide-up">
            <input
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleComenzar()}
              placeholder="¿Cómo te llamás?"
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3.5 text-white placeholder-white/40 text-center text-lg font-semibold focus:outline-none focus:border-plum-orange transition-all"
              autoFocus
            />
          </div>
        )}

        <button
          onClick={handleComenzar}
          className="group relative flex items-center gap-2 font-display text-2xl text-white rounded-2xl px-8 py-4 shadow-2xl overflow-hidden transition-all active:scale-95"
          style={{ background: 'linear-gradient(135deg, #FF6B00, #C2185B)' }}
        >
          <div className="absolute inset-0 shimmer" />
          <span className="relative">
            {showInput ? (nombre ? '¡Arrancar! 🚀' : 'Ingresá tu nombre') : 'Comenzar mi prode'}
          </span>
          <ChevronRight className="w-6 h-6 relative group-hover:translate-x-1 transition-transform" />
        </button>

        {mounted && cargarUsuario() && !showInput && (
          <button
            onClick={() => router.push('/fixture')}
            className="mt-3 text-white/40 text-sm underline underline-offset-2"
          >
            Continuar como {cargarUsuario()}
          </button>
        )}
      </div>

      {/* Stats decorativas */}
      <div className="relative z-10 w-full px-4 pb-2">
        <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
          {[
            { icon: <Trophy className="w-4 h-4" />, val: '48', label: 'Equipos' },
            { icon: <Users className="w-4 h-4" />,  val: '104', label: 'Partidos' },
            { icon: <Share2 className="w-4 h-4" />, val: '∞', label: 'Diversión' },
          ].map((s, i) => (
            <div key={i} className="text-center py-2">
              <div className="flex justify-center text-plum-orange mb-1">{s.icon}</div>
              <div className="font-display text-xl text-white">{s.val}</div>
              <div className="text-white/30 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Plum */}
      <footer className="relative z-10 w-full py-4 px-4 text-center safe-bottom">
        <div className="flex flex-col items-center gap-2">
          <a
            href="https://instagram.com/jugosplum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white rounded-full px-5 py-2.5 text-sm font-bold shadow-lg"
          >
            <Instagram className="w-4 h-4" />
            Seguí a Plum en Instagram
          </a>
          <p className="text-white/20 text-xs">Refrescá tu Mundial con Plum 🍊</p>
        </div>
      </footer>
    </main>
  )
}
