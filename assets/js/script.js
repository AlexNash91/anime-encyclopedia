var gameTile = document.querySelector('.Game_tile')
var newsTile = document.querySelector('.News_tile')

// // Special Deals API
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
//   })
//   .catch(err => console.error(err));

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
//       document.getElementsByClassName('News_tile').innerHTML = response.content;
//     })
//     .catch(err => console.error(err));


// Steam Search API
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
          var gameOptions = response;
          for (let i = 0; i < gameOptions.length; i++) {
            var gametitle = gameOptions[i].title;
            var gamePicture = gameOptions.imageUrl;
            var gametitleEl = document.createElement("div");
            var gamePictureEl = document.createElement("img")
            gametitleEl.className = "games"
            gameTile.append(gametitleEl)
            gametitleEl.textContent = gametitle;
            gameTile.appendChild(gamePictureEl);
            gamePictureEl.imageUrl = gamePicture;
            
          }
        })
})

// 
      
        // // Add search options
  
          
        // });
      // })
      // .catch(err => console.error(err));
    

  //NewsLetter section
const sNews = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
          'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
      };
      
  fetch('https://steam2.p.rapidapi.com/newsForApp/730/limit/10/300', sNews)
        .then(response => response.json())
        .then(response => {
          // console.log(response) 
          var newsArray = response.appnews.newsitems;
          console.log("newsArray", newsArray);
          for(let i = 0; i < newsArray.length; i++){
            var title = newsArray[i].title
            var contents = newsArray[i].contents
            
            var titleEL = document.createElement('h3')
            newsTile.append(titleEL);
            titleEL.textContent = title

          }
          // document.querySelector('.Game_tile').textContent = response.appnews.newsitems;
        })
        .catch(err => console.error(err));

// autocomplete function
// $( function() {
//   var availableTags = [
//     "ActionScript",
//     "AppleScript",
//     "Asp",
//     "BASIC",
//     "C",
//     "C++",
//     "Clojure",
//     "COBOL",
//     "ColdFusion",
//     "Erlang",
//     "Fortran",
//     "Groovy",
//     "Haskell",
//     "Java",
//     "JavaScript",
//     "Lisp",
//     "Perl",
//     "PHP",
//     "Python",
//     "Ruby",
//     "Scala",
//     "Scheme"
//   ];
  // $(".input").autocomplete({
  //   source: 
  // });

// } );



function newsLetter(params) {
  var showNews = document.getElementsByClassName('News_tile');
  
 showNews.innerText = 'Does thus work ?'
}
newsLetter();

// Adding all names to search bar for autocomplete function

