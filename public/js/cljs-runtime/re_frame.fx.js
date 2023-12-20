goog.provide('re_frame.fx');
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
var _STAR_current_trace_STAR__orig_val__26195 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26196 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26196);

try{try{var seq__26197 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__26198 = null;
var count__26199 = (0);
var i__26200 = (0);
while(true){
if((i__26200 < count__26199)){
var vec__26210 = chunk__26198.cljs$core$IIndexed$_nth$arity$2(null,i__26200);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26210,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26210,(1),null);
var temp__5802__auto___26261 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26261)){
var effect_fn_26262 = temp__5802__auto___26261;
(effect_fn_26262.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26262.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26262.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26263 = seq__26197;
var G__26264 = chunk__26198;
var G__26265 = count__26199;
var G__26266 = (i__26200 + (1));
seq__26197 = G__26263;
chunk__26198 = G__26264;
count__26199 = G__26265;
i__26200 = G__26266;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26197);
if(temp__5804__auto__){
var seq__26197__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26197__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26197__$1);
var G__26267 = cljs.core.chunk_rest(seq__26197__$1);
var G__26268 = c__5568__auto__;
var G__26269 = cljs.core.count(c__5568__auto__);
var G__26270 = (0);
seq__26197 = G__26267;
chunk__26198 = G__26268;
count__26199 = G__26269;
i__26200 = G__26270;
continue;
} else {
var vec__26214 = cljs.core.first(seq__26197__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26214,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26214,(1),null);
var temp__5802__auto___26271 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26271)){
var effect_fn_26272 = temp__5802__auto___26271;
(effect_fn_26272.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26272.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26272.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26273 = cljs.core.next(seq__26197__$1);
var G__26274 = null;
var G__26275 = (0);
var G__26276 = (0);
seq__26197 = G__26273;
chunk__26198 = G__26274;
count__26199 = G__26275;
i__26200 = G__26276;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__25875__auto___26277 = re_frame.interop.now();
var duration__25876__auto___26278 = (end__25875__auto___26277 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25876__auto___26278,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__25875__auto___26277);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26195);
}} else {
var seq__26217 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__26218 = null;
var count__26219 = (0);
var i__26220 = (0);
while(true){
if((i__26220 < count__26219)){
var vec__26239 = chunk__26218.cljs$core$IIndexed$_nth$arity$2(null,i__26220);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26239,(1),null);
var temp__5802__auto___26279 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26279)){
var effect_fn_26280 = temp__5802__auto___26279;
(effect_fn_26280.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26280.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26280.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26281 = seq__26217;
var G__26282 = chunk__26218;
var G__26283 = count__26219;
var G__26284 = (i__26220 + (1));
seq__26217 = G__26281;
chunk__26218 = G__26282;
count__26219 = G__26283;
i__26220 = G__26284;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26217);
if(temp__5804__auto__){
var seq__26217__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26217__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26217__$1);
var G__26285 = cljs.core.chunk_rest(seq__26217__$1);
var G__26286 = c__5568__auto__;
var G__26287 = cljs.core.count(c__5568__auto__);
var G__26288 = (0);
seq__26217 = G__26285;
chunk__26218 = G__26286;
count__26219 = G__26287;
i__26220 = G__26288;
continue;
} else {
var vec__26242 = cljs.core.first(seq__26217__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26242,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26242,(1),null);
var temp__5802__auto___26289 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26289)){
var effect_fn_26290 = temp__5802__auto___26289;
(effect_fn_26290.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26290.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26290.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26291 = cljs.core.next(seq__26217__$1);
var G__26292 = null;
var G__26293 = (0);
var G__26294 = (0);
seq__26217 = G__26291;
chunk__26218 = G__26292;
count__26219 = G__26293;
i__26220 = G__26294;
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
var seq__26245 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26246 = null;
var count__26247 = (0);
var i__26248 = (0);
while(true){
if((i__26248 < count__26247)){
var map__26251 = chunk__26246.cljs$core$IIndexed$_nth$arity$2(null,i__26248);
var map__26251__$1 = cljs.core.__destructure_map(map__26251);
var effect = map__26251__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26251__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26251__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__26245,chunk__26246,count__26247,i__26248,map__26251,map__26251__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__26245,chunk__26246,count__26247,i__26248,map__26251,map__26251__$1,effect,ms,dispatch))
,ms);
}


