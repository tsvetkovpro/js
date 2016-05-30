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
	<xsl:variable name="books" select="/SOAP-ENV:Envelope/SOAP-ENV:Body/ns1:getBooksResponse/books/book" />
	
	<!-- Корневой шаблон -->
	<xsl:template match="/">
		<xsl:choose>
			<xsl:when test="count($books) &gt; 0">
				<table>
					<colgroup>
						<col width="200" />
						<col width="300" />
					</colgroup>
					<tboby>
						<xsl:apply-templates select="$books" />
					</tboby>
				</table>			
			</xsl:when>
			<xsl:otherwise>
				<div style="color:red">
					Книг в этой категории нет
				</div>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	
	<!-- Шаблон книги -->
	<xsl:template match="book">
		<tr style="cursor:pointer" 
				onmouseover="this._bgColor=this.style.backgroundColor;this.style.backgroundColor='#fbb'" 
				onmouseout="this.style.backgroundColor=this._bgColor">
			<xsl:attribute name="onclick">addToBasket(<xsl:value-of select="id" />)</xsl:attribute>
			<xsl:if test="position() mod 2 = 0">
				<xsl:attribute name="style">background-color:#eee</xsl:attribute>
			</xsl:if>
			<!-- URL рисунка книги -->
			<xsl:variable name="image" select="concat($imagePath, image)" />
			<td><img src="{$image}" /></td>
			<td>
				<xsl:value-of select="author" />
				<br />
				<strong>
					<xsl:value-of select="title" />
				</strong>
			</td>
		</tr>
	</xsl:template>	
</xsl:stylesheet>