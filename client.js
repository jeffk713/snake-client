const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', data => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    conn.write('Name: Q1Q');
    conn.write('Say: BS');
    // conn.write('Move: up');
    // setTimeout(() => conn.write('Move: up'), 100);
    // setInterval(() => conn.write('Move: up'), 200);
  });
  conn.on('end', () => console.log('kicked out from idling too long'));

  return conn;
};

module.exports = { connect };
