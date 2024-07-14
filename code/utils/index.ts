export const generateNumber = (prevNum: number) => {
    let number;
    do {
      number = Math.floor(Math.random() * 6)
    } while (number === prevNum);
    return number
  };