<template>
        <div class="modal-mask">
            <div class="modal-container">
                <slot name="header"></slot>
                <span>
                    <slot name="content"></slot>
                    <i class="closeModalBtn fas fa-times" aria-hidden="true" @click="closeBox"></i>
                </span>
            </div>
        </div>
</template>

<script>
export default {
    name:'ModalBox',
    methods:{
        closeBox(){
            this.$store.state.showModal = false
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex; justify-content:center; align-items:center;
    .modal-container {
    width: 300px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    }
}

</style>