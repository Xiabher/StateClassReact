import React from "react";

// this is the JSX WAY
const HelloJSX =() => { 
  /*
  return (
 <div className: 'dummyClass'>
  <h1> hello JSX </h1>
  </div>
  );
*/

return React.createElement(
  'div', 
   {id: 'helloText', className: 'dummyClass'}, <h1> hello vishvash </h1>
 // React.createElement(h1, null, 'hello mismash')
)
}

// above look how verbose it is without JSX 




export default HelloJSX;