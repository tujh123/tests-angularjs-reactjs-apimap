var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'page-home.html',
            controller: 'mainController'
    	})
    	.when('/about', {
    		templateUrl: 'page-about.html',
            controller: 'aboutController'
    	})
      .when('/products', {
    		templateUrl: 'page-products.html',
            controller: 'productsController'
    	})
      .when('/ferrochrome', {
    		templateUrl: 'page-ferrochrome.html',
            controller: 'ferrochromeController'
    	})
      .when('/menu', {
    		templateUrl: 'page-menu.html',
            controller: 'menuController'
    	})
      .when('/ferrosilicium', {
    		templateUrl: 'page-ferrosilicium.html',
            controller: 'ferrosiliciumController'
    	})
      .when('/contact', {
    		templateUrl: 'page-contact.html',
            controller: 'contactController'
    	});

});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

animateApp.controller('menuController', function($scope) {
    $scope.pageClass = 'page-menu';
});

animateApp.controller('productsController', function($scope) {
    $scope.pageClass = 'page-products';
});

animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

animateApp.controller('ferrochromeController', function($scope) {
    $scope.pageClass = 'page-ferrochrome';
});

animateApp.controller('ferrosiliciumController', function($scope) {
    $scope.pageClass = 'page-ferrosilicium';
});
