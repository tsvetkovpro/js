// Using Default Parameter Values
// Default parameter values help move default values from the function body to the function signature.
function loadProfiles (userNames = []) {
    let nameLength = userNames.length;
    console.log(nameLength);
}
loadProfiles();





// The Options Object
// The options object is a widely used pattern that allows user-defined settings to be passed to a function in the form of properties on an object.
// bad way:
function setPageThread (name, options = {}) { // Unclear what options this function expects just by looking at its signature
    let popular = options.popular;
    let expires = options.expires;
    let activeClass = options.activeClass; // Boilerplate code
    console.log('%c%s', 'color: green; font: 1.2rem/1 Tahoma;', "Имя: ", name," \n", "Популярность:", popular, " \n", "Время жизни ",expires, " \n", "URL:",activeClass);
    // ....
}
setPageThread("New version out soon!", {
    popular: true,
    expires: 1000,
    activeClass: "is-page-thread"
});
setPageThread("New version out soon! as posible", {
    popular: false,
    expires: 5000,
    activeClass: "is-page-thread2"
});


console.log('\n');

// Using Named Parameters
// Using named parameters for optional settings makes it easier to understand how a function should be invoked.
// right way to use

function setPageThreadR(name, {popular, expires, activeClass}) {
    let style = ['padding: 0.5rem;',
        'font: 1.3rem/2 Georgia;',
        'color: red;'].join('');
    console.log('%c%s', style, "Name: ", name);
    console.log('%c%s', style, "Popular: ", popular);
    console.log('%c%s', style, "Expires: ", expires);
    console.log('%c%s', style, "Active: ", activeClass);
}

setPageThreadR("New version Soon!", {
    popular: true,
    expires: 11111,
    activeClass: "is-page-thread"
});

setPageThreadR("New version no Soon!", {
    popular: false,
    expires: 0,
    activeClass: "is-page-thread/"
});


console.log('\n');

// Setting a Default for Named Parameters
// Setting a default value for the entire options argument allows this parameter to be omitted during function calls.

let style1 = ['padding: 0.5rem;',
    'font: 1.3rem/2 Georgia;',
    'color: blue;'].join('');

function setPageThreadR2(name, {popular, expires, activeClass} = {}) {

    console.log('%c%s', style1, "Name: ", name);
    console.log('%c%s', style1, "Popular: ", popular);
    console.log('%c%s', style1, "Expires: ", expires);
    console.log('%c%s', style1, "Active: ", activeClass);
}

setPageThreadR2("New version Soon!");
setPageThreadR2("New version no Soon!");
setPageThreadR2();






