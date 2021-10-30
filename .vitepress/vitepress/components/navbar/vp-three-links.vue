<script setup lang="ts">
import { useThreeLinks } from '../../composables/social-links'
import ExternalIcon from '../icons/external-link-icon.vue'
// import VPSocialLink from './vp-social-link.vue'

const links = useThreeLinks()
</script>

<template>
  <div class="social-links">
      <a
        v-for="link in links" 
        :href="link.link"
        target="_blank"
        rel="noreferrer noopener"
        class="social-link link"
    >
    {{link.text}}
        <ElIcon :size="16" style="vertical-align: text-top; line-height: 24px">
            <ExternalIcon />
        </ElIcon>
    </a>
    <!-- <VPSocialLink v-for="link in links" :key="link.text" v-bind="link" /> -->
  </div>
</template>

<style scoped lang="scss">
.social-links {
    display: block;
    padding: 0 12px;
    line-height: calc(var(--nav-height) - 3px);
    font-size: 14px;
    font-weight: 500;
    color: var(--text-color);
    transition: color var(--el-transition-duration);
    border-bottom: 2px solid transparent;
}
</style>
