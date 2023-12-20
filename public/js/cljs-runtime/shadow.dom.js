goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20848 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20848(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20849 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20849(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__20014 = coll;
var G__20015 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__20014,G__20015) : shadow.dom.lazy_native_coll_seq.call(null,G__20014,G__20015));
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
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
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
var G__20056 = arguments.length;
switch (G__20056) {
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
var G__20073 = arguments.length;
switch (G__20073) {
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
var G__20094 = arguments.length;
switch (G__20094) {
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
var G__20117 = arguments.length;
switch (G__20117) {
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
var G__20136 = arguments.length;
switch (G__20136) {
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
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__20149 = arguments.length;
switch (G__20149) {
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
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e20153){if((e20153 instanceof Object)){
var e = e20153;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20153;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__20162 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20163 = null;
var count__20164 = (0);
var i__20165 = (0);
while(true){
if((i__20165 < count__20164)){
var el = chunk__20163.cljs$core$IIndexed$_nth$arity$2(null,i__20165);
var handler_20860__$1 = ((function (seq__20162,chunk__20163,count__20164,i__20165,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20162,chunk__20163,count__20164,i__20165,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20860__$1);


var G__20861 = seq__20162;
var G__20862 = chunk__20163;
var G__20863 = count__20164;
var G__20864 = (i__20165 + (1));
seq__20162 = G__20861;
chunk__20163 = G__20862;
count__20164 = G__20863;
i__20165 = G__20864;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20162);
if(temp__5804__auto__){
var seq__20162__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20162__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20162__$1);
var G__20865 = cljs.core.chunk_rest(seq__20162__$1);
var G__20866 = c__5568__auto__;
var G__20867 = cljs.core.count(c__5568__auto__);
var G__20868 = (0);
seq__20162 = G__20865;
chunk__20163 = G__20866;
count__20164 = G__20867;
i__20165 = G__20868;
continue;
} else {
var el = cljs.core.first(seq__20162__$1);
var handler_20869__$1 = ((function (seq__20162,chunk__20163,count__20164,i__20165,el,seq__20162__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20162,chunk__20163,count__20164,i__20165,el,seq__20162__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20869__$1);


var G__20870 = cljs.core.next(seq__20162__$1);
var G__20871 = null;
var G__20872 = (0);
var G__20873 = (0);
seq__20162 = G__20870;
chunk__20163 = G__20871;
count__20164 = G__20872;
i__20165 = G__20873;
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
var G__20168 = arguments.length;
switch (G__20168) {
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
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20175 = cljs.core.seq(events);
var chunk__20176 = null;
var count__20177 = (0);
var i__20178 = (0);
while(true){
if((i__20178 < count__20177)){
var vec__20194 = chunk__20176.cljs$core$IIndexed$_nth$arity$2(null,i__20178);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20194,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20875 = seq__20175;
var G__20876 = chunk__20176;
var G__20877 = count__20177;
var G__20878 = (i__20178 + (1));
seq__20175 = G__20875;
chunk__20176 = G__20876;
count__20177 = G__20877;
i__20178 = G__20878;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20175);
if(temp__5804__auto__){
var seq__20175__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20175__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20175__$1);
var G__20879 = cljs.core.chunk_rest(seq__20175__$1);
var G__20880 = c__5568__auto__;
var G__20881 = cljs.core.count(c__5568__auto__);
var G__20882 = (0);
seq__20175 = G__20879;
chunk__20176 = G__20880;
count__20177 = G__20881;
i__20178 = G__20882;
continue;
} else {
var vec__20200 = cljs.core.first(seq__20175__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20200,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20200,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20883 = cljs.core.next(seq__20175__$1);
var G__20884 = null;
var G__20885 = (0);
var G__20886 = (0);
seq__20175 = G__20883;
chunk__20176 = G__20884;
count__20177 = G__20885;
i__20178 = G__20886;
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
var seq__20205 = cljs.core.seq(styles);
var chunk__20206 = null;
var count__20207 = (0);
var i__20208 = (0);
while(true){
if((i__20208 < count__20207)){
var vec__20221 = chunk__20206.cljs$core$IIndexed$_nth$arity$2(null,i__20208);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20221,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20221,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20887 = seq__20205;
var G__20888 = chunk__20206;
var G__20889 = count__20207;
var G__20890 = (i__20208 + (1));
seq__20205 = G__20887;
chunk__20206 = G__20888;
count__20207 = G__20889;
i__20208 = G__20890;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20205);
if(temp__5804__auto__){
var seq__20205__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20205__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20205__$1);
var G__20891 = cljs.core.chunk_rest(seq__20205__$1);
var G__20892 = c__5568__auto__;
var G__20893 = cljs.core.count(c__5568__auto__);
var G__20894 = (0);
seq__20205 = G__20891;
chunk__20206 = G__20892;
count__20207 = G__20893;
i__20208 = G__20894;
continue;
} else {
var vec__20224 = cljs.core.first(seq__20205__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20224,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20224,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20895 = cljs.core.next(seq__20205__$1);
var G__20896 = null;
var G__20897 = (0);
var G__20898 = (0);
seq__20205 = G__20895;
chunk__20206 = G__20896;
count__20207 = G__20897;
i__20208 = G__20898;
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
var G__20228_20899 = key;
var G__20228_20900__$1 = (((G__20228_20899 instanceof cljs.core.Keyword))?G__20228_20899.fqn:null);
switch (G__20228_20900__$1) {
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
var ks_20905 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20905,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20905,"aria-");
}
})())){
el.setAttribute(ks_20905,value);
} else {
(el[ks_20905] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20243){
var map__20245 = p__20243;
var map__20245__$1 = cljs.core.__destructure_map(map__20245);
var props = map__20245__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20245__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20249 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20249,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20249,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20249,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20256 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20256,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20256;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20262 = arguments.length;
switch (G__20262) {
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20267){
var vec__20268 = p__20267;
var seq__20269 = cljs.core.seq(vec__20268);
var first__20270 = cljs.core.first(seq__20269);
var seq__20269__$1 = cljs.core.next(seq__20269);
var nn = first__20270;
var first__20270__$1 = cljs.core.first(seq__20269__$1);
var seq__20269__$2 = cljs.core.next(seq__20269__$1);
var np = first__20270__$1;
var nc = seq__20269__$2;
var node = vec__20268;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20273 = nn;
var G__20274 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20273,G__20274) : create_fn.call(null,G__20273,G__20274));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20278 = nn;
var G__20279 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20278,G__20279) : create_fn.call(null,G__20278,G__20279));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20280 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20280,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20280,(1),null);
var seq__20283_20911 = cljs.core.seq(node_children);
var chunk__20284_20912 = null;
var count__20285_20913 = (0);
var i__20286_20914 = (0);
while(true){
if((i__20286_20914 < count__20285_20913)){
var child_struct_20915 = chunk__20284_20912.cljs$core$IIndexed$_nth$arity$2(null,i__20286_20914);
var children_20916 = shadow.dom.dom_node(child_struct_20915);
if(cljs.core.seq_QMARK_(children_20916)){
var seq__20320_20917 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20916));
var chunk__20322_20918 = null;
var count__20324_20919 = (0);
var i__20325_20920 = (0);
while(true){
if((i__20325_20920 < count__20324_20919)){
var child_20921 = chunk__20322_20918.cljs$core$IIndexed$_nth$arity$2(null,i__20325_20920);
if(cljs.core.truth_(child_20921)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20921);


var G__20922 = seq__20320_20917;
var G__20923 = chunk__20322_20918;
var G__20924 = count__20324_20919;
var G__20925 = (i__20325_20920 + (1));
seq__20320_20917 = G__20922;
chunk__20322_20918 = G__20923;
count__20324_20919 = G__20924;
i__20325_20920 = G__20925;
continue;
} else {
var G__20926 = seq__20320_20917;
var G__20927 = chunk__20322_20918;
var G__20928 = count__20324_20919;
var G__20929 = (i__20325_20920 + (1));
seq__20320_20917 = G__20926;
chunk__20322_20918 = G__20927;
count__20324_20919 = G__20928;
i__20325_20920 = G__20929;
continue;
}
} else {
var temp__5804__auto___20930 = cljs.core.seq(seq__20320_20917);
if(temp__5804__auto___20930){
var seq__20320_20931__$1 = temp__5804__auto___20930;
if(cljs.core.chunked_seq_QMARK_(seq__20320_20931__$1)){
var c__5568__auto___20932 = cljs.core.chunk_first(seq__20320_20931__$1);
var G__20933 = cljs.core.chunk_rest(seq__20320_20931__$1);
var G__20934 = c__5568__auto___20932;
var G__20935 = cljs.core.count(c__5568__auto___20932);
var G__20936 = (0);
seq__20320_20917 = G__20933;
chunk__20322_20918 = G__20934;
count__20324_20919 = G__20935;
i__20325_20920 = G__20936;
continue;
} else {
var child_20937 = cljs.core.first(seq__20320_20931__$1);
if(cljs.core.truth_(child_20937)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20937);


var G__20938 = cljs.core.next(seq__20320_20931__$1);
var G__20939 = null;
var G__20940 = (0);
var G__20941 = (0);
seq__20320_20917 = G__20938;
chunk__20322_20918 = G__20939;
count__20324_20919 = G__20940;
i__20325_20920 = G__20941;
continue;
} else {
var G__20942 = cljs.core.next(seq__20320_20931__$1);
var G__20943 = null;
var G__20944 = (0);
var G__20945 = (0);
seq__20320_20917 = G__20942;
chunk__20322_20918 = G__20943;
count__20324_20919 = G__20944;
i__20325_20920 = G__20945;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20916);
}


var G__20946 = seq__20283_20911;
var G__20947 = chunk__20284_20912;
var G__20948 = count__20285_20913;
var G__20949 = (i__20286_20914 + (1));
seq__20283_20911 = G__20946;
chunk__20284_20912 = G__20947;
count__20285_20913 = G__20948;
i__20286_20914 = G__20949;
continue;
} else {
var temp__5804__auto___20950 = cljs.core.seq(seq__20283_20911);
if(temp__5804__auto___20950){
var seq__20283_20951__$1 = temp__5804__auto___20950;
if(cljs.core.chunked_seq_QMARK_(seq__20283_20951__$1)){
var c__5568__auto___20952 = cljs.core.chunk_first(seq__20283_20951__$1);
var G__20953 = cljs.core.chunk_rest(seq__20283_20951__$1);
var G__20954 = c__5568__auto___20952;
var G__20955 = cljs.core.count(c__5568__auto___20952);
var G__20956 = (0);
seq__20283_20911 = G__20953;
chunk__20284_20912 = G__20954;
count__20285_20913 = G__20955;
i__20286_20914 = G__20956;
continue;
} else {
var child_struct_20957 = cljs.core.first(seq__20283_20951__$1);
var children_20958 = shadow.dom.dom_node(child_struct_20957);
if(cljs.core.seq_QMARK_(children_20958)){
var seq__20341_20959 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20958));
var chunk__20343_20960 = null;
var count__20344_20961 = (0);
var i__20345_20962 = (0);
while(true){
if((i__20345_20962 < count__20344_20961)){
var child_20963 = chunk__20343_20960.cljs$core$IIndexed$_nth$arity$2(null,i__20345_20962);
if(cljs.core.truth_(child_20963)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20963);


var G__20964 = seq__20341_20959;
var G__20965 = chunk__20343_20960;
var G__20966 = count__20344_20961;
var G__20967 = (i__20345_20962 + (1));
seq__20341_20959 = G__20964;
chunk__20343_20960 = G__20965;
count__20344_20961 = G__20966;
i__20345_20962 = G__20967;
continue;
} else {
var G__20968 = seq__20341_20959;
var G__20969 = chunk__20343_20960;
var G__20970 = count__20344_20961;
var G__20971 = (i__20345_20962 + (1));
seq__20341_20959 = G__20968;
chunk__20343_20960 = G__20969;
count__20344_20961 = G__20970;
i__20345_20962 = G__20971;
continue;
}
} else {
var temp__5804__auto___20972__$1 = cljs.core.seq(seq__20341_20959);
if(temp__5804__auto___20972__$1){
var seq__20341_20973__$1 = temp__5804__auto___20972__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20341_20973__$1)){
var c__5568__auto___20974 = cljs.core.chunk_first(seq__20341_20973__$1);
var G__20975 = cljs.core.chunk_rest(seq__20341_20973__$1);
var G__20976 = c__5568__auto___20974;
var G__20977 = cljs.core.count(c__5568__auto___20974);
var G__20978 = (0);
seq__20341_20959 = G__20975;
chunk__20343_20960 = G__20976;
count__20344_20961 = G__20977;
i__20345_20962 = G__20978;
continue;
} else {
var child_20979 = cljs.core.first(seq__20341_20973__$1);
if(cljs.core.truth_(child_20979)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20979);


var G__20980 = cljs.core.next(seq__20341_20973__$1);
var G__20981 = null;
var G__20982 = (0);
var G__20983 = (0);
seq__20341_20959 = G__20980;
chunk__20343_20960 = G__20981;
count__20344_20961 = G__20982;
i__20345_20962 = G__20983;
continue;
} else {
var G__20984 = cljs.core.next(seq__20341_20973__$1);
var G__20985 = null;
var G__20986 = (0);
var G__20987 = (0);
seq__20341_20959 = G__20984;
chunk__20343_20960 = G__20985;
count__20344_20961 = G__20986;
i__20345_20962 = G__20987;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20958);
}


var G__20989 = cljs.core.next(seq__20283_20951__$1);
var G__20990 = null;
var G__20991 = (0);
var G__20992 = (0);
seq__20283_20911 = G__20989;
chunk__20284_20912 = G__20990;
count__20285_20913 = G__20991;
i__20286_20914 = G__20992;
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
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20366 = cljs.core.seq(node);
var chunk__20367 = null;
var count__20368 = (0);
var i__20369 = (0);
while(true){
if((i__20369 < count__20368)){
var n = chunk__20367.cljs$core$IIndexed$_nth$arity$2(null,i__20369);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20999 = seq__20366;
var G__21000 = chunk__20367;
var G__21001 = count__20368;
var G__21002 = (i__20369 + (1));
seq__20366 = G__20999;
chunk__20367 = G__21000;
count__20368 = G__21001;
i__20369 = G__21002;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20366);
if(temp__5804__auto__){
var seq__20366__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20366__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20366__$1);
var G__21004 = cljs.core.chunk_rest(seq__20366__$1);
var G__21005 = c__5568__auto__;
var G__21006 = cljs.core.count(c__5568__auto__);
var G__21007 = (0);
seq__20366 = G__21004;
chunk__20367 = G__21005;
count__20368 = G__21006;
i__20369 = G__21007;
continue;
} else {
var n = cljs.core.first(seq__20366__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21008 = cljs.core.next(seq__20366__$1);
var G__21009 = null;
var G__21010 = (0);
var G__21011 = (0);
seq__20366 = G__21008;
chunk__20367 = G__21009;
count__20368 = G__21010;
i__20369 = G__21011;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20372 = arguments.length;
switch (G__20372) {
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
var G__20387 = arguments.length;
switch (G__20387) {
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
var G__20400 = arguments.length;
switch (G__20400) {
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
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___21018 = arguments.length;
var i__5770__auto___21019 = (0);
while(true){
if((i__5770__auto___21019 < len__5769__auto___21018)){
args__5775__auto__.push((arguments[i__5770__auto___21019]));

var G__21020 = (i__5770__auto___21019 + (1));
i__5770__auto___21019 = G__21020;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20408_21021 = cljs.core.seq(nodes);
var chunk__20409_21022 = null;
var count__20410_21023 = (0);
var i__20411_21024 = (0);
while(true){
if((i__20411_21024 < count__20410_21023)){
var node_21025 = chunk__20409_21022.cljs$core$IIndexed$_nth$arity$2(null,i__20411_21024);
fragment.appendChild(shadow.dom._to_dom(node_21025));


var G__21026 = seq__20408_21021;
var G__21027 = chunk__20409_21022;
var G__21028 = count__20410_21023;
var G__21029 = (i__20411_21024 + (1));
seq__20408_21021 = G__21026;
chunk__20409_21022 = G__21027;
count__20410_21023 = G__21028;
i__20411_21024 = G__21029;
continue;
} else {
var temp__5804__auto___21030 = cljs.core.seq(seq__20408_21021);
if(temp__5804__auto___21030){
var seq__20408_21031__$1 = temp__5804__auto___21030;
if(cljs.core.chunked_seq_QMARK_(seq__20408_21031__$1)){
var c__5568__auto___21032 = cljs.core.chunk_first(seq__20408_21031__$1);
var G__21033 = cljs.core.chunk_rest(seq__20408_21031__$1);
var G__21034 = c__5568__auto___21032;
var G__21035 = cljs.core.count(c__5568__auto___21032);
var G__21036 = (0);
seq__20408_21021 = G__21033;
chunk__20409_21022 = G__21034;
count__20410_21023 = G__21035;
i__20411_21024 = G__21036;
continue;
} else {
var node_21037 = cljs.core.first(seq__20408_21031__$1);
fragment.appendChild(shadow.dom._to_dom(node_21037));


var G__21038 = cljs.core.next(seq__20408_21031__$1);
var G__21039 = null;
var G__21040 = (0);
var G__21041 = (0);
seq__20408_21021 = G__21038;
chunk__20409_21022 = G__21039;
count__20410_21023 = G__21040;
i__20411_21024 = G__21041;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20404){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20404));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20423_21042 = cljs.core.seq(scripts);
var chunk__20424_21043 = null;
var count__20425_21044 = (0);
var i__20426_21045 = (0);
while(true){
if((i__20426_21045 < count__20425_21044)){
var vec__20433_21046 = chunk__20424_21043.cljs$core$IIndexed$_nth$arity$2(null,i__20426_21045);
var script_tag_21047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433_21046,(0),null);
var script_body_21048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20433_21046,(1),null);
eval(script_body_21048);


var G__21049 = seq__20423_21042;
var G__21050 = chunk__20424_21043;
var G__21051 = count__20425_21044;
var G__21052 = (i__20426_21045 + (1));
seq__20423_21042 = G__21049;
chunk__20424_21043 = G__21050;
count__20425_21044 = G__21051;
i__20426_21045 = G__21052;
continue;
} else {
var temp__5804__auto___21053 = cljs.core.seq(seq__20423_21042);
if(temp__5804__auto___21053){
var seq__20423_21054__$1 = temp__5804__auto___21053;
if(cljs.core.chunked_seq_QMARK_(seq__20423_21054__$1)){
var c__5568__auto___21055 = cljs.core.chunk_first(seq__20423_21054__$1);
var G__21056 = cljs.core.chunk_rest(seq__20423_21054__$1);
var G__21057 = c__5568__auto___21055;
var G__21058 = cljs.core.count(c__5568__auto___21055);
var G__21059 = (0);
seq__20423_21042 = G__21056;
chunk__20424_21043 = G__21057;
count__20425_21044 = G__21058;
i__20426_21045 = G__21059;
continue;
} else {
var vec__20436_21060 = cljs.core.first(seq__20423_21054__$1);
var script_tag_21061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20436_21060,(0),null);
var script_body_21062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20436_21060,(1),null);
eval(script_body_21062);


var G__21063 = cljs.core.next(seq__20423_21054__$1);
var G__21064 = null;
var G__21065 = (0);
var G__21066 = (0);
seq__20423_21042 = G__21063;
chunk__20424_21043 = G__21064;
count__20425_21044 = G__21065;
i__20426_21045 = G__21066;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20447){
var vec__20448 = p__20447;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20448,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20448,(1),null);
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
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20459 = arguments.length;
switch (G__20459) {
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
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__20493 = cljs.core.seq(style_keys);
var chunk__20494 = null;
var count__20495 = (0);
var i__20496 = (0);
while(true){
if((i__20496 < count__20495)){
var it = chunk__20494.cljs$core$IIndexed$_nth$arity$2(null,i__20496);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21071 = seq__20493;
var G__21072 = chunk__20494;
var G__21073 = count__20495;
var G__21074 = (i__20496 + (1));
seq__20493 = G__21071;
chunk__20494 = G__21072;
count__20495 = G__21073;
i__20496 = G__21074;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20493);
if(temp__5804__auto__){
var seq__20493__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20493__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20493__$1);
var G__21075 = cljs.core.chunk_rest(seq__20493__$1);
var G__21076 = c__5568__auto__;
var G__21077 = cljs.core.count(c__5568__auto__);
var G__21078 = (0);
seq__20493 = G__21075;
chunk__20494 = G__21076;
count__20495 = G__21077;
i__20496 = G__21078;
continue;
} else {
var it = cljs.core.first(seq__20493__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21079 = cljs.core.next(seq__20493__$1);
var G__21080 = null;
var G__21081 = (0);
var G__21082 = (0);
seq__20493 = G__21079;
chunk__20494 = G__21080;
count__20495 = G__21081;
i__20496 = G__21082;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20503,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20510 = k20503;
var G__20510__$1 = (((G__20510 instanceof cljs.core.Keyword))?G__20510.fqn:null);
switch (G__20510__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20503,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20511){
var vec__20512 = p__20511;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20512,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20512,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20502){
var self__ = this;
var G__20502__$1 = this;
return (new cljs.core.RecordIter((0),G__20502__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20505,other20506){
var self__ = this;
var this20505__$1 = this;
return (((!((other20506 == null)))) && ((((this20505__$1.constructor === other20506.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20505__$1.x,other20506.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20505__$1.y,other20506.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20505__$1.__extmap,other20506.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20503){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20537 = k20503;
var G__20537__$1 = (((G__20537 instanceof cljs.core.Keyword))?G__20537.fqn:null);
switch (G__20537__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20503);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20502){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20540 = cljs.core.keyword_identical_QMARK_;
var expr__20541 = k__5352__auto__;
if(cljs.core.truth_((pred__20540.cljs$core$IFn$_invoke$arity$2 ? pred__20540.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20541) : pred__20540.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20541)))){
return (new shadow.dom.Coordinate(G__20502,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20540.cljs$core$IFn$_invoke$arity$2 ? pred__20540.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20541) : pred__20540.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20541)))){
return (new shadow.dom.Coordinate(self__.x,G__20502,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20502),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20502){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20502,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20508){
var extmap__5385__auto__ = (function (){var G__20561 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20508,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20508)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20561);
} else {
return G__20561;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20508),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20508),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20581,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20590 = k20581;
var G__20590__$1 = (((G__20590 instanceof cljs.core.Keyword))?G__20590.fqn:null);
switch (G__20590__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20581,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20595){
var vec__20596 = p__20595;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20596,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20596,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20580){
var self__ = this;
var G__20580__$1 = this;
return (new cljs.core.RecordIter((0),G__20580__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20582,other20583){
var self__ = this;
var this20582__$1 = this;
return (((!((other20583 == null)))) && ((((this20582__$1.constructor === other20583.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20582__$1.w,other20583.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20582__$1.h,other20583.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20582__$1.__extmap,other20583.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20581){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20611 = k20581;
var G__20611__$1 = (((G__20611 instanceof cljs.core.Keyword))?G__20611.fqn:null);
switch (G__20611__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20581);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20580){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20615 = cljs.core.keyword_identical_QMARK_;
var expr__20616 = k__5352__auto__;
if(cljs.core.truth_((pred__20615.cljs$core$IFn$_invoke$arity$2 ? pred__20615.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20616) : pred__20615.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20616)))){
return (new shadow.dom.Size(G__20580,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20615.cljs$core$IFn$_invoke$arity$2 ? pred__20615.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20616) : pred__20615.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20616)))){
return (new shadow.dom.Size(self__.w,G__20580,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20580),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20580){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20580,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20584){
var extmap__5385__auto__ = (function (){var G__20632 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20584,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20584)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20632);
} else {
return G__20632;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20584),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20584),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21115 = (i + (1));
var G__21116 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21115;
ret = G__21116;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20656){
var vec__20657 = p__20656;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20657,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20657,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20661 = arguments.length;
switch (G__20661) {
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
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
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
var G__21118 = ps;
var G__21119 = (i + (1));
el__$1 = G__21118;
i = G__21119;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
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
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20679 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20679,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20679,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20679,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20686_21124 = cljs.core.seq(props);
var chunk__20687_21125 = null;
var count__20688_21126 = (0);
var i__20689_21127 = (0);
while(true){
if((i__20689_21127 < count__20688_21126)){
var vec__20699_21128 = chunk__20687_21125.cljs$core$IIndexed$_nth$arity$2(null,i__20689_21127);
var k_21129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20699_21128,(0),null);
var v_21130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20699_21128,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21129);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21129),v_21130);


var G__21131 = seq__20686_21124;
var G__21132 = chunk__20687_21125;
var G__21133 = count__20688_21126;
var G__21134 = (i__20689_21127 + (1));
seq__20686_21124 = G__21131;
chunk__20687_21125 = G__21132;
count__20688_21126 = G__21133;
i__20689_21127 = G__21134;
continue;
} else {
var temp__5804__auto___21135 = cljs.core.seq(seq__20686_21124);
if(temp__5804__auto___21135){
var seq__20686_21136__$1 = temp__5804__auto___21135;
if(cljs.core.chunked_seq_QMARK_(seq__20686_21136__$1)){
var c__5568__auto___21137 = cljs.core.chunk_first(seq__20686_21136__$1);
var G__21138 = cljs.core.chunk_rest(seq__20686_21136__$1);
var G__21139 = c__5568__auto___21137;
var G__21140 = cljs.core.count(c__5568__auto___21137);
var G__21141 = (0);
seq__20686_21124 = G__21138;
chunk__20687_21125 = G__21139;
count__20688_21126 = G__21140;
i__20689_21127 = G__21141;
continue;
} else {
var vec__20705_21142 = cljs.core.first(seq__20686_21136__$1);
var k_21143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20705_21142,(0),null);
var v_21144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20705_21142,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21143);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21143),v_21144);


var G__21145 = cljs.core.next(seq__20686_21136__$1);
var G__21146 = null;
var G__21147 = (0);
var G__21148 = (0);
seq__20686_21124 = G__21145;
chunk__20687_21125 = G__21146;
count__20688_21126 = G__21147;
i__20689_21127 = G__21148;
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
var vec__20710 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20710,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20710,(1),null);
var seq__20714_21149 = cljs.core.seq(node_children);
var chunk__20716_21150 = null;
var count__20717_21151 = (0);
var i__20718_21152 = (0);
while(true){
if((i__20718_21152 < count__20717_21151)){
var child_struct_21153 = chunk__20716_21150.cljs$core$IIndexed$_nth$arity$2(null,i__20718_21152);
if((!((child_struct_21153 == null)))){
if(typeof child_struct_21153 === 'string'){
var text_21154 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21154),child_struct_21153].join(''));
} else {
var children_21155 = shadow.dom.svg_node(child_struct_21153);
if(cljs.core.seq_QMARK_(children_21155)){
var seq__20763_21156 = cljs.core.seq(children_21155);
var chunk__20765_21157 = null;
var count__20766_21158 = (0);
var i__20767_21159 = (0);
while(true){
if((i__20767_21159 < count__20766_21158)){
var child_21160 = chunk__20765_21157.cljs$core$IIndexed$_nth$arity$2(null,i__20767_21159);
if(cljs.core.truth_(child_21160)){
node.appendChild(child_21160);


var G__21161 = seq__20763_21156;
var G__21162 = chunk__20765_21157;
var G__21163 = count__20766_21158;
var G__21164 = (i__20767_21159 + (1));
seq__20763_21156 = G__21161;
chunk__20765_21157 = G__21162;
count__20766_21158 = G__21163;
i__20767_21159 = G__21164;
continue;
} else {
var G__21165 = seq__20763_21156;
var G__21166 = chunk__20765_21157;
var G__21167 = count__20766_21158;
var G__21168 = (i__20767_21159 + (1));
seq__20763_21156 = G__21165;
chunk__20765_21157 = G__21166;
count__20766_21158 = G__21167;
i__20767_21159 = G__21168;
continue;
}
} else {
var temp__5804__auto___21169 = cljs.core.seq(seq__20763_21156);
if(temp__5804__auto___21169){
var seq__20763_21170__$1 = temp__5804__auto___21169;
if(cljs.core.chunked_seq_QMARK_(seq__20763_21170__$1)){
var c__5568__auto___21171 = cljs.core.chunk_first(seq__20763_21170__$1);
var G__21173 = cljs.core.chunk_rest(seq__20763_21170__$1);
var G__21174 = c__5568__auto___21171;
var G__21175 = cljs.core.count(c__5568__auto___21171);
var G__21176 = (0);
seq__20763_21156 = G__21173;
chunk__20765_21157 = G__21174;
count__20766_21158 = G__21175;
i__20767_21159 = G__21176;
continue;
} else {
var child_21177 = cljs.core.first(seq__20763_21170__$1);
if(cljs.core.truth_(child_21177)){
node.appendChild(child_21177);


var G__21178 = cljs.core.next(seq__20763_21170__$1);
var G__21179 = null;
var G__21180 = (0);
var G__21181 = (0);
seq__20763_21156 = G__21178;
chunk__20765_21157 = G__21179;
count__20766_21158 = G__21180;
i__20767_21159 = G__21181;
continue;
} else {
var G__21183 = cljs.core.next(seq__20763_21170__$1);
var G__21184 = null;
var G__21185 = (0);
var G__21186 = (0);
seq__20763_21156 = G__21183;
chunk__20765_21157 = G__21184;
count__20766_21158 = G__21185;
i__20767_21159 = G__21186;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21155);
}
}


var G__21187 = seq__20714_21149;
var G__21188 = chunk__20716_21150;
var G__21189 = count__20717_21151;
var G__21190 = (i__20718_21152 + (1));
seq__20714_21149 = G__21187;
chunk__20716_21150 = G__21188;
count__20717_21151 = G__21189;
i__20718_21152 = G__21190;
continue;
} else {
var G__21191 = seq__20714_21149;
var G__21192 = chunk__20716_21150;
var G__21193 = count__20717_21151;
var G__21194 = (i__20718_21152 + (1));
seq__20714_21149 = G__21191;
chunk__20716_21150 = G__21192;
count__20717_21151 = G__21193;
i__20718_21152 = G__21194;
continue;
}
} else {
var temp__5804__auto___21195 = cljs.core.seq(seq__20714_21149);
if(temp__5804__auto___21195){
var seq__20714_21196__$1 = temp__5804__auto___21195;
if(cljs.core.chunked_seq_QMARK_(seq__20714_21196__$1)){
var c__5568__auto___21197 = cljs.core.chunk_first(seq__20714_21196__$1);
var G__21198 = cljs.core.chunk_rest(seq__20714_21196__$1);
var G__21199 = c__5568__auto___21197;
var G__21200 = cljs.core.count(c__5568__auto___21197);
var G__21201 = (0);
seq__20714_21149 = G__21198;
chunk__20716_21150 = G__21199;
count__20717_21151 = G__21200;
i__20718_21152 = G__21201;
continue;
} else {
var child_struct_21202 = cljs.core.first(seq__20714_21196__$1);
if((!((child_struct_21202 == null)))){
if(typeof child_struct_21202 === 'string'){
var text_21203 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21203),child_struct_21202].join(''));
} else {
var children_21204 = shadow.dom.svg_node(child_struct_21202);
if(cljs.core.seq_QMARK_(children_21204)){
var seq__20771_21205 = cljs.core.seq(children_21204);
var chunk__20774_21206 = null;
var count__20775_21207 = (0);
var i__20776_21208 = (0);
while(true){
if((i__20776_21208 < count__20775_21207)){
var child_21210 = chunk__20774_21206.cljs$core$IIndexed$_nth$arity$2(null,i__20776_21208);
if(cljs.core.truth_(child_21210)){
node.appendChild(child_21210);


var G__21211 = seq__20771_21205;
var G__21212 = chunk__20774_21206;
var G__21213 = count__20775_21207;
var G__21214 = (i__20776_21208 + (1));
seq__20771_21205 = G__21211;
chunk__20774_21206 = G__21212;
count__20775_21207 = G__21213;
i__20776_21208 = G__21214;
continue;
} else {
var G__21215 = seq__20771_21205;
var G__21216 = chunk__20774_21206;
var G__21217 = count__20775_21207;
var G__21218 = (i__20776_21208 + (1));
seq__20771_21205 = G__21215;
chunk__20774_21206 = G__21216;
count__20775_21207 = G__21217;
i__20776_21208 = G__21218;
continue;
}
} else {
var temp__5804__auto___21219__$1 = cljs.core.seq(seq__20771_21205);
if(temp__5804__auto___21219__$1){
var seq__20771_21221__$1 = temp__5804__auto___21219__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20771_21221__$1)){
var c__5568__auto___21222 = cljs.core.chunk_first(seq__20771_21221__$1);
var G__21223 = cljs.core.chunk_rest(seq__20771_21221__$1);
var G__21224 = c__5568__auto___21222;
var G__21225 = cljs.core.count(c__5568__auto___21222);
var G__21226 = (0);
seq__20771_21205 = G__21223;
chunk__20774_21206 = G__21224;
count__20775_21207 = G__21225;
i__20776_21208 = G__21226;
continue;
} else {
var child_21227 = cljs.core.first(seq__20771_21221__$1);
if(cljs.core.truth_(child_21227)){
node.appendChild(child_21227);


var G__21228 = cljs.core.next(seq__20771_21221__$1);
var G__21229 = null;
var G__21230 = (0);
var G__21231 = (0);
seq__20771_21205 = G__21228;
chunk__20774_21206 = G__21229;
count__20775_21207 = G__21230;
i__20776_21208 = G__21231;
continue;
} else {
var G__21232 = cljs.core.next(seq__20771_21221__$1);
var G__21233 = null;
var G__21234 = (0);
var G__21235 = (0);
seq__20771_21205 = G__21232;
chunk__20774_21206 = G__21233;
count__20775_21207 = G__21234;
i__20776_21208 = G__21235;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21204);
}
}


var G__21236 = cljs.core.next(seq__20714_21196__$1);
var G__21237 = null;
var G__21238 = (0);
var G__21239 = (0);
seq__20714_21149 = G__21236;
chunk__20716_21150 = G__21237;
count__20717_21151 = G__21238;
i__20718_21152 = G__21239;
continue;
} else {
var G__21240 = cljs.core.next(seq__20714_21196__$1);
var G__21241 = null;
var G__21242 = (0);
var G__21243 = (0);
seq__20714_21149 = G__21240;
chunk__20716_21150 = G__21241;
count__20717_21151 = G__21242;
i__20718_21152 = G__21243;
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
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

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

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21246 = arguments.length;
var i__5770__auto___21247 = (0);
while(true){
if((i__5770__auto___21247 < len__5769__auto___21246)){
args__5775__auto__.push((arguments[i__5770__auto___21247]));

var G__21248 = (i__5770__auto___21247 + (1));
i__5770__auto___21247 = G__21248;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20796){
var G__20797 = cljs.core.first(seq20796);
var seq20796__$1 = cljs.core.next(seq20796);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20797,seq20796__$1);
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
var G__20808 = arguments.length;
switch (G__20808) {
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
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17409__auto___21250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_20818){
var state_val_20819 = (state_20818[(1)]);
if((state_val_20819 === (1))){
var state_20818__$1 = state_20818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20818__$1,(2),once_or_cleanup);
} else {
if((state_val_20819 === (2))){
var inst_20814 = (state_20818[(2)]);
var inst_20816 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20818__$1 = (function (){var statearr_20824 = state_20818;
(statearr_20824[(7)] = inst_20814);

return statearr_20824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20818__$1,inst_20816);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__16978__auto__ = null;
var shadow$dom$state_machine__16978__auto____0 = (function (){
var statearr_20825 = [null,null,null,null,null,null,null,null];
(statearr_20825[(0)] = shadow$dom$state_machine__16978__auto__);

(statearr_20825[(1)] = (1));

return statearr_20825;
});
var shadow$dom$state_machine__16978__auto____1 = (function (state_20818){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_20818);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e20827){var ex__16981__auto__ = e20827;
var statearr_20828_21251 = state_20818;
(statearr_20828_21251[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_20818[(4)]))){
var statearr_20829_21252 = state_20818;
(statearr_20829_21252[(1)] = cljs.core.first((state_20818[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21253 = state_20818;
state_20818 = G__21253;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
shadow$dom$state_machine__16978__auto__ = function(state_20818){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__16978__auto____0.call(this);
case 1:
return shadow$dom$state_machine__16978__auto____1.call(this,state_20818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__16978__auto____0;
shadow$dom$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__16978__auto____1;
return shadow$dom$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_20831 = f__17410__auto__();
(statearr_20831[(6)] = c__17409__auto___21250);

return statearr_20831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
