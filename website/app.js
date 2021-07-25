// API call by ZIP code:
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
// zip samples: 11413, 94040

const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=5735a0eeb9696af4386be5cbd8100747";

//setting the generate button API call function
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', performAction);

function performAction(){
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    apiCall(baseURL, zipCode, apiKey)
    .then(function(data){
        postData('/info', {temp: data.main.temp, feel: feelings});
    });
};

//setting the API callback function
const apiCall = async (baseURL, zip, key) => {
    const res = await fetch(baseURL+zip+",us"+key);
    
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log("error", error);
    }
};

//setting the post function
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}
