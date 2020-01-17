goog.provide('re_pressed.impl');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.events');
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
return cljs.core.every_QMARK_((function (p__41996){
var vec__41997 = p__41996;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41997,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41997,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recent_key,k),v);
}),key_map);
});
re_pressed.impl.register_subs = (function re_pressed$impl$register_subs(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var G__42000_42066 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-keys") : ns_keyword.call(null,"-keys"));
var G__42001_42067 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42000_42066,G__42001_42067) : re_frame.core.reg_sub.call(null,G__42000_42066,G__42001_42067));

var G__42002_42068 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-event-keys") : ns_keyword.call(null,"-event-keys"));
var G__42003_42069 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42002_42068,G__42003_42069) : re_frame.core.reg_sub.call(null,G__42002_42068,G__42003_42069));

var G__42004_42070 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"));
var G__42005_42071 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42004_42070,G__42005_42071) : re_frame.core.reg_sub.call(null,G__42004_42070,G__42005_42071));

var G__42006_42072 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-always-listen-keys") : ns_keyword.call(null,"-always-listen-keys"));
var G__42007_42073 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42006_42072,G__42007_42073) : re_frame.core.reg_sub.call(null,G__42006_42072,G__42007_42073));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var G__42008 = (ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys"));
var G__42009 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null));
});
return (re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42008,G__42009) : re_frame.core.reg_sub.call(null,G__42008,G__42009));
} else {
return null;
}
});
re_pressed.impl.__GT_set_key_BANG_ = (function re_pressed$impl$__GT_set_key_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return (function re_pressed$impl$__GT_set_key_BANG__$_set_key_BANG_(p__42010,p__42011){
var map__42012 = p__42010;
var map__42012__$1 = (((((!((map__42012 == null))))?(((((map__42012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42012):map__42012);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42012__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42013 = p__42011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42013,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42013,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),(function (key_maps){
var keys = (cljs.core.truth_(key_map)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4185__auto__ = key_maps;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
return (function re_pressed$impl$__GT_clear_keys_BANG__$_clear_keys_BANG_(p__42017,p__42018){
var map__42019 = p__42017;
var map__42019__$1 = (((((!((map__42019 == null))))?(((((map__42019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42019):map__42019);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42019__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42020 = p__42018;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42020,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42020,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$0 ? ns_keyword.cljs$core$IFn$_invoke$arity$0() : ns_keyword.call(null)),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),cljs.core.PersistentVector.EMPTY)], null);
});
});
re_pressed.impl.prevent_default_keys_BANG_ = (function re_pressed$impl$prevent_default_keys_BANG_(_,p__42024){
var vec__42025 = p__42024;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42025,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42025,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join(''));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,e]);
});
re_pressed.impl.register_events = (function re_pressed$impl$register_events(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-set-key") : ns_keyword.call(null,"-set-key")),re_pressed.impl.__GT_set_key_BANG_(event_type));

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys")),re_pressed.impl.__GT_clear_keys_BANG_(event_type));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys")),re_pressed.impl.prevent_default_keys_BANG_);
} else {
return null;
}
});
re_pressed.impl.register_effects = (function re_pressed$impl$register_effects(event_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var G__42028 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join(''));
var G__42029 = (function (e){
return e.preventDefault();
});
return (re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42028,G__42029) : re_frame.core.reg_fx.call(null,G__42028,G__42029));
} else {
return null;
}
});
var G__42035_42105 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"keyboard-event"].join(''));
var G__42036_42106 = (function (p__42037){
var map__42038 = p__42037;
var map__42038__$1 = (((((!((map__42038 == null))))?(((((map__42038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42038):map__42038);
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42038__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
re_pressed.impl.register_subs(event_type);

re_pressed.impl.register_events(event_type);

re_pressed.impl.register_effects(event_type);

var G__42040 = document;
var G__42041 = event_type;
var G__42042 = (function (e){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var e_key = e.keyCode;
var modifier_key_QMARK_ = (re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1 ? re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1(e_key) : re_pressed.impl.modifier_keys.call(null,e_key));
var tag_name = e.target.tagName;
var entering_input_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
var hit_key = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"altKey","altKey",-670253656),e.altKey,new cljs.core.Keyword(null,"ctrlKey","ctrlKey",430760908),e.ctrlKey,new cljs.core.Keyword(null,"metaKey","metaKey",1006742180),e.metaKey,new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),e.shiftKey,new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),e.keyCode], null);
var always_listen_keys = cljs.core.deref((function (){var G__42043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-always-listen-keys") : ns_keyword.call(null,"-always-listen-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42043) : re_frame.core.subscribe.call(null,G__42043));
})());
var always_listen_QMARK_ = cljs.core.some((function (p1__42030_SHARP_){
return re_pressed.impl.is_key_QMARK_(hit_key,p1__42030_SHARP_);
}),always_listen_keys);
if(cljs.core.truth_((function (){var or__4185__auto__ = ((cljs.core.not(modifier_key_QMARK_)) && ((!(entering_input_QMARK_))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return always_listen_QMARK_;
}
})())){
var G__42044_42107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-set-key") : ns_keyword.call(null,"-set-key")),hit_key], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__42044_42107) : re_frame.core.dispatch_sync.call(null,G__42044_42107));

var recent_keys = cljs.core.deref((function (){var G__42048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-keys") : ns_keyword.call(null,"-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42048) : re_frame.core.subscribe.call(null,G__42048));
})());
var event_keys = cljs.core.deref((function (){var G__42049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-event-keys") : ns_keyword.call(null,"-event-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42049) : re_frame.core.subscribe.call(null,G__42049));
})());
var clear_keys = cljs.core.deref((function (){var G__42050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42050) : re_frame.core.subscribe.call(null,G__42050));
})());
var recent_key = cljs.core.last(recent_keys);
var is_key_sequence_QMARK_ = (function (key_maps){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__42031_SHARP_,p2__42032_SHARP_){
return re_pressed.impl.is_key_QMARK_(p1__42031_SHARP_,p2__42032_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(recent_keys),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(re_pressed.impl.max_record,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.reverse(key_maps)));
});
var check_events = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function re_pressed$impl$iter__42051(s__42052){
return (new cljs.core.LazySeq(null,(function (){
var s__42052__$1 = s__42052;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42052__$1);
if(temp__5735__auto__){
var s__42052__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42052__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42052__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42054 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42053 = (0);
while(true){
if((i__42053 < size__4581__auto__)){
var vec__42055 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42053);
var seq__42056 = cljs.core.seq(vec__42055);
var first__42057 = cljs.core.first(seq__42056);
var seq__42056__$1 = cljs.core.next(seq__42056);
var trigger_event = first__42057;
var ks = seq__42056__$1;
cljs.core.chunk_append(b__42054,(function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})());

var G__42108 = (i__42053 + (1));
i__42053 = G__42108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42054),re_pressed$impl$iter__42051(cljs.core.chunk_rest(s__42052__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42054),null);
}
} else {
var vec__42058 = cljs.core.first(s__42052__$2);
var seq__42059 = cljs.core.seq(vec__42058);
var first__42060 = cljs.core.first(seq__42059);
var seq__42059__$1 = cljs.core.next(seq__42059);
var trigger_event = first__42060;
var ks = seq__42059__$1;
return cljs.core.cons((function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})(),re_pressed$impl$iter__42051(cljs.core.rest(s__42052__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(event_keys);
})());
var vec__42045 = (function (){var G__42061 = check_events;
var G__42061__$1 = (((G__42061 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42033_SHARP_){
return cljs.core.second(p1__42033_SHARP_) === true;
}),G__42061));
if((G__42061__$1 == null)){
return null;
} else {
return cljs.core.first(G__42061__$1);
}
})();
var triggered_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42045,(0),null);
var event_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42045,(1),null);
var clear_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,clear_keys);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var prevent_default_keys_42109 = cljs.core.deref((function (){var G__42062 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys"))], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42062) : re_frame.core.subscribe.call(null,G__42062));
})());
var prevent_default_QMARK__42110 = cljs.core.some((function (p1__42034_SHARP_){
return re_pressed.impl.is_key_QMARK_(recent_key,p1__42034_SHARP_);
}),prevent_default_keys_42109);
if(cljs.core.truth_(prevent_default_QMARK__42110)){
var G__42063_42111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-prevent-default-keys") : ns_keyword.call(null,"-prevent-default-keys")),e], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__42063_42111) : re_frame.core.dispatch_sync.call(null,G__42063_42111));
} else {
}
} else {
}

if(cljs.core.truth_(clear_QMARK_)){
var G__42064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ns_keyword.cljs$core$IFn$_invoke$arity$1 ? ns_keyword.cljs$core$IFn$_invoke$arity$1("-clear-keys") : ns_keyword.call(null,"-clear-keys"))], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__42064) : re_frame.core.dispatch_sync.call(null,G__42064));
} else {
if(cljs.core.truth_(event_QMARK_)){
var G__42065 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(triggered_event,e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([recent_keys], 0));
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__42065) : re_frame.core.dispatch_sync.call(null,G__42065));
} else {
return null;

}
}
} else {
return null;
}
});
return goog.events.listen(G__42040,G__42041,G__42042);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__42035_42105,G__42036_42106) : re_frame.core.reg_fx.call(null,G__42035_42105,G__42036_42106));

//# sourceMappingURL=re_pressed.impl.js.map
