  function sanitizeHTML (str){
        let temp = document.createElement('span');
        temp.textContent = str;
        return temp.innerHTML;
      };

  function adjustStr (str) {

  	str=str.replace(" ","%20");
  	return str;

  }  

  function verify (str) {

  	var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";

    if (iChars.indexOf(str.charAt(0)) != -1) {

    	return "oxoxoxoxoxoxo";
    } else 
           {return str;}

  }


function covidMask (number) {
  var mask=[false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,true,false,true,true,true,false,false,true,false,true,false,true,true,false,true,false,false,false,false,false,false,true,false,false,true,false,true,false,true,false,false,false,false,false,true,false,false,true,true,true,false,false,true,true,true,false,false,true,false,false,false,false,true,true,true,false,true,false,false,true,true,true,false,true,true,true,false,false,false,false,false,false,false,false,false,true,false,true,true,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,true,true,false,true,false,true,true,false,false,true,true,true,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,true,false,true,false,false,false,true,true,true,false,true,true];

   return mask[number]; 
    }
