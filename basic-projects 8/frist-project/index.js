const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");

const generateWord = (n) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * letters.length);
    text += letters[random];
  }

  return text;
};

const generatePara = () => {
  const numOfWords = Number(input.value);

  const para = document.createElement("p");
  let data = "";

  for (let i = 0; i < numOfWords; i++) {
    const randomNumber = Math.floor(Math.random() * 15) + 1;  // Word length between 1-15
    data += generateWord(randomNumber) + " ";
  }

  para.innerText = data.trim();  // Trim extra space at the end
  para.setAttribute("class", "paras");
  container.append(para);
};
