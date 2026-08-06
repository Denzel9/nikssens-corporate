# Деплой corporate через Docker + Dokploy

Build type: **Dockerfile** (не Nixpacks). Port: **3011**.

Build arg:

```env
NEXT_PUBLIC_PLATFORM_URL=https://app.example.com
```

В `next.config.ts` включён `output: "standalone"`.
