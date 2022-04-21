function foo1() {
  let userC = document.querySelector("input[name='count']").value;

  fetch("https://randomuser.me/api/?results=" + userC)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);

      data.results.forEach((user) => {
        console.log(user.name.first);
        let container = document.createElement("div");
        container.classList.add("container-fluid");
        container.style.marginTop = "1 rem";
        let rows = document.createElement("div");
        rows.classList.add("row");
        let col = document.createElement("div");
        col.classList.add("col-sm");
        let col2 = document.createElement("div");
        col2.classList.add("col-sm");
        let col3 = document.createElement("div");
        col3.classList.add("col-sm");
        col3.style.width = "100px";
        col.style.width = "100px";

        let Card = document.createElement("div");
        Card.classList.add("card");
        let Body = document.createElement("div");
        Body.classList.add("card-body");
        let Text = document.createElement("p");
        Text.classList.add("card-text");
        let Text2 = document.createElement("p");
        Text2.classList.add("card-text");
        let Text3 = document.createElement("p");
        Text3.classList.add("card-text");
        let Text4 = document.createElement("p");
        Text4.classList.add("card-text");
        const h5 = document.createElement("h5");
        const h6 = document.createElement("h5");
        let Img = document.createElement("img");
        Img.classList.add("card-img-top");
        Img.style.width = "100px";
        Img.style.height = "100px";
        Card.style.border = "1px solid";
        Card.style.marginTop = "1rem";

        document.body.appendChild(container);
        container.appendChild(rows);
        rows.appendChild(col);

        rows.appendChild(col2);
        col2.appendChild(Card);
        Card.appendChild(Body);
        Body.appendChild(Img);
        Body.appendChild(h5);
        Body.appendChild(Text);
        Body.appendChild(Text2);
        Body.appendChild(Text3);
        Body.appendChild(Text4);

        rows.appendChild(col3);

        Img.src = user.picture.large;
        h5.textContent = user.name.first + " " + user.name.last;
        Text.textContent = "Email: " + user.email;
        Text2.textContent = "Phone: " + user.phone;
        Text3.textContent =
          "Age: " +
          user.dob.age +
          ", Date: " +
          formatDate(user.dob.date) +
          ", Gender: " +
          user.gender;
        Text4.textContent = user.location.country + ", " + user.location.city;
      });
    });
}
function foo3() {
  location.reload();
}

function formatDate(date) {
  var d = new Date(date),
    month = d.getMonth(),
    date = d.getDate(),
    year = d.getFullYear();

  month++;

  return month + "." + date + "." + year;
}
