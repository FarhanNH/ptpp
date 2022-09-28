<template>
  <v-container fluid>
    <v-card class="pl-8" color="white">
      <v-row class="pt-2">
        <v-col cols="6" class="pb-0">
          <h1>{{ title }}</h1>
        </v-col>
        <v-col cols="5" class="d-flex justify-end pb-0">
          <v-btn color="primary" dark @click="addItem()"> Tambah User </v-btn>
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
            <!-- <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title
                  ><h2>{{ title }}</h2>
                </v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialogAdd" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Tambah User
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Tambah User Baru</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.name"
                              label="Dessert name"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Cancel
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="save">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template> -->
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
            <template v-slot:[`item.delete`]="{ item }">
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
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
      title: 'User',
      modals: {
        success: false,
        decision: '',
      },
      dialogDelete: false,
      dialogAdd: false,
      searchKey: '',
      searchData: '',
      dataTable: [],
      headers: [
        {
          text: 'User',
          value: 'username',
          width: '10%',
        },
        {
          text: 'Role',
          value: 'role',
          width: '20%',
        },
        {
          text: 'Edit',
          value: 'edit',
          width: '1%',
        },
        {
          text: 'Hapus',
          value: 'delete',
          width: '1%',
        },
      ],
    };
  },
  methods: {
    search() {
      console.log(this.searchKey);
    },
    addItem() {
      let val = {
        urlBack: this.$route.path,
        isAddItem: true,
      };
      let strVal = JSON.stringify(val);
      Router.redirectParam('Edit User', strVal);
    },
    editItem(val) {
      console.log(val);
      val.urlBack = this.$route.path;
      let strVal = JSON.stringify(val);
      Router.redirectParam('Edit User', strVal);
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
      this.modals.decision = 'Hapus User';
    },
    dummy() {
      this.dataTable.push(
        {
          id: 1,
          username: 'USERNAME',
          name: 'USER NAME',
          email: 'superemail@email.com',
          roleCode: 'superuser',
          role: 'SUPER USER',
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
          username: 'AUDITOR',
          name: 'AUDITOR',
          email: 'auditemail@email.com',
          roleCode: 'auditor',
          role: 'Auditor',
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
        },
        {
          id: 3,
          username: 'ADMIN',
          name: 'ADMIN',
          email: 'adminemail@email.com',
          roleCode: 'penerimaPTPP',
          role: 'Penerima PTPP',
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
