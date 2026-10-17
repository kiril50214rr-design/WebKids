alert("Привіт! Давай познайомимося");
const userName = prompt("Як тебе звати?");
const likesPrograming = confirm(
  `Приємно познайомитися, ${userName}! Тобі подобається програмування?`,
);
if (likesPrograming) {
  alert(`Чудово, ${userName}! Тоді поченаемо вчити JvaScript`);
} else {
  alert(
    `Нічого страшного, ${userName}! Можливо, JvaScript тоби сподобаеться писля першого уроку`,
  );
}
