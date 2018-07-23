// Generated by CoffeeScript 1.10.0
(function() {
  var BaseClass, Dnd,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseClass = require('./common/base_class');

  Dnd = (function(superClass) {
    extend(Dnd, superClass);

    function Dnd() {
      return Dnd.__super__.constructor.apply(this, arguments);
    }

    Dnd.prototype.endpoints = {
      endDnd: '/api/dnd.endDnd',
      endSnooze: '/api/dnd.endSnooze',
      info: '/api/dnd.info',
      setSnooze: '/api/dnd.setSnooze',
      teamInfo: '/api/dnd.teamInfo'
    };

    Dnd.prototype.endDnd = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      return this.request('POST', this.endpoints.endDnd, opts, callback);
    };

    Dnd.prototype.endSnooze = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      return this.request('POST', this.endpoints.endSnooze, opts, callback);
    };

    Dnd.prototype.info = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      return this.request('POST', this.endpoints.info, opts, callback);
    };

    Dnd.prototype.setSnooze = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['num_minutes']);
      return this.request('POST', this.endpoints.setSnooze, opts, callback);
    };

    Dnd.prototype.teamInfo = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      return this.request('POST', this.endpoints.teamInfo, opts, callback);
    };

    return Dnd;

  })(BaseClass);

  module.exports = Dnd;

}).call(this);