<template>
<div class="container">
  App {{$store.state.user.profile.account}} <button @click="$store.commit('user/setUser',{account:'zjh'})">设置用户信息</button>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
