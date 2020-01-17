goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40211){
var map__40216 = p__40211;
var map__40216__$1 = (((((!((map__40216 == null))))?(((((map__40216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40216):map__40216);
var m = map__40216__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40216__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40216__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40220_40338 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40221_40339 = null;
var count__40222_40340 = (0);
var i__40223_40341 = (0);
while(true){
if((i__40223_40341 < count__40222_40340)){
var f_40342 = chunk__40221_40339.cljs$core$IIndexed$_nth$arity$2(null,i__40223_40341);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40342], 0));


var G__40345 = seq__40220_40338;
var G__40346 = chunk__40221_40339;
var G__40347 = count__40222_40340;
var G__40348 = (i__40223_40341 + (1));
seq__40220_40338 = G__40345;
chunk__40221_40339 = G__40346;
count__40222_40340 = G__40347;
i__40223_40341 = G__40348;
continue;
} else {
var temp__5735__auto___40349 = cljs.core.seq(seq__40220_40338);
if(temp__5735__auto___40349){
var seq__40220_40350__$1 = temp__5735__auto___40349;
if(cljs.core.chunked_seq_QMARK_(seq__40220_40350__$1)){
var c__4609__auto___40351 = cljs.core.chunk_first(seq__40220_40350__$1);
var G__40352 = cljs.core.chunk_rest(seq__40220_40350__$1);
var G__40353 = c__4609__auto___40351;
var G__40354 = cljs.core.count(c__4609__auto___40351);
var G__40355 = (0);
seq__40220_40338 = G__40352;
chunk__40221_40339 = G__40353;
count__40222_40340 = G__40354;
i__40223_40341 = G__40355;
continue;
} else {
var f_40356 = cljs.core.first(seq__40220_40350__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40356], 0));


var G__40357 = cljs.core.next(seq__40220_40350__$1);
var G__40358 = null;
var G__40359 = (0);
var G__40360 = (0);
seq__40220_40338 = G__40357;
chunk__40221_40339 = G__40358;
count__40222_40340 = G__40359;
i__40223_40341 = G__40360;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40361 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40361], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40361)))?cljs.core.second(arglists_40361):arglists_40361)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40226_40362 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40227_40363 = null;
var count__40228_40364 = (0);
var i__40230_40365 = (0);
while(true){
if((i__40230_40365 < count__40228_40364)){
var vec__40242_40366 = chunk__40227_40363.cljs$core$IIndexed$_nth$arity$2(null,i__40230_40365);
var name_40367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40242_40366,(0),null);
var map__40245_40368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40242_40366,(1),null);
var map__40245_40369__$1 = (((((!((map__40245_40368 == null))))?(((((map__40245_40368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40245_40368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40245_40368):map__40245_40368);
var doc_40370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245_40369__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245_40369__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40367], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40371], 0));

if(cljs.core.truth_(doc_40370)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40370], 0));
} else {
}


var G__40373 = seq__40226_40362;
var G__40374 = chunk__40227_40363;
var G__40375 = count__40228_40364;
var G__40376 = (i__40230_40365 + (1));
seq__40226_40362 = G__40373;
chunk__40227_40363 = G__40374;
count__40228_40364 = G__40375;
i__40230_40365 = G__40376;
continue;
} else {
var temp__5735__auto___40377 = cljs.core.seq(seq__40226_40362);
if(temp__5735__auto___40377){
var seq__40226_40378__$1 = temp__5735__auto___40377;
if(cljs.core.chunked_seq_QMARK_(seq__40226_40378__$1)){
var c__4609__auto___40379 = cljs.core.chunk_first(seq__40226_40378__$1);
var G__40380 = cljs.core.chunk_rest(seq__40226_40378__$1);
var G__40381 = c__4609__auto___40379;
var G__40382 = cljs.core.count(c__4609__auto___40379);
var G__40383 = (0);
seq__40226_40362 = G__40380;
chunk__40227_40363 = G__40381;
count__40228_40364 = G__40382;
i__40230_40365 = G__40383;
continue;
} else {
var vec__40247_40384 = cljs.core.first(seq__40226_40378__$1);
var name_40385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40247_40384,(0),null);
var map__40250_40386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40247_40384,(1),null);
var map__40250_40387__$1 = (((((!((map__40250_40386 == null))))?(((((map__40250_40386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40250_40386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40250_40386):map__40250_40386);
var doc_40388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40250_40387__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40250_40387__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40385], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40389], 0));

if(cljs.core.truth_(doc_40388)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40388], 0));
} else {
}


var G__40391 = cljs.core.next(seq__40226_40378__$1);
var G__40392 = null;
var G__40393 = (0);
var G__40394 = (0);
seq__40226_40362 = G__40391;
chunk__40227_40363 = G__40392;
count__40228_40364 = G__40393;
i__40230_40365 = G__40394;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40252 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40253 = null;
var count__40254 = (0);
var i__40255 = (0);
while(true){
if((i__40255 < count__40254)){
var role = chunk__40253.cljs$core$IIndexed$_nth$arity$2(null,i__40255);
var temp__5735__auto___40395__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40395__$1)){
var spec_40396 = temp__5735__auto___40395__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40396)], 0));
} else {
}


