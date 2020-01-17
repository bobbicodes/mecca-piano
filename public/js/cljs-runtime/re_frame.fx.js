goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__41749 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41750 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41750);

try{try{var seq__41751 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41752 = null;
var count__41753 = (0);
var i__41754 = (0);
while(true){
if((i__41754 < count__41753)){
var vec__41761 = chunk__41752.cljs$core$IIndexed$_nth$arity$2(null,i__41754);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41761,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41761,(1),null);
var temp__5733__auto___41820 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41820)){
var effect_fn_41821 = temp__5733__auto___41820;
(effect_fn_41821.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41821.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41821.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41822 = seq__41751;
var G__41823 = chunk__41752;
var G__41824 = count__41753;
var G__41825 = (i__41754 + (1));
seq__41751 = G__41822;
chunk__41752 = G__41823;
count__41753 = G__41824;
i__41754 = G__41825;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41751);
if(temp__5735__auto__){
var seq__41751__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41751__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41751__$1);
var G__41826 = cljs.core.chunk_rest(seq__41751__$1);
var G__41827 = c__4609__auto__;
var G__41828 = cljs.core.count(c__4609__auto__);
var G__41829 = (0);
seq__41751 = G__41826;
chunk__41752 = G__41827;
count__41753 = G__41828;
i__41754 = G__41829;
continue;
} else {
var vec__41764 = cljs.core.first(seq__41751__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41764,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41764,(1),null);
var temp__5733__auto___41830 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41830)){
var effect_fn_41831 = temp__5733__auto___41830;
(effect_fn_41831.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41831.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41831.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41832 = cljs.core.next(seq__41751__$1);
var G__41833 = null;
var G__41834 = (0);
var G__41835 = (0);
seq__41751 = G__41832;
chunk__41752 = G__41833;
count__41753 = G__41834;
i__41754 = G__41835;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__41485__auto___41836 = re_frame.interop.now();
var duration__41486__auto___41837 = (end__41485__auto___41836 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41486__auto___41837,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__41485__auto___41836);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41749);
}} else {
var seq__41767 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41768 = null;
var count__41769 = (0);
var i__41770 = (0);
while(true){
if((i__41770 < count__41769)){
var vec__41778 = chunk__41768.cljs$core$IIndexed$_nth$arity$2(null,i__41770);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41778,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41778,(1),null);
var temp__5733__auto___41838 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41838)){
var effect_fn_41839 = temp__5733__auto___41838;
(effect_fn_41839.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41839.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41839.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41840 = seq__41767;
var G__41841 = chunk__41768;
var G__41842 = count__41769;
var G__41843 = (i__41770 + (1));
seq__41767 = G__41840;
chunk__41768 = G__41841;
count__41769 = G__41842;
i__41770 = G__41843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41767);
if(temp__5735__auto__){
var seq__41767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41767__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41767__$1);
var G__41844 = cljs.core.chunk_rest(seq__41767__$1);
var G__41845 = c__4609__auto__;
var G__41846 = cljs.core.count(c__4609__auto__);
var G__41847 = (0);
seq__41767 = G__41844;
chunk__41768 = G__41845;
count__41769 = G__41846;
i__41770 = G__41847;
continue;
} else {
var vec__41781 = cljs.core.first(seq__41767__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41781,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41781,(1),null);
var temp__5733__auto___41848 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41848)){
var effect_fn_41849 = temp__5733__auto___41848;
(effect_fn_41849.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41849.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41849.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41850 = cljs.core.next(seq__41767__$1);
var G__41851 = null;
var G__41852 = (0);
var G__41853 = (0);
seq__41767 = G__41850;
chunk__41768 = G__41851;
count__41769 = G__41852;
i__41770 = G__41853;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__41784 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41785 = null;
var count__41786 = (0);
var i__41787 = (0);
while(true){
if((i__41787 < count__41786)){
var map__41795 = chunk__41785.cljs$core$IIndexed$_nth$arity$2(null,i__41787);
var map__41795__$1 = (((((!((map__41795 == null))))?(((((map__41795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41795):map__41795);
var effect = map__41795__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41795__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41795__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__41784,chunk__41785,count__41786,i__41787,map__41795,map__41795__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__41784,chunk__41785,count__41786,i__41787,map__41795,map__41795__$1,effect,ms,dispatch))
,ms);
}


var G__41854 = seq__41784;
var G__41855 = chunk__41785;
var G__41856 = count__41786;
var G__41857 = (i__41787 + (1));
seq__41784 = G__41854;
chunk__41785 = G__41855;
count__41786 = G__41856;
i__41787 = G__41857;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41784);
if(temp__5735__auto__){
var seq__41784__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41784__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41784__$1);
var G__41858 = cljs.core.chunk_rest(seq__41784__$1);
var G__41859 = c__4609__auto__;
var G__41860 = cljs.core.count(c__4609__auto__);
var G__41861 = (0);
seq__41784 = G__41858;
chunk__41785 = G__41859;
count__41786 = G__41860;
i__41787 = G__41861;
continue;
} else {
var map__41797 = cljs.core.first(seq__41784__$1);
var map__41797__$1 = (((((!((map__41797 == null))))?(((((map__41797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41797):map__41797);
var effect = map__41797__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41797__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41797__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__41784,chunk__41785,count__41786,i__41787,map__41797,map__41797__$1,effect,ms,dispatch,seq__41784__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__41784,chunk__41785,count__41786,i__41787,map__41797,map__41797__$1,effect,ms,dispatch,seq__41784__$1,temp__5735__auto__))
,ms);
}


var G__41862 = cljs.core.next(seq__41784__$1);
var G__41863 = null;
var G__41864 = (0);
var G__41865 = (0);
seq__41784 = G__41862;
chunk__41785 = G__41863;
count__41786 = G__41864;
i__41787 = G__41865;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__41800 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41801 = null;
var count__41802 = (0);
var i__41803 = (0);
while(true){
if((i__41803 < count__41802)){
var event = chunk__41801.cljs$core$IIndexed$_nth$arity$2(null,i__41803);
re_frame.router.dispatch(event);


var G__41866 = seq__41800;
var G__41867 = chunk__41801;
var G__41868 = count__41802;
var G__41869 = (i__41803 + (1));
seq__41800 = G__41866;
chunk__41801 = G__41867;
count__41802 = G__41868;
i__41803 = G__41869;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41800);
if(temp__5735__auto__){
var seq__41800__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41800__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41800__$1);
var G__41870 = cljs.core.chunk_rest(seq__41800__$1);
var G__41871 = c__4609__auto__;
var G__41872 = cljs.core.count(c__4609__auto__);
var G__41873 = (0);
seq__41800 = G__41870;
chunk__41801 = G__41871;
count__41802 = G__41872;
i__41803 = G__41873;
continue;
} else {
var event = cljs.core.first(seq__41800__$1);
re_frame.router.dispatch(event);


var G__41874 = cljs.core.next(seq__41800__$1);
var G__41875 = null;
var G__41876 = (0);
var G__41877 = (0);
seq__41800 = G__41874;
chunk__41801 = G__41875;
count__41802 = G__41876;
i__41803 = G__41877;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__41816 = cljs.core.seq(value);
var chunk__41817 = null;
var count__41818 = (0);
var i__41819 = (0);
while(true){
if((i__41819 < count__41818)){
var event = chunk__41817.cljs$core$IIndexed$_nth$arity$2(null,i__41819);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__41878 = seq__41816;
var G__41879 = chunk__41817;
var G__41880 = count__41818;
var G__41881 = (i__41819 + (1));
seq__41816 = G__41878;
chunk__41817 = G__41879;
count__41818 = G__41880;
i__41819 = G__41881;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41816);
if(temp__5735__auto__){
var seq__41816__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41816__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41816__$1);
var G__41882 = cljs.core.chunk_rest(seq__41816__$1);
var G__41883 = c__4609__auto__;
var G__41884 = cljs.core.count(c__4609__auto__);
var G__41885 = (0);
seq__41816 = G__41882;
chunk__41817 = G__41883;
count__41818 = G__41884;
i__41819 = G__41885;
continue;
} else {
var event = cljs.core.first(seq__41816__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__41886 = cljs.core.next(seq__41816__$1);
var G__41887 = null;
var G__41888 = (0);
var G__41889 = (0);
seq__41816 = G__41886;
chunk__41817 = G__41887;
count__41818 = G__41888;
i__41819 = G__41889;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
