# Project Blueprint: Workout Routine Generator (운동 루틴 생성기)

## Overview
A comprehensive web application designed to generate personalized workout routines based on user physical information, experience, available equipment/place, and target duration. It supports both HIIT and long-duration cardio styles, includes exercise animations, a built-in timer, and local storage for saving routines.

## Current State & Features
- **User Profile:** Height, weight, age, gender.
- **Experience Levels:** Easy (Beginner), Normal (Intermediate), Hard (Advanced).
- **Injury Tracking:** Allows users to select or input injuries to exclude certain exercises.
- **Workout Types:** Cardio, Strength, Stretching, etc.
- **Routine Generation:**
  - **HIIT Style:** Short, high-intensity intervals.
  - **Long Duration:** Single exercises performed for extended periods.
- **Exercise Database:** Comprehensive list of exercises with MET values, difficulty levels, and instructions.
- **Visuals:** Inline SVG animations for exercise demonstrations.
- **Interactivity:**
  - Built-in Workout Timer with phases (Work/Rest).
  - Routine Save/Load using LocalStorage.
  - YouTube search integration for exercise videos.
- **Design:** Modern dark-themed UI using IBM Plex Sans KR and Bebas Neue fonts. Responsive layout.

## Refactoring Plan
1. **Module Separation:**
   - Extract CSS into `style.css`.
   - Extract JavaScript into `main.js`.
   - Keep the core structure in `index.html`.
2. **Standardization:**
   - Ensure all assets and scripts are correctly linked.
   - Follow the project's guidelines for modern CSS and JS.
3. **Git Integration:**
   - Commit the modularized code.
   - Push to the provided GitHub repository.

## Execution Steps
1. Create `blueprint.md` (Completed).
2. Extract CSS from the source and write to `style.css`.
3. Extract JS from the source and write to `main.js`.
4. Update `index.html` with the remaining HTML structure and link external files.
5. Verify the application runs correctly.
6. Commit and Push.
