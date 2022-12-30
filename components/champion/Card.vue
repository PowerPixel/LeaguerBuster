<script lang="ts" setup>
import { getCardImageUrl } from "@/composables/champions/utils";
import { ref } from "vue";
import { ChampionBaseData } from "@/composables/states";


const props = defineProps<{ championData: ChampionBaseData }>();
let tooltipToggle = ref(false);

function toggleTooltip() {
    tooltipToggle.value = !tooltipToggle.value;
}
</script>

<template>
    <NuxtLink :to="'/champions/' + championData.name">
        <div class="relative inline-block" @mouseenter="toggleTooltip()" @mouseleave="toggleTooltip()">
            <div class="object-scale-down">
                <img :src="getCardImageUrl(championData)" />
            </div>
            <transition name="champion-name">
                <div v-if="tooltipToggle"
                    class="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 p-4 h-full w-full justify-center items-center">
                    <p class="text-sm font-bold text-white">
                        {{ championData.name }}
                    </p>
                </div>
            </transition>
        </div>
    </NuxtLink>
</template>

<style scoped>
.champion-name-enter-active {
    animation: fade 0.35s;
}

.champion-name-leave-active {
    animation: fade 0.35s reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
