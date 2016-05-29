<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<!-- Метод преобразования -->
	<xsl:output method="html" />
	
	<!-- Корневой шаблон -->
	<xsl:template match="/">
		<div>
			<xsl:apply-templates select="/methodResponse/params/param/value/array/data/value/struct" />
		</div>
	</xsl:template>
	
	<!-- Шаблон сообщения -->
	<xsl:template match="struct">
		<xsl:variable name="id" select="member[name='id']/value/*" />
		<xsl:variable name="author" select="member[name='author']/value/*" />
		<xsl:variable name="email" select="member[name='email']/value/*" />
		<xsl:variable name="body" select="member[name='body']/value/*" />
		
		<div class="message">
			<xsl:attribute name="id">
				<xsl:text>_</xsl:text>
				<xsl:value-of select="$id" />
			</xsl:attribute>
			<a>
				<xsl:attribute name="href">mailto:<xsl:value-of select="$email" /></xsl:attribute>
				<xsl:value-of select="$author" />
			</a>
			<p>
				<xsl:value-of select="$body" />
			</p>
		</div>
	</xsl:template>	
</xsl:stylesheet>
