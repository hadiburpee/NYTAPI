// api key - 3c399272ff9f49cea79bf107353b25b0



var articleArray = [];
var summaryArray = [];
var headlineArray = [];

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
        for(i = 0; i < pageN; i++){

          articleArray.push(response.response.docs[i].web_url);
          summaryArray.push(response.response.docs[i].snippet);
          headlineArray.push(response.response.docs[i].headline.main);

        }

        console.log("array " + articleArray);
        console.log("pageN: " + pageN);
        console.log("headlineL: " + headlineArray);

    
        for(i=0; i<pageN; i++){
          var k = i;
          k = k+1;
          var dispScreen = $("<a>" + k + " " + headlineArray[i] + "</a>");
          dispScreen.attr('href', articleArray[i]);
          $("#well-section").append(dispScreen);
          $("#well-section").append("<p>");
  
        }

    
    
      });
    


};

console.log("array outside" + articleArray);

//when clicking the search button, all the search terms are stored in variables
    $(document).on("click", "button", function(){
      
      //choice doesn't work
      var choice = $(".btn")
      var searchTerm = $("#search-term").val().trim();
      var begDate = $("#start-year").val().trim();
      var endDate = $("#end-year").val().trim();
      var pageNum = $("#num-records-select").val().trim();

      // console.log("pagenum: " + pageNum);
      // console.log("option: " + $("option"));
      // console.log("records selected: " + $("#num-records-selected"));
      //these variables are passed through the AJAXrequest function
        // console.log("article array: " + articleArray);        
      //need to display the articles to the page, can use a for loop

   
        AJAXrequest(searchTerm, begDate, endDate, pageNum);

      

      console.log("choice " + choice);

      });
    
    
   



  