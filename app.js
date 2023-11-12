document.getElementById("searchButton").addEventListener("click", function() {
    var superheroName = document.getElementById("superheroInput").value;
    var sanitizedSuperheroName = encodeURIComponent(superheroName);

    $.ajax({
        url: "superheroes.php",
        type: "GET",
        data: { query: sanitizedSuperheroName },
        success: function(data) {
            var superhero = JSON.parse(data);
            if (superhero) {
                // Superhero found so display the information
                $("#result").html(
                    "<h3>" + superhero.alias + "</h3>" +
                    "<h4> A.K.A " + superhero.name + "</h4>" +
                    "<p>" + superhero.biography + "</p>"
                );
            } else {
                // Superhero not found so display a message
                $("#result").html("<p>Superhero not found</p>");
            }
        },
        error: function(error) {
            console.log("Error:", error);
        }
    });
});
