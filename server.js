const sampQuery = require('samp-query');
const express = require('express');

// SA-MP Server query configuration
const serverOptions = {
  host: '23.88.73.88',
  port: 9815, // Change this to your SA-MP server's query port (default: 7777)
};

// Create an Express app
const app = express();
const port = 3000; // Change this to your desired port number

// Endpoint to get a list of connected players
app.get('/players', (req, res) => {
  sampQuery({
    host: serverOptions.host,
    port: serverOptions.port,
  }, (error, response) => {
    if (error) {
      res.status(500).json({ error: 'Failed to query SA-MP server.' });
    } else {
      const players = response.players.map(player => ({
        id: player.id,
        name: player.name,
        score: player.score,
        ping: player.ping,
      }));
      res.json(players);
    }
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Fake Bot API is running on port ${port}`);
});
