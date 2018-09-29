// api key - 3c399272ff9f49cea79bf107353b25b0



var articleArray = [];

function AJAXrequest(searchParameter1, beg, end, pageN) {
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
      'page': pageN
    });

    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    }).then(function(response) { 
        
      //stores the top 5 articles in the array
        for(i = 0; i < 5; i++){
          articleArray[i] = response.response.docs[i];
        }


    
    
    
      });
    


};



//when clicking the search button, all the search terms are stored in variables
    $(document).on("click", "#run-search", function(){
      var searchTerm = $("#search-term").val().trim();
      var begDate = $("#start-year").val().trim();
      var endDate = $("#end-year").val().trim();
      var pageNum = $("#num-records-select").val().trim();

      //these variables are passed through the AJAXrequest function
        AJAXrequest(searchTerm, begDate, endDate, pageNum);

        console.log(articleArray);
      
        
      //need to display the articles to the page, can use a for loop

      for(i=0; i<5; i++){


      }

      });
    
    
   



  