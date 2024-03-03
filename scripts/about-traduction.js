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

//First section
"aboutMe" : "About me",
"contactMe" : "Contact me",
"resume" : "See Resume",
"description1" : "Hi! I am currently looking for a UX/UI Designer job in France.",
"description2" : "I have a particular interest in projects with an environmental impact, as well as projects focused on local authorities and public-sector players. I always put citizens at the heart of the projects I work on.",
"description3" : "I've been able to develop my UX/UI design skills through my various training courses and professional experience, particularly as a freelancer. This has enabled me to gain in empathy and observation, but also to work more effectively in a group.", 

//Education
"dapDescription" : "Public Action Design Diploma'",
"dapDates" : "February 2023 - June 2023",

"escpDescription" : "Master in Management - Option E",
"escpDates" : "September 2020 - December 2020",

"strateDescription" : "Industrial Designer Diploma",
"strateDates" : "September 2017 - July 2022",

//Work
"workXP" : "Work experience",

"userDescription" : "Digital service designer - Internship/CDD",
"userDates" : "September 2023 - April 2024",

"CRIDF" : "Ile-de-France Regional Counsil",
"cridfDescription" : "General-interest designer - Internship",
"cridfDates" : "March 2023 - June 2023", 

"leonessaDescription" : "UX / UI Lead Designer - Freelance",
"leonessaDates" : "November 2021 - August 2022",

"valuecoDescription" : "UX / UI Designer - Freelance",
"valuecoDates" : "July 2022 - January 2023",

"esDescription" : "Product designer",
"esDates" : "January 2021 - March 2023",

"plastifDescription" : "Product designer - Internship",
"plastifDates" : "March 2020 - August 2022",

"remote" : "Remote",

//Certificates
"certificates" : "Certificates",

//Contests
"contests" : "Contests",

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

//First section
"aboutMe" : "About me",
"contactMe" : "Contact me",
"resume" : "See Resume",
"description1" : "Bonjour ! Je suis actuellement à la recherche d'un travail de Designer UX/UI en France.",
"description2" : "J'ai un intérêt particulier pour les projets à impact environnementaux, ainsi que les projets centrés sur les collectivités territoriales et les acteurs publics. Je place toujours les citoyens au centre des projets sur lesquels je travaille.",
"description3" : "J'ai pu développé des compétences en Design UX/UI au travers de mes différentes formations et expériences professionnelles, notamment en freelance. Cela m'a permis de gagner en empathie, en observation, mais également de travailler plus efficacement en groupe.", 

//Education
"dapDescription" : "Diplôme de Design d'Actions Publiques",
"dapDates" : "Février 2023 - Juin 2023",

"escpDescription" : "Master in Management - Option E",
"escpDates" : "Septembre 2020 - Décembre 2020",

"strateDescription" : "Diplôme de Designer Industriel",
"strateDates" : "Septembre 2017 - Juillet 2022",

//Work
"workXP" : "Expérience professionnelle",

"userDescription" : "Designer de service digitaux - Stage/CDD",
"userDates" : "Septembre 2023 - Avril 2024",

"CRIDF" : "Conseil Régional d'Ile-de-France",
"cridfDescription" : "Designer d'Intérêt Général - Stage",
"cridfDates" : "Mars 2023 - Juin 2023", 

"leonessaDescription" : "Lead Designer UX/UI - Freelance",
"leonessaDates" : "Novembre 2021 - Août 2022",

"valuecoDescription" : "Designer UX/UI - Freelance",
"valuecoDates" : "Juillet 2022 - Janvier 2023",

"esDescription" : "Designer produit et UX/UI",
"esDates" : "Janvier 2021 - Mars 2023",

"plastifDescription" : "Designer produit et UX/UI - Stage",
"plastifDates" : "Mars 2020 - Août 2022",

"remote" : "À distance",

//Certificates
"certificates" : "Certificats",

//Contests
"contests" : "Concours",

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
