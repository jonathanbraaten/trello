<script setup lang="ts">
const items = ref([{
    id: 1,
    icon: 'ci:house-02',
    path: '/'
}, {
    id: 2,
    icon: 'ci:mail',
    path: '/'
}, {
    id: 3,
    icon: 'ci:file-document',
    path: '/'
}, {
    id: 4,
    icon: 'ci:folder-document',
    path: '/'
}])
</script>

<template>
    <nav>
        <ul class="flex flex-col gap-5">
            <li v-for="item in items" :key="item.id">
                <Icon size="1.7rem" :name="item.icon" />
            </li>
        </ul>
    </nav>
</template>
