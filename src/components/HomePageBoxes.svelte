<script lang="ts">
	import { quintOut } from "svelte/easing";
	import { event } from "../content.json";
	import { fade } from "svelte/transition";

	let copyButtonText = "Copy to clipboard";
	function copyAdress() {
		navigator.clipboard.writeText(event.location);
		copyButtonText = "Copied to clipboard";
		setTimeout(() => (copyButtonText = "Copy to clipboard"), 750);
	}

	let viewMoreState = false;
	$: document.body.classList[viewMoreState ? "add" : "remove"]("scroll-lock");
</script>

<div class="flex justify-center">
	<div class="lg:grid lg:gap-12 lg:items-center m-4" id="grid">
		<div
			class="shadow bg-tedRed rounded w-64 h-64 mx-auto sm:mx-0 sm:w-96 sm:h-96 p-4 my-6 lg:my-0"
		>
			<h1 class="text-center font-bold text-2xl underline mb-2">
				This Year's Theme
			</h1>
			<div class="flex items-center justify-center h-40 sm:h-64">
				<img
					src="{import.meta.env.BASE_URL}images/theme.svg"
					alt="Text which states: Small Changes, Big Impacts."
					width="296"
					height="67"
				/>
			</div>
		</div>

		<div
			class="shadow bg-tedRed rounded w-64 h-64 mx-auto sm:mx-0 sm:w-96 sm:h-96 p-4 my-6 lg:my-0"
		>
			<h1 class="text-center font-bold text-2xl underline mb-2">
				Event Date
			</h1>
			<img
				src="{import.meta.env.BASE_URL}images/calender.svg"
				width="225"
				height="205"
				alt="Calender with event date."
				class="mx-auto rounded m-4 w-36 sm:w-auto"
			/>
			<p class="text-center text-xl underline">{event.date}</p>
		</div>

		<div
			class="shadow bg-tedRed rounded w-64 h-64 mx-auto sm:mx-0 sm:w-96 sm:h-96 p-4 my-6 lg:my-0"
		>
			<h1 class="text-center font-bold text-2xl underline mb-2">
				Location
			</h1>
			<div class="flex flex-col justify-center items-center">
				<p class="text-center">{event.location}</p>
				<iframe
					src={event.googleMapsEmbedURL}
					title="Map of event location."
					width="200"
					height="200"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					class="my-3 hidden sm:block"
				/>
				<button
					class="hover:border-4 hover:mt-10 hover:sm:mt-0 border-white mt-11 sm:mt-1 p-1 w-52 rounded transition-all"
					on:click={() => copyAdress()}
					><img
						src="{import.meta.env.BASE_URL}images/copy-icon.svg"
						width="32px"
						height="32px"
						alt="Copy to clipboard icon."
						class="inline"
					/>{copyButtonText}</button
				>
			</div>
		</div>

		<div
			class="shadow bg-tedRed rounded w-64 h-64 mx-auto sm:mx-0 sm:w-96 sm:h-96 p-4 my-6 lg:my-0"
		>
			<h1 class="text-center font-bold text-2xl underline mb-2">
				What is TEDx?
			</h1>
			<p class="text-left line-clamp-6">
				In the spirit of ideas worth spreading, TED has created a
				program called TEDx. TEDx is a program of local, self-organized
				events that bring people together to share a TED-like
				experience. Our event is called TEDx{event.eventName}, where x =
				independently organized TED event. At our TEDx{event.eventName}
				event, TED Talks video and live speakers will combine to spark deep
				discussion and connection in a small group. The TED Conference provides
				general guidance for the TEDx program, but individual TEDx events,
				including ours, are self-organized.
				<br /><br />
				Find out more at the
				<a
					href="https://www.ted.com/tedx"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 underline">TEDx Official Website</a
				>.
			</p>
			<br />
			<button class="underline" on:click={() => (viewMoreState = true)}
				>View More</button
			>
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
					class="w-8 h-8 pb-1 absolute m-1 bg-black rounded hover:opacity-50 transition-opacity"
					><div
						class="back-button before:block before:bg-white before:absolute before:h-1 before:w-8 before:rounded-sm after:block after:bg-white after:absolute after:h-1 after:w-8 after:rounded-sm"
					/></button
				>
				<div class="m-4">
					<h1 class="text-center font-bold text-2xl underline mb-2">
						What is TEDx?
					</h1>
					<p class="text-left h-80 overflow-auto">
						In the spirit of ideas worth spreading, TED has created
						a program called TEDx. TEDx is a program of local,
						self-organized events that bring people together to
						share a TED-like experience. Our event is called TEDx<span
							class="text-xs">{event.eventName}</span
						>, where x = independently organized TED event. At our
						TEDx<span class="text-xs">{event.eventName}</span>
						event, TED Talks video and live speakers will combine to
						spark deep discussion and connection in a small group. The
						TED Conference provides general guidance for the TEDx program,
						but individual TEDx events, including ours, are self-organized.
						<br /><br />
						Find out more at the
						<a
							href="https://www.ted.com/tedx"
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-400 underline"
							>TEDx Official Website</a
						>.
					</p>
				</div>
			</div>
		</div>
	{/if}
</div>

<style scoped>
	@media (min-width: 1024px) {
		#grid {
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
