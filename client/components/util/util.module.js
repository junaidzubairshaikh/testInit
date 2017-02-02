'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('fullStackApp.util', [])
  .factory('Util', UtilService)
  .name;
