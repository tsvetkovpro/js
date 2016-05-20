function msg(message, arg) {
    return console.log(message, arg);
}

function sp(arg) {
    return console.log(arg);
}

msg('group1: ', ((5 + 7) * 3));
sp('\n');
msg('group2: ', ((3 * 4) + 3 - 12 / 2));
sp('\n');
msg('group3: ', ((-5 * 6) - 7 * -2));
sp('\n');
msg('group3: ', (4 + (8 % (3 +1))));

