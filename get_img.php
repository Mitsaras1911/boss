<?php
$img = [];
 foreach(glob('img/carousel/*.*') as $filename){
     
	 array_push($img,$filename);
 }
 echo json_encode($img);
?>