// Hello!

//       ************* These Can Be Deleted ***************
//var domain = 'http://www.xeno-canto.org/api/2/recordings';
//var query = '?query=';
//var countryGeneric = 'cnt:';
//
//var unitiedStates = 'united&%20states';                    //United States now working.
//var france = 'france';
//
//var countryTest = domain + query + countryGeneric;
//var testUS = countryTest + unitiedStates;
//var testFrance = countryTest + france;                     //France works, but object not returned to console.
//
//var testGivenUrl = 'http://www.xeno-canto.org/api/2/recordings?query=cnt:brazil';  //Works, but object not returned to console.
//var i;
//var apiKey;
//      ************* All are included in the API call, index.js **************

var localRoute = '/apiBirds';

var birdData;
var dataToAppend;
var someSpace;
var previous = 1;
var newbirdnumber;

var answerArray = [];
var choiceArray = [];

var answerEntryField;

var number;
var objectID;
var correctAnswer;
var youreCorrect;
var youreWrong;
var choice;

var element;
var searchElement;
var activeLink;
var modal;

// Total number of questions = total.  The number of points you have earned = sum;
var numQs = 10;
var sum = 0;
var total = 10*numQs;
var qnumber = 1;
var totalforGame;
var country = 'brazil';

var displayQuestions;
var radioButtons;
var previousradioAnswer;
var radioAns;
var answerFormDiv;
var fileLocation;

var n;                  //radio button, random array index.
var o;                  //radio button, random array index.
var p;                  //radio button, random array index.


// Generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

// Shuffle array for answer choices
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//var birdName = data.recordings[i].en;
//var photoAndCopyrightHTML = '<img class="photo" src=' + data.recordings[i].photo + '></div><div class="copyright">' + data.recordings[i].copyright +'</div>';

function dataDisplay(data){
    birdData = data;
    dataToAppend = '';
    someSpace = 1234567876543214;
    var numLength = data.recordings.length;
    console.log(numLength);
    for (i=0; i<data.recordings.length; i++){
        var num = i+1;
        var submitnum = i +1000;
        var listennum = i +2000;

        n = randomNumber(0, numLength);
        o = randomNumber(0, numLength);
        p = randomNumber(0, numLength);

        var audio = data.recordings[i].file;

        var ahrefListen = '<div class="btn btn-group-sm brown"><a target="blank" ng-click="audio = audio" class="popup2" href='+ audio +'>Listen</a></div>';
        var angularListen = '<a ng-click="open()" class="click4modal" id="' + listennum +  '" href='+ audio +'>Listen</a>';

        //modal = '<div id="modal-background"></div><div id="modal-content"><div class="audio">'+ audio +'</div><button id="modal-close">Close Modal Window</button> </div>';
        modal ='<a href="#openModal">Listen</a><div id="openModal" class="modalDialog"><div><a href="#close" title="Close" class="close">X</a><h2>Bird Song</h2></div></div>';


        // answerEntryField
        answerEntryField = '<div class="group"><input name="userProvided" type="text" id="search" class="form-control js-query" placeholder="common name"><button class="btn btn-input-group submit js-search">Submit</button></div>';

        // ** for this - will NEED to hide answers and just leave ahref
        dataToAppend += '<div class="eachSet col-sm-6" id="' + i + '"><span class="name reveal"></span>' + ahrefListen + '</div>';
    }

    $('.appendHere').append(dataToAppend);
}

