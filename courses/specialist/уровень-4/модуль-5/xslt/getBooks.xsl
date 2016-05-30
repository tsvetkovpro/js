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

	<xsl:variable name="books" select="/SOAP-ENV:Envelope/SOAP-ENV:Body/ns1:getBooksResponse/books/book" />
	
	<xsl:template match="/">
		<xsl:choose>
			<xsl:when test="count($books) &gt; 0">
				<table style="width:100%">
					<thead style="background-color:#cfc">
						<tr>
							<td style="width:30%">Автор</td>
							<td>Название</td>
						</tr>
					</thead>
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
		<div style="margin-top:1em">
			<button onclick="editBook(0)">Новая книга</button>
		</div>
	</xsl:template>
	
	<xsl:template match="book">
		<tr style="cursor:pointer" 
				onmouseover="this._bgColor=this.style.backgroundColor;this.style.backgroundColor='#fbb'" 
				onmouseout="this.style.backgroundColor=this._bgColor">
			<xsl:attribute name="onclick">editBook(<xsl:value-of select="id" />)</xsl:attribute>
			<xsl:if test="position() mod 2 = 0">
				<xsl:attribute name="style">background-color:#eee</xsl:attribute>
			</xsl:if>
			<td><xsl:value-of select="author" /></td>
			<td><xsl:value-of select="title" /></td>
		</tr>
	</xsl:template>	
</xsl:stylesheet>