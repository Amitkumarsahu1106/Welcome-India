const stateUrls = {
    'uttar pradesh': './visit-india/public/popular_places/uttar-pradesh.html',
    'maharashtra': './visit-india/public/popular_places/maharashtra.html',
    'bihar': './visit-india/public/popular_places/bihar.html',
    'west bengal': './visit-india/public/popular_places/west-bengal.html',
    'madhya pradesh': './visit-india/public/popular_places/madhya-pradesh.html',
    'tamil nadu': './visit-india/public/popular_places/tamil-nadu.html',
    'rajasthan': './visit-india/public/popular_places/rajasthan.html',
    'karnataka': './visit-india/public/popular_places/karnataka.html',
    'gujarat': './visit-india/public/popular_places/gujarat.html',
    'andhra pradesh': './visit-india/public/popular_places/andhra-pradesh.html',
    'odisha': './visit-india/public/popular_places/odisha.html',
    'telangana': './visit-india/public/popular_places/telangana.html',
    'kerala': './visit-india/public/popular_places/kerala.html',
    'jharkhand': './visit-india/public/popular_places/jharkhand.html',
    'assam': './visit-india/public/popular_places/assam.html',
    'punjab': './visit-india/public/popular_places/punjab.html',
    'chhattisgarh': './visit-india/public/popular_places/chhattisgarh.html',
    'haryana': './visit-india/public/popular_places/haryana.html',
    'jammu and kashmir': './visit-india/public/popular_places/jammu-kashmir.html',
    'uttarakhand': './visit-india/public/popular_places/uttarakhand.html',
    'himachal pradesh': './visit-india/public/popular_places/himachal-pradesh.html',
    'tripura': './visit-india/public/popular_places/tripura.html',
    'meghalaya': './visit-india/public/popular_places/meghalaya.html',
    'manipur': './visit-india/public/popular_places/manipur.html',
    'nagaland': './visit-india/public/popular_places/nagaland.html',
    'goa': './visit-india/public/popular_places/goa.html',
    'arunachal pradesh': './visit-india/public/popular_places/arunachal-pradesh.html',
    'mizoram': './visit-india/public/popular_places/mizoram.html',
    'sikkim': './visit-india/public/popular_places/sikkim.html',
    'delhi': './visit-india/public/popular_places/delhi.html',
    'puducherry': './visit-india/public/popular_places/puducherry.html',
    'chandigarh': './visit-india/public/popular_places/chandigarh.html',
    'andaman and nicobar islands': './visit-india/public/popular_places/andaman-nicobar.html',
    'dadra and nagar haveli': './visit-india/public/popular_places/dadra-nagar.html',
    'daman and diu': './visit-india/public/popular_places/daman-diu.html',
    'lakshadweep': './visit-india/public/popular_places/lakshadweep.html',
    'ladakh': './visit-india/public/popular_places/ladakh.html',
};


// Initialize Swiper
// const swiper = new Swiper('.swiper-container', {
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });







function searchState() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const url = stateUrls[searchInput];
    if (url) {
        window.location.href = url;
    } else {
        alert('State not found. Please try again.');
    }
}

function showSuggestions() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';

    if (input.length === 0) return;

    const suggestions = Object.keys(stateUrls).filter(state => state.startsWith(input));

    suggestions.forEach(state => {
        const suggestionItem = document.createElement('div');
        suggestionItem.textContent = state.charAt(0).toUpperCase() + state.slice(1);
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.addEventListener('click', () => {
            document.getElementById('searchInput').value = state;
            searchState();
        });
        suggestionsContainer.appendChild(suggestionItem);
    });
}

document.getElementById('searchInput').addEventListener('input', showSuggestions);

document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    searchState();
});

const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdownMenu');

hamburger.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Close the dropdown menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!dropdownMenu.contains(event.target) && !hamburger.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Close the dropdown menu when clicking on a link inside it
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });
});

