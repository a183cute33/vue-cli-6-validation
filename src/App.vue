<template>
  <router-view/>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.top-line {
  width: 456px;
  height: 3px;
  background-color: #0275d8;
  border: 8px solid #0275d8;
  border-top: 0;
  margin: 0 auto;
}
.progress {
  margin: 64px auto;
  width: 234px;
  height: auto;
  background: #ffffff;
  border: 2px solid #bee1ff;
}
.progress > div {
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 2px solid #bee1ff;
  border-radius: 16px;
  position: absolute;
  margin-top: -8px;
  margin-left: -8px;
}
.progress > div:nth-child(2) {
  margin-left: 70px;
}

.progress > div:nth-child(3) {
  margin-left: 148px;
}

.progress > div:nth-child(4) {
  margin-left: 226px;
}

.progress > .in:after {
  content: "";
  width: 8px;
  height: 8px;
  background: #0275d8;
  display: block;
  border-radius: 8px;
  margin-top: 2px;
  margin-left: 2px;
}

.progress > .in:before {
  content: "";
  display: block;
  position: absolute;
  width: 65px;
  background: #ffffff;
  border: 2px solid #0275d8;
  margin-top: 4px;
  margin-left: -65px;
}

.progress > .in:first-child:before {
  display: none;
}

.progress > .in.done:after {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 900;
  content: "\f00c";
  width: 16px;
  height: 16px;
  margin: -2px;
  color: white;
  text-align: center;
}
.form {
  width: 460px;
  margin: 0 auto;
}
.tooltip {
  margin-left: 10px;
}
.tooltip .arrow:before {
  border-right-color: #f5a623;
  border-left-color: #f5a623;
}
.tooltip-inner {
  background: #f5a623;
}
.form-control.warn {
  border-color: #f5a623;
  border-width: 2px;
}

.form-control.warn:after {
  content: attr(value);
}
.form-control ~ i {
  display: none;
  position: absolute;
  bottom: 12px;
  right: 10px;
}

.btn-primary.form-control.warn {
  border-color: #007bff;
  border-width: 1px;
  opacity: 0.5;
}

.btn-warning.warn {
  color: white;
  background: #f5a623;
}
</style>

