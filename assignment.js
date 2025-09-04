// ====================================
// JavaScript Basics Assignment Answers
// ====================================

// Q1:
function checkWord() {
  let text = "Hello, welcome to JavaScript!";
  return text.includes("JavaScript");
}
console.log("Q1 Answer:", checkWord()); 
 


// Q2: 
function makeUpperCase() {
  let text = "hello world";
  return text.toUpperCase();
}
console.log("Q2 Answer:", makeUpperCase()); 
 


// Q3:  
function removeSpaces() {
  let text = "   Learn JS   ";
  return text.trim();
}
console.log("Q3 Answer:", removeSpaces()); 
 

// Q4:  
function compareWords() {
  let a = "React";
  let b = "react";
  return a.toLowerCase() === b.toLowerCase();
}
console.log("Q4 Answer:", compareWords()); 
 


// Q5:  
function countVowels() {
  let text = "JavaScript is fun";
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }
  return count;
}
console.log("Q5 Answer:", countVowels()); 
 


// Q6:  
function getDomain() {
  let email = "user@example.com";
  return email.split("@")[1];
}
console.log("Q6 Answer:", getDomain()); 
 


// Q7: 
function greeting(hour) {
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}
console.log("Q7 Answer (10):", greeting(10)); 
 
console.log("Q7 Answer (15):", greeting(15)); 
 
console.log("Q7 Answer (20):", greeting(20)); 
 


// Q8:  
function checkPassword(password) {
  let hasNumber = /[0-9]/.test(password);
  if (password.length >= 8 && hasNumber) {
    return "Strong";
  } else {
    return "Weak";
  }
}
console.log("Q8 Answer (abc12345):", checkPassword("abc12345")); 
 
console.log("Q8 Answer (abcdefg):", checkPassword("abcdefg")); 
 


// Q9:  
function replaceWithDash() {
  let text = "Learn JavaScript step by step";
  return text.replace(/ /g, "-");
}
console.log("Q9 Answer:", replaceWithDash()); 
 


// Q10:  
function checkStart() {
  let text = "Frontend";
  return text.startsWith("F");
}
console.log("Q10 Answer:", checkStart()); 
 