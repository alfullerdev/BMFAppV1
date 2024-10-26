<script>
	import modeobserver from './utils/modeobserver';
	import { onMount } from 'svelte';
	import Runatics from './utils/Runatics.svelte';
  export let data;


	onMount(modeobserver);
</script>

<slot />
