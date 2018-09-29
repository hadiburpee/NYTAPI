// api key - 3c399272ff9f49cea79bf107353b25b0




function AJAXrequest(searchParameter1, beg, end) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
      'api-key': "3c399272ff9f49cea79bf107353b25b0",
      // Search query term. Search is performed on the article body, headline and byline.
      'q': searchParameter1,
      // "Date Format: YYYYMMDD
      // Restricts responses to results with publication dates of the date specified or later."
      'begin_date': beg,
      // Restricts responses to results with publication dates of the date specified or earlier."
      'end_date': end,
      // Results limit
      'page': 5
    });
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    }).then(function(response) { 
        console.log(response)

    });
    


};




    $(document).on("click", "#run-search", function(){
      var searchTerm = $("#search-term").val().trim();
      var begDate = $("#start-year").val().trim();
      var endDate = $("#end-year").val().trim();
      AJAXrequest(searchTerm, begDate, endDate);

    });
    
    
    ; 



  