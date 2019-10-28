const SVG_NS = "http://www.w3.org/2000/svg"

$(document).ready(function(){

    
    // $("#grid").hide();
    // $("#loader").hide();

    $("#sectionSelect").on("change", function(event){
        // checkSize();
        // $("#grid").empty();
    $('ul').children().remove();
        $("#loader").hide();
        $change = ($(this).val())
       $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$change}.json?api-key=awlzncIf5AWJtGt2d3FyPQ2GxEVYzzFt`)
      .done(function(data) {
// setting value of news initial at o    
        let totalStories=0;
// ------
       $.each(data.results, function(key, value) {
           console.log(value)

           let multimedia = value.multimedia;
           if (multimedia.length === 0) {
               return
           }

           let description = value.abstract;
           let articleURL = value.url;

           $.each(multimedia, (key,value) =>{
                if (value.format === 'superJumbo') {
                    let imageURL = value.url;
                    let listItem = `<li><a href = "${articleURL}" target="_blank">
                    <img src = "${imageURL}"><p>${description}</p></a></li>`;
                    $('ul').append(listItem);
                }
                else {
                    return
                }
           })
        //    $("div").append(`<img src="${value.multimedia[4].url}"/>`)
        //    $("div").append(`<li>${value.abstract}</li>`)
                totalStories++;
                return (totalStories !==12)
    })
    // sectionSelect.empty();
    $('#loader').hide();

})

})
})