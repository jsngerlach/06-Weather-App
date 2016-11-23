(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['$http', 'toastr'];

    /* @ngInject */
    function WeatherController($http, toastr) {
        var vm = this;

        vm.OpenWeatherMapApi = OpenWeatherMapApi;

        vm.results = []


        ////////////////

        function OpenWeatherMapApi(city) {
            $http
                .get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=7d3abb8246f1322f9e4660632d2b4a33')
                .then(function(response) {
                    vm.data = response.data;
                    toastr.success('You did something right for once!','Finally' )

                    vm.nowDate = new Date(new Date().getTime()).toLocaleDateString();
                    vm.nowTime = new Date(new Date().getTime()).toLocaleTimeString();
                    vm.results.push({ name: vm.data.name, date: vm.nowDate, time: vm.nowTime });
                })
                .catch(function(error) {
                    toastr.error('I knew you would mess it up!')
                });

        }
    }
})();
