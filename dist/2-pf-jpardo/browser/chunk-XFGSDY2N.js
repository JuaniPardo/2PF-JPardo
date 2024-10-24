import{C as xt,D as St,E as Dt,F as b,G as yt,H as It,I as Lt,J as At,K as Et,S as Tt,a as at,b as nt,c as ot,d as st,e as rt,f as lt,g as ct,h as mt,i as dt,j as pt,k as ut,l as ft,m as Ct,n as _t,p as gt,q as vt,r as T,s as ht,t as O,u as wt,v as bt,y as Mt}from"./chunk-7AMW6AY6.js";import{$a as K,Aa as o,Ab as Q,Ba as x,Ca as I,Da as L,E as z,F as D,Fa as A,Ia as w,Ka as m,L as g,M as y,Oa as N,Pa as H,Qa as B,R as v,S as h,Ta as G,Ua as s,Wa as E,_a as J,a as C,b as M,ba as c,ca as j,k as d,l as $,la as u,ob as U,pc as Y,qa as f,qc as Z,rb as W,rc as tt,sc as et,tc as it,va as q,w as _,yb as X,za as n}from"./chunk-NUJUWS5O.js";var F=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-class-form"]],decls:2,vars:0,template:function(t,a){t&1&&(n(0,"p"),s(1,"class-form works!"),o())}})};var r=[{id:1,title:"Clase 1: Introducci\xF3n a Angular",description:"Angular CLI, instalaci\xF3n y configuraci\xF3n de la aplicaci\xF3n.",courseId:1,isActive:!0,createdAt:new Date("2023-08-15"),updatedAt:new Date("2023-09-10")},{id:2,title:"Clase 2: Directivas",description:"Aprende a usar las directivas de Angular.",courseId:1,isActive:!0,createdAt:new Date("2023-02-01"),updatedAt:new Date("2023-05-20")},{id:3,title:"Clase 3: Componentes",description:"Creaci\xF3n y uso de componentes en Angular.",courseId:1,isActive:!0,createdAt:new Date("2023-01-22"),updatedAt:new Date("2023-01-25")},{id:4,title:"Clase 4: Servicios",description:"Inyecci\xF3n de dependencias y servicios.",courseId:1,isActive:!0,createdAt:new Date("2023-01-28"),updatedAt:new Date("2023-01-30")},{id:5,title:"Clase 5: Enrutamiento",description:"Implementaci\xF3n de rutas y navegaci\xF3n.",courseId:1,isActive:!0,createdAt:new Date("2023-02-02"),updatedAt:new Date("2023-02-05")}],k=class i{constructor(){}getActiveClasses(){return d(r.filter(e=>e.isActive))}getInactiveClasses(){return d(r.filter(e=>!e.isActive))}getClassById(e){let t=r.find(a=>a.id===e);return t?d(t).pipe(_(b())):$(()=>new Error("Clase no encontrada"))}addClass(e){let t=yt(r),a=M(C({},e),{isActive:!0,id:t+1,createdAt:new Date,updatedAt:new Date});return r=[...r,a],d(r).pipe(_(b(.7)))}deleteClass(e){return r=r.map(t=>t.id===e?M(C({},t),{isActive:!1,updatedAt:new Date}):t).filter(t=>t.isActive),d(r).pipe(_(b(.3)))}updateClass(e,t){return r=r.map(a=>a.id===e?M(C(C({},a),t),{updatedAt:new Date}):a).filter(a=>a.isActive),d(r).pipe(_(b(.5)))}activateClass(e){return r=r.map(t=>t.id===e?M(C({},t),{isActive:!0,updatedAt:new Date}):t).filter(t=>!t.isActive),d(r).pipe(_(b(.5)))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"})};var Pt=()=>[10,25,100],Rt=i=>[i];function Vt(i,e){i&1&&x(0,"mat-spinner",1)}function jt(i,e){i&1&&(n(0,"th",18),s(1," T\xEDtulo "),o())}function Nt(i,e){if(i&1&&(n(0,"td",19),s(1),o()),i&2){let t=e.$implicit;c(),E(" ",t.title," ")}}function Ht(i,e){i&1&&(n(0,"th",18),s(1," Descripci\xF3n "),o())}function Bt(i,e){if(i&1&&(n(0,"td",19),s(1),o()),i&2){let t=e.$implicit;c(),E(" ",t.description," ")}}function Qt(i,e){i&1&&(n(0,"th",20),s(1," Acciones "),o())}function $t(i,e){if(i&1){let t=A();n(0,"button",25),w("click",function(){v(t);let l=m().$implicit,p=m(2);return h(p.deleteClass(l))}),n(1,"mat-icon"),s(2,"delete"),o()()}}function zt(i,e){if(i&1){let t=A();n(0,"td",19)(1,"div",21)(2,"button",22)(3,"mat-icon"),s(4,"visibility"),o()(),n(5,"button",23),w("click",function(){let l=v(t).$implicit,p=m(2);return h(p.openDialog(l))}),n(6,"mat-icon"),s(7,"edit"),o()(),u(8,$t,3,0,"button",24),o()()}if(i&2){let t=e.$implicit,a=m(2);c(2),f("routerLink",K(2,Rt,t.id)),c(6),f("ngIf",!a.showInactive)}}function qt(i,e){i&1&&x(0,"tr",26)}function Gt(i,e){i&1&&x(0,"tr",27)}function Jt(i,e){if(i&1&&(n(0,"tr",28)(1,"td",29),s(2),o()()),i&2){m();let t=G(10);c(2),E(' No hay datos que coincidan con el filtro "',t.value,'" ')}}function Kt(i,e){if(i&1){let t=A();n(0,"div",2)(1,"button",3),w("click",function(){v(t);let l=m();return h(l.openDialog(null))}),s(2," Agregar Clase "),o(),n(3,"mat-slide-toggle",4),w("change",function(l){v(t);let p=m();return h(p.toggleInactive(l))}),n(4,"span"),s(5,"Ver clases inactivas"),o()()(),n(6,"mat-form-field")(7,"mat-label"),s(8,"Buscar"),o(),n(9,"input",5,0),w("keyup",function(l){v(t);let p=m();return h(p.applyFilter(l))}),o()(),n(11,"div",6)(12,"table",7),I(13,8),u(14,jt,2,0,"th",9)(15,Nt,2,1,"td",10),L(),I(16,11),u(17,Ht,2,0,"th",9)(18,Bt,2,1,"td",10),L(),I(19,12),u(20,Qt,2,0,"th",13)(21,zt,9,4,"td",10),L(),u(22,qt,1,0,"tr",14)(23,Gt,1,0,"tr",15)(24,Jt,3,1,"tr",16),o(),x(25,"mat-paginator",17),o()}if(i&2){let t=m();c(12),f("dataSource",t.dataSource),c(10),f("matHeaderRowDef",t.displayedColumns),c(),f("matRowDefColumns",t.displayedColumns),c(2),f("pageSizeOptions",J(4,Pt))}}var P=class i{constructor(e,t){this.classesService=e;this.dialog=t}displayedColumns=["title","description","actions"];dataSource=new Ct;isLoading=!1;showInactive=!1;paginator;sort;ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}ngOnInit(){this.loadClasses()}loadClasses(){this.isLoading=!0,this.showInactive?this.classesService.getInactiveClasses().subscribe({next:e=>{this.dataSource.data=e,this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.isLoading=!1},error:e=>{console.error(e),this.isLoading=!1}}):this.classesService.getActiveClasses().subscribe({next:e=>{this.dataSource.data=e,this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.isLoading=!1},error:e=>{console.error(e),this.isLoading=!1}})}applyFilter(e){let t=e.target.value;this.dataSource.filter=t.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}openDialog(e){this.dialog.open(F,{data:e||null,width:"500px",disableClose:!1}).afterClosed().subscribe({next:a=>{a&&(e?this.updateClass(e.id,a):this.addClass(a))}})}updateClass(e,t){this.isLoading=!0,this.classesService.updateClass(e,t).subscribe({next:a=>{this.dataSource.data=a},complete:()=>{this.isLoading=!1}})}addClass(e){this.isLoading=!0,this.classesService.addClass(e).subscribe({next:t=>{this.dataSource.data=t},complete:()=>{this.isLoading=!1}})}deleteClass(e){this.isLoading=!0,this.classesService.deleteClass(e.id).subscribe({next:t=>{this.dataSource.data=t},complete:()=>{this.isLoading=!1}})}toggleInactive(e){this.showInactive=e.checked,this.loadClasses()}static \u0275fac=function(t){return new(t||i)(j(k),j(Mt))};static \u0275cmp=g({type:i,selectors:[["app-class-list"]],viewQuery:function(t,a){if(t&1&&(N(T,5),N(O,5)),t&2){let l;H(l=B())&&(a.paginator=l.first),H(l=B())&&(a.sort=l.first)}},decls:5,vars:1,consts:[["input",""],[1,"spinner"],[1,"controls"],["mat-raised-button","",1,"demo-button",3,"click"],["disabled","true","labelPosition","before",3,"change"],["matInput","","placeholder","",3,"keyup"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","","aria-label","Select page of classes",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"actions"],["mat-icon-button","","aria-label","View button",1,"view-icon",3,"routerLink"],["mat-icon-button","","aria-label","Edit button",1,"edit-icon",3,"click"],["mat-icon-button","","class","delete-icon","aria-label","Delete button",3,"click",4,"ngIf"],["mat-icon-button","","aria-label","Delete button",1,"delete-icon",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","3",1,"mat-cell"]],template:function(t,a){t&1&&(n(0,"section")(1,"h1"),s(2,"Lista de Clases"),o(),u(3,Vt,1,0,"mat-spinner",1)(4,Kt,26,5),o()),t&2&&(c(3),q(a.isLoading?3:4))},dependencies:[U,X,It,tt,et,At,gt,_t,at,ot,ct,st,nt,mt,rt,lt,dt,pt,ut,Y,T,O,wt,St],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.delete-icon[_ngcontent-%COMP%]{color:#c12}.edit-icon[_ngcontent-%COMP%]{color:#fc0}.view-icon[_ngcontent-%COMP%]{color:#09f}.spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}@media screen and (max-width: 500px){.controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}section[_ngcontent-%COMP%]{margin:1rem;padding:1rem}.mat-mdc-form-field[_ngcontent-%COMP%]{overflow:hidden}"]})};var R=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-class-detail"]],decls:2,vars:0,template:function(t,a){t&1&&(n(0,"p"),s(1,"class-detail works!"),o())}})};var Ut=[{path:"",component:P},{path:":id",component:R}],V=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=y({type:i});static \u0275inj=D({imports:[Q.forChild(Ut),Q]})};var Ft=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=y({type:i});static \u0275inj=D({imports:[W,V,Lt,it,Et,vt,ft,Z,ht,bt,xt,Tt,Dt]})};export{Ft as ClassesModule};
