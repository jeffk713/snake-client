const net = require('net')

// establishes a connection with the game server connect = function () {
const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('connected')
  });
  return conn;
};

module.exports={conn}