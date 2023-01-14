var gameTile = document.querySelector('.Game_tile')
var newsTile = document.querySelector('.News_tile')
// function dealsList(appId){
// Special Deals API
//Gives game data if you provide app id 
// const gData = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
//     'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
//   }
// };

//   fetch('https://steam-special-offers.p.rapidapi.com/games_data/?app_id=1593500', gData)
//   .then(response => response.json())
//   .then(response => {
//     console.log(response)
//     console.log(response.content)
//     var gameData = response
//     for (let i = 0; i < gameData.length; i++){
//       gameData[i].title
//     }
//   })
//   .catch(err => console.error(err));
// }

// Will list all games that have special offers
// const gList = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
//       'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://steam-special-offers.p.rapidapi.com/games_list/?start=0&count=1&region=IN', gList)
//     .then(response => response.json())
//     .then(response => {
//       console.log(response) 
//       var disountedGames = response
//       for (let i = 0; i < disountedGames.length; i++){
//         disountedGames[i].title
//       }
    
//     })
//     .catch(err => console.error(err));


// Steam Search API
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
            var gameTitleEl = document.createElement("div");
            var titleImgEl = document.createElement('div')
            var gameTitleImg = '<img src="' +  gameOptions[i].imgUrl + '"/>';
            gameTitleEl.className = "games"
            gameTile.append(gameTitleEl)
            gameTile.append(titleImgEl)
            gameTitleEl.textContent = gameTitle;
            titleImgEl.innerHTML = gameTitleImg 
            newsLetter(appId)
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



