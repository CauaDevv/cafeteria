# Inventário de assets

Não há fotografias reais fornecidas. Nas próximas fases, usar placeholders próprios em gradiente e SVG e marcar cada referência de implementação com `// TODO(asset)`. Trocar pelos arquivos reais sem alterar o conteúdo dos componentes além do necessário.

| Arquivo previsto                 | Uso                                  | Tamanho / proporção sugeridos | Estado                          |
| -------------------------------- | ------------------------------------ | ----------------------------: | ------------------------------- |
| `src/components/sections/Hero.tsx` · `.coffee-bag` | Pacote ilustrado do produto em destaque | 600 × 820 px, 3:4 | TODO(asset): substituir por SVG/foto WebP própria |
| `src/components/sections/BeanPhysics.tsx` · corpos Matter | Grãos decorativos arrastáveis | 96 × 64 px, 3:2 | TODO(asset): substituir retângulos por sprites SVG/WebP |
| `src/components/sections/RoastStage.tsx` · `.roast-bag` | Pacote ilustrado por torra | 900 × 1200 px, 3:4 | TODO(asset): fotografia WebP para cada uma das seis torras |
| `src/components/sections/Steps.tsx` · ícones Lucide | Ilustrações das três etapas | 640 × 640 px, 1:1 | TODO(asset): criar ilustração original ou manter arte CSS |
| `src/components/sections/Timeline.tsx` · `.timeline-art` | Ilustração dos seis marcos | 800 × 600 px, 4:3 | TODO(asset): criar seis ilustrações originais |
| `src/components/sections/MenuHighlight.tsx` · `.menu-pick-art` | Vitrine de seis itens do cardápio | 900 × 900 px, 1:1 | TODO(asset): fotos WebP próprias, lazy loading |
| `src/components/sections/AppShowcase.tsx` · `.phone-mockup` | Mockup demonstrativo do pedido | 640 × 1100 px, 16:9 vertical | TODO(asset): não há app real; manter CSS demonstrativo |
| `src/pages/RoutePage.tsx` · `.location-map` | Mapa demonstrativo da unidade | 1200 × 800 px, 3:2 | TODO(asset): inserir mapa próprio após endereço real |
| `public/og-image.webp` | Compartilhamento social | 1200 × 630 px, 1.91:1 | TODO(asset): produzir quando marca/fotos forem definidas |
| `public/favicon.svg` | Ícone da cafeteria | 64 × 64 px, 1:1 | Ilustração SVG temporária já disponível |

As formas SVG/CSS atuais são placeholders vetoriais e não carregam arquivos raster; os comentários `TODO(asset)` marcam os componentes substituíveis. Ao adicionar imagens de conteúdo, informar `width`/`height`, `alt`, `loading="lazy"` fora da primeira dobra e variantes AVIF/WebP responsivas.
