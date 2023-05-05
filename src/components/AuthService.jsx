class AuthService {
  static authenticate(email, password) {
    return fetch('/data/users.json')
      .then((response) => response.json())
      .then((data) => {
        const user = data.users.find(
          (user) => email === user.email && password === user.password
        );
        if (user) {
          return true;
        } else {
          return false;
        }
      });
  }
}

export default AuthService;
