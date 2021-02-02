export default class UserService {

    constructor(http) {
        this._http = http;
    }

    getUser(id) {
        return this._http.get(`660/users/${id}`)
            .then((response) => {                
                return response.data;
            }, (err) => {
                throw new Error(err);
            });
    }

}