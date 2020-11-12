$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName: {
                required: true
            },
            grade:{
                required: true,
                min: 5,
                max: 8,
                digits: true
            }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName: {
                required: "This field must be filled"
            },
            grade:{
                required: "This field must be filled",
                min: 'Please enter a number 5-8',
                max: 'Please enter a number 5-8',
                digits: "Please enter a number"
            }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var fName = $("#firstName").val();
        var grade = $("#grade").val();
        $("#message").text('Thank you for registering ' + fName + ' for grade ' + grade);


    }



});