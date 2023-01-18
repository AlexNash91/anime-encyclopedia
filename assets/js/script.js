var gameTile = document.querySelector('.game_tile')
var newsTile = document.querySelector('.news_tile')
var specialDealsTile = document.querySelector('.specialDeals_tile')
var gameDeals = []
//Will list all games that have special offers
function dGames(){
const gList = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
      'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
    }
  };
  
  fetch('https://steam-special-offers.p.rapidapi.com/games_list/?start=0&count=1&region=IN', gList)
    .then(response => response.json())
    .then(response => {
      console.log(response) 
      // var ids = []
      var disountedGames = response
      for (let i = 0; i < 10; i++){
        var gameId = disountedGames.games_list[i]
        console.log(gameId)
        dealsList(gameId) 
      }
    })
    .catch(err => console.error(err));
  
}


function dealsList(id){
  //Special Deals API
  //Gives game data if you provide app id 
  // var index = 0
    const gData = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
        'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
      }
    };
    // if (index < 10) {
    fetch('https://steam-special-offers.p.rapidapi.com/games_data/?app_id=' + id , gData)
    .then(response => response.json())
    .then(response => {
      console.log('Individual Game', response)
      var discountGame = response
      // gameDeals.push(discountGame)
      showDeals(discountGame)
    })
    .catch(err => console.error(err));
    // Go to the next id after each call
    // index++;
  // }
  // discountArray(gameDeals)
// console.log(ids) 
}

function showDeals(deal){
  
  console.log('Discounted games function', deal)

    var specialEl = document.createElement('div')
    var discountEl = document.createElement('h3')
    var priceEl = document.createElement('h3')
    var titleEl = document.createElement('h3')
    var specialDeal = deal.discount
    var ogPrice = deal.original_price
    var gameTitle =deal.title
    var discountPrice = deal.price
    specialEl.append(discountEl)
    specialEl.append(priceEl)
    specialEl.append(titleEl)
    discountEl.textContent = gameTitle 
    // priceEl.textContent = 
    // specialEl.innerText = 'Inner text to show this works'
    console.log(specialDeal, ogPrice, gameTitle)

    specialDealsTile.append(specialEl)
  

}
    dGames();
// Steam Search API----------------------------------------------------------------------------
// Click buttton get string from input
document.querySelector(".search").addEventListener("click", function (event) {
   var gameSearch = document.querySelector(".gameSearch").value

 const search = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
          'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
      };
      
    fetch('https://steam2.p.rapidapi.com/search/' + gameSearch + '/page/1', search)
        .then(response => response.json())
        .then(response => {          
          console.log('Search Options')
          console.log(response) 
          document.querySelector('.resizable').style.maxHeight = '100%'
          var gameOptions = response;
          var swiperDiv = document.querySelector(".swiper-wrapper");
          swiperDiv.textContent = ""
          for (let i = 0; i < gameOptions.length; i++) {
            var gameTitle = gameOptions[i].title;
            gameTitle.className = "gamer"
            var gamePrice = gameOptions[i].price;
            var gameRelease = gameOptions[i].released;
            var gameReview = gameOptions[i].reviewSummary;
            var appId = gameOptions[i].appId
            var titleImgEl = document.createElement('div')
            titleImgEl.className = "swiper-slide"

            // var gameTitleEl = document.createElement("div");
            // var swiperSlide = document.createElement('div')
            // swiperSlide.setAttribute ('class','swiper-slide')
            // swiperSlide.id = 'slider'
            var img = `
            <img  src="${gameOptions[i].imgUrl}" alt="">
            <div>${gameTitle}</div>
            <div>Price : ${gamePrice}</div>
            <div>Release Date : ${gameRelease}</div>
            <div>Reviews : ${gameReview}</div>
            `
            titleImgEl.innerHTML = img
            var img = `<img  src="${gameOptions[i].imgUrl}" alt="">
            <div>${gameTitle}</div>`
            var gameUrl = '<a href="' + gameOptions[i].url +'">'+ img +'</a>'
            titleImgEl.innerHTML = gameUrl
            swiperDiv.appendChild(titleImgEl)

            var swiper = new Swiper(".mySwiper", {
              effect: "coverflow",
              grabCursor: true,
              centeredSlides: true,
              slidesPerView: "auto",
              coverflowEffect: {
                rotate: 7,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: true,
              },
              pagination: {
                el: ".swiper-pagination",
              },
            });
         
            var gameTitleImg = '<img src="' +  gameOptions[i].imgUrl + '"/>';

            newsLetter(appId)
          }

  //NewsLetter section
  // Gives current updates on the searched game
  function newsLetter(appId) {
    newsTile.innerHTML = ''
    const sNews = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
              'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
            }
          };
          
      fetch('https://steam2.p.rapidapi.com/newsForApp/' + appId + '/limit/10/300', sNews)
            .then(response => response.json())
            .then(response => {
              // console.log(response) 
              var newsArray = response.appnews.newsitems;
              // console.log("newsArray", newsArray);
              for(let i = 0; i < newsArray.length; i++){
                var title = newsArray[i].title
                var contents = newsArray[i].contents
                var urlEl = document.createElement('div')
                var titleEL = document.createElement('h3')
    
          //Putting the news elements on the page
                newsTile.append(titleEL, urlEl);
                titleEL.textContent = title
                urlEl.innerHTML = contents
    
              }
            })
            .catch(err => console.error(err));
          }

          
})

});


