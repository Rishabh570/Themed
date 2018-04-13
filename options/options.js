const natural = document.getElementById('natural')
const animals = document.getElementById('animals')
const plain = document.getElementById('plain')
const patterns = document.getElementById('patterns')
const submit = document.getElementById('submit')
const graffiti = document.getElementById('graffiti')
const private = document.getElementById('private')
const dan = document.getElementById('dan')
const weather = document.getElementById('weather')
const slider = document.getElementById('frequency-input')
const freq_value = document.getElementById('freq-value')
const prevent = document.getElementById('prevent')

const quote = document.getElementById('quote')
const management = document.getElementById('management')
const sports = document.getElementById('sports')
const love = document.getElementById('love')
const art = document.getElementById('art')
const students = document.getElementById('students')
const funny = document.getElementById('funny')
const life = document.getElementById('life')
const inspire = document.getElementById('inspire')

const accent_color = document.getElementById('setting-accent')
const setting_textcolor = document.getElementById('setting-textcolor')
const setting_toolbarcolor = document.getElementById('setting-toolbarcolor')
const setting_toolbartextcolor = document.getElementById('setting-toolbartextcolor')
const setting_tabtextcolor = document.getElementById('setting-tabtextcolor')



var category, flag, customThemeSignal;
var interval = 15; // variable to capture user's input for automatic theme transition
var key1='', key2='';  // Weather mode extra API keys listeners



// #################### SPECTRUM.JS COLORPICKER ################################################
$("#setting-accent").spectrum({
    color: "",
    preferredFormat: "rgb",
    allowEmpty: false,
    showInitial: true,
    showSelectionPalette: true,
    showInput: true,
    showButtons: false,
    clickoutFiresChange: true,

});

$("#setting-textcolor").spectrum({
    color: "",
    preferredFormat: "rgb",
    allowEmpty: false,
    showInitial: true,
    showSelectionPalette: true,
    showInput: true,
    showButtons: false,
    clickoutFiresChange: true,

});

$("#setting-toolbarcolor").spectrum({
    color: "",
    preferredFormat: "rgb",
    allowEmpty: false,
    showInitial: true,
    showSelectionPalette: true,
    showInput: true,
    showButtons: false,
    clickoutFiresChange: true,

});

$("#setting-toolbartextcolor").spectrum({
    color: "",
    preferredFormat: "rgb",
    allowEmpty: false,
    showInitial: true,
    showSelectionPalette: true,
    showInput: true,
    showButtons: false,
    clickoutFiresChange: true,

});

$("#setting-tabtextcolor").spectrum({
    color: "",
    preferredFormat: "rgb",
    allowEmpty: false,
    showInitial: true,
    showSelectionPalette: true,
    showInput: true,
    showButtons: false,
    clickoutFiresChange: true,

});

//######################################################################################################

slider.oninput = function() {
    if(!prevent.checked) {
        freq_value.innerHTML = this.value;  // this shows minutes in options page in real time
    }
    interval = parseInt(this.value);  // interval variable is set to the minutes, will be used in transition logic
}

prevent.addEventListener("click", function() {
    if(prevent.checked) {
        freq_value.innerHTML = 'infinite'
    }else {
        freq_value.innerHTML = interval;
    }
})

$('#quote').click(function() {
    if($(this).prop('checked')) {
        console.log('quote checked\n')
        $('.weather-mode').slideToggle();
        $('.quote-options').delay(400).slideToggle("slow");
        $('.container5').fadeOut();
    }else {
        $('.weather-mode').delay(400).slideToggle("slow");
        $('.container5').delay(400).fadeIn()
        $('.quote-options').slideToggle();
    }
})

$('#weather').click(function() {
    if($(this).prop('checked')) {
        $('.weather-options').delay(400).slideToggle();
        $('.quotes-mode').slideToggle();
        $('.container5').slideToggle();
    }else {
        $('.weather-options').slideToggle();
        $('.quotes-mode').delay(400).slideToggle();
        $('.container5').delay(400).slideToggle();
    }
})

// #################### Weather mode options show/hide ###########################
$('#customize-button').click(function() {
    $('.part1').slideToggle();
    $('.settings').delay(400).slideToggle();
})

// ################# Handle weather mode API Keys ###############################

$('#key1').change(function() {
    key1 = $(this).val();
    console.log(`key1 has value ${key1}\n`)
})
$('#key2').change(function() {
    key2 = $(this).val();
    console.log(`key2 has value ${key2}\n`)
})

// ##############################################################################


// Custom theme confirmation ###################################################################
$('#ok').click(function () {
    flag=1;
    console.log(`flag is: ${flag}\n`)
    console.log('sending background script OKAYED from options.js\n')
    var myPort = browser.runtime.connect();
    myPort.postMessage({signal: "on"});
    
    $('#clear').css('display', 'block');
})

