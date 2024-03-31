
# CS Club Game Showcase

Welcome to the CS Club Game Showcase! This project is meant to be a way for us to create cool JavaScript games and share them with everyone else in the club. Follow the instructions below to contribute your own game to the showcase.

View the current project here: https://unt-csce-club.github.io/CSCE-community-game/
## How to Contribute

1. **Fork the Repository**

   First, fork the repository to make a new repo. Then clone it to your local machine using the following command:

   ```bash
   git clone YOUR_FORK_URL
   ```

2. **Create Your Game Folder**

   Create a new folder for your game inside the project directory. Name the folder according to your game, preferably with a descriptive name. For example, I named mine `level_1_snake`.
   This is where you'll code your game.

3. **Add Your Level**
   In the `index.html` file located at the root of the project, locate the `<div class="menu-container">` section. Here, you'll find anchor tags (`<a>`) representing each level. Add a new anchor tag for your game (you're welcome to customize your anchor tag's information and style if you want!).
   Make sure that the `href` field points to your game's HTML file.
   Ex: For level 1, I had `href="./level_1_snake/index.html"`
   Note: make sure you add the `.` at the beginning, otherwise when the page is deployed it'll route to the wrong file

4. **Commit and Push Your Changes**
   After adding your game folder and updating the level HTML, commit your changes and push them to the repository.

```bash
    git add .
    git commit -m "Added [Your Game Name] level"
    git push origin main
```

5. **Submit a Pull Request**
   Finally, submit a pull request to merge your changes into the main branch. We will review your contribution and merge it if everything looks good.

Congratulations! Your game is now part of the showcase.
