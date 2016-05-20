function log (arg) {
    return console.log(arg);
}

function msg (arg) {
    return console.log(arg, '\n');
}

msg('addition:');
log(6+4);

msg('subtraction');
log(9-5);

msg('multiplication');
log(3*4);

msg('division');
log(12/4);

msg('moduls');
log(43%10);