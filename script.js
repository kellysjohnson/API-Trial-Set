var domain = 'http://www.xeno-canto.org/api/2/recordings';
var query = '?query=';
var countryGeneric = 'cnt:';
var unitiedStates = "UnitedStates";
var paris = "Paris"
var countryTest = domain + query + countryGeneric;
var testUS = countryTest + unitiedStates;
var testParis = countryTest + paris;
var testGivenUrl = 'http://www.xeno-canto.org/api/2/recordings?query=cnt:brazil';
var i;
var apiKey;

///obs/geo/recent?';

    $(document).ready(function(){

            $.ajax({
                type:'GET',
                datatype:'jsonp',
                crossDomain: true,
                url: encodeURI(testUS),
                success: function(data) {
                    console.log(data);
                    dataDisplay(data);
                },
                complete:
                    console.log("Finished ajax call"),
                error: function(xhr) {
                    console.log(xhr);
                }
            });

        });