// import questions from '../question.json';
import { fetchAllQuestions } from "./firebase";


export const getData = () => {
    // return Promise.resolve(questions);
    return fetchAllQuestions();
}