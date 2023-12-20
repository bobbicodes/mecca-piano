goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24775 = arguments.length;
var i__5770__auto___24776 = (0);
while(true){
if((i__5770__auto___24776 < len__5769__auto___24775)){
args__5775__auto__.push((arguments[i__5770__auto___24776]));

var G__24777 = (i__5770__auto___24776 + (1));
i__5770__auto___24776 = G__24777;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq24406){
var G__24407 = cljs.core.first(seq24406);
var seq24406__$1 = cljs.core.next(seq24406);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24407,seq24406__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__24408 = cljs.core.seq(sources);
var chunk__24409 = null;
var count__24410 = (0);
var i__24411 = (0);
while(true){
if((i__24411 < count__24410)){
var map__24416 = chunk__24409.cljs$core$IIndexed$_nth$arity$2(null,i__24411);
var map__24416__$1 = cljs.core.__destructure_map(map__24416);
var src = map__24416__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24416__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24416__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24416__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24416__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24417){var e_24778 = e24417;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24778);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24778.message)].join('')));
}

var G__24779 = seq__24408;
var G__24780 = chunk__24409;
var G__24781 = count__24410;
var G__24782 = (i__24411 + (1));
seq__24408 = G__24779;
chunk__24409 = G__24780;
count__24410 = G__24781;
i__24411 = G__24782;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24408);
if(temp__5804__auto__){
var seq__24408__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24408__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24408__$1);
var G__24783 = cljs.core.chunk_rest(seq__24408__$1);
var G__24784 = c__5568__auto__;
var G__24785 = cljs.core.count(c__5568__auto__);
var G__24786 = (0);
seq__24408 = G__24783;
chunk__24409 = G__24784;
count__24410 = G__24785;
i__24411 = G__24786;
continue;
} else {
var map__24418 = cljs.core.first(seq__24408__$1);
var map__24418__$1 = cljs.core.__destructure_map(map__24418);
var src = map__24418__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24418__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24418__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24418__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24418__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24419){var e_24787 = e24419;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24787);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24787.message)].join('')));
}

var G__24788 = cljs.core.next(seq__24408__$1);
var G__24789 = null;
var G__24790 = (0);
var G__24791 = (0);
seq__24408 = G__24788;
chunk__24409 = G__24789;
count__24410 = G__24790;
i__24411 = G__24791;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__24420 = cljs.core.seq(js_requires);
var chunk__24421 = null;
var count__24422 = (0);
var i__24423 = (0);
while(true){
if((i__24423 < count__24422)){
var js_ns = chunk__24421.cljs$core$IIndexed$_nth$arity$2(null,i__24423);
var require_str_24792 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24792);


var G__24793 = seq__24420;
var G__24794 = chunk__24421;
var G__24795 = count__24422;
var G__24796 = (i__24423 + (1));
seq__24420 = G__24793;
chunk__24421 = G__24794;
count__24422 = G__24795;
i__24423 = G__24796;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24420);
if(temp__5804__auto__){
var seq__24420__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24420__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24420__$1);
var G__24797 = cljs.core.chunk_rest(seq__24420__$1);
var G__24798 = c__5568__auto__;
var G__24799 = cljs.core.count(c__5568__auto__);
var G__24800 = (0);
seq__24420 = G__24797;
chunk__24421 = G__24798;
count__24422 = G__24799;
i__24423 = G__24800;
continue;
} else {
var js_ns = cljs.core.first(seq__24420__$1);
var require_str_24801 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24801);


