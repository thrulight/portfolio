var LanguageList = {
  "EN" : "EN",
  "FR" : "FR"
};

//languages Objects
var WORDS_EN = {

//Nav bar
"shop" : "shop",
"about" : "about",
"work" : "work",

//Description
"subheader" : "Sustainable scoring app",
"header" : "GREENER is an app that allows users to get access to knowledge about what they buy",

"role" : "my role",
"duration" : "Duration",
"durationText" : "2 weeks",
"team" : "Team size",
"teamText" : "Only me",

//Description 2
"descriptionText" : "As part of my semester at ESCP Business School for the Option Entrepreneurship, we were asked to help an existing start-up. I chose to work as a UX/UI designer for them. They had an idea, but no app.",
"descriptionSubText" : "This is the app,  followed by the landing page that I designed for them.",

//Initial goal
"initialGoalTitle" : "The initial goal",
"initialGoalText" : "Designing a website for a product design studio, detailing the designers and product pages.",
"initialGoalParagraph" : "The founders had original sketches with 12 differents menus for the app and a LOT of functionalities they wanted to implement.",
"initialGoalParagraph2" : "I spent a lot of time prioritizing the features that would be the most interesting for the users.",

//Branding
"branding" : "Branding",
"brandingTitle" : "Choosing the logo",
"brandingText" : "The founders originally didn’t want to modify their logo. A work was done to simplify it , and creating a clearer version of the app icon, which they didn’t have before.",

"brandingTitle2" : "Color",
"brandingText2" : "A survey was made for the app target in order to choose the color that inspired them most a sustainable app.",
"brandingText3" : "The majority chose the one that is now their primary color.",

//Landing page
"landingPage" : "Landing page",
"landingTitle" : "Creating a simple landing page to better explain their product",
"landingText" : "A simple landing page was also created, as they both had some knowledge in coding. This allows them to have an online presence and explain the different features their product offers.",

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
"subheader" : "Application de notation écologique",
"header" : "GREENER est une application qui permet aux utilisateurs d'accéder à des informations sur ce qu'ils achètent.",

"role" : "mon role",
"duration" : "Durée",
"durationText" : "2 semaines",
"team" : "Taille de l'équipe",
"teamText" : "Juste moi",

//Description 2
"descriptionText" : "Dans le cadre de mon semestre à l'ESCP Business School en Option Entrepreneuriat, on nous a demandé d'aider une start-up existante. J'ai choisi de travailler pour eux en tant que designer UX/UI. Ils avaient une idée, mais pas d'application.",
"descriptionSubText" : "Voici l'application, suivie de la landing page que j'ai conçue pour eux.",

//Initial goal
"initialGoalTitle" : "L'objectif initial",
"initialGoalText" : "Conception d'une application pour une start-up éco-responsable",
"initialGoalParagraph" : "Les fondateurs avaient des croquis originaux avec 12 menus différents pour l'application et un grand nombre de fonctionnalités qu'ils voulaient implémenter.",
"initialGoalParagraph2" : "J'ai passé beaucoup de temps à hiérarchiser les fonctionnalités qui seraient les plus intéressantes pour les utilisateurs.",

//Branding
"branding" : "Branding",
"brandingTitle" : "Choisir le logo",
"brandingText" : "À l'origine, les fondateurs ne souhaitaient pas modifier leur logo. Un travail a été fait pour le simplifier et créer une version plus claire de l'icône de l'application, qu'ils n'avaient pas auparavant.",

"brandingTitle2" : "Couleur",
"brandingText2" : "Une enquête a été réalisée auprès de la cible de l'application afin qu'elle choisisse la couleur qui lui inspirait le plus une application durable.",
"brandingText3" : "La majorité d'entre eux ont choisi celle qui est aujourd'hui leur couleur principale.",

//Landing page
"landingPage" : "Landing page",
"landingTitle" : "Création d'une landing page simple pour mieux expliquer leur produit",
"landingText" : "Une landing page simple a également été créée, étant donné qu'ils avaient tous deux des connaissances en codage. Cela leur permet d'avoir une présence en ligne et d'expliquer les différentes caractéristiques de leur produit.",

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

  loadsLanguage("EN");
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
