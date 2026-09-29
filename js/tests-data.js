/* Para adicionar testes, consulte AGENTS.md. Este arquivo não contém lógica de interface. */
window.TESTS = [
  {
    id: "raciocinio",
    title: "Raciocínio lógico",
    description: "Observe padrões, relações e problemas para exercitar seu pensamento analítico.",
    icon: "◇",
    color: "violet",
    duration: "3 min",
    available: true,
    resultLabel: "Pensamento analítico",
    questions: [
      { text: "Qual número completa a sequência: 2, 4, 8, 16, ___?", options: ["18", "24", "30", "32"], correct: 3 },
      { text: "Todos os loros são azuis. Nilo é um loro. O que podemos concluir?", options: ["Nilo é azul", "Nilo pode ser verde", "Todo azul é loro", "Não há informação suficiente"], correct: 0 },
      { text: "Qual elemento não pertence ao grupo?", options: ["Triângulo", "Quadrado", "Círculo", "Cubo"], correct: 3 },
      { text: "Se 3 máquinas fazem 3 peças em 3 minutos, quantas peças 6 máquinas fazem em 3 minutos?", options: ["3", "6", "9", "18"], correct: 1 },
      { text: "Ana é mais alta que Bia. Bia é mais alta que Caio. Quem é o mais baixo?", options: ["Ana", "Bia", "Caio", "Não é possível saber"], correct: 2 },
      { text: "Livro está para leitura assim como garfo está para…", options: ["cozinha", "comida", "mesa", "refeição"], correct: 3 }
    ],
    bands: [
      { min: 0, title: "Explorador em desenvolvimento", text: "Você está aquecendo sua percepção de padrões. Exercícios curtos e frequentes podem tornar essas relações mais naturais." },
      { min: 50, title: "Observador consistente", text: "Você reconhece boas conexões e resolve situações estruturadas com segurança. Há uma base sólida para continuar evoluindo." },
      { min: 80, title: "Estrategista de padrões", text: "Você demonstrou excelente leitura de relações, sequências e deduções. Problemas complexos parecem despertar sua curiosidade." }
    ]
  },
  {
    id: "artes",
    title: "Aptidão artística",
    description: "Explore sua sensibilidade visual, curiosidade criativa e expressão de ideias.",
    icon: "✦",
    color: "coral",
    duration: "3 min",
    available: true,
    resultLabel: "Expressão criativa",
    questions: [
      { text: "Quando encontra uma página em branco, você costuma…", options: ["Imaginar várias possibilidades", "Procurar uma referência", "Esperar uma instrução", "Evitar começar"], scores: [3, 2, 1, 0] },
      { text: "Ao visitar um lugar novo, o que mais chama sua atenção?", options: ["Cores, formas e detalhes", "As histórias das pessoas", "A organização do espaço", "Somente o objetivo da visita"], scores: [3, 3, 2, 0] },
      { text: "Como você reage quando uma ideia não funciona?", options: ["Experimento outro caminho", "Ajusto o que já fiz", "Peço uma solução pronta", "Abandono imediatamente"], scores: [3, 2, 1, 0] },
      { text: "Qual atividade parece mais interessante?", options: ["Criar uma identidade visual", "Escrever uma história", "Montar uma planilha", "Repetir um procedimento"], scores: [3, 3, 1, 0] },
      { text: "Você percebe pequenas diferenças entre tons, sons ou estilos?", options: ["Quase sempre", "Frequentemente", "Às vezes", "Raramente"], scores: [3, 2, 1, 0] },
      { text: "Ao explicar uma ideia, você gosta de usar…", options: ["Imagens e metáforas", "Exemplos e histórias", "Dados objetivos", "A menor quantidade de detalhes"], scores: [3, 3, 1, 0] }
    ],
    bands: [
      { min: 0, title: "Criatividade em descoberta", text: "Seu repertório criativo pode crescer com experiências novas, referências variadas e liberdade para testar sem buscar perfeição." },
      { min: 45, title: "Olhar criativo", text: "Você demonstra abertura a ideias e boa percepção estética. Projetos práticos podem ajudar a transformar essa sensibilidade em expressão." },
      { min: 80, title: "Expressão inventiva", text: "Curiosidade, experimentação e sensibilidade aparecem com força no seu perfil. Você tende a encontrar caminhos originais para comunicar ideias." }
    ]
  },
  { id: "ciencias", title: "Ciências", description: "Investigue sua curiosidade, método e interesse em compreender fenômenos.", icon: "⌬", color: "green", duration: "Em breve", available: false },
  { id: "comunicacao", title: "Comunicação", description: "Entenda como você organiza ideias, escuta e se conecta com pessoas.", icon: "◌", color: "blue", duration: "Em breve", available: false },
  { id: "profissional", title: "Perfil profissional", description: "Reconheça ambientes, atividades e desafios que mais motivam você.", icon: "↗", color: "yellow", duration: "Em breve", available: false }
];

window.getTestById = function (id) {
  return window.TESTS.find(function (test) { return test.id === id; });
};