var G__26295 = seq__26245;
var G__26296 = chunk__26246;
var G__26297 = count__26247;
var G__26298 = (i__26248 + (1));
seq__26245 = G__26295;
chunk__26246 = G__26296;
count__26247 = G__26297;
i__26248 = G__26298;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26245);
if(temp__5804__auto__){
var seq__26245__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26245__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26245__$1);
var G__26299 = cljs.core.chunk_rest(seq__26245__$1);
var G__26300 = c__5568__auto__;
var G__26301 = cljs.core.count(c__5568__auto__);
var G__26302 = (0);
seq__26245 = G__26299;
chunk__26246 = G__26300;
count__26247 = G__26301;
i__26248 = G__26302;
continue;
} else {
var map__26252 = cljs.core.first(seq__26245__$1);
var map__26252__$1 = cljs.core.__destructure_map(map__26252);
var effect = map__26252__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26252__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26252__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__26245,chunk__26246,count__26247,i__26248,map__26252,map__26252__$1,effect,ms,dispatch,seq__26245__$1,temp__5804__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__26245,chunk__26246,count__26247,i__26248,map__26252,map__26252__$1,effect,ms,dispatch,seq__26245__$1,temp__5804__auto__))
,ms);
}


var G__26303 = cljs.core.next(seq__26245__$1);
var G__26304 = null;
var G__26305 = (0);
var G__26306 = (0);
seq__26245 = G__26303;
chunk__26246 = G__26304;
count__26247 = G__26305;
i__26248 = G__26306;
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
var seq__26253 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26254 = null;
var count__26255 = (0);
var i__26256 = (0);
while(true){
if((i__26256 < count__26255)){
var event = chunk__26254.cljs$core$IIndexed$_nth$arity$2(null,i__26256);
re_frame.router.dispatch(event);


var G__26307 = seq__26253;
var G__26308 = chunk__26254;
var G__26309 = count__26255;
var G__26310 = (i__26256 + (1));
seq__26253 = G__26307;
chunk__26254 = G__26308;
count__26255 = G__26309;
i__26256 = G__26310;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26253);
if(temp__5804__auto__){
var seq__26253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26253__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26253__$1);
var G__26311 = cljs.core.chunk_rest(seq__26253__$1);
var G__26312 = c__5568__auto__;
var G__26313 = cljs.core.count(c__5568__auto__);
var G__26314 = (0);
seq__26253 = G__26311;
chunk__26254 = G__26312;
count__26255 = G__26313;
i__26256 = G__26314;
continue;
} else {
var event = cljs.core.first(seq__26253__$1);
re_frame.router.dispatch(event);


var G__26315 = cljs.core.next(seq__26253__$1);
var G__26316 = null;
var G__26317 = (0);
var G__26318 = (0);
seq__26253 = G__26315;
chunk__26254 = G__26316;
count__26255 = G__26317;
i__26256 = G__26318;
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
var seq__26257 = cljs.core.seq(value);
var chunk__26258 = null;
var count__26259 = (0);
var i__26260 = (0);
while(true){
if((i__26260 < count__26259)){
var event = chunk__26258.cljs$core$IIndexed$_nth$arity$2(null,i__26260);
clear_event(event);


var G__26319 = seq__26257;
var G__26320 = chunk__26258;
var G__26321 = count__26259;
var G__26322 = (i__26260 + (1));
seq__26257 = G__26319;
chunk__26258 = G__26320;
count__26259 = G__26321;
i__26260 = G__26322;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26257);
if(temp__5804__auto__){
var seq__26257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26257__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26257__$1);
var G__26323 = cljs.core.chunk_rest(seq__26257__$1);
var G__26324 = c__5568__auto__;
var G__26325 = cljs.core.count(c__5568__auto__);
var G__26326 = (0);
seq__26257 = G__26323;
chunk__26258 = G__26324;
count__26259 = G__26325;
i__26260 = G__26326;
continue;
} else {
var event = cljs.core.first(seq__26257__$1);
clear_event(event);


var G__26327 = cljs.core.next(seq__26257__$1);
var G__26328 = null;
var G__26329 = (0);
var G__26330 = (0);
seq__26257 = G__26327;
chunk__26258 = G__26328;
count__26259 = G__26329;
i__26260 = G__26330;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
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
