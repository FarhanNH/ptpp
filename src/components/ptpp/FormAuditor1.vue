<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h3 style="color: #01579b">Di isi oleh pemohon / auditor</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3>SUMBER KETIDAKSESUAIAN ATAU POTENSINYA</h3>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="3" class="py-0">
        <v-checkbox v-model="selected" label="Keluhan Pelanggan" value="KL"></v-checkbox>
      </v-col>
      <v-col cols="3" class="py-0">
        <v-checkbox v-model="selected" label="MWT" value="MWT"></v-checkbox>
      </v-col>
      <v-col cols="3" class="py-0">
        <v-checkbox v-model="selected" label="Tinjauan Manajemen" value="TM"></v-checkbox>
      </v-col>
      <v-col cols="3" class="py-0">
        <v-checkbox v-model="selected" label="Permintaan Perbaikan" value="PP"></v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" class="py-0">
        <v-checkbox v-model="selected" label="Audit (Eksternal/Internal)" value="AU"></v-checkbox>
      </v-col>
      <v-col cols="3" class="py-0">
        <v-checkbox v-model="selected" label="Nearmiss" value="NM"></v-checkbox>
      </v-col>
      <v-col cols="3" class="py-0">
        <v-checkbox v-model="selected" label="Survey Pelanggan" value="SP"></v-checkbox>
      </v-col>
      <v-col cols="3" class="py-0">
        <v-checkbox v-model="selected" label="Lain-lain" value="LL"></v-checkbox>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mt-2">
      <v-col cols="12">
        <h3>KETIDAKSESUAIAN ATAU POTENSI YANG DITEMUKAN</h3>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12">
        <v-textarea outlined></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" align-self="center">
        <v-subheader>Kategori</v-subheader>
      </v-col>
      <v-col cols="3" align-self="center">
        <v-radio-group v-model="category" row>
          <v-radio label="Urgent" value="urgent"></v-radio>
          <v-radio label="Tidak Urgent" value="non-urgent"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>Batas waktu reply / jawab</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="py-0"></v-col>
      <v-col cols="4">
        <v-text-field outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>Pemohon / Auditor</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field outlined></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-subheader>Tanggal</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>Fuel Terminal Manager</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field outlined></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-subheader>Tanggal</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-text-field outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-subheader>Disposisi Kepada</v-subheader>
      </v-col>
      <v-col cols="4">
        <v-checkbox v-model="isDisposisi" label="Sr. Spv Planning Maintenance Services" value="true"></v-checkbox>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ['selected', 'category', 'isDisposisi'],
};
</script>

<style></style>
