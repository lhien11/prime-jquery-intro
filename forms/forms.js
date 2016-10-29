var employee = {}; // variable to hold serialized inputs
var singleMonthly = 0;
var totalMonthly = 0;

$(document).ready(function() {
    var array = [];
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      console.log(values);

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');
      $('#employeeinfo').find('input[type=number]').val('');

      // append to DOM
      appendDom(values);

      /* HARD MODE */
      $('.employee').on('click', '.delete', removeEmployee);


    });

    function appendDom(empInfo) {


      $('#employeeData').append('<div class="employee"></div>');
      var $el = $('#employeeData').children().last();

      $el.append('<p>' + "Employee Name: " + empInfo.employeefirstname + ' ' + empInfo.employeelastname + '</p>');
      $el.append('<p>' + "Employee Id: " + empInfo.employeeIdNumber + '</p>');
      $el.append('<p>' + "Employee Job Title: " + empInfo.employeeJobTitle + '</p>');
      $el.append('<p>' + "Employee Salary: " + empInfo.employeeSalary + '</p>');

      $el.append('<button class = "delete">' + "Delete" + '</button>');

      $('#employeeData').append($el);

      empInfo.employeeSalary = parseInt(empInfo.employeeSalary);

      console.log("empInfo.employeeSalary " + empInfo.employeeSalary);

      console.log(typeof(empInfo.employeeSalary))
      console.log("employee.employeeSalary " + (employee.employeeSalary / 2));
      singleMonthly = employee.employeeSalary / 12;
      singleMonthly = parseFloat(singleMonthly);

      console.log("Single Monthly", singleMonthly);
      console.log("Total Monthly", totalMonthly);

      totalMonthly += singleMonthly;
      totalMonthly = Math.round(totalMonthly);

      $("#employeeMonthlySalary").empty();

      $("#employeeMonthlySalary").text("$" + totalMonthly);



    }

    function removeEmployee(){
      $(this).parent().remove();
    }


});
