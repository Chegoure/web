<script setup>
import Header from '@/components/Header.vue'
import Logo from '@/assets/logo.svg'
import Button from '@/components/kit/Button.vue'
</script>

<template>
  <Header/>
  <div class="wrapper">
    <div class="workshop">
      <div class="workshop-header">
        <Logo/>
        <span class="workshop-header_title">
          Добро пожаловать!
        </span>
      </div>


      <!-- Место для компонента -->
      <Button>Login</Button>
    </div>
  </div>

</template>

<style scoped>
.wrapper {
  padding-top: 121px;
  display: flex;
  justify-content: center;
}

.workshop {
  width: 443px;
  background-color: white;
  border-radius: 12px;
  padding: 44px 34px;
}

.workshop-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.workshop-header_title {
  padding-top: 30px;
  font-weight: 600;
  font-size: 20px;
}
</style>