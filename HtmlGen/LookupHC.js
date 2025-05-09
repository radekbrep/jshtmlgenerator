// HC - HtmlComponent, HG - HtmlGenerator

/** @typedef LookupProps
 *  @type {object}
 *  @property {string} strSearchGroup
 *  @property {string} strComponentKey
 *  @property {boolean} blnSearchMultiple
 *  @property {boolean} blnReadOnly
 */


/**
 * 
 * @param {string} strLabel 
 * @param {string} strValue 
 * @param {LookupProps} objProps 
 * @returns 
 */
function LookupHC (  objProps ) {
    // return new LookupHG( arguments );
    // TODO possibly update props to contain what is needed  blnSearchMultiple, blnReadOnly, sysComponentKey, sysSearchGroup
    return (
        gtsHtmlGen.span({class: "LVIcons"}, SearchIconHC( objProps ) ) 
    );
}


