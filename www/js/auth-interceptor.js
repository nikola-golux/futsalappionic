angular.module(‘myApp.services’) 
.factory(‘AuthInterceptor’, function($q) {
  return {
    ‘request’: function(config) {
      config.headers.Authorization = window.localStorage[‘authToken’];
      return config;
    }
  };
});