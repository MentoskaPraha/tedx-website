<script lang="ts">
	import { quintOut } from "svelte/easing";
	import { fade } from "svelte/transition";

	let viewMoreState = false;
	let aboutTEDx = true;
	$: document.body.classList[viewMoreState ? "add" : "remove"]("scroll-lock");
</script>

<div class="flex justify-center">
	<div class="grid lg:grid lg:gap-12 lg:items-center m-4">
		<div
			class="shadow bg-tedRed rounded w-64 h-64 mx-auto sm:mx-0 sm:w-96 sm:h-96 p-4 my-6 lg:my-0"
		>
			<h1 class="text-center font-bold text-2xl underline mb-2">
				About TEDx
			</h1>
			<p class="text-left line-clamp-6">
				In the spirit of ideas worth spreading, TEDx is a program of
				local, self-organized events that bring people together to share
				a TED-like experience. At a TEDx event, TED Talks video and live
				speakers combine to spark deep discussion and connection. These
				local, self-organized events are branded TEDx, where x =
				independently organized TED event. The TED Conference provides
				general guidance for the TEDx program, but individual TEDx
				events are self-organized. (Subject to certain rules and
				regulations.)
			</p>
			<br />
			<button
				class="underline"
				on:click={() => {
					viewMoreState = true;
					aboutTEDx = true;
				}}>View More</button
			>
		</div>

		<div
			class="shadow bg-tedRed rounded w-64 h-64 mx-auto sm:mx-0 sm:w-96 sm:h-96 p-4 my-6 lg:my-0"
		>
			<h1 class="text-center font-bold text-2xl underline mb-2">
				About TED
			</h1>
			<p class="text-left line-clamp-6">
				TED is a nonprofit organization devoted to Ideas Worth
				Spreading, often in the form of short talks delivered by leading
				thinkers and doers. Many of these talks are given at TED
				Conferences, intimate TED Salons and thousands of independently
				organised TEDx events around the world. Videos of these talks
				are made available, free, on <a
					href="http://ted.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">TED.com</a
				>
				and other platforms. Audio versions of TED Talks are published to
				<a
					href="http://applepodcasts.com/tedtalksdaily"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">TED Talks Daily</a
				>, available on all podcast platforms.<br /><br /> TED's open
				and free initiatives for spreading ideas include
				<a
					href="http://ted.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">TED.com</a
				>, where new TED Talk videos are posted daily;
				<a
					href="http://www.ted.com/tedx"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">TEDx</a
				>, which licenses thousands of individuals and groups to host
				local, self-organized TED-style events around the world; the
				<a
					href="http://www.ted.com/fellows"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">TED Fellows</a
				>
				program, which selects innovators from around the globe to amplify
				the impact of their remarkable projects and activities;
				<a
					href="https://audaciousproject.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">The Audacious Project</a
				>, which surfaces and funds critical ideas that have the
				potential to impact millions of lives;
				<a
					href="https://www.ted.com/about/programs-initiatives/ted-translators"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">TED Translators Program</a
				>, which crowdsources the subtitling of TED Talks so that big
				ideas can spread across languages and borders; and the
				educational initiative
				<a
					href="http://ed.ted.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">TED-Ed</a
				>. TED also offers
				<a
					href="https://tedatwork.ted.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">TED@Work</a
				>
				a program that reimagines TED Talks for workplace learning. TED also
				has a growing library of original podcasts, including
				<a
					href="https://www.ted.com/podcasts/ted-interview"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">The TED Interview</a
				>
				with Chris Anderson,
				<a
					href="https://www.ted.com/podcasts/worklife"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">WorkLife with Adam Grant</a
				>,
				<a
					href="https://www.ted.com/podcasts/far_flung_with_saleem_reshamwala"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline"
					>Far Flung with Saleem Reshamwala</a
				>
				and
				<a
					href="https://www.ted.com/podcasts/how-to-be-a-better-human"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">How to Be a Better Human</a
				>. Follow TED on
				<a
					href="http://twitter.com/TEDTalks"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">Twitter</a
				>,
				<a
					href="http://www.facebook.com/TED"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">Facebook</a
				>,
				<a
					href="https://instagram.com/ted"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">Instagram</a
				>
				and on
				<a
					href="https://www.linkedin.com/company/ted-conferences"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">LinkedIn</a
				>.
			</p>
			<br />
			<button
				class="underline"
				on:click={() => {
					viewMoreState = true;
					aboutTEDx = false;
				}}>View More</button
			>
		</div>

		<div
			class="shadow bg-tedRed rounded w-64 h-64 mx-auto sm:mx-0 sm:w-96 sm:h-96 p-4 my-6 lg:my-0"
		>
			<h1 class="text-center font-bold text-2xl underline mb-2">
				Past Talk
			</h1>
			<iframe
				width="224"
				height="192"
				src="https://www.youtube-nocookie.com/embed/UFL57Es4mn8"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				class="mx-auto w-56 h-48 sm:w-80 sm:h-72"
			/>
		</div>
	</div>

	{#if viewMoreState}
		<div class="fixed top-0 flex flex-wrap h-screen w-screen items-center">
			<button
				transition:fade={{ delay: 0, duration: 350, easing: quintOut }}
				on:click={() => (viewMoreState = false)}
				class="pt-28 bg-white text-gray-100 opacity-60 z-30 fixed w-full h-full hover:cursor-default transition-opacity"
			>
				This is a hidden message. Pretty cool right?
			</button>

			<div
				transition:fade={{ delay: 0, duration: 350, easing: quintOut }}
				class="mt-17 bg-tedRed rounded h-96 z-40 mx-1 sm:mx-8"
			>
				<button
					on:click={() => (viewMoreState = false)}
					class="w-8 h-8 pb-1 absolute m-1 bg-black rounded"
					><div
						class="back-button before:block before:bg-white before:absolute before:h-1 before:w-8 before:rounded-sm after:block after:bg-white after:absolute after:h-1 after:w-8 after:rounded-sm"
					/></button
				>
				{#if aboutTEDx}
					<div class="m-4">
						<h1
							class="text-center font-bold text-2xl underline mb-2"
						>
							About TEDx
						</h1>
						<p class="text-left h-80 overflow-auto">
							In the spirit of ideas worth spreading, TEDx is a
							program of local, self-organized events that bring
							people together to share a TED-like experience. At a
							TEDx event, TED Talks video and live speakers
							combine to spark deep discussion and connection.
							These local, self-organized events are branded TEDx,
							where x = independently organized TED event. The TED
							Conference provides general guidance for the TEDx
							program, but individual TEDx events are
							self-organized. (Subject to certain rules and
							regulations.)
						</p>
					</div>
				{:else}
					<div class="m-4">
						<h1
							class="text-center font-bold text-2xl underline mb-2"
						>
							About TED
						</h1>
						<p class="text-left h-80 overflow-auto">
							TED is a nonprofit organization devoted to Ideas
							Worth Spreading, often in the form of short talks
							delivered by leading thinkers and doers. Many of
							these talks are given at TED Conferences, intimate
							TED Salons and thousands of independently organised
							TEDx events around the world. Videos of these talks
							are made available, free, on <a
								href="http://ted.com/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline">TED.com</a
							>
							and other platforms. Audio versions of TED Talks are
							published to
							<a
								href="http://applepodcasts.com/tedtalksdaily"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline"
								>TED Talks Daily</a
							>, available on all podcast platforms.<br /><br />
							TED's open and free initiatives for spreading ideas include
							<a
								href="http://ted.com/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline">TED.com</a
							>, where new TED Talk videos are posted daily;
							<a
								href="http://www.ted.com/tedx"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline">TEDx</a
							>, which licenses thousands of individuals and
							groups to host local, self-organized TED-style
							events around the world; the
							<a
								href="http://www.ted.com/fellows"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline">TED Fellows</a
							>
							program, which selects innovators from around the globe
							to amplify the impact of their remarkable projects and
							activities;
							<a
								href="https://audaciousproject.org/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline"
								>The Audacious Project</a
							>, which surfaces and funds critical ideas that have
							the potential to impact millions of lives;
							<a
								href="https://www.ted.com/about/programs-initiatives/ted-translators"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline"
								>TED Translators Program</a
							>, which crowdsources the subtitling of TED Talks so
							that big ideas can spread across languages and
							borders; and the educational initiative
							<a
								href="http://ed.ted.com/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline">TED-Ed</a
							>. TED also offers
							<a
								href="https://tedatwork.ted.com/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline">TED@Work</a
							>
							a program that reimagines TED Talks for workplace learning.
							TED also has a growing library of original podcasts,
							including
							<a
								href="https://www.ted.com/podcasts/ted-interview"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline"
								>The TED Interview</a
							>
							with Chris Anderson,
							<a
								href="https://www.ted.com/podcasts/worklife"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline"
								>WorkLife with Adam Grant</a
							>,
							<a
								href="https://www.ted.com/podcasts/far_flung_with_saleem_reshamwala"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline"
								>Far Flung with Saleem Reshamwala</a
							>
							and
							<a
								href="https://www.ted.com/podcasts/how-to-be-a-better-human"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline"
								>How to Be a Better Human</a
							>. Follow TED on
							<a
								href="http://twitter.com/TEDTalks"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline">Twitter</a
							>,
							<a
								href="http://www.facebook.com/TED"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline">Facebook</a
							>,
							<a
								href="https://instagram.com/ted"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline">Instagram</a
							>
							and on
							<a
								href="https://www.linkedin.com/company/ted-conferences"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 underline">LinkedIn</a
							>.
						</p>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style scoped>
	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: 384px 384px;
		}
	}

	.shadow:hover {
		box-shadow: 7px 6px 5px 0px rgba(0, 0, 0, 0.75);
		transition-property: box-shadow;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.back-button::before {
		content: " ";
		transform: rotate(405deg);
	}

	.back-button {
		background: rgba(255, 255, 255, 0);
	}

	.back-button::after {
		content: " ";
		transform: rotate(-405deg);
	}
</style>
