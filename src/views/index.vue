<template>
  <Swiper
    loop
    :modules="modules"
    :noSwiping="true"
    class="mySwiper"
    :slides-per-view="1"
    :pauseOnMouseEnter="true"
    :reverseDirection="true"
    :autoplay="{ delay: 3000 }"
    @swiper="onSwiper"
    ref="swiperInstance"
    :pagination="{ clickable: true }"
    :mousewheel="{ mousewheel: true }"
    @click="handleClick"
  >
    <swiper-slide v-for="(item, index) in data" :key="index">
      <img :src="item.url" :alt="item.alt" />
      <div class="slide-text">{{ item.alt }}</div>
    </swiper-slide>
  </Swiper>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Parallax, Mousewheel, Pagination } from 'swiper/modules';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination'; // 轮播图底面的小圆点
import img1 from '@/assets/images/MODERN-LUXURY-DESIGN-KITCHENS.webp';
import img2 from '@/assets/images/MODERN-LUXURY-DESIGN-BATHROOS.webp';
import img3 from '@/assets/images/MODERN-LUXURY-DESIGN-WARDROBES.webp';
const router = useRouter();
const modules = [Parallax, Mousewheel, Pagination, Autoplay];
const data = [
  {
    url: img1,
    text: `<p>给我一份信赖给您一段美好</p>
    <p>澎升, 您身边的全屋定制</p>`,
    alt: '澎升装饰图片',
    id: 1,
  },
  {
    url: img2,
    text: `<p>给我一份信赖给您一段美好</p>
    <p>澎升, 您身边的全屋定制</p>`,
    alt: '澎升装饰图片',
    id: 2,
  },
  {
    url: img3,
    text: `<p>给我一份信赖给您一段美好</p>
    <p>澎升, 您身边的全屋定制</p>`,
    alt: '澎升装饰图片',
    id: 3,
  },
  {
    url: img1,
    text: `<p>给我一份信赖给您一段美好</p>
    <p>澎升, 您身边的全屋定制</p>`,
    alt: '澎升装饰图片',
    id: 4,
  },
  {
    url: img2,
    text: `<p>给我一份信赖给您一段美好</p>
    <p>澎升, 您身边的全屋定制</p>`,
    alt: '澎升装饰图片',
    id: 5,
  },
  {
    url: img3,
    text: `<p>给我一份信赖给您一段美好</p>
    <p>澎升, 您身边的全屋定制</p>`,
    alt: '澎升装饰图片',
    id: 6,
  },
  {
    url: img3,
    text: `<p>给我一份信赖给您一段美好</p>
    <p>澎升, 您身边的全屋定制</p>`,
    alt: '澎升装饰图片',
    id: 7,
  },
];
const swiperInstance = ref(null);
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const handleClick = (swiper, event) => {
  console.log(swiper, event);
  router.push({
    name: 'detail',
    query: {
      id: 666,
    },
  });
};
</script>

<style lang="less" scoped>
.mySwiper {
  width: 100%;
}

.swiper-container {
  position: relative;
}
.mySwiper .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  //   position: relative;
}

.mySwiper .swiper-slide img {
  display: block;
  width: 100%;
  object-fit: contain;
}
.slide-text {
  position: absolute;
  bottom: 0;
  left: 5px;
  font-size: 13px;
  line-height: 20px;
}
</style>
