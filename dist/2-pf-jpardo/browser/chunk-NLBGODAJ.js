import{a as _e,b as Se,c as ge}from"./chunk-XV3CEU5H.js";import{f as At,g as It,h as Et,i as yt,j as Nt,l as Lt,m as Ce}from"./chunk-EPCAOVPH.js";import{A as te,B as ee,C as ie,D as $,E as ne,F as h,H as Q,I as ae,J as oe,K as re,L as me,M as le,N as de,O as se,P as ce,Q as ue,R as pe,S as fe,a as Pt,b as Tt,c as Ft,d as Ot,e as kt,f as Rt,g as Vt,h as zt,i as jt,j as Bt,k as qt,l as Ht,m as Gt,n as B,o as $t,p as q,q as Qt,r as H,s as Jt,t as G,u as Ut,v as Kt,w as Wt,x as Xt,y as Yt,z as Zt}from"./chunk-7AMW6AY6.js";import{$a as dt,Aa as n,Ab as it,Ba as S,Ca as F,Da as O,E as ot,F as R,Fa as I,Ia as p,Ka as c,L as A,M as V,O as rt,Oa as X,Pa as Y,Qa as Z,R as v,S as x,Ta as mt,Ua as o,Va as b,Wa as w,Xa as tt,_a as lt,a as D,ab as E,b as T,ba as m,bb as z,ca as f,cb as et,ed as Ct,gd as k,id as vt,jd as xt,k as g,l as at,la as s,ld as Mt,md as ht,nd as bt,od as wt,pc as j,pd as Dt,qa as _,qb as st,qc as _t,rb as ct,rc as y,sc as St,tc as gt,va as M,vb as ut,w as C,xb as pt,yb as ft,za as a}from"./chunk-NUJUWS5O.js";var N=class i{transform(e){return`${e.lastName.toUpperCase()}, ${e.firstName}`}static \u0275fac=function(t){return new(t||i)};static \u0275pipe=rt({name:"fullName",type:i,pure:!0})};function Ee(i,e){i&1&&(a(0,"mat-error"),o(1,"Nombre es requerido"),n())}function ye(i,e){i&1&&(a(0,"mat-error"),o(1,"Apellido es requerido"),n())}function Ne(i,e){i&1&&(a(0,"mat-error"),o(1,"Email es requerido"),n())}var xe="form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}input[_ngcontent-%COMP%]{display:block}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:2rem}.cancel[_ngcontent-%COMP%]{color:#c91212;background-color:#c9121220}.save[_ngcontent-%COMP%]{color:#007a5a;background-color:#007a5a20}div[_ngcontent-%COMP%]{background-color:#181e1e}h1[_ngcontent-%COMP%]{background-color:#004f4e;color:#00bcd4}",J=class i{constructor(e,t,r){this.fb=e;this.dialogRef=t;this.data=r;this.studentForm=this.fb.group({firstName:[r?.firstName,k.required],lastName:[r?.lastName,k.required],email:[r?.email,[k.email,k.required]]})}studentForm;save(){this.studentForm.invalid?this.studentForm.markAllAsTouched():this.dialogRef.close(this.studentForm.value)}close(){this.dialogRef.close()}static \u0275fac=function(t){return new(t||i)(f(wt),f(Wt),f(Xt))};static \u0275cmp=A({type:i,selectors:[["app-student-form"]],decls:25,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"main"],[3,"formGroup"],["matInput","","formControlName","firstName"],["matInput","","formControlName","lastName"],["matInput","","formControlName","email"],["mat-dialog-actions","",1,"actions"],["mat-button","",1,"cancel",3,"click"],["mat-button","",1,"save",3,"click","disabled"]],template:function(t,r){if(t&1&&(a(0,"h1",0),o(1),E(2,"fullName"),n(),a(3,"div",1)(4,"form",2)(5,"mat-form-field")(6,"mat-label"),o(7,"Nombre"),n(),S(8,"input",3),s(9,Ee,2,0,"mat-error"),n(),a(10,"mat-form-field")(11,"mat-label"),o(12,"Apellido"),n(),S(13,"input",4),s(14,ye,2,0,"mat-error"),n(),a(15,"mat-form-field")(16,"mat-label"),o(17,"Email"),n(),S(18,"input",5),s(19,Ne,2,0,"mat-error"),n()()(),a(20,"div",6)(21,"button",7),p("click",function(){return r.close()}),o(22,"Cancelar"),n(),a(23,"button",8),p("click",function(){return r.save()}),o(24,"Guardar"),n()()),t&2){let l,u,nt;m(),b(r.data?z(2,6,r.data):"Nuevo Alumno"),m(3),_("formGroup",r.studentForm),m(5),M((l=r.studentForm.get("firstName"))!=null&&l.invalid?9:-1),m(5),M((u=r.studentForm.get("lastName"))!=null&&u.invalid?14:-1),m(5),M((nt=r.studentForm.get("email"))!=null&&nt.invalid?19:-1),m(4),_("disabled",!r.studentForm.valid)}},dependencies:[Mt,Ct,vt,xt,ht,bt,q,B,$t,$,Zt,ee,te,y,N],styles:[xe,xe]})};var d=[{id:1,firstName:"Mart\xEDn",lastName:"Gonz\xE1lez",email:"martin.gonzalez@example.com",isActive:!0,createdAt:new Date("2023-08-15"),updatedAt:new Date("2023-09-10")},{id:2,firstName:"Sof\xEDa",lastName:"Rodr\xEDguez",email:"sofia.rodriguez@example.com",isActive:!1,createdAt:new Date("2023-02-01"),updatedAt:new Date("2023-05-20")},{id:3,firstName:"Camila",lastName:"P\xE9rez",email:"camila.perez@example.com",isActive:!0,createdAt:new Date("2023-01-15"),updatedAt:new Date("2023-07-25")},{id:4,firstName:"Lucas",lastName:"Fern\xE1ndez",email:"lucas.fernandez@example.com",isActive:!0,createdAt:new Date("2023-04-10"),updatedAt:new Date("2023-06-08")},{id:5,firstName:"Valentina",lastName:"L\xF3pez",email:"valentina.lopez@example.com",isActive:!1,createdAt:new Date("2023-03-21"),updatedAt:new Date("2023-07-03")},{id:6,firstName:"Joaqu\xEDn",lastName:"Mart\xEDnez",email:"joaquin.martinez@example.com",isActive:!0,createdAt:new Date("2023-05-05"),updatedAt:new Date("2023-06-15")},{id:7,firstName:"Luc\xEDa",lastName:"S\xE1nchez",email:"lucia.sanchez@example.com",isActive:!1,createdAt:new Date("2023-07-22"),updatedAt:new Date("2023-09-05")},{id:8,firstName:"Emilio",lastName:"Ruiz",email:"emilio.ruiz@example.com",isActive:!0,createdAt:new Date("2023-06-10"),updatedAt:new Date("2023-08-11")},{id:9,firstName:"Carolina",lastName:"Torres",email:"carolina.torres@example.com",isActive:!0,createdAt:new Date("2023-01-30"),updatedAt:new Date("2023-07-01")},{id:10,firstName:"Mat\xEDas",lastName:"Ram\xEDrez",email:"matias.ramirez@example.com",isActive:!1,createdAt:new Date("2023-03-14"),updatedAt:new Date("2023-05-30")}],P=class i{constructor(){}getStudents(){return g(d).pipe(C(h()))}getActiveStudents(){return d=d.filter(e=>e.isActive),g(d).pipe(C(h()))}deleteStudent(e){return d=d.map(t=>t.id===e?T(D({},t),{isActive:!1,updatedAt:new Date}):t).filter(t=>t.isActive),g(d).pipe(C(h(.3)))}updateStudent(e,t){return d=d.map(r=>r.id===e?T(D(D({},r),t),{updatedAt:new Date}):r).filter(r=>r.isActive),g(d).pipe(C(h(.5)))}addStudent(e){let t=d.reduce((l,u)=>Math.max(l,u.id),0),r=T(D({},e),{isActive:!0,id:t+1,createdAt:new Date,updatedAt:new Date});return d=[...d,r],g(d).pipe(C(h(.7)))}activateStudent(e){return d=d.map(t=>t.id===e?T(D({},t),{isActive:!0,updatedAt:new Date}):t).filter(t=>!t.isActive),g(d).pipe(C(h(.5)))}getInactiveStudents(){return d=d.filter(e=>!e.isActive),g(d).pipe(C(h()))}getStudentById(e){let t=d.find(r=>r.id===e);return t?g(t).pipe(C(h())):at(()=>new Error("Alumno no encontrado"))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ot({token:i,factory:i.\u0275fac,providedIn:"root"})};var Fe=()=>[10,25,100],Oe=i=>[i];function ke(i,e){i&1&&S(0,"mat-spinner",1)}function Re(i,e){i&1&&(a(0,"th",19),o(1," Apellido"),n())}function Ve(i,e){if(i&1&&(a(0,"td",20),o(1),n()),i&2){let t=e.$implicit;m(),w(" ",t.lastName,"")}}function ze(i,e){i&1&&(a(0,"th",19),o(1," Nombre"),n())}function je(i,e){if(i&1&&(a(0,"td",20),o(1),n()),i&2){let t=e.$implicit;m(),w(" ",t.firstName,"")}}function Be(i,e){i&1&&(a(0,"th",19),o(1," Email"),n())}function qe(i,e){if(i&1&&(a(0,"td",20),o(1),n()),i&2){let t=e.$implicit;m(),w(" ",t.email,"")}}function He(i,e){i&1&&(a(0,"th",21),o(1," Acciones"),n())}function Ge(i,e){if(i&1){let t=I();a(0,"td",20)(1,"div",22)(2,"button",23)(3,"mat-icon"),o(4,"visibility"),n()(),a(5,"button",24),p("click",function(){let l=v(t).$implicit,u=c(2);return x(u.openDialog(l))}),a(6,"mat-icon"),o(7,"edit"),n()(),a(8,"button",25),p("click",function(){let l=v(t).$implicit,u=c(2);return x(u.deleteStudent(l))}),a(9,"mat-icon"),o(10,"delete"),n()()()()}if(i&2){let t=e.$implicit;m(2),_("routerLink",dt(1,Oe,t.id))}}function $e(i,e){i&1&&S(0,"tr",26)}function Qe(i,e){i&1&&S(0,"tr",27)}function Je(i,e){if(i&1&&(a(0,"tr",28)(1,"td",29),o(2),n()()),i&2){c();let t=mt(10);m(2),w('No hay datos que coincidan con el filtro "',t.value,'"')}}function Ue(i,e){if(i&1){let t=I();a(0,"div",2)(1,"button",3),p("click",function(){v(t);let l=c();return x(l.openDialog(null))}),o(2," Agregar Alumno "),n(),a(3,"mat-slide-toggle",4),p("change",function(l){v(t);let u=c();return x(u.toggleInactive(l))}),a(4,"span"),o(5,"Ver usuarios inactivos "),n()()(),a(6,"mat-form-field")(7,"mat-label"),o(8,"Buscar"),n(),a(9,"input",5,0),p("keyup",function(l){v(t);let u=c();return x(u.applyFilter(l))}),n()(),a(11,"div",6)(12,"table",7),F(13,8),s(14,Re,2,0,"th",9)(15,Ve,2,1,"td",10),O(),F(16,11),s(17,ze,2,0,"th",9)(18,je,2,1,"td",10),O(),F(19,12),s(20,Be,2,0,"th",9)(21,qe,2,1,"td",10),O(),F(22,13),s(23,He,2,0,"th",14)(24,Ge,11,3,"td",10),O(),s(25,$e,1,0,"tr",15)(26,Qe,1,0,"tr",16)(27,Je,3,1,"tr",17),n(),S(28,"mat-paginator",18),n()}if(i&2){let t=c();m(12),_("dataSource",t.dataSource),m(13),_("matHeaderRowDef",t.displayedColumns),m(),_("matRowDefColumns",t.displayedColumns),m(2),_("pageSizeOptions",lt(4,Fe))}}var U=class i{constructor(e,t){this.studentsService=e;this.dialog=t}displayedColumns=["apellido","nombre","email","actions"];dataSource=new Gt;isLoading=!1;showInactive=!1;user={firstName:"Juan",lastName:"Pardo",role:"admin"};paginator;sort;ngOnInit(){this.loadStudents()}loadStudents(){this.isLoading=!0,this.showInactive?this.studentsService.getInactiveStudents().subscribe(e=>{this.dataSource.data=e,this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.isLoading=!1}):this.studentsService.getActiveStudents().subscribe(e=>{this.dataSource.data=e,this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.isLoading=!1})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(e){let t=e.target.value;this.dataSource.filter=t.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}openDialog(e){this.dialog.open(J,{data:e||null,width:"500px",disableClose:!1}).afterClosed().subscribe({next:r=>{r&&(e?this.updateAlumno(e.id,r):this.addAlumno(r))}})}deleteStudent(e){this.isLoading=!0,this.studentsService.deleteStudent(e.id).subscribe({next:t=>{this.dataSource.data=t},complete:()=>{this.isLoading=!1}})}updateAlumno(e,t){this.isLoading=!0,this.studentsService.updateStudent(e,t).subscribe({next:r=>{this.dataSource.data=r},complete:()=>{this.isLoading=!1}})}addAlumno(e){this.isLoading=!0,this.studentsService.addStudent(e).subscribe({next:t=>{this.dataSource.data=t},complete:()=>{this.isLoading=!1}})}toggleInactive(e){this.showInactive=e.checked,this.loadStudents()}static \u0275fac=function(t){return new(t||i)(f(P),f(Yt))};static \u0275cmp=A({type:i,selectors:[["app-student-list"]],viewQuery:function(t,r){if(t&1&&(X(H,5),X(G,5)),t&2){let l;Y(l=Z())&&(r.paginator=l.first),Y(l=Z())&&(r.sort=l.first)}},decls:5,vars:1,consts:[["input",""],[1,"spinner"],[1,"controls"],["mat-raised-button","",1,"demo-button",3,"click"],["disabled","true","labelPosition","before",3,"change"],["matInput","","placeholder","",3,"keyup"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","apellido"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","email"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","","aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"actions"],["mat-icon-button","","aria-label","View button",1,"view-icon",3,"routerLink"],["mat-icon-button","","aria-label","Edit button",1,"edit-icon",3,"click"],["mat-icon-button","","aria-label","Delete button",1,"delete-icon",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,r){t&1&&(a(0,"section")(1,"h1"),o(2,"Lista de Alumnos"),n(),s(3,ke,1,0,"mat-spinner",1)(4,Ue,29,5),n()),t&2&&(m(3),M(r.isLoading?3:4))},dependencies:[ft,q,B,$,Q,oe,j,Pt,Ft,Vt,Ot,Tt,zt,kt,Rt,jt,Bt,qt,G,Ut,H,y,St],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.delete-icon[_ngcontent-%COMP%]{color:#c12}.edit-icon[_ngcontent-%COMP%]{color:#fc0}.view-icon[_ngcontent-%COMP%]{color:#09f}.spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}@media screen and (max-width: 500px){.controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}section[_ngcontent-%COMP%]{margin:1rem;padding:1rem}.mat-mdc-form-field[_ngcontent-%COMP%]{overflow:hidden}"]})};function Ke(i,e){i&1&&(a(0,"div",1),S(1,"mat-spinner",2),n())}function We(i,e){if(i&1){let t=I();a(0,"mat-card",3)(1,"mat-card-header")(2,"div",5),o(3),n(),a(4,"div")(5,"mat-card-title"),o(6),E(7,"fullName"),n(),a(8,"mat-card-subtitle")(9,"mat-chip-listbox")(10,"mat-chip",6),o(11),n()()()()(),a(12,"mat-card-content")(13,"mat-list")(14,"mat-list-item")(15,"mat-icon",7),o(16,"person"),n(),a(17,"span",8),o(18,"Nombre"),n(),a(19,"span",9),o(20),n()(),a(21,"mat-list-item")(22,"mat-icon",7),o(23,"email"),n(),a(24,"span",8),o(25,"Email"),n(),a(26,"span",9),o(27),n()(),a(28,"mat-list-item")(29,"mat-icon",7),o(30,"event"),n(),a(31,"span",8),o(32,"Fecha Registro"),n(),a(33,"span",9),o(34),E(35,"date"),n()(),a(36,"mat-list-item")(37,"mat-icon",7),o(38,"update"),n(),a(39,"span",8),o(40,"\xDAltima Actualizaci\xF3n"),n(),a(41,"span",9),o(42),E(43,"date"),n()()()(),a(44,"mat-card-actions",10)(45,"button",11),p("click",function(){v(t);let l=c(2);return x(l.goBack())}),a(46,"mat-icon"),o(47,"arrow_back"),n(),o(48," Volver al listado "),n()()()}if(i&2){let t=c(2);m(3),tt(" ",t.student.firstName.charAt(0),"",t.student.lastName.charAt(0)," "),m(3),b(z(7,10,t.student)),m(4),_("color",t.student.isActive?"green":"red"),m(),w(" ",t.student.isActive?"Activo":"Inactivo"," "),m(9),tt("",t.student.firstName," ",t.student.lastName,""),m(7),b(t.student.email),m(7),b(et(35,12,t.student.createdAt,"medium")),m(8),b(et(43,15,t.student.updatedAt,"medium"))}}function Xe(i,e){if(i&1){let t=I();a(0,"mat-card",4)(1,"mat-card-header")(2,"mat-card-title"),o(3,"Estudiante no encontrado"),n()(),a(4,"mat-card-content")(5,"p"),o(6,"Lo sentimos, no se pudo encontrar la informaci\xF3n del estudiante."),n()(),a(7,"mat-card-actions",10)(8,"button",11),p("click",function(){v(t);let l=c(2);return x(l.goBack())}),a(9,"mat-icon"),o(10,"arrow_back"),n(),o(11," Volver al listado "),n()()()}}function Ye(i,e){if(i&1&&s(0,We,49,18,"mat-card",3)(1,Xe,12,0,"mat-card",4),i&2){let t=c();M(t.student?0:1)}}var K=class i{constructor(e,t,r){this.route=e;this.studentsService=t;this.router=r}studentID;student;isLoading=!1;ngOnInit(){this.route.params.subscribe(e=>{this.studentID=+e.id,this.loadStudent()})}loadStudent(){this.isLoading=!0,this.studentsService.getStudentById(this.studentID).subscribe({next:e=>{this.student=e,this.isLoading=!1},error:e=>{console.error(e),this.isLoading=!1}})}goBack(){this.router.navigate(["/students"]).then()}static \u0275fac=function(t){return new(t||i)(f(ut),f(P),f(pt))};static \u0275cmp=A({type:i,selectors:[["app-student-detail"]],decls:3,vars:1,consts:[[1,"student-info-container"],[1,"loading-spinner"],["diameter","50"],[1,"student-card"],[1,"not-found-card"],["mat-card-avatar","",1,"student-avatar"],[3,"color"],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""],["align","end"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,r){t&1&&(a(0,"section",0),s(1,Ke,2,0,"div",1)(2,Ye,2,1),n()),t&2&&(m(),M(r.isLoading?1:2))},dependencies:[Q,j,y,me,ce,pe,de,ue,se,le,_e,Se,yt,Nt,Et,It,At,st,N],styles:[".student-info-container[_ngcontent-%COMP%], .course-info-container[_ngcontent-%COMP%], .class-info-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:20px}.student-card[_ngcontent-%COMP%], .not-found-card[_ngcontent-%COMP%], .course-card[_ngcontent-%COMP%], .class-card[_ngcontent-%COMP%]{max-width:600px;width:100%}.student-avatar[_ngcontent-%COMP%], .course-avatar[_ngcontent-%COMP%], .class-avatar[_ngcontent-%COMP%]{width:100px;height:100px;background-color:#09f;color:#fff;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:lighter;margin:16px}mat-card-content[_ngcontent-%COMP%]{margin-top:20px}mat-list-item[_ngcontent-%COMP%]{height:auto!important;margin-bottom:16px}mat-card-actions[_ngcontent-%COMP%]{padding:16px}mat-card-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center}mat-card[_ngcontent-%COMP%]{background-color:#e5e5e522}.mdc-evolution-chip-set__chips[_ngcontent-%COMP%]{display:flex;justify-content:center}.green-chip[_ngcontent-%COMP%]{color:#0de50d}.red-chip[_ngcontent-%COMP%]{color:#de1212}"]})};var Ze=[{path:"",component:U},{path:":id",component:K}],W=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=R({imports:[it.forChild(Ze),it]})};var we=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=R({imports:[ct,W,Dt,Ce,Qt,ne,ae,re,_t,Ht,Kt,Jt,ie,gt,fe,ge,Lt]})};export{we as StudentsModule};
