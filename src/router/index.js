import { createWebHistory, createRouter } from "vue-router";
import EditMessage from "../components/EditMessage.vue";
import ZoomMessage from "../components/ZoomMessage.vue";
import App from "../App.vue";


const routes = [
    {
        path: "/",
        name: "App",
        component: App
    },
    {
        path: "/editMessage/:id",
        name: "EditMessage",
        component: EditMessage
    },
    {
        path: "/zoomMessage/:id",
        name: "ZoomMessage",
        component: ZoomMessage
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;


