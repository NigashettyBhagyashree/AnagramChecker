function checkAnagram() {
  const word1 = document.getElementById("word1").value.toLowerCase().replace(/\s/g, '');
  const word2 = document.getElementById("word2").value.toLowerCase().replace(/\s/g, '');

  const resultElement = document.getElementById("result");

  if (isAnagram(word1, word2)) {
    resultElement.textContent = "The words are anagrams!";
    resultElement.className = "green";
  } else {
    resultElement.textContent = "The words are not anagrams.";
    resultElement.className = "red";
  }
}

function isAnagram(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  
  return sortedStr1 === sortedStr2;
}