export default class Question {
  constructor({ question, correct_answer, incorrect_answers, type }) {
    this.correct = correct_answer
    this.answers = incorrect_answers
    this.question = question
    this.type = type

    if (type == 'multiple') {
      this.answers = incorrect_answers

      let randIndex = Math.floor(Math.random() * 3)

      this.answers.splice(randIndex, 0, this.correct)
    }
  }

  get Template() {
    return `                    
    <div class="border border-success col-5 d-flex flex-column align-items-center p-0 m-3">
    <div class="text-center text-light"><h4 class="">${this.question}</h4></div>
    <div>
    <ol type="A">
        <li class="my-2"><button class="btn btn-success" onclick="app.questionsController.answerQuestion()"><h5>${this.answers[0]}</h5></button></li>
        <li class="my-2"><button class="btn btn-success" onclick="app.questionsController.answerQuestion()"><h5>${this.answers[1]}</h5></button></li>
        <li class="my-2"><button class="btn btn-success" onclick="app.questionsController.answerQuestion()"><h5>${this.answers[2]}</h5></button></li>
        <li class="my-2"><button class="btn btn-success" onclick="app.questionsController.answerQuestion()"><h5>${this.answers[3]}</h5></button></li>
    </ol> </div>
</div>`
  }
}





// // {
//   "response_code": 0,
//   "results": [
//     {
//       "category": "Entertainment: Video Games",
//       "type": "multiple",
//       "difficulty": "medium",
//       "question": "What is Solid Snake&#039;s real name?",
//       "correct_answer": "David",
//       "incorrect_answers": [
//         "Solid Snake",
//         "John",
//         "Huey"
//       ]
//     },
//     {
//       "category": "Entertainment: Video Games",
//       "type": "multiple",
//       "difficulty": "medium",
//       "question": "What was the first &quot;Team Fortress 2&quot; update to include a war?",
//       "correct_answer": "Sniper vs. Spy Update",
//       "incorrect_answers": [
//         "WAR! Update",
//         "Meet Your Match Update",
//         "Spy Vs. Engineer Update"
//       ]
//     },
//     {
//       "category": "Entertainment: Video Games",
//       "type": "multiple",
//       "difficulty": "easy",
//       "question": "What Nationality is D.Va from Overwatch?",
//       "correct_answer": "Korean",
//       "incorrect_answers": [
//         "Japanese",
//         "Chinese",
//         "Vietnamese "
//       ]
//     },
//     {
//       "category": "Entertainment: Video Games",
//       "type": "multiple",
//       "difficulty": "hard",
//       "question": "What is the fastest speed possible in Trackmania&sup2;: Stadium?",
//       "correct_answer": "1000  km/h",
//       "incorrect_answers": [
//         "500 km/h",
//         "320 km/h",
//         "100 km/h"
//       ]
//     },
//     {
//       "category": "Entertainment: Video Games",
//       "type": "multiple",
//       "difficulty": "easy",
//       "question": "What is the protagonist&#039;s title given by the demons in DOOM (2016)?",
//       "correct_answer": "Doom Slayer",
//       "incorrect_answers": [
//         "Doom Guy",
//         "Doom Marine",
//         "Doom Reaper"
//       ]
//     },
//     {
//       "category": "Entertainment: Video Games",
//       "type": "multiple",
//       "difficulty": "medium",
//       "question": "In Dota 2, what is Earthshaker&#039;s real name?",
//       "correct_answer": "Raigor Stonehoof",
//       "incorrect_answers": [
//         "Banehallow Ambry",
//         "Carl",
//         "Barathrum"
//       ]
//     },
//     {
//       "category": "Entertainment: Video Games",
//       "type": "multiple",
//       "difficulty": "medium",
//       "question": "What former MOBA, created by Waystone Games and published by EA, was shut down in 2014?",
//       "correct_answer": "Dawngate",
//       "incorrect_answers": [
//         "Strife",
//         "League of Legends",
//         "Heroes of Newerth"
//       ]
//     },
//     {
//       "category": "Entertainment: Video Games",
//       "type": "multiple",
//       "difficulty": "easy",
//       "question": "Which of the following Pokemon Types was present in the original games, Red and Blue?",
//       "correct_answer": "Ice",
//       "incorrect_answers": [
//         "Steel",
//         "Dark",
//         "Fairy"
//       ]
//     },
//     {
//       "category": "Entertainment: Video Games",
//       "type": "multiple",
//       "difficulty": "medium",
//       "question": "From where does the Nintendo video game character Mario derive his name?",
//       "correct_answer": "The landlord of the American headquarters",
//       "incorrect_answers": [
//         "Shigeru Miyamoto&#039;s father in law",
//         "Satoru Iwata&#039;s plumber",
//         "The date (Mar 10) that Donkey Kong was released."
//       ]
//     },
//     {
//       "category": "Entertainment: Video Games",
//       "type": "multiple",
//       "difficulty": "medium",
//       "question": "Who is the half-demon character in Divinity: Original Sin 2 who you talk to to transition between acts?",
//       "correct_answer": "Malady",
//       "incorrect_answers": [
//         "Meister Siva",
//         "Gawin",
//         "Exter"
//       ]
//     }
//   ]
// }