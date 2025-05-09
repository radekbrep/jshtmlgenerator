// service to replace XSL Transformations HTML generation for component


function HG (){ }

// static 
HG.NODE_TYPE_FRAGMENT = 11;


HG.NBSP = "\u00A0";



HG.prototype.a  = HG_a;
HG.prototype.div  = HG_div;
HG.prototype.img  = HG_img;
HG.prototype.input  = HG_input;
HG.prototype.label  = HG_label;
HG.prototype.select  = HG_select;
HG.prototype.span  = HG_span;
HG.prototype.fieldset  = HG_fieldset;
HG.prototype.legend    = HG_legend;
HG.prototype.button    = HG_button;
HG.prototype.textarea    = HG_textarea;

// table elements
HG.prototype.table  = HG_table;
HG.prototype.thead  = HG_thead;
HG.prototype.tbody  = HG_tbody;
HG.prototype.th  = HG_th;
HG.prototype.tr  = HG_tr;
HG.prototype.td  = HG_td;
HG.prototype.colgroup  = HG_colgroup;
HG.prototype.col  = HG_col;
HG.prototype.caption  = HG_caption;
HG.prototype.tfoot = HG_tfoot;






HG.prototype.data = HG_data;


HG.prototype.elem  = HG_elem;






// TODO rewrite so the nesting can be used - before check for conditional generation
/**
 * 
 * @param {*} oAt 
 * @returns HTMLElem
 */
function HG_div(  ) {
    let strElemName = "div"; 
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_img ( ) {
    let strElemName = "img";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_input( ) {
    let strElemName = "input";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_label( ) {
    let strElemName = "label";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}


function HG_a( ) {
    let strElemName = "a";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_select(  ) {
    let strElemName = "select";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_span() {
    let strElemName = "span";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_fieldset() {
    let strElemName = "fieldset";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_legend() {
    let strElemName = "legend";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_button ( ) {
    let strElemName = "button";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}


function HG_textarea ( ) {
    let strElemName = "textarea";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_table( ) {
    let strElemName = "table";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_thead( ) {
    let strElemName = "thead";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_tbody( ) {
    let strElemName = "tbody";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_th( ) {
    let strElemName = "th";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_tr( ) {
    let strElemName = "tr";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_td( ) {
    let strElemName = "td";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_colgroup( ) {
    let strElemName = "colgroup";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_col( ) {
    let strElemName = "col";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

function HG_tfoot( ) {
    let strElemName = "tfoot";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}

/**
 * caption {
  caption-side: top;
  text-align: left;
}
 */
function HG_caption( ) {
    let strElemName = "caption";
    HG_CheckSingleTag( strElemName, arguments );
    return  HG_elem.apply( this, [strElemName].concat(Object.values(arguments)) );
}



function HG_elem( ) {
    // argments 
    // [0] always the elm tagName
    
    // then
    // null || undefined
    // another element (child for STRUCTURE)
    
    // JSON object for attributes
    
    // string -> text node as a child in structure

    // boolean -> conditional rendering 
    // e.g.
    // let blnDisplay = getDisplay();
    // hg.div( hg.span("display always"), blnDisplay && hg.span("maybe display this") )

    let strElemName = arguments[0];
    /** @type HTMLElement     */
    let elem = document.createElement( strElemName );

    for (let i = 1; i < arguments.length; i++) {
        let argCurr = arguments[i];
        // add conditional rendering option (if falsy) do nothing 
        if ( argCurr !== "0" && ( argCurr == false || typeof argCurr === "undefined" || argCurr === null ) ) { // not handling number zero here
            // do nothing - this allows for conditional rendering  , using weak comparison here == 
            // if "0" is passed then it might be a string that should be displayed
        } else if ( typeof argCurr === "string") {
            let elmTextNode = document.createTextNode( argCurr );
            elem.appendChild( elmTextNode ) ; //string to text node
        } else if ( argCurr.tagName && argCurr.nodeType ) {
            elem.appendChild( argCurr ); // element
        } else if ( argCurr.nodeType && argCurr.nodeType === HG.NODE_TYPE_FRAGMENT ) {
            elem.appendChild( argCurr ); // fragment
        } else if ( typeof argCurr === "object" ) {
            let vals = Object.values(argCurr);
            Object.keys(argCurr).forEach( 
                (strAttName,i) => {
                    if (typeof vals[i] !== "object" ) {
                        elem.setAttribute( strAttName, vals[i]) 
                    } } );
        }
    }

    return elem;

}





function HG_data( doc, strXPath ) {
    let strRes = XClientTS.selectSingleNodeValue( doc, strXPath ) ;
    return strRes ? strRes : "";
}



function HG_CheckSingleTag( strTagName, passedArguments ) {
    const setSingleTag = new Set( ["input", "br", "img"]);
    if ( ! setSingleTag.has(strTagName.toLowerCase())) { return true; }
    if ( passedArguments.length > 1) { // allow only props to be passed, if more presumably these are children and single tags cannot have children elems
        throw "Cannot create " + strTagName + " with " + passedArguments.length + " parameters"
    }
    return true;
}