function renderPosts(boston, container) {
  const people = boston.data.sort((p1, p2) => p2[11] - p1[11]);
  const len = boston.data.length;
  let html = '<h1>Here are the top 5 salaries in Boston.</h1>';
  for (let i = 0; i < 5; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  container.innerHTML = '<ul id="topSalaries">' + html + '</ul>';

  html = '<br><h1>Below are employees who make more than 200k per year.</h1>';
  const topEmployees = people.filter(p => p[11] > 200000);
  const lengthOfTopEmployees = topEmployees.length;
  for (let i = 0; i < lengthOfTopEmployees; i++) {
    html +=
      '<li class="post">' + '<h2>' + topEmployees[i][8] + '</h2>' + '<h3>' + topEmployees[i][11] + '</h3>';
  }

  container.innerHTML += '<ul id="topEmployees">' + html + '</ul>';
}
renderPosts(boston, document.getElementById('container'));
