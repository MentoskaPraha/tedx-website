<script lang="ts" setup>
	import { quotes } from "$lib/assets/content.json";

	const quoteNum = Math.floor(Math.random() * quotes.length);
	const quote = quotes[quoteNum];
</script>

<hr />

<footer class="bg-black pb-4">
	<ul class="p-4">
		<li>
			<p class="text-center text-2xl">"{quote.content}"</p>
		</li>
		<li>
			<p class="text-center text-lg">- {quote.author}</p>
		</li>
	</ul>

	<ul class="md:grid md:grid-cols-2 md:gap-4 md:mx-4">
		<li class="grid auto-rows-auto gap-1 m-4">
			<h2 class="text-center text-3xl font-bold">Privacy Policy</h2>
			<p class="text-justify">
				This website uses no cookie set by the creator. Your activity on
				this page is not monitored or tracked by the creator. The
				creator is not responsible for cookies managed by 3rd party
				services, such as Firebase, Youtube or others.
			</p>
		</li>

		<li class="grid auto-rows-auto gap-1 m-4">
			<h2 class="text-center text-3xl font-bold">Copyright</h2>
			<p class="text-justify">
				This website was made by MentoskaPraha using VSCode, Github and
				other tools. All static image sources can be found in the
				README.md file on Github. This website is published under the
				GNU General Public License V3.
			</p>
		</li>
	</ul>
</footer>
