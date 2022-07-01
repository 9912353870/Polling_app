import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Javascript OR Python ?",
    answerA: "Javascript",
    answerB: "Python",
    voteA: 10,
    voteB: 12,
  },
]);

export default PollStore;
