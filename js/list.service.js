








const arrListServiceAct = [

	{ id: 'r' 			, title: 'заміна' 		, }, 	// replace 
	{ id: 'b' 			, title: 'покупка' 		, }, 	// buy
	{ id: 'i' 			, title: 'установка' 	, }, 	// install 
	
	{ id: 'insurance' 	, title: 'страхування' 	, }, 	// 


];







let objListServiceAct = {};
arrListServiceAct.forEach( k => {
	objListServiceAct [ k.id ] = k;
});
















const arrListService = [











{
	id: '20251217_bilstein_f', title: 'Амортизатори газо-масляні ( передні )', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'bilstein', },
		{ k: 'Код' 					, v: '22-045768 VNE-4576' 		, },
		//{ k: 'Код VAG' 					, v: '' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Ціна' 				, v: '4800 грн за 2 шт ' 	, },
		{ backspace: true },

	],
},
{
	id: '20251217_bilstein_b', title: 'Амортизатори газо-масляні ( задні )', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'bilstein', },
		{ k: 'Код' 						, v: '19-019949 BNE 1994' 		, },
		//{ k: 'Код VAG' 					, v: '' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Ціна' 				, v: '3500 грн за 2 шт ' 	, },
		{ backspace: true },

	],
},
{
	id: '20251217_lesjofors_f', title: 'Пружини ( передні )', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'lesjofors', },
		{ k: 'Код' 						, v: '4095026' 		, },
		{ k: 'Код VAG' 					, v: '1J0411105AN' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Ціна' 				, v: '1800 грн за 2 шт ' 	, },
		{ backspace: true },

	],
},
{
	id: '20251217_lesjofors_b', title: 'Пружини ( задні )', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'lesjofors', },
		{ k: 'Код' 						, v: '4295026' 		, },
		{ k: 'Код VAG' 					, v: '3A9511105C' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Ціна' 				, v: '2500 грн за 2 шт ' 	, },
		{ backspace: true },

	],
},
{
	id: '20251217_gkn_in_l', title: 'Пильники ШРУСів ( зовнішні )', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'GKN-Spidan', },
		{ k: 'Код' 						, v: '22554' 		, },
		{ k: 'Код VAG' 					, v: '893498203' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Ціна' 				, v: '700 грн за 2 шт ' 	, },
		{ backspace: true },

	],
},
{
	id: '20251217_gkn_in_l', title: 'Пильник ШРУСа ( внутрішній лівий )', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'GKN-Spidan', },
		{ k: 'Код' 						, v: '23514' 		, },
		{ k: 'Код VAG' 					, v: '191498201B' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		//{ k: 'Ціна' 				, v: '1200 грн за 2 шт внутрішніх' 		, },
		{ backspace: true },

	],
},
{
	id: '20251217_gkn_in_r', title: 'Пильник ШРУСа ( внутрішній правий )', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'GKN-Spidan', },
		{ k: 'Код' 						, v: '26101' 		, },
		{ k: 'Код VAG' 					, v: '191498202' 	, },
		{ k: 'Код VAG' 					, v: '191407282E' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 						, },
		{ k: 'Ціна' 				, v: '1200 грн за 2 шт внутрішніх' 		, },
		{ backspace: true },

	],
},
{
	id: '20251217_sachs_f', title: 'Відбійники амортизаторів передніх', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'sachs' 		, },
		{ k: 'Код' 						, v: '1748392000' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Ціна' 				, v: '600 грн за 2 шт' 		, },
		{ backspace: true },

	],
},
{
	id: '20251217_kayaba_b', title: 'Відбійники амортизаторів задніх', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'kayaba' 		, },
		{ k: 'Код' 						, v: '910087' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Ціна' 				, v: '600 грн за 2 шт' 		, },
		{ backspace: true },

	],
},
{
	id: '20251217_lemforder', title: 'Верхні опори амортизаторів передніх + підшипники', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'lemforder' 		, },
		{ k: 'Код' 						, v: '26642 01' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Ціна' 				, v: '900 грн за 2 шт' 		, },
		{ backspace: true },

	],
},
{
	id: '20251217_block_f', title: 'Колодки гальмівні ( передні )', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'trw' 		, },
		{ k: 'Код' 						, v: 'GDB 1048' 	, },
		{ k: 'Код VAG' 					, v: '357698151A' 	, },
		{ k: 'Код VAG' 					, v: '533698151A' 	, },
		{ k: 'Код VAG' 					, v: '' 			, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Кількість' 			, v: '4 шт' 				, },
		{ backspace: true },

	],
},
{
	id: '20251217_block_b', title: 'Колодки гальмівні дискові ( задні )', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'trw' 		, },
		{ k: 'Код' 						, v: 'GDB 1330' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Кількість' 			, v: '4 шт' 				, },
		{ k: 'Ціна' 				, v: '2000 грн за 8 шт ( в круг )' 		, },
		{ backspace: true },

	],
},
{
	id: '20251217_trw_f', title: 'Диски гальмівні вентильовані ( передні )', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'trw' 		, },
		{ k: 'Код' 						, v: 'DF 1533' 			, },
		{ k: 'Код VAG' 					, v: '6N0615301D' 		, },
		{ k: 'Код VAG' 					, v: '357615301' 		, },
		{ k: 'Код VAG' 					, v: '321615301D' 		, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Кількість' 			, v: '2 шт' 				, },
		//{ k: 'Ціна' 				, v: '0 грн' 				, },
		{ backspace: true },

	],
},
{
	id: '20251217_trw_b', title: 'Диски гальмівні ( задні )', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'trw' 		, },
		{ k: 'Код' 						, v: 'DF 1529' 			, },
		{ k: 'Код VAG' 					, v: '6N0615601' 		, },
		{ k: 'Код VAG' 					, v: '191615601 ' 		, },

		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Кількість' 			, v: '2 шт' 				, },
		{ k: 'Ціна' 				, v: '4800 грн за 4 диска ( 2 передніх, 2 задніх )' 				, },
		{ backspace: true },

	],
},
{
	id: '20251217_meyle_l', title: 'Перемикач поворотів + аварійка', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'meyle' 		, },
		{ k: 'Код' 						, v: '1009530013' 		, },
		{ k: 'Код VAG' 					, v: '1H0953513' 		, },


		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Ціна' 				, v: '700 грн' 				, },
		{ backspace: true },

	],
},
{
	id: '20251217_meyle_r', title: 'Перемикач дворників', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'meyle' 		, },
		{ k: 'Код' 						, v: '1009530017' 		, },
		{ k: 'Код VAG' 					, v: '377953519' 		, },


		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 			, },
		{ k: 'Ціна' 				, v: '600 грн' 				, },
		{ backspace: true },

	],
},
{
	id: '20251217_bolt', title: 'Болт/пробка маслозливна', date: '2025-12-17', act: 'b', 
	keyval: [
		
		{ manufacturer: 'febi' 		, },
		{ k: 'Код' 						, v: '12281' 		, },
		{ k: 'Код VAG' 					, v: 'N90288901' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-17' 		, },
		{ k: 'Ціна' 				, v: '80 грн' 			, },
		{ backspace: true },

	],
},

{
	id: '20251214_lpvw97', title: 'Фари LPVW97', date: '2025-12-14', act: 'i',
	keyval: [
		
		{ k: 'Фари' 				, v: 'тюнінговані' 			, },
		{ k: 'Виробник' 			, v: 'Junyan' 				, },
		{ k: 'Маркування' 			, v: 'LPVW97' 				, },
		{ k: 'Виконання' 			, v: 'Daylight Black' 		, },
		{ k: 'Країна' 				, v: 'Тайвань' 				, },
		{ backspace: true },

		{ station: 'djs', },
		{ k: 'Пробіг' 				, v: '329668 км' 		, },
		{ backspace: true },

		{ k: 'Продавець' 			, v: '+380970950950' 	, },
		{ k: '' 					, v: 'OLX, Львів' 		, },
		{ k: 'Дата' 				, v: '2025-12-14' 		, },
		{ k: 'Ціна' 				, v: '10300 грн' 		, },
		{ backspace: true },
	],
},
{
	id: '20251213_fly', title: 'Дефлектор/мухобійка', date: '2025-12-13', act: 'b', 
	keyval: [
		
		{ k: 'Призначення' 				, v: 'На капот' 			, },
		{ backspace: true },

		{ k: 'Товар' 					, v: 'prom.ua' 			, href: 'https://prom.ua/ua/p891445286-deflektor-kapota-passat.html', },
		{ k: 'Магазин' 					, v: 'prom.ua' 			, href: 'https://prom.ua/ua/c31087-autodefender-avtoaksessuary-avtozapchasti.html', },
		{ k: 'Дата' 					, v: '2025-12-13' 		, },
		{ k: 'Ціна' 					, v: '950 грн' 			, },
		{ backspace: true },
	],
},
{
	id: '20251213_deflectors', title: 'Дефлектори/вітровики', date: '2025-12-13', act: 'b', 
	keyval: [
		
		{ k: 'Призначення' 			, v: 'Над вікнами дверей' 			, },
		{ backspace: true },

		{ k: 'Товар' 				, v: 'prom.ua' 			, href: 'https://prom.ua/ua/p1149438739-vetroviki-passat-sedan.html', },
		{ k: 'Магазин' 				, v: 'prom.ua' 			, href: 'https://prom.ua/ua/c31087-autodefender-avtoaksessuary-avtozapchasti.html', },
		{ k: 'Дата' 				, v: '2025-12-13' 		, },
		{ k: 'Ціна' 				, v: '1050 грн' 		, },
		{ backspace: true },
	],
},
{
	id: '20251206_stoplight', title: 'Стоп-сигнал на ляду', date: '2025-12-06', act: 'i',
	keyval: [
		
		{ station: 'djs', },
		{ k: 'Пробіг' 				, v: '329466 км' 		, },
		{ backspace: true },

		{ k: 'Стоп-сигнал' 			, v: 'Діодний червоний плоский горизонтальний' 	, },
		{ k: 'Місце встановлення' 	, v: 'Потолок біля задньої ляди' 				, },
		{ backspace: true },

		{ k: 'Магазин' 				, v: 'Лоск 18 ряд' 		, },
		{ k: 'Дата' 				, v: '2025-12-06' 		, },
		{ k: 'Ціна' 				, v: '150 грн' 			, },
		{ backspace: true },
	],
},
{
	id: '20251206_carmats', title: 'Килимки в салон', date: '2025-12-06', act: 'r',
	keyval: [
		
		{ station: 'djs', },
		{ k: 'Пробіг' 				, v: '329466 км' 	, },
		{ backspace: true },

		{ k: 'Магазин' 				, v: 'avtoradosti.com.ua' 		, href: 'https://www.avtoradosti.com.ua/builder.html', },
		{ k: 'Дата' 				, v: '2025-12-06' 				, },
		{ k: 'Ціна' 				, v: '1750 грн' 				, },
		{ backspace: true },
	],
},
{
	id: '20251206_jp_group', title: 'Патрубок клапану картерних газів', date: '2025-12-06', act: 'r',
	keyval: [
		
		{ station: 'djs', },
		{ k: 'Пробіг' 				, v: '329466 км' 	, },
		{ backspace: true },

		{ manufacturer: 'jp_group' 	, },
		{ k: 'Код' 					, v: '1112000300' 		, },
		{ backspace: true },

		{ k: 'Магазин' 				, v: 'ALFACARS' 		, href: 'https://avto.pro/seller/alfacars/', },
		{ k: '' 					, v: 'avto.pro' 		, href: 'https://avto.pro/part-1112000300-JP_GROUP-199/#/products/1112000300;402;0000;385313', },
		{ k: 'Дата' 				, v: '2025-12-06' 		, },
		{ k: 'Ціна' 				, v: '222 грн' 			, },
		{ backspace: true },
	],
},
{
	id: '20251204_febi', title: 'Реле 21 ( поворотники )', date: '2025-12-04', act: 'r', 
	keyval: [
		

		{ station: 'djs', },
		{ k: 'Пробіг' 					, v: '329300 км' 		, },
		{ backspace: true },

		{ manufacturer: 'febi' 			, },
		//{ k: 'Код' 						, v: '' 	, },
		{ k: 'Код VAG' 					, v: '191953227A' 		, },
		{ k: 'Позиція в блоці реле' 	, v: '6' 				, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 		, }, // Кравцов Максим
		{ k: 'Дата' 					, v: '2025-12-04' 		, },
		{ k: 'Ціна' 					, v: '270 грн' 			, },
		{ backspace: true },

	],
},
{
	id: '20251204_meyle', title: 'Реле 67, 167 ( бензонасос )', date: '2025-12-04', act: 'b', 
	keyval: [
		
		{ manufacturer: 'meyle' 		, },
		{ k: 'Код' 						, v: '100 906 0001' 	, },
		{ k: 'Код VAG' 					, v: '857951253' 		, },
		{ k: 'Позиція в блоці реле' 	, v: '12' 				, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-04' 			, },
		{ k: 'Ціна' 				, v: '270 грн' 				, },
		{ backspace: true },

	],
},
{
	id: '20251202_ct_630', title: 'Ремінь ГРМ', date: '2025-12-02', act: 'r', 
	keyval: [
		
		{ station: 'merefa_auto_service_center' , }, // Денищенко Віталій
		{ k: 'Пробіг' 						, v: '329304 км' 			, },

		{ k: 'Рекомендована заміна' 		, v: '+ 60 т.км' 			, },
		{ k: '' 							, v: '~ 389000 км' 			, },
		{ backspace: true },

		{ manufacturer: 'contitech' 		, },
		{ k: 'Код' 							, v: 'CT 630.0433 10022022' 	, }, // замовлено, але не перевірено
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-02' 			, },
		{ k: 'Ціна' 				, v: '630 грн' 				, },
		{ backspace: true },
	],
},
{
	id: '20251202_ina', title: 'Ролик ГРМ', date: '2025-12-02', act: 'r',
	keyval: [
		
		{ station: 'merefa_auto_service_center' , }, // Денищенко Віталій
		{ k: 'Пробіг' 						, v: '329304 км' 			, },

		{ k: 'Рекомендована заміна' 		, v: '+ 60 т.км' 			, },
		{ k: '' 							, v: '~ 389000 км' 			, },
		{ backspace: true },

		{ manufacturer: 'ina' 				, }, // замовлено, але не перевірено
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-02' 			, },
		{ k: 'Ціна' 				, v: '700 грн' 				, },
		{ backspace: true },
	],
},
{
	id: '20251202_ct_6_pk_1153', title: 'Ремінь полікліновий', date: '2025-12-02', act: 'r',
	keyval: [
		
		{ station: 'merefa_auto_service_center' , }, // Денищенко Віталій
		{ k: 'Пробіг' 						, v: '329304 км' 			, },

		{ k: 'Рекомендована заміна' 		, v: '+ 60 т.км' 			, },
		{ k: '' 							, v: '~ 389000 км' 			, },
		{ backspace: true },

		{ manufacturer: 'contitech' 		, },
		{ k: 'Код' 							, v: 'CT 6 PK 1153' 		, }, // замовлено, але не перевірено
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-02' 			, },
		{ k: 'Ціна' 				, v: '550 грн' 				, },
		{ backspace: true },
	],
},
{
	id: '20251202_gates', title: 'Ремінь клиновий', date: '2025-12-02', act: 'r',
	keyval: [
		
		{ station: 'merefa_auto_service_center' , }, // Денищенко Віталій
		{ k: 'Пробіг' 						, v: '329304 км' 			, },

		{ k: 'Рекомендована заміна' 		, v: '+ 60 т.км' 			, },
		{ k: '' 							, v: '~ 389000 км' 			, },
		{ backspace: true },

		{ manufacturer: 'gates' 			, },
		{ k: 'Код' 							, v: '6389 MC' 	, }, // замовлено, але не перевірено
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-02' 			, },
		{ k: 'Ціна' 				, v: '240 грн' 				, },
		{ backspace: true },
	],
},
{
	id: '20251202_febi', title: 'Масло КПП', date: '2025-12-02', act: 'r',
	keyval: [
		
		{ station: 'merefa_auto_service_center' , }, // Денищенко Віталій
		{ k: 'Пробіг' 						, v: '329304 км' 			, },

		{ manufacturer: 'febi' 			, },
		{ k: '' 					, v: 'SAE 75W ( GL-4 )' 	, },
		{ k: 'Код' 					, v: '21829' 				, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-02' 									, },
		{ k: 'Ціна' 				, v: '~ 1100 грн за 2 л ( 2 бутилки по 1 л )' 		, },
		{ backspace: true },
	],
},
{
	id: '20251202_euroins', title: 'Євроінс', date: '2025-12-02', act: 'insurance', 
	keyval: [
		
		{ k: 'Авто' 			, v: 'VW Passat B4 ( AGG )' 	,  },
		{ k: 'д.н.з.' 			, v: 'АХ 9861 ОХ' 				,  },
		{ k: 'vin' 				, v: 'WVWZZZ3AZSE138149' 		,  },
		{ backspace: true },

		{ k: 'Євроінс' 			, v: 'euroins.com.ua' 		,  href: 'https://euroins.com.ua/info-obovyazkove-strahuvannya-civilno-pravovoyi-vidpovidalnosti-vlasnikiv-nazemnih-transportnih-zasobiv' 	, },
		{ k: 'МТСБУ' 			, v: 'mtsbu.ua' 			,  href: 'https://policy.mtsbu.ua/qr/policyinfo/ua?md=E8524EDF3AABE57DE318A13319CF4A9679AC3251FC89652160F57E571321BAE1' 	, },

		{ k: 'Договір' 			, v: 'alfaagent.online' 	,  href: 'https://alfaagent.online/Policy?code=Q1SewwVp69tzWX55RmJT0gq3Qqw&type=9861' 	, },
		{ k: 'Договір' 			, v: 'alfaagent.online' 	,  href: 'https://alfaagent.online/Policy/Index?code=Q1SewwVp69tzWX55RmJT0gq3Qqw&type=tdPqqspVsRInpYIMhkiutbiL9hHUnq1QqwcGRq2Qqw8QWHhOW7A%3D' 	, },

		{ k: 'Поліс №' 			, v: '234231373' 			,  },
		{ k: 'Діє до' 			, v: '2026-12-02 включно' 	,  },

		{ backspace: true },

		{ k: 'Продавець' 		, v: 'Олексій' 				,  },
		{ k: 'Телефони' 		, v: '+38095-310-69-60' 	,  },
		{ k: 'Телефони' 		, v: '+38093-702-88-68' 	,  },
		{ k: 'Ціна' 			, v: '2941 грн' 			,  },

	],
},
{
	id: '20251201_zse001', title: 'Котушка запалювання', date: '2025-12-01', act: 'r', 
	keyval: [
		
		{ station: 'djs', },
		{ k: 'Пробіг' 				, v: '329300 км' 	, },
		{ backspace: true },

		{ manufacturer: 'beru', },
		{ k: 'Код' 					, v: 'ZSE001' 		, },
		{ k: '№' 					, v: 'E2019402001' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-01' 			, },
		{ k: 'Ціна' 				, v: '1100 грн' 			, },
		{ backspace: true },
	],
},
{
	id: '20251201_zef561', title: 'Провода високовольтні свічні', date: '2025-12-01', act: 'r',
	keyval: [
		
		{ station: 'djs', },
		{ k: 'Пробіг' 				, v: '329300 км' 	, },
		{ backspace: true },

		{ manufacturer: 'beru', },
		{ k: 'Код' 					, v: 'ZEF 561' 						, },
		{ k: 'Штекери' 				, v: 'Beru ZLE 205 ( металеві )' 	, },
		{ backspace: true },

		{ k: 'Опір проводів' 		, v: '' 				, },
		{ k: '1 ( найдовший )' 		, v: '5.89 кОм' 		, },
		{ k: '2' 					, v: '5.93 кОм' 		, },
		{ k: '3' 					, v: '5.96 кОм' 		, },
		{ k: '4 ( найкоротший )' 	, v: '6.00 кОм' 		, },
		{ k: '5 ( загальний )' 		, v: '1.95 кОм' 		, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-01' 								, },
		{ k: 'Ціна' 				, v: '1700 грн за 1 комплект ( з 5 проводів )' 	, },
		{ backspace: true },
	],
},
{
	id: '20251201_denso', title: 'Свічки запалювання', date: '2025-12-01', act: 'r',
	keyval: [
		
		{ station: 'djs', },
		{ k: 'Пробіг' 				, v: '329300 км' 		, },
		{ backspace: true },

		{ manufacturer: 'denso', },
		{ k: 'Код' 					, v: 'W20EPBR-S' 		, },
		{ k: '' 					, v: '3-пелюсткові' 	, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-01' 		, },
		{ k: 'Ціна' 				, v: '600 грн за 4 шт' 	, },
		{ backspace: true },
	],
},
{
	id: '20251201_febi', title: 'Кнопка вмикання ліхтарів заднього ходу', date: '2025-12-01', act: 'r',
	keyval: [
		
		{ station: 'djs', },
		{ k: 'Пробіг' 				, v: '329300 км' 		, },
		{ backspace: true },

		{ manufacturer: 'febi', },
		{ k: 'Код VAG' 				, v: '02A945413C' 		, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-01' 		, },
		{ k: 'Ціна' 				, v: '300 грн' 			, },
		{ backspace: true },
	],
},
{
	id: '20251201_wa6167', title: 'Фільтр повітряний ( ДМРВ )', date: '2025-12-01', act: 'r',
	keyval: [
		
		{ station: 'djs', },
		{ k: 'Пробіг' 				, v: '329300 км' 	, },
		{ backspace: true },

		{ manufacturer: 'wix', },
		{ k: 'Код' 					, v: 'WA6167' 		, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-01' 		, },
		{ k: 'Ціна' 				, v: '250 грн' 			, },
		{ backspace: true },
	],
},
{
	id: '20251201_wp6890', title: 'Фільтр салона', date: '2025-12-01', act: 'r',
	keyval: [
		
		{ station: 'djs', },
		{ k: 'Пробіг' 				, v: '329300 км' 	, },
		{ backspace: true },

		{ manufacturer: 'wix', },
		{ k: 'Код' 					, v: 'WP6890' 		, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-12-01' 		, },
		{ k: 'Ціна' 				, v: '250 грн' 			, },
		{ backspace: true },
	],
},
{
	id: '20251126_oil', title: 'Масло моторне', date: '2025-11-26', act: 'r', 
	keyval: [
		
		{ station: 'merefa_auto_service_center', }, // Денищенко Віталій
		{ k: 'Пробіг' 				, v: '329190 км' 			, },
		{ backspace: true },

		{ k: '--- Масло мотрне' 	, v: '' 					, },
		{ manufacturer: 'liqui_m', },
		{ k: '' 					, v: '10W-40' 				, },
		{ k: '' 					, v: 'ACEA A3/B4; API SL' 	, },
		{ k: 'Об\'єм' 				, v: '5 л' 					, },
		{ k: 'Бар-код' 				, v: '4 100420 021848' 		, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-11-26' 			, },
		{ k: 'Ціна' 				, v: '2000 грн за 5 л' 		, },
		{ backspace: true },

	],
},
{
	id: '20251126_filter', title: 'Фільтр масляний', date: '2025-11-26', act: 'r', 
	keyval: [
		
		{ station: 'merefa_auto_service_center', }, // Денищенко Віталій
		{ k: 'Пробіг' 				, v: '329190 км' 			, },
		{ backspace: true },

		{ shop: 'kharkiv_losk_2_4' 	, }, // Кравцов Максим
		{ k: 'Дата' 				, v: '2025-11-26' 			, },
		{ k: 'Ціна' 				, v: '200 грн' 		, },
		{ backspace: true },

	],
},









];











