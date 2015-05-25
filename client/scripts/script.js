// Hello!

var domain = 'http://www.xeno-canto.org/api/2/recordings';
var query = '?query=';
var countryGeneric = 'cnt:';

var unitiedStates = 'united&%20states';                    //United States now working.
var france = 'france';

var countryTest = domain + query + countryGeneric;
var testUS = countryTest + unitiedStates;
var testFrance = countryTest + france;                     //France works, but object not returned to console.

var testGivenUrl = 'http://www.xeno-canto.org/api/2/recordings?query=cnt:brazil';  //Works, but object not returned to console.
var i;
var apiKey;

var localRoute = '/apiBirds';

var birdData;

//  ** http://www.html5rocks.com/en/tutorials/cors/ ** //
// Create the XHR object.
//function createCORSRequest(method, url) {
//    var xhr = new XMLHttpRequest();
//    if ("withCredentials" in xhr) {
//        // XHR for Chrome/Firefox/Opera/Safari.
//        xhr.open(method, url, true);
//    } else if (typeof XDomainRequest != "undefined") {
//        // XDomainRequest for IE.
//        xhr = new XDomainRequest();
//        xhr.open(method, url);
//    } else {
//        // CORS not supported.
//        xhr = null;
//    }
//    return xhr;
//}
//
//// Helper method to parse the title tag from the response.
//function getTitle(text) {
//    return text.match('<title>(.*)?</title>')[1];
//}
//
//// Make the actual CORS request.
////function makeCorsRequest() {
////    // All HTML5 Rocks properties support CORS.
////    var url = 'http://updates.html5rocks.com';
////
////    var xhr = createCORSRequest('GET', url);
////    if (!xhr) {
////        alert('CORS not supported');
////        return;
////    }
////
////    // Response handlers.
////    xhr.onload = function() {
////        var text = xhr.responseText;
////        var title = getTitle(text);
////        alert('Response from CORS request to ' + url + ': ' + title);
////    };
////
////    xhr.onerror = function() {
////        alert('Woops, there was an error making the request.');
////    };
////
////    xhr.send();
////}
//
//var xhr = createCORSRequest('GET', testGivenUrl);
//    if (!xhr) {
//          alert('CORS not supported');
//      }

//  ** ------------------------------------------------------------------------ **

// response.addHeader("Access-Control-Allow-Origin", "*"), - not sure where to put this???
// StackOverflow

// ** ------------------------------------------------------------------------ **


//https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
//var invocation = new XMLHttpRequest();
//var url = testGivenUrl;
//var handler = function(xhr) {
//    console.log(xhr);
//}
//
//
//function callOtherDomain() {
//    if(invocation) {
//        invocation.open('GET', url, true);
//        invocation.onreadystatechange = handler;
//        invocation.send();
//    }
//}
// ** ------------------------------------------------------------------------ **

function dataDisplay(data){
    var dataToAppend = '<div class="holder small">';
    console.log(data.recordings.length);
    for (i=0; i<data.recordings.length; i++){
        dataToAppend += '<div class="item"><div> Recording'+ i + ' ' + data.recordings[i].en + '</div></div>';
    }
    $('.appendHere').append(dataToAppend + '</div>');
}


    $(document).ready(function(){

        //xhr.send();
        //callOtherDomain();

// Poor mans version, to just copy past the json data into this file, and get object elements.
        $.get('25MayDataUS.json', function(data) {
            birdData = data;
            console.log(".get json data works");
            console.log((birdData.recordings.length));

            dataDisplay(data);
            var aRecording = data.recordings[0].en;
            alert(aRecording);
        });



// ajax call to the data served up by the server at /apiBirds.  Request/Response in index.js
            //$.ajax({
            //    type:'GET',
            //    url: localRoute,
            //    dataType: 'json',
            //    jsonCallback: 'callback',
            //    crossDomain: true,
            //    success: function(data) {
            //        console.log(data);
            //        dataDisplay(data);
            //        console.log("I work")
            //    },
            //    complete:
            //        console.log("Finished ajax call"),
            //    error: function(xhr) {
            //        console.log('Danger Will Robinson, danger!');
            //        console.log(xhr);
            //    }
            //});

        });