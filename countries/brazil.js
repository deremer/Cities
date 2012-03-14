// Top Brazilian Cities
// Source: http://www.citymayors.com/gratis/brazilian_cities.html
var cities = 
	[
		 "Sao Paulo, Brazil"
		,"Rio de Janeiro, Brazil"
		,"Salvador, Brazil"
		,"Belo Horizonte, Brazil"
		,"Fortaleza, Brazil"
		,"BRASILIA, Brazil"
		,"Curitiba, Brazil"
		,"Recife, Brazil"
		,"Porto Alegre, Brazil"
		,"Manaus, Brazil"
		,"Belém, Brazil"
		,"Guarulhos, Brazil"
		,"Goiânia, Brazil"
		,"Campinas, Brazil"
		,"Sao Gonçalo, Brazil"
		,"Nova Iguaçu, Brazil"
		,"Sao Luís, Brazil"
		,"Maceió, Brazil"
		,"Duque de Caxias, Brazil"
		,"Sao Bernardo do Campo, Brazil"
		,"Teresina, Brazil"
		,"Natal, Brazil"
		,"Osasco, Brazil"
		,"Campo Grande, Brazil"
		,"Santo André, Brazil"
		,"Joao Pessoa, Brazil"
		,"Jaboatao dos Guarapes, Brazil"
		,"Contagem, Brazil"
		,"Sao José dos Campos, Brazil"
		,"Uberlândia, Brazil"
		,"Feira de Santana, Brazil"
		,"Ribeirao Prêto, Brazil"
		,"Sorocaba, Brazil"
		,"Niterói, Brazil"
		,"Cuiabá, Brazil"
		,"Juiz de Fora, Brazil"
		,"Aracaju, Brazil"
		,"Sao Joao de Meriti, Brazil"
		,"Londrina, Brazil"
		,"Joinville, Brazil"
		,"Belford Roxo, Brazil"
		,"Ananindeua, Brazil"
		,"Santos, Brazil"
		,"Campos dos Goytacazes, Brazil"
		,"Mauá, Brazil"
		,"Carapicuíba, Brazil"
		,"Sao José do Rio Prêto, Brazil"
		,"Caxias do Sul, Brazil"
		,"Olinda, Brazil"
		,"Campina Grande, Brazil"
		,"Moji das Cruzes, Brazil"
		,"Aparecida de Goiania, Brazil"
		,"Diadema, Brazil"
		,"Vila Velha, Brazil"
		,"Piracicaba, Brazil"
		,"Cariacica, Brazil"
		,"Bauru, Brazil"
		,"Pelotas, Brazil"
		,"Betim, Brazil"
		,"Porto Velho, Brazil"
		,"Serra, Brazil"
		,"Franca, Brazil"
		,"Canoas, Brazil"
		,"Jundiaí, Brazil"
		,"Maringá, Brazil"
		,"Montes Claros, Brazil"
		,"Sao Vicente, Brazil"
		,"Anápolis, Brazil"
		,"Florianópolis, Brazil"
		,"Itaquaquecetuba, Brazil"
		,"Petrópolis, Brazil"
		,"Ponta Grossa, Brazil"
		,"Vitória, Brazil"
		,"Rio Branco, Brazil"
		,"Foz do Iguaçu, Brazil"
		,"Macapá, Brazil"
		,"Ilhéus, Brazil"
		,"Vitória da Conquista, Brazil"
		,"Uberaba, Brazil"
		,"Paulista, Brazil"
		,"Limeira, Brazil"
		,"Blumenou, Brazil"
		,"Caruaru, Brazil"
		,"Caucaia, Brazil"
		,"Nôvo Hamburgo, Brazil"
		,"Ribeirao das Neves, Brazil"
		,"Cascavel, Brazil"
		,"Volta Redonda, Brazil"
		,"Santa Maria, Brazil"
		,"Santarém, Brazil"
		,"Guarujá, Brazil"
		,"Taubaté, Brazil"
		,"Governador Valadares, Brazil"
		,"Embu, Brazil"
		,"Gravatai, Brazil"
		,"Imperatriz, Brazil"
		,"Varzea Grande, Brazil"
		,"Barueri, Brazil"
		,"Mossoró, Brazil"
		,"Petrolina, Brazil"
	];

