function genreShow() {
  const para = document.getElementById("#para");
  para.style.visibility = "visible";
}

function lastIndex() {
  let text = "last index for the word 'index'";
  let lastIndexValue = text.lastIndexOf("index");

  let resultElement = document.getElementById("numbers");
  resultElement.innerText = lastIndexValue;
  resultElement.style.visibility = "visible";
}
