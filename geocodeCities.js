var async = require('async');
var geocoder = require('geocoder');
var australia = require('./countries/australia.js');
var brazil = require('./countries/brazil.js');
var canada = require('./countries/canada.js');
var europe = require('./countries/europe.js');
var mexico = require('./countries/mexico.js');
var newzealand = require('./countries/newzealand.js');
var us = require('./countries/unitedstates.js');

var using = newzealand;

// Container for results that cannot be geocoded
var noData = [];

// Get lat/lon for major US cities
async.forEachSeries(using.cities, function(city, n) {
	// Geocoding
	var execute = function () {
		geocoder.geocode(city, function (err, data) {
			if (err) { n(err); }
			else if (data) {
				if (data.results && data.results instanceof Array && data.results.length > 0) {
					for (var i=0; i<data.results.length; i++) {
						var r = data.results[i];
						if (r.formatted_address && r.geometry && r.geometry.location && r.geometry.location.lat && r.geometry.location.lng) {
							console.log(',{"city": "' + r.formatted_address + '", "ll": "' + r.geometry.location.lat + ',' + r.geometry.location.lng + '"}')
							break;
						}
					}
					n();
				} else {
					noData.push(data);
					n(); 
				}
			} else { n('No data for: ' + city); }
		});
	};
	setTimeout(execute, 1000);
}, function(err) {
	if (err) { console.error(err); }
	else {
		console.log("Done!");
		if (noData.length > 0) {
			console.log('');
			console.log('————————————————————————————————————');
			console.log('No geocoding data for: ');
			noData.forEach(function(i) { console.log(i); });
		}
	}
});


