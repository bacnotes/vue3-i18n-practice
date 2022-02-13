<template>
  <div class="wrapper">
    <Card
      v-for="user in userData.userList"
      :key="user.login.uuid"
      :user="user"
    />
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import Card from "@/components/Card";
import userAPI from "./../apis/user";
import { Toast } from "./../utils";
export default {
  name: "Home",
  components: {
    Card,
  },
  setup() {
    const userData = reactive({ userList: [] });
    userData.userList = JSON.parse(localStorage.getItem("userList"));
    async function fetchData() {
      try {
        const response = await userAPI.getUsers(30);
        const data = response.data.results;
        if (response.status !== 200) {
          throw new Error();
        }
        localStorage.setItem("userList", JSON.stringify(data));
        userData.userList = [...data];
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法獲取資料，請稍後再試",
        });
      }
    }

    onMounted(() => {
      fetchData();
    });
    return { userData };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @apply relative flex flex-wrap gap-5 justify-center px-5 py-5 m-5 bg-fixed;
  background-image: url("https://source.unsplash.com/1600x900/?landscape");
}
</style>
