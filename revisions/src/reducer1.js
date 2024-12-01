const initialState={
    users:[],
}

const userReducer = (state = initialState, action)=>{

    switch (action.type){
         case "AddUsers":
            return{
                ...state,
                users:[...state.users, action.payload]
            }

    }
}


export default userReducer;