var G__24802 = cljs.core.next(seq__24420__$1);
var G__24803 = null;
var G__24804 = (0);
var G__24805 = (0);
seq__24420 = G__24802;
chunk__24421 = G__24803;
count__24422 = G__24804;
i__24423 = G__24805;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__24425){
var map__24426 = p__24425;
var map__24426__$1 = cljs.core.__destructure_map(map__24426);
var msg = map__24426__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24426__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24426__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24430(s__24431){
return (new cljs.core.LazySeq(null,(function (){
var s__24431__$1 = s__24431;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24431__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__24436 = cljs.core.first(xs__6360__auto__);
var map__24436__$1 = cljs.core.__destructure_map(map__24436);
var src = map__24436__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24436__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24436__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__24431__$1,map__24436,map__24436__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24426,map__24426__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24430_$_iter__24432(s__24433){
return (new cljs.core.LazySeq(null,((function (s__24431__$1,map__24436,map__24436__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24426,map__24426__$1,msg,info,reload_info){
return (function (){
var s__24433__$1 = s__24433;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24433__$1);
if(temp__5804__auto____$1){
var s__24433__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24433__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24433__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24435 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24434 = (0);
while(true){
if((i__24434 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__24434);
cljs.core.chunk_append(b__24435,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__24808 = (i__24434 + (1));
i__24434 = G__24808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24435),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24430_$_iter__24432(cljs.core.chunk_rest(s__24433__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24435),null);
}
} else {
var warning = cljs.core.first(s__24433__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24430_$_iter__24432(cljs.core.rest(s__24433__$2)));
}
} else {
return null;
}
break;
}
});})(s__24431__$1,map__24436,map__24436__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24426,map__24426__$1,msg,info,reload_info))
,null,null));
});})(s__24431__$1,map__24436,map__24436__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24426,map__24426__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24430(cljs.core.rest(s__24431__$1)));
} else {
var G__24809 = cljs.core.rest(s__24431__$1);
s__24431__$1 = G__24809;
continue;
}
} else {
var G__24810 = cljs.core.rest(s__24431__$1);
s__24431__$1 = G__24810;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__24440_24811 = cljs.core.seq(warnings);
var chunk__24441_24812 = null;
var count__24442_24813 = (0);
var i__24443_24814 = (0);
while(true){
if((i__24443_24814 < count__24442_24813)){
var map__24446_24815 = chunk__24441_24812.cljs$core$IIndexed$_nth$arity$2(null,i__24443_24814);
var map__24446_24816__$1 = cljs.core.__destructure_map(map__24446_24815);
var w_24817 = map__24446_24816__$1;
var msg_24818__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24446_24816__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24446_24816__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24446_24816__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24446_24816__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24821)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24819),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24820),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24818__$1)].join(''));


var G__24822 = seq__24440_24811;
var G__24823 = chunk__24441_24812;
var G__24824 = count__24442_24813;
var G__24825 = (i__24443_24814 + (1));
seq__24440_24811 = G__24822;
chunk__24441_24812 = G__24823;
count__24442_24813 = G__24824;
i__24443_24814 = G__24825;
continue;
} else {
var temp__5804__auto___24826 = cljs.core.seq(seq__24440_24811);
if(temp__5804__auto___24826){
var seq__24440_24831__$1 = temp__5804__auto___24826;
if(cljs.core.chunked_seq_QMARK_(seq__24440_24831__$1)){
var c__5568__auto___24832 = cljs.core.chunk_first(seq__24440_24831__$1);
var G__24833 = cljs.core.chunk_rest(seq__24440_24831__$1);
var G__24834 = c__5568__auto___24832;
var G__24835 = cljs.core.count(c__5568__auto___24832);
var G__24836 = (0);
seq__24440_24811 = G__24833;
chunk__24441_24812 = G__24834;
count__24442_24813 = G__24835;
i__24443_24814 = G__24836;
continue;
} else {
var map__24447_24837 = cljs.core.first(seq__24440_24831__$1);
var map__24447_24838__$1 = cljs.core.__destructure_map(map__24447_24837);
var w_24839 = map__24447_24838__$1;
var msg_24840__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24447_24838__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24447_24838__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24447_24838__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24447_24838__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24843)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24841),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24842),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24840__$1)].join(''));


