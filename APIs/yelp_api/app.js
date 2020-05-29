$(document).ready(function () {
    

    function buildQueryURL() {

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-restaurant&location=los-angeles";

         $.ajax({
            url: queryURL ,
            headers: {
             'Authorization':'Bearer VVvVOjZGwwjxwP4wq77qbiUkO8tOtAWv7M6f0WIIkbRNnYzcGYm9jpxdWa9sEHncnFvEIDaU6pl3CftfLcI8sw_6gwZAZfjM9I6kRmMTdKUtszphLRLoOW3oIqrEXnYx',
         },
            method: 'GET',
            dataType: 'json',
            success: function(data){
                console.log('success: '+data);
               // Grab the results from the API JSON return
               var totalresults = data.total;

        
               
               // If our results are greater than 0, continue
               if (totalresults > 0){
                   // Display a header on the page with the number of results
                   $('#results').append('<h5>We discovered ' + totalresults + ' results!</h5>');
                   // Itirate through the JSON array of 'businesses' which was returned by the API

              
                   $.each(data.businesses, function(i, item) {
                  
                       // Store each business's object in a variable
                       var id = item.id;
                       //var alias = item.alias;
                       var phone = item.display_phone;
                       var image = item.image_url;
                       var name = item.name;
                       var rating = item.rating;
                       var reviewcount = item.review_count;
                       var address = item.location.address1;
                       var city = item.location.city;
                       var state = item.location.state;
                       var zipcode = item.location.zip_code;
                       // Append our result into our page
                      
                     $('#results').append('<div class="resultRow" id="' + id + 
                     '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + 
                     '" style="width:220px;height:200px;"><br><div class="info">Name : <b>' + name + 
                     '</b><br>Business ID: ' + id + 
                     '<br> Location (Address):  ' + address + '<br>' + city + '  ' + state + ' ' + zipcode + 
                     '<br>Phone number : ' + phone + 
                     '<br>Rating : ' + rating + ' with ' + reviewcount + ' reviews.</div></div>');
                

                
                    });
               } else {
                   // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
                   $('#results').append('<h5>We discovered no results!</h5>');
               }
           }
        });     
        
    };

    
    $("#search").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var info = $("#input-term").val().trim();

        buildQueryURL(info);
        // Calling renderButtons which handles the processing of our movie array
        
        
      });




//---------------------------
    });


    
        /*var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/{id}/reviews?locale={en}_{CA}";

        $.ajax({
           url: myurl,
           headers: {
            'Authorization':'Bearer VVvVOjZGwwjxwP4wq77qbiUkO8tOtAWv7M6f0WIIkbRNnYzcGYm9jpxdWa9sEHncnFvEIDaU6pl3CftfLcI8sw_6gwZAZfjM9I6kRmMTdKUtszphLRLoOW3oIqrEXnYx',
        },
           method: 'GET',
           dataType: 'json',
           success: function(data){
               console.log('success: '+data);
           }
        });   */   






