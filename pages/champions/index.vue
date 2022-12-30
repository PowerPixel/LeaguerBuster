<script lang="ts" setup>
    import type { ChampionsData } from "@/composables/states";
    const champions = ref<ChampionsData>();
    const leagueVersions = await useLeagueVersions();
    if (leagueVersions.length > 0) {
        champions.value = await useChampions(leagueVersions[0]);
        
    }
</script>   


<template>
    <div>
        <ChampionsGrid v-if="champions !== undefined" :championsData='champions' />
        <span v-else>Failed to fetch champions data from Riot CDN :(</span>
    </div>
</template>