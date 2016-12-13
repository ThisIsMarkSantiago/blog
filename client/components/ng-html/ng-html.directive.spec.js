'use strict';

describe('Directive: ngHtml', function () {

  // load the directive's module
  beforeEach(module('myblogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-html></ng-html>');
    element = $compile(element)(scope);
    expect(element.text()).to.equal('this is the ngHtml directive');
  }));
});
