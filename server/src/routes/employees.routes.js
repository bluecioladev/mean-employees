const {Router} =require('express');
const router =Router();

const employessctrl = require('../controllers/employees.controller');

//CRUD
router.get('/',employessctrl.getEmployees);

router.post('/',employessctrl.createEmployees);

router.get('/:id',employessctrl.getEmployee);

router.put('/:id',employessctrl.editEmployees);

router.delete('/:id',employessctrl.deleteEmployees);




module.exports =router;