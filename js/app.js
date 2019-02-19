window.onload = function(eventp) {
update_path(eventp.target);
var mark = function(event){
	if(event.type == 'mouseover')
		event.target.style.border = '1px solid black';
	else
		event.target.style.border = 'none';
}
 
var finalResult = [];   
var get = function(event){
	finalResult = []; 
	if (event.target.id != 'url-parse')
		event.preventDefault(); 

var data = {
	html : event.toElement.outerHTML,
	style  : getRulsCss(event.target)
}; 

var http = new XMLHttpRequest();
var url = 'post.php'; 
	http.open('POST', url, true);  
    http.setRequestHeader('Content-Type', 'application/json'); 
	http.onreadystatechange = function() { 
	    if(http.readyState == 4 && http.status == 200) {
	        console.log('200'); 
	    } 
	} 

	http.send(JSON.stringify(data));

}; 

document.addEventListener('click',get);
document.addEventListener('mouseover',mark);
document.addEventListener('mouseout',mark);
 
var getRulsCssbyElement = function(element){
   var sheets = document.styleSheets;
   var result = [];   
    	if(element.nodeType == Node.ELEMENT_NODE){
	    element.matches = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector 
	        || element.msMatchesSelector || element.oMatchesSelector;
	    for (var i in sheets) {
	        var rules = sheets[i].rules || sheets[i].cssRules;
	        for (var r in rules) {   
	            if (element.matches(rules[r].selectorText)) { 
	                result.push(rules[r].cssText);
	            }
	        }
	    } 
	}   
	
    return result;
}
 
var getRulsCss = function(elem){ 
	if (getRulsCssbyElement(elem).length)   
		finalResult.push(getRulsCssbyElement(elem));

	if (elem.childNodes) {
		elem = elem.firstChild;
		while(elem){
			if (elem.childNodes)
				 getRulsCss(elem);

			elem = elem.nextElementSibling;  

		}
	} 
	return finalResult.toString();
}

};

var update_path = function(elem){
	var url;
	if(elem.href){
	 	url = elem.href.replace(/localhost/gi, "youtube.com"); 
		api_request(url,elem) 
	} 

	if (elem.childNodes) {
		elem = elem.firstChild;
		while(elem){
			if (elem.childNodes)
				 update_path(elem);

			elem = elem.nextElementSibling;  

		}
	}
}

var api_request = function(url,element){
	var file;
	var http = new XMLHttpRequest(); 
	http.onreadystatechange = function() { 
	    if(http.readyState == 4 && http.status == 200) { 
		 	element.href = "attachment/" + http.responseText;  
	    } 
	} 
	http.open('POST', 'get_css.php', true);   
	http.send(url); 
}