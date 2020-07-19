document.getElementById("linklogo").onclick = function() {

          let current = window.location.href.indexOf("esp");
          let root = window.location.href.substring(0,current);
          document.getElementById("linklogo").setAttribute("href",root);
            
      }

document.getElementById("linkhome").onclick = function() {

          let current = window.location.href.indexOf("esp");
          let root = window.location.href.substring(0,current);
          document.getElementById("linkhome").setAttribute("href",root);
            
      }

document.getElementById("cercabtn").onclick = function() {

		let temp = verify(sanitizeHTML(document.getElementById("formControl").value));
        if (temp!="") {
          document.getElementById("cercabtn").setAttribute("href","esp/"+temp);
              }
      }

