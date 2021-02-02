<template>
  <ul class="navbar-nav ml-auto">    
   <li class="nav-item">     
     <router-link class="nav-link active" to="/conta">Olá {{ this.$store.state.user.firstname }}</router-link>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link" @click.prevent="logout">Sair</a>
    </li>
  </ul>
</template>

<script>



import { logoutMixin } from "@/mixins";

export default {
  mixins: [logoutMixin],
};
</script>

<style scoped>
</style>