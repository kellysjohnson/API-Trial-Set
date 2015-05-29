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
var number;
var objectID;
var correctAnswer;
var youreCorrect;
var youreWrong;

var element;
var searchElement;
var activeLink;
var modal;

// Total number of questions = total.  The number of points you have earned = sum;
var numQs = 10;
var sum = 0;
var total = 10*numQs;
var qnumber = 1;

var displayQuestions;



function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//var birdName = data.recordings[i].en;
//var photoAndCopyrightHTML = '<img class="photo" src=' + data.recordings[i].photo + '></div><div class="copyright">' + data.recordings[i].copyright +'</div>';

function dataDisplay(data){
    birdData = data;
    dataToAppend = '';
    someSpace = 12345678765432;
    console.log(data.recordings.length);
    for (i=0; i<data.recordings.length; i++){
        var num = i+1;
        var submitnum = i +1000;
        var listennum = i +2000;

        var audio = data.recordings[i].file;

        var ahrefListen = '<a ng-click="audio = audio" class="popup2" href='+ audio +'>Listen</a>';
        var angularListen = '<a ng-click="open()" class="click4modal" id="' + listennum +  '" href='+ audio +'>Listen</a>';

        //modal = '<div id="modal-background"></div><div id="modal-content"><div class="audio">'+ audio +'</div><button id="modal-close">Close Modal Window</button> </div>';

        var answerEntryField = '<div class="input-group"><input name="user-provided" type="text" id="' + submitnum + '" class="form-control js-query" placeholder="common name"><button class="btn btn-input-group btn-success js-search">Submit</button></div>';

        dataToAppend += '<div class="eachSet" id="' + i + '"><div class="row one"><div class="item"><div class="recording"> Recording'+ ' ' + num + ': ' + '<span class="name reveal">' + data.recordings[i].en + '</span>' + ahrefListen + '</div><div class="row two"><div class="answer"> Answer:' + answerEntryField + '</div></div></div></div></div>';
    }
    $('.appendHere').append(dataToAppend);
}


function checkAnswer() {
    searchElement = objectID + 1000;
    console.log(searchElement);

    //convert answer to lower case for test
    element = $('#' + searchElement).val();
    element = element.toLowerCase();
    console.log(element);

    // Identify correct answer
    correctAnswer = birdData.recordings[objectID].en;
    correctAnswer = correctAnswer.toLowerCase();
    console.log(correctAnswer);

    //test for correct answer
    if (correctAnswer == element) {
        youreCorrect = '<div class="btn btn-group-sm btn-success correct">Correct !</div>';
        $('.addAnswers').append(youreCorrect);
        console.log("Hi");

    // ASK SCOTT: Better way to update just the number of points earned??
        $('.points').remove();
        sum = sum +10;
        qnumber += 1;
        if (sum >= 100){sum = 100}
        var pointsDisplay = '<div class="points btn btn-group-sm"> Points: ' + sum + '/' +total+ '</div>';
        $('.buttonsHolder').prepend(pointsDisplay);

    } else {
        console.log("Nope!");
        youreWrong = '<div class="btn btn-group-sm btn-danger wrong">Wrong X</div>';
        $('.addAnswers').append(youreWrong);

    }
}

