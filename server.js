const dgram = require('dgram');

// SA-MP Server configuration
const serverOptions = {
  host: '23.88.73.88',
  port: 9815, // Change this to your SA-MP server's port
};

// Function to send a command to the SA-MP server
function sendCommand(command) {
  const client = dgram.createSocket('udp4');
  const buffer = Buffer.from(command, 'utf8');

  client.send(buffer, 0, buffer.length, serverOptions.port, serverOptions.host, (err) => {
    if (err) {
      console.error('Error sending command:', err);
    }
    client.close();
  });
}

// Example: Spawn a fake player in the game
function spawnFakePlayer(playerName, skinId, posX, posY, posZ, rotation) {
  const command = `spawnplayer ${playerName} ${skinId} ${posX} ${posY} ${posZ} ${rotation}`;
  sendCommand(command);
}

// Start using the fake player functions
spawnFakePlayer('FakePlayer1', 0, 100, 200, 15, 0);
