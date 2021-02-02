import jwt_decode from "jwt-decode";

const authUser = (token) => {
    var decoded = jwt_decode(token);

    return { id: decoded.sub, email: decoded.email };
};

export default class AuthService {

    constructor(http) {
        this._http = http;
    }

    getAuthorization(user) {
        return this._http.post('signin', user)
            .then((response) => {

                const attr = authUser(response.data.accessToken);

                var auth = {};                
                auth.token = response.data.accessToken;                
                auth.id = attr.id;
                auth.email = attr.email;
                
                return auth;
            }, () => { throw new Error('Usuário ou senha inválido(s).') });
    }

} 