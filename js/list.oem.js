




// body 		- кузов
// bolt 		- болт
// bracket 		- скоби
// btn 			- кнопки, перемикачі
// chassis 		- ходова
// door 		- двері
// gasket 		- прокладки
// glass 		- скло
// gum 			- ущільнювачі, гумові вироби
// hosepipe 	- шланги, патрубки
// electro 		- електрика
// filter 		- фільтри
// lamp 		- лампи
// light 		- світло, освітлення
// mirror 		- дзеркала
// motor 		- двигун
// plastic 		- пластик
// salon 		- салон
// tuning 		- тюнінг
// under_hood 	- підкапот







const arrListOEMcat = [

	{ id: 'bolt' 		, title: 'Болти' 							, } ,
	{ id: 'gum' 		, title: 'Гума' 							, } ,
	{ id: 'door' 		, title: 'Двері' 							, } ,
	{ id: 'motor' 		, title: 'Двигун' 							, } ,
	{ id: 'mirror' 		, title: 'Дзеркала' 						, } ,
	{ id: 'electro' 	, title: 'Електрика' 						, } ,
	{ id: 'relay' 		, title: 'Електрика. Реле' 					, } ,
	{ id: 'btn' 		, title: 'Електрика. Кнопки/перемикачі' 	, } ,
	{ id: 'lamp' 		, title: 'Електрика. Лампи' 				, } ,
	{ id: 'light' 		, title: 'Електрика. Світло/освітлення' 	, } ,
	{ id: 'gearbox' 	, title: 'КПП' 								, } ,
	{ id: 'fasteners' 	, title: 'Кріплення' 						, } ,
	{ id: 'body' 		, title: 'Кузов' 							, } ,
	{ id: 'duster' 		, title: 'Пильники' 						, } ,
	{ id: 'under_hood' 	, title: 'Під капотом' 						, } ,
	{ id: 'plastic' 	, title: 'Пластик' 							, } ,
	{ id: 'gasket' 		, title: 'Прокладки' 						, } ,
	{ id: 'salon' 		, title: 'Салон' 							, } ,
	{ id: 'screw' 		, title: 'Саморізи' 						, } ,
	{ id: 'glass' 		, title: 'Скло' 							, } ,
	{ id: 'bracket' 	, title: 'Скоби' 							, } ,
	{ id: 'tuning' 		, title: 'Тюнінг' 							, } ,
	{ id: 'filter' 		, title: 'Фільтри' 							, } ,
	{ id: 'chassis' 	, title: 'Ходова частина' 					, } ,
	{ id: 'hosepipe' 	, title: 'Шланги/патрубки' 			, } ,






];














