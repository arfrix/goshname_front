import React from 'react'
import {Router} from 'react-router-dom'




function RouterWithContext({contextComponent , component , ...rest}){
    console.log(contextComponent)
    const { Provider } = contextComponent
    const Component = component


    return(
        <Router {...rest}>
            <Provider>
                <Component/>
            </Provider>
        </Router>
    )
}




export default RouterWithContext