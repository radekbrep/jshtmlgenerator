function TableHC ( props ) {
   // rowsPerPage
   // currentPage
   // cols - array of objects [ { columnId: "xx", colHeading: "Header 1", sort: "asc", sortPriority: "1", headLayout:fcn, layout:fcn } ]
   // data - json array of objects by [{colid1:value11, colid2:value12},{colid1: value21, colid2: value22, ...},{....}.....], or array of arrays values only [[value1, value2, value3],[value11, value21, valu31]]
   // cellLayout( colId, value, data)
   // evenRowClass
   // oddRowClass
   // add row and remove it, paging handling, detail handling 





   const  h = gtsHtmlGen;
   const iCols = props.cols.length;


   function generateTableRow(rowData, oddRow) {
      const rowProps = {};
      
      if ( props.oddRowClass && oddRow ) {
      	rowProps.class = props.oddRowClass;
      } else if ( props.evenRowClass && !oddRow ) {
      	rowProps.class = props.evenRowClass;
      }
      
      const row = h.tr( rowProps );
			console.log( JSON.stringify(rowData) + " i typeof " + typeof rowData);
      if ( rowData && rowData.length > 0 && typeof rowData[0] === "string" ) {
      	 rowData.forEach( element => {
        		row.appendChild( generateTableCell( null, element, props.data ) );
         });
            
      } else if ( rowData && typeof rowData === "object" ) {

         props.cols.forEach(element => {
            row.appendChild( generateTableCell(element.columnId,  rowData[ element.columnId ], props.data ) );
         });      
      } else throw ("No data passed in for row generation")
      return row;
      
   }

   function generateTableCell( colId, value, data) {
      let celllayout = null;
      if ( props.cellLayout ) {
         celllayout = props.cellLayout( colId, value, data);
      }
      // celllayout either does not exist or is produces undefined / null / false
      if ( ! celllayout ) {
         return h.td( value );
      } 
      // if cellLayout return value has parent element of td then return the celllayout, otherwise wrap in td
      if ( celllayout.tagName && celllayout.tagName.toLowerCase() === "td" ) {
          return celllayout;
      } else {
         return h.td( celllayout );
      }
      
   }

   function generateTableBody() {
      

      
      const body = h.tbody();

      if ( props.data && props.data.length > 0 ) {
         props.data.forEach( (rowData, idx) => {
         		// double not to coerce to boolean
            body.appendChild( generateTableRow( rowData, !!(idx%2) ) );
         });
      } else {
         // no data
         body.appendChild( h.tr( h.td( "No data available" ) ) );
      }

      return body;
   }
   
   function generateTableHeadingCell( colId, headingText, data ){
   		// if (props.headLayout) { return headLayoyt( colId, value, data )}
      // otherwise just return the th with heading
      return h.th( headingText );
   }
   
   function generateTableHeadingRow( cols ) {
   		
      const row = h.tr();
      
      cols.forEach( columnDef => { row.appendChild( generateTableHeadingCell(columnDef.columnId, columnDef.heading, props.data ) ) } );
      return row;
   }
   
   return (
      h.table(
         h.thead(
            h.tr( generateTableHeadingCell( null, props.cols[0].heading ), h.th( "Header 2" ), h.th( "Header 3" ) ),
            generateTableHeadingRow( props.cols )
         ), 
         generateTableBody()
         /* h.tbody(
            h.tr( generateTableCell(null, "Meaning", null), h.td( "Row 1 Col 2" ), h.td( "Row 1 Col 3" ) ),
            h.tr( h.td( "Row 2 Col 1" ), h.td( "Row 2 Col 2" ), h.td( "Row 2 Col 3" ) ),
            h.tr( h.td( "Row 3 Col 1" ), h.td( "Row 3 Col 2" ), h.td( "Row 3 Col 3" ) ),
            generateTableRow( props.data[0]),
            generateTableRow( props.data[1]),
            generateTableRow( props.data[2])
         ) */
      )
   )
}



/*


TableHC( {
      					evenRowClass : "TableRowEven",
                oddRowClass : "TableRowOdd",
      					cols:[
                  {columnId:"brnd", heading:"Manufacturer"},
                  {columnId:"carType", heading:"Car"}, 
                  {columnId:"pcsSold", heading:"Sold"} ],
      					data:[
                //["C-Max", "Ford", "43"],["Dodge", "5", "Viper"],["Fiat", "Ducato", "12"]
                	{carType:"C-Max", brnd:"Ford", pcsSold:"43"},
                  {brnd:"Dodge", pcsSold:"5", carType:"Viper"},
                  {brnd:"Fiat", carType:"Ducato", pcsSold:"12"}, 
                  {brnd:"Skoda", carType:"Octavia", pcsSold:"67"} 
                  ] } );

*/