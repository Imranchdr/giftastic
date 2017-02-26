 $("button").on("click", function() {
      var city = $(this).attr("data-city");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        city + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var cityImage = $("<img>");
            cityImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(cityImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }  

});
        });




        