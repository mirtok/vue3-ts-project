<template>
    <Header msg="haha" @onHasPage="hasPages()"/>
    <div class="container">
        <div class="row mt-5">
            <div class="col-lg-4 col-md-6 mb-4" v-for="(item,index) in $store.state.dataList" :key="index">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <p class="font-weight-bold">{{item.title}}</p>
                        <p class="font-weight-light">{{forMatDateCom(item.time) }}</p>
                    </div>
                    <div class="card-body">{{item.content}}</div>
                    <div class="card-footer">最美日记</div>
                </div>
            </div>
        </div>
        <Model/>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import Header from '@/components/Header.vue'
import Model from '@/components/Model.vue'
import myTools from '@/utils/myTools'
@Options({
    components: {
        Header,
        Model
    },
})

export default class App extends Vue {
    menuList: Array<number> = [1,2,3,4,5,6]
    hasPages() : void{
        console.log(123456)
    }
    forMatDateCom(str: Date| string) : string{
        return myTools.forMatDate(str);
    }
    
}
</script>

<style lang="scss">
@import url(./assets/css/reset.scss);
@import url(./assets/css/common.scss);
</style>
