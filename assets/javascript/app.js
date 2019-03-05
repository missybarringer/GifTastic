// create an array of themed strings, each one related to a topic & save it to a variable called 'topics'
// take the topics in the array and create buttons in your HTML
// ---try using a loop t that appends a button for each string in the array
// when user clicks a button, display 10 static images from the GIPHY API & display on page
// when user clicks a gif it should go to the animated version and if they click again it goes back to the static version
// under every gif display it's rating
// add a form to page that takes the user input from it and addes it to the 'topics' array
// then make a function call that takes each topic in the array & remakes the buttons on the page
// --*Bonus* make fully mobile responsive
// --*Bonus* allow users to request additional gifs be added to the page * each request would add 10 gifs to the page
// --*Bonus* list additional metadata (title, tags, etc) for each gif in a clean readable format
// --*Bonus* include a 1-click download button for each gif that works on all devices
// --*Bonus* integrate this search with additional APIs.
// --*Bonus* allow users to add their fav gifs to a 'favorites' section

$(document).ready(function () {
  // set up variable topics with values *** got the CORES error with that variable so used gifs instead
  var gifs=["Loop","3d","Pixel","Art","Psychedelic","Collage"];
  
  // function to display the Gifs
  function displaygifShow () {
      var gif = $(this).attr("data-name");
      var limit = 10;
      // Storing the giphy API URL for gifs using the art name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      gif + "&api_key=Td2YRT2jyEnZurMPZcbBsjKTTj7LSEug&limit=" + limit;
      
      // performing an AJAX GET request to our queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
          // After the data from the AJAX request comes back
        }).then(function(response){
            $("#gifView").empty();
            // storing the data from the AJAX request in the results variable
            var results = response.data;
            // looping through the returned results and creating variables for the divs & rating
      for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
          gifDiv.addClass("gifpictures");
          var gifTitle = $("<div>");
          gifTitle.addClass("gifTitle");
          var rating = results[i].rating;
          var title = results[i].title;
          var t = $("<h4>").text("Title: " + title);
          var p = $("<h4>").text("Rating: " + rating);
          // creating & storing an image tag in gifImage variable
          var gifImage = $("<img>");
          // assigning attributes & class for still & animated image URLs
          gifImage.attr("src", results[i].images.fixed_height_small_still.url);
          gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
          gifImage.attr("data-animate", results[i].images.fixed_height_small.url);
          gifImage.attr("data-state", "still");
          gifImage.addClass("gifImage");

          // prepending the rating for display
          gifTitle.prepend(t);

          gifDiv.prepend(p);
          // prepending the gifImage and gifDiv for display
          gifDiv.prepend(gifImage);
          $("#gifView").prepend(gifDiv);
        }
        // creating the click event, if the images's state is still, update its src attr to the data-animate value.
        $(".gifImage").on("click", function() {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                // then set the image's data-state to animate
                $(this).attr("data-state", "animate");
            } else {
                // else set the src to the data-still value
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
        });
        // didn't get working
        // $(".gifAdd").on("click", function() {
        //     var total= Number(total)+10;
        //     console.log(total);
        // });
    });
}
// make sure the #gifButtons div is empty then loop through the gifs(topics) and add a button tag to each one with class, attr, & text
  // then append to the #gifButtons div for display
  function renderButtons() {
      $("#gifButtons").empty();
      for (var i = 0; i < gifs.length; i++) {
          var gifAdd = $("<button>");
          gifAdd.addClass("gif");
          gifAdd.attr("data-name", gifs[i]);
          gifAdd.text(gifs[i]);
          $("#gifButtons").append(gifAdd);
        }
    }
    // creating the click event to accept text inputted by the user and push it into the gifs(topics) array.
    $("#add-gif").on("click", function(event) {
        event.preventDefault();
        // this grabs the text inputted and trims any leading or trailing spaces
        var gif = $("#gif-input").val().trim();
        // convert users text input to have uppercase first letter like other buttons
        $("#gif-input").keyup(function() {
            var gif = $("#gif-input").val();
            gif = gif.charAt(0).toUpperCase() + gif.slice(1);
            $("#gif-input").val(gif);
        });
        // the text is added to the initial array that was set up
        console.log(gif);
        // prevent the user from adding the same button again
        if ($.inArray(gif, gifs) === -1) {
            gifs.push(gif);
        console.log(gifs);
        // calling the renderButtons function to process the array
        renderButtons();
        }
    });
    // adding click event listeners to all elements with a class of gif
    $(document).on("click", ".gif", displaygifShow);
    // calling the renderButtons function to display initial buttons
    renderButtons();
});