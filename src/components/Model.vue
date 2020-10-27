<template>
    <div
        class="modal"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        :data-name="$store.state.modelShow"
        v-show="$store.state.modelShow"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title font-weight-bold" id="staticBackdropLabel">
                        添加记事本
                    </h5>
                    <div class="text-right d-flex align-items-center">               
                        <i class="fa fa-floppy-o fa-lg fa-fw text-danger" aria-hidden="true" @click="addNote"></i>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            @click="closeModel"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <div class="modal-body">
                    <form class="needs-validation" novalidate>
                        <div class="form-group row">
                            <label
                                for="colFormLabelSm"
                                class="col-sm-2 col-form-label col-form-label-sm d-flex align-items-center"
                                >标题</label
                            >
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control form-control-sm"
                                    id="colFormLabelSm"
                                    placeholder="请输入标题"
                                    v-model="form.title"
                                />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label
                                for="colFormLabel"
                                class="col-sm-2 col-form-label col-form-label-sm d-flex align-items-center"
                                >内容</label
                            >
                            <div class="col-sm-10">
                                <textarea class="form-control form-control-sm" rows="6" id="comment" placeholder="请输入内容" v-model="form.content"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-sm btn-secondary"
                        data-dismiss="modal"
                        @click="closeModel"
                    >
                        取消
                    </button>
                    <button type="button" class="btn btn-sm btn-primary" @click="addNote">
                        确认
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
interface formOptions{
    title: string
    content: string
    time?: Date
}

@Options({
    methods:{
        closeModel(){
            this.$store.commit('changeModelShow',false)
        },
        addNote(){
            const {title,content} = this.form
            if(!title){
                return alert("请输入标题")
            }else if(!content){
                return alert("请输入内容")
            }
            this.form.time = new Date()
            const data = JSON.parse(JSON.stringify(this.form))
            this.$store.dispatch('setDataList',data).then((res: object) => {
                this.form.title = ''
                this.form.content = ''
                this.form.time = undefined
            }).catch((err: object) => {
                
            });
        }
    }
})
export default class HelloWorld extends Vue {
    form: formOptions = {title: '',content: '', time: undefined}
}
</script>
<style lang="scss" scoped>
.modal {
    display: block;
    .modal-dialog {
        margin-top: 10rem;
    }
}
</style>