# GifTastic

## Contributors
@missybarringer
____________________________________
## Technology
* CSS3, HTML5, Javascript, Bootstrap, jQuery
* [GitHub Repository Link](https://github.com/missybarringer/GifTastic.git)
____________________________________
### Overview of the problem
1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
   * We chose animals for our theme, but you can make a list to your own liking.

2. Your app should take the topics in this array and create buttons in your HTML.
   * Try using a loop that appends a button for each string in the array.

3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

5. Under every gif, display its rating (PG, G, so on).
   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.

6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

_________________________________________________________________________________

### Solution to the problem
* create an array of themed strings, each one related to a topic & save it to a variable called 'topics'
* take the topics in the array and create buttons in your HTML---try using a loop t that appends a button for each string in the array
* when user clicks a button, display 10 static images from the GIPHY API & display on page
* when user clicks a gif it should go to the animated version and if they click again it goes back to the static version
* under every gif display it's rating
* add a form to page that takes the user input from it and addes it to the 'topics' array
* then make a function call that takes each topic in the array & remakes the buttons on the page
* Make fully mobile responsive
_________________________________________________________________________________

### Technical Approach
* created the variable for the topic values
* created the function to display the gifs
* created the AJAX GET request to the Giphy API and prepended when they were returned
* created a click event to determine if the image was still or animated & updated the gifs state
* made sure the div was empty then looped through then added a button with appropriate info
* finally created the click event to accept the users input and pushed it to the gifs array
____________________________________
#### Contributors
*SubtlePattern background Made by Vikas Kumar Singh
*art sign Photo by Ian Williams on Unsplash
____________________________________
## License
*This product is licensed under the MIT License (MIT).
____________________________________
## Contributing Guidelines
All contributions and suggestions are welcome!
For direct contributions, please fork the repository and file a pull request.
____________________________________
## Contact
* [Website published here](https://missybarringer.github.io/GifTastic/)
* e-mail: barringer.margaret@gmail.com
* Twitter: @goatfeatherfarm
* Facebook: @goatfeatherfarm
* Instagram: @goatfeatherfarm
* Added to [Personal Portfolio webpage](https://missybarringer.github.io/)
