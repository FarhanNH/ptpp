<template>
  <div class="mt-2">
    <v-row>
      <v-col cols="12">
        <h3 style="color: #01579b">Di isi oleh penerima PTPP</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3>TINDAK LANJUT</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4>PERBAIKAN / TINDAKAN SEMENTARA (jika ada) :</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea outlined></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>Tanggal Penerima PTPP</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-menu v-model="receiverDateMenu" :close-on-content-click="false" :nudge-right="40" offset-y transition="scale-transition" min-width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="formattedReceiverDate" append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" outlined></v-text-field>
          </template>
          <v-date-picker v-model="receiverDate" @input="receiverDateMenu = false" :min="minDate"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>Penanggung Jawab</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="responsiblePerson" outlined></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-subheader>Fuel Terminal Manager</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>Analisa Penyebab</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-textarea outlined></v-textarea>
      </v-col>
      <v-col cols="2">
        <v-subheader>Tindakan Perbaikan dan Pencegahan</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-textarea outlined></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>PIC</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field outlined></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-subheader>Waktu Pelaksanaan</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field outlined></v-text-field>
        <!-- <v-menu v-model="executionDateMenu" :close-on-content-click="false" :nudge-right="40" offset-y transition="scale-transition" min-width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="formattedExecutionDate" append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" outlined></v-text-field>
          </template>
          <v-date-picker v-model="executionDate" @input="executionDateMenu = false" :min="minDate"></v-date-picker>
        </v-menu> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4>Dokumen yang direvisi (jika ada) :</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" class="py-0">
        <v-checkbox label="Pedoman / Manual" value="PD"></v-checkbox>
      </v-col>
      <v-col cols="3" class="py-0">
        <v-checkbox label="TKI" value="TKI"></v-checkbox>
      </v-col>
      <v-col cols="3" class="py-0">
        <v-checkbox label="Formulir" value="FM"></v-checkbox>
      </v-col>
      <v-col cols="3" class="py-0">
        <v-checkbox label="TKO" value="TKo"></v-checkbox>
      </v-col>
      <v-col cols="3" class="py-0">
        <v-checkbox label="TKPA" value="TKPA"></v-checkbox>
      </v-col>
      <v-col cols="3" class="py-0">
        <v-checkbox label="Other" value="OTHER"></v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>Target Waktu Verifikasi</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field outlined></v-text-field>
        <!-- <v-menu v-model="targetVerificationDateMenu" :close-on-content-click="false" :nudge-right="40" offset-y transition="scale-transition" min-width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="formattedTargetVerificationDate" append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" outlined></v-text-field>
          </template>
          <v-date-picker v-model="targetVerificationDate" @input="targetVerificationDateMenu = false" :min="minDate"></v-date-picker>
        </v-menu> -->
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
import Functions from '@/tools/Functions.js';
export default {
  props: ['data'],
  data() {
    return {
      minDate: Functions.GetMonthFromNow(-3).toISOString().substr(0, 10),
      receiverDateMenu: false,
      executionDateMenu: false,
      targetVerificationDateMenu: false,
      receiverDate: Functions.GetMonthFromNow(-3).toISOString().substr(0, 10),
      executionDate: Functions.GetMonthFromNow(-3).toISOString().substr(0, 10),
      targetVerificationDate: Functions.GetMonthFromNow(-3).toISOString().substr(0, 10),
      responsiblePerson: 'MPS',
    };
  },
  computed: {
    formattedReceiverDate() {
      return Functions.FormatDate(this.receiverDate, 'DD/MM/yyyy');
    },
    // formattedExecutionDate() {
    //   return Functions.FormatDate(this.executionDate, 'DD/MM/yyyy');
    // },
    // formattedTargetVerificationDate() {
    //   return Functions.FormatDate(this.targetVerificationDate, 'DD/MM/yyyy');
    // },
  },
  watch: {
    receiverDate(val) {
      this.data.receiverDate = val;
    },
    executionDate(val) {
      this.data.executionDate = val;
    },
    targetVerificationDate(val) {
      this.data.targetVerificationDate = val;
    },
    formattedReceiverDate(val) {
      this.data.formattedReceiverDate = val;
    },
    formattedExecutionDate(val) {
      this.data.formattedExecutionDate = val;
    },
    formattedTargetVerificationDate(val) {
      this.data.formattedTargetVerificationDate = val;
    },
    responsiblePerson(val) {
      this.data.responsiblePerson = val;
    },
  },
};
</script>

<style></style>
