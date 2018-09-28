// api key - 3c399272ff9f49cea79bf107353b25b0

// $("#run-search").on("click", function() {


    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "3c399272ff9f49cea79bf107353b25b0",
      // Search query term. Search is performed on the article body, headline and byline.
      'q': "Cheese",
      // "Date Format: YYYYMMDD
      // Restricts responses to results with publication dates of the date specified or later."
      'begin_date': "20180303",
      // Restricts responses to results with publication dates of the date specified or earlier."
      'end_date': "20180404",
      // Results limit
      'page': 5
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });















// });