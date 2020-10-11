const commentsController = require('../controllers').comments;
const treesController = require('../controllers').trees;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/comments', commentsController.list);
  app.get('/api/comments/:id/getByPk', commentsController.getByPk);
  app.get('/api/comments/:id/getTree', commentsController.getTree);
  app.get('/api/comments/:id/getNestedStructure', commentsController.getNestedStructure);

  app.get('/api/comments/:id/getDescendantes', commentsController.getDescendantes);
  app.get('/api/comments/:id/getDescendantesTree', commentsController.getDescendantesTree);



  // app.post('/api/comments', commentsController.create);
  // app.get('/api/comments', commentsController.list);
  // app.get('/api/comments/:id', commentsController.retrieve);
  // app.put('/api/comments/:id', commentsController.update);
  // app.delete('/api/comments/:id', commentsController.destroy);
  //
  // app.post('/api/trees/:todoId/items', treesController.create);
  // app.put('/api/trees/:todoId/items/:todoItemId', treesController.update);
  // app.delete('/api/trees/:todoId/items/:todoItemId', treesController.destroy);
};
