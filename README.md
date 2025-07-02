<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" width="80" style="margin-right: 15px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" width="80" style="margin-right: 15px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3 Logo" width="80">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg" alt="Electron Logo" width="80" style="margin-right: 15px;">
</p>

# 🗂️ Task Manager Desktop App 📝

A lightweight and user-friendly **desktop task manager app** built with **Electron.js**, **JavaScript**, **React.js**, **Tailwind CSS**, and **Anime.js**. This project is still a work in progress with more features planned.

Currently, it includes basic functionalities such as adding and deleting tasks with a simple and clean design. The app will run natively on desktop environments thanks to Electron.

## What It Does for now

- Add and delete tasks easily

## Tech Stack and Setup

This app is built using the following key technologies:

- **Electron.js**: for creating the cross-platform desktop app shell and handling native OS features.
- **React.js**: for building the frontend UI and managing the app's component structure.
- **Tailwind CSS**: utility-first CSS framework for fast and responsive styling.
- **Anime.js**: to add smooth animations and enhance user experience.
- **Vite**: a fast development server and build tool for modern frontend projects.
- **PostCSS and Autoprefixer**: for processing Tailwind CSS styles.

## Project Structure Overview

- `src/main/index.js`: Electron main process — creates app windows and loads the React frontend.
- `src/renderer/main.jsx`: React entry point — renders the React app inside the Electron window.
- `src/renderer/App.jsx`: Main React component.
- `src/renderer/index.html`: HTML template with `<div id="root"></div>` where React mounts.
- `tailwind.config.js` and `postcss.config.js`: Tailwind CSS and PostCSS configurations.