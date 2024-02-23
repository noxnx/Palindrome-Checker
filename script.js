const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkForPalindrome() {
  let enteredText = textInput.value;
  const cleanText = enteredText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedText = cleanText.split('').reverse().join('');

  if (!enteredText) {
    alert("Please input a value");
  } else if (cleanText === reversedText) {
    result.innerText = `${cleanText} is a palindrome`;
  } else {
  result.innerText = `${cleanText} is not a palindrome`;
  }
  result.style.display = 'block';
}

checkButton.addEventListener("click", checkForPalindrome);