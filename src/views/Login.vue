<template>
  <div style="background-color: #f7f6f2; height: 100%">
    <div class="notif-alert">
      <v-alert id="alert" type="error" dismissible v-model="alert.Visible" transition="scale-transition"> {{ alert.Message }} </v-alert>
    </div>
    <v-card class="center pa-6" width="500" max-width="500">
      <v-card-title class="justify-center mb-4">
        <h1 style="color: #4b6587; font-size: 3rem">LOGIN</h1>
      </v-card-title>
      <v-text-field color="#4b6587" v-model="username" label="Username" outlined single-line required :error-messages="usernameErrors" @input="$v.username.$touch()" @blur="$v.username.$touch()"></v-text-field>
      <v-text-field
        color="#4b6587"
        v-model="password"
        label="Password"
        outlined
        single-line
        required
        :error-messages="passwordErrors"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPass ? 'text' : 'password'"
        @click:append="showPass = !showPass"
      ></v-text-field>
      <div class="d-flex justify-center">
        <v-btn color="#4b6587" dark depressed large :loading="isBusy" @click="login">
          <h3>Login</h3>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import Functions from '@/tools/Functions';
import Router from '@/tools/Router';

export default {
  mixins: [validationMixin],
  validations: {
    username: { required },
    password: { required },
  },
  data() {
    return {
      username: '',
      password: '',
      isBusy: false,
      showPass: false,
      alert: {
        Visible: false,
        Message: '',
      },
      listUserDummy: [],
    };
  },
  methods: {
    login() {
      this.$v.$touch();
      if (!this.$v.invalid) {
        this.isBusy = true;
        let token = {};
        let valid = true;
        let i = 0;
        for (i; i < this.listUserDummy.length; i++) {
          if (this.username.toUpperCase() == this.listUserDummy[i].username) {
            console.log(this.listUserDummy[i].username);
            if (this.password.toUpperCase() != this.listUserDummy[i].password) {
              valid = false;
              this.alert.Visible = true;
              this.alert.Message = 'Username / Password Tidak Valid';
              break;
            }
            break;
          }
        }
        console.log(i);
        if (i == 4) {
          valid = false;
          this.alert.Visible = true;
          this.alert.Message = 'Username / Password Tidak Valid';
        }
        if (valid) {
          this.isBusy = false;
          Functions.SaveSessionCustom('token', token);
          Functions.SaveSessionCustom('isLogin', true);
          Router.redirectParam('Dashboard');
        } else {
          this.isBusy = false;
        }
      }
    },
  },
  computed: {
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push('Username is required.');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push('Password is required.');
      return errors;
    },
  },
  mounted() {
    this.listUserDummy.push(
      {
        username: 'AUDITOR',
        password: 'AUDITOR',
        role: 'AUDITOR',
      },
      {
        username: 'ADMIN',
        password: 'ADMIN',
        role: 'ADMIN',
      },
      {
        username: 'APPROVER',
        password: 'APPROVER',
        role: 'APPROVER',
      },
      {
        username: 'SUPERUSER',
        password: 'SUPERUSER',
        role: 'SUPERUSER',
      }
    );
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
.notif-alert {
  width: 500px;
  max-width: 500px;
  margin: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
