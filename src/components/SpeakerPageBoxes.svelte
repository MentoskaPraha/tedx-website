<script lang="ts">
    import { speakers } from "../content.json";
    import SpeakerPageBox from "./SpeakerPageBox.svelte";
</script>
<div class="flex justify-center">
	<div class="lg:grid lg:gap-12 lg:items-center m-4" id="grid">
        {#each speakers.list as speaker}
            <SpeakerPageBox
                id={speaker.id}
                name={speaker.name}
                about={speaker.about}
                instagram={speaker.instagram}
                other={speaker.other}
            />
        {/each}
    </div>
</div>

<style scoped>
    @media (min-width: 1024px) {
		#grid {
			grid-template-columns: 384px 384px;
		}
	}

    @media (min-width: 1280px) {
        #grid {
            grid-template-columns: 384px 384px 384px;
        }
    }
</style>
