import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";


class QuestionsService {
  async getAllQuestions() {
    console.log()

    const res = await api.get()
    console.log(res.data)
    let questions = res.data.results.map(q => new Question(q))
    ProxyState.questions = questions


  }



}

export const questionsService = new QuestionsService()