// setTimeout 
let setDiv = document.querySelector('.setTime')
function showLoading() {
    return new Promise((resolve) => {
        setDiv.textContent = 'Loading'
        setTimeout(() => {
            resolve('Yuklandi');
        }, 3000);
    });
}

document.querySelector('.set').addEventListener('click', () => {
    showLoading().then((message) => {
        setDiv.textContent = message;
    });
}); 
// setTimeout 

// change color 
let colorDiv = document.querySelector('.color')
function changeColor() {
    return new Promise((resolve) => {
        setTimeout(() => {
            colorDiv.style.backgroundColor = 'red';
            resolve();
        }, 2000);
    });
}

document.querySelector('.colorBtn').addEventListener('click', () => {
    changeColor();
});
// change color 

// salom dunyo 
let salomDiv  =  document.querySelector('.salomDiv')
function showText() {
    return new Promise((resolve) => {
        setTimeout(() => {
            salomDiv.textContent = 'Salom Dunyo'
            resolve();
        }, 4000);
    });
}

document.querySelector('.salom').addEventListener('click', () => {
    showText();
});
// salom dunyo 

// ketma ket 
let div = document.querySelector('.ketmaketDiv');
function showFirstText() {
    return new Promise((resolve) => {
        setTimeout(() => {
            div.textContent = 'Birinchi matn'
            resolve();
        }, 2000);
    });
}

function showSecondText() {
    return new Promise((resolve) => {
        setTimeout(() => {
            div.textContent = 'Ikkinchi matn'
            resolve();
        }, 3000)
    })
}

document.querySelector('.btn').addEventListener('click', () => {
    showFirstText().then(() => {
        return showSecondText();
    });
});
// ketma ket 