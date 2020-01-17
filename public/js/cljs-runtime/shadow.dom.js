goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36907 = coll;
var G__36908 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36907,G__36908) : shadow.dom.lazy_native_coll_seq.call(null,G__36907,G__36908));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36924 = arguments.length;
switch (G__36924) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36929 = arguments.length;
switch (G__36929) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36936 = arguments.length;
switch (G__36936) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36943 = arguments.length;
switch (G__36943) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36952 = arguments.length;
switch (G__36952) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__36955 = document;
var G__36956 = shadow.dom.dom_node(el);
return goog.dom.contains(G__36955,G__36956);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__36957 = shadow.dom.dom_node(parent);
var G__36958 = shadow.dom.dom_node(el);
return goog.dom.contains(G__36957,G__36958);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__36959 = shadow.dom.dom_node(el);
var G__36960 = cls;
return goog.dom.classlist.add(G__36959,G__36960);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__36968 = shadow.dom.dom_node(el);
var G__36969 = cls;
return goog.dom.classlist.remove(G__36968,G__36969);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36971 = arguments.length;
switch (G__36971) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__36976 = shadow.dom.dom_node(el);
var G__36977 = cls;
return goog.dom.classlist.toggle(G__36976,G__36977);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36988){if((e36988 instanceof Object)){
var e = e36988;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36988;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36991 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36992 = null;
var count__36993 = (0);
var i__36994 = (0);
while(true){
if((i__36994 < count__36993)){
var el = chunk__36992.cljs$core$IIndexed$_nth$arity$2(null,i__36994);
var handler_37537__$1 = ((function (seq__36991,chunk__36992,count__36993,i__36994,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36991,chunk__36992,count__36993,i__36994,el))
;
var G__37001_37538 = el;
var G__37002_37539 = cljs.core.name(ev);
var G__37003_37540 = handler_37537__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37001_37538,G__37002_37539,G__37003_37540) : shadow.dom.dom_listen.call(null,G__37001_37538,G__37002_37539,G__37003_37540));


var G__37541 = seq__36991;
var G__37542 = chunk__36992;
var G__37543 = count__36993;
var G__37544 = (i__36994 + (1));
seq__36991 = G__37541;
chunk__36992 = G__37542;
count__36993 = G__37543;
i__36994 = G__37544;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36991);
if(temp__5735__auto__){
var seq__36991__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36991__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36991__$1);
var G__37545 = cljs.core.chunk_rest(seq__36991__$1);
var G__37546 = c__4609__auto__;
var G__37547 = cljs.core.count(c__4609__auto__);
var G__37548 = (0);
seq__36991 = G__37545;
chunk__36992 = G__37546;
count__36993 = G__37547;
i__36994 = G__37548;
continue;
} else {
var el = cljs.core.first(seq__36991__$1);
var handler_37549__$1 = ((function (seq__36991,chunk__36992,count__36993,i__36994,el,seq__36991__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36991,chunk__36992,count__36993,i__36994,el,seq__36991__$1,temp__5735__auto__))
;
var G__37004_37550 = el;
var G__37005_37551 = cljs.core.name(ev);
var G__37006_37552 = handler_37549__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37004_37550,G__37005_37551,G__37006_37552) : shadow.dom.dom_listen.call(null,G__37004_37550,G__37005_37551,G__37006_37552));


var G__37553 = cljs.core.next(seq__36991__$1);
var G__37554 = null;
var G__37555 = (0);
var G__37556 = (0);
seq__36991 = G__37553;
chunk__36992 = G__37554;
count__36993 = G__37555;
i__36994 = G__37556;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37008 = arguments.length;
switch (G__37008) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__37015 = shadow.dom.dom_node(el);
var G__37016 = cljs.core.name(ev);
var G__37017 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37015,G__37016,G__37017) : shadow.dom.dom_listen.call(null,G__37015,G__37016,G__37017));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__37018 = shadow.dom.dom_node(el);
var G__37019 = cljs.core.name(ev);
var G__37020 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__37018,G__37019,G__37020) : shadow.dom.dom_listen_remove.call(null,G__37018,G__37019,G__37020));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37021 = cljs.core.seq(events);
var chunk__37022 = null;
var count__37023 = (0);
var i__37024 = (0);
while(true){
if((i__37024 < count__37023)){
var vec__37031 = chunk__37022.cljs$core$IIndexed$_nth$arity$2(null,i__37024);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37031,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37558 = seq__37021;
var G__37559 = chunk__37022;
var G__37560 = count__37023;
var G__37561 = (i__37024 + (1));
seq__37021 = G__37558;
chunk__37022 = G__37559;
count__37023 = G__37560;
i__37024 = G__37561;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37021);
if(temp__5735__auto__){
var seq__37021__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37021__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37021__$1);
var G__37562 = cljs.core.chunk_rest(seq__37021__$1);
var G__37563 = c__4609__auto__;
var G__37564 = cljs.core.count(c__4609__auto__);
var G__37565 = (0);
seq__37021 = G__37562;
chunk__37022 = G__37563;
count__37023 = G__37564;
i__37024 = G__37565;
continue;
} else {
var vec__37034 = cljs.core.first(seq__37021__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37034,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37566 = cljs.core.next(seq__37021__$1);
var G__37567 = null;
var G__37568 = (0);
var G__37569 = (0);
seq__37021 = G__37566;
chunk__37022 = G__37567;
count__37023 = G__37568;
i__37024 = G__37569;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37037 = cljs.core.seq(styles);
var chunk__37038 = null;
var count__37039 = (0);
var i__37040 = (0);
while(true){
if((i__37040 < count__37039)){
var vec__37053 = chunk__37038.cljs$core$IIndexed$_nth$arity$2(null,i__37040);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37053,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37053,(1),null);
var G__37056_37570 = dom;
var G__37057_37571 = cljs.core.name(k);
var G__37058_37572 = (((v == null))?"":v);
goog.style.setStyle(G__37056_37570,G__37057_37571,G__37058_37572);


var G__37573 = seq__37037;
var G__37574 = chunk__37038;
var G__37575 = count__37039;
var G__37576 = (i__37040 + (1));
seq__37037 = G__37573;
chunk__37038 = G__37574;
count__37039 = G__37575;
i__37040 = G__37576;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37037);
if(temp__5735__auto__){
var seq__37037__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37037__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37037__$1);
var G__37577 = cljs.core.chunk_rest(seq__37037__$1);
var G__37578 = c__4609__auto__;
var G__37579 = cljs.core.count(c__4609__auto__);
var G__37580 = (0);
seq__37037 = G__37577;
chunk__37038 = G__37578;
count__37039 = G__37579;
i__37040 = G__37580;
continue;
} else {
var vec__37059 = cljs.core.first(seq__37037__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37059,(1),null);
var G__37062_37581 = dom;
var G__37063_37582 = cljs.core.name(k);
var G__37064_37583 = (((v == null))?"":v);
goog.style.setStyle(G__37062_37581,G__37063_37582,G__37064_37583);


var G__37584 = cljs.core.next(seq__37037__$1);
var G__37585 = null;
var G__37586 = (0);
var G__37587 = (0);
seq__37037 = G__37584;
chunk__37038 = G__37585;
count__37039 = G__37586;
i__37040 = G__37587;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37065_37588 = key;
var G__37065_37589__$1 = (((G__37065_37588 instanceof cljs.core.Keyword))?G__37065_37588.fqn:null);
switch (G__37065_37589__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37591 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_37591,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_37591,"aria-");
}
})())){
el.setAttribute(ks_37591,value);
} else {
(el[ks_37591] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__37072 = shadow.dom.dom_node(el);
var G__37073 = cls;
return goog.dom.classlist.contains(G__37072,G__37073);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37082){
var map__37083 = p__37082;
var map__37083__$1 = (((((!((map__37083 == null))))?(((((map__37083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37083):map__37083);
var props = map__37083__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37083__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37085 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37085,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37085,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37085,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37088 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37088,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37088;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37090 = arguments.length;
switch (G__37090) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37099){
var vec__37100 = p__37099;
var seq__37101 = cljs.core.seq(vec__37100);
var first__37102 = cljs.core.first(seq__37101);
var seq__37101__$1 = cljs.core.next(seq__37101);
var nn = first__37102;
var first__37102__$1 = cljs.core.first(seq__37101__$1);
var seq__37101__$2 = cljs.core.next(seq__37101__$1);
var np = first__37102__$1;
var nc = seq__37101__$2;
var node = vec__37100;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37103 = nn;
var G__37104 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37103,G__37104) : create_fn.call(null,G__37103,G__37104));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37105 = nn;
var G__37106 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37105,G__37106) : create_fn.call(null,G__37105,G__37106));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37116 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37116,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37116,(1),null);
var seq__37119_37593 = cljs.core.seq(node_children);
var chunk__37120_37594 = null;
var count__37121_37595 = (0);
var i__37122_37596 = (0);
while(true){
if((i__37122_37596 < count__37121_37595)){
var child_struct_37597 = chunk__37120_37594.cljs$core$IIndexed$_nth$arity$2(null,i__37122_37596);
var children_37598 = shadow.dom.dom_node(child_struct_37597);
if(cljs.core.seq_QMARK_(children_37598)){
var seq__37151_37599 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37598));
var chunk__37153_37600 = null;
var count__37154_37601 = (0);
var i__37155_37602 = (0);
while(true){
if((i__37155_37602 < count__37154_37601)){
var child_37603 = chunk__37153_37600.cljs$core$IIndexed$_nth$arity$2(null,i__37155_37602);
if(cljs.core.truth_(child_37603)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37603);


var G__37604 = seq__37151_37599;
var G__37605 = chunk__37153_37600;
var G__37606 = count__37154_37601;
var G__37607 = (i__37155_37602 + (1));
seq__37151_37599 = G__37604;
chunk__37153_37600 = G__37605;
count__37154_37601 = G__37606;
i__37155_37602 = G__37607;
continue;
} else {
var G__37608 = seq__37151_37599;
var G__37609 = chunk__37153_37600;
var G__37610 = count__37154_37601;
var G__37611 = (i__37155_37602 + (1));
seq__37151_37599 = G__37608;
chunk__37153_37600 = G__37609;
count__37154_37601 = G__37610;
i__37155_37602 = G__37611;
continue;
}
} else {
var temp__5735__auto___37612 = cljs.core.seq(seq__37151_37599);
if(temp__5735__auto___37612){
var seq__37151_37613__$1 = temp__5735__auto___37612;
if(cljs.core.chunked_seq_QMARK_(seq__37151_37613__$1)){
var c__4609__auto___37614 = cljs.core.chunk_first(seq__37151_37613__$1);
var G__37615 = cljs.core.chunk_rest(seq__37151_37613__$1);
var G__37616 = c__4609__auto___37614;
var G__37617 = cljs.core.count(c__4609__auto___37614);
var G__37618 = (0);
seq__37151_37599 = G__37615;
chunk__37153_37600 = G__37616;
count__37154_37601 = G__37617;
i__37155_37602 = G__37618;
continue;
} else {
var child_37619 = cljs.core.first(seq__37151_37613__$1);
if(cljs.core.truth_(child_37619)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37619);


var G__37620 = cljs.core.next(seq__37151_37613__$1);
var G__37621 = null;
var G__37622 = (0);
var G__37623 = (0);
seq__37151_37599 = G__37620;
chunk__37153_37600 = G__37621;
count__37154_37601 = G__37622;
i__37155_37602 = G__37623;
continue;
} else {
var G__37624 = cljs.core.next(seq__37151_37613__$1);
var G__37625 = null;
var G__37626 = (0);
var G__37627 = (0);
seq__37151_37599 = G__37624;
chunk__37153_37600 = G__37625;
count__37154_37601 = G__37626;
i__37155_37602 = G__37627;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37598);
}


var G__37628 = seq__37119_37593;
var G__37629 = chunk__37120_37594;
var G__37630 = count__37121_37595;
var G__37631 = (i__37122_37596 + (1));
seq__37119_37593 = G__37628;
chunk__37120_37594 = G__37629;
count__37121_37595 = G__37630;
i__37122_37596 = G__37631;
continue;
} else {
var temp__5735__auto___37632 = cljs.core.seq(seq__37119_37593);
if(temp__5735__auto___37632){
var seq__37119_37633__$1 = temp__5735__auto___37632;
if(cljs.core.chunked_seq_QMARK_(seq__37119_37633__$1)){
var c__4609__auto___37634 = cljs.core.chunk_first(seq__37119_37633__$1);
var G__37635 = cljs.core.chunk_rest(seq__37119_37633__$1);
var G__37636 = c__4609__auto___37634;
var G__37637 = cljs.core.count(c__4609__auto___37634);
var G__37638 = (0);
seq__37119_37593 = G__37635;
chunk__37120_37594 = G__37636;
count__37121_37595 = G__37637;
i__37122_37596 = G__37638;
continue;
} else {
var child_struct_37639 = cljs.core.first(seq__37119_37633__$1);
var children_37640 = shadow.dom.dom_node(child_struct_37639);
if(cljs.core.seq_QMARK_(children_37640)){
var seq__37160_37641 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37640));
var chunk__37162_37642 = null;
var count__37163_37643 = (0);
var i__37164_37644 = (0);
while(true){
if((i__37164_37644 < count__37163_37643)){
var child_37645 = chunk__37162_37642.cljs$core$IIndexed$_nth$arity$2(null,i__37164_37644);
if(cljs.core.truth_(child_37645)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37645);


var G__37646 = seq__37160_37641;
var G__37647 = chunk__37162_37642;
var G__37648 = count__37163_37643;
var G__37649 = (i__37164_37644 + (1));
seq__37160_37641 = G__37646;
chunk__37162_37642 = G__37647;
count__37163_37643 = G__37648;
i__37164_37644 = G__37649;
continue;
} else {
var G__37650 = seq__37160_37641;
var G__37651 = chunk__37162_37642;
var G__37652 = count__37163_37643;
var G__37653 = (i__37164_37644 + (1));
seq__37160_37641 = G__37650;
chunk__37162_37642 = G__37651;
count__37163_37643 = G__37652;
i__37164_37644 = G__37653;
continue;
}
} else {
var temp__5735__auto___37654__$1 = cljs.core.seq(seq__37160_37641);
if(temp__5735__auto___37654__$1){
var seq__37160_37655__$1 = temp__5735__auto___37654__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37160_37655__$1)){
var c__4609__auto___37656 = cljs.core.chunk_first(seq__37160_37655__$1);
var G__37657 = cljs.core.chunk_rest(seq__37160_37655__$1);
var G__37658 = c__4609__auto___37656;
var G__37659 = cljs.core.count(c__4609__auto___37656);
var G__37660 = (0);
seq__37160_37641 = G__37657;
chunk__37162_37642 = G__37658;
count__37163_37643 = G__37659;
i__37164_37644 = G__37660;
continue;
} else {
var child_37661 = cljs.core.first(seq__37160_37655__$1);
if(cljs.core.truth_(child_37661)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37661);


var G__37662 = cljs.core.next(seq__37160_37655__$1);
var G__37663 = null;
var G__37664 = (0);
var G__37665 = (0);
seq__37160_37641 = G__37662;
chunk__37162_37642 = G__37663;
count__37163_37643 = G__37664;
i__37164_37644 = G__37665;
continue;
} else {
var G__37666 = cljs.core.next(seq__37160_37655__$1);
var G__37667 = null;
var G__37668 = (0);
var G__37669 = (0);
seq__37160_37641 = G__37666;
chunk__37162_37642 = G__37667;
count__37163_37643 = G__37668;
i__37164_37644 = G__37669;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37640);
}


var G__37670 = cljs.core.next(seq__37119_37633__$1);
var G__37671 = null;
var G__37672 = (0);
var G__37673 = (0);
seq__37119_37593 = G__37670;
chunk__37120_37594 = G__37671;
count__37121_37595 = G__37672;
i__37122_37596 = G__37673;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__37186 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__37186);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37191 = cljs.core.seq(node);
var chunk__37192 = null;
var count__37193 = (0);
var i__37194 = (0);
while(true){
if((i__37194 < count__37193)){
var n = chunk__37192.cljs$core$IIndexed$_nth$arity$2(null,i__37194);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37674 = seq__37191;
var G__37675 = chunk__37192;
var G__37676 = count__37193;
var G__37677 = (i__37194 + (1));
seq__37191 = G__37674;
chunk__37192 = G__37675;
count__37193 = G__37676;
i__37194 = G__37677;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37191);
if(temp__5735__auto__){
var seq__37191__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37191__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37191__$1);
var G__37678 = cljs.core.chunk_rest(seq__37191__$1);
var G__37679 = c__4609__auto__;
var G__37680 = cljs.core.count(c__4609__auto__);
var G__37681 = (0);
seq__37191 = G__37678;
chunk__37192 = G__37679;
count__37193 = G__37680;
i__37194 = G__37681;
continue;
} else {
var n = cljs.core.first(seq__37191__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37682 = cljs.core.next(seq__37191__$1);
var G__37683 = null;
var G__37684 = (0);
var G__37685 = (0);
seq__37191 = G__37682;
chunk__37192 = G__37683;
count__37193 = G__37684;
i__37194 = G__37685;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__37210 = shadow.dom.dom_node(new$);
var G__37211 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__37210,G__37211);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37218 = arguments.length;
switch (G__37218) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37224 = arguments.length;
switch (G__37224) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37234 = arguments.length;
switch (G__37234) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37695 = arguments.length;
var i__4790__auto___37696 = (0);
while(true){
if((i__4790__auto___37696 < len__4789__auto___37695)){
args__4795__auto__.push((arguments[i__4790__auto___37696]));

var G__37697 = (i__4790__auto___37696 + (1));
i__4790__auto___37696 = G__37697;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37253_37698 = cljs.core.seq(nodes);
var chunk__37254_37699 = null;
var count__37255_37700 = (0);
var i__37256_37701 = (0);
while(true){
if((i__37256_37701 < count__37255_37700)){
var node_37702 = chunk__37254_37699.cljs$core$IIndexed$_nth$arity$2(null,i__37256_37701);
fragment.appendChild(shadow.dom._to_dom(node_37702));


var G__37703 = seq__37253_37698;
var G__37704 = chunk__37254_37699;
var G__37705 = count__37255_37700;
var G__37706 = (i__37256_37701 + (1));
seq__37253_37698 = G__37703;
chunk__37254_37699 = G__37704;
count__37255_37700 = G__37705;
i__37256_37701 = G__37706;
continue;
} else {
var temp__5735__auto___37707 = cljs.core.seq(seq__37253_37698);
if(temp__5735__auto___37707){
var seq__37253_37708__$1 = temp__5735__auto___37707;
if(cljs.core.chunked_seq_QMARK_(seq__37253_37708__$1)){
var c__4609__auto___37709 = cljs.core.chunk_first(seq__37253_37708__$1);
var G__37710 = cljs.core.chunk_rest(seq__37253_37708__$1);
var G__37711 = c__4609__auto___37709;
var G__37712 = cljs.core.count(c__4609__auto___37709);
var G__37713 = (0);
seq__37253_37698 = G__37710;
chunk__37254_37699 = G__37711;
count__37255_37700 = G__37712;
i__37256_37701 = G__37713;
continue;
} else {
var node_37714 = cljs.core.first(seq__37253_37708__$1);
fragment.appendChild(shadow.dom._to_dom(node_37714));


var G__37715 = cljs.core.next(seq__37253_37708__$1);
var G__37716 = null;
var G__37717 = (0);
var G__37718 = (0);
seq__37253_37698 = G__37715;
chunk__37254_37699 = G__37716;
count__37255_37700 = G__37717;
i__37256_37701 = G__37718;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37248){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37248));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37266_37719 = cljs.core.seq(scripts);
var chunk__37267_37720 = null;
var count__37268_37721 = (0);
var i__37269_37722 = (0);
while(true){
if((i__37269_37722 < count__37268_37721)){
var vec__37276_37723 = chunk__37267_37720.cljs$core$IIndexed$_nth$arity$2(null,i__37269_37722);
var script_tag_37724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37276_37723,(0),null);
var script_body_37725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37276_37723,(1),null);
eval(script_body_37725);


var G__37726 = seq__37266_37719;
var G__37727 = chunk__37267_37720;
var G__37728 = count__37268_37721;
var G__37729 = (i__37269_37722 + (1));
seq__37266_37719 = G__37726;
chunk__37267_37720 = G__37727;
count__37268_37721 = G__37728;
i__37269_37722 = G__37729;
continue;
} else {
var temp__5735__auto___37730 = cljs.core.seq(seq__37266_37719);
if(temp__5735__auto___37730){
var seq__37266_37731__$1 = temp__5735__auto___37730;
if(cljs.core.chunked_seq_QMARK_(seq__37266_37731__$1)){
var c__4609__auto___37732 = cljs.core.chunk_first(seq__37266_37731__$1);
var G__37733 = cljs.core.chunk_rest(seq__37266_37731__$1);
var G__37734 = c__4609__auto___37732;
var G__37735 = cljs.core.count(c__4609__auto___37732);
var G__37736 = (0);
seq__37266_37719 = G__37733;
chunk__37267_37720 = G__37734;
count__37268_37721 = G__37735;
i__37269_37722 = G__37736;
continue;
} else {
var vec__37279_37737 = cljs.core.first(seq__37266_37731__$1);
var script_tag_37738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37279_37737,(0),null);
var script_body_37739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37279_37737,(1),null);
eval(script_body_37739);


var G__37746 = cljs.core.next(seq__37266_37731__$1);
var G__37747 = null;
var G__37748 = (0);
var G__37749 = (0);
seq__37266_37719 = G__37746;
chunk__37267_37720 = G__37747;
count__37268_37721 = G__37748;
i__37269_37722 = G__37749;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37282){
var vec__37283 = p__37282;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37283,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__37286 = shadow.dom.dom_node(el);
var G__37287 = cls;
return goog.dom.getAncestorByClass(G__37286,G__37287);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37289 = arguments.length;
switch (G__37289) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__37295 = shadow.dom.dom_node(el);
var G__37296 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__37295,G__37296);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__37300 = shadow.dom.dom_node(el);
var G__37301 = cljs.core.name(tag);
var G__37302 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__37300,G__37301,G__37302);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__37309 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__37309);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__37316 = shadow.dom.dom_node(dom);
var G__37317 = value;
return goog.dom.forms.setValue(G__37316,G__37317);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37325 = cljs.core.seq(style_keys);
var chunk__37326 = null;
var count__37327 = (0);
var i__37328 = (0);
while(true){
if((i__37328 < count__37327)){
var it = chunk__37326.cljs$core$IIndexed$_nth$arity$2(null,i__37328);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37751 = seq__37325;
var G__37752 = chunk__37326;
var G__37753 = count__37327;
var G__37754 = (i__37328 + (1));
seq__37325 = G__37751;
chunk__37326 = G__37752;
count__37327 = G__37753;
i__37328 = G__37754;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37325);
if(temp__5735__auto__){
var seq__37325__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37325__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37325__$1);
var G__37755 = cljs.core.chunk_rest(seq__37325__$1);
var G__37756 = c__4609__auto__;
var G__37757 = cljs.core.count(c__4609__auto__);
var G__37758 = (0);
seq__37325 = G__37755;
chunk__37326 = G__37756;
count__37327 = G__37757;
i__37328 = G__37758;
continue;
} else {
var it = cljs.core.first(seq__37325__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37759 = cljs.core.next(seq__37325__$1);
var G__37760 = null;
var G__37761 = (0);
var G__37762 = (0);
seq__37325 = G__37759;
chunk__37326 = G__37760;
count__37327 = G__37761;
i__37328 = G__37762;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37340,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37349 = k37340;
var G__37349__$1 = (((G__37349 instanceof cljs.core.Keyword))?G__37349.fqn:null);
switch (G__37349__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37340,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37351){
var vec__37352 = p__37351;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37352,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37352,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37339){
var self__ = this;
var G__37339__$1 = this;
return (new cljs.core.RecordIter((0),G__37339__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__37391 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__37391(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37341,other37342){
var self__ = this;
var this37341__$1 = this;
return (((!((other37342 == null)))) && ((this37341__$1.constructor === other37342.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37341__$1.x,other37342.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37341__$1.y,other37342.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37341__$1.__extmap,other37342.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37339){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37401 = cljs.core.keyword_identical_QMARK_;
var expr__37402 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__37406 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__37407 = expr__37402;
return (pred__37401.cljs$core$IFn$_invoke$arity$2 ? pred__37401.cljs$core$IFn$_invoke$arity$2(G__37406,G__37407) : pred__37401.call(null,G__37406,G__37407));
})())){
return (new shadow.dom.Coordinate(G__37339,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37408 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__37410 = expr__37402;
return (pred__37401.cljs$core$IFn$_invoke$arity$2 ? pred__37401.cljs$core$IFn$_invoke$arity$2(G__37408,G__37410) : pred__37401.call(null,G__37408,G__37410));
})())){
return (new shadow.dom.Coordinate(self__.x,G__37339,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37339),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37339){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37339,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37345){
var extmap__4478__auto__ = (function (){var G__37413 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37345,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37345)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37413);
} else {
return G__37413;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37345),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37345),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__37414 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__37414);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__37415 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__37415);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__37416 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__37416);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37418,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37422 = k37418;
var G__37422__$1 = (((G__37422 instanceof cljs.core.Keyword))?G__37422.fqn:null);
switch (G__37422__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37418,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37423){
var vec__37424 = p__37423;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37424,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37424,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37417){
var self__ = this;
var G__37417__$1 = this;
return (new cljs.core.RecordIter((0),G__37417__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__37427 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__37427(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37419,other37420){
var self__ = this;
var this37419__$1 = this;
return (((!((other37420 == null)))) && ((this37419__$1.constructor === other37420.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37419__$1.w,other37420.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37419__$1.h,other37420.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37419__$1.__extmap,other37420.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37417){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37428 = cljs.core.keyword_identical_QMARK_;
var expr__37429 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__37431 = new cljs.core.Keyword(null,"w","w",354169001);
var G__37432 = expr__37429;
return (pred__37428.cljs$core$IFn$_invoke$arity$2 ? pred__37428.cljs$core$IFn$_invoke$arity$2(G__37431,G__37432) : pred__37428.call(null,G__37431,G__37432));
})())){
return (new shadow.dom.Size(G__37417,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37433 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__37434 = expr__37429;
return (pred__37428.cljs$core$IFn$_invoke$arity$2 ? pred__37428.cljs$core$IFn$_invoke$arity$2(G__37433,G__37434) : pred__37428.call(null,G__37433,G__37434));
})())){
return (new shadow.dom.Size(self__.w,G__37417,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37417),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37417){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37417,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37421){
var extmap__4478__auto__ = (function (){var G__37435 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37421,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37421)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37435);
} else {
return G__37435;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37421),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37421),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__37436 = shadow.dom.dom_node(el);
return goog.style.getSize(G__37436);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__37796 = (i + (1));
var G__37797 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37796;
ret = G__37797;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37441){
var vec__37442 = p__37441;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37442,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37446 = arguments.length;
switch (G__37446) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__37447_37803 = new_node;
var G__37448_37804 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__37447_37803,G__37448_37804);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__37449_37805 = new_node;
var G__37450_37806 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__37449_37805,G__37450_37806);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37807 = ps;
var G__37808 = (i + (1));
el__$1 = G__37807;
i = G__37808;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__37451 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__37451);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__37452 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__37452);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__37453 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__37453);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37454 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37454,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37454,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37454,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37457_37813 = cljs.core.seq(props);
var chunk__37458_37814 = null;
var count__37459_37815 = (0);
var i__37460_37816 = (0);
while(true){
if((i__37460_37816 < count__37459_37815)){
var vec__37467_37817 = chunk__37458_37814.cljs$core$IIndexed$_nth$arity$2(null,i__37460_37816);
var k_37818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37467_37817,(0),null);
var v_37819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37467_37817,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_37818);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37818),v_37819);


var G__37822 = seq__37457_37813;
var G__37823 = chunk__37458_37814;
var G__37824 = count__37459_37815;
var G__37825 = (i__37460_37816 + (1));
seq__37457_37813 = G__37822;
chunk__37458_37814 = G__37823;
count__37459_37815 = G__37824;
i__37460_37816 = G__37825;
continue;
} else {
var temp__5735__auto___37826 = cljs.core.seq(seq__37457_37813);
if(temp__5735__auto___37826){
var seq__37457_37827__$1 = temp__5735__auto___37826;
if(cljs.core.chunked_seq_QMARK_(seq__37457_37827__$1)){
var c__4609__auto___37828 = cljs.core.chunk_first(seq__37457_37827__$1);
var G__37829 = cljs.core.chunk_rest(seq__37457_37827__$1);
var G__37830 = c__4609__auto___37828;
var G__37831 = cljs.core.count(c__4609__auto___37828);
var G__37832 = (0);
seq__37457_37813 = G__37829;
chunk__37458_37814 = G__37830;
count__37459_37815 = G__37831;
i__37460_37816 = G__37832;
continue;
} else {
var vec__37470_37833 = cljs.core.first(seq__37457_37827__$1);
var k_37834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37470_37833,(0),null);
var v_37835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37470_37833,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_37834);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37834),v_37835);


