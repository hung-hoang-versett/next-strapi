const axios = require('axios');

module.exports =  () => {
  const baseUrl = CUSTOM_VARIABLES.SUBMITTABLE_API_URL
  const APIKey = CUSTOM_VARIABLES.SUBMITTABLE_API_KEY
  const config = {
    baseURL: baseUrl,
    auth: {
      username: ":",
      password: APIKey,
    },
  };
  const client = axios.create(config);
  return client
};
 