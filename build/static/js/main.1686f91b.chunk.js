(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{224:function(e,t,c){},225:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(88),a=c.n(r),i=c(11),o=c(5),j=c(4),l=c(2),d=c(24),u=c.n(d);var b=function(e,t){var c=s.a.useState((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(n){return console.error(n),t}})),n=Object(j.a)(c,2),r=n[0],a=n[1];return[r,function(t){try{var c=t instanceof Function?t(r):t;a(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(n){console.error(n)}}]},O=c(0),h={isLoggedIn:!1,user:null,isLoggingIn:!1},p=Object(n.createContext)(),m=Object(n.createContext)(),x=function(e,t){switch(t.type){case"LOGIN_REQUEST":return Object(l.a)(Object(l.a)({},e),{},{isLoggedIn:!1,user:null,isLoggingIn:!0});case"LOGIN_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{isLoggedIn:!0,user:t.payload.user,isLoggingIn:!1});case"LOGIN_FAILURE":return Object(l.a)(Object(l.a)({},e),{},{isLoggedIn:!1,user:null,isLoggingIn:!1});case"LOGOUT_SUCCESS":return Object(l.a)(Object(l.a)({},e),h);default:throw new Error("Unknown action: ".concat(t.type))}},f=function(e,t){return localStorage.setItem("user",JSON.stringify(t)),e({type:"LOGIN_SUCCESS",payload:{user:t}})},g=function(e){return localStorage.clear(),e({type:"LOGOUT_SUCCESS"})},v=function(e){var t=e.children,c=b("user",null),s=Object(j.a)(c,2),r=s[0],a=s[1],i=Object(l.a)(Object(l.a)({},h),{},{user:r,isLoggedIn:u()(r,"username","").length>0}),o=Object(n.useReducer)(x,i),d=Object(j.a)(o,2),f=d[0],g=d[1];return Object(n.useEffect)((function(){a(f.user)}),[f.isLoggedIn]),Object(O.jsx)(m.Provider,{value:g,children:Object(O.jsx)(p.Provider,{value:f,children:t})})},N={isSearchBarOpen:!1,searchKeyword:""},y=Object(n.createContext)(),C=Object(n.createContext)(),S=function(e,t){switch(t.type){case"TOGGLE_SEARCH_BAR":return Object(l.a)(Object(l.a)({},e),{},{isSearchBarOpen:!e.isSearchBarOpen});case"SET_SEARCH_KEYWORD":return Object(l.a)(Object(l.a)({},e),{},{searchKeyword:t.payload.searchKeyword});default:throw new Error("Unknown action: ".concat(t.type))}},w=function(e){var t=e.children,c=Object(n.useReducer)(S,N),s=Object(j.a)(c,2),r=s[0],a=s[1];return Object(O.jsx)(C.Provider,{value:a,children:Object(O.jsx)(y.Provider,{value:r,children:t})})},E=c(89),_=c.n(E),k={products:null,isLoading:!1,isLoaded:!1},L=Object(n.createContext)(),P=Object(n.createContext)(),T=function(e,t){switch(t.type){case"GET_PRODUCTS_REQUEST":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0,isLoaded:!1});case"GET_PRODUCTS_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,isLoaded:!0,products:t.payload.products});case"GET_PRODUCTS_FAILURE":return Object(l.a)(Object(l.a)({},e),{},{products:null,isLoading:!1,isLoaded:!1});default:throw new Error("Unknown action: ".concat(t.type))}},I=function(e){var t=e.children,c=Object(n.useReducer)(T,k),s=Object(j.a)(c,2),r=s[0],a=s[1];return Object(O.jsx)(P.Provider,{value:a,children:Object(O.jsx)(L.Provider,{value:r,children:t})})},R=c(9),q={isCartOpen:!1,items:[]},A=Object(n.createContext)(),U=Object(n.createContext)(),D=function(e,t){switch(t.type){case"TOGGLE_CART_POPUP":return Object(l.a)(Object(l.a)({},e),{},{isCartOpen:!e.isCartOpen});case"ADD_TO_CART":var c=t.payload.cartItem.id,n=null;if(e.items.map((function(e){return e.id})).includes(c)){var s=e.items.map((function(e){return e.id===c?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity+1}):e}));n=Object(R.a)(s)}else n=[].concat(Object(R.a)(e.items),[t.payload.cartItem]);return Object(l.a)(Object(l.a)({},e),{},{items:n});case"REMOVE_FROM_CART":return Object(l.a)(Object(l.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload.cartItemId}))});case"CLEAR_CART":return Object(l.a)(Object(l.a)({},e),q);default:throw new Error("Unknown action: ".concat(t.type))}},G=function(e){return e({type:"TOGGLE_CART_POPUP"})},F=function(e){var t=e.children,c=b("cartItems",[]),s=Object(j.a)(c,2),r=s[0],a=s[1],i={isCartOpen:!1,items:r||[]},o=Object(n.useReducer)(D,i),l=Object(j.a)(o,2),d=l[0],u=l[1];return Object(n.useEffect)((function(){a(d.items)}),[JSON.stringify(d.items)]),Object(O.jsx)(U.Provider,{value:u,children:Object(O.jsx)(A.Provider,{value:d,children:t})})},B="auth",K="shipping",H="payment",M={step:B,shippingAddress:null},V=Object(n.createContext)(),J=Object(n.createContext)(),Q=function(e,t){switch(t.type){case"SET_CHECKOUT_STEP":return Object(l.a)(Object(l.a)({},e),{},{step:t.payload.step});case"SET_SHIPPING_ADDRESS":return Object(l.a)(Object(l.a)({},e),{},{shippingAddress:t.payload.shippingAddress});default:throw new Error("Unknown action: ".concat(t.type))}},Y=function(e,t){return e({type:"SET_CHECKOUT_STEP",payload:{step:t}})},Z=function(e){var t=e.children,c=b("checkout",null),s=Object(j.a)(c,2),r=s[0],a=s[1],i=Object(l.a)(Object(l.a)({},M),{},{shippingAddress:r||{}}),o=Object(n.useReducer)(Q,i),d=Object(j.a)(o,2),u=d[0],h=d[1];return Object(n.useEffect)((function(){a(u.shippingAddress)}),[u.shippingAddress]),Object(O.jsx)(J.Provider,{value:h,children:Object(O.jsx)(V.Provider,{value:u,children:t})})},W=c(45);var $=function(e){var t=e.component,c=e.layout,s=e.isPrivate,r=void 0!==s&&s,a=Object(W.a)(e,["component","layout","isPrivate"]),i=Object(n.useContext)(p).isLoggedIn,j=void 0!==i&&i;return Object(O.jsx)(o.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return r&&!j?Object(O.jsx)(o.a,{to:{pathname:"/auth",state:{from:e.location}}}):Object(O.jsx)(c,Object(l.a)(Object(l.a)({},e),{},{children:Object(O.jsx)(t,Object(l.a)({},e))}))}}))},z=function(e){var t=e.children;return Object(O.jsx)("div",{className:"auth-container",children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("div",{className:"auth-brand",children:Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)("img",{className:"logo",src:"",alt:"RKP Brand Logo"})})}),Object(O.jsx)("div",{children:t})]})})},X=c(16),ee=c.n(X),te=function(){var e=Object(n.useContext)(A),t=e.items,c=e.isCartOpen,s=Object(n.useContext)(U),r=Object(o.g)();return Object(O.jsxs)("div",{className:ee()("cart-preview",{active:c}),children:[Object(O.jsx)("ul",{className:"cart-items",children:t.map((function(e){return Object(O.jsxs)("li",{className:"cart-item",children:[Object(O.jsx)("img",{className:"product-image",src:e.image}),Object(O.jsxs)("div",{className:"product-info",children:[Object(O.jsx)("p",{className:"product-name",children:e.name}),Object(O.jsx)("p",{className:"product-price",children:e.price})]}),Object(O.jsxs)("div",{className:"product-total",children:[Object(O.jsx)("p",{className:"quantity",children:"".concat(e.quantity," ").concat(e.quantity>1?"Nos.":"No.")}),Object(O.jsx)("p",{className:"amount",children:e.quantity*e.price})]}),Object(O.jsx)("button",{className:"product-remove",onClick:function(){return t=e.id,function(e,t){return e({type:"REMOVE_FROM_CART",payload:{cartItemId:t}})}(s,t);var t},children:"\xd7"})]},e.name)}))}),Object(O.jsx)("div",{className:"action-block",children:Object(O.jsx)("button",{type:"button",className:ee()({disabled:t&&0===t.length}),onClick:function(){G(s),r.push("/checkout")},children:"PROCEED TO CHECKOUT"})})]})},ce=function(e){var t=Object(n.useContext)(A),c=t.items,s=(t.isCartOpen,Object(n.useContext)(p)),r=s.user,a=s.isLoggedIn,i=(Object(n.useContext)(C),Object(n.useContext)(U)),j=c.length,l=c.map((function(e){return e.price*e.quantity})).reduce((function(e,t){return e+t}),0),d=Object(o.g)(),u=(Object(o.h)(),Object(n.useContext)(m));return Object(O.jsx)("header",{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"search",children:Object(O.jsx)("div",{className:"auth-message",children:a?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("span",{children:["Logged in as ",Object(O.jsx)("span",{children:r.username})]}),Object(O.jsxs)("span",{children:["\xa0",Object(O.jsx)("button",{onClick:function(){return g(u),void d.push("/auth")},children:"Logout"})]})]}):null})}),Object(O.jsxs)("div",{className:"cart",children:[Object(O.jsx)("div",{className:"cart-info",children:Object(O.jsx)("table",{children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"No. of items"}),Object(O.jsx)("td",{children:":"}),Object(O.jsx)("td",{children:Object(O.jsx)("strong",{children:j})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Sub Total"}),Object(O.jsx)("td",{children:":"}),Object(O.jsx)("td",{children:Object(O.jsx)("strong",{children:l})})]})]})})}),Object(O.jsxs)("a",{className:"cart-icon",href:"#",onClick:function(e){return e.preventDefault(),G(i)},children:[Object(O.jsx)("img",{className:e.cartBounce?"tada":" ",src:"https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png",alt:"Cart"}),j?Object(O.jsx)("span",{className:"cart-count",children:j}):""]}),Object(O.jsx)(te,{})]})]})})},ne=function(){var e=(new Date).getFullYear();return Object(O.jsxs)("footer",{children:[Object(O.jsxs)("p",{className:"footer-links",children:[Object(O.jsx)("a",{href:"https://github.com/sivadass/react-shopping-cart",target:"_blank",children:"View Source on Github"}),Object(O.jsx)("span",{children:" / "}),Object(O.jsx)("a",{href:"mailto:contact@sivadass.in",target:"_blank",children:"Need any help?"}),Object(O.jsx)("span",{children:" / "}),Object(O.jsx)("a",{href:"https://twitter.com/NSivadass",target:"_blank",children:"Say Hi on Twitter"}),Object(O.jsx)("span",{children:" / "}),Object(O.jsx)("a",{href:"https://sivadass.in",target:"_blank",children:"Read My Blog"})]}),Object(O.jsxs)("p",{children:["\xa9 ",e," ",Object(O.jsx)("strong",{children:"Veggy"})," - Organic Green Store"]})]})},se=function(e){var t=e.children;return Object(O.jsxs)("div",{className:"container common-layout",children:[Object(O.jsx)(ce,{}),Object(O.jsx)("main",{children:t}),Object(O.jsx)(ne,{})]})},re=c(19),ae=c.n(re),ie=c(28),oe=c(3),je=c(7),le=function(e){var t=e.type,c=e.label,n=e.placeholder,s=e.className,r=e.field,a=e.form,i=a.touched,o=a.errors,j=Object(W.a)(e,["type","label","placeholder","className","field","form"]);return Object(O.jsxs)("div",{className:ee()("form-group",s,{error:i[r.name]&&o[r.name]}),children:[c&&Object(O.jsx)("label",{className:"form-label",htmlFor:r.name,children:c}),Object(O.jsx)("input",Object(l.a)(Object(l.a)({type:t,className:ee()("form-control",{"is-invalid":i[r.name]&&o[r.name]}),placeholder:n},r),j)),i[r.name]&&o[r.name]&&Object(O.jsx)("div",{className:"invalid-feedback",children:o[r.name]})]})},de=je.a().shape({password:je.b().required("Password is required!"),username:je.b().required("Mobile Number or Email Address is required!")}),ue=function(){var e=Object(n.useContext)(m),t=Object(o.g)(),c=Object(o.h)(),s=u()(c,"state.from.pathname");console.log("location => ",c);var r=function(e){e.preventDefault()},a=function(e){t.push("/registation"),e.preventDefault()},i=function(c){f(e,c),s?(console.log(s),t.push(s)):t.push("/")};return Object(O.jsx)(oe.c,{initialValues:{username:"",password:""},validationSchema:de,onSubmit:function(){var e=Object(ie.a)(ae.a.mark((function e(t,c){var n,s;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=c.resetForm;try{s=Object(l.a)({},t),n(),i(s)}catch(r){console.error(r)}case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),children:function(){return Object(O.jsxs)(oe.b,{children:[Object(O.jsx)(oe.a,{name:"username",type:"text",placeholder:"Mobile Number or Email Address",component:le}),Object(O.jsx)(oe.a,{name:"password",type:"password",placeholder:"Password",component:le}),Object(O.jsx)("p",{children:Object(O.jsx)("a",{href:"/#",onClick:r,children:"Forgot Password?"})}),Object(O.jsx)("button",{className:"auth-button block",onClick:function(){},children:"Login"}),Object(O.jsxs)("p",{children:["New here?"," ",Object(O.jsx)("a",{href:"/#",onClick:a,children:"Register"})]})]})}})},be=je.a().shape({firstName:je.b().required("firstName is required!"),lastName:je.b().required("lastName is required!"),password:je.b().required("Password is required!"),mobile:je.b().required("mobile is required!"),email:je.b().required("Email Address is required!")}),Oe=function(){var e=Object(n.useContext)(m),t=Object(o.g)(),c=Object(o.h)(),s=u()(c,"state.from.pathname");console.log("location => ",c);var r=function(c){f(e,c),s?(console.log(s),t.push(s)):t.push("/auth")};return Object(O.jsx)(oe.c,{initialValues:{firstName:"",lastName:"",username:"",mobile:"",password:""},validationSchema:be,onSubmit:function(){var e=Object(ie.a)(ae.a.mark((function e(t,c){var n,s;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=c.resetForm;try{s=Object(l.a)({},t),n(),r(s)}catch(a){console.error(a)}case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),children:function(){return Object(O.jsxs)(oe.b,{children:[Object(O.jsx)(oe.a,{name:"firstName",type:"text",placeholder:"First Name",component:le}),Object(O.jsx)(oe.a,{name:"lastName",type:"text",placeholder:"Last Name",component:le}),Object(O.jsx)(oe.a,{name:"email",type:"email",placeholder:"example@gmail.com",component:le}),Object(O.jsx)(oe.a,{name:"mobile",type:"number",placeholder:"moblie Number",component:le}),Object(O.jsx)(oe.a,{name:"password",type:"password",placeholder:"Password",component:le}),Object(O.jsx)("button",{className:"auth-button block",onClick:function(){},children:"Register"}),Object(O.jsx)("p",{children:Object(O.jsx)(i.b,{to:"/auth",className:"btn btn-link",children:"Cancel"})})]})}})},he=function(e){var t=e.data,c=Object(n.useState)(!1),s=Object(j.a)(c,2),r=s[0],a=s[1],i=Object(n.useContext)(U),o=t.image,d=t.name,u=t.price;t.id,t.stock;return Object(O.jsxs)("div",{className:"product",children:[Object(O.jsx)("div",{className:"product-image",children:Object(O.jsx)("img",{src:o,alt:d})}),Object(O.jsx)("h4",{className:"product-name",children:d}),Object(O.jsx)("p",{className:"product-price",children:u}),Object(O.jsx)("div",{className:"product-action",children:Object(O.jsx)("button",{className:r?"added":"",type:"button",onClick:function(){var e=Object(l.a)(Object(l.a)({},t),{},{quantity:1});!function(e,t){e({type:"ADD_TO_CART",payload:{cartItem:t}})}(i,e),a(!0),setTimeout((function(){a(!1)}),3500)},children:r?"\u2714 ADDED":"ADD TO CART"})})]})},pe=function(){var e=Object(n.useContext)(L),t=e.products,c=e.isLoading,s=e.isLoaded,r=Object(n.useContext)(y).searchKeyword,a=Object(n.useContext)(P),i=t&&t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())||!r}));return Object(n.useEffect)((function(){!function(e){e({type:"GET_PRODUCTS_REQUEST"}),_.a.get("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json").then((function(t){e({type:"GET_PRODUCTS_SUCCESS",payload:{products:t.data}})})).catch((function(t){console.error(t),e({type:"GET_PRODUCTS_FAILURE"})}))}(a)}),[]),c?Object(O.jsx)("div",{className:"products-wrapper",children:Object(O.jsx)("h1",{children:"Loading..."})}):Object(O.jsx)("div",{className:"products-wrapper",children:Object(O.jsx)("div",{className:"products",children:s&&i.map((function(e){return Object(O.jsx)(he,{data:e},e.id)}))})})},me=je.a().shape({fullName:je.b().required("Full Name is required"),phoneNumber:je.b().required("Phone Number is required").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone Number is not a valid 10 digit number").min(10,"Phone Number is too short").max(10,"Phone Number is too long"),addressLine:je.b().required("Door No. & Street is required!"),city:je.b().required("City is required!"),state:je.b().required("State is required!"),code:je.b().required("ZIP/Postal code is required!"),country:je.b().required("Country is required!")}),xe=function(){var e=Object(o.g)(),t=Object(n.useContext)(p),c=t.user,s=t.isLoggedIn,r=Object(n.useContext)(m),a=Object(n.useContext)(J);return Object(O.jsxs)("div",{className:"detail-container",children:[Object(O.jsx)("h2",{children:"Sign In now!"}),Object(O.jsx)("div",{className:"auth-message",children:s?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:["Logged in as ",Object(O.jsx)("span",{children:c.username})]}),Object(O.jsx)("button",{onClick:function(){return g(r),void e.push("/auth")},children:"Login as Different User"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"Please login to continue."}),Object(O.jsx)("button",{onClick:function(){e.push("/auth")},children:"Login"})]})}),Object(O.jsxs)("div",{className:"actions",children:[Object(O.jsxs)("button",{className:"outline",onClick:function(){e.push("/")},children:[Object(O.jsx)("i",{className:"rsc-icon-arrow_back"})," Continue Shopping"]}),Object(O.jsxs)("button",{disabled:!s,onClick:function(){Y(a,K)},children:["Proceed",Object(O.jsx)("i",{className:"rsc-icon-arrow_forward"})]})]})]})},fe=function(){var e=Object(n.useContext)(J),t=function(t){var c;(c=e)({type:"SET_SHIPPING_ADDRESS",payload:{shippingAddress:t}}),Y(c,H)};return Object(O.jsxs)("div",{className:"detail-container",children:[Object(O.jsx)("h2",{children:"Shipping Address"}),Object(O.jsx)(oe.c,{initialValues:{fullName:"Rakesh Kumar Pradhan",phoneNumber:"7979994248",addressLine:"Bangalore",city:"Bangalore",state:"Karnataka",code:"760066",country:"India"},validationSchema:me,onSubmit:function(){var e=Object(ie.a)(ae.a.mark((function e(c,n){var s,r;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=n.resetForm;try{r=Object(l.a)({},c),s(),t(r)}catch(a){console.error(a)}case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),children:function(){return Object(O.jsxs)(oe.b,{children:[Object(O.jsxs)("div",{className:"field-group",children:[Object(O.jsx)(oe.a,{name:"fullName",type:"text",placeholder:"Full Name",component:le}),Object(O.jsx)(oe.a,{name:"phoneNumber",type:"text",placeholder:"Phone Number",component:le})]}),Object(O.jsx)(oe.a,{name:"addressLine",type:"text",placeholder:"Door No. & Street",component:le}),Object(O.jsxs)("div",{className:"field-group",children:[Object(O.jsx)(oe.a,{name:"city",type:"text",placeholder:"City",component:le}),Object(O.jsx)(oe.a,{name:"state",type:"text",placeholder:"State",component:le})]}),Object(O.jsxs)("div",{className:"field-group",children:[Object(O.jsx)(oe.a,{name:"code",type:"text",placeholder:"ZIP/Postal Code",component:le}),Object(O.jsx)(oe.a,{name:"country",type:"text",placeholder:"Country",component:le})]}),Object(O.jsxs)("div",{className:"actions",children:[Object(O.jsxs)("button",{type:"button",className:"outline",onClick:function(){Y(e,B)},children:[Object(O.jsx)("i",{className:"rsc-icon-arrow_back"})," Login in as Different User"]}),Object(O.jsxs)("button",{type:"submit",children:["Save Address",Object(O.jsx)("i",{className:"rsc-icon-arrow_forward"})]})]})]})}})]})},ge=function(){var e=Object(n.useContext)(V).shippingAddress,t=Object(n.useContext)(J);return Object(O.jsxs)("div",{className:"detail-container",children:[Object(O.jsx)("h2",{children:"Payment"}),Object(O.jsxs)("div",{className:"actions",children:[Object(O.jsxs)("button",{type:"button",className:"outline",onClick:function(){Y(t,K)},children:[Object(O.jsx)("i",{className:"rsc-icon-arrow_back"})," Back to Shipping Details"]}),Object(O.jsxs)("button",{disabled:!e,onClick:function(){},children:["Save Address",Object(O.jsx)("i",{className:"rsc-icon-arrow_forward"})]})]})]})},ve=function(){var e=Object(n.useContext)(A).items,t=void 0===e?[]:e,c=Object(n.useContext)(p).isLoggedIn,s=Object(n.useContext)(V),r=s.step,a=s.shippingAddress,i=Object(n.useContext)(J),o=t.length,j=function(e){Y(i,e)};return Object(O.jsx)("div",{className:"checkout-page",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"order-details",children:[Object(O.jsxs)("ul",{className:"timeline",children:[Object(O.jsxs)("li",{className:ee()({done:c,active:r===B}),onClick:function(){return j(B)},children:[Object(O.jsx)("h2",{children:"Sign In"}),Object(O.jsx)("i",{className:"rsc-icon-check_circle"})]}),Object(O.jsxs)("li",{className:ee()({done:null!==a,active:r===K}),onClick:function(){return j(K)},children:[Object(O.jsx)("h2",{children:"Shipping"}),Object(O.jsx)("i",{className:"rsc-icon-check_circle"})]}),Object(O.jsxs)("li",{className:ee()({done:!1,active:r===H}),onClick:function(){return j(H)},children:[Object(O.jsx)("h2",{children:"Payment"}),Object(O.jsx)("i",{className:"rsc-icon-check_circle"})]})]}),r===B&&Object(O.jsx)(xe,{}),r===K&&Object(O.jsx)(fe,{}),r===H&&Object(O.jsx)(ge,{})]}),Object(O.jsxs)("div",{className:"order-summary",children:[Object(O.jsxs)("h2",{children:["Summary",Object(O.jsx)("span",{children:" (".concat(o,") Items")})]}),Object(O.jsx)("ul",{className:"cart-items",children:t.map((function(e){return Object(O.jsxs)("li",{className:"cart-item",children:[Object(O.jsx)("img",{className:"product-image",src:e.image}),Object(O.jsxs)("div",{className:"product-info",children:[Object(O.jsx)("p",{className:"product-name",children:e.name}),Object(O.jsx)("p",{className:"product-price",children:e.price})]}),Object(O.jsxs)("div",{className:"product-total",children:[Object(O.jsx)("p",{className:"quantity",children:"".concat(e.quantity," ").concat(e.quantity>1?"Nos.":"No.")}),Object(O.jsx)("p",{className:"amount",children:e.quantity*e.price})]})]},e.name)}))}),Object(O.jsxs)("ul",{className:"total-breakup",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{children:"Subtotal"}),Object(O.jsx)("p",{children:"5000"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{children:"Tax"}),Object(O.jsx)("p",{children:"5000"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{children:"Shipping"}),Object(O.jsx)("p",{children:"5000"})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("h2",{children:"Total"}),Object(O.jsx)("h2",{children:"5000"})]})]})]})]})})},Ne=(c(224),function(){return Object(O.jsx)(v,{children:Object(O.jsx)(w,{children:Object(O.jsx)(I,{children:Object(O.jsx)(F,{children:Object(O.jsx)(Z,{children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(o.d,{children:[Object(O.jsx)($,{path:"/",exact:!0,component:pe,layout:se}),Object(O.jsx)($,{path:"/checkout",component:ve,layout:se}),Object(O.jsx)($,{path:"/auth",component:ue,layout:z}),Object(O.jsx)($,{path:"/registation",component:Oe,layout:z})]})})})})})})})});a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(Ne,{})}),document.getElementById("root"))}},[[225,1,2]]]);
//# sourceMappingURL=main.1686f91b.chunk.js.map