// Function displays the bird based on the index determined by random number.
function toggleVisibility(number) {
    var visBird = document.getElementById(number);

    if (visBird.style.display = "none") {
        visBird.style.display = "block"
    } else {
        visBird.style.display = "none"
    }

    console.log(visBird);
}



    $(document).ready(function() {

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
        $('.letsplay').on("click", function(){
            // Using the length of the array provided, a bird object is randomly selected
            var ider = birdData.recordings.length - 1;
            number = randomNumber(0, ider);
            console.log(number);
            objectID = number;
            number = previous;

            // Function displays the bird based on the index determined by random number.
            function toggleVisibilityPlus(number) {
                var visBird = document.getElementById(number);

                if (visBird.style.display = "none") {
                    visBird.style.display = "block"
                } else {
                    visBird.style.display = "none"
                }
                console.log(visBird);
            }

            // Calls toggleVisibility which shows bird
            toggleVisibilityPlus(number);

            // Hide, let's play
            $('.letsplay').hide();
            $('.newbird').show();

            // Append Points container
            var pointsDisplay = '<div class="points btn btn-group-sm"> Points: ' + sum + '/' +total+ '</div>';
            $('.buttonsHolder').prepend(pointsDisplay);
        });

        $('.newbird').on("click", function () {
            qnumber+=1;

            // Deletes the previously displayed bird object.  Previous is set at the end of on-click with the clicked id number.
            var prevBird = document.getElementById(previous);
            if (prevBird.style.display = "block") {
                prevBird.style.display = "none"
            }

            // Hide correct button
            $('.correct').remove();
            $('.wrong').remove();
            $('.questions').remove();

            // Display which question, out of how many that you are on
            displayQuestions = '<p class="questions"> Question: ' + qnumber + '/' + numQs + '</p>';
            $('.count').append(displayQuestions);

            // Using the length of the array provided, a bird object is randomly selected
            var ider = birdData.recordings.length - 1;
            number = randomNumber(0, ider);
            console.log(number);
            objectID = number;


            // Calls toggleVisibility which shows bird
            toggleVisibility(number);

            // Sets previous to be used when the next button is clicked again.
            previous = number;

            // Identify the link for playing the bird song
            activeLink = birdData.recordings[number].file;

            if (qnumber==10) {
                var result = prompt("Would you like to start a new game?  Type 'yes' or 'no'");
                if (result == "yes") {
                    location.reload();
                } else {
                    $('.container').hide();
                    alert("Thanks for playing!");
                }
            }
        });


        //// Audio2 is to replace the listen button with an audio track, mayhaps
        //var audio2 = '<audio src="birdData.recordings[number].file" controls></audio>';


        $('.appendHere').on("click", '.js-search', function () {

            //Hide previous answers
            $('.correct').remove();
            $('.wrong').remove();

            checkAnswer();
        });

        // TO DO: Need to resolve HOW to get KEYPRESS to work
        //var keycode;
        //
        //$('.appendHere').keyup('#submitnum', function (event) {
        //    keycode = (event.keyCode ? event.keyCode : event.which);
        //    if (keyCode == 13) {
        //        console.log("hi")
        //        checkAnswer();
        //    }
        //});
        // ************************************************* KEYPRESS


// Try to create a pop up window so that the audio file will display in pop up window.
//
//        //var matchClass=['popup1','popup2','popup3'];
//        ////Set your 3 basic sizes and other options for the class names above - create more if needed
//        //var popup1 = 'width=400,height=300,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=20,top=20';
//        var popup2 = 'width=400,height=400,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=20,top=20';
//        //var popup3 = 'width=1000,height=750,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=20,top=20';
//
//        //The pop-up function
//        function tfpop(){
//            var x = 0;
//            var popClass;
//            ////Cycle through the class names
//            //while(x < matchClass.length){
//            //    popClass = "'."+matchClass[x]+"'";
//            //    //Attach the clicks to the popup classes
//            $(eval(popup2)).click(function() {
//                //Get the destination URL and the class popup specs
//                console.log(this);
//
//                var popurl = $(this).attr('href');
//
//                var popupSpecs = $(this).attr('class');
//                //Create a "unique" name for the window using a random number
//                var popupName = Math.floor(Math.random()*10000001);
//                //Opens the pop-up window according to the specified specs
//                newwindow=window.open(popurl,popupName,eval(popupSpecs));
//                return false;
//            });
//
//        }
//
//        $('.appendHere').on("click", '#listennum', function () {
//            console.log('I clicked on listen');
//            //$(function(){
//            //    console.log("I tried to load a modal");
//            //    $("#modal-launcher, #modal-close").click(function () {
//            //        $("#modal-content,#modal-background").toggleClass("active");
//            //    });
//            $(function() {
//                tfpop();
//            });
//
//        });




            ////comment out appController using Angular because that does NOT seem to be working.
        //var myApp = angular.module('bird.song.audio', ['ngRoute', 'ui.bootstrap']);
        //var myAppController = myApp.controller('ModalBSCtrl', function ($scope, $modal, $log) {
        //
        //
        //    $scope.items = [activeLink];
        //
        //    $scope.animationsEnabled = true;
        //
        //    $scope.open = function (size) {
        //
        //        var modalInstance = $modal.open({
        //            animation: $scope.animationsEnabled,
        //            controller: 'ModalInstanceCtrl',
        //            size: size,
        //            resolve: {
        //                items: function () {
        //                    return $scope.items;
        //                }
        //            }
        //        });
        //
        //        $scope.toggleAnimation = function () {
        //            $scope.animationsEnabled = !$scope.animationsEnabled;
        //        };
        //
        //    };
        //
        //    angular.module('bird.song.audio').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
        //
        //        $scope.items = items;
        //        $scope.selected = {
        //            item: $scope.items[0]
        //        };
        //
        //        $scope.ok = function () {
        //            $modalInstance.close($scope.selected.item);
        //        };
        //
        //        $scope.cancel = function () {
        //            $modalInstance.dismiss('cancel');
        //        };
        //    });
        // });


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
                type: 'GET',
                url: localRoute,
                dataType: 'json',
                jsonCallback: 'callback',
                crossDomain: true,
                success: function (data) {
                    console.log(data);
                    dataDisplay(data);
                    console.log("I work")
                },
                complete: console.log("Finished ajax call"),
                error: function (xhr) {
                    console.log('Danger Will Robinson, danger!');
                    console.log(xhr);
                }
            });

        });

