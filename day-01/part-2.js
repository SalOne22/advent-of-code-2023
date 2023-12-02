const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.once("close", () => {
  input = input.map((s) =>
    s
      .replace(/one/g, "one1one")
      .replace(/two/g, "two2two")
      .replace(/three/g, "three3three")
      .replace(/four/g, "four4four")
      .replace(/five/g, "five5five")
      .replace(/six/g, "six6six")
      .replace(/seven/g, "seven7seven")
      .replace(/eight/g, "eight8eight")
      .replace(/nine/g, "nine9nine")
  );

  const result = input.reduce((acc, str) => {
    const matches = str.match(/\d/g) ?? [];

    console.log(str, matches);

    const first = matches.at(0);
    const last = matches.at(-1);

    return acc + Number(first + last);
  }, 0);

  console.log(result);
});
