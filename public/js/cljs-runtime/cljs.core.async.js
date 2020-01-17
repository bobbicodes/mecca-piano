goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35312 = arguments.length;
switch (G__35312) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35313 = (function (f,blockable,meta35314){
this.f = f;
this.blockable = blockable;
this.meta35314 = meta35314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35315,meta35314__$1){
var self__ = this;
var _35315__$1 = this;
return (new cljs.core.async.t_cljs$core$async35313(self__.f,self__.blockable,meta35314__$1));
}));

(cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35315){
var self__ = this;
var _35315__$1 = this;
return self__.meta35314;
}));

(cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35314","meta35314",-1548088236,null)], null);
}));

(cljs.core.async.t_cljs$core$async35313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35313");

(cljs.core.async.t_cljs$core$async35313.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35313.
 */
cljs.core.async.__GT_t_cljs$core$async35313 = (function cljs$core$async$__GT_t_cljs$core$async35313(f__$1,blockable__$1,meta35314){
return (new cljs.core.async.t_cljs$core$async35313(f__$1,blockable__$1,meta35314));
});

}

return (new cljs.core.async.t_cljs$core$async35313(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35318 = arguments.length;
switch (G__35318) {
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
var G__35320 = arguments.length;
switch (G__35320) {
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
var G__35322 = arguments.length;
switch (G__35322) {
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
var val_36752 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36752) : fn1.call(null,val_36752));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36752) : fn1.call(null,val_36752));
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
var G__35324 = arguments.length;
switch (G__35324) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4666__auto___36754 = n;
var x_36755 = (0);
while(true){
if((x_36755 < n__4666__auto___36754)){
(a[x_36755] = x_36755);

var G__36756 = (x_36755 + (1));
x_36755 = G__36756;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35325 = (function (flag,meta35326){
this.flag = flag;
this.meta35326 = meta35326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35327,meta35326__$1){
var self__ = this;
var _35327__$1 = this;
return (new cljs.core.async.t_cljs$core$async35325(self__.flag,meta35326__$1));
}));

(cljs.core.async.t_cljs$core$async35325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35327){
var self__ = this;
var _35327__$1 = this;
return self__.meta35326;
}));

(cljs.core.async.t_cljs$core$async35325.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35325.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35326","meta35326",68640256,null)], null);
}));

(cljs.core.async.t_cljs$core$async35325.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35325");

(cljs.core.async.t_cljs$core$async35325.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35325");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35325.
 */
cljs.core.async.__GT_t_cljs$core$async35325 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35325(flag__$1,meta35326){
return (new cljs.core.async.t_cljs$core$async35325(flag__$1,meta35326));
});

}

return (new cljs.core.async.t_cljs$core$async35325(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35328 = (function (flag,cb,meta35329){
this.flag = flag;
this.cb = cb;
this.meta35329 = meta35329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35330,meta35329__$1){
var self__ = this;
var _35330__$1 = this;
return (new cljs.core.async.t_cljs$core$async35328(self__.flag,self__.cb,meta35329__$1));
}));

(cljs.core.async.t_cljs$core$async35328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35330){
var self__ = this;
var _35330__$1 = this;
return self__.meta35329;
}));

(cljs.core.async.t_cljs$core$async35328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35329","meta35329",1591528247,null)], null);
}));

(cljs.core.async.t_cljs$core$async35328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35328");

(cljs.core.async.t_cljs$core$async35328.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35328.
 */
cljs.core.async.__GT_t_cljs$core$async35328 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35328(flag__$1,cb__$1,meta35329){
return (new cljs.core.async.t_cljs$core$async35328(flag__$1,cb__$1,meta35329));
});

}

