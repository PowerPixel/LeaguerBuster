export const useLeagueVersions = async () => {
    const cache = toRef(useNuxtApp().payload.data, "leagueVersions")

    if (!cache.value) {
        return await fetchFromRiotApi('/versions.json')
    }
    return cache;
}

export const useChampions = async (version: string) => {
    let cache = toRef(useNuxtApp().payload.data, "leagueChampions");
    if (! cache.value) {
        return await fetchFromRiotCDN(version, '/data/en_US/champion.json')
    }
    return cache;
}

async function  fetchFromRiotApi(path: string) {
    return await useFetch(`https://ddragon.leagueoflegends.com/api${path}`, { key: "leagueVersions" })
}

async function fetchFromRiotCDN(version: string, path: string) {
    return await useFetch(`https://ddragon.leagueoflegends.com/cdn/${version}${path}`, { key: "leagueChampions" })
}
