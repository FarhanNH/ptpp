<template>
  <v-container fluid>
    <v-card class="pl-8" color="white">
      <v-row>
        <v-col cols="12">
          <h1>{{ title }}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3>{{ subtitle }}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <form>
            <v-row>
              <v-col cols="1">
                <v-subheader>Name</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1">
                <v-subheader>Email</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field v-model="email" :error-messages="emailErrors" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1">
                <v-subheader>Item</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Please select" required @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9" class="ml-3">
                <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1">
                <v-subheader>Description</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-textarea v-model="desc" :error-messages="descErrors" :counter="50" required @change="$v.desc.$touch()" @blur="$v.desc.$touch()"></v-textarea>
              </v-col>
            </v-row>
            <v-row class="mb-2">
              <v-col>
                <v-btn @click="clear"> clear </v-btn>
              </v-col>
              <v-col class="d-flex justify-end pr-8">
                <v-btn class="mr-4" @click="submit"> submit </v-btn>
              </v-col>
            </v-row>
          </form>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
    desc: { required, maxLength: maxLength(50) },
  },
  data() {
    return {
      title: 'Halaman 1',
      subtitle: 'Ini Halaman 1',
      name: '',
      email: '',
      select: null,
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      checkbox: false,
      desc: '',
    };
  },
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push('You must agree to continue!');
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push('Item is required');
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long');
      !this.$v.name.required && errors.push('Name is required.');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
    descErrors() {
      const errors = [];
      if (!this.$v.desc.$dirty) return errors;
      !this.$v.desc.maxLength && errors.push('Description must be at most 50 characters long');
      !this.$v.desc.required && errors.push('Description is required.');
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.email = '';
      this.select = null;
      this.checkbox = false;
      this.desc = '';
    },
  },
};
</script>

<style></style>
