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
      v-show="layout.uld2 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(-.473899 1.068169-.541015-.240026 147.087223 63.574405)"
      stroke-width="0"
      fill="#fff"
    />
    <!-- Up right diagonal 2 -->
    <rect
      v-show="layout.urd2 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.493859 1.05908-.536416 0.250135 294.851058 0.622494)"
      fill="#fff"
    />
    <!-- Down right diagonal 2 -->
    <rect
      v-show="layout.drd2 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.510958-1.050937 0.563146 0.273797 146.82791 226.805899)"
      fill="#fff"
    />
    <!-- Down left diagonal 2 -->
    <rect
      v-show="layout.dld2 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.503203 1.054672-.549149 0.262008 144.151245 218.749794)"
      fill="#fff"
    />
    <!-- Middle (m) -->
    <rect
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(1.16857 0 0 1.14385 143.599 0)"
      fill="#fff"
    />
    <!-- Down right diagonal (drd) -->
    <rect
      v-show="layout.drd1 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.537777 1.037469-.535078 0.277359 294.381278 212.771694)"
      fill="#fff"
    />
    <!-- Down left diagonal (dld) -->
    <rect
      v-show="layout.dld1 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.52561-1.043686 0.537753 0.270817 0.00549 225.310325)"
      fill="#fff"
    />
    <!-- Up left diagonal (uld) -->
    <rect
      v-show="layout.uld1 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(.500306 1.05605-.534882 0.2534 140.289412 2.965616)"
      fill="#fff"
    />
    <!-- Up right diagonal (urd) -->
    <rect
      v-show="layout.urd1 === 1"
      width="10.6968"
      height="262.271"
      rx="0"
      ry="0"
      transform="matrix(-.470812 1.069533-.541706-.238463 300.133768 70.294241)"
      fill="#fff"
    />
    <!-- Up top right (utr) -->
    <rect
      v-show="layout.utr === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0 1.16857-.563865 0 300 0)"
      fill="#fff"
    />
    <!-- Up top left (utl) -->
    <rect
      v-show="layout.utl === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0 1.16857-.562295 0 143.599 0)"
      fill="#fff"
    />
    <!-- Up left (ul) -->
    <rect
      v-show="layout.ul === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(-1.16857 0 0-.318625 12.500063 81.369916)"
      fill="#fff"
    />
    <!-- Up right (ur) -->
    <rect
      v-show="layout.ur === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(-1.16857 0 0-.320846 299.999844 81.9372)"
      fill="#fff"
    />
    <!-- Down left (dl) -->
    <rect
      v-show="layout.dl === 1"
      width="10.6968"
      height="255.38"
      rx="8"
      ry="8"
      transform="matrix(-1.16857 0 0-.319133 12.5 294)"
      fill="#fff"
    />
    <!-- Down right (dr) -->
    <rect
      v-show="layout.dr === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(-1.16857 0 0-.342627 300.099 300)"
      fill="#fff"
    />
    <!-- Down top right (dtr) -->
    <rect
      v-show="layout.dtr === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0-1.16857 0.563865 0 156.099 225)"
      fill="#fff"
    />
    <!-- Up bottom right (ubr) -->
    <rect
      v-show="layout.ubr === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0-1.16857 0.563865 0 156 82.25)"
      fill="#fff"
    />
    <!-- Up bottom left (ubl) -->
    <rect
      v-show="layout.ubl === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0-1.16857 0.562295 0 0.000103 81.9372)"
      fill="#fff"
    />
    <!-- Down top left (dtl) -->
    <rect
      v-show="layout.dtl === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0-1.16857 0.562295 0 0 224.999774)"
      fill="#fff"
    />
    <!-- Down bottom left (dbl) -->
    <rect
      v-show="layout.dbl === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0-1.16857 0.562295 0 0.000103 300.00018)"
      fill="#fff"
    />
    <!-- Down bottom right (dbr) -->
    <rect
      v-show="layout.dbr === 1"
      width="10.6968"
      height="255.38"
      rx="0"
      ry="0"
      transform="matrix(0 1.16857-.563865 0 300.099 287.498723)"
      fill="#fff"
    />
  </svg>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps<{
  number: number;
}>();

const layout = ref<Record<string, number>>({
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

const parseNumber = (n: number) => {
  const padded = n.toString().padStart(4, "0");
  return padded
    .split("")
    .reverse()
    .map((n) => +n);
};

const handleLayout = (n: number) => {
  for (const i in layout.value) layout.value[i] = 0;
  const [ones, tens, hundreds, thousands] = parseNumber(n);
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
