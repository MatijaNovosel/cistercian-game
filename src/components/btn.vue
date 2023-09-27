<template>
  <button class="btn" type="button">
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    bgColor?: string;
    textColor?: string;
  }>(),
  {
    bgColor: "#ff5500",
    textColor: "#fff"
  }
);
</script>

<style scoped>
.btn {
  position: relative;
  display: block;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;
  font-size: 16px;
  border-radius: 6px;
  background-color: #2ecc71;
  color: #ffffff;
  transition: background-color 0.3s;
  cursor: pointer;
}

.btn:hover,
.btn:focus {
  background-color: #27ae60;
}

.btn > * {
  position: relative;
}

.btn span {
  display: block;
  padding: 12px 24px;
}

.btn:before {
  content: "";

  position: absolute;
  top: 50%;
  left: 50%;

  display: block;
  width: 0;
  padding-top: 0;

  border-radius: 100%;

  background-color: rgba(236, 240, 241, 0.3);

  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btn:active:before {
  width: 120%;
  padding-top: 120%;

  transition: width 0.2s ease-out, padding-top 0.2s ease-out;
}

h2 {
  font-weight: normal;
}

.btn.orange {
  background-color: #e67e22;
}

.btn.orange:hover,
.btn.orange:focus {
  background-color: #d35400;
}

.btn.red {
  background-color: #e74c3c;
}

.btn.red:hover,
.btn.red:focus {
  background-color: #c0392b;
}
</style>
