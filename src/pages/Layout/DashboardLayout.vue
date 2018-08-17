<template>
  <div class="wrapper">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>person</md-icon>
        <p>个人面板</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>drafts</md-icon>
        <p>镜像仓库</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon>autorenew</md-icon>
        <p>构建中心</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <p>服务中心</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>监控中心</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>view_module</md-icon>
        <p>应用市场</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>help</md-icon>
        <p>帮助中心</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
}
</script>
