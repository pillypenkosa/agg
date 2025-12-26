








const htmlLinkSign = '&#11023;';

// &#698; // ʺ

// &#11023;
// &#11173;



document.querySelector( 'title' ).innerHTML = 'AGG ' + appVersion;





const arrListCat = [

	//{ id: 'photo' 			, title: 'Фото' 			, },
	{ id: 'oem' 			, title: 'OEM' 				, },
	{ id: 'store' 			, title: 'Магазини' 		, },
	{ id: 'specification' 	, title: 'Специфікація' 	, },
	{ id: 'service' 		, title: 'Сервіс' 			, },
	{ id: 'station' 		, title: 'СТО' 				, },

];











let htmlNav = '';
arrListCat.forEach( nav => {
	htmlNav += `<div class="btn" data-id="${ nav.id }">${ nav.title }</div>`;
});

nav.innerHTML = htmlNav;





// let arrSelected = arrListAll.filter( k => true );





function showSpoilers( arr ) {

	let htmlSpoilers = '';
	arr.forEach( k_spoiler => {

		let htmlBody = '';
		if ( k_spoiler.keyval ) {

			//console.log( k_spoiler.keyval );
			//console.log( objManufacturer );



			let htmlTBody = '';
			k_spoiler.keyval.forEach( k_keyval => {

				//console.log( k_keyval );


				if ( k_keyval.k || k_keyval.v ) {

					let htmlK = '';
					let htmlV = '';

					if ( k_keyval.k ) 
						htmlK = k_keyval.k;
					

					if ( k_keyval.v ) {

						htmlV = k_keyval.v;

						if ( k_keyval.href ) 
							htmlV = `<a href="${ k_keyval.href }" target="_blank">${ k_keyval.v }${ htmlLinkSign }</a>`;

						if ( k_keyval.gps ) 
							htmlV = `<a href="${ k_keyval.gps }" target="_blank">${ k_keyval.v }${ htmlLinkSign }</a>`;

					}


					htmlTBody += `<tr><td class="txt-key">${ htmlK }</td><td class="txt-val">${ htmlV }</td></tr>`;


/*

					let htmlVal = k_keyval.v ? k_keyval.v : '';

					
					if ( k_keyval.manufacturer ) {

						let htmlManufacturerTitle = '';
						if ( objListManufacturer && objListManufacturer[ k_keyval.manufacturer ] ) {

							htmlManufacturerTitle = objListManufacturer[ k_keyval.manufacturer ].title ? objListManufacturer[ k_keyval.manufacturer ].title : '???';
							
							htmlVal = `<span class="a-title" title="555">${ htmlManufacturerTitle }</span>`;


						}


						let htmlManufacturerTitle = '';
						if ( objListManufacturer && objListManufacturer[ k_keyval.manufacturer ] ) {

							if ( objListManufacturer[ k_keyval.manufacturer ].title ) {

								if ( objListManufacturer[ k_keyval.manufacturer ].internet ) {

									if ( objListManufacturer[ k_keyval.manufacturer ].internet.avtopro ) 
										htmlVal = `<a href="${ objListManufacturer[ k_keyval.manufacturer ].internet.avtopro }" target="_blank">${ k_keyval.v }</a>`;

									

								} else
									htmlVal = `<span class="a-title" title="${ objListManufacturer[ k_keyval.manufacturer ].title }">${ k_keyval.v }</span>`;


							}
						}

						


					}

					

					htmlTBody += `<tr><td class="txt-key">${ k_keyval.k }</td><td class="txt-val">${ htmlVal }</td></tr>`;
*/
				}


				if ( k_keyval.manufacturer ) {

					//let htmlManufacturerTitle = '';
					//let htmlManufacturerCountry = '';
					let htmlManufacturer = '';
					if ( objListManufacturer && objListManufacturer[ k_keyval.manufacturer ] ) {


						let htmlManufacturerName = '';
						let htmlATitle= '';
						//let htmlCountryYear = '';



						//let htmlCountry = '';
						if ( objListManufacturer[ k_keyval.manufacturer ].title ) 
							htmlManufacturerName = objListManufacturer[ k_keyval.manufacturer ].title;
						
						if ( objListManufacturer[ k_keyval.manufacturer ].country ) 
							htmlATitle = objListManufacturer[ k_keyval.manufacturer ].country;
						
						if ( objListManufacturer[ k_keyval.manufacturer ].year ) 
							htmlATitle += ` ( ${ objListManufacturer[ k_keyval.manufacturer ].year } )`;
						


						if ( objListManufacturer[ k_keyval.manufacturer ].internet && objListManufacturer[ k_keyval.manufacturer ].internet.avtopro ) {

							htmlManufacturer = `<a href="${ objListManufacturer[ k_keyval.manufacturer ].internet.avtopro }" title="${ htmlATitle }"  target="_blank">${ htmlManufacturerName }${ htmlLinkSign }</a>`;


						}




/*

						let htmlYear = '';
						if ( objListManufacturer[ k_keyval.manufacturer ].country ) {

							if ( objListManufacturer[ k_keyval.manufacturer ].year ) 
								htmlYear = `, ${ objListManufacturer[ k_keyval.manufacturer ].year }`;
							
							htmlManufacturerCountry = ` ( ${ objListManufacturer[ k_keyval.manufacturer ].country }${ htmlYear } )`;
						}
						

*/

					}

					//htmlTBody += `<tr><td class="txt-key">Виробник</td><td class="txt-val">${ htmlManufacturerTitle }${ htmlManufacturerCountry }</td></tr>`;
					htmlTBody += `<tr><td class="txt-key">Виробник</td><td class="txt-val">${ htmlManufacturer }</td></tr>`;
				}



				if ( k_keyval.station ) {
					if ( objListStation && objListStation[ k_keyval.station ] ) {
						if ( objListStation[ k_keyval.station ].title ) 
							htmlTBody += `<tr><td class="txt-key">СТО</td><td class="txt-val">${ objListStation[ k_keyval.station ].title }</td></tr>`;
					}
				}





				if ( k_keyval.shop ) {
					if ( objListShop && objListShop[ k_keyval.shop ] ) {
						if ( objListShop[ k_keyval.shop ].title ) {

							let htmlShop = '';

							htmlShop = `<tr><td class="txt-key">Магазин</td><td class="txt-val">${ objListShop[ k_keyval.shop ].title }</td></tr>`;

							if ( objListShop[ k_keyval.shop ].gps ) {

								htmlShop = `<tr>
									<td class="txt-key">Магазин</td>
									<td class="txt-val">
										<a href="${ objListShop[ k_keyval.shop ].gps }" target="_blank">
											${ objListShop[ k_keyval.shop ].title }
										</a>
									</td>
								</tr>`;
							}

							htmlTBody += htmlShop;
						}
					}
				}




				if ( k_keyval.img )
					htmlTBody += `<tr><td class="txt-key">IMG</td><td class="img512">   
						<img src="img/carparts/${ k_keyval.img }.jpg" alt="VAG ${ k_keyval.img }">
					</td></tr>`;



				if ( k_keyval.backspace ) {
					htmlTBody += `<tr><td class="td-separator" colspan="2">&nbsp;</td></tr>`;




/*
				} else {

					let htmlVal = '';
					if ( k_keyval.href || k_keyval.gps || k_keyval.clue_manufacturer ) {

						if ( k_keyval.href ) 
							htmlVal = `<a href="${ k_keyval.href }" target="_blank">www.${ k_keyval.v }${ htmlLinkSign }</a>`;

						if ( k_keyval.gps ) 
							htmlVal = `<a href="${ k_keyval.gps }" target="_blank">${ k_keyval.v } (GPS${ htmlLinkSign })</a>`;


						let htmlClue = '';
						if ( k_keyval.clue_manufacturer ) {
							if ( objManufacturer && objCountry ) {

								if ( objManufacturer[ k_keyval.clue_manufacturer ] ) {

									let manufacturer = objManufacturer[ k_keyval.clue_manufacturer ];

									//console.log( objCountry );
									//console.log( manufacturer );

									let country = '';
									if ( manufacturer.country ) {
										for ( let k_name in manufacturer.country ) {

											if ( objCountry[ k_name ] ) {
												if ( objCountry[ k_name ].title ) {

													if ( objCountry[ k_name ].title.ua ) 
														country += `${ objCountry[ k_name ].title.ua }, `;

												}
											}
										}
									}

									htmlClue = country.slice( 0, -2 );

									//console.log( htmlClue );

									if ( objManufacturer[ k_keyval.clue_manufacturer ].year ) {

										htmlClue = `${ htmlClue } (${ objManufacturer[ k_keyval.clue_manufacturer ].year })`;


										htmlVal = `<span class="txt-clue-manufacturer" title="${ k_keyval.v }, ${ htmlClue }">${ k_keyval.v }</span>`;
										
										//console.log( htmlClue );
										//console.log( htmlVal );


									}

									//console.log( objCountry );
								}
							}

							//htmlVal = `<a href="${ k_keyval.gps }" target="_blank">${ k_keyval.v } (GPS${ htmlLinkSign })</a>`;
							//console.log( 'htmlClue: ', htmlClue );
						}
					}
					else
						htmlVal = k_keyval.v;

					htmlTBody += `<tr><td class="txt-key">${ k_keyval.k }</td><td class="txt-val">${ htmlVal }</td></tr>`;
*/




				}

				//htmlTBody += `<tr><td>${ k_keyval.k }</td><td>${ k_keyval.v }</td></tr>`;
			});

			let htmlTableKeyVal = `<table>
				<thead></thead>
				<tbody>${ htmlTBody }</tbody>
			</table>`;

			htmlBody += `<div>${ htmlTableKeyVal }</div>`;
		}

		let htmlDate = '';
		if ( k_spoiler.date ) 
			htmlDate = `<span class="spoiler-title-cat">${ k_spoiler.date }</span> `;
		
		let htmlAct = '';
		if ( k_spoiler.act && objListServiceAct && objListServiceAct[ k_spoiler.act ] ) 
			htmlAct = `<span class="spoiler-title-cat"> ...${ objListServiceAct[ k_spoiler.act ].title }</span> `;
		


		htmlSpoilers += `<div class="spoiler" data-id="${ k_spoiler.id }">
			<div class="spoiler-title" onmousedown="return false;">${ htmlDate }${ k_spoiler.title }${ htmlAct }</div>
			<div class="spoiler-body" hidden>${ htmlBody }</div>
		</div>`;
	});

	content.innerHTML = htmlSpoilers;
}

