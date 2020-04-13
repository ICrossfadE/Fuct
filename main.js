//botton
const buttonM = document.querySelector('.btn-m');
const buttonW = document.querySelector('.btn-w');
const mainBtn = document.querySelector('.main-btn');

//Modals
const modalWindowFirst = document.querySelectorAll('.modal-window')[0];
const modalWindowSecond = document.querySelectorAll('.modal-window')[1];
const modalWindowThird = document.querySelectorAll('.modal-window')[2];
const modalOverlay = document.querySelectorAll('.modal-overlay')[2];
let none = document.querySelector('.none');

//Input / Result
const start = document.querySelector('#start');
const human = document.querySelector('#human');
const result = document.querySelector('#model-result');
const userName = document.querySelector('input');
const textResult = document.querySelector('.text-result');


//Functions
function generationRandomInsultMan(persname) {

    const randomLook = ['Хвіст','Окорок','Ніс','Волос','Хуй'];
    const randomBody = ['Гнилий','Вонючий','Кончений','Дрочений'];
    const randomAnimal = ['Козла','Коня','Чорта','Пса','Бомжа','Олега'];

    let pickrandomword = function(words) {
        return words[Math.floor(Math.random() * words.length)];
    };

    let randomInsult = `${persname}, ти бля ${pickrandomword(randomBody)} ${pickrandomword(randomLook)} ${pickrandomword(randomAnimal)}`;

    return textResult.textContent = randomInsult;
}

function generationRandomInsultWoman(persname) {

    const randomLook = ['Хвіст','Окорок','Ніс','Нога','Хуй'];
    const randomBody = ['Гнилий','Вонючий','Кончена','Дрочена'];
    const randomAnimal = ['Козла','Коня','Чорта','Пса','Бомжа','Олега'];

    let pickrandomword = function(words) {
        return words[Math.floor(Math.random() * words.length)];
    };

    let randomInsult = `${persname}, сонечко, ти ${pickrandomword(randomBody)} ${pickrandomword(randomLook)} ${pickrandomword(randomAnimal)}`;

    return textResult.textContent = randomInsult;
}

function removeEnd() {
    userName.value = '';
    textResult.textContent = '';
    result.classList.add('none');
    result.classList.remove('active');  
}

function addModal(modal, modalWindow) {
    
    modal.classList.remove('none');
    modal.classList.add('active');

    modalWindow.classList.remove('none');
    modalWindow.classList.add('active');

}

function removeModal(modal, modalWindow) {
    
    modal.classList.remove('active');
    modal.classList.add('none');

    modalWindow.classList.remove('active');
    modalWindow.classList.add('noneW');

    none.DOMContentLoaded = function() {
        this.style.width = '0%';
    };
}

//Work-proсess

mainBtn.addEventListener('click', function () {

    let name ='';

    addModal(start, modalWindowFirst);
    
        modalWindowFirst.addEventListener('click', function(e) {

    
            //V-2
            if(e.target == buttonM) {

                removeModal(start, modalWindowFirst);
                addModal(human, modalWindowSecond);

                userName.addEventListener('change', function() {

                    name = this.value;
                    generationRandomInsultMan(name);
                    removeModal(human, modalWindowSecond);

                    addModal(result, modalWindowThird);
                    console.log(name);


                    result.addEventListener('click', function(e) {

                        if(e.target == modalOverlay) {
                            removeEnd();
                        }
                    });
                });
                console.log(1);
                
            //V-2    
            } else if (e.target == buttonW) {
                
                removeModal(start, modalWindowFirst);
                addModal(human, modalWindowSecond);

                userName.addEventListener('change', function() {

                    name = this.value;
                    generationRandomInsultWoman(name);
                    removeModal(human, modalWindowSecond);

                    addModal(result, modalWindowThird);
                    console.log(name);


                    result.addEventListener('click', function(e) {

                        if(e.target == modalOverlay) {
                            removeEnd();
                        }
                    });
                });
                console.log(2);

            } else {

            alert('ERROR');
        }
    });

});