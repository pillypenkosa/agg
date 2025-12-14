








const arrListStation = [



{ id: 'merefa_auto_service_center' 		, title: 'м.Мерефа, Авто Сервіс Center' 	, keyval: [ { k: 'Адреса', v: 'м.Мерефа, вул.Дніпропетровська, 133' 	, gps: 'https://maps.app.goo.gl/kjeLkvgcAf3fhxSE9', }, ], },
{ id: 'merefa_auto_ua' 					, title: 'м.Мерефа, Авто ЮА' 				, keyval: [ { k: 'Адреса', v: 'м.Мерефа, вул.Дніпропетровська, 264' 	, gps: 'https://maps.app.goo.gl/KYZw1Qz8s6MFwkmw7', }, ], },
{ id: 'merefa_girka' 					, title: 'м.Мерефа, Гірка' 					, keyval: [ { k: 'Адреса', v: 'м.Мерефа' 								, gps: 'https://maps.app.goo.gl/UAeP96N3HKfYxxjNA', }, ], },
{ id: 'merefa_razval' 					, title: 'м.Мерефа, Развал/схождение' 		, keyval: [ { k: 'Адреса', v: 'м.Мерефа, вул.Дніпропетровська, 198' 	, gps: 'https://maps.app.goo.gl/LbNhq2dNzN3EmbAd8', }, ], },
{ id: 'merefa_shinomontazh' 			, title: 'м.Мерефа, Шиномонтаж' 			, keyval: [ { k: 'Адреса', v: 'м.Мерефа, вул.Дніпропетровська, 196' 	, gps: 'https://maps.app.goo.gl/ou5BpiEXvoUSepGw5', }, ], },

{ id: 'kharkiv_ar_service' 				, title: 'м.Харків, А/Р Сервіс' 			, keyval: [ { k: 'Адреса', v: 'м.Харків, вул.Несторівська, 14' 			, gps: 'https://maps.app.goo.gl/GD7HeGXmiy4WmKUs7', }, ], },
{ id: 'kharkiv_lpg' 					, title: 'м.Харків, LPG' 					, keyval: [ { k: 'Адреса', v: 'м.Харків, вул.Академіка Білецького, 55' 	, gps: 'https://maps.app.goo.gl/TdQwVPcugPpxa1tv6', }, ], },





{ id: 'djs', title: 'Власними силами', },



];









let objListStation = {};
arrListStation.forEach( k => {
	objListStation[ k.id ] = k;

});







