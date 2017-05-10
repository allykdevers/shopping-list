$(document).ready(function() {
  $("#js-shopping-list-form").submit(function(e){
    e.preventDefault()
    var toAdd = $('input').val();
    console.log(toAdd)
    $(".shopping-list").append(' <li>' +
        '<span class="shopping-item">'+ toAdd +'</span>'+
        '<div class="shopping-item-controls">'+
          '<button class="shopping-item-toggle">'+
           ' <span class="button-label">check</span>'+
          '</button>'+
          '<button class="shopping-item-delete">'+
           '<span class="button-label">delete</span>'+
          '</button>'+
        '</div>' +
      '</li>')

    })
      })
  
$('.shopping-item-delete').click(function() {
  console.log(this)
    $(this).closest('li').remove()
});

$('.shopping-item-toggle').click(function() {
  console.log(this)
    $(this).closest('li').toggleClass('shopping-item__checked')
});

    

