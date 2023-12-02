const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.once("close", () => {
  const result = input.reduce((acc, str) => {
    const arr = str.split("");

    const first = arr.find((s) => /\d/.test(s));
    const last = arr.findLast((s) => /\d/.test(s));

    return acc + Number(first + last);
  }, 0);

  console.log(result);
});
