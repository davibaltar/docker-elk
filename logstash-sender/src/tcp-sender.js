const Logstash = require('logstash-client');

// Via TCP | PORT: 5000

var logstash = new Logstash({
    type: 'tcp', // udp, tcp, memory
    host: 'localhost',
    port: 5000
});

logstash.send("Mensagem Teste 001 Node.js (tcp)", () => {
    console.log("ok")
    logstash.transport.reconnect.disconnect()
})