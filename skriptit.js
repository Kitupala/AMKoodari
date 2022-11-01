/*
file: skriptit.js
desc: nt1a.html
date: 6.10.2020
auth: Kimmo T
*/

function dollari(){
		//Ohjelma muuttaa syötetyn luvun dollareiksi tai euroiksi riippuen kumpaa nappia painetaan.
		//Syöttötiedot tulevat lomakkeelta jonka id="valuutta".
        let luku = document.getElementById("valuutta").value; //Määritellään muuttuja "luku" jolle käyttäjä antaa arvon input -kentässä.
        let summa = luku * 1.18; //Määritellään muuttuja "summa" ja annetaan sille arvoksi valuuttamuunnoksen tulos.
		document.getElementById("tulostusAlue").innerHTML = (Intl.NumberFormat('en-US', 
		{ style: 'currency', currency: 'USD' }).format(summa));//Tulostetaan valuuttamuunnos ("summa") HTML -elementtiin "tulostusAlue".
		}
            
        function euro(){
        let luku = document.getElementById("valuutta").value;
        let summa = luku * 0.85;
		document.getElementById("tulostusAlue").innerHTML = (Intl.NumberFormat('fi-FI', 
		{ style: 'currency', currency: 'EUR' }).format(summa)); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
		}
   