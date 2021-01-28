<template>
  <div class="container">
    <div class="row">
        <div class="col-md-6" v-if="$route.path == '/'">

          <Form />
          <Messages />
        </div>

        <div v-else class="col-md-6">
          <router-view :key="$route.fullPath"></router-view>
        </div>
    </div>
  </div>
</template>

Vue.use(require('vue-moment'));

<script>
import Messages from "./components/Messages";
import Form from "./components/Form";

export default {
  name: "App",
  components: {
    Messages,
    Form
    }
}


</script>

<style>
</style>
