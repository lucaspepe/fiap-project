<template>
    <div class="login-content">
        <div>
            <img src="../assets/fiap-logo.svg" id="img-logo" alt="Logo fiap">
        </div>
        <form
            id="app"
            @submit="goToTarefas"
            action=""
            method="post"
            >
            <div class="group">
                <input type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Email</label>
            </div>
            <div class="group">
                <input type="password" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Senha</label>
            </div>
            <!-- <button type="button" class="btn btn-login" @click="goToTarefas">Login</button>  -->
            <input type="submit" class="btn btn-login" value="Login">
        </form>

        <!-- <div>
            <input type="email" placeholder="example@verzel.com.br" name="Email" id="email" class="input-login">
        </div>
        <div>
            <input type="password" placeholder="Senha" name="Email" id="password" class="input-login">
        </div>
        <button type="button" class="btn btn-login" @click="goToTarefas">Login</button> -->
    </div>

</template>
<script>
export default {
    name: "Login",
    methods: {
        goToTarefas() {
            console.log('heii')
            this.$router.push("/tarefas");
        },
    },
};
</script>

<style scoped>
input,
img,
button {
    display: block;
}

button:hover {
    cursor: pointer
}

.input-login {
    margin-bottom: 1.5rem;
    outline: none;
}

.login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


#img-logo {
    margin-bottom: 3rem;
}

.btn {
    border-radius: 10px;
    border: 0px;
    background-color: #ED1164;
    color: #FFF;
}

.btn-login {
    margin-top: 1.5rem;
    padding: 10px;
    width: 90%;
    border: none;
}

/* form starting stylings ------------------------------- */
.group {
    position: relative;
    margin-bottom: 2rem;
}

input {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    border-bottom: 1px solid #757575;
}

input:focus {
    outline: none;
}

/* LABEL ======================================= */
label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

input:focus~label,
input:valid~label {
    top: -20px;
    font-size: 14px;
    color: #ED1164;
}

/* BOTTOM BARS ================================= */
.bar {
    position: relative;
    display: block;
    /* width: 300px; */
}

.bar:before,
.bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #ED1164;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

.bar:before {
    left: 50%;
}

.bar:after {
    right: 50%;
}

/* active state */
input:focus~.bar:before,
input:focus~.bar:after {
    width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
}

input:focus~.highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
    from {
        background: #ED1164;
    }

    to {
        width: 0;
        background: transparent;
    }
}

@-moz-keyframes inputHighlighter {
    from {
        background: #ED1164;
    }

    to {
        width: 0;
        background: transparent;
    }
}

@keyframes inputHighlighter {
    from {
        background: #ED1164;
    }

    to {
        width: 0;
        background: transparent;
    }
}
</style>
