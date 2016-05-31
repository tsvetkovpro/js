<?xml version="1.0" encoding="utf-8" ?> 
<xsl:stylesheet version="1.0" 
		xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
		xmlns:fb2="http://www.gribuser.ru/xml/fictionbook/2.0" 
		xmlns:l="http://www.w3.org/1999/xlink" 
		xmlns:my="http://www.specialist.ru/ns/courses/ajax/lab6.2">
<!--
	Преобразование сообщения getBooks-response в форму редактирования
-->
	<xsl:output method="html" />
	
	<xsl:template match="/">
		<div>
			<h1>
				<xsl:value-of select="/my:data/fb2:section/fb2:title/fb2:p" />
			</h1>
			<xsl:apply-templates select="/my:data/fb2:section/*" />
		</div>
	</xsl:template>
	
	<xsl:template match="fb2:epigraph">
		<div style="text-align:right;font-style:italic">
			<xsl:apply-templates select="*" />
		</div>
	</xsl:template>
	
	<xsl:template match="fb2:cite">
		<div style="font-style:italic;font-family:fantasy">
			<xsl:apply-templates select="*" />
		</div>
	</xsl:template>	
	
	<xsl:template match="fb2:p[fb2:strong]">
		<p style="font-weight:bold">
			<xsl:value-of select="." />
		</p>
	</xsl:template>	
	
	<xsl:template match="fb2:p|fb2:text-author">
		<p>
			<xsl:value-of select="." />
		</p>
	</xsl:template>

	<xsl:template match="fb2:*"></xsl:template>
</xsl:stylesheet>