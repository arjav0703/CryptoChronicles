const events = [
    {
        year: "2008",
        title: "Bitcoin Whitepaper",
        description: "Satoshi Nakamoto publishes the Bitcoin whitepaper, introducing the concept of a decentralized digital currency."
    },
    {
        year: "2009",
        title: "Bitcoin Launch",
        description: "The Bitcoin network goes live, and the first block (Genesis Block) is mined by Satoshi Nakamoto."
    },
    {
        year: "2010",
        title: "First Bitcoin Transaction",
        description: "The first known purchase using Bitcoin occurs when a programmer buys two pizzas for 10,000 BTC."
    },
    {
        year: "2011",
        title: "Emergence of Altcoins",
        description: "Other cryptocurrencies such as Litecoin and Namecoin are launched, leading to the rise of altcoins."
    },
    {
        year: "2013",
        title: "Bitcoin Price Surge",
        description: "Bitcoin's price reaches $1,000 for the first time, drawing significant media attention."
    },
    {
        year: "2017",
        title: "ICO Boom",
        description: "Initial Coin Offerings (ICOs) become popular, raising billions for new projects and leading to regulatory scrutiny."
    },
    {
        year: "2020",
        title: "DeFi and NFTs",
        description: "Decentralized Finance (DeFi) and Non-Fungible Tokens (NFTs) gain popularity, expanding the use cases for blockchain technology."
    },
    {
        year: "2021",
        title: "Mainstream Adoption",
        description: "Major companies and institutions begin accepting cryptocurrencies, and Bitcoin reaches an all-time high of over $60,000."
    },
    {
        year: "2023",
        title: "Regulatory Developments",
        description: "Countries around the world are implementing regulations for cryptocurrencies, shaping the future landscape of digital assets."
    }
];

const eventList = document.getElementById('event-list');
const eventDetails = document.getElementById('event-details');
const searchInput = document.getElementById('search-input');

events.forEach((event) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${event.year}: ${event.title}`;
    listItem.addEventListener('click', () => {
        eventDetails.innerHTML = `<h3>${event.title}</h3><p>${event.description}</p>`;
    });
    eventList.appendChild(listItem);
});

searchInput.addEventListener('input', filterEvents);

function filterEvents() {
    const query = searchInput.value.toLowerCase();
    const filteredEvents = events.filter(event => 
        event.title.toLowerCase().includes(query) || 
        event.description.toLowerCase().includes(query)
    );
    updateEventList(filteredEvents);
}

function updateEventList(filteredEvents) {
    eventList.innerHTML = '';
    filteredEvents.forEach((event) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.year}: ${event.title}`;
        listItem.addEventListener('click', () => {
            eventDetails.innerHTML = `<h3>${event.title}</h3><p>${event.description}</p>`;
        });
        eventList.appendChild(listItem);
    });
}

const ctx = document.getElementById('priceChart').getContext('2d');
const priceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2010', '2011', '2013', '2017', '2020', '2021', '2023'],
        datasets: [{
            label: 'Bitcoin Price (USD)',
            data: [0.08, 0.30, 1000, 20000, 30000, 60000, 40000], // Example prices
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});