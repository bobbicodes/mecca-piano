goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23583){
var map__23584 = p__23583;
var map__23584__$1 = cljs.core.__destructure_map(map__23584);
var m = map__23584__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23584__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23584__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23587_23797 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23588_23798 = null;
var count__23589_23799 = (0);
var i__23590_23800 = (0);
while(true){
if((i__23590_23800 < count__23589_23799)){
var f_23801 = chunk__23588_23798.cljs$core$IIndexed$_nth$arity$2(null,i__23590_23800);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23801], 0));


var G__23802 = seq__23587_23797;
var G__23803 = chunk__23588_23798;
var G__23804 = count__23589_23799;
var G__23805 = (i__23590_23800 + (1));
seq__23587_23797 = G__23802;
chunk__23588_23798 = G__23803;
count__23589_23799 = G__23804;
i__23590_23800 = G__23805;
continue;
} else {
var temp__5804__auto___23806 = cljs.core.seq(seq__23587_23797);
if(temp__5804__auto___23806){
var seq__23587_23807__$1 = temp__5804__auto___23806;
if(cljs.core.chunked_seq_QMARK_(seq__23587_23807__$1)){
var c__5568__auto___23808 = cljs.core.chunk_first(seq__23587_23807__$1);
var G__23809 = cljs.core.chunk_rest(seq__23587_23807__$1);
var G__23810 = c__5568__auto___23808;
var G__23811 = cljs.core.count(c__5568__auto___23808);
var G__23812 = (0);
seq__23587_23797 = G__23809;
chunk__23588_23798 = G__23810;
count__23589_23799 = G__23811;
i__23590_23800 = G__23812;
continue;
} else {
var f_23813 = cljs.core.first(seq__23587_23807__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23813], 0));


var G__23814 = cljs.core.next(seq__23587_23807__$1);
var G__23815 = null;
var G__23816 = (0);
var G__23817 = (0);
seq__23587_23797 = G__23814;
chunk__23588_23798 = G__23815;
count__23589_23799 = G__23816;
i__23590_23800 = G__23817;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23818 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23818], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_23818)))?cljs.core.second(arglists_23818):arglists_23818)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23593_23819 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23594_23820 = null;
var count__23595_23821 = (0);
var i__23596_23822 = (0);
while(true){
if((i__23596_23822 < count__23595_23821)){
var vec__23608_23823 = chunk__23594_23820.cljs$core$IIndexed$_nth$arity$2(null,i__23596_23822);
var name_23824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23608_23823,(0),null);
var map__23611_23825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23608_23823,(1),null);
var map__23611_23826__$1 = cljs.core.__destructure_map(map__23611_23825);
var doc_23827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23611_23826__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23611_23826__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23824], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23828], 0));

if(cljs.core.truth_(doc_23827)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23827], 0));
} else {
}


var G__23831 = seq__23593_23819;
var G__23832 = chunk__23594_23820;
var G__23833 = count__23595_23821;
var G__23834 = (i__23596_23822 + (1));
seq__23593_23819 = G__23831;
chunk__23594_23820 = G__23832;
count__23595_23821 = G__23833;
i__23596_23822 = G__23834;
continue;
} else {
var temp__5804__auto___23835 = cljs.core.seq(seq__23593_23819);
if(temp__5804__auto___23835){
var seq__23593_23836__$1 = temp__5804__auto___23835;
if(cljs.core.chunked_seq_QMARK_(seq__23593_23836__$1)){
var c__5568__auto___23837 = cljs.core.chunk_first(seq__23593_23836__$1);
var G__23838 = cljs.core.chunk_rest(seq__23593_23836__$1);
var G__23839 = c__5568__auto___23837;
var G__23840 = cljs.core.count(c__5568__auto___23837);
var G__23841 = (0);
seq__23593_23819 = G__23838;
chunk__23594_23820 = G__23839;
count__23595_23821 = G__23840;
i__23596_23822 = G__23841;
continue;
} else {
var vec__23614_23844 = cljs.core.first(seq__23593_23836__$1);
var name_23845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23614_23844,(0),null);
var map__23617_23846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23614_23844,(1),null);
var map__23617_23847__$1 = cljs.core.__destructure_map(map__23617_23846);
var doc_23848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23617_23847__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23617_23847__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23845], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23849], 0));

if(cljs.core.truth_(doc_23848)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23848], 0));
} else {
}


var G__23850 = cljs.core.next(seq__23593_23836__$1);
var G__23851 = null;
var G__23852 = (0);
var G__23853 = (0);
seq__23593_23819 = G__23850;
chunk__23594_23820 = G__23851;
count__23595_23821 = G__23852;
i__23596_23822 = G__23853;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__23618 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23619 = null;
var count__23620 = (0);
var i__23621 = (0);
while(true){
if((i__23621 < count__23620)){
var role = chunk__23619.cljs$core$IIndexed$_nth$arity$2(null,i__23621);
var temp__5804__auto___23854__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23854__$1)){
var spec_23855 = temp__5804__auto___23854__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23855)], 0));
} else {
}


