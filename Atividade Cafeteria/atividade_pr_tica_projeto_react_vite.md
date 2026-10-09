# Atividade Prática: Desenvolvimento Web com React + Vite

> **Valor:** 30% da menção do 3º trimestre  
> **Formato:** Trabalho em dupla  

---

## 📋 Instruções Gerais
Escolham um tema e comecem a desenvolver um site utilizando **React + Vite**. O projeto será construído ao longo das aulas, aplicando os conteúdos estudados.

* O **tema é livre**.
* **Sugestões de temas:** Loja virtual, cafeteria, academia, adoção de animais, turismo, jogos, biblioteca, eventos ou serviços.

---

## 🎯 Etapas do Projeto

### 1. Planejamento do Projeto
Antes de começar a programar, registrem em um documento:
- [ ] Nome do projeto e nomes dos integrantes da dupla.
- [ ] Tema escolhido e público-alvo que utilizará o site.
- [ ] Problema ou necessidade que o site pretende atender.
- [ ] Principais informações e funcionalidades que o site deverá apresentar.

### 2. Organização Visual
- [ ] Façam um esboço (wireframe) da página inicial (pode ser no caderno, Canva ou Miro), indicando a posição do menu, textos, imagens, botões e cartões de conteúdo.
- [ ] Escolham uma **paleta de cores** e uma **fonte** que combinem com o tema escolhido.

### 3. Criação e Configuração do Projeto
Execute os comandos abaixo no terminal para inicializar o ambiente:

```bash
npm create vite@latest
cd nome-do-projeto
npm install
npm run dev
```

> ⚠️ **Importante:** Substituam `nome-do-projeto` pelo nome escolhido, utilizando **letras minúsculas e hífens** no lugar de espaços.

---

### 4. Desenvolvimento da Primeira Versão
A página inicial deverá conter, no mínimo, os seguintes elementos:

* **Header (Cabeçalho):** Nome ou logotipo do projeto e menu de navegação.
* **Hero / Presentation (Apresentação):** Título, descrição do projeto e um botão de ação.
* **Main Content (Conteúdo Principal):** Pelo menos **três cartões (cards)** relacionados ao tema (ex.: produtos, serviços, animais para adoção).
* **About (Sobre):** Uma breve explicação sobre a proposta do projeto.
* **Footer (Rodapé):** Informações de contato fictícias e identificação do projeto.

#### Arquitetura de Componentes
- Organizem a interface em pelo menos **4 componentes reutilizáveis** (ex.: `Header`, `Card`, `Sobre`, `Footer`).
- Utilizem esses componentes dentro do `App.tsx`.
- O componente de **Cartão (`Card`)** deve obrigatoriamente receber informações via **`props`**, permitindo reaproveitar a mesma estrutura para exibir dados diferentes.

---

### 5. Interação com o Usuário
Implementem pelo menos **uma interação** utilizando o hook `useState`. Escolham uma das opções abaixo:

- [ ] Botão para favoritar um item ou contador de itens selecionados.
- [ ] Botão para mostrar/ocultar informações adicionais.
- [ ] Filtro simples por categoria.
- [ ] Formulário que exiba uma mensagem de confirmação após o envio.

---

### 6. Estilização e Revisão
- Utilizem **CSS** para organizar cores, fontes, espaçamentos e alinhamentos.
- A página deve ser **responsiva** (adaptar-se bem a telas de computador e celular).
- Verifiquem no navegador se os componentes estão renderizando corretamente, se as interações funcionam e se não há erros no console do desenvolvedor.

---

## 👥 Trabalho em Dupla e Entrega

### Dinâmica de Trabalho
Os dois integrantes devem participar ativamente do planejamento e da programação. Pratiquem a técnica de *Pair Programming*: alternem entre quem digita o código (piloto) e quem acompanha, revisa e sugere soluções (co-piloto).

### Instruções para Envio
1. Compactem a pasta do projeto em formato `.zip` **(ATENÇÃO: Removam a pasta `node_modules` antes de zipar!)**.
2. Anexem um pequeno arquivo de texto contendo o planejamento inicial e as instruções para executar o site.

### Apresentação
Cada dupla terá até **5 minutos** para:
1. Apresentar o tema escolhido.
2. Demonstrar a primeira versão do site funcionando.
3. Explicar a estrutura de um dos componentes e a lógica da interação com `useState`.

---

## 📊 Critérios de Avaliação
* **Organização do projeto:** Estrutura de pastas e código limpo.
* **Componentização e Props:** Uso correto de componentes reutilizáveis e passagem de propriedades.
* **Uso de Estado (`useState`):** Funcionamento correto da interação escolhida.
* **Apresentação Visual:** Design, alinhamento, estilização e responsividade.
* **Participação da Dupla:** Engajamento e conhecimento de ambos os membros durante a apresentação.

---

## 🔥 Desafio Extra
 Renderizar a lista de cartões dinamicamente a partir de um array de objetos utilizando o método **`.map()`**.