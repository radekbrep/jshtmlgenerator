

function HeadingNormalHC( strHeadingText, strTDHeadingClass ) {

    strTDHeadingClass = strTDHeadingClass || "tdHeading"; // not used?
    
    return (
        gtsHtmlGen.div( {"class":"Heading" ,"style":"margin-bottom:5px;opacity:0.85;"},  strHeadingText )
    );
    
}


