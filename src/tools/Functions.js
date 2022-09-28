import moment from 'moment';
import $ from 'jquery';

export default {
  SaveSessionCustom(key, value) {
    // let ToJson = JSON.stringify(value);
    // let encrypt = Crypto.encryption(ToJson);
    return localStorage.setItem(key, value);
  },
  ReadSessionCustom(key) {
    let read = localStorage.getItem(key);
    if (read == null) {
      return null;
    }
    return read;
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
