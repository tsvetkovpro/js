<?php
$input = '{ "abc": 12, "foo": "bar", "bool0": false, "bool1": true, "arr": [ 1, 2, 3, null, 5 ], "float": 1.234500 }';
$val = json_decode($input);

print_r($val);
?>