<template>
  <svg
    id="eG4Patds6LK1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 300 300"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
  >
    <!-- Up left diagonal 2 -->
    <rect
      v-if="layout.uld2 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(-.51543 1.04876-.531185-.261061 152.97663 67.091148)"
      stroke-width="0"
    />
    <!-- Up right diagonal 2 -->
    <rect
      v-if="layout.urd2 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.493859 1.05908-.536416 0.250135 290.335686 1.377558)"
      stroke-width="0"
    />
    <!-- Down right diagonal 2 -->
    <rect
      v-if="layout.drd2 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.493859-1.05908 0.536416 0.250135 144.135783 228.14682)"
      stroke-width="0"
    />
    <!-- Down left diagonal 2 -->
    <rect
      v-if="layout.dld2 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.493859 1.05908-.536416 0.250135 145.551 216.818016)"
      stroke-width="0"
    />
    <!-- Middle (m) -->
    <rect
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(1.16857 0 0 1.14385 143.599 0)"
      stroke-width="0"
    />
    <!-- Down right diagonal (drd) -->
    <rect
      v-show="layout.drd1 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.493859 1.05908-.536416 0.250135 287.579 218.012)"
      stroke-width="0"
    />
    <!-- Down left diagonal (dld) -->
    <rect
      v-show="layout.dld1 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.493859-1.05908 0.536416 0.250135 0.92329 228.397)"
      stroke-width="0"
    />
    <!-- Up left diagonal (uld) -->
    <rect
      v-show="layout.uld1 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.493859 1.05908-.536416 0.250135 145.551 0)"
      stroke-width="0"
    />
    <!-- Up right diagonal (urd) -->
    <rect
      v-show="layout.urd1 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(-.51543 1.04876-.531185-.261061 292.291 69.0912)"
      stroke-width="0"
    />
    <!-- Up top right (utr) -->
    <rect
      v-show="layout.utr === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0 1.16857-.563865 0 300 0)"
      stroke-width="0"
    />
    <!-- Up top left (utl) -->
    <rect
      v-show="layout.utl === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0 1.16857-.563865 0 143.599 0)"
      stroke-width="0"
    />
    <!-- Up left (ul) -->
    <rect
      v-show="layout.ul === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(-1.16857 0 0-.280852 12.099125 81.937213)"
      stroke-width="0"
    />
    <!-- Up right (ur) -->
    <rect
      v-show="layout.ur === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(-1.16857 0 0-.280852 300.099 81.937213)"
      stroke-width="0"
    />
    <!-- Down left (dl) -->
    <rect
      v-show="layout.dl === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(-1.16857 0 0-.319133 12.5 294)"
      stroke-width="0"
    />
    <!-- Down right (dr) -->
    <rect
      v-show="layout.dr === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(-1.16857 0 0-.319133 300.099001 294.943964)"
      stroke-width="0"
    />
    <!-- Down top right (dtr) -->
    <rect
      v-show="layout.dtr === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0-1.16857 0.563865 0 156.099 225)"
      stroke-width="0"
    />
    <!-- Up bottom right (ubr) -->
    <rect
      v-show="layout.ubr === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0-1.16857 0.563865 0 156 82.25)"
      stroke-width="0"
    />
    <!-- Up bottom left (ubl) -->
    <rect
      v-show="layout.ubl === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0-1.16857 0.563865 0 5.84864 82.25)"
      stroke-width="0"
    />
    <!-- Down top left (dtl) -->
    <rect
      v-show="layout.dtl === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0-1.16857 0.563865 0 0.598639 225)"
      stroke-width="0"
    />
    <!-- Down bottom left (dbl) -->
    <rect
      v-show="layout.dbl === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0-1.16857 0.563865 0-.092051 300)"
      stroke-width="0"
    />
    <!-- Down bottom right (dbr) -->
    <rect
      v-show="layout.dbr === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0 1.16857-.563865 0 300.099 287.5)"
      stroke-width="0"
    />
  </svg>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps<{
  number: number;
}>();

