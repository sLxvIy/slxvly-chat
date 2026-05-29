const display = document.getElementById('chat-display');
const input = document.getElementById('msg-input');

function sendMessage() {
    const text = input.value;
    localStorage.setItem('lastMessage', text); // Save to local storage
    input.value = '';
}

// Poll every 1 second to "listen" for changes
setInterval(() => {
    const lastMsg = localStorage.getItem('lastMessage');
    if (lastMsg && display.innerText !== lastMsg) {
        display.innerHTML += `<p>${lastMsg}</p>`;
        
        // The Alert System
        if (lastMsg.toLowerCase().includes("brayden") || lastMsg.toLowerCase().includes("layah")) {
            const audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
            audio.play();
            alert("ALERT: Mention detected!");
        }
    }
}, 1000);
