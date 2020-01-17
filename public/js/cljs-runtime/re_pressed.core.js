goog.provide('re_pressed.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_pressed.impl');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),(function (_,p__42074){
var vec__42075 = p__42074;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42075,(0),null);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42075,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-pressed.core","keyboard-event","re-pressed.core/keyboard-event",-1923839752),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),(function (p__42078,p__42079){
var map__42080 = p__42078;
var map__42080__$1 = (((((!((map__42080 == null))))?(((((map__42080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42080):map__42080);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42080__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42081 = p__42079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42081,(0),null);
var map__42084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42081,(1),null);
var map__42084__$1 = (((((!((map__42084 == null))))?(((((map__42084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42084):map__42084);
var opts = map__42084__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42084__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42084__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42084__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
var prevent_default_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42084__$1,new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null),prevent_default_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keypress-rules","re-pressed.core/set-keypress-rules",1541561860),(function (p__42087,p__42088){
var map__42089 = p__42087;
var map__42089__$1 = (((((!((map__42089 == null))))?(((((map__42089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42089):map__42089);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42089__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42090 = p__42088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42090,(0),null);
var map__42093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42090,(1),null);
var map__42093__$1 = (((((!((map__42093 == null))))?(((((map__42093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42093):map__42093);
var opts = map__42093__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42093__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42093__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42093__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keyup-rules","re-pressed.core/set-keyup-rules",519284589),(function (p__42096,p__42097){
var map__42098 = p__42096;
var map__42098__$1 = (((((!((map__42098 == null))))?(((((map__42098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42098):map__42098);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42099 = p__42097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42099,(0),null);
var map__42102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42099,(1),null);
var map__42102__$1 = (((((!((map__42102 == null))))?(((((map__42102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42102):map__42102);
var opts = map__42102__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42102__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42102__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42102__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));

//# sourceMappingURL=re_pressed.core.js.map
