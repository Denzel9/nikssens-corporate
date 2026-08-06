# Деплой corporate через Docker + Dokploy

Build type: **Dockerfile** или Nixpacks. Port: **3011** (не 3000).

Build arg / env:

```env
NEXT_PUBLIC_PLATFORM_URL=https://app.example.com
```

Старт: `next start --hostname 0.0.0.0 --port 3011` (без `output: standalone`).
