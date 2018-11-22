<template>
    <md-toolbar id="teletopbar">
            <h3 class="md-title" style="flex: 1">TfL Telescope</h3>
            <md-button href="https://buymeacoff.ee/dtylam" target="_blank" class="md-icon-button">
                <md-icon>favorite_border</md-icon>
            </md-button>
            <span> | </span>
            <md-button class="md-icon-button">
                <md-icon>refresh</md-icon>
            </md-button>
        </md-toolbar>
</template>

<script>
export default {
  name: "TeleTopBar"
};
</script>

<style scoped>
#teletopbar{
    position: fixed;
    top: 0;
}
</style>