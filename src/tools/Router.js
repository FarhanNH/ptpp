import router from '../router';
export default {
  redirect(url) {
    router.replace(url);
  },
  back() {
    history.back();
  },
  redirectParam(name, param) {
    router.push({
      name: name,
      params: {
        items: param,
      },
    });
  },
};
