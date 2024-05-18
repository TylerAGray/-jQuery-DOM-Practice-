$(document).ready(function() {
    $("#movie-form").submit(function(event) {
      event.preventDefault();
      var title = $("#title").val();
      var rating = $("#rating").val();
      
      // Ensure title has at least 2 characters and rating is between 0 and 10
      if (title.length >= 2 && rating >= 0 && rating <= 10) {
        // Append movie details to the list with remove button
        $("#movies-list").append("<div><span>Title: " + title + ", Rating: " + rating + "</span><button class='remove-movie'>Remove</button></div>");
        $("#title").val("");
        $("#rating").val("");
      } else {
        alert("Please enter a valid title (at least 2 characters) and rating (between 0 and 10).");
      }
    });
  
    // Remove movie when remove button is clicked
    $("#movies-list").on("click", ".remove-movie", function() {
      $(this).parent().remove();
    });
  
    // Allow users to sort alphabetically by title or rating
    $("#sort-title").click(function() {
      var movies = $("#movies-list").children("div");
      movies.sort(function(a, b) {
        var titleA = $(a).find("span").text().toUpperCase();
        var titleB = $(b).find("span").text().toUpperCase();
        return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
      });
      $("#movies-list").empty().append(movies);
    });
  
    $("#sort-rating").click(function() {
      var movies = $("#movies-list").children("div");
      movies.sort(function(a, b) {
        var ratingA = parseFloat($(a).find("span").text().split("Rating: ")[1]);
        var ratingB = parseFloat($(b).find("span").text().split("Rating: ")[1]);
        return ratingA - ratingB;
      });
      $("#movies-list").empty().append(movies);
    });
  });
  