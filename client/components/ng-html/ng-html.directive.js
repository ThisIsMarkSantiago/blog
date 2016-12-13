'use strict';

angular.module('myblogApp')
  .directive('ngHtml', ($compile) => {
    return {
      restrict: 'A',
      link: (scope, elem, attrs) => {
        if (attrs.ngHtml) {
          elem.html(scope.$eval(attrs.ngHtml));
          $compile(elem.contents())(scope);
        }
        scope.$watch(attrs.ngHtml, (newValue, oldValue) => {
          if (newValue && newValue !== oldValue) {
            elem.html(newValue);
            $compile(elem.contents())(scope);
          }
        });
      }
    };
  });
