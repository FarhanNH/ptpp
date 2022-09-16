<template>
  <div class="mt-2">
    <v-row>
      <v-col cols="12">
        <h3 style="color: #01579b">Di isi oleh pemohon / auditor</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3>VERIFIKASI PELAKSANAAN TINDAKAN PERBAIKAN DAN PENCEGAHAN</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4>Status :</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="py-0">
        <v-checkbox label="Close" value="CLOSE"></v-checkbox>
      </v-col>
      <v-col cols="2">
        <v-subheader>Tanggal Pelaksanaan</v-subheader>
      </v-col>
      <v-col cols="2">
        <v-text-field outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="py-0">
        <v-checkbox label="Perlu Follow Up" value="FU"></v-checkbox>
      </v-col>
      <v-col cols="2">
        <v-subheader>Tanggal Verifikasi Selanjutnya</v-subheader>
      </v-col>
      <v-col cols="2">
        <v-text-field outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4>Catatan :</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <i>Jika tindakan perbaikan/pencegahan belum memenuhi, maka terbitkan PTPP Baru</i>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="py-0">
        <v-checkbox label="Efektif" value="EF"></v-checkbox>
      </v-col>
      <v-col cols="2" class="py-0">
        <v-checkbox label="Belum Efektif" value="BE"></v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4>Catatan Rekomendasi Lanjutan :</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-textarea outlined></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4>Approval Pemohon / Auditor</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-subheader>Disetujui, Fuel Terminal Manager</v-subheader>
      </v-col>
      <v-col cols="3">
        <v-text-field outlined></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
