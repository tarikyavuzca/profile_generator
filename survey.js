// const { RSA_X931_PADDING } = require('constants');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};


const ansObj = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: ""
};

let i = 0;

const question = function () {
  if (i < 7) {
    rl.question(`${questions[i]}\n`, (answer) => {
      ansObj[i] = answer;
      i++;
      console.log()
      question()
    });
  } else {
    rl.close()
    let delay = 1500;
    console.log("Your New Profile:");
    setTimeout(() => console.log(`
    ${ansObj[0]} likes ${ansObj[1]}.
    ${ansObj[0]} likes to listening to ${ansObj[2]}.
    ${ansObj[0]} prefer(s)  ${ansObj[3]}.
    ${ansObj[0]} prefer(s) ${ansObj[4]} for favorite meal. 
    ${ansObj[0]}'s favorite sport is ${ansObj[5]}.
    ${ansObj[0]}'s superpower is ${ansObj[6]}.
  `), delay);
}
}


question()








// rl.question('What is your name? \nNote: Nicknames are also accepted!', (answer) => {
//   console.log(`Hello ${answer}!`);
// rl.question("what's an activity you like to do?", (answer1) => {
//   console.log(`Nice to do ${answer1}`)
// })

//   rl.close();
// });