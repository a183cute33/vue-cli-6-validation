<template>
      <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="top-line"></div>
        <div class="progress">
          <div class="in done"></div>
          <div class="in done"></div>
          <div class="in"></div>
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
            <div class="col-12">
            <div class="form-group">
                <label>
                    <div class="upload-box">
                        <i class="fas fa-images"></i>
                        <div>
                        UPLOAD UP TO 3 PHOTOS
                        <br> MAX SIZE: 150*150px
                        </div>
                    </div>
                    <input type="file" name="Photos" accept="image/*" multiple>
                </label>
            </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
            <div class="form-group">
                <router-link :to="{ path: '/PaymentMethod'}" replace>
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
.upload-box {
  margin-top: 24px;
  border: 2px solid #000000;
  border-radius: 8px;
  width: 460px;
  height: 140px;
}
.upload-box i {
  width: 58px;
  height: 48px;
  font-size: 48px;
  text-align: center;
  margin-top: 48px;
  margin-left: 69px;
}
.upload-box div {
  width: 235px;
  height: 48px;
  margin-top: 48px;
  margin-left: 20px;
  color: #9b9b9b;
  display: inline-block;
}
.upload-box + input {
  width: 460px;
  height: 140px;
  position: absolute;
  top: 16px;
  opacity: 0;
  cursor: pointer;
}
</style>
