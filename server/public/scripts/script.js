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
var previous = 1;
var answerArray = [];
var objectID;
var correctAnswer;
var youreCorrect;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var answerEntryField = '<div class="input-group"><input type="text" class="form-control js-query" placeholder="common name"><button class="btn btn-input-group btn-success js-search">Submit</button></div>';

//var birdName = data.recordings[i].en;
//var photoAndCopyrightHTML = '<img class="photo" src=' + data.recordings[i].photo + '></div><div class="copyright">' + data.recordings[i].copyright +'</div>';

function dataDisplay(data){
    birdData = data;
    dataToAppend = '';
    someSpace = 12345678765432;
    console.log(data.recordings.length);
    for (i=0; i<data.recordings.length; i++){
        var num = i+1;
        dataToAppend += '<div class="eachSet" id="' + i + '"><div class="row one"><div class="item"><div class="recording"> Recording'+ ' ' + num + ': ' + '<span class="name reveal">' + data.recordings[i].en + '</span>' + '  ' + '<a target ="_blank" href='+ data.recordings[i].file +'>Listen</a></div><div class="row two"><div class="answer"> Answer:' + answerEntryField + '</div></div></div></div></div>';
    }
    $('.appendHere').append(dataToAppend);
}

    $(document).ready(function(){

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
        $('.newbird').on("click", function() {

            // Deletes the previously displayed bird object.  Previous is set at the end of on-click with the clicked id number.
            var prevBird = document.getElementById(previous);
            if(prevBird.style.display = "block") {prevBird.style.display = "none"}

            // Using the length of the array provided, a bird object is randomly selected
            var ider = birdData.recordings.length - 1;
            var number = randomNumber(0, ider);
            console.log(number);
            objectID = number;

            // Function displays the bird based on the index determined by random number.
            function toggleVisibility (number) {
                var visBird = document.getElementById(number);

                if(visBird.style.display = "none") {visBird.style.display = "block"} else {visBird.style.display = "none"}

                console.log(visBird);
            }

            // Calls toggleVisibility which shows bird
            toggleVisibility(number);

            // Sets previous to be used when the next button is clicked again.
            previous = number;

            // Identify correct answer
            correctAnswer = birdData.recordings[objectID].en;
            correctAnswer = correctAnswer.toLowerCase();
            console.log(correctAnswer);

            });

        $('.appendHere').on("click", '.js-search', function() {
            var enteredAnswer = $('.js-query').val().toLowerCase();
            console.log(enteredAnswer);

            if (correctAnswer == enteredAnswer) {
                console.log(Hi);
                youreCorrect = '<div class="btn btn-group-sm btn-success">Correct !</div>';
                $('.header').append(youreCorrect);
            } else {
                console.log("Nope!")
            }
        });

            $('.js-query').keyup(function(key) {

                if (key.keyCode == 13) {
                    $('.js-search').click();
                }
            });




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