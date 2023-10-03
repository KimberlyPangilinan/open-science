<template>
    <div>
      <h1 class="headline">Vue.js Chat Box</h1>
      <main>
        <section ref="chatArea" class="chat-area">
          <p v-for="message in messages" :key="message.id" :class="{ 'message-out': message.author === 'you', 'message-in': message.author !== 'you' }">
            {{ message.body }}
          </p>
        </section>
  
        <section class="chat-inputs">
          <form @submit.prevent="sendMessage('in')" id="person1-form">
            <label for="person1-input">Bob</label>
            <input v-model="bobMessage" id="person1-input" type="text" placeholder="Type your message">
            <button type="submit">Send</button>
          </form>
  
          <button @click="clearAllMessages">Clear All</button>
  
          <form @submit.prevent="sendMessage('out')" id="person2-form">
            <label for="person2-input">You</label>
            <input v-model="youMessage" id="person2-input" type="text" placeholder="Type your message">
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, nextTick } from 'vue';
  
  const bobMessage = ref('');
  const youMessage = ref('');
  const messages = ref([
    {
      id: 1,
      body: "Welcome to the chat, I'm Bob!",
      author: 'bob',
    },
    {
      id: 2,
      body: 'Thank you, Bob',
      author: 'you',
    },
    {
      id: 3,
      body: "You're most welcome",
      author: 'bob',
    },
  ]);
  
  const sendMessage = (direction) => {
    if (!youMessage.value && !bobMessage.value) {
      return;
    }
  
    if (direction === 'out') {
      messages.value.push({ id: messages.value.length + 1, body: youMessage.value, author: 'you' });
      youMessage.value = '';
    } else if (direction === 'in') {
      messages.value.push({ id: messages.value.length + 1, body: bobMessage.value, author: 'bob' });
      bobMessage.value = '';
    } else {
      alert('Something went wrong');
    }
  
    nextTick(() => {
      const messageDisplay = $refs.chatArea;
      messageDisplay.scrollTop = messageDisplay.scrollHeight;
    });
  };
  
  const clearAllMessages = () => {
    messages.value = [];
  };
  </script>
<style>

.chat-area {
/*   border: 1px solid #ccc; */
  background: white;
  height: 50vh;
  padding: 1em;
  overflow: auto;
  max-width: 350px;
  margin: 0 auto 2em auto;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3)
}
.message {
  width: 45%;
  border-radius: 10px;
  padding: .5em;
/*   margin-bottom: .5em; */
  font-size: .8em;
}
.message-out {
  background: #407FFF;
  color: white;
  margin-left: 50%;
}
.message-in {
  background: #F1F0F0;
  color: black;
}
.chat-inputs {
  display: flex;
  justify-content: space-between;
}
#person1-input {
  padding: .5em;
}
#person2-input {
  padding: .5em;  
}
</style>  