<template>
  <section>
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <ul>
      <li v-for="(user, index) in users" :key="user.id">
        <a href="#" @click.prevent="changeName($event, index)">{{
          user.name
        }}</a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue } from "nuxt-property-decorator";
import User from "~/vuex-orm/models/User";
import data from "~/vuex-orm/fake-data.json";
import Component from "vue-class-component";

@Component({
  name: "index"
})
export default class extends Vue {
  initialMessage = 123;
  created() {
    User.insert({
      data
    });
  }
  changeName(e: any, index: number) {
    console.log(e, index);
    User.store().commit("entities/users/setFirst", "ahmed");
  }
  get first() {
    return User.getters("first");
  }
  get users() {
    return User.all();
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
