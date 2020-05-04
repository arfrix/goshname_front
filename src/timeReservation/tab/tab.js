
 import React, { useState, useEffect } from 'react' 
 import './tab.css'
  
  
function Tab(props){
    console.log('tab')
    console.log(props)

    const [tabCssClass , setTabCssClass] = useState()

    useEffect(()=>{
        setTabCssClass(convertPropsToCssClassName(props.isSelected))
    }, [props.isSelected])

    return(
    <div className={tabCssClass} onClick={props.tabSelector}>
        <h5 className="my-auto">{props.name}</h5>    
    </div>
        
    )
}


function convertPropsToCssClassName(isSelected){

    // tip use switch to be able add more condition ib future
    switch (isSelected) {
        case true:
            return 'selected-tab p-2 pb-3'
    
        default: return 'unselected-tab p-2 pb-3'
    }
}


export default Tab