

const inputCode = document.getElementById('inputCode');
const inputComment = document.getElementById('inputComment');
const inputAltura = document.getElementById('inputAltura');
const inputLargura = document.getElementById('inputLargura');
const inputProfundidade = document.getElementById('inputProfundidade');
const commentForm = document.getElementById('commentForm');
const commentShow = document.getElementById('commentShow');
const lastCode = [];

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    lengthCode = lastCode.length;

    find = 0;

    for (let i = 0; i <= lengthCode; i++) {

        if (lastCode[i] === inputCode.value) {
            find = 1;
            i = lengthCode + 1

        }
    }

    lastCode.push(inputCode.value);

    if(find === 0){
    let p = document.createElement('p');

            p.classList = 'commentshow2'
            p.innerHTML = `<strong>Código:</strong>&nbsp${inputCode.value} &nbsp<strong>Altura:</strong> ${inputAltura.value} &nbsp<strong>Largura:</strong> ${inputLargura.value} &nbsp<strong>Profundidade:</strong> ${inputProfundidade.value} </br> <strong>Comentário</strong>&nbsp <p class="comment">${inputComment.value} </p>`
            commentShow.appendChild(p);
            inputCode.value = '';
            inputComment.value = '';

    } else {
        alert("O código do produto informado já existe!")
    }

});

