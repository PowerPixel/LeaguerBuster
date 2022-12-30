export const useLeagueVersions = async (): Promise<string[]> => {
    const cache = toRef(useNuxtApp().payload.data, "leagueVersions")

    if (!cache.value) {
        return (await fetchFromRiotApi('/versions.json')).data.value ?? [];
    }
    return cache.value ?? [];
}

export const useChampions = async (version: string): Promise<ChampionsData | undefined> => {
    let cache = toRef(useNuxtApp().payload.data, "leagueChampions");
    if (! cache.value) {
        return (await fetchFromRiotCDN<ChampionsData>(version, '/data/en_US/champion.json', "leagueChampions")).data.value ?? undefined;
    }
    return cache.value ?? undefined;
}

export const useChampion = async (version: string, name: string): Promise<ChampionRaw | undefined> => {
    let cache = toRef(useNuxtApp().payload.data, "leagueChampion" + name);
    if (! cache.value) {
        return (await fetchFromRiotCDN<ChampionRaw>(version, `/data/en_US/champion/${name}.json`, "leagueChampion" + name)).data.value ?? undefined;
    }
    return cache.value ?? undefined;
}

async function  fetchFromRiotApi(path: string) {
    return await useFetch<string[]>(`https://ddragon.leagueoflegends.com/api${path}`, { key: "leagueVersions" })
}

async function fetchFromRiotCDN<T>(version: string, path: string, key: string) {
    return await useFetch<T>(`https://ddragon.leagueoflegends.com/cdn/${version}${path}`, { key })
}


export type ChampionsData = {
    type: string;
    format: string;
    version: string;
    data: {
        [key: string]: {
            version: string;
            id: string;
            key: string;
            name: string;
            title: string;
            blurb: string;
            info: {
                attack: number;
                defense: number;
                magic: number;
                difficulty: number;
            };
            image: {
                full: string;
                sprite: string;
                group: string;
                x: number;
                y: number;
                w: number;
                h: number;
            };
            tags: string[];
            partype: string;
            stats: {
                hp: number;
                hpperlevel: number;
                mp: number;
                mpperlevel: number;
                movespeed: number;
                armor: number;
                armorperlevel: number;
                spellblock: number;
                spellblockperlevel: number;
                attackrange: number;
                hpregen: number;
                hpregenperlevel: number;
                mpregen: number;
                mpregenperlevel: number;
                crit: number;
                critperlevel: number;
                attackdamage: number;
                attackdamageperlevel: number;
                attackspeedperlevel: number;
                attackspeed: number;
            };
        };
    }
};

// Base data fetched from the CDN, for the grid view i.e
export interface ChampionBaseData {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: ChampionInfo;
    image: Image;
    tags: string[];
    partype: string;
    stats: ChampionStats;
}


// ChampionRawJson

export interface ChampionRaw {
    type: string;
    format: string;
    version: string;
    data: ChampionRawData;
}

export interface ChampionRawData {
    champ: ChampionData;
}

export interface ChampionData {
    id: string;
    key: string;
    name: string;
    title: string;
    image: Image;
    skins: ChampionSkin[];
    lore: string;
    blurb: string;
    allytips: string[];
    enemytips: string[];
    tags: string[];
    partype: string;
    info: ChampionInfo;
    stats: ChampionStats;
    spells: ChampionSpell[];
    passive: ChampionPassive;
    recommended: any[];
}

export interface ChampionSkin {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
}

export interface ChampionSpell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: Leveltip;
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: Datavalues;
    effect: number[] | undefined[];
    effectBurn: string | undefined[];
    vars: any[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: Image;
    resource: string;
}

export interface ChampionPassive {
    name: string;
    description: string;
    image: Image;
}

export interface ChampionStats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

export interface ChampionStats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

export interface Image {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface ChampionInfo {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}

export interface Leveltip {
    label: string[];
    effect: string[];
}

export interface Datavalues {
}
