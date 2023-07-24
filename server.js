const { SampIPCClient } = require('sa-mp-ipc');

// SA-MP Server IPC configuration
const ipcOptions = {
  ip: 'your_samp_server_ip',
  port: 7777, // Change this to your SA-MP server's port
};

// Create an IPC client and connect to SA-MP server
const ipcClient = new SampIPCClient(ipcOptions);

ipcClient.on('connected', () => {
  console.log('Connected to SA-MP server via IPC.');
});

ipcClient.on('disconnected', () => {
  console.log('Disconnected from SA-MP server via IPC.');
});

// Function to make the bot say something in the chat
function botSay(botName, message) {
  ipcClient.send('botSay', { botName, message });
}

// Express setup
const express = require('express');
const app = express();
const port = 3000; // Change this to your desired port number

// Define your API endpoint to make the bot say something
app.get('/bot/say/:botName/:message', (req, res) => {
  const { botName, message } = req.params;
  botSay(botName, message);
  res.send(`Bot "${botName}" said: ${message}`);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
