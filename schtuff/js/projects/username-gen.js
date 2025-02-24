// List of words for the username
const adjectives = [
    'Swift', 'Mighty', 'Silent', 'Clever', 'Brave', 'Radiant', 'Loyal', 'Quick', 'Noble', 'Fearless',
    'Vigorous', 'Bold', 'Witty', 'Energetic', 'Sharp', 'Strong', 'Adventurous', 'Steady', 'Reliable', 'Resilient',
    'Majestic', 'Fierce', 'Resourceful', 'Tenacious', 'Powerful', 'Graceful', 'Determined', 'Daring', 'Focused', 'Sly',
    'Vibrant', 'Fearsome', 'Savage', 'Brilliant', 'Impressive', 'Dynamic', 'Mysterious', 'Unyielding', 'Stealthy', 'Indomitable',
    'Confident', 'Optimistic', 'Playful', 'Unstoppable', 'Hardy', 'Reliable', 'Brilliant', 'Talented', 'Devoted', 'Courageous',
    'Sturdy', 'Enduring', 'Diligent', 'Ruthless', 'Skilled', 'Persistent', 'Fabulous', 'Majestic', 'Vigilant', 'Ambitious',
    'Noble', 'Excited', 'Fearless', 'Luminous', 'Heroic', 'Fiery', 'Unbroken', 'Brilliant', 'Persistent', 'Serene',
    'Balanced', 'Regal', 'Intelligent', 'Creative', 'Passionate', 'Grounded', 'Inspirational', 'Quick-Witted', 'Charming', 'Luminous',
    'Humble', 'Radiant', 'Persistent', 'Tough', 'Balanced', 'Wise', 'Composed', 'Sharp-Eyed', 'Resourceful', 'Insightful',
    'Elegant', 'Alert', 'Perceptive', 'Agile', 'Bright', 'Proud', 'Magnetic', 'Playful', 'Compassionate', 'Joyful'
];
const animals = [
    'Tiger', 'Eagle', 'Shark', 'Wolf', 'Lion', 'Falcon', 'Dragon', 'Cheetah', 'Bear', 'Phoenix',
    'Elephant', 'Giraffe', 'Zebra', 'Kangaroo', 'Panda', 'Koala', 'Penguin', 'Sloth', 'Owl', 'Leopard',
    'Rhino', 'Hippo', 'Gorilla', 'Orangutan', 'Crocodile', 'Alligator', 'Jaguar', 'Bison', 'Coyote', 'Otter',
    'Turtle', 'Snake', 'Lynx', 'Wolverine', 'Jaguarundi', 'Parrot', 'Toucan', 'Vulture', 'Eagle Owl', 'Hawk',
    'Antelope', 'Gazelle', 'Buffalo', 'Bison', 'Monkey', 'Bat', 'Raccoon', 'Skunk', 'Squirrel', 'Armadillo',
    'Peacock', 'Swan', 'Flamingo', 'Pelican', 'Seagull', 'Woodpecker', 'Bee', 'Butterfly', 'Dragonfly', 'Moth',
    'Hummingbird', 'Starling', 'Crow', 'Raven', 'Magpie', 'Hornet', 'Spider', 'Scorpion', 'Millipede', 'Centipede',
    'Lizard', 'Gecko', 'Chameleon', 'Iguana', 'Komodo Dragon', 'Caterpillar', 'Worm', 'Leech', 'Mole', 'Shrew',
    'Aardvark', 'Badger', 'Fox', 'Weasel', 'Martens', 'Ferret', 'Hedgehog', 'Pangolin', 'Chinchilla', 'Capybara',
    'Saki Monkey', 'Mandrill', 'Baboon', 'Cheetah', 'Serval', 'Springbok', 'Wildebeest', 'Impala', 'Wallaby',
    'Tasmanian Devil', 'Dingo', 'Cassowary', 'Quokka', 'Kiwi', 'Wombat', 'Sugar Glider'
];

// Function to generate a random username
function generateUsername() {
// Randomly select an adjective and an animal
const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

// Combine the adjective, animal, and a random number
const randomNumber = Math.floor(Math.random() * 1000);

// Set the generated username
const username = randomAdjective + randomAnimal + randomNumber;

// Display the username in the input field
document.getElementById('username').value = username;
}