// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array
// •	Do not use numbers to reference the last element, find it programmatically,
// •	ages[7] – ages[0] is not allowed!

function firstFromLast() {
  return ages[ages.length - 1] - ages[0];
}

firstFromLast()

console.log(firstFromLast());

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(37);

console.log(firstFromLast());

// 1c.	Use a loop to iterate through the array and calculate the average age.

let total = 0;

for (var number of ages) {
  total += number;
}

average = total / ages.length;

console.log(average);

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name.

let sum = 0;

for (var element of names) {
  sum += element.length;
}

average2 = sum / names.length;

console.log(average2);

// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

console.log(names.join(" "))

// 3.	How do you access the last element of any array?

//arrayName[arrayName.length-1]

// 4.	How do you access the first element of any array?

// arrayName[0]

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new

let nameLengths = names.map(function (element) {
  return element.length;
});
console.log(nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let names2 = 0;

for (var element of names) {
 names2 += element.length;
}

console.log(names2);


// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function nTimes(word, n) {
  if (n === 1) return word;
  else return word + nTimes(word, n - 1);
}

console.log(nTimes("hello", 6));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
// •	The full name should be the first and the last name separated by a space.

function createFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(createFullName("Rachel", "Courtney"));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

greaterThanArray = [8, 8, 8, 800];

function moreThan100(array) {
  const greaterTotal = array.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  if (greaterTotal > 100) {
    return true;
  } else {
    return false;
  }
}

console.log(moreThan100(greaterThanArray));

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

numbersForAvg = [5, 25, 30, 10, 20];

function arrayAvg(array) {
  let total = 0;

  for (var element of array) {
    total += element;
  }

  return total / array.length;
}

console.log(arrayAvg(numbersForAvg));

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareArrays(array1, array2) {
  let totalOne = 0;
  for (var element of array1) {
    totalOne += element;
  }

  let totalTwo = 0;
  for (var element of array2) {
    totalTwo += element;
  }
  var avgOne = totalOne / array1.length;
  var avgTwo = totalTwo / array2.length;
  if (avgOne > avgTwo) {
    return true;
  } else {
    return false;
  }
}

testOne = [5, 5, 5];
testTwo = [10, 10, 10];

console.log(compareArrays(testOne, testTwo));

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
  let willBuy;
  if (isHotOutside === true && moneyInPocket > 10.5) {
    willBuy = true;
  } else {
    willBuy = false;
  }
  return willBuy;
}

console.log(willBuyDrink(true, 8));

// 13.	Create a function of your own that solves a problem.
// •	In comments, write what the function does and why you created it.

//This is a function to decide whether to send a person seeking legal help to one organization or another depending on their issue

function whichOrg(clientName, legalProblem){
  if (legalProblem === "Housing"||
  legalProblem === "Mortgages"||
  legalProblem === "Criminal Records")
  org = "CLS"
  else if (legalProblem === "Child Custody"||
        legalProblem === "Unemployment Compensation" ||
        legalProblem === "Property Taxes")
  org = "PLA"
  else org = "LRIS"
  
  return `Hello ${clientName}, please go to ${org}`
}

console.log(whichOrg("Sally", "Child Custody"))