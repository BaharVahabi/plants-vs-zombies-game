<div align="center">

# 🌻 Plants vs. Zombies Clone

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### A fan-made recreation of the classic Plants vs. Zombies game built with Vanilla JavaScript.

*Developed as a team project to practice JavaScript, DOM manipulation, object-oriented programming, and browser game development.*

<br>

> ⚠️ **Educational Project**  
> This project was created for learning purposes only and is not affiliated with EA or PopCap Games.

</div>

## 📚 Table of Contents

- [📖 About The Project](#user-content--about-the-project)
- [✨ Features](#user-content--features)
- [🎮 Gameplay](#user-content--gameplay)
- [🛠 Technologies](#user-content--technologies)
- [⚙️ Game Mechanics](#user-content-️-game-mechanics)
- [📂 Project Structure](#user-content--project-structure)
- [🚀 Getting Started](#user-content--getting-started)
- [🎮 Controls](#user-content--controls)
- [📸 Screenshots](#user-content--screenshots)
- [⚠️ Disclaimer](#user-content-️-disclaimer)
- [📄 License](#user-content--license)
- 
## 📖 About The Project

**Plants vs. Zombies Clone** is a browser-based recreation of the classic tower defense game, developed as a **team project** using **HTML**, **CSS**, and **Vanilla JavaScript**.

The primary goal of this project was to strengthen our JavaScript skills by implementing real game mechanics from scratch, including object-oriented programming, DOM manipulation, collision detection, animations, game state management, and event-driven interactions.

Players must strategically place different plants to defend their lawn against waves of zombies. Each plant has unique abilities and costs a specific amount of sun, requiring players to carefully manage resources and choose the right strategy to survive.

Throughout the development process, we focused on writing modular code, organizing game logic into separate files, and recreating the gameplay experience of the original game as closely as possible while deepening our understanding of front-end game development.

<br/>

## ✨ Features

* 🌻 Multiple playable plants with unique abilities.
* 🧟 Multiple zombie types with different behaviors.
* ☀️ Sun collection and resource management system.
* 🌱 Strategic plant placement mechanics.
* 💥 Projectile and collision detection system.
* 🦷 Unique plant abilities, including attacking and defensive plants.
* 🌊 Pool-based gameplay with water-specific mechanics.
* 🎵 Background music and sound effects.
* 💾 Player name persistence using Local Storage.
* 🎮 Interactive main menu and level selection screen.
* 📈 Progressive level system.
* ⏸️ In-game pause and menu system.
* 🎨 Animated characters and visual effects.
* 🧩 Object-oriented game architecture using Vanilla JavaScript.

<br/>

## 🎮 Gameplay

In **Plants vs. Zombies Clone**, players must defend their lawn by strategically placing plants to stop waves of approaching zombies before they reach the end of the field.

The game revolves around collecting **Sun**, the primary in-game resource used to purchase plants. Each plant has its own cost, health, and unique ability, encouraging players to carefully manage resources and choose the right strategy for every situation.

As the game progresses, different zombie types appear with varying durability and behaviors, requiring players to combine offensive, defensive, and support plants to survive.

The project recreates the core gameplay experience of the original Plants vs. Zombies while focusing on implementing the mechanics using Vanilla JavaScript and browser APIs.

<br/>

## 🛠 Technologies

This project was built using core web technologies without relying on external frameworks or game engines.

| Technology                    | Purpose                                                                                             |
| ----------------------------- | --------------------------------------------------------------------------------------------------- |
| **HTML5**                     | Structure and layout of the game interface.                                                         |
| **CSS3**                      | Styling, animations, and responsive visual components.                                              |
| **Vanilla JavaScript (ES6+)** | Game logic, object-oriented programming, DOM manipulation, collision detection, and event handling. |
| **Local Storage**             | Persisting the player's name between sessions.                                                      |
| **HTML Audio API**            | Managing background music and sound effects.                                                        |
| **DOM API**                   | Rendering game objects and handling real-time interactions.                                         |

<br/>

## ⚙️ Game Mechanics

The game recreates several core mechanics inspired by the original **Plants vs. Zombies**, all implemented using Vanilla JavaScript.

### 🌞 Sun Economy

* Collect falling Sun to earn resources.
* Produce additional Sun using Sunflowers.
* Spend Sun strategically to place different plants.

### 🌱 Plant System

* Multiple plant types with unique costs and abilities.
* Offensive, defensive, and utility plants.
* Plant placement validation based on terrain.
* Water plants and Lily Pad support for pool lanes.

### 🧟 Zombie System

* Multiple zombie types with different health values.
* Automatic zombie spawning.
* Walking and eating behaviors.
* Health and damage system.

### 💥 Combat System

* Peashooters automatically detect enemies and fire projectiles.
* Real-time collision detection between bullets and zombies.
* Damage calculation and zombie elimination.

### 🌊 Terrain Mechanics

* Separate land and pool lanes.
* Water-specific planting rules.
* Visual feedback for invalid placements.

### 🎵 Audio & Visual Effects

* Background music during gameplay.
* Interactive sound effects.
* Animated plants, zombies, and projectiles.

### 💾 Game State

* Player name persistence using Local Storage.
* In-game pause menu.
* Level selection interface.
* Resource tracking during gameplay.

<br/>

## 📂 Project Structure

```text
Plants-vs-Zombies/
├── firstpage/          # Loading screen assets
├── font/               # Custom fonts
├── images/             # Game images and UI assets
├── keyframes/          # CSS animations
├── levels/             # Level assets and character animations
├── menu/               # Main menu assets
├── script/
│   ├── main.js         # Loading screen and application entry
│   ├── menu.js         # Main menu logic
│   ├── levelsSlider.js # Level selection system
│   └── game.js         # Core gameplay mechanics
├── sound/              # Background music and sound effects
├── style/              # CSS styles
├── planetvszombie.htm  # Main HTML file
└── README.md
```
<br/>

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

You only need a modern web browser such as:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox

### Installation

1. Clone the repository.

```bash
git clone https://github.com/BaharVahabi/plants-vs-zombies-game.git
```

2. Navigate to the project directory.

3. Open the project.

Simply open the `planetvszombie.htm` file in your browser, or use **Live Server** in Visual Studio Code for a better development experience.

### Recommended

Using the **Live Server** extension is recommended to ensure all assets, sounds, and animations are loaded correctly during development.

<br/>

## 🎮 Controls

| Action              | Control                                      |
| ------------------- | -------------------------------------------- |
| Start the game      | Click **Adventure**                          |
| Select a level      | Choose an available level and press **Play** |
| Collect Sun         | Click on the falling Sun                     |
| Select a plant      | Click on a plant card                        |
| Place a plant       | Click on an empty tile                       |
| Pause the game      | Click the **Menu** button                    |
| Resume the game     | Click **Back to Game**                       |
| Return to Main Menu | Click **Back to Main Menu**                  |

<br/>

## 📸 Screenshots

### 🎮 Gameplay Preview

<p align="center">
  <img src="./docs/gameplay.gif" width="85%">
</p>

<p align="center">
  <em>Gameplay preview from one of the game levels.</em>
</p>

---

### 🖼️ Menus & Other Screens

<p align="center">
  <img src="./docs/main-menu.png" width="32%">
  <img src="./docs/level-selection.png" width="32%">
  <img src="./docs/pause-menu.png" width="32%">
</p>

<p align="center">
  <img src="./docs/pool-level.png" width="32%">
  <img src="./docs/game-over.png" width="32%">
  <img src="./docs/win-screen.png" width="32%">
</p>

<br/>

## ⚠️ Disclaimer

This project is a **fan-made educational recreation** of the original **Plants vs. Zombies** game, developed solely for learning and academic purposes.

All original game assets—including characters, artwork, sound effects, music, and other intellectual property—are the property of **PopCap Games** and **Electronic Arts (EA)**.

This project is **not affiliated with, endorsed by, or sponsored by PopCap Games or Electronic Arts**. No copyright infringement is intended, and the project is not distributed for commercial purposes.

<br/>

## 📄 License

This project is licensed under the **MIT License**.

Please note that the source code of this project is licensed under MIT, while the original **Plants vs. Zombies** assets (including images, audio, music, characters, and other copyrighted materials) remain the property of **PopCap Games** and **Electronic Arts (EA)** and are **not covered** by the MIT License.

See the `LICENSE` file for more information.

