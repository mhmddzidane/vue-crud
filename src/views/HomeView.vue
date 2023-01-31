<script setup></script>

<template>
  <div class="container mt-4">
    <h2>Contact Manager</h2>

    <router-link to="/add">
      <button class="btn btn-success">
        <i class="bi bi-person-plus-fill"></i>
        New
      </button>
    </router-link>
    <div class="input-group flex-nowrap mt-3">
      <span class="input-group-text bg-success text-white" id="addon-wrapping"
        ><i class="bi bi-search"></i
      ></span>
      <input
        v-model="query"
        @keyup="searchContacts"
        type="text"
        class="form-control"
        placeholder="Search Name..."
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
    </div>

    <h2 class="text-center mt-5" v-if="contacts.length == 0">no contact</h2>

    <div class="row">
      <div class="col-lg-4 mt-3" v-for="contact in contacts" :key="contact.id">
        <div class="row p-2">
          <div class="col-6">
            <div class="card" style="width: 12rem">
              <img :src="`${contact.image}`" class="card-img-top" alt="..." />
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-truncate">
                    {{ contact.name }}
                  </li>
                  <li class="list-group-item">{{ contact.mobile }}</li>
                  <li class="list-group-item">{{ contact.email }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-6 d-grid bg-white gap-2 py-2">
            <router-link
              class="btn btn-warning text-light d-flex justify-content-center align-items-center"
              :to="'/contact/' + contact.id"
            >
              <i class="bi bi-eye"></i>
            </router-link>
            <router-link
              :to="'/edit-contact/' + contact.id"
              class="btn btn-primary text-light d-flex justify-content-center align-items-center"
            >
              <i class="bi bi-pencil-fill"></i>
            </router-link>
            <button class="btn btn-danger" @click="deleteContact(contact.id)">
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from "../services/ContactService";
export default {
  name: "Home",

  data() {
    return {
      loading: false,
      contacts: [],
      error: null,
      query: "",
    };
  },
  methods: {
    searchContacts: async function () {
      let res = await ContactService.searchContacts(this.query);
      this.contacts = res.data;
    },
    deleteContact: async function (contactId) {
      let res = await ContactService.deleteContact(contactId);
      if (res) {
        let res = await ContactService.getAllContacts();
        this.contacts = res.data;
        this.loading = false;
      }
    },
  },
  created: async function () {
    try {
      this.loading = true;
      let res = await ContactService.getAllContacts();
      this.contacts = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.error = error;
      this.loading = false;
    }
  },
};
</script>
