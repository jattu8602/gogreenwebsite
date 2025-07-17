# GoGreen Website

A modern Next.js website showcasing the GoGreen eco-friendly travel app with Android APK download functionality.

## Features

- 🌱 Modern, responsive design built with Next.js App Router
- 📱 Android APK download functionality
- 🎨 Tailwind CSS for beautiful styling
- ♻️ Eco-friendly theme and branding
- 📱 Mobile-responsive layout

## About GoGreen App

GoGreen is a mobile application that helps users plan eco-friendly trips and reduce their carbon footprint while traveling. The app features:

- **Interactive Map**: Find eco-friendly routes based on traffic conditions
- **Points of Interest**: Discover sustainable tourist spots and accommodations
- **AI Travel Planner**: Get personalized travel plans powered by Google's Gemini AI
- **Leaderboard**: Track achievements and compete with other eco-conscious travelers

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
gogreenweb/
├── app/
│   ├── layout.js          # Root layout component
│   ├── page.js            # Main landing page
│   └── globals.css        # Global styles with Tailwind
├── public/
│   └── app-release.apk    # Android APK file for download
├── package.json           # Dependencies and scripts
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## APK Download

The website automatically serves the Android APK file from the `/public` directory. Users can download it by clicking the "Download for Android" buttons on the page.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS post-processor

## License

This project is for demonstration purposes.
