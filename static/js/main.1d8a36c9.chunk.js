(this.webpackJsonpto_do_app=this.webpackJsonpto_do_app||[]).push([[0],{19:function(a,t,e){},20:function(a,t,e){},26:function(a,t,e){"use strict";e.r(t);var r=e(0),c=e(2),o=e.n(c),s=e(12),n=e.n(s),i=(e(19),e(5)),l=(e(20),e(4)),u=e(3),m=function(a){var t=a.mostrarCompletadas,e=a.cambiarMostrarCompletadas,c=function(){e(!t)};return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{className:"header__titulo",children:"Lista de Tareas"}),t?Object(r.jsxs)("button",{className:"header__boton",onClick:function(){return c()},children:["Ocultar tareas completadas",Object(r.jsx)(l.a,{icon:u.d,className:"header__icono-boton"})]}):Object(r.jsxs)("button",{className:"header__boton",onClick:function(){return c()},children:["Mostrar tareas completadas",Object(r.jsx)(l.a,{icon:u.c,className:"header__icono-boton"})]})]})},d=e(13),j=e(28),b=function(a){var t=a.tareas,e=a.cambiarTareas,o=Object(c.useState)(""),s=Object(i.a)(o,2),n=s[0],m=s[1];return Object(r.jsxs)("form",{action:"",className:"form-to-do",onSubmit:function(a){a.preventDefault(),e([].concat(Object(d.a)(t),[{id:Object(j.a)(),texto:n,completada:!1}])),m("")},children:[Object(r.jsx)("input",{type:"text",className:"form-to-do__input",placeholder:"Escribe una tarea",value:n,onChange:function(a){return function(a){m(a.target.value)}(a)}}),Object(r.jsx)("button",{type:"submit",className:"form-to-do__btn",children:Object(r.jsx)(l.a,{icon:u.e,className:"form-to-do__icon-btn"})})]})},O=e(8),f=function(a){var t=a.tarea,e=a.toggleCompletada,o=a.editarTarea,s=a.borrarTarea,n=Object(c.useState)(!1),m=Object(i.a)(n,2),d=m[0],j=m[1],b=Object(c.useState)(t.texto),O=Object(i.a)(b,2),f=O[0],_=O[1];return Object(r.jsxs)("li",{className:"lista-tareas__tarea",children:[Object(r.jsx)(l.a,{icon:t.completada?u.a:u.f,className:"lista-tareas__icono lista-tareas__icono-check",onClick:function(){return e(t.id)}}),Object(r.jsx)("div",{className:"lista-tareas__texto",children:d?Object(r.jsxs)("form",{action:"",className:"formulario-editar-tarea",onSubmit:function(a){a.preventDefault(),o(t.id,f),j(!1)},children:[Object(r.jsx)("input",{type:"text",className:"formulario-editar-tarea__input",value:f,onChange:function(a){return _(a.target.value)}}),Object(r.jsx)("button",{type:"submit",className:"formulario-editar-tarea__btn",children:"Actualizar"})]}):t.texto}),Object(r.jsxs)("div",{className:"lista-tareas__contenedor-botones",children:[Object(r.jsx)(l.a,{icon:u.b,className:"lista-tareas__icono  lista-tareas__icono-accion",onClick:function(){j(!d)}}),Object(r.jsx)(l.a,{icon:u.g,className:"lista-tareas__icono  lista-tareas__icono-accion",onClick:function(){return s(t.id)}})]})]})},_=function(a){var t=a.tareas,e=a.cambiarTareas,c=a.mostrarCompletadas,o=function(a){e(t.map((function(t){return t.id===a?Object(O.a)(Object(O.a)({},t),{},{completada:!t.completada}):t})))},s=function(a,r){e(t.map((function(t){return t.id===a?Object(O.a)(Object(O.a)({},t),{},{texto:r}):t})))},n=function(a){e(t.filter((function(t){if(t.id!==a)return t})))};return Object(r.jsx)("ul",{className:"lista-tareas",children:t.length>0?t.map((function(a){return c?Object(r.jsx)(f,{tarea:a,toggleCompletada:o,editarTarea:s,borrarTarea:n},a.id):a.completada?void 0:Object(r.jsx)(f,{tarea:a,toggleCompletada:o,editarTarea:s,borrarTarea:n},a.id)})):Object(r.jsx)("div",{className:"lista-tareas__mensaje",children:"No hay tareas agregadas"})})},p=function(){var a=localStorage.getItem("tareas")?JSON.parse(localStorage.getItem("tareas")):[],t=Object(c.useState)(a),e=Object(i.a)(t,2),o=e[0],s=e[1];Object(c.useEffect)((function(){localStorage.setItem("tareas",JSON.stringify(o))}),[o]);var n="";n=null===localStorage.getItem("mostrarCompletadas")||"true"===localStorage.getItem("mostrarCompletadas");var l=Object(c.useState)(n),u=Object(i.a)(l,2),d=u[0],j=u[1];return Object(c.useEffect)((function(){localStorage.setItem("mostrarCompletadas",d.toString())}),[d]),Object(r.jsxs)("div",{className:"contenedor",children:[Object(r.jsx)(m,{mostrarCompletadas:d,cambiarMostrarCompletadas:j}),Object(r.jsx)(b,{tareas:o,cambiarTareas:s}),Object(r.jsx)(_,{tareas:o,cambiarTareas:s,mostrarCompletadas:d})," "]})};n.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1d8a36c9.chunk.js.map