// Add event listener for the state dropdown menu
document.getElementById('state-select').addEventListener('change', function () {
    const selectedState = this.value.toLowerCase();
    const url = stateUrls[selectedState];
    if (url) {
        window.location.href = url;
    }
});

// Populate the dropdown menu
const states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

const selectElement = document.getElementById("state-select");

states.forEach((state) => {
    const optionElement = document.createElement("option");
    optionElement.value = state.toLowerCase(); // Ensure value is in lowercase
    optionElement.textContent = state;
    selectElement.appendChild(optionElement);
});







// chatbot
const API_KEY = "AIzaSyBFRTjawz8DHIA1DOycuQONZ9pZaJbbF_c"; // API Key added


// Chatbot functionality

// Get the popup element and button
const popup = document.getElementById('popup');
const popupButton = document.getElementById('popupButton');

// Toggle the popup when the button is clicked
popupButton.onclick = function (event) {
    event.stopPropagation(); // Prevent event from bubbling up to the window click event
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
}

// Close the popup when clicking outside of it
window.onclick = function (event) {
    if (event.target === popup || !popup.contains(event.target)) {
        popup.style.display = 'none';
    }
}

// Chatbot functions (use your existing code here)
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        appendUserMessage(userInput);
        generateBotResponse(userInput);
        document.getElementById('user-input').value = '';
    }
}

// Add event listener for the Enter key
document.getElementById('user-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        sendMessage();
    }
});

function startVoiceRecognition() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onresult = function (event) {
            const userVoiceInput = event.results[0][0].transcript;
            document.getElementById('user-input').value = userVoiceInput;
            sendMessage(); // Automatically send the recognized text
        };

        recognition.onerror = function (event) {
            console.error('Speech recognition error', event.error);
        };

        recognition.onspeechend = function () {
            recognition.stop();
        };
    } else {
        alert('Your browser does not support speech recognition. Please use a different browser.');
    }
}

function appendUserMessage(message) {
    const chatBody = document.querySelector('.chatbot-body');
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.textContent = message;
    chatBody.appendChild(userMessage);
    scrollToBottom();
}

