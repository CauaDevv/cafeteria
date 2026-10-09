# PLANO.md — Site da Cafeteria (nível "referência")

> Documento mestre para o Codex. Leia INTEIRO antes de escrever código.
> Nome da cafeteria: **[NOME_DA_CAFETERIA]** (placeholder — fica em um único arquivo de config, ver §8).

---

## 1. Objetivo

Construir um site de cafeteria que **iguale e supere em qualidade** dois sites de referência:

| Referência                                                          | O que ela nos ensina                                                                                                                                |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **apocalypsecoffee.com** (e-commerce Shopify)                       | Storytelling no scroll, animações com física, carrossel de produtos com personalidade, identidade de marca forte, carrinho, assinatura, depoimentos |
| **alt-portfolio.framer.website** ("ALt. — a café-shaped portfolio") | Visual editorial quente: serifa elegante, fundo creme, marrom profundo + vermelho/coral de acento, tipografia como protagonista                     |

**Importante:** é _inspiração_, não cópia. Não copiar textos, imagens, fontes proprietárias, nome de produtos, logotipos nem a história da marca deles. Tudo no nosso site é original.

Quem faz: 3 estudantes de ADS (nível iniciante/intermediário). Portanto o código deve ser **limpo, comentado onde ajuda, organizado e fácil de entender**.

---

## 2. Análise das referências (o que foi extraído de fato dos arquivos)

### 2.1 Apocalypse Coffee — estrutura da home (ordem real)

