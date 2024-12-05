const jpdbBaseURL = "http://api.login2explore.com:5577";
const jpdbIRL = "/api/irl";
const jpdbIML = "/api/iml";
const collegeDBName = "COLLEGE-DB";
const projectRelationName = "PROJECT-TABLE";
const connToken = "90934403|-31949227249741025|90957260"; 

$(document).ready(function() {
    $("#projectId").focus();
    $("#saveProjectBtn").on("click", saveProject);
    $("#changeProjectBtn").on("click", changeProject);
    $("#resetProjectBtn").on("click", resetProjectForm);
    $("#projectId").on("blur", checkProjectId);
});

function resetProjectForm() {
    $("#projectForm")[0].reset();
    $("#projectId").prop("disabled", false);
    $("#projectName, #assignedTo, #assignmentDate, #deadline").prop("disabled", true);
    $("#saveProjectBtn, #changeProjectBtn, #resetProjectBtn").prop("disabled", true);
    $("#projectId").focus();
}

function checkProjectId() {
    var projectId = $("#projectId").val();
    if (projectId === "") {
        alert("Project ID is required");
        $("#projectId").focus();
        return;
    }

    var jsonObj = {
        id: projectId
    };
    var reqString = createGET_BY_KEYRequest(connToken, collegeDBName, projectRelationName, JSON.stringify(jsonObj));
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(reqString, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});

    if (resultObj.status === 400) { // Project not found
        $("#projectName, #assignedTo, #assignmentDate, #deadline").prop("disabled", false);
        $("#saveProjectBtn, #resetProjectBtn").prop("disabled", false);
        $("#projectName").focus();
    } else if (resultObj.status === 200) { // Project found
        $("#projectId").prop("disabled", true);
        var data = JSON.parse(resultObj.data).record;
        $("#projectName").val(data.name);
        $("#assignedTo").val(data.assignedTo);
        $("#assignmentDate").val(data.assignmentDate);
        $("#deadline").val(data.deadline);
        $("#projectName, #assignedTo, #assignmentDate, #deadline").prop("disabled", false);
        $("#changeProjectBtn, #resetProjectBtn").prop("disabled", false);
        $("#projectName").focus();
    }
}

function validateAndGetProjectData() {
    var projectId = $("#projectId").val();
    var projectName = $("#projectName").val();
    var assignedTo = $("#assignedTo").val();
    var assignmentDate = $("#assignmentDate").val();
    var deadline = $("#deadline").val();

    if (projectId === "" || projectName === "" || assignedTo === "" || assignmentDate === "" || deadline === "") {
        alert("All fields are required");
        return "";
    }

    var jsonStrObj = {
        id: projectId,
        name: projectName,
        assignedTo: assignedTo,
        assignmentDate: assignmentDate,
        deadline: deadline
    };
    return JSON.stringify(jsonStrObj);
}

function saveProject() {
    var jsonStrObj = validateAndGetProjectData();
    if (jsonStrObj === "") return;

    var putRequest = createPUTRequest(connToken, jsonStrObj, collegeDBName, projectRelationName);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});

    if (resultObj.status === 200) {
        alert("Data saved successfully");
    } else {
        alert("Error: " + resultObj.status);
    }
    resetProjectForm();
}

function changeProject() {
    var jsonStrObj = validateAndGetProjectData();
    if (jsonStrObj === "") return;

    var updateRequest = createUPDATERecordRequest(connToken, jsonStrObj, collegeDBName, projectRelationName, $("#projectId").val());
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});

    if (resultObj.status === 200) {
        alert("Data updated successfully");
    } else {
        alert("Error: " + resultObj.status);
    }
    resetProjectForm();
}
