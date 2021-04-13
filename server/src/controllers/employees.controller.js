const employeesCtrl={}

const Employee =require('../models/Employee');

employeesCtrl.getEmployees =async (req,res) => {
 const employees = await  Employee.find()
 res.json(employees);
}

employeesCtrl.createEmployees =async (req,res) => {
   
  const newEmployee =  new Employee(req.body)
    await newEmployee.save();
    res.send({message :'created employee'})
}
employeesCtrl.getEmployee =async (req,res) => {
    console.log(req.params);
  const employee = await Employee.findById(req.params.id)
    res.send(employee)
}

employeesCtrl.editEmployees =async(req,res) => {
   await Employee.findByIdAndUpdate(req.params.id,req.body)
    res.json({status:'employee updated'})
}

employeesCtrl.deleteEmployees = async (req,res) => {
   console.log(req.params.id);
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status:'employee Deleted'})
}

module.exports =employeesCtrl;