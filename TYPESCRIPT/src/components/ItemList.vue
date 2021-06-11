<template>
  <div id="memos"
       class="container">
    <div class="memo-container">
      <div class="memo">
        <div class="mark"></div>
        <div class="memo-heading">
          <h5 class="title"></h5>
          <ul class="tools">
            <li class="edit"></li>
            <li class="delete"></li>
          </ul>
        </div>
        <h6 class="memo-info">
          <span class="timeStamp"></span>
          <span class="category">分类:</span>
        </h6>
        <div class="content">
          <div class="text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class ItemList extends Vue {}
</script>