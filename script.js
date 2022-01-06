
const calculateCharacter = () => {
  // Write your codes here
var tweet = prompt('Write your Tweet');
let tweetCount = tweet.length;
let tweetLeft = 150-tweetCount;
//console.log(tweetCount);
//alert(`You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`);
console.log("You have written " + tweetCount +  " characters, you have " + tweetLeft +  " charecters remaining.")

}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
