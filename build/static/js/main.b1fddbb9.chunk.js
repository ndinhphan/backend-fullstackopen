(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(15),a=t.n(r),u=t(6),o=t(3),i=t(4),s=t.n(i),l="api/persons",d=function(){return s.a.get(l).then((function(e){return e.data}))},j=function(e){return s.a.post(l,e).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e}))},h=function(e,n){return s.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},f=t(0),m=function(e){var n=e.handleFilterChange,t=e.nameFilter;return Object(f.jsxs)("div",{children:["filter: ",Object(f.jsx)("input",{onChange:n,value:t})]})},O=function(e){var n=e.message,t=e.type;return null===n?null:Object(f.jsx)("div",{className:t,children:n})},p=function(e){var n=e.persons,t=e.nameFilter,c=(e.setPersons,e.handleDeletePerson);return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(f.jsxs)("div",{className:"person",children:[e.name," ",e.number," ",Object(f.jsx)("button",{onClick:function(){return c(e.id,e.name)},children:"delete"})]},e.name)}))},v=function(e){var n=e.handleAddPerson,t=e.handleNewNameChange,c=e.newName,r=e.handleNewNumberChange,a=e.newNumber;return Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{onChange:t,value:c})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{onChange:r,value:a})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})}),Object(f.jsxs)("div",{children:["debug: ",c]})]})},x=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),s=i[0],l=i[1],x=Object(c.useState)(""),g=Object(o.a)(x,2),w=g[0],N=g[1],C=Object(c.useState)(""),P=Object(o.a)(C,2),S=P[0],y=P[1],F=Object(c.useState)(null),k=Object(o.a)(F,2),D=k[0],A=k[1],T=Object(c.useState)("success"),E=Object(o.a)(T,2),I=E[0],J=E[1];return Object(c.useEffect)((function(){d().then((function(e){return r(e)})).catch((function(e){return console.log("getAll() error")}))}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{message:D,type:I}),Object(f.jsx)(m,{handleFilterChange:function(e){y(e.target.value)},nameFilter:S}),Object(f.jsx)("h1",{children:"add a new"}),Object(f.jsx)(v,{handleAddPerson:function(e){e.preventDefault();var n=!1,c=t.find((function(e){return e.name===s}));(void 0!==c&&(n=!0),n)?window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))&&h(c.id,Object(u.a)(Object(u.a)({},c),{},{number:w})).then((function(e){J("success"),A("Updated ".concat(e.name)),setTimeout((function(){return A(null)}),5e3),r(t.map((function(n){return n.id===e.id?e:n})))})):j({name:s,number:w}).then((function(e){J("success"),A("Added ".concat(e.name)),setTimeout((function(){return A(null)}),5e3),r(t.concat(e))}));l(""),N("")},handleNewNameChange:function(e){e.preventDefault(),l(e.target.value)},newName:s,handleNewNumberChange:function(e){N(e.target.value)},newNumber:w}),Object(f.jsx)("h1",{children:"Numbers"}),Object(f.jsx)(p,{persons:t,nameFilter:S,setPersons:r,handleDeletePerson:function(e,n){console.log("want to delete id=".concat(e)),!0===window.confirm("Delete ".concat(n," ?"))&&b(e).then((function(n){200===n.status&&(console.log("delete success"),r(t.filter((function(n){return n.id!==e}))))})).catch((function(c){J("error"),A("Information about ".concat(n," has already been deleted from the server")),setTimeout((function(){return A(null)}),5e3),r(t.filter((function(n){return n.id!==e})))}))}})]})};t(39);a.a.render(Object(f.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b1fddbb9.chunk.js.map