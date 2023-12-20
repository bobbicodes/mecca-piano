goog.provide('re_pressed.impl');
re_pressed.impl.ns_root = "re-pressed.core/";
re_pressed.impl.max_record = (25);
re_pressed.impl.modifier_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(91),null,(17),null,(16),null,(18),null], null), null);
re_pressed.impl.__GT_ns_keyword = (function re_pressed$impl$__GT_ns_keyword(event_type){
return (function() {
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword = null;
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0 = (function (){
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1(null);
});
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1 = (function (suffix){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));
});
re_pressed$impl$__GT_ns_keyword_$_ns_keyword = function(suffix){
switch(arguments.length){
case 0:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0.call(this);
case 1:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1.call(this,suffix);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$0 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0;
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1;
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword;
})()
});
re_pressed.impl.is_key_QMARK_ = (function re_pressed$impl$is_key_QMARK_(recent_key,key_map){
return cljs.core.every_QMARK_((function (p__26396){
var vec__26397 = p__26396;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26397,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26397,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recent_key,k),v);
}),key_map);
});
re_pressed.impl.register_subs = (function re_pressed$impl$register_subs(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var G__26402_26482 = ns_keyword("-keys");
var G__26403_26483 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26402_26482,G__26403_26483) : re_frame.core.reg_sub.call(null,G__26402_26482,G__26403_26483));

var G__26404_26484 = ns_keyword("-event-keys");
var G__26405_26485 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26404_26484,G__26405_26485) : re_frame.core.reg_sub.call(null,G__26404_26484,G__26405_26485));

var G__26406_26486 = ns_keyword("-clear-keys");
var G__26407_26487 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26406_26486,G__26407_26487) : re_frame.core.reg_sub.call(null,G__26406_26486,G__26407_26487));