// This function is used to check the answer when the ANSWER USER INPUT BOX is being used.
function checkAnswer() {
    searchElement = birdData.recordings.length-1 + 1000;
    console.log(searchElement);

    //convert answer to lower case for test
    //element = $('#' + searchElement).val();
    element = $('.js-query').val();
    console.log(element + "is the user entered answer");
    element = element.toLowerCase();
    console.log(element);


    // Identify correct answer
    correctAnswer = birdData.recordings[objectID].en;
    correctAnswer = correctAnswer.toLowerCase();
    console.log(correctAnswer);

    //test for correct answer
    if (correctAnswer == element) {
        youreCorrect = '<div class="buffer3">Something</div><div class="btn btn-group-sm btn-success correct">Correct !</div>';
        $('.correct').remove();
        $('.buffer3').remove();
        $('.pointsAndNewBird').append(youreCorrect);
        console.log("Hi");

    // Write them to database per Joseph suggestion
        sum = sum +10;
        if (sum >= 100){sum = 100}
        var pointsDisplay = '<div class="points btn btn-group-sm"> Points: ' + sum + '/' +total+ '</div>';
        $('.points').replaceWith(pointsDisplay);

        var addpoints = '<div class="plusten"> +10 </div>';
        $('.plusten').remove();
        $('.appendOtherColumn').prepend(addpoints).fadeIn(1000);

    } else {
        console.log("Nope!");
        youreWrong = '<div class="buffer"> Something </div><div class="btn btn-group-sm btn-danger wrong">Wrong Click \'New Bird\'</div>';
        $('.wrong').remove();
        $('.buffer').remove();
        $('.pointsAndNewBird').append(youreWrong);
        var theAnswerIs = '<div class="btn btn-group-sm btn-default giveAnswer">The Answer is....  ' + birdData.recordings[objectID].en + '</div><div class="buffer2"> Something </div>';
        $('.giveAnswer').remove();
        $('.buffer2').remove();
        $('.countries').append(theAnswerIs);
        var pointsDisplay = '<div class="btn btn-group-sm points"> Points: ' + sum + '/' +total+ '</div>';
        $('.points').replaceWith(pointsDisplay);

    }
}

// Function, check radio button for correct answer

