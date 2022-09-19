<template>
  <v-card height="400" width="290">
    <v-navigation-drawer color="white" dark permanent width="100%">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="pindah(item)" link>
          <v-list-item-icon>
            <v-icon color="#01579B">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color: black" class="font-weight-bold">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- <template v-slot:append>
        <div class="pa-2">
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark depressed v-bind="attrs" v-on="on" style="color: #f0e5cf" block> LOGOUT </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5"> Keluar </v-card-title>
              <v-card-text>Apakah anda yakin keluar?</v-card-text>
              <v-card-actions class="d-flex justify-space-between">
                <v-btn color="red darken-1" @click="logout" dark depressed> Ya </v-btn>
                <v-btn color="green darken-1" @click="dialog = false" outlined> Batal </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template> -->
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import Router from '../../tools/Router';
export default {
  data() {
    return {
      dialog: false,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard', menu: 'Dashboard' },
        { title: 'PTPP', icon: 'mdi-feather', menu: 'PTPP' },
        { title: 'Profile', icon: 'mdi-account-box', menu: 'Profile' },
        { title: 'Role', icon: 'mdi-gavel', menu: 'Role' },
        { title: 'User', icon: 'mdi-account-box-multiple', menu: 'User' },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      Router.redirect('login');
    },
    pindah(val) {
      Router.redirectParam(val.menu);
    },
  },
};
</script>
