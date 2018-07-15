<template>
      <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="top-line"></div>
        <div class="progress">
          <div class="in done"></div>
          <div class="in done"></div>
          <div class="in done"></div>
          <div class="in"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <center>
          <h1>Payment Method</h1>
          <div>Add your credit card infomation! </div>
        </center>
      </div>
    </div>
    <div class='form'>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label>Card Number</label>
            <input type="text" name="CardNumber" data-valid="1" class="form-control" placeholder="1234 5678 9012 3456" data-toggle="tooltip" title="INVALID NUMBER">
            <i class="fas fa-exclamation-triangle"></i>
            <i class="fab fa-cc-visa visa" style="display: none;"></i>
            <i class="fab fa-cc-mastercard master" style="display: none;"></i>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
            <div class="form-group">
                <label>Cardholder Name</label>
                <input type="password" name="CardholderName" class="form-control" placeholder="EXAMPLE NAME">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
        </div>
        <div class="col-6">
            <div class="form-group">
                <label>Bank Name</label>
                <input type="password" name="BankName" class="form-control" placeholder="EXAMPLE BANK">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
        </div>
      </div>
      <div class="row">
            <div class="col-4">
                <div class="form-group">
                    <label>CVV</label>
                    <input type="text" name="CVV" class="form-control" placeholder="666">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
            </div>
            <div class="col-4">
                <div class="form-group">
                    <label>Expire Date</label>
                    <select class="form-control" name="ExpireMonth" data-from="1" data-to="12" required>
                    <option value="" hidden>MM</option>
                    </select>
                </div>
            </div>
            <div class="col-4">
                <div class="form-group">
                    <label>&nbsp;</label>
                    <select class="form-control" name="ExpireYear" data-from="2018" data-to="2028" required>
                    <option value="" hidden>YYYY</option>
                    </select>
                </div>
            </div>
      </div>
       <div class="row">
        <div class="col-12">
          <div class="form-group">
           <router-link :to="{ path: '/Congratulations'}" replace>
              <button type="submit" class="btn btn-primary form-control warn">DONE</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PaymentMethod"
};
</script>
<style>
.visa,
.master {
  display: none;
  font-size: 30px;
  bottom: 4px !important;
}
</style>
