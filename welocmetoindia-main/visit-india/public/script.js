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
document.getElementById('state-select').addEventListener('change', function() {
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
