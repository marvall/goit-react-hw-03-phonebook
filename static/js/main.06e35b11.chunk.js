(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={contacrList:"ContactList_contacrList__2BbXu"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=n(14),i=n(2),u=n(3),l=n(5),b=n(4),m=n(11),d=n.n(m),f=n(12),h=n(6),j=n.n(h),p=n(0),O=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.form,children:[Object(p.jsxs)("label",{className:j.a.label,children:["Name"," ",Object(p.jsx)("input",{className:j.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:j.a.label,children:["Number"," ",Object(p.jsx)("input",{className:j.a.input,type:"tel",placeholder:"999-99-99",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("button",{type:"submit",className:j.a.button,children:"add contact"})]})})}}]),n}(a.Component),v=n(8),x=n.n(v),C=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilter;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("form",{className:x.a.form,children:Object(p.jsxs)("label",{children:[Object(p.jsx)("h3",{children:"Find contacts by name:"}),Object(p.jsx)("input",{type:"text",value:e,onChange:n,className:x.a.input})]})})})}}]),n}(a.Component),_=n(9),y=n.n(_),g=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={id:t.props.id},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.id,a=e.name,c=e.number,r=e.onDeleteContact;return Object(p.jsxs)("li",{id:n,className:y.a.contact,children:[Object(p.jsx)("p",{children:a}),Object(p.jsx)("p",{children:c}),Object(p.jsx)("button",{className:y.a.button,onClick:function(){return r(t.state.id)},children:"delete"})]})}}]),n}(a.Component),S=n(13),N=n.n(S),k=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.contacts,e=this.props.onDelete;return Object(p.jsx)("ul",{className:N.a.contacrList,children:t.map((function(t){return Object(p.jsx)(g,{id:t.id,name:t.name,number:t.number,onDeleteContact:e},t.id)}))})}}]),n}(a.Component),w=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"c7a273d-8bfr-66gr-wef2-4f4d57ea2d0",name:"Rosie Simpson",number:"459-12-56"},{id:"anctrjd-8bfr-66gr-wef2-4f4d57ea2d0",name:"Hermione Kline",number:"443-89-12"},{id:"dkt846a-8bfr-66gr-wef2-4f4d57ea2d0",name:"Eden Clements",number:"645-17-79"},{id:"hr7y3td-8bfr-66gr-wef2-4f4d57ea2d0",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.isContactExist(n)){var c=d()();t.setState((function(t){var e=t.contacts;return{contacts:[{id:c,name:n,number:a}].concat(Object(s.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.isContactExist=function(e){var n=t.state.contacts,a=!0;return n.forEach((function(t){t.name.toLowerCase()===e.toLowerCase()&&(alert("".concat(e," is already in contacts")),a=!1)})),a},t.filterHandler=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return""!==a?n.filter((function(t){return t.name.includes(a)})):n},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));null===t?this.setState({contacts:[]}):this.setState({contacts:t})}},{key:"render",value:function(){var t=this.filterContacts(),e=this.state.filter;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(O,{onSubmit:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(C,{filter:e,onFilter:this.filterHandler}),Object(p.jsx)(k,{contacts:t,onDelete:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__o4dKu",label:"ContactForm_label__3vU4s",input:"ContactForm_input__22QKG",button:"ContactForm_button__1FRd6"}},8:function(t,e,n){t.exports={form:"Filter_form__1WaJO",input:"Filter_input__Rfy89"}},9:function(t,e,n){t.exports={contact:"Contact_contact__XA66S",button:"Contact_button__3yw0V"}}},[[20,1,2]]]);
//# sourceMappingURL=main.06e35b11.chunk.js.map