webpackJsonp([5],{OD5K:function(t,e){},TxOz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),n=a.n(s),o=a("lfLh"),i=a("TVmP"),c={name:"Checkout",data:function(){return{couponCode:"",isLoading:!1,cartItem:{data:[],final_price:"",totalPrice:""},coupon:!1}},components:{Navbar:o.a,Footer:i.a},methods:{getCartInfo:function(){var t=this;this.isLoading=!0;fetch("http://ec2-35-73-107-34.ap-northeast-1.compute.amazonaws.com:8080//api/v1/cart").then(function(t){return t.json()}).then(function(e){console.log(e),t.cartItem=e,t.totalPrice=e.total_price,t.isLoading=!1})},deleteCart:function(t){var e=this;this.isLoading=!0;fetch("http://ec2-35-73-107-34.ap-northeast-1.compute.amazonaws.com:8080//api/v1/cart",{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:n()({product_id:t})}).then(function(t){return t.json()}).then(function(t){e.getCartInfo()})},addCouponCode:function(t){var e=this;fetch("http://ec2-35-73-107-34.ap-northeast-1.compute.amazonaws.com:8080//api/v1/coupon",{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:n()({coupon_code:t,enabled:!0})}).then(function(t){return t.json()}).then(function(a){"test_code"===t&&t===e.couponCode?e.coupon=a.enabled:a.enabled=!1,console.log(a)})},removeCoupon:function(){var t=this;fetch("http://ec2-35-73-107-34.ap-northeast-1.compute.amazonaws.com:8080//api/v1/coupon",{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:n()({enabled:!1})}).then(function(t){return t.json()}).then(function(e){console.log(e),t.coupon=!1,t.getCartInfo()})},createOrder:function(){var t=this;this.isLoading=!0;fetch("http://ec2-35-73-107-34.ap-northeast-1.compute.amazonaws.com:8080//api/v1/order",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:n()({order_id:"",order_date:"",message:"Success"})}).then(function(t){return t.json()}).then(function(e){console.log(e);t.$router.push("/payInfo"),t.getCartInfo()})}},mounted:function(){this.getCartInfo()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("Navbar"),t._v(" "),a("section",{staticClass:"container mt-5"},[a("h1",{staticClass:"text-center text-white my-4"},[t._v("購物清單")]),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-10 col-12"},[a("table",{staticClass:"table text-white movieCart"},[t._m(0),t._v(" "),t._l(t.cartItem.data,function(e){return a("tbody",{key:e.id,staticClass:"cartContent"},[a("tr"),t._v(" "),a("tr",[a("td",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"movieImg"},[a("img",{attrs:{src:e.image_url,alt:""}})]),t._v(" "),a("div",{staticClass:"flex-column movieName"},[a("h5",[t._v(t._s(e.product_name))]),t._v(" "),a("span",{staticClass:"badge badge-warning movieType"},[t._v(t._s(e.product_type))]),t._v(" "),t.coupon?a("span",{staticClass:"text-success couponText"},[t._v("已套用優惠券")]):t._e()])]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[t._v("\n                "+t._s(e.product_qty)+"/部\n              ")]),t._v(" "),a("td",{staticClass:"align-middle text-right moviePrice"},[t._v("\n                "+t._s(t._f("currency")(e.product_total_price))+"\n              ")]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.deleteCart(e.product_id)}}},[a("i",{staticClass:"far fa-trash-alt"})])])])])}),t._v(" "),a("tfoot",{staticClass:"cartFoot"},[a("tr",[a("td"),t._v(" "),a("td",{staticClass:"text-right"},[t._v("總金額")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v("\n                "+t._s(t._f("currency")(t.cartItem.total_price))+"\n              ")]),t._v(" "),a("td")]),t._v(" "),t.coupon?a("tr",[a("td"),t._v(" "),a("td",{staticClass:"text-right text-danger coupon"},[t._v("優惠折扣金額")]),t._v(" "),a("td",{staticClass:"text-right text-danger"},[t._v("\n                - "+t._s(t._f("currency")(t.cartItem.discount_price))+"\n              ")]),t._v(" "),a("td")]):t._e(),t._v(" "),t.coupon?a("tr",[a("td"),t._v(" "),a("td",{staticClass:"text-right text-success coupon"},[t._v("套用優惠碼總金額")]),t._v(" "),a("td",{staticClass:"text-right text-success"},[t._v("\n                "+t._s(t._f("currency")(t.cartItem.final_price))+"\n              ")]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:t.removeCoupon}},[a("i",{staticClass:"far fa-trash-alt"})])])]):t._e()])],2)])]),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-10 col-12"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入 test_code"},domProps:{value:t.couponCode},on:{input:function(e){e.target.composing||(t.couponCode=e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button",id:"button-addon2"},on:{click:function(e){return t.addCouponCode(t.couponCode)}}},[t._v("\n              套用優惠碼\n            ")])])])])])]),t._v(" "),a("section",{staticClass:"container mt-5"},[a("h2",{staticClass:"text-white text-center"},[t._v("使用者訂購資訊")]),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-10 col-sm-12"},[a("form",{staticClass:"text-white",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])]),t._v(" "),a("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"cartTitle"},[e("th",{staticClass:"align-middle"},[this._v("選購電影")]),this._v(" "),e("th",{staticClass:"align-middle text-right"},[this._v("數量")]),this._v(" "),e("th",{staticClass:"align-middle text-right"},[this._v("售價")]),this._v(" "),e("th")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userEmail"}},[t._v("Email : ")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"email",id:"userEmail",placeholder:"name@example.com"}}),t._v(" "),a("label",{attrs:{for:"userName"}},[t._v("訂購人姓名 : ")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"userName",placeholder:"請輸入姓名"}}),t._v(" "),a("label",{attrs:{for:"userPhone"}},[t._v("訂購人電話 :")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"number",id:"userPhone",placeholder:"請輸入電話號碼"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"remarks"}},[this._v("備註 :")]),this._v(" "),e("textarea",{staticClass:"form-control",attrs:{id:"remarks",rows:"10",cols:"50"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-success orderBtn"},[this._v("送出訂單")])])}]};var l=a("VU/8")(c,r,!1,function(t){a("OD5K")},"data-v-31646474",null);e.default=l.exports}});
//# sourceMappingURL=5.e3d904a1b2b3c765f9e8.js.map