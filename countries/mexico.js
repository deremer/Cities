// Top Mexican Cities
// Source: http://en.wikipedia.org/wiki/List_of_cities_in_New_Zealand
var cities =
	[
		 "Mexico City, Federal District Mexico"
		,"Ecatepec de Morelos, State of Mexico Mexico"
		,"Tijuana, Baja California Mexico"
		,"Puebla, Puebla Mexico"
		,"Guadalajara, Jalisco Mexico"
		,"Leon, Guanajuato Mexico"
		,"Ciudad Juarez, Chihuahua Mexico"
		,"Zapopan, Jalisco Mexico"
		,"Monterrey, Nuevo León Mexico"
		,"Nezahualcóyotl, State of Mexico Mexico"
		,"Mexicali, Baja California Mexico"
		,"Culiacán, Sinaloa Mexico"
		,"Naucalpan de Juárez, State of Mexico Mexico"
		,"Mérida, Yucatan Mexico"
		,"Toluca, State of Mexico Mexico"
		,"Chihuahua, Chihuahua Mexico"
		,"Querétaro, Querétaro Mexico"
		,"Aguascalientes, Aguascalientes Mexico"
		,"Acapulco, Guerrero Mexico"
		,"Hermosillo, Sonora Mexico"
		,"San Luis Potosí, San Luis Potosí Mexico"
		,"Morelia, Michoacán Mexico"
		,"Saltillo, Coahuila Mexico"
		,"Guadalupe, Nuevo Leon Mexico"
		,"Tlalnepantla de Baz, State of Mexico Mexico"
		,"Cancun, Quintana Roo Mexico"
		,"Villahermosa, Tabasco Mexico"
		,"Torreón, Coahuila Mexico"
		,"Chimalhuacán, State of Mexico Mexico"
		,"Reynosa, Tamaulipas Mexico"
		,"Tlaquepaque, Jalisco Mexico"
		,"Durango, Durango Mexico"
		,"Tuxtla Gutiérrez, Chiapas Mexico"
		,"Veracruz, Veracruz Mexico"
		,"Irapuato, Guanajuato Mexico"
		,"Tultitlán, State of Mexico Mexico"
		,"Apodaca, Nuevo León Mexico"
		,"Atizapán de Zaragoza, State of Mexico Mexico"
		,"Matamoros, Tamaulipas Mexico"
		,"Tonalá, Jalisco Mexico"
		,"Celaya, Guanajuato Mexico"
		,"Ixtapaluca, State of Mexico Mexico"
		,"Ensenada, Baja California Mexico"
		,"Xalapa, Veracruz Mexico"
		,"San Nicolás de los Garza, Nuevo Leon Mexico"
		,"Mazatlán, Sinaloa Mexico"
		,"Tlajomulco de Zúñiga, Jalisco Mexico"
		,"Los Mochis, Sinaloa Mexico"
		,"Ciudad Obregón, Sonora Mexico"
		,"Nuevo Laredo, Tamaulipas Mexico"
		,"Tepic, Nayarit Mexico"
		,"Nicolás Romero, State of Mexico Mexico"
		,"Cuernavaca, Morelos Mexico"
		,"Tecámac, State of Mexico Mexico"
		,"Valle de Chalco Solidaridad, State of Mexico Mexico"
		,"General Escobedo, Nuevo Leon Mexico"
		,"Gómez Palacio, Durango Mexico"
		,"Ciudad Victoria, Tamaulipas Mexico"
		,"Tapachula, Chiapas Mexico"
		,"Uruapan, Michoacán Mexico"
		,"Chalco, State of Mexico Mexico"
		,"Coatzacoalcos, Veracruz Mexico"
		,"Tampico, Tamaulipas Mexico"
		,"Guasave, Sinaloa Mexico"
		,"Coacalco de Berriozábal, State of Mexico Mexico"
		,"Tehuacán, Puebla Mexico"
		,"Santa Catarina, Nuevo León Mexico"
		,"Soledad de Graciano Sánchez, San Luis Potosi Mexico"
		,"Pachuca, Hidalgo Mexico"
		,"Oaxaca, Oaxaca Mexico"
		,"Salamanca, Guanajuato Mexico"
		,"Campeche, Campeche Mexico"
		,"Juarez, Nuevo Leon Mexico"
		,"Puerto Vallarta, Jalisco Mexico"
		,"Los Reyes Acaquilpan, State of Mexico Mexico"
		,"La Paz, Baja California Sur Mexico"
		,"Cardenas, Tabasco Mexico"
		,"Chetumal, Quintana Roo Mexico"
		,"Huixquilucan, State of Mexico Mexico"
		,"San Juan del Rio, Queretaro Mexico"
		,"Chilpancingo, Guerrero Mexico"
		,"Los Cabos, Baja California Sur Mexico"
		,"Texcoco, State of Mexico Mexico"
		,"Ciudad del Carmen, State of Mexico Mexico"
		,"Nogales, Sonora Mexico"
		,"Monclova, Coahuila Mexico"
		,"Metepec, State of Mexico Mexico"
		,"Fresnillo, Zacatecas Mexico"
		,"Altamira, Tamaulipas Mexico"
		,"Ocosingo, Chiapas Mexico"
		,"Ciudad Madero, Tamaulipas Mexico"
		,"Jiutepec, Morelos Mexico"
		,"Córdoba, Veracruz Mexico"
		,"Poza Rica, Veracruz Mexico"
		,"Comalcalco, Tabasco Mexico"
		,"Chicoloapan, State of Mexico Mexico"
		,"San Cristobal de las Casas, Chiapas Mexico"
		,"Zamora, Michoacán Mexico"
		,"Huimanguillo, Tabasco Mexico"
		,"San Luis Rio Colorado, Sonora Mexico"
		,"Lázaro Cárdenas, Michoacán Mexico"
		,"Cuautla, Morelos Mexico"
		,"Silao, Guanajuato Mexico"
		,"Guanajuato, Guanajuato Mexico"
		,"Ciudad Valles, San Luis Potosi Mexico"
		,"Zinacantepec, State of Mexico Mexico"
		,"Manzanillo, Colima Mexico"
		,"San Miguel de Allende, Guanajuato Mexico"
		,"Manzanillo, Colima Mexico"
		,"Minatitlán, Veracruz Mexico"
		,"Macuspana, Tabasco Mexico"
		,"Zinacantepec, State of Mexico Mexico"
		,"Navojoa, Sonora Mexico"
		,"San Juan Bautista Tuxtepec, Oaxaca Mexico"
		,"Boca del Río, Veracruz Mexico"
		,"Zumpango, State of Mexico Mexico"
		,"Guadalupe, Zacatecas Mexico"
		,"Papantla, Veracruz Mexico"
		,"Lerdo, Durango Mexico"
		,"Lagos de Moreno, Jalisco Mexico"
		,"Tuxpan, Veracruz Mexico"
		,"Allende, Guanajuato Mexico"
		,"Cuautitlán Izcalli, State of Mexico Mexico"
		,"Almoloya de Juárez, State of Mexico Mexico"
		,"Zacatecas, Zacatecas Mexico"
		,"San Martín Texmelucan, Puebla Mexico"
		,"Cuauhtémoc, Chihuahua Mexico"
		,"Zitácuaro, Michoacán Mexico"
		,"Tepatitlán, Jalisco Mexico"
		,"Ixtlahuaca de Rayón, State of Mexico Mexico"
		,"Guaymas, Sonora Mexico"
		,"Cuautitlán, State of Mexico Mexico"
		,"Acuña, Coahuila Mexico"
		,"Colima, Colima Mexico"
		,"Dolores Hidalgo, Guanajuato Mexico"
		,"Pénjamo, Guanajuato Mexico"
		,"Tulancingo, Hidalgo Mexico"
		,"Delicias, Chihuahua Mexico"
		,"El Salto, Jalisco Mexico"
		,"Navolato, Sinaloa Mexico"
		,"Comitán, Chiapas Mexico"
		,"Huejutla de Reyes, Hidalgo Mexico"
		,"Corregidora, Querétaro Mexico"
		,"Iguala, Guerrero Mexico"
		,"Valle de Santiago, Guanajuato Mexico"
		,"Tultepec, State of Mexico Mexico"
		,"San Pedro Cholula, Puebla Mexico"
		,"Chilapa de Álvarez, Guerrero Mexico"
		,"Atlixco, Puebla Mexico"
		,"San Pedro Garza García, Nuevo León Mexico"
		,"Orizaba, Veracruz Mexico"
		,"Villa de Álvarez, Colima Mexico"
		,"Cunduacán, Tabasco Mexico"
		,"Apatzingán, Michoacán Mexico"
		,"Lerma, State of Mexico Mexico"
		,"Cosoleacaque, Veracruz Mexico"
		,"Ciudad Hidalgo, Michoacán Mexico"
		,"Chilón, Chiapas Mexico"
		,"El Mante, Tamaulipas Mexico"
		,"Río Bravo, Tamaulipas Mexico"
		,"Palenque, Chiapas Mexico"
		,"José Azueta, Guerrero Mexico"
		,"San Francisco del Rincón, Guanajuato Mexico"
		,"Tecate, Baja California Mexico"
		,"Temixco, Morelos Mexico"
		,"Parral, Chihuahua Mexico"
		,"Matamoros, Coahuila Mexico"
		,"Tantoyuca, Veracruz Mexico"
		,"Las Margaritas, Chiapas Mexico"
		,"Temapache, Veracruz Mexico"
		,"San Luis de la Paz, Guanajuato Mexico"
		,"Ciudad Guzmán, Jalisco Mexico"
		,"Martínez de la Torre, Veracruz Mexico"
	];

