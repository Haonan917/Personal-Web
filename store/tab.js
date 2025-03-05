export default{
    state:{
        isCollapse:false,
        tabsList:[
            {
                path:'/mail',
                name:'mail',
                label:'增长率',
                icon:'mail'
            }
        ],
        currentMen:null
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMeun(state,val){
            if(val.name !== 'mail'){
                state.currentMen = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if(result === -1){
                    state.tabsList.push(val)
                }
            }else{
               state.currentMen = null
            }
        },
        closeTag(state,val){
            const result=state.tabsList.findIndex(item=>item.name===val.name)
            state.tabsList.splice(result,1)
        },
    }
}