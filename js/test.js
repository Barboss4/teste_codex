(function () {
  var params = new URLSearchParams(window.location.search);
  var test = window.getTestById(params.get("id"));
  if (!test || !test.available) { window.location.replace("index.html"); return; }

  var current = 0;
  var answers = new Array(test.questions.length).fill(null);
  var area = document.getElementById("question-area");
  var nextButton = document.getElementById("next-button");
  var backButton = document.getElementById("back-button");
  document.getElementById("quiz-category").textContent = test.title;
  document.title = test.title + " | Mentes & Talentos";

  function render() {
    var question = test.questions[current];
    document.getElementById("progress-label").textContent = "Pergunta " + (current + 1) + " de " + test.questions.length;
    document.getElementById("progress-fill").style.width = ((current + 1) / test.questions.length * 100) + "%";
    area.innerHTML = '<p class="question-number">QUESTÃO ' + String(current + 1).padStart(2, "0") + '</p>' +
      '<h1 class="question-title">' + question.text + '</h1><div class="options" role="radiogroup" aria-label="Alternativas"></div>';
    var options = area.querySelector(".options");
    question.options.forEach(function (option, index) {
      var button = document.createElement("button");
      button.className = "option" + (answers[current] === index ? " selected" : "");
      button.type = "button";
      button.setAttribute("role", "radio");
      button.setAttribute("aria-checked", answers[current] === index ? "true" : "false");
      button.innerHTML = '<span>' + String.fromCharCode(65 + index) + '</span>' + option;
      button.addEventListener("click", function () { answers[current] = index; render(); });
      options.appendChild(button);
    });
    backButton.style.visibility = current === 0 ? "hidden" : "visible";
    nextButton.disabled = answers[current] === null;
    nextButton.textContent = current === test.questions.length - 1 ? "Ver resultado →" : "Próxima →";
  }

  function finish() {
    var earned = 0;
    var possible = 0;
    test.questions.forEach(function (question, index) {
      if (Array.isArray(question.scores)) {
        earned += question.scores[answers[index]];
        possible += Math.max.apply(null, question.scores);
      } else {
        earned += answers[index] === question.correct ? 1 : 0;
        possible += 1;
      }
    });
    var result = { testId: test.id, earned: earned, possible: possible, percentage: Math.round(earned / possible * 100), date: new Date().toISOString() };
    localStorage.setItem("mentesUltimoResultado", JSON.stringify(result));
    window.location.href = "resultado.html";
  }

  nextButton.addEventListener("click", function () { if (answers[current] === null) return; current < test.questions.length - 1 ? (current += 1, render()) : finish(); });
  backButton.addEventListener("click", function () { if (current > 0) { current -= 1; render(); } });
  render();
})();
