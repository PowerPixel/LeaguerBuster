<script setup lang="ts">
    import type { ChampionsData } from "@/composables/states";
    const props = defineProps<{championsData: ChampionsData}>()
</script>

<template>
    <div class="flex gap-x-9 gap-y-8 flex-row align justify-evenly flex-wrap items-start">
        <template v-for="champion in championsData.data">
            <ChampionCard :championData="champion" />
        </template>
    </div>
</template>