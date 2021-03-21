/* EXERCISE 1*/
/* Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average. */

function Grades() {
  this.grades = [];
  this.add = add;
  this.gradesAverage = average;

  // adds individual grade to the grades array
  function add(grade) {
    this.grades.push(grade);
  }
// caluculates the total grades of the student and gives the average 
  function average() {
    let total = 0;
    let average = 0.0;
    for (let grade = 0; grade < this.grades.length; ++grade) {
      total += this.grades[grade];
    }
    average = total / this.grades.length;
    console.log("The average score for this student is: " + "\n" + average + ".\n While the total grades is:\n "  + total);
  }
}
// Creates an instance of the Grades constructor function
student1 = new Grades();
student1.add(50);
student1.add(70); 
student1.add(60);
student1.add(90);
console.log(student1.grades);
student1.gradesAverage();


/* EXERCISE 2 */
/* Store a set of words in an arry and display the contents both forwards and backwards */

let wordsArray = ["the ", "lord ", "is ", "my ", "Shepherd " ];
// Using the reduce() method to display the contents of the wordsArray forwards

let sentence  = wordsArray.reduce((a,b) => a + b);
console.log(sentence);
// Using the reduceRight method to display the contents of the wordsArray backwards

sentence = wordsArray.reduceRight((a, b) => a + b);
console.log(sentence);

// using the join() method to display the contents of the wordsArray forwards

sentence = wordsArray.join('');
console.log(sentence);

//using the reverse() method to display the contents of the wordsArray backwards

sentence = wordsArray.reverse();
reverseSentence = sentence.join('');
console.log(reverseSentence);



/*EXERCISE 3*/
/* Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
data using a two-dimensional array. Create functions to display the monthly average,
a specific week’s average, and all the weeks’ averages. */


function MonthTemps(weekTemps) {
  this.weekTemps = weekTemps;
  this.weekAv = weekAv;
  this.monthAv = monthAv;

  let average = 0.0;
  let weekstotal = 0;

  function weekAv() {
    for (let weeks = 0; weeks < this.weekTemps.length; ++weeks) {
      for (let week = 0; week < this.weekTemps[weeks].length; ++week) {
        weekstotal += this.weekTemps[weeks][week];
      }
      average = weekstotal / this.weekTemps[weeks].length;
      console.log("The weekly temperature averages is: " + "\n" +average + " for week " + parseInt(weeks + 1))
      average = 0;
      weekstotal = 0; 
    }
  }

  function monthAv() {
    let newArray = [];
    let monthTempAv = 0.0;
    for (let weeks = 0; weeks < this.weekTemps.length; ++weeks) {
      for (let week = 0; week < this.weekTemps[weeks].length; ++week) {
         let a =  this.weekTemps[weeks][week];     
         newArray.push(a);  
      } 
  }
  let totalTemp = newArray.reduce((a, b) => a + b)
  monthTempAv = totalTemp / newArray.length;
  console.log("The monthly temperature average is: " + "\n" + monthTempAv) //58.5
        
}


}

let temp = new MonthTemps([[23,30, 40, 50], [25, 89, 110, 38], [59, 78, 68, 92]]);
temp.weekAv();
temp.monthAv();

/*EXERCISE 4 */
/* Create an object that stores individual letters in an array and has a function for
displaying the letters as a single word.
 */

 function Words(alphaArray) {
   this.alphabets = alphaArray;
 }

 Words.prototype.getWord = function () {
  let word = this.alphabets.join('');
  console.log(word);
 }

 let Word1 = new Words(['a', 'l', 'p','h','a','b','e','t','s']);
Word1.getWord();