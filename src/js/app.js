export default class Validator {
  constructor(name) {
    this.validateUsername(name);
  }

  validateUsername(name) {
    if (!/[^a-zA-Z0-9-_]/.test(name)
    && !/\d{4}/.test(name)
    && !/^[0-9-_]/.test(name)
    && /[^0-9-_]$/.test(name)) {
      this.name = name;
    } else {
      throw new Error('name is incorrect');
    }
  }
}
