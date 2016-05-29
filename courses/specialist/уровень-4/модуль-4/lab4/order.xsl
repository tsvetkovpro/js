<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<!-- Метод преобразования -->
	<xsl:output method="html" />
	
	<!-- Выборки данных -->
	<xsl:variable name="member" select="/methodResponse/params/param/value/struct/member[value/double &gt; 0]" />
	<xsl:variable name="totalSum" select="sum($member/value/double)" />
	
	<!-- Корневой шаблон -->
	<xsl:template match="/">
		<table>
			<thead>
				<tr>
					<td>Наименование</td>
					<td>Сумма</td>
				</tr>
			</thead>
			<tbody>
				<xsl:apply-templates select="$member" />
			</tbody>
			<tfoot>
				<tr>
					<td>Итого</td>
					<td>
						<xsl:value-of select="$totalSum" />
					</td>
				</tr>			
			</tfoot>
		</table>
	</xsl:template>
	
	<!-- Шаблон обработки элемента структуры -->
	<xsl:template match="member">
		<tr>
			<!-- Пометим четный ряд -->
			<xsl:if test="(position() mod 2) = 0">
				<xsl:attribute name="class">even</xsl:attribute>
			</xsl:if>
			<td>
				<xsl:value-of select="name" />
			</td>
			<td>
				<xsl:value-of select="value/double" />
			</td>
		</tr>
	</xsl:template>	
</xsl:stylesheet>
