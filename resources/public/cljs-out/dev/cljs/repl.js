// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33502){
var map__33503 = p__33502;
var map__33503__$1 = ((((!((map__33503 == null)))?(((((map__33503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33503):map__33503);
var m = map__33503__$1;
var n = cljs.core.get.call(null,map__33503__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33503__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33505_33527 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33506_33528 = null;
var count__33507_33529 = (0);
var i__33508_33530 = (0);
while(true){
if((i__33508_33530 < count__33507_33529)){
var f_33531 = cljs.core._nth.call(null,chunk__33506_33528,i__33508_33530);
cljs.core.println.call(null,"  ",f_33531);


var G__33532 = seq__33505_33527;
var G__33533 = chunk__33506_33528;
var G__33534 = count__33507_33529;
var G__33535 = (i__33508_33530 + (1));
seq__33505_33527 = G__33532;
chunk__33506_33528 = G__33533;
count__33507_33529 = G__33534;
i__33508_33530 = G__33535;
continue;
} else {
var temp__5457__auto___33536 = cljs.core.seq.call(null,seq__33505_33527);
if(temp__5457__auto___33536){
var seq__33505_33537__$1 = temp__5457__auto___33536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33505_33537__$1)){
var c__4351__auto___33538 = cljs.core.chunk_first.call(null,seq__33505_33537__$1);
var G__33539 = cljs.core.chunk_rest.call(null,seq__33505_33537__$1);
var G__33540 = c__4351__auto___33538;
var G__33541 = cljs.core.count.call(null,c__4351__auto___33538);
var G__33542 = (0);
seq__33505_33527 = G__33539;
chunk__33506_33528 = G__33540;
count__33507_33529 = G__33541;
i__33508_33530 = G__33542;
continue;
} else {
var f_33543 = cljs.core.first.call(null,seq__33505_33537__$1);
cljs.core.println.call(null,"  ",f_33543);


var G__33544 = cljs.core.next.call(null,seq__33505_33537__$1);
var G__33545 = null;
var G__33546 = (0);
var G__33547 = (0);
seq__33505_33527 = G__33544;
chunk__33506_33528 = G__33545;
count__33507_33529 = G__33546;
i__33508_33530 = G__33547;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33548 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33548);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33548)))?cljs.core.second.call(null,arglists_33548):arglists_33548));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33509_33549 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33510_33550 = null;
var count__33511_33551 = (0);
var i__33512_33552 = (0);
while(true){
if((i__33512_33552 < count__33511_33551)){
var vec__33513_33553 = cljs.core._nth.call(null,chunk__33510_33550,i__33512_33552);
var name_33554 = cljs.core.nth.call(null,vec__33513_33553,(0),null);
var map__33516_33555 = cljs.core.nth.call(null,vec__33513_33553,(1),null);
var map__33516_33556__$1 = ((((!((map__33516_33555 == null)))?(((((map__33516_33555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33516_33555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33516_33555):map__33516_33555);
var doc_33557 = cljs.core.get.call(null,map__33516_33556__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33558 = cljs.core.get.call(null,map__33516_33556__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33554);

cljs.core.println.call(null," ",arglists_33558);

if(cljs.core.truth_(doc_33557)){
cljs.core.println.call(null," ",doc_33557);
} else {
}


var G__33559 = seq__33509_33549;
var G__33560 = chunk__33510_33550;
var G__33561 = count__33511_33551;
var G__33562 = (i__33512_33552 + (1));
seq__33509_33549 = G__33559;
chunk__33510_33550 = G__33560;
count__33511_33551 = G__33561;
i__33512_33552 = G__33562;
continue;
} else {
var temp__5457__auto___33563 = cljs.core.seq.call(null,seq__33509_33549);
if(temp__5457__auto___33563){
var seq__33509_33564__$1 = temp__5457__auto___33563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33509_33564__$1)){
var c__4351__auto___33565 = cljs.core.chunk_first.call(null,seq__33509_33564__$1);
var G__33566 = cljs.core.chunk_rest.call(null,seq__33509_33564__$1);
var G__33567 = c__4351__auto___33565;
var G__33568 = cljs.core.count.call(null,c__4351__auto___33565);
var G__33569 = (0);
seq__33509_33549 = G__33566;
chunk__33510_33550 = G__33567;
count__33511_33551 = G__33568;
i__33512_33552 = G__33569;
continue;
} else {
var vec__33518_33570 = cljs.core.first.call(null,seq__33509_33564__$1);
var name_33571 = cljs.core.nth.call(null,vec__33518_33570,(0),null);
var map__33521_33572 = cljs.core.nth.call(null,vec__33518_33570,(1),null);
var map__33521_33573__$1 = ((((!((map__33521_33572 == null)))?(((((map__33521_33572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33521_33572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33521_33572):map__33521_33572);
var doc_33574 = cljs.core.get.call(null,map__33521_33573__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33575 = cljs.core.get.call(null,map__33521_33573__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33571);

cljs.core.println.call(null," ",arglists_33575);

if(cljs.core.truth_(doc_33574)){
cljs.core.println.call(null," ",doc_33574);
} else {
}


var G__33576 = cljs.core.next.call(null,seq__33509_33564__$1);
var G__33577 = null;
var G__33578 = (0);
var G__33579 = (0);
seq__33509_33549 = G__33576;
chunk__33510_33550 = G__33577;
count__33511_33551 = G__33578;
i__33512_33552 = G__33579;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__33523 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33524 = null;
var count__33525 = (0);
var i__33526 = (0);
while(true){
if((i__33526 < count__33525)){
var role = cljs.core._nth.call(null,chunk__33524,i__33526);
var temp__5457__auto___33580__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33580__$1)){
var spec_33581 = temp__5457__auto___33580__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33581));
} else {
}


var G__33582 = seq__33523;
var G__33583 = chunk__33524;
var G__33584 = count__33525;
var G__33585 = (i__33526 + (1));
seq__33523 = G__33582;
chunk__33524 = G__33583;
count__33525 = G__33584;
i__33526 = G__33585;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__33523);
if(temp__5457__auto____$1){
var seq__33523__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33523__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__33523__$1);
var G__33586 = cljs.core.chunk_rest.call(null,seq__33523__$1);
var G__33587 = c__4351__auto__;
var G__33588 = cljs.core.count.call(null,c__4351__auto__);
var G__33589 = (0);
seq__33523 = G__33586;
chunk__33524 = G__33587;
count__33525 = G__33588;
i__33526 = G__33589;
continue;
} else {
var role = cljs.core.first.call(null,seq__33523__$1);
var temp__5457__auto___33590__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33590__$2)){
var spec_33591 = temp__5457__auto___33590__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33591));
} else {
}


var G__33592 = cljs.core.next.call(null,seq__33523__$1);
var G__33593 = null;
var G__33594 = (0);
var G__33595 = (0);
seq__33523 = G__33592;
chunk__33524 = G__33593;
count__33525 = G__33594;
i__33526 = G__33595;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
