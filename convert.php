<?php

include 'minifier.php';

$keyword = $_POST["keyword"];

$minfy = new Minify();

echo $minfy->minifyHtml($keyword);

?>