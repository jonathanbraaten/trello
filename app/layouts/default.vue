<script setup lang="ts">

</script>

<template>
    <div class="flex h-screen">
        <div class="flex flex-col gap-10 px-5 py-5 border-r">
            <span>Logo</span>
            <AppNav />
            <div class="flex flex-col gap-3 mt-auto">
                <div class="w-[2rem] h-[2rem] bg-gray-300 rounded-full" v-for="i in 3" :key="i" />
            </div>
        </div>
        <div class="w-screen h-full flex flex-col">
            <AppHeader class="border-b" />
            <ListNav />
            <main class=" bg-gray-100 grow">
                <NuxtPage />
            </main>
        </div>
    </div>
</template>
