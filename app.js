document.getElementById("searchButton").addEventListener("click", function() {
    $.ajax({
        url: "superheroes.php",
        type: "GET",
        success: function(data) {
            window.alert(data);
        },
        error: function(error) {
            console.log("Error:", error);
        }
    });
});