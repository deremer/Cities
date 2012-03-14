// Top 275 U.S. Cities
// Source: http://en.wikipedia.org/wiki/List_of_United_States_cities_by_population
var cities = 
	[
	 'New York, New York'
	,'Los Angeles, California'
	,'Chicago, Illinois'
	,'Houston, Texas'
	,'Philadelphia, Pennsylvania'
	,'Phoenix, Arizona'
	,'San Antonio, Texas'
	,'San Diego, California'
	,'Dallas, Texas'
	,'San Jose, California'
	,'Jacksonville, Florida'
	,'Indianapolis, Indiana'
	,'San Francisco, California'
	,'Austin, Texas'
	,'Columbus, Ohio'
	,'Fort Worth, Texas'
	,'Charlotte, North Carolina'
	,'Detroit, Michigan'
	,'El Paso, Texas'
	,'Memphis, Tennessee'
	,'Baltimore, Maryland'
	,'Boston, Massachusetts'
	,'Seattle, Washington'
	,'Washington, District of Columbia'
	,'Nashville, Tennessee'
	,'Denver, Colorado'
	,'Louisville, Kentucky'
	,'Milwaukee, Wisconsin'
	,'Portland, Oregon'
	,'Las Vegas, Nevada'
	,'Oklahoma City, Oklahoma'
	,'Albuquerque, New Mexico'
	,'Tucson, Arizona'
	,'Fresno, California'
	,'Sacramento, California'
	,'Long Beach, California'
	,'Kansas City, Missouri'
	,'Mesa, Arizona'
	,'Virginia Beach, Virginia'
	,'Atlanta, Georgia'
	,'Colorado Springs, Colorado'
	,'Omaha, Nebraska'
	,'Raleigh, North Carolina'
	,'Miami, Florida'
	,'Cleveland, Ohio'
	,'Tulsa, Oklahoma'
	,'Oakland, California'
	,'Minneapolis, Minnesota'
	,'Wichita, Kansas'
	,'Arlington, Texas'
	,'Bakersfield, California'
	,'New Orleans, Louisiana'
	,'Honolulu, Hawaii'
	,'Anaheim, California'
	,'Tampa, Florida'
	,'Aurora, Colorado'
	,'Santa Ana, California'
	,'Saint Louis, Missouri'
	,'Pittsburgh, Pennsylvania'
	,'Corpus Christi, Texas'
	,'Riverside, California'
	,'Cincinnati, Ohio'
	,'Lexington, Kentucky'
	,'Anchorage, Alaska'
	,'Stockton, California'
	,'Toledo, Ohio'
	,'Saint Paul, Minnesota'
	,'Newark, New Jersey'
	,'Greensboro, North Carolina'
	,'Buffalo, New York'
	,'Plano, Texas'
	,'Lincoln, Nebraska'
	,'Henderson, Nevada'
	,'Fort Wayne, Indiana'
	,'Jersey City, New Jersey'
	,'Saint Petersburg, Florida'
	,'Chula Vista, California'
	,'Norfolk, Virginia'
	,'Orlando, Florida'
	,'Chandler, Arizona'
	,'Laredo, Texas'
	,'Madison, Wisconsin'
	,'Winston-Salem, North Carolina'
	,'Lubbock, Texas'
	,'Baton Rouge, Louisiana'
	,'Durham, North Carolina'
	,'Garland, Texas'
	,'Glendale, Arizona'
	,'Reno, Nevada'
	,'Hialeah, Florida'
	,'Chesapeake, Virginia'
	,'Scottsdale, Arizona'
	,'North Las Vegas, Nevada'
	,'Irving, Texas'
	,'Fremont, California'
	,'Irvine, California'
	,'Birmingham, Alabama'
	,'Rochester, New York'
	,'San Bernardino, California'
	,'Spokane, Washington'
	,'Gilbert, Arizona'
	,'Arlington, Virginia'
	,'Montgomery, Alabama'
	,'Boise, Idaho'
	,'Richmond, Virginia'
	,'Des Moines, Iowa'
	,'Modesto, California'
	,'Fayetteville, North Carolina'
	,'Shreveport, Louisiana'
	,'Akron, Ohio'
	,'Tacoma, Washington'
	,'Aurora, Illinois'
	,'Oxnard, California'
	,'Fontana, California'
	,'Yonkers, New York'
	,'Augusta, Georgia'
	,'Mobile, Alabama'
	,'Little Rock, Arkansas'
	,'Moreno Valley, California'
	,'Glendale, California'
	,'Amarillo, Texas'
	,'Huntington Beach, California'
	,'Columbus, Georgia'
	,'Grand Rapids, Michigan'
	,'Salt Lake City, Utah'
	,'Tallahassee, Florida'
	,'Worcester, Massachusetts'
	,'Newport News, Virginia'
	,'Huntsville, Alabama'
	,'Knoxville, Tennessee'
	,'Providence, Rhode Island'
	,'Santa Clarita, California'
	,'Grand Prairie, Texas'
	,'Brownsville, Texas'
	,'Jackson, Mississippi'
	,'Overland Park, Kansas'
	,'Garden Grove, California'
	,'Santa Rosa, California'
	,'Chattanooga, Tennessee'
	,'Oceanside, California'
	,'Fort Lauderdale, Florida'
	,'Rancho Cucamonga, California'
	,'Port Saint Lucie, Florida'
	,'Ontario, California'
	,'Vancouver, Washington'
	,'Tempe, Arizona'
	,'Springfield, Missouri'
	,'Lancaster, California'
	,'Eugene, Oregon'
	,'Pembroke Pines, Florida'
	,'Salem, Oregon'
	,'Cape Coral, Florida'
	,'Peoria, Arizona'
	,'Sioux Falls, South Dakota'
	,'Springfield, Massachusetts'
	,'Elk Grove, California'
	,'Rockford, Illinois'
	,'Palmdale, California'
	,'Corona, California'
	,'Salinas, California'
	,'Pomona, California'
	,'Pasadena, Texas'
	,'Joliet, Illinois'
	,'Paterson, New Jersey'
	,'Kansas City, Kansas'
	,'Torrance, California'
	,'Syracuse, New York'
	,'Bridgeport, Connecticut'
	,'Hayward, California'
	,'Fort Collins, Colorado'
	,'Escondido, California'
	,'Lakewood, Colorado'
	,'Naperville, Illinois'
	,'Dayton, Ohio'
	,'Hollywood, Florida'
	,'Sunnyvale, California'
	,'Alexandria, Virginia'
	,'Mesquite, Texas'
	,'Hampton, Virginia'
	,'Pasadena, California'
	,'Orange, California'
	,'Savannah, Georgia'
	,'Cary, North Carolina'
	,'Fullerton, California'
	,'Warren, Michigan'
	,'Clarksville, Tennessee'
	,'McKinney, Texas'
	,'McAllen, Texas'
	,'New Haven, Connecticut'
	,'Sterling Heights, Michigan'
	,'West Valley City, Utah'
	,'Columbia, South Carolina'
	,'Killeen, Texas'
	,'Topeka, Kansas'
	,'Thousand Oaks, California'
	,'Cedar Rapids, Iowa'
	,'Olathe, Kansas'
	,'Elizabeth, New Jersey'
	,'Waco, Texas'
	,'Hartford, Connecticut'
	,'Visalia, California'
	,'Gainesville, Florida'
	,'Simi Valley, California'
	,'Stamford, Connecticut'
	,'Bellevue, Washington'
	,'Concord, California'
	,'Miramar, Florida'
	,'Coral Springs, Florida'
	,'Lafayette, Louisiana'
	,'Charleston, South Carolina'
	,'Carrollton, Texas'
	,'Roseville, California'
	,'Thornton, Colorado'
	,'Beaumont, Texas'
	,'Allentown, Pennsylvania'
	,'Surprise, Arizona'
	,'Evansville, Indiana'
	,'Abilene, Texas'
	,'Frisco, Texas'
	,'Independence, Missouri'
	,'Santa Clara, California'
	,'Springfield, Illinois'
	,'Vallejo, California'
	,'Victorville, California'
	,'Athens, Georgia'
	,'Peoria, Illinois'
	,'Lansing, Michigan'
	,'Ann Arbor, Michigan'
	,'El Monte, California'
	,'Denton, Texas'
	,'Berkeley, California'
	,'Provo, Utah'
	,'Downey, California'
	,'Midland, Texas'
	,'Norman, Oklahoma'
	,'Waterbury, Connecticut'
	,'Costa Mesa, California'
	,'Inglewood, California'
	,'Manchester, New Hampshire'
	,'Murfreesboro, Tennessee'
	,'Columbia, Missouri'
	,'Elgin, Illinois'
	,'Clearwater, Florida'
	,'Miami Gardens, Florida'
	,'Rochester, Minnesota'
	,'Pueblo, Colorado'
	,'Lowell, Massachusetts'
	,'Wilmington, North Carolina'
	,'San Buenaventura (Ventura), California'
	,'Arvada, Colorado'
	,'Westminster, Colorado'
	,'West Covina, California'
	,'Gresham, Oregon'
	,'Norwalk, California'
	,'Fargo, North Dakota'
	,'Carlsbad, California'
	,'Fairfield, California'
	,'Cambridge, Massachusetts'
	,'Wichita Falls, Texas'
	,'High Point, North Carolina'
	,'Billings, Montana'
	,'Green Bay, Wisconsin'
	,'West Jordan, Utah'
	,'Richmond, California'
	,'Murrieta, California'
	,'Burbank, California'
	,'Palm Bay, Florida'
	,'Everett, Washington'
	,'Flint, Michigan'
	,'Antioch, California'
	,'Erie, Pennsylvania'
	,'South Bend, Indiana'
	,'Daly City, California'
	,'Centennial, Colorado'
	,'Temecula, California'
	];

