
const SHEET_ID = '14JEK5FjK72oCONiPHMmb8kTulKwWy78jpLAnHhEPgn4';
const SHEET_NAME = 'Sheet1';  // Replace with actual sheet name if different
const API_KEY = 'AIzaSyBd1yUTrfJdklvMhdFUvlAXZ6fYAB1AFy4';

function fetchUserData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const userData = data.values[1]; // The second row contains user data
            document.getElementById('profile-picture').src = userData[0];
            document.getElementById('name').textContent = userData[1];
            document.getElementById('job-title').textContent = userData[2];
            document.getElementById('email').textContent = userData[3];
            document.getElementById('location').textContent = userData[4];
        })
        .catch(error => console.error('Error fetching data:', error));
}

fetchUserData();