function radioCheckAnswer (radio) {

// Identify correct answer
    correctAnswer = birdData.recordings[objectID].en;
    correctAnswer = correctAnswer.toLowerCase();
    console.log(correctAnswer);


//   Test for correct answer
    console.log("The correct answer is:" + correctAnswer);
    console.log("The selected answer is:" + radio);
    if (correctAnswer == radio) {
        youreCorrect = '<div class="btn btn-group-sm btn-success correct">Correct !</div><div class="buffer3">Something</div>';
        $('.correct').remove();
        $('.buffer3').remove();
        $('.pointsAndNewBird').append(youreCorrect);
        console.log("Hi");


// ASK SCOTT: Better way to update just the number of points earned??  Joseph suggested - write answer, question num, points - all to the database
        sum = sum +10;
        if (sum >= 100){sum = 100}

        var pointsDisplay = '<div class="btn btn-group-sm points"> Points: ' + sum + '/' +total+ '</div>';
        $('.points').replaceWith(pointsDisplay);

        var addpoints = '<div class="plusten"> +10 </div>';
        $('.plusten').remove();
        $('.answerForm').prepend(addpoints).fadeIn(1000);

    } else {
        console.log("Nope!");
        youreWrong = '<div class="buffer"> Something </div><div class="btn btn-group-sm btn-danger wrong">Wrong Click \'New Bird\'</div>';
        $('.wrong').remove();
        $('.buffer').remove();
        $('.pointsAndNewBird').append(youreWrong);
        var theAnswerIs = '<div class="btn btn-group-sm btn-default giveAnswer">The Answer is....  ' + birdData.recordings[objectID].en + '</div><div class="buffer2"> Something </div>';
        $('.giveAnswer').remove();
        $('.buffer2').remove();
        $('.countries').append(theAnswerIs);
        var pointsDisplay = '<div class="btn btn-group-sm points"> Points: ' + sum + '/' +total+ '</div>';
        $('.points').replaceWith(pointsDisplay);

        $('.answerForm').hide();

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

//
//// Function displays the bird based on the index determined by random number.
//function toggleVisibilityPlus(number) {
//    var visBird = document.getElementById(number);
//
//    if (visBird.style.display = "none") {
//        visBird.style.display = "block"
//    } else {
//        visBird.style.display = "none"
//    }
//    console.log('visBird is the element by Id for number' + visBird);
//}


    $(document).ready(function() {

        $('.userInput').on("click", function(){
            $('.buttonsHolder').hide();
            $('.newbird2').show();
            $('.points').show();

            var ider = birdData.recordings.length - 1;
            number = randomNumber(0, ider);

            console.log('Random number for letsplay' + number);

            toggleVisibility(number);

            objectID = number;
            previous = number;

            console.log('This is the id that matches the random number' + birdData.recordings[number].en);

            $('.textHere').append(answerEntryField);

            var newBirdDiv = '<div class="btn btn-group-sm newbird btn-info" style="display:none">New Bird</div>';

            $('.appendOtherColumn').append(answerFormDiv);
            $('.answerForm').prepend(newBirdDiv);

        });

        $('.radiochoice').on("click", function () {
            $('.buttonsHolder').hide();
            $('.newbird').show();
            $('.points').show();

            var ider = birdData.recordings.length - 1;
            number = randomNumber(0, ider);

            console.log('Random number for letsplay' + number);

            toggleVisibility(number);

            objectID = number;
            previous = number;

            // Create radio buttons, put 'possible' answers in answers array, shuffle array and give the user options
            answerArray = [birdData.recordings[objectID].en, birdData.recordings[n].en, birdData.recordings[o].en, birdData.recordings[p].en];

            console.log('This is the id that matches the random number' + birdData.recordings[number].en + number);

            console.log(answerArray);
            choiceArray = shuffle(answerArray);
            console.log(choiceArray);

            answerFormDiv = '<div class ="answerForm"></div>';

            radioButtons = '<div class="row"><div class="circle" id="9996"></div><div class="result">' + choiceArray[0] + '</div></div></div>' +
            '<div class="row"><div class="circle" id="9997"></div><div class="result">' + choiceArray[1] + '</div></div></div>' +
            '<div class="row"><div class="circle" id="9998"></div><div class="result">' + choiceArray[2] + '</div></div></div>' +
            '<div class="row"><div class="circle" id="9999"></div><div class="result">' + choiceArray[3] + '</div></div></div>';

            $('.appendOtherColumn').append(answerFormDiv);
            $('.answerForm').append(radioButtons);

            var pointsDisplay = '<div class="points btn btn-group-sm"> Points: ' + sum + '/' +total+ '</div>';

            //var newBirdDiv = '<div class="btn btn-group-sm newbird btn-info" style="display:none">New Bird</div>';

            //$('.answerForm').prepend(newBirdDiv);
            $('.points').replaceWith(pointsDisplay);

        });

        // When click on search button, get value and pass it into checkanswer
        $('.textHere').on("click", '.js-search', function () {

            //Hide previous answers
            $('.correct').remove();
            $('.wrong').remove();

            checkAnswer();

            //Try to disable the search button so that only one click can occur per answer
            $(this).attr("disabled", true);
            document.getElementById('search').value = '';
            console.log(this);
        });

        // On click to get value of radio button, and at the same time disable the other radio buttons
        $('.appendOtherColumn').on('click', '.circle', function () {
            choice = $(this).attr('id');
            console.log(choice);
            $(this).toggleClass('dos');
            $(this).next().toggleClass('deepbrown');
            $('.circle').hide()

            function choiceIs (choice) {
                if (choice == 9996) {
                    radioAns = choiceArray[0];
                } else if (choice == 9997) {
                    radioAns = choiceArray[1];
                } else if (choice == 9998) {
                    radioAns = choiceArray[2];
                } else if (choice == 9999) {
                    radioAns = choiceArray[3];
                }

                radioAns = radioAns.toLowerCase();
                console.log('This is the selected choice' + radioAns);

                return radioAns;
            }

            radioCheckAnswer(choiceIs(choice));

        });


        $('.newbird').on("click", function () {
            qnumber += 1;

            // Deletes the previously displayed bird object.  Previous is set at the end of on-click with the clicked id number.
            var prevBird = document.getElementById(previous);
            if (prevBird.style.display = "block") {
                prevBird.style.display = "none"
            }

            // Re-able the "Submit" button
            $('.js-search').attr("disabled", false);

            // Hide correct button
            $('.answerForm').remove();
            $('.correct').remove();
            $('.wrong').remove();
            $('.questions').remove();
            $('.plusten').remove();
            $('.giveAnswer').remove();


            // Display which question, out of how many that you are on
            displayQuestions = '<p class="questions"> Question: ' + qnumber + '/' + numQs + '</p>';
            if (qnumber == 2) {
                $('.underflagdiv').replaceWith(displayQuestions);
            } else {
                $('.flagdiv').append(displayQuestions);
            }

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


            // Create radio buttons, put 'possible' answers in answers array, shuffle array and give the user options
            answerArray = [birdData.recordings[number].en, birdData.recordings[n].en, birdData.recordings[o].en, birdData.recordings[p].en];
            correctAnswer = birdData.recordings[number].en;

            console.log("This is the bird index number" + number);
            console.log('This is the id that matches the random number' + birdData.recordings[number].en);

            console.log(answerArray);
            choiceArray = shuffle(answerArray);
            console.log(choiceArray);

            answerFormDiv = '<div class ="answerForm"></div>';

            radioButtons = '<div class="row"><div class="circle" id="9996"></div><div class="result">' + choiceArray[0] + '</div></div></div>' +
            '<div class="row"><div class="circle" id="9997"></div><div class="result">' + choiceArray[1] + '</div></div></div>' +
            '<div class="row"><div class="circle" id="9998"></div><div class="result">' + choiceArray[2] + '</div></div></div>' +
            '<div class="row"><div class="circle" id="9999"></div><div class="result">' + choiceArray[3] + '</div></div></div>';

            $('.appendOtherColumn').append(answerFormDiv);
            $('.answerForm').append(radioButtons);

                if (qnumber > 10) {
                    var result = prompt("Would you like to start a new game?  Type 'yes' or 'no'");
                    if (result == "yes") {
                        totalforGame = sum;
                        location.reload();
                        }
                    //var $scope = angular.element($('.points')).scope();
                    //$scope.$apply(function () {
                    //    $scope.player = Player.find({}, "name").update("points", {points: sum});
                    //});


                    else {
                        $('.container').hide();
                        alert("Thanks for playing!");
                        }
                    }
            });

        $('.newbird2').on("click", function () {
            qnumber += 1;

            // Deletes the previously displayed bird object.  Previous is set at the end of on-click with the clicked id number.
            var prevBird = document.getElementById(previous);
            if (prevBird.style.display = "block") {
                prevBird.style.display = "none"
            }

            // Re-able the "Submit" button
            $('.js-search').attr("disabled", false);

            // Hide correct button
            $('.correct').remove();
            $('.wrong').remove();
            $('.questions').remove();
            $('.plusten').remove();
            $('.giveAnswer').remove();


            // Display which question, out of how many that you are on
            displayQuestions = '<p class="questions"> Question: ' + qnumber + '/' + numQs + '</p>';
            if (qnumber == 2) {
                $('.underflagdiv').replaceWith(displayQuestions);
            } else {
                $('.flagdiv').append(displayQuestions);
            }

            // Using the length of the array provided, a bird object is randomly selected
            var ider = birdData.recordings.length - 1;
            number = randomNumber(0, ider);
            console.log(number);
            objectID = number;

            // Calls toggleVisibility which shows bird
            toggleVisibility(number);

            console.log('This is the id that matches the random number' + birdData.recordings[number].en);

            // Sets previous to be used when the next button is clicked again.
            previous = number;

            if (qnumber > 10) {
                var result = prompt("Would you like to start a new game?  Type 'yes' or 'no'");
                if (result == "yes") {
                    totalforGame = sum;
                    location.reload();
                }
                //var $scope = angular.element($('.points')).scope();
                //$scope.$apply(function () {
                //    $scope.player = Player.find({}, "name").update("points", {points: sum});
                //});


                else {
                    $('.container').hide();
                    alert("Thanks for playing!");
                }
            }
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


     $('.headerflag').on("click", ".specificflag", function () {
                $('.letsplay').show();
                $('.radiochoice').show();
                $('.userInput').show();
                $('.nameentry').hide();
                console.log("I clicked a flag....");
                var fileLocation = $(this).attr('id');
                console.log(fileLocation);

         //Poor mans version, to just copy past the json data into this file, and get object elements.
         $.get(fileLocation, function(data) {
             birdData = data;
             console.log(".get json data works");
             console.log((birdData.recordings.length));

             dataDisplay(data);

         });

            });
                // ajax call to the data served up by the server at /apiBirds.  Request/Response in index.js
                //$.ajax({
                //    type: 'GET',
                //    url: localRoute,
                //    jsonCallback: 'callback',
                //    crossDomain: true,
                //    success: function (data) {
                //        console.log(data);
                //        dataDisplay(data);
                //        console.log("I work")
                //    },
                //    complete: console.log("Finished ajax call"),
                //    error: function (xhr) {
                //        console.log('Danger Will Robinson, danger!');
                //        console.log(xhr);
                //    }
                //});
//**************************************************************************************************************************************************//
                //$.ajax({
                //    type: 'POST',
                //    url:'/infoNeeded',
                //    data: {name: country},
                //    dataType: 'json',
                //    success: function(){
                //        console.log('I passed the country' + country + 'to the server');
                //    },
                //    complete: console.log("I did a post"),
                //    error: function (xhr){
                //        console.log("Well, it was a Hail Mary anyway!")
                //    }
                //});

        //});
    });
