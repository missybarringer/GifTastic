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

var topics=["pizza","sushi","mexican food","burgers"];
for (var i = 0; i < topics.length; i++){
    var topicsBtn = $("<button>");
    topicsBtn.addClass("topics-button topics topics-button-color");
    topicsBtn.attr("data-topics", topics[i]);
    topicsBtn.text(topics[i]);
    $("#buttons").append(topicsBtn);
}

$("button").on("click", function() {
    clear();
var topics = $(this).attr("data-topics");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
topics + "_s.gif&api_key=Td2YRT2jyEnZurMPZcbBsjKTTj7LSEug&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {
    console.log(queryURL, response);
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
        var foodDiv = $("<div>");
        var p = $("<p>").text("Rating;" + results[i].rating);
        var foodImg = $("<img>");
        foodImg.attr("src", results[i].images.fixed_height.url);
        foodDiv.append(p);
        foodDiv.append(foodImg);
        $("#gifs").prepend(foodDiv);
    }
});
});

function clear() {
    $("#gifs").empty();
}
