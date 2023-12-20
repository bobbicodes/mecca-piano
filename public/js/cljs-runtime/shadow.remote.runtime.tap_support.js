goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__24045,p__24046){
var map__24047 = p__24045;
var map__24047__$1 = cljs.core.__destructure_map(map__24047);
var svc = map__24047__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24047__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24047__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24047__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__24048 = p__24046;
var map__24048__$1 = cljs.core.__destructure_map(map__24048);
var msg = map__24048__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24048__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24048__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24048__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24048__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__24050,p__24051){
var map__24052 = p__24050;
var map__24052__$1 = cljs.core.__destructure_map(map__24052);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24052__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__24053 = p__24051;
var map__24053__$1 = cljs.core.__destructure_map(map__24053);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24053__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__24054,p__24055){
var map__24056 = p__24054;
var map__24056__$1 = cljs.core.__destructure_map(map__24056);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24056__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24056__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__24057 = p__24055;
var map__24057__$1 = cljs.core.__destructure_map(map__24057);
var msg = map__24057__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24057__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__24058,tid){
var map__24059 = p__24058;
var map__24059__$1 = cljs.core.__destructure_map(map__24059);
var svc = map__24059__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24059__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__24064 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__24065 = null;
var count__24066 = (0);
var i__24067 = (0);
while(true){
if((i__24067 < count__24066)){
var vec__24081 = chunk__24065.cljs$core$IIndexed$_nth$arity$2(null,i__24067);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24081,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24081,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__24093 = seq__24064;
var G__24094 = chunk__24065;
var G__24095 = count__24066;
var G__24096 = (i__24067 + (1));
seq__24064 = G__24093;
chunk__24065 = G__24094;
count__24066 = G__24095;
i__24067 = G__24096;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24064);
if(temp__5804__auto__){
var seq__24064__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24064__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24064__$1);
var G__24097 = cljs.core.chunk_rest(seq__24064__$1);
var G__24098 = c__5568__auto__;
var G__24099 = cljs.core.count(c__5568__auto__);
var G__24100 = (0);
seq__24064 = G__24097;
chunk__24065 = G__24098;
count__24066 = G__24099;
i__24067 = G__24100;
continue;
} else {
var vec__24085 = cljs.core.first(seq__24064__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24085,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24085,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__24101 = cljs.core.next(seq__24064__$1);
var G__24102 = null;
var G__24103 = (0);
var G__24104 = (0);
seq__24064 = G__24101;
chunk__24065 = G__24102;
count__24066 = G__24103;
i__24067 = G__24104;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__24060_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__24060_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__24061_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__24061_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__24062_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__24062_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__24063_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__24063_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__24088){
var map__24089 = p__24088;
var map__24089__$1 = cljs.core.__destructure_map(map__24089);
var svc = map__24089__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24089__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24089__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