var G__24844 = cljs.core.next(seq__24440_24831__$1);
var G__24845 = null;
var G__24846 = (0);
var G__24847 = (0);
seq__24440_24811 = G__24844;
chunk__24441_24812 = G__24845;
count__24442_24813 = G__24846;
i__24443_24814 = G__24847;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__24424_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__24424_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__24448){
var map__24449 = p__24448;
var map__24449__$1 = cljs.core.__destructure_map(map__24449);
var msg = map__24449__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24449__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24449__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__24450 = cljs.core.seq(updates);
var chunk__24452 = null;
var count__24453 = (0);
var i__24454 = (0);
while(true){
if((i__24454 < count__24453)){
var path = chunk__24452.cljs$core$IIndexed$_nth$arity$2(null,i__24454);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24584_24852 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24588_24853 = null;
var count__24589_24854 = (0);
var i__24590_24855 = (0);
while(true){
if((i__24590_24855 < count__24589_24854)){
var node_24856 = chunk__24588_24853.cljs$core$IIndexed$_nth$arity$2(null,i__24590_24855);
if(cljs.core.not(node_24856.shadow$old)){
var path_match_24857 = shadow.cljs.devtools.client.browser.match_paths(node_24856.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24857)){
var new_link_24858 = (function (){var G__24646 = node_24856.cloneNode(true);
G__24646.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24857),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24646;
})();
(node_24856.shadow$old = true);

(new_link_24858.onload = ((function (seq__24584_24852,chunk__24588_24853,count__24589_24854,i__24590_24855,seq__24450,chunk__24452,count__24453,i__24454,new_link_24858,path_match_24857,node_24856,path,map__24449,map__24449__$1,msg,updates,reload_info){
return (function (e){
var seq__24647_24859 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24649_24860 = null;
var count__24650_24861 = (0);
var i__24651_24862 = (0);
while(true){
if((i__24651_24862 < count__24650_24861)){
var map__24655_24863 = chunk__24649_24860.cljs$core$IIndexed$_nth$arity$2(null,i__24651_24862);
var map__24655_24864__$1 = cljs.core.__destructure_map(map__24655_24863);
var task_24865 = map__24655_24864__$1;
var fn_str_24866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24655_24864__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24655_24864__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24868 = goog.getObjectByName(fn_str_24866,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24867)].join(''));

(fn_obj_24868.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24868.cljs$core$IFn$_invoke$arity$2(path,new_link_24858) : fn_obj_24868.call(null,path,new_link_24858));


var G__24869 = seq__24647_24859;
var G__24870 = chunk__24649_24860;
var G__24871 = count__24650_24861;
var G__24872 = (i__24651_24862 + (1));
seq__24647_24859 = G__24869;
chunk__24649_24860 = G__24870;
count__24650_24861 = G__24871;
i__24651_24862 = G__24872;
continue;
} else {
var temp__5804__auto___24873 = cljs.core.seq(seq__24647_24859);
if(temp__5804__auto___24873){
var seq__24647_24874__$1 = temp__5804__auto___24873;
if(cljs.core.chunked_seq_QMARK_(seq__24647_24874__$1)){
var c__5568__auto___24875 = cljs.core.chunk_first(seq__24647_24874__$1);
var G__24876 = cljs.core.chunk_rest(seq__24647_24874__$1);
var G__24877 = c__5568__auto___24875;
var G__24878 = cljs.core.count(c__5568__auto___24875);
var G__24879 = (0);
seq__24647_24859 = G__24876;
chunk__24649_24860 = G__24877;
count__24650_24861 = G__24878;
i__24651_24862 = G__24879;
continue;
} else {
var map__24656_24880 = cljs.core.first(seq__24647_24874__$1);
var map__24656_24881__$1 = cljs.core.__destructure_map(map__24656_24880);
var task_24882 = map__24656_24881__$1;
var fn_str_24883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24656_24881__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24656_24881__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24885 = goog.getObjectByName(fn_str_24883,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24884)].join(''));

(fn_obj_24885.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24885.cljs$core$IFn$_invoke$arity$2(path,new_link_24858) : fn_obj_24885.call(null,path,new_link_24858));


var G__24886 = cljs.core.next(seq__24647_24874__$1);
var G__24887 = null;
var G__24888 = (0);
var G__24889 = (0);
seq__24647_24859 = G__24886;
chunk__24649_24860 = G__24887;
count__24650_24861 = G__24888;
i__24651_24862 = G__24889;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24856);
});})(seq__24584_24852,chunk__24588_24853,count__24589_24854,i__24590_24855,seq__24450,chunk__24452,count__24453,i__24454,new_link_24858,path_match_24857,node_24856,path,map__24449,map__24449__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24857], 0));

goog.dom.insertSiblingAfter(new_link_24858,node_24856);


var G__24890 = seq__24584_24852;
var G__24891 = chunk__24588_24853;
var G__24892 = count__24589_24854;
var G__24893 = (i__24590_24855 + (1));
seq__24584_24852 = G__24890;
chunk__24588_24853 = G__24891;
count__24589_24854 = G__24892;
i__24590_24855 = G__24893;
continue;
} else {
var G__24894 = seq__24584_24852;
var G__24895 = chunk__24588_24853;
var G__24896 = count__24589_24854;
var G__24897 = (i__24590_24855 + (1));
seq__24584_24852 = G__24894;
chunk__24588_24853 = G__24895;
count__24589_24854 = G__24896;
i__24590_24855 = G__24897;
continue;
}
} else {
var G__24898 = seq__24584_24852;
var G__24899 = chunk__24588_24853;
var G__24900 = count__24589_24854;
var G__24901 = (i__24590_24855 + (1));
seq__24584_24852 = G__24898;
chunk__24588_24853 = G__24899;
count__24589_24854 = G__24900;
i__24590_24855 = G__24901;
continue;
}
} else {
var temp__5804__auto___24902 = cljs.core.seq(seq__24584_24852);
if(temp__5804__auto___24902){
var seq__24584_24903__$1 = temp__5804__auto___24902;
if(cljs.core.chunked_seq_QMARK_(seq__24584_24903__$1)){
var c__5568__auto___24904 = cljs.core.chunk_first(seq__24584_24903__$1);
var G__24905 = cljs.core.chunk_rest(seq__24584_24903__$1);
var G__24906 = c__5568__auto___24904;
var G__24907 = cljs.core.count(c__5568__auto___24904);
var G__24908 = (0);
seq__24584_24852 = G__24905;
chunk__24588_24853 = G__24906;
count__24589_24854 = G__24907;
i__24590_24855 = G__24908;
continue;
} else {
var node_24909 = cljs.core.first(seq__24584_24903__$1);
if(cljs.core.not(node_24909.shadow$old)){
var path_match_24910 = shadow.cljs.devtools.client.browser.match_paths(node_24909.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24910)){
var new_link_24911 = (function (){var G__24661 = node_24909.cloneNode(true);
G__24661.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24910),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24661;
})();
(node_24909.shadow$old = true);

(new_link_24911.onload = ((function (seq__24584_24852,chunk__24588_24853,count__24589_24854,i__24590_24855,seq__24450,chunk__24452,count__24453,i__24454,new_link_24911,path_match_24910,node_24909,seq__24584_24903__$1,temp__5804__auto___24902,path,map__24449,map__24449__$1,msg,updates,reload_info){
return (function (e){
var seq__24662_24912 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24664_24913 = null;
var count__24665_24914 = (0);
var i__24666_24915 = (0);
while(true){
if((i__24666_24915 < count__24665_24914)){
var map__24672_24916 = chunk__24664_24913.cljs$core$IIndexed$_nth$arity$2(null,i__24666_24915);
var map__24672_24917__$1 = cljs.core.__destructure_map(map__24672_24916);
var task_24918 = map__24672_24917__$1;
var fn_str_24919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24672_24917__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24672_24917__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24921 = goog.getObjectByName(fn_str_24919,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24920)].join(''));

(fn_obj_24921.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24921.cljs$core$IFn$_invoke$arity$2(path,new_link_24911) : fn_obj_24921.call(null,path,new_link_24911));


var G__24923 = seq__24662_24912;
var G__24924 = chunk__24664_24913;
var G__24925 = count__24665_24914;
var G__24926 = (i__24666_24915 + (1));
seq__24662_24912 = G__24923;
chunk__24664_24913 = G__24924;
count__24665_24914 = G__24925;
i__24666_24915 = G__24926;
continue;
} else {
var temp__5804__auto___24927__$1 = cljs.core.seq(seq__24662_24912);
if(temp__5804__auto___24927__$1){
var seq__24662_24928__$1 = temp__5804__auto___24927__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24662_24928__$1)){
var c__5568__auto___24929 = cljs.core.chunk_first(seq__24662_24928__$1);
var G__24930 = cljs.core.chunk_rest(seq__24662_24928__$1);
var G__24931 = c__5568__auto___24929;
var G__24932 = cljs.core.count(c__5568__auto___24929);
var G__24933 = (0);
seq__24662_24912 = G__24930;
chunk__24664_24913 = G__24931;
count__24665_24914 = G__24932;
i__24666_24915 = G__24933;
continue;
} else {
var map__24673_24934 = cljs.core.first(seq__24662_24928__$1);
var map__24673_24935__$1 = cljs.core.__destructure_map(map__24673_24934);
var task_24936 = map__24673_24935__$1;
var fn_str_24937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24673_24935__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24673_24935__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24939 = goog.getObjectByName(fn_str_24937,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24938)].join(''));

(fn_obj_24939.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24939.cljs$core$IFn$_invoke$arity$2(path,new_link_24911) : fn_obj_24939.call(null,path,new_link_24911));


var G__24940 = cljs.core.next(seq__24662_24928__$1);
var G__24941 = null;
var G__24942 = (0);
var G__24943 = (0);
seq__24662_24912 = G__24940;
chunk__24664_24913 = G__24941;
count__24665_24914 = G__24942;
i__24666_24915 = G__24943;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24909);
});})(seq__24584_24852,chunk__24588_24853,count__24589_24854,i__24590_24855,seq__24450,chunk__24452,count__24453,i__24454,new_link_24911,path_match_24910,node_24909,seq__24584_24903__$1,temp__5804__auto___24902,path,map__24449,map__24449__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24910], 0));

goog.dom.insertSiblingAfter(new_link_24911,node_24909);


var G__24944 = cljs.core.next(seq__24584_24903__$1);
var G__24945 = null;
var G__24946 = (0);
var G__24947 = (0);
seq__24584_24852 = G__24944;
chunk__24588_24853 = G__24945;
count__24589_24854 = G__24946;
i__24590_24855 = G__24947;
continue;
} else {
var G__24948 = cljs.core.next(seq__24584_24903__$1);
var G__24949 = null;
var G__24950 = (0);
var G__24951 = (0);
seq__24584_24852 = G__24948;
chunk__24588_24853 = G__24949;
count__24589_24854 = G__24950;
i__24590_24855 = G__24951;
continue;
}
} else {
var G__24952 = cljs.core.next(seq__24584_24903__$1);
var G__24953 = null;
var G__24954 = (0);
var G__24955 = (0);
seq__24584_24852 = G__24952;
chunk__24588_24853 = G__24953;
count__24589_24854 = G__24954;
i__24590_24855 = G__24955;
continue;
}
}
} else {
}
}
break;
}


