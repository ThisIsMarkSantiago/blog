'use strict';

function APIService($http, appConfig) {

  return {
    get: (api, params) => {
      return $http({
        method: 'GET',
        url: appConfig.apiURL + api,
        params: params ? params : {}
      })
      .then(result => result.data);
    },
    post: (api, data, params) => {
      return $http({
        method: 'POST',
        url: appConfig.apiURL + api,
        data: data,
        params: params ? params : {}
      })
      .then(result => result.data);
    },
    put: (api, data, params) => {
      return $http({
        method: 'PUT',
        url: appConfig.apiURL + api,
        data: data,
        params: params ? params : {}
      })
      .then(result => result.data);
    },
    delete: (api, params) => {
      return $http({
        method: 'DELETE',
        url: appConfig.apiURL + api,
        params: params ? params : {}
      })
      .then(result => result.data);
    }
  };
}


angular.module('myblogApp')
  .factory('API', APIService);