var G__23856 = seq__23618;
var G__23857 = chunk__23619;
var G__23858 = count__23620;
var G__23859 = (i__23621 + (1));
seq__23618 = G__23856;
chunk__23619 = G__23857;
count__23620 = G__23858;
i__23621 = G__23859;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__23618);
if(temp__5804__auto____$1){
var seq__23618__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__23618__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23618__$1);
var G__23860 = cljs.core.chunk_rest(seq__23618__$1);
var G__23861 = c__5568__auto__;
var G__23862 = cljs.core.count(c__5568__auto__);
var G__23863 = (0);
seq__23618 = G__23860;
chunk__23619 = G__23861;
count__23620 = G__23862;
i__23621 = G__23863;
continue;
} else {
var role = cljs.core.first(seq__23618__$1);
var temp__5804__auto___23864__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23864__$2)){
var spec_23865 = temp__5804__auto___23864__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23865)], 0));
} else {
}


var G__23866 = cljs.core.next(seq__23618__$1);
var G__23867 = null;
var G__23868 = (0);
var G__23869 = (0);
seq__23618 = G__23866;
chunk__23619 = G__23867;
count__23620 = G__23868;
i__23621 = G__23869;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__23870 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__23871 = cljs.core.ex_cause(t);
via = G__23870;
t = G__23871;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__23709 = datafied_throwable;
var map__23709__$1 = cljs.core.__destructure_map(map__23709);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23709__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23709__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23709__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__23710 = cljs.core.last(via);
var map__23710__$1 = cljs.core.__destructure_map(map__23710);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23710__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23710__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23710__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__23711 = data;
var map__23711__$1 = cljs.core.__destructure_map(map__23711);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23711__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23711__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23711__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__23712 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__23712__$1 = cljs.core.__destructure_map(map__23712);
var top_data = map__23712__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23712__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__23725 = phase;
var G__23725__$1 = (((G__23725 instanceof cljs.core.Keyword))?G__23725.fqn:null);
switch (G__23725__$1) {
case "read-source":
var map__23727 = data;
var map__23727__$1 = cljs.core.__destructure_map(map__23727);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23727__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23727__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__23728 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__23728__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23728,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23728);
var G__23728__$2 = (cljs.core.truth_((function (){var fexpr__23730 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23730.cljs$core$IFn$_invoke$arity$1 ? fexpr__23730.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23730.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23728__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23728__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23728__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23728__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__23731 = top_data;
var G__23731__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23731,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23731);
var G__23731__$2 = (cljs.core.truth_((function (){var fexpr__23732 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23732.cljs$core$IFn$_invoke$arity$1 ? fexpr__23732.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23732.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23731__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23731__$1);
var G__23731__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23731__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23731__$2);
var G__23731__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23731__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23731__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23731__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23731__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__23734 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23734,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23734,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23734,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23734,(3),null);
var G__23738 = top_data;
var G__23738__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23738,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__23738);
var G__23738__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23738__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__23738__$1);
var G__23738__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23738__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__23738__$2);
var G__23738__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23738__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23738__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23738__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23738__$4;
}

break;
case "execution":
var vec__23740 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23740,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23740,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23740,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23740,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23694_SHARP_){
var or__5045__auto__ = (p1__23694_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__23743 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23743.cljs$core$IFn$_invoke$arity$1 ? fexpr__23743.cljs$core$IFn$_invoke$arity$1(p1__23694_SHARP_) : fexpr__23743.call(null,p1__23694_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__23745 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__23745__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23745,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__23745);
var G__23745__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23745__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23745__$1);
var G__23745__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23745__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__23745__$2);
var G__23745__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23745__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__23745__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23745__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23745__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23725__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__23756){
var map__23757 = p__23756;
var map__23757__$1 = cljs.core.__destructure_map(map__23757);
var triage_data = map__23757__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23757__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__23758 = phase;
var G__23758__$1 = (((G__23758 instanceof cljs.core.Keyword))?G__23758.fqn:null);
switch (G__23758__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__23759 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__23760 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23761 = loc;
var G__23762 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23763_23889 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23764_23890 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23765_23891 = true;
var _STAR_print_fn_STAR__temp_val__23766_23892 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23765_23891);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23766_23892);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23750_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23750_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23764_23890);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23763_23889);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23759,G__23760,G__23761,G__23762) : format.call(null,G__23759,G__23760,G__23761,G__23762));

break;
case "macroexpansion":
var G__23767 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__23768 = cause_type;
var G__23769 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23770 = loc;
var G__23771 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23767,G__23768,G__23769,G__23770,G__23771) : format.call(null,G__23767,G__23768,G__23769,G__23770,G__23771));

break;
case "compile-syntax-check":
var G__23772 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__23773 = cause_type;
var G__23774 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23775 = loc;
var G__23776 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23772,G__23773,G__23774,G__23775,G__23776) : format.call(null,G__23772,G__23773,G__23774,G__23775,G__23776));

break;
case "compilation":
var G__23777 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__23778 = cause_type;
var G__23779 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23780 = loc;
var G__23781 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23777,G__23778,G__23779,G__23780,G__23781) : format.call(null,G__23777,G__23778,G__23779,G__23780,G__23781));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__23782 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__23783 = symbol;
var G__23784 = loc;
var G__23785 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23786_23898 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23787_23899 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23788_23900 = true;
var _STAR_print_fn_STAR__temp_val__23789_23901 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23788_23900);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23789_23901);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23751_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23751_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23787_23899);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23786_23898);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23782,G__23783,G__23784,G__23785) : format.call(null,G__23782,G__23783,G__23784,G__23785));
} else {
var G__23791 = "Execution error%s at %s(%s).\n%s\n";
var G__23792 = cause_type;
var G__23793 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23794 = loc;
var G__23795 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23791,G__23792,G__23793,G__23794,G__23795) : format.call(null,G__23791,G__23792,G__23793,G__23794,G__23795));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23758__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
