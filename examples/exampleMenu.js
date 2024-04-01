class Level {
    constructor(title, author, date, href) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.href = href;
    }
}

function setMenu() {
    const menuLevels = [
        new Level("Kaboom Template", "Reid Spreiter", "3/31/2024", "./kaboom_template/kaboom_template.html"),
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