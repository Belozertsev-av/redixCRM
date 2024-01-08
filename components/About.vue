<template>
    <div>
        <h2>About</h2>
        <v-text-field
            :loading="loading"
            density="compact"
            variant="solo"
            label="Search templates"
            append-inner-icon="web_asset"
            single-line
            hide-details
            @click:append-inner="onClick"
          ></v-text-field>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

    h2 {
        margin-top: 150px;
        text-align: center;
    }
</style>