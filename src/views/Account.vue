<template>
  <div class="container">
      <h1>Conta</h1>
    <div class="shadow p-3 mb-5 bg-white rounded">
      <form @submit.prevent="send">
        <div class="form-group">
          <input
            required
            placeholder="Nome"
            type="text"
            class="form-control"
            v-model="user.firstname"
          />
        </div>
        <div class="form-group">
          <input
            required
            placeholder="Sobrenome"
            type="text"
            class="form-control"
            v-model="user.lastname"
          />
        </div>
        <div class="form-group">
          <input
            required
            readonly
            placeholder="E-mail"
            type="email"
            class="form-control"
            v-model="user.email"
          />
        </div>
        <button class="btn btn-success" type="submit">Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
import User from "../models/user";

export default {
  data() {
    return {
      id: this.$store.state.auth.id,
      user: new User('', ''),
    };
  },

  created() {

    this.$http
        .get(`660/users/${this.id}`)
        .then((response) => {
            this.user = response.data;
        },(err) => { console.log(err) });
  },

  methods: {
    //   save() {
    //       this.$http.
    //   }
  }
};
</script>

<style scoped>
</style>