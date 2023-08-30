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
"subheader" : "Landing page for a platform",
"header" : "FixMeUp is a platform for repairing things, through tutorials or peer-to-peer repairing services",
"viewWebsite" : "View live website",
"role" : "my role",

//Description 2
"descriptionText" : "As part of my semester at ESCP Business School for the Option Entrepreneurship, we were asked to create a start-up. We decided to create a platform for repairig all kind of objects. I was the one in charge of the UX/UI for the project.",
"descriptionSubText" : "We also had coding classes and had to design and code a landing page, which is what follows. The link to the coded one is below it.",

//Initial goal
"initialGoalTitle" : "The initial goal",
"initialGoalText" : "Creating a landing page for our future start-up, by explaining all key functionalities while not overwhelming the user with information",

//Branding
"branding" : "Branding",
"brandingTitle" : "Choosing the logo",
"brandingText" : "The logo was meant to be simple yet recognizable, in small or big. The color was also chosen to inspire trust.",

//Accessibility
"accessibility" : "Accessibility",
"accessTitle" : "Creating an experience for different times of the day",
"accessText" : "A dark mode toggle was added in order to suit the user’s preference",

//Coding
"coding" : "Coding",
"codingTitle" : "The challenges of coding my first landing page",
"codingText" : "Even though this was an entrepeneurial and business semester, we happened to have a lot of different coding classes. It tought us the basics of HTML, CSS, JavaScript and PHP. The final exam was coding the landing page for our future start-up.",

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
"subheader" : "Landing page pour une plateforme",
"header" : "FixMeUp est une plateforme qui permet de réparer des objets grâce à des tutoriels ou à des services de réparation de particulier à particulier.",
"viewWebsite" : "Voir le site en ligne",
"role" : "mon rôle",

//Description 2
"descriptionText" : "Dans le cadre de mon semestre à l'ESCP Business School en Option Entrepreneuriat, on nous a demandé de créer une start-up. Nous avons décidé de créer une plateforme de réparation d'objets en tout genre. J'étais en charge de l'UX/UI pour le projet.",
"descriptionSubText" : "Nous avons également suivi des cours de codage et nous avons dû concevoir et coder une landing page, qui est ce qui suit. Le lien vers la page codée se trouve au-dessus.",

//Initial goal
"initialGoalTitle" : "L'objectif initial",
"initialGoalText" : "Créer une landing page pour notre future start-up, en expliquant toutes les fonctionnalités clés sans pour autant submerger l'utilisateur d'informations.",

//Branding
"branding" : "Branding",
"brandingTitle" : "Choisir le logo",
"brandingText" : "Le logo devait être simple mais reconnaissable, en petit ou en grand format. La couleur a également été choisie pour inspirer la confiance.",

//Accessibility
"accessibility" : "Accessibilité",
"accessTitle" : "Créer une expérience pour les différents moments de la journée",
"accessText" : "Un mode sombre a été ajouté afin de répondre aux préférences de l'utilisateur.",

//Coding
"coding" : "Coder",
"codingTitle" : "Les défis du codage de ma première landing page",
"codingText" : "Bien qu'il s'agisse d'un semestre consacré à l'entrepreneuriat et au commerce, nous avons eu l'occasion d'assister à de nombreux cours de codage. Nous avons appris les bases du HTML, du CSS, du JavaScript et du PHP. L'examen final consistait à coder la page d'accueil de notre future start-up.",

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
