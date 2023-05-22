<script lang="ts" setup>
import { ref } from 'vue'

const formData = ref({
  username: 'admin',
  password: '111111'
})
const submit = () => {
  console.log(formData.value.username)
  console.log(formData.value.password)
}

</script>

<template>
  <div class="mainContainer">
    <el-row>
      <el-col :span="12" :xs="0">33</el-col>
      <el-col :span="12" :xs="24">
        <div class="container">
          <div class="main">
            <div class="title">Login</div>
            <el-form action="#">
              <div class="item username">
                <input type="text" id="username" required v-model="formData['username']">
                <label for="username">UserName</label>
              </div>

              <div class="item password">
                <input type="password" id="password" required v-model="formData['password']">
                <label for="password">PassWord</label>
              </div>
              <button class="item btn" @click.prevent="submit">submit
                <span></span><span></span><span></span><span></span>
              </button>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang='scss'>
.mainContainer {
  height: 100vh;
  background: url("https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg") no-repeat content-box;
  background-size: 100% 100%;
}

.container {
  position: relative;
  height: 100vh;
}

.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 80%;
  max-width: 500px;
  height: 400px;
  color: white;
  background-color: #2c3945;
  box-shadow: 0 15px 25px 0 rgba(31, 22, 22, 0.6);
  border-radius: 20px;
}

.main .title {
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  margin: 50px 0;
}

.main .item {
  position: relative;
  width: 70%;
  height: 26px;
  margin: 30px auto;
}

.main .item input {
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: white;
  border-bottom: 1px solid white;
}

.main .item input:focus + label, .main .item input:valid + label {
  top: -18px;
  left: 0;
  font-size: 6px;
  color: #aed1f5;
  letter-spacing: 1px;
}

.main .item label {
  position: absolute;
  left: 2px;
  top: 8px;
  color: rgb(220, 253, 255);
  font-size: 12px;
  letter-spacing: 2px;
  cursor: text;
  user-select: none;
  transition: all 0.2s ease;
}

.main .btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  width: 75px;
  height: 38px;
  color: rgb(220, 253, 255);
  font-size: 14px;
  text-transform: uppercase;
  border: 1px solid transparent;
  background-color: #0C1521;
  outline: none;
  cursor: pointer;
  transition-duration: 500ms;
}

.main .btn:hover {
  background-color: rgba(3, 233, 244);
  border-radius: 2%;
  color: #fff;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
  animation: all 0.2s linear infinite;
}

.main .btn:hover span {
  display: none;
}

.main .btn > span {
  position: absolute;
}

.main .btn > span:nth-child(1) {
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 1px;
  background: -webkit-linear-gradient(left, transparent, #03e9f4);
  animation: line1 1s 0s linear infinite;
}

@keyframes line1 {
  50%, 100% {
    left: 100%;
  }
}

.main .btn > span:nth-child(2) {
  position: absolute;
  right: 0;
  top: -100%;
  width: 1px;
  height: 100%;
  background: -webkit-linear-gradient(top, transparent, #03e9f4);
  animation: line2 1s 0.25s linear infinite;
}

@keyframes line2 {
  50%, 100% {
    top: 100%;
  }
}

.main .btn > span:nth-child(3) {
  position: absolute;
  left: 100%;
  top: 97%;
  width: 100%;
  height: 1px;
  background: -webkit-linear-gradient(right, transparent, #03e9f4);
  animation: line3 1s 0.5s linear infinite;
}

@keyframes line3 {
  50%, 100% {
    left: -100%;
  }
}

.main .btn > span:nth-child(4) {
  position: absolute;
  left: 0;
  top: 100%;
  width: 1px;
  height: 100%;
  background: -webkit-linear-gradient(bottom, transparent, #03e9f4);
  animation: line4 1s 0.75s linear infinite;
}

@keyframes line4 {
  50%, 100% {
    top: -100%;
  }
}

</style>
