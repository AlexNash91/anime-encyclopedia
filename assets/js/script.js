var gameTile = document.querySelector('.Game_tile')
var newsTile = document.querySelector('.News_tile')
var specialDealsTile = document.querySelector('SpecialDeals_tile')
// var sliderTile = document.querySelector('.swiper-slide')






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
      var disountedGames = response
      for (let i = 0; i < 10; i++){
        var gameId = disountedGames.games_list[i]
        console.log(gameId)
      }
    dealsList(gameId)
    })
    .catch(err => console.error(err));


    function dealsList(gameId){
      //Special Deals API
      //Gives game data if you provide app id 
      const gData = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
          'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
        }
      };
      for(i = 0; i < 10; i++){
        fetch('https://steam-special-offers.p.rapidapi.com/games_data/?app_id=' + gameId[i], gData)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          var specialEl = document.createElement('div')
          var discountGames = response
          for(var x = 0; x <= discountGames.length; x++){
            var specialDeal = discountGames[x].discount
            var ogPrice = discountGames[x].original_price
            var gameTitle =discountGames[x].title
            console.log(specialDeal, ogPrice, gameTitle)
          // specialDealsTile.append(specialEl)
          // specialEl.innerText = specialDeal, ogPrice, gameTitle
          }
          // var gameData = response
          // for (let i = 0; i < gameData.length; i++){
          //   gameData[i].title
          // }
        })
        .catch(err => console.error(err));
      }

    }
  }
    dGames();
// Steam Search API----------------------------------------------------------------------------
// Click buttton get string from input
document.querySelector(".search").addEventListener("click", function (event) {
  gameTile.innerHTML = ''
 
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
          var gameOptions = response;
          for (let i = 0; i < gameOptions.length; i++) {
            var gameTitle = gameOptions[i].title;
            var appId = gameOptions[i].appId
            var titleImgEl = document.createElement('div')
            var gameTitleEl = document.createElement("div");
            var gameTitleImg = '<img src="' +  gameOptions[i].imgUrl + '"/>';
            gameTitleEl.className = "games"
            gameTile.append(titleImgEl) 
            gameTile.append(gameTitleEl)
            titleImgEl.innerHTML = gameTitleImg 
            gameTitleEl.textContent = gameTitle;
            newsLetter(appId)
            // swiperSlide(gameTitleImg)
          }

          
        })


        
        
  //NewsLetter section
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
              console.log(response) 
              var newsArray = response.appnews.newsitems;
              console.log("newsArray", newsArray);
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


//function to redirect user to game page when they click on the picutre
const homeButton = document.querySelector("#home")
const sdButton = document.querySelector("#sd")
const nlButton = document.querySelector("#nl")
const gamesButton = document.querySelector("#games")

homeButton.addEventListener('click', function() {

})
sdButton.addEventListener("click", function() {

})
nlButton.addEventListener('click', function() {

})
gamesButton.addEventListener('click', function {

})




//Adding swiper to the games after theyre selected
// function swiperSlide(gameTitleImg){

  //}}
