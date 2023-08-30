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

//First section
"aboutMe" : "About me",
"contactMe" : "Contact me",
"resume" : "See Resume",
"description1" : "Hi! I am currently looking for a UX/UI designer job in France.",
"description2" : "I’ve gained experience in industrial product design through my internship and the design studio I have co-founded, with a special focus on sustainability.",
"description3" : "I’ve also had some experience in UX / UI design during my previous internship, through the building of an app. I have since then helped a start-up create an app from scratch. I also gained experience by doing freelance for two different start-ups to build their website and digital product, as a Lead Designer.", 

//Education
"dapDescription" : "Certificate 'Designing a social innovation project'",
"dapDates" : "February 2023 - June 2023",

"escpDescription" : "Master in Management - Option E",
"escpDates" : "September 2020 - December 2020",

"strateDescription" : "Industrial Designer Diploma",
"strateDates" : "September 2017 - July 2022",

//Work
"workXP" : "Work experience",

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
"description1" : "Bonjour ! Je suis actuellement à la recherche d'un travail de designer UX/UI en France",
"description2" : "J'ai gagné de l'expérience en design industriel grâce à mon stage et le studio de design que j'ai co-fondé, avec un intérêt particulier pour l'environnement.",
"description3" : "J'ai également développé des compétences en design UX/UI grâce à mon précédent stage, au travers la création d'une application.  Depuis, j'ai aidé une start-up à créer une application à partir de zéro. J'ai également développé mes compétences en faisant du freelance pour deux différentes start-ups, en concevant leur site web et plateforme, comme Lead Designer.", 

//Education
"dapDescription" : "Certificat 'Concevoir un projet de design d’innovation sociale'",
"dapDates" : "Février 2023 - Juin 2023",

"escpDescription" : "Master in Management - Option E",
"escpDates" : "Septembre 2020 - Décembre 2020",

"strateDescription" : "Diplôme de Designer Industriel",
"strateDates" : "Septembre 2017 - Juillet 2022",

//Work
"workXP" : "Expérience professionnelle",

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
