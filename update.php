<?php

require_once('Models/Todo.php');

$id = $_POST['id'];
$task = $_POST['task'];

// var_dump($_POST['id']);
// var_dump($_POST['task']);

$todo = new Todo();

$todo->update($task, $id);

header('Location: index.php');