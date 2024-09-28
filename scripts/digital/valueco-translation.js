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

//Description
"header" : "ValueCo enables asset managers and asset owners to gain knowledge on the sustainability of their funds, thanks to ESG scores",
"role" : "my role",
"team" : "team",

//Initial goal
"initialGoalTitle" : "The initial goal",
"initialGoalText" : "Designing a Saas platform for a start-up, that is practical for all the different users that will use it.",

//Challenge
"challengeTitle" : "The challenge",
"challengeText" : "Giving quick access to the funds that are frequently used, and making it easy to change them.",
"challengeParagraph" : "The Affinity Panel is a place for Asset Owners to find the funds owned by Asset Managers that are the closest to their criteria on ESG scores (Environment, Social and Governance). The most used funds needed to be found quickly, as their data is going to be checked frequently.",
"challengeCaption" : "It was important to make it easy to edit the favorite funds, as the Asset Owners work on new funds quite frequently.",

//Challenge 2
"challenge2Text" : "The point was to help Asset Managers better understand the differences between several Asset Owners by comparing them.",
"challenge2Caption" : "The button for comparing Asset Owners needed to be visible enough as it is an action that will be used frequently by Asset Managers.",

//Methology
"methodology" : "Methodology",

"testing" : "User testing",
"testingParagraph" : "The most crucial flows were validated thanks to user testing in Maze. Different versions were created and sent to the different targets, guided through video calls.",
"testingParagraph2" : "This allowed us to understand how easy it was for the users to complete actions, and which version to choose, if there were several.",

//Navigation Bottom
"back" : "back to projects",
"next" : "next project",

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
"work" : "projects",

//Description
"header" : "ValueCo permet aux gestionnaires d'actifs et aux propriétaires d'actifs d'acquérir des connaissances sur la durabilité de leurs fonds, grâce aux scores ESG.",
"role" : "mon rôle",
"team" : "équipe",

//Initial goal
"initialGoalTitle" : "L'objectif initial",
"initialGoalText" : "Concevoir une plateforme Saas pour une start-up, qui soit pratique pour tous les différents utilisateurs qui l'utiliseront.",

//Challenge
"challengeTitle" : "Le challenge",
"challengeText" : "Donner un accès rapide aux fonds fréquemment utilisés et faciliter leur modification.",
"challengeParagraph" : "Le panel d'affinités permet aux propriétaires d'actifs de trouver les fonds détenus par les gestionnaires d'actifs qui se rapprochent le plus de leurs critères en matière de scores ESG (environnement, social et gouvernance). Les fonds les plus utilisés devaient être trouvés rapidement, car leurs données seront vérifiées fréquemment.",
"challengeCaption" : "Il était important de faciliter la modification des fonds favoris, car les propriétaires d'actifs travaillent fréquemment sur de nouveaux fonds.",

//Challenge 2
"challenge2Text" : "L'objectif était d'aider les gestionnaires d'actifs à mieux comprendre les différences entre plusieurs propriétaires d'actifs en les comparant.",
"challenge2Caption" : "Le bouton permettant de comparer les propriétaires d'actifs devait être suffisamment visible, car il s'agit d'une action qui sera fréquemment utilisée par les gestionnaires d'actifs.",

//Methology
"methodology" : "Méthodologie",

"testing" : "Test utilisateur",
"testingParagraph" : "Les flow les plus cruciaux ont été validés grâce à des tests utilisateurs dans Maze. Différentes versions ont été créées et envoyées aux différentes cibles, guidées par des appels vidéo.",
"testingParagraph2" : "Cela nous a permis de comprendre à quel point il était facile pour les utilisateurs de réaliser des actions, et quelle version choisir, s'il y en avait plusieurs.",

//Navigation Bottom
"back" : "retourner aux projets",
"next" : "prochains projets",

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