// Top 275 US Cities Geocoded for latitude/longitude
var citiesMap = 
	[
		 {'city': 'New York, NY, USA', 'll': '40.7143528,-74.00597309999999'}
		,{'city': 'Manhattan, New York, NY, USA', 'll': '40.7834345,-73.9662495'}
		,{'city': 'Los Angeles, CA, USA', 'll': '34.0522342,-118.2436849'}
		,{'city': 'Chicago, IL, USA', 'll': '41.8781136,-87.6297982'}
		,{'city': 'Houston, TX, USA', 'll': '29.7601927,-95.36938959999999'}
		,{'city': 'Philadelphia, PA, USA', 'll': '39.952335,-75.16378900000001'}
		,{'city': 'Phoenix, AZ, USA', 'll': '33.4483771,-112.0740373'}
		,{'city': 'San Antonio, TX, USA', 'll': '29.4241219,-98.49362819999999'}
		,{'city': 'San Diego, CA, USA', 'll': '32.7153292,-117.1572551'}
		,{'city': 'Dallas, TX, USA', 'll': '32.802955,-96.769923'}
		,{'city': 'San Jose, CA, USA', 'll': '37.3393857,-121.8949555'}
		,{'city': 'Jacksonville, FL, USA', 'll': '30.3321838,-81.65565099999999'}
		,{'city': 'Indianapolis, IN, USA', 'll': '39.7685155,-86.1580736'}
		,{'city': 'San Francisco, CA, USA', 'll': '37.7749295,-122.4194155'}
		,{'city': 'Austin, TX, USA', 'll': '30.267153,-97.7430608'}
		,{'city': 'Columbus, OH, USA', 'll': '39.9611755,-82.99879419999999'}
		,{'city': 'Fort Worth, TX, USA', 'll': '32.725409,-97.3208496'}
		,{'city': 'Charlotte, NC, USA', 'll': '35.2270869,-80.8431267'}
		,{'city': 'Detroit, MI, USA', 'll': '42.331427,-83.0457538'}
		,{'city': 'Michigan - Martin, Detroit, MI 48210, USA', 'll': '42.3288623,-83.1206665'}
		,{'city': 'El Paso, TX, USA', 'll': '31.7587198,-106.4869314'}
		,{'city': 'El Paso', 'll': '31.8039824,-106.2051484'}
		,{'city': 'Memphis, TN, USA', 'll': '35.1495343,-90.0489801'}
		,{'city': 'Baltimore, MD, USA', 'll': '39.2903848,-76.6121893'}
		,{'city': 'Boston, MA, USA', 'll': '42.3584308,-71.0597732'}
		,{'city': 'Seattle, WA, USA', 'll': '47.6062095,-122.3320708'}
		,{'city': 'Washington, DC, USA', 'll': '38.8951118,-77.0363658'}
		,{'city': 'Nashville, TN, USA', 'll': '36.1658899,-86.7844432'}
		,{'city': 'Denver, CO, USA', 'll': '39.7391536,-104.9847034'}
		,{'city': 'Colorado Free University, 1510 York St, Denver, CO 80206, USA', 'll': '39.740324,-104.9596773'}
		,{'city': 'Louisville, KY, USA', 'll': '38.2526647,-85.7584557'}
		,{'city': 'Milwaukee, WI, USA', 'll': '43.0389025,-87.9064736'}
		,{'city': 'Portland, OR, USA', 'll': '45.5234515,-122.6762071'}
		,{'city': 'Las Vegas, NV, USA', 'll': '36.114646,-115.172816'}
		,{'city': 'Las Vegas, NV, USA', 'll': '36.1398498,-115.188916'}
		,{'city': 'Oklahoma City, OK, USA', 'll': '35.4675602,-97.5164276'}
		,{'city': 'Oklahoma City, OK, USA', 'll': '35.5006256,-97.6114217'}
		,{'city': 'Albuquerque, NM, USA', 'll': '35.0844909,-106.6511367'}
		,{'city': 'Tucson, AZ, USA', 'll': '32.2217429,-110.926479'}
		,{'city': 'Fresno, CA, USA', 'll': '36.7477272,-119.7723661'}
		,{'city': 'Fresno, CA, USA', 'll': '36.9858984,-119.2320784'}
		,{'city': 'Sacramento, CA, USA', 'll': '38.5815719,-121.4943996'}
		,{'city': 'Long Beach, CA, USA', 'll': '33.8041667,-118.1580556'}
		,{'city': 'Kansas City, MO, USA', 'll': '39.0997265,-94.5785667'}
		,{'city': 'Mesa, AZ, USA', 'll': '33.4151843,-111.8314724'}
		,{'city': 'Virginia Beach, VA, USA', 'll': '36.8529263,-75.97798499999999'}
		,{'city': 'Atlanta, GA, USA', 'll': '33.7489954,-84.3879824'}
		,{'city': 'Colorado Springs, CO, USA', 'll': '38.8338816,-104.8213634'}
		,{'city': 'Omaha, NE, USA', 'll': '41.2523634,-95.99798829999999'}
		,{'city': 'Raleigh, NC, USA', 'll': '35.772096,-78.6386145'}
		,{'city': 'Miami, FL, USA', 'll': '25.7889689,-80.2264393'}
		,{'city': 'Cleveland, OH, USA', 'll': '41.4994954,-81.6954088'}
		,{'city': 'Tulsa, OK, USA', 'll': '36.1539816,-95.99277500000001'}
		,{'city': 'Tulsa, USA', 'll': '36.2740199,-96.2375947'}
		,{'city': 'Oakland, CA, USA', 'll': '37.8043637,-122.2711137'}
		,{'city': 'Minneapolis, MN, USA', 'll': '44.9799654,-93.26383609999999'}
		,{'city': 'Wichita, KS, USA', 'll': '37.6922222,-97.3372222'}
		,{'city': 'Arlington, TX, USA', 'll': '32.735687,-97.10806559999999'}
		,{'city': 'Bakersfield, CA, USA', 'll': '35.3732921,-119.0187125'}
		,{'city': 'New Orleans, LA, USA', 'll': '29.95106579999999,-90.0715323'}
		,{'city': 'Honolulu, HI, USA', 'll': '21.3069444,-157.8583333'}
		,{'city': 'Honolulu, HI, USA', 'll': '21.451996,-158.0954459'}
		,{'city': 'Anaheim, CA, USA', 'll': '33.8352932,-117.9145036'}
		,{'city': 'Tampa, FL, USA', 'll': '27.950575,-82.4571776'}
		,{'city': 'Aurora, CO, USA', 'll': '39.7294319,-104.8319195'}
		,{'city': 'Santa Ana, CA, USA', 'll': '33.7455731,-117.8678338'}
		,{'city': 'St Louis, MO, USA', 'll': '38.6270025,-90.19940419999999'}
		,{'city': 'St Louis, Hadley, MO, USA', 'll': '38.6105426,-90.3371889'}
		,{'city': 'Pittsburgh, PA, USA', 'll': '40.44062479999999,-79.9958864'}
		,{'city': 'Corpus Christi, TX, USA', 'll': '27.8005828,-97.39638099999999'}
		,{'city': 'Riverside, CA, USA', 'll': '33.9533487,-117.3961564'}
		,{'city': 'Cincinnati, OH, USA', 'll': '39.1031182,-84.5120196'}
		,{'city': 'Lexington, KY, USA', 'll': '38.0405837,-84.5037164'}
		,{'city': 'Anchorage, AK, USA', 'll': '61.2180556,-149.9002778'}
		,{'city': 'Stockton, CA, USA', 'll': '37.9577016,-121.2907796'}
		,{'city': 'Toledo, OH, USA', 'll': '41.6639383,-83.55521200000001'}
		,{'city': 'St Paul, MN, USA', 'll': '44.95416669999999,-93.11388889999999'}
		,{'city': 'Newark, NJ, USA', 'll': '40.735657,-74.1723667'}
		,{'city': 'Greensboro, NC, USA', 'll': '36.0726354,-79.7919754'}
		,{'city': 'Buffalo, NY, USA', 'll': '42.88644679999999,-78.8783689'}
		,{'city': 'Plano, TX, USA', 'll': '33.0198431,-96.6988856'}
		,{'city': 'Lincoln, NE, USA', 'll': '40.806862,-96.681679'}
		,{'city': 'Henderson, NV, USA', 'll': '36.0395247,-114.9817213'}
		,{'city': 'Fort Wayne, IN, USA', 'll': '41.079273,-85.1393513'}
		,{'city': 'Jersey City, NJ, USA', 'll': '40.72815749999999,-74.0776417'}
		,{'city': 'St Petersburg, FL, USA', 'll': '27.7730556,-82.64'}
		,{'city': 'Chula Vista, CA, USA', 'll': '32.6400541,-117.0841955'}
		,{'city': 'Norfolk, VA, USA', 'll': '36.8507689,-76.28587259999999'}
		,{'city': 'Orlando, FL, USA', 'll': '28.5383355,-81.3792365'}
		,{'city': 'Chandler, AZ, USA', 'll': '33.3061605,-111.8412502'}
		,{'city': 'Laredo, TX, USA', 'll': '27.506407,-99.5075421'}
		,{'city': 'Madison, WI, USA', 'll': '43.0730517,-89.4012302'}
		,{'city': 'Winston-Salem, NC, USA', 'll': '36.09985959999999,-80.244216'}
		,{'city': 'Lubbock, TX, USA', 'll': '33.5778631,-101.8551665'}
		,{'city': 'Baton Rouge, LA, USA', 'll': '30.4582829,-91.1403196'}
		,{'city': 'Durham, NC, USA', 'll': '35.9940329,-78.898619'}
		,{'city': 'Garland, TX, USA', 'll': '32.912624,-96.63888329999999'}
		,{'city': 'Glendale, AZ, USA', 'll': '33.5386523,-112.1859866'}
		,{'city': 'Reno, NV, USA', 'll': '39.5296329,-119.8138027'}
		,{'city': 'Hialeah, FL, USA', 'll': '25.8575963,-80.2781057'}
		,{'city': 'Chesapeake, VA, USA', 'll': '36.7682088,-76.2874927'}
		,{'city': 'Scottsdale, AZ, USA', 'll': '33.4941704,-111.9260519'}
		,{'city': 'North Las Vegas, NV, USA', 'll': '36.1988592,-115.1175013'}
		,{'city': 'Irving, TX, USA', 'll': '32.8140177,-96.9488945'}
		,{'city': 'Fremont, CA, USA', 'll': '37.5482697,-121.9885719'}
		,{'city': 'Irvine, CA, USA', 'll': '33.6839473,-117.7946942'}
		,{'city': 'Birmingham, AL, USA', 'll': '33.5206608,-86.80248999999999'}
		,{'city': 'Rochester, NY, USA', 'll': '43.16103,-77.6109219'}
		,{'city': 'Rochester, NY, USA', 'll': '42.938004,-77.3783789'}
		,{'city': 'Rochester, NY 12404, USA', 'll': '41.8036111,-74.2633333'}
		,{'city': 'San Bernardino, CA, USA', 'll': '34.1083449,-117.2897652'}
		,{'city': 'Spokane, WA, USA', 'll': '47.6587802,-117.4260466'}
		,{'city': 'Spokane, USA', 'll': '47.5909399,-117.2776573'}
		,{'city': 'Gilbert, AZ, USA', 'll': '33.3528264,-111.789027'}
		,{'city': 'Arlington, VA, USA', 'll': '38.8799697,-77.1067698'}
		,{'city': 'Arlington, VA 23310, USA', 'll': '37.219841,-76.003956'}
		,{'city': 'Arlington, VA, USA', 'll': '38.8816208,-77.09098089999999'}
		,{'city': 'Montgomery, AL, USA', 'll': '32.3668052,-86.2999689'}
		,{'city': 'Boise, ID, USA', 'll': '43.612631,-116.211076'}
		,{'city': 'Richmond, VA, USA', 'll': '37.5407246,-77.4360481'}
		,{'city': 'Des Moines, IA, USA', 'll': '41.6005448,-93.6091064'}
		,{'city': 'Modesto, CA, USA', 'll': '37.63909719999999,-120.9968782'}
		,{'city': 'Fayetteville, NC, USA', 'll': '35.0526641,-78.87835849999999'}
		,{'city': 'Shreveport, LA, USA', 'll': '32.5251516,-93.7501789'}
		,{'city': 'Akron, OH, USA', 'll': '41.0814447,-81.51900529999999'}
		,{'city': 'Tacoma, WA, USA', 'll': '47.2528768,-122.4442906'}
		,{'city': 'Aurora, IL, USA', 'll': '41.7605849,-88.32007150000001'}
		,{'city': 'Oxnard, CA, USA', 'll': '34.1975048,-119.1770516'}
		,{'city': 'Fontana, CA, USA', 'll': '34.0922335,-117.435048'}
		,{'city': 'Yonkers, NY, USA', 'll': '40.9312099,-73.89874689999999'}
		,{'city': 'Augusta, GA, USA', 'll': '33.474246,-82.00967'}
		,{'city': 'Mobile, AL, USA', 'll': '30.6943566,-88.04305409999999'}
		,{'city': 'Mobile, USA', 'll': '30.7921394,-88.24611829999999'}
		,{'city': 'Little Rock, AR, USA', 'll': '34.7464809,-92.28959479999999'}
		,{'city': 'Moreno Valley, CA, USA', 'll': '33.9424658,-117.2296717'}
		,{'city': 'Glendale, CA, USA', 'll': '34.1425078,-118.255075'}
		,{'city': 'Amarillo, TX, USA', 'll': '35.2219971,-101.8312969'}
		,{'city': 'Huntington Beach, CA, USA', 'll': '33.660297,-117.9992265'}
		,{'city': 'Columbus, GA, USA', 'll': '32.4609764,-84.9877094'}
		,{'city': 'Grand Rapids, MI, USA', 'll': '42.9633599,-85.6680863'}
		,{'city': 'Grand Rapids Charter Township, MI, USA', 'll': '43.0020023,-85.57150150000001'}
		,{'city': 'Salt Lake City, UT, USA', 'll': '40.7607793,-111.8910474'}
		,{'city': 'Salt Lake City, USA', 'll': '40.507092,-113.0011989'}
		,{'city': 'Tallahassee, FL, USA', 'll': '30.4382559,-84.28073289999999'}
		,{'city': 'Worcester, MA, USA', 'll': '42.2625932,-71.8022934'}
		,{'city': 'Worcester, USA', 'll': '42.2571058,-71.8571331'}
		,{'city': 'Newport News, VA, USA', 'll': '37.0870821,-76.4730122'}
		,{'city': 'Huntsville, AL, USA', 'll': '34.7303688,-86.5861037'}
		,{'city': 'Knoxville, TN, USA', 'll': '35.9606384,-83.9207392'}
		,{'city': 'Providence, RI, USA', 'll': '41.8239891,-71.4128343'}
		,{'city': 'Santa Clarita, CA, USA', 'll': '34.3916641,-118.542586'}
		,{'city': 'Grand Prairie, TX, USA', 'll': '32.7459645,-96.99778459999999'}
		,{'city': 'Brownsville, TX, USA', 'll': '25.9017472,-97.4974838'}
		,{'city': 'Jackson, MS, USA', 'll': '32.2987573,-90.1848103'}
		,{'city': 'Overland Park, KS, USA', 'll': '38.9822282,-94.6707917'}
		,{'city': 'Garden Grove, CA, USA', 'll': '33.7739053,-117.9414477'}
		,{'city': 'Santa Rosa, CA, USA', 'll': '38.4404674,-122.7144314'}
		,{'city': 'Chattanooga, TN, USA', 'll': '35.0456297,-85.3096801'}
		,{'city': 'Oceanside, CA, USA', 'll': '33.1958696,-117.3794834'}
		,{'city': 'Fort Lauderdale, FL, USA', 'll': '26.1223084,-80.14337859999999'}
		,{'city': 'Rancho Cucamonga, CA, USA', 'll': '34.10639889999999,-117.5931084'}
		,{'city': 'Port St Lucie, FL, USA', 'll': '27.2758333,-80.35499999999999'}
		,{'city': 'Ontario, CA, USA', 'll': '34.0633443,-117.6508876'}
		,{'city': 'Vancouver, WA, USA', 'll': '45.6387281,-122.6614861'}
		,{'city': 'Tempe, AZ, USA', 'll': '33.4255104,-111.9400054'}
		,{'city': 'Springfield, MO, USA', 'll': '37.2089572,-93.29229889999999'}
		,{'city': 'Lancaster, CA, USA', 'll': '34.6867846,-118.1541632'}
		,{'city': 'Eugene, OR, USA', 'll': '44.0520691,-123.0867536'}
		,{'city': 'Pembroke Pines, FL, USA', 'll': '26.0122378,-80.3152233'}
		,{'city': 'Salem, OR, USA', 'll': '44.9428975,-123.0350963'}
		,{'city': 'Cape Coral, FL, USA', 'll': '26.5628537,-81.9495331'}
		,{'city': 'Peoria, AZ, USA', 'll': '33.5805955,-112.2373779'}
		,{'city': 'Sioux Falls, SD, USA', 'll': '43.5499749,-96.700327'}
		,{'city': 'Springfield, MA, USA', 'll': '42.1014831,-72.589811'}
		,{'city': 'Elk Grove, CA, USA', 'll': '38.4087993,-121.3716178'}
		,{'city': 'Rockford, IL, USA', 'll': '42.2711311,-89.0939952'}
		,{'city': 'Palmdale, CA, USA', 'll': '34.5794343,-118.1164613'}
		,{'city': 'Corona, CA, USA', 'll': '33.8752935,-117.5664384'}
		,{'city': 'Salinas, CA, USA', 'll': '36.6777372,-121.6555013'}
		,{'city': 'Pomona, CA, USA', 'll': '34.0552267,-117.7523048'}
		,{'city': 'Pasadena, TX, USA', 'll': '29.6910625,-95.2091006'}
		,{'city': 'Joliet, IL, USA', 'll': '41.525031,-88.0817251'}
		,{'city': 'Paterson, NJ, USA', 'll': '40.9167654,-74.17181099999999'}
		,{'city': 'Kansas City, KS, USA', 'll': '39.114053,-94.6274636'}
		,{'city': 'Kansas, IL 61933, USA', 'll': '39.5528129,-87.9394779'}
		,{'city': 'Kansas City, USA', 'll': '39.0653602,-94.5624426'}
		,{'city': 'Torrance, CA, USA', 'll': '33.8358492,-118.3406288'}
		,{'city': 'Syracuse, NY, USA', 'll': '43.0481221,-76.14742439999999'}
		,{'city': 'Syracuse, NY, USA', 'll': '43.114397,-76.2710833'}
		,{'city': 'Bridgeport, CT, USA', 'll': '41.1865478,-73.19517669999999'}
		,{'city': 'Hayward, CA, USA', 'll': '37.6688205,-122.0807964'}
		,{'city': 'Fort Collins, CO, USA', 'll': '40.5852602,-105.084423'}
		,{'city': 'Escondido, CA, USA', 'll': '33.1192068,-117.086421'}
		,{'city': 'Lakewood, CO, USA', 'll': '39.7047095,-105.0813734'}
		,{'city': 'Naperville, IL, USA', 'll': '41.7858629,-88.1472893'}
		,{'city': 'Dayton, OH, USA', 'll': '39.7589478,-84.1916069'}
		,{'city': 'Hollywood, FL, USA', 'll': '26.0112014,-80.1494901'}
		,{'city': 'Sunnyvale, CA, USA', 'll': '37.36883,-122.0363496'}
		,{'city': 'Alexandria, VA, USA', 'll': '38.8048355,-77.0469214'}
		,{'city': 'Mesquite, TX, USA', 'll': '32.76679550000001,-96.5991593'}
		,{'city': 'Hampton, VA, USA', 'll': '37.0298687,-76.34522179999999'}
		,{'city': 'Pasadena, CA, USA', 'll': '34.1477849,-118.1445155'}
		,{'city': 'Orange, CA, USA', 'll': '33.7877944,-117.8531119'}
		,{'city': 'Savannah, GA, USA', 'll': '32.0835407,-81.09983419999999'}
		,{'city': 'Cary, NC, USA', 'll': '35.79154,-78.7811169'}
		,{'city': 'Fullerton, CA, USA', 'll': '33.8702923,-117.925338'}
		,{'city': 'Warren, MI, USA', 'll': '42.49299999999999,-83.02819699999999'}
		,{'city': 'Clarksville, TN, USA', 'll': '36.5297706,-87.3594528'}
		,{'city': 'McKinney, TX, USA', 'll': '33.1972465,-96.6397822'}
		,{'city': 'McAllen, TX, USA', 'll': '26.2034071,-98.23001239999999'}
		,{'city': 'New Haven, CT, USA', 'll': '41.3081527,-72.9281577'}
		,{'city': 'New Haven, CT, USA', 'll': '41.3583849,-72.7570024'}
		,{'city': 'Sterling Heights, MI, USA', 'll': '42.5803122,-83.0302033'}
		,{'city': 'West Valley City, UT, USA', 'll': '40.6916132,-112.0010501'}
		,{'city': 'Columbia, SC, USA', 'll': '34.0007104,-81.0348144'}
		,{'city': 'Killeen, TX, USA', 'll': '31.1171194,-97.72779589999999'}
		,{'city': 'Topeka, KS, USA', 'll': '39.0558235,-95.68901849999999'}
		,{'city': 'Thousand Oaks, CA, USA', 'll': '34.1705609,-118.8375937'}
		,{'city': 'Cedar Rapids, IA, USA', 'll': '41.9778795,-91.6656232'}
		,{'city': 'Olathe, KS, USA', 'll': '38.8813958,-94.81912849999999'}
		,{'city': 'Elizabeth, NJ, USA', 'll': '40.6639916,-74.2107006'}
		,{'city': 'Waco, TX, USA', 'll': '31.549333,-97.1466695'}
		,{'city': 'Hartford, CT, USA', 'll': '41.76371109999999,-72.6850932'}
		,{'city': 'Visalia, CA, USA', 'll': '36.3302284,-119.2920585'}
		,{'city': 'Gainesville, FL, USA', 'll': '29.6516344,-82.32482619999999'}
		,{'city': 'Simi Valley, CA, USA', 'll': '34.2694474,-118.781482'}
		,{'city': 'Stamford, CT, USA', 'll': '41.0534302,-73.5387341'}
		,{'city': 'Bellevue, WA, USA', 'll': '47.610377,-122.2006786'}
		,{'city': 'Bellevue, Washington, DC 20032, USA', 'll': '38.8274243,-77.0089452'}
		,{'city': 'Concord, CA, USA', 'll': '37.9779776,-122.0310733'}
		,{'city': 'Miramar, FL, USA', 'll': '25.9756704,-80.28675009999999'}
		,{'city': 'Coral Springs, FL, USA', 'll': '26.271192,-80.2706044'}
		,{'city': 'Lafayette, LA, USA', 'll': '30.2240897,-92.0198427'}
		,{'city': 'Charleston, SC, USA', 'll': '32.7765656,-79.93092159999999'}
		,{'city': 'Carrollton, TX, USA', 'll': '32.9756415,-96.8899636'}
		,{'city': 'Roseville, CA, USA', 'll': '38.7521235,-121.2880059'}
		,{'city': 'Thornton, CO, USA', 'll': '39.8680412,-104.9719243'}
		,{'city': 'Beaumont, TX, USA', 'll': '30.080174,-94.1265562'}
		,{'city': 'Allentown, PA, USA', 'll': '40.6084305,-75.4901833'}
		,{'city': 'Surprise, AZ, USA', 'll': '33.639099,-112.3957576'}
		,{'city': 'Evansville, IN, USA', 'll': '37.9715592,-87.5710898'}
		,{'city': 'Abilene, TX, USA', 'll': '32.4487364,-99.73314390000002'}
		,{'city': 'Frisco, TX, USA', 'll': '33.1506744,-96.82361159999999'}
		,{'city': 'Independence, MO, USA', 'll': '39.0911161,-94.41550679999999'}
		,{'city': 'Santa Clara, CA, USA', 'll': '37.3541079,-121.9552356'}
		,{'city': 'Springfield, IL, USA', 'll': '39.78172130000001,-89.6501481'}
		,{'city': 'Vallejo, CA, USA', 'll': '38.1040864,-122.2566367'}
		,{'city': 'Victorville, CA, USA', 'll': '34.5361067,-117.2911565'}
		,{'city': 'Athens, GA, USA', 'll': '33.955802,-83.3823656'}
		,{'city': 'Peoria, IL, USA', 'll': '40.6936488,-89.5889864'}
		,{'city': 'Lansing, MI, USA', 'll': '42.732535,-84.5555347'}
		,{'city': 'Lansing Charter Township, MI, USA', 'll': '42.7563594,-84.5283267'}
		,{'city': 'Ann Arbor, MI, USA', 'll': '42.2808256,-83.7430378'}
		,{'city': 'Ann Arbor, MI, USA', 'll': '42.3076493,-83.8473015'}
		,{'city': 'El Monte, CA, USA', 'll': '34.0686206,-118.0275667'}
		,{'city': 'Denton, TX, USA', 'll': '33.2148412,-97.13306829999999'}
		,{'city': 'Berkeley, CA, USA', 'll': '37.8715926,-122.272747'}
		,{'city': 'Provo, UT, USA', 'll': '40.2338438,-111.6585337'}
		,{'city': 'Downey, CA, USA', 'll': '33.94001430000001,-118.1325688'}
		,{'city': 'Midland, TX, USA', 'll': '31.9973456,-102.0779146'}
		,{'city': 'Norman, OK, USA', 'll': '35.2225668,-97.4394777'}
		,{'city': 'Waterbury, CT, USA', 'll': '41.5581525,-73.0514965'}
		,{'city': 'Costa Mesa, CA, USA', 'll': '33.6411316,-117.9186689'}
		,{'city': 'Inglewood, CA, USA', 'll': '33.9616801,-118.3531311'}
		,{'city': 'Manchester, NH, USA', 'll': '42.9956397,-71.4547891'}
		,{'city': 'Murfreesboro, TN, USA', 'll': '35.8456213,-86.39027'}
		,{'city': 'Columbia, MO, USA', 'll': '38.9517053,-92.3340724'}
		,{'city': 'Elgin, IL, USA', 'll': '42.0372487,-88.2811895'}
		,{'city': 'Clearwater, FL, USA', 'll': '27.9658533,-82.8001026'}
		,{'city': 'Miami Gardens, FL, USA', 'll': '25.9420377,-80.2456045'}
		,{'city': 'Rochester, MN, USA', 'll': '44.0216306,-92.4698992'}
		,{'city': 'Pueblo, CO, USA', 'll': '38.2544472,-104.6091409'}
		,{'city': 'Lowell, MA, USA', 'll': '42.6334247,-71.31617179999999'}
		,{'city': 'Wilmington, NC, USA', 'll': '34.2257255,-77.9447102'}
		,{'city': 'Ventura, CA, USA', 'll': '34.2746405,-119.2290053'}
		,{'city': 'Arvada, CO, USA', 'll': '39.8027644,-105.0874842'}
		,{'city': 'Westminster, CO, USA', 'll': '39.8366528,-105.0372046'}
		,{'city': 'West Covina, CA, USA', 'll': '34.0686208,-117.9389526'}
		,{'city': 'Gresham, OR, USA', 'll': '45.5001357,-122.4302013'}
		,{'city': 'Norwalk, CA, USA', 'll': '33.9022367,-118.081733'}
		,{'city': 'Fargo, ND, USA', 'll': '46.8771863,-96.7898034'}
		,{'city': 'Carlsbad, CA, USA', 'll': '33.1580933,-117.3505939'}
		,{'city': 'Fairfield, CA, USA', 'll': '38.24935809999999,-122.0399663'}
		,{'city': 'Cambridge, MA, USA', 'll': '42.3726399,-71.10965279999999'}
		,{'city': 'Wichita Falls, TX, USA', 'll': '33.9137085,-98.4933873'}
		,{'city': 'High Point, NC, USA', 'll': '35.9556923,-80.0053176'}
		,{'city': 'Billings, Mt, USA', 'll': '45.7832856,-108.5006904'}
		,{'city': 'Green Bay, WI, USA', 'll': '44.51915899999999,-88.019826'}
		,{'city': 'West Jordan, UT, USA', 'll': '40.6096698,-111.9391031'}
		,{'city': 'Richmond, CA, USA', 'll': '37.9357576,-122.3477486'}
		,{'city': 'Murrieta, CA, USA', 'll': '33.5539143,-117.2139232'}
		,{'city': 'Burbank, CA, USA', 'll': '34.1808392,-118.3089661'}
		,{'city': 'Burbank, CA, USA', 'll': '37.3205556,-121.9316667'}
		,{'city': 'Palm Bay, FL, USA', 'll': '28.0344621,-80.5886646'}
		,{'city': 'Everett, WA, USA', 'll': '47.9789848,-122.2020794'}
		,{'city': 'Flint, MI, USA', 'll': '43.0125274,-83.6874562'}
		,{'city': 'Flint, MI, USA', 'll': '43.0777289,-83.67739279999999'}
		,{'city': 'Antioch, CA, USA', 'll': '38.0049214,-121.805789'}
		,{'city': 'Erie, PA, USA', 'll': '42.12922409999999,-80.085059'}
		,{'city': 'Erie, USA', 'll': '42.0366785,-80.0087746'}
		,{'city': 'South Bend, IN, USA', 'll': '41.6833813,-86.25000659999999'}
		,{'city': 'Daly City, CA, USA', 'll': '37.6879241,-122.4702079'}
		,{'city': 'Centennial, CO, USA', 'll': '39.5807452,-104.8771726'}
		,{'city': 'Temecula, CA, USA', 'll': '33.4936391,-117.1483648'}
	];

