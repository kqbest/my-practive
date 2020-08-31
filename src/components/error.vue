<template>
    <section class="error">
        {{ msg }}
    </section>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'error',
    setup () {
        const msg = ref('error')
        return { msg }
    }
}
</script>

<style lang="less" scoped>
.error{

}
</style>