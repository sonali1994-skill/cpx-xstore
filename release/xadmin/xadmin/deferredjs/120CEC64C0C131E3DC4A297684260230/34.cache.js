$wnd.xadmin.runAsyncCallback34("function qyd(a,b){a.a=b}\nfunction ryd(a,b){a.b=b}\nfunction syd(a,b){a.c=b}\nfunction tyd(a,b){a.f=b}\nfunction uyd(a,b){a.g=b}\nfunction Wyd(a){this.a=a}\nfunction mxd(a){this.a=a}\nfunction oxd(a){this.a=a}\nfunction rxd(a){this.a=a}\nfunction wxd(a){this.a=a}\nfunction zxd(a){this.a=a}\nfunction Bxd(a){this.a=a}\nfunction Twd(a,b){this.a=a;this.b=b}\nfunction qxd(a,b){Nyd(a.a.a.e,b)}\nfunction Pyd(a,b){el(a.f.g,!b)}\nfunction Ryd(a,b){mk(a.f,b);b&&Yyd(a.f)}\nfunction Swd(a,b){mHc(a.a,b);Ewd(a.a,a.b)}\nfunction Kwd(a,b){mHc(a.a,b);Bwd(a.a,a.c,a.b)}\nfunction Dwd(a,b){vHc(a.a,new Twd(a,b))}\nfunction zwd(a,b,c){vHc(a.a,new Lwd(a,c,b))}\nfunction Myd(a,b){Fk(a.a,b,(oy(),oy(),ny))}\nfunction Qyd(a,b){Fk(a.f.g,b,(oy(),oy(),ny))}\nfunction Kyd(){Kyd=tpc;Jyd=(NOj(),iOj)}\nfunction fxd(){fxd=tpc;exd=zKk(VEl)}\nfunction Uyd(a){this.a=a;Xf.call(this)}\nfunction Lwd(a,b,c){this.a=a;this.b=b;this.c=c}\nfunction uxd(a,b){gxd(a.a,UEl+b.Cd());Pyd(a.a.e,false)}\nfunction vxd(a,b){gxd(a.a,b);Ryd(a.a.e,ixd(a.a));Pyd(a.a.e,false)}\nfunction Owd(a,b){mHc(a.a,b);Cwd(a.a,a.c,a.e,a.d,a.f,a.g,a.i,a.b)}\nfunction Awd(a,b,c,d,e,f,g,h){vHc(a.a,new Pwd(a,h,b,c,d,e,f,g))}\nfunction bQd(a,b,c){return 'Elaborati '+a+' di '+c+' con '+b+' errori'}\nfunction jxd(a){fxd();this.d=0;this.e=a;Myd(this.e,new zxd(this));Qyd(this.e,new Bxd(this))}\nfunction Pwd(a,b,c,d,e,f,g,h){this.a=a;this.b=b;this.c=c;this.e=d;this.d=e;this.f=f;this.g=g;this.i=h}\nfunction gxd(a,b){var c;a.d=(cvk(),Noc(Toc(Date.now()),qPk));c=iqi(a.a,0);iWc(c.d.e,b);u3j(c.d)}\nfunction Lyd(b){try{return Grk(kYc(b.f.b))}catch(a){a=Loc(a);if(BJ(a,54)){return -1}else throw Moc(a)}}\nfunction Ewd(b,c){var d;d=new hMc(b,Mtl,'getEnrollmentProgress');try{gMc(d,Ntl,0);fMc(d,c,(wMc(),sMc))}catch(a){a=Loc(a);if(!BJ(a,27))throw Moc(a)}}\nfunction Yyd(a){var b,c;el(a.g,true);g0j(a.a);c=zJ(lYc(a.b));((c==null?'':c)==null||(b=zJ(lYc(a.b)),b==null?'':b).length==0)&&rYc(a.b,'443',false)}\nfunction Nyd(a,b){if(!b){mk(a.e,false);return}b.a==0?W5j(a.c):X5j(a.c);iWc(a.d,bQd(b.b,b.a,b.c));$5j(a.c,b.b/b.c);mk(a.e,true);b.b==b.c&&Vf(new Uyd(a),5000)}\nfunction Gyd(a){var b,c;c=new jxd((b=(Jni(a.a),new Syd),b));qyd(c,new jqi(Epi(a.a)));ryd(c,uQd(Wni(a.a)));syd(c,cxd(Hni(a.a)));tyd(c,gqi(Epi(a.a)));uyd(c,yB(Bni(a.a)));return c}\nfunction Bwd(b,c,d){var e,f,g;f=new hMc(b,Mtl,TEl);try{g=gMc(f,Ntl,1);YLc(g,''+LLc(g,xSk));YLc(g,''+LLc(g,c));fMc(f,d,(wMc(),uMc))}catch(a){a=Loc(a);if(BJ(a,27)){e=a;gxd(d.a,UEl+e.i);Pyd(d.a.e,false)}else throw Moc(a)}}\nfunction hxd(a,b){var c;Pyd(a.e,true);if(!b||k0j(a.e.f.a,false)){Bo((oo(),new oxd(a)),500);c=new wxd(a);b?Awd(a.c,a.b.b,kYc(a.e.f.c),Lyd(a.e),kYc(a.e.f.d),kYc(a.e.f.e),kYc(a.e.f.f),c):zwd(a.c,a.b.b,c)}else{Pyd(a.e,false)}}\nfunction ixd(a){var b,c;if(!a.f){oKk(exd,(lJk(),jJk),'Client context undefined');return false}b=g_j(a.f);if(!b){oKk(exd,(lJk(),jJk),'User role undefined');return false}c=Ucj(b,'ADMN_XOFFICE_CS_STORE_ENROLL');if(!c){oKk(exd,(lJk(),hJk),'Privilege not assigned');return false}return true}\nfunction Oyd(a,b){iWc(a.b,WEl+b+'\" per comunicare con i servizi cloud, selezionare il pulsante Registra. Non sono necessari dettagli di connessione.');iWc(a.f.i,WEl+b+'\" in Xstore Office Cloud Service, specificare i dettagli di connessione appropriati, incluse le credenziali per Identity Cloud Service (IDCS), quindi selezionare il pulsante Registra.')}\nfunction Cwd(b,c,d,e,f,g,h,i){var j,k,l;k=new hMc(b,Mtl,TEl);try{l=gMc(k,Ntl,6);YLc(l,''+LLc(l,xSk));YLc(l,''+LLc(l,xSk));YLc(l,''+LLc(l,'I'));YLc(l,''+LLc(l,xSk));YLc(l,''+LLc(l,xSk));YLc(l,''+LLc(l,xSk));YLc(l,''+LLc(l,c));YLc(l,''+LLc(l,d));bMc(l.a,''+e);YLc(l,''+LLc(l,f));YLc(l,''+LLc(l,g));YLc(l,''+LLc(l,h));fMc(k,i,(wMc(),uMc))}catch(a){a=Loc(a);if(BJ(a,27)){j=a;gxd(i.a,UEl+j.i);Pyd(i.a.e,false)}else throw Moc(a)}}\nfunction Syd(){Kyd();var a,b,c;this.b=new jWc;new l0j;this.e=new mVc;this.d=new jWc;this.c=new _5j;pOj(Jyd);b=new mVc;a=new lWc(XEl);(BEc(),a.ic).style[VQk]=(qt(),zPk);a.ic.style[ORk]=(pw(),Sfl);a.ic.style[RSk]=bUk;a.ic.className=bXk;yk(a.ic,Vfl,true);iNc(b,a,b.ic);c=new mVc;fWc(this.b);Zj(this.b).style[RSk]=bUk;jVc(c,this.b);this.a=new qOc('Registra');Wj(this.a,Rfl);jVc(c,this.a);c.ic.style[rgl]=Agl;c.ic.style[kgl]=Agl;c.ic.style[RSk]=Agl;c.ic.style[JOk]='75.0%';iNc(b,c,b.ic);this.f=new Zyd;Zj(this.f).style['borderTop']=Btl;Zj(this.f).style[rgl]=Agl;Zj(this.f).style[kgl]=Agl;Zj(this.f).style[RSk]=Agl;Zj(this.f).style[JOk]='75.0%';jVc(b,this.f);Zj(this.e).style[oUk]=dXk;jVc(this.e,this.d);jVc(this.e,this.c);mk(this.e,false);jVc(b,this.e);ktc(this,new mQc(b))}\nfunction Zyd(){var a;mVc.call(this);this.a=new l0j;this.i=new jWc;fWc(this.i);Zj(this.i).style[ORk]=(pw(),Agl);Zj(this.i).style[RSk]=bUk;this.c=new J_c;I_c(this.c,250);fl(this.c,true);this.b=new J_c;I_c(this.b,5);this.d=new J_c;I_c(this.d,30);this.e=new J_c;I_c(this.e,250);e0j(this.a,this.e);this.f=new L_c;I_c(this.f,250);e0j(this.a,this.f);e0j(this.a,this.c);R_j(this.a,this.b,new Wyd(this.b),(Kyd(),'Il valore deve essere un numero di porta valido.'));R_j(this.a,this.d,new y1j(this.d,(C1j(),A1j),'^rgbu-omni-[-a-z0-9]+-xocs[-0-9]*$'),'The tenancy ID will be the portion of the URL provided during provisioning that starts with \"rgbu-omni-\" and ends with \"-xocs\".');a=new Ndk;(BEc(),a.ic).style[oUk]=dXk;Idk(a,W5k,this.e);Idk(a,BVk,this.f);Idk(a,'Host',this.c);Idk(a,'Porta',this.b);Idk(a,'Tenancy ID',this.d);mk(a.b,true);this.g=new qOc('Registra in Xstore Office Cloud Service');Wj(this.g,Rfl);jVc(this,this.i);iNc(this,a,this.ic);jVc(this,this.g)}\nvar TEl='enrollStores',UEl='Errore : ',VEl='StoreAuthEnrollPresenter',WEl='Per registrare tutti i negozi di \"',XEl='Registrazione negozi';spc(3268,1,{},Lwd);_.Pe=function Nwd(a){Kwd(this,vJ(a,29))};_.Re=function Mwd(a){uxd(this.b,a)};var n$=osk(Ltl,'StoreAuthorizationService_Proxy/1',3268);spc(3269,1,{},Pwd);_.Pe=function Rwd(a){Owd(this,vJ(a,29))};_.Re=function Qwd(a){uxd(this.b,a)};_.d=0;var o$=osk(Ltl,'StoreAuthorizationService_Proxy/2',3269);spc(3270,1,{},Twd);_.Pe=function Vwd(a){Swd(this,vJ(a,29))};_.Re=function Uwd(a){};var p$=osk(Ltl,'StoreAuthorizationService_Proxy/3',3270);spc(3717,1,IUk,jxd);_.Ik=function kxd(){var a;a=new mxd(this);TA(this.g,new F6j(this.e,a,this));Ryd(this.e,ixd(this));Oyd(this.e,this.b.b)};_.Jk=function lxd(){};_.d=0;var exd;var A$=osk(Otl,VEl,3717);spc(3720,1,{},mxd);_.Kk=function nxd(){Pyd(this.a.e,false)};var u$=osk(Otl,'StoreAuthEnrollPresenter/1',3720);spc(3721,1,{},oxd);_.Te=function pxd(){if(Uoc(this.a.d,(cvk(),Toc(Date.now())))){Nyd(this.a.e,null);return false}Dwd(this.a.c,new rxd(this));return true};var w$=osk(Otl,'StoreAuthEnrollPresenter/2',3721);spc(3722,1,{},rxd);_.Pe=function txd(a){qxd(this,vJ(a,985))};_.Re=function sxd(a){};var v$=osk(Otl,'StoreAuthEnrollPresenter/2/1',3722);spc(3723,1,{},wxd);_.Pe=function yxd(a){vxd(this,zJ(a))};_.Re=function xxd(a){uxd(this,a)};var x$=osk(Otl,'StoreAuthEnrollPresenter/3',3723);spc(3718,1,GUk,zxd);_.ff=function Axd(a){hxd(this.a,false)};var y$=osk(Otl,'StoreAuthEnrollPresenter/lambda$0$Type',3718);spc(3719,1,GUk,Bxd);_.ff=function Cxd(a){hxd(this.a,true)};var z$=osk(Otl,'StoreAuthEnrollPresenter/lambda$1$Type',3719);spc(3266,1,CUk);_.Se=function Yxd(){var a;a=Gyd(Ini(this.b.a));this.a.fl(a)};spc(4286,nRk,oRk,Syd);_.Vk=function Tyd(){return XEl};var Jyd;var R$=osk(Stl,'StoreAuthEnrollView',4286);spc(4289,247,{},Uyd);_.Wd=function Vyd(){mk(this.a.e,false)};var O$=osk(Stl,'StoreAuthEnrollView/1',4289);spc(4287,1,Cfl,Wyd);_.gl=function Xyd(){var b;try{b=Grk(kYc(this.a));return b>0&&b<=ySk}catch(a){a=Loc(a);if(BJ(a,54)){return false}else throw Moc(a)}};var P$=osk(Stl,'StoreAuthEnrollView/ValidPortRule',4287);spc(4288,8,aTk,Zyd);var Q$=osk(Stl,'StoreAuthEnrollView/XofficeCloudEnrollPanel',4288);MNk(wn)(34);\n//# sourceURL=xadmin-34.js\n")