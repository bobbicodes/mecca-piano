goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17483 = (function (f,blockable,meta17484){
this.f = f;
this.blockable = blockable;
this.meta17484 = meta17484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17485,meta17484__$1){
var self__ = this;
var _17485__$1 = this;
return (new cljs.core.async.t_cljs$core$async17483(self__.f,self__.blockable,meta17484__$1));
}));

(cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17485){
var self__ = this;
var _17485__$1 = this;
return self__.meta17484;
}));

(cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17484","meta17484",-1104007038,null)], null);
}));

(cljs.core.async.t_cljs$core$async17483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17483");

(cljs.core.async.t_cljs$core$async17483.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17483.
 */
cljs.core.async.__GT_t_cljs$core$async17483 = (function cljs$core$async$__GT_t_cljs$core$async17483(f,blockable,meta17484){
return (new cljs.core.async.t_cljs$core$async17483(f,blockable,meta17484));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17482 = arguments.length;
switch (G__17482) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async17483(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17503 = arguments.length;
switch (G__17503) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17510 = arguments.length;
switch (G__17510) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17515 = arguments.length;
switch (G__17515) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19915 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19915) : fn1.call(null,val_19915));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19915) : fn1.call(null,val_19915));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17535 = arguments.length;
switch (G__17535) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19922 = n;
var x_19923 = (0);
while(true){
if((x_19923 < n__5636__auto___19922)){
(a[x_19923] = x_19923);

var G__19924 = (x_19923 + (1));
x_19923 = G__19924;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17564 = (function (flag,meta17565){
this.flag = flag;
this.meta17565 = meta17565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17566,meta17565__$1){
var self__ = this;
var _17566__$1 = this;
return (new cljs.core.async.t_cljs$core$async17564(self__.flag,meta17565__$1));
}));

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17566){
var self__ = this;
var _17566__$1 = this;
return self__.meta17565;
}));

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17565","meta17565",1231113318,null)], null);
}));

(cljs.core.async.t_cljs$core$async17564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17564");

(cljs.core.async.t_cljs$core$async17564.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17564.
 */
cljs.core.async.__GT_t_cljs$core$async17564 = (function cljs$core$async$__GT_t_cljs$core$async17564(flag,meta17565){
return (new cljs.core.async.t_cljs$core$async17564(flag,meta17565));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17564(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17581 = (function (flag,cb,meta17582){
this.flag = flag;
this.cb = cb;
this.meta17582 = meta17582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17583,meta17582__$1){
var self__ = this;
var _17583__$1 = this;
return (new cljs.core.async.t_cljs$core$async17581(self__.flag,self__.cb,meta17582__$1));
}));

(cljs.core.async.t_cljs$core$async17581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17583){
var self__ = this;
var _17583__$1 = this;
return self__.meta17582;
}));

(cljs.core.async.t_cljs$core$async17581.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17582","meta17582",-26314079,null)], null);
}));

