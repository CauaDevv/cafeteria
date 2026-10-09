# Regras do projeto

1. Leia `docs/PLANO.md` antes de qualquer tarefa e siga as fases na ordem.
2. Ao concluir uma tarefa, explique em 2–5 linhas o que fez e como rodar/testar; o grupo está aprendendo.
3. Nunca escreva cor, fonte ou valor de design direto no componente: use tokens ou `src/config`.
4. Não copie conteúdo, imagens, fontes ou marca das referências.
5. Todo texto visível fica em português do Brasil e em `src/data/`, não dentro do JSX.
6. Acessibilidade e suporte a `prefers-reduced-motion` fazem parte do pronto.
7. Antes de concluir: rode `npm run lint`, `npx tsc --noEmit` e `npm run build` sem erros.
8. Para ambiguidades, escolha a opção mais simples, anote `// TODO(decisão)` e registre em `docs/DECISOES.md`; não pare esperando resposta.
9. Não instale dependências além das listadas na seção 4 de `docs/PLANO.md` sem justificar.
10. Faça commits pequenos e descritivos seguindo Conventional Commits (`feat:`, `fix:`, `style:`).
