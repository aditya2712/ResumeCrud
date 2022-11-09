const path = require("path");

const countries_json = require("../statics/countries.json");

const get_country_list = async (req, res) => {
  try {
    res.json(countries_json);
  } catch (error) {
    res.status(500).send(error);
  }
};

const get_uploaded_file = async (req, res) => {
  try {
    const file_name = req.params.file_name;
    const file_path = path.join(__dirname, "../uploads/" + file_name);
    // set content type to application/pdf
    res.contentType("application/pdf");
    res.sendFile(file_path);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  get_country_list,
  get_uploaded_file,
};
