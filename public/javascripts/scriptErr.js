document.getElementById("linklogo").onclick = function() {

          let current = window.location.href.lastIndexOf("3000");
          let root = window.location.href.substring(0,current+4);
          document.getElementById("linklogo").setAttribute("href",root);
            
      }

document.getElementById("linkhome").onclick = function() {

          let current = window.location.href.lastIndexOf("3000");
          let root = window.location.href.substring(0,current+4);
          document.getElementById("linkhome").setAttribute("href",root);
            
      }