const templateObj = {
  target: '.card-columns',
  wrapper0: 'article',
  image: 'img',
  wrapper1: 'div',
  wrapper2: 'h5',
  wrapper3: 'p',
}

let ajaxcallObj = {
  method: 'GET',
  url: "https://sandbox.musement.com/api/v3/activities?text=&text_operator=AND&extend_other_languages=YES&extend_content_fields=NO&fuzziness_level=LEVEL-0&zero_terms_query=NONE&sort_by=relevance&limit=45&offset=0",
  asynchronous: true,
}

function alert(number) {

  let err = document.createElement('div');
  err.classList.add("alert");
  err.setAttribute('role','alert');
  err.setAttribute('id','inserr');
  let wrap = document.createElement('p');
  let msg = document.getElementById("main");

  msg.innerHTML = '';

  let ele1 = document.createElement('form');
  let ele2 = document.createElement('input');
  ele2.classList.add("btn","btn-lg");
  ele2.setAttribute('type','button');
  ele2.setAttribute('value','Torna indietro');
  ele2.setAttribute('name','button');
  ele2.setAttribute('onClick','history.go(-1);return true;');

  let textErr = document.createTextNode("Errore non ben identificato. Riprovare più tardi.");

  if (number == 404) {
          err.classList.add("alert-warning");
          ele2.classList.add("btn-warning");
          textErr = document.createTextNode("La risorsa cercata non è disponibile. Riprovare più tardi.");

  } else { if (number == 503) {
            textErr = document.createTextNode("Server momentaneamente non disponibile. Riprovare più tardi.");

              };
           err.classList.add("alert-danger");
           ele2.classList.add("btn-danger");   

      };

  ele1.appendChild(ele2);

  msg.appendChild(err).appendChild(wrap).appendChild(textErr);
  
  var elem = document.getElementById('inserr');    // Get the element to insert a new node
  elem.insertBefore(ele1, elem.childNodes[1]);

}

// chiamo la funzione con le sue callback
callAjax(ajaxcallObj, templateObj, template, alert);

function callAjax(call, temp, callback, callback2){
// instanzio l'oggetto XMLHttpRequest
var xhr = new XMLHttpRequest();
 
 tempor = call.url.indexOf("=");
 call.url = call.url.substring(0,tempor+1)+adjustStr(document.getElementById("formControl").getAttribute("placeholder"))+call.url.substring(tempor+1,call.url.length);
// comportamento dell'interprete
xhr.addEventListener("readystatechange", function(){

	if(xhr.readyState === 4){
		if(xhr.status === 200){
			  callback(xhr.response, temp);
		} else {
             callback2(xhr.status);
        };
    };
	});

// imposto la chiamata HTTP
xhr.open(call.method,call.url,call.asynchronous);
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("accept-language", "it-IT");
xhr.setRequestHeader("x-musement-currency", "EUR");
// invio la richiesta
xhr.send();
}

function template(response, temp){

      let targ = document.querySelector(temp.target);
      let resp = JSON.parse(response);

      // pulisce l'elemento target
      targ.innerHTML = '';

      console.log(resp.data);

      if (resp.data.length!=0) {

               function appendResponse(item,index,arr){

                 if ((sanitizeHTML(item.operational_days) != "") && (sanitizeHTML(item.operational_days).indexOf("2019") == -1) && (sanitizeHTML(item.about).indexOf("2019") == -1) && (item.is_available_today || item.is_available_tomorrow)) {

                        let newEle0 = document.createElement(temp.wrapper0);
                        newEle0.classList.add("card","text-dark","bg-light","mb-3");
                        let idwrap = "wrap"+index;
                        newEle0.setAttribute("id", idwrap )
                        let img = document.createElement(temp.image); 
                        if (sanitizeHTML(item.cover_image_url) != "") {
                            img.setAttribute("src", sanitizeHTML(item.cover_image_url));
                        } else {
                            img.setAttribute("src", "/images/no-image.jpg");
                        };
                        img.classList.add("card-img-top");
                        let newEle1 = document.createElement(temp.wrapper1);
                        newEle1.classList.add("card-body");
                        let idcard = "res"+index;
                        newEle1.setAttribute("id", idcard);
                        let newEle2 = document.createElement(temp.wrapper2);
                        newEle2.classList.add("card-title");
                        let textTitle = document.createTextNode(sanitizeHTML(item.title));
                        let newEle3 = document.createElement(temp.wrapper3);
                        newEle3.classList.add("card-text");

                        let textCont = null;
                        
                        if (sanitizeHTML(item.description) != ""){
                              textCont = document.createTextNode(sanitizeHTML(item.description));
                            } else {
                              textCont = document.createTextNode('Descrizione non disponibile');
                            };
                        newEle3.appendChild(textCont);

                        let btnElement = '<a href='+ sanitizeHTML(item.url).replace("sandbox","www")+' class=\'btn btn-info\' target=\'_blank\'>Info & Booking</a>';
                        let newEle4 = document.createElement('p');
                        newEle4.innerHTML = btnElement;

                        targ.appendChild(newEle0).appendChild(newEle1).appendChild(newEle2).appendChild(textTitle);

                        var elem = document.getElementById(idwrap);    // Get the element to insert a new node
                        elem.insertBefore(img, elem.childNodes[0]);

                        var elem = document.getElementById(idcard);    // Get the element to insert a new node
                        elem.insertBefore(newEle3, elem.childNodes[1]); 

                        var elem = document.getElementById(idcard);    // Get the element to insert a new node
                        elem.insertBefore(newEle4, elem.childNodes[2]);
                      } 
                    }    
            resp.data.forEach(appendResponse);

          }  else { alert(404); }

      
}
