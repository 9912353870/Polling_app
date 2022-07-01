<script>
  import PollStore from "../store/PollList";
  import Button from "./Button.svelte";
  import { createEventDispatcher } from "svelte";

  let formData = {
    question: "",
    answerA: "",
    answerB: "",
  };
  let error = {
    question: "",
    answerA: "",
    answerB: "",
  };
  let isValid = false;
  let dispatch = createEventDispatcher();

  const handleOnSubmit = () => {
    isValid = true;
    if (formData.question.trim().length <= 5) {
      isValid = false;
      error.question = "Question should contain atleast 5 characters.";
    } else {
      error.question = "";
    }

    if (formData.answerA.trim().length < 1) {
      isValid = false;
      error.answerA = "Answer A should not be empty";
    } else {
      error.answerA = "";
    }

    if (formData.answerB.trim().length < 1) {
      isValid = false;
      error.answerB = "Answer B should not be empty";
    } else {
      error.answerB = "";
    }

    if (isValid) {
      let poll = { ...formData, voteA: 0, voteB: 0, id: Math.random() };
      PollStore.update((currData) => {
        return [poll, ...currData];
      });
      dispatch("handleAddPoll");
    }
  };
</script>

<form on:submit|preventDefault={handleOnSubmit}>
  <div class="form-field">
    <label for="question">Question:</label>
    <input type="text" id="question" bind:value={formData.question} />
    <div class="error">{error.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A</label>
    <input type="text" id="answer-a" bind:value={formData.answerA} />
    <div class="error">{error.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B</label>
    <input type="text" id="answer-b" bind:value={formData.answerB} />
    <div class="error">{error.answerB}</div>
  </div>
  <Button>Add Poll</Button>
  <!-- <Button type={"secondary"} flat={true} inverse={true}>Add Poll</Button> -->
</form>

<style>
  form {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
    text-align: left;
  }
  .form-field input {
    width: 100%;
    border-radius: 6px;
    min-height: 25px;
    margin: 10px auto;
  }
  .form-field label {
    margin: 20px auto;
  }
  .error {
    color: #d91b42;
    margin: 10px auto;
  }
</style>
