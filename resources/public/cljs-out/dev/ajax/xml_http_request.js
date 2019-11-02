// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__19256 = e.target.readyState;
var fexpr__19255 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__19255.cljs$core$IFn$_invoke$arity$1 ? fexpr__19255.cljs$core$IFn$_invoke$arity$1(G__19256) : fexpr__19255.call(null,G__19256));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__19258,handler){
var map__19259 = p__19258;
var map__19259__$1 = ((((!((map__19259 == null)))?(((((map__19259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19259):map__19259);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19259__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19259__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19259__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__19259,map__19259__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__19257_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__19257_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__19259,map__19259__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___19271 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___19271)){
var response_type_19272 = temp__5457__auto___19271;
this$__$1.responseType = cljs.core.name(response_type_19272);
} else {
}

var seq__19261_19273 = cljs.core.seq(headers);
var chunk__19262_19274 = null;
var count__19263_19275 = (0);
var i__19264_19276 = (0);
while(true){
if((i__19264_19276 < count__19263_19275)){
var vec__19265_19277 = chunk__19262_19274.cljs$core$IIndexed$_nth$arity$2(null,i__19264_19276);
var k_19278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19265_19277,(0),null);
var v_19279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19265_19277,(1),null);
this$__$1.setRequestHeader(k_19278,v_19279);


var G__19280 = seq__19261_19273;
var G__19281 = chunk__19262_19274;
var G__19282 = count__19263_19275;
var G__19283 = (i__19264_19276 + (1));
seq__19261_19273 = G__19280;
chunk__19262_19274 = G__19281;
count__19263_19275 = G__19282;
i__19264_19276 = G__19283;
continue;
} else {
var temp__5457__auto___19284 = cljs.core.seq(seq__19261_19273);
if(temp__5457__auto___19284){
var seq__19261_19285__$1 = temp__5457__auto___19284;
if(cljs.core.chunked_seq_QMARK_(seq__19261_19285__$1)){
var c__4351__auto___19286 = cljs.core.chunk_first(seq__19261_19285__$1);
var G__19287 = cljs.core.chunk_rest(seq__19261_19285__$1);
var G__19288 = c__4351__auto___19286;
var G__19289 = cljs.core.count(c__4351__auto___19286);
var G__19290 = (0);
seq__19261_19273 = G__19287;
chunk__19262_19274 = G__19288;
count__19263_19275 = G__19289;
i__19264_19276 = G__19290;
continue;
} else {
var vec__19268_19291 = cljs.core.first(seq__19261_19285__$1);
var k_19292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19268_19291,(0),null);
var v_19293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19268_19291,(1),null);
this$__$1.setRequestHeader(k_19292,v_19293);


var G__19294 = cljs.core.next(seq__19261_19285__$1);
var G__19295 = null;
var G__19296 = (0);
var G__19297 = (0);
seq__19261_19273 = G__19294;
chunk__19262_19274 = G__19295;
count__19263_19275 = G__19296;
i__19264_19276 = G__19297;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
