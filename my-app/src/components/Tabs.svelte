<script>
  import { createEventDispatcher } from "svelte";
  export let tabs;
  export let activePoll;

  let dispatch = createEventDispatcher();
</script>

<div>
  <ul class="tabs-ul">
    {#each tabs as tabElement}
      <li
        class:active={tabElement === activePoll}
        on:click={() => dispatch("handleTabChange", tabElement)}
      >
        {tabElement}
      </li>
    {/each}
  </ul>
</div>

<style>
  div {
    text-align: center;
    width: 100%;
  }
  .tabs-ul {
    display: flex;
    justify-content: center;
    margin: 40px auto;
    list-style: none;
  }
  .tabs-ul li {
    padding: 15px;
    color: rgb(127, 125, 125);
    font-size: 14px;
    cursor: pointer;
  }
  .active {
    color: rgb(247, 107, 247) !important;
    border-bottom: 2px solid plum;
  }
</style>
