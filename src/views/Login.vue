<template>
  <div style="background-color: #f7f6f2; height: 100%">
    <v-card class="center pa-6" width="500" max-width="500">
      <v-card-title class="justify-center mb-4">
        <h1 style="color: #4b6587; font-size: 3rem">LOGIN</h1>
      </v-card-title>
      <v-text-field color="#4b6587" v-model="username" label="Username" outlined></v-text-field>
      <v-text-field color="#4b6587" v-model="password" label="Password" outlined></v-text-field>
      <div class="d-flex justify-center">
        <v-btn color="#4b6587" dark depressed large :loading="isBusy" @click="login">
          <h3>Login</h3>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import Functions from '@/tools/Functions';
import Router from '@/tools/Router';

export default {
  data() {
    return {
      username: '',
      password: '',
      isBusy: false,
    };
  },
  methods: {
    login() {
      this.isBusy = true;
      console.log(this.username);
      console.log(this.password);
      let token = 'INI TOKEN';
      Functions.SaveSessionCustom('token', token);
      Functions.SaveSessionCustom('isLogin', true);
      Router.redirectParam('Dashboard');
    },
  },
};
</script>

<style>
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
