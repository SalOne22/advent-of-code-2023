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
    const game = str.split(":");
    const gameId = game[0].split(" ")[1];
    let rounds = game[1].split(";");
    rounds = rounds.map((s) => {
      const cubes = {
        red: 0,
        green: 0,
        blue: 0,
      };

      const round = s.trim();

      round.split(", ").forEach((record) => {
        const amount = record.split(" ")[0];
        const color = record.split(" ")[1];

        cubes[color] += Number(amount);
      });

      return cubes;
    });

    for (const round of rounds) {
      if (round.red > 12 || round.green > 13 || round.blue > 14) return acc;
    }

    return acc + Number(gameId);
  }, 0);

  console.log(result);
});
