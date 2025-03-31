<script setup lang="ts">

import { useSearch } from '../composables/useSearch';
const { setSearch } = useSearch()
const searchQuery = ref('')


function submit(e: Event) {
    e.preventDefault();
    /*   if (!searchQuery.value) return */
    setSearch(searchQuery.value)
    searchQuery.value = ''
}

</script>

<template>
    <form @submit="submit" data-test-id="search-form" action="">
        <input v-model="searchQuery" class="border rounded-md pl-2 py-1" placeholder="Search"
            data-test-id="search-input" type="text">
    </form>
</template>
