// Top 500 European Cities
// Source: http://www.citymayors.com/features/euro_cities1.html

var cities =
	[
		"Moscow,Russia"
		,"LONDON,UK"
		,"St Petersburg,Russia"
		,"BERLIN,Germany"
		,"MADRID,Spain"
		,"ROMA,Italy"
		,"KIEV,Ukraine"
		,"PARIS,France"
		,"Bucharest,Romania"
		,"BUDAPEST,Hungary"
		,"Hamburg,Germany"
		,"MINSK,Belarus"
		,"Warsaw,Poland"
		,"Belgrade,Serbia"
		,"Vienna,Austria"
		,"Kharkov,Ukraine"
		,"Barcelona,Spain"
		,"Novosibirsk,Russia"
		,"Nizhny Novgorod,Russia"
		,"Milan,Italy"
		,"Ekaterinoburg,Russia"
		,"Munich,Germany"
		,"Prague,Czech Republic"
		,"Samara,Russia"
		,"Omsk,Russia"
		,"SOFIA,Bulgaria"
		,"Dnepropetrovsk,Ukraine"
		,"Kazan,Russia"
		,"Ufa,Russia"
		,"Chelyabinsk,Russia"
		,"Donetsk ,Ukraine"
		,"Naples,Italy"
		,"Birmingham,UK"
		,"Perm,Russia"
		,"Rostov-na-Donu,Russia"
		,"Odessa,Ukraine"
		,"Volgograd,Russia"
		,"Cologne,Germany"
		,"Turin,Italy"
		,"Voronezh,Russia"
		,"Krasnoyarsk,Russia"
		,"Saratov,Russia"
		,"ZAGREB,Croatia"
		,"Zaporozhye,Ukraine"
		,"Lódz,Poland"
		,"Marseille,France"
		,"RIGA,Latvia"
		,"Lvov,Ukraine"
		,"Athens,Greece"
		,"Salonika,Greece"
		,"STOCKHOLM,Sweden"
		,"Kraków,Poland"
		,"Valencia,Spain"
		,"AMSTERDAM,Netherlands"
		,"Leeds,UK"
		,"Tolyatti,Russia"
		,"Kryvy Rig,Ukraine"
		,"Sevilla,Spain"
		,"Palermo,Italy"
		,"Ulyanovsk,Russia"
		,"KISHINEV,Moldova"
		,"Genova,Italy"
		,"Izhevsk,Russia"
		,"Frankfurt am Main,Germany"
		,"Krasnodar,Russia"
		,"Breslau,Poland"
		,"Glasgow,UK"
		,"Yaroslave,Russia"
		,"Khabarovsk,Russia"
		,"Vladivostok,Russia"
		,"Zaragoza,Spain"
		,"Essen,Germany"
		,"Rotterdam,Netherlands"
		,"Irkutsk,Russia"
		,"Dortmund,Germany"
		,"Stuttgart,Germany"
		,"Barnaul,Russia"
		,"VILNIUS,Lithuania"
		,"Poznan,Poland"
		,"Düsseldorf,Germany"
		,"Novokuznetsk,Russia"
		,"Lisbon,Portugal"
		,"HELSINKI,Finland"
		,"Málaga,Spain"
		,"Bremen,Germany"
		,"Sheffield,UK"
		,"SARAJEVO,Bosnia"
		,"Penza,Russia"
		,"Ryazan,Russia"
		,"Orenburg,Russia"
		,"Naberezhnye Tchelny,Russia"
		,"Duisburg,Germany"
		,"Lipetsk,Russia"
		,"Hannover,Germany"
		,"Mykolaiv ,Ukraine"
		,"Tula,Russia"
		,"OSLO,Norway"
		,"Tyumen,Russia"
		,"Copenhagen,Denmark"
		,"Kemerovo,Russia"
		,"Mariupol,Ukraine"
		,"Leipzig,Germany"
		,"Nuremberg,Germany"
		,"Bradford,UK"
		,"Astrakhan,Russia"
		,"DUBLIN,Ireland"
		,"Tomsk,Russia"
		,"Dresden,Germany"
		,"Gomel,Belarus"
		,"Liverpool,UK"
		,"Anvers,Belgium"
		,"Lugansk,Ukraine"
		,"Kirov ,Russia"
		,"Gothenburg,Sweden"
		,"Cheboksary,Russia"
		,"Ivanovo,Russia"
		,"Danzig,Poland"
		,"Bryansk,Russia"
		,"Tver,Russia"
		,"Edinburgh,UK"
		,"BRATISLAVA,Slovak Republic"
		,"s-Gravenhage,Netherlands"
		,"Kursk,Russia"
		,"Manchester,UK"
		,"SKOPLJE,Macedonia"
		,"Magnitogorsk,Russia"
		,"Kaliningrad ,Russia"
		,"TALLINN,Estonia"
		,"Szczecin,Poland"
		,"Lyon,France"
		,"Kaunas,Lithuania"
		,"Bristol,UK"
		,"Nizhny Tagil,Russia"
		,"Bochum,Germany"
		,"Kirklees,UK"
		,"Makeyevka,Ukraine"
		,"Bydgoszcz,Poland"
		,"Bologna,Italy"
		,"Brno,Czech Republic"
		,"Vinnutsya,Ukraine"
		,"Firenze,Italy"
		,"Murmansk,Russia"
		,"Ulan-Ude,Russia"
		,"Wuppertal,Germany"
		,"Arkhangelsk,Russia"
		,"Kurgan,Russia"
		,"Toulouse,France"
		,"Lublin,Poland"
		,"Mogilev,Belarus"
		,"Kherson,Ukraine"
		,"Las Palmas ,Spain"
		,"Smolensk,Russia"
		,"Bilbao,Spain"
		,"Sevastopol,Ukraine"
		,"Murcia,Spain"
		,"Fife,UK"
		,"Iasi,Romania"
		,"Katowice,Poland"
		,"Nice,France"
		,"Stavropol,Russia"
		,"Constanta,Romania"
		,"Orel,Russia"
		,"Catania,Italy"
		,"Vitebsk,Belarus"
		,"Kaluga,Russia"
		,"Belgorod,Russia"
		,"Zürich,Switzerland"
		,"Simferopol,Ukraine"
		,"Bari,Italy"
		,"Vladimir,Russia"
		,"Sochi,Russia"
		,"Cluj-Napoca,Romania"
		,"Makhachkala,Russia"
		,"Galati,Romania"
		,"Wirral,UK"
		,"North Lanarkshire,UK"
		,"Timisoara,Romania"
		,"Cherepovets,Russia"
		,"Ostrava,Czech Republic"
		,"Bielefeld,Germany"
		,"Wakefield,UK"
		,"Valladolid,Spain"
		,"Saransk,Russia"
		,"Cardiff,UK"
		,"Brasov,Romania"
		,"Craiova,Romania"
		,"Poltava,Ukraine"
		,"Tambov,Russia"
		,"Dudley,UK"
		,"Wigan,UK"
		,"Chita,Russia"
		,"Vladikavkaz,Russia"
		,"East Riding of Yorkshire,UK"
		,"Cherkassy,Ukraine"
		,"Mannheim,Germany"
		,"Córdoba,Spain"
		,"South Lanarkshire,UK"
		,"Chernigov,Ukraine"
		,"Coventry,UK"
		,"Gorlovka,Ukraine"
		,"Palma de Mallorca,Spain"
		,"Grodno,Belarus"
		,"Bonn,Germany"
		,"Vologda,Russia"
		,"Varna,Bulgaria"
		,"Venezia,Italy"
		,"Zhitomir,Ukraine"
		,"Belfast,UK"
		,"Sumy,Ukraine"
		,"Leicester,UK"
		,"Komsomolsk-na-Amure,Russia"
		,"Sunderland,UK"
		,"Sandwell,UK"
		,"Doncaster,UK"
		,"Stockport,UK"
		,"Sefton,UK"
		,"Kostroma,Russia"
		,"Vigo,Spain"
		,"Århus,Denmark"
		,"Brest,Belarus"
		,"Volzhsky,Russia"
		,"Taganrog,Russia"
		,"Bialystok,Poland"
		,"Nottingham,UK"
		,"Petrozavodsk,Russia"
		,"Newcastle-upon-Tyne,UK"
		,"Gelsenkirchen,Germany"
		,"Bratsk,Russia"
		,"Dzerzhinsk ,Russia"
		,"Surgut,Russia"
		,"Karlsruhe,Germany"
		,"Orsk,Russia"
		,"Porto,Portugal"
		,"Alicante,Spain"
		,"Dneprodzerzhinsk,Ukraine"
		,"Wiesbaden,Germany"
		,"Kirovograd,Ukraine"
		,"Kingston-upon-Hull,UK"
		,"Novi Sad,Serbia"
		,"Bolton,UK"
		,"Angarsk,Russia"
		,"Sterlitamak,Russia"
		,"Münster ,Germany"
		,"Gijón,Spain"
		,"LJUBLJANA,Slovenia"
		,"Mönchengladbach,Germany"
		,"Chemnitz,Germany"
		,"Messina,Italy"
		,"Walsall,UK"
		,"Chernovtsy,Ukraine"
		,"Khmelnitsky ,Ukraine"
		,"Malmö,Sweden"
		,"Czestochowa,Poland"
		,"Plymouth,UK"
		,"Hospitalet de Llobregat,Spain"
		,"Rotherham,UK"
		,"Augsburg,Germany"
		,"Stoke-on-Trent,UK"
		,"Halle,Germany"
		,"Verona,Italy"
		,"Gdynia,Poland"
		,"Strasbourg,France"
		,"Ploiesti,Romania"
		,"Nis,Serbia"
		,"Ioshkap-Ola,Russia"
		,"Braunschweig,Germany"
		,"Nantes,France"
		,"Wolverhampton,UK"
		,"Rovno,Ukraine"
		,"TIRANA,Albania"
		,"Aachen,Germany"
		,"Sosnowiec,Poland"
		,"Granada,Spain"
		,"Kosice,Slovakia"
		,"Krefeld,Germany"
		,"Rybinsk,Russia"
		,"La Coruña,Spain"
		,"Rhondda with Cynon & Taff,UK"
		,"Krementchug,Ukraine"
		,"Nizhenvartovsk,Russia"
		,"Graz,Austria"
		,"Prokopyevsk,Russia"
		,"Severodvinsk,Russia"
		,"South Gloucestershire,UK"
		,"Magdeburg,Germany"
		,"Ivano-Frankovsk,Ukraine"
		,"Kiel,Germany"
		,"Braila,Romania"
		,"Derby,UK"
		,"Utrecht,Netherlands"
		,"Ternopol,Ukraine"
		,"Radom,Poland"
		,"Gand,Belgium"
		,"Swansea,UK"
		,"Naltchik,Russia"
		,"Syktivkar,Russia"
		,"Velikiy Novgorod,Russia"
		,"Salford,UK"
		,"Bergen,Norway"
		,"Aberdeenshire,UK"
		,"Barnsley,UK"
		,"Biisk,Russia"
		,"Nizhnekamsk,Russia"
		,"Trieste,Italy"
		,"Oberhausen,Germany"
		,"Oradea,Romania"
		,"Shakhty,Russia"
		,"Tameside,UK"
		,"Bobruisk,Belarus"
		,"Oldham,UK"
		,"Blagoveshchensk ,Russia"
		,"Trafford,UK"
		,"Aberdeen,UK"
		,"Lutsk,Ukraine"
		,"Vitoria-Gasteiz,Spain"
		,"Southampton,UK"
		,"Lübeck,Germany"
		,"Padova,Italy"
		,"Belaya Tserkov ,Ukraine"
		,"Taranto,Italy"
		,"Starsy Oskol,Russia"
		,"Kielce,Poland"
		,"Gliwice,Poland"
		,"Badalona,Spain"
		,"Bordeaux,France"
		,"Bacau,Romania"
		,"Highland,UK"
		,"Montpellier,France"
		,"Balakovo,Russia"
		,"Rochdale,UK"
		,"Zelenograd,Russia"
		,"Espoo,Finland"
		,"Charleroi,Belgium"
		,"Torun,Poland"
		,"Hagen,Germany"
		,"Bytom,Poland"
		,"Novorossiysk,Russia"
		,"Debrecen,Hungary"
		,"Solihull,UK"
		,"Rostock,Germany"
		,"Linz,Austria"
		,"Santa Cruz de Tenerife,Spain"
		,"Klaipeda,Lithuania"
		,"Freiburg im Breisgau,Germany"
		,"Pskov,Russia"
		,"Erfurt,Germany"
		,"Gateshead,UK"
		,"Eindhoven,Netherlands"
		,"Split,Croatia"
		,"Zabrze,Poland"
		,"Saint-Étienne,France"
		,"Oviedo,Spain"
		,"Petropavlovsk-Kamchatsky,Russia"
		,"Zlatoust,Russia"
		,"Rennes,France"
		,"Milton Keynes,UK"
		,"Yakutsk,Russia"
		,"Kassel,Germany"
		,"Móstoles,Spain"
		,"Banja Luka,Bosnia"
		,"Le Havre,France"
		,"Luik,Belgium"
		,"Bourgas,Bulgaria"
		,"Podolsk,Russia"
		,"North Tyneside,UK"
		,"Calderdale,UK"
		,"Northampton,UK"
		,"Tampere,Finland"
		,"Tilburg,Netherlands"
		,"Elche,Spain"
		,"Portsmouth,UK"
		,"Kamensk-Uralsky,Russia"
		,"Brescia,Italy"
		,"Engels,Russia"
		,"Warrington,UK"
		,"Uppsala,Sweden"
		,"Kramatorsk,Ukraine"
		,"Pitesti,Romania"
		,"Syzran,Russia"
		,"Sabadell,Spain"
		,"North Somerset,UK"
		,"Arad,Romania"
		,"Novocherkassk,Russia"
		,"Saarbrücken,Germany"
		,"Odense,Denmark"
		,"Mainz,Germany"
		,"Berezniki,Russia"
		,"Santander,Spain"
		,"Piraiévs,Greece"
		,"Jérez de la Frontera,Spain"
		,"Bury,UK"
		,"Hamm,Germany"
		,"Luton,UK"
		,"Kragujevac,Serbia"
		,"Reims,France"
		,"Bielsko-Biala,Poland"
		,"Reggio di Calabria,Italy"
		,"Volgodonsk,Russia"
		,"St Helens,UK"
		,"Stockton-on-Tees,UK"
		,"Renfrewshire,UK"
		,"San Sebastián,Spain"
		,"Uzno-Sakhalinsk,Russia"
		,"Herne,Germany"
		,"Vantaa,Finland"
		,"York,UK"
		,"Modena,Italy"
		,"Thamesdown,UK"
		,"Leganés,Spain"
		,"Mülheim/Ruhr,Germany"
		,"Cagliari,Italy"
		,"Miskolc,Hungary"
		,"Genève,Switzerland"
		,"Southend-on-Sea,UK"
		,"Groningen,Netherlands"
		,"Lille,France"
		,"Turku,Finland"
		,"Olsztyn,Poland"
		,"Almería,Spain"
		,"Cartagena,Spain"
		,"Melitopol,Ukraine"
		,"Bâle,Switzerland"
		,"Sibiu,Romania"
		,"New Forest,UK"
		,"Caerphilly,UK"
		,"Carmarthenshire,UK"
		,"Prato,Italy"
		,"Plzen,Czech Republic"
		,"Abakan,Russia"
		,"Rijeka,Croatia"
		,"Toulon,France"
		,"Parma,Italy"
		,"Baranovichi,Belarus"
		,"Kertch,Ukraine"
		,"Roussé,Bulgaria"
		,"Maikop,Russia"
		,"Miass,Russia"
		,"Solingen,Germany"
		,"Tirgu-Mures,Romania"
		,"Bath & NE Somerset,UK"
		,"Osnabrück,Germany"
		,"Livorno,Italy"
		,"Lyubertsy,Russia"
		,"Wycombe,UK"
		,"Tarrasa,Spain"
		,"Armavir,Russia"
		,"Lüdwigshafen,Germany"
		,"Fuenlabrada,Spain"
		,"Podgorica,Serbia"
		,"Alcalá de Henares,Spain"
		,"Basildon,UK"
		,"Rubtsovsk,Russia"
		,"Pamplona,Spain"
		,"Burgos,Spain"
		,"Leskovac,Serbia"
		,"Rzeszów,Poland"
		,"Ålborg,Denmark"
		,"Kovrov,Russia"
		,"Leverkusen,Germany"
		,"Bournemouth,UK"
		,"Breda,Netherlands"
		,"Peterborough,UK"
		,"Szeged,Hungary"
		,"Nakhodka,Russia"
		,"NE Lincolnshire,UK"
		,"Ruda Slaska,Poland"
		,"Salamanca,Spain"
		,"Pécs,Hungary"
		,"Salavat,Russia"
		,"Ussuriisk,Russia"
		,"Mytishchi,Russia"
		,"Chelmsford,UK"
		,"Foggia,Italy"
		,"Brighton,UK"
		,"South Tyneside,UK"
		,"Charnwood,UK"
		,"Aylesbury Vale,UK"
		,"Colchester,UK"
		,"Oldenburg,Germany"
		,"Knowsley,UK"
		,"Patrai,Greece"
		,"Apeldoorn,Netherlands"
		,"North Lincolnshire,UK"
		,"Huntingdonshire,UK"
		,"Macclesfield,UK"
		,"Blackpool,UK"
		,"Perugia,Italy"
		,"Nijmegen,Netherlands"
		,"Beltsy,Moldova"
		,"Kolomna,Russia"
		,"Grenoble,France"
		,"West Lothian,UK"
		,"Borisov,Belarus"
		,"South Somerset,UK"
		,"Dundee,UK"
		,"Nikopol,Ukraine"
		,"Neuss,Germany"
		,"Baia Mare,Romania"
		,"Enschede,Netherlands"
		,"Norilsk,Russia"
	];
	
