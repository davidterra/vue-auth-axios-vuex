<template>
  <div class="container">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <span class="alert alert-danger" v-if="error">{{ error }}</span>
      <form @submit.prevent="signin">
        <div class="form-group">
          <input
            required
            placeholder="E-mail"
            type="email"
            class="form-control"
            v-model="user.email"
          />
        </div>
        <div class="form-group">
          <input
            required
            placeholder="Senha"
            type="password"
            class="form-control"
            v-model="user.password"
          />
        </div>

        <button type="submit" class="btn btn-primary mr-2">Entrar</button>
        <router-link :to="{ name: 'signup' }" custom v-slot="{ href, navigate }"
          ><button
            :href="href"
            @click="navigate"
            class="btn btn-success brn-block"
          >
            Cadastre-se
          </button></router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      error: "",
    };
  },

  methods: {
    signin() {
      this.$store
        .dispatch("signin", this.user)
        .then(() => this.$router.push({ name: "account" }))
        .catch((err) => {          
             this.error = err.message;                    
        });
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 25px;
}
</style>