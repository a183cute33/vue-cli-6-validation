<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="top-line"></div>
        <div class="progress">
          <div class="in"></div>
          <div class=""></div>
          <div class=""></div>
          <div class=""></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <center>
          <h1>Create Account</h1>
          <div>Glad to see you here!</div>
        </center>
      </div>
    </div>
    <div class='form'>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="">Account</label>
            <input type="email" name="Email" class="form-control" placeholder="hexschool@email.com" data-toggle="tooltip" title="INVALID EMAIL">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="">Password</label>
            <input type="password" name="Password" class="form-control" placeholder="Password" data-toggle="tooltip" title="MINIMUM 8 CHARACTERS">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" name="ConfirmPassword" data-valid="1" class="form-control" placeholder="Password" data-toggle="tooltip" title="NOT MATCH">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
        </div>
      </div>
       <div class="row">
        <div class="col-12">
          <div class="form-group">
            <router-link :to="{ path: '/GeneralInfomation'}" replace>
              <button type="submit" class="btn btn-primary form-control warn">SUBMIT & NEXT</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
