var myApp=angular.module('myApp', ['ngCart','ngRoute']);//modules,routing ,deeplinkinking services and directives
    myApp.config(function($routeProvider) {
        $routeProvider //configuring routes
        	 .when('/', {  //when(path-match routes against $location.path,route)
        		templateUrl : '/dish-type.html',
        		access: {restricted: false}
        	    })

            .when('/lunch', {
                templateUrl : '/dish-list-page-1.html',
                controller  : 'fab-data-lunch',
                access: {restricted: true}
                })

            .when('/dinner', {
                templateUrl : '/dish-list-page-1.html',
                controller  : 'fab-data-dinner',
                access: {restricted: true}
                })

            .when('/dessert', {
                templateUrl : '/dish-list-page-1.html',
                controller  : 'fab-data-dessert',
                access: {restricted: true}
                })

             .when('/login', {
                templateUrl : '/login.html',
                controller :   'LoginCtrl',
                access: {restricted: false}
                })
            
            .when('/register', {
                 templateUrl : '/register.html',
                 controller  : 'RegisterCtrl',
                 access: {restricted: false}
                })

            .when('/logout', {
      			controller: 'logoutController',
      			access: {restricted: true}
    			})
           
            // route for the breakfast page
            .when('/breakfast', {
                templateUrl : '/dish-list-page-1.html',
                controller  : 'fab-data-breakfast',
                access: {restricted: true}
                })
            .otherwise({   //when no other route definition is matched
      			redirectTo: '/'
    			});
    });


	myApp.run(function ($rootScope, $location, $route, AuthService) {
		  $rootScope.$on('$routeChangeStart',
		    function (event, next, current) {

		      AuthService.getUserStatus()
		      .then(function(){
		        if (next.access.restricted && !AuthService.isLoggedIn()){
		          $location.path('/login');
		          $route.reload(); //reload the current route even when $location not changed
		        }
		      });
		  });
		});
	
	

	

		
 

//
//   function onSignIn(googleUser) {
// 	  var profile = googleUser.getBasicProfile();
// 	  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
// 	  console.log('Name: ' + profile.getName());
// 	  console.log('Image URL: ' + profile.getImageUrl());
// 	  console.log('Email: ' + profile.getEmail());
// }




	