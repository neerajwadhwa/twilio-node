'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var AvailableAddOnList = require(
    './marketplace/availableAddOn').AvailableAddOnList;
var InstalledAddOnList = require(
    './marketplace/installedAddOn').InstalledAddOnList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the Marketplace version of Preview
 *
 * @constructor Twilio.Preview.Marketplace
 *
 * @property {Twilio.Preview.Marketplace.InstalledAddOnList} installedAddOns -
 *          installedAddOns resource
 * @property {Twilio.Preview.Marketplace.AvailableAddOnList} availableAddOns -
 *          availableAddOns resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
function Marketplace(domain) {
  Version.prototype.constructor.call(this, domain, 'marketplace');

  // Resources
  this._installedAddOns = undefined;
  this._availableAddOns = undefined;
}

_.extend(Marketplace.prototype, Version.prototype);
Marketplace.prototype.constructor = Marketplace;

Object.defineProperty(Marketplace.prototype,
  'installedAddOns', {
  get: function() {
    this._installedAddOns = this._installedAddOns || new InstalledAddOnList(this);
    return this._installedAddOns;
  }
});

Object.defineProperty(Marketplace.prototype,
  'availableAddOns', {
  get: function() {
    this._availableAddOns = this._availableAddOns || new AvailableAddOnList(this);
    return this._availableAddOns;
  }
});

module.exports = Marketplace;
