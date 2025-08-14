<template>
  <div>测试actions general close write</div>

  <a-button
    type="primary"
    @click="handleClick"
  >
    Primary
  </a-button>
  <!-- <a-button
    type="primary"
    @click="handleUpdate('1')"
  >
    Update1
  </a-button>
  <a-button
    type="primary"
    @click="handleUpdate('2')"
  >
    Update2
  </a-button> -->
  <div>{{ data.a }}-{{ data2.a }}-{{ state.nested.bar }}</div>
  <a-button
    type="primary"
    @click="handleUpdate"
  >
    Update
  </a-button>
  <a-button
    type="primary"
    @click="handleUpdate2"
  >
    Update2
  </a-button>
  <a-button
    type="primary"
    @click="handleUpdate3"
  >
    shallowReactive Update3
  </a-button>
</template>

<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import { shallowRef, ref, shallowReactive } from 'vue'

const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2,
  },
})

const data = shallowRef({
  a: 1,
  b: {
    v: 3,
  },
})
const data2 = ref({
  a: 1,
  b: {
    v: 3,
  },
})

const handleClick = () => {
  Message.warning('This is a warning message')
}

const handleUpdate = () => {
  data.value.a += 1
}
const handleUpdate3 = () => {
  state.nested.bar += 1
}
const handleUpdate2 = () => {
  data2.value.a += 1
}
</script>
