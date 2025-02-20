# Quiz Platform

Quiz Platform is a web-based application that allows users to test their knowledge through interactive quizzes. The platform provides a seamless experience with smooth navigation, a leaderboard system, and a visually appealing design.

## Features

- **Interactive Quiz Experience** – Timed questions with multiple-choice and structured formats.
- **Scoreboard System** – Tracks scores and ranks users based on performance.
- **Progress Tracking** – Users can view past attempts and improve their scores.
- **Smooth Navigation** – Implemented using React Router for a seamless experience.
- **Responsive Design** – Optimized UI that adapts to different screen sizes.
- **Animated UI Components** – Engaging user experience with smooth transitions.
- **Quiz Timer** – Countdown timer to maintain time-based quiz challenges.
- **Data Storage** – Uses IndexedDB for storing quiz progress locally.

## Live Demo

[**Deployed Application**](#) *(Replace with the actual deployment link once available)*

## Getting Started

Follow the steps below to set up and run the project locally.

### 1. Clone the Repository

```sh
git clone https://github.com/himaniag10/Quiz-Platform.git
cd quiz-platform
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Development Server

```sh
npm start
```

The application will be available at **http://localhost:3000/**.

## Project Structure

```lua
quiz-platform/
│-- src/
│   │-- components/
│   │   │-- Layout/
│   │   │   │-- Header.js
│   │   │   │-- Footer.js
│   │   │   │-- Layout.js
│   │   │-- Quiz/
│   │   │   │-- AttemptHistory.js
│   │   │   │-- QuizQuestion.js
│   │   │   │-- QuizTimer.js
│   │   │   │-- ScoreBoard.js
│   │-- data/
│   │   │-- questions.json
│   │-- pages/
│   │   │-- Welcome.js
│   │   │-- QuizPage.js
│   │   │-- ResultPage.js
│   │-- utils/
│   │   │-- IndexedDB.js
│   │   │-- timer.js
│   │-- App.js
│   │-- index.css
│   │-- index.js
│-- public/
│-- package.json
│-- README.md
```

## Technologies Used

* **React.js** – Component-based frontend framework.
* **React Router** – Enables smooth page transitions.
* **Tailwind CSS** – Modern and responsive UI design.
* **IndexedDB** – Local database for storing quiz progress.
* **Netlify** – Deployment platform.

## Deployment Guide

### Deploying on Netlify

1. Log in to **Netlify**.
2. Click **"New Site from Git"** and connect your repository.
3. Configure the build settings:
   * **Build command:** `npm run build`
   * **Publish directory:** `build`
4. Click **"Deploy"** to publish your site.

## License

This project is licensed under the **MIT License**.