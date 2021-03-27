'use strict';

let game = {
    run() {
        while (true) {
            questioner.init();
            playerCount = 0;
            for (let i = 0; i < 5; i++) {
                let answer = questioner.getAsnwer();

                if (answer === null) {
                    console.log("Игра окончена.");
                    return;
                }

                if (answer === true) {
                    alert(`Это правильный ответ\n Ваш счет - ${++playerCount}`);
                    continue;
                }

                alert(`Это неверный ответ\n Ваш счет - ${playerCount}`);
            }

            alert(`Игра окончена.\n Ваш счет - ${playerCount}`);

            if (confirm('Хотите сыграть снова?')) {
                continue;
            }

            return;
        }
    },

    init() {
        console.log("Вам предстоит ответить на 5 вопросов.\n Чтобы начать игру наберите game.run() и нажмите Enter")
    }
}

game.init();