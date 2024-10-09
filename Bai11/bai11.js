// Assume the 'game' variable is coming from the web service
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
      [
          'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 
          'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnabry', 'Lewandowski'
      ],
      [
          'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 
          'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'
      ]
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Muller', 'Gnabry', 'Kimmich'],
  date: 'Nov 9th, 2037',
  odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5
  }
};

// 1. Create player arrays for each team
const players1 = game.players[0];
const players2 = game.players[1];

// 2. Extract goalkeeper and field players for Bayern Munich
const gk = players1[0];
const fieldPlayers = players1.slice(1);

// 3. Create an array of all players
const allPlayers = [...players1, ...players2];

// 4. Create the final Bayern Munich array with substitutes
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Create variables for each odd
const { team1, draw, team2 } = game.odds;

// 6. Write the printGoals function
function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
  players.forEach(player => console.log(player));
}

// 7. Print the team more likely to win based on odds
const likelyWinner = team1 < team2 && game.team1 || game.team2;
console.log(`${likelyWinner} is more likely to win`);

// Test cases for task 6
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
