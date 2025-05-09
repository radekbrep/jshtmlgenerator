// HC - HtmlComponent, HG - HtmlGenerator
function SecurityNameLinkHC (strLabel, strDescription, strSecurityInstrID, strTooltip ) {
    return new SecurityNameLinkHG(strLabel, strDescription, strSecurityInstrID, strTooltip );
}


// from templatecommon.xsl
function SecurityNameLinkHG(strLabel, strDescription, strSecurityInstrID, strTooltip ) {
    this.description = strDescription;
    this.securityInstrID = strSecurityInstrID;
    this.tooltip = strTooltip || "";
    this.isHtmlComponent = true;
    this.hg = new HG();
    // TODO rewrite not using fragments this.hg.getFragment().append(this.build(strLabel, strDescription, strSecurityInstrID, this.tooltip ));    
}


SecurityNameLinkHG.prototype.build = SecurityNameLinkHG_build;


/**
 * 
 * <!-- **************************************** -->
<!-- ** Link to open Security Summary Page ** -->
<!-- **************************************** -->
<xsl:template name='SecurityNameLink'>
    <xsl:param name='strDescription'/>
    <xsl:param name='strSecurityInstrID'/>
    <xsl:param name='strTooltip'/>
    <a href=''
    	class='aSecurityName'
    	onclick='CFUI.ShowSecuritySummary("{$strSecurityInstrID}");return false;'
    	sysAlwaysEnabled='true'>
    	<xsl:attribute name='title'>
			<xsl:value-of select='$strTooltip'/>
		</xsl:attribute>
        <xsl:value-of select='$strDescription'/>
    </a>
</xsl:template>
 * 
 * 
 */
function SecurityNameLinkHG_build(strLabelText, strDescription, strSecurityInstrID, strTooltip ) {
    
    let h = this.hg;
    
    const strOnclickHandler = "CFUI.ShowSecuritySummary('" +  strSecurityInstrID + "');return false;";

    const labelProps = {"class":"LVDesc ControlLabelNT Optional"};

    // const elmSecuritylink = 
    //     h.div({"class":"LabelValueTable"},
    //         h.div({"class":"LabelValueRow"},
    //             h.div({"class":"LabelBoxNT"},
    //                 h.label(labelProps, strLabelText)
    //             ),
    //             h.div({"class":"ValueBoxNT"}, 
    //                 h.a( {"href":"", "class":"aSecurityName", "onclick": strOnclickHandler, "sysAlwaysEnabled":"true", "title":strTooltip}, strDescription))));
    
    const elmSecurityLink = 
    h.label({"class":"LabelAndValue"},
        h.span( labelProps, strLabelText),
        h.a( {"href":"", "class":"aSecurityName LVField", "onclick": strOnclickHandler, "sysAlwaysEnabled":"true", "title":strTooltip}, strDescription));

        
    return elmSecurityLink;
}

