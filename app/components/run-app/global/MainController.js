/**
 * @ngdoc controller
 * @name MainController
 *
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @requires $scope
 * @requires configServicer
 *
 * @description The Main Controller.
 */
const TIMEOUT = new WeakMap();
const SCOPE = new WeakMap();

class MainController {

    /**
     * @ngdoc method
     * @description Constructor Controller
    */
    constructor($timeout, $scope) {
        TIMEOUT.set(this, $timeout);
        SCOPE.set(this, $scope);

    }


    createUser(){
        function userRegistered(user) {
            console.log("user has registered");
        }
        
        function gotError(err) {
            console.log("error message - " + err.message);
            console.log("error code - " + err.statusCode);
        }
        
        var user = new Backendless.User();
        user.email = "backendlessdeveloper@backedless.com";
        user.password = "password";
        Backendless.UserService.register(user).then(userRegistered).catch(gotError);
    }




}

export default MainController