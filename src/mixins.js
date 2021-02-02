export const logoutMixin = {
    methods: {
        logout() {
            this.$store.commit('LOGOUT_USER');
            this.$router.push({ name: 'home' });
        }
    }
}
