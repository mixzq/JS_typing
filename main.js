const texts = [
  "   IGNORANCE   ",
  "    DEAF",
  "     HUMBLE",
  "              FALSE   ",
  "  BOUNDLESS  ",
  "              HOPELESS   ",
  "        WORTHLESS   ",
  "     羞耻   ",
  "        便宜  ",
  "    LOST  ",
  "     HOPELESS        ",
];
let count = 0;
let index = 0;
let currentWord = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentWord = texts[count];
  letter = currentWord.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentWord.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 500);
})();
