angular.module("core").run(["$templateCache",function(n){n.put("home.html",'home <div ng-controller="MainCtrl as main"> <input type="text" ng-model="main.name"> </div>'),n.put("main.html","<h1> Fat Burn Hub </h1>")}]);