var G__37836 = cljs.core.next(seq__37457_37827__$1);
var G__37837 = null;
var G__37838 = (0);
var G__37839 = (0);
seq__37457_37813 = G__37836;
chunk__37458_37814 = G__37837;
count__37459_37815 = G__37838;
i__37460_37816 = G__37839;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37474 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37474,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37474,(1),null);
var seq__37477_37844 = cljs.core.seq(node_children);
var chunk__37479_37845 = null;
var count__37480_37846 = (0);
var i__37481_37847 = (0);
while(true){
if((i__37481_37847 < count__37480_37846)){
var child_struct_37848 = chunk__37479_37845.cljs$core$IIndexed$_nth$arity$2(null,i__37481_37847);
if((!((child_struct_37848 == null)))){
if(typeof child_struct_37848 === 'string'){
var text_37849 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37849),child_struct_37848].join(''));
} else {
var children_37850 = shadow.dom.svg_node(child_struct_37848);
if(cljs.core.seq_QMARK_(children_37850)){
var seq__37495_37851 = cljs.core.seq(children_37850);
var chunk__37497_37852 = null;
var count__37498_37853 = (0);
var i__37499_37854 = (0);
while(true){
if((i__37499_37854 < count__37498_37853)){
var child_37855 = chunk__37497_37852.cljs$core$IIndexed$_nth$arity$2(null,i__37499_37854);
if(cljs.core.truth_(child_37855)){
node.appendChild(child_37855);


var G__37856 = seq__37495_37851;
var G__37857 = chunk__37497_37852;
var G__37858 = count__37498_37853;
var G__37859 = (i__37499_37854 + (1));
seq__37495_37851 = G__37856;
chunk__37497_37852 = G__37857;
count__37498_37853 = G__37858;
i__37499_37854 = G__37859;
continue;
} else {
var G__37860 = seq__37495_37851;
var G__37861 = chunk__37497_37852;
var G__37862 = count__37498_37853;
var G__37863 = (i__37499_37854 + (1));
seq__37495_37851 = G__37860;
chunk__37497_37852 = G__37861;
count__37498_37853 = G__37862;
i__37499_37854 = G__37863;
continue;
}
} else {
var temp__5735__auto___37864 = cljs.core.seq(seq__37495_37851);
if(temp__5735__auto___37864){
var seq__37495_37865__$1 = temp__5735__auto___37864;
if(cljs.core.chunked_seq_QMARK_(seq__37495_37865__$1)){
var c__4609__auto___37866 = cljs.core.chunk_first(seq__37495_37865__$1);
var G__37867 = cljs.core.chunk_rest(seq__37495_37865__$1);
var G__37868 = c__4609__auto___37866;
var G__37869 = cljs.core.count(c__4609__auto___37866);
var G__37870 = (0);
seq__37495_37851 = G__37867;
chunk__37497_37852 = G__37868;
count__37498_37853 = G__37869;
i__37499_37854 = G__37870;
continue;
} else {
var child_37871 = cljs.core.first(seq__37495_37865__$1);
if(cljs.core.truth_(child_37871)){
node.appendChild(child_37871);


var G__37872 = cljs.core.next(seq__37495_37865__$1);
var G__37873 = null;
var G__37874 = (0);
var G__37875 = (0);
seq__37495_37851 = G__37872;
chunk__37497_37852 = G__37873;
count__37498_37853 = G__37874;
i__37499_37854 = G__37875;
continue;
} else {
var G__37876 = cljs.core.next(seq__37495_37865__$1);
var G__37877 = null;
var G__37878 = (0);
var G__37879 = (0);
seq__37495_37851 = G__37876;
chunk__37497_37852 = G__37877;
count__37498_37853 = G__37878;
i__37499_37854 = G__37879;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37850);
}
}


var G__37881 = seq__37477_37844;
var G__37882 = chunk__37479_37845;
var G__37883 = count__37480_37846;
var G__37884 = (i__37481_37847 + (1));
seq__37477_37844 = G__37881;
chunk__37479_37845 = G__37882;
count__37480_37846 = G__37883;
i__37481_37847 = G__37884;
continue;
} else {
var G__37885 = seq__37477_37844;
var G__37886 = chunk__37479_37845;
var G__37887 = count__37480_37846;
var G__37888 = (i__37481_37847 + (1));
seq__37477_37844 = G__37885;
chunk__37479_37845 = G__37886;
count__37480_37846 = G__37887;
i__37481_37847 = G__37888;
continue;
}
} else {
var temp__5735__auto___37889 = cljs.core.seq(seq__37477_37844);
if(temp__5735__auto___37889){
var seq__37477_37890__$1 = temp__5735__auto___37889;
if(cljs.core.chunked_seq_QMARK_(seq__37477_37890__$1)){
var c__4609__auto___37891 = cljs.core.chunk_first(seq__37477_37890__$1);
var G__37892 = cljs.core.chunk_rest(seq__37477_37890__$1);
var G__37893 = c__4609__auto___37891;
var G__37894 = cljs.core.count(c__4609__auto___37891);
var G__37895 = (0);
seq__37477_37844 = G__37892;
chunk__37479_37845 = G__37893;
count__37480_37846 = G__37894;
i__37481_37847 = G__37895;
continue;
} else {
var child_struct_37896 = cljs.core.first(seq__37477_37890__$1);
if((!((child_struct_37896 == null)))){
if(typeof child_struct_37896 === 'string'){
var text_37897 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37897),child_struct_37896].join(''));
} else {
var children_37898 = shadow.dom.svg_node(child_struct_37896);
if(cljs.core.seq_QMARK_(children_37898)){
var seq__37501_37899 = cljs.core.seq(children_37898);
var chunk__37503_37900 = null;
var count__37504_37901 = (0);
var i__37505_37902 = (0);
while(true){
if((i__37505_37902 < count__37504_37901)){
var child_37903 = chunk__37503_37900.cljs$core$IIndexed$_nth$arity$2(null,i__37505_37902);
if(cljs.core.truth_(child_37903)){
node.appendChild(child_37903);


var G__37904 = seq__37501_37899;
var G__37905 = chunk__37503_37900;
var G__37906 = count__37504_37901;
var G__37907 = (i__37505_37902 + (1));
seq__37501_37899 = G__37904;
chunk__37503_37900 = G__37905;
count__37504_37901 = G__37906;
i__37505_37902 = G__37907;
continue;
} else {
var G__37908 = seq__37501_37899;
var G__37909 = chunk__37503_37900;
var G__37910 = count__37504_37901;
var G__37911 = (i__37505_37902 + (1));
seq__37501_37899 = G__37908;
chunk__37503_37900 = G__37909;
count__37504_37901 = G__37910;
i__37505_37902 = G__37911;
continue;
}
} else {
var temp__5735__auto___37912__$1 = cljs.core.seq(seq__37501_37899);
if(temp__5735__auto___37912__$1){
var seq__37501_37913__$1 = temp__5735__auto___37912__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37501_37913__$1)){
var c__4609__auto___37914 = cljs.core.chunk_first(seq__37501_37913__$1);
var G__37915 = cljs.core.chunk_rest(seq__37501_37913__$1);
var G__37916 = c__4609__auto___37914;
var G__37917 = cljs.core.count(c__4609__auto___37914);
var G__37918 = (0);
seq__37501_37899 = G__37915;
chunk__37503_37900 = G__37916;
count__37504_37901 = G__37917;
i__37505_37902 = G__37918;
continue;
} else {
var child_37919 = cljs.core.first(seq__37501_37913__$1);
if(cljs.core.truth_(child_37919)){
node.appendChild(child_37919);


var G__37920 = cljs.core.next(seq__37501_37913__$1);
var G__37921 = null;
var G__37922 = (0);
var G__37923 = (0);
seq__37501_37899 = G__37920;
chunk__37503_37900 = G__37921;
count__37504_37901 = G__37922;
i__37505_37902 = G__37923;
continue;
} else {
var G__37924 = cljs.core.next(seq__37501_37913__$1);
var G__37925 = null;
var G__37926 = (0);
var G__37927 = (0);
seq__37501_37899 = G__37924;
chunk__37503_37900 = G__37925;
count__37504_37901 = G__37926;
i__37505_37902 = G__37927;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37898);
}
}


var G__37928 = cljs.core.next(seq__37477_37890__$1);
var G__37929 = null;
var G__37930 = (0);
var G__37931 = (0);
seq__37477_37844 = G__37928;
chunk__37479_37845 = G__37929;
count__37480_37846 = G__37930;
i__37481_37847 = G__37931;
continue;
} else {
var G__37932 = cljs.core.next(seq__37477_37890__$1);
var G__37933 = null;
var G__37934 = (0);
var G__37935 = (0);
seq__37477_37844 = G__37932;
chunk__37479_37845 = G__37933;
count__37480_37846 = G__37934;
i__37481_37847 = G__37935;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__37507_37936 = shadow.dom._to_svg;
var G__37508_37937 = "string";
var G__37509_37938 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__37507_37936,G__37508_37937,G__37509_37938);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__37510_37939 = shadow.dom._to_svg;
var G__37511_37940 = "null";
var G__37512_37941 = (function (_){
return null;
});
goog.object.set(G__37510_37939,G__37511_37940,G__37512_37941);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37942 = arguments.length;
var i__4790__auto___37943 = (0);
while(true){
if((i__4790__auto___37943 < len__4789__auto___37942)){
args__4795__auto__.push((arguments[i__4790__auto___37943]));

var G__37944 = (i__4790__auto___37943 + (1));
i__4790__auto___37943 = G__37944;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37513){
var G__37514 = cljs.core.first(seq37513);
var seq37513__$1 = cljs.core.next(seq37513);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37514,seq37513__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37516 = arguments.length;
switch (G__37516) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__37517_37946 = shadow.dom.dom_node(el);
var G__37518_37947 = cljs.core.name(event);
var G__37519_37948 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37517_37946,G__37518_37947,G__37519_37948) : shadow.dom.dom_listen.call(null,G__37517_37946,G__37518_37947,G__37519_37948));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__35254__auto___37949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_37524){
var state_val_37525 = (state_37524[(1)]);
if((state_val_37525 === (1))){
var state_37524__$1 = state_37524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37524__$1,(2),once_or_cleanup);
} else {
if((state_val_37525 === (2))){
var inst_37521 = (state_37524[(2)]);
var inst_37522 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37524__$1 = (function (){var statearr_37526 = state_37524;
(statearr_37526[(7)] = inst_37521);

return statearr_37526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37524__$1,inst_37522);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35185__auto__ = null;
var shadow$dom$state_machine__35185__auto____0 = (function (){
var statearr_37527 = [null,null,null,null,null,null,null,null];
(statearr_37527[(0)] = shadow$dom$state_machine__35185__auto__);

(statearr_37527[(1)] = (1));

return statearr_37527;
});
var shadow$dom$state_machine__35185__auto____1 = (function (state_37524){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_37524);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e37528){if((e37528 instanceof Object)){
var ex__35188__auto__ = e37528;
var statearr_37529_37950 = state_37524;
(statearr_37529_37950[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37951 = state_37524;
state_37524 = G__37951;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
shadow$dom$state_machine__35185__auto__ = function(state_37524){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35185__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35185__auto____1.call(this,state_37524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35185__auto____0;
shadow$dom$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35185__auto____1;
return shadow$dom$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_37530 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_37530[(6)] = c__35254__auto___37949);

return statearr_37530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
