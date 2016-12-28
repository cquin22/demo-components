class Config
{
    /**
     * @ngdoc method
     * @name Constructor Service
     * @description Get the id cookie
     */
    constructor($stateProvider, $urlRouterProvider)
    {
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<h1 ng-click="main.createUser()">terter</h1>'
            })
        $urlRouterProvider.otherwise('/home');
    }


    /**
     * @ngdoc static method
     * @name Instantiate the Dependency injection
     * @description Get the id cookie
     */
    static initService($stateProvider, $urlRouterProvider){
        return new Config($stateProvider, $urlRouterProvider);
    }
}

Config.initService.$inject = ['$stateProvider', '$urlRouterProvider'];



export default Config.initService;
