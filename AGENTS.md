# Mentes & Talentos — guia do projeto

## Estrutura

- `index.html`: página inicial e catálogo de testes.
- `teste.html`: interface compartilhada por todos os questionários.
- `resultado.html`: leitura do último resultado salvo.
- `css/styles.css`: estilos globais e responsivos.
- `js/tests-data.js`: catálogo, perguntas, pontuação e faixas de resultado.
- `js/home.js`, `js/test.js`, `js/result.js`: lógica específica de cada página.

## Regras

- O projeto é estático, usa JavaScript puro e não exige processo de build.
- Preserve a separação entre dados (`tests-data.js`) e interface.
- Mantenha o site acessível, responsivo e navegável por teclado.
- Todo resultado deve ser apresentado como recreativo, nunca como diagnóstico clínico, psicológico ou vocacional.
- Não colete dados pessoais. O último resultado fica apenas no `localStorage` do navegador, na chave `mentesUltimoResultado`.
- Mantenha identificadores de testes únicos, curtos, sem espaços e sem acentos.

## Como adicionar um teste

1. Adicione um objeto ao array `window.TESTS` em `js/tests-data.js`.
2. Use `available: true` e inclua `resultLabel`, `questions` e `bands`.
3. Para perguntas objetivas, defina `correct` com o índice da alternativa certa.
4. Para perguntas de perfil, defina `scores`, com um valor para cada alternativa.
5. Crie ao menos três faixas em `bands`, ordenadas por `min` (percentual mínimo).
6. Teste o acesso por `teste.html?id=identificador`, a pontuação, o resultado e o comportamento em telas pequenas.

Exemplo mínimo de pergunta objetiva:

```js
{ text: "Pergunta?", options: ["A", "B", "C"], correct: 1 }
```

Exemplo mínimo de pergunta de perfil:

```js
{ text: "Pergunta?", options: ["A", "B", "C"], scores: [3, 2, 0] }
```

Para anunciar um teste futuro, basta cadastrar título, descrição, ícone, cor, duração `"Em breve"` e `available: false`.
