// API call by ZIP code:
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
// zip samples: 11413, 94040

const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
//added the units option
const apiKey = "&appid=5735a0eeb9696af4386be5cbd8100747&units=metric";

//setting the generate button actions
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', performAction);

function performAction(){
    //getting the entered zip code
    const zipCode = document.getElementById('zip').value;
    //getting the entered feelings
    const feelings = document.getElementById('feelings').value;
    //getting the weather data
    apiCall(baseURL, zipCode, apiKey)
    
    .then(function(data){
        //posting the data to the server
        postData('/info', {date:data.dt, temp: data.main.temp, feel: feelings})
        //updating the UI
        updateUI()
    })
};

//setting the weather API callback function
const apiCall = async (baseURL, zip, key) => {
    const res = await fetch(baseURL+zip+",us"+key);
    
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log("error", error);
    }
};

//setting the POST function
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
};

//setting up the updateUI function
const updateUI = async () => {
    const request = await fetch('/all')
    try {
        const allData = await request.json()
        console.log(allData)
        const date = new Date(allData.date*1000)
        // console.log(date.toLocaleString()) //more detailed date expression
        //adding +1 to the getMonth as the function gives the numbers 0~11 to the months
        document.getElementById('date').innerHTML = `Date : ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
        //using the degree symbol &#176;
        document.getElementById('temp').innerHTML = `Temprature : ${allData.temp} &#176;C`;
        document.getElementById('data').innerHTML = `You are feeling : ${allData.feel}`;
        //show the results UI element
        document.getElementById('entryHolder').style.display = "block";
    } catch(error) {
        console.log("error", error)
    }
};

//setting the close button to hide the result UI element
const closeButton = document.getElementById('close')
closeButton.addEventListener('click', () => {
    document.getElementById('entryHolder').style.display = "none"
});
