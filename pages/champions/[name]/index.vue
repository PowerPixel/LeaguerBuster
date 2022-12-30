<script lang="ts" setup>
import { useChampion } from "@/composables/states";
const { params } = useRoute();
let name = params.name;

if (Array.isArray(name)) {
    name = name[0]
}

let champion = await useChampion("12.13.1", name)

</script>

<template>
    <div>
        {{ champion }}
    </div>
</template>