// Top 500 European Cities geocoded for latitude/longitude								
var citiesMap = 
	[									
		 {"city": "Moscow, Russia", "ll": "55.75,37.6166667"}
		,{"city": "London, UK", "ll": "51.5081289,-0.128005"}
		,{"city": "St Petersburg, Russia", "ll": "60.07623830000001,30.1213829"}
		,{"city": "Berlin, Germany", "ll": "52.524268,13.40629"}
		,{"city": "Madrid, Spain", "ll": "40.4166909,-3.700345399999999"}
		,{"city": "Rome, Italy", "ll": "41.8905198,12.4942486"}
		,{"city": "Kiev, Kyiv city, Ukraine, 02000", "ll": "50.4501,30.5234"}
		,{"city": "Paris, France", "ll": "48.856614,2.3522219"}
		,{"city": "Bucharest, Romania", "ll": "44.43771100000001,26.0973669"}
		,{"city": "Budapest, Hungary", "ll": "47.4984056,19.0407578"}
		,{"city": "Hamburg, Germany", "ll": "53.556866,9.994622"}
		,{"city": "Minsk, Belarus", "ll": "53.9,27.5666667"}
		,{"city": "Warsaw, Poland", "ll": "52.2296756,21.0122287"}
		,{"city": "Belgrade, Serbia", "ll": "44.802416,20.465601"}
		,{"city": "Vienna, Austria", "ll": "48.2081743,16.3738189"}
		,{"city": "Kharkiv, Kharkivs'ka oblast, Ukraine, 61000", "ll": "49.9935,36.230383"}
		,{"city": "Barcelona, Spain", "ll": "41.387917,2.1699187"}
		,{"city": "Novosibirsk, Novosibirskaya oblast, Russia", "ll": "55.0333333,82.9166667"}
		,{"city": "Nizhny Novgorod, Nizhegorodskaya oblast, Russia", "ll": "56.3166667,44"}
		,{"city": "Milan, Italy", "ll": "45.463681,9.1881714"}
		,{"city": "Yekaterinburg, Sverdlovskaya oblast, Russia", "ll": "56.84999999999999,60.59999999999999"}
		,{"city": "Munich, Germany", "ll": "48.1448353,11.5580067"}
		,{"city": "Prague, Czech Republic", "ll": "50.0878114,14.4204598"}
		,{"city": "Samara, Samarskaya oblast, Russia", "ll": "53.2415041,50.2212463"}
		,{"city": "Omsk, Omsk Oblast, Russia", "ll": "54.9833333,73.3666667"}
		,{"city": "Sofia, Bulgaria", "ll": "42.6964917,23.3260106"}
		,{"city": "Dnipropetrovs'k, Dnipropetrovs'ka oblast, Ukraine, 49000", "ll": "48.464717,35.046183"}
		,{"city": "Kazan, Republic of Tatarstan, Russia", "ll": "55.8005556,49.1055556"}
		,{"city": "Ufa, Republic of Bashkortostan, Russia", "ll": "54.7833333,56.0333333"}
		,{"city": "Chelyabinsk, Chelyabinskaya oblast, Russia", "ll": "55.201612,61.43839000000001"}
		,{"city": "Donets'k, Donets'ka oblast, Ukraine, 83000", "ll": "48.015883,37.80285"}
		,{"city": "Naples, Italy", "ll": "40.8399833,14.2525421"}
		,{"city": "Birmingham, West Midlands, UK", "ll": "52.48624299999999,-1.890401"}
		,{"city": "Perm, Perm Krai, Russia", "ll": "58.00000000000001,56.25"}
		,{"city": "Rostov-on-Don, Rostovskaya oblast, Russia", "ll": "47.2166667,39.7"}
		,{"city": "Odesa, Odes'ka oblast, Ukraine, 65000", "ll": "46.484583,30.7326"}
		,{"city": "Volgograd, Volgogradskaya oblast, Russia", "ll": "48.7,44.51666669999999"}
		,{"city": "Cologne, Germany", "ll": "50.9580867,6.9204493"}
		,{"city": "Turin, Italy", "ll": "45.0708515,7.6843404"}
		,{"city": "Voronezh, Voronezh Oblast, Russia", "ll": "51.65,39.2"}
		,{"city": "Krasnoyarsk, Krasnoyarsk Krai, Russia", "ll": "56,93"}
		,{"city": "Saratov, Saratov Oblast, Russia", "ll": "51.5330556,46.0344444"}
		,{"city": "Zagreb, Croatia", "ll": "45.814912,15.9785145"}
		,{"city": "Zaporozhye, Zaporiz'ka oblast, Ukraine, 69061", "ll": "47.8388,35.139567"}
		,{"city": "Łódź, Poland", "ll": "51.7592485,19.4559833"}
		,{"city": "Marseille, France", "ll": "43.296482,5.36978"}
		,{"city": "Riga, Latvia", "ll": "56.9462031,24.1042872"}
		,{"city": "L'viv, L'vivs'ka oblast, Ukraine, 79000", "ll": "49.839683,24.029717"}
		,{"city": "Athens, Greece", "ll": "37.9753357,23.7361497"}
		,{"city": "Salonika, Greece", "ll": "40.63935,22.944607"}
		,{"city": "Stockholm, Sweden", "ll": "59.32893000000001,18.06491"}
		,{"city": "Kraków, Poland", "ll": "50.06465009999999,19.9449799"}
		,{"city": "Valencia, Spain", "ll": "39.4702393,-0.3768049"}
		,{"city": "Amsterdam, The Netherlands", "ll": "52.3702157,4.895167900000001"}
		,{"city": "Leeds, West Yorkshire, UK", "ll": "53.801279,-1.548567"}
		,{"city": "Tolyatti, Samarskaya oblast, Russia", "ll": "53.4833333,49.51666669999999"}
		,{"city": "Kryvyi Rih, Dnipropetrovs'ka oblast, Ukraine, 50000", "ll": "47.910483,33.391783"}
		,{"city": "Seville, Spain", "ll": "37.38263999999999,-5.996295099999999"}
		,{"city": "Palermo, Italy", "ll": "38.11564,13.3614059"}
		,{"city": "Ulyanovsk, Ulyanovskaya oblast, Russia", "ll": "54.3166667,48.3666667"}
		,{"city": "Chisinau, Moldova", "ll": "47.02685899999999,28.841551"}
		,{"city": "Genoa, Italy", "ll": "44.4070624,8.9339889"}
		,{"city": "Izhevsk, Udmurt Republic, Russia", "ll": "56.84999999999999,53.2166667"}
		,{"city": "Frankfurt, Germany", "ll": "50.1109221,8.6821267"}
		,{"city": "Krasnodar, Krasnodarskiy Kray, Russia", "ll": "45.0333333,38.9833333"}
		,{"city": "Wrocław, Poland", "ll": "51.1078852,17.0385376"}
		,{"city": "Glasgow, UK", "ll": "55.864237,-4.251806"}
		,{"city": "Yaroslavl, Yaroslavskaya oblast, Russia", "ll": "57.6527778,39.8761111"}
		,{"city": "Khabarovsk, Khabarovsk Krai, Russia", "ll": "48.4666667,135.1"}
		,{"city": "Vladivostok, Primorsky Krai, Russia", "ll": "43.1666667,131.9333333"}
		,{"city": "Saragossa, Spain", "ll": "41.6562873,-0.8765379000000001"}
		,{"city": "Essen, Germany", "ll": "51.46227,7.008653300000001"}
		,{"city": "Rotterdam, The Netherlands", "ll": "51.92421599999999,4.481776"}
		,{"city": "Irkutsk, Irkutsk Oblast, Russia", "ll": "52.2833333,104.2666667"}
		,{"city": "Dortmund, Germany", "ll": "51.50409879999999,7.4835995"}
		,{"city": "Stuttgart, Germany", "ll": "48.7754181,9.181758799999999"}
		,{"city": "Barnaul, Altai Krai, Russia", "ll": "53.3333333,83.7666667"}
		,{"city": "Vilnius, Lithuania", "ll": "54.6893865,25.2800243"}
		,{"city": "Poznań, Poland", "ll": "52.406374,16.9251681"}
		,{"city": "Düsseldorf, Germany", "ll": "51.220532,6.810061699999999"}
		,{"city": "Novokuznetsk, Kemerovo Oblast, Russia", "ll": "53.75,87.1166667"}
		,{"city": "Lisbon, Portugal", "ll": "38.70693199999999,-9.135632099999999"}
		,{"city": "Helsinki, Finland", "ll": "60.169845,24.9385508"}
		,{"city": "Malaga, Spain", "ll": "36.7196484,-4.420016299999999"}
		,{"city": "Bremen, Germany", "ll": "53.0847558,8.8208279"}
		,{"city": "Sheffield, South Yorkshire, UK", "ll": "53.38112899999999,-1.470085"}
		,{"city": "Sarajevo, Bosnia and Herzegovina", "ll": "43.8476,18.3564"}
		,{"city": "Penza, Penza Oblast, Russia", "ll": "53.2,45.01666669999999"}
		,{"city": "Ryazan, Ryazanskaya oblast, Russia", "ll": "54.6166667,39.7333333"}
		,{"city": "Orenburg, Orenburgskaya oblast, Russia", "ll": "51.7833333,55.09999999999999"}
		,{"city": "Naberezhnye Chelny, Republic of Tatarstan, Russia", "ll": "55.7,52.3166667"}
		,{"city": "Duisburg, Germany", "ll": "51.4344079,6.762329299999999"}
		,{"city": "Lipetsk, Lipetskaya oblast, Russia", "ll": "52.59999999999999,39.5666667"}
		,{"city": "Hanover, Germany", "ll": "52.3843792,9.7271906"}
		,{"city": "Mykolaiv, Mykolaivs'ka oblast, Ukraine, 54000", "ll": "46.975033,31.994583"}
		,{"city": "Tula, Tul'skaya oblast, Russia", "ll": "54.2,37.6166667"}
		,{"city": "Oslo, Norway", "ll": "59.9138688,10.7522454"}
		,{"city": "Tyumen, Tyumenskaya oblast, Russia", "ll": "57.1666667,65.55"}
		,{"city": "Copenhagen, Denmark", "ll": "55.6760968,12.5683371"}
		,{"city": "Kemerovo, Kemerovo Oblast, Russia", "ll": "55.34999999999999,86.05"}
		,{"city": "Mariupol', Donets'ka oblast, Ukraine, 87500", "ll": "47.097133,37.543367"}
		,{"city": "Leipzig, Germany", "ll": "51.3490384,12.3938226"}
		,{"city": "Nuremberg, Germany", "ll": "49.4451843,11.087422"}
		,{"city": "Bradford, West Yorkshire, UK", "ll": "53.795984,-1.759398"}
		,{"city": "Astrakhan, Astrakhanskaya oblast, Russia", "ll": "46.35,48.05"}
		,{"city": "Dublin, Co. Dublin, Ireland", "ll": "53.34410399999999,-6.267493699999999"}
		,{"city": "Tomsk, Tomskaya oblast, Russia", "ll": "56.5,84.96666669999999"}
		,{"city": "Dresden, Germany", "ll": "51.0305106,13.7572182"}
		,{"city": "Homieĺ, Belarus", "ll": "52.4452778,30.9841667"}
		,{"city": "Liverpool, Merseyside, UK", "ll": "53.41154,-2.990116"}
		,{"city": "Antwerp, Belgium", "ll": "51.21921589999999,4.402881799999999"}
		,{"city": "Luhans'k, Luhans'ka oblast, Ukraine, 91000", "ll": "48.574041,39.307815"}
		,{"city": "Kirov, Kirov Oblast, Russia", "ll": "58.59999999999999,49.65"}
		,{"city": "Gothenburg, Sweden", "ll": "57.70887,11.97456"}
		,{"city": "Cheboksary, Chuvash Republic, Russia", "ll": "56.1333333,47.2333333"}
		,{"city": "Ivanovo, Ivanovo Oblast, Russia", "ll": "57.01666669999999,40.9833333"}
		,{"city": "Gdańsk, Poland", "ll": "54.35202520000001,18.6466384"}
		,{"city": "Bryansk, Bryansk Oblast, Russia", "ll": "53.25,34.4"}
		,{"city": "Tver, Tverskaya oblast, Russia", "ll": "56.8666667,35.9166667"}
		,{"city": "Edinburgh, Midlothian, UK", "ll": "55.953252,-3.188267"}
		,{"city": "Bratislava, Slovakia", "ll": "48.1462386,17.1072618"}
		,{"city": "The Hague, The Netherlands", "ll": "52.0704978,4.3006999"}
		,{"city": "Kursk, Kurskaya oblast, Russia", "ll": "51.7166667,36.1833333"}
		,{"city": "Manchester, UK", "ll": "53.479251,-2.247926"}
		,{"city": "Skopje, Macedonia", "ll": "42.003812,21.452246"}
		,{"city": "Magnitogorsk, Chelyabinskaya oblast, Russia", "ll": "53.4166667,58.9666667"}
		,{"city": "Kaliningrad, Kaliningrad Oblast, Russia", "ll": "54.7,20.5"}
		,{"city": "Tallinn, Estonia", "ll": "59.4426896,24.7531972"}
		,{"city": "Szczecin, Poland", "ll": "53.4285438,14.5528116"}
		,{"city": "Lyon, France", "ll": "45.764043,4.835659"}
		,{"city": "Kaunas, Lithuania", "ll": "54.8968721,23.8924264"}
		,{"city": "Bristol, UK", "ll": "51.454513,-2.58791"}
		,{"city": "Nizhny Tagil, Sverdlovskaya oblast, Russia", "ll": "57.91666670000001,59.96666669999999"}
		,{"city": "Bochum, Germany", "ll": "51.4696168,7.198734699999998"}
		,{"city": "Kirklees, UK", "ll": "53.5933432,-1.8009509"}
		,{"city": "Makiivka, Donets'ka oblast, Ukraine, 86100", "ll": "48.04645,37.964167"}
		,{"city": "Bydgoszcz, Poland", "ll": "53.12348040000001,18.0084378"}
		,{"city": "Bologna, Italy", "ll": "44.4941903,11.3465185"}
		,{"city": "Brno, Czech Republic", "ll": "49.19205059999999,16.6131909"}
		,{"city": "Vinnytsya, Vinnyts'ka oblast, Ukraine, 21000", "ll": "49.233083,28.468217"}
		,{"city": "Florence, Italy", "ll": "43.7687324,11.2569013"}
		,{"city": "Murmansk, Murmansk Oblast, Russia", "ll": "68.9930681,33.1184479"}
		,{"city": "Ulan-Ude, Republic of Buryatia, Russia", "ll": "51.8333333,107.6"}
		,{"city": "Wuppertal, Germany", "ll": "51.2611814,7.162903399999999"}
		,{"city": "Arkhangelsk, Arkhangelsk Oblast, Russia", "ll": "64.55,40.5333333"}
		,{"city": "Kurganskaya oblast, Russia", "ll": "55.4481548,65.11809749999999"}
		,{"city": "Toulouse, France", "ll": "43.604652,1.444209"}
		,{"city": "Lublin, Poland", "ll": "51.2464536,22.5684463"}
		,{"city": "Mogilev, Belarus", "ll": "53.9,30.3333333"}
		,{"city": "Kherson, Khersons'ka oblast, Ukraine, 73009", "ll": "46.635417,32.616867"}
		,{"city": "Palmas de Gran Canaria, Spain", "ll": "28.1248227,-15.4300065"}
		,{"city": "Smolensk, Smolensk Oblast, Russia", "ll": "54.7833333,32.05"}
		,{"city": "Bilbao, Spain", "ll": "43.2569629,-2.9234409"}
		,{"city": "Sevastopol', Sevastopol' city, Ukraine, 99000", "ll": "44.61665,33.525367"}
		,{"city": "Murcia, Spain", "ll": "37.98344489999999,-1.1298897"}
		,{"city": "Fife, UK", "ll": "56.2082078,-3.1495175"}
		,{"city": "Iaşi, Romania", "ll": "47.1569444,27.5902778"}
		,{"city": "Katowice, Poland", "ll": "50.26489189999999,19.0237815"}
		,{"city": "Nice, France", "ll": "43.696036,7.265592"}
		,{"city": "Stavropol, Stavropol Krai, Russia", "ll": "45.05,41.9833333"}
		,{"city": "Constanta, Romania", "ll": "44.1733333,28.6383333"}
		,{"city": "Oryol, Orlovskaya oblast, Russia", "ll": "52.9666667,36.0666667"}
		,{"city": "Catania, Italy", "ll": "37.5024825,15.0878345"}
		,{"city": "Vitebsk, Belarus", "ll": "55.19443589999999,30.1953792"}
		,{"city": "Kaluga, Kaluga Oblast, Russia", "ll": "54.5333333,36.2666667"}
		,{"city": "Belgorod, Belgorodskaya oblast, Russia", "ll": "50.6166667,36.5833333"}
		,{"city": "Zurich, Switzerland", "ll": "47.3686498,8.539182499999999"}
		,{"city": "Simferopol', Crimea, Ukraine, 95000", "ll": "44.952117,34.102417"}
		,{"city": "Bari", "ll": "41.1259135,16.8721133"}
		,{"city": "Vladimir, Vladimirskaya oblast, Russia", "ll": "56.1333333,40.4166667"}
		,{"city": "Sochi, Krasnodarskiy Kray, Russia", "ll": "43.4395848,39.9277252"}
		,{"city": "Cluj-Napoca, Romania", "ll": "46.777248,23.5998899"}
		,{"city": "Makhachkala, Republic of Dagestan, Russia", "ll": "42.9783677,47.4910661"}
		,{"city": "Galati, Romania", "ll": "45.42572000000001,28.031044"}
		,{"city": "Wirral, Merseyside, UK", "ll": "53.37797399999999,-3.108818"}
		,{"city": "North Lanarkshire, UK", "ll": "55.8289139,-3.9221958"}
		,{"city": "Timisoara, Romania", "ll": "45.755539,21.237499"}
		,{"city": "Cherepovets, Vologda Oblast, Russia", "ll": "59.1333333,37.9166667"}
		,{"city": "Ostrava, Czech Republic", "ll": "49.8412715,18.2902483"}
		,{"city": "Bielefeld, Germany", "ll": "52.02159630000001,8.545686"}
		,{"city": "Wakefield, West Yorkshire, UK", "ll": "53.683298,-1.505924"}
		,{"city": "Valladolid, Spain", "ll": "41.6529434,-4.7283811"}
		,{"city": "Saransk, Republic of Mordovia, Russia", "ll": "54.1833333,45.1666667"}
		,{"city": "Cardiff, UK", "ll": "51.48158100000001,-3.17909"}
		,{"city": "Braşov, Romania", "ll": "45.655651,25.6108"}
		,{"city": "Craiova, Romania", "ll": "44.32476,23.813471"}
		,{"city": "Poltava, Poltavs'ka oblast, Ukraine, 36000", "ll": "49.58826699999999,34.551417"}
		,{"city": "Tambov, Tambov Oblast, Russia", "ll": "52.7166667,41.4333333"}
		,{"city": "Dudley, West Midlands, UK", "ll": "52.512255,-2.081112"}
		,{"city": "Wigan, UK", "ll": "53.54544,-2.637474"}
		,{"city": "Chita, Zabaykal'skiy Kray, Russia", "ll": "52.0515032,113.4711906"}
		,{"city": "Vladikavkaz, North Ossetia-Alania, Russia", "ll": "43.0474558,44.6658064"}
		,{"city": "East Riding of Yorkshire, UK", "ll": "53.8215889,-0.7189977"}
		,{"city": "Cherkasy, Cherkas'ka oblast, Ukraine, 18000", "ll": "49.444433,32.059767"}
		,{"city": "Mannheim, Germany", "ll": "49.4609731,8.4904166"}
		,{"city": "Cordova, Spain", "ll": "37.88472670000001,-4.7791517"}
		,{"city": "South Lanarkshire, UK", "ll": "55.5243038,-3.7035077"}
		,{"city": "Chernihiv, Chernihivs'ka oblast, Ukraine, 14039", "ll": "51.4982,31.28935"}
		,{"city": "Coventry, West Midlands, UK", "ll": "52.406822,-1.519693"}
		,{"city": "Horlivka, Donets'ka oblast, Ukraine, 84601", "ll": "48.3071,38.029633"}
		,{"city": "Palma, Spain", "ll": "39.5695059,2.649966"}
		,{"city": "Hrodna, Belarus", "ll": "53.6666667,23.8333333"}
		,{"city": "Bonn, Germany", "ll": "50.7116826,7.1047327"}
		,{"city": "Vologda, Vologda Oblast, Russia", "ll": "59.2166667,39.9"}
		,{"city": "Varna Municipality, Bulgaria", "ll": "43.21664519999999,27.9118058"}
		,{"city": "Venice, Italy", "ll": "45.4343363,12.3387844"}
		,{"city": "Zhytomyr, Zhytomyrs'ka oblast, Ukraine, 10000", "ll": "50.25465,28.658667"}
		,{"city": "Belfast, UK", "ll": "54.59744329999999,-5.9340683"}
		,{"city": "Sumy, Sums'ka oblast, Ukraine, 40000", "ll": "50.9077,34.7981"}
		,{"city": "Leicester, UK", "ll": "52.6368778,-1.1397592"}
		,{"city": "Komsomolsk-on-Amur, Khabarovsk Krai, Russia", "ll": "50.5666667,137"}
		,{"city": "Sunderland, Tyne and Wear, UK", "ll": "54.906869,-1.383801"}
		,{"city": "Sandwell, Smethwick, West Midlands B66, UK", "ll": "52.504335,-1.972875"}
		,{"city": "Doncaster, South Yorkshire, UK", "ll": "53.52282,-1.128462"}
		,{"city": "Stockport, UK", "ll": "53.406754,-2.158843"}
		,{"city": "Sefton, Merseyside L29, UK", "ll": "53.503445,-2.970359"}
		,{"city": "Kostroma, Kostromskaya oblast, Russia", "ll": "57.76666669999999,40.9333333"}
		,{"city": "Vigo, Spain", "ll": "42.2313564,-8.7124471"}
		,{"city": "Aarhus, Denmark", "ll": "56.162939,10.203921"}
		,{"city": "Brest, Belarus", "ll": "52.1333333,23.6666667"}
		,{"city": "Volzhsky, Volgogradskaya oblast, Russia", "ll": "48.7833333,44.76666669999999"}
		,{"city": "Taganrog, Rostovskaya oblast, Russia", "ll": "47.2333333,38.9"}
		,{"city": "Białystok, Poland", "ll": "53.13248859999999,23.1688403"}
		,{"city": "Nottingham, UK", "ll": "52.95477,-1.158086"}
		,{"city": "Petrozavodsk, Republic of Karelia, Russia", "ll": "61.78333329999999,34.35"}
		,{"city": "Newcastle Upon Tyne, Tyne and Wear, UK", "ll": "54.978252,-1.61778"}
		,{"city": "Gelsenkirchen, Germany", "ll": "51.517744,7.085717199999999"}
		,{"city": "Bratsk, Irkutsk Oblast, Russia", "ll": "56.1166667,101.6"}
		,{"city": "Dzerzhinsk, Nizhegorodskaya oblast, Russia", "ll": "56.2333333,43.45"}
		,{"city": "Surgut, Khanty-Mansi Autonomous Okrug — Yugra, Russia", "ll": "61.25000000000001,73.4166667"}
		,{"city": "Karlsruhe, Germany", "ll": "49.009148,8.3799444"}
		,{"city": "Orsk, Orenburgskaya oblast, Russia", "ll": "51.2,58.56666670000001"}
		,{"city": "Oporto, Portugal", "ll": "41.149968,-8.6102426"}
		,{"city": "Alicante, Spain", "ll": "38.34521,-0.4809944999999999"}
		,{"city": "Dneprodzerzhinsk, Dnipropetrovs'ka oblast, Ukraine, 51900", "ll": "48.523117,34.613683"}
		,{"city": "Wiesbaden, Germany", "ll": "50.0630804,8.2433437"}
		,{"city": "Kirovohrad, Kirovohrads'ka oblast, Ukraine, 25000", "ll": "48.50793300000001,32.262317"}
		,{"city": "Hull, Kingston Upon Hull, UK", "ll": "53.7456709,-0.3367413"}
		,{"city": "Novi Sad, Serbia", "ll": "45.25,19.85"}
		,{"city": "Bolton, UK", "ll": "53.584441,-2.428619"}
		,{"city": "Angarsk, Irkutsk Oblast, Russia", "ll": "52.5802778,103.9102778"}
		,{"city": "Sterlitamak, Republic of Bashkortostan, Russia", "ll": "53.6333333,55.95"}
		,{"city": "Münster, Germany", "ll": "51.9514808,7.625538799999999"}
		,{"city": "Gijón, Spain", "ll": "43.5452608,-5.6619264"}
		,{"city": "Ljubljana, Slovenia", "ll": "46.0514263,14.5059655"}
		,{"city": "Mönchengladbach, Germany", "ll": "51.1804572,6.4428041"}
		,{"city": "Chemnitz, Germany", "ll": "50.827845,12.9213697"}
		,{"city": "Messina, Italy", "ll": "38.1923323,15.5555232"}
		,{"city": "Walsall, West Midlands, UK", "ll": "52.586214,-1.982919"}
		,{"city": "Chernovtsy, Chernivets'ka oblast, Ukraine, 58000", "ll": "48.291683,25.935217"}
		,{"city": "Khmelnitsky, Khmel'nyts'ka oblast, Ukraine, 29000", "ll": "49.422983,26.987133"}
		,{"city": "Malmö, Sweden", "ll": "55.604981,13.003822"}
		,{"city": "Częstochowa, Poland", "ll": "50.8173871,19.1185308"}
		,{"city": "Plymouth, UK", "ll": "50.3719165,-4.1360198"}
		,{"city": "Hospitalet de Llobregat, Spain", "ll": "41.3595829,2.0997037"}
		,{"city": "Rotherham, South Yorkshire, UK", "ll": "53.4326035,-1.3635009"}
		,{"city": "Augsburg, Germany", "ll": "48.37144070000001,10.8982552"}
		,{"city": "Stoke-on-Trent, UK", "ll": "53.002668,-2.179404"}
		,{"city": "Halle, Germany", "ll": "51.47971,11.96864"}
		,{"city": "Verona Province of Verona, Italy", "ll": "45.4383395,10.9917277"}
		,{"city": "Gdynia, Poland", "ll": "54.5188898,18.5305409"}
		,{"city": "Strasbourg, France", "ll": "48.583148,7.747882"}
		,{"city": "Ploiesti, Romania", "ll": "44.94,26.03"}
		,{"city": "Niš, Serbia", "ll": "43.31938,21.896328"}
		,{"city": "Yoshkar-Ola, Mari El Republic, Russia", "ll": "56.6333333,47.8666667"}
		,{"city": "Braunschweig, Germany", "ll": "52.2688736,10.5267696"}
		,{"city": "Nantes, France", "ll": "47.218371,-1.553621"}
		,{"city": "Wolverhampton, West Midlands, UK", "ll": "52.586973,-2.12882"}
		,{"city": "Rivne, Rivnens'ka oblast, Ukraine, 33004", "ll": "50.6199,26.251617"}
		,{"city": "Tirana, Albania", "ll": "41.326,19.816"}
		,{"city": "Aachen, Germany", "ll": "50.7733179,6.1021106"}
		,{"city": "Sosnowiec, Poland", "ll": "50.28626380000001,19.1040791"}
		,{"city": "Granada, Spain", "ll": "37.17648740000001,-3.5979291"}
		,{"city": "Kosice, Slovakia", "ll": "48.72099559999999,21.2577477"}
		,{"city": "Krefeld, Germany", "ll": "51.3387609,6.5853417"}
		,{"city": "Rybinsk, Yaroslavskaya oblast, Russia", "ll": "58.05,38.8333333"}
		,{"city": "Corunna, Spain", "ll": "43.3708731,-8.395835"}
		,{"city": "Kremenchuk, Poltavs'ka oblast, Ukraine, 39600", "ll": "49.065783,33.410033"}
		,{"city": "Nizhnevartovsk, Khanty-Mansi Autonomous Okrug — Yugra, Russia", "ll": "60.9539167,76.5563507"}
		,{"city": "Graz, Austria", "ll": "47.070714,15.439504"}
		,{"city": "Prokopyevsk, Kemerovo Oblast, Russia", "ll": "53.8833333,86.71666669999999"}
		,{"city": "Severodvinsk, Arkhangelsk Oblast, Russia", "ll": "64.5666667,39.85"}
		,{"city": "South Gloucestershire, UK", "ll": "51.531456,-2.4547158"}
		,{"city": "Magdeburg, Germany", "ll": "52.130807,11.628878"}
		,{"city": "Ivano-Frankivs'k, Ivano-Frankivs'ka oblast, Ukraine, 76000", "ll": "48.922633,24.711117"}
		,{"city": "Kiel, Germany", "ll": "54.3232927,10.1227652"}
		,{"city": "Braila, Romania", "ll": "45.2691944,27.9574722"}
		,{"city": "Derby, UK", "ll": "52.9225301,-1.4746186"}
		,{"city": "Utrecht, The Netherlands", "ll": "52.0901422,5.109664899999999"}
		,{"city": "Ternopil', Ternopil's'ka oblast, Ukraine, 46002", "ll": "49.553517,25.594767"}
		,{"city": "Radom, Poland", "ll": "51.40272359999999,21.1471333"}
		,{"city": "Ghent, Belgium", "ll": "51.053468,3.73038"}
		,{"city": "Swansea, UK", "ll": "51.62144,-3.943645999999999"}
		,{"city": "Nalchik, Kabardino-Balkaria, Russia", "ll": "43.48412219999999,43.6273607"}
		,{"city": "Syktyvkar, Komi Republic, Russia", "ll": "61.67019670000001,50.8379021"}
		,{"city": "Upravleniye MVD Rossii Po g. Velikiy Novgorod, Otdel Politsii № 1, ул. Пестовская, 2, г. В. Новгород, Novgorodskaya oblast, Russia, 173014", "ll": "58.5449715,31.269119"}
		,{"city": "Salford, UK", "ll": "53.488465,-2.2982969"}
		,{"city": "Bergen, Norway", "ll": "60.39126279999999,5.3220544"}
		,{"city": "Aberdeenshire, UK", "ll": "57.16214290000001,-2.7194167"}
		,{"city": "Barnsley, South Yorkshire, UK", "ll": "53.55263,-1.479726"}
		,{"city": "Biysk, Altai Krai, Russia", "ll": "52.5333333,85.1666667"}
		,{"city": "Nizhnekamsk, Republic of Tatarstan, Russia", "ll": "55.6333333,51.8166667"}
		,{"city": "Trieste, Italy", "ll": "45.6535567,13.7784665"}
		,{"city": "Oberhausen, Germany", "ll": "51.4964886,6.8515156"}
		,{"city": "Oradea, Romania", "ll": "47.0722222,21.9211111"}
		,{"city": "Shakhty, Rostovskaya oblast, Russia", "ll": "47.7,40.2333333"}
		,{"city": "Tameside, UK", "ll": "53.4805828,-2.0809891"}
		,{"city": "Babrujsk, Belarus", "ll": "53.15,29.2333333"}
		,{"city": "Oldham, UK", "ll": "53.5445459,-2.118732"}
		,{"city": "Blagoveshchensk, Amur Oblast, Russia", "ll": "50.2747222,127.5338889"}
		,{"city": "Trafford, UK", "ll": "53.4325608,-2.3395318"}
		,{"city": "Aberdeen, UK", "ll": "57.149717,-2.094278"}
		,{"city": "Luts'k, Volyns'ka oblast, Ukraine, 43000", "ll": "50.74723299999999,25.325383"}
		,{"city": "Vitoria-Gasteiz, Spain", "ll": "42.8467181,-2.6716351"}
		,{"city": "Southampton, UK", "ll": "50.90970040000001,-1.4043509"}
		,{"city": "Lübeck, Germany", "ll": "53.86588560000001,10.6870959"}
		,{"city": "Padua, Italy", "ll": "45.4095382,11.8765537"}
		,{"city": "Bila Tserkva, Kyivs'ka oblast, Ukraine, 09100", "ll": "49.801945,30.115196"}
		,{"city": "Taranto, Italy", "ll": "40.4692383,17.2400088"}
		,{"city": "Stary Oskol, Belgorodskaya oblast, Russia", "ll": "51.3,37.85"}
		,{"city": "Kielce, Poland", "ll": "50.8660773,20.6285677"}
		,{"city": "Gliwice, Poland", "ll": "50.29449229999999,18.6713802"}
		,{"city": "Badalona, Spain", "ll": "41.450137,2.2474195"}
		,{"city": "Bordeaux, France", "ll": "44.837789,-0.57918"}
		,{"city": "Bacau, Romania", "ll": "46.571289,26.925171"}
		,{"city": "Highland, UK", "ll": "57.3596139,-5.0992763"}
		,{"city": "Montpellier, France", "ll": "43.610769,3.876716"}
		,{"city": "Balakovo, Saratov Oblast, Russia", "ll": "52.01666669999999,47.8"}
		,{"city": "Rochdale, UK", "ll": "53.614086,-2.161814"}
		,{"city": "Zelenograd, Moscow Oblast, Russia", "ll": "55.98333330000001,37.1833333"}
		,{"city": "Espoo, Finland", "ll": "60.20547910000001,24.6558839"}
		,{"city": "Charleroi, Belgium", "ll": "50.4108095,4.444643"}
		,{"city": "Toruń, Poland", "ll": "53.0137902,18.5984437"}
		,{"city": "Hagen, Germany", "ll": "51.3670777,7.4632841"}
		,{"city": "Bytom, Poland", "ll": "50.3483816,18.9157175"}
		,{"city": "Novorossiysk, Krasnodarskiy Kray, Russia", "ll": "44.7166667,37.7666667"}
		,{"city": "Debrecen, Hungary", "ll": "47.52997389999999,21.6393571"}
		,{"city": "Solihull, West Midlands, UK", "ll": "52.411811,-1.77761"}
		,{"city": "Rostock, Germany", "ll": "54.0834186,12.1004289"}
		,{"city": "Linz, Austria", "ll": "48.30694,14.28583"}
		,{"city": "Santa Cruz de Tenerife, Spain", "ll": "28.46981,-16.2548558"}
		,{"city": "Klaipėda, Lithuania", "ll": "55.71080260000001,21.1318065"}
		,{"city": "Freiburg im Breisgau, Germany", "ll": "47.9990077,7.842104299999999"}
		,{"city": "Pskov, Pskovskaya oblast, Russia", "ll": "57.8166667,28.3333333"}
		,{"city": "Erfurt, Germany", "ll": "50.98476789999999,11.0298799"}
		,{"city": "Gateshead, Tyne and Wear, UK", "ll": "54.95268,-1.603411"}
		,{"city": "Eindhoven, The Netherlands", "ll": "51.44164199999999,5.4697225"}
		,{"city": "Split, Croatia", "ll": "43.5069502,16.4423974"}
		,{"city": "Zabrze, Poland", "ll": "50.3249278,18.7857186"}
		,{"city": "Saint-Étienne, France", "ll": "45.439695,4.3871779"}
		,{"city": "Oviedo, Spain", "ll": "43.3602994,-5.844781"}
		,{"city": "Petropavlovsk-Kamchatsky, Kamchatka Krai, Russia", "ll": "53.038483,158.6348045"}
		,{"city": "Zlatoust, Chelyabinskaya oblast, Russia", "ll": "55.1858333,59.67472219999999"}
		,{"city": "Rennes, France", "ll": "48.113475,-1.675708"}
		,{"city": "Milton Keynes, UK", "ll": "52.038601,-0.757072"}
		,{"city": "Yakutsk, Sakha Republic, Russia", "ll": "62.0380757,129.7293766"}
		,{"city": "Kassel, Germany", "ll": "51.3127114,9.4797461"}
		,{"city": "Móstoles, Spain", "ll": "40.3227707,-3.8657409"}
		,{"city": "Banja Luka, Bosnia and Herzegovina", "ll": "44.76666669999999,17.1833333"}
		,{"city": "Le Havre, France", "ll": "49.49437,0.107929"}
		,{"city": "Liège, Belgium", "ll": "50.6325574,5.5796662"}
		,{"city": "Burgas, Bulgaria", "ll": "42.4976779,27.4700254"}
		,{"city": "Podolsk, Moscow Oblast, Russia", "ll": "55.4166667,37.55"}
		,{"city": "North Tyneside, UK", "ll": "55.0182399,-1.4858436"}
		,{"city": "Calderdale, UK", "ll": "53.7420418,-1.995269"}
		,{"city": "Northampton, UK", "ll": "52.240477,-0.9026560000000001"}
		,{"city": "Tampere, Finland", "ll": "61.49816000000001,23.7610554"}
		,{"city": "Tilburg, The Netherlands", "ll": "51.5862949,5.079127199999999"}
		,{"city": "Elche, Spain", "ll": "38.2671765,-0.6952195999999999"}
		,{"city": "Portsmouth, UK", "ll": "50.8166667,-1.0833333"}
		,{"city": "Kamensk-Uralsky, Sverdlovskaya oblast, Russia", "ll": "56.4279593,61.9081798"}
		,{"city": "Brescia, Italy", "ll": "45.53983820000001,10.2229562"}
		,{"city": "Engel's, Saratov Oblast, Russia", "ll": "51.4753297,46.1136773"}
		,{"city": "Warrington WA1, UK", "ll": "53.395794,-2.571767"}
		,{"city": "Uppsala, Sweden", "ll": "59.85856380000001,17.6389267"}
		,{"city": "Kramators'k, Donets'ka oblast, Ukraine, 84314", "ll": "48.738967,37.58435"}
		,{"city": "Piteşti, Romania", "ll": "44.8605556,24.8677778"}
		,{"city": "Syzran, Samarskaya oblast, Russia", "ll": "53.1666667,48.4666667"}
		,{"city": "Sabadell, Spain", "ll": "41.5486198,2.1074206"}
		,{"city": "North Somerset, UK", "ll": "51.4409659,-2.7426528"}
		,{"city": "Arad, Romania", "ll": "46.1666667,21.3166667"}
		,{"city": "Novocherkassk, Rostovskaya oblast, Russia", "ll": "47.4358333,40.0986111"}
		,{"city": "Saarbrücken, Germany", "ll": "49.24015720000001,6.996932699999999"}
		,{"city": "Odense, Denmark", "ll": "55.40375599999999,10.40237"}
		,{"city": "Mainz, Germany", "ll": "49.9928617,8.2472526"}
		,{"city": "Berezniki, Perm Krai, Russia", "ll": "59.3949571,56.81215539999999"}
		,{"city": "Santander, Spain", "ll": "43.4609602,-3.8079336"}
		,{"city": "Piraeus, Greece", "ll": "37.950902,23.641103"}
		,{"city": "Jerez de la Frontera, Spain", "ll": "36.6865618,-6.1371725"}
		,{"city": "Bury, UK", "ll": "53.595024,-2.297151"}
		,{"city": "Hamm, Germany", "ll": "51.6738583,7.815981600000001"}
		,{"city": "Luton, UK", "ll": "51.8786707,-0.4200255"}
		,{"city": "Kragujevac, Serbia", "ll": "44.012711,20.926741"}
		,{"city": "Rheims, France", "ll": "49.258329,4.031696"}
		,{"city": "Bielsko-Biała, Poland", "ll": "49.8223768,19.0583845"}
		,{"city": "Reggio Calabria RC, Italy", "ll": "38.11462900000001,15.6502035"}
		,{"city": "Volgodonsk, Rostovskaya oblast, Russia", "ll": "47.51666669999999,42.15"}
		,{"city": "St Helens, Merseyside, UK", "ll": "53.456307,-2.737095"}
		,{"city": "Stockton on Tees, Stockton-on-Tees, UK", "ll": "54.574987,-1.328791"}
		,{"city": "Renfrewshire, UK", "ll": "55.8298581,-4.5428385"}
		,{"city": "San Sebastián, Spain", "ll": "43.3208116,-1.9844474"}
		,{"city": "Yuzhno-Sakhalinsk, Sakhalinskaya oblast, Russia", "ll": "46.9666667,142.7333333"}
		,{"city": "Herne, Germany", "ll": "51.5368948,7.200914699999999"}
		,{"city": "Vantaa, Finland", "ll": "60.28548900000001,24.82192"}
		,{"city": "York, UK", "ll": "53.9622908,-1.0818995"}
		,{"city": "Modena, Italy", "ll": "44.647115,10.9251857"}
		,{"city": "Thamesdown Dr, Swindon, UK", "ll": "51.59950389999999,-1.8049843"}
		,{"city": "Leganés, Spain", "ll": "40.326422,-3.7589882"}
		,{"city": "Mülheim, Germany", "ll": "51.4309558,6.8807461"}
		,{"city": "Cagliari, Italy", "ll": "39.2154086,9.1093239"}
		,{"city": "Miskolc, Hungary", "ll": "48.1043854,20.7913563"}
		,{"city": "Geneva, Switzerland", "ll": "46.1983922,6.142296099999999"}
		,{"city": "Southend-on-Sea, UK", "ll": "51.5459269,0.7077123"}
		,{"city": "Groningen, The Netherlands", "ll": "53.2193835,6.566501799999999"}
		,{"city": "Lille, France", "ll": "50.62925,3.057256"}
		,{"city": "Turku, Finland", "ll": "60.449249,22.259239"}
		,{"city": "Olsztyn, Poland", "ll": "53.778422,20.4801193"}
		,{"city": "Almería, Spain", "ll": "36.8401638,-2.4679217"}
		,{"city": "Cartagena, Spain", "ll": "37.6056505,-0.9912943999999999"}
		,{"city": "Melitopol', Zaporiz'ka oblast, Ukraine, 72300", "ll": "46.8333333,35.3666667"}
		,{"city": "Basle, Switzerland", "ll": "47.557421,7.592572699999999"}
		,{"city": "Sibiu, Romania", "ll": "45.787441,24.143259"}
		,{"city": "New Forest National Park, South Efford House, Milford Rd, Everton, Hampshire SO41 0JD, UK", "ll": "50.8758752,-1.6327718"}
		,{"city": "Caerphilly, UK", "ll": "51.578829,-3.218134"}
		,{"city": "Carmarthenshire, UK", "ll": "51.8598535,-4.260853099999999"}
		,{"city": "Prato, Italy", "ll": "43.8796784,11.0962839"}
		,{"city": "Plzeň, Czech Republic", "ll": "49.7474848,13.3776036"}
		,{"city": "Abakan, Republic of Khakassia, Russia", "ll": "53.7166667,91.4166667"}
		,{"city": "Rijeka, Croatia", "ll": "45.3284797,14.4364051"}
		,{"city": "Toulon, France", "ll": "43.124228,5.928"}
		,{"city": "Parma, Italy", "ll": "44.8078657,10.3295478"}
		,{"city": "Baranavičy, Belarus", "ll": "53.1333333,26.0166667"}
		,{"city": "Kerch, Crimea, Ukraine, 98300", "ll": "45.357314,36.468293"}
		,{"city": "Ruse, Bulgaria", "ll": "43.8495786,25.9552292"}
		,{"city": "Maykop, Republic of Adygea, Russia", "ll": "44.6,40.0833333"}
		,{"city": "Miass, Chelyabinskaya oblast, Russia", "ll": "55,60.09999999999999"}
		,{"city": "Solingen, Germany", "ll": "51.1704145,7.0542575"}
		,{"city": "Târgu Mureş, Romania", "ll": "46.5455556,24.5625"}
		,{"city": "Bath and North East Somerset, UK", "ll": "51.36362930000001,-2.4399987"}
		,{"city": "Osnabrück, Germany", "ll": "52.2799112,8.0471788"}
		,{"city": "Leghorn, Italy", "ll": "43.551876,10.3080108"}
		,{"city": "Lyubertsy, Moscow Oblast, Russia", "ll": "55.6666667,37.9166667"}
		,{"city": "Wycombe, Swanley, Greater London BR8, UK", "ll": "51.40132149999999,0.1477863"}
		,{"city": "Terrassa, Spain", "ll": "41.560953,2.0104398"}
		,{"city": "Armavir, Krasnodarskiy Kray, Russia", "ll": "45,41.1166667"}
		,{"city": "Ludwigshafen, Germany", "ll": "49.4908113,8.4147976"}
		,{"city": "Fuenlabrada, Spain", "ll": "40.28387300000001,-3.8003288"}
		,{"city": "Embassy of Republic of Serbia, 18 Hercegovačka, Podgorica, Montenegro", "ll": "42.4429281,19.2618917"}
		,{"city": "Alcala de Henares, Spain", "ll": "40.481663,-3.3641362"}
		,{"city": "Basildon, Essex, UK", "ll": "51.57608399999999,0.488736"}
		,{"city": "Rubtsovsk, Altai Krai, Russia", "ll": "51.51666669999999,81.2"}
		,{"city": "Pamplona, Spain", "ll": "42.8179879,-1.6441835"}
		,{"city": "Burgos, Spain", "ll": "42.3408923,-3.6997623"}
		,{"city": "Leskovac, Serbia", "ll": "43,21.95"}
		,{"city": "Rzeszów, Poland", "ll": "50.04094689999999,21.9992806"}
		,{"city": "Aalborg, Denmark", "ll": "57.028811,9.917771"}
		,{"city": "Kovrov, Vladimirskaya oblast, Russia", "ll": "56.34999999999999,41.3166667"}
		,{"city": "Leverkusen, Germany", "ll": "51.04592479999999,7.0192196"}
		,{"city": "Bournemouth, UK", "ll": "50.719164,-1.880769"}
		,{"city": "Breda, The Netherlands", "ll": "51.58307,4.7769505"}
		,{"city": "Peterborough, UK", "ll": "52.56949849999999,-0.2405299"}
		,{"city": "Szeged, Hungary", "ll": "46.2536169,20.1461345"}
		,{"city": "Nakhodka, Primorsky Krai, Russia", "ll": "42.8166667,132.8666667"}
		,{"city": "North East Lincolnshire, UK", "ll": "53.5418558,-0.1263736"}
		,{"city": "Ruda Śląska, Poland", "ll": "50.2558286,18.8555704"}
		,{"city": "Salamanca, Spain", "ll": "40.9649681,-5.6630253"}
		,{"city": "Pécs, Hungary", "ll": "46.0713242,18.2331772"}
		,{"city": "Salavat, Republic of Bashkortostan, Russia", "ll": "53.3666667,55.93333329999999"}
		,{"city": "Ussuriysk, Primorsky Krai, Russia", "ll": "43.8,131.95"}
		,{"city": "Mytishchi, Moscow Oblast, Russia", "ll": "55.9166667,37.7333333"}
		,{"city": "Chelmsford, Essex, UK", "ll": "51.734964,0.4761969999999999"}
		,{"city": "Foggia, Italy", "ll": "41.4622919,15.5447458"}
		,{"city": "Brighton, Brighton and Hove, UK", "ll": "50.842941,-0.131312"}
		,{"city": "South Tyneside, UK", "ll": "54.9636693,-1.4418634"}
		,{"city": "Charnwood, 1a Granby St, Loughborough, Leicestershire LE11 3DU, UK", "ll": "52.7705129,-1.2105882"}
		,{"city": "Aylesbury, Buckinghamshire, UK", "ll": "51.815606,-0.8084"}
		,{"city": "Colchester, Essex, UK", "ll": "51.895927,0.8918740000000001"}
		,{"city": "Oldenburg, Germany", "ll": "53.14773899999999,8.2106028"}
		,{"city": "Knowsley, Merseyside, UK", "ll": "53.454594,-2.852907"}
		,{"city": "Patras, Greece", "ll": "38.254465,21.7370665"}
		,{"city": "Apeldoorn, The Netherlands", "ll": "52.21115700000001,5.9699231"}
		,{"city": "North Lincolnshire, UK", "ll": "53.60555919999999,-0.5596582"}
		,{"city": "Huntingdonshire Regional College, California Rd, Huntingdon, Cambridgeshire PE29 1BL, UK", "ll": "52.3383842,-0.1782421"}
		,{"city": "Macclesfield, Cheshire East, UK", "ll": "53.258663,-2.119287"}
		,{"city": "Blackpool, UK", "ll": "53.8212725,-3.0554531"}
		,{"city": "Perugia, Italy", "ll": "43.1107009,12.389172"}
		,{"city": "Nijmegen, The Netherlands", "ll": "51.842867,5.854622"}
		,{"city": "Balti, Moldova", "ll": "47.75494,27.913"}
		,{"city": "Kolomna, Moscow Oblast, Russia", "ll": "55.0833333,38.7833333"}
		,{"city": "Grenoble, France", "ll": "45.188529,5.724524"}
		,{"city": "West Lothian, UK", "ll": "55.9070198,-3.5517167"}
		,{"city": "Barysaŭ, Belarus", "ll": "54.2333333,28.5"}
		,{"city": "Somerset, UK", "ll": "51.0587013,-2.9499066"}
		,{"city": "Dundee, UK", "ll": "56.462018,-2.970721"}
		,{"city": "Nikopol', Dnipropetrovs'ka oblast, Ukraine, 53200", "ll": "47.56746,34.394815"}
		,{"city": "Neuss, Germany", "ll": "51.2041968,6.6879511"}
		,{"city": "Baia Mare, Romania", "ll": "47.6666667,23.5833333"}
		,{"city": "Enschede, The Netherlands", "ll": "52.2215372,6.8936619"}
		,{"city": "Norilsk, Krasnoyarsk Krai, Russia", "ll": "69.33333329999999,88.21666669999999"}								
	];
	
									
exports.cities = cities;
exports.citiesMap = citiesMap;