<template>
  <div @click="handleClick" class="detail-page">
    <div class="detail-page-box">
      <h1>《勺日NOKE》</h1>
      <h6>設計：高源澤、凌慧婷、楊金婕 | 攝影：隨寓工作室 | 文字：蔡舒湉</h6>
      <Image :src="img1" />
      <ul>
        <li>空間性質：商業空間</li>
        <li>空間成員：55 人</li>
        <li>空間面積：55.4 坪</li>
        <li>
          主要建材：特殊漆礦物塗料、立體造型漆、烤漆鐵件、茶玻、木皮、實木家具、系統櫃、不鏽鋼檯面、防火窗簾
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import img1 from '@/assets/images/MODERN-LUXURY-DESIGN-KITCHENS.webp';
import { useRoute, useRouter } from 'vue-router';

import { postAuditPass } from '@/api/index';
const Route = useRoute();

const handleClick = async () => {
  const res = await postAuditPass({
    id: 666,
  });
};
</script>

<style lang="less" scoped>
.detail-page {
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;
}
@media screen and (max-width: 900px) {
  .detail-page {
    margin-right: auto;
    margin-left: auto;
    max-width: calc(100% - 80px);
    font-size: 16px;
  }
}
</style>
