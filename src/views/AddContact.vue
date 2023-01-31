<template>
  <div class="mt-3">
    <h2>Add Contact</h2>
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
          aria-label="Default select example"
        >
          <option value="" selected disabled>Select Group</option>
          <option :value="group.id" v-for="group of groups" :key="group.id">
            {{ group.name }}
          </option>
        </select>
        <button class="btn btn-success mt-5" @click="submitContact()">
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
  name: "AddContact",
  data() {
    return {
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
    submitContact: async function () {
      try {
        let res = await ContactService.addContact(this.contact);
        if (res) {
          return this.$router.push("/");
        } else {
          return this.$router.push("/add");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created: async function () {
    try {
      let res = await ContactService.getAllGroup();
      this.groups = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