// Top 1000 US Cities
// Source: http://www.world-gazetteer.com/wg.php?x=&men=gcis&lng=en&des=wg&geo=-223&srt=npan&col=abcdefghinoq&msz=1500&pt=c&va=x
var cities1000 = 
	[
	  "Abilene, Texas"
	 ,"Akron, Ohio"
	 ,"Alafaya, Florida"
	 ,"Alameda, California"
	 ,"Albany, New York"
	 ,"Albany, Georgia"
	 ,"Albany, Oregon"
	 ,"Albuquerque, New Mexico"
	 ,"Alexandria, Virginia"
	 ,"Alexandria, Louisiana"
	 ,"Alhambra, California"
	 ,"Aliso Viejo, California"
	 ,"Allen, Texas"
	 ,"Allentown, Pennsylvania"
	 ,"Aloha, Oregon"
	 ,"Alpharetta, Georgia"
	 ,"Altadena, California"
	 ,"Altamonte Springs, Florida"
	 ,"Altoona, Pennsylvania"
	 ,"Amarillo, Texas"
	 ,"Ames, Iowa"
	 ,"Anaheim, California"
	 ,"Anchorage, Alaska"
	 ,"Anderson, Indiana"
	 ,"Ankeny, Iowa"
	 ,"Ann Arbor, Michigan"
	 ,"Antelope, California"
	 ,"Antioch, California"
	 ,"Apache Junction, Arizona"
	 ,"Apex, North Carolina"
	 ,"Apopka, Florida"
	 ,"Appleton, Wisconsin"
	 ,"Apple Valley, California"
	 ,"Apple Valley, Minnesota"
	 ,"Arcadia, California"
	 ,"Arden-Arcade, California"
	 ,"Arlington, Texas"
	 ,"Arlington, Virginia"
	 ,"Arlington, Massachusetts"
	 ,"Arlington Heights, Illinois"
	 ,"Arvada, Colorado"
	 ,"Ashburn, Virginia"
	 ,"Asheville, North Carolina"
	 ,"Aspen Hill, Maryland"
	 ,"Atascocita, Texas"
	 ,"Athens-Clarke, Georgia"
	 ,"Atlanta, Georgia"
	 ,"Attleboro, Massachusetts"
	 ,"Auburn, Washington"
	 ,"Auburn, Alabama"
	 ,"Augusta-Richmond, Georgia"
	 ,"Aurora, Colorado"
	 ,"Aurora, Illinois"
	 ,"Austin, Texas"
	 ,"Avondale, Arizona"
	 ,"Azusa, California"
	 ,"Bakersfield, California"
	 ,"Baldwin Park, California"
	 ,"Baltimore, Maryland"
	 ,"Barnstable Town, Massachusetts"
	 ,"Bartlett, Tennessee"
	 ,"Bartlett, Illinois"
	 ,"Baton Rouge, Louisiana"
	 ,"Battle Creek, Michigan"
	 ,"Bayonne, New Jersey"
	 ,"Baytown, Texas"
	 ,"Beaumont, Texas"
	 ,"Beaumont, California"
	 ,"Beavercreek, Ohio"
	 ,"Beaverton, Oregon"
	 ,"Bedford, Texas"
	 ,"Bel Air South, Maryland"
	 ,"Belleville, Illinois"
	 ,"Bellevue, Washington"
	 ,"Bellevue, Nebraska"
	 ,"Bellflower, California"
	 ,"Bell Gardens, California"
	 ,"Bellingham, Washington"
	 ,"Bend, Oregon"
	 ,"Berkeley, California"
	 ,"Berwyn, Illinois"
	 ,"Bethesda, Maryland"
	 ,"Bethlehem, Pennsylvania"
	 ,"Billerica, Massachusetts"
	 ,"Billings, Montana"
	 ,"Biloxi, Mississippi"
	 ,"Binghamton, New York"
	 ,"Birmingham, Alabama"
	 ,"Bismarck, North Dakota"
	 ,"Blacksburg, Virginia"
	 ,"Blaine, Minnesota"
	 ,"Bloomington, Minnesota"
	 ,"Bloomington, Indiana"
	 ,"Bloomington, Illinois"
	 ,"Blue Springs, Missouri"
	 ,"Boca Raton, Florida"
	 ,"Boise City, Idaho"
	 ,"Bolingbrook, Illinois"
	 ,"Bonita Springs, Florida"
	 ,"Bossier City, Louisiana"
	 ,"Boston, Massachusetts"
	 ,"Boulder, Colorado"
	 ,"Bountiful, Utah"
	 ,"Bowie, Maryland"
	 ,"Bowling Green, Kentucky"
	 ,"Boynton Beach, Florida"
	 ,"Bradenton, Florida"
	 ,"Brandon, Florida"
	 ,"Brentwood, New York"
	 ,"Brentwood, California"
	 ,"Bridgeport, Connecticut"
	 ,"Bristol, Connecticut"
	 ,"Brockton, Massachusetts"
	 ,"Broken Arrow, Oklahoma"
	 ,"Brookline, Massachusetts"
	 ,"Brooklyn Park, Minnesota"
	 ,"Broomfield, Colorado"
	 ,"Brownsville, Texas"
	 ,"Bryan, Texas"
	 ,"Buckeye, Arizona"
	 ,"Buena Park, California"
	 ,"Buffalo, New York"
	 ,"Buffalo Grove, Illinois"
	 ,"Bullhead City, Arizona"
	 ,"Burbank, California"
	 ,"Burlington, North Carolina"
	 ,"Burlington, Vermont"
	 ,"Burnsville, Minnesota"
	 ,"Caldwell, Idaho"
	 ,"Calexico, California"
	 ,"Camarillo, California"
	 ,"Cambridge, Massachusetts"
	 ,"Camden, New Jersey"
	 ,"Canton, Ohio"
	 ,"Cape Coral, Florida"
	 ,"Carlsbad, California"
	 ,"Carmel, Indiana"
	 ,"Carmichael, California"
	 ,"Carrollton, Texas"
	 ,"Carson, California"
	 ,"Carson, Nevada"
	 ,"Cary, North Carolina"
	 ,"Casa Grande, Arizona"
	 ,"Casas Adobes, Arizona"
	 ,"Casper, Wyoming"
	 ,"Castle Rock, Colorado"
	 ,"Castro Valley, California"
	 ,"Catalina Foothills, Arizona"
	 ,"Cathedral City, California"
	 ,"Catonsville, Maryland"
	 ,"Cedar Hill, Texas"
	 ,"Cedar Park, Texas"
	 ,"Cedar Rapids, Iowa"
	 ,"Centennial, Colorado"
	 ,"Centerville, Ohio"
	 ,"Centreville, Virginia"
	 ,"Ceres, California"
	 ,"Cerritos, California"
	 ,"Champaign, Illinois"
	 ,"Chandler, Arizona"
	 ,"Chapel Hill, North Carolina"
	 ,"Charleston, South Carolina"
	 ,"Charleston, West Virginia"
	 ,"Charlotte, North Carolina"
	 ,"Charlottesville, Virginia"
	 ,"Chattanooga, Tennessee"
	 ,"Cheektowaga, New York"
	 ,"Chesapeake, Virginia"
	 ,"Chesterfield, Missouri"
	 ,"Cheyenne, Wyoming"
	 ,"Chicago, Illinois"
	 ,"Chico, California"
	 ,"Chicopee, Massachusetts"
	 ,"Chino, California"
	 ,"Chino Hills, California"
	 ,"Chula Vista, California"
	 ,"Cicero, Illinois"
	 ,"Cincinnati, Ohio"
	 ,"Citrus Heights, California"
	 ,"Clarksville, Tennessee"
	 ,"Clearwater, Florida"
	 ,"Cleveland, Ohio"
	 ,"Cleveland, Tennessee"
	 ,"Cleveland Heights, Ohio"
	 ,"Clifton, New Jersey"
	 ,"Clovis, California"
	 ,"Coachella, California"
	 ,"Coconut Creek, Florida"
	 ,"Coeur d'Alene, Idaho"
	 ,"College Station, Texas"
	 ,"Collierville, Tennessee"
	 ,"Colorado Springs, Colorado"
	 ,"Colton, California"
	 ,"Columbia, South Carolina"
	 ,"Columbia, Missouri"
	 ,"Columbia, Maryland"
	 ,"Columbus, Ohio"
	 ,"Columbus, Georgia"
	 ,"Columbus, Indiana"
	 ,"Commerce City, Colorado"
	 ,"Compton, California"
	 ,"Concord, California"
	 ,"Concord, North Carolina"
	 ,"Concord, New Hampshire"
	 ,"Conroe, Texas"
	 ,"Conway, Arkansas"
	 ,"Coon Rapids, Minnesota"
	 ,"Coral Gables, Florida"
	 ,"Coral Springs, Florida"
	 ,"Corona, California"
	 ,"Corpus Christi, Texas"
	 ,"Corvallis, Oregon"
	 ,"Costa Mesa, California"
	 ,"Council Bluffs, Iowa"
	 ,"Country Club, Florida"
	 ,"Covina, California"
	 ,"Cranston, Rhode Island"
	 ,"Crystal Lake, Illinois"
	 ,"Cupertino, California"
	 ,"Cutler Bay, Florida"
	 ,"Cuyahoga Falls, Ohio"
	 ,"Cypress, California"
	 ,"Dale City, Virginia"
	 ,"Dallas, Texas"
	 ,"Daly City, California"
	 ,"Danbury, Connecticut"
	 ,"Danville, California"
	 ,"Danville, Virginia"
	 ,"Davenport, Iowa"
	 ,"Davie, Florida"
	 ,"Davis, California"
	 ,"Dayton, Ohio"
	 ,"Daytona Beach, Florida"
	 ,"Dearborn, Michigan"
	 ,"Dearborn Heights, Michigan"
	 ,"Decatur, Illinois"
	 ,"Decatur, Alabama"
	 ,"Deerfield Beach, Florida"
	 ,"DeKalb, Illinois"
	 ,"Delano, California"
	 ,"Delray Beach, Florida"
	 ,"Deltona, Florida"
	 ,"Denton, Texas"
	 ,"Denver, Colorado"
	 ,"Des Moines, Iowa"
	 ,"DeSoto, Texas"
	 ,"Des Plaines, Illinois"
	 ,"Detroit, Michigan"
	 ,"Diamond Bar, California"
	 ,"Doral, Florida"
	 ,"Dothan, Alabama"
	 ,"Downers Grove, Illinois"
	 ,"Downey, California"
	 ,"Draper, Utah"
	 ,"Dublin, California"
	 ,"Dublin, Ohio"
	 ,"Dubuque, Iowa"
	 ,"Duluth, Minnesota"
	 ,"Dundalk, Maryland"
	 ,"Dunwoody, Georgia"
	 ,"Durham, North Carolina"
	 ,"Eagan, Minnesota"
	 ,"East Hartford, Connecticut"
	 ,"East Honolulu, Hawaii"
	 ,"East Lansing, Michigan"
	 ,"East Los Angeles, California"
	 ,"East Orange, New Jersey"
	 ,"East Providence, Rhode Island"
	 ,"Eastvale, California"
	 ,"Eau Claire, Wisconsin"
	 ,"Eden Prairie, Minnesota"
	 ,"Edina, Minnesota"
	 ,"Edinburg, Texas"
	 ,"Edmond, Oklahoma"
	 ,"El Cajon, California"
	 ,"El Centro, California"
	 ,"El Dorado Hills, California"
	 ,"Elgin, Illinois"
	 ,"Elizabeth, New Jersey"
	 ,"Elk Grove, California"
	 ,"Elkhart, Indiana"
	 ,"Ellicott City, Maryland"
	 ,"Elmhurst, Illinois"
	 ,"El Monte, California"
	 ,"El Paso, Texas"
	 ,"Elyria, Ohio"
	 ,"Encinitas, California"
	 ,"Enid, Oklahoma"
	 ,"Enterprise, Nevada"
	 ,"Erie, Pennsylvania"
	 ,"Escondido, California"
	 ,"Euclid, Ohio"
	 ,"Eugene, Oregon"
	 ,"Euless, Texas"
	 ,"Evanston, Illinois"
	 ,"Evansville, Indiana"
	 ,"Everett, Washington"
	 ,"Everett, Massachusetts"
	 ,"Fairfield, California"
	 ,"Fairfield, Ohio"
	 ,"Fall River, Massachusetts"
	 ,"Fargo, North Dakota"
	 ,"Farmington, New Mexico"
	 ,"Farmington Hills, Michigan"
	 ,"Fayetteville, North Carolina"
	 ,"Fayetteville, Arkansas"
	 ,"Federal Way, Washington"
	 ,"Findlay, Ohio"
	 ,"Fishers, Indiana"
	 ,"Flagstaff, Arizona"
	 ,"Flint, Michigan"
	 ,"Florence-Graham, California"
	 ,"Florin, California"
	 ,"Florissant, Missouri"
	 ,"Flower Mound, Texas"
	 ,"Folsom, California"
	 ,"Fond du Lac, Wisconsin"
	 ,"Fontana, California"
	 ,"Fort Collins, Colorado"
	 ,"Fort Lauderdale, Florida"
	 ,"Fort Myers, Florida"
	 ,"Fort Pierce, Florida"
	 ,"Fort Smith, Arkansas"
	 ,"Fort Wayne, Indiana"
	 ,"Fort Worth, Texas"
	 ,"Fountainebleau, Florida"
	 ,"Fountain Valley, California"
	 ,"Framingham, Massachusetts"
	 ,"Franklin, Tennessee"
	 ,"Frederick, Maryland"
	 ,"Freeport, New York"
	 ,"Fremont, California"
	 ,"Fresno, California"
	 ,"Frisco, Texas"
	 ,"Fullerton, California"
	 ,"Gainesville, Florida"
	 ,"Gaithersburg, Maryland"
	 ,"Galveston, Texas"
	 ,"Gardena, California"
	 ,"Garden Grove, California"
	 ,"Garland, Texas"
	 ,"Gary, Indiana"
	 ,"Gastonia, North Carolina"
	 ,"Georgetown, Texas"
	 ,"Germantown, Maryland"
	 ,"Gilbert, Arizona"
	 ,"Gilroy, California"
	 ,"Glen Burnie, Maryland"
	 ,"Glendale, Arizona"
	 ,"Glendale, California"
	 ,"Glendora, California"
	 ,"Glenview, Illinois"
	 ,"Goodyear, Arizona"
	 ,"Grand Forks, North Dakota"
	 ,"Grand Island, Nebraska"
	 ,"Grand Junction, Colorado"
	 ,"Grand Prairie, Texas"
	 ,"Grand Rapids, Michigan"
	 ,"Grapevine, Texas"
	 ,"Great Falls, Montana"
	 ,"Greeley, Colorado"
	 ,"Green Bay, Wisconsin"
	 ,"Greensboro, North Carolina"
	 ,"Greenville, North Carolina"
	 ,"Greenville, South Carolina"
	 ,"Greenwood, Indiana"
	 ,"Gresham, Oregon"
	 ,"Gulfport, Mississippi"
	 ,"Hacienda Heights, California"
	 ,"Hackensack, New Jersey"
	 ,"Haltom City, Texas"
	 ,"Hamilton, Ohio"
	 ,"Hammond, Indiana"
	 ,"Hampton, Virginia"
	 ,"Hanford, California"
	 ,"Harlingen, Texas"
	 ,"Harrisburg, Pennsylvania"
	 ,"Harrisonburg, Virginia"
	 ,"Hartford, Connecticut"
	 ,"Hattiesburg, Mississippi"
	 ,"Haverhill, Massachusetts"
	 ,"Hawthorne, California"
	 ,"Hayward, California"
	 ,"Hemet, California"
	 ,"Hempstead, New York"
	 ,"Henderson, Nevada"
	 ,"Hendersonville, Tennessee"
	 ,"Hesperia, California"
	 ,"Hialeah, Florida"
	 ,"Hicksville, New York"
	 ,"Highland, California"
	 ,"Highlands Ranch, Colorado"
	 ,"High Point, North Carolina"
	 ,"Hillsboro, Oregon"
	 ,"Hilo, Hawaii"
	 ,"Hoboken, New Jersey"
	 ,"Hoffman Estates, Illinois"
	 ,"Hollywood, Florida"
	 ,"Homestead, Florida"
	 ,"Honolulu, Hawaii"
	 ,"Hoover, Alabama"
	 ,"Houston, Texas"
	 ,"Huntersville, North Carolina"
	 ,"Huntington, West Virginia"
	 ,"Huntington Beach, California"
	 ,"Huntington Park, California"
	 ,"Huntsville, Alabama"
	 ,"Hutchinson, Kansas"
	 ,"Idaho Falls, Idaho"
	 ,"Independence, Missouri"
	 ,"Indianapolis, Indiana"
	 ,"Indio, California"
	 ,"Inglewood, California"
	 ,"Iowa City, Iowa"
	 ,"Irondequoit, New York"
	 ,"Irvine, California"
	 ,"Irving, Texas"
	 ,"Jackson, Mississippi"
	 ,"Jackson, Tennessee"
	 ,"Jacksonville, Florida"
	 ,"Jacksonville, North Carolina"
	 ,"Janesville, Wisconsin"
	 ,"Jefferson City, Missouri"
	 ,"Jeffersonville, Indiana"
	 ,"Jersey City, New Jersey"
	 ,"Johns Creek, Georgia"
	 ,"Johnson City, Tennessee"
	 ,"Joliet, Illinois"
	 ,"Jonesboro, Arkansas"
	 ,"Joplin, Missouri"
	 ,"Jupiter, Florida"
	 ,"Kalamazoo, Michigan"
	 ,"Kannapolis, North Carolina"
	 ,"Kansas City, Missouri"
	 ,"Kansas City, Kansas"
	 ,"Kearny, New Jersey"
	 ,"Keller, Texas"
	 ,"Kendale Lakes, Florida"
	 ,"Kendall, Florida"
	 ,"Kenner, Louisiana"
	 ,"Kennewick, Washington"
	 ,"Kenosha, Wisconsin"
	 ,"Kent, Washington"
	 ,"Kentwood, Michigan"
	 ,"Kettering, Ohio"
	 ,"Killeen, Texas"
	 ,"Kingsport, Tennessee"
	 ,"Kirkland, Washington"
	 ,"Kissimmee, Florida"
	 ,"Knoxville, Tennessee"
	 ,"Kokomo, Indiana"
	 ,"Lacey, Washington"
	 ,"La Crosse, Wisconsin"
	 ,"Lafayette, Louisiana"
	 ,"Lafayette, Indiana"
	 ,"Laguna Niguel, California"
	 ,"La Habra, California"
	 ,"Lake Charles, Louisiana"
	 ,"Lake Elsinore, California"
	 ,"Lake Forest, California"
	 ,"Lake Havasu City, Arizona"
	 ,"Lakeland, Florida"
	 ,"Lake Ridge, Virginia"
	 ,"Lakeville, Minnesota"
	 ,"Lakewood, Colorado"
	 ,"Lakewood, California"
	 ,"Lakewood, Washington"
	 ,"Lakewood, New Jersey"
	 ,"Lakewood, Ohio"
	 ,"La Mesa, California"
	 ,"La Mirada, California"
	 ,"Lancaster, California"
	 ,"Lancaster, Pennsylvania"
	 ,"Lansing, Michigan"
	 ,"La Quinta, California"
	 ,"Laredo, Texas"
	 ,"Largo, Florida"
	 ,"Las Cruces, New Mexico"
	 ,"Las Vegas, Nevada"
	 ,"Lauderhill, Florida"
	 ,"Lawrence, Kansas"
	 ,"Lawrence, Massachusetts"
	 ,"Lawrence, Indiana"
	 ,"Lawton, Oklahoma"
	 ,"Layton, Utah"
	 ,"League City, Texas"
	 ,"Leesburg, Virginia"
	 ,"Lee's Summit, Missouri"
	 ,"Lehi, Utah"
	 ,"Lehigh Acres, Florida"
	 ,"Lenexa, Kansas"
	 ,"Levittown, Pennsylvania"
	 ,"Levittown, New York"
	 ,"Lewisville, Texas"
	 ,"Lexington, Kentucky"
	 ,"Lincoln, Nebraska"
	 ,"Lincoln, California"
	 ,"Linton Hall, Virginia"
	 ,"Little Rock, Arkansas"
	 ,"Littleton, Colorado"
	 ,"Livermore, California"
	 ,"Livonia, Michigan"
	 ,"Lodi, California"
	 ,"Logan, Utah"
	 ,"Lombard, Illinois"
	 ,"Lompoc, California"
	 ,"Long Beach, California"
	 ,"Longmont, Colorado"
	 ,"Longview, Texas"
	 ,"Lorain, Ohio"
	 ,"Los Angeles, California"
	 ,"Louisville, Kentucky"
	 ,"Loveland, Colorado"
	 ,"Lowell, Massachusetts"
	 ,"Lubbock, Texas"
	 ,"Lynchburg, Virginia"
	 ,"Lynn, Massachusetts"
	 ,"Lynwood, California"
	 ,"MacAllen, Texas"
	 ,"MacKinney, Texas"
	 ,"MacLean, Virginia"
	 ,"Macon, Georgia"
	 ,"Madera, California"
	 ,"Madison, Wisconsin"
	 ,"Madison, Alabama"
	 ,"Malden, Massachusetts"
	 ,"Manchester, New Hampshire"
	 ,"Manhattan, Kansas"
	 ,"Mansfield, Texas"
	 ,"Mansfield, Ohio"
	 ,"Manteca, California"
	 ,"Maple Grove, Minnesota"
	 ,"Margate, Florida"
	 ,"Maricopa, Arizona"
	 ,"Marietta, Georgia"
	 ,"Marysville, Washington"
	 ,"Medford, Oregon"
	 ,"Medford, Massachusetts"
	 ,"Melbourne, Florida"
	 ,"Memphis, Tennessee"
	 ,"Menifee, California"
	 ,"Mentor, Ohio"
	 ,"Merced, California"
	 ,"Meriden, Connecticut"
	 ,"Meridian, Idaho"
	 ,"Meridian, Mississippi"
	 ,"Mesa, Arizona"
	 ,"Mesquite, Texas"
	 ,"Metairie, Louisiana"
	 ,"Methuen, Massachusetts"
	 ,"Methuen Town, Massachusetts"
	 ,"Miami, Florida"
	 ,"Miami Beach, Florida"
	 ,"Miami Gardens, Florida"
	 ,"Middletown, Ohio"
	 ,"Middletown, Connecticut"
	 ,"Midland, Texas"
	 ,"Midland, Michigan"
	 ,"Midwest City, Oklahoma"
	 ,"Milford, Connecticut"
	 ,"Millcreek, Utah"
	 ,"Milpitas, California"
	 ,"Milwaukee, Wisconsin"
	 ,"Minneapolis, Minnesota"
	 ,"Minnetonka, Minnesota"
	 ,"Minot, North Dakota"
	 ,"Miramar, Florida"
	 ,"Mishawaka, Indiana"
	 ,"Mission, Texas"
	 ,"Mission Viejo, California"
	 ,"Missoula, Montana"
	 ,"Missouri City, Texas"
	 ,"Mobile, Alabama"
	 ,"Modesto, California"
	 ,"Moline, Illinois"
	 ,"Monroe, Louisiana"
	 ,"Montebello, California"
	 ,"Monterey Park, California"
	 ,"Montgomery, Alabama"
	 ,"Moore, Oklahoma"
	 ,"Moreno Valley, California"
	 ,"Mountain View, California"
	 ,"Mount Pleasant, South Carolina"
	 ,"Mount Prospect, Illinois"
	 ,"Mount Vernon, New York"
	 ,"Muncie, Indiana"
	 ,"Murfreesboro, Tennessee"
	 ,"Murray, Utah"
	 ,"Murrieta, California"
	 ,"Nampa, Idaho"
	 ,"Napa, California"
	 ,"Naperville, Illinois"
	 ,"Nashua, New Hampshire"
	 ,"Nashville, Tennessee"
	 ,"National City, California"
	 ,"Newark, New Jersey"
	 ,"Newark, Ohio"
	 ,"Newark, California"
	 ,"New Bedford, Massachusetts"
	 ,"New Braunfels, Texas"
	 ,"New Britain, Connecticut"
	 ,"New Brunswick, New Jersey"
	 ,"New Haven, Connecticut"
	 ,"New Orleans, Louisiana"
	 ,"Newport Beach, California"
	 ,"Newport News, Virginia"
	 ,"New Rochelle, New York"
	 ,"Newton, Massachusetts"
	 ,"New York, New York"
	 ,"Niagara Falls, New York"
	 ,"Noblesville, Indiana"
	 ,"Norfolk, Virginia"
	 ,"Normal, Illinois"
	 ,"Norman, Oklahoma"
	 ,"North Atlanta, Georgia"
	 ,"North Attleborough, Massachusetts"
	 ,"North Bethesda, Maryland"
	 ,"North Charleston, South Carolina"
	 ,"North Highlands, California"
	 ,"North Las Vegas, Nevada"
	 ,"North Lauderdale, Florida"
	 ,"North Little Rock, Arkansas"
	 ,"North Miami, Florida"
	 ,"North Miami Beach, Florida"
	 ,"North Port, Florida"
	 ,"North Richland Hills, Texas"
	 ,"Norwalk, California"
	 ,"Norwalk, Connecticut"
	 ,"Norwich, Connecticut"
	 ,"Novato, California"
	 ,"Novi, Michigan"
	 ,"Oakland, California"
	 ,"Oakland Park, Florida"
	 ,"Oak Lawn, Illinois"
	 ,"Oak Park, Illinois"
	 ,"Ocala, Florida"
	 ,"Oceanside, California"
	 ,"Odenton, Maryland"
	 ,"Odessa, Texas"
	 ,"O'Fallon, Missouri"
	 ,"Ogden, Utah"
	 ,"Oklahoma City, Oklahoma"
	 ,"Olathe, Kansas"
	 ,"Olympia, Washington"
	 ,"Omaha, Nebraska"
	 ,"Ontario, California"
	 ,"Orange, California"
	 ,"Orem, Utah"
	 ,"Orlando, Florida"
	 ,"Orland Park, Illinois"
	 ,"Oro Valley, Arizona"
	 ,"Oshkosh, Wisconsin"
	 ,"Overland Park, Kansas"
	 ,"Owensboro, Kentucky"
	 ,"Oxnard, California"
	 ,"Palatine, Illinois"
	 ,"Palm Bay, Florida"
	 ,"Palm Beach Gardens, Florida"
	 ,"Palm Coast, Florida"
	 ,"Palmdale, California"
	 ,"Palm Desert, California"
	 ,"Palm Harbor, Florida"
	 ,"Palm Springs, California"
	 ,"Palo Alto, California"
	 ,"Paradise, Nevada"
	 ,"Paramount, California"
	 ,"Parker, Colorado"
	 ,"Parma, Ohio"
	 ,"Pasadena, Texas"
	 ,"Pasadena, California"
	 ,"Pasco, Washington"
	 ,"Passaic, New Jersey"
	 ,"Paterson, New Jersey"
	 ,"Pawtucket, Rhode Island"
	 ,"Peabody, Massachusetts"
	 ,"Pearland, Texas"
	 ,"Pearl City, Hawaii"
	 ,"Pembroke Pines, Florida"
	 ,"Pensacola, Florida"
	 ,"Peoria, Arizona"
	 ,"Peoria, Illinois"
	 ,"Perris, California"
	 ,"Perth Amboy, New Jersey"
	 ,"Petaluma, California"
	 ,"Pflugerville, Texas"
	 ,"Pharr, Texas"
	 ,"Philadelphia, Pennsylvania"
	 ,"Phoenix, Arizona"
	 ,"Pico Rivera, California"
	 ,"Pine Bluff, Arkansas"
	 ,"Pine Hills, Florida"
	 ,"Pinellas Park, Florida"
	 ,"Pittsburg, California"
	 ,"Pittsburgh, Pennsylvania"
	 ,"Pittsfield, Massachusetts"
	 ,"Placentia, California"
	 ,"Plainfield, New Jersey"
	 ,"Plainfield, Illinois"
	 ,"Plano, Texas"
	 ,"Plantation, Florida"
	 ,"Pleasanton, California"
	 ,"Plymouth, Minnesota"
	 ,"Pocatello, Idaho"
	 ,"Poinciana, Florida"
	 ,"Pomona, California"
	 ,"Pompano Beach, Florida"
	 ,"Pontiac, Michigan"
	 ,"Portage, Michigan"
	 ,"Port Arthur, Texas"
	 ,"Port Charlotte, Florida"
	 ,"Porterville, California"
	 ,"Portland, Oregon"
	 ,"Portland, Maine"
	 ,"Port Orange, Florida"
	 ,"Port Saint Lucie, Florida"
	 ,"Portsmouth, Virginia"
	 ,"Potomac, Maryland"
	 ,"Poway, California"
	 ,"Prescott, Arizona"
	 ,"Prescott Valley, Arizona"
	 ,"Providence, Rhode Island"
	 ,"Provo, Utah"
	 ,"Pueblo, Colorado"
	 ,"Quincy, Massachusetts"
	 ,"Racine, Wisconsin"
	 ,"Raleigh, North Carolina"
	 ,"Rancho Cordova, California"
	 ,"Rancho Cucamonga, California"
	 ,"Rancho Palos Verdes, California"
	 ,"Rancho Santa Margarita, California"
	 ,"Rapid City, South Dakota"
	 ,"Reading, Pennsylvania"
	 ,"Redding, California"
	 ,"Redlands, California"
	 ,"Redmond, Washington"
	 ,"Redondo Beach, California"
	 ,"Redwood City, California"
	 ,"Reno, Nevada"
	 ,"Renton, Washington"
	 ,"Reston, Virginia"
	 ,"Revere, Massachusetts"
	 ,"Rialto, California"
	 ,"Richardson, Texas"
	 ,"Richland, Washington"
	 ,"Richmond, Virginia"
	 ,"Richmond, California"
	 ,"Rio Rancho, New Mexico"
	 ,"Riverside, California"
	 ,"Riverton, Utah"
	 ,"Riverview, Florida"
	 ,"Roanoke, Virginia"
	 ,"Rochester, New York"
	 ,"Rochester, Minnesota"
	 ,"Rochester Hills, Michigan"
	 ,"Rockford, Illinois"
	 ,"Rock Hill, South Carolina"
	 ,"Rocklin, California"
	 ,"Rockville, Maryland"
	 ,"Rockwall, Texas"
	 ,"Rocky Mount, North Carolina"
	 ,"Rogers, Arkansas"
	 ,"Rohnert Park, California"
	 ,"Romeoville, Illinois"
	 ,"Rosemead, California"
	 ,"Roseville, California"
	 ,"Roseville, Michigan"
	 ,"Roswell, Georgia"
	 ,"Roswell, New Mexico"
	 ,"Round Rock, Texas"
	 ,"Rowland Heights, California"
	 ,"Rowlett, Texas"
	 ,"Royal Oak, Michigan"
	 ,"Sacramento, California"
	 ,"Saginaw, Michigan"
	 ,"Saint Charles, Missouri"
	 ,"Saint Clair Shores, Michigan"
	 ,"Saint Cloud, Minnesota"
	 ,"Saint George, Utah"
	 ,"Saint Joseph, Missouri"
	 ,"Saint Louis, Missouri"
	 ,"Saint Louis Park, Minnesota"
	 ,"Saint Paul, Minnesota"
	 ,"Saint Peters, Missouri"
	 ,"Saint Petersburg, Florida"
	 ,"Salem, Oregon"
	 ,"Salem, Massachusetts"
	 ,"Salina, Kansas"
	 ,"Salinas, California"
	 ,"Salt Lake City, Utah"
	 ,"Sammamish, Washington"
	 ,"San Angelo, Texas"
	 ,"San Antonio, Texas"
	 ,"San Bernardino, California"
	 ,"San Bruno, California"
	 ,"San Buenaventura, California"
	 ,"San Clemente, California"
	 ,"San Diego, California"
	 ,"Sandy, Utah"
	 ,"Sandy Springs, Georgia"
	 ,"Sanford, Florida"
	 ,"San Francisco, California"
	 ,"San Jacinto, California"
	 ,"San Jose, California"
	 ,"San Leandro, California"
	 ,"San Luis Obispo, California"
	 ,"San Marcos, California"
	 ,"San Marcos, Texas"
	 ,"San Mateo, California"
	 ,"San Rafael, California"
	 ,"San Ramon, California"
	 ,"Santa Ana, California"
	 ,"Santa Barbara, California"
	 ,"Santa Clara, California"
	 ,"Santa Clarita, California"
	 ,"Santa Cruz, California"
	 ,"Santa Fe, New Mexico"
	 ,"Santa Maria, California"
	 ,"Santa Monica, California"
	 ,"San Tan Valley, Arizona"
	 ,"Santa Rosa, California"
	 ,"Santee, California"
	 ,"Sarasota, Florida"
	 ,"Savannah, Georgia"
	 ,"Sayreville, New Jersey"
	 ,"Schaumburg, Illinois"
	 ,"Schenectady, New York"
	 ,"Scottsdale, Arizona"
	 ,"Scranton, Pennsylvania"
	 ,"Seattle, Washington"
	 ,"Severn, Maryland"
	 ,"Shakopee, Minnesota"
	 ,"Shawnee, Kansas"
	 ,"Sheboygan, Wisconsin"
	 ,"Shoreline, Washington"
	 ,"Shreveport, Louisiana"
	 ,"Sierra Vista, Arizona"
	 ,"Silver Spring, Maryland"
	 ,"Simi Valley, California"
	 ,"Sioux City, Iowa"
	 ,"Sioux Falls, South Dakota"
	 ,"Skokie, Illinois"
	 ,"Smyrna, Georgia"
	 ,"Smyrna, Tennessee"
	 ,"Somerville, Massachusetts"
	 ,"Southaven, Mississippi"
	 ,"South Bend, Indiana"
	 ,"Southfield, Michigan"
	 ,"South Gate, California"
	 ,"South Hill, Washington"
	 ,"South Jordan, Utah"
	 ,"South San Francisco, California"
	 ,"South Valley, New Mexico"
	 ,"South Whittier, California"
	 ,"Sparks, Nevada"
	 ,"Spokane, Washington"
	 ,"Spokane Valley, Washington"
	 ,"Spring, Texas"
	 ,"Springdale, Arkansas"
	 ,"Springfield, Missouri"
	 ,"Springfield, Massachusetts"
	 ,"Springfield, Illinois"
	 ,"Springfield, Oregon"
	 ,"Springfield, Ohio"
	 ,"Spring Hill, Florida"
	 ,"Spring Valley, Nevada"
	 ,"Stamford, Connecticut"
	 ,"State College, Pennsylvania"
	 ,"Sterling Heights, Michigan"
	 ,"Stillwater, Oklahoma"
	 ,"Stockton, California"
	 ,"Stratford, Connecticut"
	 ,"Strongsville, Ohio"
	 ,"Suffolk, Virginia"
	 ,"Sugar Land, Texas"
	 ,"Summerville, South Carolina"
	 ,"Sunnyvale, California"
	 ,"Sunrise, Florida"
	 ,"Sunrise Manor, Nevada"
	 ,"Surprise, Arizona"
	 ,"Syracuse, New York"
	 ,"Tacoma, Washington"
	 ,"Tallahassee, Florida"
	 ,"Tamarac, Florida"
	 ,"Tamiami, Florida"
	 ,"Tampa, Florida"
	 ,"Taunton, Massachusetts"
	 ,"Taylor, Michigan"
	 ,"Taylorsville, Utah"
	 ,"Temecula, California"
	 ,"Tempe, Arizona"
	 ,"Temple, Texas"
	 ,"Terre Haute, Indiana"
	 ,"Texas City, Texas"
	 ,"The Hammocks, Florida"
	 ,"The Villages, Florida"
	 ,"The Woodlands, Texas"
	 ,"Thornton, Colorado"
	 ,"Thousand Oaks, California"
	 ,"Tigard, Oregon"
	 ,"Tinley Park, Illinois"
	 ,"Titusville, Florida"
	 ,"Toledo, Ohio"
	 ,"Toms River, New Jersey"
	 ,"Tonawanda CDP, New York"
	 ,"Topeka, Kansas"
	 ,"Torrance, California"
	 ,"Town 'n' Country, Florida"
	 ,"Towson, Maryland"
	 ,"Tracy, California"
	 ,"Trenton, New Jersey"
	 ,"Troy, Michigan"
	 ,"Troy, New York"
	 ,"Tuckahoe, Virginia"
	 ,"Tucson, Arizona"
	 ,"Tulare, California"
	 ,"Tulsa, Oklahoma"
	 ,"Turlock, California"
	 ,"Tuscaloosa, Alabama"
	 ,"Tustin, California"
	 ,"Twin Falls, Idaho"
	 ,"Tyler, Texas"
	 ,"Union City, California"
	 ,"Union City, New Jersey"
	 ,"University, Florida"
	 ,"Upland, California"
	 ,"Urbana, Illinois"
	 ,"Urbandale, Iowa"
	 ,"Utica, New York"
	 ,"Vacaville, California"
	 ,"Valdosta, Georgia"
	 ,"Vallejo, California"
	 ,"Valrico, Florida"
	 ,"Vancouver, Washington"
	 ,"Victoria, Texas"
	 ,"Victorville, California"
	 ,"Vineland, New Jersey"
	 ,"Virginia Beach, Virginia"
	 ,"Visalia, California"
	 ,"Vista, California"
	 ,"Waco, Texas"
	 ,"Waldorf, Maryland"
	 ,"Walnut Creek, California"
	 ,"Waltham, Massachusetts"
	 ,"Warner Robins, Georgia"
	 ,"Warren, Michigan"
	 ,"Warwick, Rhode Island"
	 ,"Washington, District of Columbia"
	 ,"Waterbury, Connecticut"
	 ,"Waterloo, Iowa"
	 ,"Watsonville, California"
	 ,"Waukegan, Illinois"
	 ,"Waukesha, Wisconsin"
	 ,"Wauwatosa, Wisconsin"
	 ,"Wellington, Florida"
	 ,"Wesley Chapel, Florida"
	 ,"West Allis, Wisconsin"
	 ,"West Babylon, New York"
	 ,"West Covina, California"
	 ,"West Des Moines, Iowa"
	 ,"Westfield, Massachusetts"
	 ,"West Hartford, Connecticut"
	 ,"West Haven, Connecticut"
	 ,"West Jordan, Utah"
	 ,"Westland, Michigan"
	 ,"Westminster, Colorado"
	 ,"Westminster, California"
	 ,"West New York, New Jersey"
	 ,"Weston, Florida"
	 ,"West Palm Beach, Florida"
	 ,"West Sacramento, California"
	 ,"West Seneca, New York"
	 ,"West Valley City, Utah"
	 ,"Weymouth, Massachusetts"
	 ,"Weymouth Town, Massachusetts"
	 ,"Wheaton, Illinois"
	 ,"Wheaton, Maryland"
	 ,"White Plains, New York"
	 ,"Whitney, Nevada"
	 ,"Whittier, California"
	 ,"Wichita, Kansas"
	 ,"Wichita Falls, Texas"
	 ,"Wilkes-Barre, Pennsylvania"
	 ,"Wilmington, North Carolina"
	 ,"Wilmington, Delaware"
	 ,"Wilson, North Carolina"
	 ,"Winston-Salem, North Carolina"
	 ,"Woodbury, Minnesota"
	 ,"Woodland, California"
	 ,"Woonsocket, Rhode Island"
	 ,"Worcester, Massachusetts"
	 ,"Wylie, Texas"
	 ,"Wyoming, Michigan"
	 ,"Yakima, Washington"
	 ,"Yonkers, New York"
	 ,"Yorba Linda, California"
	 ,"York, Pennsylvania"
	 ,"Youngstown, Ohio"
	 ,"Yuba City, California"
	 ,"Yucaipa, California"
	 ,"Yuma, Arizona"
	 ];

