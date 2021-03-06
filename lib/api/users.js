// Generated by CoffeeScript 1.10.0
(function() {
  var BaseClass, Users,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseClass = require('./common/base_class');

  Users = (function(superClass) {
    extend(Users, superClass);

    function Users() {
      return Users.__super__.constructor.apply(this, arguments);
    }

    Users.prototype.endpoints = {
      getPresence: '/api/users.getPresence',
      info: '/api/users.info',
      list: '/api/users.list',
      setActive: '/api/users.setActive',
      setPresence: '/api/users.setPresence',
      invite: '/api/users.admin.invite'
    };

    Users.prototype.getPresence = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['user']);
      return this.request('GET', this.endpoints.getPresence, opts, callback);
    };

    Users.prototype.info = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['user']);
      return this.request('GET', this.endpoints.info, opts, callback);
    };

    Users.prototype.list = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['presence']);
      return this.request('GET', this.endpoints.list, opts, callback);
    };

    Users.prototype.setActive = function(callback) {
      return this.request('POST', this.endpoints.setActive, {}, callback);
    };

    Users.prototype.setPresence = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['presence']);
      this.validate.inclusion(opts.presence, ['away', 'auto']);
      return this.request('POST', this.endpoints.setPresence, opts, callback);
    };

    Users.prototype.invite = function(opts, callback) {
      if (opts == null) {
        opts = {};
      }
      this.validate.obj(opts, ['email']);
      this.validate.obj(opts, ['set_active']);
      this.validate.inclusion(opts.set_active, ['true', 'false']);
      return this.request('POST', this.endpoints.invite, opts, callback);
    };

    return Users;

  })(BaseClass);

  module.exports = Users;

}).call(this);
