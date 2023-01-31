<template>
  <div class="mt-2">
    <h2>Edit Contact</h2>
    <div class="row">
      <div class="col-6">
        <div class="input-group mb-3">
          <input
            v-model="contact.name"
            type="text"
            class="form-control"
            placeholder="Name.."
          />
        </div>
        <div class="input-group mb-3">
          <input
            v-model="contact.image"
            type="text"
            class="form-control"
            placeholder="Image.."
          />
        </div>
        <div class="input-group mb-3">
          <input
            v-model="contact.mobile"
            type="text"
            class="form-control"
            placeholder="Mobile.."
          />
        </div>
        <div class="input-group mb-3">
          <input
            v-model="contact.email"
            type="text"
            class="form-control"
            placeholder="Email.."
          />
        </div>
        <div class="input-group mb-3">
          <input
            v-model="contact.company"
            type="text"
            class="form-control"
            placeholder="Company.."
          />
        </div>
        <div class="input-group mb-3">
          <input
            v-model="contact.title"
            type="text"
            class="form-control"
            placeholder="title.."
          />
        </div>
        <select
          v-model="contact.groupId"
          class="form-select"
          v-if="groups.length > 0"
        >
          <option value="">Select Group</option>
          <option :value="group.id" v-for="group of groups" :key="group.id">
            {{ group.name }}
          </option>
        </select>
        <button class="btn btn-success mt-5" @click="editContact(contact.id)">
          Save
        </button>
      </div>
      <div class="col-6">
        <img :src="contact.image" :style="{ width: '200px' }" />
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from "../services/ContactService";
export default {
  name: "EditContact",
  data() {
    return {
      loading: false,
      error: null,
      contact: {
        name: "",
        image: "",
        mobile: "",
        email: "",
        company: "",
        title: "",
        groupId: "",
      },
      groups: [],
    };
  },
  methods: {
    editContact: async function (contactId) {
      try {
        let res = await ContactService.editContact(this.contact, contactId);
        if (res) {
          return this.$router.push("/");
        } else {
          return this.$router.push(`/edit-contact/${this.$route.params.id}`);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created: async function () {
    try {
      this.loading = true;
      let res = await ContactService.getDetailContact(this.$route.params.id);
      let groupRes = await ContactService.getAllGroup();
      this.contact = res.data;
      this.groups = groupRes.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.error = error;
      this.loading = false;
    }
  },
};
</script>

<style></style>