// Navbar block that changes the tile elements---------------------------------------------------
// ----------------------------------------------------------------------------------------------
const homeButton = document.querySelector("#home")
const sdButton = document.querySelector("#sd")
const nlButton = document.querySelector("#nl")
const gamesButton = document.querySelector("#games")

homeButton.addEventListener('click', function() {
  document.querySelector('.news_tile').style.display = 'block'
  document.querySelector('.game_tile').style.display = 'block'
  document.querySelector('.specialDeals_tile').style.display = 'block'

  document.querySelector('.news_tile').style.width = 'auto'
  document.querySelector('.game_tile').style.width = 'auto'
  document.querySelector('.specialDeals_tile').style.width = 'auto'

  document.querySelector('.resizable').style.maxHeight = '30%'
})

sdButton.addEventListener("click", function() {
  // resetting tiles
  document.querySelector('.news_tile').style.display = 'block'
  document.querySelector('.game_tile').style.display = 'block'
  document.querySelector('.specialDeals_tile').style.display = 'block'
  // hiding tiles
  document.querySelector('.news_tile').style.display = 'none';
  document.querySelector('.game_tile').style.display = 'none';
  // filling up the page with selected tile 
  document.querySelector('.specialDeals_tile').style.width = '100%';
  document.querySelector('.specialDeals_tile').style.maxHeight = '100%';
})

nlButton.addEventListener('click', function() {
  document.querySelector('.news_tile').style.display = 'block'
  document.querySelector('.game_tile').style.display = 'block'
  document.querySelector('.specialDeals_tile').style.display = 'block'

  document.querySelector('.game_tile').style.display = 'none';
  document.querySelector('.specialDeals_tile').style.display = 'none';

  document.querySelector('.news_tile').style.width = '100%';
  document.querySelector('.news_tile').style.maxHeight = '100%';
})

gamesButton.addEventListener('click', function() {
  document.querySelector('.news_tile').style.display = 'block'
  document.querySelector('.game_tile').style.display = 'block'
  document.querySelector('.specialDeals_tile').style.display = 'block'

  document.querySelector('.news_tile').style.display = 'none';
  document.querySelector('.specialDeals_tile').style.display = 'none';

  document.querySelector('.game_tile').style.width = '100%';
  document.querySelector('.game_tile').style.maxHeight = '100%';
})
