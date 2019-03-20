<template>
    <md-bottom-bar id="telebtmbar">
            <md-bottom-bar-item md-label="By Vehicle ID" md-icon="directions_subway"></md-bottom-bar-item>
            <!-- <md-bottom-bar-item @click="focus = 1" md-label="By Station" md-icon="departure_board"></md-bottom-bar-item> -->
            <md-bottom-bar-item md-label="By Line" md-icon="line_weight"></md-bottom-bar-item>
        </md-bottom-bar>
</template>

<script>
export default {
  name: "TeleBtmBar"
};
</script>

<style scoped>
#teletopbar{
    bottom: 0;
}
</style>