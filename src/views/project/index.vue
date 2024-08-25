<template>
  <div class="container">
    <div v-for="(item, index) in data" :key="index" class="item">
      <p>
        <Image :src="item.url" />
        <Paragraph class="ivu-mt">{{ item.text }}</Paragraph>
      </p>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    id: 1,
    text: '《歐豪年美術館》',
    url: 'https://www.rezo.com.tw/cache/cutw_480h_360/jpg/1721182941.jpg',
    fit: 'cover',
  },
  {
    id: 1,
    text: '《歐豪年美術館》',
    url: 'https://www.rezo.com.tw/cache/cutw_480h_360/jpg/1721182941.jpg',
    fit: 'cover',
  },
  {
    id: 1,
    text: '《歐豪年美術館》',
    url: 'https://www.rezo.com.tw/cache/cutw_480h_360/jpg/1721182941.jpg',
    fit: 'cover',
  },
  {
    id: 1,
    text: '《歐豪年美術館》',
    url: 'https://www.rezo.com.tw/cache/cutw_480h_360/jpg/1721182941.jpg',
    fit: 'cover',
  },
  {
    id: 1,
    text: '《歐豪年美術館》',
    url: 'https://www.rezo.com.tw/cache/cutw_480h_360/jpg/1721182941.jpg',
    fit: 'cover',
  },
  {
    id: 1,
    text: '《歐豪年美術館》',
    url: 'https://www.rezo.com.tw/cache/cutw_480h_360/jpg/1721182941.jpg',
    fit: 'cover',
  },
  {
    id: 1,
    text: '《歐豪年美術館》',
    url: 'https://www.rezo.com.tw/cache/cutw_480h_360/jpg/1721182941.jpg',
    fit: 'cover',
  },
  {
    id: 1,
    text: '《歐豪年美術館》',
    url: 'https://www.rezo.com.tw/cache/cutw_480h_360/jpg/1721182941.jpg',
    fit: 'cover',
  },
  {
    id: 1,
    text: '《歐豪年美術館》',
    url: 'https://www.rezo.com.tw/cache/cutw_480h_360/jpg/1721182941.jpg',
    fit: 'cover',
  },
  {
    id: 1,
    text: '《歐豪年美術館》',
    url: 'https://www.rezo.com.tw/cache/cutw_480h_360/jpg/1721182941.jpg',
    fit: 'cover',
  },
  {
    id: 1,
    text: '《歐豪年美術館》',
    url: 'https://www.rezo.com.tw/cache/cutw_480h_360/jpg/1721182941.jpg',
    fit: 'cover',
  },
];
const imgList = data.map((item) => item.url);
</script>

<style lang="less" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 10fr); /* 一行三个 */
  gap: 10px; /* 元素之间的间距 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  padding: 20px; /* 容器内边距 */
  width: 60%; /* 手动设置容器宽度，让元素靠得更近 */
  margin: 0 auto; /* 水平居中容器 */
}
.item {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
