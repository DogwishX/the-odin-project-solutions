// The winner[s] of the challenge will be chosen through a 'raffle system' on January 10th.

// In order to get a chance at winning, the participant must complete at least one Pomodoro. Additionally, each Pomodoro completed by the participant will increase their chances of winning, by earning them one 'raffle ticket'.

// RULES

//  1 - Become a farmer, harvest some tomatoes with other farmers!
//  2 - You harvest tomatoes by completing a Pomodoro*
//  3 - At the end of the day, you should report to the Farm[party] how many tomatoes you harvested.
//  4 - The aim is to increase the number of tomatoes harvested together! Should our Party complete 400 Pomodoros together, there will be another a lottery worth 4 gems**.

//  * 1 Tomato/Pomodoro = 🍅🌿 25 mins of growing (focused work/study) + 💧5 mins of watering (break)
// ** Totally random.

const totalPomodorosCompleted = 10;
const rolledNumbers = [];

const users = {
  khuroru016: {
    pomodorosCompleted: 3,
    numbers: [],
  },
  Dogwish: {
    pomodorosCompleted: 3,
    numbers: [],
  },
  potato49: {
    pomodorosCompleted: 2,
    numbers: [],
  },
  magtot: {
    pomodorosCompleted: 1,
    numbers: [],
  },
  KingKazma: {
    pomodorosCompleted: 1,
    numbers: [],
  },
};

const randomNumber = () =>
  Math.floor(Math.random() * totalPomodorosCompleted) + 1;

const assignNumbersToUser = (userNumbers, numberOfRolls) => {
  let currentRoll = 1;

  while (currentRoll <= numberOfRolls) {
    const currentRandomNumber = randomNumber();

    if (!rolledNumbers.includes(currentRandomNumber)) {
      userNumbers.push(currentRandomNumber);
      rolledNumbers.push(currentRandomNumber);
      currentRoll++;
    }
  }
};

const giveTickets = () =>
  Object.values(users).forEach((user) =>
    assignNumbersToUser(user.numbers, user.pomodorosCompleted)
);

const chooseWinner = () => {
  const winningNumber = randomNumber();
  for (let user in users) {
    if (users[user].numbers.includes(winningNumber))
      return `${winningNumber} ${user} won!`;
  }
};

const runRaffle = () => {
  giveTickets();
  return chooseWinner();
};

console.log(runRaffle());
console.table(users);
