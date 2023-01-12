
// Special Deals API
const gData = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
    'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
  }
};

  fetch('https://steam-special-offers.p.rapidapi.com/games_data/?app_id=1593500', gData)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

const gList = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
      'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
    }
  };
  
  fetch('https://steam-special-offers.p.rapidapi.com/games_list/?start=0&count=10&region=IN', gList)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


// Steam Search API

const search = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
        'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
      }
    };
    
  fetch('https://steam2.p.rapidapi.com/search/Counter/page/1', search)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

const sNews = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ca0d7078c7msh3a5399a85e0761ep1266a1jsnf2235aab77dc',
          'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
      };
      
  fetch('https://steam2.p.rapidapi.com/newsForApp/730/limit/10/300', sNews)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

// autocomplete function
$( function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $(".input").autocomplete({
    source: availableTags
  });

} );


