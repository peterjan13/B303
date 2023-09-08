const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController.js')

router.post('/', (request, response) => {
  TaskController.createTask(request.body).then(result => {
    response.send(result);
  });
})

router.get('/', (request, response) => {
  TaskController.getAllTasks().then(result => {
    response.send(result);
  });
})

router.get('/:id', (request, response) => {
  TaskController.getSpecificTask(request).then(result=> {
    response.send(result.message);
  })
})

router.put('/:id/:status', (request, response) => {
  TaskController.updateTask(request).then(result=> {
    response.send(result.message);
  })
})


module.exports = router;