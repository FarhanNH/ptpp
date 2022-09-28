<template>
  <v-container class="pt-0">
    <v-card color="white" min-height="700">
      <div class="dashboard-center">
        <div>
          <h1>{{ title }}{{ username }}</h1>
          <br />
          <h2>{{ subtitle }}</h2>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import Functions from '../../tools/Functions';
export default {
  data() {
    return {
      title: 'Selamat datang ',
      username: 'USERNAME',
      subtitle: 'di Web Permintaan Tindakan Perbaikan dan Pencegahan (PTPP)',
    };
  },
  beforeMount() {
    console.log(Functions.ReadSessionCustom('token'));
  },
};
</script>

<style>
.dashboard-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
}
</style>
