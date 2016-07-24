class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static register(...args) {
    return new User(...args)
  }

  get foo() {
    return 'foo';
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let user = User.register('JeffreyWay', 'support@123.ru');

console.dir(user);
console.log(user.foo);






function log(strategy) {
  strategy.handle();
}

class ConsoleLogger {
  handle() {
    console.log('Using the console strategy to log.');
  }
}

log(new ConsoleLogger);






























