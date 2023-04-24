# Tenzies! Game

Built using ReactJs.

&#127922; <a href='https://dustydogcodex.github.io/Tenzies/'>LIVE DEMO</a> &#127922;

For this project I created a recreation of the popular game Tenzies! The objective of this game is for the player to roll 10 die that all have the same number facing up. The player can 'freeze' or hold die in place that have the same number, but all the frozen die need to be of the same number.

For example: A player can freeze 4 die that have the number 6 facing up, but the player cannot freeze 2 die with 6 facing up and another 2 die with the number 4 facing up. All frozen die must have the same number facing up.

The player will then continue rolling the other die till all 10 die have the same number facing up.

Through this project I learnt:

1) Working with the useState() React hook to control a components state.
2) Using conditional rendering to render or hide selected components. 
3) Using event listeners with native DOM elements as well as custom React components.
4) Using useEffect() hook to check for changes in a variable.
5) Working with side effects in React.

Technical documentation:

Fork the repository from github. 
Then on your local machine use

npm start     --- to start the project

npm run build --- to run a production build

Future enhancements/features to be added:

1) add a second board to allow 2 players to  play in turns.
2) add a counter to show how many rolls it takes for a player to win a round.
3) setup a leaderboard to keep track of best results.
4) Connect to a database to set up a global leaderboard
5) Allow players to create accounts to store their statistics.