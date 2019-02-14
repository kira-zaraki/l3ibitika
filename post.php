<?php  
$file = file_get_contents("php://input");
$file = json_decode($file); 

$handle = buildDirector('files');
fwrite($handle['html'], $file->html);
fwrite($handle['css'], $file->style);
fwrite($handle['index'], index_file($file->html)); 

function buildDirector($path){ 
if (is_dir($path))
{
	unlink("$path/content.html");
	unlink("$path/style.css");
	unlink("$path/index.html");
	rmdir($path);
}
mkdir($path, 0700);
$handle['html'] = fopen("$path/content.html", 'w');
$handle['css']  = fopen("$path/style.css", 'w');
$handle['index']  = fopen("$path/index.html", 'w');

return $handle;
}

function index_file($html){
	return "<!DOCTYPE html>
			<html lang='en'>
			<head>
				<meta charset='UTF-8'>
				<title>Document</title>
				<link rel='stylesheet' href='style.css'>
			</head>
			<body>
				$html
			</body>
			</html>";
}

?> 