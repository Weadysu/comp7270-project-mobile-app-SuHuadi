<template>
  <Page>
    <ActionBar title>
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>
    <FlexboxLayout>
      <StackLayout class="form">
        <StackLayout class="input-field" marginBottom="25">
          <TextField
            class="input"
            v-model="username"
            returnKeyType="next"
            hint="Username"
            required
          />
        </StackLayout>

        <StackLayout class="input-field" marginBottom="25">
          <TextField
            ref="password"
            class="input"
            hint="Password"
            secure="true"
            v-model="password"
            required
          />
        </StackLayout>

        <Button
          :text="isLoggingIn ? 'Log In' : 'Log off'"
          @tap="submit"
          class="btn-primary m-t-20"
        />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  props: ["$delegate"],
  data() {
    return {
      isLoggingIn: true,
      user: {
        email: "foo@foo.com",
        password: "foo"
      }
    };
  },

  methods: {
    submit: async function submit() {
      console.log("try to login");
      var url = global.rootURL + "/user/login";
      var formData = new FormData();
      if (this.username) {
        formData.append("username", this.username);
      }
      if (this.password) {
        formData.append("password", this.password);
      }
      var response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        body: formData
      });
  
      if (response.ok) {
        var data = await response.json();
        global.$userId = data.userId;
        alert({
          title: "",
          message: data.message,
          okButtonText: "OK"
        }).then(() => {

          global.isLogined = true;
          global.$username = this.username;
          this.$delegate.updateLogin();

          this.$navigateBack();
        });
      } else if (response.status == 401) {
        var data = await response.text();
        alert({
          title: "",
          message: data,
          okButtonText: "OK"
        });
      } else {
        alert({
          title: "",
          message: response.statusText,
          okButtonText: "OK"
        });
      }
    }
  }
};
</script>

<style scoped>
.page {
  align-items: center;
  flex-direction: column;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
}

.input-field {
  margin-bottom: 25;
}

.input {
  font-size: 18;
}

.input-field .input {
  font-size: 30;
}

.btn-primary {
  height: 50;
  margin: 30 5 15 5;
  background-color: rgb(35, 91, 212);
  border-radius: 5;
  font-size: 20;
  font-weight: 600;
}
</style>