// grab your elements
const input     = document.getElementById("input");
const btn       = document.getElementById("btn");
const deleteBtn = document.getElementById("delete");

// when "Save" clicked → store in sessionStorage
const btnClick = () => {
  sessionStorage.setItem("key1", input.value);
};
btn.addEventListener("click", btnClick);

// when "Clear" clicked → wipe sessionStorage
deleteBtn.addEventListener("click", () => {
  sessionStorage.clear();
});

// on page load, if there's stored data → alert it
window.addEventListener("load", () => {
  const stored = sessionStorage.getItem("key1");
  if (stored) {
    alert(stored);
  }
});
