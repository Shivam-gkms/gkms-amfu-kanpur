// script.js

// Fetch Weather Data
document.addEventListener("DOMContentLoaded", () => {
    fetchWeatherData();

    const saveButton = document.getElementById("save-button");
    saveButton.addEventListener("click", saveCropRecommendations);
});

// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData() {
    const apiKey = "YOUR_API_KEY"; // Replace with your API Key
    const city = "Delhi"; // Replace with desired location
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weather-info");
            weatherInfo.innerHTML = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Condition:</strong> ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

// Save Crop Recommendations
function saveCropRecommendations() {
    const cropText = document.getElementById("crop-text").value;
    const savedData = document.getElementById("saved-data");

    if (cropText.trim() === "") {
        alert("Please enter crop recommendations.");
        return;
    }

    // Display saved data
    savedData.innerHTML = `<p><strong>Saved Recommendations:</strong> ${cropText}</p>`;
    alert("Crop recommendations saved successfully!");
}
