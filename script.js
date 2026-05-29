// This is the logic for your custom alert
function checkMessageForAlert(message, username) {
    if (message.toLowerCase().includes("brayden") && username !== "Brayden") {
        playAlertSound();
        alert("BRAYDEN! You've been mentioned!");
    } else if (message.toLowerCase().includes("layah") && username !== "Layah") {
        playAlertSound();
        alert("LAYAH! You've been mentioned!");
    }
}

function playAlertSound() {
    const audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
    audio.play();
}
