function LabelHC(props, strLabelText) {
    const labelProps = {"class":"LVDesc"};

    if ( props.sysAuditBusNameOverride ) {
        labelProps.sysAuditBusNameOverride = props.sysAuditBusNameOverride;
        delete props.sysAuditBusNameOverride;
    }
    

    if (props.required) {
        labelProps.class += " ControlLabelNTRequired";
    } else if (props.warning) {
        labelProps.class += " ControlLabelNTRequiredWarning";
    } else {
        labelProps.class += " ControlLabelNT";
    }
    return (
        gtsHtmlGen.span(labelProps, strLabelText)
    );
}