var G__24956 = seq__24450;
var G__24957 = chunk__24452;
var G__24958 = count__24453;
var G__24959 = (i__24454 + (1));
seq__24450 = G__24956;
chunk__24452 = G__24957;
count__24453 = G__24958;
i__24454 = G__24959;
continue;
} else {
var G__24960 = seq__24450;
var G__24961 = chunk__24452;
var G__24962 = count__24453;
var G__24963 = (i__24454 + (1));
seq__24450 = G__24960;
chunk__24452 = G__24961;
count__24453 = G__24962;
i__24454 = G__24963;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24450);
if(temp__5804__auto__){
var seq__24450__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24450__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24450__$1);
var G__24964 = cljs.core.chunk_rest(seq__24450__$1);
var G__24965 = c__5568__auto__;
var G__24966 = cljs.core.count(c__5568__auto__);
var G__24967 = (0);
seq__24450 = G__24964;
chunk__24452 = G__24965;
count__24453 = G__24966;
i__24454 = G__24967;
continue;
} else {
var path = cljs.core.first(seq__24450__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24674_24968 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24678_24969 = null;
var count__24679_24970 = (0);
var i__24680_24971 = (0);
while(true){
if((i__24680_24971 < count__24679_24970)){
var node_24973 = chunk__24678_24969.cljs$core$IIndexed$_nth$arity$2(null,i__24680_24971);
if(cljs.core.not(node_24973.shadow$old)){
var path_match_24975 = shadow.cljs.devtools.client.browser.match_paths(node_24973.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24975)){
var new_link_24976 = (function (){var G__24717 = node_24973.cloneNode(true);
G__24717.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24975),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24717;
})();
(node_24973.shadow$old = true);

(new_link_24976.onload = ((function (seq__24674_24968,chunk__24678_24969,count__24679_24970,i__24680_24971,seq__24450,chunk__24452,count__24453,i__24454,new_link_24976,path_match_24975,node_24973,path,seq__24450__$1,temp__5804__auto__,map__24449,map__24449__$1,msg,updates,reload_info){
return (function (e){
var seq__24718_24977 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24720_24978 = null;
var count__24721_24979 = (0);
var i__24722_24980 = (0);
while(true){
if((i__24722_24980 < count__24721_24979)){
var map__24726_24981 = chunk__24720_24978.cljs$core$IIndexed$_nth$arity$2(null,i__24722_24980);
var map__24726_24982__$1 = cljs.core.__destructure_map(map__24726_24981);
var task_24983 = map__24726_24982__$1;
var fn_str_24984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24726_24982__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24726_24982__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24986 = goog.getObjectByName(fn_str_24984,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24985)].join(''));

(fn_obj_24986.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24986.cljs$core$IFn$_invoke$arity$2(path,new_link_24976) : fn_obj_24986.call(null,path,new_link_24976));


var G__24987 = seq__24718_24977;
var G__24988 = chunk__24720_24978;
var G__24989 = count__24721_24979;
var G__24990 = (i__24722_24980 + (1));
seq__24718_24977 = G__24987;
chunk__24720_24978 = G__24988;
count__24721_24979 = G__24989;
i__24722_24980 = G__24990;
continue;
} else {
var temp__5804__auto___24991__$1 = cljs.core.seq(seq__24718_24977);
if(temp__5804__auto___24991__$1){
var seq__24718_24992__$1 = temp__5804__auto___24991__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24718_24992__$1)){
var c__5568__auto___24993 = cljs.core.chunk_first(seq__24718_24992__$1);
var G__24994 = cljs.core.chunk_rest(seq__24718_24992__$1);
var G__24995 = c__5568__auto___24993;
var G__24996 = cljs.core.count(c__5568__auto___24993);
var G__24997 = (0);
seq__24718_24977 = G__24994;
chunk__24720_24978 = G__24995;
count__24721_24979 = G__24996;
i__24722_24980 = G__24997;
continue;
} else {
var map__24727_24998 = cljs.core.first(seq__24718_24992__$1);
var map__24727_24999__$1 = cljs.core.__destructure_map(map__24727_24998);
var task_25000 = map__24727_24999__$1;
var fn_str_25001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24727_24999__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24727_24999__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25003 = goog.getObjectByName(fn_str_25001,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25002)].join(''));

(fn_obj_25003.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25003.cljs$core$IFn$_invoke$arity$2(path,new_link_24976) : fn_obj_25003.call(null,path,new_link_24976));


var G__25004 = cljs.core.next(seq__24718_24992__$1);
var G__25005 = null;
var G__25006 = (0);
var G__25007 = (0);
seq__24718_24977 = G__25004;
chunk__24720_24978 = G__25005;
count__24721_24979 = G__25006;
i__24722_24980 = G__25007;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24973);
});})(seq__24674_24968,chunk__24678_24969,count__24679_24970,i__24680_24971,seq__24450,chunk__24452,count__24453,i__24454,new_link_24976,path_match_24975,node_24973,path,seq__24450__$1,temp__5804__auto__,map__24449,map__24449__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24975], 0));

goog.dom.insertSiblingAfter(new_link_24976,node_24973);


var G__25008 = seq__24674_24968;
var G__25009 = chunk__24678_24969;
var G__25010 = count__24679_24970;
var G__25011 = (i__24680_24971 + (1));
seq__24674_24968 = G__25008;
chunk__24678_24969 = G__25009;
count__24679_24970 = G__25010;
i__24680_24971 = G__25011;
continue;
} else {
var G__25012 = seq__24674_24968;
var G__25013 = chunk__24678_24969;
var G__25014 = count__24679_24970;
var G__25015 = (i__24680_24971 + (1));
seq__24674_24968 = G__25012;
chunk__24678_24969 = G__25013;
count__24679_24970 = G__25014;
i__24680_24971 = G__25015;
continue;
}
} else {
var G__25016 = seq__24674_24968;
var G__25017 = chunk__24678_24969;
var G__25018 = count__24679_24970;
var G__25019 = (i__24680_24971 + (1));
seq__24674_24968 = G__25016;
chunk__24678_24969 = G__25017;
count__24679_24970 = G__25018;
i__24680_24971 = G__25019;
continue;
}
} else {
var temp__5804__auto___25020__$1 = cljs.core.seq(seq__24674_24968);
if(temp__5804__auto___25020__$1){
var seq__24674_25021__$1 = temp__5804__auto___25020__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24674_25021__$1)){
var c__5568__auto___25022 = cljs.core.chunk_first(seq__24674_25021__$1);
var G__25023 = cljs.core.chunk_rest(seq__24674_25021__$1);
var G__25024 = c__5568__auto___25022;
var G__25025 = cljs.core.count(c__5568__auto___25022);
var G__25026 = (0);
seq__24674_24968 = G__25023;
chunk__24678_24969 = G__25024;
count__24679_24970 = G__25025;
i__24680_24971 = G__25026;
continue;
} else {
var node_25027 = cljs.core.first(seq__24674_25021__$1);
if(cljs.core.not(node_25027.shadow$old)){
var path_match_25028 = shadow.cljs.devtools.client.browser.match_paths(node_25027.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25028)){
var new_link_25029 = (function (){var G__24733 = node_25027.cloneNode(true);
G__24733.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25028),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24733;
})();
(node_25027.shadow$old = true);

(new_link_25029.onload = ((function (seq__24674_24968,chunk__24678_24969,count__24679_24970,i__24680_24971,seq__24450,chunk__24452,count__24453,i__24454,new_link_25029,path_match_25028,node_25027,seq__24674_25021__$1,temp__5804__auto___25020__$1,path,seq__24450__$1,temp__5804__auto__,map__24449,map__24449__$1,msg,updates,reload_info){
return (function (e){
var seq__24734_25030 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24736_25032 = null;
var count__24737_25033 = (0);
var i__24738_25034 = (0);
while(true){
if((i__24738_25034 < count__24737_25033)){
var map__24744_25038 = chunk__24736_25032.cljs$core$IIndexed$_nth$arity$2(null,i__24738_25034);
var map__24744_25039__$1 = cljs.core.__destructure_map(map__24744_25038);
var task_25040 = map__24744_25039__$1;
var fn_str_25041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24744_25039__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24744_25039__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25043 = goog.getObjectByName(fn_str_25041,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25042)].join(''));

(fn_obj_25043.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25043.cljs$core$IFn$_invoke$arity$2(path,new_link_25029) : fn_obj_25043.call(null,path,new_link_25029));


var G__25044 = seq__24734_25030;
var G__25045 = chunk__24736_25032;
var G__25046 = count__24737_25033;
var G__25047 = (i__24738_25034 + (1));
seq__24734_25030 = G__25044;
chunk__24736_25032 = G__25045;
count__24737_25033 = G__25046;
i__24738_25034 = G__25047;
continue;
} else {
var temp__5804__auto___25048__$2 = cljs.core.seq(seq__24734_25030);
if(temp__5804__auto___25048__$2){
var seq__24734_25049__$1 = temp__5804__auto___25048__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24734_25049__$1)){
var c__5568__auto___25050 = cljs.core.chunk_first(seq__24734_25049__$1);
var G__25051 = cljs.core.chunk_rest(seq__24734_25049__$1);
var G__25052 = c__5568__auto___25050;
var G__25053 = cljs.core.count(c__5568__auto___25050);
var G__25054 = (0);
seq__24734_25030 = G__25051;
chunk__24736_25032 = G__25052;
count__24737_25033 = G__25053;
i__24738_25034 = G__25054;
continue;
} else {
var map__24745_25055 = cljs.core.first(seq__24734_25049__$1);
var map__24745_25056__$1 = cljs.core.__destructure_map(map__24745_25055);
var task_25057 = map__24745_25056__$1;
var fn_str_25058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24745_25056__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24745_25056__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25060 = goog.getObjectByName(fn_str_25058,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25059)].join(''));

(fn_obj_25060.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25060.cljs$core$IFn$_invoke$arity$2(path,new_link_25029) : fn_obj_25060.call(null,path,new_link_25029));


var G__25061 = cljs.core.next(seq__24734_25049__$1);
var G__25062 = null;
var G__25063 = (0);
var G__25064 = (0);
seq__24734_25030 = G__25061;
chunk__24736_25032 = G__25062;
count__24737_25033 = G__25063;
i__24738_25034 = G__25064;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25027);
});})(seq__24674_24968,chunk__24678_24969,count__24679_24970,i__24680_24971,seq__24450,chunk__24452,count__24453,i__24454,new_link_25029,path_match_25028,node_25027,seq__24674_25021__$1,temp__5804__auto___25020__$1,path,seq__24450__$1,temp__5804__auto__,map__24449,map__24449__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25028], 0));

