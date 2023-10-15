const addButton = document.querySelector(".add-button");
const inputTitle = document.querySelector(".title input");
const inputCode = document.querySelector(".code input");
const cardBox = document.querySelector(".card-box");
const line = document.querySelector("hr");
const removeButton = document.querySelector(".close")


const addCard = (event) => {
    event.preventDefault()
    const title = inputTitle.value;
    const code = inputCode.value;

    if (!title || !code) {
        alert("فرم را پر کنید!")
        return
    } else {
    line.style.display = "block";
    const cards = document.createElement("div");
    cards.classList.add("cards");
    const name = document.createElement("span");
    name.innerText = title;
    name.classList.add("title");
    cards.appendChild(name);
    const copyCode = document.createElement("div")
    copyCode.classList.add("copy-code");
    const codeLine = document.createElement("div")
    codeLine.innerText = code;
    copyCode.appendChild(codeLine);
    const copyButton = document.createElement("button");
    copyButton.classList.add("copy");
    copyButton.innerHTML = `<svg class="svg-icon1" viewBox="0 0 20 20">
    <path fill="none" d="M18.378,1.062H3.855c-0.309,0-0.559,0.25-0.559,0.559c0,0.309,0.25,0.559,0.559,0.559h13.964v13.964
        c0,0.309,0.25,0.559,0.559,0.559c0.31,0,0.56-0.25,0.56-0.559V1.621C18.938,1.312,18.688,1.062,18.378,1.062z M16.144,3.296H1.621
        c-0.309,0-0.559,0.25-0.559,0.559v14.523c0,0.31,0.25,0.56,0.559,0.56h14.523c0.309,0,0.559-0.25,0.559-0.56V3.855
        C16.702,3.546,16.452,3.296,16.144,3.296z M15.586,17.262c0,0.31-0.25,0.558-0.56,0.558H2.738c-0.309,0-0.559-0.248-0.559-0.558
        V4.972c0-0.309,0.25-0.559,0.559-0.559h12.289c0.31,0,0.56,0.25,0.56,0.559V17.262z"></path>
    </svg>`;
    copyCode.appendChild(copyButton);
    cards.appendChild(copyCode);
    const closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.innerHTML = ` <svg class="svg-icon" viewBox="0 0 20 20">
    <path fill="none" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
    </svg>`;
    cards.appendChild(closeButton);

    console.log(cards)


    cardBox.appendChild(cards);

    inputCode.value = "";
    inputTitle.value = "";}

    const finalData = {title, code}
    saveLockal(finalData);
};

function copy (event) {
    const item = event.target;

    if (item.classList[0] === "svg-icon1") {
        const finalCode = item.parentElement.parentElement.children[0].innerText;
        console.log(finalCode);
        navigator.clipboard.writeText(finalCode)
    }

    if (item.classList[0] === "copy") {
        const finalCode = item.parentElement.children[0].innerText;
        console.log(finalCode);
        navigator.clipboard.writeText(finalCode)
    }
};



function saveLockal (code) {
    let codes;
    if(localStorage.getItem("codes") === null) {
        codes = [];
    } else {
        codes = JSON.parse(localStorage.getItem("codes"))
    };
    codes.push(code)
    localStorage.setItem("codes", JSON.stringify(codes))
}

const removeCard = (event) => {
    const item = event.target;
    if(item.classList[0] === "svg-icon"){
        const card = item.parentElement.parentElement;
        card.remove();
        removeLockal(card);
    }
};

function removeLockal (code, index) {
    let codes;
    if (localStorage.getItem("codes") === null) {
        codes = [];
    } else {
        codes = JSON.parse(localStorage.getItem("codes"))
    };
    const cardIndex = code.children[1].innerText;
    codes.splice(index, 1);
    localStorage.setItem("codes", JSON.stringify(codes))
};

function getCards (event) {
    let codes;
    if(localStorage.getItem("codes") === null) {
        codes = []
    } else {
        codes = JSON.parse(localStorage.getItem("codes"))
    };
    codes.forEach(element => {
        event.preventDefault()

    if (!element.title || !element.code) {
        return
    } else {
    line.style.display = "block";
    const cards = document.createElement("div");
    cards.classList.add("cards");
    const name = document.createElement("span");
    name.innerText = element.title;
    name.classList.add("title");
    cards.appendChild(name);
    const copyCode = document.createElement("div")
    copyCode.classList.add("copy-code");
    const codeLine = document.createElement("div")
    codeLine.innerText = element.code;
    copyCode.appendChild(codeLine);
    const copyButton = document.createElement("button");
    copyButton.classList.add("copy");
    copyButton.innerHTML = `<svg class="svg-icon1" viewBox="0 0 20 20">
    <path fill="none" d="M18.378,1.062H3.855c-0.309,0-0.559,0.25-0.559,0.559c0,0.309,0.25,0.559,0.559,0.559h13.964v13.964
        c0,0.309,0.25,0.559,0.559,0.559c0.31,0,0.56-0.25,0.56-0.559V1.621C18.938,1.312,18.688,1.062,18.378,1.062z M16.144,3.296H1.621
        c-0.309,0-0.559,0.25-0.559,0.559v14.523c0,0.31,0.25,0.56,0.559,0.56h14.523c0.309,0,0.559-0.25,0.559-0.56V3.855
        C16.702,3.546,16.452,3.296,16.144,3.296z M15.586,17.262c0,0.31-0.25,0.558-0.56,0.558H2.738c-0.309,0-0.559-0.248-0.559-0.558
        V4.972c0-0.309,0.25-0.559,0.559-0.559h12.289c0.31,0,0.56,0.25,0.56,0.559V17.262z"></path>
    </svg>`;
    copyCode.appendChild(copyButton);
    cards.appendChild(copyCode);
    const closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.innerHTML = ` <svg class="svg-icon" viewBox="0 0 20 20">
    <path fill="none" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
    </svg>`;
    cards.appendChild(closeButton);


    cardBox.appendChild(cards);
}
    });
}


// var replaceDigits = function() {
//     var map = ["&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;","&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"]
//     document.body.innerHTML = document.body.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function($0) { return map[$0]});
// }
// window.onload = replaceDigits;



addButton.addEventListener("click", addCard);
cardBox.addEventListener("click", removeCard);
cardBox.addEventListener("click", copy);
document.addEventListener("DOMContentLoaded", getCards);