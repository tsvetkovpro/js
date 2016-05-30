<?xml version="1.0" encoding="utf-8" ?> 
<xsl:stylesheet version="1.0" 
		xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
		xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" 
		xmlns:ns1="urn:BooksService" 
		xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
		xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/">
<!--
	Преобразование сообщения getCategories-response в HTML
-->
	<xsl:output method="html" />

	<xsl:template match="/">
		<select>
			<xsl:apply-templates select="/SOAP-ENV:Envelope/SOAP-ENV:Body/ns1:getCategoriesResponse/categories/category" />
		</select>
	</xsl:template>
	
	<xsl:template match="category">
		<option>
			<xsl:attribute name="value"><xsl:value-of select="id" /></xsl:attribute>
			<xsl:value-of select="title" />
		</option>
	</xsl:template>	
</xsl:stylesheet>