const backform = require('../models/backform');

const Designation = require('../models').designation;
const Role = require('../models').role;
const Employee = require('../models').employee;
const Backform =require('../models').backform;

const getEmployees = async function (req, res) {
  let err;
  [err, response] = await to(Employee.findAll({
    include: [
      { model: Role },
      { model: Designation }
    ]
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getEmployees = getEmployees;

const createEmployee = async function (req, res) {
  let err;
  let body = req.body;
  [err, employee] = await to(Employee.create(body));
  if (err) return ReE(res, err, 422);
  return ReS(res, { employee });
}
module.exports.createEmployee = createEmployee;

//backform

const createBackform = async function (req, res) {
  let err;
  let body = req.body;
  [err, backformdetails] = await to(Backform.create(body));
  if (err) return ReE(res, err, 422);
  return ReS(res, { backformdetails });
}
module.exports.createBackform = createBackform;

const getBackform = async function (req, res) {
  let err;
  [err, backformdetails] = await to(Backform.findAll());
  if (err) return ReE(res, err, 422);
  return ReS(res, { backformdetails });
}
module.exports.getBackform = getBackform;



const getDesignation = async function (req, res) {
  let err;
  [err, designation] = await to(Designation.findAll());
  if (err) return ReE(res, err, 422);
  return ReS(res, { designation });
}
module.exports.getDesignation = getDesignation;

const getRole = async function (req, res) {
  let err;
  [err, role] = await to(Role.findAll());
  if (err) return ReE(res, err, 422);
  return ReS(res, { role });
}
module.exports.getRole = getRole;

const deleteEmployee = async function (req, res) {
  let err;
  let body = req.body;
  [err, deleteEmp] = await to(Employee.destroy({
    where: {
      id: body.id
    }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { deleteEmp });
}
module.exports.deleteEmployee = deleteEmployee;

const getEmployee = async function (req, res) {
  let err;
  [err, employeeDetails] = await to(Employee.findOne({
    where: {
      id: req.body.id
    }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { employeeDetails });
}
module.exports.getEmployee = getEmployee;

const getBack = async function (req, res) {
  let err;
  [err, backDetails] = await to(Backform.findOne({
    where: {
      id: req.body.id
    }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { backDetails });
}
module.exports.getBack = getBack;

const updateEmployee = async function (req, res) {
  let err;
  let body = req.body;
  [err, employeeDetails] = await to(Employee.update(body, {
    where: {
      id: body.id
    }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { employeeDetails });
}
module.exports.updateEmployee = updateEmployee;

const updateBackform = async function (req, res) {
  let err;
  let body = req.body;
  [err, backformdetails] = await to(Backform.update(body, {
    where: {
      id: body.id
    }
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { backformdetails });
}
module.exports.updateBackform = updateBackform;

const checkEmail = async function (req, res) {
  let body = req.body;
  let email, err;
  [err, email] = await to(Employee.findOne({
    where: { email: body.email }
  }));
  if (err) ReE(res, err, 422);
  if (body.id && email && email.id === body.id) {
    email = null;
  }
  return ReS(res, { emailExist: email ? true : false });
}
module.exports.checkEmail = checkEmail;