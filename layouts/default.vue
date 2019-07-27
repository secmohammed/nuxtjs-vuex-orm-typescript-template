<template>
    <div>
        <nuxt />
    </div>
</template>
<script lang="ts">
import { Vue } from "nuxt-property-decorator";
import Component from "vue-class-component";
@Component({
    name: "default"
})
export default class extends Vue {}
</script>
