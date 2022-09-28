import moment from 'moment';
import $ from 'jquery';
import Vue from 'vue';
import Crypto from './Crypto';
import Router from './Router';

export default {
  SaveSessionCustom(key, value) {
    let ToJson = JSON.stringify(value);
    let encrypt = Crypto.encryptData(ToJson);
    return localStorage.setItem(key, encrypt);
  },
  ReadSessionCustom(key) {
    let read = localStorage.getItem(key);
    if (read == 'null' || read == null) {
      return null;
    } else {
      let dencrypt = Crypto.decrytData(read);
      if (dencrypt == '' || dencrypt == undefined || dencrypt == null) {
        Vue.notify({
          group: 'message',
          title: 'Error ',
          text: key,
          type: 'error',
          duration: 5000,
        });
        localStorage.clear();
        this.ToPage('login');
        return null;
      } else {
        let JsonToData = JSON.parse(dencrypt);
        return JsonToData;
      }
    }

    // let read = localStorage.getItem(key);
    // if (read == null) {
    //   return null;
    // }
    // return read;

    // if (read == 'null') {
    //   return null;
    // } else {
    //   let dencrypt = Crypto.dencrytion(read);
    //   if (dencrypt == '' || dencrypt == undefined) {
    //     return null;
    //   } else {
    //     let JsonToData = JSON.parse(dencrypt);
    //     return JsonToData;
    //   }
    // }
  },
  RemoveSessionCustom(key) {
    let read = localStorage.getItem(key);
    if (read == 'null') {
      return false;
    } else {
      localStorage.removeItem(key);
      return true;
    }
  },
  ToPage(page) {
    this.SaveSessionCustom('page', page);
    try {
      return Router.redirect(page);
    } catch (error) {
      return error;
    }
  },
  GetMonthFromNow(months) {
    return moment().clone().add(months, 'months').toDate();
  },
  FormatDate(date, format) {
    return moment(date).lang('id').format(format);
  },
  GetCurrentYear() {
    return moment().locale('id').startOf('year').format('YYYY');
  },
  ShowElement(val) {
    $(val).css('display', 'block');
  },
  HideElement(val) {
    $(val).css('display', 'none');
  },
};
