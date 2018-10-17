<!--
Create automatically a Bulma css Grid from :items 

USAGE :
<bulma-grid :items="yourItems" itemsByRow="3">
  <template scope="row">
    <recipe-card :node="row.item"></recipe-card>
  </template>
</bulma-grid>
-->

<template>
  <div>
    <div class="columns" v-for="(column, rowIndex) in columns" :key="rowIndex">
      <div v-for="(item, index) in column" :key="index" :class="columnClasses">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemsByRow: { type: String, default: "4" },
    items: { type: Array, default: [] }
  },
  computed: {
    columnClasses () {
      return 'column is-' + 12 / this.itemsByRow
    },
    columns () {
      let columnIndex = 0
      let columns = {}
      for (const itemIndex in this.items) {
        if (itemIndex % this.itemsByRow === 0) {
          columns[++columnIndex] = []
        }
        columns[columnIndex].push(this.items[itemIndex])
      }
      return columns
    }
  }
}
</script>
