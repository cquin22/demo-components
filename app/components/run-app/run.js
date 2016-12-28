class Run
{
    /**
     * @ngdoc method
     * @name Constructor Service
     * @description Get the id cookie
     */
    constructor($rootScope, $state, $location, $urlRouter)
    {
        Backendless.initApp( '47FF250F-8566-549D-FFEA-442B202BCE00', '8D10CCF5-6692-5F5B-FF2E-1776931E5800', 'v1' );
        Backendless.enablePromises();
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
            console.log(event+ '-' + toState + '-' + toParams);
        });
    }


    /**
     * @ngdoc static method
     * @name Instantiate the Dependency injection
     * @description Get the id cookie
     */
    static initService($rootScope, $state, $location, $urlRouter){
        return new Run($rootScope, $state, $location, $urlRouter);
    }
}

Run.initService.$inject = ['$rootScope', "$state", '$location', '$urlRouter'];



export default Run.initService;
