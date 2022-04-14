// Subsequent array

const rootArr = [5, 1, 22, 25, 6, -1, 8, 10];
const childArr = [5, 1, 22, 22, 6, -1, 8, 10];

function isValidSubsequence(array, sequence) {
  let indexPos = 0;
  let newArr = [...array];
  if (array.length < sequence.length) {
    indexPos = -1;
  } else {
    for (let i = 0; i < sequence.length; i++) {
      let positionAtRoot = newArr.indexOf(sequence[i]);
      console.log(newArr, sequence[i]);
      if (positionAtRoot < 0) {
        indexPos = "-1";
        break;
      } else {
        indexPos = 1;
        newArr = newArr.slice(positionAtRoot + 1);
      }
    }
  }

  console.log(indexPos < 0 ? 0 : 1);
}

isValidSubsequence(rootArr, childArr);
