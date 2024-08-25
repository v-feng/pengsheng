<template>
  <Layout>
    <header class="header">
      <div class="header-left">
        <div class="header-left-logo">
          <Link @click="toHome" class="cursor-pointer">
            <img
              :src="homeIcon"
              alt="Python Decordtion Logo"
              class="logo__img logo__img--desktop"
            />
          </Link>
        </div>
      </div>
      <div class="header-right" v-if="!sizeFlag">
        <span
          class="header-right-item"
          v-for="(item, index) in menuList"
          :key="index"
          @click="handleMenu(item.path)"
        >
          {{ item.enName }}
        </span>
      </div>
      <div class="header-menu" v-if="sizeFlag" @click="handleClickMenu">
        <Icon type="md-menu" size="26" v-if="!showMenu" />
        <Icon type="ios-close" v-else />
      </div>
    </header>
    <Content class="layout-content"><RouterView /></Content>
  </Layout>
</template>

<script setup>
import homeIcon from '@/assets/images/icon/favicon.png';
import { useRouter } from 'vue-router';
import { RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
const menuList = [
  {
    zhName: '历年作品',
    path: 'project',
    enName: 'Project',
  },
  {
    zhName: '关于我们',
    path: 'about',
    enName: 'About',
  },
  {
    zhName: '服务流程',
    path: 'service',
    enName: 'Service',
  },
  {
    zhName: '联络我们',
    path: 'contact',
    enName: 'Contact',
  },
  {
    zhName: '媒体讯息',
    path: 'media',
    enName: 'Media',
  },
];
const router = useRouter();
onMounted(() => {
  window.addEventListener('resize', onResize);
  onResize();
});

const sizeFlag = ref(false);
const onResize = () => {
  let bodyWidth = document.body.getBoundingClientRect().width;
  console.log(bodyWidth);
  if (bodyWidth <= 800) {
    sizeFlag.value = true;
  } else {
    sizeFlag.value = false;
  }
};
const toHome = () => {
  router.push('/');
};
const handleMenu = (path) => {
  router.push(path);
};
const showMenu = ref(false);
const handleClickMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<style lang="less" scoped>
.cursor-pointer {
  cursor: pointer;
}
.layout-content {
  background-color: #fff;
  padding-top: 61px;
}
.header {
  padding: 5px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-menu {
    cursor: pointer;
  }
  &-left {
    &-logo {
      width: 160px;
      height: 46px;
      padding-top: 10px;

      img {
        height: 100%;
        object-fit: contain;
      }
    }
  }

  &-right {
    &-item {
      margin: 0 10px;
      cursor: pointer;
      font-size: 16px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 600;
    }
  }
}

.toggle {
  visibility: visible;
  opacity: 1;
  float: right;
  transition:
    opacity 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    visibility 0s;
}

.common-toggle {
  visibility: hidden;
  opacity: 1;
  transition:
    opacity 0.4s cubic-bezier(0.075, 0.82, 0.165, 1),
    visibility 0s;
}
</style>
