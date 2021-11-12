'use strict';

/**
 * submittable-manager.js controller
 *
 * @description: A set of functions called "actions" of the `submittable-manager` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.
    console.log('ctx', ctx)
    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },
  getForms: async (ctx) => {
    // Add your own logic here.
    console.log('getForms')
    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  }
};
