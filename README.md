# Movie Search

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the example env file and add your TMDB v4 Bearer token:
   ```bash
   cp .env.example .env.local
   ```
   Open `.env.local` and replace the placeholder with your token from [TMDB → Settings → API](https://www.themoviedb.org/settings/api).

3. Start the dev server:
   ```bash
   npm run dev
   ```

> **Note:** Vite reads `.env` files only at startup. If you add or change env variables, restart the dev server for them to take effect.