goog.dom.insertSiblingAfter(new_link_25029,node_25027);


var G__25065 = cljs.core.next(seq__24674_25021__$1);
var G__25066 = null;
var G__25067 = (0);
var G__25068 = (0);
seq__24674_24968 = G__25065;
chunk__24678_24969 = G__25066;
count__24679_24970 = G__25067;
i__24680_24971 = G__25068;
continue;
} else {
var G__25069 = cljs.core.next(seq__24674_25021__$1);
var G__25070 = null;
var G__25071 = (0);
var G__25072 = (0);
seq__24674_24968 = G__25069;
chunk__24678_24969 = G__25070;
count__24679_24970 = G__25071;
i__24680_24971 = G__25072;
continue;
}
} else {
var G__25073 = cljs.core.next(seq__24674_25021__$1);
var G__25074 = null;
var G__25075 = (0);
var G__25076 = (0);
seq__24674_24968 = G__25073;
chunk__24678_24969 = G__25074;
count__24679_24970 = G__25075;
i__24680_24971 = G__25076;
continue;
}
}
} else {
}
}
break;
}


var G__25077 = cljs.core.next(seq__24450__$1);
var G__25078 = null;
var G__25079 = (0);
var G__25080 = (0);
seq__24450 = G__25077;
chunk__24452 = G__25078;
count__24453 = G__25079;
i__24454 = G__25080;
continue;
} else {
var G__25081 = cljs.core.next(seq__24450__$1);
var G__25082 = null;
var G__25083 = (0);
var G__25084 = (0);
seq__24450 = G__25081;
chunk__24452 = G__25082;
count__24453 = G__25083;
i__24454 = G__25084;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__24755){
var map__24756 = p__24755;
var map__24756__$1 = cljs.core.__destructure_map(map__24756);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24756__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__24757,done,error){
var map__24758 = p__24757;
var map__24758__$1 = cljs.core.__destructure_map(map__24758);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24758__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__24760,done,error){
var map__24761 = p__24760;
var map__24761__$1 = cljs.core.__destructure_map(map__24761);
var msg = map__24761__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24761__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24761__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24761__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24762){
var map__24763 = p__24762;
var map__24763__$1 = cljs.core.__destructure_map(map__24763);
var src = map__24763__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24763__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__24764 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24764) : done.call(null,G__24764));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__24765){
var map__24766 = p__24765;
var map__24766__$1 = cljs.core.__destructure_map(map__24766);
var msg__$1 = map__24766__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24766__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e24768){var ex = e24768;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__24769){
var map__24770 = p__24769;
var map__24770__$1 = cljs.core.__destructure_map(map__24770);
var env = map__24770__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24770__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__24771){
var map__24772 = p__24771;
var map__24772__$1 = cljs.core.__destructure_map(map__24772);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24772__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24772__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__24773){
var map__24774 = p__24773;
var map__24774__$1 = cljs.core.__destructure_map(map__24774);
var svc = map__24774__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24774__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