var citiesMap = 
	[
		 {"city": "Mexico City, Distrito Federal, Mexico", "ll": "19.4326077,-99.133208"}
		,{"city": "Ecatepec de Morelos, State of Mexico, Mexico", "ll": "19.601841,-99.05067439999999"}
		,{"city": "Tijuana, Baja California, Mexico", "ll": "32.533489,-117.018204"}
		,{"city": "Puebla, Mexico", "ll": "19.0412967,-98.20619959999999"}
		,{"city": "Guadalajara, Jalisco, Mexico", "ll": "20.67359,-103.343803"}
		,{"city": "León, Guanajuato, Mexico", "ll": "21.123619,-101.680496"}
		,{"city": "Ciudad Juárez, Chihuahua, Mexico", "ll": "31.7311292,-106.4625624"}
		,{"city": "Zapopan, Jalisco, Mexico", "ll": "20.7166667,-103.4"}
		,{"city": "Monterrey, Nuevo León, Mexico", "ll": "25.6732109,-100.309201"}
		,{"city": "Ciudad Nezahualcóyotl, State of Mexico, Mexico", "ll": "19.4166667,-99.03333330000001"}
		,{"city": "Mexicali, Baja California, Mexico", "ll": "32.6455704,-115.4453421"}
		,{"city": "Culiacán, Sinaloa, Mexico", "ll": "24.8041667,-107.4311111"}
		,{"city": "Naucalpan, State of Mexico, Mexico", "ll": "19.475048,-99.237386"}
		,{"city": "Mérida, Yucatán, Mexico", "ll": "20.97,-89.62"}
		,{"city": "Toluca, State of Mexico, Mexico", "ll": "19.287867,-99.646761"}
		,{"city": "Chihuahua Municipality, Chihuahua, Mexico", "ll": "28.6352778,-106.0888889"}
		,{"city": "Querétaro, Mexico", "ll": "20.5930556,-100.3922222"}
		,{"city": "Aguascalientes Municipality, Aguascalientes, Mexico", "ll": "21.8817964,-102.2912701"}
		,{"city": "Acapulco, Guerrero, Mexico", "ll": "16.863794,-99.881614"}
		,{"city": "Hermosillo, Sonora, Mexico", "ll": "29.0891857,-110.9613299"}
		,{"city": "San Luis Potosí, Mexico", "ll": "22.1564699,-100.9855409"}
		,{"city": "Morelia, Michoacán, Mexico", "ll": "19.700593,-101.186421"}
		,{"city": "Saltillo, Coahuila, Mexico", "ll": "25.4333333,-100.9833333"}
		,{"city": "Guadalupe, Nuevo León, Mexico", "ll": "25.6841389,-100.2509989"}
		,{"city": "Tlalnepantla de Baz, State of Mexico, Mexico", "ll": "19.538988,-99.193281"}
		,{"city": "Cancún, Quintana Roo, Mexico", "ll": "21.158964,-86.84593699999999"}
		,{"city": "Villahermosa, Tabasco, Mexico", "ll": "17.987557,-92.929147"}
		,{"city": "Torreón Municipality, Coahuila, Mexico", "ll": "25.5428443,-103.4067861"}
		,{"city": "Chimalhuacán, State of Mexico, Mexico", "ll": "19.4207517,-98.9489571"}
		,{"city": "Reynosa, Tamaulipas, Mexico", "ll": "26.0712222,-98.2973651"}
		,{"city": "Tlaquepaque, Jalisco, Mexico", "ll": "20.6333333,-103.3166667"}
		,{"city": "Durango, Mexico", "ll": "24.0277202,-104.6531759"}
		,{"city": "Tuxtla Gutiérrez, Chiapas, Mexico", "ll": "16.75,-93.1166667"}
		,{"city": "Veracruz, Veracruz-Llave, Mexico", "ll": "19.1727167,-96.13326889999999"}
		,{"city": "Irapuato, Guanajuato, Mexico", "ll": "20.6786652,-101.3544964"}
		,{"city": "Tultitlán de Mariano Escobedo, State of Mexico, Mexico", "ll": "19.645565,-99.16892690000002"}
		,{"city": "Apodaca, Nuevo León, Mexico", "ll": "25.7815621,-100.1875974"}
		,{"city": "Atizapán De Zaragoza, State of Mexico, Mexico", "ll": "19.5562275,-99.2674713"}
		,{"city": "Matamoros, Tamaulipas, Mexico", "ll": "25.8690294,-97.50273759999999"}
		,{"city": "Tonalá, Jalisco, Mexico", "ll": "20.6815855,-103.2656264"}
		,{"city": "Celaya, Guanajuato, Mexico", "ll": "20.5222222,-100.8122222"}
		,{"city": "Ixtapaluca, State of Mexico, Mexico", "ll": "19.3138911,-98.8859856"}
		,{"city": "Ensenada Municipality, Baja California, Mexico", "ll": "31.859577,-116.606428"}
		,{"city": "Xalapa, Veracruz-Llave, Mexico", "ll": "19.5426237,-96.9137441"}
		,{"city": "San Nicolás de los Garza, Nuevo León, Mexico", "ll": "25.75,-100.2833333"}
		,{"city": "Mazatlán, Sinaloa, Mexico", "ll": "23.2266877,-106.4076183"}
		,{"city": "Tlajomulco de Zuñiga, Jalisco, Mexico", "ll": "20.47385,-103.447304"}
		,{"city": "Los Mochis, Sinaloa, Mexico", "ll": "25.789314,-108.99163"}
		,{"city": "Ciudad Obregón, Sonora, Mexico", "ll": "27.4921987,-109.9407056"}
		,{"city": "Nuevo Laredo, Tamaulipas, Mexico", "ll": "27.4800237,-99.5105349"}
		,{"city": "Tepic, Nayarit, Mexico", "ll": "21.5038734,-104.8945796"}
		,{"city": "Ciudad Nicolás Romero, State of Mexico, Mexico", "ll": "19.6197996,-99.3114344"}
		,{"city": "Cuernavaca, Morelos, Mexico", "ll": "18.9340199,-99.23148259999999"}
		,{"city": "Tecámac, Tecamac de Felipe Villanueva, State of Mexico, Mexico", "ll": "19.7098118,-98.9714623"}
		,{"city": "Chalco, Ampliación San Mateo, State of Mexico, Mexico", "ll": "19.6144344,-99.1462145"}
		,{"city": "General Escobedo, Nuevo León, Mexico", "ll": "25.7802165,-100.3161126"}
		,{"city": "Gómez Palacio, Durango, Mexico", "ll": "25.56815,-103.491798"}
		,{"city": "Ciudad Victoria, Tamaulipas, Mexico", "ll": "23.7369164,-99.14111539999999"}
		,{"city": "Tapachula, Chiapas, Mexico", "ll": "14.9,-92.2666667"}
		,{"city": "Uruapan, Michoacán, Mexico", "ll": "19.4172134,-102.0503611"}
		,{"city": "Chalco, Chalco de Díaz Covarrubias, State of Mexico, Mexico", "ll": "19.2613944,-98.8919428"}
		,{"city": "Coatzacoalcos, Veracruz-Llave, Mexico", "ll": "18.1377778,-94.4352778"}
		,{"city": "Tampico, Tamaulipas, Mexico", "ll": "22.2552778,-97.8686111"}
		,{"city": "Guasave Municipality, Sinaloa, Mexico", "ll": "25.5744444,-108.4705556"}
		,{"city": "Coacalco de Berriozabal, State of Mexico, Mexico", "ll": "19.6326046,-99.1090105"}
		,{"city": "Tehuacán, Puebla, Mexico", "ll": "18.4625,-97.39277779999999"}
		,{"city": "Santa Catarina, Nuevo León, Mexico", "ll": "25.6737633,-100.4605976"}
		,{"city": "Soledad de Graciano Sánchez, San Luis Potosí, Mexico", "ll": "22.1833333,-100.9333333"}
		,{"city": "Pachuca, Hidalgo, Mexico", "ll": "20.1153012,-98.7458874"}
		,{"city": "Oaxaca, Mexico", "ll": "17.0669444,-96.7202778"}
		,{"city": "Salamanca, Guanajuato, Mexico", "ll": "20.570391,-101.195646"}
		,{"city": "Campeche, Mexico", "ll": "19.8454459,-90.5236731"}
		,{"city": "Juárez, Nuevo León, Mexico", "ll": "25.6473257,-100.0945282"}
		,{"city": "Puerto Vallarta, Jalisco, Mexico", "ll": "20.6220182,-105.2284566"}
		,{"city": "Los Reyes Acaquilpan, State of Mexico, Mexico", "ll": "19.358968,-98.976903"}
		,{"city": "La Paz Municipality, Baja California Sur, Mexico", "ll": "24.1333333,-110.3"}
		,{"city": "Cárdenas, Tabasco, Mexico", "ll": "18.001342,-93.371284"}
		,{"city": "Chetumal, Quintana Roo, Mexico", "ll": "18.502871,-88.303511"}
		,{"city": "Huixquilucan de Degollado, State of Mexico, Mexico", "ll": "19.361923,-99.35047999999999"}
		,{"city": "San Juan del Río, Querétaro, Mexico", "ll": "20.391528,-99.981438"}
		,{"city": "Chilpancingo, Guerrero, Mexico", "ll": "17.55,-99.5"}
		,{"city": "Cabo San Lucas, Baja California Sur, Mexico", "ll": "22.8905327,-109.9167371"}
		,{"city": "Texcoco, Texcoco de Mora, State of Mexico, Mexico", "ll": "19.5308231,-98.89418409999999"}
		,{"city": "Del Carmen, Benito Juárez, Mexico City, Distrito Federal, Mexico", "ll": "19.3538129,-99.16360510000001"}
		,{"city": "Nogales, Sonora, Mexico", "ll": "31.3085642,-110.9434486"}
		,{"city": "Monclova, Coahuila, Mexico", "ll": "26.9102778,-101.4222222"}
		,{"city": "Metepec, State of Mexico, Mexico", "ll": "19.2563509,-99.6047904"}
		,{"city": "Fresnillo, Zacatecas, Mexico", "ll": "23.1719444,-102.8608333"}
		,{"city": "Altamira Municipality, Tamaulipas, Mexico", "ll": "22.4019807,-97.936707"}
		,{"city": "Ocosingo, Chiapas, Mexico", "ll": "16.9066667,-92.0938889"}
		,{"city": "Ciudad Madero, Tamaulipas, Mexico", "ll": "22.275878,-97.83059899999999"}
		,{"city": "Jiutepec, Morelos, Mexico", "ll": "18.8833333,-99.1833333"}
		,{"city": "Córdoba, Veracruz-Llave, Mexico", "ll": "18.8941667,-96.9347222"}
		,{"city": "Poza Rica, Veracruz-Llave, Mexico", "ll": "20.5333333,-97.44999999999999"}
		,{"city": "Comalcalco Municipality, Tabasco, Mexico", "ll": "18.261156,-93.2216864"}
		,{"city": "Chicoloapan de Juárez, State of Mexico, Mexico", "ll": "19.412609,-98.902687"}
		,{"city": "San Cristóbal de las Casas, Chiapas, Mexico", "ll": "16.737585,-92.636652"}
		,{"city": "Zamora, Michoacán, Mexico", "ll": "19.988688,-102.285608"}
		,{"city": "Huimanguillo, Tabasco, Mexico", "ll": "17.8302778,-93.39138890000001"}
		,{"city": "San Luis Río Colorado, Sonora, Mexico", "ll": "32.4518879,-114.7716836"}
		,{"city": "61614 Lázaro Cárdenas, Michoacán, Mexico", "ll": "19.5289424,-101.6775012"}
		,{"city": "Cuautla, Morelos, Mexico", "ll": "18.8126047,-98.9548261"}
		,{"city": "Silao, Guanajuato, Mexico", "ll": "20.952169,-101.426697"}
		,{"city": "Guanajuato, Mexico", "ll": "21.018111,-101.25832"}
		,{"city": "Ciudad Valles, San Luis Potosí, Mexico", "ll": "21.994665,-99.01074"}
		,{"city": "San Miguel Zinacantepec, State of Mexico, Mexico", "ll": "19.2833333,-99.7333333"}
		,{"city": "Manzanillo Municipality, Colima, Mexico", "ll": "19.0522222,-104.3158333"}
		,{"city": "San Miguel de Allende, Guanajuato, Mexico", "ll": "20.9141667,-100.7441667"}
		,{"city": "Manzanillo Municipality, Colima, Mexico", "ll": "19.0522222,-104.3158333"}
		,{"city": "Minatitlán, Veracruz-Llave, Mexico", "ll": "17.9888889,-94.5586111"}
		,{"city": "Macuspana Municipality, Tabasco, Mexico", "ll": "17.7607017,-92.5936096"}
		,{"city": "San Miguel Zinacantepec, State of Mexico, Mexico", "ll": "19.2833333,-99.7333333"}
		,{"city": "Navojoa, Sonora, Mexico", "ll": "27.0715397,-109.4442284"}
		,{"city": "San Juan Bautista Tuxtepec, Oaxaca, Mexico", "ll": "18.0859,-96.1339859"}
		,{"city": "Boca del Río, Veracruz-Llave, Mexico", "ll": "19.1400064,-96.11559319999999"}
		,{"city": "Zumpango, State of Mexico, Mexico", "ll": "19.7971119,-99.098933"}
		,{"city": "Guadalupe, Zacatecas, Mexico", "ll": "22.7532229,-102.509537"}
		,{"city": "Papantla, Veracruz-Llave, Mexico", "ll": "20.4566709,-97.3156131"}
		,{"city": "Lerdo, Ciudad Lerdo, Durango, Mexico", "ll": "25.554478,-103.5306775"}
		,{"city": "Lagos de Moreno, Jalisco, Mexico", "ll": "21.3579529,-101.9303604"}
		,{"city": "Tuxpan, Veracruz-Llave, Mexico", "ll": "20.9645689,-97.40449609999999"}
		,{"city": "Allende, San Miguel de Allende, Guanajuato, Mexico", "ll": "20.9003994,-100.7471322"}
		,{"city": "Cuautitlán Izcalli, State of Mexico, Mexico", "ll": "19.645378,-99.21122199999999"}
		,{"city": "Almoloya de Juárez, State of Mexico, Mexico", "ll": "19.3690064,-99.7605116"}
		,{"city": "Zacatecas, Mexico", "ll": "22.7709249,-102.5832539"}
		,{"city": "San Martín Texmelucan de Labastida, Puebla, Mexico", "ll": "19.2833333,-98.4333333"}
		,{"city": "Cuauhtemoc, Chihuahua, Mexico", "ll": "28.406612,-106.8665089"}
		,{"city": "Zitácuaro, Michoacán, Mexico", "ll": "19.433959,-100.3519052"}
		,{"city": "Tepatitlán, Jalisco, Mexico", "ll": "20.81024,-102.761703"}
		,{"city": "Ixtlahuaca de Rayón, State of Mexico, Mexico", "ll": "19.5688889,-99.7669444"}
		,{"city": "Guaymas, Sonora, Mexico", "ll": "27.9139609,-110.9020749"}
		,{"city": "Cuautitlán, State of Mexico, Mexico", "ll": "19.6721809,-99.18096849999999"}
		,{"city": "Ciudad Acuña, Coahuila, Mexico", "ll": "29.3233299,-100.9513806"}
		,{"city": "Colima, Mexico", "ll": "19.2433333,-103.7247222"}
		,{"city": "Dolores Hidalgo, Guanajuato, Mexico", "ll": "21.157049,-100.9347"}
		,{"city": "Pénjamo, Guanajuato, Mexico", "ll": "20.4311111,-101.7222222"}
		,{"city": "Tulancingo, Hidalgo, Mexico", "ll": "20.084376,-98.367993"}
		,{"city": "Delicias, Chihuahua, Mexico", "ll": "28.1833333,-105.4666667"}
		,{"city": "El Salto, Jalisco, Mexico", "ll": "20.5174767,-103.1810881"}
		,{"city": "Navolato, Sinaloa, Mexico", "ll": "24.7652778,-107.7016667"}
		,{"city": "Comitán, Chiapas, Mexico", "ll": "16.2436147,-92.12354239999999"}
		,{"city": "Huejutla de Reyes, Hidalgo, Mexico", "ll": "21.143739,-98.418111"}
		,{"city": "Corregidora, Querétaro, Mexico", "ll": "20.5365909,-100.4411011"}
		,{"city": "Iguala, Guerrero, Mexico", "ll": "18.35,-99.5333333"}
		,{"city": "Valle de Santiago, Guanajuato, Mexico", "ll": "20.39411,-101.192902"}
		,{"city": "Tultepec, State of Mexico, Mexico", "ll": "19.685,-99.1280556"}
		,{"city": "Cholula, Bosques de Los Angeles, Puebla, Mexico", "ll": "19.0869031,-98.14093890000001"}
		,{"city": "Chilapa de Álvarez, Guerrero, Mexico", "ll": "17.59629,-99.1770559"}
		,{"city": "Atlixco, Puebla, Mexico", "ll": "18.902286,-98.4392079"}
		,{"city": "San Pedro Garza García, Nuevo León, Mexico", "ll": "25.6573447,-100.4017501"}
		,{"city": "Orizaba, Veracruz-Llave, Mexico", "ll": "18.85,-97.1"}
		,{"city": "Villa de Álvarez, Colima, Mexico", "ll": "19.2637632,-103.7460904"}
		,{"city": "Cunduacán Municipality, Tabasco, Mexico", "ll": "18.0721544,-93.1712486"}
		,{"city": "Apatzingán, Michoacán, Mexico", "ll": "19.0833333,-102.35"}
		,{"city": "Lerma, Mexico City, State of Mexico, Mexico", "ll": "19.3958718,-99.3103354"}
		,{"city": "Cosoleacaque, Veracruz-Llave, Mexico", "ll": "17.9952778,-94.6369444"}
		,{"city": "Ciudad Hidalgo, Michoacán, Mexico", "ll": "19.6916667,-100.5536111"}
		,{"city": "Chilón, Chiapas, Mexico", "ll": "17.1046837,-92.2736561"}
		,{"city": "El Mante, Tamaulipas, Mexico", "ll": "22.522283,-98.79135099999999"}
		,{"city": "Río Bravo, Tamaulipas, Mexico", "ll": "25.9878812,-98.0888094"}
		,{"city": "Palenque, Chiapas, Mexico", "ll": "17.5100299,-91.9814964"}
		,{"city": "José Azueta, Centro, Teloloapan, Guerrero, Mexico", "ll": "18.3700762,-99.8732634"}
		,{"city": "San Francisco del Rincón, Guanajuato, Mexico", "ll": "21.0205039,-101.8538614"}
		,{"city": "Tecate, Baja California, Mexico", "ll": "32.5666667,-116.6333333"}
		,{"city": "Temixco, Morelos, Mexico", "ll": "18.85,-99.2333333"}
		,{"city": "Parral, Chihuahua, Mexico", "ll": "26.9323162,-105.6666844"}
		,{"city": "Matamoros, Coahuila, Mexico", "ll": "25.5291939,-103.2245696"}
		,{"city": "Tantoyuca, Veracruz-Llave, Mexico", "ll": "21.348539,-98.229393"}
		,{"city": "Las Margaritas, Chiapas, Mexico", "ll": "16.3152778,-91.9816667"}
		,{"city": "Temapache, Veracruz-Llave, Mexico", "ll": "21.070814,-97.64206899999999"}
		,{"city": "San Luis de la Paz, Guanajuato, Mexico", "ll": "21.2959574,-100.5175346"}
		,{"city": "Ciudad Guzmán, Jalisco, Mexico", "ll": "19.7015486,-103.4666563"}
		,{"city": "Martínez de La Torre, Veracruz-Llave, Mexico", "ll": "20.0617775,-97.05195839999999"}
	]									
									
exports.cities = cities;
exports.citiesMap = citiesMap;								