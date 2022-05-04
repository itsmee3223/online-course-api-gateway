const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const mentor = await api.get(`/api/mentors/${id}`);
    return res.json(mentor.data);
  } catch (error) {}
};
