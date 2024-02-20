<script>
export default{
    data(){
        return{ saluto:'hello footer'}
    }
}
</script>

<template>
    <h2>{{ saluto }}</h2>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;


</style>