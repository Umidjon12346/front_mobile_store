// Get data from API
URL = 'http://127.0.0.1:8000/api/get'
fetch(URL).then(response => response.json()).then(data => {
    console.log(data)
    // Display data
    document.getElementById('app').innerHTML = JSON.stringify(data)
})