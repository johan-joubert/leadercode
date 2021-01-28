<template>
  <div class="text-center" v-for="message in messages" :key="message.id">
    <small
      >posté par : {{ message.pseudo }}, le
      {{ moment(message.date).format("DD.MM.YYYY [&nbsp;] HH:mm") }}</small
    >
    <button @click="deleteMessage(message._id)">Supprimer</button>

    <router-link :to="{ path: '/editMessage/' + message._id }">
      <button>modifier</button>
    </router-link>

    <router-link :to="{ path: '/zoomMessage/' + message._id }">
      <button>Zoom</button>
    </router-link>

    <h2>{{ message.title }}</h2>

    <img
      :src="message.image"
      class="lazy"
      alt=""
      width="50"
    />
    <p>{{ message.town }}</p>
    <p>{{ message.country }}</p>
    <div></div>
    <p>{{ message.content }}</p>
    <p>{{ message.tags }}</p>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Messages",
  data() {
    return {
      id: null,
      messages: null,
      title: "",
      pseudo: "",
      town: "",
      country: "",
      content: "",
      tags: "",
      date: "",
      image: "",
      errors: [],
    };
  },
  created: function () {
    (this.moment = moment),
      axios
        .get(
          "https://crudcrud.com/api/adec08b66b074c5dbc249fc1b54a6845/message"
        )
        .then((response) => {
          this.messages = response.data;
          this.messages = this.messages.reverse();
        });
  },
  methods: {
    deleteMessage(id) {
      axios
        .delete(
          "https://crudcrud.com/api/adec08b66b074c5dbc249fc1b54a6845/message/" +
            id
        )
        .then(() => {
          console.log(this.messages);
          location.reload();
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    editMessage(id) {
      console.log(id);
      document.getElementById("form" + id).preventDefault();
      axios.put(
        "https://crudcrud.com/api/adec08b66b074c5dbc249fc1b54a6845/message/" +
          id
      );
    },
  },
};
</script>