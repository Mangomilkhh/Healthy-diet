<template>
	<!--登陆面板-->
	<view id='myLogin'>
		<uni-card v-if="isLogin">
			<image id='myIcon' src=''></image>
			<text id='nickName'></text>
		</uni-card>
		<button v-else open-type='getUserInfo' bindgetuserinfo='getMyInfo' class="denglu">
			未登录，点此登陆
		</button>
		<!--按钮-->
		<view class="button">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: ""
			}
		}
	}
</script>

<style scoped>
#myLogin{
  background-color:#eeb0a8;
  height: 500rpx;
  display: flex;
  flex-direction: column;/*灵活的项目将垂直显示，正如一个列一样 */
  align-items: center;  /*元素位于容器的中心。*/
  justify-content: space-around; /* 项目位于各行之前、之间、之后都留有空白的容器内。*/
}
/* 登录按钮 */
.denglu{
  width: 450rpx;
  margin-top: 130rpx;
  border-radius: 60rpx;
}
/*头像图片 */
#myIcon{
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
}
/*微信昵称 */
#nickName{
  color: white;
}
/* VIP和我的资料 */
.button{
  width: 700rpx;
  display: flex;
}
 .anniu{
  background: #c0412f;
  width:200rpx;
  margin-top: 20rpx;
  font-size: 30rpx;
  border-radius: 60rpx;
  color: white; 
}
/* 菜单 */

.menu_list {
  background: #fff;
  border-top: 1px solid #ccc;
}

.menu_item {
  display: flex;
  width: 100%;
  height: 100rpx;
  padding: 0 20rpx;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.menu_left_icon {
  width: 40rpx;
  height: 40rpx;
  margin: 0 20rpx;
}

.menu_right {
  width: 70rpx;
  height: 70rpx;
}
</style>