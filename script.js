$(document).ready(function() {

    var nounArr = ["orphan children", "my real dad", "death", "grandma", "A real-life virgin",];

    

    var verbArr = ["maybe getting a little too involved in selling heroin", "snow falling gently on the froxen body of an orphan boy", "falling off my razor scooter and eating shit on the concrete", "skipping", "frolicking",];

    var adjectiveArr = ["uncle who voted for donald trump", "how cool it is that I love Jesus and he loves me back", "gorgeous", "bird-like", "sexy",];

    $("button").click(function() {
        $(".noun").each(function() {
            var randomIndex = Math.floor(Math.random() * nounArr.length);
            $(this).text(nounArr[randomIndex]);
        });
        
    });

    $("button").click(function() {
        $(".verb").each(function() {
            var randomIndex = Math.floor(Math.random() * verbArr.length);
            $(this).text(verbArr[randomIndex]);
        });
        
    });

    $("button").click(function() {
        $(".adjective").each(function() {
            var randomIndex = Math.floor(Math.random() * adjectiveArr.length);
            $(this).text(adjectiveArr[randomIndex]);
        });
        
    });
});