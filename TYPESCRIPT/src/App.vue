<template>
  <div id="app">
    <MenuBar />
    <ItemList />
    <MenuEdit />
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import ItemList from '@/components/ItemList'
import MenuEdit from '@/components/MenuEdit'
export default {
  name: 'app',
  components: {
    MenuBar,
    ItemList,
    MenuEdit
  }
}
</script>


