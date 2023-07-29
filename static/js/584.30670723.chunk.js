"use strict";(self.webpackChunkai_career_assistant=self.webpackChunkai_career_assistant||[]).push([[584],{4752:function(e,r,n){n.d(r,{j:function(){return c}});var i=n(1413),t=n(370),s=n(6009),o=n(7689),a=n(3329),c=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.ef,n=function(n){return(0,s.a)().isLoggedIn?(0,a.jsx)(o.Fg,{to:r}):(0,a.jsx)(e,(0,i.Z)({},n))};return n}},1427:function(e,r,n){n.d(r,{W:function(){return g}});var i=n(1413),t=n(9439);function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}var o=n(8096),a=n(4925),c=n(635),d=n(3466),u=n(3400),l=n(7071),x=n(890),p=n(2791),f=n(3710),m=n(9569),h=n(5970),Z={error:{color:"error.main",fontSize:"12px"}},j=n(3329),g=function(e){var r=e.inputName,n=e.type,g=e.id,v=e.register,b=e.errors,w=(0,p.useState)(!1),y=(0,t.Z)(w,2),q=y[0],k=y[1];return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(o.Z,{error:function(e){return!!b[e]}(r),children:[(0,j.jsx)(a.Z,{htmlFor:g,children:s(r)}),"password"!==n?(0,j.jsx)(c.Z,(0,i.Z)({id:g,type:n,label:s(r),"aria-describedby":g},v(r,{required:"This field is required."}))):(0,j.jsx)(c.Z,(0,i.Z)((0,i.Z)({id:g,type:q?"text":"password",label:s(r),"aria-describedby":g},v(r,{required:"This field is required."})),{},{endAdornment:(0,j.jsx)(d.Z,{position:"end",children:(0,j.jsx)(u.Z,{"aria-label":"toggle password visibility",onClick:function(){k(!q)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:q?(0,j.jsx)(f.Z,{}):(0,j.jsx)(m.Z,{})})})})),(0,j.jsx)(l.Z,{component:h.B,id:g,errors:b,name:r,render:function(e){var r=e.message;return(0,j.jsx)(x.Z,{sx:Z.error,children:r})}})]})})}},9888:function(e,r,n){n.d(r,{$:function(){return a}});var i=n(8870),t=n(890),s={section:{paddingTop:"20px",paddingBottom:"20px"},title:{textAlign:"center"}},o=n(3329),a=function(e){var r=e.title,n=e.children;return(0,o.jsxs)(i.Z,{component:"section",sx:s.section,children:[r&&(0,o.jsx)(t.Z,{component:"h2",variant:"h2",sx:s.title,children:r}),n]})}},3798:function(e,r,n){n.d(r,{b:function(){return a}});var i,t=n(168),s=n(225),o=n(1087),a=(0,s.Z)(o.rU)(i||(i=(0,t.Z)(["\n  text-decoration: none;\n  color: #fff;\n"])))},6866:function(e,r,n){n.d(r,{O:function(){return s}});var i=n(4942),t=n(1413),s=function(e){return e.reduce((function(e,r){return(0,t.Z)((0,t.Z)({},e),{},(0,i.Z)({},r.inputName,""))}),{})}},1584:function(e,r,n){n.r(r),n.d(r,{default:function(){return _}});var i=n(4270),t=n(370),s=n(4752),o=n(9888),a=n(8870),c=n(3044),d=n(890),u=n(533),l=n(403),x=n(9439),p=n(2791),f=n(9434),m=n(1041),h=n(1134),Z=n(4695),j=n(6727),g=j.Ry().shape({email:j.Z_().required("This field is required").email("Invalid email format"),password:j.Z_().required("This field is required")}),v=n(6866),b=n(6151),w=n(1427),y=n(5984),q=[{inputName:"email",type:"email",id:(0,y.x0)()},{inputName:"password",type:"password",id:(0,y.x0)()}],k={form:{display:"flex",flexDirection:"column",gap:"20px",width:{xs:"330px",sm:"400px"},margin:"0 auto"},err:{marginTop:"10px",color:"error.main"}},I=n(3329),S=(0,v.O)(q),T=function(){var e=(0,p.useState)(null),r=(0,x.Z)(e,2),n=r[0],i=r[1],t=(0,h.cI)({resolver:(0,Z.X)(g),defaultValues:S}),s=t.register,o=t.formState.errors,c=t.handleSubmit,u=t.reset,l=(0,f.I0)();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(a.Z,{component:"form",sx:k.form,onSubmit:c((function(e){l((0,m.Ib)(e)).unwrap().catch(i),u()})),children:[q.map((function(e){var r=e.inputName,n=e.type,i=e.id;return(0,I.jsx)(w.W,{inputName:r,type:n,id:i,register:s,errors:o},i)})),(0,I.jsx)(b.Z,{type:"submit",fullWidth:!0,variant:"contained",children:"Log in"})]}),n&&(0,I.jsx)(d.Z,{sx:k.err,children:"You entered wrong email or password"})]})},F=n(3798),N={wrap:{marginTop:6,display:"flex",flexDirection:"column",alignItems:"center"},avatar:{m:1,bgcolor:"secondary.main"},text:{mb:3},link:{mt:3}},_=(0,s.j)((function(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i.q,{children:(0,I.jsx)("title",{children:"Log In"})}),(0,I.jsx)(o.$,{children:(0,I.jsxs)(a.Z,{sx:N.wrap,children:[(0,I.jsx)(c.Z,{sx:N.avatar,children:(0,I.jsx)(l.Z,{})}),(0,I.jsx)(d.Z,{component:"h1",variant:"h5",sx:N.text,children:"Sign in"}),(0,I.jsx)(T,{}),(0,I.jsx)(u.Z,{component:F.b,sx:N.link,to:t.Kd,children:"Don't have an account? Register"})]})})]})}),t.Fi)}}]);
//# sourceMappingURL=584.30670723.chunk.js.map