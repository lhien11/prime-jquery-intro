/*--GLOBAL VARIABLES--*/
var employee = {}; //variable for storing form inputs once serialized
var singleMonthly = 0; //variable for storing single employee's salary (divided by 12)
var totalMonthly = 0; //variable for storing combined salary of all employees (divided by 12)
//var employeeSal = {};

/*--JQUERY DOCUMENT OBJECT--*/
$(document).ready(function() {
    /*--EVENT LISTENER--*/
    $('#employeeInfo').on('submit', function(event) {
        /*--event.preventDefault() stops the page from jumping when event is triggered
         "event" must be passed into the function as a parameter--*/
        event.preventDefault();

        /*--serializeArray() turns the form inputs into an object literal --*/
        var fields = $('#employeeInfo').serializeArray();
        //console.log('fields', fields);
        /*-- "fields" is the id on the <form> element--*/
        fields.forEach(function(element, index) {
            employee[element.name] = element.value;

        });

        //console.log('employee object', employee);

        // employeeSal[employee.employeeFirstName] = employee.employeeSalary;
        // console.log(employeeSal);
        //empArray.push(employee);
        //console.log(empArray);

        // clear form data
        $('#employeeInfo').find('input[type=text]').val('');
        $('#employeeInfo').find('input[type=number]').val('');


        // appending to the DOM
        appendDom(employee);

        /*HARD MODE Step 2: create Event Listener -- event listener must be inside doc.ready function*/
         $('.employee').on('click', '.delete', removeEmployee);





    });

    function appendDom(empInfo) {
        var $emp = $('<div class="employee"></div>');

        $emp.append('<p>' + "Employee Name:  " + empInfo.employeeFirstName + ' ' + empInfo.employeeLastName + '</p>');
        $emp.append('<p>' + "Employee Id:  " + empInfo.employeeIdNumber + '</p>');
        $emp.append('<p>' + "Employee Job Title:  " + empInfo.employeeJobTitle + '</p>');

        $emp.append('<p>' + "Employee Salary:  $" + empInfo.employeeSalary + '</p>');
        /*HARD MODE Step 1: append Delete button*/
        $emp.append('<button class = "delete">' + "Delete" + '</button>');


        $('#employeeData').append($emp);
        /*-convert salary property of object from a string to a number   -*/
        empInfo.employeeSalary = parseInt(empInfo.employeeSalary);
        // employeeSal[empInfo.employeeFirstName] = empInfo.employeeSalary;
        // console.log(employeeSal);
        // console.log("Single Monthly", singleMonthly);
        //console.log("Total Monthly", totalMonthly);
        /*-assign the value of 1/12th of annual salary to a variable-*/
        singleMonthly = employee.employeeSalary / 12;
        //console.log("Single Monthly", singleMonthly);

        singleMonthly = parseFloat(singleMonthly);
        //console.log("Single Monthly", singleMonthly);

        /*transfer monthly salary (1/12th annual salary) to a new variable (since singleMonthly variable gets reset for every employee object) -*/
        totalMonthly += singleMonthly;
        totalMonthly = Math.round(totalMonthly);
        console.log("Single Monthly", singleMonthly);
        console.log("Total Monthly", totalMonthly);
        /*- empty <div> that holds previous total monthly salary for all employees  -*/
        $("#employeeMonthlySalary").empty();
        console.log("Single Monthly", singleMonthly);
        console.log("Total Monthly", totalMonthly);
        /*- inserts the new total monthly salary for all employees in the <div> --*/
        $("#employeeMonthlySalary").text("$" + totalMonthly);


    }

    /*HARD MODE Step 3: create Function*/
    function removeEmployee() {
       //console.log(this);
      // console.log($(this));
      // console.log($(this.parent));

       //Step 3a subtract employee salary from total
       //console.log(totalMonthly);

       //Step 3b remove employee from DOM
        $(this).parent().remove();

      }





});
