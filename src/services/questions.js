import questions from '../question.json'

export const getData = () => {
    return Promise.resolve(questions);
}