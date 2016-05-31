<?php
/*
** Возвращает HTML представление главы книги
*/
require('server.functions.php');
$sectionNo = (int) $_GET['no'];
header('Content-type: text/html; charset=utf-8');

// XSLT преобразование главы в HTML
$xml = new DOMDocument;
$xml->loadXML(getSectionXml($sectionNo));
$secCount = $xml->documentElement->firstChild->getAttribute('count');

$xsl = new DOMDocument;
$xsl->load('fb2html.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

$html = $proc->transformToXML($xml);

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>
			Глава <?php echo $sectionNo?>
		</title>
		<style type="text/css">
			div { clear:both }
			#divSections a { margin:1ex; border:1px solid #ccf; background-color:#ddf; padding:2px; display:block; float:left; width:1em; height:1em; text-align:center; text-decoration:none}
		</style>
	</head>
	<body>
		<div id="divSections">
			<?php
				for ($i=1; $i <= $secCount; $i++)
					echo '<a href="', $_SERVER['PHP_SELF'], '?no=', $i, '">', $i, '</a>';
			?>
		</div>
		<?php echo $html?>
	</body>
</html>