<template>
  <v-container>
    <v-row style="background-color: #0277bd">
      <v-col cols="6" class="d-flex align-center">
        <h3 style="color: #f0e5cf">NAVBAR</h3>
      </v-col>
      <v-col cols="5" class="d-flex justify-end align-center">
        <h3 style="color: #f0e5cf">USERNAME</h3>
      </v-col>
      <v-col cols="1">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              depressed
              v-bind="attrs"
              v-on="on"
              style="color: #f0e5cf"
            >
              LOGOUT
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5"> Keluar </v-card-title>
            <v-card-text>Apakah anda yakin keluar?</v-card-text>
            <v-card-actions class="d-flex justify-space-between">
              <v-btn color="red darken-1" @click="logout" dark depressed> Ya </v-btn>
              <v-btn color="green darken-1" @click="dialog = false" outlined>
                Batal
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Router from "@/tools/Router";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      Router.redirect("login");
    },
  },
};
</script>

<style></style>
