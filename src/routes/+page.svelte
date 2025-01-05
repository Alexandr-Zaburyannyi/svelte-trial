<script>
  import { writable } from 'svelte/store';

  const tasks = writable([
    { id: Math.random(), value: 'Learn Svelte', status: 'pending' },
    { id: Math.random(), value: 'Build something awesome', status: 'pending' },
  ]);

  const handleDoneClick = (/** @type {number} */ id) => {
    tasks.update((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, status: 'done' } : task,
      ),
    );
  };
</script>

<svelte:head>
  <title>Home</title>
  <meta
    name="description"
    content="Svelte demo app"
  />
</svelte:head>

<section>
  <h1>Your tasks:</h1>
  <button>Add task</button>
  <ul>
    {#each $tasks as { id, value, status }}
      <li>
        <h3>Task: {value}</h3>

        <p>Task status: {status}</p>
        <div>
          <button
            class="done-task"
            on:click={() => handleDoneClick(id)}>Done</button
          >
        </div>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  $primary-color: #ff3e00;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    gap: 30px;
    text-align: center;
  }
  li {
    min-width: 300px;
    max-width: 300px;
    padding: 10px;
    border: 3px solid;
    border-radius: 15px;
    border-color: $primary-color;
  }

  .done-task {
    width: 90px;
    padding: 10px;
    margin-top: 10px;
    border: none;
    background-color: $primary-color;
    border-radius: 15px;
    color: white;
  }
</style>
