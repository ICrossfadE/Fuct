
// const modals = document.querySelector('.modals');
const buttonM = document.querySelector('.btn-m');
const buttonW = document.querySelector('.btn-w');
const modal1 = document.querySelector('#modal-1');
const mainBtn = document.querySelector('.main-btn');
const human = document.querySelector('#username');
const username = document.querySelector('input');
const textResult = document.querySelector('.text-result');
const modelResult = document.querySelector('#model-result');
const modalWindow = document.querySelectorAll('.modal-window')[0];

let name = '';


let generationRandomInsultMan = function(persname) {

    const randomLook = ['Хвіст','Окорок','Ніс','Волос','Хуй'];
    const randomBody = ['Гнилий','Вонючий','Кончений','Дрочений'];
    const randomAnimal = ['Козла','Коня','Чорта','Пса','Бомжа','Олега'];

    let pickrandomword = function(words) {
        return words[Math.floor(Math.random() * words.length)];
    }

    let randomInsult = `${persname}, ти бля ${pickrandomword(randomBody)} ${pickrandomword(randomLook)} ${pickrandomword(randomAnimal)}`;

    return textResult.textContent = randomInsult;
}

let generationRandomInsultWoman = function(persname) {

    const randomLook = ['Хвіст','Окорок','Ніс','Нога','Хуй'];
    const randomBody = ['Гнилий','Вонючий','Кончена','Дрочена'];
    const randomAnimal = ['Козла','Коня','Чорта','Пса','Бомжа','Олега'];

    let pickrandomword = function(words) {
        return words[Math.floor(Math.random() * words.length)];
    }

    let randomInsult = `${persname}, сонечко, ти ${pickrandomword(randomBody)} ${pickrandomword(randomLook)} ${pickrandomword(randomAnimal)}`;

    return textResult.textContent = randomInsult;
}

function remove() {

    modelResult.classList.add('none');
    modelResult.classList.remove('active');
    modelResult.textContent = '';

}

//Main
mainBtn.addEventListener('click', function() {

    modal1.classList.remove('none');
    modal1.classList.add('active');

    modalWindow.addEventListener('click', function(e) {

        //Варіант 1
        if(e.target == buttonM) {

            //Видаляє відкно і включає інше
            modal1.classList.add('none');
            modal1.classList.remove('active');
            human.classList.add('active');
            human.classList.remove('none');

            //Запитуєм імя
            username.addEventListener('change', function(e) {
                name += this.value;
                
                generationRandomInsultMan(name);

                //Видаляє відкно і включає інше
                human.classList.add('none');
                human.classList.remove('active');
                modelResult.classList.add('active');
                modelResult.classList.remove('none');

                setTimeout(remove, 7000);
            });
            
            
        //Варіант 2
        } else if(e.target == buttonW) {

            //Видаляє відкно і включає інше
            modal1.classList.add('none');
            modal1.classList.remove('active');
            human.classList.add('active');
            human.classList.remove('none');

            //Запитуєм імя
            username.addEventListener('change', function() {
                name += this.value;

                generationRandomInsultWoman(name);
            
                //Видаляє відкно і включає інше
                human.classList.add('none');
                human.classList.remove('active');
                modelResult.classList.add('active');
                modelResult.classList.remove('none');

                setTimeout(remove, 7000);
            });

            
        }
        
    });
});
























// function modalShow(num) {

//     for(let i = num; i < modalContent.length; i++) {
//         modalContent[i].classList.remove('active');
//     }
// }

// modalShow(); 

/* 1-Клік на кнопку.
    2-Вивід першого модельного вікна з апитанням
    3-вивід відкна з інпутом
    4-Результат

    кінець функції
*/