'use strict';

describe('Directive: fbComments', function () {

  // load the directive's module
  beforeEach(module('myblogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fb-comments></fb-comments>');
    element = $compile(element)(scope);
    expect(element.text()).to.equal('this is the fbComments directive');
  }));
});
