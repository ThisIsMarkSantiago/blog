'use strict';

(function() {

  class MainController {

    constructor() {
      angular.extend(this, {
        index: 0,
        checkboxes: {}
      });
    }

    $onInit() {
      $('html').scrollTop(0);
    }

    addThing() {
      this.index++;
    }

    getTotalPoints() {
      let totalPoints = 0;
      for (var category in this.checkboxes) {
        console.log(category, this.checkboxes[category]);
        if (this.checkboxes[category]) {
          totalPoints++;
        }
      }
      return totalPoints;
    }
  }

  angular.module('myblogApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
