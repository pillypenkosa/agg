











// рік

const arrListManufacturer = [


{ id: 'beru' 			, title: 'Beru' 				, country: 'Німеччина' 			, year: 1912 	, internet: { avtopro: 'https://avto.pro/makers/beru' 					, }, },
{ id: 'bilstein' 		, title: 'Bilstein ' 			, country: 'Німеччина' 			, year: 1873 	, internet: { avtopro: 'https://avto.pro/makers/bilstein' 				, }, },
{ id: 'bosch' 			, title: 'Bosch' 				, country: 'Німеччина' 			, year: 1921 	, internet: { avtopro: 'https://avto.pro/makers/bosch' 					, }, },
{ id: 'contitech' 		, title: 'Contitech' 			, country: 'Німеччина' 			, year: 1871 	, internet: { avtopro: 'https://avto.pro/makers/continental' 			, }, }, // Contitech - подразделение Continental
{ id: 'denso' 			, title: 'Denso' 				, country: 'Японія' 			, year: 1900 	, internet: { avtopro: 'https://avto.pro/makers/denso' 					, }, },
{ id: 'febi' 			, title: 'Febi' 				, country: 'Німеччина' 			, year: 1844 	, internet: { avtopro: 'https://avto.pro/makers/febi' 					, }, },
{ id: 'gates' 			, title: 'Gates' 				, country: 'США' 				, year: 1917 	, internet: { avtopro: 'https://avto.pro/makers/gates' 					, }, },
{ id: 'gkn' 			, title: 'GKN' 					, country: 'Велика Британія' 	, year: 1759 	, internet: { avtopro: 'https://avto.pro/makers/spidan' 				, }, },
{ id: 'gkn_spidan' 		, title: 'GKN-Spidan' 			, country: 'Франція' 			, year: 1000 	, internet: { avtopro: 'https://avto.pro/makers/spidan' 				, }, },
{ id: 'hella' 			, title: 'Hella' 				, country: 'Німеччина' 			, year: 1899 	, internet: { avtopro: 'https://avto.pro/makers/hella' 					, }, },
{ id: 'ina' 			, title: 'INA' 					, country: 'Німеччина' 			, year: 1946 	, internet: { avtopro: 'https://avto.pro/makers/ina' 					, }, },
{ id: 'jp_group' 		, title: 'JP Group' 			, country: 'Данія' 				, year: 1976 	, internet: { avtopro: 'https://avto.pro/makers/jp-group' 				, }, },
{ id: 'k_f' 			, title: 'K+F' 					, country: 'Німеччина' 			, year: 1887 	, internet: { avtopro: 'https://avto.pro/makers/k-f' 					, }, },
{ id: 'kayaba' 			, title: 'Kayaba' 				, country: 'Японія' 			, year: 1947 	, internet: { avtopro: 'https://avto.pro/makers/kayaba' 				, }, },
{ id: 'lemforder' 		, title: 'Lemforder' 			, country: 'Німеччина' 			, year: 1937 	, internet: { avtopro: 'https://avto.pro/makers/lemfoerder' 			, }, },
{ id: 'lesjofors' 		, title: 'Lesjofors' 			, country: 'Швеція' 			, year: 1852 	, internet: { avtopro: 'https://avto.pro/makers/lesjofors' 				, }, },
{ id: 'liqui_m' 		, title: 'Liqui Moly' 			, country: 'Німеччина' 			, year: 1957 	, internet: { avtopro: 'https://avto.pro/makers/liqui-moly' 			, }, },
{ id: 'm_marelli' 		, title: 'Magneti Marelli' 		, country: 'Італія' 			, year: 1919 	, internet: { avtopro: 'https://avto.pro/makers/magneti-marelli' 		, }, },
{ id: 'meyle' 			, title: 'Meyle' 				, country: 'Німеччина' 			, year: 1958 	, internet: { avtopro: 'https://avto.pro/makers/meyle' 					, }, },
{ id: 'monroe' 			, title: 'Monroe' 				, country: 'США' 				, year: 1916 	, internet: { avtopro: 'https://avto.pro/makers/monroe' 				, }, },
{ id: 'narva' 			, title: 'Narva' 				, country: 'Німеччина' 			, year: 1948 	, internet: { avtopro: 'https://avto.pro/makers/narva' 					, }, },
{ id: 'osram' 			, title: 'Osram' 				, country: 'Німеччина' 			, year: 1906 	, internet: { avtopro: 'https://avto.pro/makers/osram' 					, }, },
{ id: 'philips' 		, title: 'Philips' 				, country: 'Німеччина' 			, year: 1891 	, internet: { avtopro: 'https://avto.pro/makers/philips' 				, }, },
{ id: 'sachs' 			, title: 'Sachs' 				, country: 'Німеччина' 			, year: 1895 	, internet: { avtopro: 'https://avtopro.ua/makers/sachs' 				, }, },
{ id: 'trw' 			, title: 'TRW' 					, country: 'США' 				, year: 1901 	, internet: { avtopro: 'https://avto.pro/makers/trw' 					, }, },
{ id: 'vag' 			, title: 'VAG' 					, country: 'Німеччина' 			, year: 1937 	, internet: { avtopro: 'https://avto.pro/makers/vag' 					, }, },
{ id: 'wix' 			, title: 'Wix' 					, country: 'США' 				, year: 1939 	, internet: { avtopro: 'https://avto.pro/makers/wix' 					, }, },









 





];









let objListManufacturer = {};
arrListManufacturer.forEach( k => {
	objListManufacturer[ k.id ] = k;
});







