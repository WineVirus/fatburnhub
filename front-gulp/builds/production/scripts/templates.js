angular.module("core").run(["$templateCache",function(t){t.put("about.html",'1about fatburnhub.com <div ng-controller="AboutCtrl as about"> <input type="text" ng-model="about.a"> </div>'),t.put("contact.html",'contact <div ng-controller="ContactCtrl as contact"> <input type="text" ng-model="contact.a"> </div>'),t.put("main.html",'<h1>Fat Burn Hub</h1> <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p> <p><a class="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>')}]);