1. **Hero** — headline gigante ("It's the end… of bad coffee"), subtítulo curto, 2 CTAs (Comprar / Visitar cafés), selos (Orgânico, Small-batch). Ao fundo, **grãos de café espalhados** com tamanhos, rotações e cores diferentes, flutuando (`bean-field`), com um destaque de produto (#1 mais vendido).
2. **Reviews** — faixa de depoimentos em **marquee** infinito (cards com estrelas, texto, nome).
3. **Value props** — grid de 6 cards com ícone (orgânico, small-batch, família, fair trade, eco, torra de precisão).
4. **Best sellers ("Fuel for Survival")** — carrossel "palco" com setas: cada torra tem **cor própria**; um **feixe de luz** (mask-image) e partículas mudam de cor ao trocar de produto; mostra notas (Robust · Caramel · Chocolate), nível de torra e preço.
5. **Sticky steps** — 3 blocos de texto que ficam "grudados" e trocam conforme o scroll (Orgânico → Rastreável → Precisão), cada um com **cor própria** e CTA.
6. **Timeline** — seção **pinada** (scroll vertical vira movimento horizontal) com cards ilustrados por ano e fundo parallax.
7. **CTA final** — "Ready for the Coffee Revolution?" + selos.
8. **App** — mockups de celular, pedir antes/retirar, links de loja.
9. **Assinatura (Subscribe & Save)** — faixa com borda rasgada, 4 benefícios.
10. **Footer** — marca, colunas de links, redes sociais, políticas.
11. **Extras de e-commerce**: gaveta de carrinho (cart drawer), conta/login, **popup de 10% no primeiro pedido** (uma vez por sessão), menu fullscreen numerado (01–07) com bloco "Order Pickup".

### 2.2 Apocalypse Coffee — técnicas (confirmadas no código)

- **Lenis** (scroll suave, `lerp: 0.07`) — desligado quando `prefers-reduced-motion`.
- **Matter.js** (física 2D) — elementos arrastáveis com o mouse.
- **IntersectionObserver** para ativar passos/animações ao entrar na tela.
- **CSS `mask-image`**, `clip-path`, `position: sticky`, `@keyframes`, `requestAnimationFrame`.
- **Arraste horizontal com mouse** em listas (`pointerdown/move/up`), "pop" de info ao passar o mouse.
- `sessionStorage` para o popup de boas-vindas.
- Respeita `prefers-reduced-motion` em vários pontos.
- **Tokens**: laranja de acento `#e06d2d`, creme `#f0ede8`, tinta `#1a1a1a`, preto `#090705`, verde `#30a050`; várias cores por produto.
- **Tipografia**: display (Arnel / Makking — proprietárias), grotesca (Akzidenz Grotesk), manuscrita (Lovely Mess). _Não reutilizar essas fontes._

### 2.3 ALt. (Framer) — o que deu para extrair

> ⚠️ O arquivo salvo desse site veio **sem conteúdo visível** (o Framer renderiza no navegador). Só foi possível extrair identidade visual e metadados. **As seções/layout abaixo NÃO foram lidas do arquivo** — vêm da descrição do site ("um portfólio em formato de café") e devem ser confirmadas com prints.

- **Título/descrição:** "ALt." — "a café-shaped portfolio".
- **Paleta:** creme `#fffcf5`, bege `#e5dece`, marrom profundo `#511f20`, marrom médio `#785449`, vermelho/coral `#ff2c47` e `#ff4a62`.
- **Fontes:** Fraunces (serifa), Nunito Sans, Hanken Grotesk, Fragment Mono (mono para detalhes/legendas), mais fontes Fontshare.
- **Breakpoints:** desktop ≥ 1200px · tablet 810–1199px · mobile ≤ 809px.
- **Muito uso de hover/cursor** (interações em quase todo elemento clicável).

---

## 3. Direção de design (nossa identidade)

**Conceito:** _"energia do Apocalypse + calor editorial do ALt."_ — scroll cinematográfico e física divertida, mas com acabamento caloroso, serifado e acolhedor de cafeteria de bairro.

### 3.1 Tokens (criar em `src/styles/tokens.css` e mapear no Tailwind)

```
--cream:      #FFF8EC   /* fundo principal */
--paper:      #F1E6D2   /* fundo de seções alternadas */
--espresso:   #2B1510   /* texto/seções escuras */
--roast:      #5A2A1E   /* marrom de apoio */
--caramel:    #C9803A   /* acento quente */
--accent:     #E8452C   /* acento principal (CTAs) */
--foam:       #FFFFFF
--ink-soft:   #6B5A50   /* texto secundário */
```

Cada **torra/produto** tem uma `--roast-color` própria (usada no carrossel, feixe de luz, cards).

> Os integrantes podem trocar a paleta depois — **nunca** escrever cor direto no componente, sempre via token.

### 3.2 Tipografia (todas gratuitas, via Fontsource/Google Fonts, self-hosted)

- **Display:** `Fraunces` (serifa expressiva, pesos 600–900, usar eixo "soft" se disponível)
- **Texto/UI:** `Hanken Grotesk` ou `Nunito Sans`
- **Detalhes/legendas/rótulos (`01 — Torra`):** `Fragment Mono`
- Escala fluida com `clamp()`; headline do hero entre ~56px (mobile) e ~140px (desktop).

### 3.3 Princípios

1. Tipografia gigante como elemento visual.
2. Alternar seções claras (creme) e escuras (espresso) para ritmo.
3. Movimento sempre com propósito (revelar, guiar, deleitar) — nunca só decoração.
4. Mobile-first de verdade (maior parte do tráfego de cafeteria é celular).
5. Performance e acessibilidade são requisitos, não "extras".

---

## 4. Stack técnica

| Camada        | Escolha                                                               | Por quê                                  |
| ------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| Build         | **Vite + React 18 + TypeScript**                                      | Rápido, simples para iniciantes          |
| Estilo        | **Tailwind CSS** + CSS variables (tokens)                             | Produtividade e consistência             |
| Rotas         | **React Router**                                                      | Multi-página                             |
| Animação UI   | **Motion (framer-motion)**                                            | Entradas, hover, transições de página    |
| Scroll        | **Lenis**                                                             | Scroll suave estilo referência           |
| Scroll-driven | **GSAP + ScrollTrigger** _(só para a timeline pinada e sticky steps)_ | Controle fino do pin horizontal          |
| Física        | **Matter.js**                                                         | Grãos de café que caem e reagem ao mouse |
| Estado        | **Zustand** (+ persistência em `localStorage`)                        | Carrinho simples                         |
| Ícones        | **lucide-react**                                                      | Leve                                     |
| Qualidade     | ESLint + Prettier + `tsc --noEmit`                                    | Evita bugs                               |

**Sem backend nesta versão.** Dados em arquivos TS/JSON locais; carrinho/pedido/contato **simulados** (com validação e estado de sucesso realistas). Deixar a camada de dados isolada (`src/data`, `src/services`) para plugar API depois.

### 4.1 Estrutura de pastas

```
/
├─ PLANO.md
├─ AGENTS.md                 # regras curtas para o Codex (ver §12)
├─ index.html
├─ public/                   # favicon, og-image, fontes (se self-host)
└─ src/
   ├─ main.tsx, App.tsx, routes.tsx
   ├─ config/site.ts         # nome, slogan, redes, endereços, cores por produto
   ├─ data/                  # roasts.ts, menu.ts, reviews.ts, timeline.ts, locations.ts
   ├─ styles/                # tokens.css, globals.css
   ├─ lib/                   # lenis.ts, motion.ts, cn.ts, format.ts
   ├─ hooks/                 # useReducedMotion, useMediaQuery, useInView
   ├─ store/                 # cart.ts (Zustand)
   ├─ components/
   │  ├─ layout/             # Header, MenuOverlay, Footer, CartDrawer, PageTransition
   │  ├─ ui/                 # Button, Badge, SectionLabel, Marquee, Modal, Input...
   │  └─ sections/           # (home) Hero, ReviewsMarquee, ValueGrid, RoastStage,
   │                         #        StickySteps, StoryTimeline, AppShowcase,
   │                         #        ClubBanner, FinalCta
   ├─ pages/                 # Home, Menu, Roasts, RoastDetail, Story, Locations,
   │                         # Club, Contact, NotFound
   └─ assets/                # images/ (webp), svg/ (ícones, selo, grãos)
```

---

## 5. Mapa do site (páginas)

| Rota              | Página                                                        | Prioridade |
| ----------------- | ------------------------------------------------------------- | ---------- |
| `/`               | Home (storytelling completo)                                  | P0         |
| `/torras`         | Lista de cafés em grão com filtro (torra, notas)              | P0         |
| `/torras/:slug`   | Detalhe do café (notas, moagem, tamanho, adicionar)           | P0         |
| `/cardapio`       | Cardápio da cafeteria (bebidas e comidas, abas por categoria) | P0         |
| `/nossa-historia` | História + timeline + equipe                                  | P1         |
| `/unidades`       | Endereços, horários, "aberto agora", mapa                     | P1         |
| `/clube`          | Assinatura de café (planos e frequência)                      | P1         |
| `/contato`        | Formulário com validação                                      | P1         |
| `*`               | 404 divertida (tema café)                                     | P2         |

Extras globais: **menu overlay fullscreen numerado**, **gaveta do carrinho**, **popup de boas-vindas** (uma vez por sessão), **transição entre páginas**.

---

## 6. Home — seção por seção (especificação)

> Cada seção: **Objetivo → Conteúdo → Interação → Responsivo → Aceite**.

### 6.1 Header + Menu overlay

- Header transparente sobre o hero; vira sólido (blur leve) após rolar.
- Botão "Menu" abre overlay fullscreen com links numerados `01–07`, bloco de "Pedir para retirar" e redes sociais; animação de entrada escalonada (stagger); fecha com `Esc`, foco preso dentro (focus trap).
- Ícone do carrinho com contador animado.
- **Aceite:** navegável só com teclado; `aria-expanded`/`aria-controls` corretos.

### 6.2 Hero

- Headline gigante de duas linhas com **palavra de acento em cor/itálico** (ex.: o contraste serifa vs. mono).
- Subtítulo (1–2 frases), 2 CTAs (primário "Pedir agora" / secundário "Ver unidades"), 2–3 selos pequenos.
- **Campo de grãos com física (Matter.js):** ~25–40 grãos (SVG/PNG pequeno) caem na entrada, quicam no "chão" da seção e **podem ser empurrados/arrastados pelo mouse/toque**. Cada grão com tamanho/rotação diferentes.
- Fallback (mobile fraco / `prefers-reduced-motion`): grãos estáticos posicionados com leve flutuação CSS.
- Destaque do **produto nº 1** (imagem + nome + preço) em card flutuante.
- **Aceite:** 60fps em desktop médio; física pausa quando a seção sai da tela; sem layout shift.

### 6.3 Faixa de depoimentos (Marquee)

- Duas linhas em sentidos opostos (ou uma), loop infinito suave, **pausa no hover**, cards com estrelas, texto curto, nome.
- Respeitar `prefers-reduced-motion` (vira lista com scroll horizontal manual).

### 6.4 Grid de valores (6 cards)

- Ex.: grão selecionado, torra artesanal, produtores parceiros, receita da casa, sustentável, feito com carinho (conteúdo **nosso**, via `data`).
- Cards com ícone SVG próprio, entrada escalonada ao rolar, hover com leve inclinação/sombra.

### 6.5 Palco das Torras (carrossel — assinatura do site)

- Um café em destaque no centro, **imagem grande**, setas ‹ › + teclado ← → + swipe no mobile + indicadores.
- Ao trocar: **a cor do fundo/halo/partículas transiciona para a cor da torra**; nome, nível de torra (barra de 1–5), 3 notas (chips) e preço "a partir de" animam com crossfade.
- Efeito de "luz/vapor" atrás do pacote (mask + gradiente + partículas SVG), diferente do "feixe de UFO" da referência — **nosso conceito: vapor subindo da xícara**.
- Botão "Adicionar" (abre gaveta do carrinho) e "Ver detalhes".
- **Aceite:** `role="region"` + `aria-roledescription="carousel"`, anúncios para leitor de tela, sem salto de layout.

### 6.6 Sticky Steps — "Do grão à xícara"

- 3 passos (ex.: **Origem → Torra → Preparo**), texto à esquerda que fica fixo e troca conforme scroll, visual à direita (ilustração/foto) que muda junto.
- Cada passo com **cor própria**, eyebrow mono `01 — Origem`, título serifado com palavra manuscrita/itálica, parágrafo e CTA.
- Mobile: vira sequência vertical simples (sem sticky).

### 6.7 Nossa História — Timeline horizontal pinada

- Seção ocupa a tela; **scroll vertical move cards na horizontal** (GSAP ScrollTrigger com `pin` + `scrub`), fundo com parallax leve.
- 5–7 marcos com ano, título, texto curto e ilustração (**história real da nossa cafeteria — placeholders até os 3 definirem**).
- Barra de progresso fina embaixo. Mobile: carrossel horizontal com snap.

### 6.8 Cardápio em destaque

- 6–8 itens (bebidas + comida) com foto, preço e etiqueta (novo, vegano, sem lactose). Botão "Ver cardápio completo".

### 6.9 Vitrine do App / Pedido para retirar

- Mockup de celular (SVG/CSS) com tela do pedido; texto "Peça antes, retire sem fila"; (simulação — sem app real).

### 6.10 Clube do Café (assinatura)

- Faixa com **borda rasgada** (clip-path/SVG) em cor de acento, 4 benefícios (ex.: desconto, frequência semanal/quinzenal/mensal, cancela quando quiser, entrega) e CTA.

### 6.11 CTA final + Footer

- CTA grande ("Pronto para provar?") + selos.
- Footer: logo, tagline, colunas (Café, Cardápio, Sobre, Ajuda), redes, horário, newsletter (validação), © ano dinâmico.

### 6.12 Gaveta do carrinho + popup de boas-vindas

- **Carrinho:** lista de itens, +/−, remover, subtotal, cupom, estado vazio ilustrado, "Finalizar" (fluxo simulado com tela de sucesso), persistência em `localStorage`.
- **Popup:** oferta de boas-vindas (ex.: 10% no 1º pedido), aparece 1x por sessão (`sessionStorage`), pergunta preferência de torra (Clara / Média / Escura), tem botão "Não, obrigado", fecha com `Esc`, **não bloqueia leitores de tela**; chip pequeno para reabrir.

---

## 7. Sistema de animação (regras gerais)

1. **Centralizar** durações/easings em `src/lib/motion.ts` (ex.: `ease-out-expo`, `0.6s` padrão, stagger `0.06s`).
2. **Lenis** inicia em `lib/lenis.ts`; integra com ScrollTrigger (`lenis.on('scroll', ScrollTrigger.update)`).
3. **Revelar ao rolar:** fade + translateY(24px), 1 vez por elemento (não repetir).
4. **Texto grande:** reveal por linha/palavra (split manual simples, sem libs pagas).
5. **Hover/cursor:** botões com microinteração (deslocamento de sombra / preenchimento); cards com tilt leve; cursor customizado **opcional** só em desktop com mouse (`pointer: fine`).
6. **Transição de página:** wipe/fade rápido (≤ 500ms).
7. **`prefers-reduced-motion`**: desativa Lenis, física, parallax, marquee e pins; mantém só fades curtos. **Obrigatório.**
8. Animar apenas `transform` e `opacity`; `will-change` só durante a animação.
9. Pausar loops (marquee, física, partículas) quando fora da viewport.

---

## 8. Conteúdo e dados (tudo editável sem mexer em componente)

- `config/site.ts`: `name`, `tagline`, `description`, `social`, `contact`, `colors`.
- `data/roasts.ts`: `{ slug, name, roastLevel(1-5), notes[], color, price, sizes[], grind[], image, description }` — **mínimo 6 cafés**.
- `data/menu.ts`: `{ id, category, name, description, price, tags[], image }` — **mínimo 16 itens**, categorias: Espressos, Com leite, Gelados, Doces, Salgados.
- `data/reviews.ts` (8+), `data/timeline.ts` (5–7), `data/locations.ts` (1–2).
- Todos os textos em **pt-BR**, com tom de marca próprio (definir com o grupo: divertido, acolhedor, direto?).
- Preços formatados com `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.

### Assets

- O Codex **não tem fotos reais**: usar **placeholders** bem feitos (gradientes + SVG de pacote/xícara/grão) e deixar `// TODO(asset)` + lista em `docs/ASSETS.md` com nome de arquivo, tamanho e proporção esperados para os 3 substituírem por fotos/ilustrações próprias.
- Formato: **WebP/AVIF**, `loading="lazy"`, `width/height` definidos, `srcset` nas imagens grandes.

---

## 9. Qualidade (critérios de "nível referência")

**Performance** (Lighthouse mobile): Performance ≥ 90 · Accessibility ≥ 95 · Best Practices ≥ 95 · SEO ≥ 95. LCP < 2.5s, CLS < 0.1.
**Acessibilidade:** HTML semântico, 1 `h1` por página, contraste AA, foco visível, navegação por teclado completa, `alt` descritivo, `aria-*` em carrossel/menu/modal, "skip to content".
**SEO:** `title`/`description` por rota, Open Graph + Twitter card, `sitemap.xml`, `robots.txt`, JSON-LD `CafeOrCoffeeShop` (endereço, horário), favicon completo.
**Responsivo:** testar 360 · 390 · 768 · 1024 · 1280 · 1536 · 1920 px. Sem scroll horizontal acidental.
**Navegadores:** Chrome, Safari (iOS), Firefox, Edge.
**Código:** TypeScript sem `any`, componentes pequenos, sem CSS duplicado, nomes claros, comentários curtos explicando o "porquê".

---

## 10. Fases de execução (checklist)

> Fazer **uma fase por vez**, rodar `npm run build` e `npm run lint` ao final de cada uma e **fazer commit**.

### Fase 0 — Fundação

- [x] Criar projeto Vite + React + TS + Tailwind, ESLint/Prettier.
- [x] Tokens, fontes, reset, `globals.css`, utilitário `cn`.
- [x] Rotas, layout base, `config/site.ts`, `README.md` com como rodar.
- [x] `AGENTS.md` e `docs/ASSETS.md`.

### Fase 1 — Layout global

- [x] Header, Menu overlay, Footer, CartDrawer, skip link.
- [x] Lenis + hook `useReducedMotion`.
- [x] Componentes UI base (Button, Badge, SectionLabel, Modal).

### Fase 2 — Home estática (sem animação complexa)

- [x] Todas as seções do §6 com **conteúdo e responsivo prontos**, vindo de `data/`.
- [x] Imagens placeholder.

### Fase 3 — Animações assinatura

- [x] Hero com física (Matter.js) + fallback.
- [x] Faixa de reviews; em movimento reduzido fica estática com rolagem manual.
- [x] Palco das Torras (cor/vapor/transições).
- [x] Steps de origem, torra e preparo; desktop mantém a etapa visível.
- [x] Timeline pinada horizontal em desktop, rolagem manual em mobile/redução de movimento.
- [x] Transições de menu/modais; reveals de página simplificados em hover/fade.

### Fase 4 — Páginas internas

- [x] `/torras`, `/torras/:slug`, `/cardapio`, `/nossa-historia`, `/unidades`, `/clube`, `/contato`, 404.

### Fase 5 — Comércio simulado

- [x] Store do carrinho (Zustand + persistência), gaveta funcional e checkout simulado.
- [x] Popup de boas-vindas (sessionStorage).

### Fase 6 — Polimento

- [x] SEO/OG/JSON-LD/sitemap, favicon (domínio e dados locais provisórios).
- [x] Lighthouse mobile da build de produção: Performance 95, Accessibility 100, Best Practices 100 e SEO 100; Accessibility e SEO 100 também em `/cardapio`, `/torras`, detalhe de torra, `/contato` e `/clube`. Relatórios em `docs/audits/`.
- [x] Playwright em produção: fluxos visuais/comerciais, rotas e breakpoints 360–1920 px; `prefers-reduced-motion` desativa física, Lenis e pins.
- [x] Lighthouse no executável do Edge: Accessibility 100 e SEO 100.
- [ ] Revisão manual com leitores de tela, fluxo Playwright em Edge e teste em Safari (iOS)/Firefox; esses navegadores/dispositivos não estão disponíveis no MCP deste ambiente.
- [x] Revisão final do código e do README.

---

## 11. Divisão sugerida entre os 3 integrantes

| Pessoa                       | Foco                                                           | Fases           |
| ---------------------------- | -------------------------------------------------------------- | --------------- |
| **A — Estrutura & dados**    | Fundação, rotas, layout global, carrinho, páginas internas     | 0, 1, 4, 5      |
| **B — Animação & interação** | Hero com física, carrossel, sticky steps, timeline, transições | 3               |
| **C — Design & conteúdo**    | Tokens, textos, ilustrações/fotos, SEO, QA e acessibilidade    | 2 (conteúdo), 6 |

Regras de equipe: 1 branch por pessoa/feature, PR pequeno, `main` sempre funcionando, Conventional Commits (`feat:`, `fix:`, `style:`).

---

## 12. Regras para o Codex (copiar para `AGENTS.md`)

1. Ler `PLANO.md` antes de qualquer tarefa; seguir as fases na ordem.
2. Explicar em 2–5 linhas o que fez e como rodar/testar ao final de cada tarefa (os autores são iniciantes).
3. Nunca escrever cor/fonte/valor mágico direto no componente — usar tokens e `config`.
4. Não copiar conteúdo, imagens, fontes ou marca das referências.
5. Todo texto visível em **pt-BR**; todo conteúdo em `data/`, não dentro do JSX.
6. Acessibilidade e `prefers-reduced-motion` fazem parte do "pronto".
7. Antes de dizer "terminei": `npm run lint`, `npx tsc --noEmit`, `npm run build` sem erros.
8. Se algo estiver ambíguo, escolher a opção mais simples, deixar `// TODO(decisão)` e listar em `docs/DECISOES.md` — não travar.
9. Não instalar dependências além das listadas no §4 sem justificar.
10. Commits pequenos e descritivos.

---

## 13. Definição de pronto (DoD)

- [x] Todas as rotas do §5 funcionando; conferidas em 360 e 1920 px, com home e cardápio também nos sete breakpoints do §9.
- [x] Home com as 12 seções do §6 e animações assinatura funcionando (com fallback reduzido).
- [x] Carrinho persistente e fluxo simulado completo, conferidos no Playwright.
- [x] Lighthouse mobile dentro das metas do §9 (relatório `docs/audits/lighthouse-production-mobile.json`).
- [x] Nenhum erro ou aviso no console da build de produção pelo Playwright; lint, TypeScript e build sem erros.
- [x] `README.md`, `docs/ASSETS.md` e `docs/DECISOES.md` atualizados.
- [x] Nenhum conteúdo/asset copiado das referências.
- [ ] Revisão manual com leitores de tela, fluxo Playwright no Edge, testes em Safari/Firefox e commits Conventional Commits; Git não está instalado/disponível neste ambiente.

---

## 14. Decisões em aberto (o grupo precisa definir)

1. **Nome**, slogan e tom de voz da cafeteria.
2. Cafeteria real/fictícia? Cidade e endereço (afeta SEO e página de unidades).
3. Vende café em grão online ou só cardápio local? (define o peso do carrinho)
4. Paleta final (a do §3.1 é ponto de partida).
5. História real para a timeline.
6. Fotos próprias ou ilustrações? (recomendado: ilustração + 1 sessão de fotos)
7. **Prints do site ALt. (Framer)** — enviar capturas de tela para refinarmos o layout inspirado nele (ver §2.3).
