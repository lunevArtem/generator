(function () {
  function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({ status: this.status, statusText: xhr.statusText });
        }
      };
      xhr.onerror = function () {
        reject({ status: this.status, statusText: xhr.statusText });
      };
      xhr.send();
    });
  }

  function getData() {
    var number = Math.floor(document.querySelector("#number").value || 1);
    makeRequest("GET", "https://randomuser.me/api?results=" + number)
      .then(parse)
      .catch(function (response) {
        alert("Somethin' went wrong");
      });
  }

  document.querySelector("#go").addEventListener("click", getData);

  function parse(results) {
    var results = JSON.parse(results);
    console.log(results.results);
    var t = [];
    results.results.forEach(function (user) {
      console.log(user.name.first);
      t.push([
        user.name.title,
        user.name.first,
        user.name.last,
        user.picture.large,
        '<img src="' + user.picture.large + '"/>',
        user.cell,
        user.email,
        user.gender,
        user.location.street,
        user.location.city,
        user.location.state,
        user.location.postcode,
        user.nat
      ]);
    });
    console.log(t);
    var html = "";
    t.forEach(function (row) {
      html += "<tr><td>" + row.join("</td><td>") + "</td></tr>";
    });
    document.querySelector("#results").innerHTML =
      "<table>" + html + "</table>";
  }
})();
