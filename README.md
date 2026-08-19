# Skondental

Next.js 16 (App Router) + TypeScript + Tailwind v4.

## Sviluppo

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Design system

Il sistema di stile — _"warm apothecary journal on parchment"_ — è descritto per
esteso in [`DESIGN.md`](./DESIGN.md). Le regole operative da seguire mentre si
costruisce sono in [`AGENTS.md`](./AGENTS.md).

| Dove                | Cosa                                                                |
| ------------------- | ------------------------------------------------------------------- |
| `src/app/globals.css` | Tutti i token in `@theme` (colori, tipografia, raggi, ombre), il base layer e le utility di sistema |
| `src/app/fonts.ts`    | Caricamento dei tre font e loro sostituti                          |
| `DESIGN.md`           | Guida di stile completa: ruoli, componenti, do & don't            |
| `AGENTS.md`           | Regole non negoziabili in forma sintetica                          |

### Font

Le tre famiglie originali sono commerciali. Finché non sono disponibili i file
con licenza, ognuna è servita dal sostituto documentato nella guida:

| Sistema             | Sostituto attivo | Variabile                     |
| ------------------- | ---------------- | ----------------------------- |
| Financier Display   | Newsreader       | `--font-financier-display`    |
| Ftbase              | Inter            | `--font-ftbase`               |
| Fragment mono       | Fragment Mono    | `--font-fragment-mono`        |

Per passare ai font reali basta aggiungere un `@font-face` con il nome
originale: gli stack lo elencano per primo e prende il sopravvento da solo.
