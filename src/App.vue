<template>
<div>
App
<p>{{$store.state.moduleA.username}}</p>
<p>{{$store.getters['newName']}}</p>
<p>{{$store.getters['moduleB/newName']}}</p>
<button @click="mutationsFn">mutationsFn</button>
</div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.state.username)
    console.log(store.getters.newName)
    const mutationsFn = () => {
      // store.commit('updateName')
      store.dispatch('updateName')
    }
    return { mutationsFn }
  }
}
</script>
