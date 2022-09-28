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
          <form>
            <!-- FORM INIT -->
            <FormInitialize :data="initData" ref="checkForm" />
            <!-- FORM AUDITOR 1 -->
            <FormAuditor1 :selected="selected" :category="category" :isDisposisi="isDisposisi" />
            <!-- FORM PENERIMA PTPP -->
            <FormPenerimaPPTP :data="penerimaPTPP" />
            <!-- FORM AUDITOR 1 -->
            <FormAuditor2 />
            <v-row class="mb-2">
              <!-- <v-col class="d-flex justify-end pr-8">
                <v-btn class="mr-4" dark depressed large color="primary" @click="submit"> submit </v-btn>
              </v-col> -->
              <v-col cols="6">
                <v-btn dark depressed outlined large color="primary" @click="back" class="my-4"> Kembali </v-btn>
              </v-col>
              <v-col cols="6" class="d-flex justify-end pr-12" v-if="!isMenungguApprover && !isApproved">
                <v-btn dark depressed large color="primary" class="my-4" @click="submit"> Submit </v-btn>
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
import ModalNotif from '@/components/Modals/ModalNotif.vue';
import FormInitialize from '@/components/ptpp/FormInitialize.vue';
import FormAuditor1 from '@/components/ptpp/FormAuditor1.vue';
import FormPenerimaPPTP from '@/components/ptpp/FormPenerimaPPTP.vue';
import FormAuditor2 from '@/components/ptpp/FormAuditor2.vue';
import Functions from '@/tools/Functions.js';
import Router from '@/tools/Router';
export default {
  components: { ModalNotif, FormAuditor1, FormPenerimaPPTP, FormAuditor2, FormInitialize },
  data() {
    return {
      title: 'Permintaan Tindakan Perbaikan dan Pencegahan (PTPP)',
      initData: {},
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
      data: {},
      urlBack: '',
      isMenungguPenerima: false,
      isMenungguFeedbackPemohon: false,
      isMenungguApprover: false,
      isApproved: false,
    };
  },
  methods: {
    back() {
      Router.back();
    },
    submit() {
      this.$refs.checkForm;
      this.modals.success = true;
      this.modals.urlBack = this.urlBack;
      this.modals.decision = 'Input PTPP';
    },
    initFieldAuto() {
      let year = Functions.GetCurrentYear();
      this.initData = {
        noPTPP: '001/PND648000/' + year,
        area: 'Fuel Terminal Cikampek',
        to: 'Fuel Terminal Manager',
        fromItems: [
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
          },
        ],
      };
    },
  },
  beforeMount() {
    this.initFieldAuto();
    this.data = JSON.parse(this.$route.params.items);
    this.urlBack = this.data.urlBack;
  },
};
</script>

<style></style>
