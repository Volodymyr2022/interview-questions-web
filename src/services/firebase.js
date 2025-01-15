// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, update, get, remove } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};


// src/firebaseConfig.js


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };



// const firebaseConfig = {
//     databaseURL: "https://react-vova-default-rtdb.firebaseio.com/",
//     apiKey: "AIzaSyCw4dBpE4f434VZIKQ8skoq0J0ZpX3k6eI",
//     authDomain: "react-vova.firebaseapp.com",
//     databaseURL: "https://react-vova-default-rtdb.firebaseio.com",
//     projectId: "react-vova",
//     storageBucket: "react-vova.firebasestorage.app",
//     messagingSenderId: "65933276049",
//     appId: "1:65933276049:web:cbf9bce3a114fd4a3ba030",
//     measurementId: "G-RCH9HWBJVZ"
//   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

/**
 * Adds a new user with a score to the database.
 * @param {string} name - The name of the user.
 * @param {number} score - The initial score of the user.
 */


export async function addQuestion(questions) {
  try {
    const usersRef = ref(database, "questions");
    const newUserRef = push(usersRef); // Auto-generate a unique key
    await set(newUserRef, questions);
    console.log(`Question added successfully.`);
  } catch (error) {
    console.error("Error adding question", error);
  }
}

/**
 * Updates a user's score in the database.
 * @param {string} questionId - The unique key for the user.
 * @param {Object} updatedData - The new score of the user.
 */
 export async function updateQuestion(questionId, updatedData) {
    try {
      const questionRef = ref(database, `questions/${questionId}`);
      await update(questionRef, updatedData);
      console.log(`Question ${questionId} added successfully.`);
    } catch (error) {
      console.error("Error adding question:", error);
    }
  }

/**
 * Fetches all users from the database.
 * @returns {Promise<Object>}
 */
 export async function fetchAllQuestions() {
    try {
      const questionsRef = ref(database, "questions");
      const snapshot = await get(questionsRef);
      if (snapshot.exists()) {
        console.log("All questions:", snapshot.val());
        return snapshot.val();
      } else {
        console.log("Question not found.");
        return {};
      }
    } catch (error) {
      console.error("Error receiving questions:", error);
    }
  }

/**
 * Removes all users from the database.
 * @returns {Promise<void>}
 */
export async function removeAllQuestions() {
  try {
    const questionsRef = ref(database, "questions");
    await remove(questionsRef);
    console.log("All questions removed from the database.");
  } catch (error) {
    console.error("Error removing questions:", error);
  }
}
