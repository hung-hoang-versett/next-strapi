const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find() {
    return 'strapi';
  },
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.category.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.category });
  },
};
