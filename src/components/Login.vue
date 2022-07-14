<template>
<div class="abajo-contacto">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <h1>Log-In</h1>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Pass:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="****"

          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
  </template>
<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style>
.abajo-contacto{
    z-index: 2;
    padding-left: 8%;
    display: flex;
    position: absolute;
    margin-top: 60rem;
    width: 50%;
    justify-content: center;
}
.abajo-contacto h1{
        margin-left: -8%;
padding-bottom: 5%;
}
</style>