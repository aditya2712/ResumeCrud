const countries_json = require("../statics/countries.json");

get_country_list = async (req, res) => {
  try {
    res.json(countries_json);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  get_country_list,
};
