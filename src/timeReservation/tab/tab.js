
 import React, { useState, useEffect } from 'react' 
  
  
function Tab(props){

    const [tabCssClass , setTabCssClass] = useState()

    useEffect(()=>{
        setTabCssClass(convertPropsToCssClassName(props.isSelected))
    }, [props.isSelected])

    return(
    <div className={tabCssClass} onClick={()=> console.log('ff')}>{props.name}</div>
        
    )
}


function convertPropsToCssClassName(isSelected){

    // tip use switch to be able add more condition ib future
    switch (isSelected) {
        case true:
            return 'selected-tab'
    
        default: return 'unselected-tab'
    }
}


export default Tab