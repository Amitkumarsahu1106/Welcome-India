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


// Chatbot functionality

// Get the popup element and button
const popup = document.getElementById('popup');
const popupButton = document.getElementById('popupButton');

// Toggle the popup when the button is clicked
popupButton.onclick = function(event) {
    event.stopPropagation(); // Prevent event from bubbling up to the window click event
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
}

// Close the popup when clicking outside of it
window.onclick = function(event) {
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
document.getElementById('user-input').addEventListener('keydown', function(event) {
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

        recognition.onresult = function(event) {
            const userVoiceInput = event.results[0][0].transcript;
            document.getElementById('user-input').value = userVoiceInput;
            sendMessage(); // Automatically send the recognized text
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error', event.error);
        };

        recognition.onspeechend = function() {
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

function generateBotResponse(userInput) {
    let botMessageText = '';
    const normalizedInput = userInput.toLowerCase().trim();

    const responses = {
        'tell me about diwali': 'Diwali, also known as the Festival of Lights, is one of the most popular Hindu festivals celebrated with great enthusiasm in India.',
        'holi': 'Holi is a vibrant festival of colors celebrated in India, marking the arrival of spring and the victory of good over evil.',
        'independence day': 'Independence Day in India is celebrated on August 15th each year, marking the end of British rule in 1947.',
        'yoga': 'Yoga is an ancient practice from India that promotes physical, mental, and spiritual well-being.',
        'taj mahal': 'The Taj Mahal is an iconic white marble mausoleum in Agra, India, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
        'mahatma gandhi': 'Mahatma Gandhi was a leader of India\'s non-violent independence movement against British rule, and he is known as the Father of the Nation.',
        'kathak': 'Kathak is one of the eight classical dances of India, originating from the northern regions and characterized by intricate footwork and expressive gestures.',
        'sanskrit': 'Sanskrit is an ancient Indian language and the liturgical language of Hinduism, Buddhism, and Jainism, known for its rich literary tradition.',
        'ganesh chaturthi': 'Ganesh Chaturthi is a Hindu festival celebrating the birth of Lord Ganesha, the elephant-headed god of wisdom and prosperity.',
        'ayurveda': 'Ayurveda is an ancient Indian system of medicine that focuses on holistic health, balancing the mind, body, and spirit through natural remedies.',
        'cricket': 'Cricket is the most popular sport in India, with a massive following and a rich history, especially known for legendary players like Sachin Tendulkar.',
        'tell me about indians': 'Indians are the people of India, a diverse and culturally rich country in South Asia.',
        'who build you': 'To build me! , I have Amit Kumar Sahu, Sanskar Kesharwani, Tarang Koshti, Sneha, Uday Jhariya, and Ashutosh Tiwari.',
        'hello': 'Hello, How can I help?',
        'distance between jammu and kerala': 'The distance between Jammu and Kerala is 3,284 kilometers.',
        'sari': 'The sari is a traditional garment worn by women in India. It is a long piece of cloth, usually about 6 to 9 yards in length, draped elegantly around the body. The sari is not just a piece of clothing but a symbol of grace, beauty, and cultural heritage. Different regions in India have their own unique styles of draping a sari, reflecting the diversity of Indian culture.',
        'namaste': 'Namaste is a traditional Indian greeting, which means "I bow to you." The word is derived from Sanskrit and is often accompanied by a slight bow made with hands pressed together, palms touching and fingers pointing upwards, thumbs close to the chest. It signifies respect, reverence, and acknowledgment of the divine in others.',
        'capital of bhopal': 'The Capital of Madhya Pradesh is Bhopal.',
        'capital of india': 'The capital of India is New Delhi.',
    };

    for (const keyword in responses) {
        if (normalizedInput.includes(keyword)) {
            botMessageText = responses[keyword];
            break;
        }
    }

    if (!botMessageText) {
        botMessageText = 'Sorry, I am not sure about that. Can you please ask something else related to Indian culture?';
    }

    appendBotMessage(botMessageText);
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
