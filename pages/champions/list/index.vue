<script lang="ts" setup>
    var leagueVersions = await useLeagueVersions();
    var champions = await useChampions(leagueVersions.data.value[0]);
</script>


<template>
    <div>
        <ChampionsGrid :champions_data='champions.data' />
    </div>
</template>