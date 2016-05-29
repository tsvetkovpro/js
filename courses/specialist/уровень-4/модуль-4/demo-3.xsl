<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<!-- Метод преобразования -->
	<xsl:output method="html" />
	
	<!-- Корневой шаблон -->
	<xsl:template match="/">
		<h2>
			<xsl:value-of select="/methodResponse/params/param/value/string"/>
		</h2>
	</xsl:template>
	
	
</xsl:stylesheet>
