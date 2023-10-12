const value = "Hello World"

$(()=> {
const div = jQuery('div.content')
console.log(div)

const $li = $('<li>').text('Water');
const list = $('#main-list');
list.append($li);

list.append('<li>Gravy</li>');

const h1 =$('h1');
h1.on('click', (event) => {
  console.log(event);
  alert('h1 clicked');
})

h1.addClass('header');

h1.click();
})