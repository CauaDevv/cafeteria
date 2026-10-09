# Auditorias visuais e Lighthouse

Os relatórios JSON foram gerados em 6 de outubro de 2026 na build de produção servida por `vite preview`, com Lighthouse 13.5 e simulação mobile. O relatório completo da home inclui Performance 95, Accessibility 100, Best Practices 100 e SEO 100. LCP foi 2,4 s, CLS 0,002 e TBT 50 ms.

Também foram auditados Accessibility e SEO nas rotas `/cardapio`, `/torras`, `/torras/quintal-doce`, `/contato` e `/clube`; cada uma marcou 100 nas duas categorias. Os relatórios `lighthouse-mobile.json` e `lighthouse-production-mobile.json` distinguem o primeiro teste diagnóstico no Vite dev do resultado válido em produção.

O executável do Microsoft Edge também marcou Accessibility 100 e SEO 100 na home (`lighthouse-edge-mobile.json`). Esse Lighthouse não verifica os fluxos interativos no Edge.

As capturas `home-desktop.png` e `home-mobile.png` registram a revisão visual feita com Playwright MCP. A validação responsiva percorreu 360, 390, 768, 1024, 1280, 1536 e 1920 px; o fallback de movimento reduzido foi inspecionado separadamente.

As capturas `edge-home-desktop.png` e `edge-home-mobile.png` foram feitas em 6 de outubro de 2026 com Playwright CLI usando o canal Microsoft Edge. Elas registram uma verificação visual em 1440 × 1000 e 390 × 844 px; fluxos interativos no Edge ainda não foram exercitados.

Na revisão interativa adicional pelo Playwright MCP, o menu abriu como diálogo modal e o foco ficou contido: `Shift+Tab` no primeiro foco retornou ao último link; `Tab` no último retornou ao primeiro. Os testes de adicionar um café ao carrinho, abrir o checkout e confirmar a tela demonstrativa também passaram sem mensagens no console.

Em 6 de outubro de 2026, a inspeção de alvos clicáveis em 390 px encontrou botões de filtro com 38 px e ações do cabeçalho, setas/indicadores do carrossel abaixo de 44 px. Foi criado o token `--touch-target` e aplicado a controles de navegação, busca, filtros, carrossel, quantidade e links do rodapé. Após a build, Playwright confirmou cabeçalho, filtros, campo de busca e links do rodapé com ao menos 44 px de altura, além de nenhum overflow horizontal acidental na página de cardápio.

A captura `home-mobile-touch-targets.png` documenta a revisão visual em página completa depois desses ajustes.

Na matriz final Playwright MCP (6 de outubro de 2026), as nove rotas — home, torras, detalhe de torra, cardápio, história, unidades, clube, contato e 404 — foram visitadas em 360, 390, 768, 1024, 1280, 1536 e 1920 px. Todas apresentaram exatamente um `h1`, título e descrição SEO e nenhum overflow horizontal ou erro/aviso de console. Com `prefers-reduced-motion: reduce`, a home não criou canvas/física, classe Lenis nem `pin-spacer`.

Para repetir a auditoria da home depois de gerar uma build:

```bash
npm run build
npm run preview
npx lighthouse http://localhost:4173/ --form-factor=mobile --throttling-method=simulate --only-categories=performance,accessibility,best-practices,seo
```
