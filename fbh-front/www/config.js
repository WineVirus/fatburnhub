System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "depCache": {
    "github:angular/bower-angular@1.3.6/angular.min": [],
    "github:systemjs/plugin-css@0.1.0/css": [],
    "github:driftyco/ionic-bower@1.0.0-beta.13/js/ionic": [],
    "github:angular/bower-angular-animate@1.3.6/angular-animate": [
      "github:angular/bower-angular@1.3.6"
    ],
    "github:angular/bower-angular-sanitize@1.3.6/angular-sanitize": [
      "github:angular/bower-angular@1.3.6"
    ],
    "github:angular-ui/ui-router@0.2.10/release/angular-ui-router": [],
    "github:firebase/firebase-bower@2.0.6/firebase": [],
    "github:djindjic/fbh-firebase-util@0.0.14/fbhFirebaseAuthentication/fbhFirebaseAuthentication.template.html!github:systemjs/plugin-text@0.0.2": [],
    "app/config/main.config": [
      "github:angular/bower-angular@1.3.6"
    ],
    "app/config/fbhFirebaseUtil.config": [
      "github:angular/bower-angular@1.3.6",
      "github:djindjic/fbh-firebase-util@0.0.14"
    ],
    "app/routes/diet/diet.template.html!github:systemjs/plugin-text@0.0.2": [],
    "app/constants/firebase-url.constant": [],
    "app/routes/training/training.template.html!github:systemjs/plugin-text@0.0.2": [],
    "app/routes/training/training.controller": [
      "github:angular/bower-angular@1.3.6",
      "app/constants/firebase-url.constant"
    ],
    "github:angular/bower-angular@1.3.6": [
      "github:angular/bower-angular@1.3.6/angular.min"
    ],
    "github:systemjs/plugin-css@0.1.0": [
      "github:systemjs/plugin-css@0.1.0/css"
    ],
    "github:angular/bower-angular-animate@1.3.6": [
      "github:angular/bower-angular-animate@1.3.6/angular-animate"
    ],
    "github:angular/bower-angular-sanitize@1.3.6": [
      "github:angular/bower-angular-sanitize@1.3.6/angular-sanitize"
    ],
    "github:angular-ui/ui-router@0.2.10": [
      "github:angular-ui/ui-router@0.2.10/release/angular-ui-router"
    ],
    "github:firebase/firebase-bower@2.0.6": [
      "github:firebase/firebase-bower@2.0.6/firebase"
    ],
    "github:djindjic/fbh-firebase-util@0.0.14/fbhFirebaseAuthentication/fbhFirebaseAuthentication.module": [
      "github:djindjic/fbh-firebase-util@0.0.14/fbhFirebaseAuthentication/fbhFirebaseAuthentication.template.html!github:systemjs/plugin-text@0.0.2",
      "github:angular/bower-angular@1.3.6",
      "github:firebase/angularfire@0.9.0"
    ],
    "app/routes/diet/diet.controller": [
      "github:angular/bower-angular@1.3.6",
      "app/constants/firebase-url.constant"
    ],
    "app/routes/training/training.route": [
      "app/routes/training/training.template.html!github:systemjs/plugin-text@0.0.2",
      "github:angular/bower-angular@1.3.6",
      "app/routes/training/training.controller"
    ],
    "github:driftyco/ionic-bower@1.0.0-beta.13/css/ionic.css!github:systemjs/plugin-css@0.1.0": [
      "github:systemjs/plugin-css@0.1.0"
    ],
    "github:firebase/angularfire@0.9.0/angularfire": [
      "github:firebase/firebase-bower@2.0.6",
      "github:angular/bower-angular@1.3.6"
    ],
    "github:djindjic/fbh-firebase-util@0.0.14/fbhFirebaseUtil": [
      "github:djindjic/fbh-firebase-util@0.0.14/fbhFirebaseAuthentication/fbhFirebaseAuthentication.module",
      "github:angular/bower-angular@1.3.6"
    ],
    "app/routes/diet/diet.route": [
      "app/routes/diet/diet.template.html!github:systemjs/plugin-text@0.0.2",
      "github:angular/bower-angular@1.3.6",
      "app/routes/diet/diet.controller"
    ],
    "github:driftyco/ionic-bower@1.0.0-beta.13/js/ionic-angular": [
      "github:driftyco/ionic-bower@1.0.0-beta.13/css/ionic.css!github:systemjs/plugin-css@0.1.0",
      "github:driftyco/ionic-bower@1.0.0-beta.13/js/ionic",
      "github:angular/bower-angular@1.3.6",
      "github:angular/bower-angular-animate@1.3.6",
      "github:angular/bower-angular-sanitize@1.3.6",
      "github:angular-ui/ui-router@0.2.10"
    ],
    "github:firebase/angularfire@0.9.0": [
      "github:firebase/angularfire@0.9.0/angularfire"
    ],
    "github:djindjic/fbh-firebase-util@0.0.14": [
      "github:djindjic/fbh-firebase-util@0.0.14/fbhFirebaseUtil"
    ],
    "github:driftyco/ionic-bower@1.0.0-beta.13": [
      "github:driftyco/ionic-bower@1.0.0-beta.13/js/ionic-angular"
    ],
    "app/main": [
      "github:angular/bower-angular@1.3.6",
      "github:driftyco/ionic-bower@1.0.0-beta.13",
      "github:firebase/angularfire@0.9.0",
      "github:djindjic/fbh-firebase-util@0.0.14",
      "app/config/main.config",
      "app/config/fbhFirebaseUtil.config",
      "app/routes/diet/diet.route",
      "app/routes/training/training.route"
    ],
    "app/bootstrap": [
      "app/main"
    ]
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.6",
    "angularfire": "github:firebase/angularfire@0.9.0",
    "css": "github:systemjs/plugin-css@0.1.0",
    "fbh-firebase-util": "github:djindjic/fbh-firebase-util@0.0.14",
    "ionic": "github:driftyco/ionic-bower@1.0.0-beta.13",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:angular/bower-angular-animate@1.3.6": {
      "angular": "github:angular/bower-angular@1.3.6"
    },
    "github:angular/bower-angular-sanitize@1.3.6": {
      "angular": "github:angular/bower-angular@1.3.6"
    },
    "github:djindjic/fbh-firebase-util@0.0.14": {
      "angular": "github:angular/bower-angular@1.3.6",
      "angularfire": "github:firebase/angularfire@0.9.0",
      "text": "github:systemjs/plugin-text@0.0.2"
    },
    "github:driftyco/ionic-bower@1.0.0-beta.13": {
      "angular": "github:angular/bower-angular@1.3.6",
      "angular-animate": "github:angular/bower-angular-animate@1.3.6",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.3.6",
      "angular-ui-router": "github:angular-ui/ui-router@0.2.10",
      "css": "github:systemjs/plugin-css@0.1.0"
    },
    "github:firebase/angularfire@0.9.0": {
      "angular": "github:angular/bower-angular@1.3.6",
      "firebase": "github:firebase/firebase-bower@2.0.6"
    }
  }
});

