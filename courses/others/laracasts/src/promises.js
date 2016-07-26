/*var timer = new Promise(function (resolve, reject) {
  console.log('Init promise');

  setTimeout(function () {
    console.log('Timeout done');

    resolve();
  }, 2000);

});


timer.then(function () {
  console.log('Proceed now ...');
});*/


var timer2 = function (length) {
  return new Promise(function (resolve, reject) {
    console.log('Init promise 2');

    setTimeout(function () {
      console.log('Timeout 2 done');

      resolve();
    }, length);
  });
};

timer2(3000).then(() => console.log('All done ... 22'));


