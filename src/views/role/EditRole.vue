<template>
  <v-container fluid>
    <v-alert
      id="alert"
      type="warning"
      icon="mdi-warning-outline"
      dismissible
      v-show="alert.Visible"
      v-text="alert.Message"
      transition="scale-transition"
    >
    </v-alert>
    <v-card class="pl-8" color="white">
      <v-row>
        <v-col cols="12">
          <h1>{{ title }}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-subheader>Role</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field v-model="roleName" outlined disabled></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-subheader>Deskripsi</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field v-model="description" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-subheader>Menu</v-subheader>
        </v-col>
        <v-col cols="8" class="pt-0">
          <table>
            <tr v-for="menu in menus" :key="menu.id">
              <td>
                <v-checkbox
                  v-model="menu.access"
                  :label="menu.menu"
                ></v-checkbox>
              </td>
            </tr>
          </table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-btn
            dark
            depressed
            outlined
            large
            color="primary"
            @click="back"
            class="my-4"
          >
            Kembali
          </v-btn>
        </v-col>
        <v-col cols="6" class="d-flex justify-end pr-12">
          <v-btn
            dark
            depressed
            large
            color="primary"
            class="my-4"
            @click="submit"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
      <ModalNotif
        :modalOn="modals.success"
        :decision="modals.decision"
        :urlback="modals.urlBack"
        @close="modals.success = false"
      ></ModalNotif>
    </v-card>
  </v-container>
</template>

<script>
import Router from "@/tools/Router";
import ModalNotif from "@/components/Modals/ModalNotif.vue";
export default {
  components: { ModalNotif },
  data() {
    return {
      title: "Edit Role",
      modals: {
        success: false,
        decision: "",
      },
      roleName: "",
      description: "",
      menus: [],
      urlBack: "",
      alert: {
        Visible: false,
        Message: "",
      },
    };
  },
  methods: {
    back() {
      Router.back();
    },
    submit() {
      const checkMenus = this.menus.find((o) => o.access === true);
      if (checkMenus != undefined) {
        this.modals.success = true;
        this.modals.urlBack = this.urlBack;
        this.modals.decision = "Edit Role";
      } else {
        // this.scrollToTop();
        this.alert.Visible = true;
        this.alert.Message = "Please Select Menu";
      }
    },
    scrollToTop() {
      let container = document.getElementById("alert");
      // container.scrollTop = 0; // not working
      let event = new CustomEvent("scroll", {});
      container.pageYOffset = 0;
      setTimeout(() => {
        container.scrollTop = 0;
      });
      container.dispatchEvent(event);
    },
  },
  beforeMount() {
    let data = JSON.parse(this.$route.params.items);
    console.log(data);
    this.roleName = data.roleName;
    this.description = data.description;
    this.menus = data.menus;
    this.urlBack = data.urlBack;
  },
};
</script>

<style></style>
