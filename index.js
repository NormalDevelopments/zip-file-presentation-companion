// Create a WebSocket instance
// and connect to the server
let socket;

function setIP() {
    const serverip = document.getElementById('serverip');
    const message = serverip.value;
    socket = new WebSocket(message);
    socket.onopen = function (event) { alert('You are Connected to WebSocket Server'); };
    socket.onmessage = function (event) {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>Received <b>"${event.data}"</b> from server.</p>`;
    };
    socket.onclose = function (event) { console.log('Disconnected from WebSocket server'); };
    document.getElementById('ip_input').hidden = true;
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (socket) {
        socket.send(message);
    }
    messageInput.value = '';
}