// showSpoilers( arrSelected );



nav.addEventListener( 'click', function( e ) {

	if ( e.target.classList.contains( 'btn' )) {

		//let elemParent = e.target.closest( '.spoiler-each' );


		{ // підсвічування кнопок --------------------------------------------
			let arrElem = document.querySelectorAll( '#nav .btn' );

			arrElem.forEach( elem => {
				elem.classList.remove( 'active' );

			});

			e.target.classList.add( 'active' );
		} // ------------------------------------------------------------------



		let arrSelected = [];



		//console.log( e.target.dataset.id );

		if ( e.target.dataset.id == 'specification' ) 
			arrSelected = arrListSpecification;

		if ( e.target.dataset.id == 'service' ) 
			arrSelected = arrListService;

		if ( e.target.dataset.id == 'station' ) 
			arrSelected = arrListStation;

		if ( e.target.dataset.id == 'oem' ) 
			arrSelected = prepareArrOEM();



		


		






		
		showSpoilers( arrSelected );
	}
});






function prepareArrOEM() {

	let arr = arrListOEMcat.map( k_cat => {


		//console.log( k_cat.id );

		let tempArr = [];
		arrListOEM.forEach( k_oem => {

			if ( k_oem.cat && k_oem.cat[ k_cat.id ] ) {

				tempArr.push( { k: 'з/ч', v: k_oem.title, } );
				tempArr.push( { img: k_oem.id, } );


				if ( k_oem.n ) {

					k_oem.n.forEach( k_vag_n => {
						tempArr.push( { k: 'код', v: 'VAG ' + k_vag_n, } );
					});
				}



				if ( k_oem.manufacturer ) {

					//console.log( k_oem.manufacturer );

					k_oem.manufacturer.forEach( k_manufacturer => {

						let htmlK = '';
						let htmlV = '';
						//let htmlCode = '';

						if ( k_manufacturer.id ) {

							// перевірка тільки наявності посилання на Автопро
							if ( objListManufacturer && objListManufacturer[ k_manufacturer.id ] && objListManufacturer[ k_manufacturer.id ].internet && objListManufacturer[ k_manufacturer.id ].internet.avtopro ) {

								if ( objListManufacturer[ k_manufacturer.id ].title ) {

									//htmlK = k_manufacturer.id;

									htmlK = `<a href="${ objListManufacturer[ k_manufacturer.id ].internet.avtopro }" title="${ objListManufacturer[ k_manufacturer.id ].country } ( ${ objListManufacturer[ k_manufacturer.id ].year } )" target="_blank">${ objListManufacturer[ k_manufacturer.id ].title }${ htmlLinkSign }</a>`;
								}
							}
						}

						if ( k_manufacturer.n ) 
							htmlV = k_manufacturer.n;
				
						tempArr.push( { k: 'код', v: `${ htmlK } // ${ htmlV }` } );

					});
				}

				

				if ( k_oem.txt ) 
					tempArr.push( { k: 'txt', v: k_oem.txt, } );


				

				//console.log( htmlVagN );

				tempArr.push( { backspace: true, } );
				tempArr.push( { backspace: true, } );
				tempArr.push( { backspace: true, } );
			}

			//console.log( k1.id  );

		});

		//console.log( tempArr );

		return {
			id 		: k_cat.id, 
			title 	: k_cat.title, 
			keyval 	: tempArr,
		};
	});


	return arr;
}














content.addEventListener( 'click', function( e ) {

	if ( e.target.classList.contains( 'spoiler-title' ) || e.target.closest( '.spoiler-title' )) {
	//if ( e.target.closest( '.spoiler' )) {

		let elemParent = e.target.closest( '.spoiler' );

		//console.log( elemParent );
		//console.log( elemParent.dataset.id );

		elemParent.querySelector( '.spoiler-body' ).hidden = !elemParent.querySelector( '.spoiler-body' ).hidden;
	}
});






