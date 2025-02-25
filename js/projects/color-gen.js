// Function to generate random color in Hex format
function generateRandomColor() {
    // Random number between 0 and 255 for each RGB component
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert to Hex format
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

    // Display the color and codes
    document.getElementById("colorBox").style.backgroundColor = hex;
    document.getElementById("hexCode").textContent = hex;
    document.getElementById("rgbCode").textContent = `rgb(${r}, ${g}, ${b})`;
}

// Event listener to trigger random color generation when button is clicked
document.getElementById("generateColor").addEventListener("click", generateRandomColor);