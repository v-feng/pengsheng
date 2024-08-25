<template>
  <div class="container">
    <h6>關於我們|About Us</h6>
    <br />
    <p>
      透過理解、包容的合作過程，來達成友善、內歛的設計結果，並成就空間的坦然自在。
    </p>
    <br />
    <br />
    <br />
    <p>
      每一次意念涓滴，每一個選擇遴定，都在影響著環境。走過十年，
      緩緩累積，帶著日作的名字，默默前進。
    </p>
    <br />
    <br />
    <div v-for="(item, index) in list">
      <h6>{{ item.title }}</h6>
      <p v-for="v in item.team">
        <Image :src="v.avatar" />
      </p>
    </div>
  </div>
</template>

<script setup>
const list = [
  {
    title: '團隊介紹',
    team: [
      {
        avatar:
          'https://www.rezo.com.tw/upload/images/%E7%B6%B2%E7%AB%99%E4%BA%BA%E5%83%8F160x160-2_%E6%BA%90%E6%BE%A4.png',
        name: '高源澤',
        job: '設計師',
        desc: '高源澤，2019 年畢業於國立臺灣師範大學設計學系，在 2020 年以 3D 設計為主軸，進入創作領域。',
      },
      {
        avatar:
          'https://www.rezo.com.tw/upload/images/%E7%B6%B2%E7%AB%99%E4%BA%BA%E5%83%8F160x160-2_%E6%BA%90%E6%BE%A4.png',
        name: '凌慧婷',
        job: '攝影師',
        desc: '凌慧婷，2019 年畢業於國立臺灣師範',
      },
    ],
  },
  {
    title: 'a部门',
    team: [
      {
        avatar:
          'https://www.rezo.com.tw/upload/images/%E7%B6%B2%E7%AB%99%E4%BA%BA%E5%83%8F160x160-2_%E6%BA%90%E6%BE%A4.png',
        name: '高源澤',
        job: '設計師',
        desc: '高源澤，2019 年畢業於國立臺灣師範大學設計學系，在 2020 年以 3D 設計為主軸，進入創作領域。',
      },
      {
        avatar:
          'https://www.rezo.com.tw/upload/images/%E7%B6%B2%E7%AB%99%E4%BA%BA%E5%83%8F160x160-2_%E6%BA%90%E6%BE%A4.png',
        name: '凌慧婷',
        job: '攝影師',
        desc: '凌慧婷，2019 年畢業於國立臺灣師範',
      },
    ],
  },
  {
    title: 'b部门',
    team: [
      {
        avatar:
          'https://www.rezo.com.tw/upload/images/%E7%B6%B2%E7%AB%99%E4%BA%BA%E5%83%8F160x160-2_%E6%BA%90%E6%BE%A4.png',
        name: '高源澤',
        job: '設計師',
        desc: '高源澤，2019 年畢業於國立臺灣師範大學設計學系，在 2020 年以 3D 設計為主軸，進入創作領域。',
      },
      {
        avatar:
          'https://www.rezo.com.tw/upload/images/%E7%B6%B2%E7%AB%99%E4%BA%BA%E5%83%8F160x160-2_%E6%BA%90%E6%BE%A4.png',
        name: '凌慧婷',
        job: '攝影師',
        desc: '凌慧婷，2019 年畢業於國立臺灣師範',
      },
    ],
  },
];
</script>

<style lang="less" scoped>
.container {
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width: 900px) {
  .container {
    margin-right: auto;
    margin-left: auto;
    max-width: calc(100% - 80px);
    font-size: 16px;
  }
}
</style>
