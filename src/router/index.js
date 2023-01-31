import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactDetail from "../views/ContactDetail.vue";
import AddContact from "../views/AddContact.vue";
import EditContact from "../views/EditContact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/add",
      name: "add",
      component: AddContact,
    },
    {
      path: "/contact/:id",
      name: "contactDetail",
      component: ContactDetail,
    },
    {
      path: "/edit-contact/:id",
      name: "editContact",
      component: EditContact,
    },
  ],
});

export default router;
