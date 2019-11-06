<?php
require_once('Models/Todo.php');
$task = $_POST['task'];

$todo = new Todo();


// 新しいタスクを作成（作成したタスクにIDを取得）
$latestId = $todo->create($task);

// 最新のタスクを取得
$latestTask = $todo->get($latestId);

// 最新のタスクをjason形式にして通信元に返す

echo json_encode($latestTask);




// header('Location: index.php');