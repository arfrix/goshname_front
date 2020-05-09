


export function reservationReducer(state , action){
    switch (action.type) {
        case 'ADD_TABLE_ID':
            return{
                ...state ,
                tableId : action.payload
            }
            
        case 'ADD_CHAIR_ID':
            return{
                ...state ,
                chairId : action.payload
            }
            
        case 'ADD_DAY_PART':
            return{
                ...state ,
                dayPart : action.payload
            }
            
    
        default: 
            return state
    }


}