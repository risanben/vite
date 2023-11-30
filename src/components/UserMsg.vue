<template>
    <Transition>
        <section :class="msg.type" v-if="isShown" class="user-msg">
            <h4>{{msg.txt}}</h4>
        </section>
    </Transition>
</template>

<script>
import { eventBus } from '@/services/eventBus.service.js'
export default {
    data(){
        return {
            msg: { txt: 'hello', type: 'success' },
            isShown: false,
        }
    },
    methods:{
        showMsg(msg){
            this.msg = msg
            this.isShown = true
            setTimeout(() => this.isShown = false, msg.timeout)
        }
    },
    created(){
        eventBus.on('user-msg', this.showMsg)
    }
}
</script>

<style lang="scss">
.user-msg{
    position: fixed;
    top: 85px;
    right: 32px;

    display: flex;
    align-items: center;

    width: 350px;
    background-color: rgb(134, 134, 134);
    padding: 10px;
    border-radius: 10px;;

}
.success {
    background-color: darkseagreen;
}
.fail {
    background-color: rgb(221, 129, 129);
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  translate: 150% 0;
}

</style>
