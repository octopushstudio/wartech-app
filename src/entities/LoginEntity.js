let Login = {
  email: '',
  password: '',

  getEmail() {
    return this.email;
  },
  setEmail(value) {
    this.email = value;
  },
};

module.exports = Login;
