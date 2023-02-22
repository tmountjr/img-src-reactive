<script setup lang="ts">
import { useImageUrl } from '~~/composables/ImageUrl';
const { cip } = useImageUrl()
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="6">
            <h2>Options</h2>
            <v-checkbox v-model="cip.auto_webp" label="Use webp" />
            <v-checkbox v-model="cip.auto_smallest" label="Use Smallest" />
          </v-col>
          <v-col cols="6">
            <h2>Output</h2>
            <p>cip.auto_webp: {{ cip.auto_webp }}</p>
            <p>cip.auto_smallest: {{ cip.auto_smallest }}</p>
            <p>Image Source URL: {{ cip.imgSrcUrl }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-img :src="cip.imgSrcUrl" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
