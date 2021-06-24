<?php
#第一种接收方式
// $content = file_get_contents('php://input');
// print_r(json_decode($content,true));
#第二种处理方式
print_r($_POST)