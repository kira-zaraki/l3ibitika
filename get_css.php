<?php  
$url = file_get_contents("php://input");
$filename = explode('/',$url);
$filename = end($filename); 
$extension = explode('.',$filename);
$extension = end($extension);  

if(in_array($extension , ['css','js']) && !file_exists("attachment/$filename")){
	$css = file_get_contents($url);
	mkdir('attachment', 0700); 
	$handle = fopen("attachment/$filename", 'w');  
	fwrite($handle, $css);
}else{
	
	echo $filename;
}


?> 