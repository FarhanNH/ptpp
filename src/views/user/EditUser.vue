<template>
  <v-container fluid>
    <v-alert
      id="alert"
      type="warning"
      icon="mdi-warning-outline"
      dismissible
      v-show="alert.Visible"
      v-text="alert.Message"
      transition="scale-transition"
    >
    </v-alert>
    <v-card class="pl-8" color="white">
      <v-row>
        <v-col cols="12">
          <h1>{{ title }}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-subheader>Name</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            outlined
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-subheader>Username</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-model="username"
            :error-messages="usernameErrors"
            outlined
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-subheader>Email</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            outlined
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-subheader>Role</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-select
            v-model="roleCode"
            :items="roleOption"
            :error-messages="roleErrors"
            placeholder="Pilih Role"
            outlined
            required
            @change="$v.roleCode.$touch()"
            @blur="$v.roleCode.$touch()"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-btn
            dark
            depressed
            outlined
            large
            color="primary"
            @click="back"
            class="my-4"
          >
            Kembali
          </v-btn>
        </v-col>
        <v-col cols="6" class="d-flex justify-end pr-12">
          <v-btn
            dark
            depressed
            large
            color="primary"
            class="my-4"
            @click="submit"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
      <ModalNotif
        :modalOn="modals.success"
        :decision="modals.decision"
        :urlback="modals.urlBack"
        @close="modals.success = false"
      ></ModalNotif>
    </v-card>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import Router from "@/tools/Router";
import ModalNotif from "@/components/Modals/ModalNotif.vue";
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(50) },
    username: { required, maxLength: maxLength(10) },
    email: { required, email },
    roleCode: { required },
  },
  components: { ModalNotif },
  data() {
    return {
      title: "",
      modals: {
        success: false,
        decision: "",
      },
      data: "",
      roleOption: [],
      name: "",
      username: "",
      email: "",
      roleCode: "",
      urlBack: "",
      alert: {
        Visible: false,
        Message: "",
      },
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.maxLength &&
        errors.push("Username must be at most 10 characters long");
      !this.$v.username.required && errors.push("Username is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    roleErrors() {
      const errors = [];
      if (!this.$v.roleCode.$dirty) return errors;
      !this.$v.roleCode.required && errors.push("Role is required");
      return errors;
    },
  },
  methods: {
    back() {
      Router.back();
    },
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.modals.success = true;
        this.modals.urlBack = this.urlBack;
        this.modals.decision = this.title;
      }
    },
    initRoleOption() {
      this.roleOption.push(
        {
          text: "SUPER USER",
          value: "superuser",
        },
        {
          text: "Auditor",
          value: "auditor",
        },
        {
          text: "Admin",
          value: "admin",
        }
      );
    },
  },
  beforeMount() {
    this.initRoleOption();
    this.data = JSON.parse(this.$route.params.items);
    // console.log(this.data);
    this.urlBack = this.data.urlBack;
    if (this.data.isAddItem) {
      this.title = "Tambah User";
    } else {
      this.title = "Edit User";
    this.name = this.data.name;
    this.username = this.data.username;
    this.email = this.data.email;
    this.roleCode = this.data.roleCode;
    }
  },
};
</script>

<style></style>
