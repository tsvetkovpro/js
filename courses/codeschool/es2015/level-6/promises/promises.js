// Avoiding Code That Blocks

// Synchronous style functions wait for return values
let results = getPollResultsFromServer("Sass vs. LESS");
ui.renderSidebar(results);
// x Page freezes until a values returned from this function


// In order to avoid blocking the main thread of execution, we write non-blocking code like this:
// asynchronous style functions pass callbacks
getPollResultsFromServer("Sass vs. Less", function (results) {
  ui.renderSidebar(results);
});


// Passing Callbacks to Continue Execution
// In continuation-passing style (CPS) async programming, we tell a function how to continue
// execution by passing callbacks. It can grow to complicated nested code.
getPollResultsFromServer("Sass vs. Less", function (error, results) {
  if (error) {
    //.. handle error
  }
  //...
  ui.renderSidebar(results, function (error) {
    if (error) {
      //.. handle error
    }
    //...
    sendNotificationsToServer(pollName, results, function (error, response) {
      if (error) {
        //.. handle error
      }
      //...
      doSomethingElseAsync(response, function (error) {
        if (error) {
          //.. handle error
        }
        //...
      }); //...close this
    }); //... close this
  }); //...close it
}); //...aaand don't forget this one


// The Best of Both Worlds With Promises
// A Promise is a new abstraction that allows us to write async code in an easier way.

getPollResultsFromServer("Sass vs. LESS")
  .then(ui.renderSidebar)
  .then(sendNotificationToServer)
  .then(doSomethingElseAsync)
  .catch(function(error){
    console.log("Error: ", error);
  });






// create a new promise Object

function getPollResultsFromServer(pollName) {
  return new Promise(function (resolve, reject) { // Handlers are responsible for
                                                  // either resolving or rejecting the Promise
    // ... called when the non-blocking code is done executing
    resolve(someValue);

    // ... called when an error occurs
    reject(someValue);
  });
}




// Returning a New Promise Object
// A Promise represents a future value, such as the eventual result of an asynchronous operation.
let fetchingResults = getPollResultsFromServer("Sass vs. Less");
// Not the actual result, but a Promise object
  // No longer need to pass a callback function as argument



































