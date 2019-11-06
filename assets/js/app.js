// HTMLが読み込まれたら、波括弧のなかの処理を実行します。
// $(function(){
// この中の処理がされる。
// })
$(function() {
// アラート機能を追加
//   $('.text-light').on('click', function(){
// alert(1);

  $('#add-button').on('click',function(e){
    // alert('addがクリックされたよ');

    // formタグの無効化(二重投稿を防ぐため)
    e.preventDefault();

// 入力されたタスク名を所得
let taskName = $('#input-task').val();
// alert(taskName);

//Ajax

$.ajax({
  // キー（決まった文言）：値
  url: 'create.php',
  type: 'POST',
  dataType: 'json',
  data: {
    // 送信する値を書くブロック
    task: taskName
  }


}).done((data) => {
console.log(data);

$('tbody').prepend(
  `<tr>` +
    `<td>${data['name']}</td>` +
    `<td>${data['due_date']}</td>` +
    `<td>NOT YET</td>` +
    `<td>` +
        `<a class="text-success" href="edit.php?id=${data['id']}">EDIT</a>` +
    `</td>` +
    `<td>` +
    // id dataを追加した
        `<a data-id="${data['id']}" class="text-danger delete-button" href="delete.php?id=${data['id']}">DELETE</a>` +
    `</td>` +
  `</tr>`
);



}).fail((error) => {
console.log(error);
})
  });


// 削除のボタンがクリックされた時の処理
// $('.delete-button').on('click',function(e){
$(document).on('click','.delete-button',function(e){


  // 二重送信の無効化
  e.preventDefault();
  // alert('DELETE');
 
  // 削除対象のIDを取得
  // $(this)今イベントが実行されている本体
  // 今回の場合は、クリックされたaタグ本体
  let selectedId = $(this).data('id');
  // alert(selectedId);
  // ajax開始
  $.ajax({
    url: 'delete.php',
    type: 'GET',
    datatype: 'jason',
    data:{
      id: selectedId
    }

  }).done((data) =>{
    console.log(data);


  }).fail((error) =>{
    console.log(error);
  })



});






})
