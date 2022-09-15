<template>
  <v-dialog v-model="show" persistent max-width="500px">
    <v-card>
      <v-card-title class="text-h5 justify-center">
        <v-icon large color="green darken-2">
          mdi-checkbox-marked-circle-outline
        </v-icon>
      </v-card-title>
      <v-form ref="form" @submit.prevent="submit">
        <v-card-title class="text-h5">
          <v-layout row>
            <v-col>
              <div>
                <p class="text-center my-0">
                  {{ decision }} berhasil
                  <br />
                  dan menunggu otorisasi
                </p>
              </div>
            </v-col>
          </v-layout>
        </v-card-title>

        <v-card-actions class="justify-center">
          <v-btn text color="blue darken-1" @click="back()"> Tutup </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import Router from "@/tools/Router";
export default {
  props: {
    modalOn: Boolean,
    decision: String,
    urlback: String,
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
    back() {
      console.log(this.urlback);
      if (this.urlback != undefined) {
        Router.redirect(this.urlback);
      } else {
        this.$emit("close");
      }
    },
  },
};
</script>
