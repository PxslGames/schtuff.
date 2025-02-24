document.getElementById('emojiButton').addEventListener('click', function() {
    // Fetch the emoji data from the correct location
    fetch('../../assets/data/emojis.json')  // Adjusted the path
        .then(response => response.json())
        .then(data => {
            const emojiList = data.emojis;
            // Get a random emoji from the list
            const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
            // Display the random emoji
            document.getElementById('emojiDisplay').textContent = randomEmoji;
        })
        .catch(error => {
            console.error('Error loading emoji data:', error);
        });
});