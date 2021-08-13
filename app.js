let enteredNum = prompt("Son kiriting");

for (let i = 1; i <= 20; i++) {
 let randomNum = Math.floor(Math.random() * 20);

  if (enteredNum == randomNum) {
    alert(`${i} - urinishda kiritilgan sonni topdingiz`);
    break
  } else {
    if (i == 20) {
      alert("kompyuter o'ylagan sonni topolmadingiz");
    } else if (enteredNum > randomNum) {
      enteredNum = prompt("Katta son kiritdingiz");
    } else if (enteredNum < randomNum) {
      enteredNum = prompt("kichik son kiritdingiz");
    }
  }
}



// console.log(randomNum);
