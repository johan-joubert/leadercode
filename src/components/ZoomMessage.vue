<template>
  <div v-if="getMessage">
    {{ message.title }}
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ZoomMessage",

    data() {
        return {
            id: this.$route.params.id,
            errors: [],
            message: null,
        };
    },
    methods: {
        getMessage() {
            axios
                .get(
                "https://crudcrud.com/api/adec08b66b074c5dbc249fc1b54a6845/message/"+this.id
                )
                .then((response) => {
                this.message = response.data;

                console.log(this.message);
                });
        },
    },
    created() {
        this.getMessage();
    },
}

</script>
