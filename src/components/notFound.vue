<template>
    <section class="notFound">
        {{ msg }}
    </section>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'notFound',
    setup () {
        const msg = ref('~~404~~')
        return { msg }
    }
}
</script>
