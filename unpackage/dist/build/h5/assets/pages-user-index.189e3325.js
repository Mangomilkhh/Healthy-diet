import{n as e,o as s,c as i,w as a,i as t,a as o,b as n,t as r,g as l,h as u,j as c}from"./index-735f3df1.js";import{_ as d,a as m}from"./uni-list.a4230e1c.js";import{r as g}from"./uni-app.es.54afaacf.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-icons.6d7fed54.js";const p=f({data:()=>({isLogin:"",user_img:"",user_name:"",extraIcon:{color:"#4cd964",size:"22",type:"gear-filled"}}),methods:{get_user(){uni.getUserProfile({desc:"用户登录",success:e=>{console.log(e),this.user_img=e.userInfo.avatarUrl,this.user_name=e.userInfo.nickName}})},toFeedback(){e({url:"/pages/user/feedback/feedback"})},toKnowledge(){e({url:"/pages/user/knowledge/knowledge"})}}},[["render",function(e,f,p,_,k,h){const b=l,w=u,j=t,I=g(c("uni-list-item"),d),x=g(c("uni-list"),m);return s(),i(j,null,{default:a((()=>[o(j,{id:"myLogin"},{default:a((()=>[o(b,{id:"myIcon",src:k.user_img},null,8,["src"]),o(w,{id:"nickName"},{default:a((()=>[n(r(k.user_name),1)])),_:1})])),_:1}),o(x,null,{default:a((()=>[o(I,{title:"营养知识",showArrow:"",thumb:"/static/user/u1.png","thumb-size":"lg",onClick:h.toKnowledge,link:""},null,8,["onClick"]),o(I,{title:"评价与反馈",showArrow:"",thumb:"/static/user/u2.png","thumb-size":"lg",onClick:h.toFeedback,link:""},null,8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-bc2ef35a"]]);export{p as default};