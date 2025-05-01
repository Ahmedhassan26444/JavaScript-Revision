const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");
console.log("a");
const fetchData = async () => {
    console.log("f1");
    const response = await fetch(url);
    console.log("f2");
    const data = await response.json();
    console.log("f3");
    h1.innerText = data.fact;
    console.log("f4");
};
fetchData();
console.log("z");
