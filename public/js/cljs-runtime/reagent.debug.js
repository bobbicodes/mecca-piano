goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__40553__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40554__i = 0, G__40554__a = new Array(arguments.length -  0);
while (G__40554__i < G__40554__a.length) {G__40554__a[G__40554__i] = arguments[G__40554__i + 0]; ++G__40554__i;}
  args = new cljs.core.IndexedSeq(G__40554__a,0,null);
} 
return G__40553__delegate.call(this,args);};
G__40553.cljs$lang$maxFixedArity = 0;
G__40553.cljs$lang$applyTo = (function (arglist__40555){
var args = cljs.core.seq(arglist__40555);
return G__40553__delegate(args);
});
G__40553.cljs$core$IFn$_invoke$arity$variadic = G__40553__delegate;
return G__40553;
})()
);

(o.error = (function() { 
var G__40556__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40557__i = 0, G__40557__a = new Array(arguments.length -  0);
while (G__40557__i < G__40557__a.length) {G__40557__a[G__40557__i] = arguments[G__40557__i + 0]; ++G__40557__i;}
  args = new cljs.core.IndexedSeq(G__40557__a,0,null);
} 
return G__40556__delegate.call(this,args);};
G__40556.cljs$lang$maxFixedArity = 0;
G__40556.cljs$lang$applyTo = (function (arglist__40558){
var args = cljs.core.seq(arglist__40558);
return G__40556__delegate(args);
});
G__40556.cljs$core$IFn$_invoke$arity$variadic = G__40556__delegate;
return G__40556;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
