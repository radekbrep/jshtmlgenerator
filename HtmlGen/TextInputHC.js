// HC - HtmlComponent, HG - HtmlGenerator

function TextInputHC( strLabel, strValue, props, hcLookup ) {
    return new TextInputHG( strLabel, strValue, props, hcLookup )
}


function TextInputHG( strLabel, strValue, props, hcLookup ) {
    this.isHtmlComponent = true;
    this.hg = new HG();
    //TODO rewrite not using fragments this.hg.getFragment().append(this.build( strLabel, strValue, props, hcLookup ));    
    //this.build( strLabel, strValue, props, hcLookup )
}


TextInputHG.prototype.build = TextInputHG_build;



function TextInputHG_build(strLabelText, strValue, objProps, hcLookup){

    const h = this.hg;

    const labelProps = {"class":"LVDesc"};
    // if ( objProps.sysAuditBusNameOverride ) labelProps.sysAuditBusNameOverride = objProps.sysAuditBusNameOverride;
    
    if ( objProps.required) labelProps.class += " ControlLabelNTRequired"
    else if ( objProps.warning ) labelProps.class += " ControlLabelNTRequiredWarning";
    else labelProps.class += " ControlLabelNT";

    // let mapElemProps = new Map( Object.entries(props));
    // for ( const [key, value] of mapElemProps ) {
    //     if ( key === "class" && value.indexOf("Required") !== -1 ) {
    //         objLabelProps["class"] = "ControlLabelRequired";
    //     }
    // }

    if ( objProps.required) { objProps.sysRequired = "error"; delete objProps.required; }
    if ( objProps.warning ) { objProps.sysRequired += "warning"; delete objProps.warning; }

    // searchgroups handling
    if ( objProps.sysSearchGroup && objProps.sysBinding ) { objProps.sysSearchCriteria = objProps.sysBinding; }
    

    // for input the value is an attribute
    if ( strValue ) objProps.value = strValue;
    objProps.class = "LVField ControlValueNT";


    // IF hcLookup is defined then it is added in the container
    // if UNDEFINED then it ignored by the HTML generator

    const inp = 
        h.label({"class":"LabelAndValue"}
            ,h.span( labelProps, strLabelText)
            ,h.input(objProps)
            ,hcLookup ) ;

    return inp;    
}
