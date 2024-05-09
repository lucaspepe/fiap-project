<script setup>
import Modal from './ModalCreateTarefa.vue'
import moment from 'moment';
import { ref } from 'vue'
const showModal = ref(false)
</script>

<template>
    <div id="content">
        <header id="header">
            <div class="header-fiap">
                <img src="../assets/fiap-logo.svg" class="logo-fiap-small" alt="Logo fiap">
                <div class="add-tarefa">
                    <div>
                        <button id="btn-add-tarefa" @click="showModal = true">
                            <p class="p-tarefa">+ Adicionar uma tarefa</p>
                        </button>
                    </div>
                    <Teleport to="body">
                        <modal :show="showModal" @close="showModal = false">
                            <template #header>
                                <h3>Adicionar uma tarefa</h3>
                            </template>
                        </modal>
                    </Teleport>
                </div>
                <div class="user-info">
                    <p id="user-name"> Olá, {{ user }}</p>
                    <input type="button" @click="logout" class="exit-button">
                </div>
            </div>
            <hr>
        </header>
        <div>
            <div>
                <div class="tarefa-filter">
                    <p>Tarefas</p>
                    <div class="filter">
                        <img src="../assets/filtro.svg" alt="Icon Exit" class="filter-mobile">
                        <div class="filter-params">
                            <div>
                                <label class="label-filter">Data prevista de conclusão: </label>
                                <input type="date" class="input-filter">
                            </div>
                            <div>
                                <label class="label-filter">até: </label>
                                <input type="date" class="input-filter">
                            </div>
                            <div>
                                <label class="label-filter">status</label>
                                <select name="" id="" class="input-filter"></select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div v-if="tarefas.length">
                    <div v-for="tarefa in tarefas">
                        <div class="">
                            <div v-if="tarefa.conclusionAt" class="tarefa-row">
                                <input type="button" class="select-tarefa conclusion-tarefa" value=""
                                    @click="finishTarefa(tarefa.id)">
                                <div>
                                    <h4 class="conclusion-at">{{ tarefa.name }}</h4>
                                    <p class="finish-date">Concluída em: {{ moment(tarefa.conclusionAt).format('D/MM/YYYY')
                                        }}
                                    </p>
                                </div>
                            </div>
                            <div v-else class="tarefa-row">
                                <input type="button" class="select-tarefa" value="" @click="finishTarefa(tarefa.id)">
                                <div>
                                    <h4>{{ tarefa.name }}</h4>
                                    <p class="finish-date">Conclusão em: {{ moment(tarefa.dateJob).format('D/MM/YYYY') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="not-tarefas">
                    <p>Você ainda não possui tarefas cadastradas!</p>
                </div>
            </div>

        </div>
    </div>
    <div class="footer-desktop">
        <p>© Copyright 2021. Todos os direitos reservados.</p>
    </div>
</template>
<script>
const showModal = ref(false)
export default {
    name: 'TarefasList',
    data() {
        return {
            user: '',
            tarefas: []
        }
    },
    methods: {
        async getTarefas() {
            const req = await fetch('http://localhost:8888/tarefas')
            this.tarefas = await req.json()
        },
        async finishTarefa(id) {
            const data = { id }
            const dataJson = JSON.stringify(data)
            await fetch('http://localhost:8888/tarefas', {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: dataJson
            })
            window.location.reload()
        },
        getUser() {
            this.user = localStorage.getItem('user').replace('@verzel.com.br', '')
        },
        logout() {
            localStorage.removeItem('token')
            this.$router.push("/login");
        }
    },
    mounted() {
        this.getUser()
        this.getTarefas()
    },
}
</script>


<style scoped>
h4,
p {
    padding: 0px;
    margin: 0px;
}

.logo-fiap-small {
    width: 90px;
}

.not-tarefas{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: 900;
    color: #ED1164;
    text-align: center;
}

.conclusion-tarefa {
    background-color: #575757;
    background-image: url('../assets/icons-ok.svg');
}

.exit-button {
    border: none;
    background-color: #fff;
    background-image: url('../assets/exit_transparent.svg');
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.user-info {
    display: flex;
    align-items: center;
}

.conclusion-at {
    text-decoration: line-through;
}

#user-name {
    margin-right: 10px;
    font-size: 12px;
}


.finish-date {
    margin-top: 8px;
    font-size: 12px;
}

.plus-icon {
    width: 11px;
}

.footer-desktop {
    display: none;
}

.filter-params {
    display: none;
}

.select-tarefa {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #575757;
    margin-right: 10px;
    cursor: pointer;
}

.p-tarefa {
    margin-left: 10px;
}

.tarefa-row {
    background-color: #91A3AD26;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    margin-top: 10px;
}


.header-fiap {
    padding: 10px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ED1164;
}

hr {
    border: 0.1rem solid rgb(241, 241, 241);
}

.tarefa-filter {
    background-color: #91A3AD26;
    border-radius: 8px;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ED1164;
    height: 3rem;
    margin: 10px auto;
}

.add-tarefa {
    position: fixed;
    bottom: 0;
    color: #ED1164;
    font-weight: 900;
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
}

#btn-add-tarefa {
    padding: 10px;
    border-radius: 10px;
    border: 0px;
    border: 1px solid #ed116570;
    background-color: #91A3AD26;
    width: 92%;
    color: #ED1164;
    font-weight: 900;
    text-align: left;
}

@media (min-width: 700px) {
    #content {
        max-width: 1024px;
        margin: 0 auto;
        background: white;
        padding: 10px;
    }

    .add-tarefa {
        display: block;
        position: relative;
        width: 250px;
    }
    .not-tarefas{
        font-size: 16px;
        width: 600px;
    }

    #btn-add-tarefa {
        background-color: #ED1164;
        color: #fff;
        border: none;
        cursor: pointer;
    }


    hr {
        margin-top: 15px;
        height: 1px;
        border: none;
        background-color: rgb(216, 216, 216)
    }

    .footer-desktop {
        display: flex;
        position: fixed;
        bottom: 0;
        color: #ED1164;
        font-weight: 100;
        padding: 5px;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: #91A3AD26;
    }

    .filter-mobile {
        display: none;
    }

    .filter-params {
        display: flex;
    }

    .label-filter {
        font-size: 10px;
        padding: 0px 5px 0px 10px;
    }

    .input-filter {
        width: 100px;
        border: 1px solid #fc5c99dc;
        border-radius: 6px;
        color: #ED1164;
        padding: 2px;
    }

    .exit-button {
        border: none;
        background-color: #fff;
        background-image: url('../assets/exit.svg');
        width: 30px;
        height: 30px;
    }
}
</style>
