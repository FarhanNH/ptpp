<template>
  <v-container>
    <v-row class="navbar">
      <v-col cols="12">
        <Navbar />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="sidebar">
        <Sidebar />
      </v-col>
      <v-col cols="10" class="content">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Navbar from '../components/Home/Navbar';
import Sidebar from '../components/Home/Sidebar';

export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style>
.navbar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 99;
}
.sidebar {
  position: fixed;
  top: 85px;
  height: 100%;
  z-index: 99;
}
.content {
  margin-left: 19rem;
}
.v-main__wrap {
  background-color: #f7f6f2;
}
</style>
