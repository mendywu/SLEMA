var apoint = [];
var doctor = [];
var phonenum = [];
var clinic = [];
var typeee = [];
var namee = [];

function addAppoint() {
    var appInputVal = $("#textinput4").val();
    var appinputdocval = $('#textinput1').val();
    var appinputforval = $('#textinput100').val();
    var appinputclinVal = $('#textarea1').val();
    var appinputnumval = $('#textinput2').val();
    var appinputnameval = $('#textinput12').val();
    namee.push(appinputnameval);
    phonenum.push(appinputnumval);
    clinic.push(appinputclinVal);
    typeee.push(appinputforval);
    doctor.push(appinputdocval);
    apoint.push(appInputVal);
    var appListElem = $("#applist");
    appListElem.empty();
    for (var i = 0; i < apoint.length; i++) {
        appListElem.append('<li><a href="#newpage' + i + '">' + namee[i] + '</a></li>');
        $('body').append('<div data-role = "page" id = "newpage' + i + '"><div data-theme="a" data-role="header"><h3>Appointments</h3></div><div data-role="content"><div data-role="fieldcontain"><label for="input12">Title:</label><input name="" id="input12"value="' + namee[i] + '" type="text"data-mini="true"></div><div data-role="fieldcontain"><label for="input1">Doctor:</label><input name="" id="input1" value="' + doctor[i] + '" type="text"data-mini="true"></div><div data-role="fieldcontain"><label for="input2">Phone</label><input name="" id="input2" value="' + phonenum[i] + '" type="tel"data-mini="true"></div><div data-role="fieldcontain"><label for="area1">Clinic Address:</label><input name="" id="area1" value="' + clinic[i] + '" data-mini="true"></textarea></div><div data-role="fieldcontain"><label for="input4">Date and Time: </label><input name="" id="input4"value="' + apoint[i] + '" type="text" data-mini="true"> </div><div data-role = "footer" data-position = "fixed"> <div data-role ="navbar"><ul><li><a href = "#page3" id="delbutton" data-role="button" data-rel="back" data-transition="flip" onclick = "del(' + i + ')">Delete</a></li><li><a href = "#page3" id="donebutton" data-role="button" data-rel="back" data-transition="flip">Done</a></li>');
    }
    clearApp();
    appListElem.listview('refresh');
}

function del(index) {
    apoint.splice(index, 1);
    doctor.splice(index, 1);
    namee.splice(index, 1);
    clinic.splice(index, 1);
    typeee.splice(index, 1);
    phonenum.splice(index, 1);
    var appListElem = $("#applist");
    appListElem.empty();
    for (var i = 0; i < apoint.length; i++) {
        appListElem.append('<li><a href="#newpage' + i + '">' + namee[i] + '</a></li>');
        $('body').append('<div data-role = "page" id = "newpage' + i + '"><div data-theme="a" data-role="header"><h3>Appointments</h3></div><div data-role="content"><div data-role="fieldcontain"><label for="input12">Title:</label><input name="" id="input12"value="' + namee[i] + '" type="text"data-mini="true"></div><div data-role="fieldcontain"><label for="input1">Doctor:</label><input name="" id="input1" value="' + doctor[i] + '" type="text"data-mini="true"></div><div data-role="fieldcontain"><label for="input2">Phone</label><input name="" id="input2" value="' + phonenum[i] + '" type="tel"data-mini="true"></div><div data-role="fieldcontain"><label for="area1">Clinic Address:</label><input name="" id="area1" value="' + clinic[i] + '" data-mini="true"></textarea></div><div data-role="fieldcontain"><label for="input4">Date and Time: </label><input name="" id="input4"value="' + apoint[i] + '" type="text" data-mini="true"> </div><div data-role = "footer" data-position = "fixed"> <div data-role ="navbar"><ul><li><a href = "#page3" id="delbutton" data-role="button" data-rel="back" data-transition="flip" onclick = "del(' + i + ')">Delete</a></li><li><a href = "#page3" id="donebutton" data-role="button" data-rel="back" data-transition="flip">Done</a></li>');
    }
    clearApp();
    appListElem.listview('refresh');
}

function clearApp(){
  $('#textinput12').val("");
  $("#textinput1").val("");
  $("#textinput100").val("");
  $("#textarea1").val("");
  $("#textinput2").val("");
  $('#textinput4').val("");
}

var med = [];
var dose = [];
var details = [];

function addpres() {
    var apinputeleval = $('#textinput43').val();
    var apinputdosval = $('#textinput6').val();
    var detailval = $('#textarea2').val();
    details.push(detailval);
    dose.push(apinputdosval);
    med.push(apinputeleval);
    var MedList = $('#medlister');
    MedList.empty();
    for (var i = 0; i < med.length; i++) {
        MedList.append('<li><a href="#medpage' + i + '">' + med[i] + '</a></li>');
        $('body').append('<div data-role = "page" id = "medpage' + i + '"><div data-theme="a" data-role="header"><h3>Medication</h3></div><div data-role="content"><div data-role="fieldcontain"><label for="textinput43">Name:</label><input name="" id="textinput43"value="' + med[i] + '" type="text" data-mini="true"></div><div data-role="fieldcontain"><label for="textinput6">Dose:</label><input name="" id="textinput6" value="' + dose[i] + '" type="text"></div><div data-role="fieldcontain"><label for="textarea2">Details</label><input name="" id="textarea2" value="' + details[i] + '" type= "text"></div><div data-role = "footer" data-position = "fixed"><div data-role = "navbar"><ul><li><a data-role="button" href="#pag5" onclick = "dele(' + i + ')">Delete</a></li><li><a data-role="button" href="#pag5">Done</a></li></ul></div></div>');
    }
    clearDrugs();
    MedList.listview('refresh');
}

function dele(index) {
    med.splice(index, 1);
    dose.splice(index, 1);
    details.splice(index, 1);
    var MedList = $("#medlister");
    MedList.empty();
    for (var i = 0; i < med.length; i++) {
        MedList.append('<li><a href="#medpage' + i + '">' + med[i] + '</a></li>');
        $('body').append('<div data-role = "page" id = "medpage' + i + '"><div data-theme="a" data-role="header"><h3>Medication</h3></div><div data-role="content"><div data-role="fieldcontain"><label for="textinput43">Name:</label><input name="" id="textinput43"value="' + med[i] + '" type="text" data-mini="true"></div><div data-role="fieldcontain"><label for="textinput6">Dose:</label><input name="" id="textinput6" value="' + dose[i] + '" type="text"></div><div data-role="fieldcontain"><label for="textarea2">Details</label><input name="" id="textarea2" value="' + details[i] + '" type= "text"></div><div data-role = "footer" data-position = "fixed"><div data-role = "navbar"><ul><li><a data-role="button" href="#pag5" onclick = "dele(' + i + ')">Delete</a></li><li><a data-role="button" href="#pag5">Done</a></li></ul></div></div>');
    }
    clearDrugs();
    MedList.listview('refresh');
}

function clearDrugs(){
  $("#textinput43").val("");
  $("#textinput6").val("");
  $("#textarea2").val("");
}
