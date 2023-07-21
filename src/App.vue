<template>
    <RouterView v-slot="{ Component }">
        <Transition :name="transitionName">
            <Component :is="Component">

            </Component>
        </Transition>
    </RouterView>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { watch, ref } from 'vue';
let route = useRoute()
let transitionName = ref('slide-left')
watch(() => route.meta.index, (to, from) => {
    // console.log(to, from)
    if (to < from) {
        transitionName.value = 'slide-right'
    } else {
        transitionName.value = 'slide-left'
    }
})
</script>

<style scoped>
body {
    position: relative;
}

* {
    margin: 0;
    padding: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
    transition: all ease-in .5s;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.slide-left-enter-from {
    transform: translateX(100%);
}

.slide-left-leave-to {
    transform: translateX(-100%);
}

.slide-right-enter-active,
.slide-right-leave-active {
    transition: all ease-in .5s;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.slide-right-enter-from {
    transform: translateX(-100%);
}

.slide-right-leave-to {
    transform: translateX(100%);
}
</style>