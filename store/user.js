import Cookie from 'js-cookie'

export default{
    state:{
        token:''
    },
    matations:{
        setToken(state,val){
            state.token = val
            Cookie.set('token', val)
        },
        clearToken(state){
            
        }
    }
}