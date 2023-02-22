<script setup lang="ts">
import { useImageUrl } from '~~/composables/ImageUrl';
const { cip } = useImageUrl()
</script>

<template>
  <div class="wrapper">
    <div class="provider-wrapper">
      <div class="options">
        <h2>Options</h2>
        <div class="controls">
          <div class="checkbox">
            <label for="cip.auto_webp">cip.auto_webp</label>
            <input type="checkbox" name="cip.auto_webp" id="cip.auto_webp" v-model="cip.auto_webp">
          </div>
          <div class="checkbox">
            <label for="cip.auto_smallest">cip.auto_smallest</label>
            <input type="checkbox" name="cip.auto_smallest" id="cip.auto_smallest" v-model="cip.auto_smallest">
          </div>
        </div>
      </div>
      <div class="output">
        <h2>Output</h2>
        <p>cip.auto_webp: {{ cip.auto_webp }}</p>
        <p>cip.auto_smallest: {{ cip.auto_smallest }}</p>
        <p>Image Source URL: {{ cip.imgSrcUrl }}</p>
      </div>
    </div>
    <div class="image">
      <img :src="cip.imgSrcUrl">
    </div>
  </div>
</template>

<style scoped>
div.wrapper {
  max-width: 1200px;
  width: 100%;
  padding: 16px;
  margin: 0 auto;
}
div.provider-wrapper {
  display: flex;
}

div.options,
div.controls,
div.output {
  display: flex;
  flex-direction: column;
  flex-basis: 50%;

}
div.checkbox {
  display: flex;
}

div.checkbox label {
  padding-right: 10px;
}

div.image img {
  object-fit: contain;
  width: 100%
}
</style>