// Enhanced Local Chatbot Logic
function generateBotResponse(userInput) {
    const chatBody = document.querySelector('.chatbot-body');

    // Show loading (simulated)
    const loadingId = 'loading-' + Date.now();
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'chat-message bot-message';
    loadingMessage.id = loadingId;
    loadingMessage.textContent = 'Thinking...';
    chatBody.appendChild(loadingMessage);
    scrollToBottom();

    setTimeout(() => {
        // Remove loading
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.remove();

        const normalizedInput = userInput.toLowerCase().trim();
        let botMessageText = '';

        // 1. Define the Knowledge Base
        const knowledgeBase = [
            // Greetings
            { keywords: ['hello', 'hi', 'hey', 'namaste'], response: 'Namaste! I am your guide to Incredible India. Ask me about festivals, monuments, food, or states!' },
            { keywords: ['who are you', 'what are you'], response: 'I am an AI assistant created to help you explore the beauty and culture of India.' },
            { keywords: ['bye', 'goodbye'], response: 'Goodbye! Phir milenge (See you again). Have a great day!' },
            { keywords: ['thank', 'thanks'], response: 'You are welcome! Dhanyavaad!' },

            // States & Destinations
            { keywords: ['kerala'], response: 'Kerala, "God\'s Own Country," is famous for its backwaters, houseboats, Ayurveda, and lush green landscapes.' },
            { keywords: ['goa'], response: 'Goa is known for its beautiful beaches, Portuguese heritage, nightlife, and seafood. It is a top tourist destination.' },
            { keywords: ['punjab'], response: 'Punjab is the land of five rivers, known for the Golden Temple, vibrant culture, Bhangra dance, and delicious food like Makki di Roti.' },
            { keywords: ['rajasthan'], response: 'Rajasthan is the land of kings, famous for its palaces, forts (like Amber Fort), deserts, and colorful culture.' },
            { keywords: ['kashmir', 'jammu'], response: 'Jammu & Kashmir is often called "Paradise on Earth" for its stunning mountains, Dal Lake, and houseboats.' },
            { keywords: ['ladakh'], response: 'Ladakh is known for its breathtaking landscapes, high mountain passes, monasteries, and Pangong Lake.' },
            { keywords: ['himachal'], response: 'Himachal Pradesh is famous for its hill stations like Shimla and Manali, snow-capped mountains, and trekking trails.' },
            { keywords: ['uttarakhand'], response: 'Uttarakhand is known as "Devbhoomi" (Land of Gods), famous for pilgrimage sites like Kedarnath, Badrinath, and Rishikesh.' },
            { keywords: ['varanasi', 'banaras', 'kashi'], response: 'Varanasi is one of the oldest living cities in the world, famous for its Ghats on the river Ganga and spiritual significance.' },
            { keywords: ['mumbai', 'bombay'], response: 'Mumbai is the financial capital of India and home to Bollywood. Famous spots include Gateway of India and Marine Drive.' },
            { keywords: ['delhi'], response: 'Delhi, the capital, is a mix of history and modernity. Visit Red Fort, Qutub Minar, India Gate, and Chandni Chowk.' },
            { keywords: ['bangalore', 'bengaluru'], response: 'Bangalore is the "Silicon Valley of India," known for its pleasant weather, parks, and IT industry.' },
            { keywords: ['hyderabad'], response: 'Hyderabad is famous for the Charminar, Golconda Fort, and its world-renowned Hyderabadi Biryani.' },
            { keywords: ['kolkata', 'calcutta'], response: 'Kolkata is the cultural capital of India, known for Durga Puja, Victoria Memorial, and its love for literature and sweets.' },
            { keywords: ['chennai', 'madras'], response: 'Chennai is the gateway to South India, known for Marina Beach, Kapaleeshwarar Temple, and Carnatic music.' },

            // Festivals
            { keywords: ['diwali', 'deepavali'], response: 'Diwali is the Festival of Lights, symbolizing the victory of light over darkness. People light lamps, burst crackers, and share sweets.' },
            { keywords: ['holi'], response: 'Holi is the vibrant Festival of Colors, celebrating the arrival of spring. It involves playing with colored powders and water.' },
            { keywords: ['eid'], response: 'Eid is celebrated with great devotion, featuring special prayers, feasts, and the delicious dish Sheer Khurma.' },
            { keywords: ['christmas'], response: 'Christmas is celebrated with joy, especially in Goa and Kerala, with midnight masses, decorations, and cakes.' },
            { keywords: ['navratri', 'dussehra'], response: 'Navratri is a 9-night festival honoring Goddess Durga. It concludes with Dussehra, marking the victory of good over evil.' },
            { keywords: ['ganesh', 'vinayaka'], response: 'Ganesh Chaturthi celebrates the birth of Lord Ganesha. Huge idols are installed and immersed in water after days of worship.' },
            { keywords: ['onam'], response: 'Onam is the harvest festival of Kerala, celebrated with the grand Sadhya feast and snake boat races.' },
            { keywords: ['pongal'], response: 'Pongal is the harvest festival of Tamil Nadu, where a special sweet dish made of rice and jaggery is prepared.' },
            { keywords: ['raksha bandhan', 'rakhi'], response: 'Raksha Bandhan celebrates the bond between brothers and sisters. Sisters tie a protective thread (Rakhi) on their brothers\' wrists.' },
            { keywords: ['durga puja'], response: 'Durga Puja is a grand festival, especially in West Bengal, celebrating Goddess Durga\'s victory over the demon Mahishasura.' },

            // Monuments
            { keywords: ['taj mahal'], response: 'The Taj Mahal in Agra is a white marble mausoleum built by Emperor Shah Jahan for his wife Mumtaz Mahal. It is a UNESCO World Heritage Site.' },
            { keywords: ['red fort', 'lal qila'], response: 'The Red Fort in Delhi was the main residence of the Mughal Emperors. The Prime Minister hoists the flag here on Independence Day.' },
            { keywords: ['qutub minar'], response: 'Qutub Minar in Delhi is the tallest brick minaret in the world, built in the 12th century.' },
            { keywords: ['hawa mahal'], response: 'Hawa Mahal, or "Palace of Winds" in Jaipur, is known for its unique honeycomb structure with 953 small windows.' },
            { keywords: ['india gate'], response: 'India Gate is a war memorial in New Delhi dedicated to soldiers of the British Indian Army who died in World War I.' },
            { keywords: ['golden temple', 'harmandir sahib'], response: 'The Golden Temple in Amritsar is the holiest shrine of Sikhism, known for its gold-plated dome and community kitchen (Langar).' },
            { keywords: ['gateway of india'], response: 'The Gateway of India in Mumbai was built to commemorate the visit of King George V and Queen Mary in 1911.' },
            { keywords: ['charminar'], response: 'Charminar is a historic monument and mosque in Hyderabad, built in 1591.' },
            { keywords: ['konark', 'sun temple'], response: 'The Konark Sun Temple in Odisha is a 13th-century temple designed as a colossal chariot of the Sun God.' },
            { keywords: ['ajanta', 'ellora'], response: 'Ajanta and Ellora caves in Maharashtra are ancient rock-cut caves famous for their Buddhist, Hindu, and Jain sculptures.' },

            // Food
            { keywords: ['food', 'cuisine', 'dish'], response: 'Indian cuisine is famous for its spices. Popular dishes include Biryani, Butter Chicken, Dosa, Samosa, and Pani Puri.' },
            { keywords: ['biryani'], response: 'Biryani is a flavorful rice dish cooked with aromatic spices and meat (or vegetables). Hyderabad and Lucknow are famous for it.' },
            { keywords: ['butter chicken'], response: 'Butter Chicken (Murgh Makhani) is a popular curry made with chicken in a spiced tomato and butter sauce.' },
            { keywords: ['dosa', 'idli'], response: 'Dosa and Idli are South Indian staples made from fermented rice and lentil batter, served with Sambar and Chutney.' },
            { keywords: ['samosa'], response: 'Samosa is a fried pastry with a savory filling, usually spiced potatoes, onions, and peas.' },
            { keywords: ['pani puri', 'golgappa'], response: 'Pani Puri is a popular street snack consisting of a hollow, crispy puri filled with flavored water and potatoes.' },
            { keywords: ['rogan josh'], response: 'Rogan Josh is an aromatic lamb curry of Persian origin, now a signature dish of Kashmiri cuisine.' },
            { keywords: ['vada pav'], response: 'Vada Pav is a popular street food in Mumbai, consisting of a deep-fried potato dumpling placed inside a bread bun.' },
            { keywords: ['dhokla'], response: 'Dhokla is a vegetarian culinary dish that is found mainly in the Indian state of Gujarat. It is made with a fermented batter derived from rice and split chickpeas.' },
            { keywords: ['lassi'], response: 'Lassi is a popular traditional dahi (yogurt)-based drink that originated in the Punjab region.' },
            { keywords: ['chai', 'tea'], response: 'Chai is an integral part of Indian culture. Masala Chai, brewed with spices like ginger and cardamom, is a favorite.' },
            { keywords: ['sweet', 'dessert'], response: 'Indian sweets include Gulab Jamun, Jalebi, Rasgulla, Barfi, and Kheer.' },

            // History & Figures
            { keywords: ['gandhi', 'bapu'], response: 'Mahatma Gandhi led India\'s non-violent independence movement and is known as the Father of the Nation.' },
            { keywords: ['bhagat singh'], response: 'Bhagat Singh was a revolutionary freedom fighter who played a key role in India\'s struggle for independence.' },
            { keywords: ['subhash chandra bose', 'netaji'], response: 'Subhash Chandra Bose was a prominent freedom fighter and leader of the Indian National Army (INA).' },
            { keywords: ['nehru'], response: 'Jawaharlal Nehru was the first Prime Minister of India and a central figure in Indian politics.' },
            { keywords: ['independence'], response: 'India gained independence from British rule on August 15, 1947.' },
            { keywords: ['republic day'], response: 'Republic Day is celebrated on January 26th, marking the day when the Constitution of India came into effect in 1950.' },

            // Geography & Nature
            { keywords: ['ganga', 'ganges'], response: 'The Ganga is the holiest river in Hinduism and a lifeline for millions of people in India.' },
            { keywords: ['himalaya'], response: 'The Himalayas are a mountain range in Asia separating the plains of the Indian subcontinent from the Tibetan Plateau.' },
            { keywords: ['thar', 'desert'], response: 'The Thar Desert, also known as the Great Indian Desert, forms a natural boundary between India and Pakistan.' },
            { keywords: ['tiger'], response: 'The Bengal Tiger is the national animal of India. You can see them in national parks like Jim Corbett and Ranthambore.' },
            { keywords: ['peacock'], response: 'The Indian Peacock is the national bird of India, known for its vibrant plumage.' },

            // Travel Tips
            { keywords: ['visa'], response: 'Most tourists need a visa to enter India. An e-Visa facility is available for citizens of many countries.' },
            { keywords: ['best time', 'weather'], response: 'The best time to visit India is generally from October to March when the weather is pleasant.' },
            { keywords: ['safety', 'safe'], response: 'India is generally safe for tourists, but it is always good to take standard precautions and respect local customs.' },
            { keywords: ['train', 'railway'], response: 'Indian Railways is one of the largest rail networks in the world. It is a great way to explore the country.' },

            // Culture & Arts
            { keywords: ['dance'], response: 'India has many classical dance forms like Bharatanatyam, Kathak, Kathakali, Kuchipudi, and Odissi.' },
            { keywords: ['yoga'], response: 'Yoga originated in India over 5,000 years ago. Rishikesh is known as the Yoga Capital of the World.' },
            { keywords: ['cricket'], response: 'Cricket is the most popular sport in India. The country has won the World Cup twice (1983 and 2011).' },
            { keywords: ['sari', 'saree'], response: 'The Sari is a traditional garment for Indian women, draped in various styles across different regions.' },
            { keywords: ['bollywood', 'movie'], response: 'Bollywood is the Hindi-language film industry based in Mumbai, known for its colorful and musical movies.' },

            // General
            { keywords: ['capital'], response: 'The capital of India is New Delhi.' },
            { keywords: ['population'], response: 'India is the most populous country in the world, with over 1.4 billion people.' },
            { keywords: ['currency'], response: 'The currency of India is the Indian Rupee (INR).' },
            { keywords: ['language'], response: 'India has no single national language, but Hindi and English are official languages. There are 22 scheduled languages.' }
        ];

        // 2. Search for a match
        for (const item of knowledgeBase) {
            // Check if ANY of the keywords exist in the user input
            const match = item.keywords.some(keyword => normalizedInput.includes(keyword));
            if (match) {
                botMessageText = item.response;
                break;
            }
        }

        // 3. Fallback Response
        if (!botMessageText) {
            botMessageText = "I'm not sure about that yet. Try asking me about 'Taj Mahal', 'Diwali', 'Indian Food', 'Yoga', or 'Goa'!";
        }

        appendBotMessage(botMessageText);

    }, 600); // Fake delay for realism
}

function appendBotMessage(message) {
    const chatBody = document.querySelector('.chatbot-body');
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot-message';
    botMessage.textContent = message;
    chatBody.appendChild(botMessage);
    speak(message);
    scrollToBottom();
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

function scrollToBottom() {
    const chatBody = document.querySelector('.chatbot-body');
    chatBody.scrollTop = chatBody.scrollHeight;
}
