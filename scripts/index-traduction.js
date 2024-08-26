var LanguageList = {
  "FR" : "FR",
  "EN" : "EN"
};

//languages Objects
var WORDS_EN = {

//Nav bar
"shop" : "shop",
"about" : "about",
"work" : "work",

//Hero section
"hello" : "Hello, I'm Emilie",
"am" : "I'm' a ",
"based" : " based in Paris, ",
"title" : "focused on users and public interest through social, societal and environmental issues.",
"extrude-studio" : "I’m also a co-founder of extrude.studio",
"serviceDesign" : "Go to service design projects",

//Oriane
"orianeDescription" : "Designing a solution to help on the subject of high-school dropouts, by involving the parents a little bit more in school-life",

//Footer
"getInTouch" : "Get in touch",
"coded" : "This website is designed and coded by",
"me" : "me",
"license" : "All projects are licensed under"

};

var WORDS_FR = {

//Nav bar
"shop" : "boutique",
"about" : "a propos",
"work" : "projets",

//Hero section
"hello" : "Hello, moi, c'est Emilie",
"am" : "Je suis une ",
"based" : " basée à Paris, ",
"title" : "centrée sur les usagers et l'intérêt général au travers des questions sociales, sociétales et environnementales.",
"extrude-studio" : "Je suis également la co-fondatrice d'extrude.studio",
"serviceDesign" : "Voir les projets de design de service",

//Oriane
"orianeDescription" : "Conception d'une solution contre le décrochage scolaire, en incluant davantage les parents dans la vie scolaire.",

//Footer
"getInTouch" : "Me contacter",
"coded" : "Ce site a été conçu et codé par",
"me" : "moi",
"license" : "Tous les projets sont soumis aux licenses"

};

window.onload = initialize;

function initialize() {
  var $dropdown = $("#country_select");
  $.each(LanguageList, function(key, value) {
    $dropdown.
    append($("<option/>").
    val(key).
    text(value));
  });

  loadsLanguage("FR");
}

function loadsLanguage(lang){
/*fills all the span tags with class=lang pattern*/
  $('span[class^="lang"]').each(function(){
    var LangVar = (this.className).replace('lang-','');
    var Text = window["WORDS_"+lang][LangVar];
    $(this).text(Text);
  });

  if (lang === 'EN') {
    const frenchElements = document.getElementsByClassName('french');
    for (let i = 0; i < frenchElements.length; i++) {
      frenchElements[i].style.display = 'none';
    }
    const englishElements = document.getElementsByClassName('english');
    for (let i = 0; i < englishElements.length; i++) {
      englishElements[i].style.display = 'block';
    }
    //change HTML language in English
    document.documentElement.setAttribute('lang','en');

  } else if (lang === 'FR') {
    const frenchElements = document.getElementsByClassName('french');
    for (let i = 0; i < frenchElements.length; i++) {
      frenchElements[i].style.display = 'block';
    }
    const englishElements = document.getElementsByClassName('english');
    for (let i = 0; i < englishElements.length; i++) {
      englishElements[i].style.display = 'none';
    }
    //change HTML language in French
    document.documentElement.setAttribute('lang','fr');
  }
}