var citiesMap = 
	[
		 {"city": "Sao Paulo - São Paulo, Brazil", "ll": "-23.5489433,-46.6388182"}
		,{"city": "Rio de Janeiro, Brazil", "ll": "-22.9035393,-43.2095869"}
		,{"city": "Salvador - Bahia, Brazil", "ll": "-12.9703817,-38.512382"}
		,{"city": "Belo Horizonte - Minas Gerais, Brazil", "ll": "-19.9190677,-43.9385747"}
		,{"city": "Fortaleza - Ceará, Brazil", "ll": "-3.7183943,-38.5433948"}
		,{"city": "Brasília - Brazilian Federal District, Brazil", "ll": "-15.7801482,-47.9291698"}
		,{"city": "Curitiba - Paraná, Brazil", "ll": "-25.4283563,-49.2732515"}
		,{"city": "Recife - Pernambuco, Brazil", "ll": "-8.0542775,-34.8812561"}
		,{"city": "Porto Alegre - Rio Grande do Sul, Brazil", "ll": "-30.0277041,-51.2287346"}
		,{"city": "Manaus - Amazonas, Brazil", "ll": "-3.1064093,-60.02642969999999"}
		,{"city": "Belém - Pará, Brazil", "ll": "-1.4550205,-48.5023682"}
		,{"city": "Guarulhos - São Paulo, Brazil", "ll": "-23.4634523,-46.5334502"}
		,{"city": "Goiânia - Goiás, Brazil", "ll": "-16.6777153,-49.2676296"}
		,{"city": "Campinas - São Paulo, Brazil", "ll": "-22.9071048,-47.0632391"}
		,{"city": "São Gonçalo - Rio de Janeiro, Brazil", "ll": "-22.8270994,-43.05437939999999"}
		,{"city": "Nova Iguaçu - Rio de Janeiro, Brazil", "ll": "-22.7597631,-43.4515542"}
		,{"city": "São Luís - Maranhão, Brazil", "ll": "-2.5307312,-44.3068258"}
		,{"city": "Maceió - Alagoas, Brazil", "ll": "-9.6662515,-35.7350983"}
		,{"city": "Duque de Caxias - Rio de Janeiro, Brazil", "ll": "-22.7868246,-43.3131063"}
		,{"city": "São Bernardo do Campo - São Paulo, Brazil", "ll": "-23.689584,-46.5647381"}
		,{"city": "Teresina - Piauí, Brazil", "ll": "-5.0892123,-42.8016275"}
		,{"city": "Natal - Rio Grande do Norte, Brazil", "ll": "-5.794478499999999,-35.2109531"}
		,{"city": "Osasco - São Paulo, Brazil", "ll": "-23.5316928,-46.7899232"}
		,{"city": "Campo Grande - Mato Grosso do Sul, Brazil", "ll": "-20.4435053,-54.64775909999999"}
		,{"city": "Santo André - São Paulo, Brazil", "ll": "-23.655314,-46.5320878"}
		,{"city": "João Pessoa - Paraíba, Brazil", "ll": "-7.11532,-34.8610512"}
		,{"city": "Jaboatão dos Guararapes - Pernambuco, Brazil", "ll": "-8.112076799999999,-35.01540019999999"}
		,{"city": "Contagem - Minas Gerais, Brazil", "ll": "-19.9385599,-44.0529377"}
		,{"city": "São José dos Campos - São Paulo, Brazil", "ll": "-23.1790801,-45.88724759999999"}
		,{"city": "Uberlândia - Minas Gerais, Brazil", "ll": "-18.9113046,-48.2621925"}
		,{"city": "Feira de Santana - Bahia, Brazil", "ll": "-12.2554649,-38.9542874"}
		,{"city": "Ribeirão Preto - São Paulo, Brazil", "ll": "-21.1766574,-47.8207619"}
		,{"city": "Sorocaba - São Paulo, Brazil", "ll": "-23.5062288,-47.45590989999999"}
		,{"city": "Niterói - Rio de Janeiro, Brazil", "ll": "-22.8807655,-43.104335"}
		,{"city": "Cuiabá - Mato Grosso, Brazil", "ll": "-15.5989173,-56.094894"}
		,{"city": "Juiz de Fora - Minas Gerais, Brazil", "ll": "-21.7650083,-43.3488245"}
		,{"city": "Aracaju - Sergipe, Brazil", "ll": "-10.9095421,-37.0747732"}
		,{"city": "São João de Meriti - Rio de Janeiro, Brazil", "ll": "-22.8038095,-43.3726548"}
		,{"city": "Londrina - Paraná, Brazil", "ll": "-23.29273,-51.17320729999999"}
		,{"city": "Joinville - Santa Catarina, Brazil", "ll": "-26.3050883,-48.8460931"}
		,{"city": "Belford Roxo - Rio de Janeiro, Brazil", "ll": "-22.7642353,-43.3991619"}
		,{"city": "Ananindeua - Pará, Brazil", "ll": "-1.366826,-48.3721754"}
		,{"city": "Santos - São Paulo, Brazil", "ll": "-23.9618356,-46.3322474"}
		,{"city": "Campos dos Goytacazes - Rio de Janeiro, Brazil", "ll": "-21.7544683,-41.324407"}
		,{"city": "Mauá - São Paulo, Brazil", "ll": "-23.6687442,-46.46139729999999"}
		,{"city": "Carapicuíba - São Paulo, Brazil", "ll": "-23.5192226,-46.8367395"}
		,{"city": "São José do Rio Preto - São Paulo, Brazil", "ll": "-20.820181,-49.37968129999999"}
		,{"city": "Caxias do Sul - Rio Grande do Sul, Brazil", "ll": "-29.1678244,-51.17938299999999"}
		,{"city": "Olinda - Pernambuco, Brazil", "ll": "-8.0093702,-34.8552789"}
		,{"city": "Campina Grande - Paraíba, Brazil", "ll": "-7.2307181,-35.8816664"}
		,{"city": "Mogi das Cruzes - São Paulo, Brazil", "ll": "-23.5247535,-46.1871339"}
		,{"city": "Aparecida de Goiânia - Goiás, Brazil", "ll": "-16.8100879,-49.2396697"}
		,{"city": "Diadema - São Paulo, Brazil", "ll": "-23.6864908,-46.62410759999999"}
		,{"city": "Vila Velha - ES, Brazil", "ll": "-20.3427433,-40.2928373"}
		,{"city": "Piracicaba - São Paulo, Brazil", "ll": "-22.7249765,-47.6476006"}
		,{"city": "Cariacica - ES, Brazil", "ll": "-20.2660457,-40.4218121"}
		,{"city": "Bauru - São Paulo, Brazil", "ll": "-22.3148441,-49.06177090000001"}
		,{"city": "Pelotas - Rio Grande do Sul, Brazil", "ll": "-31.771132,-52.3430856"}
		,{"city": "Betim - Minas Gerais, Brazil", "ll": "-19.9675657,-44.1991428"}
		,{"city": "Porto Velho - RO, Brazil", "ll": "-8.7618253,-63.90196"}
		,{"city": "Serra - ES, Brazil", "ll": "-20.1286963,-40.3082669"}
		,{"city": "Franca - São Paulo, Brazil", "ll": "-20.5417731,-47.4197113"}
		,{"city": "Canoas - Rio Grande do Sul, Brazil", "ll": "-29.918889,-51.1780587"}
		,{"city": "Jundiaí - São Paulo, Brazil", "ll": "-23.1864533,-46.8844527"}
		,{"city": "Maringá - Paraná, Brazil", "ll": "-23.427304,-51.9375047"}
		,{"city": "Montes Claros - Minas Gerais, Brazil", "ll": "-16.7368647,-43.86524670000001"}
		,{"city": "São Vicente - São Paulo, Brazil", "ll": "-23.9629754,-46.3918028"}
		,{"city": "Anápolis - Goiás, Brazil", "ll": "-16.3287035,-48.9533977"}
		,{"city": "Florianópolis - Santa Catarina, Brazil", "ll": "-27.5969039,-48.54945439999999"}
		,{"city": "Itaquaquecetuba - São Paulo, Brazil", "ll": "-23.4865929,-46.3488909"}
		,{"city": "Petrópolis - Rio de Janeiro, Brazil", "ll": "-22.5046388,-43.1823294"}
		,{"city": "Ponta Grossa - Paraná, Brazil", "ll": "-25.0945465,-50.16328730000001"}
		,{"city": "Vitoria - ES, Brazil", "ll": "-20.3153602,-40.3017673"}
		,{"city": "Rio Branco - Acre, Brazil", "ll": "-9.9739989,-67.807568"}
		,{"city": "Foz do Iguaçu - Paraná, Brazil", "ll": "-25.5468978,-54.5881716"}
		,{"city": "Macapá - Amapá, Brazil", "ll": "0.0344566,-51.0665639"}
		,{"city": "Ilhéus - Bahia, Brazil", "ll": "-14.7971774,-39.0344009"}
		,{"city": "Vitória da Conquista - Bahia, Brazil", "ll": "-14.8510197,-40.8485458"}
		,{"city": "Uberaba - Minas Gerais, Brazil", "ll": "-19.7501587,-47.9325395"}
		,{"city": "Paulista - Pernambuco, Brazil", "ll": "-7.940087699999999,-34.8723339"}
		,{"city": "Limeira - São Paulo, Brazil", "ll": "-22.5645406,-47.4004093"}
		,{"city": "Blumenau - Santa Catarina, Brazil", "ll": "-26.9187523,-49.0660252"}
		,{"city": "Caruaru - Pernambuco, Brazil", "ll": "-8.2808101,-35.9754429"}
		,{"city": "Caucaia - Ceará, Brazil", "ll": "-3.734536299999999,-38.6563247"}
		,{"city": "Novo Hamburgo - Rio Grande do Sul, Brazil", "ll": "-29.6846047,-51.1418563"}
		,{"city": "Ribeirão das Neves - Minas Gerais, Brazil", "ll": "-19.765938,-44.0870225"}
		,{"city": "Cascavel - Paraná, Brazil", "ll": "-24.9554503,-53.45523610000001"}
		,{"city": "Volta Redonda - Rio de Janeiro, Brazil", "ll": "-22.5251514,-44.1037794"}
		,{"city": "Santa Maria - Rio Grande do Sul, Brazil", "ll": "-29.6858073,-53.8074871"}
		,{"city": "Santarém - Pará, Brazil", "ll": "-2.4394353,-54.6987351"}
		,{"city": "Guarujá - São Paulo, Brazil", "ll": "-23.9946009,-46.256867"}
		,{"city": "Taubaté - São Paulo, Brazil", "ll": "-23.0309385,-45.5483236"}
		,{"city": "Governador Valadares - Minas Gerais, Brazil", "ll": "-18.8498517,-41.9492683"}
		,{"city": "Embu - São Paulo, Brazil", "ll": "-23.649158,-46.8526301"}
		,{"city": "Gravataí - Rio Grande do Sul, Brazil", "ll": "-29.9357237,-51.01659069999999"}
		,{"city": "Imperatriz - Maranhão, Brazil", "ll": "-5.5255018,-47.4770485"}
		,{"city": "Várzea Grande - Mato Grosso, Brazil", "ll": "-15.6477954,-56.1331863"}
		,{"city": "Barueri - São Paulo, Brazil", "ll": "-23.5113015,-46.8767748"}
		,{"city": "Mossoró - Rio Grande do Norte, Brazil", "ll": "-5.1880361,-37.3441344"}
		,{"city": "Petrolina - Pernambuco, Brazil", "ll": "-9.394156899999999,-40.5096046"}
	]									
									
exports.cities = cities;
exports.citiesMap = citiesMap;