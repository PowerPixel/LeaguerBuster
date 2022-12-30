import { ChampionBaseData } from '../states';

export function getCardImageUrl(champion: ChampionBaseData) {
    return `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${champion.image.full}`;
}