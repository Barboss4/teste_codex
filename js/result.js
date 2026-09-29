(function () {
  var root = document.getElementById("result-content");
  var result;
  try { result = JSON.parse(localStorage.getItem("mentesUltimoResultado")); } catch (_) { result = null; }
  var test = result && window.getTestById(result.testId);
  if (!result || !test) {
    root.innerHTML = '<section class="empty-state"><span class="eyebrow">Nenhum resultado</span><h1>Faça um teste para começar.</h1><p>Seu resultado aparecerá aqui assim que você concluir as perguntas.</p><a class="button button-primary" href="index.html#testes">Ver testes</a></section>';
    return;
  }
  var band = test.bands[0];
  test.bands.forEach(function (candidate) { if (result.percentage >= candidate.min) band = candidate; });
  root.innerHTML = '<section class="result-card">' +
    '<span class="eyebrow">Seu resultado em ' + test.title + '</span>' +
    '<div class="score-ring" style="--score:' + result.percentage + '"><div><strong>' + result.percentage + '%</strong><span>desempenho</span></div></div>' +
    '<p class="score-detail">' + result.earned + ' de ' + result.possible + ' pontos</p>' +
    '<h1>' + band.title + '</h1><p class="result-description">' + band.text + '</p>' +
    '<div class="strength"><span aria-hidden="true">✦</span><div><small>Habilidade em destaque</small><strong>' + test.resultLabel + '</strong></div></div>' +
    '<div class="result-actions"><a class="button button-primary" href="teste.html?id=' + test.id + '">Refazer teste</a><a class="button button-ghost" href="index.html#testes">Explorar outros testes</a></div>' +
    '<p class="disclaimer"><strong>Importante:</strong> este resultado é recreativo e educativo. Ele não constitui avaliação psicológica, vocacional ou medição clínica de QI.</p>' +
    '</section>';
})();
