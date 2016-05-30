<?xml version="1.0" encoding="utf-8" ?> 
<xsl:stylesheet version="1.0" 
		xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
		xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" 
		xmlns:ns1="urn:BooksService" 
		xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
		xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/">
<!--
	Преобразование сообщения getBooks-response в форму редактирования
-->
	<xsl:output method="html" />

	<xsl:variable name="bookId" select="0" />
	<xsl:variable name="book" select="/SOAP-ENV:Envelope/SOAP-ENV:Body/ns1:getBooksResponse/books/book[id=$bookId][1]" />
	
	<xsl:template match="/">
		<form id="frmBook" action="#" onsubmit="return false">
			<input id="txtCategory" type="hidden" value="{$book/category}" />
			<h2>
				<xsl:choose>
					<xsl:when test="count($book) = 0">
						Новая книга
					</xsl:when>
					<xsl:otherwise>
						Книга #
						<xsl:value-of select="$book/id" />
					</xsl:otherwise>
				</xsl:choose>
			</h2>
			<div>
				<label for="txtAuthor">Автор</label>
				<input id="txtAuthor" type="test" value="{$book/author}" />
			</div>
			<div>
				<label for="txtTitle">Название</label>
				<input id="txtTitle" type="test"  value="{$book/title}" />
			</div>
			<div>
				<label for="txtImage">Изображение</label>
				<input id="txtImage" type="test"  value="{$book/image}" />
			</div>
			<div style="text-align:center">
				<button>
					<xsl:attribute name="onclick">saveBook(<xsl:value-of select="$bookId" />)</xsl:attribute>
					Сохранить
				</button>
				<xsl:text> </xsl:text>
				<button>
					<xsl:attribute name="onclick">deleteBook(<xsl:value-of select="$bookId" />)</xsl:attribute>
					Удалить
				</button>
				<xsl:text> </xsl:text>
				<button onclick="closeEditor()">Закрыть</button>
				<!-- Кнопочка для закрывания вверху окна редактора -->
				<a id="aClose" href="javascript:closeEditor()" title="Закрыть окно">X</a>
			</div>
		</form>
	</xsl:template>
</xsl:stylesheet>