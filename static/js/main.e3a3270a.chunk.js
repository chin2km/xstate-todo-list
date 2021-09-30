(this["webpackJsonpxstate-todo-list"]=this["webpackJsonpxstate-todo-list"]||[]).push([[0],{23:function(t,e,o){t.exports={App:"App_App__16ZpL"}},31:function(t,e,o){},33:function(t,e,o){"use strict";o.r(e);var n=o(8),c=o.n(n),d=o(22),r=o.n(d),i=(o(31),o(25)),s=o(36),a=o(23),l=o.n(a),u=o(5),O=function(t){var e=t.todos,o=t.send;return 0===e.length?Object(u.jsx)("span",{className:"mx-auto",children:" - "}):Object(u.jsx)(u.Fragment,{children:e.sort((function(t,e){return e.id-t.id})).map((function(t){return Object(u.jsxs)("div",{onClick:function(){o({type:"TOGGLE_TODO",value:t})},className:"h-30 my-4 p-2 shadow-sm rounded-xl ".concat(t.completed?"text-gray-400":""," cursor-pointer"),children:[Object(u.jsx)("input",{type:"checkbox",checked:t.completed,className:"mx-2",onChange:function(){}}),Object(u.jsx)("span",{children:t.text}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),o({type:"REMOVE_TODO",value:t})},className:"float-right text-xl text-indigo-600",children:"\ud83c\udd67"})]},t.id)}))})},p=o(19),b=o(26),j=o(37),x=o(4),f=Object(j.a)({id:"todo",initial:"idle",context:{todos:[],currentTodo:null,newTodo:""},states:{idle:{on:{FETCH:"loaded"}},loaded:{on:{UPDATE_NEW_TODO:{actions:Object(x.b)({newTodo:function(t,e){return e.value},newTodoError:function(t){return""}})},ADD_TODO:{actions:Object(x.b)({newTodo:function(t){return""},newTodoError:function(t){return t.newTodo.length>0?void 0:"Please enter a todo"},todos:function(t){var e=t.newTodo.length?[].concat(Object(b.a)(t.todos),[{id:t.todos.length,text:t.newTodo,completed:!1}]):t.todos;return h(e),e}})},TOGGLE_TODO:{actions:Object(x.b)({todos:function(t,e){var o=t.todos.map((function(t){return t.id===e.value.id?Object(p.a)(Object(p.a)({},t),{},{completed:!t.completed}):t}));return h(o),o}})},REMOVE_TODO:{actions:Object(x.b)({todos:function(t,e){var o=t.todos.filter((function(t){return t.id!==e.value.id}));return h(o),o}})}},entry:function(t,e){var o=JSON.parse(localStorage.getItem("todos")||"[]");t.todos=o}}}}),h=function(t){localStorage.setItem("todos",JSON.stringify(t))};function m(){var t=Object(s.a)(f),e=Object(i.a)(t,2),o=e[0],c=e[1],d=o.context.todos.filter((function(t){return t.completed})),r=o.context.todos.filter((function(t){return!t.completed}));return Object(n.useEffect)((function(){c("FETCH")}),[c]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{className:"p-6 bg-indigo-200 shadow-md items-center space-x-4 text-3xl text-center flow-root sticky top-0",children:"XState todo list"}),Object(u.jsxs)("div",{className:l.a.App,children:[Object(u.jsx)("input",{type:"text",className:"\n          p-6 bg-white rounded-xl shadow-md\n          focus:outline-none focus:shadow-outline\n          ".concat(o.context.newTodoError&&"border-2 border-red-400","\n        "),value:o.context.newTodo,onChange:function(t){c({type:"UPDATE_NEW_TODO",value:t.target.value})},onKeyDown:function(t){"Enter"===t.key&&c({type:"ADD_TODO"})},placeholder:"What needs to be done?"}),Object(u.jsx)("button",{className:"p-3 rounded-xl shadow-md bg-indigo-600 text-white hover:bg-indigo-700 align-baseline",onClick:function(){c({type:"ADD_TODO"})},children:"Add Todo"}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h3",{children:"Todos: "}),Object(u.jsx)(O,{todos:r,send:c}),Object(u.jsx)("h3",{children:"Completed:"}),Object(u.jsx)(O,{todos:d,send:c})]})]})]})}var g=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,38)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,d=e.getLCP,r=e.getTTFB;o(t),n(t),c(t),d(t),r(t)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.e3a3270a.chunk.js.map