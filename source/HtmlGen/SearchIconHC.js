/** @typedef LookupProps
 *  @type {object}
 *  @property {string} sysSearchGroup
 *  @property {string} sysComponentKey
 *  @property {boolean} blnSearchMultiple
 *  @property {boolean} blnReadOnly
 */

/**
 * 
 * @param {LookupProps} objLookupProps 
 * @returns 
 */
 function SearchIconHC ( objLookupProps ) {
    //  return new SearchIconHG( objLookupProps );
    // follows the XSL template Icon.Search

    function generate() {
        const strSearchMultiple = objLookupProps.blnSearchMultiple ? "true" : "false";
        const strCustomStyle = objLookupProps.blnReadOnly ? "visibility:hidden;hideForDisable:true" : "";

        return(
            gtsHtmlGen.div({"class":"SearchIconsContainer"},
                gtsHtmlGen.a({"href":""
                    , "class":"aIcon"
                    , "tabindex":"-1"
                    , "sysComponentKey":objLookupProps.sysComponentKey
                    , "sysSearchGroup":objLookupProps.sysSearchGroup
                    , "sysSearchMultiple": strSearchMultiple 
                    , "style" : strCustomStyle},
                    gtsHtmlGen.img({"class":"imgSearchLink", "id":"imgSearch" + objLookupProps.sysSearchGroup, "src":"Shared/Image/TaskArea/IconSearch_Off.gif", 
                            sysSearchGroup : objLookupProps.sysSearchGroup
                            , alt : "Search"
                            , border: "0" } ) ),
                gtsHtmlGen.a({"href":""
                    , "class":"aIcon"
                    , "tabindex":"-1"
                    , "sysComponentKey":objLookupProps.sysComponentKey
                    , "sysSearchGroup":objLookupProps.sysSearchGroup
                    , "sysSearchMultiple": strSearchMultiple 
                    , "style" : strCustomStyle},
                    gtsHtmlGen.img({
                        "class":"imgSearchLink"
                        , "src":"Shared/Image/TaskArea/IconSearchClear_Off.gif"
                        , "onMouseOver":"CFUI.ImageOver(this);"
                        , "onMouseOut":"CFUI.ImageOver(this);"
                        , "sysSearchGroup" : objLookupProps.sysSearchGroup
                        , alt : "Clear Search"
                        , border : "0"
                    } ) ),
            ) );
    }

    const frag = generate();

    //const onClickSearch  = "SearchUI.ManualSearch('" + objLookupProps.sysComponentKey + "','"+ objLookupProps.sysSearchGroup +"'); return false;";
    // , "onFocus":"CFUI.IconFocus(this);"
    //                 , "onBlur":"CFUI.IconBlur(this);"
    //                 , "onClick" : onClickSearch
    const aSearch = frag.querySelectorAll("a")[0];
    aSearch.addEventListener("click", (e) => { SearchUI.ManualSearch(objLookupProps.sysComponentKey, objLookupProps.sysSearchGroup); e.preventDefault(); });
    aSearch.addEventListener("focus", (e) => { CFUI.IconFocus(e.target); });
    aSearch.addEventListener("blur", (e) => { CFUI.IconBlur(e.target); });

    // "onMouseOver":"CFUI.ImageOver(this);"
    // ,onMouseOut:"CFUI.ImageOver(this);"
    const iSearch = frag.querySelectorAll("img")[0];
    iSearch.addEventListener("mouseover", (e) => { CFUI.ImageOver(e.target); });
    iSearch.addEventListener("mouseout", (e) => { CFUI.ImageOver(e.target); });

    //const onClickClear  = "SearchUI.ClearSearch('" + objLookupProps.sysComponentKey + "','"+ objLookupProps.sysSearchGroup +"'); return false;";
    // , "onFocus":"CFUI.IconFocus(this);"
    // , "onBlur":"CFUI.IconBlur(this);"
    // , "onClick" : onClickClear
    const aClear = frag.querySelectorAll("a")[1];
    aClear.addEventListener("click", (e) => { SearchUI.ClearSearch(objLookupProps.sysComponentKey, objLookupProps.sysSearchGroup); e.preventDefault(); });
    aClear.addEventListener("focus", (e) => { CFUI.IconFocus(e.target); });
    aClear.addEventListener("blur", (e) => { CFUI.IconBlur(e.target); });
    
    const iClear = frag.querySelectorAll("img")[1];
    iClear.addEventListener("mouseover", (e) => { CFUI.ImageOver(e.target); });
    iClear.addEventListener("mouseout", (e) => { CFUI.ImageOver(e.target); });
    

    return frag;
 }


    /*

    <xsl:template name='Icon.Search'>
	<xsl:param name='strComponentKey'/>
    <xsl:param name='strSearchGroup'/>
    <xsl:param name='strSearchMultiple'/>
    <xsl:param name='strReadOnly'/>
    <a href='' class='aIcon' tabindex='-1'
        onFocus='CFUI.IconFocus(this);'
        onBlur='CFUI.IconBlur(this);'
        onClick='SearchUI.ManualSearch("{$strComponentKey}","{$strSearchGroup}"); return false;'
        sysComponentKey='{$strComponentKey}'
        sysSearchGroup='{$strSearchGroup}'
        sysSearchMultiple='{$strSearchMultiple}'>
		<xsl:if test='$strReadOnly="true"'>
			<xsl:attribute name='style'>visibility:hidden;hideForDisable:true</xsl:attribute>
		</xsl:if>
        <img class='imgSearchLink' id='imgSearch{$strSearchGroup}'
            src='Shared/Image/TaskArea/IconSearch_Off.gif'
            onMouseOver='CFUI.ImageOver(this);'
            onMouseOut='CFUI.ImageOver(this);'
            sysSearchGroup='{$strSearchGroup}'
            alt='Search'
            border='0'>
        </img>
    </a>
    <a href='' class='aIcon' tabindex='-1' id='imgClear{$strSearchGroup}'
        onFocus='CFUI.IconFocus(this);'
        onBlur='CFUI.IconBlur(this);'
        onClick='SearchUI.ClearSearch("{$strComponentKey}","{$strSearchGroup}"); return false;'
        sysComponentKey='{$strComponentKey}'
        sysSearchGroup='{$strSearchGroup}'
        sysSearchMultiple='{$strSearchMultiple}'>
		<xsl:if test='$strReadOnly="true"'>
			<xsl:attribute name='style'>visibility:hidden;hideForDisable:true</xsl:attribute>
		</xsl:if>
        <img class='imgSearchLink'
            src='Shared/Image/TaskArea/IconSearchClear_Off.gif'
            onMouseOver='CFUI.ImageOver(this);'
            onMouseOut='CFUI.ImageOver(this);'
            sysSearchGroup='{$strSearchGroup}'
            alt='Clear Search'
            border='0'>
        </img>
    </a>
</xsl:template>
    */
 