// Top 1000 US Cities geocoded for latitude/longitude
var cities1000Map = 
	[
		 {'city': 'Abilene, TX, USA', 'll': '32.4487364,-99.73314390000002'}
		,{'city': 'Akron, OH, USA', 'll': '41.0814447,-81.51900529999999'}
		,{'city': 'Alafaya, FL, USA', 'll': '28.5641,-81.2114'}
		,{'city': 'Alameda, CA, USA', 'll': '37.7652065,-122.2416355'}
		,{'city': 'Albany, NY, USA', 'll': '42.6525793,-73.7562317'}
		,{'city': 'Albany, GA, USA', 'll': '31.5785074,-84.15574099999999'}
		,{'city': 'Albany, OR, USA', 'll': '44.6365107,-123.1059282'}
		,{'city': 'Albuquerque, NM, USA', 'll': '35.0844909,-106.6511367'}
		,{'city': 'Alexandria, VA, USA', 'll': '38.8048355,-77.0469214'}
		,{'city': 'Alexandria, LA, USA', 'll': '31.3112936,-92.4451371'}
		,{'city': 'Alhambra, CA, USA', 'll': '34.095287,-118.1270146'}
		,{'city': 'Aliso Viejo, CA, USA', 'll': '33.57509599999999,-117.725431'}
		,{'city': 'Allen, TX, USA', 'll': '33.1031744,-96.67055030000002'}
		,{'city': 'Allentown, PA, USA', 'll': '40.6084305,-75.4901833'}
		,{'city': 'Aloha, OR, USA', 'll': '45.4942838,-122.8670454'}
		,{'city': 'Alpharetta, GA, USA', 'll': '34.0753762,-84.2940899'}
		,{'city': 'Altadena, CA, USA', 'll': '34.1897274,-118.1311819'}
		,{'city': 'Altamonte Springs, FL, USA', 'll': '28.6611089,-81.3656242'}
		,{'city': 'Altoona, PA, USA', 'll': '40.5186809,-78.3947359'}
		,{'city': 'Amarillo, TX, USA', 'll': '35.2219971,-101.8312969'}
		,{'city': 'Ames, IA, USA', 'll': '42.02335,-93.62562199999999'}
		,{'city': 'Anaheim, CA, USA', 'll': '33.8352932,-117.9145036'}
		,{'city': 'Anchorage, AK, USA', 'll': '61.2180556,-149.9002778'}
		,{'city': 'Anderson, IN, USA', 'll': '40.1053196,-85.6802541'}
		,{'city': 'Ankeny, IA, USA', 'll': '41.7266667,-93.6041667'}
		,{'city': 'Ann Arbor, MI, USA', 'll': '42.2808256,-83.7430378'}
		,{'city': 'Ann Arbor, MI, USA', 'll': '42.3076493,-83.8473015'}
		,{'city': 'Antelope North Rd, CA, USA', 'll': '38.7172491,-121.3274832'}
		,{'city': 'Antioch, CA, USA', 'll': '38.0049214,-121.805789'}
		,{'city': 'Apache Junction, AZ, USA', 'll': '33.4150485,-111.5495777'}
		,{'city': 'Apex, NC, USA', 'll': '35.732652,-78.85028559999999'}
		,{'city': 'Apopka, FL, USA', 'll': '28.68675,-81.51327599999999'}
		,{'city': 'Appleton, WI, USA', 'll': '44.2619309,-88.41538469999999'}
		,{'city': 'Apple Valley, CA, USA', 'll': '34.5008311,-117.1858759'}
		,{'city': 'Apple Valley, MN, USA', 'll': '44.7319094,-93.21772000000001'}
		,{'city': 'Arcadia, CA, USA', 'll': '34.1397292,-118.0353449'}
		,{'city': 'Arden-Arcade, CA, USA', 'll': '38.6008071,-121.3770336'}
		,{'city': 'Arlington, TX, USA', 'll': '32.735687,-97.10806559999999'}
		,{'city': 'Arlington, VA, USA', 'll': '38.8799697,-77.1067698'}
		,{'city': 'Arlington, MA, USA', 'll': '42.4153925,-71.1564729'}
		,{'city': 'Arlington Heights, IL, USA', 'll': '42.0883603,-87.98062650000001'}
		,{'city': 'Arvada, CO, USA', 'll': '39.8027644,-105.0874842'}
		,{'city': 'Ashburn, VA, USA', 'll': '39.0414079,-77.48101799999999'}
		,{'city': 'Asheville, NC, USA', 'll': '35.6009452,-82.55401499999999'}
		,{'city': 'Aspen Hill, MD, USA', 'll': '39.0795529,-77.07303379999999'}
		,{'city': 'Atascocita, TX, USA', 'll': '29.99883059999999,-95.1765978'}
		,{'city': 'Athens, GA, USA', 'll': '33.955802,-83.3823656'}
		,{'city': 'Atlanta, GA, USA', 'll': '33.7489954,-84.3879824'}
		,{'city': 'Attleboro, MA, USA', 'll': '41.94454409999999,-71.2856082'}
		,{'city': 'Auburn, WA, USA', 'll': '47.30732279999999,-122.2284532'}
		,{'city': 'Auburn, AL, USA', 'll': '32.6098566,-85.48078249999999'}
		,{'city': 'Augusta, GA, USA', 'll': '33.474246,-82.00967'}
		,{'city': 'Aurora, CO, USA', 'll': '39.7294319,-104.8319195'}
		,{'city': 'Aurora, IL, USA', 'll': '41.7605849,-88.32007150000001'}
		,{'city': 'Austin, TX, USA', 'll': '30.267153,-97.7430608'}
		,{'city': 'Avondale, AZ, USA', 'll': '33.4355977,-112.3496021'}
		,{'city': 'Azusa, CA, USA', 'll': '34.1336186,-117.9075627'}
		,{'city': 'Bakersfield, CA, USA', 'll': '35.3732921,-119.0187125'}
		,{'city': 'Baldwin Park, CA, USA', 'll': '34.0852868,-117.9608978'}
		,{'city': 'Baltimore, MD, USA', 'll': '39.2903848,-76.6121893'}
		,{'city': 'Barnstable, MA, USA', 'll': '41.7014167,-70.3030556'}
		,{'city': 'Bartlett, TN, USA', 'll': '35.2045328,-89.8739753'}
		,{'city': 'Bartlett, IL, USA', 'll': '41.9950276,-88.1856301'}
		,{'city': 'Baton Rouge, LA, USA', 'll': '30.4582829,-91.1403196'}
		,{'city': 'Battle Creek, MI, USA', 'll': '42.3211522,-85.17971419999999'}
		,{'city': 'Bayonne, NJ, USA', 'll': '40.6687141,-74.1143091'}
		,{'city': 'Baytown, TX, USA', 'll': '29.7355047,-94.97742740000001'}
		,{'city': 'Beaumont, TX, USA', 'll': '30.080174,-94.1265562'}
		,{'city': 'Beaumont, CA, USA', 'll': '33.9294606,-116.977248'}
		,{'city': 'Beavercreek, OH, USA', 'll': '39.7092262,-84.06326849999999'}
		,{'city': 'Beaverton, OR, USA', 'll': '45.48706199999999,-122.8037102'}
		,{'city': 'Bedford, TX, USA', 'll': '32.844017,-97.1430671'}
		,{'city': 'Bel Air South, MD, USA', 'll': '39.504033,-76.3181'}
		,{'city': 'Belleville, IL, USA', 'll': '38.5200504,-89.9839935'}
		,{'city': 'Bellevue, WA, USA', 'll': '47.610377,-122.2006786'}
		,{'city': 'Bellevue, Washington, DC 20032, USA', 'll': '38.8274243,-77.0089452'}
		,{'city': 'Bellevue, NE, USA', 'll': '41.1586111,-95.93416669999999'}
		,{'city': 'Bellflower, CA, USA', 'll': '33.8816818,-118.1170117'}
		,{'city': 'Bell Gardens, CA, USA', 'll': '33.9652918,-118.1514588'}
		,{'city': 'Bellingham, WA, USA', 'll': '48.7595529,-122.4882249'}
		,{'city': 'Bend, OR, USA', 'll': '44.0581728,-121.3153096'}
		,{'city': 'Berkeley, CA, USA', 'll': '37.8715926,-122.272747'}
		,{'city': 'Berwyn, IL, USA', 'll': '41.85058739999999,-87.7936685'}
		,{'city': 'Bethesda, MD, USA', 'll': '38.984652,-77.0947092'}
		,{'city': 'Bethlehem, PA, USA', 'll': '40.6259316,-75.37045789999999'}
		,{'city': 'Billerica, MA, USA', 'll': '42.5584218,-71.2689461'}
		,{'city': 'Billings, Mt, USA', 'll': '45.7832856,-108.5006904'}
		,{'city': 'Biloxi, MS, USA', 'll': '30.3960318,-88.88530779999999'}
		,{'city': 'Binghamton, NY, USA', 'll': '42.09868669999999,-75.91797380000001'}
		,{'city': 'Birmingham, AL, USA', 'll': '33.5206608,-86.80248999999999'}
		,{'city': 'Bismarck, ND, USA', 'll': '46.8083268,-100.7837392'}
		,{'city': 'Blacksburg, VA, USA', 'll': '37.2295733,-80.4139393'}
		,{'city': 'Blaine, MN, USA', 'll': '45.1607987,-93.23494889999999'}
		,{'city': 'Bloomington, MN, USA', 'll': '44.840798,-93.2982799'}
		,{'city': 'Bloomington, IN, USA', 'll': '39.165325,-86.52638569999999'}
		,{'city': 'Bloomington, IL, USA', 'll': '40.4842027,-88.99368729999999'}
		,{'city': 'Blue Springs, MO, USA', 'll': '39.0169509,-94.2816148'}
		,{'city': 'Boca Raton, FL, USA', 'll': '26.3586885,-80.0830984'}
		,{'city': 'Boise, ID, USA', 'll': '43.612631,-116.211076'}
		,{'city': 'Bolingbrook, IL, USA', 'll': '41.69864159999999,-88.0683955'}
		,{'city': 'Bonita Springs, FL, USA', 'll': '26.339806,-81.7786972'}
		,{'city': 'Bossier City, LA, USA', 'll': '32.5159852,-93.7321228'}
		,{'city': 'Boston, MA, USA', 'll': '42.3584308,-71.0597732'}
		,{'city': 'Boulder, CO, USA', 'll': '40.0149856,-105.2705456'}
		,{'city': 'Bountiful, UT, USA', 'll': '40.8893895,-111.880771'}
		,{'city': 'Bowie, MD, USA', 'll': '39.0067768,-76.77913649999999'}
		,{'city': 'Bowling Green, KY, USA', 'll': '36.9903199,-86.4436018'}
		,{'city': 'Boynton Beach, FL, USA', 'll': '26.5253491,-80.0664309'}
		,{'city': 'Bradenton, FL, USA', 'll': '27.4989278,-82.5748194'}
		,{'city': 'Brandon, FL, USA', 'll': '27.937801,-82.2859247'}
		,{'city': 'Brentwood, NY, USA', 'll': '40.7812093,-73.2462273'}
		,{'city': 'Brentwood, CA, USA', 'll': '37.931868,-121.6957863'}
		,{'city': 'Bridgeport, CT, USA', 'll': '41.1865478,-73.19517669999999'}
		,{'city': 'Bristol, CT, USA', 'll': '41.67176480000001,-72.9492703'}
		,{'city': 'Brockton, MA, USA', 'll': '42.0834335,-71.0183787'}
		,{'city': 'Broken Arrow, OK, USA', 'll': '36.0525993,-95.7908195'}
		,{'city': 'Brookline, MA, USA', 'll': '42.33176419999999,-71.1211635'}
		,{'city': 'Brooklyn Park, MN, USA', 'll': '45.0941315,-93.3563405'}
		,{'city': 'Broomfield, CO, USA', 'll': '39.9205411,-105.0866504'}
		,{'city': 'Brownsville, TX, USA', 'll': '25.9017472,-97.4974838'}
		,{'city': 'Bryan, TX, USA', 'll': '30.6743643,-96.3699632'}
		,{'city': 'Buckeye, AZ, USA', 'll': '33.3703197,-112.5837766'}
		,{'city': 'Buena Park, CA, USA', 'll': '33.8675143,-117.9981181'}
		,{'city': 'Buffalo, NY, USA', 'll': '42.88644679999999,-78.8783689'}
		,{'city': 'Buffalo Grove, IL, USA', 'll': '42.1662831,-87.9631308'}
		,{'city': 'Bullhead City, AZ, USA', 'll': '35.1477774,-114.5682983'}
		,{'city': 'Burbank, CA, USA', 'll': '34.1808392,-118.3089661'}
		,{'city': 'Burbank, CA, USA', 'll': '37.3205556,-121.9316667'}
		,{'city': 'Burlington, NC, USA', 'll': '36.0956918,-79.43779909999999'}
		,{'city': 'Burlington, VT, USA', 'll': '44.4758825,-73.21207199999999'}
		,{'city': 'Burnsville, MN, USA', 'll': '44.7677424,-93.27772259999999'}
		,{'city': 'Caldwell, ID, USA', 'll': '43.66293839999999,-116.6873596'}
		,{'city': 'Calexico, CA, USA', 'll': '32.6789476,-115.4988834'}
		,{'city': 'Camarillo, CA, USA', 'll': '34.2163937,-119.0376023'}
		,{'city': 'Cambridge, MA, USA', 'll': '42.3726399,-71.10965279999999'}
		,{'city': 'Camden, NJ, USA', 'll': '39.9259463,-75.1196199'}
		,{'city': 'Canton, OH, USA', 'll': '40.79894729999999,-81.378447'}
		,{'city': 'Cape Coral, FL, USA', 'll': '26.5628537,-81.9495331'}
		,{'city': 'Carlsbad, CA, USA', 'll': '33.1580933,-117.3505939'}
		,{'city': 'Carmel, IN, USA', 'll': '39.978371,-86.1180435'}
		,{'city': 'Carmichael, CA, USA', 'll': '38.617127,-121.3282843'}
		,{'city': 'Carrollton, TX, USA', 'll': '32.9756415,-96.8899636'}
		,{'city': 'Carson, CA, USA', 'll': '33.8314058,-118.2820165'}
		,{'city': 'Carson Airport (CXP), Carson City, NV 89706, USA', 'll': '39.1999655,-119.7371151'}
		,{'city': 'Cary, NC, USA', 'll': '35.79154,-78.7811169'}
		,{'city': 'Casa Grande, AZ, USA', 'll': '32.8795022,-111.7573521'}
		,{'city': 'Casas Adobes, AZ, USA', 'll': '32.3234078,-110.9950966'}
		,{'city': 'Casper, WY, USA', 'll': '42.866632,-106.313081'}
		,{'city': 'Castle Rock, CO, USA', 'll': '39.3722121,-104.8560902'}
		,{'city': 'Castro Valley, CA, USA', 'll': '37.6940973,-122.0863522'}
		,{'city': 'Catalina Foothills, AZ, USA', 'll': '32.297853,-110.9187037'}
		,{'city': 'Cathedral City, CA, USA', 'll': '33.7797426,-116.4652911'}
		,{'city': 'Catonsville, MD, USA', 'll': '39.2720509,-76.73191609999999'}
		,{'city': 'Cedar Hill, TX, USA', 'll': '32.5884689,-96.9561152'}
		,{'city': 'Cedar Park, TX, USA', 'll': '30.505198,-97.8202888'}
		,{'city': 'Cedar Rapids, IA, USA', 'll': '41.9778795,-91.6656232'}
		,{'city': 'Centennial, CO, USA', 'll': '39.5807452,-104.8771726'}
		,{'city': 'Centerville, OH, USA', 'll': '39.6283928,-84.15938179999999'}
		,{'city': 'Centreville, VA, USA', 'll': '38.8403909,-77.42887689999999'}
		,{'city': 'Ceres, CA, USA', 'll': '37.5949316,-120.9577098'}
		,{'city': 'Cerritos, CA, USA', 'll': '33.8583483,-118.0647871'}
		,{'city': 'Champaign, IL, USA', 'll': '40.1164204,-88.2433829'}
		,{'city': 'Chandler, AZ, USA', 'll': '33.3061605,-111.8412502'}
		,{'city': 'Chapel Hill, NC, USA', 'll': '35.9131996,-79.0558445'}
		,{'city': 'Charleston, SC, USA', 'll': '32.7765656,-79.93092159999999'}
		,{'city': 'Charleston, WV, USA', 'll': '38.3498195,-81.6326234'}
		,{'city': 'Charlotte, NC, USA', 'll': '35.2270869,-80.8431267'}
		,{'city': 'Charlottesville, VA, USA', 'll': '38.0293059,-78.47667810000002'}
		,{'city': 'Chattanooga, TN, USA', 'll': '35.0456297,-85.3096801'}
		,{'city': 'Cheektowaga, NY, USA', 'll': '42.9026136,-78.74457199999999'}
		,{'city': 'Chesapeake, VA, USA', 'll': '36.7682088,-76.2874927'}
		,{'city': 'Chesterfield, MO, USA', 'll': '38.6631083,-90.5770675'}
		,{'city': 'Cheyenne, WY, USA', 'll': '41.1399814,-104.8202462'}
		,{'city': 'Chicago, IL, USA', 'll': '41.8781136,-87.6297982'}
		,{'city': 'Chico, CA, USA', 'll': '39.7284944,-121.8374777'}
		,{'city': 'Chicopee, MA, USA', 'll': '42.1487043,-72.6078672'}
		,{'city': 'Chino, CA, USA', 'll': '34.0122346,-117.688944'}
		,{'city': 'Chino Hills, CA, USA', 'll': '33.9898188,-117.7325848'}
		,{'city': 'Chula Vista, CA, USA', 'll': '32.6400541,-117.0841955'}
		,{'city': 'Cicero, IL, USA', 'll': '41.8455877,-87.7539448'}
		,{'city': 'Cincinnati, OH, USA', 'll': '39.1031182,-84.5120196'}
		,{'city': 'Citrus Heights, CA, USA', 'll': '38.7071247,-121.2810611'}
		,{'city': 'Clarksville, TN, USA', 'll': '36.5297706,-87.3594528'}
		,{'city': 'Clearwater, FL, USA', 'll': '27.9658533,-82.8001026'}
		,{'city': 'Cleveland, OH, USA', 'll': '41.4994954,-81.6954088'}
		,{'city': 'Cleveland, TN, USA', 'll': '35.1595182,-84.8766115'}
		,{'city': 'Cleveland Heights, OH, USA', 'll': '41.5200518,-81.556235'}
		,{'city': 'Clifton, NJ, USA', 'll': '40.8584328,-74.16375529999999'}
		,{'city': 'Clovis, CA, USA', 'll': '36.8252277,-119.7029194'}
		,{'city': 'Coachella, CA, USA', 'll': '33.6803003,-116.173894'}
		,{'city': 'Coconut Creek, FL, USA', 'll': '26.2517482,-80.17893509999999'}
		,{'city': "Coeur d'Alene, ID, USA", 'll': '47.6776832,-116.7804664'}
		,{'city': 'College Station, TX, USA', 'll': '30.627977,-96.3344068'}
		,{'city': 'Collierville, TN, USA', 'll': '35.042036,-89.6645266'}
		,{'city': 'Colorado Springs, CO, USA', 'll': '38.8338816,-104.8213634'}
		,{'city': 'Colton, CA, USA', 'll': '34.0739016,-117.3136547'}
		,{'city': 'Columbia, SC, USA', 'll': '34.0007104,-81.0348144'}
		,{'city': 'Columbia, MO, USA', 'll': '38.9517053,-92.3340724'}
		,{'city': 'Columbia, MD, USA', 'll': '39.2040236,-76.860565'}
		,{'city': 'Columbus, OH, USA', 'll': '39.9611755,-82.99879419999999'}
		,{'city': 'Columbus, GA, USA', 'll': '32.4609764,-84.9877094'}
		,{'city': 'Columbus, IN, USA', 'll': '39.2014404,-85.9213796'}
		,{'city': 'Commerce City, CO, USA', 'll': '39.8083196,-104.9338675'}
		,{'city': 'Compton, CA, USA', 'll': '33.8958492,-118.2200712'}
		,{'city': 'Concord, CA, USA', 'll': '37.9779776,-122.0310733'}
		,{'city': 'Concord, NC, USA', 'll': '35.4087517,-80.579511'}
		,{'city': 'Concord, NH, USA', 'll': '43.2081366,-71.5375718'}
		,{'city': 'Conroe, TX, USA', 'll': '30.3118769,-95.45605119999999'}
		,{'city': 'Conway, AR, USA', 'll': '35.0886963,-92.4421011'}
		,{'city': 'Coon Rapids, MN, USA', 'll': '45.1199652,-93.28772769999999'}
		,{'city': 'Coral Gables, FL, USA', 'll': '25.72149,-80.2683838'}
		,{'city': 'Coral Springs, FL, USA', 'll': '26.271192,-80.2706044'}
		,{'city': 'Corona, CA, USA', 'll': '33.8752935,-117.5664384'}
		,{'city': 'Corpus Christi, TX, USA', 'll': '27.8005828,-97.39638099999999'}
		,{'city': 'Corvallis, OR, USA', 'll': '44.5645659,-123.2620435'}
		,{'city': 'Costa Mesa, CA, USA', 'll': '33.6411316,-117.9186689'}
		,{'city': 'Council Bluffs, IA, USA', 'll': '41.2619444,-95.8608333'}
		,{'city': 'Country Club, FL, USA', 'll': '25.9481487,-80.3169953'}
		,{'city': 'Covina, CA, USA', 'll': '34.0900091,-117.8903397'}
		,{'city': 'Cranston, RI, USA', 'll': '41.7798226,-71.4372796'}
		,{'city': 'Crystal Lake, IL, USA', 'll': '42.2411344,-88.31619649999999'}
		,{'city': 'Cupertino, CA, USA', 'll': '37.3229978,-122.0321823'}
		,{'city': 'Cutler Bay, FL, USA', 'll': '25.5783,-80.3377'}
		,{'city': 'Cuyahoga Falls, OH, USA', 'll': '41.1339449,-81.48455849999999'}
		,{'city': 'Cypress, CA, USA', 'll': '33.8169599,-118.0372852'}
		,{'city': 'Dale City, VA, USA', 'll': '38.6370622,-77.31109459999999'}
		,{'city': 'Dallas, TX, USA', 'll': '32.802955,-96.769923'}
		,{'city': 'Daly City, CA, USA', 'll': '37.6879241,-122.4702079'}
		,{'city': 'Danbury, CT, USA', 'll': '41.394817,-73.4540111'}
		,{'city': 'Danville, CA, USA', 'll': '37.8215929,-121.9999606'}
		,{'city': 'Danville, VA, USA', 'll': '36.5859718,-79.39502279999999'}
		,{'city': 'Davenport, IA, USA', 'll': '41.5236437,-90.5776367'}
		,{'city': 'Davie, FL, USA', 'll': '26.0628664,-80.2331038'}
		,{'city': 'Davis, CA, USA', 'll': '38.5449065,-121.7405167'}
		,{'city': 'Dayton, OH, USA', 'll': '39.7589478,-84.1916069'}
		,{'city': 'Daytona Beach, FL, USA', 'll': '29.2108147,-81.0228331'}
		,{'city': 'Dearborn, MI, USA', 'll': '42.3222599,-83.17631449999999'}
		,{'city': 'Dearborn Heights, MI, USA', 'll': '42.3369816,-83.27326269999999'}
		,{'city': 'Decatur, IL, USA', 'll': '39.8403147,-88.9548001'}
		,{'city': 'Decatur, AL, USA', 'll': '34.6059253,-86.9833417'}
		,{'city': 'Deerfield Beach, FL, USA', 'll': '26.3184123,-80.09976569999999'}
		,{'city': 'DeKalb, IL, USA', 'll': '41.9294736,-88.75036469999999'}
		,{'city': 'Delano, CA, USA', 'll': '35.7688425,-119.2470536'}
		,{'city': 'Delray Beach, FL, USA', 'll': '26.4614625,-80.0728201'}
		,{'city': 'Deltona, FL, USA', 'll': '28.9005446,-81.26367379999999'}
		,{'city': 'Denton, TX, USA', 'll': '33.2148412,-97.13306829999999'}
		,{'city': 'Denver, CO, USA', 'll': '39.7391536,-104.9847034'}
		,{'city': 'Des Moines, IA, USA', 'll': '41.6005448,-93.6091064'}
		,{'city': 'DeSoto, TX, USA', 'll': '32.5898577,-96.85694509999999'}
		,{'city': 'Des Plaines, IL, USA', 'll': '42.0333623,-87.88339909999999'}
		,{'city': 'Detroit, MI, USA', 'll': '42.331427,-83.0457538'}
		,{'city': 'Michigan - Martin, Detroit, MI 48210, USA', 'll': '42.3288623,-83.1206665'}
		,{'city': 'Diamond Bar, CA, USA', 'll': '34.0286226,-117.8103367'}
		,{'city': 'Doral, FL, USA', 'll': '25.8195424,-80.3553302'}
		,{'city': 'Dothan, AL, USA', 'll': '31.2232313,-85.3904888'}
		,{'city': 'Downers Grove, IL, USA', 'll': '41.8089191,-88.01117459999999'}
		,{'city': 'Downey, CA, USA', 'll': '33.94001430000001,-118.1325688'}
		,{'city': 'Draper, UT, USA', 'll': '40.5246711,-111.8638226'}
		,{'city': 'Dublin, CA, USA', 'll': '37.7021521,-121.9357918'}
		,{'city': 'Dublin, OH, USA', 'll': '40.0992294,-83.1140771'}
		,{'city': 'Dubuque, IA, USA', 'll': '42.5005583,-90.66457179999999'}
		,{'city': 'Duluth, MN, USA', 'll': '46.78667189999999,-92.1004852'}
		,{'city': 'Dundalk, MD, USA', 'll': '39.2506633,-76.5205184'}
		,{'city': 'Dunwoody, GA, USA', 'll': '33.9462125,-84.3346473'}
		,{'city': 'Durham, NC, USA', 'll': '35.9940329,-78.898619'}
		,{'city': 'Eagan, MN, USA', 'll': '44.8041322,-93.1668858'}
		,{'city': 'East Hartford, CT, USA', 'll': '41.7634219,-72.6128339'}
		,{'city': 'Honolulu, HI, USA', 'll': '21.3069444,-157.8583333'}
		,{'city': 'East Lansing, MI, USA', 'll': '42.7369792,-84.48386540000001'}
		,{'city': 'East Los Angeles, CA, USA', 'll': '34.0239015,-118.1720157'}
		,{'city': 'East Los Angeles Library, 4837 E 3rd St, Los Angeles, CA 90022, USA', 'll': '34.03369199999999,-118.160056'}
		,{'city': 'Los Angeles, CA, USA', 'll': '34.0522342,-118.2436849'}
		,{'city': 'East Orange, NJ, USA', 'll': '40.767323,-74.2048677'}
		,{'city': 'East Providence, RI, USA', 'll': '41.8137116,-71.3700545'}
		,{'city': 'Eastvale, CA 92880, USA', 'll': '33.9630573,-117.5638781'}
		,{'city': 'Eau Claire, WI, USA', 'll': '44.811349,-91.4984941'}
		,{'city': 'Eden Prairie, MN, USA', 'll': '44.8546856,-93.47078599999999'}
		,{'city': 'Edina, MN, USA', 'll': '44.8896866,-93.3499489'}
		,{'city': 'Edinburg, TX, USA', 'll': '26.3017374,-98.1633432'}
		,{'city': 'Edmond, OK, USA', 'll': '35.6528323,-97.47809540000002'}
		,{'city': 'El Cajon, CA, USA', 'll': '32.7947731,-116.9625269'}
		,{'city': 'El Centro, CA, USA', 'll': '32.792,-115.5630514'}
		,{'city': 'El Dorado Hills, CA, USA', 'll': '38.6857367,-121.082167'}
		,{'city': 'Elgin, IL, USA', 'll': '42.0372487,-88.2811895'}
		,{'city': 'Elizabeth, NJ, USA', 'll': '40.6639916,-74.2107006'}
		,{'city': 'Elk Grove, CA, USA', 'll': '38.4087993,-121.3716178'}
		,{'city': 'Elkhart, IN, USA', 'll': '41.6819935,-85.9766671'}
		,{'city': 'Ellicott City, MD, USA', 'll': '39.2673283,-76.7983067'}
		,{'city': 'Elmhurst, IL, USA', 'll': '41.8994744,-87.9403418'}
		,{'city': 'El Monte, CA, USA', 'll': '34.0686206,-118.0275667'}
		,{'city': 'El Paso, TX, USA', 'll': '31.7587198,-106.4869314'}
		,{'city': 'El Paso', 'll': '31.8039824,-106.2051484'}
		,{'city': 'Elyria, OH, USA', 'll': '41.3683798,-82.10764859999999'}
		,{'city': 'Encinitas, CA, USA', 'll': '33.0369867,-117.2919818'}
		,{'city': 'Enid, OK, USA', 'll': '36.3955891,-97.8783911'}
		,{'city': 'Enterprise, NV, USA', 'll': '36.0252503,-115.2419419'}
		,{'city': 'Erie, PA, USA', 'll': '42.12922409999999,-80.085059'}
		,{'city': 'Erie, USA', 'll': '42.0366785,-80.0087746'}
		,{'city': 'Escondido, CA, USA', 'll': '33.1192068,-117.086421'}
		,{'city': 'Euclid, OH, USA', 'll': '41.5931049,-81.5267873'}
		,{'city': 'Eugene, OR, USA', 'll': '44.0520691,-123.0867536'}
		,{'city': 'Euless, TX, USA', 'll': '32.8370727,-97.08195409999999'}
		,{'city': 'Evanston, IL, USA', 'll': '42.0411414,-87.6900587'}
		,{'city': 'Evansville, IN, USA', 'll': '37.9715592,-87.5710898'}
		,{'city': 'Everett, WA, USA', 'll': '47.9789848,-122.2020794'}
		,{'city': 'Everett, MA, USA', 'll': '42.40843,-71.0536625'}
		,{'city': 'Fairfield, CA, USA', 'll': '38.24935809999999,-122.0399663'}
		,{'city': 'Fairfield, OH, USA', 'll': '39.3454673,-84.5603187'}
		,{'city': 'Fall River, MA, USA', 'll': '41.7014912,-71.1550451'}
		,{'city': 'Fargo, ND, USA', 'll': '46.8771863,-96.7898034'}
		,{'city': 'Farmington, NM, USA', 'll': '36.72805830000001,-108.2186856'}
		,{'city': 'Farmington Hills, MI, USA', 'll': '42.4828221,-83.41838229999999'}
		,{'city': 'Fayetteville, NC, USA', 'll': '35.0526641,-78.87835849999999'}
		,{'city': 'Fayetteville, AR, USA', 'll': '36.0625795,-94.1574263'}
		,{'city': 'Federal Way, WA, USA', 'll': '47.3223221,-122.3126222'}
		,{'city': 'Findlay, OH 45840, USA', 'll': '41.04422,-83.6499321'}
		,{'city': 'Fishers, IN, USA', 'll': '39.9555928,-86.0138729'}
		,{'city': 'Flagstaff, AZ, USA', 'll': '35.2013516,-111.639249'}
		,{'city': 'Flint, MI, USA', 'll': '43.0125274,-83.6874562'}
		,{'city': 'Flint, MI, USA', 'll': '43.0777289,-83.67739279999999'}
		,{'city': 'Florence-Graham, CA, USA', 'll': '33.9694444,-118.2438889'}
		,{'city': 'Florin, CA, USA', 'll': '38.4960187,-121.4088416'}
		,{'city': 'Florissant, MO, USA', 'll': '38.789217,-90.322614'}
		,{'city': 'Flower Mound, TX, USA', 'll': '33.0145673,-97.0969552'}
		,{'city': 'Folsom, CA, USA', 'll': '38.6779591,-121.1760583'}
		,{'city': 'Fond du Lac, WI, USA', 'll': '43.7730448,-88.4470508'}
		,{'city': 'Fontana, CA, USA', 'll': '34.0922335,-117.435048'}
		,{'city': 'Fort Collins, CO, USA', 'll': '40.5852602,-105.084423'}
		,{'city': 'Fort Lauderdale, FL, USA', 'll': '26.1223084,-80.14337859999999'}
		,{'city': 'Fort Myers, FL, USA', 'll': '26.640628,-81.8723084'}
		,{'city': 'Fort Pierce, FL, USA', 'll': '27.4467056,-80.3256056'}
		,{'city': 'Fort Smith, AR, USA', 'll': '35.3859242,-94.39854749999999'}
		,{'city': 'Fort Wayne, IN, USA', 'll': '41.079273,-85.1393513'}
		,{'city': 'Fort Worth, TX, USA', 'll': '32.725409,-97.3208496'}
		,{'city': 'Fountainbleau, FL, USA', 'll': '25.7728774,-80.3478301'}
		,{'city': 'Fountain Valley, CA, USA', 'll': '33.7091847,-117.9536697'}
		,{'city': 'Framingham, MA, USA', 'll': '42.279286,-71.4161565'}
		,{'city': 'Franklin, TN, USA', 'll': '35.9250637,-86.8688899'}
		,{'city': 'Frederick, MD, USA', 'll': '39.41426879999999,-77.4105409'}
		,{'city': 'Freeport, NY, USA', 'll': '40.6576022,-73.58318349999999'}
		,{'city': 'Fremont, CA, USA', 'll': '37.5482697,-121.9885719'}
		,{'city': 'Fresno, CA, USA', 'll': '36.7477272,-119.7723661'}
		,{'city': 'Frisco, TX, USA', 'll': '33.1506744,-96.82361159999999'}
		,{'city': 'Fullerton, CA, USA', 'll': '33.8702923,-117.925338'}
		,{'city': 'Gainesville, FL, USA', 'll': '29.6516344,-82.32482619999999'}
		,{'city': 'Gaithersburg, MD, USA', 'll': '39.1434406,-77.2013705'}
		,{'city': 'Galveston, TX, USA', 'll': '29.3013479,-94.7976958'}
		,{'city': 'Gardena, CA, USA', 'll': '33.8883487,-118.3089624'}
		,{'city': 'Garden Grove, CA, USA', 'll': '33.7739053,-117.9414477'}
		,{'city': 'Garland, TX, USA', 'll': '32.912624,-96.63888329999999'}
		,{'city': 'Gary, IN, USA', 'll': '41.5933696,-87.3464271'}
		,{'city': 'Gastonia, NC, USA', 'll': '35.262082,-81.18730049999999'}
		,{'city': 'Georgetown, TX, USA', 'll': '30.6326942,-97.6772311'}
		,{'city': 'Germantown, MD, USA', 'll': '39.1731621,-77.2716502'}
		,{'city': 'Gilbert, AZ, USA', 'll': '33.3528264,-111.789027'}
		,{'city': 'Gilroy, CA 95020, USA', 'll': '37.0057816,-121.5682751'}
		,{'city': 'Glen Burnie, MD, USA', 'll': '39.1626084,-76.6246886'}
		,{'city': 'Glendale, AZ, USA', 'll': '33.5386523,-112.1859866'}
		,{'city': 'Glendale, CA, USA', 'll': '34.1425078,-118.255075'}
		,{'city': 'Glendora, CA, USA', 'll': '34.1361187,-117.865339'}
		,{'city': 'Glenview, IL, USA', 'll': '42.0697509,-87.7878408'}
		,{'city': 'Goodyear, AZ, USA', 'll': '33.449806,-112.3582136'}
		,{'city': 'Grand Forks, ND, USA', 'll': '47.9252568,-97.0328547'}
		,{'city': 'Grand Island, NE, USA', 'll': '40.9222222,-98.35805560000001'}
		,{'city': 'Grand Junction, CO, USA', 'll': '39.0638705,-108.5506486'}
		,{'city': 'Grand Prairie, TX, USA', 'll': '32.7459645,-96.99778459999999'}
		,{'city': 'Grand Rapids, MI, USA', 'll': '42.9633599,-85.6680863'}
		,{'city': 'Grand Rapids Charter Township, MI, USA', 'll': '43.0020023,-85.57150150000001'}
		,{'city': 'Grapevine, TX, USA', 'll': '32.9342919,-97.0780654'}
		,{'city': 'Great Falls, Mt, USA', 'll': '47.5002354,-111.3008083'}
		,{'city': 'Greeley, CO, USA', 'll': '40.4233142,-104.7091322'}
		,{'city': 'Green Bay, WI, USA', 'll': '44.51915899999999,-88.019826'}
		,{'city': 'Greensboro, NC, USA', 'll': '36.0726354,-79.7919754'}
		,{'city': 'Greenville, NC, USA', 'll': '35.612661,-77.3663538'}
		,{'city': 'Greenville, SC, USA', 'll': '34.85261759999999,-82.3940104'}
		,{'city': 'Greenville, USA', 'll': '34.7074745,-82.3017728'}
		,{'city': 'Greenwood, IN, USA', 'll': '39.6136578,-86.10665259999999'}
		,{'city': 'Gresham, OR, USA', 'll': '45.5001357,-122.4302013'}
		,{'city': 'Gulfport, MS, USA', 'll': '30.3674198,-89.0928155'}
		,{'city': 'Hacienda Heights, CA, USA', 'll': '33.9930677,-117.9686755'}
		,{'city': 'Hackensack, NJ, USA', 'll': '40.8859325,-74.0434736'}
		,{'city': 'Haltom City, TX, USA', 'll': '32.7995738,-97.26918169999999'}
		,{'city': 'Hamilton, OH, USA', 'll': '39.3995008,-84.5613355'}
		,{'city': 'Hammond, IN, USA', 'll': '41.5833688,-87.5000412'}
		,{'city': 'Hampton, VA, USA', 'll': '37.0298687,-76.34522179999999'}
		,{'city': 'Hanford, CA 93230, USA', 'll': '36.3274502,-119.6456844'}
		,{'city': 'Harlingen, TX, USA', 'll': '26.1906306,-97.69610259999999'}
		,{'city': 'Harrisburg, PA, USA', 'll': '40.2737002,-76.8844179'}
		,{'city': 'Harrisonburg, VA, USA', 'll': '38.4495688,-78.8689155'}
		,{'city': 'Hartford, CT, USA', 'll': '41.76371109999999,-72.6850932'}
		,{'city': 'Hattiesburg, MS, USA', 'll': '31.3271189,-89.29033919999999'}
		,{'city': 'Haverhill, MA, USA', 'll': '42.7762015,-71.0772796'}
		,{'city': 'Hawthorne, CA, USA', 'll': '33.9164032,-118.3525748'}
		,{'city': 'Hayward, CA, USA', 'll': '37.6688205,-122.0807964'}
		,{'city': 'Hemet, CA, USA', 'll': '33.7475203,-116.9719684'}
		,{'city': 'Hempstead, NY, USA', 'll': '40.7062128,-73.6187397'}
		,{'city': 'Henderson, NV, USA', 'll': '36.0395247,-114.9817213'}
		,{'city': 'Hendersonville, TN, USA', 'll': '36.3047735,-86.6199957'}
		,{'city': 'Hesperia, CA, USA', 'll': '34.4263886,-117.3008784'}
		,{'city': 'Hialeah, FL, USA', 'll': '25.8575963,-80.2781057'}
		,{'city': 'Hicksville, NY, USA', 'll': '40.7684331,-73.5251253'}
		,{'city': 'Highland, CA, USA', 'll': '34.1283442,-117.2086513'}
		,{'city': 'Highlands Ranch, CO, USA', 'll': '39.5444444,-104.9680556'}
		,{'city': 'High Point, NC, USA', 'll': '35.9556923,-80.0053176'}
		,{'city': 'Hillsboro, OR, USA', 'll': '45.5228939,-122.989827'}
		,{'city': 'Hilo, HI, USA', 'll': '19.5429151,-155.6658568'}
		,{'city': 'Hoboken, NJ, USA', 'll': '40.7439905,-74.0323626'}
		,{'city': 'Hoffman Estates, IL, USA', 'll': '42.0629915,-88.12271989999999'}
		,{'city': 'Hollywood, FL, USA', 'll': '26.0112014,-80.1494901'}
		,{'city': 'Homestead, FL, USA', 'll': '25.4687224,-80.4775569'}
		,{'city': 'Honolulu, HI, USA', 'll': '21.3069444,-157.8583333'}
		,{'city': 'Hoover, AL, USA', 'll': '33.4053867,-86.8113781'}
		,{'city': 'Houston, TX, USA', 'll': '29.7601927,-95.36938959999999'}
		,{'city': 'Huntersville, NC, USA', 'll': '35.410694,-80.84285040000002'}
		,{'city': 'Huntington, WV, USA', 'll': '38.4192496,-82.44515400000002'}
		,{'city': 'Huntington Beach, CA, USA', 'll': '33.660297,-117.9992265'}
		,{'city': 'Huntington Park, CA, USA', 'll': '33.9816812,-118.2250725'}
		,{'city': 'Huntsville, AL, USA', 'll': '34.7303688,-86.5861037'}
		,{'city': 'Hutchinson, KS, USA', 'll': '38.0608445,-97.92977429999999'}
		,{'city': 'Idaho Falls, ID, USA', 'll': '43.49165139999999,-112.0339645'}
		,{'city': 'Independence, MO, USA', 'll': '39.0911161,-94.41550679999999'}
		,{'city': 'Indianapolis, IN, USA', 'll': '39.7685155,-86.1580736'}
		,{'city': 'Indio, CA, USA', 'll': '33.7205771,-116.2155619'}
		,{'city': 'Inglewood, CA, USA', 'll': '33.9616801,-118.3531311'}
		,{'city': 'Iowa City, IA, USA', 'll': '41.6611277,-91.5301683'}
		,{'city': 'Irondequoit, NY, USA', 'll': '43.2133955,-77.5797226'}
		,{'city': 'Irvine, CA, USA', 'll': '33.6839473,-117.7946942'}
		,{'city': 'Irving, TX, USA', 'll': '32.8140177,-96.9488945'}
		,{'city': 'Jackson, MS, USA', 'll': '32.2987573,-90.1848103'}
		,{'city': 'Jackson, TN, USA', 'll': '35.6145169,-88.81394689999999'}
		,{'city': 'Jacksonville, FL, USA', 'll': '30.3321838,-81.65565099999999'}
		,{'city': 'Jacksonville, NC, USA', 'll': '34.7540524,-77.4302414'}
		,{'city': 'Janesville, WI, USA', 'll': '42.6827885,-89.0187222'}
		,{'city': 'Jefferson City, MO, USA', 'll': '38.57670170000001,-92.1735164'}
		,{'city': 'Jeffersonville, IN, USA', 'll': '38.2775702,-85.7371847'}
		,{'city': 'Jersey City, NJ, USA', 'll': '40.72815749999999,-74.0776417'}
		,{'city': 'Johns Creek, GA, USA', 'll': '34.0289259,-84.198579'}
		,{'city': 'Johnson City, TN, USA', 'll': '36.3134397,-82.3534727'}
		,{'city': 'Joliet, IL, USA', 'll': '41.525031,-88.0817251'}
		,{'city': 'Jonesboro, AR, USA', 'll': '35.84229670000001,-90.704279'}
		,{'city': 'Joplin, MO, USA', 'll': '37.08422710000001,-94.51328099999999'}
		,{'city': 'Jupiter, FL, USA', 'll': '26.9342246,-80.0942087'}
		,{'city': 'Kalamazoo, MI, USA', 'll': '42.2917069,-85.5872286'}
		,{'city': 'Kannapolis, NC, USA', 'll': '35.4873613,-80.6217341'}
		,{'city': 'Kansas City, MO, USA', 'll': '39.0997265,-94.5785667'}
		,{'city': 'Kansas City, KS, USA', 'll': '39.114053,-94.6274636'}
		,{'city': 'Kansas, IL 61933, USA', 'll': '39.5528129,-87.9394779'}
		,{'city': 'Kansas City, USA', 'll': '39.0653602,-94.5624426'}
		,{'city': 'Kearny, NJ, USA', 'll': '40.7684342,-74.1454214'}
		,{'city': 'Keller, TX, USA', 'll': '32.9345701,-97.251682'}
		,{'city': 'Kendale Lakes, FL, USA', 'll': '25.7081577,-80.4069986'}
		,{'city': 'Kendall, FL, USA', 'll': '25.6660336,-80.357827'}
		,{'city': 'Kenner, LA, USA', 'll': '29.9940924,-90.2417434'}
		,{'city': 'Kennewick, WA, USA', 'll': '46.2112458,-119.1372338'}
		,{'city': 'Kenosha, WI, USA', 'll': '42.5847425,-87.82118539999999'}
		,{'city': 'Kent, WA, USA', 'll': '47.3809335,-122.2348431'}
		,{'city': 'Kentwood, MI, USA', 'll': '42.8694731,-85.64474919999999'}
		,{'city': 'Kettering, OH, USA', 'll': '39.68950359999999,-84.1688274'}
		,{'city': 'Killeen, TX, USA', 'll': '31.1171194,-97.72779589999999'}
		,{'city': 'Kingsport, TN, USA', 'll': '36.548434,-82.5618186'}
		,{'city': 'Kirkland, WA, USA', 'll': '47.6814875,-122.2087353'}
		,{'city': 'Kissimmee, FL, USA', 'll': '28.2919557,-81.40757099999999'}
		,{'city': 'Knoxville, TN, USA', 'll': '35.9606384,-83.9207392'}
		,{'city': 'Kokomo, IN, USA', 'll': '40.486427,-86.13360329999999'}
		,{'city': 'Lacey, WA, USA', 'll': '47.03426289999999,-122.8231915'}
		,{'city': 'La Crosse, WI, USA', 'll': '43.8013556,-91.23958069999999'}
		,{'city': 'Lafayette, LA, USA', 'll': '30.2240897,-92.0198427'}
		,{'city': 'Lafayette, IN, USA', 'll': '40.4167022,-86.87528689999999'}
		,{'city': 'Laguna Niguel, CA, USA', 'll': '33.5225261,-117.7075526'}
		,{'city': 'La Habra, CA, USA', 'll': '33.9319578,-117.9461734'}
		,{'city': 'Lake Charles, LA, USA', 'll': '30.2265949,-93.2173758'}
		,{'city': 'Lake Elsinore, CA, USA', 'll': '33.6680772,-117.3272615'}
		,{'city': 'Lake Forest, CA, USA', 'll': '33.6469661,-117.689218'}
		,{'city': 'Lake Havasu City, AZ, USA', 'll': '34.483901,-114.3224548'}
		,{'city': 'Lakeland, FL, USA', 'll': '28.0394654,-81.9498042'}
		,{'city': 'Lake Ridge, VA, USA', 'll': '38.68789400000001,-77.29776180000002'}
		,{'city': 'Lakeville, MN, USA', 'll': '44.6496868,-93.24271999999999'}
		,{'city': 'Lakewood, CO, USA', 'll': '39.7047095,-105.0813734'}
		,{'city': 'Lakewood, CA, USA', 'll': '33.8536269,-118.1339563'}
		,{'city': 'Lakewood, WA, USA', 'll': '47.1717649,-122.518458'}
		,{'city': 'Lakewood Township, NJ, USA', 'll': '40.08212899999999,-74.2097014'}
		,{'city': 'Lakewood, OH, USA', 'll': '41.4819932,-81.7981908'}
		,{'city': 'La Mesa, CA, USA', 'll': '32.7678287,-117.0230839'}
		,{'city': 'La Mirada, CA, USA', 'll': '33.9172357,-118.0120086'}
		,{'city': 'Lancaster, CA, USA', 'll': '34.6867846,-118.1541632'}
		,{'city': 'Lancaster, PA, USA', 'll': '40.0378755,-76.3055144'}
		,{'city': 'Lancaster, USA', 'll': '40.0466571,-76.17837390000001'}
		,{'city': 'Lansing, MI, USA', 'll': '42.732535,-84.5555347'}
		,{'city': 'Lansing Charter Township, MI, USA', 'll': '42.7563594,-84.5283267'}
		,{'city': 'La Quinta, CA, USA', 'll': '33.6633573,-116.3100095'}
		,{'city': 'Laredo, TX, USA', 'll': '27.506407,-99.5075421'}
		,{'city': 'Largo, FL, USA', 'll': '27.9094665,-82.7873244'}
		,{'city': 'Las Cruces, NM, USA', 'll': '32.3199396,-106.7636538'}
		,{'city': 'Las Vegas, NV, USA', 'll': '36.114646,-115.172816'}
		,{'city': 'Lauderhill, FL, USA', 'll': '26.1403635,-80.2133808'}
		,{'city': 'Lawrence, KS, USA', 'll': '38.9716689,-95.2352501'}
		,{'city': 'Lawrence, MA, USA', 'll': '42.7070354,-71.1631137'}
		,{'city': 'Lawrence, IN, USA', 'll': '39.8386516,-86.0252612'}
		,{'city': 'Lawton, OK, USA', 'll': '34.6086854,-98.39033049999999'}
		,{'city': 'Layton, UT, USA', 'll': '41.0602216,-111.9710529'}
		,{'city': 'League City, TX, USA', 'll': '29.5074538,-95.0949303'}
		,{'city': 'Leesburg, VA, USA', 'll': '39.1156615,-77.56360149999999'}
		,{'city': "Lee's Summit, MO, USA", 'll': '38.916343,-94.383516'}
		,{'city': 'Lehi, UT, USA', 'll': '40.3916172,-111.8507662'}
		,{'city': 'Lehigh Acres, FL, USA', 'll': '26.6253497,-81.6248026'}
		,{'city': 'Lenexa, KS, USA', 'll': '38.9536174,-94.73357089999999'}
		,{'city': 'Levittown, PA, USA', 'll': '40.1551096,-74.8287747'}
		,{'city': 'Levittown, NY, USA', 'll': '40.7259336,-73.51429209999999'}
		,{'city': 'Lewisville, TX, USA', 'll': '33.046233,-96.994174'}
		,{'city': 'Lexington, KY, USA', 'll': '38.0405837,-84.5037164'}
		,{'city': 'Lincoln, NE, USA', 'll': '40.806862,-96.681679'}
		,{'city': 'Lincoln, CA, USA', 'll': '38.891565,-121.2930079'}
		,{'city': 'Linton Hall, Brentsville, VA, USA', 'll': '38.7598381,-77.5749905'}
		,{'city': 'Little Rock, AR, USA', 'll': '34.7464809,-92.28959479999999'}
		,{'city': 'Littleton, CO, USA', 'll': '39.613321,-105.0166498'}
		,{'city': 'Livermore, CA, USA', 'll': '37.6818745,-121.7680088'}
		,{'city': 'Livonia, MI, USA', 'll': '42.36837,-83.35270969999999'}
		,{'city': 'Lodi, CA, USA', 'll': '38.1301968,-121.2724473'}
		,{'city': 'Logan, UT, USA', 'll': '41.7354861,-111.834388'}
		,{'city': 'Lombard, IL, USA', 'll': '41.8800296,-88.00784349999999'}
		,{'city': 'Lompoc, CA, USA', 'll': '34.6391501,-120.4579409'}
		,{'city': 'Long Beach, CA, USA', 'll': '33.8041667,-118.1580556'}
		,{'city': 'Longmont, CO, USA', 'll': '40.1672068,-105.1019275'}
		,{'city': 'Longview, TX, USA', 'll': '32.5007037,-94.74048909999999'}
		,{'city': 'Lorain, OH, USA', 'll': '41.452819,-82.1823746'}
		,{'city': 'Los Angeles, CA, USA', 'll': '34.0522342,-118.2436849'}
		,{'city': 'Louisville, KY, USA', 'll': '38.2526647,-85.7584557'}
		,{'city': 'Loveland, CO, USA', 'll': '40.3977612,-105.0749801'}
		,{'city': 'Lowell, MA, USA', 'll': '42.6334247,-71.31617179999999'}
		,{'city': 'Lubbock, TX, USA', 'll': '33.5778631,-101.8551665'}
		,{'city': 'Lynchburg, VA, USA', 'll': '37.4137536,-79.14224639999999'}
		,{'city': 'Lynn, MA, USA', 'll': '42.46676300000001,-70.9494938'}
		,{'city': 'Lynwood, CA, USA', 'll': '33.930293,-118.2114603'}
		,{'city': 'McAllen, TX, USA', 'll': '26.2034071,-98.23001239999999'}
		,{'city': 'McKinney, TX, USA', 'll': '33.1972465,-96.6397822'}
		,{'city': 'McLean, VA, USA', 'll': '38.9338676,-77.1772604'}
		,{'city': 'Macon, GA, USA', 'll': '32.8406946,-83.6324022'}
		,{'city': 'Madera, CA, USA', 'll': '36.9613356,-120.0607176'}
		,{'city': 'Madison, WI, USA', 'll': '43.0730517,-89.4012302'}
		,{'city': 'Madison, AL, USA', 'll': '34.6992579,-86.74833180000002'}
		,{'city': 'Malden, MA, USA', 'll': '42.4250964,-71.066163'}
		,{'city': 'Manchester, NH, USA', 'll': '42.9956397,-71.4547891'}
		,{'city': 'Manhattan, KS, USA', 'll': '39.18360819999999,-96.57166939999999'}
		,{'city': 'Mansfield, TX, USA', 'll': '32.5631924,-97.1416768'}
		,{'city': 'Mansfield, OH, USA', 'll': '40.75839,-82.5154471'}
		,{'city': 'Manteca, CA, USA', 'll': '37.7974273,-121.2160526'}
		,{'city': 'Maple Grove, MN, USA', 'll': '45.0724642,-93.4557877'}
		,{'city': 'Margate, FL, USA', 'll': '26.2445263,-80.206436'}
		,{'city': 'Maricopa, AZ, USA', 'll': '33.0581063,-112.0476423'}
		,{'city': 'Marietta, GA, USA', 'll': '33.95260200000001,-84.5499327'}
		,{'city': 'Marysville, WA, USA', 'll': '48.0517637,-122.1770818'}
		,{'city': 'Medford, OR, USA', 'll': '42.3265152,-122.8755949'}
		,{'city': 'Medford, MA, USA', 'll': '42.4184296,-71.1061639'}
		,{'city': 'Melbourne, FL, USA', 'll': '28.0836269,-80.60810889999999'}
		,{'city': 'Memphis, TN, USA', 'll': '35.1495343,-90.0489801'}
		,{'city': 'Menifee, Sun City, CA, USA', 'll': '33.692372,-117.1884585'}
		,{'city': 'Mentor, OH, USA', 'll': '41.6661573,-81.339552'}
		,{'city': 'Merced, CA, USA', 'll': '37.3021632,-120.4829677'}
		,{'city': 'Meriden, CT, USA', 'll': '41.5381535,-72.80704349999999'}
		,{'city': 'Meridian, ID, USA', 'll': '43.6121087,-116.3915131'}
		,{'city': 'Meridian, MS, USA', 'll': '32.3643098,-88.703656'}
		,{'city': 'Mesa, AZ, USA', 'll': '33.4151843,-111.8314724'}
		,{'city': 'Mesquite, TX, USA', 'll': '32.76679550000001,-96.5991593'}
		,{'city': 'Metairie, LA, USA', 'll': '29.9840922,-90.1528519'}
		,{'city': 'Methuen, MA, USA', 'll': '42.7262016,-71.1908924'}
		,{'city': 'Miami, FL, USA', 'll': '25.7889689,-80.2264393'}
		,{'city': 'Miami Gardens, FL, USA', 'll': '25.9420377,-80.2456045'}
		,{'city': 'Middletown, OH, USA', 'll': '39.5150576,-84.39827629999999'}
		,{'city': 'Middletown, CT, USA', 'll': '41.5623209,-72.6506488'}
		,{'city': 'Midland, TX, USA', 'll': '31.9973456,-102.0779146'}
		,{'city': 'Midland, MI, USA', 'll': '43.6155825,-84.2472116'}
		,{'city': 'Midland, MI, USA', 'll': '43.57509779999999,-84.3542049'}
		,{'city': 'Midwest City, OK, USA', 'll': '35.4495065,-97.3967019'}
		,{'city': 'Milford, CT, USA', 'll': '41.2308945,-73.0635844'}
		,{'city': 'Millcreek, UT, USA', 'll': '40.6868914,-111.8754907'}
		,{'city': 'Milpitas, CA, USA', 'll': '37.4282724,-121.9066238'}
		,{'city': 'Milwaukee, WI, USA', 'll': '43.0389025,-87.9064736'}
		,{'city': 'Minneapolis, MN, USA', 'll': '44.9799654,-93.26383609999999'}
		,{'city': 'Minnetonka, MN, USA', 'll': '44.9211836,-93.4687489'}
		,{'city': 'Minot, ND, USA', 'll': '48.2325095,-101.2962732'}
		,{'city': 'Miramar, FL, USA', 'll': '25.9756704,-80.28675009999999'}
		,{'city': 'Mishawaka, IN, USA', 'll': '41.6619927,-86.15861559999999'}
		,{'city': 'Mission, TX, USA', 'll': '26.2159066,-98.32529319999999'}
		,{'city': 'Mission Viejo, CA, USA', 'll': '33.6000232,-117.6719953'}
		,{'city': 'Missoula, Mt, USA', 'll': '46.8605189,-114.019501'}
		,{'city': 'Missouri City, TX, USA', 'll': '29.6185669,-95.5377215'}
		,{'city': 'Mobile, AL, USA', 'll': '30.6943566,-88.04305409999999'}
		,{'city': 'Mobile, USA', 'll': '30.7921394,-88.24611829999999'}
		,{'city': 'Modesto, CA, USA', 'll': '37.63909719999999,-120.9968782'}
		,{'city': 'Moline, IL, USA', 'll': '41.5067003,-90.51513419999999'}
		,{'city': 'Monroe, LA, USA', 'll': '32.5093109,-92.1193012'}
		,{'city': 'Montebello, CA, USA', 'll': '34.0165053,-118.1137535'}
		,{'city': 'Monterey Park, CA, USA', 'll': '34.0625106,-118.1228476'}
		,{'city': 'Montgomery, AL, USA', 'll': '32.3668052,-86.2999689'}
		,{'city': 'Moore, OK, USA', 'll': '35.3395079,-97.48670279999999'}
		,{'city': 'Moreno Valley, CA, USA', 'll': '33.9424658,-117.2296717'}
		,{'city': 'Mountain View, CA, USA', 'll': '37.3860517,-122.0838511'}
		,{'city': 'Mt Pleasant, SC, USA', 'll': '32.7940651,-79.8625851'}
		,{'city': 'Mt Prospect, IL, USA', 'll': '42.0664167,-87.9372908'}
		,{'city': 'Mt Vernon, NY, USA', 'll': '40.9125992,-73.8370786'}
		,{'city': 'Muncie, IN, USA', 'll': '40.1933767,-85.3863599'}
		,{'city': 'Murfreesboro, TN, USA', 'll': '35.8456213,-86.39027'}
		,{'city': 'Murray, UT, USA', 'll': '40.6668916,-111.8879909'}
		,{'city': 'Murrieta, CA, USA', 'll': '33.5539143,-117.2139232'}
		,{'city': 'Nampa, ID, USA', 'll': '43.5407172,-116.5634624'}
		,{'city': 'Napa, CA, USA', 'll': '38.3047222,-122.2988889'}
		,{'city': 'Napa, CA, USA', 'll': '38.5024689,-122.2653887'}
		,{'city': 'Naperville, IL, USA', 'll': '41.7858629,-88.1472893'}
		,{'city': 'Nashua, NH, USA', 'll': '42.7653662,-71.46756599999999'}
		,{'city': 'Nashville, TN, USA', 'll': '36.1658899,-86.7844432'}
		,{'city': 'National City, CA, USA', 'll': '32.6781085,-117.0991967'}
		,{'city': 'Newark, NJ, USA', 'll': '40.735657,-74.1723667'}
		,{'city': 'Newark, OH, USA', 'll': '40.0581205,-82.4012642'}
		,{'city': 'Newark, CA, USA', 'll': '37.5296593,-122.0402399'}
		,{'city': 'New Bedford, MA, USA', 'll': '41.6362152,-70.93420499999999'}
		,{'city': 'New Braunfels, TX, USA', 'll': '29.7030024,-98.1244531'}
		,{'city': 'New Britain, CT, USA', 'll': '41.6612104,-72.7795419'}
		,{'city': 'New Brunswick, NJ, USA', 'll': '40.4862157,-74.4518188'}
		,{'city': 'New Haven, CT, USA', 'll': '41.3081527,-72.9281577'}
		,{'city': 'New Orleans, LA, USA', 'll': '29.95106579999999,-90.0715323'}
		,{'city': 'Newport Beach, CA, USA', 'll': '33.6189101,-117.9289469'}
		,{'city': 'Newport News, VA, USA', 'll': '37.0870821,-76.4730122'}
		,{'city': 'New Rochelle, NY, USA', 'll': '40.9114882,-73.7823549'}
		,{'city': 'Newton, MA, USA', 'll': '42.3370413,-71.20922139999999'}
		,{'city': 'New York, NY, USA', 'll': '40.7143528,-74.00597309999999'}
		,{'city': 'Manhattan, New York, NY, USA', 'll': '40.7834345,-73.9662495'}
		,{'city': 'Niagara Falls, NY, USA', 'll': '43.0962143,-79.0377388'}
		,{'city': 'Niagara Falls, ON, Canada', 'll': '43.0903891,-79.08610759999999'}
		,{'city': 'Noblesville, IN, USA', 'll': '40.0455917,-86.0085955'}
		,{'city': 'Norfolk, VA, USA', 'll': '36.8507689,-76.28587259999999'}
		,{'city': 'Normal, IL, USA', 'll': '40.5142026,-88.9906312'}
		,{'city': 'Norman, OK, USA', 'll': '35.2225668,-97.4394777'}
		,{'city': 'North Atlanta, GA, USA', 'll': '33.8651033,-84.3365917'}
		,{'city': 'North Attleboro, MA, USA', 'll': '41.9695516,-71.35654389999999'}
		,{'city': 'North Bethesda, MD, USA', 'll': '39.0445535,-77.11886779999999'}
		,{'city': 'North Charleston, SC, USA', 'll': '32.8546197,-79.9748103'}
		,{'city': 'North Highlands, CA, USA', 'll': '38.6857362,-121.3721745'}
		,{'city': 'North Las Vegas, NV, USA', 'll': '36.1988592,-115.1175013'}
		,{'city': 'North Lauderdale, FL, USA', 'll': '26.217305,-80.2258811'}
		,{'city': 'North Little Rock, AR, USA', 'll': '34.769536,-92.2670941'}
		,{'city': 'North Miami, FL, USA', 'll': '25.8900949,-80.1867138'}
		,{'city': 'North Miami Beach, FL, USA', 'll': '25.9331488,-80.1625463'}
		,{'city': 'North Port, FL, USA', 'll': '27.044224,-82.2359254'}
		,{'city': 'North Richland Hills, TX, USA', 'll': '32.8342952,-97.2289029'}
		,{'city': 'Norwalk, CA, USA', 'll': '33.9022367,-118.081733'}
		,{'city': 'Norwalk, CT, USA', 'll': '41.1175966,-73.40789680000002'}
		,{'city': 'Novato, CA, USA', 'll': '38.1074198,-122.5697032'}
		,{'city': 'Novi, MI, USA', 'll': '42.48059,-83.4754913'}
		,{'city': 'Oakland, CA, USA', 'll': '37.8043637,-122.2711137'}
		,{'city': 'Oakland Park, FL, USA', 'll': '26.1723065,-80.1319893'}
		,{'city': 'Oak Lawn, IL, USA', 'll': '41.7108662,-87.7581081'}
		,{'city': 'Oak Park, IL, USA', 'll': '41.8850317,-87.7845025'}
		,{'city': 'Ocala, FL, USA', 'll': '29.1871986,-82.14009229999999'}
		,{'city': 'Oceanside, CA, USA', 'll': '33.1958696,-117.3794834'}
		,{'city': 'Odenton, MD, USA', 'll': '39.0839981,-76.7002462'}
		,{'city': 'Odessa, TX, USA', 'll': '31.8456816,-102.3676431'}
		,{'city': "O'Fallon, MO, USA", 'll': '38.8106075,-90.69984769999999'}
		,{'city': 'Ogden, UT, USA', 'll': '41.223,-111.9738304'}
		,{'city': 'Oklahoma City, OK, USA', 'll': '35.4675602,-97.5164276'}
		,{'city': 'Oklahoma City, OK, USA', 'll': '35.5006256,-97.6114217'}
		,{'city': 'Olathe, KS, USA', 'll': '38.8813958,-94.81912849999999'}
		,{'city': 'Olympia, WA, USA', 'll': '47.0378741,-122.9006951'}
		,{'city': 'Omaha, NE, USA', 'll': '41.2523634,-95.99798829999999'}
		,{'city': 'Ontario, CA, USA', 'll': '34.0633443,-117.6508876'}
		,{'city': 'Orange, CA, USA', 'll': '33.7877944,-117.8531119'}
		,{'city': 'Orem, UT, USA', 'll': '40.2968979,-111.6946475'}
		,{'city': 'Orlando, FL, USA', 'll': '28.5383355,-81.3792365'}
		,{'city': 'Orland Park, IL, USA', 'll': '41.6303103,-87.85394250000002'}
		,{'city': 'Oro Valley, AZ, USA', 'll': '32.3909071,-110.966488'}
		,{'city': 'Oshkosh, WI, USA', 'll': '44.0247062,-88.5426136'}
		,{'city': 'Overland Park, KS, USA', 'll': '38.9822282,-94.6707917'}
		,{'city': 'Owensboro, KY, USA', 'll': '37.7719074,-87.1111676'}
		,{'city': 'Oxnard, CA, USA', 'll': '34.1975048,-119.1770516'}
		,{'city': 'Palatine, IL, USA', 'll': '42.1103041,-88.03424000000001'}
		,{'city': 'Palm Bay, FL, USA', 'll': '28.0344621,-80.5886646'}
		,{'city': 'Palm Beach Gardens, FL, USA', 'll': '26.8233946,-80.13865469999999'}
		,{'city': 'Palm Coast, FL, USA', 'll': '29.5849736,-81.2078411'}
		,{'city': 'Palmdale, CA, USA', 'll': '34.5794343,-118.1164613'}
		,{'city': 'Palm Desert, CA, USA', 'll': '33.7222445,-116.3744556'}
		,{'city': 'Palm Harbor, FL, USA', 'll': '28.0780718,-82.7637127'}
		,{'city': 'Palm Springs, CA, USA', 'll': '33.8302961,-116.5452921'}
		,{'city': 'Palo Alto, CA, USA', 'll': '37.4418834,-122.1430195'}
		,{'city': 'Paradise, NV, USA', 'll': '36.0971945,-115.1466648'}
		,{'city': 'Paramount, CA, USA', 'll': '33.8894598,-118.1597911'}
		,{'city': 'Parker, CO, USA', 'll': '39.5186002,-104.7613633'}
		,{'city': 'Parma, OH, USA', 'll': '41.4047742,-81.7229086'}
		,{'city': 'Pasadena, TX, USA', 'll': '29.6910625,-95.2091006'}
		,{'city': 'Pasadena, CA, USA', 'll': '34.1477849,-118.1445155'}
		,{'city': 'Pasco, WA, USA', 'll': '46.2395793,-119.1005657'}
		,{'city': 'Passaic, NJ, USA', 'll': '40.8567662,-74.1284764'}
		,{'city': 'Paterson, NJ, USA', 'll': '40.9167654,-74.17181099999999'}
		,{'city': 'Pawtucket, RI, USA', 'll': '41.878711,-71.38255579999999'}
		,{'city': 'Peabody, MA, USA', 'll': '42.5278731,-70.9286609'}
		,{'city': 'Pearland, TX, USA', 'll': '29.5635666,-95.2860474'}
		,{'city': 'Pearl City, HI, USA', 'll': '21.3972222,-157.9733333'}
		,{'city': 'Pembroke Pines, FL, USA', 'll': '26.0122378,-80.3152233'}
		,{'city': 'Pensacola, FL, USA', 'll': '30.42130899999999,-87.2169149'}
		,{'city': 'Peoria, AZ, USA', 'll': '33.5805955,-112.2373779'}
		,{'city': 'Peoria, IL, USA', 'll': '40.6936488,-89.5889864'}
		,{'city': 'Perris, CA, USA', 'll': '33.7825194,-117.2286478'}
		,{'city': 'Perth Amboy, NJ, USA', 'll': '40.5067723,-74.2654234'}
		,{'city': 'Petaluma, CA, USA', 'll': '38.232417,-122.6366524'}
		,{'city': 'Pflugerville, TX, USA', 'll': '30.4393696,-97.62000429999999'}
		,{'city': 'Pharr, TX, USA', 'll': '26.1947962,-98.1836216'}
		,{'city': 'Philadelphia, PA, USA', 'll': '39.952335,-75.16378900000001'}
		,{'city': 'Phoenix, AZ, USA', 'll': '33.4483771,-112.0740373'}
		,{'city': 'Pico Rivera, CA, USA', 'll': '33.9830688,-118.096735'}
		,{'city': 'Pine Bluff, AR, USA', 'll': '34.2284312,-92.00319549999999'}
		,{'city': 'Pine Hills, FL, USA', 'll': '28.5577794,-81.4534046'}
		,{'city': 'Pinellas Park, FL, USA', 'll': '27.8428025,-82.6995443'}
		,{'city': 'Pittsburg, CA, USA', 'll': '38.0279762,-121.8846806'}
		,{'city': 'California-Kirkbride, Pittsburgh, PA, USA', 'll': '40.4600435,-80.0213538'}
		,{'city': 'Pittsburgh, PA, USA', 'll': '40.44062479999999,-79.9958864'}
		,{'city': 'Pittsfield, MA, USA', 'll': '42.4500845,-73.2453824'}
		,{'city': 'Placentia, CA, USA', 'll': '33.8722371,-117.8703363'}
		,{'city': 'Plainfield, NJ, USA', 'll': '40.6337136,-74.4073736'}
		,{'city': 'Plainfield, IL, USA', 'll': '41.615915,-88.20406899999999'}
		,{'city': 'Plano, TX, USA', 'll': '33.0198431,-96.6988856'}
		,{'city': 'Plantation, FL, USA', 'll': '26.1275862,-80.23310359999999'}
		,{'city': 'Pleasanton, CA, USA', 'll': '37.6624312,-121.8746789'}
		,{'city': 'Plymouth, MN, USA', 'll': '45.0105194,-93.4555093'}
		,{'city': 'Pocatello, ID, USA', 'll': '42.8713032,-112.4455344'}
		,{'city': 'Poinciana, FL, USA', 'll': '28.1558333,-81.47638889999999'}
		,{'city': 'Poinciana, FL, USA', 'll': '28.1402939,-81.4584058'}
		,{'city': 'Pomona, CA, USA', 'll': '34.0552267,-117.7523048'}
		,{'city': 'Pompano Beach, FL, USA', 'll': '26.2378597,-80.1247667'}
		,{'city': 'Pontiac, MI, USA', 'll': '42.6389216,-83.29104679999999'}
		,{'city': 'Portage, MI, USA', 'll': '42.2011538,-85.5800022'}
		,{'city': 'Portage Township, MI, USA', 'll': '46.9338608,-88.66166109999999'}
		,{'city': 'Port Arthur, TX, USA', 'll': '29.8849504,-93.93994699999999'}
		,{'city': 'Port Charlotte, FL, USA', 'll': '26.9761707,-82.09064479999999'}
		,{'city': 'Porterville, CA 93257, USA', 'll': '36.06523,-119.0167679'}
		,{'city': 'Portland, OR, USA', 'll': '45.5234515,-122.6762071'}
		,{'city': 'Portland, ME, USA', 'll': '43.66147100000001,-70.2553259'}
		,{'city': 'Port Orange, FL, USA', 'll': '29.1383165,-80.9956105'}
		,{'city': 'Port St Lucie, FL, USA', 'll': '27.2758333,-80.35499999999999'}
		,{'city': 'Portsmouth, VA, USA', 'll': '36.8354258,-76.2982742'}
		,{'city': 'Potomac, MD, USA', 'll': '39.0181651,-77.2085914'}
		,{'city': 'North Branch Potomac River, United States', 'll': '39.3270677,-79.2802633'}
		,{'city': 'Poway, CA, USA', 'll': '32.9628232,-117.0358646'}
		,{'city': 'Prescott, AZ, USA', 'll': '34.5400242,-112.4685025'}
		,{'city': 'Prescott Valley, AZ, USA', 'll': '34.6100243,-112.315721'}
		,{'city': 'Providence, RI, USA', 'll': '41.8239891,-71.4128343'}
		,{'city': 'Provo, UT, USA', 'll': '40.2338438,-111.6585337'}
		,{'city': 'Pueblo, CO, USA', 'll': '38.2544472,-104.6091409'}
		,{'city': 'Quincy, MA, USA', 'll': '42.2528772,-71.0022705'}
		,{'city': 'Racine, WI, USA', 'll': '42.7261309,-87.78285230000002'}
		,{'city': 'Raleigh, NC, USA', 'll': '35.772096,-78.6386145'}
		,{'city': 'Rancho Cordova, CA, USA', 'll': '38.5890723,-121.302728'}
		,{'city': 'Rancho Cucamonga, CA, USA', 'll': '34.10639889999999,-117.5931084'}
		,{'city': 'Rancho Palos Verdes, CA, USA', 'll': '33.7444613,-118.3870173'}
		,{'city': 'Rancho Santa Margarita, CA, USA', 'll': '33.640855,-117.603104'}
		,{'city': 'Rapid City, SD, USA', 'll': '44.0805434,-103.2310149'}
		,{'city': 'Reading, PA, USA', 'll': '40.3356483,-75.9268747'}
		,{'city': 'Redding, CA, USA', 'll': '40.5865396,-122.3916754'}
		,{'city': 'Redlands, CA, USA', 'll': '34.0555693,-117.1825381'}
		,{'city': 'Redmond, WA, USA', 'll': '47.6739881,-122.121512'}
		,{'city': 'Redondo Beach, CA, USA', 'll': '33.8491816,-118.3884078'}
		,{'city': 'Redwood City, CA, USA', 'll': '37.48521520000001,-122.2363548'}
		,{'city': 'Reno, NV, USA', 'll': '39.5296329,-119.8138027'}
		,{'city': 'Renton, WA, USA', 'll': '47.48287759999999,-122.2170661'}
		,{'city': 'Reston, VA, USA', 'll': '38.9586307,-77.35700279999999'}
		,{'city': 'Revere, MA, USA', 'll': '42.4084302,-71.0119948'}
		,{'city': 'Rialto, CA, USA', 'll': '34.1064001,-117.3703235'}
		,{'city': 'Richardson, TX, USA', 'll': '32.9481789,-96.7297205'}
		,{'city': 'Richland, WA, USA', 'll': '46.2856907,-119.2844621'}
		,{'city': 'Richmond, VA, USA', 'll': '37.5407246,-77.4360481'}
		,{'city': 'Richmond, CA, USA', 'll': '37.9357576,-122.3477486'}
		,{'city': 'Rio Rancho, NM, USA', 'll': '35.2327544,-106.6630437'}
		,{'city': 'Riverside, CA, USA', 'll': '33.9533487,-117.3961564'}
		,{'city': 'Riverton, UT, USA', 'll': '40.521893,-111.9391023'}
		,{'city': 'Riverview, FL, USA', 'll': '27.8661364,-82.32648089999999'}
		,{'city': 'Roanoke, VA, USA', 'll': '37.2709704,-79.9414266'}
		,{'city': 'Roanoke, USA', 'll': '37.30084850000001,-80.0087746'}
		,{'city': 'Rochester, NY, USA', 'll': '43.16103,-77.6109219'}
		,{'city': 'Rochester, MN, USA', 'll': '44.0216306,-92.4698992'}
		,{'city': 'Rochester Hills, MI, USA', 'll': '42.65836609999999,-83.1499322'}
		,{'city': 'Rockford, IL, USA', 'll': '42.2711311,-89.0939952'}
		,{'city': 'Rock Hill, SC, USA', 'll': '34.9248667,-81.02507840000001'}
		,{'city': 'Rocklin, CA, USA', 'll': '38.7907339,-121.2357828'}
		,{'city': 'Rockville, MD, USA', 'll': '39.0839973,-77.1527578'}
		,{'city': 'Rockwall, TX, USA', 'll': '32.93123360000001,-96.4597089'}
		,{'city': 'Rocky Mt, NC, USA', 'll': '35.9382103,-77.7905339'}
		,{'city': 'Rogers, AR, USA', 'll': '36.3320196,-94.1185366'}
		,{'city': 'Rohnert Park, CA, USA', 'll': '38.3396367,-122.7010984'}
		,{'city': 'Romeoville, IL, USA', 'll': '41.6475306,-88.0895061'}
		,{'city': 'Rosemead, CA, USA', 'll': '34.0805651,-118.072846'}
		,{'city': 'Roseville, CA, USA', 'll': '38.7521235,-121.2880059'}
		,{'city': 'Roseville, MI, USA', 'll': '42.4972583,-82.9371409'}
		,{'city': 'Roswell, GA, USA', 'll': '34.02315530000001,-84.3615928'}
		,{'city': 'Roswell, NM, USA', 'll': '33.3942655,-104.5230242'}
		,{'city': 'Round Rock, TX, USA', 'll': '30.5082551,-97.678896'}
		,{'city': 'Rowland Heights, CA, USA', 'll': '33.9761238,-117.9053395'}
		,{'city': 'Rowlett, TX, USA', 'll': '32.9029017,-96.56388'}
		,{'city': 'Royal Oak, MI, USA', 'll': '42.4894801,-83.1446485'}
		,{'city': 'Sacramento, CA, USA', 'll': '38.5815719,-121.4943996'}
		,{'city': 'Saginaw, MI, USA', 'll': '43.4194699,-83.9508068'}
		,{'city': 'St Charles, MO, USA', 'll': '38.7833333,-90.5166667'}
		,{'city': 'St Clair Shores, MI, USA', 'll': '42.4931,-82.8911339'}
		,{'city': 'St Cloud, MN, USA', 'll': '45.5538889,-94.1702778'}
		,{'city': 'St George, UT, USA', 'll': '37.0952778,-113.5780556'}
		,{'city': 'St Joseph, MO, USA', 'll': '39.7577778,-94.83638889999999'}
		,{'city': 'St Louis, MO, USA', 'll': '38.6270025,-90.19940419999999'}
		,{'city': 'St Louis Park, MN, USA', 'll': '44.9597376,-93.3702186'}
		,{'city': 'St Paul, MN, USA', 'll': '44.95416669999999,-93.11388889999999'}
		,{'city': 'St Peters, MO, USA', 'll': '38.778475,-90.60528099999999'}
		,{'city': 'St Petersburg, FL, USA', 'll': '27.7730556,-82.64'}
		,{'city': 'Salem, OR, USA', 'll': '44.9428975,-123.0350963'}
		,{'city': 'Salem, MA, USA', 'll': '42.51954,-70.8967155'}
		,{'city': 'Salina, KS, USA', 'll': '38.8402805,-97.61142369999999'}
		,{'city': 'Salinas, CA, USA', 'll': '36.6777372,-121.6555013'}
		,{'city': 'Salt Lake City, UT, USA', 'll': '40.7607793,-111.8910474'}
		,{'city': 'Sammamish, WA, USA', 'll': '47.64176639999999,-122.0803998'}
		,{'city': 'San Angelo, TX, USA', 'll': '31.4637723,-100.4370375'}
		,{'city': 'San Antonio, TX, USA', 'll': '29.4241219,-98.49362819999999'}
		,{'city': 'San Bernardino, CA, USA', 'll': '34.1083449,-117.2897652'}
		,{'city': 'San Bruno, CA, USA', 'll': '37.6304904,-122.4110835'}
		,{'city': 'Ventura, CA, USA', 'll': '34.2746405,-119.2290053'}
		,{'city': 'San Clemente, CA, USA', 'll': '33.4269728,-117.6119925'}
		,{'city': 'San Diego, CA, USA', 'll': '32.7153292,-117.1572551'}
		,{'city': 'Sandy, UT, USA', 'll': '40.57250000000001,-111.8597222'}
		,{'city': 'Sandy Springs, GA, USA', 'll': '33.9242688,-84.3785379'}
		,{'city': 'Sanford, FL, USA', 'll': '28.7588218,-81.29417939999999'}
		,{'city': 'San Francisco, CA, USA', 'll': '37.7749295,-122.4194155'}
		,{'city': 'San Jacinto, CA, USA', 'll': '33.7839084,-116.958635'}
		,{'city': 'San Jose, CA, USA', 'll': '37.3393857,-121.8949555'}
		,{'city': 'San Leandro, CA, USA', 'll': '37.7249296,-122.1560768'}
		,{'city': 'San Luis Obispo, CA, USA', 'll': '35.2827524,-120.6596156'}
		,{'city': 'San Marcos, CA, USA', 'll': '33.1433723,-117.1661449'}
		,{'city': 'San Marcos, TX, USA', 'll': '29.8832749,-97.9413941'}
		,{'city': 'San Mateo, CA, USA', 'll': '37.5629917,-122.3255254'}
		,{'city': 'San Rafael, CA, USA', 'll': '37.9735346,-122.5310874'}
		,{'city': 'San Ramon, CA, USA', 'll': '37.7799273,-121.9780153'}
		,{'city': 'Santa Ana, CA, USA', 'll': '33.7455731,-117.8678338'}
		,{'city': 'Santa Barbara, CA, USA', 'll': '34.4208305,-119.6981901'}
		,{'city': 'Santa Clara, CA, USA', 'll': '37.3541079,-121.9552356'}
		,{'city': 'Santa Clarita, CA, USA', 'll': '34.3916641,-118.542586'}
		,{'city': 'Santa Cruz, CA, USA', 'll': '36.9741171,-122.0307963'}
		,{'city': 'Santa Fe, NM, USA', 'll': '35.6869752,-105.937799'}
		,{'city': 'Santa Maria, CA, USA', 'll': '34.9530337,-120.4357191'}
		,{'city': 'Santa Monica, CA, USA', 'll': '34.0194543,-118.4911912'}
		,{'city': 'San Tan Valley, AZ, USA', 'll': '33.1702778,-111.5722222'}
		,{'city': 'Santa Rosa, CA, USA', 'll': '38.4404674,-122.7144314'}
		,{'city': 'Santee, CA, USA', 'll': '32.8383828,-116.9739167'}
		,{'city': 'Sarasota, FL, USA', 'll': '27.3364347,-82.53065269999999'}
		,{'city': 'Savannah, GA, USA', 'll': '32.0835407,-81.09983419999999'}
		,{'city': 'Sayreville, NJ, USA', 'll': '40.45940210000001,-74.360846'}
		,{'city': 'Schaumburg, IL, USA', 'll': '42.0333607,-88.0834059'}
		,{'city': 'Schenectady, NY, USA', 'll': '42.8142432,-73.9395687'}
		,{'city': 'Scottsdale, AZ, USA', 'll': '33.4941704,-111.9260519'}
		,{'city': 'Scranton, PA, USA', 'll': '41.408969,-75.66241219999999'}
		,{'city': 'Seattle, WA, USA', 'll': '47.6062095,-122.3320708'}
		,{'city': 'Severn, MD, USA', 'll': '39.1370528,-76.6983022'}
		,{'city': 'Shakopee, MN, USA', 'll': '44.7973962,-93.5272861'}
		,{'city': 'Shawnee, KS, USA', 'll': '39.02284849999999,-94.7151865'}
		,{'city': 'Sheboygan, WI, USA', 'll': '43.7508284,-87.71453'}
		,{'city': 'Shoreline, WA, USA', 'll': '47.7556531,-122.3415178'}
		,{'city': 'Shreveport, LA, USA', 'll': '32.5251516,-93.7501789'}
		,{'city': 'Sierra Vista, AZ, USA', 'll': '31.5455001,-110.2772856'}
		,{'city': 'Silver Spring, MD, USA', 'll': '38.99066570000001,-77.026088'}
		,{'city': 'Simi Valley, CA, USA', 'll': '34.2694474,-118.781482'}
		,{'city': 'Sioux City, IA, USA', 'll': '42.4999942,-96.40030689999999'}
		,{'city': 'Sioux Falls, SD, USA', 'll': '43.5499749,-96.700327'}
		,{'city': 'Skokie, IL, USA', 'll': '42.0333636,-87.7333934'}
		,{'city': 'Smyrna, GA, USA', 'll': '33.8839926,-84.51437609999999'}
		,{'city': 'Smyrna, TN, USA', 'll': '35.9828412,-86.5186045'}
		,{'city': 'Somerville, MA, USA', 'll': '42.3875968,-71.0994968'}
		,{'city': 'Southaven, MS, USA', 'll': '34.9889818,-90.0125913'}
		,{'city': 'South Bend, IN, USA', 'll': '41.6833813,-86.25000659999999'}
		,{'city': 'Southfield, MI, USA', 'll': '42.4733688,-83.2218731'}
		,{'city': 'South Gate, CA, USA', 'll': '33.954737,-118.2120161'}
		,{'city': 'South Hill, WA, USA', 'll': '47.1412122,-122.2701183'}
		,{'city': 'South Jordan, UT, USA', 'll': '40.5621704,-111.929658'}
		,{'city': 'South San Francisco, CA, USA', 'll': '37.654656,-122.4077498'}
		,{'city': 'South Valley, NM, USA', 'll': '35.0100487,-106.6780809'}
		,{'city': 'South Whittier, CA, USA', 'll': '33.9347222,-118.0308333'}
		,{'city': 'Sparks, NV, USA', 'll': '39.5349112,-119.7526886'}
		,{'city': 'Spokane, WA, USA', 'll': '47.6587802,-117.4260466'}
		,{'city': 'Spokane, USA', 'll': '47.5909399,-117.2776573'}
		,{'city': 'Spokane Valley, WA, USA', 'll': '47.6732281,-117.2393748'}
		,{'city': 'Spring, TX, USA', 'll': '30.0799405,-95.41716009999999'}
		,{'city': 'Springdale, AR, USA', 'll': '36.18674420000001,-94.1288141'}
		,{'city': 'Springfield, MO, USA', 'll': '37.2089572,-93.29229889999999'}
		,{'city': 'Springfield, MA, USA', 'll': '42.1014831,-72.589811'}
		,{'city': 'Springfield, IL, USA', 'll': '39.78172130000001,-89.6501481'}
		,{'city': 'Springfield, OR, USA', 'll': '44.0462362,-123.0220289'}
		,{'city': 'Springfield, OH, USA', 'll': '39.9242266,-83.8088171'}
		,{'city': 'Spring Hill, FL, USA', 'll': '28.4831682,-82.5369872'}
		,{'city': 'Spring Valley, NV, USA', 'll': '36.1080258,-115.2450006'}
		,{'city': 'Stamford, CT, USA', 'll': '41.0534302,-73.5387341'}
		,{'city': 'State College, PA, USA', 'll': '40.7933949,-77.8600012'}
		,{'city': 'Sterling Heights, MI, USA', 'll': '42.5803122,-83.0302033'}
		,{'city': 'Stillwater, OK, USA', 'll': '36.1156071,-97.0583681'}
		,{'city': 'Stockton, CA, USA', 'll': '37.9577016,-121.2907796'}
		,{'city': 'Stratford, CT, USA', 'll': '41.18454149999999,-73.1331651'}
		,{'city': 'Strongsville, OH, USA', 'll': '41.3144966,-81.83569'}
		,{'city': 'Suffolk, VA, USA', 'll': '36.7282054,-76.5835621'}
		,{'city': 'Sugar Land, TX, USA', 'll': '29.6196787,-95.6349463'}
		,{'city': 'Summerville, SC, USA', 'll': '33.0185039,-80.17564809999999'}
		,{'city': 'Sunnyvale, CA, USA', 'll': '37.36883,-122.0363496'}
		,{'city': 'Sunrise, FL, USA', 'll': '26.1571743,-80.28622560000001'}
		,{'city': 'Sunrise Manor, NV, USA', 'll': '36.2110819,-115.0730563'}
		,{'city': 'Surprise, AZ, USA', 'll': '33.639099,-112.3957576'}
		,{'city': 'Syracuse, NY, USA', 'll': '43.0481221,-76.14742439999999'}
		,{'city': 'Syracuse, NY, USA', 'll': '43.114397,-76.2710833'}
		,{'city': 'Tacoma, WA, USA', 'll': '47.2528768,-122.4442906'}
		,{'city': 'Tallahassee, FL, USA', 'll': '30.4382559,-84.28073289999999'}
		,{'city': 'Tamarac, FL, USA', 'll': '26.2128609,-80.2497707'}
		,{'city': 'Tamiami, FL, USA', 'll': '25.7587114,-80.398387'}
		,{'city': 'Tampa, FL, USA', 'll': '27.950575,-82.4571776'}
		,{'city': 'Taunton, MA, USA', 'll': '41.900101,-71.0897674'}
		,{'city': 'Taylor, MI, USA', 'll': '42.240872,-83.2696509'}
		,{'city': 'Taylorsville, UT, USA', 'll': '40.66772479999999,-111.9388258'}
		,{'city': 'Temecula, CA, USA', 'll': '33.4936391,-117.1483648'}
		,{'city': 'Tempe, AZ, USA', 'll': '33.4255104,-111.9400054'}
		,{'city': 'Temple, TX, USA', 'll': '31.0982344,-97.342782'}
		,{'city': 'Terre Haute, IN, USA', 'll': '39.4667034,-87.41390919999999'}
		,{'city': 'Texas City, TX, USA', 'll': '29.383845,-94.9027002'}
		,{'city': 'The Hammocks, FL, USA', 'll': '25.6714925,-80.4444997'}
		,{'city': 'The Villages, FL, USA', 'll': '28.9377778,-81.9711111'}
		,{'city': 'The Woodlands, TX, USA', 'll': '30.1658207,-95.46126249999999'}
		,{'city': 'Thornton, CO, USA', 'll': '39.8680412,-104.9719243'}
		,{'city': 'Thousand Oaks, CA, USA', 'll': '34.1705609,-118.8375937'}
		,{'city': 'Tigard, OR, USA', 'll': '45.4312294,-122.7714861'}
		,{'city': 'Tinley Park, IL, USA', 'll': '41.5733669,-87.7844944'}
		,{'city': 'Titusville, FL, USA', 'll': '28.6122187,-80.8075537'}
		,{'city': 'Toledo, OH, USA', 'll': '41.6639383,-83.55521200000001'}
		,{'city': 'Toms River, NJ, USA', 'll': '39.9537358,-74.1979458'}
		,{'city': 'New York, NY, USA', 'll': '40.7143528,-74.00597309999999'}
		,{'city': 'Topeka, KS, USA', 'll': '39.0558235,-95.68901849999999'}
		,{'city': 'Torrance, CA, USA', 'll': '33.8358492,-118.3406288'}
		,{'city': "Town 'n' Country, FL, USA", 'll': '28.0105745,-82.57731930000001'}
		,{'city': 'Towson, MD, USA', 'll': '39.4014955,-76.6019125'}
		,{'city': 'Tracy, CA, USA', 'll': '37.7396513,-121.4252227'}
		,{'city': 'Trenton, NJ, USA', 'll': '40.2170534,-74.7429384'}
		,{'city': 'Troy, MI, USA', 'll': '42.6055893,-83.1499304'}
		,{'city': 'Troy, NY, USA', 'll': '42.7284117,-73.69178509999999'}
		,{'city': 'Tuckahoe, VA, USA', 'll': '37.5901463,-77.5563761'}
		,{'city': 'Tucson, AZ, USA', 'll': '32.2217429,-110.926479'}
		,{'city': 'Tulare, CA 93274, USA', 'll': '36.2077288,-119.3473379'}
		,{'city': 'Tulsa, OK, USA', 'll': '36.1539816,-95.99277500000001'}
		,{'city': 'Tulsa, USA', 'll': '36.2740199,-96.2375947'}
		,{'city': 'Turlock, CA, USA', 'll': '37.4946568,-120.8465941'}
		,{'city': 'Tuscaloosa, AL, USA', 'll': '33.2098407,-87.56917349999999'}
		,{'city': 'Tustin, CA, USA', 'll': '33.7458511,-117.826166'}
		,{'city': 'Twin Falls, ID, USA', 'll': '42.5629668,-114.4608711'}
		,{'city': 'Tyler, TX, USA', 'll': '32.3512601,-95.30106239999999'}
		,{'city': 'Union City, CA, USA', 'll': '37.5919304,-122.0456199'}
		,{'city': 'Union City, NJ, USA', 'll': '40.7795455,-74.02375119999999'}
		,{'city': 'Union, NJ, USA', 'll': '40.6357419,-74.9580495'}
		,{'city': 'Upland, CA, USA', 'll': '34.09751,-117.6483876'}
		,{'city': 'Urbana, IL, USA', 'll': '40.1105875,-88.2072697'}
		,{'city': 'Urbandale, IA, USA', 'll': '41.6266555,-93.71216559999999'}
		,{'city': 'Utica, NY, USA', 'll': '43.100903,-75.232664'}
		,{'city': 'Vacaville, CA, USA', 'll': '38.3565773,-121.9877444'}
		,{'city': 'Valdosta, GA, USA', 'll': '30.8327022,-83.2784851'}
		,{'city': 'Vallejo, CA, USA', 'll': '38.1040864,-122.2566367'}
		,{'city': 'Valrico, FL, USA', 'll': '27.9408333,-82.24249999999999'}
		,{'city': 'Vancouver, WA, USA', 'll': '45.6387281,-122.6614861'}
		,{'city': 'Victoria, TX, USA', 'll': '28.8052674,-97.0035982'}
		,{'city': 'Victorville, CA, USA', 'll': '34.5361067,-117.2911565'}
		,{'city': 'Vineland, NJ, USA', 'll': '39.4862267,-75.02573129999999'}
		,{'city': 'Virginia Beach, VA, USA', 'll': '36.8529263,-75.97798499999999'}
		,{'city': 'Visalia, CA, USA', 'll': '36.3302284,-119.2920585'}
		,{'city': 'Vista, CA, USA', 'll': '33.2000368,-117.2425355'}
		,{'city': 'Waco, TX, USA', 'll': '31.549333,-97.1466695'}
		,{'city': 'Waldorf, MD, USA', 'll': '38.6343544,-76.90668289999999'}
		,{'city': 'Walnut Creek, CA, USA', 'll': '37.9063131,-122.064963'}
		,{'city': 'Waltham, MA, USA', 'll': '42.3764852,-71.2356113'}
		,{'city': 'Warner Robins, GA, USA', 'll': '32.6086111,-83.6380556'}
		,{'city': 'Warren, MI, USA', 'll': '42.49299999999999,-83.02819699999999'}
		,{'city': 'Warwick, RI, USA', 'll': '41.7001009,-71.4161671'}
		,{'city': 'Washington, DC, USA', 'll': '38.8951118,-77.0363658'}
		,{'city': 'Waterbury, CT, USA', 'll': '41.5581525,-73.0514965'}
		,{'city': 'Waterloo, IA, USA', 'll': '42.4927641,-92.34296309999999'}
		,{'city': 'Watsonville, CA, USA', 'll': '36.910231,-121.7568946'}
		,{'city': 'Waukegan, IL, USA', 'll': '42.3636331,-87.84479379999999'}
		,{'city': 'Waukesha, WI, USA', 'll': '43.0116784,-88.2314813'}
		,{'city': 'Wauwatosa, WI, USA', 'll': '43.0494572,-88.0075875'}
		,{'city': 'Wellington, FL, USA', 'll': '26.6552309,-80.25425129999999'}
		,{'city': 'Wesley Chapel, FL, USA', 'll': '28.1786111,-82.35055559999999'}
		,{'city': 'West Allis, WI, USA', 'll': '43.0166806,-88.0070315'}
		,{'city': 'West Babylon, NY, USA', 'll': '40.718155,-73.354287'}
		,{'city': 'West Covina, CA, USA', 'll': '34.0686208,-117.9389526'}
		,{'city': 'West Des Moines, IA, USA', 'll': '41.5772115,-93.711332'}
		,{'city': 'Westfield, MA, USA', 'll': '42.1250929,-72.749538'}
		,{'city': 'West Hartford, CT, USA', 'll': '41.7620842,-72.7420151'}
		,{'city': 'West Haven, CT, USA', 'll': '41.2706527,-72.94704709999999'}
		,{'city': 'West Jordan, UT, USA', 'll': '40.6096698,-111.9391031'}
		,{'city': 'Westland, MI, USA', 'll': '42.32420399999999,-83.400211'}
		,{'city': 'Westminster, CO, USA', 'll': '39.8366528,-105.0372046'}
		,{'city': 'Westminster, CA, USA', 'll': '33.7513419,-117.9939921'}
		,{'city': 'West New York, NJ, USA', 'll': '40.7878788,-74.0143064'}
		,{'city': 'Weston, FL, USA', 'll': '26.1003654,-80.3997748'}
		,{'city': 'West Palm Beach, FL, USA', 'll': '26.7153424,-80.0533746'}
		,{'city': 'West Sacramento, CA, USA', 'll': '38.5804609,-121.530234'}
		,{'city': 'West Seneca, NY, USA', 'll': '42.8500585,-78.79975470000001'}
		,{'city': 'West Valley City, UT, USA', 'll': '40.6916132,-112.0010501'}
		,{'city': 'Weymouth, MA, USA', 'll': '42.2180724,-70.94103559999999'}
		,{'city': 'Wheaton, IL, USA', 'll': '41.8661403,-88.1070127'}
		,{'city': 'Wheaton, MD, USA', 'll': '39.0398314,-77.05525550000002'}
		,{'city': 'White Plains, NY, USA', 'll': '41.03398620000001,-73.7629097'}
		,{'city': 'Whitney, NV, USA', 'll': '36.0966897,-115.0407412'}
		,{'city': 'Whittier, CA, USA', 'll': '33.9791793,-118.032844'}
		,{'city': 'Wichita, KS, USA', 'll': '37.6922222,-97.3372222'}
		,{'city': 'Wichita Falls, TX, USA', 'll': '33.9137085,-98.4933873'}
		,{'city': 'Wilkes-Barre, PA, USA', 'll': '41.2459149,-75.88130749999999'}
		,{'city': 'Wilmington, NC, USA', 'll': '34.2257255,-77.9447102'}
		,{'city': 'Wilmington, DE, USA', 'll': '39.7458333,-75.5466667'}
		,{'city': 'Wilson, NC, USA', 'll': '35.7212689,-77.9155395'}
		,{'city': 'Winston-Salem, NC, USA', 'll': '36.09985959999999,-80.244216'}
		,{'city': 'Woodbury, MN, USA', 'll': '44.9238552,-92.9593797'}
		,{'city': 'Woodland, CA, USA', 'll': '38.67851570000001,-121.7732971'}
		,{'city': 'Woonsocket, RI, USA', 'll': '42.00287609999999,-71.51478390000001'}
		,{'city': 'Worcester, MA, USA', 'll': '42.2625932,-71.8022934'}
		,{'city': 'Wylie, TX, USA', 'll': '33.0151201,-96.5388789'}
		,{'city': 'Wyoming, MI, USA', 'll': '42.9133602,-85.7053085'}
		,{'city': 'Yakima, WA, USA', 'll': '46.6020711,-120.5058987'}
		,{'city': 'Yonkers, NY, USA', 'll': '40.9312099,-73.89874689999999'}
		,{'city': 'Yorba Linda, CA, USA', 'll': '33.8886259,-117.8131125'}
		,{'city': 'York, PA, USA', 'll': '39.9625984,-76.727745'}
		,{'city': 'Youngstown, OH, USA', 'll': '41.0997803,-80.6495194'}
		,{'city': 'Yuba City, CA, USA', 'll': '39.1404477,-121.6169108'}
		,{'city': 'Yucaipa, CA, USA', 'll': '34.033625,-117.0430865'}
		,{'city': 'Yuma, AZ, USA', 'll': '32.6926512,-114.6276916'}
	];

exports.cities = cities;
exports.citiesMap = citiesMap;
exports.cities1000 = cities1000;
exports.cities1000Map = cities1000Map;