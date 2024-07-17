/**
 *
 * @param {number} sum
 * @return {'win' | 'lose' | 'roll again'}
 */
const getDiceResult = (sum) => {
  const winConditions = [7, 11];
  const loseConditions = [2, 3, 12];

  if (winConditions.includes(sum)) return "win";
  if (loseConditions.includes(sum)) return "lose";

  return "roll again";
};

const rollDice = () => Math.ceil(Math.random() * 6);

/**
 * Simulates the dice game.
 * @param {number} numSimulations - The number of times to simulate the dice game.
 * @returns {Array} - An array of simulation result objects.
 */
module.exports.diceGameSimulation = (numSimulations) => {
  const simulationResults = [];

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();

    const sum = dice1 + dice2;
    const result = getDiceResult(sum);

    simulationResults.push({ dice1, dice2, sum, result });
  }

  return simulationResults;
};
