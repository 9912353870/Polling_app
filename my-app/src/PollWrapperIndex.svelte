<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./components/Tabs.svelte";
  import AddNewPoll from "./components/AddNewPoll.svelte";
  import PollList from "./components/PollList.svelte";

  let tabs = ["Current Polls", "Add New Polls"];
  let activePoll = "Current Polls";
  let polls;

  const handleTabChange = (e) => {
    activePoll = e.detail;
  };

  const handleAddPoll = () => {
    activePoll = "Current Polls";
  };
</script>

<div id="header"><Header /></div>
<div id="content">
  <Tabs {tabs} {activePoll} on:handleTabChange={handleTabChange} />
  {#if activePoll === "Current Polls"}
    <PollList />
  {:else}
    <AddNewPoll on:handleAddPoll={handleAddPoll} />
  {/if}
</div>
<Footer />

<style>
  #content {
    margin-top: 150px;
  }
</style>
