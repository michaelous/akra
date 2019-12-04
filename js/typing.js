const texts = ['w twojej firmie', 'w twoim biznesie'];
var currentText = "";
let count = 0;
let index = 0;
let letter = "";

async function type() {
    if (letter === 'w twojej firmie' || letter === 'w twoim biznesie') {
        await wait(5000);
    }

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    if (count === texts.length) {
        count++;
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.subtitle-typing').textContent = letter;
    setTimeout(type, 100);
};


function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms)
        }, ms)
    })
}
type();