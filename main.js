let btn1 = document.getElementById("mybutton1")
let btn2 = document.getElementById("mybutton2")
let copyDiv = document.querySelector(".copy-code");

//This function generates the randome 6digit hex color code
const getcolorcode = () => {
    let myHexValues = "0123456789abcdef";
    let colorcode = "#";
    for (let i = 0; i < 6; i++) {
        colorcode = colorcode + myHexValues[Math.floor(Math.random() * 16)];
    }
    return colorcode;
};
let rgb1
const handlebtn1 = () => {
    rgb1 = getcolorcode();
    btn1.innerText =rgb1
    document.body.style.backgroundImage =
        `linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML=
    `background-image:linear-gradient(to right, ${rgb1},${rgb2})`;

}
let rgb2
const handlebtn2 = () => {
    rgb2 = getcolorcode();
    btn2.innerText =rgb2
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML=
    `background-image:linear-gradient(to right, ${rgb1},${rgb2})`;
}
btn1.addEventListener("click", handlebtn1)//calling the function for generating random code
btn2.addEventListener("click", handlebtn2)
copyDiv.addEventListener("mouseover",() => {
    navigator.clipboard.writeText(copyDiv.innerText);
    alert( "copied to clipboard");
})

