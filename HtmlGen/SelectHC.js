// HC - HtmlComponent, HG - HtmlGenerator

/**
 * 
 * @param {string} strLabel 
 * @param {object} props 
 * @param {LookupHC} hcLookup 
 * @returns 
 */
function SelectHC( strLabel, props, hcLookup ) {
    //return new SelectHG( strLabel, props, hcLookup )

    return ( 
        gtsHtmlGen.label({"class":"LabelAndValue"}, 
            LabelHC( props, strLabel),
            gtsHtmlGen.select({class :"LVField"}, props),
            props.blnLookup && LookupHC( props ) ) 
    );
}
