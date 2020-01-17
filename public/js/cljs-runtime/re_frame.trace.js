goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__41505){
var map__41506 = p__41505;
var map__41506__$1 = (((((!((map__41506 == null))))?(((((map__41506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41506):map__41506);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41506__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41506__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41506__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41506__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__41508_41538 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__41509_41539 = null;
var count__41510_41540 = (0);
var i__41511_41541 = (0);
while(true){
if((i__41511_41541 < count__41510_41540)){
var vec__41522_41542 = chunk__41509_41539.cljs$core$IIndexed$_nth$arity$2(null,i__41511_41541);
var k_41543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41522_41542,(0),null);
var cb_41544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41522_41542,(1),null);
try{var G__41526_41546 = cljs.core.deref(re_frame.trace.traces);
(cb_41544.cljs$core$IFn$_invoke$arity$1 ? cb_41544.cljs$core$IFn$_invoke$arity$1(G__41526_41546) : cb_41544.call(null,G__41526_41546));
}catch (e41525){var e_41547 = e41525;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_41543,"while storing",cljs.core.deref(re_frame.trace.traces),e_41547], 0));
}

var G__41548 = seq__41508_41538;
var G__41549 = chunk__41509_41539;
var G__41550 = count__41510_41540;
var G__41551 = (i__41511_41541 + (1));
seq__41508_41538 = G__41548;
chunk__41509_41539 = G__41549;
count__41510_41540 = G__41550;
i__41511_41541 = G__41551;
continue;
} else {
var temp__5735__auto___41552 = cljs.core.seq(seq__41508_41538);
if(temp__5735__auto___41552){
var seq__41508_41553__$1 = temp__5735__auto___41552;
if(cljs.core.chunked_seq_QMARK_(seq__41508_41553__$1)){
var c__4609__auto___41554 = cljs.core.chunk_first(seq__41508_41553__$1);
var G__41555 = cljs.core.chunk_rest(seq__41508_41553__$1);
var G__41556 = c__4609__auto___41554;
var G__41557 = cljs.core.count(c__4609__auto___41554);
var G__41558 = (0);
seq__41508_41538 = G__41555;
chunk__41509_41539 = G__41556;
count__41510_41540 = G__41557;
i__41511_41541 = G__41558;
continue;
} else {
var vec__41527_41559 = cljs.core.first(seq__41508_41553__$1);
var k_41560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41527_41559,(0),null);
var cb_41561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41527_41559,(1),null);
try{var G__41531_41563 = cljs.core.deref(re_frame.trace.traces);
(cb_41561.cljs$core$IFn$_invoke$arity$1 ? cb_41561.cljs$core$IFn$_invoke$arity$1(G__41531_41563) : cb_41561.call(null,G__41531_41563));
}catch (e41530){var e_41564 = e41530;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_41560,"while storing",cljs.core.deref(re_frame.trace.traces),e_41564], 0));
}

var G__41565 = cljs.core.next(seq__41508_41553__$1);
var G__41566 = null;
var G__41567 = (0);
var G__41568 = (0);
seq__41508_41538 = G__41565;
chunk__41509_41539 = G__41566;
count__41510_41540 = G__41567;
i__41511_41541 = G__41568;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
