(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(9),r=n.n(l),c=(n(17),n(18),n(7)),i=n(10),s=n(1),u=n(2),m=n(3),d=n(5),f=n(4),h=n(6),p=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onChange=function(e){var t=n.props.onSearch;n.setState({term:e.target.value}),t(e.target.value)},n.state={term:""},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search",value:this.state.term,onChange:this.onChange})}}]),t}(o.Component),g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).onLabelChange=function(e){var t=e.target.value.replace("  "," ");n.setState({title:t})},n.onSubmit=function(e){e.preventDefault();var t=n.state.title;n.setState({title:""}),n.props.onItemAdded(t)},n.state={title:""},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit},a.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:this.state.title,onChange:this.onLabelChange}),a.a.createElement("button",{disabled:this.state.title.length<3,type:"submit"}))}}]),t}(o.Component),b=function(e){var t=e.onSearch,n=e.onItemAdded;return a.a.createElement("header",{className:"header"},a.a.createElement(p,{onSearch:t}),a.a.createElement("h1",{className:"header-title",style:{userSelect:"none"}},"todos"),a.a.createElement(g,{onItemAdded:n}))},v=function(e){var t=e.onDelete,n=e.todo,o=e.onToggleDone;return a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:n.id,checked:n.complete,onChange:o,readOnly:!0}),a.a.createElement("label",{htmlFor:n.id},n.title),a.a.createElement("button",{type:"button",className:"destroy",onClick:t}))},E=function(e){var t=e.todos,n=e.onDelete,o=e.onToggleDone,l=e.onMarkedAll;return a.a.createElement("section",{className:"main",style:{display:"block"}},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),a.a.createElement("label",{htmlFor:"toggle-all",title:"Mark all as complete",onClick:l},"Mark all as complete"),a.a.createElement("ul",{className:"todo-list"},t.map(function(e){return a.a.createElement("li",{className:e.complete?"completed":"",key:e.id},a.a.createElement(v,{todo:e,onDelete:function(){return n(e.id)},onToggleDone:function(){return o(e.id)}}))})))},S=function(e){var t=e.filter,n=e.onFilterChange;return a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:"all"===t?"selected":"",onClick:function(){return n("all")}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:"active"===t?"selected":"",onClick:function(){return n("active")}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:"complete"===t?"selected":"",onClick:function(){return n("complete")}},"Completed")))},C=function(e){var t=e.todos,n=e.onFilterChange,o=e.handleDeleteAllCompleted,l=e.toDoCount,r=e.filter,c=t.filter(function(e){return e.complete});return a.a.createElement("footer",{className:"footer",style:{display:"block"}},a.a.createElement("span",{className:"todo-count"},l," ","items left"),a.a.createElement(S,{onFilterChange:n,filter:r}),a.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:o},c.length>0?"Clear completed":""))},y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],search:"",filter:"all"},n.getFromLocalStorage=function(){var e=localStorage.getItem("todos");return JSON.parse(e)},n.saveToLocalStorage=function(){var e=n.state.todos;localStorage.setItem("todos",JSON.stringify(e))},n.onItemAdded=function(e){e.length>2&&n.setState(function(t){var o=n.createItem(e);return{todos:[].concat(Object(s.a)(t.todos),[o])}}),n.saveToLocalStorage()},n.createItem=function(e){return{id:+new Date,title:e,complete:!1}},n.toggleProperty=function(e,t,n){var o=e.findIndex(function(e){return e.id===t}),a=!e[o][n],l=Object(i.a)({},e[o],Object(c.a)({},n,a));return[].concat(Object(s.a)(e.slice(0,o)),[l],Object(s.a)(e.slice(o+1)))},n.onToggleDone=function(e){n.setState(function(t){return{todos:n.toggleProperty(t.todos,e,"complete")}})},n.onFilterChange=function(e){n.setState({filter:e})},n.onSearchChange=function(e){n.setState({search:e})},n.onDelete=function(e){n.setState(function(t){var n=t.todos.findIndex(function(t){return t.id===e});return{todos:[].concat(Object(s.a)(t.todos.slice(0,n)),Object(s.a)(t.todos.slice(n+1)))}})},n.handleDeleteAllCompleted=function(){n.setState(function(e){return{todos:e.todos.filter(function(e){return!e.complete})}}),localStorage.setItem("todos",JSON.stringify({title:"",id:0,complete:!1}))},n.onMarkedAll=function(){n.setState(function(e){e.todos.map(function(e){return e.complete=!0})}),n.state.todos.every(function(e){return!0===e.complete})&&n.setState(function(e){e.todos.map(function(e){return e.complete=!1})}),n.forceUpdate()},n.filterItems=function(e,t){return"active"===t?e.filter(function(e){return!e.complete}):"complete"===t?e.filter(function(e){return e.complete}):e},n.searchItems=function(e,t){return 0===t.length?e:e.filter(function(e){return e.title.toLowerCase().includes(t.toLowerCase())})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this.getFromLocalStorage();this.setState(function(t){return{todos:[].concat(Object(s.a)(t.todos),Object(s.a)(e))}})}},{key:"componentDidMount",value:function(){this.setState(function(e){return{todos:e.todos}})}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.filter,o=e.search,l=t.filter(function(e){return e.complete}).length,r=t.length-l,c=this.searchItems(this.filterItems(t,n),o);return this.saveToLocalStorage("todos",JSON.stringify([])),a.a.createElement("section",{className:"todoapp"},t.length<1?a.a.createElement(a.a.Fragment,null,a.a.createElement(b,{onSearch:this.onSearchChange,onItemAdded:this.onItemAdded})):a.a.createElement(a.a.Fragment,null,a.a.createElement(b,{onSearch:this.onSearchChange,onItemAdded:this.onItemAdded}),a.a.createElement(E,{todos:c,onDelete:this.onDelete,onToggleDone:this.onToggleDone,onMarkedAll:this.onMarkedAll}),a.a.createElement(C,{todos:c,onFilterChange:this.onFilterChange,filter:n,handleDeleteAllCompleted:this.handleDeleteAllCompleted,toDoCount:r})))}}]),t}(o.Component);r.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.16b0f9f8.chunk.js.map