<script lang="ts">
	const { text }: { text: string } = $props();
</script>

<header class="flex w-full flex-col items-center gap-2 border-zinc-600 md:border-b-2">
	<h1 class="text-center text-3xl font-bold text-text md:p-3">{text}</h1>
	<hr class="h-1 w-2/3 rounded-full border-0 bg-text md:hidden" />
</header>
