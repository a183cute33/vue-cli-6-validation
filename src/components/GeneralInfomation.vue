<template>
      <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="top-line"></div>
        <div class="progress">
          <div class="in done"></div>
          <div class="in"></div>
          <div class=""></div>
          <div class=""></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <center>
          <h1>General Infomation</h1>
          <div>Tell us who you are!</div>
        </center>
      </div>
    </div>
    <div class='form'>
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>Name
              <span>(optional)</span>
            </label>
            <input type="text" name="text" class="form-control" placeholder="Example Name">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
        </div>
         <div class="col-6">
          <div class="form-group">
            <label for="">Phone*</label>
            <input type="text" name="Phone" data-valid="1" class="form-control" placeholder="0912345678" data-toggle="tooltip" title="NUMBERS ONLY">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label>Birth Date
            <span>(optional)</span>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="form-group">
            <select class="form-control" name="BirthYear" data-from="1900" data-to="2018">
              <option value="" hidden>YYYY</option>
            </select>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
            <select class="form-control" name="BirthMonth" data-from="1" data-to="12">
              <option value="" hidden>MM</option>
            </select>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
            <select class="form-control" name="BirthDate" data-from="1" data-to="31">
              <option value="" hidden>DD</option>
            </select>
          </div>
        </div>
      </div>
       <div class="row">
        <div class="col-12">
          <label>Address*</label>
        </div>
      </div>
      <div class="row">
          <div class="col-6">
              <div class="form-group">
                  <select class="form-control" name="City" >
                      <option value="">City</option>
                  </select>
              </div>
          </div>
          <div class="col-6">
              <div class="form-group">
                  <select class="form-control" name="Dist" >
                      <option value="">Dist</option>
                  </select>
              </div>
          </div>
          <div class="col-12">
               <div class="form-group">
                  <input class="form-control" type="text" placeholder="Address Detail">
              </div>
          </div>
      </div>
       <div class="row">
        <div class="col-12">
          <div class="form-group">
            <router-link :to="{ path: '/UpdateProfilePicture'}" replace>
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
  name: "GeneralInfomation"
};
</script>
<style>
</style>
