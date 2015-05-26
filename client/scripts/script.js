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
var dataToAppend;
var someSpace;

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

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
var answerEntryField = '<div class="input-group"><input type="text" class="form-control js-query" placeholder="common name"><div class="thisone"><div class="input-group-btn"><button class="btn btn-input-group btn-success js-search"><span class="submit">Submit</span></button></div></div></div>';

//var birdID = data.recordings[i].en;

function dataDisplay(data){
    dataToAppend = '';
    someSpace = 12345678765432;
    console.log(data.recordings.length);
    for (i=0; i<data.recordings.length; i++){
        var num = i+1;
        dataToAppend += '<div class="eachSet" id="' + i + '"><div class="row one"><div class="item"><div> Recording'+ ' ' + num + ': ' + '<span class="name reveal">' + data.recordings[i].en + '</span>' + '  ' + '<a target ="_blank" href='+ data.recordings[i].file +'>Listen</a></div><div class="row two"><img class="photo" src=' + data.recordings[i].photo + '></div><div class="copyright">' + data.recordings[i].copyright +'</div><div class="answer"> Answer:' + answerEntryField + '</div></div></div></div>';
    }
    $('.appendHere').append(dataToAppend);
}


    $(document).ready(function(){

        //xhr.send();
        //callOtherDomain();

// Poor mans version, to just copy past the json data into this file, and get object elements.
//        $.get('25MayDataUS.json', function(data) {
//            birdData = data;
//            console.log(".get json data works");
//            console.log((birdData.recordings.length));
//
//            dataDisplay(data);
//            //var aRecording = data.recordings[0].en;
//            //alert(aRecording);
//        });
//
//        $('.newbird').on("click", function(){
//            var ider = birdData.recordings.length -1;
//            var number = randomNumber(0, ider);
//            console.log(number);
//
//            $('.appendHere').first().show();
//
//            //This did NOT work to show which bird's id matches the random number.
//            //$('.appendHere').find("div[id=' + number + ']").children().show();
//
//            //Need to also get the bird's name that matches the id. "i"
//            //Then need to create 4 radio buttons
//            //One radio button will take the name of the correct bird, using 'i'
//            //The other three radio buttons will need to each use a random number to get the 'i',
//            //     then extract the corresponding name.
//
//            //When the radio button is clicked.  That attribute/value must be tested against the 'correct' value.
//            //  if they match, the a button unhides, that says "correct", a button also pops in that says "+10".
//            //  if they do not match, then a box unhides that says "wrong" and the user can select another radio button.
//
//            //Alternatively, the user can use the user text input field, and that can be tested
//            //  against the actual bird name...
//            //     ??s can it be can insensitive/ can it be off by 1-2, more letters
//
//
//        });


// ajax call to the data served up by the server at /apiBirds.  Request/Response in index.js
            $.ajax({
                type:'GET',
                url: localRoute,
                dataType: 'json',
                jsonCallback: 'callback',
                crossDomain: true,
                success: function(data) {
                    console.log(data);
                    dataDisplay(data);
                    console.log("I work")
                },
                complete:
                    console.log("Finished ajax call"),
                error: function(xhr) {
                    console.log('Danger Will Robinson, danger!');
                    console.log(xhr);
                }
            });

        });