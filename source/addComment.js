$(document).ready(function(){
  $('#new_comment_button').click(function() {
    var body = $('textarea[name="comment"]').val()
    var author = $('input[name="author"]')
    $('.comment_list').append(body + "<span class=name>" + author + "</span")
  })
})
