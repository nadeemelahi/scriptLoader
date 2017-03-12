/* copyright * 2016 * Nadeem Elahi * nadeem.elahi@gmail.com */

"use strict";

function load_js(scriptspaths,cb){

   function js_ldd(){

      if(scriptspaths.length) 
	 load_js(scriptspaths, cb);
      else 
	 if (cb !== null) cb();

      js.removeEventListener("load",js_ldd,false);
   }

   var js = document.createElement("script");
   document.body.appendChild(js);
   js.addEventListener("load",js_ldd,false);
   js.src = scriptspaths.shift();
}

var scripts = [ 
      "script1.js"
      ,"script2.js"
      ,"script3.js"
      ,"script4.js"
      ,"script5.js"
];

load_js(scripts, function(){
   //all scripts loaded
});
