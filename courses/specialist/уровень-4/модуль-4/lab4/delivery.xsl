<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<!-- Метод преобразования -->
	<xsl:output method="html" />
	
	<!-- Корневой шаблон -->
	<xsl:template match="/">
		<select id="selDelivery">
			<!-- Выборка всех строк массива -->
			<xsl:apply-templates select="/methodResponse/params/param/value/array/data/value/string" />
		</select>
	</xsl:template>
	
	<!-- Шаблон обработки сторки массива -->
	<xsl:template match="string">
		<option value="{position()-1}">
			<xsl:value-of select="." />
		</option>
	</xsl:template>	
</xsl:stylesheet>
