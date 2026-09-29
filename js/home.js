(function () {
  var grid = document.getElementById("test-grid");
  var lastResult;
  try { lastResult = JSON.parse(localStorage.getItem("mentesUltimoResultado")); } catch (_) { lastResult = null; }

  window.TESTS.forEach(function (test) {
    var card = document.createElement("article");
    card.className = "test-card " + test.color + (test.available ? "" : " unavailable");
    var action = test.available
      ? '<a class="card-link" href="teste.html?id=' + test.id + '">Começar teste <span aria-hidden="true">→</span></a>'
      : '<span class="coming-soon">Em breve</span>';
    var previous = lastResult && lastResult.testId === test.id
      ? '<a class="previous-result" href="resultado.html">Ver último resultado: ' + lastResult.percentage + '%</a>'
      : "";
    card.innerHTML = '<div class="card-icon" aria-hidden="true">' + test.icon + '</div>' +
      '<div class="card-meta"><span>' + test.duration + '</span></div>' +
      '<h3>' + test.title + '</h3><p>' + test.description + '</p>' + action + previous;
    grid.appendChild(card);
  });
})();
