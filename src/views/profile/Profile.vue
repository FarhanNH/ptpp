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
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  :counter="nameCounter"
                  solo
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
                  :counter="usernameCounter"
                  solo
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
                  solo
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
                <v-text-field
                  v-model="role"
                  :error-messages="roleErrors"
                  solo
                  @input="$v.role.$touch()"
                  @blur="$v.role.$touch()"
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mb-2">
              <v-col>
                <v-btn
                  dark
                  depressed
                  outlined
                  large
                  color="primary"
                  @click="clear"
                >
                  clear
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-end pr-8">
                <v-btn
                  class="mr-4"
                  dark
                  depressed
                  large
                  color="primary"
                  @click="submit"
                >
                  submit
                </v-btn>
              </v-col>
            </v-row>
          </form>
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
import ModalNotif from "@/components/Modals/ModalNotif.vue";
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(50) },
    username: { required, maxLength: maxLength(10) },
    email: { required, email },
    role: { required },
  },
  components: { ModalNotif },
  data() {
    return {
      title: "Profile",
      subtitle: "Edit Profile",
      name: "",
      nameCounter: 50,
      username: "",
      usernameCounter: 10,
      email: "",
      role: "",
      roleCode: "",
      modals: {
        success: false,
        decision: "",
      },
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
      if (!this.$v.role.$dirty) return errors;
      !this.$v.role.required && errors.push("Role is required");
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.modals.success = true;
        this.modals.decision = "Edit Profile";
      } else {
        this.alert.Visible = true;
        this.alert.Message = "Please pay attention to your form";
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.username = "";
      this.email = "";
    },
    dummy() {
      this.name = "User Name";
      this.username = "username";
      this.email = "superemail@email.com";
      this.role = "SUPER USER";
      this.roleCode = "superuser";
    },
  },
  beforeMount() {
    this.dummy();
  },
};
</script>

<style></style>
