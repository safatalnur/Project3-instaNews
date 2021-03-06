

jQuery(document).ready(function($){
    
    $("#sectionSelect").on("change", function(event){
    
    //Change of header style when news are loaded
    $('header').addClass('headSmall');
    //loader is visible and previous items are removed   
    $('ul').children().remove();
        $("#loader").show();
        //Adding NYT Api authorization code
        $change = ($(this).val())
       $.getJSON(`https://api.nytimes.com/svc/topstories/v2/${$change}.json?api-key=awlzncIf5AWJtGt2d3FyPQ2GxEVYzzFt`)

    


      .done(function(data) {
// setting value of news initial at o    
        let totalStories=0;
// ------
       $.each(data.results, function(key, value) {
            //data for multimedia content
           let multimedia = value.multimedia;
           if (multimedia.length === 0) {
               return
           }
           //collecting and appending abstract, article url, and images
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
                //count and collect number of news upto 12
                totalStories++;
                return (totalStories !==12)
    })
    //Once news are loaded, loader is hidden again
    $('#loader').hide();

})

})
})