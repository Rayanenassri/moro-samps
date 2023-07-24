const SampRcon = require('samp-rcon');

// SA-MP Server RCON configuration
const rconOptions = {
  host: 'your_samp_server_ip',
  port: 7777, // Change this to your SA-MP server's RCON port
  password: 'your_rcon_password', // Change this to your SA-MP server's RCON password
};

// Connect to SA-MP server via RCON
const rcon = new SampRcon(rconOptions);
rcon.connect();

// Function to send commands to SA-MP server through RCON
function sendRconCommand(command) {
  rcon.send(command)
    .then((response) => {
      console.log('Response:', response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Express setup (optional if you want to create an API endpoint)
const express = require('express');
const app = express();
const port = 3000; // Change this to your desired port number

// Define your API endpoints
app.get('/bot/say/:message', (req, res) => {
  const { message } = req.params;
  const command = `say ${message}`; // 'say' is the SA-MP command to send chat messages
  sendRconCommand(command);
  res.send(`Bot said: ${message}`);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
