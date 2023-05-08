/*
oyuncu min ve max değerleri arasında olan sayılar tahmin etmeli 
oyuncunu belirli bir tahmin hakkı olmalı,
oyunucnun kazanma durumunu bildir
tekrar denemesi için bir seçenek ver
*/

// arayüz elemanlatrı

const game = document.querySelector('#game'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num');



//oyunda kullanılacak değerler

let min = 1,
    max = 10,
    winningNumber = getRandomNum(min,max),
    guessLeft = 3;

// min ve max değerlerini arayüze gönder
minNum.textContent = min;
maxNum.textContent = max;




// yapılan tahmini izle

guessBtn.addEventListener('click', () => {
    

    //inputun içindeki veriyi al ve sayıya çevir
    let guess = parseInt(guessInput.value);




    if (guess === winningNumber) {
        gameOver(true,`KAZANDIN! Doğru tahmin: ${winningNumber}`);
    } else {
        guessLeft--
        if (guessLeft === 0) {
            gameOver(false,`KAYBETTİN! Doğru tahmin: ${winningNumber}`);
        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';

            setMessage(`${guess} doğru değil,${guessLeft} hakkınız kaldı.`, 'kırmızı');
        }
    }
});

function gameOver(won,msg) {
    let color = won ? "green" : "red"
    

    guessInput.disabled = true;
    guessInput.borderColor = color;


    setMessage(msg)
}







function setMessage(msg,color) {
    message.textContent = msg;
    message.style.color = color;
}






// Rastgele Sayı Bulma methodu

function getRandomNum(min,max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(random)


    return random;
}