const layout = ref({
  // Up left
  ubl: 0, // Up bottom left
  ul: 0, // Up left
  utl: 0, // Up top left
  uld1: 0, // Up left diagonal 1,
  uld2: 0, // Up left diagonal 2,
  // Up right
  ubr: 0, // Up bottom right
  ur: 0, // Up right
  utr: 0, // Up top right
  urd1: 0, // Up right diagonal 1
  urd2: 0, // Up right diagonal 2
  // Down left
  dbl: 0, // Down bottom left
  dl: 0, // Down left
  dtl: 0, // Down top left
  dld1: 0, // Down left diagonal 1
  dld2: 0, // Down left diagonal 2
  // Down right
  dbr: 0, // Down bottom right
  dr: 0, // Down right
  dtr: 0, // Down top right
  drd1: 0, // Down right diagonal 1
  drd2: 0 // Down right diagonal 2
});

const handleLayout = (n: number) => {
  const padded = n.toString().padStart(4, "0");
  const [ones, tens, hundreds, thousands] = padded
    .split("")
    .reverse()
    .map((n) => +n);
  switch (ones) {
    case 1:
      layout.value.utr = 1;
      break;
    case 2:
      layout.value.ubr = 1;
      break;
    case 3:
      layout.value.urd1 = 1;
      break;
    case 4:
      layout.value.urd2 = 1;
      break;
    case 5:
      layout.value.utr = 1;
      layout.value.urd2 = 1;
      break;
    case 6:
      layout.value.ur = 1;
      break;
    case 7:
      layout.value.utr = 1;
      layout.value.ur = 1;
      break;
    case 8:
      layout.value.ubr = 1;
      layout.value.ur = 1;
      break;
    case 9:
      layout.value.utr = 1;
      layout.value.ubr = 1;
      layout.value.ur = 1;
      break;
  }
  switch (tens) {
    case 1:
      layout.value.utl = 1;
      break;
    case 2:
      layout.value.ubl = 1;
      break;
    case 3:
      layout.value.uld1 = 1;
      break;
    case 4:
      layout.value.uld2 = 1;
      break;
    case 5:
      layout.value.utl = 1;
      layout.value.uld2 = 1;
      break;
    case 6:
      layout.value.ul = 1;
      break;
    case 7:
      layout.value.utl = 1;
      layout.value.ul = 1;
      break;
    case 8:
      layout.value.ubl = 1;
      layout.value.ul = 1;
      break;
    case 9:
      layout.value.utl = 1;
      layout.value.ubl = 1;
      layout.value.ul = 1;
      break;
  }
  switch (hundreds) {
    case 1:
      layout.value.dbr = 1;
      break;
    case 2:
      layout.value.dtr = 1;
      break;
    case 3:
      layout.value.drd1 = 1;
      break;
    case 4:
      layout.value.drd2 = 1;
      break;
    case 5:
      layout.value.dbr = 1;
      layout.value.drd2 = 1;
      break;
    case 6:
      layout.value.dr = 1;
      break;
    case 7:
      layout.value.dbr = 1;
      layout.value.dr = 1;
      break;
    case 8:
      layout.value.dtr = 1;
      layout.value.dr = 1;
      break;
    case 9:
      layout.value.dtr = 1;
      layout.value.dbr = 1;
      layout.value.dr = 1;
      break;
  }
  switch (thousands) {
    case 1:
      layout.value.dbl = 1;
      break;
    case 2:
      layout.value.dtl = 1;
      break;
    case 3:
      layout.value.dld1 = 1;
      break;
    case 4:
      layout.value.dld2 = 1;
      break;
    case 5:
      layout.value.dbl = 1;
      layout.value.dld2 = 1;
      break;
    case 6:
      layout.value.dl = 1;
      break;
    case 7:
      layout.value.dbl = 1;
      layout.value.dl = 1;
      break;
    case 8:
      layout.value.dtl = 1;
      layout.value.dl = 1;
      break;
    case 9:
      layout.value.dtl = 1;
      layout.value.dbl = 1;
      layout.value.dl = 1;
      break;
  }
};

watch(() => props.number, handleLayout, { immediate: true });
</script>
