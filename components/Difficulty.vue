<template>
  <div class="difficulty">
    <span :class="classes(difficulty)">{{difficulty}}</span>
  </div>
</template>

<script>
export default {
  props : {
     difficulty: { type: String, default: ''}
  },
  methods: {
    classes (difficulty) {
      return {
        'tag is-primary': difficulty == 'easy',
        'tag is-warning': difficulty == 'middle',
        'tag is-danger': difficulty == 'hard'
      }
    }
  }
}
</script>