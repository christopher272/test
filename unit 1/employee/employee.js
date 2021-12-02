
var employee = []
function Employee (name, jobTitle, salary, status = "full time"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
        console.log(this.name)
        console.log(this.jobTitle)
        console.log(this.salary)
        console.log(this.status)
        employee.push(this)
    }
}
var isaac = new Employee ("isaac", "engineer", "$120,000")
isaac.status = "part time"
isaac.printEmployeeForm()

var katie = new Employee ("katie", "sanitation", "$45,000")
katie.status = "contract"
katie.printEmployeeForm()

var tatum = new Employee ("tatum", "manufacturing", "$55,000")
tatum.printEmployeeForm()

console.log(employee)