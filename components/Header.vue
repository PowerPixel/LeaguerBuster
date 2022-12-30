<script lang="ts" setup></script>

<template>
  <nav
    class="z-20 flex items-center justify-between flex-wrap bg-slate-600 p-5 shadow-lg"
  >
    <div class="flex items-center flex-shrink-0 mr-6">
      <NuxtLink to="/"
        ><span
          class="font-semibold text-blue-200 hover:cursor-pointer text-xl tracking-tight"
          >LeaguerBuster</span
        ></NuxtLink
      >
    </div>
    <div class="block lg:hidden"></div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <NuxtLink to="/champions"> Champions </NuxtLink>
      </div>
    </div>
  </nav>
</template>
