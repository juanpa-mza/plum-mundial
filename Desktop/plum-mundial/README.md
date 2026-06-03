# 🍊⚽ Plum Mundial 2026

App web de fixture/prode del Mundial 2026. Auspicia Jugos Plum.

---

## 📁 Estructura

```
plum-mundial/
├── app/
│   ├── page.tsx          ← Home / Landing
│   ├── fixture/page.tsx  ← Fixture completo con scores
│   ├── tabla/page.tsx    ← Tabla de posiciones
│   ├── layout.tsx
│   └── globals.css
├── data/
│   └── fixture.ts        ← Equipos, partidos, fases
├── lib/
│   └── prode.ts          ← Lógica, localStorage, tabla
├── public/
│   └── manifest.json     ← PWA
└── ...config files
```

---

## 🚀 Deploy en Vercel (paso a paso)

### 1. Subir a GitHub
```bash
cd plum-mundial
git init
git add .
git commit -m "feat: Plum Mundial 2026"
git remote add origin https://github.com/TU_USUARIO/plum-mundial.git
git branch -M main
git push -u origin main
```

### 2. Deploy en Vercel
1. vercel.com → New Project → importar repo
2. En Environment Variables agregar:
   - `NEXT_PUBLIC_ADMIN_PASSWORD` = la contraseña que quieras
   - `NEXT_PUBLIC_APP_URL` = https://tu-app.vercel.app
3. Click Deploy ✅

### 3. Variables de entorno (mínimas para funcionar)
```
NEXT_PUBLIC_ADMIN_PASSWORD=plummundial2026
NEXT_PUBLIC_APP_URL=https://plum-mundial.vercel.app
```
> Supabase es opcional — la app funciona 100% con localStorage.

---

## 📱 Generar QR

Con la URL de Vercel:
- **Online**: qr.io o qr-code-generator.com
- **Comando**: `npx qrcode-terminal "https://plum-mundial.vercel.app"`

---

## 🌐 Conectar dominio

En Vercel → Settings → Domains → agregar tu dominio.
En tu proveedor DNS agregar CNAME apuntando a `cname.vercel-dns.com`.

---

## 📲 Instalar como PWA

En el celular, abrir la app en Chrome/Safari → menú → "Agregar a pantalla de inicio".
La app queda instalada como app nativa con ícono.

---

## ✏️ Personalizar equipos

Editar `/data/fixture.ts` — array `EQUIPOS` con:
- `codigo`: identificador único
- `nombre`: nombre del país
- `bandera`: emoji de bandera
- `grupo`: letra del grupo (A-L)

---

## 🔧 Funcionalidades

| Feature | Estado |
|---------|--------|
| Home impactante con animaciones | ✅ |
| Fixture fase de grupos (A-L) | ✅ |
| Fixture fases eliminatorias | ✅ |
| Score inputs táctiles | ✅ |
| Guardado automático localStorage | ✅ |
| Tabla de posiciones automática | ✅ |
| Compartir prode (Web Share API) | ✅ |
| PWA installable | ✅ |
| Mobile first | ✅ |
| Branding Plum | ✅ |
| Panel Admin | 🔜 próxima versión |

---

*Plum Mundial 2026 — Auspicia Jugos Plum 🍊*
