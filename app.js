const canvas = document.querySelector("#canvas");
const btn = document.querySelector("#button");

function colorGenerator(){
    let color = '#';
    let colorChars = '0123456789ABCDEF';

    for(let i=0; i<6; i++){
        let index = Math.floor(Math.random() *16);
        color = color + colorChars[index];
    }
    return color;
}

btn.addEventListener('click', ()=>{
    canvas.style.backgroundColor = colorGenerator();
})


