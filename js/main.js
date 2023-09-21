let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

const array = []


modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


//валидация полей

let inputName = document.getElementById('name')
let text = document.getElementById('text')
let submitAdd = document.getElementById('submitAdd')
let error1 = document.querySelector('.error1')
let error2 = document.querySelector('.error2')

let isError1 = false;
let isError2 = false;

inputName.addEventListener('change', function () {
    if (inputName.value.length < 8) {
        console.log('dvadfvaf');
        inputName.style.border = '2px solid red'
        error1.innerHTML = 'Не менее 8 символов<br><br>'
        isError1 = true;
    } else {
        inputName.style.border = '2px solid green'
        error1.innerHTML = ''
        isError1 = false;

    }


})

text.addEventListener('change', function () {
    if (text.value.length > 300) {
        text.style.border = '2px solid red'
        error2.innerHTML = 'Не более 300 символа<br><br>'
        isError2 = true;
    } else {
        text.style.border = '2px solid green'
        error2.innerHTML = ''
        isError2 = false;

    }

})

submitAdd.addEventListener('click', function (event) {
    if (inputName.value == '' && text.value == '') {
        error1.innerHTML = 'Заполните поле заголовка<br><br>'
        text.style.border = '2px solid red'
        error2.innerHTML = 'Введите текст новости<br><br>'
        inputName.style.border = '2px solid red'

    } else if (inputName.value == '') {
        error1.innerHTML = 'Заполните поле заголовка<br><br>'
        inputName.style.border = '2px solid red'

    } else if (text.value == '') {
        error2.innerHTML = 'Введите текст новости<br><br>'
        text.style.border = '2px solid red'
    } else if (isError1 == false && isError2 == false) {
        const newArray = {
            title: inputName.value,
            text: text.value
        }
        array.push(newArray)
        arrayNote()
        event.preventDefault()
        inputName.value = ''
        text.value = ''
    }
}
)


// Изменение цвета 
document.addEventListener('keyup', function (event) {
    if (event.key.toLowerCase() == 'b') {
        document.body.style.background = '#817f7f'
    }

    if (event.key.toLowerCase() == 'w') {
        document.body.style.background = 'white'
    }
})


//  Массив
let for_block = document.getElementById('for_block')

function arrayNote() {
    for_block.innerHTML = ''
    if (array.length === 0) {
        for_block.innerHTML = '<p class="option">Пока нет новостей!</p>'
    }
    for (let x = 0; x < array.length; x++) {
        for_block.insertAdjacentHTML('beforeend', getNote(array[x]))
    }

}
arrayNote()
function getNote(note) {
    return `
    <div class="news-item">
        <h3 class="h3">${note.title}</h3>
        <p class="news-item__p">
        ${note.text}
        </p>
    </div>
    `
}
