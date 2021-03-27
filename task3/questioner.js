'use strict';

let questioner = {
    init() {
        this.questions = questions.slice();
    },
    getAsnwer() {
        let idx = Math.floor(Math.random() * this.questions.length);
        let quiz = this.questions[idx];
        this.questions.splice(idx, 1);

        while (true) {
            let playerAnsw = prompt(`${quiz.quiz}\n${Question.toString(quiz.variants)}`);
            const availAnsws = ['a', 'b', 'c', 'd'];

            if (playerAnsw === null) {
                return null;
            }

            if (!availAnsws.includes(playerAnsw)) {
                alert('Для ответа на вопрос необходимо ввести в поле ответ один из вариантов - a, b, c, d, который соответствует правильному ответу');
                continue;
            }

            if (quiz.rAnsw === playerAnsw) {
                return true;
            }

            return false;
        }
    }
}