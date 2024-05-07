<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <!-- <div class="modal-header"> -->
        <div class="">
          <slot name="header">Adicionar uma tarefa</slot>
        </div>

        <!-- <div class="modal-body"> -->
        <div class="">
          <input type="text" placeholder="Adicionar uma tarefa" name="tarefa" id="tarefa" class="input-modal">
          <input type="text" placeholder="Data da conclusão" name="data" id="data" class="input-modal">
        </div>


        <!-- <div class="modal-footer"> -->
        <div class="footer">
          <slot name="footer" >
            <button class="btn" @click="$emit('close')">Salvar</button>
            <button class="btn" @click="$emit('close')">Cancelar</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>

.footer {
  margin-top: 15px;
}

.btn {
  padding: 15px 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-left: 10px;
}

.input-modal {
  width: 100%;
  padding: 15px 20px;
  margin: 4px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}

.btn-tarefa {
  border-radius: 6px;
  margin-bottom: 5px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}


.modal-container {
  width: 80%;
  margin: auto;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 10px;
  text-align: center;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
