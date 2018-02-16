import _ from 'lodash';

class ValidateUtil {
  static validateEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }

  static notEmpty(value) {
    return !_.isEmpty(value);
  }

  static validatePassword(value) {
    // Minimum eight characters, at least one letter and one number:
    // https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(value);
  }

  static validatePasswordConfirm(value, original) {
    if (value && original) {
      return value === original;
    }
    return false;
  }
}

module.exports = ValidateUtil;