const arrListOEM = [





{ id: '357513031' 		, title: 'Амортизатор задній' 									, manufacturer: [ 
																							{ id: 'vag' 		, n: '357513031S' 	, }, 
																								], cat: { chassis: 1, }, },

{ id: '357413031' 		, title: 'Амортизатор передній' 								, manufacturer: [ 
																							{ id: 'vag' 		, n: '357413031' 	, }, 
																								], cat: { chassis: 1, }, },



{ id: 'n90288901' 		, title: 'Болт/пробка ( маслозливна ) піддону двигуна' 			, n: [ 'N90288901', ] 		, cat: { motor: 1, under_hood: 1, bolt: 1, }, },
{ id: 'n0138492' 		, title: 'Болт ( шайба/кільце )' 								, n: [ 'N0138492', ] 		, cat: { motor: 1, under_hood: 1, bolt: 1, }, txt: 'Тільки шайба/кільце', },

{ id: 'n10231601' 		, title: 'Болт диску гальмівного' 								, manufacturer: [ { id: 'vag', n: 'N10231601', }, ], cat: { bolt: 1, chassis: 1, }, },



{ id: '6n0615301' 		, title: 'Диск гальмівний передній вентильований 4*100 ( 2E/AGG )' 			, manufacturer: [ 

																										{ id: 'vag', n: '6N0615301D', }, 
																										{ id: 'vag', n: '357615601', }, 
																										{ id: 'vag', n: '357615301', }, 
																										{ id: 'vag', n: '321615301D', }, 
																										{ id: 'trw', n: 'DF 1533', }, 

																											], cat: { chassis: 1, }, },

{ id: '6n0615601' 		, title: 'Диск гальмівний задній 4*100 ( 2E/AGG )' 				, manufacturer: [ 

																								{ id: 'vag', n: '6N0615601', }, 
																								{ id: 'vag', n: '191615601', }, 
																								{ id: 'trw', n: 'DF 1529', }, 
						
																									], cat: { chassis: 1, }, },


{ id: '357615601b' 		, title: 'Диск гальмівний 5*100 ( ABF )' 						, manufacturer: [ { id: 'vag', n: '357615601B', }, ], cat: { chassis: 1, }, },




//{ id: '357615601' 		, title: 'Диск гальмівний 4*100 ( 2E/AGG )' 					, manufacturer: [ { id: 'vag', n: '357615601', }, ], cat: { chassis: 1, }, },











{ id: '357857507' 		, title: 'Дзеркало' 											, n: [ '357857507', '357857508', '357857521', '357857522', ], cat: { mirror: 1, body: 1, }, },
{ id: '357857521' 		, title: 'Дзеркало ( головна відображуюча поверхня )' 			, n: [ '357857521', '357857521A', '357857521C', '357857522', '357857522A', '6K9857521D', '6K9857521E', '6K9857521J', '6K9857522C', ], cat: { mirror: 1, body: 1, }, },
{ id: '3b0857537' 		, title: 'Дзеркало ( корпус )' 									, n: [ '3B0857537 BGRU', ], cat: { mirror: 1, body: 1, }, },


{ id: '6n0905865' 		, title: 'Замок запалювання ( контактна група )' 			, manufacturer: [ 
																							{ id: 'vag' 	, n: '6N0905865' 	, }, 
																							{ id: 'vag' 	, n: '357905865' 	, }, 

																								], cat: { electro: 1, salon: 1, }, },

{ id: '357905855' 		, title: 'Замок запалювання ( лічинка )' 					, manufacturer: [ 
																							{ id: 'vag' 	, n: '357905855B' 	, }, 
																							{ id: 'meyle' 	, n: '1009050023' 	, }, 

																								], cat: { electro: 1, salon: 1, }, },

{ id: '3a0419091' 		, title: 'Кермо' 											, manufacturer: [ { id: 'vag', n: '3A0419091', }, ] 	, cat: { salon: 1, }, },
{ id: '3a0947561' 		, title: 'Кнопка/кінцевик закриття дверей' 					, manufacturer: [ { id: 'vag', n: '3A0947561A', }, ] 	, cat: { door: 1, salon: 1, btn: 1, }, },
{ id: '3A0959855B' 		, title: 'Кнопка ЕСП ( передня права )' 					, manufacturer: [ { id: 'vag', n: '3A0959855B', }, ] 	, cat: { door: 1, glass: 1, salon: 1, btn: 1, }, },
{ id: '02a945413' 		, title: 'Кнопка/датчик ввімкнення ліхтарів заднього ходу' 	, manufacturer: [ { id: 'vag', n: '02A945413', }, ] 	, cat: { under_hood: 1, btn: 1, gearbox: 1, light: 1, }, },




//{ id: '' 		, title: 'Колодки гальмівні задній' 						, manufacturer: [ { id: 'vag', n: '', }, ], cat: { chassis: 1, }, },


{ id: '6n0905104' 		, title: 'Котушка запалення' 								, manufacturer: [ 
																						{ id: 'vag', n: '6N0905104 ', }, 
																						{ id: 'beru', n: 'ZSE001', }, 

																							], cat: { electro: 1, under_hood: 1, }, shop: [ 
																								//{ title: 'avto.pro', href: 'https://avto.pro/part-6N0905104-VAG-305/', }, 
																									], },





{ id: '1J0121321' 		, title: 'Кришка бачка розширювального антифризного' 			, n: [ '1J0121321B', ] 		, cat: { under_hood: 1, plastic: 1, }, },
{ id: '357839090' 		, title: 'Кришка замка двері задньої правої' 					, n: [ '357839090', ] 		, cat: { plastic: 1, door: 1, }, },
{ id: '3a1863081' 		, title: 'Кришка/дно реле/запобіжників' 						, n: [ '3A1863081', ] 		, cat: { electro: 1, salon: 1, plastic: 1, }, },
{ id: '078129797 ' 		, title: 'Кронштейн ( скоба ) фільтра повітряного' 				, n: [ '078129797 ', ] 		, cat: { bracket: 1, under_hood: 1, }, },

{ id: '3a9945111' 		, title: 'Ліхтар задній лівий ( кут )' 							, n: [ '3A9945111', ] 		, cat: { body: 1, light: 1, }, },
{ id: '3a9945107' 		, title: 'Ліхтар задній лівий ( ляда )' 						, n: [ '3A9945107', ] 		, cat: { body: 1, light: 1, }, },
{ id: '3a9945112' 		, title: 'Ліхтар задній правий ( кут )' 						, n: [ '3A9945112', ] 		, cat: { body: 1, light: 1, }, },
{ id: '3A9945108' 		, title: 'Ліхтар задній правий з отвором під замок ( ляда )' 	, n: [ '3A9945108', ] 		, cat: { body: 1, light: 1, }, },


//{ id: '357805904' 		, title: 'Мухобійка' 											, n: [ '357805904', ] 		, cat: { tuning: 1, body: 1, }, },


{ id: '321721173' 		, title: 'Накладка педалі гальма/зчеплення' 					, n: [ '321721173', '6X0721173A01C ', ], cat: { salon: 1, gum: 1, }, },

{ id: '3A0837249' 		, title: 'Обмежувач відкриття дверей' 							, n: [ '3A0837249', ], cat: { door: 1, }, },

{ id: '1h0129684' 		, title: 'Патрубок ( Хобот, ДМРВ/дроссель )' 					, n: [ '1H0129684 D', '1H0129627AE', ], cat: { hosepipe: 1, under_hood: 1, plastic: 1, }, },
{ id: '037103213' 		, title: 'Патрубок вентиляції картерних газів' 					, n: [ '037103213B', ] 		, cat: { hosepipe: 1, under_hood: 1, plastic: 1, }, },
{ id: '037103493' 		, title: 'Патрубок клапану картерних газів' 					, n: [ '037103493AK', ] 	, cat: { hosepipe: 1, under_hood: 1, gum: 1, }, },
{ id: '1h0953513' 		, title: 'Перемикач підрульовий лівий з кнопкою аварійки' 		, n: [ '1H0953513 C', ] 	, cat: { salon: 1, btn: 1, light: 1, }, },
{ id: '377953519' 		, title: 'Перемикач підрульовий правий ( дворники )' 			, n: [ '377953519', ] 		, cat: { salon: 1, btn: 1, glass: 1, }, },
{ id: '028103500' 		, title: 'Прокладка клапана вентиляції картера двигуна' 		, n: [ '028103500', ] 		, cat: { under_hood: 1, motor: 1, gasket: 1, gum: 1, }, },
{ id: '044103609' 		, title: 'Прокладка піддону двигуна' 							, n: [ '044103609D', ] 		, cat: { under_hood: 1, motor: 1, gasket: 1, }, },



{ id: '3a0947565' 		, title: 'Пильник кінцевика дверей' 							, n: [ '3A0947565', ] 		, cat: { door: 1, btn: 1, gum: 1, duster: 1, }, },



//{ id: '4b0498201' 		, title: 'Пильник ШРКШ ( внутрішній )' 							, n: [ '4B0498201', ] 		, cat: { under_hood: 1, chassis: 1, gum: 1, }, },



{ id: '191498201' 		, title: 'Пильник ШРКШ ( внутрішній лівий )' 					, n: [ '191498201B', ] 		, cat: { under_hood: 1, chassis: 1, gum: 1, duster: 1, }, },
{ id: '191407282' 		, title: 'Пильник ШРКШ ( внутрішній правий )' 					, n: [ '191407282E', ] 		, cat: { under_hood: 1, chassis: 1, gum: 1, duster: 1, }, },
{ id: '893498203' 		, title: 'Пильник ШРКШ ( зовнішні )' 							, n: [ '893498203', ] 		, cat: { under_hood: 1, chassis: 1, gum: 1, duster: 1, }, },

{ id: '3a9511105' 		, title: 'Пружина задня' 										, manufacturer: [ 
																							{ id: 'vag' 		, n: '3A9511105D' 	, }, 
																							{ id: 'k_f' 		, n: '950295 ' 		, }, 
																							{ id: 'lesjofors' 	, n: '5295041' 		, }, 
																							{ id: 'meyle' 		, n: '1007390023' 	, }, 
																							{ id: 'sachs' 		, n: '996575' 		, }, 
																								], cat: { chassis: 1, }, },

{ id: '357411105' 		, title: 'Пружина передня' 										, manufacturer: [ 
																								{ id: 'vag' 		, n: '357411105' 	, }, 
																									], cat: { chassis: 1, }, },

{ id: '165906381' 		, title: 'Реле 30 ( Digifant ), позиція 3' 						, manufacturer: [ { id: 'vag', n: '165906381', }, ] 		, cat: { electro: 1, relay: 1, }, },
{ id: '191937503' 		, title: 'Реле 18 ( X-шина ), позиція 4' 						, manufacturer: [ { id: 'vag', n: '191937503', }, ] 		, cat: { electro: 1, relay: 1, }, },
{ id: '857951253' 		, title: 'Реле 67 ( бензонасос ), позиція 12' 					, manufacturer: [ { id: 'vag', n: '857951253', }, ] 		, cat: { electro: 1, relay: 1, }, },
{ id: '191906383' 		, title: 'Реле 167 ( бензонасос ), позиція 12' 					, manufacturer: [ { id: 'vag', n: '191906383 C', }, ] 		, cat: { electro: 1, relay: 1, }, },
{ id: '321955531' 		, title: 'Реле 19 ( дворники, програмується ), позиція 8' 		, manufacturer: [ { id: 'vag', n: '321955531 A', }, ] 		, cat: { electro: 1, relay: 1, }, },
{ id: '357955531' 		, title: 'Реле 99 ( дворники, програмується ), позиція 8' 		, manufacturer: [ { id: 'vag', n: '357955531', }, ] 		, cat: { electro: 1, relay: 1, }, },
{ id: '191955529' 		, title: 'Реле 72 ( дворник задній ), позиція 2' 				, manufacturer: [ { id: 'vag', n: '191955529', }, ] 		, cat: { electro: 1, relay: 1, }, },
{ id: '3a0951307' 		, title: 'Реле 36 ( зумер ), позиція 9' 						, manufacturer: [ { id: 'vag', n: '3A0951307', }, ] 		, cat: { electro: 1, relay: 1, }, },
{ id: '191953227' 		, title: 'Реле 21 ( поворотники ), позиція 6' 					, manufacturer: [ { id: 'vag', n: '191953227 A', }, ] 		, cat: { electro: 1, relay: 1, }, },
{ id: '1h0953227' 		, title: 'Реле 191 ( поворотники ), позиція 6' 					, manufacturer: [ { id: 'vag', n: '1H0953227', }, ] 		, cat: { electro: 1, relay: 1, }, },
{ id: '431953231' 		, title: 'Реле 22 ( поворотники, причіп ), позиція 6' 			, manufacturer: [ { id: 'vag', n: '431953231', }, ] 		, cat: { electro: 1, relay: 1, }, },
{ id: '141951253' 		, title: 'Реле 53 ( сигнал ), позиція 11' 						, manufacturer: [ { id: 'vag', n: '141951253 B', }, ] 		, cat: { electro: 1, relay: 1, }, },

{ id: '3a0837235' 		, title: 'Ручка дверей ( внутрішня ліва )' 						, manufacturer: [ { id: 'vag', n: '3A083723501C', }, ] 		, cat: { door: 1, salon: 1, plastic: 1, }, },
{ id: '3a0837236' 		, title: 'Ручка дверей ( внутрішня права )' 					, manufacturer: [ { id: 'vag', n: '3A083723601C', }, ] 		, cat: { door: 1, salon: 1, plastic: 1, }, },

{ id: 'n10666302' 		, title: 'Саморіз' 												, n: [ 'N10666302', 'N0139671', ] 		, cat: { fasteners: 1, screw: 1, light: 1, }, txt: 'Для кріплення противотуманок', }, // противотуманки
{ id: '3a0941779' 		, title: 'Світловідбивач ( передній лівий )' 					, n: [ '3A0941779', ] 		, cat: { body: 1, plastic: 1, light: 1, }, },
{ id: '189538z6e' 		, title: 'Світловідбивач ( передній правий )' 					, n: [ '189538Z6E', ] 		, cat: { body: 1, plastic: 1, light: 1, }, },
{ id: '357837242' 		, title: 'Скоба/фіксатор дверної ручки' 						, n: [ '357837242', ] 		, cat: { door: 1, plastic: 1, }, },
{ id: '357407613' 		, title: 'Ступиця 4*100 передня ( 2E/AGG )' 					, manufacturer: [ { id: 'vag', n: '357407613B', }, ], cat: { chassis: 1, }, },




{ id: '1h0407613' 		, title: 'Ступиця 5*100 передня ( ABF )' 						, manufacturer: [ { id: 'vag', n: '1H0407613B', }, ], cat: { chassis: 1, }, },
{ id: '1h0615423' 		, title: 'Суппорт гальмівний задній лівий ( корпус )' 			, manufacturer: [ { id: 'vag', n: '1H0615423', }, ], cat: { chassis: 1, }, },
{ id: '1h0615424' 		, title: 'Суппорт гальмівний задній правий ( корпус )' 			, manufacturer: [ { id: 'vag', n: '1H0615424', }, ], cat: { chassis: 1, }, },
{ id: '1h0615425' 		, title: 'Суппорт гальмівний задній лівий ( скоба )' 			, manufacturer: [ { id: 'vag', n: '1H0615425', }, ], cat: { chassis: 1, }, },
{ id: '1h0615426' 		, title: 'Суппорт гальмівний задній правий ( скоба )' 			, manufacturer: [ { id: 'vag', n: '1H0615426', }, ], cat: { chassis: 1, }, },










{ id: '037905205' 		, title: 'Трамблер' 											, manufacturer: [ { id: 'vag', n: '037905205', }, ] 		, cat: { electro: 1, under_hood: 1, }, },
{ id: '052905225' 		, title: 'Трамблер ( бігунок )' 								, manufacturer: [ { id: 'vag', n: '052905225 C', }, ] 		, cat: { electro: 1, under_hood: 1, }, },
{ id: '051905207' 		, title: 'Трамблер ( кришка )' 									, manufacturer: [ { id: 'vag', n: '051905207', }, ] 		, cat: { electro: 1, under_hood: 1, }, },
{ id: '1j0035350' 		, title: 'Ущільнювач/прокладка під антену' 						, manufacturer: [ { id: 'vag', n: '1J0035350E', }, ] 		, cat: { gasket: 1, gum: 1, plastic: 1, body: 1, }, },
{ id: '191955985' 		, title: 'Форсунка омивача скла лобового' 						, manufacturer: [ { id: 'vag', n: '191955985A', }, ] 		, cat: { glass: 1, body: 1, }, },
{ id: '333955985' 		, title: 'Форсунка омивача скла заднього' 						, manufacturer: [ { id: 'vag', n: '333955985', }, ] 		, cat: { glass: 1, body: 1, }, },
{ id: '191857559' 		, title: 'Фіксатор сонцезахисного козирка' 						, manufacturer: [ { id: 'vag', n: '191857559', }, ] 		, cat: { salon: 1, plastic: 1, }, },
{ id: '191129620' 		, title: 'Фільтр повітряний ( ДМРВ )' 							, manufacturer: [ { id: 'vag', n: '191129620', }, ] 		, cat: { under_hood: 1, filter: 1, }, },
{ id: '3a0819644' 		, title: 'Фільтр салону' 										, manufacturer: [ { id: 'vag', n: '3A0819644', }, ] 		, cat: { under_hood: 1, salon: 1, filter: 1, }, },
{ id: '1z0863831' 		, title: 'Шумоізоляція капоту' 									, manufacturer: [ { id: 'vag', n: '1Z0863831A', }, ] 		, cat: { body: 1, under_hood: 1, }, },



{ id: 'panel_lamp' 		, title: 'Лампочка щитка приладів' 								, manufacturer: [ 
																								{ id: 'bosch' 		, n: '1987302236' 		, }, 
																								{ id: 'hella' 		, n: '8GS006677121' 	, }, 
																								{ id: 'm_marelli' 	, n: '002053100000' 	, }, 
																								{ id: 'narva' 		, n: '170543000' 		, }, 
																								{ id: 'osram' 		, n: '2352MFX6' 		, }, 
																								{ id: 'philips' 	, n: '12626CP' 			, }, 

																									] , cat: { electro: 1, lamp: 1, salon: 1, }, },






 









];







let objListOEM = {};
arrListOEM.forEach( k => {
	objListOEM[ k.id ] = k;
});














