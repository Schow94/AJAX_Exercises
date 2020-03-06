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
  var $imagesContainer = $('.images-container');
  var $removeBtn = $('.remove-btn');

  //Clear input - Helper fxn
  const clearInput = () => {
    $($inputVal).val('');
  };

  //Event handler - submit button
  $searchBtn.on('click', e => {
    e.preventDefault();
    var query = $($inputVal).val();
    clearInput();

    //Make API call here
    $.getJSON(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}`
    )
      .then(res => {
        var imageURL = res.data[0].images.downsized_medium.url;
        // console.log(imageURL);
        var image = $('<img>', {
          src: imageURL,
          alt: query,
          class: 'image'
        });

        $imagesContainer.prepend(image);
        console.log(imageURL);
      })
      .catch(err => console.log(err));
  });

  //Event Handler - Remove images
  $removeBtn.on('click', e => {
    e.preventDefault();
    $($imagesContainer).empty();
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
  //     api_key: api_key
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
