'use strict';

angular.module('myblogApp')
  .directive('fbComments', function () {
    function createHTML(href, numposts, colorscheme) {
      return '<div class="fb-comments" ' +
               'data-href="' + href + '" ' +
               'data-numposts="' + numposts + '" ' +
               'data-colorsheme="' + colorscheme + '">' +
             '</div>';
    }
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        attrs.$observe('href', function (newValue) {
          var href = newValue;
          var numposts = attrs.numposts || 5;
          var colorscheme = attrs.colorscheme || 'light';

          element.html(createHTML(href, numposts, colorscheme));
          FB.XFBML.parse(element[0]);
        });
      }
    };
  });
