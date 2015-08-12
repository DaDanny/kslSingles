/**
 * Created by Danny on 8/11/15.
 */
angular.module('kslSinglesApp')
  .controller('ProfileCtrl', function($scope) {
    console.log('hello');

    $scope.profileInit = function() {
      alert('Welcome to the profile!');
    }
  });
