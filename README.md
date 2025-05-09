# Build a Simple Mobile App with React Native & Expo

## Objective
Create a lightweight React Native app that fetches data from a free API and displays a list of items using a modular and well-structured component architecture.

## Requirements
1. Use **Expo** to initialize the project.
2. Fetch data from the [Public Rick and Morty API](https://rickandmortyapi.com/) to display a list of characters.
   - API Endpoint: https://rickandmortyapi.com/api/character
3. Implement a **modular component structure** with at least the following components:
   - A component that fetches data and renders a list of characters
   - A component that displays an individual character (image, name, species, status, and number of episodes the character appeared in)
   - A reusable loading component
   - A reusable error handling component
4. Handle **loading and error states** gracefully.
5. Write at least **one custom hook** to separate API logic.
6. Implement **basic styling** using React Native's StyleSheet:
   - Add 16 padding from the edges of the screen (top, bottom, left, right). Optional: apply a safe area view.
   - Every character element should have 8 padding in all directions. Add a separating element like a divider.
   - For every character, render images on the left and character text on the right
   - Render images with 150 width and height
   - Practice good visual hierarchy with the information displayed by creating a primary and secondary text style. Use the primary style on the character’s name and the secondary style on the species, status, and number of episodes. (If you’d like to make a tertiary text style for the number of episodes - have at it!)
   - Align character name, species, and status with the top of the image. Align the number of episodes with the bottom of the image.

   - For all additional design choices beyond the list above - have fun with it! Put your own visual flair on what you’d like.
7. (Bonus) Add infinite scrolling or pagination using React Native FlatList.

## Evaluation Criteria
- **Code structure & modularity:** Clear component hierarchy and reusability
- **Data fetching & state management:** Proper use of React hooks (e.g., useEffect, useState) or proper usage of React Query
- **Error handling:** Graceful handling of API failures
- **UI/UX & styling:** Clean and responsive design
