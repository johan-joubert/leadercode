<template>
  <div v-if="$route.path == '/'">
    <form method="post" action="" @submit="checkForm">
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Titre</label>
        <input
          type="text"
          v-model="title"
          class="form-control"
          id="exampleInputPassword1"
        />

        <label for="exampleInputPassword1" class="form-label">Pseudo</label>
        <input
          type="text"
          v-model="pseudo"
          class="form-control"
          id="exampleInputPassword1"
        />

        <label for="exampleInputPassword1" class="form-label">Ville</label>
        <input
          type="text"
          v-model="town"
          class="form-control"
          id="exampleInputPassword1"
        />

        <label for="exampleInputPassword1" class="form-label">Pays</label>
        <input
          type="text"
          v-model="country"
          class="form-control"
          id="exampleInputPassword1"
        />

        <label for="exampleInputPassword1" class="form-label">Message</label>
        <textarea
          v-model="content"
          class="form-control"
          id="exampleInputPassword1"
        ></textarea>

        <label for="exampleInputPassword1" class="form-label">Tags</label>
        <input
          type="text"
          v-model="tags"
          class="form-control"
          id="exampleInputPassword1"
        />

        <label for="exampleInputPassword1" class="form-label">Image</label>
        <input
          type="text"
          v-model="image"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors" :key="error.id">
          {{ error.message }}
        </li>
      </ul>

      <button type="submit" class="btn btn-primary" v-on:click="reload">
        Submit
      </button>
    </form>
  </div>
  <div v-else>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      pseudo: "",
      town: "",
      country: "",
      content: "",
      tags: "",
      image: "",
      date: "",
      errors: [],
      previewImage: null,
    };
  },

  methods: {
    checkForm: function (e) {
      e.preventDefault();

      if (this.title && this.pseudo) {
        let message = {
          title: this.title,
          pseudo: this.pseudo,
          town: this.town,
          country: this.country,
          content: this.content,
          tags: this.tags,
          image: this.image,
          date: new Date(),
          selectedFile: null,
        };
        console.log(message);
        axios
          .post(
            `https://crudcrud.com/api/adec08b66b074c5dbc249fc1b54a6845/message`,
            message
          )
          .then(console.log("envoi réussi"), location.reload())
          .catch((e) => {
            this.errors.push(e);
          });

        return true;
      }

      this.errors = [];

      if (!this.title) {
        this.errors.push("Title required.");
      }
      if (!this.pseudo) {
        this.errors.push("Pseudo required.");
      }
    },
    // Pushes posts to the server when called.
  },
};
</script>