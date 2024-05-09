<script setup>
const props = defineProps({
  show: Boolean, 
  name: String,
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="title">
          <slot name="header">Adicionar uma tarefa</slot>
        </div>

        <form id="app" @submit="createTarefa" action="" method="post">
          <input type="text" placeholder="Adicionar uma tarefa" v-model="tarefa" name="tarefa" id="tarefa"
            class="input-modal" required>
          <input type="date" placeholder="Data da conclusão" v-model="dateJob" name="data" id="data"
            class="input-modal" required>
          <div>
            <input type="submit" class="btn btn-salvar" value="Salvar">
            <input type="button" class="btn btn-cancelar" @click="$emit('close')" value="Cancelar">
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: 'TarefaForm',
  data() {
    return {
      tarefa: '',
      dateJob: null,
      tarefas: null
    }
  },
  methods: {
    async getTarefas() {
      const req = await fetch('http://localhost:8888/tarefas')
      this.tarefas = await req.json()
    },

    async createTarefa(e) {
      e.preventDefault();
      const data = {
        name: this.tarefa,
        dateJob: this.dateJob
      }

      const dataJson = JSON.stringify(data)
      await fetch('http://localhost:8888/tarefas', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: dataJson
      })
      this.$emit('close')
      window.location.reload()
    }
  },
  mounted() {
    this.getTarefas()
  }
}
</script>

<style>

body {
  font-family: "Open Sans", sans-serif;
}
.footer {
  margin-top: 15px;
}

.title {
  color: #ED1164;
}

.btn {
  padding: 15px 40px;
  border-radius: 15px;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-top: 20px;
}

.btn-salvar {
  background-color: #ED1164;
  color: #fff;
  font-weight: 600;;
}

.btn-cancelar {
  text-decoration: underline 1px;
  border: none;
  color: #91A3AD;
  background: #FFF;
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

@media (min-width: 700px) {
  .modal-container {
    width: 300px;
  }

  .btn {
    cursor: pointer;
  }
  
}
</style>
