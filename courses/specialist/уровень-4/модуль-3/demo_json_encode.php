<?php
$val = array("abc" => 12,
             "foo" => "bar",
             "bool0" => false,
             "bool1" => true,
             "arr" => array(1, 2, 3, null, 5),
             "float" => 1.2345
            );
$output = json_encode($val);

echo $output."\n";
?>