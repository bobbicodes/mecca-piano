goog.provide('reagent.debug');
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
var G__24278__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__24278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24279__i = 0, G__24279__a = new Array(arguments.length -  0);
while (G__24279__i < G__24279__a.length) {G__24279__a[G__24279__i] = arguments[G__24279__i + 0]; ++G__24279__i;}
  args = new cljs.core.IndexedSeq(G__24279__a,0,null);
} 
return G__24278__delegate.call(this,args);};
G__24278.cljs$lang$maxFixedArity = 0;
G__24278.cljs$lang$applyTo = (function (arglist__24280){
var args = cljs.core.seq(arglist__24280);
return G__24278__delegate(args);
});
G__24278.cljs$core$IFn$_invoke$arity$variadic = G__24278__delegate;
return G__24278;
})()
);

(o.error = (function() { 
var G__24282__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__24282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24283__i = 0, G__24283__a = new Array(arguments.length -  0);
while (G__24283__i < G__24283__a.length) {G__24283__a[G__24283__i] = arguments[G__24283__i + 0]; ++G__24283__i;}
  args = new cljs.core.IndexedSeq(G__24283__a,0,null);
} 
return G__24282__delegate.call(this,args);};
G__24282.cljs$lang$maxFixedArity = 0;
G__24282.cljs$lang$applyTo = (function (arglist__24284){
var args = cljs.core.seq(arglist__24284);
return G__24282__delegate(args);
});
G__24282.cljs$core$IFn$_invoke$arity$variadic = G__24282__delegate;
return G__24282;
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
