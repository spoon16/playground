requirejs.config( {
  baseUrl: '/js/landing',
  paths: {
    bootstrap: '/lib/bootstrap/js/bootstrap.min',
    jquery: '/lib/jquery/jquery-2.0.0.min',
    angularjs: '/lib/angularjs/angular.min'
  }
} );

console.log( 'requirejs.config' );

requirejs( [ 'modules/landingPage' ] );

console.log( 'requirejs' );