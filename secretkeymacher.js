function doClickGenerateNumber() {
    const show_label_generate_number = document.getElementById("show-label-generate-number");
    let generate_number = Math.random() * 1000000;
    generate_number = Math.floor(generate_number);
    if (generate_number.toString().length == 6) {
        show_label_generate_number.innerText = generate_number.toString();
    }
}

function showResult(value) {
    const input_pin_textbox = document.getElementById("input-pin-textbox");
    const show_label_generate_number = document.getElementById("show-label-generate-number");

    const result_message_div = document.getElementById("result-message-div");
    const result_message_label = document.getElementById("result-message-label");

    //Submit button code
    if (value == "result") {
        if (input_pin_textbox.value != "") {
            if (input_pin_textbox.value.toString() == show_label_generate_number.innerText) {
                result_message_label.innerHTML = '<span class="glyphicon glyphicon-ok" style="color:green"></span> ' + "Your Secret Key is matched!";
                result_message_label.style.color = "green";
            } else if (input_pin_textbox.value.length < 6) {
                result_message_label.innerHTML = '<span class="glyphicon glyphicon-remove" style="color:red"> ' + "Please enter six digits number!";
                result_message_label.style.color = "red"
            } else {
                result_message_label.innerHTML = '<span class="glyphicon glyphicon-remove"> ' + "Your Secret Key is not matched!";
                result_message_label.style.color = "red";
            }
        }
        else {
            result_message_label.innerHTML = '<span class="glyphicon glyphicon-remove" style="color:red"> ' + "Please enter six digits number!";
            result_message_label.style.color = "red"
        }
    }

    //Clear button code
    if (value == "clear") {
        input_pin_textbox.value = null;
    }

    //Delete button code
    if (value == "delete" && input_pin_textbox.value != null) {
        input_pin_textbox.value = input_pin_textbox.value.substring(0, input_pin_textbox.value.length - 1);
    }

    //Number button code
    let number_in_textbox_input = input_pin_textbox.value;
    if (value == "1" || value == "2" || value == "3" || value == "4" || value == "5" || value == "6" || value == "7" || value == "8" || value == "9" || value == "0") {
        if (number_in_textbox_input == null) {
            number_in_textbox_input = value;
        } else {
            console.log(number_in_textbox_input.length)
            if (number_in_textbox_input.length < "6")
                number_in_textbox_input = number_in_textbox_input + value;
        }
        input_pin_textbox.value = number_in_textbox_input;
    }

}


//On Keypress event
function myOnKeyPressEvent(e) {
    let theEventPress = e || window.e;

    const input_pin_textbox = document.getElementById("input-pin-textbox");
    const result_message_div = document.getElementById("result-message-div");
    const result_message_checkbox = document.getElementById("result-message-checkbox");
    const result_message_label = document.getElementById("result-message-label");
    console.log("Key:" + e.charCode);

    // if (e.charCode >= 48 && e.charCode <= 57) {
    //   result_message_div.style.visibility = "hidden";
    // } else {
    //   result_message_div.style.visibility = "visible";
    //   result_message_checkbox.checked = false;
    //   result_message_label.innerHTML = "Please enter only number!"
    //   input_pin_textbox.value = null;
    //   input_pin_textbox.innerText = null;
    // }
    // Handle paste
    if (theEventPress.type === 'paste') {
        key = e.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        let key = theEventPress.keyCode || theEventPress.which;
        key = String.fromCharCode(key);
    }
    let regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEventPress.returnValue = false;
        if (theEventPress.preventDefault) theEventPress.preventDefault();
    }
}