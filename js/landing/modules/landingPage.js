define(['angularjs'], function(angular) {
    return angular.module('landingPage', [])
        .config(function ($routeProvider) {
            $routeProvider.when('/:landingPageId', {})
                .otherwise({redirectTo: '/'});
        })
        .factory('landingPageFactory', function ($q) {
            var landingPages = {
                '__default': {
                    content: {
                        style: {
                            right: '80px',
                            width: '550px'
                        },
                        statement: 'Try professional lenses and cameras from leading brands including Canon and Nikon.',
                        callToAction: 'Try Now'
                    },
                    image: 'assets/img/sport.dirtbike.jpg',
                    credit: {
                        name: 'Sanjay Pradhan',
                        url: 'http://500px.com/photo/18270747'
                    }
                },
                'madein': {
                    content: {
                        style: {
                            left: '80px',
                            width: '525px'
                        },
                        class: 'pull-right',
                        statement: 'Taken with a Canon EOS 5D Mark II using a 42mm lens.',
                        callToAction: 'Try a Canon'
                    },
                    image: 'assets/img/madein.jpg',
                    credit: {
                        name: 'Eric Leung',
                        url: 'http://500px.com/photo/26703059'
                    }
                },
                'portrait.cat': {
                    content: {
                        style: {
                            right: '80px',
                            width: '500px'
                        },
                        statement: 'Taken with a Canon EOS 5D Mark III using a 50mm lens.',
                        callToAction: 'Try a Canon'
                    },
                    image: 'assets/img/portrait.cat.jpg',
                    credit: {
                        name: 'Margo Rita',
                        url: 'http://500px.com/photo/25290897'
                    }
                },
                'portrait.girl': {
                    content: {
                        style: {
                            left: '60px',
                            width: '425px'
                        },
                        class: 'pull-right',
                        statement: 'Taken with a Canon EOS 20D using a 50mm lens.',
                        callToAction: 'Try a Canon'
                    },
                    image: 'assets/img/portrait.girl.jpg',
                    credit: {
                        name: 'Aaron Tyree',
                        url: 'http://500px.com/photo/13328017'
                    }
                },
                'landscape.ocean': {
                    content: {
                        style: {
                            left: '80px',
                            width: '430px'
                        },
                        class: 'pull-right',
                        statement: 'Taken with a Nikon D700 using a 21mm lens.',
                        callToAction: 'Try a Nikon'
                    },
                    image: 'assets/img/landscape.ocean.jpg',
                    credit: {
                        name: 'kasand kasand',
                        url: 'http://500px.com/photo/27288459'
                    }
                }
            };

            return {
                getLandingPage: function(landingPageId) {
                    var landingPage = landingPages[landingPageId];

                    // using promises here to minimize impact of changing landingPages source to HTTP
                    var d = $q.defer();
                    d.resolve(landingPage);
                    return d.promise;
                }
            };
        })
        .controller('landingPageController', function ($scope, $route, landingPageFactory) {
            $scope.$on('$routeChangeSuccess', function (event, current, previous) {
                var landingPageId = current.params.landingPageId || '__default';

                landingPageFactory.getLandingPage(landingPageId)
                    .then(function(lp) {
                        $scope.content = lp.content;
                        $scope.image = lp.image;
                        $scope.credit = lp.credit;
                    });
            });
        });
});