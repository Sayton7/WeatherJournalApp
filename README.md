# Weather Journal App
In this project I will use [Open Weather Map API](https://openweathermap.org/) to create a web app that gets the corresponding live temprature data of an entered zipcode in the US.

## Approach

* First, setting up the NODE.js which is essential for the project and installing its necessary packages like (express, body-parser and cors).
* Then, I signed up for my API credentials and got my API key from [Open Weather Map API](https://openweathermap.org/).
* After that, creating the HTML and CSS files as required by the project rubric following the folder hierarchy.
* And then, I built my server js file and the app js file simultaneously adding one piece after another to get the final app as shown in the comments inside the files.
* Finally, modyfied my HTML and CSS files accordingly to match my final image of the app.

## Github Repository

I've updated my github repository after almost each of my daily sessions of working on the project so that you could follow up with the history and the building process of the files.
To view the repo please follow the link [Weather Journal App](https://github.com/Sayton7/WeatherJournalApp).

## References

* [Setting up the API link](https://openweathermap.org/current#zip)
* [Date formatting from Epoch to Local](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* [Degree symbol](https://www.toptal.com/designers/htmlarrows/math/degree-sign/)
* [Center elements with CSS](https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/)

## Note

Most of the lines are actually explained in the course itself and I didn't have to search for outer sources much. so many lines of my code might be close to what was introduced in the course itself.

# Fixed Notes

1- package.json file is missing which is required to install all the dependencies for your project.
* Created the required files ( package.json / package-lock.json ) following this tutorial [Create a package.json File](https://heynode.com/tutorial/create-packagejson-file/)

2- You need to required unit conversion based on apiKey.
* Added the metric option to my API key const.

3- You need to use empty js object as the project's endpoint
* On the server side
  * Changed the project's endpoint from an empty array to an empty object called projectData
  * Changed the POST and GET functions accordingly to handle the data through the projectData object
* On the client side
  * Changed the updateUI function to handle the data through the server's endpoint object
