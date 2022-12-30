<script lang="ts" setup>
    const leagueVersions = await useLeagueVersions();
</script>

<template>
    <div class="flex flex-col content-center items-center self-center">
        <div>
            Welcome to LeaguerBuster (this name will change...)
        </div>
        <div>
            Current League Patch : {{ leagueVersions[0] }}
        </div>
    </div>
</template>