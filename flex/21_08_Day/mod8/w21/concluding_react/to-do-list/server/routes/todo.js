const router = require('express').Router();
const uniqid = require('uniqid');

const data = [
  {id: uniqid(), task: 'Buy groceries', completed: false},
  {id: uniqid(), task: 'Do laundry', completed: false},
  {id: uniqid(), task: 'Wash car', completed: false},
]

router.get('/', (req, res) => {
  res.json(data);
})

router.post('/:id/delete', (req, res) => {
  const { id } = req.params;
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data.splice(data.findIndex(item => item.id === id), 1);
    res.json(data);
    return;
  }
  res.status(404).json({message: 'Item not found'});

});

router.post('/:id/complete', (req, res) => {
  const { id } = req.params;
  const item = data.find(item => item.id === id);
  if (!item) {
    res.status(400).json({message: 'Item not found'});
    return;
  }
  item.completed = !item.completed;
  res.json(data);
});

module.exports = router;