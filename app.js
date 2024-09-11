const getNewAdvice = async () => {
  try {
    const res = await axios.get("https://api.adviceslip.com/advice");
    upDate(res.data); //把数据直接传入到函数中
  } catch (err) {
    console.log(err);
    throw err;
  }
};

function upDate(data) {
  const board = document.querySelector(".sentence");
  const number = document.querySelector(".number");
  board.innerText = '"' + data.slip.advice + '"';
  number.innerText = "Advice #" + data.slip.id;
}

getNewAdvice();

const button = document.querySelector("button");
button.addEventListener("click", getNewAdvice);
