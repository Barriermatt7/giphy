

$(document).ready(function(){

    var animals = ["cat", "cheetah", "jaguar", "lion", "sea lion", "lion fish", "shark"
        ];
            
      function renderButtons() {
        
            $("#animals").empty();
 
                for (var i = 0; i < animals.length; i++) {
                    var a = $("<button>");
                        a.addClass("animal-button");
                        a.attr("data-name", animals[i]);
                        a.text(animals[i]);
                        $("#animals").append(a);
        }
      }

    $(document).on("click", ".animal-button", function() {
        $("#animal-gifs").empty(); 
        var name = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+ name;
  
        
    $.ajax({
        url: queryURL,
        method: "GET"
        })
  
    .then(function(response) {
          
        var animals = response.data;
        var animated = animals.images.fixed_height.url;
        var still = animals.images.fixed_height_still.url;
        
        var aniImage = $("<img>");
            aniImage.attr("src", still);
            aniImage.attr("data-still",still);
            aniImage.attr("data-animate", animated);
            aniImage.attr("data-state", "still");
            aniImage.addClass("aniImage");
          
    $("#animals").prepend(aniImage);
        });
 
    });

    $("#add-animal").on("click", function(event) {
        event.preventDefault();
        
        var animal = $("#animal-input").val().trim();
        animals.push(animal);
        renderButtons();
      });
        renderButtons();
      });
  
 
      $(document).on("click",".aniImage", function() {
       
        var state = $(this).attr("data-state");
            if (state === "still") {

                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
        } 
            else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
        }
      });


   