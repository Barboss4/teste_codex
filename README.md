# Mentes & Talentos

Site estático de testes recreativos para explorar habilidades, interesses e formas de pensar. A aplicação oferece questionários rápidos, calcula a pontuação no navegador e apresenta uma leitura personalizada ao final.

> Os resultados são apenas recreativos e não têm finalidade diagnóstica, psicológica, vocacional ou profissional.

## Funcionalidades

- catálogo de testes disponíveis e futuros;
- questionários objetivos e de perfil;
- cálculo de pontuação e faixas de resultado;
- armazenamento local do último resultado;
- interface responsiva, acessível e navegável por teclado;
- funcionamento inteiramente no navegador, sem coleta de dados pessoais.

## Como executar

O projeto não exige instalação de dependências nem processo de build. Clone o repositório e abra `index.html` em um navegador moderno.

```bash
git clone https://github.com/Barboss4/teste_codex.git
cd teste_codex
```

Também é possível servir a pasta com qualquer servidor HTTP estático de sua preferência.

## Estrutura

```text
.
├── index.html          # página inicial e catálogo
├── teste.html          # interface dos questionários
├── resultado.html      # apresentação do último resultado
├── css/
│   └── styles.css      # estilos globais e responsivos
└── js/
    ├── tests-data.js   # testes, perguntas, pontuação e faixas
    ├── home.js         # lógica da página inicial
    ├── test.js         # execução dos questionários
    └── result.js       # exibição dos resultados
```

## Testes disponíveis

- Raciocínio lógico
- Aptidão artística

Ciências, comunicação e perfil profissional aparecem no catálogo como conteúdos futuros.

## Privacidade

Nenhum dado pessoal é coletado ou enviado. O último resultado fica somente no `localStorage` do navegador, na chave `mentesUltimoResultado`.
