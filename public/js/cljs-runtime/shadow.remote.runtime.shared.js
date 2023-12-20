goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18993){
var map__18995 = p__18993;
var map__18995__$1 = cljs.core.__destructure_map(map__18995);
var runtime = map__18995__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18995__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_19252 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_19252)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__19000 = runtime;
var G__19001 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_19252);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__19000,G__19001) : shadow.remote.runtime.shared.process.call(null,G__19000,G__19001));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19006,res){
var map__19007 = p__19006;
var map__19007__$1 = cljs.core.__destructure_map(map__19007);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19007__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19007__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19010 = res;
var G__19010__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19010,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19010);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19010__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19010__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19017 = arguments.length;
switch (G__19017) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19022,msg,handlers,timeout_after_ms){
var map__19023 = p__19022;
var map__19023__$1 = cljs.core.__destructure_map(map__19023);
var runtime = map__19023__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19023__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19271 = arguments.length;
var i__5770__auto___19272 = (0);
while(true){
if((i__5770__auto___19272 < len__5769__auto___19271)){
args__5775__auto__.push((arguments[i__5770__auto___19272]));

var G__19273 = (i__5770__auto___19272 + (1));
i__5770__auto___19272 = G__19273;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19037,ev,args){
var map__19038 = p__19037;
var map__19038__$1 = cljs.core.__destructure_map(map__19038);
var runtime = map__19038__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19038__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19041 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19044 = null;
var count__19045 = (0);
var i__19046 = (0);
while(true){
if((i__19046 < count__19045)){
var ext = chunk__19044.cljs$core$IIndexed$_nth$arity$2(null,i__19046);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19280 = seq__19041;
var G__19282 = chunk__19044;
var G__19283 = count__19045;
var G__19284 = (i__19046 + (1));
seq__19041 = G__19280;
chunk__19044 = G__19282;
count__19045 = G__19283;
i__19046 = G__19284;
continue;
} else {
var G__19285 = seq__19041;
var G__19286 = chunk__19044;
var G__19287 = count__19045;
var G__19288 = (i__19046 + (1));
seq__19041 = G__19285;
chunk__19044 = G__19286;
count__19045 = G__19287;
i__19046 = G__19288;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19041);
if(temp__5804__auto__){
var seq__19041__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19041__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19041__$1);
var G__19289 = cljs.core.chunk_rest(seq__19041__$1);
var G__19290 = c__5568__auto__;
var G__19291 = cljs.core.count(c__5568__auto__);
var G__19292 = (0);
seq__19041 = G__19289;
chunk__19044 = G__19290;
count__19045 = G__19291;
i__19046 = G__19292;
continue;
} else {
var ext = cljs.core.first(seq__19041__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19294 = cljs.core.next(seq__19041__$1);
var G__19295 = null;
var G__19296 = (0);
var G__19297 = (0);
seq__19041 = G__19294;
chunk__19044 = G__19295;
count__19045 = G__19296;
i__19046 = G__19297;
continue;
} else {
var G__19298 = cljs.core.next(seq__19041__$1);
var G__19299 = null;
var G__19300 = (0);
var G__19301 = (0);
seq__19041 = G__19298;
chunk__19044 = G__19299;
count__19045 = G__19300;
i__19046 = G__19301;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19028){
var G__19029 = cljs.core.first(seq19028);
var seq19028__$1 = cljs.core.next(seq19028);
var G__19031 = cljs.core.first(seq19028__$1);
var seq19028__$2 = cljs.core.next(seq19028__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19029,G__19031,seq19028__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19066,p__19067){
var map__19070 = p__19066;
var map__19070__$1 = cljs.core.__destructure_map(map__19070);
var runtime = map__19070__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19070__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19071 = p__19067;
var map__19071__$1 = cljs.core.__destructure_map(map__19071);
var msg = map__19071__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19071__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__19073 = cljs.core.deref(state_ref);
var map__19073__$1 = cljs.core.__destructure_map(map__19073);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19073__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19073__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19080,msg){
var map__19081 = p__19080;
var map__19081__$1 = cljs.core.__destructure_map(map__19081);
var runtime = map__19081__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19088,key,p__19089){
var map__19091 = p__19088;
var map__19091__$1 = cljs.core.__destructure_map(map__19091);
var state = map__19091__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19091__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19092 = p__19089;
var map__19092__$1 = cljs.core.__destructure_map(map__19092);
var spec = map__19092__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19094,key,spec){
var map__19098 = p__19094;
var map__19098__$1 = cljs.core.__destructure_map(map__19098);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19098__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19099_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19099_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19100_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19100_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19101_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19101_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19102_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19102_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19103_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19103_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19116,key){
var map__19118 = p__19116;
var map__19118__$1 = cljs.core.__destructure_map(map__19118);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19118__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19145,msg){
var map__19154 = p__19145;
var map__19154__$1 = cljs.core.__destructure_map(map__19154);
var runtime = map__19154__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19154__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19197,p__19198){
var map__19202 = p__19197;
var map__19202__$1 = cljs.core.__destructure_map(map__19202);
var runtime = map__19202__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19202__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19207 = p__19198;
var map__19207__$1 = cljs.core.__destructure_map(map__19207);
var msg = map__19207__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19207__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19207__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19223 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19225 = null;
var count__19226 = (0);
var i__19227 = (0);
while(true){
if((i__19227 < count__19226)){
var map__19235 = chunk__19225.cljs$core$IIndexed$_nth$arity$2(null,i__19227);
var map__19235__$1 = cljs.core.__destructure_map(map__19235);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19348 = seq__19223;
var G__19349 = chunk__19225;
var G__19350 = count__19226;
var G__19351 = (i__19227 + (1));
seq__19223 = G__19348;
chunk__19225 = G__19349;
count__19226 = G__19350;
i__19227 = G__19351;
continue;
} else {
var G__19352 = seq__19223;
var G__19353 = chunk__19225;
var G__19354 = count__19226;
var G__19355 = (i__19227 + (1));
seq__19223 = G__19352;
chunk__19225 = G__19353;
count__19226 = G__19354;
i__19227 = G__19355;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19223);
if(temp__5804__auto__){
var seq__19223__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19223__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19223__$1);
var G__19358 = cljs.core.chunk_rest(seq__19223__$1);
var G__19359 = c__5568__auto__;
var G__19360 = cljs.core.count(c__5568__auto__);
var G__19361 = (0);
seq__19223 = G__19358;
chunk__19225 = G__19359;
count__19226 = G__19360;
i__19227 = G__19361;
continue;
} else {
var map__19245 = cljs.core.first(seq__19223__$1);
var map__19245__$1 = cljs.core.__destructure_map(map__19245);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19245__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19363 = cljs.core.next(seq__19223__$1);
var G__19364 = null;
var G__19365 = (0);
var G__19366 = (0);
seq__19223 = G__19363;
chunk__19225 = G__19364;
count__19226 = G__19365;
i__19227 = G__19366;
continue;
} else {
var G__19368 = cljs.core.next(seq__19223__$1);
var G__19369 = null;
var G__19370 = (0);
var G__19371 = (0);
seq__19223 = G__19368;
chunk__19225 = G__19369;
count__19226 = G__19370;
i__19227 = G__19371;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
