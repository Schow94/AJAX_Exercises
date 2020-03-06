var api_key = config.api_key;
//GIF URL
// api.giphy.com / v1 / gifs / search;

//STICKER URL
// api.giphy.com / v1 / stickers / search;

//URL Format
//api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=dc6zaTOxFJmzC

https: $(document).ready(function() {
  console.log('DOM has loaded');

  //Selectors
  var $searchBtn = $('.search-btn');
  var $inputVal = $('.form-val');

  //Clear input - Helper fxn
  const clearInput = () => {
    $($inputVal).val('');
  };

  //Event handler for submit button
  $searchBtn.on('click', e => {
    e.preventDefault();
    var query = $($inputVal).val();
    clearInput();

    //Make API call here
    $.getJSON(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}`
    )
      .then(res => {
        data = res.data;
        console.log(data);
      })
      .catch(err => console.log(err));
  });

  //jQuery $.getJSON() - More concise
  // $.getJSON(
  //   'https:/api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=iXlyf4Urp11j3yeecPUvcZUfjda3fAWi'
  // ).then(res => {
  //   data = res.data;
  //   for (let item of data) {
  //     console.log(item);
  //   }
  // });

  //jQuery $ajax
  // $.ajax({
  //   method: 'GET',
  //   url: 'https:/api.giphy.com/v1/gifs/search',
  //   data: {
  //     q: 'hilarious',
  //     rating: 'g',
  //     api_key: 'iXlyf4Urp11j3yeecPUvcZUfjda3fAWi'
  //   },
  //   dataType: 'json'
  // })
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  //   });
});
