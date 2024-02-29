<template>
<div class="body"><form action="" class="login">
    <p>Login</p>
    <input type="text" placeholder=" 用 户 名">
    <input type="password" placeholder=" 密 码">
    <input type="submit" class="btn" value="登  录">
</form>
    
</div>
</template>

<style>
* {
  user-select: none;
}

.logo{
    display: block;
    margin: 20px 20px;
    top: 0;
    left: 0;
}

.body {
  background: url(./wallpaper.jpg) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.login {
  background-color: rgba(255, 255, 255, 0.6);
  width: 400px;
  height: 400px;
  border-radius: 25px;
  text-align: center;
  padding: 10px 40px;
  box-sizing: border-box;
}

p {
  font-size: 42px;
  font-weight: 600;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  background-color: whitesmoke;
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid silver;
  outline: none;
  font-size: 22px;
}

.btn {
  background-color: #59c2c5;
  width: 38%;
  height: 48px;
  border-radius: 8px;
  margin-top: 40px;
  font-size: 28px;
  font-weight: 600;
  color: white;
}

.btn:hover {
  background-color: #59c2a0;
}
</style>