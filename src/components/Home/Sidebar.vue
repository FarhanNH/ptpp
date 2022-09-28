<template>
  <v-card height="400" width="290">
    <v-navigation-drawer color="white" dark permanent width="100%">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="pindah(item)" link>
          <v-list-item-icon>
            <v-icon color="#01579B">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold black--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <!-- <v-expansion-panels accordion light tile flat style="width: 50%" class="font-weight-bold black--text" v-else>
            <v-expansion-panel :readonly="disablePtpp">
              <v-expansion-panel-header style="padding: 0" hide-actions>
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item style="padding: 0" v-for="item in childPTPP" :key="item.title" @click="pindah(item)" link>
                  <v-list-item-content style="padding: 0">
                    <v-list-item-title class="font-weight-bold black--text">{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels> -->
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
// import Functions from '../../tools/Functions';
export default {
  data() {
    return {
      dialog: false,
      disablePtpp: true,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard', menu: 'Dashboard' },
        { title: 'PTPP', icon: 'mdi-feather', menu: 'PTPP' },
        { title: 'Profile', icon: 'mdi-account-box', menu: 'Profile' },
        { title: 'Role', icon: 'mdi-briefcase', menu: 'Role' },
        { title: 'User', icon: 'mdi-account-box-multiple', menu: 'User' },
        { title: 'Otorisasi', icon: 'mdi-gavel', menu: 'Otorisasi' },
      ],
      childPTPP: [
        { title: 'Input PTPP', menu: 'Input PTPP' },
        { title: 'Status PTPP', menu: 'Status PTPP' },
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
      // if (val.menu != 'PTPP') {
      //   Functions.HideElement('.v-expansion-panel-content');
      //   Router.redirectParam(val.menu);
      // } else {
      //   this.disablePtpp = false;
      // }
    },
  },
};
</script>
<style>
.v-expansion-panel-content__wrap {
  padding: 0;
}
</style>
