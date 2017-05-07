<?php
// Ajax
require_once('DbController.php');
use myapp\DbController;

$obj = new DbController();
echo $obj->getInfo($_GET['q']);