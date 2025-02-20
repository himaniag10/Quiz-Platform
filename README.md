# Quiz Platform

Quiz Platform is a web-based application that allows users to test their knowledge through interactive quizzes. The platform provides a seamless experience with smooth navigation, a leaderboard system, and a visually appealing design.

## Features

- **Interactive Quiz Experience** – Timed questions with multiple-choice and structured formats.
- **ScoreBoard System** – Tracks scores and ranks users based on performance.
- **Progress Tracking** – Users can view past attempts and improve their scores.
- **Smooth Navigation** – Implemented using React Router for a seamless experience.
- **Responsive Design** – Optimized UI that adapts to different screen sizes.
- **Animated UI Components** – Engaging user experience with smooth transitions.
- **Quiz Timer** – Countdown timer to maintain time-based quiz challenges.
- **Data Storage** – Uses IndexedDB for storing quiz progress locally.

## Live Demo

[**Deployed Application**](https://quizbrainblast.netlify.app/) 

## Getting Started

Follow the steps below to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/himaniag10/Quiz-Platform.git
cd quiz-platform

2. Install Dependencies

npm install

3. Start the Development Server

npm start
The application will be available at http://localhost:3000/.

Project Structure

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

Technologies Used

React.js – Component-based frontend framework.
React Router – Enables smooth page transitions.
Tailwind CSS – Modern and responsive UI design.
IndexedDB – Local database for storing quiz progress.
Netlify  – Deployment platform.

Deployment Guide


Deploying on Netlify
Log in to Netlify.
Click "New Site from Git" and connect your repository.
Configure the build settings:
Build command: npm run build
Publish directory: build
Click "Deploy" to publish your site.

License
This project is licensed under the MIT License.


This version is **clean, well-structured, and professional**—perfect for an internship submission. Let me know if you need any changes! 
