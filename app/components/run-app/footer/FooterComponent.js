/**
 * @ngdoc Component
 * @name FooterComponent
 *
 * @author Cristian Quintero <cristianqr22@gmail.com>
 *
 * @description: Footer Component
*/

export const FooterComponent = {
    bindings: {
        isShow: '<'
    },
    template: `
    <footer  ng-if="$ctrl.isShow" class="page-footer blue-grey darken-2">
      <div class="footer-copyright blue-grey darken-1">
        <div class="container">
          Footer
        </div>
      </div>
    </footer>
  `
}