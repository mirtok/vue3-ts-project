<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#" @click="pageSizes">
                <img src="../assets/logo.png" alt="" />
            </a>

            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav ml-auto">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >添加</a
                        >
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#" @click="addOption"
                                >添加记事本</a
                            >
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">测试选项卡</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">全部</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({
    props: {
        msg: String
    },
    emits: {
        onHasPage: {
            type: Function
        }
    },
    methods:{
        addOption(): void{
           this.$store.commit('changeModelShow', true)
        }
    }
})
export default class HelloWorld extends Vue {
    msg!: string
    pageSizes(): void {
        this.$emit('onHasPage')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
    width: 100%;
    padding: 0rem 1.5rem;
    .navbar-brand {
        img {
            width: 50px;
            height: 50px;
        }
    }
    .nav-item {
        font-size: 1.1rem;
        .bg-secondary {
            padding: 0.2rem 0.6rem;
        }
    }
}
</style>
