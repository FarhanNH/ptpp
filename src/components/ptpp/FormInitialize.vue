<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-subheader>No. PTPP</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="noPTPP" outlined></v-text-field>
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
  </div>
</template>

<script>
import Functions from '@/tools/Functions.js';
export default {
  props: ['data'],
  data() {
    return {
      noPTPP: '',
      minDate: Functions.GetMonthFromNow(-3).toISOString().substr(0, 10),
      date: Functions.GetMonthFromNow(-3).toISOString().substr(0, 10),
      dateMenu: false,
      area: '',
      to: '',
      from: '',
      fromItems: [],
    };
  },
  computed: {
    formattedDate() {
      return Functions.FormatDate(this.date, 'DD/MM/yyyy');
    },
  },
  methods: {
    iniFieldData() {
      this.noPTPP = this.data.noPTPP;
      this.area = this.data.area;
      this.to = this.data.to;
      this.from = this.data.from;
      this.fromItems = this.data.fromItems;
    },
  },
  mounted() {
    this.iniFieldData();
  },
};
</script>

<style></style>
