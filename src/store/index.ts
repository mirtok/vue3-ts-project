import { createStore } from "vuex";
import myLocals from '@/utils/myLocals'
import {noteDatakey} from '@/common/loaclKey'

interface State{
    modelShow: boolean,
    dataList: Array<object>
}


const state: State = {
    modelShow: false,
    dataList: myLocals.getLocalStorage(noteDatakey.key) || []
}

export default createStore({
    state,
    mutations: {
        changeModelShow(state: State, flag: boolean) :void{
            state.modelShow = flag
        },
        changeDataList(state: State, data: object) :void{
            state.dataList.push(data)
        }
    },
    actions: {
        setDataList({commit,state},data: object) : object{
            return new Promise((resolve,reject) =>{
                try {
                    commit('changeDataList',data)
                    myLocals.setLocalStorage(noteDatakey.key,state.dataList)
                    resolve({})
                } catch (error) {
                    reject(error)
                }
            })
        }
    },
    modules: {}
});
