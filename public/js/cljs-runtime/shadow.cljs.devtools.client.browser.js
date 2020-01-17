goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39167 = arguments.length;
var i__4790__auto___39168 = (0);
while(true){
if((i__4790__auto___39168 < len__4789__auto___39167)){
args__4795__auto__.push((arguments[i__4790__auto___39168]));

var G__39169 = (i__4790__auto___39168 + (1));
i__4790__auto___39168 = G__39169;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38997){
var G__38998 = cljs.core.first(seq38997);
var seq38997__$1 = cljs.core.next(seq38997);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38998,seq38997__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__39001){
var map__39002 = p__39001;
var map__39002__$1 = (((((!((map__39002 == null))))?(((((map__39002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39002):map__39002);
var src = map__39002__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39002__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39002__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39004 = cljs.core.seq(sources);
var chunk__39005 = null;
var count__39006 = (0);
var i__39007 = (0);
while(true){
if((i__39007 < count__39006)){
var map__39016 = chunk__39005.cljs$core$IIndexed$_nth$arity$2(null,i__39007);
var map__39016__$1 = (((((!((map__39016 == null))))?(((((map__39016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39016):map__39016);
var src = map__39016__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39016__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39016__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39016__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39016__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e39018){var e_39170 = e39018;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39170);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39170.message)].join('')));
}

var G__39171 = seq__39004;
var G__39172 = chunk__39005;
var G__39173 = count__39006;
var G__39174 = (i__39007 + (1));
seq__39004 = G__39171;
chunk__39005 = G__39172;
count__39006 = G__39173;
i__39007 = G__39174;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39004);
if(temp__5735__auto__){
var seq__39004__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39004__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39004__$1);
var G__39175 = cljs.core.chunk_rest(seq__39004__$1);
var G__39176 = c__4609__auto__;
var G__39177 = cljs.core.count(c__4609__auto__);
var G__39178 = (0);
seq__39004 = G__39175;
chunk__39005 = G__39176;
count__39006 = G__39177;
i__39007 = G__39178;
continue;
} else {
var map__39019 = cljs.core.first(seq__39004__$1);
var map__39019__$1 = (((((!((map__39019 == null))))?(((((map__39019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39019):map__39019);
var src = map__39019__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39019__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39019__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39019__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39019__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e39021){var e_39179 = e39021;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39179);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39179.message)].join('')));
}

var G__39180 = cljs.core.next(seq__39004__$1);
var G__39181 = null;
var G__39182 = (0);
var G__39183 = (0);
seq__39004 = G__39180;
chunk__39005 = G__39181;
count__39006 = G__39182;
i__39007 = G__39183;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39022 = cljs.core.seq(js_requires);
var chunk__39023 = null;
var count__39024 = (0);
var i__39025 = (0);
while(true){
if((i__39025 < count__39024)){
var js_ns = chunk__39023.cljs$core$IIndexed$_nth$arity$2(null,i__39025);
var require_str_39184 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39184);


var G__39185 = seq__39022;
var G__39186 = chunk__39023;
var G__39187 = count__39024;
var G__39188 = (i__39025 + (1));
seq__39022 = G__39185;
chunk__39023 = G__39186;
count__39024 = G__39187;
i__39025 = G__39188;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39022);
if(temp__5735__auto__){
var seq__39022__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39022__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39022__$1);
var G__39189 = cljs.core.chunk_rest(seq__39022__$1);
var G__39190 = c__4609__auto__;
var G__39191 = cljs.core.count(c__4609__auto__);
var G__39192 = (0);
seq__39022 = G__39189;
chunk__39023 = G__39190;
count__39024 = G__39191;
i__39025 = G__39192;
continue;
} else {
var js_ns = cljs.core.first(seq__39022__$1);
var require_str_39193 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39193);


var G__39194 = cljs.core.next(seq__39022__$1);
var G__39195 = null;
var G__39196 = (0);
var G__39197 = (0);
seq__39022 = G__39194;
chunk__39023 = G__39195;
count__39024 = G__39196;
i__39025 = G__39197;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__39026 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__39026) : callback.call(null,G__39026));
} else {
var G__39027 = shadow.cljs.devtools.client.env.files_url();
var G__39028 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__39029 = "POST";
var G__39030 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__39031 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__39027,G__39028,G__39029,G__39030,G__39031);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__39033){
var map__39034 = p__39033;
var map__39034__$1 = (((((!((map__39034 == null))))?(((((map__39034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39034):map__39034);
var msg = map__39034__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39034__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39034__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__39036 = info;
var map__39036__$1 = (((((!((map__39036 == null))))?(((((map__39036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39036):map__39036);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39036__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39036__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39038(s__39039){
return (new cljs.core.LazySeq(null,(function (){
var s__39039__$1 = s__39039;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39039__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__39044 = cljs.core.first(xs__6292__auto__);
var map__39044__$1 = (((((!((map__39044 == null))))?(((((map__39044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39044):map__39044);
var src = map__39044__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39044__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39044__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__39039__$1,map__39044,map__39044__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39036,map__39036__$1,sources,compiled,map__39034,map__39034__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39038_$_iter__39040(s__39041){
return (new cljs.core.LazySeq(null,((function (s__39039__$1,map__39044,map__39044__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39036,map__39036__$1,sources,compiled,map__39034,map__39034__$1,msg,info,reload_info){
return (function (){
var s__39041__$1 = s__39041;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39041__$1);
if(temp__5735__auto____$1){
var s__39041__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39041__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__39041__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__39043 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__39042 = (0);
while(true){
if((i__39042 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__39042);
cljs.core.chunk_append(b__39043,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39198 = (i__39042 + (1));
i__39042 = G__39198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39043),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39038_$_iter__39040(cljs.core.chunk_rest(s__39041__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39043),null);
}
} else {
var warning = cljs.core.first(s__39041__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39038_$_iter__39040(cljs.core.rest(s__39041__$2)));
}
} else {
return null;
}
break;
}
});})(s__39039__$1,map__39044,map__39044__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39036,map__39036__$1,sources,compiled,map__39034,map__39034__$1,msg,info,reload_info))
,null,null));
});})(s__39039__$1,map__39044,map__39044__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39036,map__39036__$1,sources,compiled,map__39034,map__39034__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39038(cljs.core.rest(s__39039__$1)));
} else {
var G__39199 = cljs.core.rest(s__39039__$1);
s__39039__$1 = G__39199;
continue;
}
} else {
var G__39200 = cljs.core.rest(s__39039__$1);
s__39039__$1 = G__39200;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__39046_39201 = cljs.core.seq(warnings);
var chunk__39047_39202 = null;
var count__39048_39203 = (0);
var i__39049_39204 = (0);
while(true){
if((i__39049_39204 < count__39048_39203)){
var map__39054_39205 = chunk__39047_39202.cljs$core$IIndexed$_nth$arity$2(null,i__39049_39204);
var map__39054_39206__$1 = (((((!((map__39054_39205 == null))))?(((((map__39054_39205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39054_39205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39054_39205):map__39054_39205);
var w_39207 = map__39054_39206__$1;
var msg_39208__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39054_39206__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39054_39206__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39054_39206__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39054_39206__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39211)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39209),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39210),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39208__$1)].join(''));


var G__39212 = seq__39046_39201;
var G__39213 = chunk__39047_39202;
var G__39214 = count__39048_39203;
var G__39215 = (i__39049_39204 + (1));
seq__39046_39201 = G__39212;
chunk__39047_39202 = G__39213;
count__39048_39203 = G__39214;
i__39049_39204 = G__39215;
continue;
} else {
var temp__5735__auto___39216 = cljs.core.seq(seq__39046_39201);
if(temp__5735__auto___39216){
var seq__39046_39217__$1 = temp__5735__auto___39216;
if(cljs.core.chunked_seq_QMARK_(seq__39046_39217__$1)){
var c__4609__auto___39218 = cljs.core.chunk_first(seq__39046_39217__$1);
var G__39219 = cljs.core.chunk_rest(seq__39046_39217__$1);
var G__39220 = c__4609__auto___39218;
var G__39221 = cljs.core.count(c__4609__auto___39218);
var G__39222 = (0);
seq__39046_39201 = G__39219;
chunk__39047_39202 = G__39220;
count__39048_39203 = G__39221;
i__39049_39204 = G__39222;
continue;
} else {
var map__39056_39223 = cljs.core.first(seq__39046_39217__$1);
var map__39056_39224__$1 = (((((!((map__39056_39223 == null))))?(((((map__39056_39223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39056_39223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39056_39223):map__39056_39223);
var w_39225 = map__39056_39224__$1;
var msg_39226__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39056_39224__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39056_39224__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39056_39224__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39056_39224__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39229)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39227),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39228),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39226__$1)].join(''));


var G__39230 = cljs.core.next(seq__39046_39217__$1);
var G__39231 = null;
var G__39232 = (0);
var G__39233 = (0);
seq__39046_39201 = G__39230;
chunk__39047_39202 = G__39231;
count__39048_39203 = G__39232;
i__39049_39204 = G__39233;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__39058){
var map__39059 = p__39058;
var map__39059__$1 = (((((!((map__39059 == null))))?(((((map__39059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39059):map__39059);
var src = map__39059__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39059__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39059__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39061){
var map__39062 = p__39061;
var map__39062__$1 = (((((!((map__39062 == null))))?(((((map__39062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39062):map__39062);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39062__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__39064){
var map__39065 = p__39064;
var map__39065__$1 = (((((!((map__39065 == null))))?(((((map__39065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39065):map__39065);
var rc = map__39065__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39065__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__39032_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39032_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__39067){
var map__39068 = p__39067;
var map__39068__$1 = (((((!((map__39068 == null))))?(((((map__39068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39068):map__39068);
var msg = map__39068__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39068__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39070 = cljs.core.seq(updates);
var chunk__39072 = null;
var count__39073 = (0);
var i__39074 = (0);
while(true){
if((i__39074 < count__39073)){
var path = chunk__39072.cljs$core$IIndexed$_nth$arity$2(null,i__39074);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39100_39234 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39103_39235 = null;
var count__39104_39236 = (0);
var i__39105_39237 = (0);
while(true){
if((i__39105_39237 < count__39104_39236)){
var node_39238 = chunk__39103_39235.cljs$core$IIndexed$_nth$arity$2(null,i__39105_39237);
var path_match_39239 = shadow.cljs.devtools.client.browser.match_paths(node_39238.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39239)){
var new_link_39240 = (function (){var G__39110 = node_39238.cloneNode(true);
G__39110.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39239),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39110;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39239], 0));

goog.dom.insertSiblingAfter(new_link_39240,node_39238);

goog.dom.removeNode(node_39238);


var G__39241 = seq__39100_39234;
var G__39242 = chunk__39103_39235;
var G__39243 = count__39104_39236;
var G__39244 = (i__39105_39237 + (1));
seq__39100_39234 = G__39241;
chunk__39103_39235 = G__39242;
count__39104_39236 = G__39243;
i__39105_39237 = G__39244;
continue;
} else {
var G__39245 = seq__39100_39234;
var G__39246 = chunk__39103_39235;
var G__39247 = count__39104_39236;
var G__39248 = (i__39105_39237 + (1));
seq__39100_39234 = G__39245;
chunk__39103_39235 = G__39246;
count__39104_39236 = G__39247;
i__39105_39237 = G__39248;
continue;
}
} else {
var temp__5735__auto___39249 = cljs.core.seq(seq__39100_39234);
if(temp__5735__auto___39249){
var seq__39100_39250__$1 = temp__5735__auto___39249;
if(cljs.core.chunked_seq_QMARK_(seq__39100_39250__$1)){
var c__4609__auto___39251 = cljs.core.chunk_first(seq__39100_39250__$1);
var G__39252 = cljs.core.chunk_rest(seq__39100_39250__$1);
var G__39253 = c__4609__auto___39251;
var G__39254 = cljs.core.count(c__4609__auto___39251);
var G__39255 = (0);
seq__39100_39234 = G__39252;
chunk__39103_39235 = G__39253;
count__39104_39236 = G__39254;
i__39105_39237 = G__39255;
continue;
} else {
var node_39256 = cljs.core.first(seq__39100_39250__$1);
var path_match_39257 = shadow.cljs.devtools.client.browser.match_paths(node_39256.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39257)){
var new_link_39258 = (function (){var G__39111 = node_39256.cloneNode(true);
G__39111.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39257),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39111;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39257], 0));

goog.dom.insertSiblingAfter(new_link_39258,node_39256);

goog.dom.removeNode(node_39256);


var G__39259 = cljs.core.next(seq__39100_39250__$1);
var G__39260 = null;
var G__39261 = (0);
var G__39262 = (0);
seq__39100_39234 = G__39259;
chunk__39103_39235 = G__39260;
count__39104_39236 = G__39261;
i__39105_39237 = G__39262;
continue;
} else {
var G__39263 = cljs.core.next(seq__39100_39250__$1);
var G__39264 = null;
var G__39265 = (0);
var G__39266 = (0);
seq__39100_39234 = G__39263;
chunk__39103_39235 = G__39264;
count__39104_39236 = G__39265;
i__39105_39237 = G__39266;
continue;
}
}
} else {
}
}
break;
}


var G__39267 = seq__39070;
var G__39268 = chunk__39072;
var G__39269 = count__39073;
var G__39270 = (i__39074 + (1));
seq__39070 = G__39267;
chunk__39072 = G__39268;
count__39073 = G__39269;
i__39074 = G__39270;
continue;
} else {
var G__39271 = seq__39070;
var G__39272 = chunk__39072;
var G__39273 = count__39073;
var G__39274 = (i__39074 + (1));
seq__39070 = G__39271;
chunk__39072 = G__39272;
count__39073 = G__39273;
i__39074 = G__39274;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39070);
if(temp__5735__auto__){
var seq__39070__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39070__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39070__$1);
var G__39275 = cljs.core.chunk_rest(seq__39070__$1);
var G__39276 = c__4609__auto__;
var G__39277 = cljs.core.count(c__4609__auto__);
var G__39278 = (0);
seq__39070 = G__39275;
chunk__39072 = G__39276;
count__39073 = G__39277;
i__39074 = G__39278;
continue;
} else {
var path = cljs.core.first(seq__39070__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39112_39279 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39115_39280 = null;
var count__39116_39281 = (0);
var i__39117_39282 = (0);
while(true){
if((i__39117_39282 < count__39116_39281)){
var node_39283 = chunk__39115_39280.cljs$core$IIndexed$_nth$arity$2(null,i__39117_39282);
var path_match_39284 = shadow.cljs.devtools.client.browser.match_paths(node_39283.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39284)){
var new_link_39285 = (function (){var G__39122 = node_39283.cloneNode(true);
G__39122.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39284),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39122;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39284], 0));

goog.dom.insertSiblingAfter(new_link_39285,node_39283);

goog.dom.removeNode(node_39283);


var G__39286 = seq__39112_39279;
var G__39287 = chunk__39115_39280;
var G__39288 = count__39116_39281;
var G__39289 = (i__39117_39282 + (1));
seq__39112_39279 = G__39286;
chunk__39115_39280 = G__39287;
count__39116_39281 = G__39288;
i__39117_39282 = G__39289;
continue;
} else {
var G__39290 = seq__39112_39279;
var G__39291 = chunk__39115_39280;
var G__39292 = count__39116_39281;
var G__39293 = (i__39117_39282 + (1));
seq__39112_39279 = G__39290;
chunk__39115_39280 = G__39291;
count__39116_39281 = G__39292;
i__39117_39282 = G__39293;
continue;
}
} else {
var temp__5735__auto___39294__$1 = cljs.core.seq(seq__39112_39279);
if(temp__5735__auto___39294__$1){
var seq__39112_39295__$1 = temp__5735__auto___39294__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39112_39295__$1)){
var c__4609__auto___39296 = cljs.core.chunk_first(seq__39112_39295__$1);
var G__39297 = cljs.core.chunk_rest(seq__39112_39295__$1);
var G__39298 = c__4609__auto___39296;
var G__39299 = cljs.core.count(c__4609__auto___39296);
var G__39300 = (0);
seq__39112_39279 = G__39297;
chunk__39115_39280 = G__39298;
count__39116_39281 = G__39299;
i__39117_39282 = G__39300;
continue;
} else {
var node_39301 = cljs.core.first(seq__39112_39295__$1);
var path_match_39302 = shadow.cljs.devtools.client.browser.match_paths(node_39301.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39302)){
var new_link_39303 = (function (){var G__39123 = node_39301.cloneNode(true);
G__39123.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39302),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39123;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39302], 0));

goog.dom.insertSiblingAfter(new_link_39303,node_39301);

goog.dom.removeNode(node_39301);


var G__39304 = cljs.core.next(seq__39112_39295__$1);
var G__39305 = null;
var G__39306 = (0);
var G__39307 = (0);
seq__39112_39279 = G__39304;
chunk__39115_39280 = G__39305;
count__39116_39281 = G__39306;
i__39117_39282 = G__39307;
continue;
} else {
var G__39308 = cljs.core.next(seq__39112_39295__$1);
var G__39309 = null;
var G__39310 = (0);
var G__39311 = (0);
seq__39112_39279 = G__39308;
chunk__39115_39280 = G__39309;
count__39116_39281 = G__39310;
i__39117_39282 = G__39311;
continue;
}
}
} else {
}
}
break;
}


var G__39312 = cljs.core.next(seq__39070__$1);
var G__39313 = null;
var G__39314 = (0);
var G__39315 = (0);
seq__39070 = G__39312;
chunk__39072 = G__39313;
count__39073 = G__39314;
i__39074 = G__39315;
continue;
} else {
var G__39316 = cljs.core.next(seq__39070__$1);
var G__39317 = null;
var G__39318 = (0);
var G__39319 = (0);
seq__39070 = G__39316;
chunk__39072 = G__39317;
count__39073 = G__39318;
i__39074 = G__39319;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__39131){
var map__39132 = p__39131;
var map__39132__$1 = (((((!((map__39132 == null))))?(((((map__39132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39132):map__39132);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39132__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39132__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__39134,done){
var map__39135 = p__39134;
var map__39135__$1 = (((((!((map__39135 == null))))?(((((map__39135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39135):map__39135);
var msg = map__39135__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39135__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39135__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39135__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39135__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39141){
var map__39142 = p__39141;
var map__39142__$1 = (((((!((map__39142 == null))))?(((((map__39142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39142):map__39142);
var src = map__39142__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39142__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e39148){var e = e39148;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__39149,done){
var map__39150 = p__39149;
var map__39150__$1 = (((((!((map__39150 == null))))?(((((map__39150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39150):map__39150);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39150__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39150__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__39152){
var map__39153 = p__39152;
var map__39153__$1 = (((((!((map__39153 == null))))?(((((map__39153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39153):map__39153);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39153__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39153__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__39155,done){
var map__39156 = p__39155;
var map__39156__$1 = (((((!((map__39156 == null))))?(((((map__39156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39156):map__39156);
var msg = map__39156__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39156__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__39158_39320 = type;
var G__39158_39321__$1 = (((G__39158_39320 instanceof cljs.core.Keyword))?G__39158_39320.fqn:null);
switch (G__39158_39321__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__39159 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__39160 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__39161 = "POST";
var G__39162 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__39163 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__39159,G__39160,G__39161,G__39162,G__39163);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__39165 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__39164 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__39164.cljs$core$IFn$_invoke$arity$1 ? fexpr__39164.cljs$core$IFn$_invoke$arity$1(G__39165) : fexpr__39164.call(null,G__39165));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e39166){var e = e39166;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___39324 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___39324)){
var s_39325 = temp__5735__auto___39324;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_39325.onclose = (function (e){
return null;
}));

s_39325.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
