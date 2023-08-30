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
"header" : "Designing a website for a product design studio focused on 3D-printing and sustainability.",
"viewWebsite" : "View live website",
"role" : "my role",

//Initial goal
"initialGoalTitle" : "The initial goal",
"initialGoalText" : "Designing a website for a product design studio, detailing the designers and product pages.",

//Challenge
"challengeTitle" : "The challenge",
"challengeText" : "Create an intuitive and straightforward shopping experience",
"challengeParagraph" : "The website was designed to allow users to quickly find information on the products, and have as less painpoints as possible when shopping online.",
"challengeCaption" : "The choice of a sage color and simple design was chosen in accordance with the design studio products line.",

//Methology
"methodology" : "Methodology",
"testing" : "Testing",
"testingParagraph" : "The website was tested using Hotjar, in order to view the different users’ paths throughout the website, and make changes to enhance the user experience.",

"dev" : "Development",
"coding" : "Coding a functional e-commerce website",
"codingParagraph" : "Thinking about cost reduction, we thought of coding the website ourselves. Being the one with the most knowledge in web development, I took care of coding the responsive website, fully in HTML, CSS and JavaScript, with few libraries used. The e-commerce part was made using Shopify.",

//Navigation Bottom
"back" : "back to projects",
"product" : "product design project",

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
"header" : "Conception d'un site web pour un studio de design proposant des produits durables imprimés en 3D.",
"viewWebsite" : "Voir le site live",
"role" : "mon rôle",

//Initial goal
"initialGoalTitle" : "L'objectif initial",
"initialGoalText" : "Conception d'un site web pour un studio de design de produits, détaillant les designers et les pages de produits.",

//Challenge
"challengeTitle" : "Le challenge",
"challengeText" : "Créer une expérience d'achat intuitive et simple",
"challengeParagraph" : "Le site web a été conçu pour permettre aux utilisateurs de trouver rapidement des informations sur les produits et de réduire autant que possible les difficultés rencontrées lors des achats en ligne.",
"challengeCaption" : "Le choix d'une couleur sauge et d'un design simple a été fait en accord avec la ligne de produits du studio de design.",

//Methology
"methodology" : "Méthodologie",
"testing" : "Tester",
"testingParagraph" : "Le site web a été testé à l'aide de Hotjar, afin de visualiser les différents parcours des utilisateurs sur le site web et d'apporter des modifications pour améliorer l'expérience de l'utilisateur.",

"dev" : "Développement",
"coding" : "Coder un site d'e-commerce fonctionnel",
"codingParagraph" : "Dans un souci de réduction des coûts, nous avons pensé à coder le site web nous-mêmes. Étant celle avec le plus de connaissances en développement web, je me suis occupé du codage du site web responsive, entièrement en HTML, CSS et JavaScript, avec quelques librairies utilisées. La partie e-commerce a été réalisée avec Shopify.",

//Navigation Bottom
"back" : "retourner aux projets",
"product" : "projet de design produit",

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
