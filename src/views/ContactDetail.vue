<template>
  <div class="mt-2">
    <h2>View Contact</h2>

    <div class="row">
      <div class="col-lg-6">
        <img
          :src="`${contact.image}`"
          alt="no profile"
          :style="{ width: '400px' }"
        />
      </div>
      <div class="col">
        <p>Name : {{ contact.name }}</p>
        <p>Mobile : {{ contact.mobile }}</p>
        <p>Email : {{ contact.email }}</p>
        <p>Company : {{ contact.company }}</p>
        <p>Title : {{ contact.title }}</p>
        <p>Gruop : {{ group.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from "../services/ContactService";
export default {
  name: "Detail Contact",
  data() {
    return {
      loading: false,
      contact: {},
      error: null,
      group: {},
    };
  },

  created: async function () {
    try {
      this.loading = true;
      let res = await ContactService.getDetailContact(this.$route.params.id);
      let groupRes = await ContactService.getGroup(res.data);
      this.contact = res.data;
      this.group = groupRes.data;
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
