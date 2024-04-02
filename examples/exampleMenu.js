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
        new Level("Kaboom Move", "Reid Spreiter", "4/1/2024", "./kaboom_move/kaboom_move.html"),
        new Level("Kaboom Endless Jumper", "Reid Spreiter", "4/1/2024", "./kaboom_endless_jumper/kaboom_endless_jumper.html"),
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