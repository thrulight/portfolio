var LanguageList = {
  "EN" : "ENG",
  "FR" : "FRA"
};

//languages Objects
var WORDS_EN = {

//Nav bar
"shop" : "shop",
"about" : "about",
"work" : "work",

//Description
"header" : "Designing a website for a stop-loss reinsurance start-up, by turning a complex idea into something understandable",
"viewWebsite" : "View live website",
"role" : "my role",
"team" : "team",

//Initial goal
"initialGoalTitle" : "The initial goal",
"initialGoalText" : "Designing a website for the start-up that explains each aspect of who they are and what they do.",

//Challenge
"challenceTitle" : "The challenge",
"challenceText" : "Explaining easily how the reinsurance works, without compromising on the complexity of it.",
"challenceParagraph" : "The original website and deck explaining the product were not graphical at all, and simply explained with words. It was complicated to understand with part of the product worked how, as both parts were usually explained together.",
"challenceCaption" : "An animation was created to explain the caracteristics of the product in a more appealing way, and by separating both parts of the product in different animations — the most popular one being selected by default.",

//Goal
"goalTitle" : "The goal",
"goalText" : "This product has specific targets, and isn’t available for every entity part of those target. The point was to create an illegibility test for structures to easily understand if they are eligible or not for the product.",
"goalCaption" : "The first part of the test was to separate the different targets. A set of questions was then created for each of these targets.",

//Methology
"methodology" : "Methodology",

"defining" : "Defining",
"definingParagraph" : "A lot of elements needed to be defined, as we worked on the website development: from the stakeholders mapping and user needs, to clear understanding of the simulation form flow.",

"reviewing" : "Reviewing",
"reviewingParagraph" : "As we progressed in the website development, I created workshops with different end users to review the current pages, and seek for improvements.",

"responsive" : "Designing responsively",
"responsiveParagraph" : "To make sure the designs would work on the majority of devices, the designs were adapted to fit Tailwind’s breakpoints.",

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
"header" : "Design d'un site web pour une start-up de réassurance, en transformant une idée complexe en un résultat compréhensible.",
"viewWebsite" : "Voir le site live",
"role" : "mon rôle",
"team" : "équipe",

//Initial goal
"initialGoalTitle" : "L'objectif initial",
"initialGoalText" : "Concevoir le site web en expliquant chaque aspect de ce que la start-up est et de ce qu'elle fait.",

//Challenge
"challenceTitle" : "Le challenge",
"challenceText" : "Expliquer facilement le fonctionnement de la réassurance, sans compromettre sur la complexité.",
"challenceParagraph" : "Le site web d'origine et la brochure expliquant le produit n'étaient pas du tout graphiques et se contentaient d'expliquer avec des mots. Il était difficile de comprendre quelle partie du produit fonctionnait comment, car les deux parties étaient généralement expliquées ensemble.",
"challenceCaption" : "Une animation a été créée pour expliquer les caractéristiques du produit de manière plus attrayante, en séparant les deux parties du produit dans des animations différentes - la plus populaire étant sélectionnée par défaut.",

//Goal
"goalTitle" : "L'objectif",
"goalText" : "Ce produit a des cibles spécifiques et n'est pas disponible pour toutes les entités faisant partie de ces cibles. Il s'agissait de créer un test d'éligibilité pour que les structures puissent facilement comprendre si elles sont éligibles ou non au produit.",
"goalCaption" : "La première partie du test a consisté à séparer les différents publics. Une série de questions a ensuite été créée pour chacun de ces publics.",

//Methology
"methodology" : "Méthodologie",

"defining" : "Définir",
"definingParagraph" : "De nombreux éléments ont dû être définis au fur et à mesure que nous travaillions au développement du site web : de la cartographie des parties prenantes et des besoins des utilisateurs à la compréhension claire du flux du formulaire de simulation.",

"reviewing" : "Revoir",
"reviewingParagraph" : "Au fur et à mesure que nous avancions dans le développement du site web, j'ai organisé des ateliers avec différents utilisateurs finaux afin de revoir les pages actuelles et de rechercher des améliorations.",

"responsive" : "Concevoir pour tous les écrans",
"responsiveParagraph" : "Pour s'assurer que les designs fonctionneraient sur la majorité des appareils, ils ont été adaptés aux breakpoints de Tailwind.",

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
