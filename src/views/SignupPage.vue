<template>
  <div>
    <div class="signup-container">
      <form class="signup-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="form.password" placeholder="Password" />
        </div>
        <button type="submit" class="signup-button" @click.prevent="signup">Signup</button>
      </form>
    </div>
  </div>
</template>



<script>

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signup() {
      console.log("Form submitted:", this.form);
    },
  },
};
</script>


<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5; 
  height: calc(100vh - 160px);
}

.signup-form {
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  align-items: center; 
  gap: 10px; 
}

label {
  font-size: 1rem;
  color: #333;
  flex: 1; 
  text-align: right; 
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #fff;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
  flex: 2; 
}

input:focus {
  outline: none;
  border-color: #007bff;
}

.signup-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
}

.signup-button:hover {
  background-color: #0056b3;
}

footer {
  margin-top: auto;
}
</style>


