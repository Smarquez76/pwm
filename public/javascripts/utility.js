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