(cljs.core.async.t_cljs$core$async17581.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17581");

(cljs.core.async.t_cljs$core$async17581.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17581");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17581.
 */
cljs.core.async.__GT_t_cljs$core$async17581 = (function cljs$core$async$__GT_t_cljs$core$async17581(flag,cb,meta17582){
return (new cljs.core.async.t_cljs$core$async17581(flag,cb,meta17582));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17581(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17595_SHARP_){
var G__17597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17595_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17597) : fret.call(null,G__17597));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17596_SHARP_){
var G__17598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17596_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17598) : fret.call(null,G__17598));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19941 = (i + (1));
i = G__19941;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19943 = arguments.length;
var i__5770__auto___19944 = (0);
while(true){
if((i__5770__auto___19944 < len__5769__auto___19943)){
args__5775__auto__.push((arguments[i__5770__auto___19944]));

var G__19945 = (i__5770__auto___19944 + (1));
i__5770__auto___19944 = G__19945;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17606){
var map__17607 = p__17606;
var map__17607__$1 = cljs.core.__destructure_map(map__17607);
var opts = map__17607__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17600){
var G__17601 = cljs.core.first(seq17600);
var seq17600__$1 = cljs.core.next(seq17600);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17601,seq17600__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17617 = arguments.length;
switch (G__17617) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17409__auto___19953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_17659){
var state_val_17661 = (state_17659[(1)]);
if((state_val_17661 === (7))){
var inst_17645 = (state_17659[(2)]);
var state_17659__$1 = state_17659;
var statearr_17663_19955 = state_17659__$1;
(statearr_17663_19955[(2)] = inst_17645);

(statearr_17663_19955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17661 === (1))){
var state_17659__$1 = state_17659;
var statearr_17664_19956 = state_17659__$1;
(statearr_17664_19956[(2)] = null);

(statearr_17664_19956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17661 === (4))){
var inst_17627 = (state_17659[(7)]);
var inst_17627__$1 = (state_17659[(2)]);
var inst_17628 = (inst_17627__$1 == null);
var state_17659__$1 = (function (){var statearr_17665 = state_17659;
(statearr_17665[(7)] = inst_17627__$1);

return statearr_17665;
})();
if(cljs.core.truth_(inst_17628)){
var statearr_17666_19962 = state_17659__$1;
(statearr_17666_19962[(1)] = (5));

} else {
var statearr_17667_19963 = state_17659__$1;
(statearr_17667_19963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17661 === (13))){
var state_17659__$1 = state_17659;
var statearr_17668_19966 = state_17659__$1;
(statearr_17668_19966[(2)] = null);

(statearr_17668_19966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17661 === (6))){
var inst_17627 = (state_17659[(7)]);
var state_17659__$1 = state_17659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17659__$1,(11),to,inst_17627);
} else {
if((state_val_17661 === (3))){
var inst_17656 = (state_17659[(2)]);
var state_17659__$1 = state_17659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17659__$1,inst_17656);
} else {
if((state_val_17661 === (12))){
var state_17659__$1 = state_17659;
var statearr_17681_19975 = state_17659__$1;
(statearr_17681_19975[(2)] = null);

(statearr_17681_19975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17661 === (2))){
var state_17659__$1 = state_17659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17659__$1,(4),from);
} else {
if((state_val_17661 === (11))){
var inst_17637 = (state_17659[(2)]);
var state_17659__$1 = state_17659;
if(cljs.core.truth_(inst_17637)){
var statearr_17684_19984 = state_17659__$1;
(statearr_17684_19984[(1)] = (12));

} else {
var statearr_17685_19987 = state_17659__$1;
(statearr_17685_19987[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17661 === (9))){
var state_17659__$1 = state_17659;
var statearr_17686_19988 = state_17659__$1;
(statearr_17686_19988[(2)] = null);

(statearr_17686_19988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17661 === (5))){
var state_17659__$1 = state_17659;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17687_19989 = state_17659__$1;
(statearr_17687_19989[(1)] = (8));

} else {
var statearr_17688_19990 = state_17659__$1;
(statearr_17688_19990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17661 === (14))){
var inst_17643 = (state_17659[(2)]);
var state_17659__$1 = state_17659;
var statearr_17690_19991 = state_17659__$1;
(statearr_17690_19991[(2)] = inst_17643);

(statearr_17690_19991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17661 === (10))){
var inst_17634 = (state_17659[(2)]);
var state_17659__$1 = state_17659;
var statearr_17691_19992 = state_17659__$1;
(statearr_17691_19992[(2)] = inst_17634);

(statearr_17691_19992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17661 === (8))){
var inst_17631 = cljs.core.async.close_BANG_(to);
var state_17659__$1 = state_17659;
var statearr_17692_19994 = state_17659__$1;
(statearr_17692_19994[(2)] = inst_17631);

(statearr_17692_19994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16978__auto__ = null;
var cljs$core$async$state_machine__16978__auto____0 = (function (){
var statearr_17697 = [null,null,null,null,null,null,null,null];
(statearr_17697[(0)] = cljs$core$async$state_machine__16978__auto__);

(statearr_17697[(1)] = (1));

return statearr_17697;
});
var cljs$core$async$state_machine__16978__auto____1 = (function (state_17659){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_17659);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e17698){var ex__16981__auto__ = e17698;
var statearr_17699_19995 = state_17659;
(statearr_17699_19995[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_17659[(4)]))){
var statearr_17700_19996 = state_17659;
(statearr_17700_19996[(1)] = cljs.core.first((state_17659[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19997 = state_17659;
state_17659 = G__19997;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$state_machine__16978__auto__ = function(state_17659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16978__auto____1.call(this,state_17659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16978__auto____0;
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16978__auto____1;
return cljs$core$async$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_17703 = f__17410__auto__();
(statearr_17703[(6)] = c__17409__auto___19953);

return statearr_17703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17716){
var vec__17717 = p__17716;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17717,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17717,(1),null);
var job = vec__17717;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17409__auto___19998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_17726){
var state_val_17727 = (state_17726[(1)]);
if((state_val_17727 === (1))){
var state_17726__$1 = state_17726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17726__$1,(2),res,v);
} else {
if((state_val_17727 === (2))){
var inst_17723 = (state_17726[(2)]);
var inst_17724 = cljs.core.async.close_BANG_(res);
var state_17726__$1 = (function (){var statearr_17733 = state_17726;
(statearr_17733[(7)] = inst_17723);

return statearr_17733;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17726__$1,inst_17724);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0 = (function (){
var statearr_17737 = [null,null,null,null,null,null,null,null];
(statearr_17737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__);

(statearr_17737[(1)] = (1));

return statearr_17737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1 = (function (state_17726){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_17726);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e17741){var ex__16981__auto__ = e17741;
var statearr_17742_20000 = state_17726;
(statearr_17742_20000[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_17726[(4)]))){
var statearr_17747_20001 = state_17726;
(statearr_17747_20001[(1)] = cljs.core.first((state_17726[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20002 = state_17726;
state_17726 = G__20002;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__ = function(state_17726){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1.call(this,state_17726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_17748 = f__17410__auto__();
(statearr_17748[(6)] = c__17409__auto___19998);

return statearr_17748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17751){
var vec__17752 = p__17751;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17752,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17752,(1),null);
var job = vec__17752;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___20003 = n;
var __20004 = (0);
while(true){
if((__20004 < n__5636__auto___20003)){
var G__17755_20005 = type;
var G__17755_20006__$1 = (((G__17755_20005 instanceof cljs.core.Keyword))?G__17755_20005.fqn:null);
switch (G__17755_20006__$1) {
case "compute":
var c__17409__auto___20008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20004,c__17409__auto___20008,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async){
return (function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = ((function (__20004,c__17409__auto___20008,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async){
return (function (state_17768){
var state_val_17769 = (state_17768[(1)]);
if((state_val_17769 === (1))){
var state_17768__$1 = state_17768;
var statearr_17771_20009 = state_17768__$1;
(statearr_17771_20009[(2)] = null);

(statearr_17771_20009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (2))){
var state_17768__$1 = state_17768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17768__$1,(4),jobs);
} else {
if((state_val_17769 === (3))){
var inst_17766 = (state_17768[(2)]);
var state_17768__$1 = state_17768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17768__$1,inst_17766);
} else {
if((state_val_17769 === (4))){
var inst_17758 = (state_17768[(2)]);
var inst_17759 = process__$1(inst_17758);
var state_17768__$1 = state_17768;
if(cljs.core.truth_(inst_17759)){
var statearr_17773_20010 = state_17768__$1;
(statearr_17773_20010[(1)] = (5));

} else {
var statearr_17774_20011 = state_17768__$1;
(statearr_17774_20011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (5))){
var state_17768__$1 = state_17768;
var statearr_17775_20012 = state_17768__$1;
(statearr_17775_20012[(2)] = null);

(statearr_17775_20012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (6))){
var state_17768__$1 = state_17768;
var statearr_17776_20013 = state_17768__$1;
(statearr_17776_20013[(2)] = null);

(statearr_17776_20013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (7))){
var inst_17764 = (state_17768[(2)]);
var state_17768__$1 = state_17768;
var statearr_17777_20016 = state_17768__$1;
(statearr_17777_20016[(2)] = inst_17764);

(statearr_17777_20016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20004,c__17409__auto___20008,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async))
;
return ((function (__20004,switch__16977__auto__,c__17409__auto___20008,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0 = (function (){
var statearr_17780 = [null,null,null,null,null,null,null];
(statearr_17780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__);

(statearr_17780[(1)] = (1));

return statearr_17780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1 = (function (state_17768){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_17768);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e17781){var ex__16981__auto__ = e17781;
var statearr_17782_20017 = state_17768;
(statearr_17782_20017[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_17768[(4)]))){
var statearr_17784_20018 = state_17768;
(statearr_17784_20018[(1)] = cljs.core.first((state_17768[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20022 = state_17768;
state_17768 = G__20022;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__ = function(state_17768){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1.call(this,state_17768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__;
})()
;})(__20004,switch__16977__auto__,c__17409__auto___20008,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async))
})();
var state__17411__auto__ = (function (){var statearr_17787 = f__17410__auto__();
(statearr_17787[(6)] = c__17409__auto___20008);

return statearr_17787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
});})(__20004,c__17409__auto___20008,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async))
);


break;
case "async":
var c__17409__auto___20023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20004,c__17409__auto___20023,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async){
return (function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = ((function (__20004,c__17409__auto___20023,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async){
return (function (state_17800){
var state_val_17801 = (state_17800[(1)]);
if((state_val_17801 === (1))){
var state_17800__$1 = state_17800;
var statearr_17802_20027 = state_17800__$1;
(statearr_17802_20027[(2)] = null);

(statearr_17802_20027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17801 === (2))){
var state_17800__$1 = state_17800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17800__$1,(4),jobs);
} else {
if((state_val_17801 === (3))){
var inst_17798 = (state_17800[(2)]);
var state_17800__$1 = state_17800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17800__$1,inst_17798);
} else {
if((state_val_17801 === (4))){
var inst_17790 = (state_17800[(2)]);
var inst_17791 = async(inst_17790);
var state_17800__$1 = state_17800;
if(cljs.core.truth_(inst_17791)){
var statearr_17804_20028 = state_17800__$1;
(statearr_17804_20028[(1)] = (5));

} else {
var statearr_17805_20029 = state_17800__$1;
(statearr_17805_20029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17801 === (5))){
var state_17800__$1 = state_17800;
var statearr_17806_20030 = state_17800__$1;
(statearr_17806_20030[(2)] = null);

(statearr_17806_20030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17801 === (6))){
var state_17800__$1 = state_17800;
var statearr_17807_20031 = state_17800__$1;
(statearr_17807_20031[(2)] = null);

(statearr_17807_20031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17801 === (7))){
var inst_17796 = (state_17800[(2)]);
var state_17800__$1 = state_17800;
var statearr_17808_20035 = state_17800__$1;
(statearr_17808_20035[(2)] = inst_17796);

(statearr_17808_20035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20004,c__17409__auto___20023,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async))
;
return ((function (__20004,switch__16977__auto__,c__17409__auto___20023,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0 = (function (){
var statearr_17811 = [null,null,null,null,null,null,null];
(statearr_17811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__);

(statearr_17811[(1)] = (1));

return statearr_17811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1 = (function (state_17800){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_17800);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e17812){var ex__16981__auto__ = e17812;
var statearr_17817_20039 = state_17800;
(statearr_17817_20039[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_17800[(4)]))){
var statearr_17818_20040 = state_17800;
(statearr_17818_20040[(1)] = cljs.core.first((state_17800[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20041 = state_17800;
state_17800 = G__20041;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__ = function(state_17800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1.call(this,state_17800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__;
})()
;})(__20004,switch__16977__auto__,c__17409__auto___20023,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async))
})();
var state__17411__auto__ = (function (){var statearr_17819 = f__17410__auto__();
(statearr_17819[(6)] = c__17409__auto___20023);

return statearr_17819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
});})(__20004,c__17409__auto___20023,G__17755_20005,G__17755_20006__$1,n__5636__auto___20003,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17755_20006__$1)].join('')));

}

var G__20045 = (__20004 + (1));
__20004 = G__20045;
continue;
} else {
}
break;
}

var c__17409__auto___20046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_17841){
var state_val_17842 = (state_17841[(1)]);
if((state_val_17842 === (7))){
var inst_17837 = (state_17841[(2)]);
var state_17841__$1 = state_17841;
var statearr_17843_20047 = state_17841__$1;
(statearr_17843_20047[(2)] = inst_17837);

(statearr_17843_20047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17842 === (1))){
var state_17841__$1 = state_17841;
var statearr_17844_20048 = state_17841__$1;
(statearr_17844_20048[(2)] = null);

(statearr_17844_20048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17842 === (4))){
var inst_17822 = (state_17841[(7)]);
var inst_17822__$1 = (state_17841[(2)]);
var inst_17823 = (inst_17822__$1 == null);
var state_17841__$1 = (function (){var statearr_17845 = state_17841;
(statearr_17845[(7)] = inst_17822__$1);

return statearr_17845;
})();
if(cljs.core.truth_(inst_17823)){
var statearr_17846_20053 = state_17841__$1;
(statearr_17846_20053[(1)] = (5));

} else {
var statearr_17847_20054 = state_17841__$1;
(statearr_17847_20054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17842 === (6))){
var inst_17822 = (state_17841[(7)]);
var inst_17827 = (state_17841[(8)]);
var inst_17827__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17828 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17829 = [inst_17822,inst_17827__$1];
var inst_17830 = (new cljs.core.PersistentVector(null,2,(5),inst_17828,inst_17829,null));
var state_17841__$1 = (function (){var statearr_17848 = state_17841;
(statearr_17848[(8)] = inst_17827__$1);

return statearr_17848;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17841__$1,(8),jobs,inst_17830);
} else {
if((state_val_17842 === (3))){
var inst_17839 = (state_17841[(2)]);
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17841__$1,inst_17839);
} else {
if((state_val_17842 === (2))){
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17841__$1,(4),from);
} else {
if((state_val_17842 === (9))){
var inst_17834 = (state_17841[(2)]);
var state_17841__$1 = (function (){var statearr_17849 = state_17841;
(statearr_17849[(9)] = inst_17834);

return statearr_17849;
})();
var statearr_17850_20061 = state_17841__$1;
(statearr_17850_20061[(2)] = null);

(statearr_17850_20061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17842 === (5))){
var inst_17825 = cljs.core.async.close_BANG_(jobs);
var state_17841__$1 = state_17841;
var statearr_17851_20062 = state_17841__$1;
(statearr_17851_20062[(2)] = inst_17825);

(statearr_17851_20062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17842 === (8))){
var inst_17827 = (state_17841[(8)]);
var inst_17832 = (state_17841[(2)]);
var state_17841__$1 = (function (){var statearr_17852 = state_17841;
(statearr_17852[(10)] = inst_17832);

return statearr_17852;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17841__$1,(9),results,inst_17827);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0 = (function (){
var statearr_17853 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17853[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__);

(statearr_17853[(1)] = (1));

return statearr_17853;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1 = (function (state_17841){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_17841);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e17856){var ex__16981__auto__ = e17856;
var statearr_17857_20069 = state_17841;
(statearr_17857_20069[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_17841[(4)]))){
var statearr_17860_20070 = state_17841;
(statearr_17860_20070[(1)] = cljs.core.first((state_17841[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20072 = state_17841;
state_17841 = G__20072;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__ = function(state_17841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1.call(this,state_17841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_17863 = f__17410__auto__();
(statearr_17863[(6)] = c__17409__auto___20046);

return statearr_17863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


var c__17409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_17904){
var state_val_17905 = (state_17904[(1)]);
if((state_val_17905 === (7))){
var inst_17897 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17911_20074 = state_17904__$1;
(statearr_17911_20074[(2)] = inst_17897);

(statearr_17911_20074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (20))){
var state_17904__$1 = state_17904;
var statearr_17912_20081 = state_17904__$1;
(statearr_17912_20081[(2)] = null);

(statearr_17912_20081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (1))){
var state_17904__$1 = state_17904;
var statearr_17913_20082 = state_17904__$1;
(statearr_17913_20082[(2)] = null);

(statearr_17913_20082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (4))){
var inst_17866 = (state_17904[(7)]);
var inst_17866__$1 = (state_17904[(2)]);
var inst_17867 = (inst_17866__$1 == null);
var state_17904__$1 = (function (){var statearr_17914 = state_17904;
(statearr_17914[(7)] = inst_17866__$1);

return statearr_17914;
})();
if(cljs.core.truth_(inst_17867)){
var statearr_17915_20083 = state_17904__$1;
(statearr_17915_20083[(1)] = (5));

} else {
var statearr_17916_20084 = state_17904__$1;
(statearr_17916_20084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (15))){
var inst_17879 = (state_17904[(8)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17904__$1,(18),to,inst_17879);
} else {
if((state_val_17905 === (21))){
var inst_17892 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17917_20089 = state_17904__$1;
(statearr_17917_20089[(2)] = inst_17892);

(statearr_17917_20089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (13))){
var inst_17894 = (state_17904[(2)]);
var state_17904__$1 = (function (){var statearr_17918 = state_17904;
(statearr_17918[(9)] = inst_17894);

return statearr_17918;
})();
var statearr_17919_20090 = state_17904__$1;
(statearr_17919_20090[(2)] = null);

(statearr_17919_20090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (6))){
var inst_17866 = (state_17904[(7)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17904__$1,(11),inst_17866);
} else {
if((state_val_17905 === (17))){
var inst_17887 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
if(cljs.core.truth_(inst_17887)){
var statearr_17920_20091 = state_17904__$1;
(statearr_17920_20091[(1)] = (19));

} else {
var statearr_17921_20092 = state_17904__$1;
(statearr_17921_20092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (3))){
var inst_17899 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17904__$1,inst_17899);
} else {
if((state_val_17905 === (12))){
var inst_17876 = (state_17904[(10)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17904__$1,(14),inst_17876);
} else {
if((state_val_17905 === (2))){
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17904__$1,(4),results);
} else {
if((state_val_17905 === (19))){
var state_17904__$1 = state_17904;
var statearr_17925_20101 = state_17904__$1;
(statearr_17925_20101[(2)] = null);

(statearr_17925_20101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (11))){
var inst_17876 = (state_17904[(2)]);
var state_17904__$1 = (function (){var statearr_17929 = state_17904;
(statearr_17929[(10)] = inst_17876);

return statearr_17929;
})();
var statearr_17930_20102 = state_17904__$1;
(statearr_17930_20102[(2)] = null);

(statearr_17930_20102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (9))){
var state_17904__$1 = state_17904;
var statearr_17931_20103 = state_17904__$1;
(statearr_17931_20103[(2)] = null);

(statearr_17931_20103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (5))){
var state_17904__$1 = state_17904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17932_20104 = state_17904__$1;
(statearr_17932_20104[(1)] = (8));

} else {
var statearr_17933_20105 = state_17904__$1;
(statearr_17933_20105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (14))){
var inst_17881 = (state_17904[(11)]);
var inst_17879 = (state_17904[(8)]);
var inst_17879__$1 = (state_17904[(2)]);
var inst_17880 = (inst_17879__$1 == null);
var inst_17881__$1 = cljs.core.not(inst_17880);
var state_17904__$1 = (function (){var statearr_17934 = state_17904;
(statearr_17934[(11)] = inst_17881__$1);

(statearr_17934[(8)] = inst_17879__$1);

return statearr_17934;
})();
if(inst_17881__$1){
var statearr_17935_20112 = state_17904__$1;
(statearr_17935_20112[(1)] = (15));

} else {
var statearr_17936_20113 = state_17904__$1;
(statearr_17936_20113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (16))){
var inst_17881 = (state_17904[(11)]);
var state_17904__$1 = state_17904;
var statearr_17937_20114 = state_17904__$1;
(statearr_17937_20114[(2)] = inst_17881);

(statearr_17937_20114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (10))){
var inst_17873 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17938_20115 = state_17904__$1;
(statearr_17938_20115[(2)] = inst_17873);

(statearr_17938_20115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (18))){
var inst_17884 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17939_20118 = state_17904__$1;
(statearr_17939_20118[(2)] = inst_17884);

(statearr_17939_20118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17905 === (8))){
var inst_17870 = cljs.core.async.close_BANG_(to);
var state_17904__$1 = state_17904;
var statearr_17942_20123 = state_17904__$1;
(statearr_17942_20123[(2)] = inst_17870);

(statearr_17942_20123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0 = (function (){
var statearr_17945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__);

(statearr_17945[(1)] = (1));

return statearr_17945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1 = (function (state_17904){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_17904);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e17946){var ex__16981__auto__ = e17946;
var statearr_17947_20124 = state_17904;
(statearr_17947_20124[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_17904[(4)]))){
var statearr_17948_20125 = state_17904;
(statearr_17948_20125[(1)] = cljs.core.first((state_17904[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20126 = state_17904;
state_17904 = G__20126;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__ = function(state_17904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1.call(this,state_17904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_17949 = f__17410__auto__();
(statearr_17949[(6)] = c__17409__auto__);

return statearr_17949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));

return c__17409__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17955 = arguments.length;
switch (G__17955) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17958 = arguments.length;
switch (G__17958) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17960 = arguments.length;
switch (G__17960) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17409__auto___20140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_17987){
var state_val_17988 = (state_17987[(1)]);
if((state_val_17988 === (7))){
var inst_17983 = (state_17987[(2)]);
var state_17987__$1 = state_17987;
var statearr_17994_20141 = state_17987__$1;
(statearr_17994_20141[(2)] = inst_17983);

(statearr_17994_20141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17988 === (1))){
var state_17987__$1 = state_17987;
var statearr_17995_20142 = state_17987__$1;
(statearr_17995_20142[(2)] = null);

(statearr_17995_20142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17988 === (4))){
var inst_17964 = (state_17987[(7)]);
var inst_17964__$1 = (state_17987[(2)]);
var inst_17965 = (inst_17964__$1 == null);
var state_17987__$1 = (function (){var statearr_17996 = state_17987;
(statearr_17996[(7)] = inst_17964__$1);

return statearr_17996;
})();
if(cljs.core.truth_(inst_17965)){
var statearr_17998_20143 = state_17987__$1;
(statearr_17998_20143[(1)] = (5));

} else {
var statearr_17999_20144 = state_17987__$1;
(statearr_17999_20144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17988 === (13))){
var state_17987__$1 = state_17987;
var statearr_18000_20145 = state_17987__$1;
(statearr_18000_20145[(2)] = null);

(statearr_18000_20145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17988 === (6))){
var inst_17964 = (state_17987[(7)]);
var inst_17970 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17964) : p.call(null,inst_17964));
var state_17987__$1 = state_17987;
if(cljs.core.truth_(inst_17970)){
var statearr_18001_20147 = state_17987__$1;
(statearr_18001_20147[(1)] = (9));

} else {
var statearr_18002_20148 = state_17987__$1;
(statearr_18002_20148[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17988 === (3))){
var inst_17985 = (state_17987[(2)]);
var state_17987__$1 = state_17987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17987__$1,inst_17985);
} else {
if((state_val_17988 === (12))){
var state_17987__$1 = state_17987;
var statearr_18003_20150 = state_17987__$1;
(statearr_18003_20150[(2)] = null);

(statearr_18003_20150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17988 === (2))){
var state_17987__$1 = state_17987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17987__$1,(4),ch);
} else {
if((state_val_17988 === (11))){
var inst_17964 = (state_17987[(7)]);
var inst_17974 = (state_17987[(2)]);
var state_17987__$1 = state_17987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17987__$1,(8),inst_17974,inst_17964);
} else {
if((state_val_17988 === (9))){
var state_17987__$1 = state_17987;
var statearr_18004_20152 = state_17987__$1;
(statearr_18004_20152[(2)] = tc);

(statearr_18004_20152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17988 === (5))){
var inst_17967 = cljs.core.async.close_BANG_(tc);
var inst_17968 = cljs.core.async.close_BANG_(fc);
var state_17987__$1 = (function (){var statearr_18005 = state_17987;
(statearr_18005[(8)] = inst_17967);

return statearr_18005;
})();
var statearr_18006_20154 = state_17987__$1;
(statearr_18006_20154[(2)] = inst_17968);

(statearr_18006_20154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17988 === (14))){
var inst_17981 = (state_17987[(2)]);
var state_17987__$1 = state_17987;
var statearr_18007_20155 = state_17987__$1;
(statearr_18007_20155[(2)] = inst_17981);

(statearr_18007_20155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17988 === (10))){
var state_17987__$1 = state_17987;
var statearr_18008_20156 = state_17987__$1;
(statearr_18008_20156[(2)] = fc);

(statearr_18008_20156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17988 === (8))){
var inst_17976 = (state_17987[(2)]);
var state_17987__$1 = state_17987;
if(cljs.core.truth_(inst_17976)){
var statearr_18010_20157 = state_17987__$1;
(statearr_18010_20157[(1)] = (12));

} else {
var statearr_18011_20158 = state_17987__$1;
(statearr_18011_20158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16978__auto__ = null;
var cljs$core$async$state_machine__16978__auto____0 = (function (){
var statearr_18016 = [null,null,null,null,null,null,null,null,null];
(statearr_18016[(0)] = cljs$core$async$state_machine__16978__auto__);

(statearr_18016[(1)] = (1));

return statearr_18016;
});
var cljs$core$async$state_machine__16978__auto____1 = (function (state_17987){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_17987);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e18019){var ex__16981__auto__ = e18019;
var statearr_18020_20159 = state_17987;
(statearr_18020_20159[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_17987[(4)]))){
var statearr_18021_20160 = state_17987;
(statearr_18021_20160[(1)] = cljs.core.first((state_17987[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20161 = state_17987;
state_17987 = G__20161;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$state_machine__16978__auto__ = function(state_17987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16978__auto____1.call(this,state_17987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16978__auto____0;
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16978__auto____1;
return cljs$core$async$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_18024 = f__17410__auto__();
(statearr_18024[(6)] = c__17409__auto___20140);

return statearr_18024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_18046){
var state_val_18047 = (state_18046[(1)]);
if((state_val_18047 === (7))){
var inst_18042 = (state_18046[(2)]);
var state_18046__$1 = state_18046;
var statearr_18048_20179 = state_18046__$1;
(statearr_18048_20179[(2)] = inst_18042);

(statearr_18048_20179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (1))){
var inst_18025 = init;
var inst_18026 = inst_18025;
var state_18046__$1 = (function (){var statearr_18049 = state_18046;
(statearr_18049[(7)] = inst_18026);

return statearr_18049;
})();
var statearr_18050_20183 = state_18046__$1;
(statearr_18050_20183[(2)] = null);

(statearr_18050_20183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (4))){
var inst_18029 = (state_18046[(8)]);
var inst_18029__$1 = (state_18046[(2)]);
var inst_18030 = (inst_18029__$1 == null);
var state_18046__$1 = (function (){var statearr_18051 = state_18046;
(statearr_18051[(8)] = inst_18029__$1);

return statearr_18051;
})();
if(cljs.core.truth_(inst_18030)){
var statearr_18052_20184 = state_18046__$1;
(statearr_18052_20184[(1)] = (5));

} else {
var statearr_18053_20185 = state_18046__$1;
(statearr_18053_20185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (6))){
var inst_18026 = (state_18046[(7)]);
var inst_18033 = (state_18046[(9)]);
var inst_18029 = (state_18046[(8)]);
var inst_18033__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18026,inst_18029) : f.call(null,inst_18026,inst_18029));
var inst_18034 = cljs.core.reduced_QMARK_(inst_18033__$1);
var state_18046__$1 = (function (){var statearr_18054 = state_18046;
(statearr_18054[(9)] = inst_18033__$1);

return statearr_18054;
})();
if(inst_18034){
var statearr_18055_20192 = state_18046__$1;
(statearr_18055_20192[(1)] = (8));

} else {
var statearr_18056_20193 = state_18046__$1;
(statearr_18056_20193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (3))){
var inst_18044 = (state_18046[(2)]);
var state_18046__$1 = state_18046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18046__$1,inst_18044);
} else {
if((state_val_18047 === (2))){
var state_18046__$1 = state_18046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18046__$1,(4),ch);
} else {
if((state_val_18047 === (9))){
var inst_18033 = (state_18046[(9)]);
var inst_18026 = inst_18033;
var state_18046__$1 = (function (){var statearr_18057 = state_18046;
(statearr_18057[(7)] = inst_18026);

return statearr_18057;
})();
var statearr_18058_20197 = state_18046__$1;
(statearr_18058_20197[(2)] = null);

(statearr_18058_20197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (5))){
var inst_18026 = (state_18046[(7)]);
var state_18046__$1 = state_18046;
var statearr_18059_20198 = state_18046__$1;
(statearr_18059_20198[(2)] = inst_18026);

(statearr_18059_20198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (10))){
var inst_18040 = (state_18046[(2)]);
var state_18046__$1 = state_18046;
var statearr_18060_20199 = state_18046__$1;
(statearr_18060_20199[(2)] = inst_18040);

(statearr_18060_20199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (8))){
var inst_18033 = (state_18046[(9)]);
var inst_18036 = cljs.core.deref(inst_18033);
var state_18046__$1 = state_18046;
var statearr_18062_20203 = state_18046__$1;
(statearr_18062_20203[(2)] = inst_18036);

(statearr_18062_20203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__16978__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16978__auto____0 = (function (){
var statearr_18065 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18065[(0)] = cljs$core$async$reduce_$_state_machine__16978__auto__);

(statearr_18065[(1)] = (1));

return statearr_18065;
});
var cljs$core$async$reduce_$_state_machine__16978__auto____1 = (function (state_18046){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_18046);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e18066){var ex__16981__auto__ = e18066;
var statearr_18067_20204 = state_18046;
(statearr_18067_20204[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_18046[(4)]))){
var statearr_18068_20209 = state_18046;
(statearr_18068_20209[(1)] = cljs.core.first((state_18046[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20210 = state_18046;
state_18046 = G__20210;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16978__auto__ = function(state_18046){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16978__auto____1.call(this,state_18046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16978__auto____0;
cljs$core$async$reduce_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16978__auto____1;
return cljs$core$async$reduce_$_state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_18069 = f__17410__auto__();
(statearr_18069[(6)] = c__17409__auto__);

return statearr_18069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));

return c__17409__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_18087){
var state_val_18088 = (state_18087[(1)]);
if((state_val_18088 === (1))){
var inst_18082 = cljs.core.async.reduce(f__$1,init,ch);
var state_18087__$1 = state_18087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18087__$1,(2),inst_18082);
} else {
if((state_val_18088 === (2))){
var inst_18084 = (state_18087[(2)]);
var inst_18085 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18084) : f__$1.call(null,inst_18084));
var state_18087__$1 = state_18087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18087__$1,inst_18085);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16978__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16978__auto____0 = (function (){
var statearr_18091 = [null,null,null,null,null,null,null];
(statearr_18091[(0)] = cljs$core$async$transduce_$_state_machine__16978__auto__);

(statearr_18091[(1)] = (1));

return statearr_18091;
});
var cljs$core$async$transduce_$_state_machine__16978__auto____1 = (function (state_18087){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_18087);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e18095){var ex__16981__auto__ = e18095;
var statearr_18096_20234 = state_18087;
(statearr_18096_20234[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_18087[(4)]))){
var statearr_18097_20235 = state_18087;
(statearr_18097_20235[(1)] = cljs.core.first((state_18087[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20236 = state_18087;
state_18087 = G__20236;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16978__auto__ = function(state_18087){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16978__auto____1.call(this,state_18087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16978__auto____0;
cljs$core$async$transduce_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16978__auto____1;
return cljs$core$async$transduce_$_state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_18100 = f__17410__auto__();
(statearr_18100[(6)] = c__17409__auto__);

return statearr_18100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));

return c__17409__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18106 = arguments.length;
switch (G__18106) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_18142){
var state_val_18143 = (state_18142[(1)]);
if((state_val_18143 === (7))){
var inst_18124 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
var statearr_18150_20238 = state_18142__$1;
(statearr_18150_20238[(2)] = inst_18124);

(statearr_18150_20238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (1))){
var inst_18118 = cljs.core.seq(coll);
var inst_18119 = inst_18118;
var state_18142__$1 = (function (){var statearr_18152 = state_18142;
(statearr_18152[(7)] = inst_18119);

return statearr_18152;
})();
var statearr_18153_20239 = state_18142__$1;
(statearr_18153_20239[(2)] = null);

(statearr_18153_20239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (4))){
var inst_18119 = (state_18142[(7)]);
var inst_18122 = cljs.core.first(inst_18119);
var state_18142__$1 = state_18142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18142__$1,(7),ch,inst_18122);
} else {
if((state_val_18143 === (13))){
var inst_18136 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
var statearr_18157_20240 = state_18142__$1;
(statearr_18157_20240[(2)] = inst_18136);

(statearr_18157_20240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (6))){
var inst_18127 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
if(cljs.core.truth_(inst_18127)){
var statearr_18158_20241 = state_18142__$1;
(statearr_18158_20241[(1)] = (8));

} else {
var statearr_18159_20242 = state_18142__$1;
(statearr_18159_20242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (3))){
var inst_18140 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18142__$1,inst_18140);
} else {
if((state_val_18143 === (12))){
var state_18142__$1 = state_18142;
var statearr_18162_20244 = state_18142__$1;
(statearr_18162_20244[(2)] = null);

(statearr_18162_20244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (2))){
var inst_18119 = (state_18142[(7)]);
var state_18142__$1 = state_18142;
if(cljs.core.truth_(inst_18119)){
var statearr_18163_20246 = state_18142__$1;
(statearr_18163_20246[(1)] = (4));

} else {
var statearr_18164_20247 = state_18142__$1;
(statearr_18164_20247[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (11))){
var inst_18133 = cljs.core.async.close_BANG_(ch);
var state_18142__$1 = state_18142;
var statearr_18166_20248 = state_18142__$1;
(statearr_18166_20248[(2)] = inst_18133);

(statearr_18166_20248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (9))){
var state_18142__$1 = state_18142;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18168_20252 = state_18142__$1;
(statearr_18168_20252[(1)] = (11));

} else {
var statearr_18169_20253 = state_18142__$1;
(statearr_18169_20253[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (5))){
var inst_18119 = (state_18142[(7)]);
var state_18142__$1 = state_18142;
var statearr_18170_20254 = state_18142__$1;
(statearr_18170_20254[(2)] = inst_18119);

(statearr_18170_20254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (10))){
var inst_18138 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
var statearr_18171_20255 = state_18142__$1;
(statearr_18171_20255[(2)] = inst_18138);

(statearr_18171_20255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (8))){
var inst_18119 = (state_18142[(7)]);
var inst_18129 = cljs.core.next(inst_18119);
var inst_18119__$1 = inst_18129;
var state_18142__$1 = (function (){var statearr_18172 = state_18142;
(statearr_18172[(7)] = inst_18119__$1);

return statearr_18172;
})();
var statearr_18173_20257 = state_18142__$1;
(statearr_18173_20257[(2)] = null);

(statearr_18173_20257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16978__auto__ = null;
var cljs$core$async$state_machine__16978__auto____0 = (function (){
var statearr_18176 = [null,null,null,null,null,null,null,null];
(statearr_18176[(0)] = cljs$core$async$state_machine__16978__auto__);

(statearr_18176[(1)] = (1));

return statearr_18176;
});
var cljs$core$async$state_machine__16978__auto____1 = (function (state_18142){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_18142);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e18177){var ex__16981__auto__ = e18177;
var statearr_18178_20258 = state_18142;
(statearr_18178_20258[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_18142[(4)]))){
var statearr_18179_20259 = state_18142;
(statearr_18179_20259[(1)] = cljs.core.first((state_18142[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20260 = state_18142;
state_18142 = G__20260;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$state_machine__16978__auto__ = function(state_18142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16978__auto____1.call(this,state_18142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16978__auto____0;
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16978__auto____1;
return cljs$core$async$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_18180 = f__17410__auto__();
(statearr_18180[(6)] = c__17409__auto__);

return statearr_18180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));

return c__17409__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18185 = arguments.length;
switch (G__18185) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20264 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20264(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20265 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20265(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20266 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20266(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20272 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20272(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18195 = (function (ch,cs,meta18196){
this.ch = ch;
this.cs = cs;
this.meta18196 = meta18196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18197,meta18196__$1){
var self__ = this;
var _18197__$1 = this;
return (new cljs.core.async.t_cljs$core$async18195(self__.ch,self__.cs,meta18196__$1));
}));

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18197){
var self__ = this;
var _18197__$1 = this;
return self__.meta18196;
}));

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18195.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18196","meta18196",1118025744,null)], null);
}));

(cljs.core.async.t_cljs$core$async18195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18195");

(cljs.core.async.t_cljs$core$async18195.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18195.
 */
cljs.core.async.__GT_t_cljs$core$async18195 = (function cljs$core$async$__GT_t_cljs$core$async18195(ch,cs,meta18196){
return (new cljs.core.async.t_cljs$core$async18195(ch,cs,meta18196));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async18195(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17409__auto___20287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_18360){
var state_val_18365 = (state_18360[(1)]);
if((state_val_18365 === (7))){
var inst_18351 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
var statearr_18372_20288 = state_18360__$1;
(statearr_18372_20288[(2)] = inst_18351);

(statearr_18372_20288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (20))){
var inst_18233 = (state_18360[(7)]);
var inst_18245 = cljs.core.first(inst_18233);
var inst_18247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18245,(0),null);
var inst_18251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18245,(1),null);
var state_18360__$1 = (function (){var statearr_18375 = state_18360;
(statearr_18375[(8)] = inst_18247);

return statearr_18375;
})();
if(cljs.core.truth_(inst_18251)){
var statearr_18376_20295 = state_18360__$1;
(statearr_18376_20295[(1)] = (22));

} else {
var statearr_18377_20296 = state_18360__$1;
(statearr_18377_20296[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (27))){
var inst_18305 = (state_18360[(9)]);
var inst_18295 = (state_18360[(10)]);
var inst_18293 = (state_18360[(11)]);
var inst_18202 = (state_18360[(12)]);
var inst_18305__$1 = cljs.core._nth(inst_18293,inst_18295);
var inst_18306 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18305__$1,inst_18202,done);
var state_18360__$1 = (function (){var statearr_18378 = state_18360;
(statearr_18378[(9)] = inst_18305__$1);

return statearr_18378;
})();
if(cljs.core.truth_(inst_18306)){
var statearr_18383_20297 = state_18360__$1;
(statearr_18383_20297[(1)] = (30));

} else {
var statearr_18385_20298 = state_18360__$1;
(statearr_18385_20298[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (1))){
var state_18360__$1 = state_18360;
var statearr_18397_20299 = state_18360__$1;
(statearr_18397_20299[(2)] = null);

(statearr_18397_20299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (24))){
var inst_18233 = (state_18360[(7)]);
var inst_18257 = (state_18360[(2)]);
var inst_18259 = cljs.core.next(inst_18233);
var inst_18211 = inst_18259;
var inst_18212 = null;
var inst_18213 = (0);
var inst_18214 = (0);
var state_18360__$1 = (function (){var statearr_18403 = state_18360;
(statearr_18403[(13)] = inst_18211);

(statearr_18403[(14)] = inst_18212);

(statearr_18403[(15)] = inst_18213);

(statearr_18403[(16)] = inst_18214);

(statearr_18403[(17)] = inst_18257);

return statearr_18403;
})();
var statearr_18404_20300 = state_18360__$1;
(statearr_18404_20300[(2)] = null);

(statearr_18404_20300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (39))){
var state_18360__$1 = state_18360;
var statearr_18437_20301 = state_18360__$1;
(statearr_18437_20301[(2)] = null);

(statearr_18437_20301[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (4))){
var inst_18202 = (state_18360[(12)]);
var inst_18202__$1 = (state_18360[(2)]);
var inst_18203 = (inst_18202__$1 == null);
var state_18360__$1 = (function (){var statearr_18454 = state_18360;
(statearr_18454[(12)] = inst_18202__$1);

return statearr_18454;
})();
if(cljs.core.truth_(inst_18203)){
var statearr_18457_20302 = state_18360__$1;
(statearr_18457_20302[(1)] = (5));

} else {
var statearr_18460_20303 = state_18360__$1;
(statearr_18460_20303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (15))){
var inst_18211 = (state_18360[(13)]);
var inst_18212 = (state_18360[(14)]);
var inst_18213 = (state_18360[(15)]);
var inst_18214 = (state_18360[(16)]);
var inst_18229 = (state_18360[(2)]);
var inst_18230 = (inst_18214 + (1));
var tmp18429 = inst_18211;
var tmp18430 = inst_18212;
var tmp18431 = inst_18213;
var inst_18211__$1 = tmp18429;
var inst_18212__$1 = tmp18430;
var inst_18213__$1 = tmp18431;
var inst_18214__$1 = inst_18230;
var state_18360__$1 = (function (){var statearr_18465 = state_18360;
(statearr_18465[(13)] = inst_18211__$1);

(statearr_18465[(18)] = inst_18229);

(statearr_18465[(14)] = inst_18212__$1);

(statearr_18465[(15)] = inst_18213__$1);

(statearr_18465[(16)] = inst_18214__$1);

return statearr_18465;
})();
var statearr_18466_20304 = state_18360__$1;
(statearr_18466_20304[(2)] = null);

(statearr_18466_20304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (21))){
var inst_18262 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
var statearr_18472_20305 = state_18360__$1;
(statearr_18472_20305[(2)] = inst_18262);

(statearr_18472_20305[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (31))){
var inst_18305 = (state_18360[(9)]);
var inst_18309 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18305);
var state_18360__$1 = state_18360;
var statearr_18474_20306 = state_18360__$1;
(statearr_18474_20306[(2)] = inst_18309);

(statearr_18474_20306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (32))){
var inst_18292 = (state_18360[(19)]);
var inst_18294 = (state_18360[(20)]);
var inst_18295 = (state_18360[(10)]);
var inst_18293 = (state_18360[(11)]);
var inst_18311 = (state_18360[(2)]);
var inst_18312 = (inst_18295 + (1));
var tmp18467 = inst_18292;
var tmp18468 = inst_18294;
var tmp18469 = inst_18293;
var inst_18292__$1 = tmp18467;
var inst_18293__$1 = tmp18469;
var inst_18294__$1 = tmp18468;
var inst_18295__$1 = inst_18312;
var state_18360__$1 = (function (){var statearr_18480 = state_18360;
(statearr_18480[(19)] = inst_18292__$1);

(statearr_18480[(20)] = inst_18294__$1);

(statearr_18480[(10)] = inst_18295__$1);

(statearr_18480[(21)] = inst_18311);

(statearr_18480[(11)] = inst_18293__$1);

return statearr_18480;
})();
var statearr_18482_20307 = state_18360__$1;
(statearr_18482_20307[(2)] = null);

(statearr_18482_20307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (40))){
var inst_18324 = (state_18360[(22)]);
var inst_18328 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18324);
var state_18360__$1 = state_18360;
var statearr_18483_20315 = state_18360__$1;
(statearr_18483_20315[(2)] = inst_18328);

(statearr_18483_20315[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (33))){
var inst_18315 = (state_18360[(23)]);
var inst_18317 = cljs.core.chunked_seq_QMARK_(inst_18315);
var state_18360__$1 = state_18360;
if(inst_18317){
var statearr_18484_20316 = state_18360__$1;
(statearr_18484_20316[(1)] = (36));

} else {
var statearr_18485_20317 = state_18360__$1;
(statearr_18485_20317[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (13))){
var inst_18223 = (state_18360[(24)]);
var inst_18226 = cljs.core.async.close_BANG_(inst_18223);
var state_18360__$1 = state_18360;
var statearr_18490_20318 = state_18360__$1;
(statearr_18490_20318[(2)] = inst_18226);

(statearr_18490_20318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (22))){
var inst_18247 = (state_18360[(8)]);
var inst_18254 = cljs.core.async.close_BANG_(inst_18247);
var state_18360__$1 = state_18360;
var statearr_18502_20319 = state_18360__$1;
(statearr_18502_20319[(2)] = inst_18254);

(statearr_18502_20319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (36))){
var inst_18315 = (state_18360[(23)]);
var inst_18319 = cljs.core.chunk_first(inst_18315);
var inst_18320 = cljs.core.chunk_rest(inst_18315);
var inst_18321 = cljs.core.count(inst_18319);
var inst_18292 = inst_18320;
var inst_18293 = inst_18319;
var inst_18294 = inst_18321;
var inst_18295 = (0);
var state_18360__$1 = (function (){var statearr_18505 = state_18360;
(statearr_18505[(19)] = inst_18292);

(statearr_18505[(20)] = inst_18294);

(statearr_18505[(10)] = inst_18295);

(statearr_18505[(11)] = inst_18293);

return statearr_18505;
})();
var statearr_18508_20331 = state_18360__$1;
(statearr_18508_20331[(2)] = null);

(statearr_18508_20331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (41))){
var inst_18315 = (state_18360[(23)]);
var inst_18330 = (state_18360[(2)]);
var inst_18331 = cljs.core.next(inst_18315);
var inst_18292 = inst_18331;
var inst_18293 = null;
var inst_18294 = (0);
var inst_18295 = (0);
var state_18360__$1 = (function (){var statearr_18513 = state_18360;
(statearr_18513[(19)] = inst_18292);

(statearr_18513[(25)] = inst_18330);

(statearr_18513[(20)] = inst_18294);

(statearr_18513[(10)] = inst_18295);

(statearr_18513[(11)] = inst_18293);

return statearr_18513;
})();
var statearr_18516_20332 = state_18360__$1;
(statearr_18516_20332[(2)] = null);

(statearr_18516_20332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (43))){
var state_18360__$1 = state_18360;
var statearr_18519_20333 = state_18360__$1;
(statearr_18519_20333[(2)] = null);

(statearr_18519_20333[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (29))){
var inst_18339 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
var statearr_18520_20334 = state_18360__$1;
(statearr_18520_20334[(2)] = inst_18339);

(statearr_18520_20334[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (44))){
var inst_18348 = (state_18360[(2)]);
var state_18360__$1 = (function (){var statearr_18522 = state_18360;
(statearr_18522[(26)] = inst_18348);

return statearr_18522;
})();
var statearr_18523_20335 = state_18360__$1;
(statearr_18523_20335[(2)] = null);

(statearr_18523_20335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (6))){
var inst_18278 = (state_18360[(27)]);
var inst_18277 = cljs.core.deref(cs);
var inst_18278__$1 = cljs.core.keys(inst_18277);
var inst_18280 = cljs.core.count(inst_18278__$1);
var inst_18281 = cljs.core.reset_BANG_(dctr,inst_18280);
var inst_18290 = cljs.core.seq(inst_18278__$1);
var inst_18292 = inst_18290;
var inst_18293 = null;
var inst_18294 = (0);
var inst_18295 = (0);
var state_18360__$1 = (function (){var statearr_18525 = state_18360;
(statearr_18525[(27)] = inst_18278__$1);

(statearr_18525[(28)] = inst_18281);

(statearr_18525[(19)] = inst_18292);

(statearr_18525[(20)] = inst_18294);

(statearr_18525[(10)] = inst_18295);

(statearr_18525[(11)] = inst_18293);

return statearr_18525;
})();
var statearr_18526_20347 = state_18360__$1;
(statearr_18526_20347[(2)] = null);

(statearr_18526_20347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (28))){
var inst_18315 = (state_18360[(23)]);
var inst_18292 = (state_18360[(19)]);
var inst_18315__$1 = cljs.core.seq(inst_18292);
var state_18360__$1 = (function (){var statearr_18527 = state_18360;
(statearr_18527[(23)] = inst_18315__$1);

return statearr_18527;
})();
if(inst_18315__$1){
var statearr_18528_20348 = state_18360__$1;
(statearr_18528_20348[(1)] = (33));

} else {
var statearr_18529_20349 = state_18360__$1;
(statearr_18529_20349[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (25))){
var inst_18294 = (state_18360[(20)]);
var inst_18295 = (state_18360[(10)]);
var inst_18302 = (inst_18295 < inst_18294);
var inst_18303 = inst_18302;
var state_18360__$1 = state_18360;
if(cljs.core.truth_(inst_18303)){
var statearr_18530_20350 = state_18360__$1;
(statearr_18530_20350[(1)] = (27));

} else {
var statearr_18531_20351 = state_18360__$1;
(statearr_18531_20351[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (34))){
var state_18360__$1 = state_18360;
var statearr_18532_20352 = state_18360__$1;
(statearr_18532_20352[(2)] = null);

(statearr_18532_20352[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (17))){
var state_18360__$1 = state_18360;
var statearr_18533_20353 = state_18360__$1;
(statearr_18533_20353[(2)] = null);

(statearr_18533_20353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (3))){
var inst_18353 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18360__$1,inst_18353);
} else {
if((state_val_18365 === (12))){
var inst_18271 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
var statearr_18536_20354 = state_18360__$1;
(statearr_18536_20354[(2)] = inst_18271);

(statearr_18536_20354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (2))){
var state_18360__$1 = state_18360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18360__$1,(4),ch);
} else {
if((state_val_18365 === (23))){
var state_18360__$1 = state_18360;
var statearr_18537_20355 = state_18360__$1;
(statearr_18537_20355[(2)] = null);

(statearr_18537_20355[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (35))){
var inst_18337 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
var statearr_18538_20356 = state_18360__$1;
(statearr_18538_20356[(2)] = inst_18337);

(statearr_18538_20356[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (19))){
var inst_18233 = (state_18360[(7)]);
var inst_18237 = cljs.core.chunk_first(inst_18233);
var inst_18238 = cljs.core.chunk_rest(inst_18233);
var inst_18239 = cljs.core.count(inst_18237);
var inst_18211 = inst_18238;
var inst_18212 = inst_18237;
var inst_18213 = inst_18239;
var inst_18214 = (0);
var state_18360__$1 = (function (){var statearr_18539 = state_18360;
(statearr_18539[(13)] = inst_18211);

(statearr_18539[(14)] = inst_18212);

(statearr_18539[(15)] = inst_18213);

(statearr_18539[(16)] = inst_18214);

return statearr_18539;
})();
var statearr_18540_20357 = state_18360__$1;
(statearr_18540_20357[(2)] = null);

(statearr_18540_20357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (11))){
var inst_18211 = (state_18360[(13)]);
var inst_18233 = (state_18360[(7)]);
var inst_18233__$1 = cljs.core.seq(inst_18211);
var state_18360__$1 = (function (){var statearr_18541 = state_18360;
(statearr_18541[(7)] = inst_18233__$1);

return statearr_18541;
})();
if(inst_18233__$1){
var statearr_18542_20358 = state_18360__$1;
(statearr_18542_20358[(1)] = (16));

} else {
var statearr_18543_20359 = state_18360__$1;
(statearr_18543_20359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (9))){
var inst_18273 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
var statearr_18544_20360 = state_18360__$1;
(statearr_18544_20360[(2)] = inst_18273);

(statearr_18544_20360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (5))){
var inst_18209 = cljs.core.deref(cs);
var inst_18210 = cljs.core.seq(inst_18209);
var inst_18211 = inst_18210;
var inst_18212 = null;
var inst_18213 = (0);
var inst_18214 = (0);
var state_18360__$1 = (function (){var statearr_18545 = state_18360;
(statearr_18545[(13)] = inst_18211);

(statearr_18545[(14)] = inst_18212);

(statearr_18545[(15)] = inst_18213);

(statearr_18545[(16)] = inst_18214);

return statearr_18545;
})();
var statearr_18548_20373 = state_18360__$1;
(statearr_18548_20373[(2)] = null);

(statearr_18548_20373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (14))){
var state_18360__$1 = state_18360;
var statearr_18550_20374 = state_18360__$1;
(statearr_18550_20374[(2)] = null);

(statearr_18550_20374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (45))){
var inst_18345 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
var statearr_18551_20375 = state_18360__$1;
(statearr_18551_20375[(2)] = inst_18345);

(statearr_18551_20375[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (26))){
var inst_18278 = (state_18360[(27)]);
var inst_18341 = (state_18360[(2)]);
var inst_18342 = cljs.core.seq(inst_18278);
var state_18360__$1 = (function (){var statearr_18552 = state_18360;
(statearr_18552[(29)] = inst_18341);

return statearr_18552;
})();
if(inst_18342){
var statearr_18555_20376 = state_18360__$1;
(statearr_18555_20376[(1)] = (42));

} else {
var statearr_18557_20377 = state_18360__$1;
(statearr_18557_20377[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (16))){
var inst_18233 = (state_18360[(7)]);
var inst_18235 = cljs.core.chunked_seq_QMARK_(inst_18233);
var state_18360__$1 = state_18360;
if(inst_18235){
var statearr_18558_20378 = state_18360__$1;
(statearr_18558_20378[(1)] = (19));

} else {
var statearr_18559_20383 = state_18360__$1;
(statearr_18559_20383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (38))){
var inst_18334 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
var statearr_18560_20384 = state_18360__$1;
(statearr_18560_20384[(2)] = inst_18334);

(statearr_18560_20384[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (30))){
var state_18360__$1 = state_18360;
var statearr_18561_20388 = state_18360__$1;
(statearr_18561_20388[(2)] = null);

(statearr_18561_20388[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (10))){
var inst_18212 = (state_18360[(14)]);
var inst_18214 = (state_18360[(16)]);
var inst_18222 = cljs.core._nth(inst_18212,inst_18214);
var inst_18223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18222,(0),null);
var inst_18224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18222,(1),null);
var state_18360__$1 = (function (){var statearr_18562 = state_18360;
(statearr_18562[(24)] = inst_18223);

return statearr_18562;
})();
if(cljs.core.truth_(inst_18224)){
var statearr_18563_20389 = state_18360__$1;
(statearr_18563_20389[(1)] = (13));

} else {
var statearr_18566_20390 = state_18360__$1;
(statearr_18566_20390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (18))){
var inst_18269 = (state_18360[(2)]);
var state_18360__$1 = state_18360;
var statearr_18567_20391 = state_18360__$1;
(statearr_18567_20391[(2)] = inst_18269);

(statearr_18567_20391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (42))){
var state_18360__$1 = state_18360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18360__$1,(45),dchan);
} else {
if((state_val_18365 === (37))){
var inst_18315 = (state_18360[(23)]);
var inst_18324 = (state_18360[(22)]);
var inst_18202 = (state_18360[(12)]);
var inst_18324__$1 = cljs.core.first(inst_18315);
var inst_18325 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18324__$1,inst_18202,done);
var state_18360__$1 = (function (){var statearr_18568 = state_18360;
(statearr_18568[(22)] = inst_18324__$1);

return statearr_18568;
})();
if(cljs.core.truth_(inst_18325)){
var statearr_18569_20392 = state_18360__$1;
(statearr_18569_20392[(1)] = (39));

} else {
var statearr_18570_20393 = state_18360__$1;
(statearr_18570_20393[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18365 === (8))){
var inst_18213 = (state_18360[(15)]);
var inst_18214 = (state_18360[(16)]);
var inst_18216 = (inst_18214 < inst_18213);
var inst_18217 = inst_18216;
var state_18360__$1 = state_18360;
if(cljs.core.truth_(inst_18217)){
var statearr_18571_20394 = state_18360__$1;
(statearr_18571_20394[(1)] = (10));

} else {
var statearr_18572_20395 = state_18360__$1;
(statearr_18572_20395[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__16978__auto__ = null;
var cljs$core$async$mult_$_state_machine__16978__auto____0 = (function (){
var statearr_18585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18585[(0)] = cljs$core$async$mult_$_state_machine__16978__auto__);

(statearr_18585[(1)] = (1));

return statearr_18585;
});
var cljs$core$async$mult_$_state_machine__16978__auto____1 = (function (state_18360){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_18360);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e18586){var ex__16981__auto__ = e18586;
var statearr_18587_20396 = state_18360;
(statearr_18587_20396[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_18360[(4)]))){
var statearr_18588_20397 = state_18360;
(statearr_18588_20397[(1)] = cljs.core.first((state_18360[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20398 = state_18360;
state_18360 = G__20398;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16978__auto__ = function(state_18360){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16978__auto____1.call(this,state_18360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16978__auto____0;
cljs$core$async$mult_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16978__auto____1;
return cljs$core$async$mult_$_state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_18589 = f__17410__auto__();
(statearr_18589[(6)] = c__17409__auto___20287);

return statearr_18589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18592 = arguments.length;
switch (G__18592) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20402 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20402(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20403 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20403(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20406 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20406(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20407 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20407(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20416 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20416(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20417 = arguments.length;
var i__5770__auto___20418 = (0);
while(true){
if((i__5770__auto___20418 < len__5769__auto___20417)){
args__5775__auto__.push((arguments[i__5770__auto___20418]));

var G__20419 = (i__5770__auto___20418 + (1));
i__5770__auto___20418 = G__20419;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18644){
var map__18648 = p__18644;
var map__18648__$1 = cljs.core.__destructure_map(map__18648);
var opts = map__18648__$1;
var statearr_18649_20420 = state;
(statearr_18649_20420[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18654_20421 = state;
(statearr_18654_20421[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18657_20422 = state;
(statearr_18657_20422[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18635){
var G__18636 = cljs.core.first(seq18635);
var seq18635__$1 = cljs.core.next(seq18635);
var G__18637 = cljs.core.first(seq18635__$1);
var seq18635__$2 = cljs.core.next(seq18635__$1);
var G__18638 = cljs.core.first(seq18635__$2);
var seq18635__$3 = cljs.core.next(seq18635__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18636,G__18637,G__18638,seq18635__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18664 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18665){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18665 = meta18665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18666,meta18665__$1){
var self__ = this;
var _18666__$1 = this;
return (new cljs.core.async.t_cljs$core$async18664(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18665__$1));
}));

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18666){
var self__ = this;
var _18666__$1 = this;
return self__.meta18665;
}));

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18665","meta18665",-484934098,null)], null);
}));

(cljs.core.async.t_cljs$core$async18664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18664");

(cljs.core.async.t_cljs$core$async18664.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18664.
 */
cljs.core.async.__GT_t_cljs$core$async18664 = (function cljs$core$async$__GT_t_cljs$core$async18664(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18665){
return (new cljs.core.async.t_cljs$core$async18664(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18665));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18664(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17409__auto___20443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_18744){
var state_val_18745 = (state_18744[(1)]);
if((state_val_18745 === (7))){
var inst_18701 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
if(cljs.core.truth_(inst_18701)){
var statearr_18746_20444 = state_18744__$1;
(statearr_18746_20444[(1)] = (8));

} else {
var statearr_18747_20445 = state_18744__$1;
(statearr_18747_20445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (20))){
var inst_18693 = (state_18744[(7)]);
var state_18744__$1 = state_18744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18744__$1,(23),out,inst_18693);
} else {
if((state_val_18745 === (1))){
var inst_18676 = calc_state();
var inst_18677 = cljs.core.__destructure_map(inst_18676);
var inst_18678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18677,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18677,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18677,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18681 = inst_18676;
var state_18744__$1 = (function (){var statearr_18750 = state_18744;
(statearr_18750[(8)] = inst_18678);

(statearr_18750[(9)] = inst_18681);

(statearr_18750[(10)] = inst_18680);

(statearr_18750[(11)] = inst_18679);

return statearr_18750;
})();
var statearr_18751_20446 = state_18744__$1;
(statearr_18751_20446[(2)] = null);

(statearr_18751_20446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (24))){
var inst_18684 = (state_18744[(12)]);
var inst_18681 = inst_18684;
var state_18744__$1 = (function (){var statearr_18752 = state_18744;
(statearr_18752[(9)] = inst_18681);

return statearr_18752;
})();
var statearr_18753_20452 = state_18744__$1;
(statearr_18753_20452[(2)] = null);

(statearr_18753_20452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (4))){
var inst_18696 = (state_18744[(13)]);
var inst_18693 = (state_18744[(7)]);
var inst_18692 = (state_18744[(2)]);
var inst_18693__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18692,(0),null);
var inst_18694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18692,(1),null);
var inst_18696__$1 = (inst_18693__$1 == null);
var state_18744__$1 = (function (){var statearr_18755 = state_18744;
(statearr_18755[(13)] = inst_18696__$1);

(statearr_18755[(14)] = inst_18694);

(statearr_18755[(7)] = inst_18693__$1);

return statearr_18755;
})();
if(cljs.core.truth_(inst_18696__$1)){
var statearr_18756_20454 = state_18744__$1;
(statearr_18756_20454[(1)] = (5));

} else {
var statearr_18757_20455 = state_18744__$1;
(statearr_18757_20455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (15))){
var inst_18685 = (state_18744[(15)]);
var inst_18716 = (state_18744[(16)]);
var inst_18716__$1 = cljs.core.empty_QMARK_(inst_18685);
var state_18744__$1 = (function (){var statearr_18758 = state_18744;
(statearr_18758[(16)] = inst_18716__$1);

return statearr_18758;
})();
if(inst_18716__$1){
var statearr_18759_20456 = state_18744__$1;
(statearr_18759_20456[(1)] = (17));

} else {
var statearr_18760_20457 = state_18744__$1;
(statearr_18760_20457[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (21))){
var inst_18684 = (state_18744[(12)]);
var inst_18681 = inst_18684;
var state_18744__$1 = (function (){var statearr_18762 = state_18744;
(statearr_18762[(9)] = inst_18681);

return statearr_18762;
})();
var statearr_18764_20460 = state_18744__$1;
(statearr_18764_20460[(2)] = null);

(statearr_18764_20460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (13))){
var inst_18708 = (state_18744[(2)]);
var inst_18709 = calc_state();
var inst_18681 = inst_18709;
var state_18744__$1 = (function (){var statearr_18765 = state_18744;
(statearr_18765[(17)] = inst_18708);

(statearr_18765[(9)] = inst_18681);

return statearr_18765;
})();
var statearr_18766_20462 = state_18744__$1;
(statearr_18766_20462[(2)] = null);

(statearr_18766_20462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (22))){
var inst_18738 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
var statearr_18767_20463 = state_18744__$1;
(statearr_18767_20463[(2)] = inst_18738);

(statearr_18767_20463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (6))){
var inst_18694 = (state_18744[(14)]);
var inst_18699 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18694,change);
var state_18744__$1 = state_18744;
var statearr_18769_20464 = state_18744__$1;
(statearr_18769_20464[(2)] = inst_18699);

(statearr_18769_20464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (25))){
var state_18744__$1 = state_18744;
var statearr_18771_20465 = state_18744__$1;
(statearr_18771_20465[(2)] = null);

(statearr_18771_20465[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (17))){
var inst_18694 = (state_18744[(14)]);
var inst_18686 = (state_18744[(18)]);
var inst_18718 = (inst_18686.cljs$core$IFn$_invoke$arity$1 ? inst_18686.cljs$core$IFn$_invoke$arity$1(inst_18694) : inst_18686.call(null,inst_18694));
var inst_18719 = cljs.core.not(inst_18718);
var state_18744__$1 = state_18744;
var statearr_18772_20466 = state_18744__$1;
(statearr_18772_20466[(2)] = inst_18719);

(statearr_18772_20466[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (3))){
var inst_18742 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18744__$1,inst_18742);
} else {
if((state_val_18745 === (12))){
var state_18744__$1 = state_18744;
var statearr_18773_20467 = state_18744__$1;
(statearr_18773_20467[(2)] = null);

(statearr_18773_20467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (2))){
var inst_18684 = (state_18744[(12)]);
var inst_18681 = (state_18744[(9)]);
var inst_18684__$1 = cljs.core.__destructure_map(inst_18681);
var inst_18685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18684__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18684__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18684__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18744__$1 = (function (){var statearr_18774 = state_18744;
(statearr_18774[(15)] = inst_18685);

(statearr_18774[(12)] = inst_18684__$1);

(statearr_18774[(18)] = inst_18686);

return statearr_18774;
})();
return cljs.core.async.ioc_alts_BANG_(state_18744__$1,(4),inst_18687);
} else {
if((state_val_18745 === (23))){
var inst_18727 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
if(cljs.core.truth_(inst_18727)){
var statearr_18776_20472 = state_18744__$1;
(statearr_18776_20472[(1)] = (24));

} else {
var statearr_18777_20473 = state_18744__$1;
(statearr_18777_20473[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (19))){
var inst_18722 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
var statearr_18778_20474 = state_18744__$1;
(statearr_18778_20474[(2)] = inst_18722);

(statearr_18778_20474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (11))){
var inst_18694 = (state_18744[(14)]);
var inst_18705 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18694);
var state_18744__$1 = state_18744;
var statearr_18781_20476 = state_18744__$1;
(statearr_18781_20476[(2)] = inst_18705);

(statearr_18781_20476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (9))){
var inst_18685 = (state_18744[(15)]);
var inst_18713 = (state_18744[(19)]);
var inst_18694 = (state_18744[(14)]);
var inst_18713__$1 = (inst_18685.cljs$core$IFn$_invoke$arity$1 ? inst_18685.cljs$core$IFn$_invoke$arity$1(inst_18694) : inst_18685.call(null,inst_18694));
var state_18744__$1 = (function (){var statearr_18784 = state_18744;
(statearr_18784[(19)] = inst_18713__$1);

return statearr_18784;
})();
if(cljs.core.truth_(inst_18713__$1)){
var statearr_18785_20477 = state_18744__$1;
(statearr_18785_20477[(1)] = (14));

} else {
var statearr_18787_20478 = state_18744__$1;
(statearr_18787_20478[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (5))){
var inst_18696 = (state_18744[(13)]);
var state_18744__$1 = state_18744;
var statearr_18788_20479 = state_18744__$1;
(statearr_18788_20479[(2)] = inst_18696);

(statearr_18788_20479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (14))){
var inst_18713 = (state_18744[(19)]);
var state_18744__$1 = state_18744;
var statearr_18790_20480 = state_18744__$1;
(statearr_18790_20480[(2)] = inst_18713);

(statearr_18790_20480[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (26))){
var inst_18734 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
var statearr_18795_20481 = state_18744__$1;
(statearr_18795_20481[(2)] = inst_18734);

(statearr_18795_20481[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (16))){
var inst_18724 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
if(cljs.core.truth_(inst_18724)){
var statearr_18797_20482 = state_18744__$1;
(statearr_18797_20482[(1)] = (20));

} else {
var statearr_18798_20483 = state_18744__$1;
(statearr_18798_20483[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (10))){
var inst_18740 = (state_18744[(2)]);
var state_18744__$1 = state_18744;
var statearr_18799_20484 = state_18744__$1;
(statearr_18799_20484[(2)] = inst_18740);

(statearr_18799_20484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (18))){
var inst_18716 = (state_18744[(16)]);
var state_18744__$1 = state_18744;
var statearr_18801_20485 = state_18744__$1;
(statearr_18801_20485[(2)] = inst_18716);

(statearr_18801_20485[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18745 === (8))){
var inst_18693 = (state_18744[(7)]);
var inst_18703 = (inst_18693 == null);
var state_18744__$1 = state_18744;
if(cljs.core.truth_(inst_18703)){
var statearr_18804_20486 = state_18744__$1;
(statearr_18804_20486[(1)] = (11));

} else {
var statearr_18807_20487 = state_18744__$1;
(statearr_18807_20487[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__16978__auto__ = null;
var cljs$core$async$mix_$_state_machine__16978__auto____0 = (function (){
var statearr_18809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18809[(0)] = cljs$core$async$mix_$_state_machine__16978__auto__);

(statearr_18809[(1)] = (1));

return statearr_18809;
});
var cljs$core$async$mix_$_state_machine__16978__auto____1 = (function (state_18744){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_18744);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e18810){var ex__16981__auto__ = e18810;
var statearr_18812_20489 = state_18744;
(statearr_18812_20489[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_18744[(4)]))){
var statearr_18813_20490 = state_18744;
(statearr_18813_20490[(1)] = cljs.core.first((state_18744[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20491 = state_18744;
state_18744 = G__20491;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16978__auto__ = function(state_18744){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16978__auto____1.call(this,state_18744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16978__auto____0;
cljs$core$async$mix_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16978__auto____1;
return cljs$core$async$mix_$_state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_18816 = f__17410__auto__();
(statearr_18816[(6)] = c__17409__auto___20443);

return statearr_18816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20500 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20500(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20501 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20501(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20504 = (function() {
var G__20507 = null;
var G__20507__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20507__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20507 = function(p,v){
switch(arguments.length){
case 1:
return G__20507__1.call(this,p);
case 2:
return G__20507__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20507.cljs$core$IFn$_invoke$arity$1 = G__20507__1;
G__20507.cljs$core$IFn$_invoke$arity$2 = G__20507__2;
return G__20507;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18864 = arguments.length;
switch (G__18864) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20504(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20504(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18899 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18900){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18900 = meta18900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18901,meta18900__$1){
var self__ = this;
var _18901__$1 = this;
return (new cljs.core.async.t_cljs$core$async18899(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18900__$1));
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18901){
var self__ = this;
var _18901__$1 = this;
return self__.meta18900;
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18900","meta18900",89689892,null)], null);
}));

(cljs.core.async.t_cljs$core$async18899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18899");

(cljs.core.async.t_cljs$core$async18899.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18899.
 */
cljs.core.async.__GT_t_cljs$core$async18899 = (function cljs$core$async$__GT_t_cljs$core$async18899(ch,topic_fn,buf_fn,mults,ensure_mult,meta18900){
return (new cljs.core.async.t_cljs$core$async18899(ch,topic_fn,buf_fn,mults,ensure_mult,meta18900));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18884 = arguments.length;
switch (G__18884) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18881_SHARP_){
if(cljs.core.truth_((p1__18881_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18881_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18881_SHARP_.call(null,topic)))){
return p1__18881_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18881_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18899(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17409__auto___20517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_18991){
var state_val_18992 = (state_18991[(1)]);
if((state_val_18992 === (7))){
var inst_18987 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_18994_20521 = state_18991__$1;
(statearr_18994_20521[(2)] = inst_18987);

(statearr_18994_20521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (20))){
var state_18991__$1 = state_18991;
var statearr_18997_20522 = state_18991__$1;
(statearr_18997_20522[(2)] = null);

(statearr_18997_20522[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (1))){
var state_18991__$1 = state_18991;
var statearr_18999_20523 = state_18991__$1;
(statearr_18999_20523[(2)] = null);

(statearr_18999_20523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (24))){
var inst_18970 = (state_18991[(7)]);
var inst_18979 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18970);
var state_18991__$1 = state_18991;
var statearr_19002_20524 = state_18991__$1;
(statearr_19002_20524[(2)] = inst_18979);

(statearr_19002_20524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (4))){
var inst_18922 = (state_18991[(8)]);
var inst_18922__$1 = (state_18991[(2)]);
var inst_18923 = (inst_18922__$1 == null);
var state_18991__$1 = (function (){var statearr_19003 = state_18991;
(statearr_19003[(8)] = inst_18922__$1);

return statearr_19003;
})();
if(cljs.core.truth_(inst_18923)){
var statearr_19004_20525 = state_18991__$1;
(statearr_19004_20525[(1)] = (5));

} else {
var statearr_19005_20526 = state_18991__$1;
(statearr_19005_20526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (15))){
var inst_18964 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_19008_20527 = state_18991__$1;
(statearr_19008_20527[(2)] = inst_18964);

(statearr_19008_20527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (21))){
var inst_18984 = (state_18991[(2)]);
var state_18991__$1 = (function (){var statearr_19009 = state_18991;
(statearr_19009[(9)] = inst_18984);

return statearr_19009;
})();
var statearr_19011_20528 = state_18991__$1;
(statearr_19011_20528[(2)] = null);

(statearr_19011_20528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (13))){
var inst_18946 = (state_18991[(10)]);
var inst_18948 = cljs.core.chunked_seq_QMARK_(inst_18946);
var state_18991__$1 = state_18991;
if(inst_18948){
var statearr_19012_20529 = state_18991__$1;
(statearr_19012_20529[(1)] = (16));

} else {
var statearr_19013_20530 = state_18991__$1;
(statearr_19013_20530[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (22))){
var inst_18976 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
if(cljs.core.truth_(inst_18976)){
var statearr_19014_20531 = state_18991__$1;
(statearr_19014_20531[(1)] = (23));

} else {
var statearr_19015_20532 = state_18991__$1;
(statearr_19015_20532[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (6))){
var inst_18922 = (state_18991[(8)]);
var inst_18972 = (state_18991[(11)]);
var inst_18970 = (state_18991[(7)]);
var inst_18970__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18922) : topic_fn.call(null,inst_18922));
var inst_18971 = cljs.core.deref(mults);
var inst_18972__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18971,inst_18970__$1);
var state_18991__$1 = (function (){var statearr_19018 = state_18991;
(statearr_19018[(11)] = inst_18972__$1);

(statearr_19018[(7)] = inst_18970__$1);

return statearr_19018;
})();
if(cljs.core.truth_(inst_18972__$1)){
var statearr_19019_20533 = state_18991__$1;
(statearr_19019_20533[(1)] = (19));

} else {
var statearr_19020_20534 = state_18991__$1;
(statearr_19020_20534[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (25))){
var inst_18981 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_19021_20535 = state_18991__$1;
(statearr_19021_20535[(2)] = inst_18981);

(statearr_19021_20535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (17))){
var inst_18946 = (state_18991[(10)]);
var inst_18955 = cljs.core.first(inst_18946);
var inst_18956 = cljs.core.async.muxch_STAR_(inst_18955);
var inst_18957 = cljs.core.async.close_BANG_(inst_18956);
var inst_18958 = cljs.core.next(inst_18946);
var inst_18932 = inst_18958;
var inst_18933 = null;
var inst_18934 = (0);
var inst_18935 = (0);
var state_18991__$1 = (function (){var statearr_19024 = state_18991;
(statearr_19024[(12)] = inst_18932);

(statearr_19024[(13)] = inst_18957);

(statearr_19024[(14)] = inst_18935);

(statearr_19024[(15)] = inst_18934);

(statearr_19024[(16)] = inst_18933);

return statearr_19024;
})();
var statearr_19025_20536 = state_18991__$1;
(statearr_19025_20536[(2)] = null);

(statearr_19025_20536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (3))){
var inst_18989 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18991__$1,inst_18989);
} else {
if((state_val_18992 === (12))){
var inst_18966 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_19026_20538 = state_18991__$1;
(statearr_19026_20538[(2)] = inst_18966);

(statearr_19026_20538[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (2))){
var state_18991__$1 = state_18991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18991__$1,(4),ch);
} else {
if((state_val_18992 === (23))){
var state_18991__$1 = state_18991;
var statearr_19032_20539 = state_18991__$1;
(statearr_19032_20539[(2)] = null);

(statearr_19032_20539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (19))){
var inst_18922 = (state_18991[(8)]);
var inst_18972 = (state_18991[(11)]);
var inst_18974 = cljs.core.async.muxch_STAR_(inst_18972);
var state_18991__$1 = state_18991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18991__$1,(22),inst_18974,inst_18922);
} else {
if((state_val_18992 === (11))){
var inst_18946 = (state_18991[(10)]);
var inst_18932 = (state_18991[(12)]);
var inst_18946__$1 = cljs.core.seq(inst_18932);
var state_18991__$1 = (function (){var statearr_19034 = state_18991;
(statearr_19034[(10)] = inst_18946__$1);

return statearr_19034;
})();
if(inst_18946__$1){
var statearr_19035_20543 = state_18991__$1;
(statearr_19035_20543[(1)] = (13));

} else {
var statearr_19036_20544 = state_18991__$1;
(statearr_19036_20544[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (9))){
var inst_18968 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_19040_20546 = state_18991__$1;
(statearr_19040_20546[(2)] = inst_18968);

(statearr_19040_20546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (5))){
var inst_18929 = cljs.core.deref(mults);
var inst_18930 = cljs.core.vals(inst_18929);
var inst_18931 = cljs.core.seq(inst_18930);
var inst_18932 = inst_18931;
var inst_18933 = null;
var inst_18934 = (0);
var inst_18935 = (0);
var state_18991__$1 = (function (){var statearr_19049 = state_18991;
(statearr_19049[(12)] = inst_18932);

(statearr_19049[(14)] = inst_18935);

(statearr_19049[(15)] = inst_18934);

(statearr_19049[(16)] = inst_18933);

return statearr_19049;
})();
var statearr_19050_20547 = state_18991__$1;
(statearr_19050_20547[(2)] = null);

(statearr_19050_20547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (14))){
var state_18991__$1 = state_18991;
var statearr_19054_20548 = state_18991__$1;
(statearr_19054_20548[(2)] = null);

(statearr_19054_20548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (16))){
var inst_18946 = (state_18991[(10)]);
var inst_18950 = cljs.core.chunk_first(inst_18946);
var inst_18951 = cljs.core.chunk_rest(inst_18946);
var inst_18952 = cljs.core.count(inst_18950);
var inst_18932 = inst_18951;
var inst_18933 = inst_18950;
var inst_18934 = inst_18952;
var inst_18935 = (0);
var state_18991__$1 = (function (){var statearr_19055 = state_18991;
(statearr_19055[(12)] = inst_18932);

(statearr_19055[(14)] = inst_18935);

(statearr_19055[(15)] = inst_18934);

(statearr_19055[(16)] = inst_18933);

return statearr_19055;
})();
var statearr_19056_20549 = state_18991__$1;
(statearr_19056_20549[(2)] = null);

(statearr_19056_20549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (10))){
var inst_18932 = (state_18991[(12)]);
var inst_18935 = (state_18991[(14)]);
var inst_18934 = (state_18991[(15)]);
var inst_18933 = (state_18991[(16)]);
var inst_18940 = cljs.core._nth(inst_18933,inst_18935);
var inst_18941 = cljs.core.async.muxch_STAR_(inst_18940);
var inst_18942 = cljs.core.async.close_BANG_(inst_18941);
var inst_18943 = (inst_18935 + (1));
var tmp19051 = inst_18932;
var tmp19052 = inst_18934;
var tmp19053 = inst_18933;
var inst_18932__$1 = tmp19051;
var inst_18933__$1 = tmp19053;
var inst_18934__$1 = tmp19052;
var inst_18935__$1 = inst_18943;
var state_18991__$1 = (function (){var statearr_19057 = state_18991;
(statearr_19057[(12)] = inst_18932__$1);

(statearr_19057[(14)] = inst_18935__$1);

(statearr_19057[(15)] = inst_18934__$1);

(statearr_19057[(16)] = inst_18933__$1);

(statearr_19057[(17)] = inst_18942);

return statearr_19057;
})();
var statearr_19059_20550 = state_18991__$1;
(statearr_19059_20550[(2)] = null);

(statearr_19059_20550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (18))){
var inst_18961 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_19060_20551 = state_18991__$1;
(statearr_19060_20551[(2)] = inst_18961);

(statearr_19060_20551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (8))){
var inst_18935 = (state_18991[(14)]);
var inst_18934 = (state_18991[(15)]);
var inst_18937 = (inst_18935 < inst_18934);
var inst_18938 = inst_18937;
var state_18991__$1 = state_18991;
if(cljs.core.truth_(inst_18938)){
var statearr_19062_20556 = state_18991__$1;
(statearr_19062_20556[(1)] = (10));

} else {
var statearr_19063_20557 = state_18991__$1;
(statearr_19063_20557[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16978__auto__ = null;
var cljs$core$async$state_machine__16978__auto____0 = (function (){
var statearr_19065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19065[(0)] = cljs$core$async$state_machine__16978__auto__);

(statearr_19065[(1)] = (1));

return statearr_19065;
});
var cljs$core$async$state_machine__16978__auto____1 = (function (state_18991){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_18991);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e19068){var ex__16981__auto__ = e19068;
var statearr_19069_20559 = state_18991;
(statearr_19069_20559[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_18991[(4)]))){
var statearr_19072_20560 = state_18991;
(statearr_19072_20560[(1)] = cljs.core.first((state_18991[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20562 = state_18991;
state_18991 = G__20562;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$state_machine__16978__auto__ = function(state_18991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16978__auto____1.call(this,state_18991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16978__auto____0;
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16978__auto____1;
return cljs$core$async$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_19075 = f__17410__auto__();
(statearr_19075[(6)] = c__17409__auto___20517);

return statearr_19075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19079 = arguments.length;
switch (G__19079) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19085 = arguments.length;
switch (G__19085) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19095 = arguments.length;
switch (G__19095) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17409__auto___20571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_19163){
var state_val_19164 = (state_19163[(1)]);
if((state_val_19164 === (7))){
var state_19163__$1 = state_19163;
var statearr_19190_20572 = state_19163__$1;
(statearr_19190_20572[(2)] = null);

(statearr_19190_20572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (1))){
var state_19163__$1 = state_19163;
var statearr_19199_20573 = state_19163__$1;
(statearr_19199_20573[(2)] = null);

(statearr_19199_20573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (4))){
var inst_19111 = (state_19163[(7)]);
var inst_19112 = (state_19163[(8)]);
var inst_19114 = (inst_19112 < inst_19111);
var state_19163__$1 = state_19163;
if(cljs.core.truth_(inst_19114)){
var statearr_19213_20574 = state_19163__$1;
(statearr_19213_20574[(1)] = (6));

} else {
var statearr_19215_20575 = state_19163__$1;
(statearr_19215_20575[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (15))){
var inst_19143 = (state_19163[(9)]);
var inst_19149 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19143);
var state_19163__$1 = state_19163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19163__$1,(17),out,inst_19149);
} else {
if((state_val_19164 === (13))){
var inst_19143 = (state_19163[(9)]);
var inst_19143__$1 = (state_19163[(2)]);
var inst_19144 = cljs.core.some(cljs.core.nil_QMARK_,inst_19143__$1);
var state_19163__$1 = (function (){var statearr_19216 = state_19163;
(statearr_19216[(9)] = inst_19143__$1);

return statearr_19216;
})();
if(cljs.core.truth_(inst_19144)){
var statearr_19220_20576 = state_19163__$1;
(statearr_19220_20576[(1)] = (14));

} else {
var statearr_19222_20577 = state_19163__$1;
(statearr_19222_20577[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (6))){
var state_19163__$1 = state_19163;
var statearr_19229_20578 = state_19163__$1;
(statearr_19229_20578[(2)] = null);

(statearr_19229_20578[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (17))){
var inst_19151 = (state_19163[(2)]);
var state_19163__$1 = (function (){var statearr_19233 = state_19163;
(statearr_19233[(10)] = inst_19151);

return statearr_19233;
})();
var statearr_19234_20579 = state_19163__$1;
(statearr_19234_20579[(2)] = null);

(statearr_19234_20579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (3))){
var inst_19157 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19163__$1,inst_19157);
} else {
if((state_val_19164 === (12))){
var _ = (function (){var statearr_19237 = state_19163;
(statearr_19237[(4)] = cljs.core.rest((state_19163[(4)])));

return statearr_19237;
})();
var state_19163__$1 = state_19163;
var ex19232 = (state_19163__$1[(2)]);
var statearr_19241_20585 = state_19163__$1;
(statearr_19241_20585[(5)] = ex19232);


if((ex19232 instanceof Object)){
var statearr_19246_20586 = state_19163__$1;
(statearr_19246_20586[(1)] = (11));

(statearr_19246_20586[(5)] = null);

} else {
throw ex19232;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (2))){
var inst_19110 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19111 = cnt;
var inst_19112 = (0);
var state_19163__$1 = (function (){var statearr_19249 = state_19163;
(statearr_19249[(11)] = inst_19110);

(statearr_19249[(7)] = inst_19111);

(statearr_19249[(8)] = inst_19112);

return statearr_19249;
})();
var statearr_19250_20587 = state_19163__$1;
(statearr_19250_20587[(2)] = null);

(statearr_19250_20587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (11))){
var inst_19119 = (state_19163[(2)]);
var inst_19122 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19163__$1 = (function (){var statearr_19251 = state_19163;
(statearr_19251[(12)] = inst_19119);

return statearr_19251;
})();
var statearr_19253_20588 = state_19163__$1;
(statearr_19253_20588[(2)] = inst_19122);

(statearr_19253_20588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (9))){
var inst_19112 = (state_19163[(8)]);
var _ = (function (){var statearr_19254 = state_19163;
(statearr_19254[(4)] = cljs.core.cons((12),(state_19163[(4)])));

return statearr_19254;
})();
var inst_19129 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19112) : chs__$1.call(null,inst_19112));
var inst_19130 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19112) : done.call(null,inst_19112));
var inst_19131 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19129,inst_19130);
var ___$1 = (function (){var statearr_19257 = state_19163;
(statearr_19257[(4)] = cljs.core.rest((state_19163[(4)])));

return statearr_19257;
})();
var state_19163__$1 = state_19163;
var statearr_19259_20589 = state_19163__$1;
(statearr_19259_20589[(2)] = inst_19131);

(statearr_19259_20589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (5))){
var inst_19141 = (state_19163[(2)]);
var state_19163__$1 = (function (){var statearr_19260 = state_19163;
(statearr_19260[(13)] = inst_19141);

return statearr_19260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19163__$1,(13),dchan);
} else {
if((state_val_19164 === (14))){
var inst_19147 = cljs.core.async.close_BANG_(out);
var state_19163__$1 = state_19163;
var statearr_19263_20591 = state_19163__$1;
(statearr_19263_20591[(2)] = inst_19147);

(statearr_19263_20591[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (16))){
var inst_19155 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
var statearr_19264_20592 = state_19163__$1;
(statearr_19264_20592[(2)] = inst_19155);

(statearr_19264_20592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (10))){
var inst_19112 = (state_19163[(8)]);
var inst_19134 = (state_19163[(2)]);
var inst_19135 = (inst_19112 + (1));
var inst_19112__$1 = inst_19135;
var state_19163__$1 = (function (){var statearr_19265 = state_19163;
(statearr_19265[(14)] = inst_19134);

(statearr_19265[(8)] = inst_19112__$1);

return statearr_19265;
})();
var statearr_19266_20593 = state_19163__$1;
(statearr_19266_20593[(2)] = null);

(statearr_19266_20593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19164 === (8))){
var inst_19139 = (state_19163[(2)]);
var state_19163__$1 = state_19163;
var statearr_19269_20594 = state_19163__$1;
(statearr_19269_20594[(2)] = inst_19139);

(statearr_19269_20594[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16978__auto__ = null;
var cljs$core$async$state_machine__16978__auto____0 = (function (){
var statearr_19274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19274[(0)] = cljs$core$async$state_machine__16978__auto__);

(statearr_19274[(1)] = (1));

return statearr_19274;
});
var cljs$core$async$state_machine__16978__auto____1 = (function (state_19163){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_19163);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e19275){var ex__16981__auto__ = e19275;
var statearr_19276_20599 = state_19163;
(statearr_19276_20599[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_19163[(4)]))){
var statearr_19278_20600 = state_19163;
(statearr_19278_20600[(1)] = cljs.core.first((state_19163[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20601 = state_19163;
state_19163 = G__20601;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$state_machine__16978__auto__ = function(state_19163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16978__auto____1.call(this,state_19163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16978__auto____0;
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16978__auto____1;
return cljs$core$async$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_19281 = f__17410__auto__();
(statearr_19281[(6)] = c__17409__auto___20571);

return statearr_19281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19304 = arguments.length;
switch (G__19304) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17409__auto___20604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_19337){
var state_val_19338 = (state_19337[(1)]);
if((state_val_19338 === (7))){
var inst_19315 = (state_19337[(7)]);
var inst_19316 = (state_19337[(8)]);
var inst_19315__$1 = (state_19337[(2)]);
var inst_19316__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19315__$1,(0),null);
var inst_19318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19315__$1,(1),null);
var inst_19319 = (inst_19316__$1 == null);
var state_19337__$1 = (function (){var statearr_19339 = state_19337;
(statearr_19339[(9)] = inst_19318);

(statearr_19339[(7)] = inst_19315__$1);

(statearr_19339[(8)] = inst_19316__$1);

return statearr_19339;
})();
if(cljs.core.truth_(inst_19319)){
var statearr_19340_20608 = state_19337__$1;
(statearr_19340_20608[(1)] = (8));

} else {
var statearr_19341_20609 = state_19337__$1;
(statearr_19341_20609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (1))){
var inst_19305 = cljs.core.vec(chs);
var inst_19306 = inst_19305;
var state_19337__$1 = (function (){var statearr_19343 = state_19337;
(statearr_19343[(10)] = inst_19306);

return statearr_19343;
})();
var statearr_19344_20610 = state_19337__$1;
(statearr_19344_20610[(2)] = null);

(statearr_19344_20610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (4))){
var inst_19306 = (state_19337[(10)]);
var state_19337__$1 = state_19337;
return cljs.core.async.ioc_alts_BANG_(state_19337__$1,(7),inst_19306);
} else {
if((state_val_19338 === (6))){
var inst_19333 = (state_19337[(2)]);
var state_19337__$1 = state_19337;
var statearr_19346_20612 = state_19337__$1;
(statearr_19346_20612[(2)] = inst_19333);

(statearr_19346_20612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (3))){
var inst_19335 = (state_19337[(2)]);
var state_19337__$1 = state_19337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19337__$1,inst_19335);
} else {
if((state_val_19338 === (2))){
var inst_19306 = (state_19337[(10)]);
var inst_19308 = cljs.core.count(inst_19306);
var inst_19309 = (inst_19308 > (0));
var state_19337__$1 = state_19337;
if(cljs.core.truth_(inst_19309)){
var statearr_19356_20613 = state_19337__$1;
(statearr_19356_20613[(1)] = (4));

} else {
var statearr_19357_20614 = state_19337__$1;
(statearr_19357_20614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (11))){
var inst_19306 = (state_19337[(10)]);
var inst_19326 = (state_19337[(2)]);
var tmp19347 = inst_19306;
var inst_19306__$1 = tmp19347;
var state_19337__$1 = (function (){var statearr_19362 = state_19337;
(statearr_19362[(11)] = inst_19326);

(statearr_19362[(10)] = inst_19306__$1);

return statearr_19362;
})();
var statearr_19367_20618 = state_19337__$1;
(statearr_19367_20618[(2)] = null);

(statearr_19367_20618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (9))){
var inst_19316 = (state_19337[(8)]);
var state_19337__$1 = state_19337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19337__$1,(11),out,inst_19316);
} else {
if((state_val_19338 === (5))){
var inst_19331 = cljs.core.async.close_BANG_(out);
var state_19337__$1 = state_19337;
var statearr_19374_20620 = state_19337__$1;
(statearr_19374_20620[(2)] = inst_19331);

(statearr_19374_20620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (10))){
var inst_19329 = (state_19337[(2)]);
var state_19337__$1 = state_19337;
var statearr_19375_20621 = state_19337__$1;
(statearr_19375_20621[(2)] = inst_19329);

(statearr_19375_20621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19338 === (8))){
var inst_19318 = (state_19337[(9)]);
var inst_19315 = (state_19337[(7)]);
var inst_19316 = (state_19337[(8)]);
var inst_19306 = (state_19337[(10)]);
var inst_19321 = (function (){var cs = inst_19306;
var vec__19311 = inst_19315;
var v = inst_19316;
var c = inst_19318;
return (function (p1__19302_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19302_SHARP_);
});
})();
var inst_19322 = cljs.core.filterv(inst_19321,inst_19306);
var inst_19306__$1 = inst_19322;
var state_19337__$1 = (function (){var statearr_19377 = state_19337;
(statearr_19377[(10)] = inst_19306__$1);

return statearr_19377;
})();
var statearr_19378_20622 = state_19337__$1;
(statearr_19378_20622[(2)] = null);

(statearr_19378_20622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16978__auto__ = null;
var cljs$core$async$state_machine__16978__auto____0 = (function (){
var statearr_19380 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19380[(0)] = cljs$core$async$state_machine__16978__auto__);

(statearr_19380[(1)] = (1));

return statearr_19380;
});
var cljs$core$async$state_machine__16978__auto____1 = (function (state_19337){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_19337);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e19381){var ex__16981__auto__ = e19381;
var statearr_19383_20627 = state_19337;
(statearr_19383_20627[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_19337[(4)]))){
var statearr_19384_20628 = state_19337;
(statearr_19384_20628[(1)] = cljs.core.first((state_19337[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20629 = state_19337;
state_19337 = G__20629;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$state_machine__16978__auto__ = function(state_19337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16978__auto____1.call(this,state_19337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16978__auto____0;
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16978__auto____1;
return cljs$core$async$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_19386 = f__17410__auto__();
(statearr_19386[(6)] = c__17409__auto___20604);

return statearr_19386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19390 = arguments.length;
switch (G__19390) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17409__auto___20633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_19416){
var state_val_19417 = (state_19416[(1)]);
if((state_val_19417 === (7))){
var inst_19398 = (state_19416[(7)]);
var inst_19398__$1 = (state_19416[(2)]);
var inst_19399 = (inst_19398__$1 == null);
var inst_19400 = cljs.core.not(inst_19399);
var state_19416__$1 = (function (){var statearr_19418 = state_19416;
(statearr_19418[(7)] = inst_19398__$1);

return statearr_19418;
})();
if(inst_19400){
var statearr_19419_20634 = state_19416__$1;
(statearr_19419_20634[(1)] = (8));

} else {
var statearr_19420_20635 = state_19416__$1;
(statearr_19420_20635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (1))){
var inst_19392 = (0);
var state_19416__$1 = (function (){var statearr_19421 = state_19416;
(statearr_19421[(8)] = inst_19392);

return statearr_19421;
})();
var statearr_19422_20636 = state_19416__$1;
(statearr_19422_20636[(2)] = null);

(statearr_19422_20636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (4))){
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19416__$1,(7),ch);
} else {
if((state_val_19417 === (6))){
var inst_19411 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19423_20637 = state_19416__$1;
(statearr_19423_20637[(2)] = inst_19411);

(statearr_19423_20637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (3))){
var inst_19413 = (state_19416[(2)]);
var inst_19414 = cljs.core.async.close_BANG_(out);
var state_19416__$1 = (function (){var statearr_19424 = state_19416;
(statearr_19424[(9)] = inst_19413);

return statearr_19424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19416__$1,inst_19414);
} else {
if((state_val_19417 === (2))){
var inst_19392 = (state_19416[(8)]);
var inst_19394 = (inst_19392 < n);
var state_19416__$1 = state_19416;
if(cljs.core.truth_(inst_19394)){
var statearr_19425_20639 = state_19416__$1;
(statearr_19425_20639[(1)] = (4));

} else {
var statearr_19426_20640 = state_19416__$1;
(statearr_19426_20640[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (11))){
var inst_19392 = (state_19416[(8)]);
var inst_19403 = (state_19416[(2)]);
var inst_19404 = (inst_19392 + (1));
var inst_19392__$1 = inst_19404;
var state_19416__$1 = (function (){var statearr_19427 = state_19416;
(statearr_19427[(8)] = inst_19392__$1);

(statearr_19427[(10)] = inst_19403);

return statearr_19427;
})();
var statearr_19428_20641 = state_19416__$1;
(statearr_19428_20641[(2)] = null);

(statearr_19428_20641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (9))){
var state_19416__$1 = state_19416;
var statearr_19429_20642 = state_19416__$1;
(statearr_19429_20642[(2)] = null);

(statearr_19429_20642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (5))){
var state_19416__$1 = state_19416;
var statearr_19430_20643 = state_19416__$1;
(statearr_19430_20643[(2)] = null);

(statearr_19430_20643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (10))){
var inst_19408 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19431_20644 = state_19416__$1;
(statearr_19431_20644[(2)] = inst_19408);

(statearr_19431_20644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (8))){
var inst_19398 = (state_19416[(7)]);
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19416__$1,(11),out,inst_19398);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16978__auto__ = null;
var cljs$core$async$state_machine__16978__auto____0 = (function (){
var statearr_19432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19432[(0)] = cljs$core$async$state_machine__16978__auto__);

(statearr_19432[(1)] = (1));

return statearr_19432;
});
var cljs$core$async$state_machine__16978__auto____1 = (function (state_19416){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_19416);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e19433){var ex__16981__auto__ = e19433;
var statearr_19434_20649 = state_19416;
(statearr_19434_20649[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_19416[(4)]))){
var statearr_19435_20650 = state_19416;
(statearr_19435_20650[(1)] = cljs.core.first((state_19416[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20651 = state_19416;
state_19416 = G__20651;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$state_machine__16978__auto__ = function(state_19416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16978__auto____1.call(this,state_19416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16978__auto____0;
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16978__auto____1;
return cljs$core$async$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_19436 = f__17410__auto__();
(statearr_19436[(6)] = c__17409__auto___20633);

return statearr_19436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19441 = (function (f,ch,meta19439,_,fn1,meta19442){
this.f = f;
this.ch = ch;
this.meta19439 = meta19439;
this._ = _;
this.fn1 = fn1;
this.meta19442 = meta19442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19443,meta19442__$1){
var self__ = this;
var _19443__$1 = this;
return (new cljs.core.async.t_cljs$core$async19441(self__.f,self__.ch,self__.meta19439,self__._,self__.fn1,meta19442__$1));
}));

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19443){
var self__ = this;
var _19443__$1 = this;
return self__.meta19442;
}));

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19437_SHARP_){
var G__19444 = (((p1__19437_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19437_SHARP_) : self__.f.call(null,p1__19437_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19444) : f1.call(null,G__19444));
});
}));

(cljs.core.async.t_cljs$core$async19441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19439","meta19439",1639926580,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19438","cljs.core.async/t_cljs$core$async19438",-1385379530,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19442","meta19442",-104762907,null)], null);
}));

(cljs.core.async.t_cljs$core$async19441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19441");

(cljs.core.async.t_cljs$core$async19441.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19441.
 */
cljs.core.async.__GT_t_cljs$core$async19441 = (function cljs$core$async$__GT_t_cljs$core$async19441(f,ch,meta19439,_,fn1,meta19442){
return (new cljs.core.async.t_cljs$core$async19441(f,ch,meta19439,_,fn1,meta19442));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19438 = (function (f,ch,meta19439){
this.f = f;
this.ch = ch;
this.meta19439 = meta19439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19440,meta19439__$1){
var self__ = this;
var _19440__$1 = this;
return (new cljs.core.async.t_cljs$core$async19438(self__.f,self__.ch,meta19439__$1));
}));

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19440){
var self__ = this;
var _19440__$1 = this;
return self__.meta19439;
}));

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19441(self__.f,self__.ch,self__.meta19439,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19447 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19447) : self__.f.call(null,G__19447));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19439","meta19439",1639926580,null)], null);
}));

(cljs.core.async.t_cljs$core$async19438.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19438");

(cljs.core.async.t_cljs$core$async19438.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19438");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19438.
 */
cljs.core.async.__GT_t_cljs$core$async19438 = (function cljs$core$async$__GT_t_cljs$core$async19438(f,ch,meta19439){
return (new cljs.core.async.t_cljs$core$async19438(f,ch,meta19439));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19438(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19448 = (function (f,ch,meta19449){
this.f = f;
this.ch = ch;
this.meta19449 = meta19449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19450,meta19449__$1){
var self__ = this;
var _19450__$1 = this;
return (new cljs.core.async.t_cljs$core$async19448(self__.f,self__.ch,meta19449__$1));
}));

(cljs.core.async.t_cljs$core$async19448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19450){
var self__ = this;
var _19450__$1 = this;
return self__.meta19449;
}));

(cljs.core.async.t_cljs$core$async19448.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19448.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19448.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19448.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19448.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19448.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19449","meta19449",1524631280,null)], null);
}));

(cljs.core.async.t_cljs$core$async19448.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19448");

(cljs.core.async.t_cljs$core$async19448.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19448");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19448.
 */
cljs.core.async.__GT_t_cljs$core$async19448 = (function cljs$core$async$__GT_t_cljs$core$async19448(f,ch,meta19449){
return (new cljs.core.async.t_cljs$core$async19448(f,ch,meta19449));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19448(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19451 = (function (p,ch,meta19452){
this.p = p;
this.ch = ch;
this.meta19452 = meta19452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19453,meta19452__$1){
var self__ = this;
var _19453__$1 = this;
return (new cljs.core.async.t_cljs$core$async19451(self__.p,self__.ch,meta19452__$1));
}));

(cljs.core.async.t_cljs$core$async19451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19453){
var self__ = this;
var _19453__$1 = this;
return self__.meta19452;
}));

(cljs.core.async.t_cljs$core$async19451.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19451.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19451.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19451.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19452","meta19452",-31810925,null)], null);
}));

(cljs.core.async.t_cljs$core$async19451.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19451");

(cljs.core.async.t_cljs$core$async19451.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19451");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19451.
 */
cljs.core.async.__GT_t_cljs$core$async19451 = (function cljs$core$async$__GT_t_cljs$core$async19451(p,ch,meta19452){
return (new cljs.core.async.t_cljs$core$async19451(p,ch,meta19452));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19451(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19457 = arguments.length;
switch (G__19457) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17409__auto___20670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_19480){
var state_val_19481 = (state_19480[(1)]);
if((state_val_19481 === (7))){
var inst_19476 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19482_20671 = state_19480__$1;
(statearr_19482_20671[(2)] = inst_19476);

(statearr_19482_20671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (1))){
var state_19480__$1 = state_19480;
var statearr_19483_20672 = state_19480__$1;
(statearr_19483_20672[(2)] = null);

(statearr_19483_20672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (4))){
var inst_19462 = (state_19480[(7)]);
var inst_19462__$1 = (state_19480[(2)]);
var inst_19463 = (inst_19462__$1 == null);
var state_19480__$1 = (function (){var statearr_19486 = state_19480;
(statearr_19486[(7)] = inst_19462__$1);

return statearr_19486;
})();
if(cljs.core.truth_(inst_19463)){
var statearr_19487_20673 = state_19480__$1;
(statearr_19487_20673[(1)] = (5));

} else {
var statearr_19489_20674 = state_19480__$1;
(statearr_19489_20674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (6))){
var inst_19462 = (state_19480[(7)]);
var inst_19467 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19462) : p.call(null,inst_19462));
var state_19480__$1 = state_19480;
if(cljs.core.truth_(inst_19467)){
var statearr_19493_20677 = state_19480__$1;
(statearr_19493_20677[(1)] = (8));

} else {
var statearr_19494_20678 = state_19480__$1;
(statearr_19494_20678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (3))){
var inst_19478 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19480__$1,inst_19478);
} else {
if((state_val_19481 === (2))){
var state_19480__$1 = state_19480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19480__$1,(4),ch);
} else {
if((state_val_19481 === (11))){
var inst_19470 = (state_19480[(2)]);
var state_19480__$1 = state_19480;
var statearr_19497_20682 = state_19480__$1;
(statearr_19497_20682[(2)] = inst_19470);

(statearr_19497_20682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (9))){
var state_19480__$1 = state_19480;
var statearr_19498_20684 = state_19480__$1;
(statearr_19498_20684[(2)] = null);

(statearr_19498_20684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (5))){
var inst_19465 = cljs.core.async.close_BANG_(out);
var state_19480__$1 = state_19480;
var statearr_19499_20685 = state_19480__$1;
(statearr_19499_20685[(2)] = inst_19465);

(statearr_19499_20685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (10))){
var inst_19473 = (state_19480[(2)]);
var state_19480__$1 = (function (){var statearr_19500 = state_19480;
(statearr_19500[(8)] = inst_19473);

return statearr_19500;
})();
var statearr_19501_20693 = state_19480__$1;
(statearr_19501_20693[(2)] = null);

(statearr_19501_20693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19481 === (8))){
var inst_19462 = (state_19480[(7)]);
var state_19480__$1 = state_19480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19480__$1,(11),out,inst_19462);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16978__auto__ = null;
var cljs$core$async$state_machine__16978__auto____0 = (function (){
var statearr_19511 = [null,null,null,null,null,null,null,null,null];
(statearr_19511[(0)] = cljs$core$async$state_machine__16978__auto__);

(statearr_19511[(1)] = (1));

return statearr_19511;
});
var cljs$core$async$state_machine__16978__auto____1 = (function (state_19480){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_19480);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e19517){var ex__16981__auto__ = e19517;
var statearr_19518_20694 = state_19480;
(statearr_19518_20694[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_19480[(4)]))){
var statearr_19519_20695 = state_19480;
(statearr_19519_20695[(1)] = cljs.core.first((state_19480[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20709 = state_19480;
state_19480 = G__20709;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$state_machine__16978__auto__ = function(state_19480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16978__auto____1.call(this,state_19480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16978__auto____0;
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16978__auto____1;
return cljs$core$async$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_19520 = f__17410__auto__();
(statearr_19520[(6)] = c__17409__auto___20670);

return statearr_19520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19522 = arguments.length;
switch (G__19522) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_19587){
var state_val_19588 = (state_19587[(1)]);
if((state_val_19588 === (7))){
var inst_19583 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
var statearr_19590_20720 = state_19587__$1;
(statearr_19590_20720[(2)] = inst_19583);

(statearr_19590_20720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (20))){
var inst_19553 = (state_19587[(7)]);
var inst_19564 = (state_19587[(2)]);
var inst_19565 = cljs.core.next(inst_19553);
var inst_19539 = inst_19565;
var inst_19540 = null;
var inst_19541 = (0);
var inst_19542 = (0);
var state_19587__$1 = (function (){var statearr_19591 = state_19587;
(statearr_19591[(8)] = inst_19564);

(statearr_19591[(9)] = inst_19539);

(statearr_19591[(10)] = inst_19542);

(statearr_19591[(11)] = inst_19540);

(statearr_19591[(12)] = inst_19541);

return statearr_19591;
})();
var statearr_19592_20731 = state_19587__$1;
(statearr_19592_20731[(2)] = null);

(statearr_19592_20731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (1))){
var state_19587__$1 = state_19587;
var statearr_19593_20732 = state_19587__$1;
(statearr_19593_20732[(2)] = null);

(statearr_19593_20732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (4))){
var inst_19528 = (state_19587[(13)]);
var inst_19528__$1 = (state_19587[(2)]);
var inst_19529 = (inst_19528__$1 == null);
var state_19587__$1 = (function (){var statearr_19594 = state_19587;
(statearr_19594[(13)] = inst_19528__$1);

return statearr_19594;
})();
if(cljs.core.truth_(inst_19529)){
var statearr_19595_20733 = state_19587__$1;
(statearr_19595_20733[(1)] = (5));

} else {
var statearr_19596_20734 = state_19587__$1;
(statearr_19596_20734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (15))){
var state_19587__$1 = state_19587;
var statearr_19600_20735 = state_19587__$1;
(statearr_19600_20735[(2)] = null);

(statearr_19600_20735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (21))){
var state_19587__$1 = state_19587;
var statearr_19601_20736 = state_19587__$1;
(statearr_19601_20736[(2)] = null);

(statearr_19601_20736[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (13))){
var inst_19539 = (state_19587[(9)]);
var inst_19542 = (state_19587[(10)]);
var inst_19540 = (state_19587[(11)]);
var inst_19541 = (state_19587[(12)]);
var inst_19549 = (state_19587[(2)]);
var inst_19550 = (inst_19542 + (1));
var tmp19597 = inst_19539;
var tmp19598 = inst_19540;
var tmp19599 = inst_19541;
var inst_19539__$1 = tmp19597;
var inst_19540__$1 = tmp19598;
var inst_19541__$1 = tmp19599;
var inst_19542__$1 = inst_19550;
var state_19587__$1 = (function (){var statearr_19603 = state_19587;
(statearr_19603[(9)] = inst_19539__$1);

(statearr_19603[(10)] = inst_19542__$1);

(statearr_19603[(11)] = inst_19540__$1);

(statearr_19603[(12)] = inst_19541__$1);

(statearr_19603[(14)] = inst_19549);

return statearr_19603;
})();
var statearr_19605_20737 = state_19587__$1;
(statearr_19605_20737[(2)] = null);

(statearr_19605_20737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (22))){
var state_19587__$1 = state_19587;
var statearr_19606_20738 = state_19587__$1;
(statearr_19606_20738[(2)] = null);

(statearr_19606_20738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (6))){
var inst_19528 = (state_19587[(13)]);
var inst_19537 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19528) : f.call(null,inst_19528));
var inst_19538 = cljs.core.seq(inst_19537);
var inst_19539 = inst_19538;
var inst_19540 = null;
var inst_19541 = (0);
var inst_19542 = (0);
var state_19587__$1 = (function (){var statearr_19607 = state_19587;
(statearr_19607[(9)] = inst_19539);

(statearr_19607[(10)] = inst_19542);

(statearr_19607[(11)] = inst_19540);

(statearr_19607[(12)] = inst_19541);

return statearr_19607;
})();
var statearr_19608_20739 = state_19587__$1;
(statearr_19608_20739[(2)] = null);

(statearr_19608_20739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (17))){
var inst_19553 = (state_19587[(7)]);
var inst_19557 = cljs.core.chunk_first(inst_19553);
var inst_19558 = cljs.core.chunk_rest(inst_19553);
var inst_19559 = cljs.core.count(inst_19557);
var inst_19539 = inst_19558;
var inst_19540 = inst_19557;
var inst_19541 = inst_19559;
var inst_19542 = (0);
var state_19587__$1 = (function (){var statearr_19609 = state_19587;
(statearr_19609[(9)] = inst_19539);

(statearr_19609[(10)] = inst_19542);

(statearr_19609[(11)] = inst_19540);

(statearr_19609[(12)] = inst_19541);

return statearr_19609;
})();
var statearr_19610_20740 = state_19587__$1;
(statearr_19610_20740[(2)] = null);

(statearr_19610_20740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (3))){
var inst_19585 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19587__$1,inst_19585);
} else {
if((state_val_19588 === (12))){
var inst_19573 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
var statearr_19611_20741 = state_19587__$1;
(statearr_19611_20741[(2)] = inst_19573);

(statearr_19611_20741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (2))){
var state_19587__$1 = state_19587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19587__$1,(4),in$);
} else {
if((state_val_19588 === (23))){
var inst_19581 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
var statearr_19612_20742 = state_19587__$1;
(statearr_19612_20742[(2)] = inst_19581);

(statearr_19612_20742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (19))){
var inst_19568 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
var statearr_19613_20743 = state_19587__$1;
(statearr_19613_20743[(2)] = inst_19568);

(statearr_19613_20743[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (11))){
var inst_19539 = (state_19587[(9)]);
var inst_19553 = (state_19587[(7)]);
var inst_19553__$1 = cljs.core.seq(inst_19539);
var state_19587__$1 = (function (){var statearr_19614 = state_19587;
(statearr_19614[(7)] = inst_19553__$1);

return statearr_19614;
})();
if(inst_19553__$1){
var statearr_19615_20750 = state_19587__$1;
(statearr_19615_20750[(1)] = (14));

} else {
var statearr_19616_20751 = state_19587__$1;
(statearr_19616_20751[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (9))){
var inst_19575 = (state_19587[(2)]);
var inst_19576 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19587__$1 = (function (){var statearr_19617 = state_19587;
(statearr_19617[(15)] = inst_19575);

return statearr_19617;
})();
if(cljs.core.truth_(inst_19576)){
var statearr_19618_20752 = state_19587__$1;
(statearr_19618_20752[(1)] = (21));

} else {
var statearr_19619_20753 = state_19587__$1;
(statearr_19619_20753[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (5))){
var inst_19531 = cljs.core.async.close_BANG_(out);
var state_19587__$1 = state_19587;
var statearr_19620_20754 = state_19587__$1;
(statearr_19620_20754[(2)] = inst_19531);

(statearr_19620_20754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (14))){
var inst_19553 = (state_19587[(7)]);
var inst_19555 = cljs.core.chunked_seq_QMARK_(inst_19553);
var state_19587__$1 = state_19587;
if(inst_19555){
var statearr_19621_20755 = state_19587__$1;
(statearr_19621_20755[(1)] = (17));

} else {
var statearr_19622_20756 = state_19587__$1;
(statearr_19622_20756[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (16))){
var inst_19571 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
var statearr_19623_20757 = state_19587__$1;
(statearr_19623_20757[(2)] = inst_19571);

(statearr_19623_20757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (10))){
var inst_19542 = (state_19587[(10)]);
var inst_19540 = (state_19587[(11)]);
var inst_19547 = cljs.core._nth(inst_19540,inst_19542);
var state_19587__$1 = state_19587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19587__$1,(13),out,inst_19547);
} else {
if((state_val_19588 === (18))){
var inst_19553 = (state_19587[(7)]);
var inst_19562 = cljs.core.first(inst_19553);
var state_19587__$1 = state_19587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19587__$1,(20),out,inst_19562);
} else {
if((state_val_19588 === (8))){
var inst_19542 = (state_19587[(10)]);
var inst_19541 = (state_19587[(12)]);
var inst_19544 = (inst_19542 < inst_19541);
var inst_19545 = inst_19544;
var state_19587__$1 = state_19587;
if(cljs.core.truth_(inst_19545)){
var statearr_19624_20758 = state_19587__$1;
(statearr_19624_20758[(1)] = (10));

} else {
var statearr_19625_20759 = state_19587__$1;
(statearr_19625_20759[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16978__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16978__auto____0 = (function (){
var statearr_19626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19626[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16978__auto__);

(statearr_19626[(1)] = (1));

return statearr_19626;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16978__auto____1 = (function (state_19587){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_19587);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e19627){var ex__16981__auto__ = e19627;
var statearr_19628_20760 = state_19587;
(statearr_19628_20760[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_19587[(4)]))){
var statearr_19629_20761 = state_19587;
(statearr_19629_20761[(1)] = cljs.core.first((state_19587[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20762 = state_19587;
state_19587 = G__20762;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16978__auto__ = function(state_19587){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16978__auto____1.call(this,state_19587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16978__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16978__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_19630 = f__17410__auto__();
(statearr_19630[(6)] = c__17409__auto__);

return statearr_19630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));

return c__17409__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19632 = arguments.length;
switch (G__19632) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19635 = arguments.length;
switch (G__19635) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19637 = arguments.length;
switch (G__19637) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17409__auto___20778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_19661){
var state_val_19662 = (state_19661[(1)]);
if((state_val_19662 === (7))){
var inst_19656 = (state_19661[(2)]);
var state_19661__$1 = state_19661;
var statearr_19663_20779 = state_19661__$1;
(statearr_19663_20779[(2)] = inst_19656);

(statearr_19663_20779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (1))){
var inst_19638 = null;
var state_19661__$1 = (function (){var statearr_19664 = state_19661;
(statearr_19664[(7)] = inst_19638);

return statearr_19664;
})();
var statearr_19665_20780 = state_19661__$1;
(statearr_19665_20780[(2)] = null);

(statearr_19665_20780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (4))){
var inst_19641 = (state_19661[(8)]);
var inst_19641__$1 = (state_19661[(2)]);
var inst_19642 = (inst_19641__$1 == null);
var inst_19643 = cljs.core.not(inst_19642);
var state_19661__$1 = (function (){var statearr_19666 = state_19661;
(statearr_19666[(8)] = inst_19641__$1);

return statearr_19666;
})();
if(inst_19643){
var statearr_19667_20782 = state_19661__$1;
(statearr_19667_20782[(1)] = (5));

} else {
var statearr_19668_20783 = state_19661__$1;
(statearr_19668_20783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (6))){
var state_19661__$1 = state_19661;
var statearr_19669_20784 = state_19661__$1;
(statearr_19669_20784[(2)] = null);

(statearr_19669_20784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (3))){
var inst_19658 = (state_19661[(2)]);
var inst_19659 = cljs.core.async.close_BANG_(out);
var state_19661__$1 = (function (){var statearr_19670 = state_19661;
(statearr_19670[(9)] = inst_19658);

return statearr_19670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19661__$1,inst_19659);
} else {
if((state_val_19662 === (2))){
var state_19661__$1 = state_19661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19661__$1,(4),ch);
} else {
if((state_val_19662 === (11))){
var inst_19641 = (state_19661[(8)]);
var inst_19650 = (state_19661[(2)]);
var inst_19638 = inst_19641;
var state_19661__$1 = (function (){var statearr_19671 = state_19661;
(statearr_19671[(7)] = inst_19638);

(statearr_19671[(10)] = inst_19650);

return statearr_19671;
})();
var statearr_19672_20785 = state_19661__$1;
(statearr_19672_20785[(2)] = null);

(statearr_19672_20785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (9))){
var inst_19641 = (state_19661[(8)]);
var state_19661__$1 = state_19661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19661__$1,(11),out,inst_19641);
} else {
if((state_val_19662 === (5))){
var inst_19638 = (state_19661[(7)]);
var inst_19641 = (state_19661[(8)]);
var inst_19645 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19641,inst_19638);
var state_19661__$1 = state_19661;
if(inst_19645){
var statearr_19674_20786 = state_19661__$1;
(statearr_19674_20786[(1)] = (8));

} else {
var statearr_19675_20787 = state_19661__$1;
(statearr_19675_20787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (10))){
var inst_19653 = (state_19661[(2)]);
var state_19661__$1 = state_19661;
var statearr_19676_20788 = state_19661__$1;
(statearr_19676_20788[(2)] = inst_19653);

(statearr_19676_20788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19662 === (8))){
var inst_19638 = (state_19661[(7)]);
var tmp19673 = inst_19638;
var inst_19638__$1 = tmp19673;
var state_19661__$1 = (function (){var statearr_19677 = state_19661;
(statearr_19677[(7)] = inst_19638__$1);

return statearr_19677;
})();
var statearr_19678_20789 = state_19661__$1;
(statearr_19678_20789[(2)] = null);

(statearr_19678_20789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16978__auto__ = null;
var cljs$core$async$state_machine__16978__auto____0 = (function (){
var statearr_19679 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19679[(0)] = cljs$core$async$state_machine__16978__auto__);

(statearr_19679[(1)] = (1));

return statearr_19679;
});
var cljs$core$async$state_machine__16978__auto____1 = (function (state_19661){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_19661);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e19680){var ex__16981__auto__ = e19680;
var statearr_19681_20790 = state_19661;
(statearr_19681_20790[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_19661[(4)]))){
var statearr_19682_20791 = state_19661;
(statearr_19682_20791[(1)] = cljs.core.first((state_19661[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20792 = state_19661;
state_19661 = G__20792;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$state_machine__16978__auto__ = function(state_19661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16978__auto____1.call(this,state_19661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16978__auto____0;
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16978__auto____1;
return cljs$core$async$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_19683 = f__17410__auto__();
(statearr_19683[(6)] = c__17409__auto___20778);

return statearr_19683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19685 = arguments.length;
switch (G__19685) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17409__auto___20795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_19723){
var state_val_19724 = (state_19723[(1)]);
if((state_val_19724 === (7))){
var inst_19719 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19725_20798 = state_19723__$1;
(statearr_19725_20798[(2)] = inst_19719);

(statearr_19725_20798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (1))){
var inst_19686 = (new Array(n));
var inst_19687 = inst_19686;
var inst_19688 = (0);
var state_19723__$1 = (function (){var statearr_19726 = state_19723;
(statearr_19726[(7)] = inst_19688);

(statearr_19726[(8)] = inst_19687);

return statearr_19726;
})();
var statearr_19727_20800 = state_19723__$1;
(statearr_19727_20800[(2)] = null);

(statearr_19727_20800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (4))){
var inst_19691 = (state_19723[(9)]);
var inst_19691__$1 = (state_19723[(2)]);
var inst_19692 = (inst_19691__$1 == null);
var inst_19693 = cljs.core.not(inst_19692);
var state_19723__$1 = (function (){var statearr_19728 = state_19723;
(statearr_19728[(9)] = inst_19691__$1);

return statearr_19728;
})();
if(inst_19693){
var statearr_19729_20801 = state_19723__$1;
(statearr_19729_20801[(1)] = (5));

} else {
var statearr_19730_20802 = state_19723__$1;
(statearr_19730_20802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (15))){
var inst_19713 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19731_20803 = state_19723__$1;
(statearr_19731_20803[(2)] = inst_19713);

(statearr_19731_20803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (13))){
var state_19723__$1 = state_19723;
var statearr_19732_20804 = state_19723__$1;
(statearr_19732_20804[(2)] = null);

(statearr_19732_20804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (6))){
var inst_19688 = (state_19723[(7)]);
var inst_19709 = (inst_19688 > (0));
var state_19723__$1 = state_19723;
if(cljs.core.truth_(inst_19709)){
var statearr_19733_20805 = state_19723__$1;
(statearr_19733_20805[(1)] = (12));

} else {
var statearr_19734_20806 = state_19723__$1;
(statearr_19734_20806[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (3))){
var inst_19721 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19723__$1,inst_19721);
} else {
if((state_val_19724 === (12))){
var inst_19687 = (state_19723[(8)]);
var inst_19711 = cljs.core.vec(inst_19687);
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19723__$1,(15),out,inst_19711);
} else {
if((state_val_19724 === (2))){
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19723__$1,(4),ch);
} else {
if((state_val_19724 === (11))){
var inst_19703 = (state_19723[(2)]);
var inst_19704 = (new Array(n));
var inst_19687 = inst_19704;
var inst_19688 = (0);
var state_19723__$1 = (function (){var statearr_19735 = state_19723;
(statearr_19735[(10)] = inst_19703);

(statearr_19735[(7)] = inst_19688);

(statearr_19735[(8)] = inst_19687);

return statearr_19735;
})();
var statearr_19736_20809 = state_19723__$1;
(statearr_19736_20809[(2)] = null);

(statearr_19736_20809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (9))){
var inst_19687 = (state_19723[(8)]);
var inst_19701 = cljs.core.vec(inst_19687);
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19723__$1,(11),out,inst_19701);
} else {
if((state_val_19724 === (5))){
var inst_19688 = (state_19723[(7)]);
var inst_19687 = (state_19723[(8)]);
var inst_19691 = (state_19723[(9)]);
var inst_19696 = (state_19723[(11)]);
var inst_19695 = (inst_19687[inst_19688] = inst_19691);
var inst_19696__$1 = (inst_19688 + (1));
var inst_19697 = (inst_19696__$1 < n);
var state_19723__$1 = (function (){var statearr_19737 = state_19723;
(statearr_19737[(12)] = inst_19695);

(statearr_19737[(11)] = inst_19696__$1);

return statearr_19737;
})();
if(cljs.core.truth_(inst_19697)){
var statearr_19738_20811 = state_19723__$1;
(statearr_19738_20811[(1)] = (8));

} else {
var statearr_19739_20812 = state_19723__$1;
(statearr_19739_20812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (14))){
var inst_19716 = (state_19723[(2)]);
var inst_19717 = cljs.core.async.close_BANG_(out);
var state_19723__$1 = (function (){var statearr_19743 = state_19723;
(statearr_19743[(13)] = inst_19716);

return statearr_19743;
})();
var statearr_19744_20815 = state_19723__$1;
(statearr_19744_20815[(2)] = inst_19717);

(statearr_19744_20815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (10))){
var inst_19707 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19745_20820 = state_19723__$1;
(statearr_19745_20820[(2)] = inst_19707);

(statearr_19745_20820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (8))){
var inst_19687 = (state_19723[(8)]);
var inst_19696 = (state_19723[(11)]);
var tmp19740 = inst_19687;
var inst_19687__$1 = tmp19740;
var inst_19688 = inst_19696;
var state_19723__$1 = (function (){var statearr_19746 = state_19723;
(statearr_19746[(7)] = inst_19688);

(statearr_19746[(8)] = inst_19687__$1);

return statearr_19746;
})();
var statearr_19747_20821 = state_19723__$1;
(statearr_19747_20821[(2)] = null);

(statearr_19747_20821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16978__auto__ = null;
var cljs$core$async$state_machine__16978__auto____0 = (function (){
var statearr_19748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19748[(0)] = cljs$core$async$state_machine__16978__auto__);

(statearr_19748[(1)] = (1));

return statearr_19748;
});
var cljs$core$async$state_machine__16978__auto____1 = (function (state_19723){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_19723);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e19749){var ex__16981__auto__ = e19749;
var statearr_19750_20822 = state_19723;
(statearr_19750_20822[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_19723[(4)]))){
var statearr_19751_20823 = state_19723;
(statearr_19751_20823[(1)] = cljs.core.first((state_19723[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20826 = state_19723;
state_19723 = G__20826;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$state_machine__16978__auto__ = function(state_19723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16978__auto____1.call(this,state_19723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16978__auto____0;
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16978__auto____1;
return cljs$core$async$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_19752 = f__17410__auto__();
(statearr_19752[(6)] = c__17409__auto___20795);

return statearr_19752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19754 = arguments.length;
switch (G__19754) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17409__auto___20832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_19799){
var state_val_19800 = (state_19799[(1)]);
if((state_val_19800 === (7))){
var inst_19795 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
var statearr_19805_20833 = state_19799__$1;
(statearr_19805_20833[(2)] = inst_19795);

(statearr_19805_20833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (1))){
var inst_19755 = [];
var inst_19756 = inst_19755;
var inst_19757 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19799__$1 = (function (){var statearr_19807 = state_19799;
(statearr_19807[(7)] = inst_19757);

(statearr_19807[(8)] = inst_19756);

return statearr_19807;
})();
var statearr_19808_20834 = state_19799__$1;
(statearr_19808_20834[(2)] = null);

(statearr_19808_20834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (4))){
var inst_19760 = (state_19799[(9)]);
var inst_19760__$1 = (state_19799[(2)]);
var inst_19761 = (inst_19760__$1 == null);
var inst_19762 = cljs.core.not(inst_19761);
var state_19799__$1 = (function (){var statearr_19810 = state_19799;
(statearr_19810[(9)] = inst_19760__$1);

return statearr_19810;
})();
if(inst_19762){
var statearr_19811_20835 = state_19799__$1;
(statearr_19811_20835[(1)] = (5));

} else {
var statearr_19812_20836 = state_19799__$1;
(statearr_19812_20836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (15))){
var inst_19756 = (state_19799[(8)]);
var inst_19787 = cljs.core.vec(inst_19756);
var state_19799__$1 = state_19799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19799__$1,(18),out,inst_19787);
} else {
if((state_val_19800 === (13))){
var inst_19782 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
var statearr_19816_20840 = state_19799__$1;
(statearr_19816_20840[(2)] = inst_19782);

(statearr_19816_20840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (6))){
var inst_19756 = (state_19799[(8)]);
var inst_19784 = inst_19756.length;
var inst_19785 = (inst_19784 > (0));
var state_19799__$1 = state_19799;
if(cljs.core.truth_(inst_19785)){
var statearr_19818_20841 = state_19799__$1;
(statearr_19818_20841[(1)] = (15));

} else {
var statearr_19819_20845 = state_19799__$1;
(statearr_19819_20845[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (17))){
var inst_19792 = (state_19799[(2)]);
var inst_19793 = cljs.core.async.close_BANG_(out);
var state_19799__$1 = (function (){var statearr_19822 = state_19799;
(statearr_19822[(10)] = inst_19792);

return statearr_19822;
})();
var statearr_19823_20846 = state_19799__$1;
(statearr_19823_20846[(2)] = inst_19793);

(statearr_19823_20846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (3))){
var inst_19797 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19799__$1,inst_19797);
} else {
if((state_val_19800 === (12))){
var inst_19756 = (state_19799[(8)]);
var inst_19775 = cljs.core.vec(inst_19756);
var state_19799__$1 = state_19799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19799__$1,(14),out,inst_19775);
} else {
if((state_val_19800 === (2))){
var state_19799__$1 = state_19799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19799__$1,(4),ch);
} else {
if((state_val_19800 === (11))){
var inst_19764 = (state_19799[(11)]);
var inst_19756 = (state_19799[(8)]);
var inst_19760 = (state_19799[(9)]);
var inst_19772 = inst_19756.push(inst_19760);
var tmp19824 = inst_19756;
var inst_19756__$1 = tmp19824;
var inst_19757 = inst_19764;
var state_19799__$1 = (function (){var statearr_19828 = state_19799;
(statearr_19828[(7)] = inst_19757);

(statearr_19828[(12)] = inst_19772);

(statearr_19828[(8)] = inst_19756__$1);

return statearr_19828;
})();
var statearr_19829_20847 = state_19799__$1;
(statearr_19829_20847[(2)] = null);

(statearr_19829_20847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (9))){
var inst_19757 = (state_19799[(7)]);
var inst_19768 = cljs.core.keyword_identical_QMARK_(inst_19757,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19799__$1 = state_19799;
var statearr_19832_20909 = state_19799__$1;
(statearr_19832_20909[(2)] = inst_19768);

(statearr_19832_20909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (5))){
var inst_19764 = (state_19799[(11)]);
var inst_19757 = (state_19799[(7)]);
var inst_19765 = (state_19799[(13)]);
var inst_19760 = (state_19799[(9)]);
var inst_19764__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19760) : f.call(null,inst_19760));
var inst_19765__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19764__$1,inst_19757);
var state_19799__$1 = (function (){var statearr_19834 = state_19799;
(statearr_19834[(11)] = inst_19764__$1);

(statearr_19834[(13)] = inst_19765__$1);

return statearr_19834;
})();
if(inst_19765__$1){
var statearr_19835_20988 = state_19799__$1;
(statearr_19835_20988[(1)] = (8));

} else {
var statearr_19837_20993 = state_19799__$1;
(statearr_19837_20993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (14))){
var inst_19764 = (state_19799[(11)]);
var inst_19760 = (state_19799[(9)]);
var inst_19777 = (state_19799[(2)]);
var inst_19778 = [];
var inst_19779 = inst_19778.push(inst_19760);
var inst_19756 = inst_19778;
var inst_19757 = inst_19764;
var state_19799__$1 = (function (){var statearr_19841 = state_19799;
(statearr_19841[(7)] = inst_19757);

(statearr_19841[(14)] = inst_19779);

(statearr_19841[(8)] = inst_19756);

(statearr_19841[(15)] = inst_19777);

return statearr_19841;
})();
var statearr_19842_20994 = state_19799__$1;
(statearr_19842_20994[(2)] = null);

(statearr_19842_20994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (16))){
var state_19799__$1 = state_19799;
var statearr_19844_20995 = state_19799__$1;
(statearr_19844_20995[(2)] = null);

(statearr_19844_20995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (10))){
var inst_19770 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
if(cljs.core.truth_(inst_19770)){
var statearr_19845_20996 = state_19799__$1;
(statearr_19845_20996[(1)] = (11));

} else {
var statearr_19847_20997 = state_19799__$1;
(statearr_19847_20997[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (18))){
var inst_19789 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
var statearr_19849_20998 = state_19799__$1;
(statearr_19849_20998[(2)] = inst_19789);

(statearr_19849_20998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (8))){
var inst_19765 = (state_19799[(13)]);
var state_19799__$1 = state_19799;
var statearr_19852_21003 = state_19799__$1;
(statearr_19852_21003[(2)] = inst_19765);

(statearr_19852_21003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__16978__auto__ = null;
var cljs$core$async$state_machine__16978__auto____0 = (function (){
var statearr_19854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19854[(0)] = cljs$core$async$state_machine__16978__auto__);

(statearr_19854[(1)] = (1));

return statearr_19854;
});
var cljs$core$async$state_machine__16978__auto____1 = (function (state_19799){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_19799);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e19856){var ex__16981__auto__ = e19856;
var statearr_19857_21012 = state_19799;
(statearr_19857_21012[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_19799[(4)]))){
var statearr_19858_21013 = state_19799;
(statearr_19858_21013[(1)] = cljs.core.first((state_19799[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21015 = state_19799;
state_19799 = G__21015;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
cljs$core$async$state_machine__16978__auto__ = function(state_19799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16978__auto____1.call(this,state_19799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16978__auto____0;
cljs$core$async$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16978__auto____1;
return cljs$core$async$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_19861 = f__17410__auto__();
(statearr_19861[(6)] = c__17409__auto___20832);

return statearr_19861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
