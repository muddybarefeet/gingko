
(function() {
  'use strict';

  angular.module('app')
  .factory('homeFactory', homeFactory);

  homeFactory.$inject = ['$http'];

    var data = {"date":"Mon Nov 16 2015 09:40:48 GMT-0800 (PST)",
"time":"Mon Nov 16 2015 09:40:48 GMT-0800 (PST)",
"description":"Pizza Time",
"restaurant":"Pizza Express",
"address":"234 Market Street",
"contact":"0183636293",
"firstName":"David",
"lastName":"Tsai"};

  function homeFactory($http) {
    var services = {
      
      activate : activate,
      postMeal : postMeal

    };

    return services;

    function activate () {
      postMeal();
    }

    function postMeal (d) {
      console.log('data---------------------------------------->',data)
      return $http({
      method: 'POST',
      url: '/api/in/meals',
      data: data
      })
      .then(function (response) {
        console.log('response returned!!');
        return response.data;
      });

    }

    postMeal(data);

  }

})();

