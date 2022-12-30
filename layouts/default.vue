<template>
    <div class="flex flex-col text-white h-screen">
        <Header />
        <div class="flex grow bg-gray-600 justify-center p-16">
            <slot />
        </div>
        <Footer />
    </div>
</template>