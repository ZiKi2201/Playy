$(function() {
    $(document).on('click','.Context', function ()  {
        console.log("asd");

        // prepare the request
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            q: encodeURIComponent($(".Search_music").val()).replace(/%20/g, "+"),
            maxResults: 1

        });
        // execute the request
        request.execute(function(response) {
            var results = response.result;
            $(".Image_1").html("");
            $.each(results.items, function(index, item) {
                $.get("item.html", function() {
                    $(".Image_1").append('<iframe class="video w100" width="240"  src="//www.youtube.com/embed/'+ item.id.videoId +'" frameborder="0" allowfullscreen></iframe>' +
                        '<div class="MusicDiv_2">\
                          <div class="MusicName_2" align="center">\
                          <b>'+ item.snippet.title +'</b>\
                          </div>\
                         </div>');
                    console.log(item);
                });
            });

        });
    });


});

function init() {
    gapi.client.setApiKey("AIzaSyCfY7jh6-Orcef9Yq5PZSuwxkVXExno89c");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}