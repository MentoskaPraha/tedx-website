<script>
	import { page } from "$app/stores";
</script>

<div class="bg-gray-700 text-slate-50 m-3 p-1 text-center rounded-lg">
	<h1 class="mb-1 underline text-2xl">
		Error Code: {$page.status}, {$page.error?.message}
	</h1>
</div>
