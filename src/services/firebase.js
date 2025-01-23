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
    const newQuestion = { ...questions, id: newUserRef.key }; // Добавляем ключ в объект
    await set(newUserRef, newQuestion);
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

/**
 * Removes a specific question from the database by its ID.
 * @param {string} questionId - The unique ID of the question to be deleted.
 * @returns {Promise<void>}
 */
 export async function removeQuestion(questionId) {
    try {
      const questionRef = ref(database, `questions/${questionId}`);
      await remove(questionRef);
      console.log(`Question with ID ${questionId} has been removed successfully.`);
    } catch (error) {
      console.error("Error removing question:", error);
    }
  }

  

