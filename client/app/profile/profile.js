/**
 * Created by Danny on 8/11/15.
 */
'use strict';

angular.module('kslSinglesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
      });
  });
