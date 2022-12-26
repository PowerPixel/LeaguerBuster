<script setup lang="ts">
    const props = defineProps({
        champions_data: Object
    })

    onMounted(() => {
        console.log(props.champions_data)
    })
</script>

<template>
    <div>
        {{ champions_data }}
        <span>This is my test span</span>
    </div>
</template>