var G__26408_26488 = ns_keyword("-always-listen-keys");
var G__26409_26489 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26408_26488,G__26409_26489) : re_frame.core.reg_sub.call(null,G__26408_26488,G__26409_26489));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var G__26414 = ns_keyword("-prevent-default-keys");
var G__26415 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null));
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26414,G__26415) : re_frame.core.reg_sub.call(null,G__26414,G__26415));
} else {
return null;
}
});
re_pressed.impl.__GT_set_key_BANG_ = (function re_pressed$impl$__GT_set_key_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return (function re_pressed$impl$__GT_set_key_BANG__$_set_key_BANG_(p__26422,p__26423){
var map__26424 = p__26422;
var map__26424__$1 = cljs.core.__destructure_map(map__26424);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26424__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26425 = p__26423;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26425,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26425,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),(function (key_maps){
var keys = (cljs.core.truth_(key_map)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = key_maps;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),key_map):key_maps);

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last(re_pressed.impl.max_record,keys));
}))], null);
});
});
re_pressed.impl.__GT_clear_keys_BANG_ = (function re_pressed$impl$__GT_clear_keys_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return (function re_pressed$impl$__GT_clear_keys_BANG__$_clear_keys_BANG_(p__26430,p__26431){
var map__26433 = p__26430;
var map__26433__$1 = cljs.core.__destructure_map(map__26433);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26433__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26435 = p__26431;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26435,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26435,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),cljs.core.PersistentVector.EMPTY)], null);
});
});
re_pressed.impl.prevent_default_keys_BANG_ = (function re_pressed$impl$prevent_default_keys_BANG_(_,p__26439){
var vec__26440 = p__26439;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26440,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26440,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join(''));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,e]);
});
re_pressed.impl.register_events = (function re_pressed$impl$register_events(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-set-key"),re_pressed.impl.__GT_set_key_BANG_(event_type));

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-clear-keys"),re_pressed.impl.__GT_clear_keys_BANG_(event_type));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-prevent-default-keys"),re_pressed.impl.prevent_default_keys_BANG_);
} else {
return null;
}
});
re_pressed.impl.register_effects = (function re_pressed$impl$register_effects(event_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var G__26443 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join(''));
var G__26444 = (function (e){
return e.preventDefault();
});
return (re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26443,G__26444) : re_frame.core.reg_fx.call(null,G__26443,G__26444));
} else {
return null;
}
});
var G__26450_26491 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"keyboard-event"].join(''));
var G__26451_26492 = (function (p__26452){
var map__26453 = p__26452;
var map__26453__$1 = cljs.core.__destructure_map(map__26453);
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26453__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
re_pressed.impl.register_subs(event_type);

re_pressed.impl.register_events(event_type);

re_pressed.impl.register_effects(event_type);

return goog.events.listen(document,event_type,(function (e){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var e_key = e.keyCode;
var modifier_key_QMARK_ = (re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1 ? re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1(e_key) : re_pressed.impl.modifier_keys.call(null,e_key));
var tag_name = e.target.tagName;
var entering_input_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
var hit_key = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"altKey","altKey",-670253656),e.altKey,new cljs.core.Keyword(null,"ctrlKey","ctrlKey",430760908),e.ctrlKey,new cljs.core.Keyword(null,"metaKey","metaKey",1006742180),e.metaKey,new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),e.shiftKey,new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),e.keyCode], null);
var always_listen_keys = cljs.core.deref((function (){var G__26454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-always-listen-keys")], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26454) : re_frame.core.subscribe.call(null,G__26454));
})());
var always_listen_QMARK_ = cljs.core.some((function (p1__26445_SHARP_){
return re_pressed.impl.is_key_QMARK_(hit_key,p1__26445_SHARP_);
}),always_listen_keys);
if(cljs.core.truth_((function (){var or__5045__auto__ = ((cljs.core.not(modifier_key_QMARK_)) && ((!(entering_input_QMARK_))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return always_listen_QMARK_;
}
})())){
var G__26455_26497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-set-key"),hit_key], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26455_26497) : re_frame.core.dispatch_sync.call(null,G__26455_26497));

var recent_keys = cljs.core.deref((function (){var G__26460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-keys")], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26460) : re_frame.core.subscribe.call(null,G__26460));
})());
var event_keys = cljs.core.deref((function (){var G__26461 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-event-keys")], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26461) : re_frame.core.subscribe.call(null,G__26461));
})());
var clear_keys = cljs.core.deref((function (){var G__26462 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-clear-keys")], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26462) : re_frame.core.subscribe.call(null,G__26462));
})());
var recent_key = cljs.core.last(recent_keys);
var is_key_sequence_QMARK_ = (function (key_maps){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__26446_SHARP_,p2__26447_SHARP_){
return re_pressed.impl.is_key_QMARK_(p1__26446_SHARP_,p2__26447_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(recent_keys),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(re_pressed.impl.max_record,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.reverse(key_maps)));
});
var check_events = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function re_pressed$impl$iter__26464(s__26465){
return (new cljs.core.LazySeq(null,(function (){
var s__26465__$1 = s__26465;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26465__$1);
if(temp__5804__auto__){
var s__26465__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26465__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__26465__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__26467 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__26466 = (0);
while(true){
if((i__26466 < size__5522__auto__)){
var vec__26468 = cljs.core._nth(c__5521__auto__,i__26466);
var seq__26469 = cljs.core.seq(vec__26468);
var first__26470 = cljs.core.first(seq__26469);
var seq__26469__$1 = cljs.core.next(seq__26469);
var trigger_event = first__26470;
var ks = seq__26469__$1;
cljs.core.chunk_append(b__26467,(function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})());

var G__26506 = (i__26466 + (1));
i__26466 = G__26506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26467),re_pressed$impl$iter__26464(cljs.core.chunk_rest(s__26465__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26467),null);
}
} else {
var vec__26472 = cljs.core.first(s__26465__$2);
var seq__26473 = cljs.core.seq(vec__26472);
var first__26474 = cljs.core.first(seq__26473);
var seq__26473__$1 = cljs.core.next(seq__26473);
var trigger_event = first__26474;
var ks = seq__26473__$1;
return cljs.core.cons((function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})(),re_pressed$impl$iter__26464(cljs.core.rest(s__26465__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(event_keys);
})());
var vec__26457 = (function (){var G__26477 = check_events;
var G__26477__$1 = (((G__26477 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26448_SHARP_){
return cljs.core.second(p1__26448_SHARP_) === true;
}),G__26477));
if((G__26477__$1 == null)){
return null;
} else {
return cljs.core.first(G__26477__$1);
}
})();
var triggered_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26457,(0),null);
var event_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26457,(1),null);
var clear_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,clear_keys);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var prevent_default_keys_26509 = cljs.core.deref((function (){var G__26478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-prevent-default-keys")], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26478) : re_frame.core.subscribe.call(null,G__26478));
})());
var prevent_default_QMARK__26510 = cljs.core.some((function (p1__26449_SHARP_){
return re_pressed.impl.is_key_QMARK_(recent_key,p1__26449_SHARP_);
}),prevent_default_keys_26509);
if(cljs.core.truth_(prevent_default_QMARK__26510)){
var G__26479_26511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-prevent-default-keys"),e], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26479_26511) : re_frame.core.dispatch_sync.call(null,G__26479_26511));
} else {
}
} else {
}

if(cljs.core.truth_(clear_QMARK_)){
var G__26480 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-clear-keys")], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26480) : re_frame.core.dispatch_sync.call(null,G__26480));
} else {
if(cljs.core.truth_(event_QMARK_)){
var G__26481 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(triggered_event,e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([recent_keys], 0));
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__26481) : re_frame.core.dispatch_sync.call(null,G__26481));
} else {
return null;

}
}
} else {
return null;
}
}));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26450_26491,G__26451_26492) : re_frame.core.reg_fx.call(null,G__26450_26491,G__26451_26492));

//# sourceMappingURL=re_pressed.impl.js.map
