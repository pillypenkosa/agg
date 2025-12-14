











// рік

const arrListManufacturer = [


{ id: 'beru' 			, title: 'Beru' 		, country: 'Німеччина' 	, year: 1912 	, internet: { avtopro: 'https://avto.pro/makers/beru' 			, }, },
{ id: 'bosch' 			, title: 'Bosch' 		, country: 'Німеччина' 	, year: 1921 	, internet: { avtopro: 'https://avto.pro/makers/bosch' 			, }, },
{ id: 'contitech' 		, title: 'Contitech' 	, country: 'Німеччина' 	, year: 1871 	, internet: { avtopro: 'https://avto.pro/makers/continental' 	, }, }, // Contitech - подразделение Continental
{ id: 'denso' 			, title: 'Denso' 		, country: 'Японія' 	, year: 1900 	, internet: { avtopro: 'https://avto.pro/makers/denso' 			, }, },
{ id: 'febi' 			, title: 'Febi' 		, country: 'Німеччина' 	, year: 1844 	, internet: { avtopro: 'https://avto.pro/makers/febi' 			, }, },
{ id: 'gates' 			, title: 'Gates' 		, country: 'США' 		, year: 1917 	, internet: { avtopro: 'https://avto.pro/makers/gates' 			, }, },
{ id: 'ina' 			, title: 'INA' 			, country: 'Німеччина' 	, year: 1946 	, internet: { avtopro: 'https://avto.pro/makers/ina' 			, }, },
{ id: 'jp_group' 		, title: 'JP Group' 	, country: 'Данія' 		, year: 1976 	, internet: { avtopro: 'https://avto.pro/makers/jp-group' 		, }, },
{ id: 'liqui_moly' 		, title: 'Liqui Moly' 	, country: 'Німеччина' 	, year: 1957 	, internet: { avtopro: 'https://avto.pro/makers/liqui-moly' 	, }, },
{ id: 'wix' 			, title: 'Wix' 			, country: 'США' 		, year: 1939 	, internet: { avtopro: 'https://avto.pro/makers/wix' 			, }, },



];









let objListManufacturer = {};
arrListManufacturer.forEach( k => {
	objListManufacturer[ k.id ] = k;
});







