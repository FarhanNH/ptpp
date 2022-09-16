<template>
  <v-container fluid>
    <v-alert id="alert" type="warning" icon="mdi-warning-outline" dismissible v-show="alert.Visible" v-text="alert.Message" transition="scale-transition"> </v-alert>
    <v-card class="px-8" color="white">
      <v-row class="pt-2">
        <v-col cols="9">
          <h1>{{ title }}</h1>
        </v-col>
        <v-col cols="3">
          <v-img src="../../assets/images/logo-pertamina.png" lazy-src="../../assets/images/logo-pertamina.png" max-height="150" max-width="250" width="250" />
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
                <v-subheader>No. PTPP</v-subheader>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="noPPTP" outlined></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-subheader>Area / Lokasi Temuan</v-subheader>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="area" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2">
                <v-subheader>Tanggal</v-subheader>
              </v-col>
              <v-col cols="4">
                <v-menu v-model="dateMenu" :close-on-content-click="false" :nudge-right="40" offset-y transition="scale-transition" min-width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="formattedDate" append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" outlined></v-text-field>
                  </template>
                  <v-date-picker v-model="date" @input="dateMenu = false" :min="minDate"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2">
                <v-subheader>Kepada</v-subheader>
              </v-col>
              <v-col cols="4">
                <v-text-field v-model="to" outlined></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-subheader>Dari / Fungsi</v-subheader>
              </v-col>
              <v-col cols="4">
                <!-- <v-text-field v-model="from" outlined></v-text-field> -->
                <v-select :items="fromItems" item-text="text" item-value="value" label="Pilih" v-model="from" outlined></v-select>
              </v-col>
            </v-row>
            <!-- FORM AUDITOR 1 -->
            <FormAuditor1 :selected="selected" :category="category" :isDisposisi="isDisposisi" />
            <!-- FORM PENERIMA PTPP -->
            <FormPenerimaPPTP :data="penerimaPTPP" />
            <!-- FORM AUDITOR 1 -->
            <FormAuditor2 />
            <v-row class="mb-2">
              <v-col>
                <v-btn dark depressed outlined large color="primary" @click="clear"> clear </v-btn>
              </v-col>
              <v-col class="d-flex justify-end pr-8">
                <v-btn class="mr-4" dark depressed large color="primary" @click="submit"> submit </v-btn>
              </v-col>
            </v-row>
          </form>
        </v-col>
      </v-row>
      <ModalNotif :modalOn="modals.success" :decision="modals.decision" :urlback="modals.urlBack" @close="modals.success = false"></ModalNotif>
    </v-card>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';
import ModalNotif from '@/components/Modals/ModalNotif.vue';
import FormAuditor1 from '../../components/ptpp/FormAuditor1.vue';
import FormPenerimaPPTP from '../../components/ptpp/FormPenerimaPPTP.vue';
import FormAuditor2 from '../../components/ptpp/FormAuditor2.vue';
import Functions from '@/tools/Functions.js';
export default {
  mixins: [validationMixin],
  validations: {
    noPPTP: { required, maxLength: maxLength(50) },
    date: { required, maxLength: maxLength(10) },
    area: { required },
    to: { required },
    from: { required },
  },
  components: { ModalNotif, FormAuditor1, FormPenerimaPPTP, FormAuditor2 },
  data() {
    return {
      title: 'Permintaan Tindakan Perbaikan dan Pencegahan (PTPP)',
      subtitle: 'Input PTPP',
      noPPTP: '',
      minDate: Functions.GetMonthFromNow(-3).toISOString().substr(0, 10),
      date: Functions.GetMonthFromNow(-3).toISOString().substr(0, 10),
      dateMenu: false,
      area: '',
      to: '',
      from: '',
      fromItems: [],
      selected: [],
      category: 'urgent',
      penerimaPTPP: {},
      isDisposisi: false,
      modals: {
        success: false,
        decision: '',
      },
      alert: {
        Visible: false,
        Message: '',
      },
    };
  },
  computed: {
    noPPTPErrors() {
      const errors = [];
      if (!this.$v.noPPTP.$dirty) return errors;
      !this.$v.noPPTP.maxLength && errors.push('PTPP Number must be at most 10 characters long');
      !this.$v.noPPTP.required && errors.push('PTPP Number is required.');
      return errors;
    },
    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) return errors;
      !this.$v.date.maxLength && errors.push('Date must be at most 10 characters long');
      !this.$v.date.required && errors.push('Date is required.');
      return errors;
    },
    areaErrors() {
      const errors = [];
      if (!this.$v.area.$dirty) return errors;
      !this.$v.area.required && errors.push('Area is required');
      return errors;
    },
    toErrors() {
      const errors = [];
      if (!this.$v.to.$dirty) return errors;
      !this.$v.to.required && errors.push('Receiver is required');
      return errors;
    },
    fromErrors() {
      const errors = [];
      if (!this.$v.from.$dirty) return errors;
      !this.$v.from.required && errors.push('Sender is required');
      return errors;
    },
    formattedDate() {
      return Functions.FormatDate(this.date, 'DD/MM/yyyy');
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      // if (!this.$v.$invalid) {
      //   this.modals.success = true;
      //   this.modals.decision = "Input PTPP";
      // } else {
      //   this.alert.Visible = true;
      //   this.alert.Message = "Please pay attention to your form";
      // }
      this.modals.success = true;
      this.modals.decision = 'Input PTPP';
    },
    clear() {
      this.$v.$reset();
      this.noPPTP = '';
      this.date = '';
      this.to = '';
    },
    initFieldAuto() {
      let year = Functions.GetCurrentYear();
      this.noPPTP = '001/PND648000/' + year;
      this.area = 'Fuel Terminal Cikampek';
      this.to = 'Fuel Terminal Manager';
      this.fromItems.push(
        {
          text: 'SS & 6a',
          value: 'SS',
        },
        {
          text: 'QQ',
          value: 'QQ',
        },
        {
          text: 'RS',
          value: 'RS',
        },
        {
          text: 'Distribusi',
          value: 'DS',
        }
      );
    },
  },
  beforeMount() {
    this.initFieldAuto();
  },
};
</script>

<style></style>
