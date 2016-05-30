<?xml version="1.0" encoding="utf-8" ?> 
<xsl:stylesheet version="1.0" 
		xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
		xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" 
		xmlns:ns1="urn:BooksService" 
		xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
		xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/">
<!--
	Преобразование сообщения getBooks в HTML
-->
	<xsl:output method="html" />

	<!-- Некоторые параметры и выборка книг -->
	<xsl:variable name="imagePath" select="'../../images/'" />
	<xsl:variable name="books" select="/SOAP-ENV:Envelope/SOAP-ENV:Body/ns1:getBasketResponse/getBasketResponse/book" />
	
	<!-- Корневой шаблон -->
	<xsl:template match="/">
		<h3>Корзина</h3>
		<button onclick="emptyBasket()">Очистить</button>
		<div style="margin-bottom:20px">
			<xsl:text>Всего </xsl:text>
			<xsl:value-of select="count($books)" />
			<xsl:call-template name="showWordBook">
				<xsl:with-param name="booksCount" select="count($books)" />
			</xsl:call-template>
		</div>
		<xsl:apply-templates select="$books" />
	</xsl:template>
	
	<!-- Шаблон книги -->
	<xsl:template match="book">
		<div style="margin-bottom:10px">
			<!-- URL рисунка книги -->
			<xsl:variable name="image" select="concat($imagePath, image)" />
			<img src="{$image}" width="100" height="142" />
		</div>
	</xsl:template>	
	
	<!-- Шаблон правильного отображения слова КНИГА -->
	<xsl:template name="showWordBook">
		<xsl:param name="booksCount" />
		<xsl:choose>
			<xsl:when test="$booksCount &gt; 100">
				<xsl:call-template name="showWordBook">
					<xsl:with-param name="booksCount" select="$booksCount mod 100" />
				</xsl:call-template>
			</xsl:when>
			<xsl:when test="$booksCount &gt; 20">
				<xsl:call-template name="showWordBook">
					<xsl:with-param name="booksCount" select="$booksCount mod 10" />
				</xsl:call-template>
			</xsl:when>			
			<xsl:when test="$booksCount = 1">
				<xsl:text> книга</xsl:text>
			</xsl:when>
			<xsl:when test="$booksCount = 2 or $booksCount = 3 or $booksCount = 4">
				<xsl:text> книги</xsl:text>
			</xsl:when>	
			<xsl:otherwise>
				<xsl:text> книг</xsl:text>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
</xsl:stylesheet>