var G__40397 = seq__40252;
var G__40398 = chunk__40253;
var G__40399 = count__40254;
var G__40400 = (i__40255 + (1));
seq__40252 = G__40397;
chunk__40253 = G__40398;
count__40254 = G__40399;
i__40255 = G__40400;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__40252);
if(temp__5735__auto____$1){
var seq__40252__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40252__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40252__$1);
var G__40401 = cljs.core.chunk_rest(seq__40252__$1);
var G__40402 = c__4609__auto__;
var G__40403 = cljs.core.count(c__4609__auto__);
var G__40404 = (0);
seq__40252 = G__40401;
chunk__40253 = G__40402;
count__40254 = G__40403;
i__40255 = G__40404;
continue;
} else {
var role = cljs.core.first(seq__40252__$1);
var temp__5735__auto___40405__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40405__$2)){
var spec_40406 = temp__5735__auto___40405__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40406)], 0));
} else {
}


var G__40407 = cljs.core.next(seq__40252__$1);
var G__40408 = null;
var G__40409 = (0);
var G__40410 = (0);
seq__40252 = G__40407;
chunk__40253 = G__40408;
count__40254 = G__40409;
i__40255 = G__40410;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40420 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40421 = cljs.core.ex_cause(t);
via = G__40420;
t = G__40421;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40266 = datafied_throwable;
var map__40266__$1 = (((((!((map__40266 == null))))?(((((map__40266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40266):map__40266);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40266__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40266__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40266__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40267 = cljs.core.last(via);
var map__40267__$1 = (((((!((map__40267 == null))))?(((((map__40267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40267):map__40267);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40267__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40267__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40267__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40268 = data;
var map__40268__$1 = (((((!((map__40268 == null))))?(((((map__40268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40268):map__40268);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40268__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40268__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40268__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40269 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40269__$1 = (((((!((map__40269 == null))))?(((((map__40269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40269):map__40269);
var top_data = map__40269__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40269__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40275 = phase;
var G__40275__$1 = (((G__40275 instanceof cljs.core.Keyword))?G__40275.fqn:null);
switch (G__40275__$1) {
case "read-source":
var map__40276 = data;
var map__40276__$1 = (((((!((map__40276 == null))))?(((((map__40276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40276):map__40276);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40276__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40276__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40278 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40278__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40278,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40278);
var G__40278__$2 = (cljs.core.truth_((function (){var fexpr__40279 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40279.cljs$core$IFn$_invoke$arity$1 ? fexpr__40279.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40279.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40278__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40278__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40278__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40280 = top_data;
var G__40280__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40280,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40280);
var G__40280__$2 = (cljs.core.truth_((function (){var fexpr__40281 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40281.cljs$core$IFn$_invoke$arity$1 ? fexpr__40281.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40281.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40280__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40280__$1);
var G__40280__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40280__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40280__$2);
var G__40280__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40280__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40280__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40280__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40280__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40282 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40282,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40282,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40282,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40282,(3),null);
var G__40285 = top_data;
var G__40285__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40285,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40285);
var G__40285__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40285__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40285__$1);
var G__40285__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40285__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40285__$2);
var G__40285__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40285__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40285__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40285__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40285__$4;
}

break;
case "execution":
var vec__40287 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40287,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40287,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40287,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40287,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40265_SHARP_){
var or__4185__auto__ = (p1__40265_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__40291 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40291.cljs$core$IFn$_invoke$arity$1 ? fexpr__40291.cljs$core$IFn$_invoke$arity$1(p1__40265_SHARP_) : fexpr__40291.call(null,p1__40265_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__40292 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40292__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40292,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40292);
var G__40292__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40292__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40292__$1);
var G__40292__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40292__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40292__$2);
var G__40292__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40292__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40292__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40292__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40292__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40275__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40295){
var map__40296 = p__40295;
var map__40296__$1 = (((((!((map__40296 == null))))?(((((map__40296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40296):map__40296);
var triage_data = map__40296__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40296__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40296__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40296__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40296__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40296__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40296__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40296__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40296__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40298 = phase;
var G__40298__$1 = (((G__40298 instanceof cljs.core.Keyword))?G__40298.fqn:null);
switch (G__40298__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40299 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40300 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40301 = loc;
var G__40302 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40303_40434 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40304_40435 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40305_40436 = true;
var _STAR_print_fn_STAR__temp_val__40306_40437 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40305_40436);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40306_40437);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40293_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40293_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40304_40435);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40303_40434);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40299,G__40300,G__40301,G__40302) : format.call(null,G__40299,G__40300,G__40301,G__40302));

break;
case "macroexpansion":
var G__40307 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40308 = cause_type;
var G__40309 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40310 = loc;
var G__40311 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40307,G__40308,G__40309,G__40310,G__40311) : format.call(null,G__40307,G__40308,G__40309,G__40310,G__40311));

break;
case "compile-syntax-check":
var G__40313 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40314 = cause_type;
var G__40315 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40316 = loc;
var G__40317 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40313,G__40314,G__40315,G__40316,G__40317) : format.call(null,G__40313,G__40314,G__40315,G__40316,G__40317));

break;
case "compilation":
var G__40318 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40319 = cause_type;
var G__40320 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40321 = loc;
var G__40322 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40318,G__40319,G__40320,G__40321,G__40322) : format.call(null,G__40318,G__40319,G__40320,G__40321,G__40322));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40323 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40324 = symbol;
var G__40325 = loc;
var G__40326 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40327_40438 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40328_40439 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40329_40440 = true;
var _STAR_print_fn_STAR__temp_val__40330_40441 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40329_40440);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40330_40441);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40294_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40294_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40328_40439);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40327_40438);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40323,G__40324,G__40325,G__40326) : format.call(null,G__40323,G__40324,G__40325,G__40326));
} else {
var G__40331 = "Execution error%s at %s(%s).\n%s\n";
var G__40332 = cause_type;
var G__40333 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40334 = loc;
var G__40335 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40331,G__40332,G__40333,G__40334,G__40335) : format.call(null,G__40331,G__40332,G__40333,G__40334,G__40335));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40298__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
