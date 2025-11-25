# UniVibe Frontend (TypeScript, Vite)

Proyecto React + TypeScript minimal para conectar con el backend UniVibe.

## Requisitos
- Node.js 18+
- npm

## Configuración
1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Configurar backend base URL (opcional):
   Crear archivo `.env` en la raíz con:
   ```
   VITE_API_BASE=http://3.151.11.170:8080/api
   ```

3. Ejecutar en desarrollo:
   ```bash
   npm run dev
   ```

## Estructura relevante
- `src/api` — cliente axios y APIs
- `src/pages` — EventsPage, ProfilePage
- `src/components` — EventCard, QrDisplay, PointsBadges, HistoryTable

## Notas
Este scaffold asume que el backend provee endpoints:
- `GET /events`
- `POST /registration` -> { registrationId, qrToken }
- `GET /registration/:id/qr` or `GET /registration/:id/qr` returning dataUrl
- `GET /gamification/points/me`
- `GET /gamification/achievements/me`
- `GET /registration/history/me`
Adjust endpoints in `src/api` if your backend differs.
