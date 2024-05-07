<script setup>
import Modal from './ModalCreateTarefa.vue'
import { ref } from 'vue'
const showModal = ref(false)
</script>

<template>
    <header>
        <div class="header-fiap">
            <img src="../assets/fiap-logo.svg" class="logo-fiap-small" alt="Logo fiap">
            <div>
                <p>Olá, Lucas</p>
            </div>
        </div>
        <hr>
    </header>
    <div>
        <div class="tarefa-filter">
            <p>Tarefas</p>
            <div>Img</div>
        </div>
    </div>
    <div class="add-tarefa">
        <button id="btn-add-tarefa" @click="showModal = true">+ Adicionar uma tarefa</button>
        <Teleport to="body">
            <modal :show="showModal" @close="showModal = false">
                <template #header>
                    <h3>Adicionar uma tarefa</h3>
                </template>
            </modal>
        </Teleport>
    </div>
</template>
<style scoped>
body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #FFF
}

header {
    min-height: 50px;
}


.header-fiap {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ED1164;
}

.logo-fiap-small {
    width: 5rem;
}

hr {
    border: 0.1rem solid rgb(241, 241, 241);
}

.tarefa-filter {
    background-color: rgb(226, 226, 226);
    border-radius: 8px;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ED1164;
    height: 3rem;
    width: 92%;
    margin: 10px auto;
}

.add-tarefa {
    position: fixed;
    bottom: 0;
    color: #ED1164;
    font-weight: 900;
    margin-bottom: 10px;
    width: 96%;
}

#btn-add-tarefa {
    border-radius: 10px;
    padding: 10px 0px;
    border: 0px;
    border: 1px solid #ED1164;
    background-color: #FFF;
    width: 100%;
    color: #ED1164;
    font-weight: 900;
    text-align: left;
}
</style>
