"use strict";(self.webpackChunkslim_mom=self.webpackChunkslim_mom||[]).push([[131],{8029:function(e,a,n){n.d(a,{Z:function(){return r}});var i={one:"Animation_one__LQuIY",animation:"Animation_animation__k-Baj",two:"Animation_two__-Xeca",three:"Animation_three__vQSu3",four:"Animation_four__i+D1-"},t=n(184),r=function(){return(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:i.one}),(0,t.jsx)("span",{className:i.two}),(0,t.jsx)("span",{className:i.three}),(0,t.jsx)("span",{className:i.four}),(0,t.jsx)("span",{className:i.five})]})}},332:function(e,a,n){n.d(a,{Z:function(){return r}});var i={btn:"Button_btn__W1TTO","btn-second":"Button_btn-second__DnzJ-"},t=n(184),r=function(e){var a=e.text,n=e.type,r=e.openModal,s=e.className,o=void 0===s?"btn":s;return(0,t.jsx)("button",{type:n,className:i[o],onClick:r,children:a})}},2595:function(e,a,n){n.d(a,{Z:function(){return m}});var i=n(5861),t=n(7757),r=n.n(t),s=n(9434),o=n(3244),l=n(332),c={diary__section:"DailyCaloriesForm_diary__section__GtTJJ",diary__title:"DailyCaloriesForm_diary__title__4yKJH",diary__form:"DailyCaloriesForm_diary__form__Bg3tO",diary__label:"DailyCaloriesForm_diary__label__Afqj6",diary__input:"DailyCaloriesForm_diary__input__m1ySh",diary__checkField:"DailyCaloriesForm_diary__checkField__azEY4",diary__button:"DailyCaloriesForm_diary__button__iph1h"},_=n(6351),d=n(2173),u=n(184),m=function(e){var a=e.openModal,n=(0,s.I0)(),t=(0,s.v9)(_.Z.getIsLoggedIn),m=(0,s.v9)(_.Z.getUserId),y=(0,d.r)(),h=y.setNotAllowedProducts,p=y.setDailyKcal,b=function(){var e=(0,i.Z)(r().mark((function e(a){var i,s,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),i=a.currentTarget,s={height:Number(i.height.value),age:Number(i.age.value),weight:Number(i.currentWeight.value),desiredWeight:Number(i.desiredWeight.value),bloodType:Number(i.bloodType.value)},e.next=5,n(t?o.Z.userDailyRate({userInfo:s,userId:m}):o.Z.dailyRate(s));case 5:l=e.sent,h(l.payload.notAllowedProducts),p(l.payload.dailyRate);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,u.jsxs)("section",{className:"".concat(c.diary__section),children:[(0,u.jsx)("h1",{className:"".concat(c.diary__title),children:"Calculate your daily calorie intake right now"}),(0,u.jsxs)("form",{onSubmit:b,name:"diary__form",autoComplete:"off",children:[(0,u.jsxs)("div",{className:"".concat(c.diary__form),children:[(0,u.jsxs)("label",{className:"".concat(c.diary__label),children:["Height *",(0,u.jsx)("input",{type:"number",min:"0",name:"height",className:"".concat(c.diary__input)})]}),(0,u.jsxs)("label",{className:"".concat(c.diary__label),children:["Age *",(0,u.jsx)("input",{type:"number",min:"0",name:"age",className:"".concat(c.diary__input)})]}),(0,u.jsxs)("label",{className:"".concat(c.diary__label),children:["Current weight *",(0,u.jsx)("input",{type:"number",min:"0",name:"currentWeight",className:"".concat(c.diary__input)})]}),(0,u.jsxs)("label",{className:"".concat(c.diary__label),children:["Desired weight *",(0,u.jsx)("input",{type:"number",min:"0",name:"desiredWeight",className:"".concat(c.diary__input)})]}),(0,u.jsx)("p",{className:"".concat(c.diary__label),children:"Blood type *"}),(0,u.jsxs)("div",{className:"".concat(c.diary__checkField),children:[(0,u.jsxs)("label",{children:[(0,u.jsx)("input",{type:"radio",name:"bloodType",value:"1",className:"".concat(c["diary__input--radio"])})," ","1"]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("input",{type:"radio",name:"bloodType",value:"2",className:"".concat(c["diary__input--radio"])})," ","2"]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("input",{type:"radio",name:"bloodType",value:"3",className:"".concat(c["diary__input--radio"])})," ","3"]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("input",{type:"radio",name:"bloodType",value:"4",className:"".concat(c["diary__input--radio"])})," ","4"]})]})]}),(0,u.jsx)("div",{className:"".concat(c.diary__button),children:(0,u.jsx)(l.Z,{text:"Start losing weight",type:"submit",openModal:a})})]})]})}},9630:function(e,a,n){n.d(a,{Z:function(){return m}});var i="DairyModal_title__vGcNh",t="DairyModal_thumb__8U0bJ",r="DairyModal_number__Ji505",s="DairyModal_text__WbH4j",o="DairyModal_subtitle__WBWIv",l="DairyModal_list__d+pt9",c="DairyModal_item__gGtlY",_="DairyModal_btn__-zZT7",d=n(2173),u=n(184),m=function(e){var a=e.toggleModal,n=(0,d.r)(),m=n.notAllowedProducts,y=n.dailyKcal;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{className:i,children:"Your recommended daily calorie intake is"}),(0,u.jsxs)("div",{className:t,children:[(0,u.jsx)("p",{className:r,children:(0,u.jsxs)("span",{className:s,children:[y," kcal"]})}),(0,u.jsx)("p",{className:o,children:"Foods you should not eat"}),(0,u.jsx)("ul",{className:l,children:m.map((function(e){return(0,u.jsx)("li",{className:c,children:e},e)}))})]}),(0,u.jsx)("button",{className:_,type:"button",onClick:a,children:"Start losing weight"})]})}},3713:function(e,a,n){n.d(a,{Z:function(){return _}});var i=n(2791),t="Modal_isHidden__OJU3z",r="Modal_overlay__b+zEz",s="Modal_modal__yEgVW",o="Modal_btnThumb__l11bh",l="Modal_btnClose__zv2rY",c=n(184),_=function(e){var a=e.toggleModal,n=e.isOpen,_=e.children;(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[a]);var d=[r,t];return n&&d.splice(1,1),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:d.join(" "),onClick:function(e){e.currentTarget===e.target&&a()},children:(0,c.jsxs)("div",{className:s,children:[(0,c.jsx)("div",{className:o,children:(0,c.jsx)("button",{type:"button",className:l,onClick:a})}),_]})})})}},131:function(e,a,n){n.r(a),n.d(a,{default:function(){return u}});var i=n(885),t=n(2791),r=n(2595),s=n(3713),o=n(9630),l={home__section:"Home_home__section__5JUip",home__container:"Home_home__container__-jpo1"},c=n(8029),_=n(7689),d=n(184);function u(){var e=(0,_.s0)(),a=(0,t.useState)(!1),n=(0,i.Z)(a,2),u=n[0],m=n[1],y=function(){m(!u)};return(0,d.jsx)("section",{className:"".concat(l.home__section),children:(0,d.jsxs)("div",{className:"container ".concat(l.home__container),children:[(0,d.jsx)("div",{className:l.content,children:(0,d.jsx)(r.Z,{openModal:y})}),u?(0,d.jsx)(s.Z,{toggleModal:y,isOpen:u,children:(0,d.jsx)(o.Z,{toggleModal:function(){m(!u),e("/register")}})}):"",(0,d.jsx)(c.Z,{})]})})}}}]);
//# sourceMappingURL=131.13bacdcc.chunk.js.map