<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
  <slot />
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    padding: 8px 12px;
    font-weight: bold;
    border-radius: 6px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.8);
  }
  .primary {
    background-color: #d91b42;
    color: white;
  }
  .secondary {
    background-color: #45c496;
    color: white;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    border: 1px solid #d91b42;
    color: #d91b42;
    background-color: white;
  }
  .secondary.inverse {
    border: 1px solid #45c496;
    color: #45c496;
    background-color: white;
  }
</style>