return (new cljs.core.async.t_cljs$core$async35328(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35331_SHARP_){
var G__35333 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35331_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35333) : fret.call(null,G__35333));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35332_SHARP_){
var G__35334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35332_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35334) : fret.call(null,G__35334));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36757 = (i + (1));
i = G__36757;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___36758 = arguments.length;
var i__4790__auto___36759 = (0);
while(true){
if((i__4790__auto___36759 < len__4789__auto___36758)){
args__4795__auto__.push((arguments[i__4790__auto___36759]));

var G__36760 = (i__4790__auto___36759 + (1));
i__4790__auto___36759 = G__36760;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35337){
var map__35338 = p__35337;
var map__35338__$1 = (((((!((map__35338 == null))))?(((((map__35338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35338):map__35338);
var opts = map__35338__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35335){
var G__35336 = cljs.core.first(seq35335);
var seq35335__$1 = cljs.core.next(seq35335);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35336,seq35335__$1);
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
var G__35341 = arguments.length;
switch (G__35341) {
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
var c__35254__auto___36762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_35365){
var state_val_35366 = (state_35365[(1)]);
if((state_val_35366 === (7))){
var inst_35361 = (state_35365[(2)]);
var state_35365__$1 = state_35365;
var statearr_35367_36763 = state_35365__$1;
(statearr_35367_36763[(2)] = inst_35361);

(statearr_35367_36763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (1))){
var state_35365__$1 = state_35365;
var statearr_35368_36764 = state_35365__$1;
(statearr_35368_36764[(2)] = null);

(statearr_35368_36764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (4))){
var inst_35344 = (state_35365[(7)]);
var inst_35344__$1 = (state_35365[(2)]);
var inst_35345 = (inst_35344__$1 == null);
var state_35365__$1 = (function (){var statearr_35369 = state_35365;
(statearr_35369[(7)] = inst_35344__$1);

return statearr_35369;
})();
if(cljs.core.truth_(inst_35345)){
var statearr_35370_36765 = state_35365__$1;
(statearr_35370_36765[(1)] = (5));

} else {
var statearr_35371_36766 = state_35365__$1;
(statearr_35371_36766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (13))){
var state_35365__$1 = state_35365;
var statearr_35372_36767 = state_35365__$1;
(statearr_35372_36767[(2)] = null);

(statearr_35372_36767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (6))){
var inst_35344 = (state_35365[(7)]);
var state_35365__$1 = state_35365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35365__$1,(11),to,inst_35344);
} else {
if((state_val_35366 === (3))){
var inst_35363 = (state_35365[(2)]);
var state_35365__$1 = state_35365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35365__$1,inst_35363);
} else {
if((state_val_35366 === (12))){
var state_35365__$1 = state_35365;
var statearr_35373_36768 = state_35365__$1;
(statearr_35373_36768[(2)] = null);

(statearr_35373_36768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (2))){
var state_35365__$1 = state_35365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35365__$1,(4),from);
} else {
if((state_val_35366 === (11))){
var inst_35354 = (state_35365[(2)]);
var state_35365__$1 = state_35365;
if(cljs.core.truth_(inst_35354)){
var statearr_35374_36769 = state_35365__$1;
(statearr_35374_36769[(1)] = (12));

} else {
var statearr_35375_36770 = state_35365__$1;
(statearr_35375_36770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (9))){
var state_35365__$1 = state_35365;
var statearr_35376_36771 = state_35365__$1;
(statearr_35376_36771[(2)] = null);

(statearr_35376_36771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (5))){
var state_35365__$1 = state_35365;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35377_36772 = state_35365__$1;
(statearr_35377_36772[(1)] = (8));

} else {
var statearr_35378_36773 = state_35365__$1;
(statearr_35378_36773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (14))){
var inst_35359 = (state_35365[(2)]);
var state_35365__$1 = state_35365;
var statearr_35379_36774 = state_35365__$1;
(statearr_35379_36774[(2)] = inst_35359);

(statearr_35379_36774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (10))){
var inst_35351 = (state_35365[(2)]);
var state_35365__$1 = state_35365;
var statearr_35380_36775 = state_35365__$1;
(statearr_35380_36775[(2)] = inst_35351);

(statearr_35380_36775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (8))){
var inst_35348 = cljs.core.async.close_BANG_(to);
var state_35365__$1 = state_35365;
var statearr_35381_36776 = state_35365__$1;
(statearr_35381_36776[(2)] = inst_35348);

(statearr_35381_36776[(1)] = (10));


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
var cljs$core$async$state_machine__35185__auto__ = null;
var cljs$core$async$state_machine__35185__auto____0 = (function (){
var statearr_35382 = [null,null,null,null,null,null,null,null];
(statearr_35382[(0)] = cljs$core$async$state_machine__35185__auto__);

(statearr_35382[(1)] = (1));

return statearr_35382;
});
var cljs$core$async$state_machine__35185__auto____1 = (function (state_35365){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_35365);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e35383){if((e35383 instanceof Object)){
var ex__35188__auto__ = e35383;
var statearr_35384_36777 = state_35365;
(statearr_35384_36777[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36778 = state_35365;
state_35365 = G__36778;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$state_machine__35185__auto__ = function(state_35365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35185__auto____1.call(this,state_35365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35185__auto____0;
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35185__auto____1;
return cljs$core$async$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_35385 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_35385[(6)] = c__35254__auto___36762);

return statearr_35385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
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
var process = (function (p__35386){
var vec__35387 = p__35386;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35387,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35387,(1),null);
var job = vec__35387;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35254__auto___36779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_35394){
var state_val_35395 = (state_35394[(1)]);
if((state_val_35395 === (1))){
var state_35394__$1 = state_35394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35394__$1,(2),res,v);
} else {
if((state_val_35395 === (2))){
var inst_35391 = (state_35394[(2)]);
var inst_35392 = cljs.core.async.close_BANG_(res);
var state_35394__$1 = (function (){var statearr_35396 = state_35394;
(statearr_35396[(7)] = inst_35391);

return statearr_35396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35394__$1,inst_35392);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0 = (function (){
var statearr_35397 = [null,null,null,null,null,null,null,null];
(statearr_35397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__);

(statearr_35397[(1)] = (1));

return statearr_35397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1 = (function (state_35394){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_35394);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e35398){if((e35398 instanceof Object)){
var ex__35188__auto__ = e35398;
var statearr_35399_36780 = state_35394;
(statearr_35399_36780[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35398;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36781 = state_35394;
state_35394 = G__36781;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__ = function(state_35394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1.call(this,state_35394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_35400 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_35400[(6)] = c__35254__auto___36779);

return statearr_35400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35401){
var vec__35402 = p__35401;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402,(1),null);
var job = vec__35402;
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
var n__4666__auto___36782 = n;
var __36783 = (0);
while(true){
if((__36783 < n__4666__auto___36782)){
var G__35405_36784 = type;
var G__35405_36785__$1 = (((G__35405_36784 instanceof cljs.core.Keyword))?G__35405_36784.fqn:null);
switch (G__35405_36785__$1) {
case "compute":
var c__35254__auto___36787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36783,c__35254__auto___36787,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async){
return (function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = ((function (__36783,c__35254__auto___36787,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async){
return (function (state_35418){
var state_val_35419 = (state_35418[(1)]);
if((state_val_35419 === (1))){
var state_35418__$1 = state_35418;
var statearr_35420_36788 = state_35418__$1;
(statearr_35420_36788[(2)] = null);

(statearr_35420_36788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (2))){
var state_35418__$1 = state_35418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35418__$1,(4),jobs);
} else {
if((state_val_35419 === (3))){
var inst_35416 = (state_35418[(2)]);
var state_35418__$1 = state_35418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35418__$1,inst_35416);
} else {
if((state_val_35419 === (4))){
var inst_35408 = (state_35418[(2)]);
var inst_35409 = process(inst_35408);
var state_35418__$1 = state_35418;
if(cljs.core.truth_(inst_35409)){
var statearr_35421_36789 = state_35418__$1;
(statearr_35421_36789[(1)] = (5));

} else {
var statearr_35422_36790 = state_35418__$1;
(statearr_35422_36790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (5))){
var state_35418__$1 = state_35418;
var statearr_35423_36791 = state_35418__$1;
(statearr_35423_36791[(2)] = null);

(statearr_35423_36791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (6))){
var state_35418__$1 = state_35418;
var statearr_35424_36792 = state_35418__$1;
(statearr_35424_36792[(2)] = null);

(statearr_35424_36792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (7))){
var inst_35414 = (state_35418[(2)]);
var state_35418__$1 = state_35418;
var statearr_35425_36793 = state_35418__$1;
(statearr_35425_36793[(2)] = inst_35414);

(statearr_35425_36793[(1)] = (3));


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
});})(__36783,c__35254__auto___36787,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async))
;
return ((function (__36783,switch__35184__auto__,c__35254__auto___36787,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0 = (function (){
var statearr_35426 = [null,null,null,null,null,null,null];
(statearr_35426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__);

(statearr_35426[(1)] = (1));

return statearr_35426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1 = (function (state_35418){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_35418);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e35427){if((e35427 instanceof Object)){
var ex__35188__auto__ = e35427;
var statearr_35428_36794 = state_35418;
(statearr_35428_36794[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36795 = state_35418;
state_35418 = G__36795;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__ = function(state_35418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1.call(this,state_35418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__;
})()
;})(__36783,switch__35184__auto__,c__35254__auto___36787,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async))
})();
var state__35256__auto__ = (function (){var statearr_35429 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_35429[(6)] = c__35254__auto___36787);

return statearr_35429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
});})(__36783,c__35254__auto___36787,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async))
);


break;
case "async":
var c__35254__auto___36796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36783,c__35254__auto___36796,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async){
return (function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = ((function (__36783,c__35254__auto___36796,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async){
return (function (state_35442){
var state_val_35443 = (state_35442[(1)]);
if((state_val_35443 === (1))){
var state_35442__$1 = state_35442;
var statearr_35444_36797 = state_35442__$1;
(statearr_35444_36797[(2)] = null);

(statearr_35444_36797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (2))){
var state_35442__$1 = state_35442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35442__$1,(4),jobs);
} else {
if((state_val_35443 === (3))){
var inst_35440 = (state_35442[(2)]);
var state_35442__$1 = state_35442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35442__$1,inst_35440);
} else {
if((state_val_35443 === (4))){
var inst_35432 = (state_35442[(2)]);
var inst_35433 = async(inst_35432);
var state_35442__$1 = state_35442;
if(cljs.core.truth_(inst_35433)){
var statearr_35445_36798 = state_35442__$1;
(statearr_35445_36798[(1)] = (5));

} else {
var statearr_35446_36799 = state_35442__$1;
(statearr_35446_36799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (5))){
var state_35442__$1 = state_35442;
var statearr_35447_36800 = state_35442__$1;
(statearr_35447_36800[(2)] = null);

(statearr_35447_36800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (6))){
var state_35442__$1 = state_35442;
var statearr_35448_36801 = state_35442__$1;
(statearr_35448_36801[(2)] = null);

(statearr_35448_36801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35443 === (7))){
var inst_35438 = (state_35442[(2)]);
var state_35442__$1 = state_35442;
var statearr_35449_36802 = state_35442__$1;
(statearr_35449_36802[(2)] = inst_35438);

(statearr_35449_36802[(1)] = (3));


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
});})(__36783,c__35254__auto___36796,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async))
;
return ((function (__36783,switch__35184__auto__,c__35254__auto___36796,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0 = (function (){
var statearr_35450 = [null,null,null,null,null,null,null];
(statearr_35450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__);

(statearr_35450[(1)] = (1));

return statearr_35450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1 = (function (state_35442){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_35442);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e35451){if((e35451 instanceof Object)){
var ex__35188__auto__ = e35451;
var statearr_35452_36803 = state_35442;
(statearr_35452_36803[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35451;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36804 = state_35442;
state_35442 = G__36804;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__ = function(state_35442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1.call(this,state_35442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__;
})()
;})(__36783,switch__35184__auto__,c__35254__auto___36796,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async))
})();
var state__35256__auto__ = (function (){var statearr_35453 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_35453[(6)] = c__35254__auto___36796);

return statearr_35453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
});})(__36783,c__35254__auto___36796,G__35405_36784,G__35405_36785__$1,n__4666__auto___36782,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35405_36785__$1)].join('')));

}

var G__36805 = (__36783 + (1));
__36783 = G__36805;
continue;
} else {
}
break;
}

var c__35254__auto___36806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_35475){
var state_val_35476 = (state_35475[(1)]);
if((state_val_35476 === (7))){
var inst_35471 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35477_36807 = state_35475__$1;
(statearr_35477_36807[(2)] = inst_35471);

(statearr_35477_36807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (1))){
var state_35475__$1 = state_35475;
var statearr_35478_36808 = state_35475__$1;
(statearr_35478_36808[(2)] = null);

(statearr_35478_36808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (4))){
var inst_35456 = (state_35475[(7)]);
var inst_35456__$1 = (state_35475[(2)]);
var inst_35457 = (inst_35456__$1 == null);
var state_35475__$1 = (function (){var statearr_35479 = state_35475;
(statearr_35479[(7)] = inst_35456__$1);

return statearr_35479;
})();
if(cljs.core.truth_(inst_35457)){
var statearr_35480_36809 = state_35475__$1;
(statearr_35480_36809[(1)] = (5));

} else {
var statearr_35481_36810 = state_35475__$1;
(statearr_35481_36810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (6))){
var inst_35456 = (state_35475[(7)]);
var inst_35461 = (state_35475[(8)]);
var inst_35461__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35462 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35463 = [inst_35456,inst_35461__$1];
var inst_35464 = (new cljs.core.PersistentVector(null,2,(5),inst_35462,inst_35463,null));
var state_35475__$1 = (function (){var statearr_35482 = state_35475;
(statearr_35482[(8)] = inst_35461__$1);

return statearr_35482;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35475__$1,(8),jobs,inst_35464);
} else {
if((state_val_35476 === (3))){
var inst_35473 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35475__$1,inst_35473);
} else {
if((state_val_35476 === (2))){
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35475__$1,(4),from);
} else {
if((state_val_35476 === (9))){
var inst_35468 = (state_35475[(2)]);
var state_35475__$1 = (function (){var statearr_35483 = state_35475;
(statearr_35483[(9)] = inst_35468);

return statearr_35483;
})();
var statearr_35484_36811 = state_35475__$1;
(statearr_35484_36811[(2)] = null);

(statearr_35484_36811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (5))){
var inst_35459 = cljs.core.async.close_BANG_(jobs);
var state_35475__$1 = state_35475;
var statearr_35485_36812 = state_35475__$1;
(statearr_35485_36812[(2)] = inst_35459);

(statearr_35485_36812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (8))){
var inst_35461 = (state_35475[(8)]);
var inst_35466 = (state_35475[(2)]);
var state_35475__$1 = (function (){var statearr_35486 = state_35475;
(statearr_35486[(10)] = inst_35466);

return statearr_35486;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35475__$1,(9),results,inst_35461);
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
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0 = (function (){
var statearr_35487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__);

(statearr_35487[(1)] = (1));

return statearr_35487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1 = (function (state_35475){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_35475);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e35488){if((e35488 instanceof Object)){
var ex__35188__auto__ = e35488;
var statearr_35489_36813 = state_35475;
(statearr_35489_36813[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36814 = state_35475;
state_35475 = G__36814;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__ = function(state_35475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1.call(this,state_35475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_35490 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_35490[(6)] = c__35254__auto___36806);

return statearr_35490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));


var c__35254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_35528){
var state_val_35529 = (state_35528[(1)]);
if((state_val_35529 === (7))){
var inst_35524 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35530_36815 = state_35528__$1;
(statearr_35530_36815[(2)] = inst_35524);

(statearr_35530_36815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (20))){
var state_35528__$1 = state_35528;
var statearr_35531_36816 = state_35528__$1;
(statearr_35531_36816[(2)] = null);

(statearr_35531_36816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (1))){
var state_35528__$1 = state_35528;
var statearr_35532_36817 = state_35528__$1;
(statearr_35532_36817[(2)] = null);

(statearr_35532_36817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (4))){
var inst_35493 = (state_35528[(7)]);
var inst_35493__$1 = (state_35528[(2)]);
var inst_35494 = (inst_35493__$1 == null);
var state_35528__$1 = (function (){var statearr_35533 = state_35528;
(statearr_35533[(7)] = inst_35493__$1);

return statearr_35533;
})();
if(cljs.core.truth_(inst_35494)){
var statearr_35534_36818 = state_35528__$1;
(statearr_35534_36818[(1)] = (5));

} else {
var statearr_35535_36819 = state_35528__$1;
(statearr_35535_36819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (15))){
var inst_35506 = (state_35528[(8)]);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35528__$1,(18),to,inst_35506);
} else {
if((state_val_35529 === (21))){
var inst_35519 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35536_36820 = state_35528__$1;
(statearr_35536_36820[(2)] = inst_35519);

(statearr_35536_36820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (13))){
var inst_35521 = (state_35528[(2)]);
var state_35528__$1 = (function (){var statearr_35537 = state_35528;
(statearr_35537[(9)] = inst_35521);

return statearr_35537;
})();
var statearr_35538_36821 = state_35528__$1;
(statearr_35538_36821[(2)] = null);

(statearr_35538_36821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (6))){
var inst_35493 = (state_35528[(7)]);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35528__$1,(11),inst_35493);
} else {
if((state_val_35529 === (17))){
var inst_35514 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
if(cljs.core.truth_(inst_35514)){
var statearr_35539_36822 = state_35528__$1;
(statearr_35539_36822[(1)] = (19));

} else {
var statearr_35540_36823 = state_35528__$1;
(statearr_35540_36823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (3))){
var inst_35526 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35528__$1,inst_35526);
} else {
if((state_val_35529 === (12))){
var inst_35503 = (state_35528[(10)]);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35528__$1,(14),inst_35503);
} else {
if((state_val_35529 === (2))){
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35528__$1,(4),results);
} else {
if((state_val_35529 === (19))){
var state_35528__$1 = state_35528;
var statearr_35541_36824 = state_35528__$1;
(statearr_35541_36824[(2)] = null);

(statearr_35541_36824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (11))){
var inst_35503 = (state_35528[(2)]);
var state_35528__$1 = (function (){var statearr_35542 = state_35528;
(statearr_35542[(10)] = inst_35503);

return statearr_35542;
})();
var statearr_35543_36825 = state_35528__$1;
(statearr_35543_36825[(2)] = null);

(statearr_35543_36825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (9))){
var state_35528__$1 = state_35528;
var statearr_35544_36826 = state_35528__$1;
(statearr_35544_36826[(2)] = null);

(statearr_35544_36826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (5))){
var state_35528__$1 = state_35528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35545_36827 = state_35528__$1;
(statearr_35545_36827[(1)] = (8));

} else {
var statearr_35546_36828 = state_35528__$1;
(statearr_35546_36828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (14))){
var inst_35506 = (state_35528[(8)]);
var inst_35506__$1 = (state_35528[(2)]);
var inst_35507 = (inst_35506__$1 == null);
var inst_35508 = cljs.core.not(inst_35507);
var state_35528__$1 = (function (){var statearr_35547 = state_35528;
(statearr_35547[(8)] = inst_35506__$1);

return statearr_35547;
})();
if(inst_35508){
var statearr_35548_36829 = state_35528__$1;
(statearr_35548_36829[(1)] = (15));

} else {
var statearr_35549_36830 = state_35528__$1;
(statearr_35549_36830[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (16))){
var state_35528__$1 = state_35528;
var statearr_35550_36831 = state_35528__$1;
(statearr_35550_36831[(2)] = false);

(statearr_35550_36831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (10))){
var inst_35500 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35551_36832 = state_35528__$1;
(statearr_35551_36832[(2)] = inst_35500);

(statearr_35551_36832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (18))){
var inst_35511 = (state_35528[(2)]);
var state_35528__$1 = state_35528;
var statearr_35552_36833 = state_35528__$1;
(statearr_35552_36833[(2)] = inst_35511);

(statearr_35552_36833[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35529 === (8))){
var inst_35497 = cljs.core.async.close_BANG_(to);
var state_35528__$1 = state_35528;
var statearr_35553_36834 = state_35528__$1;
(statearr_35553_36834[(2)] = inst_35497);

(statearr_35553_36834[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0 = (function (){
var statearr_35554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__);

(statearr_35554[(1)] = (1));

return statearr_35554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1 = (function (state_35528){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_35528);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e35555){if((e35555 instanceof Object)){
var ex__35188__auto__ = e35555;
var statearr_35556_36837 = state_35528;
(statearr_35556_36837[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35555;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36838 = state_35528;
state_35528 = G__36838;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__ = function(state_35528){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1.call(this,state_35528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_35557 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_35557[(6)] = c__35254__auto__);

return statearr_35557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));

return c__35254__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35559 = arguments.length;
switch (G__35559) {
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
var G__35561 = arguments.length;
switch (G__35561) {
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
var G__35563 = arguments.length;
switch (G__35563) {
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
var c__35254__auto___36845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_35589){
var state_val_35590 = (state_35589[(1)]);
if((state_val_35590 === (7))){
var inst_35585 = (state_35589[(2)]);
var state_35589__$1 = state_35589;
var statearr_35591_36846 = state_35589__$1;
(statearr_35591_36846[(2)] = inst_35585);

(statearr_35591_36846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (1))){
var state_35589__$1 = state_35589;
var statearr_35592_36847 = state_35589__$1;
(statearr_35592_36847[(2)] = null);

(statearr_35592_36847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (4))){
var inst_35566 = (state_35589[(7)]);
var inst_35566__$1 = (state_35589[(2)]);
var inst_35567 = (inst_35566__$1 == null);
var state_35589__$1 = (function (){var statearr_35593 = state_35589;
(statearr_35593[(7)] = inst_35566__$1);

return statearr_35593;
})();
if(cljs.core.truth_(inst_35567)){
var statearr_35594_36848 = state_35589__$1;
(statearr_35594_36848[(1)] = (5));

} else {
var statearr_35595_36849 = state_35589__$1;
(statearr_35595_36849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (13))){
var state_35589__$1 = state_35589;
var statearr_35596_36850 = state_35589__$1;
(statearr_35596_36850[(2)] = null);

(statearr_35596_36850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (6))){
var inst_35566 = (state_35589[(7)]);
var inst_35572 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35566) : p.call(null,inst_35566));
var state_35589__$1 = state_35589;
if(cljs.core.truth_(inst_35572)){
var statearr_35597_36851 = state_35589__$1;
(statearr_35597_36851[(1)] = (9));

} else {
var statearr_35598_36852 = state_35589__$1;
(statearr_35598_36852[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (3))){
var inst_35587 = (state_35589[(2)]);
var state_35589__$1 = state_35589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35589__$1,inst_35587);
} else {
if((state_val_35590 === (12))){
var state_35589__$1 = state_35589;
var statearr_35599_36853 = state_35589__$1;
(statearr_35599_36853[(2)] = null);

(statearr_35599_36853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (2))){
var state_35589__$1 = state_35589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35589__$1,(4),ch);
} else {
if((state_val_35590 === (11))){
var inst_35566 = (state_35589[(7)]);
var inst_35576 = (state_35589[(2)]);
var state_35589__$1 = state_35589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35589__$1,(8),inst_35576,inst_35566);
} else {
if((state_val_35590 === (9))){
var state_35589__$1 = state_35589;
var statearr_35600_36854 = state_35589__$1;
(statearr_35600_36854[(2)] = tc);

(statearr_35600_36854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (5))){
var inst_35569 = cljs.core.async.close_BANG_(tc);
var inst_35570 = cljs.core.async.close_BANG_(fc);
var state_35589__$1 = (function (){var statearr_35601 = state_35589;
(statearr_35601[(8)] = inst_35569);

return statearr_35601;
})();
var statearr_35602_36855 = state_35589__$1;
(statearr_35602_36855[(2)] = inst_35570);

(statearr_35602_36855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (14))){
var inst_35583 = (state_35589[(2)]);
var state_35589__$1 = state_35589;
var statearr_35603_36856 = state_35589__$1;
(statearr_35603_36856[(2)] = inst_35583);

(statearr_35603_36856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (10))){
var state_35589__$1 = state_35589;
var statearr_35604_36857 = state_35589__$1;
(statearr_35604_36857[(2)] = fc);

(statearr_35604_36857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (8))){
var inst_35578 = (state_35589[(2)]);
var state_35589__$1 = state_35589;
if(cljs.core.truth_(inst_35578)){
var statearr_35605_36858 = state_35589__$1;
(statearr_35605_36858[(1)] = (12));

} else {
var statearr_35606_36859 = state_35589__$1;
(statearr_35606_36859[(1)] = (13));

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
var cljs$core$async$state_machine__35185__auto__ = null;
var cljs$core$async$state_machine__35185__auto____0 = (function (){
var statearr_35607 = [null,null,null,null,null,null,null,null,null];
(statearr_35607[(0)] = cljs$core$async$state_machine__35185__auto__);

(statearr_35607[(1)] = (1));

return statearr_35607;
});
var cljs$core$async$state_machine__35185__auto____1 = (function (state_35589){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_35589);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e35608){if((e35608 instanceof Object)){
var ex__35188__auto__ = e35608;
var statearr_35609_36860 = state_35589;
(statearr_35609_36860[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35608;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36861 = state_35589;
state_35589 = G__36861;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$state_machine__35185__auto__ = function(state_35589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35185__auto____1.call(this,state_35589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35185__auto____0;
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35185__auto____1;
return cljs$core$async$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_35610 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_35610[(6)] = c__35254__auto___36845);

return statearr_35610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
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
var c__35254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_35631){
var state_val_35632 = (state_35631[(1)]);
if((state_val_35632 === (7))){
var inst_35627 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
var statearr_35633_36862 = state_35631__$1;
(statearr_35633_36862[(2)] = inst_35627);

(statearr_35633_36862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (1))){
var inst_35611 = init;
var state_35631__$1 = (function (){var statearr_35634 = state_35631;
(statearr_35634[(7)] = inst_35611);

return statearr_35634;
})();
var statearr_35635_36863 = state_35631__$1;
(statearr_35635_36863[(2)] = null);

(statearr_35635_36863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (4))){
var inst_35614 = (state_35631[(8)]);
var inst_35614__$1 = (state_35631[(2)]);
var inst_35615 = (inst_35614__$1 == null);
var state_35631__$1 = (function (){var statearr_35636 = state_35631;
(statearr_35636[(8)] = inst_35614__$1);

return statearr_35636;
})();
if(cljs.core.truth_(inst_35615)){
var statearr_35637_36864 = state_35631__$1;
(statearr_35637_36864[(1)] = (5));

} else {
var statearr_35638_36865 = state_35631__$1;
(statearr_35638_36865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (6))){
var inst_35618 = (state_35631[(9)]);
var inst_35614 = (state_35631[(8)]);
var inst_35611 = (state_35631[(7)]);
var inst_35618__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35611,inst_35614) : f.call(null,inst_35611,inst_35614));
var inst_35619 = cljs.core.reduced_QMARK_(inst_35618__$1);
var state_35631__$1 = (function (){var statearr_35639 = state_35631;
(statearr_35639[(9)] = inst_35618__$1);

return statearr_35639;
})();
if(inst_35619){
var statearr_35640_36866 = state_35631__$1;
(statearr_35640_36866[(1)] = (8));

} else {
var statearr_35641_36867 = state_35631__$1;
(statearr_35641_36867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (3))){
var inst_35629 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35631__$1,inst_35629);
} else {
if((state_val_35632 === (2))){
var state_35631__$1 = state_35631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35631__$1,(4),ch);
} else {
if((state_val_35632 === (9))){
var inst_35618 = (state_35631[(9)]);
var inst_35611 = inst_35618;
var state_35631__$1 = (function (){var statearr_35642 = state_35631;
(statearr_35642[(7)] = inst_35611);

return statearr_35642;
})();
var statearr_35643_36869 = state_35631__$1;
(statearr_35643_36869[(2)] = null);

(statearr_35643_36869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (5))){
var inst_35611 = (state_35631[(7)]);
var state_35631__$1 = state_35631;
var statearr_35644_36870 = state_35631__$1;
(statearr_35644_36870[(2)] = inst_35611);

(statearr_35644_36870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (10))){
var inst_35625 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
var statearr_35645_36871 = state_35631__$1;
(statearr_35645_36871[(2)] = inst_35625);

(statearr_35645_36871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (8))){
var inst_35618 = (state_35631[(9)]);
var inst_35621 = cljs.core.deref(inst_35618);
var state_35631__$1 = state_35631;
var statearr_35646_36872 = state_35631__$1;
(statearr_35646_36872[(2)] = inst_35621);

(statearr_35646_36872[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__35185__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35185__auto____0 = (function (){
var statearr_35647 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35647[(0)] = cljs$core$async$reduce_$_state_machine__35185__auto__);

(statearr_35647[(1)] = (1));

return statearr_35647;
});
var cljs$core$async$reduce_$_state_machine__35185__auto____1 = (function (state_35631){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_35631);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e35648){if((e35648 instanceof Object)){
var ex__35188__auto__ = e35648;
var statearr_35649_36873 = state_35631;
(statearr_35649_36873[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36874 = state_35631;
state_35631 = G__36874;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35185__auto__ = function(state_35631){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35185__auto____1.call(this,state_35631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35185__auto____0;
cljs$core$async$reduce_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35185__auto____1;
return cljs$core$async$reduce_$_state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_35650 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_35650[(6)] = c__35254__auto__);

return statearr_35650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));

return c__35254__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_35656){
var state_val_35657 = (state_35656[(1)]);
if((state_val_35657 === (1))){
var inst_35651 = cljs.core.async.reduce(f__$1,init,ch);
var state_35656__$1 = state_35656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35656__$1,(2),inst_35651);
} else {
if((state_val_35657 === (2))){
var inst_35653 = (state_35656[(2)]);
var inst_35654 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35653) : f__$1.call(null,inst_35653));
var state_35656__$1 = state_35656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35656__$1,inst_35654);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35185__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35185__auto____0 = (function (){
var statearr_35658 = [null,null,null,null,null,null,null];
(statearr_35658[(0)] = cljs$core$async$transduce_$_state_machine__35185__auto__);

(statearr_35658[(1)] = (1));

return statearr_35658;
});
var cljs$core$async$transduce_$_state_machine__35185__auto____1 = (function (state_35656){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_35656);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e35659){if((e35659 instanceof Object)){
var ex__35188__auto__ = e35659;
var statearr_35660_36875 = state_35656;
(statearr_35660_36875[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36877 = state_35656;
state_35656 = G__36877;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35185__auto__ = function(state_35656){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35185__auto____1.call(this,state_35656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35185__auto____0;
cljs$core$async$transduce_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35185__auto____1;
return cljs$core$async$transduce_$_state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_35661 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_35661[(6)] = c__35254__auto__);

return statearr_35661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));

return c__35254__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35663 = arguments.length;
switch (G__35663) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_35688){
var state_val_35689 = (state_35688[(1)]);
if((state_val_35689 === (7))){
var inst_35670 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35690_36881 = state_35688__$1;
(statearr_35690_36881[(2)] = inst_35670);

(statearr_35690_36881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (1))){
var inst_35664 = cljs.core.seq(coll);
var inst_35665 = inst_35664;
var state_35688__$1 = (function (){var statearr_35691 = state_35688;
(statearr_35691[(7)] = inst_35665);

return statearr_35691;
})();
var statearr_35692_36882 = state_35688__$1;
(statearr_35692_36882[(2)] = null);

(statearr_35692_36882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (4))){
var inst_35665 = (state_35688[(7)]);
var inst_35668 = cljs.core.first(inst_35665);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35688__$1,(7),ch,inst_35668);
} else {
if((state_val_35689 === (13))){
var inst_35682 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35693_36884 = state_35688__$1;
(statearr_35693_36884[(2)] = inst_35682);

(statearr_35693_36884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (6))){
var inst_35673 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35673)){
var statearr_35694_36885 = state_35688__$1;
(statearr_35694_36885[(1)] = (8));

} else {
var statearr_35695_36886 = state_35688__$1;
(statearr_35695_36886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (3))){
var inst_35686 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35688__$1,inst_35686);
} else {
if((state_val_35689 === (12))){
var state_35688__$1 = state_35688;
var statearr_35696_36887 = state_35688__$1;
(statearr_35696_36887[(2)] = null);

(statearr_35696_36887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (2))){
var inst_35665 = (state_35688[(7)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35665)){
var statearr_35697_36888 = state_35688__$1;
(statearr_35697_36888[(1)] = (4));

} else {
var statearr_35698_36889 = state_35688__$1;
(statearr_35698_36889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (11))){
var inst_35679 = cljs.core.async.close_BANG_(ch);
var state_35688__$1 = state_35688;
var statearr_35699_36890 = state_35688__$1;
(statearr_35699_36890[(2)] = inst_35679);

(statearr_35699_36890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (9))){
var state_35688__$1 = state_35688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35700_36891 = state_35688__$1;
(statearr_35700_36891[(1)] = (11));

} else {
var statearr_35701_36895 = state_35688__$1;
(statearr_35701_36895[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (5))){
var inst_35665 = (state_35688[(7)]);
var state_35688__$1 = state_35688;
var statearr_35702_36898 = state_35688__$1;
(statearr_35702_36898[(2)] = inst_35665);

(statearr_35702_36898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (10))){
var inst_35684 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35703_36899 = state_35688__$1;
(statearr_35703_36899[(2)] = inst_35684);

(statearr_35703_36899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (8))){
var inst_35665 = (state_35688[(7)]);
var inst_35675 = cljs.core.next(inst_35665);
var inst_35665__$1 = inst_35675;
var state_35688__$1 = (function (){var statearr_35704 = state_35688;
(statearr_35704[(7)] = inst_35665__$1);

return statearr_35704;
})();
var statearr_35705_36902 = state_35688__$1;
(statearr_35705_36902[(2)] = null);

(statearr_35705_36902[(1)] = (2));


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
var cljs$core$async$state_machine__35185__auto__ = null;
var cljs$core$async$state_machine__35185__auto____0 = (function (){
var statearr_35706 = [null,null,null,null,null,null,null,null];
(statearr_35706[(0)] = cljs$core$async$state_machine__35185__auto__);

(statearr_35706[(1)] = (1));

return statearr_35706;
});
var cljs$core$async$state_machine__35185__auto____1 = (function (state_35688){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_35688);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e35707){if((e35707 instanceof Object)){
var ex__35188__auto__ = e35707;
var statearr_35708_36905 = state_35688;
(statearr_35708_36905[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35707;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36906 = state_35688;
state_35688 = G__36906;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$state_machine__35185__auto__ = function(state_35688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35185__auto____1.call(this,state_35688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35185__auto____0;
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35185__auto____1;
return cljs$core$async$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_35709 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_35709[(6)] = c__35254__auto__);

return statearr_35709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));

return c__35254__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35710 = (function (ch,cs,meta35711){
this.ch = ch;
this.cs = cs;
this.meta35711 = meta35711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35712,meta35711__$1){
var self__ = this;
var _35712__$1 = this;
return (new cljs.core.async.t_cljs$core$async35710(self__.ch,self__.cs,meta35711__$1));
}));

(cljs.core.async.t_cljs$core$async35710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35712){
var self__ = this;
var _35712__$1 = this;
return self__.meta35711;
}));

(cljs.core.async.t_cljs$core$async35710.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35710.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35710.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35710.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35710.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35710.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35711","meta35711",1810763779,null)], null);
}));

(cljs.core.async.t_cljs$core$async35710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35710");

(cljs.core.async.t_cljs$core$async35710.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35710.
 */
cljs.core.async.__GT_t_cljs$core$async35710 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35710(ch__$1,cs__$1,meta35711){
return (new cljs.core.async.t_cljs$core$async35710(ch__$1,cs__$1,meta35711));
});

}

return (new cljs.core.async.t_cljs$core$async35710(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__35254__auto___36909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_35847){
var state_val_35848 = (state_35847[(1)]);
if((state_val_35848 === (7))){
var inst_35843 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35849_36910 = state_35847__$1;
(statearr_35849_36910[(2)] = inst_35843);

(statearr_35849_36910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (20))){
var inst_35746 = (state_35847[(7)]);
var inst_35758 = cljs.core.first(inst_35746);
var inst_35759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35758,(0),null);
var inst_35760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35758,(1),null);
var state_35847__$1 = (function (){var statearr_35850 = state_35847;
(statearr_35850[(8)] = inst_35759);

return statearr_35850;
})();
if(cljs.core.truth_(inst_35760)){
var statearr_35851_36911 = state_35847__$1;
(statearr_35851_36911[(1)] = (22));

} else {
var statearr_35852_36912 = state_35847__$1;
(statearr_35852_36912[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (27))){
var inst_35790 = (state_35847[(9)]);
var inst_35788 = (state_35847[(10)]);
var inst_35715 = (state_35847[(11)]);
var inst_35795 = (state_35847[(12)]);
var inst_35795__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35788,inst_35790);
var inst_35796 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35795__$1,inst_35715,done);
var state_35847__$1 = (function (){var statearr_35853 = state_35847;
(statearr_35853[(12)] = inst_35795__$1);

return statearr_35853;
})();
if(cljs.core.truth_(inst_35796)){
var statearr_35854_36913 = state_35847__$1;
(statearr_35854_36913[(1)] = (30));

} else {
var statearr_35855_36914 = state_35847__$1;
(statearr_35855_36914[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (1))){
var state_35847__$1 = state_35847;
var statearr_35856_36915 = state_35847__$1;
(statearr_35856_36915[(2)] = null);

(statearr_35856_36915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (24))){
var inst_35746 = (state_35847[(7)]);
var inst_35765 = (state_35847[(2)]);
var inst_35766 = cljs.core.next(inst_35746);
var inst_35724 = inst_35766;
var inst_35725 = null;
var inst_35726 = (0);
var inst_35727 = (0);
var state_35847__$1 = (function (){var statearr_35857 = state_35847;
(statearr_35857[(13)] = inst_35727);

(statearr_35857[(14)] = inst_35765);

(statearr_35857[(15)] = inst_35724);

(statearr_35857[(16)] = inst_35726);

(statearr_35857[(17)] = inst_35725);

return statearr_35857;
})();
var statearr_35858_36916 = state_35847__$1;
(statearr_35858_36916[(2)] = null);

(statearr_35858_36916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (39))){
var state_35847__$1 = state_35847;
var statearr_35862_36917 = state_35847__$1;
(statearr_35862_36917[(2)] = null);

(statearr_35862_36917[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (4))){
var inst_35715 = (state_35847[(11)]);
var inst_35715__$1 = (state_35847[(2)]);
var inst_35716 = (inst_35715__$1 == null);
var state_35847__$1 = (function (){var statearr_35863 = state_35847;
(statearr_35863[(11)] = inst_35715__$1);

return statearr_35863;
})();
if(cljs.core.truth_(inst_35716)){
var statearr_35864_36918 = state_35847__$1;
(statearr_35864_36918[(1)] = (5));

} else {
var statearr_35865_36919 = state_35847__$1;
(statearr_35865_36919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (15))){
var inst_35727 = (state_35847[(13)]);
var inst_35724 = (state_35847[(15)]);
var inst_35726 = (state_35847[(16)]);
var inst_35725 = (state_35847[(17)]);
var inst_35742 = (state_35847[(2)]);
var inst_35743 = (inst_35727 + (1));
var tmp35859 = inst_35724;
var tmp35860 = inst_35726;
var tmp35861 = inst_35725;
var inst_35724__$1 = tmp35859;
var inst_35725__$1 = tmp35861;
var inst_35726__$1 = tmp35860;
var inst_35727__$1 = inst_35743;
var state_35847__$1 = (function (){var statearr_35866 = state_35847;
(statearr_35866[(13)] = inst_35727__$1);

(statearr_35866[(18)] = inst_35742);

(statearr_35866[(15)] = inst_35724__$1);

(statearr_35866[(16)] = inst_35726__$1);

(statearr_35866[(17)] = inst_35725__$1);

return statearr_35866;
})();
var statearr_35867_36920 = state_35847__$1;
(statearr_35867_36920[(2)] = null);

(statearr_35867_36920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (21))){
var inst_35769 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35871_36921 = state_35847__$1;
(statearr_35871_36921[(2)] = inst_35769);

(statearr_35871_36921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (31))){
var inst_35795 = (state_35847[(12)]);
var inst_35799 = done(null);
var inst_35800 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35795);
var state_35847__$1 = (function (){var statearr_35872 = state_35847;
(statearr_35872[(19)] = inst_35799);

return statearr_35872;
})();
var statearr_35873_36925 = state_35847__$1;
(statearr_35873_36925[(2)] = inst_35800);

(statearr_35873_36925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (32))){
var inst_35790 = (state_35847[(9)]);
var inst_35787 = (state_35847[(20)]);
var inst_35788 = (state_35847[(10)]);
var inst_35789 = (state_35847[(21)]);
var inst_35802 = (state_35847[(2)]);
var inst_35803 = (inst_35790 + (1));
var tmp35868 = inst_35787;
var tmp35869 = inst_35788;
var tmp35870 = inst_35789;
var inst_35787__$1 = tmp35868;
var inst_35788__$1 = tmp35869;
var inst_35789__$1 = tmp35870;
var inst_35790__$1 = inst_35803;
var state_35847__$1 = (function (){var statearr_35874 = state_35847;
(statearr_35874[(22)] = inst_35802);

(statearr_35874[(9)] = inst_35790__$1);

(statearr_35874[(20)] = inst_35787__$1);

(statearr_35874[(10)] = inst_35788__$1);

(statearr_35874[(21)] = inst_35789__$1);

return statearr_35874;
})();
var statearr_35875_36926 = state_35847__$1;
(statearr_35875_36926[(2)] = null);

(statearr_35875_36926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (40))){
var inst_35815 = (state_35847[(23)]);
var inst_35819 = done(null);
var inst_35820 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35815);
var state_35847__$1 = (function (){var statearr_35876 = state_35847;
(statearr_35876[(24)] = inst_35819);

return statearr_35876;
})();
var statearr_35877_36927 = state_35847__$1;
(statearr_35877_36927[(2)] = inst_35820);

(statearr_35877_36927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (33))){
var inst_35806 = (state_35847[(25)]);
var inst_35808 = cljs.core.chunked_seq_QMARK_(inst_35806);
var state_35847__$1 = state_35847;
if(inst_35808){
var statearr_35878_36930 = state_35847__$1;
(statearr_35878_36930[(1)] = (36));

} else {
var statearr_35879_36931 = state_35847__$1;
(statearr_35879_36931[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (13))){
var inst_35736 = (state_35847[(26)]);
var inst_35739 = cljs.core.async.close_BANG_(inst_35736);
var state_35847__$1 = state_35847;
var statearr_35880_36932 = state_35847__$1;
(statearr_35880_36932[(2)] = inst_35739);

(statearr_35880_36932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (22))){
var inst_35759 = (state_35847[(8)]);
var inst_35762 = cljs.core.async.close_BANG_(inst_35759);
var state_35847__$1 = state_35847;
var statearr_35881_36933 = state_35847__$1;
(statearr_35881_36933[(2)] = inst_35762);

(statearr_35881_36933[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (36))){
var inst_35806 = (state_35847[(25)]);
var inst_35810 = cljs.core.chunk_first(inst_35806);
var inst_35811 = cljs.core.chunk_rest(inst_35806);
var inst_35812 = cljs.core.count(inst_35810);
var inst_35787 = inst_35811;
var inst_35788 = inst_35810;
var inst_35789 = inst_35812;
var inst_35790 = (0);
var state_35847__$1 = (function (){var statearr_35882 = state_35847;
(statearr_35882[(9)] = inst_35790);

(statearr_35882[(20)] = inst_35787);

(statearr_35882[(10)] = inst_35788);

(statearr_35882[(21)] = inst_35789);

return statearr_35882;
})();
var statearr_35883_36934 = state_35847__$1;
(statearr_35883_36934[(2)] = null);

(statearr_35883_36934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (41))){
var inst_35806 = (state_35847[(25)]);
var inst_35822 = (state_35847[(2)]);
var inst_35823 = cljs.core.next(inst_35806);
var inst_35787 = inst_35823;
var inst_35788 = null;
var inst_35789 = (0);
var inst_35790 = (0);
var state_35847__$1 = (function (){var statearr_35884 = state_35847;
(statearr_35884[(27)] = inst_35822);

(statearr_35884[(9)] = inst_35790);

(statearr_35884[(20)] = inst_35787);

(statearr_35884[(10)] = inst_35788);

(statearr_35884[(21)] = inst_35789);

return statearr_35884;
})();
var statearr_35885_36937 = state_35847__$1;
(statearr_35885_36937[(2)] = null);

(statearr_35885_36937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (43))){
var state_35847__$1 = state_35847;
var statearr_35886_36938 = state_35847__$1;
(statearr_35886_36938[(2)] = null);

(statearr_35886_36938[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (29))){
var inst_35831 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35887_36939 = state_35847__$1;
(statearr_35887_36939[(2)] = inst_35831);

(statearr_35887_36939[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (44))){
var inst_35840 = (state_35847[(2)]);
var state_35847__$1 = (function (){var statearr_35888 = state_35847;
(statearr_35888[(28)] = inst_35840);

return statearr_35888;
})();
var statearr_35889_36941 = state_35847__$1;
(statearr_35889_36941[(2)] = null);

(statearr_35889_36941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (6))){
var inst_35779 = (state_35847[(29)]);
var inst_35778 = cljs.core.deref(cs);
var inst_35779__$1 = cljs.core.keys(inst_35778);
var inst_35780 = cljs.core.count(inst_35779__$1);
var inst_35781 = cljs.core.reset_BANG_(dctr,inst_35780);
var inst_35786 = cljs.core.seq(inst_35779__$1);
var inst_35787 = inst_35786;
var inst_35788 = null;
var inst_35789 = (0);
var inst_35790 = (0);
var state_35847__$1 = (function (){var statearr_35890 = state_35847;
(statearr_35890[(30)] = inst_35781);

(statearr_35890[(9)] = inst_35790);

(statearr_35890[(29)] = inst_35779__$1);

(statearr_35890[(20)] = inst_35787);

(statearr_35890[(10)] = inst_35788);

(statearr_35890[(21)] = inst_35789);

return statearr_35890;
})();
var statearr_35891_36942 = state_35847__$1;
(statearr_35891_36942[(2)] = null);

(statearr_35891_36942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (28))){
var inst_35787 = (state_35847[(20)]);
var inst_35806 = (state_35847[(25)]);
var inst_35806__$1 = cljs.core.seq(inst_35787);
var state_35847__$1 = (function (){var statearr_35892 = state_35847;
(statearr_35892[(25)] = inst_35806__$1);

return statearr_35892;
})();
if(inst_35806__$1){
var statearr_35893_36944 = state_35847__$1;
(statearr_35893_36944[(1)] = (33));

} else {
var statearr_35894_36945 = state_35847__$1;
(statearr_35894_36945[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (25))){
var inst_35790 = (state_35847[(9)]);
var inst_35789 = (state_35847[(21)]);
var inst_35792 = (inst_35790 < inst_35789);
var inst_35793 = inst_35792;
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35793)){
var statearr_35895_36946 = state_35847__$1;
(statearr_35895_36946[(1)] = (27));

} else {
var statearr_35896_36947 = state_35847__$1;
(statearr_35896_36947[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (34))){
var state_35847__$1 = state_35847;
var statearr_35897_36948 = state_35847__$1;
(statearr_35897_36948[(2)] = null);

(statearr_35897_36948[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (17))){
var state_35847__$1 = state_35847;
var statearr_35898_36949 = state_35847__$1;
(statearr_35898_36949[(2)] = null);

(statearr_35898_36949[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (3))){
var inst_35845 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35847__$1,inst_35845);
} else {
if((state_val_35848 === (12))){
var inst_35774 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35899_36950 = state_35847__$1;
(statearr_35899_36950[(2)] = inst_35774);

(statearr_35899_36950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (2))){
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35847__$1,(4),ch);
} else {
if((state_val_35848 === (23))){
var state_35847__$1 = state_35847;
var statearr_35900_36953 = state_35847__$1;
(statearr_35900_36953[(2)] = null);

(statearr_35900_36953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (35))){
var inst_35829 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35901_36954 = state_35847__$1;
(statearr_35901_36954[(2)] = inst_35829);

(statearr_35901_36954[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (19))){
var inst_35746 = (state_35847[(7)]);
var inst_35750 = cljs.core.chunk_first(inst_35746);
var inst_35751 = cljs.core.chunk_rest(inst_35746);
var inst_35752 = cljs.core.count(inst_35750);
var inst_35724 = inst_35751;
var inst_35725 = inst_35750;
var inst_35726 = inst_35752;
var inst_35727 = (0);
var state_35847__$1 = (function (){var statearr_35902 = state_35847;
(statearr_35902[(13)] = inst_35727);

(statearr_35902[(15)] = inst_35724);

(statearr_35902[(16)] = inst_35726);

(statearr_35902[(17)] = inst_35725);

return statearr_35902;
})();
var statearr_35903_36961 = state_35847__$1;
(statearr_35903_36961[(2)] = null);

(statearr_35903_36961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (11))){
var inst_35724 = (state_35847[(15)]);
var inst_35746 = (state_35847[(7)]);
var inst_35746__$1 = cljs.core.seq(inst_35724);
var state_35847__$1 = (function (){var statearr_35904 = state_35847;
(statearr_35904[(7)] = inst_35746__$1);

return statearr_35904;
})();
if(inst_35746__$1){
var statearr_35905_36962 = state_35847__$1;
(statearr_35905_36962[(1)] = (16));

} else {
var statearr_35906_36963 = state_35847__$1;
(statearr_35906_36963[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (9))){
var inst_35776 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35907_36964 = state_35847__$1;
(statearr_35907_36964[(2)] = inst_35776);

(statearr_35907_36964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (5))){
var inst_35722 = cljs.core.deref(cs);
var inst_35723 = cljs.core.seq(inst_35722);
var inst_35724 = inst_35723;
var inst_35725 = null;
var inst_35726 = (0);
var inst_35727 = (0);
var state_35847__$1 = (function (){var statearr_35908 = state_35847;
(statearr_35908[(13)] = inst_35727);

(statearr_35908[(15)] = inst_35724);

(statearr_35908[(16)] = inst_35726);

(statearr_35908[(17)] = inst_35725);

return statearr_35908;
})();
var statearr_35909_36965 = state_35847__$1;
(statearr_35909_36965[(2)] = null);

(statearr_35909_36965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (14))){
var state_35847__$1 = state_35847;
var statearr_35910_36966 = state_35847__$1;
(statearr_35910_36966[(2)] = null);

(statearr_35910_36966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (45))){
var inst_35837 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35911_36967 = state_35847__$1;
(statearr_35911_36967[(2)] = inst_35837);

(statearr_35911_36967[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (26))){
var inst_35779 = (state_35847[(29)]);
var inst_35833 = (state_35847[(2)]);
var inst_35834 = cljs.core.seq(inst_35779);
var state_35847__$1 = (function (){var statearr_35912 = state_35847;
(statearr_35912[(31)] = inst_35833);

return statearr_35912;
})();
if(inst_35834){
var statearr_35913_36972 = state_35847__$1;
(statearr_35913_36972[(1)] = (42));

} else {
var statearr_35914_36973 = state_35847__$1;
(statearr_35914_36973[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (16))){
var inst_35746 = (state_35847[(7)]);
var inst_35748 = cljs.core.chunked_seq_QMARK_(inst_35746);
var state_35847__$1 = state_35847;
if(inst_35748){
var statearr_35915_36974 = state_35847__$1;
(statearr_35915_36974[(1)] = (19));

} else {
var statearr_35916_36975 = state_35847__$1;
(statearr_35916_36975[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (38))){
var inst_35826 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35917_36978 = state_35847__$1;
(statearr_35917_36978[(2)] = inst_35826);

(statearr_35917_36978[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (30))){
var state_35847__$1 = state_35847;
var statearr_35918_36979 = state_35847__$1;
(statearr_35918_36979[(2)] = null);

(statearr_35918_36979[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (10))){
var inst_35727 = (state_35847[(13)]);
var inst_35725 = (state_35847[(17)]);
var inst_35735 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35725,inst_35727);
var inst_35736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35735,(0),null);
var inst_35737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35735,(1),null);
var state_35847__$1 = (function (){var statearr_35919 = state_35847;
(statearr_35919[(26)] = inst_35736);

return statearr_35919;
})();
if(cljs.core.truth_(inst_35737)){
var statearr_35920_36980 = state_35847__$1;
(statearr_35920_36980[(1)] = (13));

} else {
var statearr_35921_36981 = state_35847__$1;
(statearr_35921_36981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (18))){
var inst_35772 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35922_36982 = state_35847__$1;
(statearr_35922_36982[(2)] = inst_35772);

(statearr_35922_36982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (42))){
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35847__$1,(45),dchan);
} else {
if((state_val_35848 === (37))){
var inst_35815 = (state_35847[(23)]);
var inst_35715 = (state_35847[(11)]);
var inst_35806 = (state_35847[(25)]);
var inst_35815__$1 = cljs.core.first(inst_35806);
var inst_35816 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35815__$1,inst_35715,done);
var state_35847__$1 = (function (){var statearr_35923 = state_35847;
(statearr_35923[(23)] = inst_35815__$1);

return statearr_35923;
})();
if(cljs.core.truth_(inst_35816)){
var statearr_35924_36983 = state_35847__$1;
(statearr_35924_36983[(1)] = (39));

} else {
var statearr_35925_36984 = state_35847__$1;
(statearr_35925_36984[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (8))){
var inst_35727 = (state_35847[(13)]);
var inst_35726 = (state_35847[(16)]);
var inst_35729 = (inst_35727 < inst_35726);
var inst_35730 = inst_35729;
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35730)){
var statearr_35926_36985 = state_35847__$1;
(statearr_35926_36985[(1)] = (10));

} else {
var statearr_35927_36986 = state_35847__$1;
(statearr_35927_36986[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__35185__auto__ = null;
var cljs$core$async$mult_$_state_machine__35185__auto____0 = (function (){
var statearr_35928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35928[(0)] = cljs$core$async$mult_$_state_machine__35185__auto__);

(statearr_35928[(1)] = (1));

return statearr_35928;
});
var cljs$core$async$mult_$_state_machine__35185__auto____1 = (function (state_35847){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_35847);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e35929){if((e35929 instanceof Object)){
var ex__35188__auto__ = e35929;
var statearr_35930_36987 = state_35847;
(statearr_35930_36987[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36989 = state_35847;
state_35847 = G__36989;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35185__auto__ = function(state_35847){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35185__auto____1.call(this,state_35847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35185__auto____0;
cljs$core$async$mult_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35185__auto____1;
return cljs$core$async$mult_$_state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_35931 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_35931[(6)] = c__35254__auto___36909);

return statearr_35931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
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
var G__35933 = arguments.length;
switch (G__35933) {
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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37009 = arguments.length;
var i__4790__auto___37010 = (0);
while(true){
if((i__4790__auto___37010 < len__4789__auto___37009)){
args__4795__auto__.push((arguments[i__4790__auto___37010]));

var G__37011 = (i__4790__auto___37010 + (1));
i__4790__auto___37010 = G__37011;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35938){
var map__35939 = p__35938;
var map__35939__$1 = (((((!((map__35939 == null))))?(((((map__35939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35939):map__35939);
var opts = map__35939__$1;
var statearr_35941_37012 = state;
(statearr_35941_37012[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35942_37013 = state;
(statearr_35942_37013[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35943_37014 = state;
(statearr_35943_37014[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35934){
var G__35935 = cljs.core.first(seq35934);
var seq35934__$1 = cljs.core.next(seq35934);
var G__35936 = cljs.core.first(seq35934__$1);
var seq35934__$2 = cljs.core.next(seq35934__$1);
var G__35937 = cljs.core.first(seq35934__$2);
var seq35934__$3 = cljs.core.next(seq35934__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35935,G__35936,G__35937,seq35934__$3);
}));

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35944 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35945){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35945 = meta35945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35946,meta35945__$1){
var self__ = this;
var _35946__$1 = this;
return (new cljs.core.async.t_cljs$core$async35944(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35945__$1));
}));

(cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35946){
var self__ = this;
var _35946__$1 = this;
return self__.meta35945;
}));

(cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35944.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35945","meta35945",-349499887,null)], null);
}));

(cljs.core.async.t_cljs$core$async35944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35944");

(cljs.core.async.t_cljs$core$async35944.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35944.
 */
cljs.core.async.__GT_t_cljs$core$async35944 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35944(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35945){
return (new cljs.core.async.t_cljs$core$async35944(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35945));
});

}

return (new cljs.core.async.t_cljs$core$async35944(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35254__auto___37066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_36048){
var state_val_36049 = (state_36048[(1)]);
if((state_val_36049 === (7))){
var inst_35963 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
var statearr_36050_37067 = state_36048__$1;
(statearr_36050_37067[(2)] = inst_35963);

(statearr_36050_37067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (20))){
var inst_35975 = (state_36048[(7)]);
var state_36048__$1 = state_36048;
var statearr_36051_37068 = state_36048__$1;
(statearr_36051_37068[(2)] = inst_35975);

(statearr_36051_37068[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (27))){
var state_36048__$1 = state_36048;
var statearr_36052_37069 = state_36048__$1;
(statearr_36052_37069[(2)] = null);

(statearr_36052_37069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (1))){
var inst_35950 = (state_36048[(8)]);
var inst_35950__$1 = calc_state();
var inst_35952 = (inst_35950__$1 == null);
var inst_35953 = cljs.core.not(inst_35952);
var state_36048__$1 = (function (){var statearr_36053 = state_36048;
(statearr_36053[(8)] = inst_35950__$1);

return statearr_36053;
})();
if(inst_35953){
var statearr_36054_37070 = state_36048__$1;
(statearr_36054_37070[(1)] = (2));

} else {
var statearr_36055_37071 = state_36048__$1;
(statearr_36055_37071[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (24))){
var inst_36008 = (state_36048[(9)]);
var inst_35999 = (state_36048[(10)]);
var inst_36022 = (state_36048[(11)]);
var inst_36022__$1 = (inst_35999.cljs$core$IFn$_invoke$arity$1 ? inst_35999.cljs$core$IFn$_invoke$arity$1(inst_36008) : inst_35999.call(null,inst_36008));
var state_36048__$1 = (function (){var statearr_36056 = state_36048;
(statearr_36056[(11)] = inst_36022__$1);

return statearr_36056;
})();
if(cljs.core.truth_(inst_36022__$1)){
var statearr_36057_37074 = state_36048__$1;
(statearr_36057_37074[(1)] = (29));

} else {
var statearr_36058_37075 = state_36048__$1;
(statearr_36058_37075[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (4))){
var inst_35966 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
if(cljs.core.truth_(inst_35966)){
var statearr_36059_37076 = state_36048__$1;
(statearr_36059_37076[(1)] = (8));

} else {
var statearr_36060_37077 = state_36048__$1;
(statearr_36060_37077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (15))){
var inst_35993 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
if(cljs.core.truth_(inst_35993)){
var statearr_36061_37078 = state_36048__$1;
(statearr_36061_37078[(1)] = (19));

} else {
var statearr_36062_37079 = state_36048__$1;
(statearr_36062_37079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (21))){
var inst_35998 = (state_36048[(12)]);
var inst_35998__$1 = (state_36048[(2)]);
var inst_35999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35998__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35998__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35998__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36048__$1 = (function (){var statearr_36063 = state_36048;
(statearr_36063[(12)] = inst_35998__$1);

(statearr_36063[(10)] = inst_35999);

(statearr_36063[(13)] = inst_36000);

return statearr_36063;
})();
return cljs.core.async.ioc_alts_BANG_(state_36048__$1,(22),inst_36001);
} else {
if((state_val_36049 === (31))){
var inst_36030 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
if(cljs.core.truth_(inst_36030)){
var statearr_36064_37080 = state_36048__$1;
(statearr_36064_37080[(1)] = (32));

} else {
var statearr_36065_37081 = state_36048__$1;
(statearr_36065_37081[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (32))){
var inst_36007 = (state_36048[(14)]);
var state_36048__$1 = state_36048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36048__$1,(35),out,inst_36007);
} else {
if((state_val_36049 === (33))){
var inst_35998 = (state_36048[(12)]);
var inst_35975 = inst_35998;
var state_36048__$1 = (function (){var statearr_36066 = state_36048;
(statearr_36066[(7)] = inst_35975);

return statearr_36066;
})();
var statearr_36067_37091 = state_36048__$1;
(statearr_36067_37091[(2)] = null);

(statearr_36067_37091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (13))){
var inst_35975 = (state_36048[(7)]);
var inst_35982 = inst_35975.cljs$lang$protocol_mask$partition0$;
var inst_35983 = (inst_35982 & (64));
var inst_35984 = inst_35975.cljs$core$ISeq$;
var inst_35985 = (cljs.core.PROTOCOL_SENTINEL === inst_35984);
var inst_35986 = ((inst_35983) || (inst_35985));
var state_36048__$1 = state_36048;
if(cljs.core.truth_(inst_35986)){
var statearr_36068_37092 = state_36048__$1;
(statearr_36068_37092[(1)] = (16));

} else {
var statearr_36069_37093 = state_36048__$1;
(statearr_36069_37093[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (22))){
var inst_36007 = (state_36048[(14)]);
var inst_36008 = (state_36048[(9)]);
var inst_36006 = (state_36048[(2)]);
var inst_36007__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36006,(0),null);
var inst_36008__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36006,(1),null);
var inst_36009 = (inst_36007__$1 == null);
var inst_36010 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36008__$1,change);
var inst_36011 = ((inst_36009) || (inst_36010));
var state_36048__$1 = (function (){var statearr_36070 = state_36048;
(statearr_36070[(14)] = inst_36007__$1);

(statearr_36070[(9)] = inst_36008__$1);

return statearr_36070;
})();
if(cljs.core.truth_(inst_36011)){
var statearr_36071_37094 = state_36048__$1;
(statearr_36071_37094[(1)] = (23));

} else {
var statearr_36072_37095 = state_36048__$1;
(statearr_36072_37095[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (36))){
var inst_35998 = (state_36048[(12)]);
var inst_35975 = inst_35998;
var state_36048__$1 = (function (){var statearr_36073 = state_36048;
(statearr_36073[(7)] = inst_35975);

return statearr_36073;
})();
var statearr_36074_37096 = state_36048__$1;
(statearr_36074_37096[(2)] = null);

(statearr_36074_37096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (29))){
var inst_36022 = (state_36048[(11)]);
var state_36048__$1 = state_36048;
var statearr_36075_37097 = state_36048__$1;
(statearr_36075_37097[(2)] = inst_36022);

(statearr_36075_37097[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (6))){
var state_36048__$1 = state_36048;
var statearr_36076_37098 = state_36048__$1;
(statearr_36076_37098[(2)] = false);

(statearr_36076_37098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (28))){
var inst_36018 = (state_36048[(2)]);
var inst_36019 = calc_state();
var inst_35975 = inst_36019;
var state_36048__$1 = (function (){var statearr_36077 = state_36048;
(statearr_36077[(7)] = inst_35975);

(statearr_36077[(15)] = inst_36018);

return statearr_36077;
})();
var statearr_36078_37107 = state_36048__$1;
(statearr_36078_37107[(2)] = null);

(statearr_36078_37107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (25))){
var inst_36044 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
var statearr_36079_37108 = state_36048__$1;
(statearr_36079_37108[(2)] = inst_36044);

(statearr_36079_37108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (34))){
var inst_36042 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
var statearr_36080_37109 = state_36048__$1;
(statearr_36080_37109[(2)] = inst_36042);

(statearr_36080_37109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (17))){
var state_36048__$1 = state_36048;
var statearr_36081_37110 = state_36048__$1;
(statearr_36081_37110[(2)] = false);

(statearr_36081_37110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (3))){
var state_36048__$1 = state_36048;
var statearr_36082_37111 = state_36048__$1;
(statearr_36082_37111[(2)] = false);

(statearr_36082_37111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (12))){
var inst_36046 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36048__$1,inst_36046);
} else {
if((state_val_36049 === (2))){
var inst_35950 = (state_36048[(8)]);
var inst_35955 = inst_35950.cljs$lang$protocol_mask$partition0$;
var inst_35956 = (inst_35955 & (64));
var inst_35957 = inst_35950.cljs$core$ISeq$;
var inst_35958 = (cljs.core.PROTOCOL_SENTINEL === inst_35957);
var inst_35959 = ((inst_35956) || (inst_35958));
var state_36048__$1 = state_36048;
if(cljs.core.truth_(inst_35959)){
var statearr_36083_37112 = state_36048__$1;
(statearr_36083_37112[(1)] = (5));

} else {
var statearr_36084_37113 = state_36048__$1;
(statearr_36084_37113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (23))){
var inst_36007 = (state_36048[(14)]);
var inst_36013 = (inst_36007 == null);
var state_36048__$1 = state_36048;
if(cljs.core.truth_(inst_36013)){
var statearr_36085_37114 = state_36048__$1;
(statearr_36085_37114[(1)] = (26));

} else {
var statearr_36086_37115 = state_36048__$1;
(statearr_36086_37115[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (35))){
var inst_36033 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
if(cljs.core.truth_(inst_36033)){
var statearr_36087_37129 = state_36048__$1;
(statearr_36087_37129[(1)] = (36));

} else {
var statearr_36088_37130 = state_36048__$1;
(statearr_36088_37130[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (19))){
var inst_35975 = (state_36048[(7)]);
var inst_35995 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35975);
var state_36048__$1 = state_36048;
var statearr_36089_37131 = state_36048__$1;
(statearr_36089_37131[(2)] = inst_35995);

(statearr_36089_37131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (11))){
var inst_35975 = (state_36048[(7)]);
var inst_35979 = (inst_35975 == null);
var inst_35980 = cljs.core.not(inst_35979);
var state_36048__$1 = state_36048;
if(inst_35980){
var statearr_36090_37132 = state_36048__$1;
(statearr_36090_37132[(1)] = (13));

} else {
var statearr_36091_37133 = state_36048__$1;
(statearr_36091_37133[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (9))){
var inst_35950 = (state_36048[(8)]);
var state_36048__$1 = state_36048;
var statearr_36092_37134 = state_36048__$1;
(statearr_36092_37134[(2)] = inst_35950);

(statearr_36092_37134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (5))){
var state_36048__$1 = state_36048;
var statearr_36093_37135 = state_36048__$1;
(statearr_36093_37135[(2)] = true);

(statearr_36093_37135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (14))){
var state_36048__$1 = state_36048;
var statearr_36094_37136 = state_36048__$1;
(statearr_36094_37136[(2)] = false);

(statearr_36094_37136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (26))){
var inst_36008 = (state_36048[(9)]);
var inst_36015 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36008);
var state_36048__$1 = state_36048;
var statearr_36095_37137 = state_36048__$1;
(statearr_36095_37137[(2)] = inst_36015);

(statearr_36095_37137[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (16))){
var state_36048__$1 = state_36048;
var statearr_36096_37138 = state_36048__$1;
(statearr_36096_37138[(2)] = true);

(statearr_36096_37138[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (38))){
var inst_36038 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
var statearr_36097_37145 = state_36048__$1;
(statearr_36097_37145[(2)] = inst_36038);

(statearr_36097_37145[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (30))){
var inst_36008 = (state_36048[(9)]);
var inst_35999 = (state_36048[(10)]);
var inst_36000 = (state_36048[(13)]);
var inst_36025 = cljs.core.empty_QMARK_(inst_35999);
var inst_36026 = (inst_36000.cljs$core$IFn$_invoke$arity$1 ? inst_36000.cljs$core$IFn$_invoke$arity$1(inst_36008) : inst_36000.call(null,inst_36008));
var inst_36027 = cljs.core.not(inst_36026);
var inst_36028 = ((inst_36025) && (inst_36027));
var state_36048__$1 = state_36048;
var statearr_36098_37146 = state_36048__$1;
(statearr_36098_37146[(2)] = inst_36028);

(statearr_36098_37146[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (10))){
var inst_35950 = (state_36048[(8)]);
var inst_35971 = (state_36048[(2)]);
var inst_35972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35971,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35971,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35971,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35975 = inst_35950;
var state_36048__$1 = (function (){var statearr_36099 = state_36048;
(statearr_36099[(7)] = inst_35975);

(statearr_36099[(16)] = inst_35973);

(statearr_36099[(17)] = inst_35972);

(statearr_36099[(18)] = inst_35974);

return statearr_36099;
})();
var statearr_36100_37147 = state_36048__$1;
(statearr_36100_37147[(2)] = null);

(statearr_36100_37147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (18))){
var inst_35990 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
var statearr_36101_37148 = state_36048__$1;
(statearr_36101_37148[(2)] = inst_35990);

(statearr_36101_37148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (37))){
var state_36048__$1 = state_36048;
var statearr_36102_37149 = state_36048__$1;
(statearr_36102_37149[(2)] = null);

(statearr_36102_37149[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (8))){
var inst_35950 = (state_36048[(8)]);
var inst_35968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35950);
var state_36048__$1 = state_36048;
var statearr_36103_37150 = state_36048__$1;
(statearr_36103_37150[(2)] = inst_35968);

(statearr_36103_37150[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__35185__auto__ = null;
var cljs$core$async$mix_$_state_machine__35185__auto____0 = (function (){
var statearr_36104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36104[(0)] = cljs$core$async$mix_$_state_machine__35185__auto__);

(statearr_36104[(1)] = (1));

return statearr_36104;
});
var cljs$core$async$mix_$_state_machine__35185__auto____1 = (function (state_36048){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_36048);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e36105){if((e36105 instanceof Object)){
var ex__35188__auto__ = e36105;
var statearr_36106_37157 = state_36048;
(statearr_36106_37157[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37158 = state_36048;
state_36048 = G__37158;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35185__auto__ = function(state_36048){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35185__auto____1.call(this,state_36048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35185__auto____0;
cljs$core$async$mix_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35185__auto____1;
return cljs$core$async$mix_$_state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_36107 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_36107[(6)] = c__35254__auto___37066);

return statearr_36107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36109 = arguments.length;
switch (G__36109) {
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
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__36112 = arguments.length;
switch (G__36112) {
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
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36110_SHARP_){
if(cljs.core.truth_((p1__36110_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36110_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36110_SHARP_.call(null,topic)))){
return p1__36110_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36110_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36113 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36114){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36114 = meta36114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36115,meta36114__$1){
var self__ = this;
var _36115__$1 = this;
return (new cljs.core.async.t_cljs$core$async36113(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36114__$1));
}));

(cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36115){
var self__ = this;
var _36115__$1 = this;
return self__.meta36114;
}));

(cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36114","meta36114",-536763547,null)], null);
}));

(cljs.core.async.t_cljs$core$async36113.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36113");

(cljs.core.async.t_cljs$core$async36113.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36113");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36113.
 */
cljs.core.async.__GT_t_cljs$core$async36113 = (function cljs$core$async$__GT_t_cljs$core$async36113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36114){
return (new cljs.core.async.t_cljs$core$async36113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36114));
});

}

return (new cljs.core.async.t_cljs$core$async36113(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35254__auto___37167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_36187){
var state_val_36188 = (state_36187[(1)]);
if((state_val_36188 === (7))){
var inst_36183 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36189_37168 = state_36187__$1;
(statearr_36189_37168[(2)] = inst_36183);

(statearr_36189_37168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (20))){
var state_36187__$1 = state_36187;
var statearr_36190_37169 = state_36187__$1;
(statearr_36190_37169[(2)] = null);

(statearr_36190_37169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (1))){
var state_36187__$1 = state_36187;
var statearr_36191_37170 = state_36187__$1;
(statearr_36191_37170[(2)] = null);

(statearr_36191_37170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (24))){
var inst_36166 = (state_36187[(7)]);
var inst_36175 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36166);
var state_36187__$1 = state_36187;
var statearr_36192_37171 = state_36187__$1;
(statearr_36192_37171[(2)] = inst_36175);

(statearr_36192_37171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (4))){
var inst_36118 = (state_36187[(8)]);
var inst_36118__$1 = (state_36187[(2)]);
var inst_36119 = (inst_36118__$1 == null);
var state_36187__$1 = (function (){var statearr_36193 = state_36187;
(statearr_36193[(8)] = inst_36118__$1);

return statearr_36193;
})();
if(cljs.core.truth_(inst_36119)){
var statearr_36194_37172 = state_36187__$1;
(statearr_36194_37172[(1)] = (5));

} else {
var statearr_36195_37173 = state_36187__$1;
(statearr_36195_37173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (15))){
var inst_36160 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36196_37174 = state_36187__$1;
(statearr_36196_37174[(2)] = inst_36160);

(statearr_36196_37174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (21))){
var inst_36180 = (state_36187[(2)]);
var state_36187__$1 = (function (){var statearr_36197 = state_36187;
(statearr_36197[(9)] = inst_36180);

return statearr_36197;
})();
var statearr_36198_37175 = state_36187__$1;
(statearr_36198_37175[(2)] = null);

(statearr_36198_37175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (13))){
var inst_36142 = (state_36187[(10)]);
var inst_36144 = cljs.core.chunked_seq_QMARK_(inst_36142);
var state_36187__$1 = state_36187;
if(inst_36144){
var statearr_36199_37176 = state_36187__$1;
(statearr_36199_37176[(1)] = (16));

} else {
var statearr_36200_37177 = state_36187__$1;
(statearr_36200_37177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (22))){
var inst_36172 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
if(cljs.core.truth_(inst_36172)){
var statearr_36201_37178 = state_36187__$1;
(statearr_36201_37178[(1)] = (23));

} else {
var statearr_36202_37179 = state_36187__$1;
(statearr_36202_37179[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (6))){
var inst_36166 = (state_36187[(7)]);
var inst_36168 = (state_36187[(11)]);
var inst_36118 = (state_36187[(8)]);
var inst_36166__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36118) : topic_fn.call(null,inst_36118));
var inst_36167 = cljs.core.deref(mults);
var inst_36168__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36167,inst_36166__$1);
var state_36187__$1 = (function (){var statearr_36203 = state_36187;
(statearr_36203[(7)] = inst_36166__$1);

(statearr_36203[(11)] = inst_36168__$1);

return statearr_36203;
})();
if(cljs.core.truth_(inst_36168__$1)){
var statearr_36204_37180 = state_36187__$1;
(statearr_36204_37180[(1)] = (19));

} else {
var statearr_36205_37181 = state_36187__$1;
(statearr_36205_37181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (25))){
var inst_36177 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36206_37182 = state_36187__$1;
(statearr_36206_37182[(2)] = inst_36177);

(statearr_36206_37182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (17))){
var inst_36142 = (state_36187[(10)]);
var inst_36151 = cljs.core.first(inst_36142);
var inst_36152 = cljs.core.async.muxch_STAR_(inst_36151);
var inst_36153 = cljs.core.async.close_BANG_(inst_36152);
var inst_36154 = cljs.core.next(inst_36142);
var inst_36128 = inst_36154;
var inst_36129 = null;
var inst_36130 = (0);
var inst_36131 = (0);
var state_36187__$1 = (function (){var statearr_36207 = state_36187;
(statearr_36207[(12)] = inst_36129);

(statearr_36207[(13)] = inst_36130);

(statearr_36207[(14)] = inst_36153);

(statearr_36207[(15)] = inst_36128);

(statearr_36207[(16)] = inst_36131);

return statearr_36207;
})();
var statearr_36208_37183 = state_36187__$1;
(statearr_36208_37183[(2)] = null);

(statearr_36208_37183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (3))){
var inst_36185 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36187__$1,inst_36185);
} else {
if((state_val_36188 === (12))){
var inst_36162 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36209_37184 = state_36187__$1;
(statearr_36209_37184[(2)] = inst_36162);

(statearr_36209_37184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (2))){
var state_36187__$1 = state_36187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36187__$1,(4),ch);
} else {
if((state_val_36188 === (23))){
var state_36187__$1 = state_36187;
var statearr_36210_37185 = state_36187__$1;
(statearr_36210_37185[(2)] = null);

(statearr_36210_37185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (19))){
var inst_36168 = (state_36187[(11)]);
var inst_36118 = (state_36187[(8)]);
var inst_36170 = cljs.core.async.muxch_STAR_(inst_36168);
var state_36187__$1 = state_36187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36187__$1,(22),inst_36170,inst_36118);
} else {
if((state_val_36188 === (11))){
var inst_36142 = (state_36187[(10)]);
var inst_36128 = (state_36187[(15)]);
var inst_36142__$1 = cljs.core.seq(inst_36128);
var state_36187__$1 = (function (){var statearr_36211 = state_36187;
(statearr_36211[(10)] = inst_36142__$1);

return statearr_36211;
})();
if(inst_36142__$1){
var statearr_36212_37187 = state_36187__$1;
(statearr_36212_37187[(1)] = (13));

} else {
var statearr_36213_37188 = state_36187__$1;
(statearr_36213_37188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (9))){
var inst_36164 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36214_37190 = state_36187__$1;
(statearr_36214_37190[(2)] = inst_36164);

(statearr_36214_37190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (5))){
var inst_36125 = cljs.core.deref(mults);
var inst_36126 = cljs.core.vals(inst_36125);
var inst_36127 = cljs.core.seq(inst_36126);
var inst_36128 = inst_36127;
var inst_36129 = null;
var inst_36130 = (0);
var inst_36131 = (0);
var state_36187__$1 = (function (){var statearr_36215 = state_36187;
(statearr_36215[(12)] = inst_36129);

(statearr_36215[(13)] = inst_36130);

(statearr_36215[(15)] = inst_36128);

(statearr_36215[(16)] = inst_36131);

return statearr_36215;
})();
var statearr_36216_37195 = state_36187__$1;
(statearr_36216_37195[(2)] = null);

(statearr_36216_37195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (14))){
var state_36187__$1 = state_36187;
var statearr_36220_37196 = state_36187__$1;
(statearr_36220_37196[(2)] = null);

(statearr_36220_37196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (16))){
var inst_36142 = (state_36187[(10)]);
var inst_36146 = cljs.core.chunk_first(inst_36142);
var inst_36147 = cljs.core.chunk_rest(inst_36142);
var inst_36148 = cljs.core.count(inst_36146);
var inst_36128 = inst_36147;
var inst_36129 = inst_36146;
var inst_36130 = inst_36148;
var inst_36131 = (0);
var state_36187__$1 = (function (){var statearr_36221 = state_36187;
(statearr_36221[(12)] = inst_36129);

(statearr_36221[(13)] = inst_36130);

(statearr_36221[(15)] = inst_36128);

(statearr_36221[(16)] = inst_36131);

return statearr_36221;
})();
var statearr_36222_37197 = state_36187__$1;
(statearr_36222_37197[(2)] = null);

(statearr_36222_37197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (10))){
var inst_36129 = (state_36187[(12)]);
var inst_36130 = (state_36187[(13)]);
var inst_36128 = (state_36187[(15)]);
var inst_36131 = (state_36187[(16)]);
var inst_36136 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36129,inst_36131);
var inst_36137 = cljs.core.async.muxch_STAR_(inst_36136);
var inst_36138 = cljs.core.async.close_BANG_(inst_36137);
var inst_36139 = (inst_36131 + (1));
var tmp36217 = inst_36129;
var tmp36218 = inst_36130;
var tmp36219 = inst_36128;
var inst_36128__$1 = tmp36219;
var inst_36129__$1 = tmp36217;
var inst_36130__$1 = tmp36218;
var inst_36131__$1 = inst_36139;
var state_36187__$1 = (function (){var statearr_36223 = state_36187;
(statearr_36223[(17)] = inst_36138);

(statearr_36223[(12)] = inst_36129__$1);

(statearr_36223[(13)] = inst_36130__$1);

(statearr_36223[(15)] = inst_36128__$1);

(statearr_36223[(16)] = inst_36131__$1);

return statearr_36223;
})();
var statearr_36224_37198 = state_36187__$1;
(statearr_36224_37198[(2)] = null);

(statearr_36224_37198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (18))){
var inst_36157 = (state_36187[(2)]);
var state_36187__$1 = state_36187;
var statearr_36225_37199 = state_36187__$1;
(statearr_36225_37199[(2)] = inst_36157);

(statearr_36225_37199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36188 === (8))){
var inst_36130 = (state_36187[(13)]);
var inst_36131 = (state_36187[(16)]);
var inst_36133 = (inst_36131 < inst_36130);
var inst_36134 = inst_36133;
var state_36187__$1 = state_36187;
if(cljs.core.truth_(inst_36134)){
var statearr_36226_37200 = state_36187__$1;
(statearr_36226_37200[(1)] = (10));

} else {
var statearr_36227_37201 = state_36187__$1;
(statearr_36227_37201[(1)] = (11));

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
var cljs$core$async$state_machine__35185__auto__ = null;
var cljs$core$async$state_machine__35185__auto____0 = (function (){
var statearr_36228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36228[(0)] = cljs$core$async$state_machine__35185__auto__);

(statearr_36228[(1)] = (1));

return statearr_36228;
});
var cljs$core$async$state_machine__35185__auto____1 = (function (state_36187){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_36187);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e36229){if((e36229 instanceof Object)){
var ex__35188__auto__ = e36229;
var statearr_36230_37202 = state_36187;
(statearr_36230_37202[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37203 = state_36187;
state_36187 = G__37203;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$state_machine__35185__auto__ = function(state_36187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35185__auto____1.call(this,state_36187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35185__auto____0;
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35185__auto____1;
return cljs$core$async$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_36231 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_36231[(6)] = c__35254__auto___37167);

return statearr_36231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
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
var G__36233 = arguments.length;
switch (G__36233) {
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
var G__36235 = arguments.length;
switch (G__36235) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__36237 = arguments.length;
switch (G__36237) {
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
var c__35254__auto___37207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_36276){
var state_val_36277 = (state_36276[(1)]);
if((state_val_36277 === (7))){
var state_36276__$1 = state_36276;
var statearr_36278_37208 = state_36276__$1;
(statearr_36278_37208[(2)] = null);

(statearr_36278_37208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (1))){
var state_36276__$1 = state_36276;
var statearr_36279_37209 = state_36276__$1;
(statearr_36279_37209[(2)] = null);

(statearr_36279_37209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (4))){
var inst_36240 = (state_36276[(7)]);
var inst_36242 = (inst_36240 < cnt);
var state_36276__$1 = state_36276;
if(cljs.core.truth_(inst_36242)){
var statearr_36280_37212 = state_36276__$1;
(statearr_36280_37212[(1)] = (6));

} else {
var statearr_36281_37213 = state_36276__$1;
(statearr_36281_37213[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (15))){
var inst_36272 = (state_36276[(2)]);
var state_36276__$1 = state_36276;
var statearr_36282_37214 = state_36276__$1;
(statearr_36282_37214[(2)] = inst_36272);

(statearr_36282_37214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (13))){
var inst_36265 = cljs.core.async.close_BANG_(out);
var state_36276__$1 = state_36276;
var statearr_36283_37215 = state_36276__$1;
(statearr_36283_37215[(2)] = inst_36265);

(statearr_36283_37215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (6))){
var state_36276__$1 = state_36276;
var statearr_36284_37216 = state_36276__$1;
(statearr_36284_37216[(2)] = null);

(statearr_36284_37216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (3))){
var inst_36274 = (state_36276[(2)]);
var state_36276__$1 = state_36276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36276__$1,inst_36274);
} else {
if((state_val_36277 === (12))){
var inst_36262 = (state_36276[(8)]);
var inst_36262__$1 = (state_36276[(2)]);
var inst_36263 = cljs.core.some(cljs.core.nil_QMARK_,inst_36262__$1);
var state_36276__$1 = (function (){var statearr_36285 = state_36276;
(statearr_36285[(8)] = inst_36262__$1);

return statearr_36285;
})();
if(cljs.core.truth_(inst_36263)){
var statearr_36286_37219 = state_36276__$1;
(statearr_36286_37219[(1)] = (13));

} else {
var statearr_36287_37220 = state_36276__$1;
(statearr_36287_37220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (2))){
var inst_36239 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36240 = (0);
var state_36276__$1 = (function (){var statearr_36288 = state_36276;
(statearr_36288[(7)] = inst_36240);

(statearr_36288[(9)] = inst_36239);

return statearr_36288;
})();
var statearr_36289_37221 = state_36276__$1;
(statearr_36289_37221[(2)] = null);

(statearr_36289_37221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (11))){
var inst_36240 = (state_36276[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36276,(10),Object,null,(9));
var inst_36249 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36240) : chs__$1.call(null,inst_36240));
var inst_36250 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36240) : done.call(null,inst_36240));
var inst_36251 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36249,inst_36250);
var state_36276__$1 = state_36276;
var statearr_36290_37222 = state_36276__$1;
(statearr_36290_37222[(2)] = inst_36251);


cljs.core.async.impl.ioc_helpers.process_exception(state_36276__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (9))){
var inst_36240 = (state_36276[(7)]);
var inst_36253 = (state_36276[(2)]);
var inst_36254 = (inst_36240 + (1));
var inst_36240__$1 = inst_36254;
var state_36276__$1 = (function (){var statearr_36291 = state_36276;
(statearr_36291[(10)] = inst_36253);

(statearr_36291[(7)] = inst_36240__$1);

return statearr_36291;
})();
var statearr_36292_37225 = state_36276__$1;
(statearr_36292_37225[(2)] = null);

(statearr_36292_37225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (5))){
var inst_36260 = (state_36276[(2)]);
var state_36276__$1 = (function (){var statearr_36293 = state_36276;
(statearr_36293[(11)] = inst_36260);

return statearr_36293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36276__$1,(12),dchan);
} else {
if((state_val_36277 === (14))){
var inst_36262 = (state_36276[(8)]);
var inst_36267 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36262);
var state_36276__$1 = state_36276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36276__$1,(16),out,inst_36267);
} else {
if((state_val_36277 === (16))){
var inst_36269 = (state_36276[(2)]);
var state_36276__$1 = (function (){var statearr_36294 = state_36276;
(statearr_36294[(12)] = inst_36269);

return statearr_36294;
})();
var statearr_36295_37226 = state_36276__$1;
(statearr_36295_37226[(2)] = null);

(statearr_36295_37226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (10))){
var inst_36244 = (state_36276[(2)]);
var inst_36245 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36276__$1 = (function (){var statearr_36296 = state_36276;
(statearr_36296[(13)] = inst_36244);

return statearr_36296;
})();
var statearr_36297_37227 = state_36276__$1;
(statearr_36297_37227[(2)] = inst_36245);


cljs.core.async.impl.ioc_helpers.process_exception(state_36276__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36277 === (8))){
var inst_36258 = (state_36276[(2)]);
var state_36276__$1 = state_36276;
var statearr_36298_37228 = state_36276__$1;
(statearr_36298_37228[(2)] = inst_36258);

(statearr_36298_37228[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__35185__auto__ = null;
var cljs$core$async$state_machine__35185__auto____0 = (function (){
var statearr_36299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36299[(0)] = cljs$core$async$state_machine__35185__auto__);

(statearr_36299[(1)] = (1));

return statearr_36299;
});
var cljs$core$async$state_machine__35185__auto____1 = (function (state_36276){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_36276);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e36300){if((e36300 instanceof Object)){
var ex__35188__auto__ = e36300;
var statearr_36301_37229 = state_36276;
(statearr_36301_37229[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37230 = state_36276;
state_36276 = G__37230;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$state_machine__35185__auto__ = function(state_36276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35185__auto____1.call(this,state_36276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35185__auto____0;
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35185__auto____1;
return cljs$core$async$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_36302 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_36302[(6)] = c__35254__auto___37207);

return statearr_36302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));


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
var G__36305 = arguments.length;
switch (G__36305) {
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
var c__35254__auto___37232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_36337){
var state_val_36338 = (state_36337[(1)]);
if((state_val_36338 === (7))){
var inst_36316 = (state_36337[(7)]);
var inst_36317 = (state_36337[(8)]);
var inst_36316__$1 = (state_36337[(2)]);
var inst_36317__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36316__$1,(0),null);
var inst_36318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36316__$1,(1),null);
var inst_36319 = (inst_36317__$1 == null);
var state_36337__$1 = (function (){var statearr_36339 = state_36337;
(statearr_36339[(9)] = inst_36318);

(statearr_36339[(7)] = inst_36316__$1);

(statearr_36339[(8)] = inst_36317__$1);

return statearr_36339;
})();
if(cljs.core.truth_(inst_36319)){
var statearr_36340_37235 = state_36337__$1;
(statearr_36340_37235[(1)] = (8));

} else {
var statearr_36341_37236 = state_36337__$1;
(statearr_36341_37236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (1))){
var inst_36306 = cljs.core.vec(chs);
var inst_36307 = inst_36306;
var state_36337__$1 = (function (){var statearr_36342 = state_36337;
(statearr_36342[(10)] = inst_36307);

return statearr_36342;
})();
var statearr_36343_37237 = state_36337__$1;
(statearr_36343_37237[(2)] = null);

(statearr_36343_37237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (4))){
var inst_36307 = (state_36337[(10)]);
var state_36337__$1 = state_36337;
return cljs.core.async.ioc_alts_BANG_(state_36337__$1,(7),inst_36307);
} else {
if((state_val_36338 === (6))){
var inst_36333 = (state_36337[(2)]);
var state_36337__$1 = state_36337;
var statearr_36344_37238 = state_36337__$1;
(statearr_36344_37238[(2)] = inst_36333);

(statearr_36344_37238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (3))){
var inst_36335 = (state_36337[(2)]);
var state_36337__$1 = state_36337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36337__$1,inst_36335);
} else {
if((state_val_36338 === (2))){
var inst_36307 = (state_36337[(10)]);
var inst_36309 = cljs.core.count(inst_36307);
var inst_36310 = (inst_36309 > (0));
var state_36337__$1 = state_36337;
if(cljs.core.truth_(inst_36310)){
var statearr_36346_37239 = state_36337__$1;
(statearr_36346_37239[(1)] = (4));

} else {
var statearr_36347_37240 = state_36337__$1;
(statearr_36347_37240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (11))){
var inst_36307 = (state_36337[(10)]);
var inst_36326 = (state_36337[(2)]);
var tmp36345 = inst_36307;
var inst_36307__$1 = tmp36345;
var state_36337__$1 = (function (){var statearr_36348 = state_36337;
(statearr_36348[(10)] = inst_36307__$1);

(statearr_36348[(11)] = inst_36326);

return statearr_36348;
})();
var statearr_36349_37241 = state_36337__$1;
(statearr_36349_37241[(2)] = null);

(statearr_36349_37241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (9))){
var inst_36317 = (state_36337[(8)]);
var state_36337__$1 = state_36337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36337__$1,(11),out,inst_36317);
} else {
if((state_val_36338 === (5))){
var inst_36331 = cljs.core.async.close_BANG_(out);
var state_36337__$1 = state_36337;
var statearr_36350_37242 = state_36337__$1;
(statearr_36350_37242[(2)] = inst_36331);

(statearr_36350_37242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (10))){
var inst_36329 = (state_36337[(2)]);
var state_36337__$1 = state_36337;
var statearr_36351_37243 = state_36337__$1;
(statearr_36351_37243[(2)] = inst_36329);

(statearr_36351_37243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36338 === (8))){
var inst_36307 = (state_36337[(10)]);
var inst_36318 = (state_36337[(9)]);
var inst_36316 = (state_36337[(7)]);
var inst_36317 = (state_36337[(8)]);
var inst_36321 = (function (){var cs = inst_36307;
var vec__36312 = inst_36316;
var v = inst_36317;
var c = inst_36318;
return (function (p1__36303_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36303_SHARP_);
});
})();
var inst_36322 = cljs.core.filterv(inst_36321,inst_36307);
var inst_36307__$1 = inst_36322;
var state_36337__$1 = (function (){var statearr_36352 = state_36337;
(statearr_36352[(10)] = inst_36307__$1);

return statearr_36352;
})();
var statearr_36353_37244 = state_36337__$1;
(statearr_36353_37244[(2)] = null);

(statearr_36353_37244[(1)] = (2));


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
var cljs$core$async$state_machine__35185__auto__ = null;
var cljs$core$async$state_machine__35185__auto____0 = (function (){
var statearr_36354 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36354[(0)] = cljs$core$async$state_machine__35185__auto__);

(statearr_36354[(1)] = (1));

return statearr_36354;
});
var cljs$core$async$state_machine__35185__auto____1 = (function (state_36337){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_36337);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e36355){if((e36355 instanceof Object)){
var ex__35188__auto__ = e36355;
var statearr_36356_37245 = state_36337;
(statearr_36356_37245[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37246 = state_36337;
state_36337 = G__37246;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$state_machine__35185__auto__ = function(state_36337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35185__auto____1.call(this,state_36337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35185__auto____0;
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35185__auto____1;
return cljs$core$async$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_36357 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_36357[(6)] = c__35254__auto___37232);

return statearr_36357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
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
var G__36359 = arguments.length;
switch (G__36359) {
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
var c__35254__auto___37249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_36383){
var state_val_36384 = (state_36383[(1)]);
if((state_val_36384 === (7))){
var inst_36365 = (state_36383[(7)]);
var inst_36365__$1 = (state_36383[(2)]);
var inst_36366 = (inst_36365__$1 == null);
var inst_36367 = cljs.core.not(inst_36366);
var state_36383__$1 = (function (){var statearr_36385 = state_36383;
(statearr_36385[(7)] = inst_36365__$1);

return statearr_36385;
})();
if(inst_36367){
var statearr_36386_37250 = state_36383__$1;
(statearr_36386_37250[(1)] = (8));

} else {
var statearr_36387_37251 = state_36383__$1;
(statearr_36387_37251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (1))){
var inst_36360 = (0);
var state_36383__$1 = (function (){var statearr_36388 = state_36383;
(statearr_36388[(8)] = inst_36360);

return statearr_36388;
})();
var statearr_36389_37252 = state_36383__$1;
(statearr_36389_37252[(2)] = null);

(statearr_36389_37252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (4))){
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36383__$1,(7),ch);
} else {
if((state_val_36384 === (6))){
var inst_36378 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36390_37257 = state_36383__$1;
(statearr_36390_37257[(2)] = inst_36378);

(statearr_36390_37257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (3))){
var inst_36380 = (state_36383[(2)]);
var inst_36381 = cljs.core.async.close_BANG_(out);
var state_36383__$1 = (function (){var statearr_36391 = state_36383;
(statearr_36391[(9)] = inst_36380);

return statearr_36391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36383__$1,inst_36381);
} else {
if((state_val_36384 === (2))){
var inst_36360 = (state_36383[(8)]);
var inst_36362 = (inst_36360 < n);
var state_36383__$1 = state_36383;
if(cljs.core.truth_(inst_36362)){
var statearr_36392_37258 = state_36383__$1;
(statearr_36392_37258[(1)] = (4));

} else {
var statearr_36393_37259 = state_36383__$1;
(statearr_36393_37259[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (11))){
var inst_36360 = (state_36383[(8)]);
var inst_36370 = (state_36383[(2)]);
var inst_36371 = (inst_36360 + (1));
var inst_36360__$1 = inst_36371;
var state_36383__$1 = (function (){var statearr_36394 = state_36383;
(statearr_36394[(8)] = inst_36360__$1);

(statearr_36394[(10)] = inst_36370);

return statearr_36394;
})();
var statearr_36395_37260 = state_36383__$1;
(statearr_36395_37260[(2)] = null);

(statearr_36395_37260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (9))){
var state_36383__$1 = state_36383;
var statearr_36396_37261 = state_36383__$1;
(statearr_36396_37261[(2)] = null);

(statearr_36396_37261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (5))){
var state_36383__$1 = state_36383;
var statearr_36397_37262 = state_36383__$1;
(statearr_36397_37262[(2)] = null);

(statearr_36397_37262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (10))){
var inst_36375 = (state_36383[(2)]);
var state_36383__$1 = state_36383;
var statearr_36398_37263 = state_36383__$1;
(statearr_36398_37263[(2)] = inst_36375);

(statearr_36398_37263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36384 === (8))){
var inst_36365 = (state_36383[(7)]);
var state_36383__$1 = state_36383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36383__$1,(11),out,inst_36365);
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
var cljs$core$async$state_machine__35185__auto__ = null;
var cljs$core$async$state_machine__35185__auto____0 = (function (){
var statearr_36399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36399[(0)] = cljs$core$async$state_machine__35185__auto__);

(statearr_36399[(1)] = (1));

return statearr_36399;
});
var cljs$core$async$state_machine__35185__auto____1 = (function (state_36383){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_36383);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e36400){if((e36400 instanceof Object)){
var ex__35188__auto__ = e36400;
var statearr_36401_37264 = state_36383;
(statearr_36401_37264[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36400;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37265 = state_36383;
state_36383 = G__37265;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$state_machine__35185__auto__ = function(state_36383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35185__auto____1.call(this,state_36383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35185__auto____0;
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35185__auto____1;
return cljs$core$async$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_36402 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_36402[(6)] = c__35254__auto___37249);

return statearr_36402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36404 = (function (f,ch,meta36405){
this.f = f;
this.ch = ch;
this.meta36405 = meta36405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36406,meta36405__$1){
var self__ = this;
var _36406__$1 = this;
return (new cljs.core.async.t_cljs$core$async36404(self__.f,self__.ch,meta36405__$1));
}));

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36406){
var self__ = this;
var _36406__$1 = this;
return self__.meta36405;
}));

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36407 = (function (f,ch,meta36405,_,fn1,meta36408){
this.f = f;
this.ch = ch;
this.meta36405 = meta36405;
this._ = _;
this.fn1 = fn1;
this.meta36408 = meta36408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36409,meta36408__$1){
var self__ = this;
var _36409__$1 = this;
return (new cljs.core.async.t_cljs$core$async36407(self__.f,self__.ch,self__.meta36405,self__._,self__.fn1,meta36408__$1));
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36409){
var self__ = this;
var _36409__$1 = this;
return self__.meta36408;
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36403_SHARP_){
var G__36410 = (((p1__36403_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36403_SHARP_) : self__.f.call(null,p1__36403_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36410) : f1.call(null,G__36410));
});
}));

(cljs.core.async.t_cljs$core$async36407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36405","meta36405",1075721384,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36404","cljs.core.async/t_cljs$core$async36404",-1143126001,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36408","meta36408",-1637216098,null)], null);
}));

(cljs.core.async.t_cljs$core$async36407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36407");

(cljs.core.async.t_cljs$core$async36407.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36407.
 */
cljs.core.async.__GT_t_cljs$core$async36407 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36407(f__$1,ch__$1,meta36405__$1,___$2,fn1__$1,meta36408){
return (new cljs.core.async.t_cljs$core$async36407(f__$1,ch__$1,meta36405__$1,___$2,fn1__$1,meta36408));
});

}

return (new cljs.core.async.t_cljs$core$async36407(self__.f,self__.ch,self__.meta36405,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36411 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36411) : self__.f.call(null,G__36411));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36405","meta36405",1075721384,null)], null);
}));

(cljs.core.async.t_cljs$core$async36404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36404");

(cljs.core.async.t_cljs$core$async36404.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36404.
 */
cljs.core.async.__GT_t_cljs$core$async36404 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36404(f__$1,ch__$1,meta36405){
return (new cljs.core.async.t_cljs$core$async36404(f__$1,ch__$1,meta36405));
});

}

return (new cljs.core.async.t_cljs$core$async36404(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36412 = (function (f,ch,meta36413){
this.f = f;
this.ch = ch;
this.meta36413 = meta36413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36414,meta36413__$1){
var self__ = this;
var _36414__$1 = this;
return (new cljs.core.async.t_cljs$core$async36412(self__.f,self__.ch,meta36413__$1));
}));

(cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36414){
var self__ = this;
var _36414__$1 = this;
return self__.meta36413;
}));

(cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36412.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36413","meta36413",-208761549,null)], null);
}));

(cljs.core.async.t_cljs$core$async36412.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36412");

(cljs.core.async.t_cljs$core$async36412.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36412");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36412.
 */
cljs.core.async.__GT_t_cljs$core$async36412 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36412(f__$1,ch__$1,meta36413){
return (new cljs.core.async.t_cljs$core$async36412(f__$1,ch__$1,meta36413));
});

}

return (new cljs.core.async.t_cljs$core$async36412(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36415 = (function (p,ch,meta36416){
this.p = p;
this.ch = ch;
this.meta36416 = meta36416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36417,meta36416__$1){
var self__ = this;
var _36417__$1 = this;
return (new cljs.core.async.t_cljs$core$async36415(self__.p,self__.ch,meta36416__$1));
}));

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36417){
var self__ = this;
var _36417__$1 = this;
return self__.meta36416;
}));

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36415.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36416","meta36416",2095720356,null)], null);
}));

(cljs.core.async.t_cljs$core$async36415.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36415");

(cljs.core.async.t_cljs$core$async36415.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36415");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36415.
 */
cljs.core.async.__GT_t_cljs$core$async36415 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36415(p__$1,ch__$1,meta36416){
return (new cljs.core.async.t_cljs$core$async36415(p__$1,ch__$1,meta36416));
});

}

return (new cljs.core.async.t_cljs$core$async36415(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36419 = arguments.length;
switch (G__36419) {
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
var c__35254__auto___37291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_36440){
var state_val_36441 = (state_36440[(1)]);
if((state_val_36441 === (7))){
var inst_36436 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
var statearr_36442_37292 = state_36440__$1;
(statearr_36442_37292[(2)] = inst_36436);

(statearr_36442_37292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (1))){
var state_36440__$1 = state_36440;
var statearr_36443_37293 = state_36440__$1;
(statearr_36443_37293[(2)] = null);

(statearr_36443_37293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (4))){
var inst_36422 = (state_36440[(7)]);
var inst_36422__$1 = (state_36440[(2)]);
var inst_36423 = (inst_36422__$1 == null);
var state_36440__$1 = (function (){var statearr_36444 = state_36440;
(statearr_36444[(7)] = inst_36422__$1);

return statearr_36444;
})();
if(cljs.core.truth_(inst_36423)){
var statearr_36445_37294 = state_36440__$1;
(statearr_36445_37294[(1)] = (5));

} else {
var statearr_36446_37297 = state_36440__$1;
(statearr_36446_37297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (6))){
var inst_36422 = (state_36440[(7)]);
var inst_36427 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36422) : p.call(null,inst_36422));
var state_36440__$1 = state_36440;
if(cljs.core.truth_(inst_36427)){
var statearr_36447_37298 = state_36440__$1;
(statearr_36447_37298[(1)] = (8));

} else {
var statearr_36448_37299 = state_36440__$1;
(statearr_36448_37299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (3))){
var inst_36438 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36440__$1,inst_36438);
} else {
if((state_val_36441 === (2))){
var state_36440__$1 = state_36440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36440__$1,(4),ch);
} else {
if((state_val_36441 === (11))){
var inst_36430 = (state_36440[(2)]);
var state_36440__$1 = state_36440;
var statearr_36449_37303 = state_36440__$1;
(statearr_36449_37303[(2)] = inst_36430);

(statearr_36449_37303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (9))){
var state_36440__$1 = state_36440;
var statearr_36450_37304 = state_36440__$1;
(statearr_36450_37304[(2)] = null);

(statearr_36450_37304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (5))){
var inst_36425 = cljs.core.async.close_BANG_(out);
var state_36440__$1 = state_36440;
var statearr_36451_37305 = state_36440__$1;
(statearr_36451_37305[(2)] = inst_36425);

(statearr_36451_37305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (10))){
var inst_36433 = (state_36440[(2)]);
var state_36440__$1 = (function (){var statearr_36452 = state_36440;
(statearr_36452[(8)] = inst_36433);

return statearr_36452;
})();
var statearr_36453_37306 = state_36440__$1;
(statearr_36453_37306[(2)] = null);

(statearr_36453_37306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36441 === (8))){
var inst_36422 = (state_36440[(7)]);
var state_36440__$1 = state_36440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36440__$1,(11),out,inst_36422);
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
var cljs$core$async$state_machine__35185__auto__ = null;
var cljs$core$async$state_machine__35185__auto____0 = (function (){
var statearr_36454 = [null,null,null,null,null,null,null,null,null];
(statearr_36454[(0)] = cljs$core$async$state_machine__35185__auto__);

(statearr_36454[(1)] = (1));

return statearr_36454;
});
var cljs$core$async$state_machine__35185__auto____1 = (function (state_36440){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_36440);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e36455){if((e36455 instanceof Object)){
var ex__35188__auto__ = e36455;
var statearr_36456_37307 = state_36440;
(statearr_36456_37307[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37308 = state_36440;
state_36440 = G__37308;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$state_machine__35185__auto__ = function(state_36440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35185__auto____1.call(this,state_36440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35185__auto____0;
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35185__auto____1;
return cljs$core$async$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_36457 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_36457[(6)] = c__35254__auto___37291);

return statearr_36457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36459 = arguments.length;
switch (G__36459) {
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
var c__35254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_36521){
var state_val_36522 = (state_36521[(1)]);
if((state_val_36522 === (7))){
var inst_36517 = (state_36521[(2)]);
var state_36521__$1 = state_36521;
var statearr_36523_37311 = state_36521__$1;
(statearr_36523_37311[(2)] = inst_36517);

(statearr_36523_37311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (20))){
var inst_36487 = (state_36521[(7)]);
var inst_36498 = (state_36521[(2)]);
var inst_36499 = cljs.core.next(inst_36487);
var inst_36473 = inst_36499;
var inst_36474 = null;
var inst_36475 = (0);
var inst_36476 = (0);
var state_36521__$1 = (function (){var statearr_36524 = state_36521;
(statearr_36524[(8)] = inst_36476);

(statearr_36524[(9)] = inst_36475);

(statearr_36524[(10)] = inst_36473);

(statearr_36524[(11)] = inst_36474);

(statearr_36524[(12)] = inst_36498);

return statearr_36524;
})();
var statearr_36525_37312 = state_36521__$1;
(statearr_36525_37312[(2)] = null);

(statearr_36525_37312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (1))){
var state_36521__$1 = state_36521;
var statearr_36526_37313 = state_36521__$1;
(statearr_36526_37313[(2)] = null);

(statearr_36526_37313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (4))){
var inst_36462 = (state_36521[(13)]);
var inst_36462__$1 = (state_36521[(2)]);
var inst_36463 = (inst_36462__$1 == null);
var state_36521__$1 = (function (){var statearr_36527 = state_36521;
(statearr_36527[(13)] = inst_36462__$1);

return statearr_36527;
})();
if(cljs.core.truth_(inst_36463)){
var statearr_36528_37314 = state_36521__$1;
(statearr_36528_37314[(1)] = (5));

} else {
var statearr_36529_37315 = state_36521__$1;
(statearr_36529_37315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (15))){
var state_36521__$1 = state_36521;
var statearr_36533_37318 = state_36521__$1;
(statearr_36533_37318[(2)] = null);

(statearr_36533_37318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (21))){
var state_36521__$1 = state_36521;
var statearr_36534_37319 = state_36521__$1;
(statearr_36534_37319[(2)] = null);

(statearr_36534_37319[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (13))){
var inst_36476 = (state_36521[(8)]);
var inst_36475 = (state_36521[(9)]);
var inst_36473 = (state_36521[(10)]);
var inst_36474 = (state_36521[(11)]);
var inst_36483 = (state_36521[(2)]);
var inst_36484 = (inst_36476 + (1));
var tmp36530 = inst_36475;
var tmp36531 = inst_36473;
var tmp36532 = inst_36474;
var inst_36473__$1 = tmp36531;
var inst_36474__$1 = tmp36532;
var inst_36475__$1 = tmp36530;
var inst_36476__$1 = inst_36484;
var state_36521__$1 = (function (){var statearr_36535 = state_36521;
(statearr_36535[(8)] = inst_36476__$1);

(statearr_36535[(9)] = inst_36475__$1);

(statearr_36535[(10)] = inst_36473__$1);

(statearr_36535[(14)] = inst_36483);

(statearr_36535[(11)] = inst_36474__$1);

return statearr_36535;
})();
var statearr_36536_37320 = state_36521__$1;
(statearr_36536_37320[(2)] = null);

(statearr_36536_37320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (22))){
var state_36521__$1 = state_36521;
var statearr_36537_37321 = state_36521__$1;
(statearr_36537_37321[(2)] = null);

(statearr_36537_37321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (6))){
var inst_36462 = (state_36521[(13)]);
var inst_36471 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36462) : f.call(null,inst_36462));
var inst_36472 = cljs.core.seq(inst_36471);
var inst_36473 = inst_36472;
var inst_36474 = null;
var inst_36475 = (0);
var inst_36476 = (0);
var state_36521__$1 = (function (){var statearr_36538 = state_36521;
(statearr_36538[(8)] = inst_36476);

(statearr_36538[(9)] = inst_36475);

(statearr_36538[(10)] = inst_36473);

(statearr_36538[(11)] = inst_36474);

return statearr_36538;
})();
var statearr_36539_37322 = state_36521__$1;
(statearr_36539_37322[(2)] = null);

(statearr_36539_37322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (17))){
var inst_36487 = (state_36521[(7)]);
var inst_36491 = cljs.core.chunk_first(inst_36487);
var inst_36492 = cljs.core.chunk_rest(inst_36487);
var inst_36493 = cljs.core.count(inst_36491);
var inst_36473 = inst_36492;
var inst_36474 = inst_36491;
var inst_36475 = inst_36493;
var inst_36476 = (0);
var state_36521__$1 = (function (){var statearr_36540 = state_36521;
(statearr_36540[(8)] = inst_36476);

(statearr_36540[(9)] = inst_36475);

(statearr_36540[(10)] = inst_36473);

(statearr_36540[(11)] = inst_36474);

return statearr_36540;
})();
var statearr_36541_37323 = state_36521__$1;
(statearr_36541_37323[(2)] = null);

(statearr_36541_37323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (3))){
var inst_36519 = (state_36521[(2)]);
var state_36521__$1 = state_36521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36521__$1,inst_36519);
} else {
if((state_val_36522 === (12))){
var inst_36507 = (state_36521[(2)]);
var state_36521__$1 = state_36521;
var statearr_36542_37324 = state_36521__$1;
(statearr_36542_37324[(2)] = inst_36507);

(statearr_36542_37324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (2))){
var state_36521__$1 = state_36521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36521__$1,(4),in$);
} else {
if((state_val_36522 === (23))){
var inst_36515 = (state_36521[(2)]);
var state_36521__$1 = state_36521;
var statearr_36543_37329 = state_36521__$1;
(statearr_36543_37329[(2)] = inst_36515);

(statearr_36543_37329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (19))){
var inst_36502 = (state_36521[(2)]);
var state_36521__$1 = state_36521;
var statearr_36544_37330 = state_36521__$1;
(statearr_36544_37330[(2)] = inst_36502);

(statearr_36544_37330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (11))){
var inst_36473 = (state_36521[(10)]);
var inst_36487 = (state_36521[(7)]);
var inst_36487__$1 = cljs.core.seq(inst_36473);
var state_36521__$1 = (function (){var statearr_36545 = state_36521;
(statearr_36545[(7)] = inst_36487__$1);

return statearr_36545;
})();
if(inst_36487__$1){
var statearr_36546_37331 = state_36521__$1;
(statearr_36546_37331[(1)] = (14));

} else {
var statearr_36547_37332 = state_36521__$1;
(statearr_36547_37332[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (9))){
var inst_36509 = (state_36521[(2)]);
var inst_36510 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36521__$1 = (function (){var statearr_36548 = state_36521;
(statearr_36548[(15)] = inst_36509);

return statearr_36548;
})();
if(cljs.core.truth_(inst_36510)){
var statearr_36549_37333 = state_36521__$1;
(statearr_36549_37333[(1)] = (21));

} else {
var statearr_36550_37334 = state_36521__$1;
(statearr_36550_37334[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (5))){
var inst_36465 = cljs.core.async.close_BANG_(out);
var state_36521__$1 = state_36521;
var statearr_36551_37335 = state_36521__$1;
(statearr_36551_37335[(2)] = inst_36465);

(statearr_36551_37335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (14))){
var inst_36487 = (state_36521[(7)]);
var inst_36489 = cljs.core.chunked_seq_QMARK_(inst_36487);
var state_36521__$1 = state_36521;
if(inst_36489){
var statearr_36552_37336 = state_36521__$1;
(statearr_36552_37336[(1)] = (17));

} else {
var statearr_36553_37337 = state_36521__$1;
(statearr_36553_37337[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (16))){
var inst_36505 = (state_36521[(2)]);
var state_36521__$1 = state_36521;
var statearr_36554_37338 = state_36521__$1;
(statearr_36554_37338[(2)] = inst_36505);

(statearr_36554_37338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36522 === (10))){
var inst_36476 = (state_36521[(8)]);
var inst_36474 = (state_36521[(11)]);
var inst_36481 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36474,inst_36476);
var state_36521__$1 = state_36521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36521__$1,(13),out,inst_36481);
} else {
if((state_val_36522 === (18))){
var inst_36487 = (state_36521[(7)]);
var inst_36496 = cljs.core.first(inst_36487);
var state_36521__$1 = state_36521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36521__$1,(20),out,inst_36496);
} else {
if((state_val_36522 === (8))){
var inst_36476 = (state_36521[(8)]);
var inst_36475 = (state_36521[(9)]);
var inst_36478 = (inst_36476 < inst_36475);
var inst_36479 = inst_36478;
var state_36521__$1 = state_36521;
if(cljs.core.truth_(inst_36479)){
var statearr_36555_37343 = state_36521__$1;
(statearr_36555_37343[(1)] = (10));

} else {
var statearr_36556_37344 = state_36521__$1;
(statearr_36556_37344[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__35185__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35185__auto____0 = (function (){
var statearr_36557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36557[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35185__auto__);

(statearr_36557[(1)] = (1));

return statearr_36557;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35185__auto____1 = (function (state_36521){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_36521);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e36558){if((e36558 instanceof Object)){
var ex__35188__auto__ = e36558;
var statearr_36559_37346 = state_36521;
(statearr_36559_37346[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36558;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37347 = state_36521;
state_36521 = G__37347;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35185__auto__ = function(state_36521){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35185__auto____1.call(this,state_36521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35185__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35185__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_36560 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_36560[(6)] = c__35254__auto__);

return statearr_36560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));

return c__35254__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36562 = arguments.length;
switch (G__36562) {
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
var G__36564 = arguments.length;
switch (G__36564) {
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
var G__36566 = arguments.length;
switch (G__36566) {
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
var c__35254__auto___37356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_36590){
var state_val_36591 = (state_36590[(1)]);
if((state_val_36591 === (7))){
var inst_36585 = (state_36590[(2)]);
var state_36590__$1 = state_36590;
var statearr_36592_37357 = state_36590__$1;
(statearr_36592_37357[(2)] = inst_36585);

(statearr_36592_37357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (1))){
var inst_36567 = null;
var state_36590__$1 = (function (){var statearr_36593 = state_36590;
(statearr_36593[(7)] = inst_36567);

return statearr_36593;
})();
var statearr_36594_37358 = state_36590__$1;
(statearr_36594_37358[(2)] = null);

(statearr_36594_37358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (4))){
var inst_36570 = (state_36590[(8)]);
var inst_36570__$1 = (state_36590[(2)]);
var inst_36571 = (inst_36570__$1 == null);
var inst_36572 = cljs.core.not(inst_36571);
var state_36590__$1 = (function (){var statearr_36595 = state_36590;
(statearr_36595[(8)] = inst_36570__$1);

return statearr_36595;
})();
if(inst_36572){
var statearr_36596_37359 = state_36590__$1;
(statearr_36596_37359[(1)] = (5));

} else {
var statearr_36597_37360 = state_36590__$1;
(statearr_36597_37360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (6))){
var state_36590__$1 = state_36590;
var statearr_36598_37361 = state_36590__$1;
(statearr_36598_37361[(2)] = null);

(statearr_36598_37361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (3))){
var inst_36587 = (state_36590[(2)]);
var inst_36588 = cljs.core.async.close_BANG_(out);
var state_36590__$1 = (function (){var statearr_36599 = state_36590;
(statearr_36599[(9)] = inst_36587);

return statearr_36599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36590__$1,inst_36588);
} else {
if((state_val_36591 === (2))){
var state_36590__$1 = state_36590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36590__$1,(4),ch);
} else {
if((state_val_36591 === (11))){
var inst_36570 = (state_36590[(8)]);
var inst_36579 = (state_36590[(2)]);
var inst_36567 = inst_36570;
var state_36590__$1 = (function (){var statearr_36600 = state_36590;
(statearr_36600[(10)] = inst_36579);

(statearr_36600[(7)] = inst_36567);

return statearr_36600;
})();
var statearr_36601_37362 = state_36590__$1;
(statearr_36601_37362[(2)] = null);

(statearr_36601_37362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (9))){
var inst_36570 = (state_36590[(8)]);
var state_36590__$1 = state_36590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36590__$1,(11),out,inst_36570);
} else {
if((state_val_36591 === (5))){
var inst_36567 = (state_36590[(7)]);
var inst_36570 = (state_36590[(8)]);
var inst_36574 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36570,inst_36567);
var state_36590__$1 = state_36590;
if(inst_36574){
var statearr_36603_37363 = state_36590__$1;
(statearr_36603_37363[(1)] = (8));

} else {
var statearr_36604_37364 = state_36590__$1;
(statearr_36604_37364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (10))){
var inst_36582 = (state_36590[(2)]);
var state_36590__$1 = state_36590;
var statearr_36605_37365 = state_36590__$1;
(statearr_36605_37365[(2)] = inst_36582);

(statearr_36605_37365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (8))){
var inst_36567 = (state_36590[(7)]);
var tmp36602 = inst_36567;
var inst_36567__$1 = tmp36602;
var state_36590__$1 = (function (){var statearr_36606 = state_36590;
(statearr_36606[(7)] = inst_36567__$1);

return statearr_36606;
})();
var statearr_36607_37366 = state_36590__$1;
(statearr_36607_37366[(2)] = null);

(statearr_36607_37366[(1)] = (2));


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
var cljs$core$async$state_machine__35185__auto__ = null;
var cljs$core$async$state_machine__35185__auto____0 = (function (){
var statearr_36608 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36608[(0)] = cljs$core$async$state_machine__35185__auto__);

(statearr_36608[(1)] = (1));

return statearr_36608;
});
var cljs$core$async$state_machine__35185__auto____1 = (function (state_36590){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_36590);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e36609){if((e36609 instanceof Object)){
var ex__35188__auto__ = e36609;
var statearr_36610_37367 = state_36590;
(statearr_36610_37367[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36609;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37368 = state_36590;
state_36590 = G__37368;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$state_machine__35185__auto__ = function(state_36590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35185__auto____1.call(this,state_36590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35185__auto____0;
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35185__auto____1;
return cljs$core$async$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_36611 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_36611[(6)] = c__35254__auto___37356);

return statearr_36611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36613 = arguments.length;
switch (G__36613) {
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
var c__35254__auto___37370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_36651){
var state_val_36652 = (state_36651[(1)]);
if((state_val_36652 === (7))){
var inst_36647 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
var statearr_36653_37371 = state_36651__$1;
(statearr_36653_37371[(2)] = inst_36647);

(statearr_36653_37371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (1))){
var inst_36614 = (new Array(n));
var inst_36615 = inst_36614;
var inst_36616 = (0);
var state_36651__$1 = (function (){var statearr_36654 = state_36651;
(statearr_36654[(7)] = inst_36616);

(statearr_36654[(8)] = inst_36615);

return statearr_36654;
})();
var statearr_36655_37372 = state_36651__$1;
(statearr_36655_37372[(2)] = null);

(statearr_36655_37372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (4))){
var inst_36619 = (state_36651[(9)]);
var inst_36619__$1 = (state_36651[(2)]);
var inst_36620 = (inst_36619__$1 == null);
var inst_36621 = cljs.core.not(inst_36620);
var state_36651__$1 = (function (){var statearr_36656 = state_36651;
(statearr_36656[(9)] = inst_36619__$1);

return statearr_36656;
})();
if(inst_36621){
var statearr_36657_37373 = state_36651__$1;
(statearr_36657_37373[(1)] = (5));

} else {
var statearr_36658_37374 = state_36651__$1;
(statearr_36658_37374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (15))){
var inst_36641 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
var statearr_36659_37375 = state_36651__$1;
(statearr_36659_37375[(2)] = inst_36641);

(statearr_36659_37375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (13))){
var state_36651__$1 = state_36651;
var statearr_36660_37376 = state_36651__$1;
(statearr_36660_37376[(2)] = null);

(statearr_36660_37376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (6))){
var inst_36616 = (state_36651[(7)]);
var inst_36637 = (inst_36616 > (0));
var state_36651__$1 = state_36651;
if(cljs.core.truth_(inst_36637)){
var statearr_36661_37377 = state_36651__$1;
(statearr_36661_37377[(1)] = (12));

} else {
var statearr_36662_37378 = state_36651__$1;
(statearr_36662_37378[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (3))){
var inst_36649 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36651__$1,inst_36649);
} else {
if((state_val_36652 === (12))){
var inst_36615 = (state_36651[(8)]);
var inst_36639 = cljs.core.vec(inst_36615);
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36651__$1,(15),out,inst_36639);
} else {
if((state_val_36652 === (2))){
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36651__$1,(4),ch);
} else {
if((state_val_36652 === (11))){
var inst_36631 = (state_36651[(2)]);
var inst_36632 = (new Array(n));
var inst_36615 = inst_36632;
var inst_36616 = (0);
var state_36651__$1 = (function (){var statearr_36663 = state_36651;
(statearr_36663[(7)] = inst_36616);

(statearr_36663[(10)] = inst_36631);

(statearr_36663[(8)] = inst_36615);

return statearr_36663;
})();
var statearr_36664_37379 = state_36651__$1;
(statearr_36664_37379[(2)] = null);

(statearr_36664_37379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (9))){
var inst_36615 = (state_36651[(8)]);
var inst_36629 = cljs.core.vec(inst_36615);
var state_36651__$1 = state_36651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36651__$1,(11),out,inst_36629);
} else {
if((state_val_36652 === (5))){
var inst_36624 = (state_36651[(11)]);
var inst_36616 = (state_36651[(7)]);
var inst_36619 = (state_36651[(9)]);
var inst_36615 = (state_36651[(8)]);
var inst_36623 = (inst_36615[inst_36616] = inst_36619);
var inst_36624__$1 = (inst_36616 + (1));
var inst_36625 = (inst_36624__$1 < n);
var state_36651__$1 = (function (){var statearr_36665 = state_36651;
(statearr_36665[(11)] = inst_36624__$1);

(statearr_36665[(12)] = inst_36623);

return statearr_36665;
})();
if(cljs.core.truth_(inst_36625)){
var statearr_36666_37380 = state_36651__$1;
(statearr_36666_37380[(1)] = (8));

} else {
var statearr_36667_37381 = state_36651__$1;
(statearr_36667_37381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (14))){
var inst_36644 = (state_36651[(2)]);
var inst_36645 = cljs.core.async.close_BANG_(out);
var state_36651__$1 = (function (){var statearr_36669 = state_36651;
(statearr_36669[(13)] = inst_36644);

return statearr_36669;
})();
var statearr_36670_37382 = state_36651__$1;
(statearr_36670_37382[(2)] = inst_36645);

(statearr_36670_37382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (10))){
var inst_36635 = (state_36651[(2)]);
var state_36651__$1 = state_36651;
var statearr_36671_37383 = state_36651__$1;
(statearr_36671_37383[(2)] = inst_36635);

(statearr_36671_37383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36652 === (8))){
var inst_36624 = (state_36651[(11)]);
var inst_36615 = (state_36651[(8)]);
var tmp36668 = inst_36615;
var inst_36615__$1 = tmp36668;
var inst_36616 = inst_36624;
var state_36651__$1 = (function (){var statearr_36672 = state_36651;
(statearr_36672[(7)] = inst_36616);

(statearr_36672[(8)] = inst_36615__$1);

return statearr_36672;
})();
var statearr_36673_37384 = state_36651__$1;
(statearr_36673_37384[(2)] = null);

(statearr_36673_37384[(1)] = (2));


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
var cljs$core$async$state_machine__35185__auto__ = null;
var cljs$core$async$state_machine__35185__auto____0 = (function (){
var statearr_36674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36674[(0)] = cljs$core$async$state_machine__35185__auto__);

(statearr_36674[(1)] = (1));

return statearr_36674;
});
var cljs$core$async$state_machine__35185__auto____1 = (function (state_36651){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_36651);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e36675){if((e36675 instanceof Object)){
var ex__35188__auto__ = e36675;
var statearr_36676_37385 = state_36651;
(statearr_36676_37385[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37386 = state_36651;
state_36651 = G__37386;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$state_machine__35185__auto__ = function(state_36651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35185__auto____1.call(this,state_36651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35185__auto____0;
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35185__auto____1;
return cljs$core$async$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_36677 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_36677[(6)] = c__35254__auto___37370);

return statearr_36677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36679 = arguments.length;
switch (G__36679) {
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
var c__35254__auto___37388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_36721){
var state_val_36722 = (state_36721[(1)]);
if((state_val_36722 === (7))){
var inst_36717 = (state_36721[(2)]);
var state_36721__$1 = state_36721;
var statearr_36723_37389 = state_36721__$1;
(statearr_36723_37389[(2)] = inst_36717);

(statearr_36723_37389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36722 === (1))){
var inst_36680 = [];
var inst_36681 = inst_36680;
var inst_36682 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36721__$1 = (function (){var statearr_36724 = state_36721;
(statearr_36724[(7)] = inst_36682);

(statearr_36724[(8)] = inst_36681);

return statearr_36724;
})();
var statearr_36725_37390 = state_36721__$1;
(statearr_36725_37390[(2)] = null);

(statearr_36725_37390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36722 === (4))){
var inst_36685 = (state_36721[(9)]);
var inst_36685__$1 = (state_36721[(2)]);
var inst_36686 = (inst_36685__$1 == null);
var inst_36687 = cljs.core.not(inst_36686);
var state_36721__$1 = (function (){var statearr_36726 = state_36721;
(statearr_36726[(9)] = inst_36685__$1);

return statearr_36726;
})();
if(inst_36687){
var statearr_36727_37392 = state_36721__$1;
(statearr_36727_37392[(1)] = (5));

} else {
var statearr_36728_37393 = state_36721__$1;
(statearr_36728_37393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36722 === (15))){
var inst_36711 = (state_36721[(2)]);
var state_36721__$1 = state_36721;
var statearr_36729_37394 = state_36721__$1;
(statearr_36729_37394[(2)] = inst_36711);

(statearr_36729_37394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36722 === (13))){
var state_36721__$1 = state_36721;
var statearr_36730_37395 = state_36721__$1;
(statearr_36730_37395[(2)] = null);

(statearr_36730_37395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36722 === (6))){
var inst_36681 = (state_36721[(8)]);
var inst_36706 = inst_36681.length;
var inst_36707 = (inst_36706 > (0));
var state_36721__$1 = state_36721;
if(cljs.core.truth_(inst_36707)){
var statearr_36731_37396 = state_36721__$1;
(statearr_36731_37396[(1)] = (12));

} else {
var statearr_36732_37397 = state_36721__$1;
(statearr_36732_37397[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36722 === (3))){
var inst_36719 = (state_36721[(2)]);
var state_36721__$1 = state_36721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36721__$1,inst_36719);
} else {
if((state_val_36722 === (12))){
var inst_36681 = (state_36721[(8)]);
var inst_36709 = cljs.core.vec(inst_36681);
var state_36721__$1 = state_36721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36721__$1,(15),out,inst_36709);
} else {
if((state_val_36722 === (2))){
var state_36721__$1 = state_36721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36721__$1,(4),ch);
} else {
if((state_val_36722 === (11))){
var inst_36685 = (state_36721[(9)]);
var inst_36689 = (state_36721[(10)]);
var inst_36699 = (state_36721[(2)]);
var inst_36700 = [];
var inst_36701 = inst_36700.push(inst_36685);
var inst_36681 = inst_36700;
var inst_36682 = inst_36689;
var state_36721__$1 = (function (){var statearr_36733 = state_36721;
(statearr_36733[(11)] = inst_36699);

(statearr_36733[(7)] = inst_36682);

(statearr_36733[(8)] = inst_36681);

(statearr_36733[(12)] = inst_36701);

return statearr_36733;
})();
var statearr_36734_37398 = state_36721__$1;
(statearr_36734_37398[(2)] = null);

(statearr_36734_37398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36722 === (9))){
var inst_36681 = (state_36721[(8)]);
var inst_36697 = cljs.core.vec(inst_36681);
var state_36721__$1 = state_36721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36721__$1,(11),out,inst_36697);
} else {
if((state_val_36722 === (5))){
var inst_36682 = (state_36721[(7)]);
var inst_36685 = (state_36721[(9)]);
var inst_36689 = (state_36721[(10)]);
var inst_36689__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36685) : f.call(null,inst_36685));
var inst_36690 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36689__$1,inst_36682);
var inst_36691 = cljs.core.keyword_identical_QMARK_(inst_36682,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36692 = ((inst_36690) || (inst_36691));
var state_36721__$1 = (function (){var statearr_36735 = state_36721;
(statearr_36735[(10)] = inst_36689__$1);

return statearr_36735;
})();
if(cljs.core.truth_(inst_36692)){
var statearr_36736_37399 = state_36721__$1;
(statearr_36736_37399[(1)] = (8));

} else {
var statearr_36737_37400 = state_36721__$1;
(statearr_36737_37400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36722 === (14))){
var inst_36714 = (state_36721[(2)]);
var inst_36715 = cljs.core.async.close_BANG_(out);
var state_36721__$1 = (function (){var statearr_36739 = state_36721;
(statearr_36739[(13)] = inst_36714);

return statearr_36739;
})();
var statearr_36740_37403 = state_36721__$1;
(statearr_36740_37403[(2)] = inst_36715);

(statearr_36740_37403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36722 === (10))){
var inst_36704 = (state_36721[(2)]);
var state_36721__$1 = state_36721;
var statearr_36741_37404 = state_36721__$1;
(statearr_36741_37404[(2)] = inst_36704);

(statearr_36741_37404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36722 === (8))){
var inst_36681 = (state_36721[(8)]);
var inst_36685 = (state_36721[(9)]);
var inst_36689 = (state_36721[(10)]);
var inst_36694 = inst_36681.push(inst_36685);
var tmp36738 = inst_36681;
var inst_36681__$1 = tmp36738;
var inst_36682 = inst_36689;
var state_36721__$1 = (function (){var statearr_36742 = state_36721;
(statearr_36742[(14)] = inst_36694);

(statearr_36742[(7)] = inst_36682);

(statearr_36742[(8)] = inst_36681__$1);

return statearr_36742;
})();
var statearr_36743_37409 = state_36721__$1;
(statearr_36743_37409[(2)] = null);

(statearr_36743_37409[(1)] = (2));


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
var cljs$core$async$state_machine__35185__auto__ = null;
var cljs$core$async$state_machine__35185__auto____0 = (function (){
var statearr_36744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36744[(0)] = cljs$core$async$state_machine__35185__auto__);

(statearr_36744[(1)] = (1));

return statearr_36744;
});
var cljs$core$async$state_machine__35185__auto____1 = (function (state_36721){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_36721);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e36745){if((e36745 instanceof Object)){
var ex__35188__auto__ = e36745;
var statearr_36746_37411 = state_36721;
(statearr_36746_37411[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36745;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37412 = state_36721;
state_36721 = G__37412;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
cljs$core$async$state_machine__35185__auto__ = function(state_36721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35185__auto____1.call(this,state_36721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35185__auto____0;
cljs$core$async$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35185__auto____1;
return cljs$core$async$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_36747 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_36747[(6)] = c__35254__auto___37388);

return statearr_36747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
