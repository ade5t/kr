// JavaScript Document
		var i=0;
		function SlideSprav(col)
		{"use strict";
		 	for (var k=0; k<=col; k++) {
  			if (k===i) {document.getElementById(String(k)).style.display="inline-block";}
				else {document.getElementById(String(k)).style.display="none";}
			}
		}	
		
		function PrevSprav(col,link)
		{"use strict";
			if (i>0)
			{--i;
			 SlideSprav(col);
			}
		 else {location.href=link;}
		}
		
		function NextSprav(col,link)
		{"use strict";
		 if (i<col)
			{++i;
			 SlideSprav(col);
			}
		 else {location.href=link;}
		}

		var slideIndex = 1;

		function plusDivs(n,num) {
		  	showDivs(slideIndex += n,num);
		}

		function currentDiv(n,num) {
		  	showDivs(slideIndex = n,num);
		}

		function showDivs(n,num) {
		var i;
		var x = document.getElementsByClassName("mySlides"+' '+String(num));
		var dots = document.getElementsByClassName("demo");
			if (n > x.length) {slideIndex = 1}    
			if (n < 1) {slideIndex = x.length}
			for (i = 0; i < x.length; i++) {
		 		x[i].style.display = "none";  
			}
			for (i = 0; i < dots.length; i++) {
		 		dots[i].className = dots[i].className.replace("w3-dark-grey", "");
		  		dots[slideIndex-1].className += "w3-transparent";
			}
			x[slideIndex-1].style.display = "block";  
			/*dots[slideIndex-1].className = dots[slideIndex-1].className.replace("w3-transparent", "");
			dots[slideIndex-1].className += "w3-dark-grey";*/
		}