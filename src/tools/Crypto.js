import CryptoJS from 'crypto-js';

var key = 'farhan-project-ptpp';

export default {
  encryptData: function (data) {
    try {
      if (data == null) {
        return null;
      } else {
        let ciphertext = CryptoJS.AES.encrypt(data, key).toString();
        return ciphertext;
      }
    } catch (error) {
      return null;
    }
  },
  decrytData: function (data) {
    try {
      if (data == null) {
        return null;
      } else {
        let bytes = CryptoJS.AES.decrypt(data, key);
        let originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText;
      }
    } catch (error) {
      //
      return null;
    }
  },
};
