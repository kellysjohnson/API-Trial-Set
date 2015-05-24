var domain = 'http://ebird.org/ws1.1/data/obs/geo/recent?';
var i;
var apiKey;

///obs/geo/recent?';

    $(document).ready(function(){

            $.ajax({
                type:'GET',
                datatype:'jsonp',
                crossDomain: true,
                url: encodeURI(domain),
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