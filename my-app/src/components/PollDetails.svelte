<script>
  import Card from "./Card.svelte";
  import { createEventDispatcher } from "svelte";
  import PollStore from "../store/PollList";
  import Button from "./Button.svelte";
  import { tweened } from "svelte/motion";

  export let poll;
  let dispatch = createEventDispatcher();
  $: totalVotes = poll.voteA + poll.voteB;
  $: percentA = Math.floor((100 / totalVotes) * poll.voteA) || 0;
  $: percentB = Math.floor((100 / totalVotes) * poll.voteB) || 0;

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);

  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  const handleVote = (vote, id) => {
    //dispatch("vote", { vote, id });

    PollStore.update((currData) => {
      const customPoll = [...currData];
      const upvotes = customPoll?.find((item) => item.id === id);

      if (vote === "a") {
        upvotes.voteA++;
      }
      if (vote === "b") {
        upvotes.voteB++;
      }
      return customPoll;
    });
  };

  const handleDelete = (id) => {
    PollStore.update((currData) => {
      return currData.filter((item) => item.id !== id);
    });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total Votes: {totalVotes}</p>

    <div class="answer" on:click={() => handleVote("a", poll.id)}>
      <div class="percent percent-A" style="width: {$tweenedA}%" />
      <span>{poll.answerA} ({poll.voteA})</span>
    </div>

    <div class="answer" on:click={() => handleVote("b", poll.id)}>
      <div class="percent percent-B" style="width: {$tweenedB}%" />
      <span>{poll.answerB} ({poll.voteB})</span>
    </div>
  </div>
  <div class="delete">
    <Button flat={true} inverse={true} on:click={() => handleDelete(poll.id)}
      >Delete</Button
    >
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-A {
    border-left: 4px solid #d91b42;
    background: rgba(217, 27, 66, 0.2);
  }
  .percent-B {
    border-left: 4px solid #45c496;
    background: rgba(69, 196, 150, 0.2);
  }
  .delete {
    margin-top: 20px;
    text-align: right;
  }
</style>
