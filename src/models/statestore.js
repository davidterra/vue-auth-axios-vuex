export default class StateStore {

    constructor(authService, userService) {
        this._authService = authService;
        this._userService = userService;
    }

    getState(user) {

        this._authService.getAuthorization(user)
            .then(auth => {

                this._userService.getUser(auth.id)
                    .then(user => {
                        return { token: auth.token, id: auth.id, email: auth.email, firstname = user.firstname }
                    })

            })
            .catch(err => { throw new Error(err) })
    }

}
