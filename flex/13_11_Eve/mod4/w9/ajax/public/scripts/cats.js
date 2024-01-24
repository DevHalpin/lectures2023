const createCatItem = (cat) => {
  const $catItem =  $(`
  <article class="cat-list-item">
  <h2>ID: ${cat.id}</h2>
  <h2>Breed: ${cat.breed}</h2>
  <h2>Gender: ${cat.gender}</h2>
  <h2>Age: ${cat.age}</h2>
  <h2>Color: ${cat.color}</h2>
  <h2>Name: ${cat.name}</h2>
  </article>`)
  
  return $catItem;
}

const renderCatItems = (catData) => {
  const $catContainer = $('#cat-list');
  $catContainer.empty();
  for (const catItem of catData) {
    const $catItem = createCatItem(catItem);
    $catContainer.append($catItem)
  }
}

const fetchCats = () => {
  $.get('/cat-items').
  done((catItems) => {
    renderCatItems(catItems)
  })
}


$(document).ready(()=> {
  fetchCats();

  $('#cat-form').on('submit', (event) => {
    event.preventDefault()

    const data = $('#cat-form').serialize();
    console.log(data)

    $.post('/cat-items', data). then(() => {
      fetchCats();
    })
  })
})      