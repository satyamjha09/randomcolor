const generateButton = document.querySelector(".btn-generate");



const generateRandomColor = () => {

    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);

    document.querySelector(".page").style.backgroundColor = randomCode;
    document.getElementById("color-text").innerText = randomCode;


}


generateButton.addEventListener("click" , generateRandomColor)

generateRandomColor();