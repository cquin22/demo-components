/**
 * @ngdoc Component
 * @name HeaderComponent
 *
 * @author Cristian Quintero <cristianqr22@gmail.com>
 *
 * @description:  common component for the header of the application
*/


export const HeaderComponent = {
    bindings: {
        user: '='
    },
    template: `
        <header>
            <h1>Header</header>
        </header>
  `
}