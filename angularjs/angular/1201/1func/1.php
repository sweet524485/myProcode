<?php
print_r($_POST);
echo '<pre>';
print_r(json_decode($_POST['data'],true));