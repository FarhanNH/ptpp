<template>
  <v-container fluid>
    <v-card class="pl-8" color="white">
      <v-row class="pt-2">
        <v-col cols="6" class="pb-0">
          <h1>{{ title }}</h1>
        </v-col>
      </v-row>
      <!-- <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="searchKey"
              append-icon="mdi-magnify"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-btn class="mr-4" @click="search">Cari</v-btn>
          </v-col>
        </v-row> -->
      <v-row class="pb-4">
        <v-col cols="11">
          <v-data-table hide-default-header :headers="headers" :items="dataTable" :search="searchData">
            <template #header="{ props: { headers } }">
              <thead class="v-data-table-header">
                <tr>
                  <th v-for="header in headers" :key="header.value" :width="header.width" class="light-blue--text text--darken-3">
                    {{ header.text }}
                  </th>
                </tr>
              </thead>
            </template>
            <template v-slot:[`item.edit`]="{ item }">
              <v-icon small @click="editItem(item)">mdi-file-document</v-icon>
            </template>
          </v-data-table>
          <ModalNotif :modalOn="modals.success" :decision="modals.decision" @close="modals.success = false"></ModalNotif>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import ModalNotif from '@/components/Modals/ModalNotif.vue';
import Router from '@/tools/Router';
import Functions from '@/tools/Functions';
export default {
  components: {
    ModalNotif,
  },
  data() {
    return {
      title: 'Otorisasi PTPP',
      modals: {
        success: false,
        decision: '',
      },
      searchKey: '',
      searchData: '',
      dataTable: [],
      headers: [
        {
          text: 'Tanggal',
          value: 'date',
          width: '10%',
        },
        {
          text: 'No. PTPP',
          value: 'ptppNumber',
          width: '20%',
        },
        {
          text: 'Dari / Fungsi',
          value: 'from',
          width: '20%',
        },
        {
          text: 'Status',
          value: 'status',
          width: '20%',
        },
        {
          text: 'Detail',
          value: 'edit',
          width: '1%',
        },
      ],
    };
  },
  methods: {
    search() {
      console.log(this.searchKey);
    },
    editItem(val) {
      val.urlBack = this.$route.path;
      let strVal = JSON.stringify(val);
      Router.redirectParam('Detail Otorisasi PTPP', strVal);
    },
    dummy() {
      let year = Functions.GetCurrentYear();
      for (let i = 1; i < 7; i++) {
        this.dataTable.push({
          date: Functions.FormatDate(this.date, 'DD/MM/yyyy'),
          ptppNumber: '00' + i + '/PND648000/' + year,
          from: 'RS',
          status: 'Menunggu Approver',
          edit: true,
        });
      }
    },
  },
  beforeMount() {
    this.dummy();
  },
};
</script>

<style></style>
