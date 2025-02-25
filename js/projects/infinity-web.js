// Initial content that will be displayed on page load
let content = document.getElementById("content");
let itemCount = 0; // To keep track of the number of items generated

// Function to generate content (back to the original text-based content)
function generateContent(startIndex) {
    const fragment = document.createDocumentFragment(); // Create a document fragment for batch DOM updates

    for (let i = 0; i < 20; i++) {
        const newItem = document.createElement("div");
        newItem.classList.add("item");

        // Generate content (you can customize this to whatever you want)
        newItem.innerText = `Scroll Counter: ${startIndex + i + 1}`;
        fragment.appendChild(newItem); // Append the new item to the fragment
    }

    content.appendChild(fragment); // Append the fragment to the DOM in one go
}

// Generate initial content (20 items as requested)
generateContent(itemCount);
itemCount += 20;

// Create an IntersectionObserver to load more items when the last item comes into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // If the last item is in the viewport
            itemCount += 20; // Increase the count of items
            generateContent(itemCount); // Load 20 more items

            // Stop observing the current last item and observe the new last item
            observer.unobserve(entry.target);
            observer.observe(content.lastElementChild); // Observe the new last item
        }
    });
}, {
    rootMargin: '200px', // Trigger loading before the last item is fully visible
    threshold: 1.0, // Only trigger when the last item is fully visible
});

// Start observing the last item to trigger more content loading
observer.observe(content.lastElementChild);