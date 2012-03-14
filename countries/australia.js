// Top Australian Cities
// Source: http://en.wikipedia.org/wiki/List_of_cities_in_Australia_by_population
var cities =
	[
		 "Sydney, New South Wales Australia"
		,"Melbourne, Victoria Australia"
		,"Brisbane, Queensland Australia"
		,"Perth, Western Australia Australia"
		,"Adelaide, South Australia Australia"
		,"Gold Coast-Tweed, Queensland/New South Wales Australia"
		,"Newcastle, New South Wales Australia"
		,"Canberra-Queanbeyan, Australian Capital Territory/New South Wales Australia"
		,"Canberra, Australian Capital Territory[4] Australia"
		,"Wollongong, New South Wales Australia"
		,"Sunshine Coast, Queensland Australia"
		,"Greater Hobart, Tasmania Australia"
		,"Geelong, Victoria Australia"
		,"Townsville, Queensland Australia"
		,"Cairns, Queensland Australia"
		,"Toowoomba, Queensland Australia"
		,"Darwin, Northern Territory Australia"
		,"Launceston, Tasmania Australia"
		,"Albury-Wodonga, New South Wales/Victoria Australia"
		,"Ballarat, Victoria Australia"
		,"Bendigo, Victoria Australia"
		,"Mandurah, Western Australia Australia"
		,"Mackay, Queensland Australia"
		,"Burnie-Devonport, Tasmania Australia"
		,"Latrobe Valley[5], Victoria Australia"
		,"Rockhampton, Queensland Australia"
		,"Bundaberg, Queensland Australia"
		,"Bunbury, Western Australia Australia"
		,"Hervey Bay, Queensland Australia"
		,"Wagga Wagga, New South Wales Australia"
		,"Coffs Harbour, New South Wales Australia"
		,"Gladstone, Queensland Australia"
		,"Mildura, Victoria Australia"
		,"Shepparton, Victoria Australia"
		,"Tamworth, New South Wales Australia"
		,"Port Macquarie, New South Wales Australia"
		,"Orange, New South Wales Australia"
		,"Dubbo, New South Wales Australia"
		,"Geraldton, Western Australia Australia"
		,"Nowra-Bomaderry, New South Wales Australia"
		,"Bathurst, New South Wales Australia"
		,"Warrnambool, Victoria Australia"
		,"Lismore, New South Wales Australia"
		,"Kalgoorlie-Boulder, Western Australia Australia"
	];

var citiesMap = 
	[
		 {"city": "Sydney NSW, Australia", "ll": "-33.873651,151.2068896"}
		,{"city": "Melbourne VIC, Australia", "ll": "-37.8131869,144.9629796"}
		,{"city": "Brisbane QLD, Australia", "ll": "-27.4709331,153.0235024"}
		,{"city": "Perth WA, Australia", "ll": "-31.9528536,115.8573389"}
		,{"city": "Adelaide SA 5000, Australia", "ll": "-34.9287264,138.5999453"}
		,{"city": "Gold Coast Airport (OOL), Eastern Ave, Bilinga QLD 4225, Australia", "ll": "-28.1663826,153.5126917"}
		,{"city": "Newcastle NSW, Australia", "ll": "-32.926696,151.7788922"}
		,{"city": "Canberra Ave, Australia", "ll": "-35.3499749,149.2093688"}
		,{"city": "Tourist Drive 4, Canberra ACT, Australia", "ll": "-35.2758222,149.1294771"}
		,{"city": "Wollongong NSW, Australia", "ll": "-34.42498399999999,150.8931239"}
		,{"city": "Sunshine Coast, QLD, Australia", "ll": "-26.5727351,152.9205918"}
		,{"city": "Hobart, TAS, Australia", "ll": "-42.8308532,147.3746212"}
		,{"city": "Geelong VIC 3220, Australia", "ll": "-38.1485437,144.3613479"}
		,{"city": "Townsville QLD 4810, Australia", "ll": "-19.2576223,146.8178787"}
		,{"city": "Cairns QLD 4870, Australia", "ll": "-16.9233991,145.773851"}
		,{"city": "Toowoomba QLD 4350, Australia", "ll": "-27.5643334,151.9539909"}
		,{"city": "Darwin NT 0800, Australia", "ll": "-12.4628198,130.8417694"}
		,{"city": "Launceston TAS 7250, Australia", "ll": "-41.4370868,147.1393767"}
		,{"city": "Victoria St, Albury NSW 2640, Australia", "ll": "-36.0768039,146.9137128"}
		,{"city": "Ballarat VIC 3350, Australia", "ll": "-37.5621071,143.8561493"}
		,{"city": "Bendigo VIC 3550, Australia", "ll": "-36.75871120000001,144.2837459"}
		,{"city": "Mandurah WA, Australia", "ll": "-32.5366794,115.7426282"}
		,{"city": "Mackay QLD 4740, Australia", "ll": "-21.1412101,149.1856253"}
		,{"city": "Devonport TAS, Australia", "ll": "-41.1783532,146.3609534"}
		,{"city": "Latrobe Valley Aero Club, Traralgon VIC 3844, Australia", "ll": "-38.1971087,146.534618"}
		,{"city": "Rockhampton QLD 4700, Australia", "ll": "-23.3776546,150.5099759"}
		,{"city": "Bundaberg QLD 4670, Australia", "ll": "-24.8649629,152.348653"}
		,{"city": "Bunbury WA 6230, Australia", "ll": "-33.3270685,115.6391736"}
		,{"city": "Hervey Bay QLD 4655, Australia", "ll": "-25.2896192,152.8309158"}
		,{"city": "Wagga Wagga NSW 2650, Australia", "ll": "-35.1155492,147.3694772"}
		,{"city": "Coffs Harbour NSW 2450, Australia", "ll": "-30.2963121,153.1156722"}
		,{"city": "Gladstone QLD 4680, Australia", "ll": "-23.849,151.263"}
		,{"city": "Mildura VIC 3500, Australia", "ll": "-34.2063006,142.1358321"}
		,{"city": "Shepparton VIC, Australia", "ll": "-36.3833333,145.4"}
		,{"city": "Tamworth NSW 2340, Australia", "ll": "-31.091085,150.9303741"}
		,{"city": "Port Macquarie NSW 2444, Australia", "ll": "-31.4312703,152.9081313"}
		,{"city": "Orange NSW 2800, Australia", "ll": "-33.2835775,149.1012702"}
		,{"city": "Dubbo NSW 2830, Australia", "ll": "-32.2438146,148.6094976"}
		,{"city": "Geraldton WA 6530, Australia", "ll": "-28.7732192,114.6096326"}
		,{"city": "Nowra NSW, Australia", "ll": "-34.8746265,150.6029082"}
		,{"city": "Bathurst NSW 2795, Australia", "ll": "-33.4176529,149.5810314"}
		,{"city": "Warrnambool VIC 3280, Australia", "ll": "-38.3827659,142.4844995"}
		,{"city": "Lismore NSW 2480, Australia", "ll": "-28.8065079,153.2769412"}
		,{"city": "Boulder WA 6432, Australia", "ll": "-30.7819844,121.4883572"}
	]									
									
exports.cities = cities;
exports.citiesMap = citiesMap;