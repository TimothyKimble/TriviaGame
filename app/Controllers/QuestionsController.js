import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsServices.js";

function _draw() {
  let question = ProxyState.questions
  let template = ''
  question.forEach(q => template += q.Template)
  document.getElementById('questions').innerHTML = template


}

export default class QuestionsController {
  constructor() {
    ProxyState.on('questions', _draw)

    this.getAll()
  }

  async getAll() {
    try {
      await questionsService.getAllQuestions()
    } catch (error) {
      window.alert("something went wrong: " + error)
    }
  }

  answerQuestion() {
    console.log("was clicked")
    if (this.correct) {
      alert("You are right")
    }

  }
}