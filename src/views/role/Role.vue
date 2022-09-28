<template>
  <v-container fluid>
    <v-card class="pl-8" color="white">
      <v-row>
        <v-col cols="12">
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
          <v-data-table hide-default-header hide-default-footer :headers="headers" :items="dataTable" :search="searchData">
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
          <ModalConfirm :modalOn="dialogDelete" @closeDelete="closeDelete" @deleteItemConfirm="deleteItemConfirm"></ModalConfirm>
          <ModalNotif :modalOn="modals.success" :decision="modals.decision" @close="modals.success = false"></ModalNotif>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import ModalNotif from '@/components/Modals/ModalNotif.vue';
import ModalConfirm from '@/components/Modals/ModalConfirm.vue';
import Router from '@/tools/Router';
export default {
  components: {
    ModalNotif,
    ModalConfirm,
  },
  data() {
    return {
      title: 'Role',
      modals: {
        success: false,
        decision: '',
      },
      dialogDelete: false,
      searchKey: '',
      searchData: '',
      dataTable: [],
      headers: [
        {
          text: 'Role',
          value: 'roleName',
          width: '10%',
        },
        {
          text: 'Deskripsi',
          value: 'description',
          width: '20%',
        },
        {
          text: 'Edit',
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
      console.log(val);
      val.urlBack = this.$route.path;
      let strVal = JSON.stringify(val);
      Router.redirectParam('Edit Role', strVal);
    },
    deleteItem(val) {
      console.log(val);
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    deleteItemConfirm() {
      this.dialogDelete = false;
      this.modals.success = true;
      this.modals.decision = 'Hapus Role';
    },
    dummy() {
      this.dataTable.push(
        {
          id: 1,
          roleCode: 'superuser',
          roleName: 'SUPER USER',
          description: 'Akses Semua Halaman',
          menus: [
            {
              id: 1,
              menu: 'Profile',
              access: true,
            },
            {
              id: 2,
              menu: 'User',
              access: true,
            },
            {
              id: 3,
              menu: 'Role',
              access: true,
            },
            {
              id: 4,
              menu: 'PTPP',
              access: true,
            },
            {
              id: 5,
              menu: 'Otorisasi',
              access: true,
            },
          ],
          edit: true,
          delete: true,
        },
        {
          id: 2,
          roleCode: 'auditor',
          roleName: 'Auditor',
          description: 'Akses Pemohon / Auditor',
          menus: [
            {
              id: 1,
              menu: 'Profile',
              access: true,
            },
            {
              id: 2,
              menu: 'User',
              access: false,
            },
            {
              id: 3,
              menu: 'Role',
              access: false,
            },
            {
              id: 4,
              menu: 'PTPP',
              access: true,
            },
            {
              id: 5,
              menu: 'Otorisasi',
              access: false,
            },
          ],
          edit: true,
          delete: true,
        },
        {
          id: 3,
          roleCode: 'penerimaPTPP',
          roleName: 'Penerima PTPP',
          description: 'Akses Penerima PTPP',
          menus: [
            {
              id: 1,
              menu: 'Profile',
              access: true,
            },
            {
              id: 2,
              menu: 'User',
              access: false,
            },
            {
              id: 3,
              menu: 'Role',
              access: false,
            },
            {
              id: 4,
              menu: 'PTPP',
              access: true,
            },
            {
              id: 5,
              menu: 'Otorisasi',
              access: false,
            },
          ],
          edit: true,
          delete: true,
        },
        {
          id: 3,
          roleCode: 'fuelTerminalManager',
          roleName: 'Fuel Terminal Manager',
          description: 'Akses Fuel Terminal Manager',
          menus: [
            {
              id: 1,
              menu: 'Profile',
              access: true,
            },
            {
              id: 2,
              menu: 'User',
              access: false,
            },
            {
              id: 3,
              menu: 'Role',
              access: false,
            },
            {
              id: 4,
              menu: 'PTPP',
              access: false,
            },
            {
              id: 5,
              menu: 'Otorisasi',
              access: true,
            },
          ],
          edit: true,
          delete: true,
        }
      );
    },
  },
  beforeMount() {
    this.dummy();
  },
};
</script>

<style></style>
