# [NOME_DA_CAFETERIA]

Site de cafeteria criado com React 18, TypeScript e Vite. O projeto está sendo desenvolvido por etapas conforme o roteiro em `docs/PLANO.md`.

## Requisitos

- Node.js 18 ou superior
- npm

## Começar

```bash
npm install
npm run dev
```

O Vite mostra no terminal o endereço local para abrir no navegador.

## Validar

```bash
npm run lint
npx tsc --noEmit
npm run build
```

O comando `npm run typecheck` também executa a verificação de tipos. As rotas iniciais ficam em `src/routes.tsx`; textos das páginas ficam em `src/data/pages.ts`; identidade editável fica em `src/config/site.ts`.

## Etapas

O projeto implementa a fundação, as seções da home, as rotas internas e as interações demonstrativas descritas nas fases 0–6 de `docs/PLANO.md`.

## Rodar localmente

```bash
npm install
npm run dev
```

Para conferir a versão otimizada, rode `npm run lint`, `npx tsc --noEmit`, `npm run build` e depois `npm run preview`.

## Conteúdo demonstrativo

O nome `[NOME_DA_CAFETERIA]`, endereços, horários, história, preços e condições de compra precisam ser confirmados pelo grupo. A compra, o clube e o pedido antecipado não enviam nem cobram pedidos. Placeholders e itens para substituir estão em `docs/ASSETS.md`; escolhas pendentes estão em `docs/DECISOES.md`.

Os textos editáveis ficam em `src/data/`, tokens e fontes em `src/styles/`, e identidade, paleta e contato em `src/config/site.ts`.
