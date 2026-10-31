const wordParts = document.querySelectorAll(".word_parts");

let firstWord = null;

wordParts.forEach((part) => {
  part.addEventListener("click", function () {
    if (firstWord === null) {
      firstWord = part;
      part.style.border = "2px solid yellow";
      //   part.classList.add("selected");
    } else {
      if (firstWord.dataset.word === part.dataset.word && firstWord !== part) {
        console.log("test");
        const word = part.dataset.word;
        console.log(word);
        const img = document.querySelector(`[data-img="${word}"]`);
        img.classList.add("active");
      }
      firstWord.style.border = "none";
      firstWord = null;
    }
  });
});
