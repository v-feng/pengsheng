<template>
  <div @click="handleClick">我是详情页</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

import { postAuditPass } from '@/api/index';
const Route = useRoute();

const handleClick = async () => {
  const res = await postAuditPass({
    id: 666,
  });
};
</script>

<style lang="scss" scoped></style>
