import { shuffleArray } from './utils';

const BASE_URL = process.env.URL

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  };
  
  export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
  }
  
  export type QuestionsState = Question & { answers: string[] };
  
  export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
    const endpoint = `BASE_URL`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
  };