class Level {
  constructor(title, author, date, href) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.href = href;
  }
}

function setMenu() {
  //
  // Add Levels Here
  //
  // new Level("level title", "author", "date", "href"),
  // href = "./level_folder_name/index.html"
  //
  const menuLevels = [
    new Level(
      "Snake",
      "Aaron Alexander",
      "3/31/2024",
      "./aaron_snake/index.html"
    ),
    new Level(
      "Secret Square",
      "Reid Spreiter",
      "4/1/2024",
      "./secret_square/secret_square.html"
    ),
  ];

  const menu = document.querySelector(".menu-container");
  for (const level of menuLevels) {
    menu.innerHTML += `
        <a href="${level.href}" class="standard-box">
            <div class="level-title">${level.title}</div>
            <div>Author: ${level.author}</div>
            <div>Date Created: ${level.date}</div>
        </a>
        `;
  }
}
