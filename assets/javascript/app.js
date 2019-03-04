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
  // set up variable topics with values
  var gifs=["pizza","sushi","mexican food","burgers"];

function displaygifShow () {
  var gif = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  // topics + "_s.gif&api_key=Td2YRT2jyEnZurMPZcbBsjKTTj7LSEug&limit=10";
  gif + "&api_key=Td2YRT2jyEnZurMPZcbBsjKTTj7LSEug&limit=10";

  // AJAX call for the gif buttons
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response){
      $("#gifview").empty();
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
          gifDiv.addClass("gifpictures");
          var rating = results[i].rating;
          var p = $("<h2>").text("Rating: " + rating);

          var gifImage = $("<img>");
          gifImage.attr("src", results[i].images.fixed_height_still.url);
          gifImage.attr("data-still", results[i].images.fixed_height_still.url);
          gifImage.attr("data-animate", results[i].images.fixed_height.url);
          gifImage.attr("data-state", "still");
          gifImage.addClass("gifImage");

          gifDiv.prepend(p);

          gifDiv.prepend(gifImage);
          $("#gifview").prepend(gifDiv);
      }

      $(".gifImage").on("click", function() {
          var state = $(this).attr("data-state");
          if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
          } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
          }
        });
    });
  }
  function renderButtons() {
      $("#gifbuttons").empty();
      for (var i = 0; i < gifs.length; i++) {
          var gifAdd = $("<button>");
          gifAdd.addClass("gif");
          gifAdd.attr("data-name", gifs[i]);
          gifAdd.text(gifs[i]);
          $("#gifbuttons").append(gifAdd);
      }
    }

    $("#add-gif").on("click", function(event) {
        event.preventDefault();
        var gif = $("#gif-input").val().trim();
        gifs.push(gif);
        renderButtons();
    });

    $(document).on("click", ".gif", displaygifShow);
    renderButtons();
});