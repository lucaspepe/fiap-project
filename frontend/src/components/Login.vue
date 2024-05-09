<template>
        <div class="login-content">
            <div class="logo-img">
                <img src="../assets/fiap-logo.svg" id="img-logo" alt="Logo fiap">
            </div>
            <form id="app" @submit="login" action="" method="post" class="login-inputs">
                <div class="input-container">
                    <img src="../assets/mail.svg" alt="Icon email" class="icon-input">
                    <div class="group">
                        <input type="text" v-model="email" required>
                        <p v-if="error.length">
                        <p class="error-message">{{ error }}</p>
                        </p>
                        <p v-if="errorCredentials.length">
                        <p class="error-message">{{ errorCredentials }}</p>
                        </p>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                    </div>
                </div>
                <div class="input-container">
                    <img src="../assets/lock.svg" alt="Icon lock" class="icon-input">
                    <div class="group">
                        <input type="password" v-model="password" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Senha</label>
                    </div>
                </div>
                <input type="submit" class="btn btn-login" value="Login">
            </form>
        </div>
</template>
<script>
export default {
    name: "Login",
    data() {
        return {
            error: '',
            errorCredentials: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async login(e) {
            e.preventDefault();
            this.validEmail()
            if (!this.validEmail()) {
                this.error = 'email deve conter @verzel.com.br';
                return false
            }
            const data = {
                email: this.email,
                password: this.password
            }

            const dataJson = JSON.stringify(data)
            const req = await fetch('http://localhost:8888/login', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: dataJson
            })
           
            if(req.status === 401) {
                this.errorCredentials = 'Login invalido'
                return false
            }

            const signIn = await req.json()
            localStorage.setItem('token', signIn.token)
            localStorage.setItem('user', signIn.user.email)
            this.$router.push("/");
            
        },
        validEmail() {
            return this.email.includes("@verzel.com.br") ? true : false
        }
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

.error-message {
    margin: 0px;
    padding: 0px;
    color: red;
    font-size: small;
}

.icon-input {
    margin: 0px 15px 30px 0px;
    width: 20px;
}

.input-container {
    display: flex;
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

@media (min-width: 700px) {
    .login-content {
        display: flex;
        align-items: center;
    }   

    #img-logo {
        width: 300px;
        margin: 0px;
    }

    .login-inputs {
        border: 1px solid #ED1164;
        padding: 40px;
        border-radius: 30px;
        margin-left: 5rem;
    }

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
