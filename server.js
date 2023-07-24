const { SampQuery } = require('samp-query');

// SA-MP Server configuration
const serverOptions = {
  host: '23.88.73.88',
  port: 9815, // Change this to your SA-MP server's query port (default: 7777)
};

// Function to add a fake player to the SA-MP server
async function addFakePlayer(playerName) {
  const sampQuery = new SampQuery(serverOptions);

  try {
    await sampQuery.connect();

    // Replace 'skinId', 'posX', 'posY', 'posZ', and 'rotation' with desired values
    const response = await sampQuery.send('AddPlayer', [
      playerName, 'skinId', 'posX', 'posY', 'posZ', 'rotation'
    ]);

    console.log('Fake player added successfully:', response);
  } catch (err) {
    console.error('Error adding fake player:', err);
  } finally {
    sampQuery.disconnect();
  }
}

// Start using the fake player functions
addFakePlayer('FakePlayer1');
