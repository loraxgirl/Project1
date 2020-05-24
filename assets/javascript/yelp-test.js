$(document).ready(function(){

    var topics = ["", ""];

    function displayImg(){

        $("#restaurant-listings").empty();
        var input = $(this).attr("data-name");
        var limit = 15;
        var queryURL = "https://api.yelp.com/v3/transactions/delivery/search?location=" + input + "&limit=" + limit + "&api_key=VVvVOjZGwwjxwP4wq77qbiUkO8tOtAWv7M6f0WIIkbRNnYzcGYm9jpxdWa9sEHncnFvEIDaU6pl3CftfLcI8sw_6gwZAZfjM9I6kRmMTdKUtszphLRLoOW3oIqrEXnYx";   

        $.ajax({
            url: queryURL, 
            method: "GET"
        }).done(function(response) {

            for(var j = 0; j < limit; j++) {    

                var displayDiv = $("<div>");
                displayDiv.addClass("holder");
            
                var image = $("<img>");
                image.attr("src", response.data[j].images.original_still.url);
                image.attr("data-still", response.data[j].images.original_still.url);
                image.attr("data-animate", response.data[j].images.original.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                displayDiv.append(image);

                var rating = response.data[j].rating;
                console.log(response);
                var pRating = $("<p>").text("Rating: " + rating);
                displayDiv.append(pRating)

                $("#restaurant-listings").append(displayDiv);
            }
        });
    }



    

    $("#submitPress").on("click", function(){
        var input = $("#user-input").val();
        
        return false;
    })


});