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
    <v-card class="px-8" color="white">
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
              <v-col cols="2">
                <v-subheader>No. PPTP</v-subheader>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="noPPTP" solo outlined></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-subheader>Area / Lokasi Temuan</v-subheader>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="area" solo outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2">
                <v-subheader>Tanggal</v-subheader>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="tanggal" solo outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2">
                <v-subheader>Kepada / Fungsi</v-subheader>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="kepada" solo outlined></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-subheader>Dari / Fungsi</v-subheader>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="dari" solo outlined></v-text-field>
              </v-col>
            </v-row>
            <!-- FORM AUDITOR 1 -->
            <FormAuditor1
              :selected="selected"
              :category="category"
              :isDisposisi="isDisposisi"
            />
            <!-- FORM PENERIMA PPTP -->
            <FormPenerimaPPTP />
            <!-- FORM AUDITOR 1 -->
            <FormAuditor2 />
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
import { required, maxLength } from "vuelidate/lib/validators";
import ModalNotif from "@/components/Modals/ModalNotif.vue";
import FormAuditor1 from "../../components/pptp/FormAuditor1.vue";
import FormPenerimaPPTP from "../../components/pptp/FormPenerimaPPTP.vue";
import FormAuditor2 from "../../components/pptp/FormAuditor2.vue";
export default {
  mixins: [validationMixin],
  validations: {
    noPPTP: { required, maxLength: maxLength(50) },
    tanggal: { required, maxLength: maxLength(10) },
    area: { required },
    kepada: { required },
    dari: { required },
  },
  components: { ModalNotif, FormAuditor1, FormPenerimaPPTP, FormAuditor2 },
  data() {
    return {
      title: "Permintaan Tindakan Perbaikan dan Pencegahan (PPTP)",
      subtitle: "Input PPTP",
      noPPTP: "",
      tanggal: "",
      area: "",
      kepada: "",
      dari: "",
      selected: [],
      category: "urgent",
      isDisposisi: false,
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
    noPPTPErrors() {
      const errors = [];
      if (!this.$v.noPPTP.$dirty) return errors;
      !this.$v.noPPTP.maxLength &&
        errors.push("PPTP Number must be at most 10 characters long");
      !this.$v.noPPTP.required && errors.push("PPTP Number is required.");
      return errors;
    },
    tanggalErrors() {
      const errors = [];
      if (!this.$v.tanggal.$dirty) return errors;
      !this.$v.tanggal.maxLength &&
        errors.push("Date must be at most 10 characters long");
      !this.$v.tanggal.required && errors.push("Date is required.");
      return errors;
    },
    areaErrors() {
      const errors = [];
      if (!this.$v.area.$dirty) return errors;
      !this.$v.area.required && errors.push("Area is required");
      return errors;
    },
    kepadaErrors() {
      const errors = [];
      if (!this.$v.kepada.$dirty) return errors;
      !this.$v.kepada.required && errors.push("Receiver is required");
      return errors;
    },
    dariErrors() {
      const errors = [];
      if (!this.$v.dari.$dirty) return errors;
      !this.$v.dari.required && errors.push("Sender is required");
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      // if (!this.$v.$invalid) {
      //   this.modals.success = true;
      //   this.modals.decision = "Input PPTP";
      // } else {
      //   this.alert.Visible = true;
      //   this.alert.Message = "Please pay attention to your form";
      // }
      this.modals.success = true;
      this.modals.decision = "Input PPTP";
    },
    clear() {
      this.$v.$reset();
      this.noPPTP = "";
      this.tanggal = "";
      this.kepada = "";
    },
    dummy() {
      this.noPPTP = "User Name";
      this.tanggal = "tanggal";
      this.kepada = "superemail@kepada.com";
    },
  },
  beforeMount() {
    // this.dummy();
  },
};
</script>

<style></style>
