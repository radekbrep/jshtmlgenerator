// HC - HtmlComponent, HG - HtmlGenerator

/** @typedef ReadOnlyProps
 *  @type {object}
 *  @property {string} sysAuditBusNameOverride - Audit Name override
 *  @property {string} name - HTML Attribute for the value
 *  @property {string} id - HTML Attribute for the value
 *  @property {string} sysDomain - Domain for the value
 *  @property {string} title - HTML attribute for the label and control
 */

/**
 * 
 * @param {string} strLabel 
 * @param {string} strValue 
 * @param {ReadOnlyProps} props 
 * @returns 
 */
function ReadOnlyHC ( strLabel, strValue, props ) {
    //return new ReadOnlyHG( strLabel, strValue, objProps );
    
    const rowProps = {class:"LabelAndValue"};
    if ( props.title)  {
        rowProps.title = props.title;
        delete props.title;
    }

    props.class = "LVField ReadOnlyFieldNT";

    return ( 
        gtsHtmlGen.label(rowProps,
            LabelHC( props, strLabel),
            gtsHtmlGen.span( props, strValue))
    );

    

}
