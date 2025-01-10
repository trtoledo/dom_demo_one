const heading = document.querySelector("h1");
const headingTwo = document.querySelector("h2");
const paragraphs = document.querySelectorAll("p");
const demoParagraphs = document.querySelectorAll("p.demo-class");
console.log(demoParagraphs);
console.log(paragraphs);
// paragraphs.forEach((para) => para.classList.add("body-text"));
demoParagraphs.forEach((para) => para.classList.add("body-text"));

// console.log(heading);
// heading.classList.add("blue");
// heading.style.color = "green";
// heading.style.fontSize = "70px";
headingTwo.innerText = "World";
heading.classList.add("blue");