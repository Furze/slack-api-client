// Generated by CoffeeScript 1.10.0
(function() {
  var BaseClass, request,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  request = require('superagent');

  BaseClass = (function() {
    function BaseClass(slack) {
      this.slack = slack;
    }

    BaseClass.prototype.throwError = function(error) {
      error = error.error;
      return new Error("" + error);
    };

    BaseClass.prototype.request = function(method, url, params, callback) {
      var xhr;
      if (method == null) {
        method = 'GET';
      }
      if (url == null) {
        url = '';
      }
      if (params == null) {
        params = {};
      }
      params.token = this.slack.apiKey;
      xhr = request[method.toLowerCase()]("" + this.slack.host + url);
      if (method === 'POST') {
        xhr.type('form');
        xhr.send(params);
      } else {
        xhr.query(params);
      }
      return xhr.end((function(_this) {
        return function(err, res) {
          if (err) {
            throw err;
          }
          if (res.ok) {
            if (!res.body.ok) {
              return callback(_this.throwError(res.body));
            } else {
              return callback(null, res.body);
            }
          } else {
            return callback(_this.throwError(res.body));
          }
        };
      })(this));
    };

    BaseClass.prototype.validate = {
      obj: function(options, validation) {
        if (options == null) {
          options = {};
        }
        if (validation == null) {
          validation = [];
        }
        validation.forEach(function(value) {
          if (!options[value]) {
            throw new Error("Missing " + value + " parameter.");
          }
        });
        return true;
      },
      str: function(param) {
        if (param == null) {
          param = '';
        }
        if (!param) {
          throw new Error("Missing parameter.");
        }
        return true;
      },
      inclusion: function(param, possibilities) {
        if (param == null) {
          param = '';
        }
        if (indexOf.call(possibilities, param) < 0) {
          throw new Error(param + " isn't a possibility (" + possibilities + ")");
        }
        return true;
      }
    };

    BaseClass.prototype.select = function(collection, param, type) {
      var item, property, selected;
      if (collection == null) {
        collection = [];
      }
      if (param == null) {
        param = {};
      }
      if (type == null) {
        type = 'one';
      }
      this.validate.str(type, ['one', 'all']);
      property = Object.keys(param)[0];
      selected = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = collection.length; i < len; i++) {
          item = collection[i];
          if (item[property] === param[property]) {
            results.push(item);
          }
        }
        return results;
      })();
      if (selected.length) {
        if (type === 'one') {
          return selected[0];
        }
        if (type === 'all') {
          return selected;
        }
      } else {
        return {};
      }
    };

    return BaseClass;

  })();

  module.exports = BaseClass;

}).call(this);