$('#clear').click(function() {
    flag=0;
    console.log(`flag turned off, it is now ${flag}\n`)
    console.log(`sending background script OFF from options.js\n`)
    var myPort = browser.runtime.connect();
    myPort.postMessage({signal: "off"});

    $('#clear').fadeOut();
})

//###############################################################################################


$('#back').click(function () {
    $('.settings').slideToggle();
    $('.part1').delay(400).slideToggle();
})

// ACTUAL STORAGE OF USER PREFERENCES HAPPENS HERE
function storeSettings() {
    var is_private=false, is_dan=false, is_weather=false, automatically_change_after, quote_type;
    var s1, s2, s3, s4, s5, s6;

    $('.settings').slideUp();
    $('.part1').delay(400).slideDown();

    if (natural.checked) {
        category = natural.value;
    }else if (animals.checked) {
        category = animals.value;
    }else if (plain.checked) {
        category = plain.value;
    }else if(patterns.checked) {
        category = patterns.value;
    }else {
        category = graffiti.value;
    }

    if (private.checked) {
        is_private = true;
    }
    if (dan.checked) {
        is_dan = true;
    }
    if (weather.checked) {
        is_weather = true;
    }

    if(!prevent.checked) {
        automatically_change_after = interval
    }else {
        automatically_change_after = "infinite";  // flag of "infinite" means theme won't change automatically
    }

    if (quote.checked) {
        if (inspire.checked) {
            quote_type = "inspire";
        }else if (management.checked) {
            quote_type = "management";
        }else if (sports.checked) {
            quote_type = "sports";
        }else if (life.checked) {
            quote_type = "life";
        }else if (funny.checked) {
            quote_type = "funny";
        }else if (love.checked) {
            quote_type = "love";
        }else if (art.checked) {
            quote_type = "art";
        }else if (students.checked) {
            quote_type = "students";
        }
    }else {
        quote_type = "blank";   
    }

    if(flag===1) {
        s2 = accent_color.value;
        s3 = setting_tabtextcolor.value;
        s4 = setting_textcolor.value;
        s5 = setting_toolbarcolor.value;
        s6 = setting_toolbartextcolor.value;
        var setting_array = [s2,s3,s4,s5,s6];
        console.log(`setting array is: ${setting_array}`)
    }else {
        var setting_array = [""];
        console.log(`setting array is: ${setting_array}`)
    }

    // Stores extra API Keys in an array
    var keys_array = [key1, key2];

    // Stores user preference
    browser.storage.local.set(
        {
            "category": category,
            "private": is_private,
            "dan": is_dan,
            "weather": is_weather,
            "interval": automatically_change_after,
            "quote_type": quote_type,
            "setting": setting_array,
            "extra_keys": keys_array
        }
    );
}

// Displays error message
function onError(e) {
    console.error(e);
}


/*
Update the options UI with the settings values retrieved from storage,
or the default settings if the stored settings are empty.
*/
function updateUI(restoredSettings) {
    var category_status = restoredSettings.category;
    var private_status = restoredSettings.private;
    var dan_status = restoredSettings.dan;
    var weather_status = restoredSettings.weather;
    var check_interval = restoredSettings.interval;
    var quote_type = restoredSettings.quote_type;
    var setting = restoredSettings.setting;
    var keys_array = restoredSettings.extra_keys;

    var target = document.getElementById(category_status);
    var quote_type_target = document.getElementById(quote_type);
    
    console.log(`Private is set: ${private_status}`)
    console.log(`Day and Night is set: ${dan_status}`)
    console.log(`Weather is set: ${weather_status}`)
    console.log(`interval is ${check_interval}`)
    console.log(`quote_type is ${quote_type}`)
    console.log(`setting inside update UI is ${setting}`)

    // Updates the color picker settings
    $("#setting-accent").spectrum("set", `${setting[0]}`)
    $("#setting-tabtextcolor").spectrum("set", `${setting[1]}`)
    $("#setting-textcolor").spectrum("set", `${setting[2]}`)
    $("#setting-toolbarcolor").spectrum("set", `${setting[3]}`)
    $("#setting-toolbartextcolor").spectrum("set", `${setting[4]}`)

    $('#key1').val(keys_array[0]);
    $('#key2').val(keys_array[1]);

    target.checked = true;
    private.checked = private_status;
    dan.checked = dan_status;
    weather.checked = weather_status;
    freq_value.innerHTML = check_interval;
    quote_type_target.checked = true;

    if(check_interval != 'infinite') {
        slider.value = check_interval;
        freq_value.innerHTML = check_interval;
        prevent.checked = false;
    }else {
        freq_value.innerHTML = 'infinite'
        prevent.checked = true;
    }
    console.log('UI updated\n')
}


// Listens for click on submit button
submit.addEventListener("click", storeSettings);

// On opening the options page, fetch stored settings and update the UI with them.
const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(updateUI, onError);

// browser.runtime.onConnect.addListener(connected);