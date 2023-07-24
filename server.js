const dgram = require('dgram');
const { PacketWriter } = require('sa-mp-packet');

// SA-MP Server configuration
const serverOptions = {
  host: '23.88.73.88',
  port: 9815, // Change this to your SA-MP server's port
};

// Function to send a packet to the SA-MP server
function sendPacket(packetId, ...args) {
  const client = dgram.createSocket('udp4');
  const packet = new PacketWriter();
  
  packet.writeUInt8(packetId);
  // Write packet arguments based on their data types
  
  const buffer = packet.buffer;
  client.send(buffer, 0, buffer.length, serverOptions.port, serverOptions.host, (err) => {
    if (err) {
      console.error('Error sending packet:', err);
    }
    client.close();
  });
}

// Example: Spawn a fake player in the game
function spawnFakePlayer(playerName, skinId, posX, posY, posZ, rotation) {
  // Use the appropriate packet ID and write the player spawn data
  const packetId = 0x0A; // Replace this with the actual packet ID for player spawning
  sendPacket(packetId, playerName, skinId, posX, posY, posZ, rotation);
}

// Start using the fake player functions
spawnFakePlayer('FakePlayer1', 0, 100, 200, 15, 0);
