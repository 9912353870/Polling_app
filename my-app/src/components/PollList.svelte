<script>
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../store/PollList";
  import { fade, slide, scale } from "svelte/transition";

  export let PollList = [];

  PollStore.subscribe((data) => {
    PollList = data;
  });
</script>

<div class="poll-list">
  {#each PollList as poll (poll.id)}
    <div class="poll-item" transition:fade|local>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
</style>
