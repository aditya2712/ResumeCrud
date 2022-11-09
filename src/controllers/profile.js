const Profile = require("../models/profile");

const create_profile = async (req, res) => {
  try {
    const { name, date_of_birth, country } = req.body;
    const resume_file_obj = req.file;

    const new_profile = Profile.build({
      name: name,
      date_of_birth: date_of_birth,
      country: country,
      resume: resume_file_obj.filename,
    });

    await new_profile.save();

    res.status(201).send("profile Created");
  } catch (error) {
    res.status(500).send(error);
  }
};

const get_profile_list = async (req, res) => {
  try {
    const profile_list = await Profile.findAll();
    console.log(profile_list);
    res.status(200).send(profile_list);
  } catch (error) {
    res.status(500).send(error);
  }
};

const delete_profile = async (req, res) => {
  try {
    const profile_id = req.params.id;
    const profile = await Profile.findByPk(profile_id);
    if (profile) {
      await profile.destroy();
      res.status(200).send("profile deleted");
    } else {
      res.status(404).send("profile not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  create_profile,
  get_profile_list,
  delete_profile,
};
