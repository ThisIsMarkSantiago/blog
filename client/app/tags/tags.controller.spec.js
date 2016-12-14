'use strict';

describe('Component: TagsComponent', function () {

  // load the controller's module
  beforeEach(module('myblogApp'));

  var TagsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TagsComponent = $componentController('tags', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
