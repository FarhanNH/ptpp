<template>
  <v-dialog v-model="show" persistent max-width="500px">
    <v-card>
      <v-card-title class="text-h6 text-center">
        Apakah anda yakin ingin menghapus data ini?
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modalOn: Boolean,
  },
  computed: {
    show: {
      get() {
        return this.modalOn;
      },
      set(val) {
        if (!val) {
          this.$emit("close");
        }
      },
    },
  },
  methods: {
    closeDelete() {
      this.$emit("closeDelete");
    },
    deleteItemConfirm() {
      this.$emit("deleteItemConfirm");
    },
  },
};
</script>

<style></style>
