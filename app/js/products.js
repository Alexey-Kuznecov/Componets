$(function() {
   $.getJSON('data/products.json', function(data)
   {
      var output = "";
      for(var i in data.products)
      {
         output +=
            "<div class=card-row>"
            + "<div class=card-image>"
               + "<img src=" + data.products[i].image + " alt=error>"
            + "</div>"
            + "<div class=card-text>"
               + "<div class=card-element>" + data.products[i].title + "</div>"
               + "<div class=card-element>" + data.products[i].description.substring(0,100) + "..." + "</div>"
               + "<div class='card-element card-action'>"
                  + "<a href='/'>Смотреть</a>"
               + "</div>"
            + "</div>"
          + "</div>";
      }
       console.log("it works!");
      $(".card-container").append(output);
   });
});
