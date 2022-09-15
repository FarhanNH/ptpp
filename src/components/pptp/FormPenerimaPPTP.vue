<template>
  <div class="mt-2">
    <v-row>
      <v-col cols="12">
        <h3 style="color: #01579b">Di isi oleh penerima PPTP</h3>
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
        <v-textarea solo outlined></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>Tanggal Penerima PPTP</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field solo outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>Penanggung Jawab</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field solo outlined></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-subheader>Fuel Terminal Manager</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field solo outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>Analisa Penyebab</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-textarea solo outlined></v-textarea>
      </v-col>
      <v-col cols="2">
        <v-subheader>Tindakan Perbaikan dan Pencegahan</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-textarea solo outlined></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>PIC</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field solo outlined></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-subheader>Waktu Pelaksanaan</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field solo outlined></v-text-field>
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
        <v-text-field solo outlined></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
