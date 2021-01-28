<template>
  <h1>modifier</h1>
            <form  method="post" action="" v-on:click="UpdateMessage">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Titre</label
              >
              <input
                type="text"
                v-model="title"
                class="form-control"
                id="exampleInputPassword1"
              />

              <label for="exampleInputPassword1" class="form-label"
                >Pseudo</label
              >
              <input
                type="text"
                v-model="pseudo"
                class="form-control"
                id="exampleInputPassword1"
              />

              <label for="exampleInputPassword1" class="form-label"
                >Ville</label
              >
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

              <label for="exampleInputPassword1" class="form-label"
                >Message</label
              >
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
            </div>
            <ul v-if="errors && errors.length">
              <li v-for="error of errors" :key="error.id">
                {{ error.message }}
              </li>
            </ul>
            
            
            <button v-on:click="reload" type="submit" name="validation" class="btn btn-primary">Submit</button>
            <router-link :to="{ path: '/'}">
            <button v-on:click="reload" type="submit" name="validation" class="btn btn-primary">Retour accueil</button>
            </router-link>
          </form>

</template>

<script>
import axios from "axios";

export default {
  name: "EditMessage",

  data() {
    return {
      id: this.$route.params.id,
      title: null,
      pseudo: null,
      town: null,
      country: null,
      content: null,
      tags: null,
      date: null,
      errors: [],
      reload: null
    };
  },
  methods: {
    getMessage(component) {
      axios
        .get("https://crudcrud.com/api/adec08b66b074c5dbc249fc1b54a6845/message/"+component.id)
        .then((response) => {
          let message = response.data;
          console.log(message);
          component.title = message.title;
          component.pseudo = message.pseudo;
          component.town = message.town;
          component.country = message.country;
          component.content = message.content;
          component.tags = message.tags;
          component.date = message.date;
        })
    },
    UpdateMessage( e ) {
      e.preventDefault();
      console.log(this.$route.params.id,);
      let message = {
        title: this.title,
        pseudo: this.pseudo,
        town: this.town,
        country: this.country,
        content: this.content,
        tags: this.tags,
        date: new Date(),
      };

      axios
        .put(
          "https://crudcrud.com/api/adec08b66b074c5dbc249fc1b54a6845/message/" +
            this.$route.params.id, message
        )
            location.reload()
    },
  },
  created() {
    this.getMessage(this);
  },
  reload() {
    location.reload()
  }
};

</script>