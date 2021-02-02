<template>
  <div class="container">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <form @submit.prevent="send">
        <div class="form-group">
          <input required
            placeholder="Nome"
            type="text"
            class="form-control"
            v-model="user.firstname"
          />
        </div>
        <div class="form-group">
          <input required
            placeholder="Sobrenome"
            type="text"
            class="form-control"
            v-model="user.lastname"
          />
        </div>
        <div class="form-group">
          <input required
            placeholder="E-mail"
            type="email"
            class="form-control"
            v-model="user.email"
          />
        </div>
        <div class="form-group">
          <input required
            placeholder="Senha"
            type="password"
            class="form-control"
            v-model="user.password"
          />
        </div>
        <button class="btn btn-primary" type="submit">Cadastre-se</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    send() {
      this.$http
        .post("register", this.user)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 25px;
}
</style>