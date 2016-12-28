/**
 * @ngdoc config
 *
 * @author Cristian Quintero <cristianqr22@gmail.com>
 *
 * @description  Module that contains the common components for the application.
*/

import angular from 'angular'

import  mainController from './global/MainController'
import Config from './config';
import Run from './run';

const run = angular
    .module('app.common', [])
    .controller('mainController', mainController)
    .config(Config)
    .run(Run)
    .name


export default run