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
        new Level("Snake", "Aaron Alexander", "3/31/2024", "./level_1_snake/index.html"),
    ];

    const menu = document.querySelector(".menu-container");
    for (const level of menuLevels) {
        menu.innerHTML += `
        <a href="${level.href}" class="standard-box">
            <div>${level.title}</div>
            <div>Author: ${level.author}</div>
            <div>Date Created: ${level.date}</div>
        </a>
        `;
    }
}