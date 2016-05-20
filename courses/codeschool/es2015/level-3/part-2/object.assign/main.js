let cssInConsole = '%c%s';
let style = ['padding: 0.5rem;',
    'font: 1.3rem/2 Georgia;',
    'color: green;'].join('');
let style2 = ['padding: 0.5rem;',
    'font: 1.3rem/2 Georgia;',
    'color: red;'].join('');



function countdownTimer(target, timeleft, options = {}) {
    let defaults = {
        container: ".timer-display",
        timeUnit: "seconds"
    };
    let settings = Object.assign({}, defaults, options);

    console.log(cssInConsole, style, settings.container);
    console.log(settings.timeUnit);
}

countdownTimer("string", 60, {container: ".new-post-options"});
