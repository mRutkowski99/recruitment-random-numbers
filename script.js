//Selectors
const btn = document.querySelector("#generate-btn");
const columnEvens = document.querySelector(".container--evens");
const columnOdds = document.querySelector(".container--odds");

//Helper functions
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomArray = (length, min, max) => {
  const arr = [];

  while (arr.length < length) {
    arr.push(getRandomNumber(min, max));
  }

  return arr;
};

const getSortedArrays = () => {
  const randomArray = generateRandomArray(20, 0, 100);
  return {
    randomOdds: randomArray
      .filter((number) => number % 2 === 1)
      .sort((a, b) => a - b),

    randomEvens: randomArray
      .filter((number) => number % 2 === 0)
      .sort((a, b) => a - b),
  };
};

//Handler function
const btnHandler = () => {
  //Reset column after next button click
  columnEvens.innerHTML = "<p>Even random numbers</p>";
  columnOdds.innerHTML = "<p>Odd random numbers</p>";

  const { randomEvens: evens, randomOdds: odds } = getSortedArrays();
  evens.forEach((number) =>
    columnEvens.insertAdjacentHTML("beforeend", `<span>${number}</span>`)
  );
  odds.forEach((number) =>
    columnOdds.insertAdjacentHTML("beforeend", `<span>${number}</span>`)
  );
};

//Event listener
btn.addEventListener("click", btnHandler);
