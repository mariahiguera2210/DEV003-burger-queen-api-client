class AuthService {
  static authenticate(email, password) {
    return new Promise((resolve, reject) => {
      // lógica de autenticación
      if (email === "maria@burgerqueen.com" && password === "123456") {
        resolve();
      } else {
        reject(new Error("Credenciales Incorrectas"));
      }
    });
  }
}

export default AuthService;