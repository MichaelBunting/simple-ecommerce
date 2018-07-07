/**
 * PrototypeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  show: (req, res) => {
    const view = req.path.replace(/^\/+/g, '');

    res.view(view);
  }
};

