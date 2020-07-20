// funzione di sanitizzazione di stringhe  
  function sanitizeHTML (str){
        let temp = document.createElement('span');
        temp.textContent = str;
        return temp.innerHTML;
      };

// funzione per sistemazione stringhe inserite da utente e contenenti spazi
  function adjustStr (str) {

  	str=str.replace(" ","%20");
  	return str;

  }  

// funzione per controllo dell'input utente
  function verify (str) {

  	var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";

    if (iChars.indexOf(str.charAt(0)) != -1) {

    	return "oxoxoxoxoxoxo";
    } else 
           {return str;}

  }

// costruzione statica della maschera di filtro categorie compatibili covid-19
    function covidMask (number) {
      var mask=[false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,true,false,true,true,true,false,false,true,false,true,false,true,true,false,true,false,false,false,false,false,false,true,false,false,true,false,true,false,true,false,false,false,false,false,true,false,false,true,true,true,false,false,true,true,true,false,false,true,false,false,false,false,true,true,true,false,true,false,false,true,true,true,false,true,true,true,false,false,false,false,false,false,false,false,false,true,false,true,true,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,true,true,false,true,false,true,true,false,false,true,true,true,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,true,false,true,false,false,false,true,true,true,false,true,true];

       return mask[number]; 
        }
