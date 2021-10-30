<script setup lang="ts">
import { computed } from 'vue'
import { useData, inBrowser } from 'vitepress'

import { useFeatureFlag } from '../composables/feature-flag'
import VPNavbarSearch from './navbar/vp-search.vue'
import VPNavbarMenu from './navbar/vp-menu.vue'
import VPNavbarThemeToggler from './navbar/vp-theme-toggler.vue'
import VPNavbarTranslation from './navbar/vp-translation.vue'
import VPNavbarSocialLinks from './navbar/vp-social-links.vue'
import VPNavbarThreeLinks from './navbar/vp-three-links.vue'
import VPNavbarHamburger from './navbar/vp-hamburger.vue'

defineProps<{
  fullScreen: boolean
}>()

defineEmits(['toggle'])
const themeEnabled = useFeatureFlag('theme')

const { theme } = useData()

const currentLink = computed(() => {
  if (!inBrowser) return '/'
  const existLangIndex = theme.value.langs.findIndex((lang) =>
    window?.location?.pathname.startsWith(`/${lang}`)
  )

  return existLangIndex === -1 ? '/' : `/${theme.value.langs[existLangIndex]}/`
})
</script>

<template>
  <div class="navbar-wrapper">
    <div class="container">
      <div class="logo-container">
        <a :href="currentLink">
          <img
            class="logo"
            src="https://s3.qiufeng.blue/muji/muji-logo-v2.jpg?imageView2/2/w/100"
            alt="Elemenet Plus Logo"
          />
          <h1>木及简历 - 简历组件库</h1>
        </a>
      </div>
      <div class="content">
        <!-- <VPNavbarSearch class="search" :options="theme.agolia" multilang /> -->
        <VPNavbarMenu class="menu" />
        <VPNavbarThemeToggler v-if="themeEnabled" class="theme-toggler" />
        <!-- <VPNavbarTranslation class="translation" /> -->
        <VPNavbarThreeLinks class="social-links" />
        <VPNavbarSocialLinks class="social-links" />
        <VPNavbarHamburger
          :active="fullScreen"
          class="hamburger"
          @click="$emit('toggle')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);
  // > a {
  //   height: 28px;
  //   width: 128px;
  // }
  .logo {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    vertical-align: middle;
    margin-right: 10px;
  }
  h1 {
    margin-top: 0;
    font-size: 24px;
    vertical-align: middle;
    display: inline-block;
    color: #000;
  }
}
</style>
