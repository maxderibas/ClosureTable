const Tree = require('../models').Tree;
const Comment = require('../models').Comment;
const { Op, QueryTypes, Sequelize } = require('sequelize');
const SH = require('sequelize-hierarchy');

module.exports = {
  create(req, res) {
    return Tree
      .create({
        title: req.body.title,
      })
      .then((todo) => res.status(201).send(todo))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Comment
      .findAll({
          attributes: ['id', 'content']
      })
      .then(comments => res.status(200).send(comments))
      .catch(error => res.status(400).send(error.message));
  },

    async getByPk(req, res) {
        try {
            const id = req.params.id;

            const ancestorPk = await Comment.findByPrimary(id);
            const ancestorOne = await Comment.findOne({
                id
            });


            return res.send({ancestorPk, ancestorOne});
        } catch (e) {
            return res.send(e.message);
        }
    },

    async getDescendantes(req, res) {
      try {
          const id = req.params.id;

          const ancestor = await Comment.findByPrimary(id, {
              attributes: {exclude: ['createdAt', 'updatedAt']},
              include: [{
                  model: Comment, as: 'children', attributes: ['id', 'content']
              }]
          });

          return res.send(ancestor);
      } catch (e) {
          return res.send(e.message);
      }
    },

    async getTree(req, res) {
        const MAX_DEPTH = 12;
        const structure = [];
        let prevLevelMap = {};

        try {
            const id = req.params.id;

            const refs = await Tree.findAll({
                where: {
                    ancestorId: id,
                    level: {
                        [Op.gt]: 0,
                        [Op.lte]: 12
                    }
                },
                attributes: ['ancestorId', 'descendantId', 'level', 'nearestAnc'],

                include: [{
                    model: Comment,
                    as: 'descendant',
                    attributes: ['id', 'content']
                }],
                order: [['level', 'ASC']]
            });

            refs.forEach(element => structure.push());


            // for (let i = 1; i <= MAX_DEPTH; i++) {
            //     structure.push()
            // }

            return res.send(refs);
        } catch (e) {
            return res.send(e.message);
        }
    },

    async getDescendantesTree(req, res) {

        try {

            let level = 0;
            const getLevel = () => level+1;

            const include = [{
                model: Comment,
                as: 'children',
                hierarchy: true,
                attributes: ['id', 'content'],
                order: [['id', 'DESC']],
                through: {
                    attributes: [],
                    where: {
                        level: getLevel()
                    }
                },
                // include
                // where: {id: id = Number(id) + 1}
            }]

            const id = req.params.id;
            const ancestor = await Comment.findAll({
                where: {id},
                attributes: ['id', 'content'],
                include
            });

            return res.send(ancestor);
        } catch (e) {
            return res.send(e.message);
        }
    },

    retrieve(req, res) {
    return Tree
      .findById(req.params.todoId, {
        include: [{
          model: Comment,
          as: 'todoItems',
        }],
      })
      .then((todo) => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return res.status(200).send(todo);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Tree
      .findById(req.params.todoId, {
        include: [{
          model: Comment,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .update({
            title: req.body.title || todo.title,
          })
          .then(() => res.status(200).send(todo))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Todo
      .findById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res.status(400).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
