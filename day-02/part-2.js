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

    const max = rounds.reduce(
      (acc, round) => {
        acc.red = Math.max(acc.red, round.red);
        acc.green = Math.max(acc.green, round.green);
        acc.blue = Math.max(acc.blue, round.blue);

        return acc;
      },
      { red: 0, green: 0, blue: 0 }
    );

    return acc + max.red * max.green * max.blue;
  }, 0);

  console.log(result);
});
