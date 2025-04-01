<script setup lang="ts">
const { task } = useTaskQuery()

const items = ref([{
    id: 1,
    label: 'All tasks',
    count: 0
}, {
    id: 2,
    label: 'To do',
    count: 0
}, {
    id: 3,
    label: 'In progress',
    count: 0
}, {
    id: 4,
    label: 'Completed',
    count: 0
}])
function upd(n: string) {
    task.value = n
}

</script>

<template>
    <Wrapper>

        <ul class="flex gap-5">
            <li class="flex gap-2" v-for="item in items" :key="item.id">
                <span @click="upd(item.label)">{{ item.label }}</span>
                <span class=" flex items-center justify-center bg-gray-100 rounded-md text-sm w-[1.5rem] h-[1.5rem]">{{
                    item.count
                    }}</span>
            </li>
        </ul>
    </Wrapper>
</template>
