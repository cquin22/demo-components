/**
 * @ngdoc module
 * @name App
 * @description Instantiate app in Angular
 * 
 */
import angular from 'angular';
global.$ = require('jquery');
//import velocity from 'velocity-animate'
//import materialize from 'materialize-css'
import backendless from 'backendless';
import uiRouter from 'angular-ui-router';
import angularAnimate from  'angular-animate';
import angularAria from  'angular-aria';
import run from './run-app/index';



const root = angular
    .module('app', [
        uiRouter,
        angularAnimate,
        angularAria,
        run
    ])


document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['app']));

export default root