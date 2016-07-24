'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User(username, email) {
    _classCallCheck(this, User);

    this.username = username;
    this.email = email;
  }

  _createClass(User, [{
    key: 'changeEmail',
    value: function changeEmail(newEmail) {
      this.email = newEmail;
    }
  }, {
    key: 'foo',
    get: function get() {
      return 'foo';
    }
  }], [{
    key: 'register',
    value: function register() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(User, [null].concat(args)))();
    }
  }]);

  return User;
}();

var user = User.register('JeffreyWay', 'support@123.ru');

console.dir(user);
console.log(user.foo);

function log(strategy) {
  strategy.handle();
}

var ConsoleLogger = function () {
  function ConsoleLogger() {
    _classCallCheck(this, ConsoleLogger);
  }

  _createClass(ConsoleLogger, [{
    key: 'handle',
    value: function handle() {
      console.log('Using the console strategy to log.');
    }
  }]);

  return ConsoleLogger;
}();

log(new ConsoleLogger());