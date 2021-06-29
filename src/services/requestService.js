const Request = require('../models/schemas/solicitud');

const createRequest = async (req, res) => {
  const { applicant, role } = req.body;
  if (!applicant || !role) return res.status(400).json({ msg: 'Parámetros Faltantes' });
  const newRequest = new Request({
    applicant,
    role,
  });
  try {
    await newRequest.save();
    return res.status(201).json({ msg: 'Solicitud Creada', request: newRequest });
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
};

const getRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    return res.status(200).json(requests);
  } catch (err) {
    return res.status(400).json({ msg: 'No se han encontrado solicitudes' });
  }
};

const getRequestByRole = async (req, res) => {
  try {
    const { search: { role } } = req.body;
    const request = await Request.findOne({ role });
    return res.status(200).json(request);
  } catch (err) {
    return res.status(400).json({ msg: 'No se ha encontrado la solicitud' });
  }
};

const getRequestByStudentName = async (req, res) => {
  try {
    const { search: { name } } = req.body;
    const request = await Request.findOne({ 'applicant.name': name });
    return res.status(200).json(request);
  } catch (err) {
    return res.status(400).json({ msg: 'No se ha encontrado la solicitud' });
  }
};

const removeRequest = async (req, res) => {
  try {
    const { id } = req.body;
    await Request.remove({ _id: id });
    return res.status(200).json({ deleted: true });
  } catch (err) {
    return res.status(400).json({ msg: 'No se ha encontrado la solicitud' });
  }
};

const updateRequest = async (req, res) => {
  try {
    const { params: { id } } = req;
    await Request.updateOne({ _id: id }, req.body);
    const request = await Request.findOne({ _id: id });
    return res.status(200).json(request);
  } catch (err) {
    return res.status(400).json({ msg: 'No se ha encontrado la solicitud' });
  }
};

module.exports = {
  createRequest,
  getRequests,
  getRequestByRole,
  getRequestByStudentName,
  removeRequest,
  updateRequest,
};
