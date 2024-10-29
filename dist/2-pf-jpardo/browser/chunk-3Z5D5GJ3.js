import{B as w,C as Le,D as Fe,F as Oe,H as R,a as F,b as fe,d as O,f as T,h as _e,i as ve,j as ge,k as be,l as he,m as Se,n as we,o as xe,p as De,q as Me,r as Ie,t as Ae,u as ye,w as k,y as N,z as Ee}from"./chunk-WF5PKYIA.js";import{$a as K,Aa as o,Ad as Ce,Ba as g,Ca as I,Da as A,F as q,Fa as E,Ia as _,Ka as f,M as y,Oa as j,Pa as B,Qa as H,S as x,T as D,Ta as Q,Ua as r,Va as z,Wa as S,_a as J,a as v,b,bd as ie,ca as l,da as C,fd as ne,gd as oe,id as ae,jd as re,k as p,kc as Z,kd as se,l as $,la as m,md as le,nb as U,ob as W,qa as d,qc as ee,sc as L,tc as te,va as M,vd as ce,w as h,wb as X,wd as me,xd as de,yd as pe,za as a,zb as Y,zd as ue}from"./chunk-MTDPIWLV.js";function Ge(i,t){i&1&&(a(0,"mat-error"),r(1,"Nombre es requerido"),o())}function $e(i,t){i&1&&(a(0,"mat-error"),r(1,"Descripcion es requerido"),o())}function qe(i,t){if(i&1&&(a(0,"mat-option",10),r(1),o()),i&2){let e=t.$implicit;d("value",e.id),l(),S(" ",e.name," ")}}function Qe(i,t){i&1&&(a(0,"mat-error"),r(1,"Curso es requerido"),o())}var P=class i{constructor(t,e,n,s){this.fb=t;this.dialogRef=e;this.courseService=n;this.data=s;this.classForm=this.fb.group({title:[s?.title,null],description:[s?.description,null],course:[s?.courseId,null]})}classForm;courses=[];save(){this.classForm.invalid?this.classForm.markAllAsTouched():this.dialogRef.close(this.classForm.value)}close(){this.dialogRef.close()}ngOnInit(){this.loadCourses()}loadCourses(){this.courseService.getActiveCourses().subscribe({next:t=>{this.courses=t.sort((e,n)=>e.name.localeCompare(n.name))},error:t=>{console.error(t)}})}static \u0275fac=function(e){return new(e||i)(C(le),C(ce),C(R),C(me))};static \u0275cmp=y({type:i,selectors:[["app-class-form"]],decls:25,vars:7,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"main"],[3,"formGroup"],["matInput","","formControlName","title"],["rows","5","matInput","","formControlName","description"],["formControlName","course"],[3,"value",4,"ngFor","ngForOf"],["mat-dialog-actions","",1,"actions"],["mat-button","",1,"cancel",3,"click"],["mat-button","",1,"save",3,"click","disabled"],[3,"value"]],template:function(e,n){if(e&1&&(a(0,"h1",0),r(1),o(),a(2,"div",1)(3,"form",2)(4,"mat-form-field")(5,"mat-label"),r(6,"Nombre"),o(),g(7,"input",3),m(8,Ge,2,0,"mat-error"),o(),a(9,"mat-form-field")(10,"mat-label"),r(11,"Descripcion"),o(),g(12,"textarea",4),m(13,$e,2,0,"mat-error"),o(),a(14,"mat-form-field")(15,"mat-label"),r(16,"Curso"),o(),a(17,"mat-select",5),m(18,qe,2,2,"mat-option",6),o(),m(19,Qe,2,0,"mat-error"),o()()(),a(20,"div",7)(21,"button",8),_("click",function(){return n.close()}),r(22,"Cancelar"),o(),a(23,"button",9),_("click",function(){return n.save()}),r(24,"Guardar"),o()()),e&2){let s,u,G;l(),z(n.data?n.data.title:"Nuevo Curso"),l(2),d("formGroup",n.classForm),l(5),M((s=n.classForm.get("title"))!=null&&s.invalid?8:-1),l(5),M((u=n.classForm.get("description"))!=null&&u.invalid?13:-1),l(5),d("ngForOf",n.courses),l(),M((G=n.classForm.get("course"))!=null&&G.invalid?19:-1),l(4),d("disabled",!n.classForm.valid)}},dependencies:[U,L,O,F,fe,pe,Ce,ue,T,ae,ie,ne,oe,re,se,ye,Z],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}input[_ngcontent-%COMP%]{display:block}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:2rem}.cancel[_ngcontent-%COMP%]{color:#c91212;background-color:#c9121220}.save[_ngcontent-%COMP%]{color:#007a5a;background-color:#007a5a20}div[_ngcontent-%COMP%]{background-color:#181e1e}h1[_ngcontent-%COMP%]{background-color:#004f4e;color:#00bcd4}"]})};var c=[{id:1,title:"Clase 1: Introducci\xF3n a Angular",description:"Angular CLI, instalaci\xF3n y configuraci\xF3n de la aplicaci\xF3n.",courseId:1,isActive:!0,createdAt:new Date("2023-08-15"),updatedAt:new Date("2023-09-10")},{id:2,title:"Clase 2: Directivas",description:"Aprende a usar las directivas de Angular.",courseId:1,isActive:!0,createdAt:new Date("2023-02-01"),updatedAt:new Date("2023-05-20")},{id:3,title:"Clase 3: Componentes",description:"Creaci\xF3n y uso de componentes en Angular.",courseId:1,isActive:!0,createdAt:new Date("2023-01-22"),updatedAt:new Date("2023-01-25")},{id:4,title:"Clase 4: Servicios",description:"Inyecci\xF3n de dependencias y servicios.",courseId:1,isActive:!0,createdAt:new Date("2023-01-28"),updatedAt:new Date("2023-01-30")},{id:5,title:"Clase 5: Enrutamiento",description:"Implementaci\xF3n de rutas y navegaci\xF3n.",courseId:1,isActive:!0,createdAt:new Date("2023-02-02"),updatedAt:new Date("2023-02-05")},{id:6,title:"Clase 1: Introducci\xF3n a React",description:"Creaci\xF3n de componentes y aplicaci\xF3n de React.",courseId:2,isActive:!0,createdAt:new Date("2023-02-02"),updatedAt:new Date("2023-02-05")},{id:7,title:"Clase 2: Componentes de React",description:"Creaci\xF3n de componentes de React.",courseId:2,isActive:!0,createdAt:new Date("2023-02-02"),updatedAt:new Date("2023-02-05")}],V=class i{constructor(){}getActiveClasses(t){return t?p(c.filter(e=>e.courseId===t&&e.isActive)):p(c.filter(e=>e.isActive))}getInactiveClasses(t){return t?p(c.filter(e=>e.courseId===t&&!e.isActive)):p(c.filter(e=>!e.isActive))}getClassById(t){let e=c.find(n=>n.id===t);return e?p(e).pipe(h(w())):$(()=>new Error("Clase no encontrada"))}addClass(t){let e=b(v({},t),{isActive:!0,id:Le(c),createdAt:new Date,updatedAt:new Date});return c=[...c,e],p(c).pipe(h(w(.7)))}deleteClass(t){return c=c.map(e=>e.id===t?b(v({},e),{isActive:!1,updatedAt:new Date}):e).filter(e=>e.isActive),p(c).pipe(h(w(.3)))}updateClass(t,e){return c=c.map(n=>n.id===t?b(v(v({},n),e),{updatedAt:new Date}):n).filter(n=>n.isActive),p(c).pipe(h(w(.5)))}activateClass(t){return c=c.map(e=>e.id===t?b(v({},e),{isActive:!0,updatedAt:new Date}):e).filter(e=>!e.isActive),p(c).pipe(h(w(.5)))}getClassesByCourseId(t){let e=c.filter(n=>n.courseId===t);return p(e).pipe(h(w()))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=q({token:i,factory:i.\u0275fac,providedIn:"root"})};var Je=()=>[10,25,100],Ke=i=>[i];function Ue(i,t){i&1&&g(0,"mat-spinner",1)}function We(i,t){i&1&&(a(0,"th",19),r(1," T\xEDtulo "),o())}function Xe(i,t){if(i&1&&(a(0,"td",20),r(1),o()),i&2){let e=t.$implicit;l(),S(" ",e.title," ")}}function Ye(i,t){i&1&&(a(0,"th",19),r(1," Descripci\xF3n "),o())}function Ze(i,t){if(i&1&&(a(0,"td",20),r(1),o()),i&2){let e=t.$implicit;l(),S(" ",e.description," ")}}function et(i,t){i&1&&(a(0,"th",19),r(1," Curso "),o())}function tt(i,t){if(i&1&&(a(0,"td",20),r(1),o()),i&2){let e=t.$implicit;l(),S(" ",e.courseName," ")}}function it(i,t){i&1&&(a(0,"th",21),r(1," Acciones "),o())}function nt(i,t){if(i&1){let e=E();a(0,"button",26),_("click",function(){x(e);let s=f().$implicit,u=f(2);return D(u.deleteClass(s))}),a(1,"mat-icon"),r(2,"delete"),o()()}}function ot(i,t){if(i&1){let e=E();a(0,"td",20)(1,"div",22)(2,"button",23)(3,"mat-icon"),r(4,"visibility"),o()(),a(5,"button",24),_("click",function(){let s=x(e).$implicit,u=f(2);return D(u.openDialog(s))}),a(6,"mat-icon"),r(7,"edit"),o()(),m(8,nt,3,0,"button",25),o()()}if(i&2){let e=t.$implicit,n=f(2);l(2),d("routerLink",K(2,Ke,e.id)),l(6),d("ngIf",!n.showInactive)}}function at(i,t){i&1&&g(0,"tr",27)}function rt(i,t){i&1&&g(0,"tr",28)}function st(i,t){if(i&1&&(a(0,"tr",29)(1,"td",30),r(2),o()()),i&2){f();let e=Q(10);l(2),S(' No hay datos que coincidan con el filtro "',e.value,'" ')}}function lt(i,t){if(i&1){let e=E();a(0,"div",2)(1,"button",3),_("click",function(){x(e);let s=f();return D(s.openDialog(null))}),r(2," Agregar Clase "),o(),a(3,"mat-slide-toggle",4),_("change",function(s){x(e);let u=f();return D(u.toggleInactive(s))}),a(4,"span"),r(5,"Ver clases inactivas"),o()()(),a(6,"mat-form-field")(7,"mat-label"),r(8,"Buscar"),o(),a(9,"input",5,0),_("keyup",function(s){x(e);let u=f();return D(u.applyFilter(s))}),o()(),a(11,"div",6)(12,"table",7),I(13,8),m(14,We,2,0,"th",9)(15,Xe,2,1,"td",10),A(),I(16,11),m(17,Ye,2,0,"th",9)(18,Ze,2,1,"td",10),A(),I(19,12),m(20,et,2,0,"th",9)(21,tt,2,1,"td",10),A(),I(22,13),m(23,it,2,0,"th",14)(24,ot,9,4,"td",10),A(),m(25,at,1,0,"tr",15)(26,rt,1,0,"tr",16)(27,st,3,1,"tr",17),o(),g(28,"mat-paginator",18),o()}if(i&2){let e=f();l(12),d("dataSource",e.dataSource),l(13),d("matHeaderRowDef",e.displayedColumns),l(),d("matRowDefColumns",e.displayedColumns),l(2),d("pageSizeOptions",J(4,Je))}}var ke=class i{constructor(t,e,n,s){this.route=t;this.classesService=e;this.courseService=n;this.dialog=s}displayedColumns=["title","description","courseName","actions"];dataSource=new Ae;isLoading=!1;showInactive=!1;courses=[];paginator;sort;courseID;ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}ngOnInit(){this.route.params.subscribe(t=>{this.courseID=+t.id,this.loadCourses(this.courseID)})}loadCourses(t){this.courseService.getActiveCourses().subscribe({next:e=>{this.courses=e,this.loadClasses()},error:e=>{console.error(e)}})}loadClasses(){this.isLoading=!0,this.showInactive?this.classesService.getInactiveClasses(this.courseID).subscribe({next:t=>{this.mapCoursesNames(t),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.isLoading=!1},error:t=>{console.error(t),this.isLoading=!1}}):this.classesService.getActiveClasses(this.courseID).subscribe({next:t=>{this.mapCoursesNames(t),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.isLoading=!1},error:t=>{console.error(t),this.isLoading=!1}})}applyFilter(t){let e=t.target.value;this.dataSource.filter=e.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}openDialog(t){this.dialog.open(P,{data:t||null,width:"500px",disableClose:!1}).afterClosed().subscribe({next:n=>{n&&(t?this.updateClass(t.id,n):this.addClass(n))}})}updateClass(t,e){this.isLoading=!0,this.classesService.updateClass(t,e).subscribe({next:n=>{this.mapCoursesNames(n)},complete:()=>{this.isLoading=!1}})}addClass(t){this.isLoading=!0,this.classesService.addClass(t).subscribe({next:e=>{this.mapCoursesNames(e)},complete:()=>{this.isLoading=!1}})}deleteClass(t){this.isLoading=!0,this.classesService.deleteClass(t.id).subscribe({next:e=>{this.mapCoursesNames(e)},complete:()=>{this.isLoading=!1}})}toggleInactive(t){this.showInactive=t.checked,this.loadClasses()}mapCoursesNames(t){let e=new Map;this.courses.forEach(n=>{e.set(n.id,n.name)}),this.dataSource.data=t.map(n=>b(v({},n),{courseName:e.get(n.courseId)||"Sin Curso"}))}static \u0275fac=function(e){return new(e||i)(C(X),C(V),C(R),C(de))};static \u0275cmp=y({type:i,selectors:[["app-class-list"]],viewQuery:function(e,n){if(e&1&&(j(k,5),j(N,5)),e&2){let s;B(s=H())&&(n.paginator=s.first),B(s=H())&&(n.sort=s.first)}},decls:5,vars:1,consts:[["input",""],[1,"spinner"],[1,"controls"],["mat-raised-button","",1,"demo-button",3,"click"],["disabled","true","labelPosition","before",3,"change"],["matInput","","placeholder","",3,"keyup"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","courseName"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","","aria-label","Select page of classes",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"actions"],["mat-icon-button","","aria-label","View button",1,"view-icon",3,"routerLink"],["mat-icon-button","","aria-label","Edit button",1,"edit-icon",3,"click"],["mat-icon-button","","class","delete-icon","aria-label","Delete button",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Delete button",1,"delete-icon",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","3",1,"mat-cell"]],template:function(e,n){e&1&&(a(0,"section")(1,"h1"),r(2,"Lista de Clases"),o(),m(3,Ue,1,0,"mat-spinner",1)(4,lt,29,5),o()),e&2&&(l(3),M(n.isLoading?3:4))},dependencies:[W,Y,Fe,L,te,Oe,O,F,_e,ge,we,be,ve,xe,he,Se,De,Me,Ie,ee,k,N,Ee,T],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.delete-icon[_ngcontent-%COMP%]{color:#c12}.edit-icon[_ngcontent-%COMP%]{color:#fc0}.view-icon[_ngcontent-%COMP%]{color:#09f}.spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}@media screen and (max-width: 500px){.controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}section[_ngcontent-%COMP%]{margin:1rem;padding:1rem}.mat-mdc-form-field[_ngcontent-%COMP%]{overflow:hidden}"]})};export{V as a,ke as b};
