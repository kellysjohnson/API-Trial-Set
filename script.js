var domain = 'http://www.xeno-canto.org/api/2/recordings';
var query = '?query=';
var countryGeneric = 'cnt:';
var unitiedStates = "united states";                      //United States does not work.
var paris = "france";
var countryTest = domain + query + countryGeneric;
var testUS = countryTest + unitiedStates;
var testParis = countryTest + paris;                     //France works, but object not returned to console.
var testGivenUrl = 'http://www.xeno-canto.org/api/2/recordings?query=cnt:brazil';  //Works, but object not returned to console.
var i;
var apiKey;

///obs/geo/recent?';

    $(document).ready(function(){

            $.ajax({
                type:'GET',
                datatype:'jsonp',
                crossDomain: true,
                url: encodeURI(testParis),
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