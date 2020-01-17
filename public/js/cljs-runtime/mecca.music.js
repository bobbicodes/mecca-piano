goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
mecca.music.audio_context = (function mecca$music$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('mecca.music.audio_context', mecca.music.audio_context);
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.audiocontext !== 'undefined')){
} else {
mecca.music.audiocontext = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(mecca.music.audio_context());
}
mecca.music.current_time = (function mecca$music$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.current_time', mecca.music.current_time);
mecca.music.lookahead = 25.0;
mecca.music.scheduleAheadTime = 0.1;
mecca.music.scheduler = (function mecca$music$scheduler(){
var next_note_time = (function (){var G__42236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42236) : re_frame.core.subscribe.call(null,G__42236));
})();
var current_note = (function (){var G__42237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42237) : re_frame.core.subscribe.call(null,G__42237));
})();
var tempo = (function (){var G__42238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42238) : re_frame.core.subscribe.call(null,G__42238));
})();
if((cljs.core.deref(next_note_time) < (mecca.music.scheduleAheadTime + mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext))))){
var G__42239 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),cljs.core.deref(current_note),cljs.core.deref(next_note_time)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42239) : re_frame.core.dispatch.call(null,G__42239));
} else {
var G__42240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-note","next-note",-239967297)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42240) : re_frame.core.dispatch.call(null,G__42240));
}
});
mecca.music.mmbass_minor_triad = (function mecca$music$mmbass_minor_triad(time,root){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 1.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (2)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (3))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (3)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (7))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 4.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (5)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 5.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (6)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (3))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (7)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (7))], null)], null);
});
mecca.music.mmbass_major_triad = (function mecca$music$mmbass_major_triad(time,root){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 1.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (2)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (4))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (3)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (7))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 4.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (5)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 5.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (6)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (4))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (7)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (7))], null)], null);
});
mecca.music.mm8 = (function mecca$music$mm8(time,pitch){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function mecca$music$mm8_$_iter__42241(s__42242){
return (new cljs.core.LazySeq(null,(function (){
var s__42242__$1 = s__42242;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42242__$1);
if(temp__5735__auto__){
var s__42242__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42242__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42242__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42244 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42243 = (0);
while(true){
if((i__42243 < size__4581__auto__)){
var beat = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42243);
cljs.core.chunk_append(b__42244,mecca.music.mmbass_minor_triad((beat + time),pitch));

var G__42372 = (i__42243 + (1));
i__42243 = G__42372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42244),mecca$music$mm8_$_iter__42241(cljs.core.chunk_rest(s__42242__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42244),null);
}
} else {
var beat = cljs.core.first(s__42242__$2);
return cljs.core.cons(mecca.music.mmbass_minor_triad((beat + time),pitch),mecca$music$mm8_$_iter__42241(cljs.core.rest(s__42242__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(8),(2)));
})());
});
mecca.music.mmbass = (function mecca$music$mmbass(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(mecca.music.mmbass_minor_triad((0),(64)),mecca.music.mmbass_major_triad((8),(60)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mecca.music.mmbass_major_triad((16),(62)),mecca.music.mmbass_minor_triad((24),(64))], 0));
});
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = (function (){var G__42246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42246) : re_frame.core.subscribe.call(null,G__42246));
})();
var notes = (function (){var G__42247 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42247) : re_frame.core.subscribe.call(null,G__42247));
})();
var jump = (function (){var G__42248 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42248) : re_frame.core.subscribe.call(null,G__42248));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__42251 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42251) : re_frame.core.subscribe.call(null,G__42251));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42245_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42245_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__42252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42252) : re_frame.core.dispatch.call(null,G__42252));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__42255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42255) : re_frame.core.subscribe.call(null,G__42255));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__42256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42256) : re_frame.core.subscribe.call(null,G__42256));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42253_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42253_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__42258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42258) : re_frame.core.subscribe.call(null,G__42258));
})();
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__42259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42259) : re_frame.core.subscribe.call(null,G__42259));
})()));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__42260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42260) : re_frame.core.subscribe.call(null,G__42260));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__42261_42374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42261_42374) : re_frame.core.dispatch.call(null,G__42261_42374));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__42262_42375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42262_42375) : re_frame.core.dispatch.call(null,G__42262_42375));

var G__42263_42376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42263_42376) : re_frame.core.dispatch.call(null,G__42263_42376));
} else {
}
}
} else {
}

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__42264_42377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42264_42377) : re_frame.core.dispatch.call(null,G__42264_42377));

mecca.music.song_done_QMARK_();

return mecca.music.scheduler();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(150));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var req = (new XMLHttpRequest());
(req.responseType = "arraybuffer");

(req.onload = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.status,(200))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,new cljs.core.Keyword(null,"buffer","buffer",617295198),req.response));

return cljs.core.async.close_BANG_(out);
} else {
return cljs.core.async.close_BANG_(out);
}
}));

req.open("GET",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref(mecca.music.audiocontext).decodeAudioData(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url),(function (decoded_buffer){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700),decoded_buffer));

return cljs.core.async.close_BANG_(out);
}),(function (){
console.error("Error loading file ",cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_url], 0)));

return cljs.core.async.close_BANG_(out);
}));
} else {
cljs.core.async.close_BANG_(out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref(mecca.music.audiocontext).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__35254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_42277){
var state_val_42278 = (state_42277[(1)]);
if((state_val_42278 === (1))){
var inst_42266 = mecca.music.load_sound(named_url);
var state_42277__$1 = state_42277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42277__$1,(2),inst_42266);
} else {
if((state_val_42278 === (2))){
var inst_42268 = (state_42277[(7)]);
var inst_42268__$1 = (state_42277[(2)]);
var state_42277__$1 = (function (){var statearr_42279 = state_42277;
(statearr_42279[(7)] = inst_42268__$1);

return statearr_42279;
})();
if(cljs.core.truth_(inst_42268__$1)){
var statearr_42280_42378 = state_42277__$1;
(statearr_42280_42378[(1)] = (3));

} else {
var statearr_42281_42379 = state_42277__$1;
(statearr_42281_42379[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (3))){
var inst_42268 = (state_42277[(7)]);
var inst_42270 = mecca.music.decode(inst_42268);
var state_42277__$1 = state_42277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42277__$1,(6),inst_42270);
} else {
if((state_val_42278 === (4))){
var state_42277__$1 = state_42277;
var statearr_42282_42380 = state_42277__$1;
(statearr_42282_42380[(2)] = null);

(statearr_42282_42380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (5))){
var inst_42275 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42277__$1,inst_42275);
} else {
if((state_val_42278 === (6))){
var inst_42272 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
var statearr_42283_42381 = state_42277__$1;
(statearr_42283_42381[(2)] = inst_42272);

(statearr_42283_42381[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var mecca$music$get_and_decode_$_state_machine__35185__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__35185__auto____0 = (function (){
var statearr_42284 = [null,null,null,null,null,null,null,null];
(statearr_42284[(0)] = mecca$music$get_and_decode_$_state_machine__35185__auto__);

(statearr_42284[(1)] = (1));

return statearr_42284;
});
var mecca$music$get_and_decode_$_state_machine__35185__auto____1 = (function (state_42277){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_42277);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e42285){if((e42285 instanceof Object)){
var ex__35188__auto__ = e42285;
var statearr_42286_42382 = state_42277;
(statearr_42286_42382[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42383 = state_42277;
state_42277 = G__42383;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__35185__auto__ = function(state_42277){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__35185__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__35185__auto____1.call(this,state_42277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__35185__auto____0;
mecca$music$get_and_decode_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__35185__auto____1;
return mecca$music$get_and_decode_$_state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_42287 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_42287[(6)] = c__35254__auto__);

return statearr_42287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));

return c__35254__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__35254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_42316){
var state_val_42317 = (state_42316[(1)]);
if((state_val_42317 === (1))){
var inst_42288 = cljs.core.PersistentHashMap.EMPTY;
var inst_42289 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(34));
var inst_42290 = inst_42288;
var inst_42291 = inst_42289;
var state_42316__$1 = (function (){var statearr_42318 = state_42316;
(statearr_42318[(7)] = inst_42291);

(statearr_42318[(8)] = inst_42290);

return statearr_42318;
})();
var statearr_42319_42384 = state_42316__$1;
(statearr_42319_42384[(2)] = null);

(statearr_42319_42384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42317 === (2))){
var inst_42291 = (state_42316[(7)]);
var inst_42293 = cljs.core.first(inst_42291);
var inst_42294 = (inst_42293 == null);
var inst_42295 = cljs.core.not(inst_42294);
var state_42316__$1 = state_42316;
if(inst_42295){
var statearr_42320_42385 = state_42316__$1;
(statearr_42320_42385[(1)] = (4));

} else {
var statearr_42321_42386 = state_42316__$1;
(statearr_42321_42386[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42317 === (3))){
var inst_42314 = (state_42316[(2)]);
var state_42316__$1 = state_42316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42316__$1,inst_42314);
} else {
if((state_val_42317 === (4))){
var inst_42297 = (state_42316[(9)]);
var inst_42291 = (state_42316[(7)]);
var inst_42297__$1 = cljs.core.first(inst_42291);
var inst_42298 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_42299 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42297__$1),".mp3"].join('');
var inst_42300 = [inst_42299,inst_42297__$1];
var inst_42301 = cljs.core.PersistentHashMap.fromArrays(inst_42298,inst_42300);
var inst_42302 = mecca.music.get_and_decode(inst_42301);
var state_42316__$1 = (function (){var statearr_42322 = state_42316;
(statearr_42322[(9)] = inst_42297__$1);

return statearr_42322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42316__$1,(7),inst_42302);
} else {
if((state_val_42317 === (5))){
var inst_42290 = (state_42316[(8)]);
var state_42316__$1 = state_42316;
var statearr_42323_42387 = state_42316__$1;
(statearr_42323_42387[(2)] = inst_42290);

(statearr_42323_42387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42317 === (6))){
var inst_42312 = (state_42316[(2)]);
var state_42316__$1 = state_42316;
var statearr_42324_42388 = state_42316__$1;
(statearr_42324_42388[(2)] = inst_42312);

(statearr_42324_42388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42317 === (7))){
var inst_42297 = (state_42316[(9)]);
var inst_42291 = (state_42316[(7)]);
var inst_42290 = (state_42316[(8)]);
var inst_42304 = (state_42316[(2)]);
var inst_42305 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42297], 0));
var inst_42306 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42304], 0));
var inst_42307 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_42290,inst_42297,inst_42304);
var inst_42308 = cljs.core.rest(inst_42291);
var inst_42290__$1 = inst_42307;
var inst_42291__$1 = inst_42308;
var state_42316__$1 = (function (){var statearr_42325 = state_42316;
(statearr_42325[(10)] = inst_42306);

(statearr_42325[(7)] = inst_42291__$1);

(statearr_42325[(11)] = inst_42305);

(statearr_42325[(8)] = inst_42290__$1);

return statearr_42325;
})();
var statearr_42326_42389 = state_42316__$1;
(statearr_42326_42389[(2)] = null);

(statearr_42326_42389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var mecca$music$load_samples_$_state_machine__35185__auto__ = null;
var mecca$music$load_samples_$_state_machine__35185__auto____0 = (function (){
var statearr_42327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42327[(0)] = mecca$music$load_samples_$_state_machine__35185__auto__);

(statearr_42327[(1)] = (1));

return statearr_42327;
});
var mecca$music$load_samples_$_state_machine__35185__auto____1 = (function (state_42316){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_42316);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e42328){if((e42328 instanceof Object)){
var ex__35188__auto__ = e42328;
var statearr_42329_42390 = state_42316;
(statearr_42329_42390[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42391 = state_42316;
state_42316 = G__42391;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__35185__auto__ = function(state_42316){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__35185__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__35185__auto____1.call(this,state_42316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__35185__auto____0;
mecca$music$load_samples_$_state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__35185__auto____1;
return mecca$music$load_samples_$_state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_42330 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_42330[(6)] = c__35254__auto__);

return statearr_42330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));

return c__35254__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__35254__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35255__auto__ = (function (){var switch__35184__auto__ = (function (state_42337){
var state_val_42338 = (state_42337[(1)]);
if((state_val_42338 === (1))){
var inst_42331 = mecca.music.load_samples();
var state_42337__$1 = state_42337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42337__$1,(2),inst_42331);
} else {
if((state_val_42338 === (2))){
var inst_42333 = (state_42337[(2)]);
var inst_42334 = mecca.music.samples = inst_42333;
var inst_42335 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_42337__$1 = (function (){var statearr_42343 = state_42337;
(statearr_42343[(7)] = inst_42334);

return statearr_42343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42337__$1,inst_42335);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__35185__auto__ = null;
var mecca$music$state_machine__35185__auto____0 = (function (){
var statearr_42344 = [null,null,null,null,null,null,null,null];
(statearr_42344[(0)] = mecca$music$state_machine__35185__auto__);

(statearr_42344[(1)] = (1));

return statearr_42344;
});
var mecca$music$state_machine__35185__auto____1 = (function (state_42337){
while(true){
var ret_value__35186__auto__ = (function (){try{while(true){
var result__35187__auto__ = switch__35184__auto__(state_42337);
if(cljs.core.keyword_identical_QMARK_(result__35187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35187__auto__;
}
break;
}
}catch (e42345){if((e42345 instanceof Object)){
var ex__35188__auto__ = e42345;
var statearr_42346_42392 = state_42337;
(statearr_42346_42392[(5)] = ex__35188__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42393 = state_42337;
state_42337 = G__42393;
continue;
} else {
return ret_value__35186__auto__;
}
break;
}
});
mecca$music$state_machine__35185__auto__ = function(state_42337){
switch(arguments.length){
case 0:
return mecca$music$state_machine__35185__auto____0.call(this);
case 1:
return mecca$music$state_machine__35185__auto____1.call(this,state_42337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__35185__auto____0;
mecca$music$state_machine__35185__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__35185__auto____1;
return mecca$music$state_machine__35185__auto__;
})()
})();
var state__35256__auto__ = (function (){var statearr_42347 = (f__35255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35255__auto__.cljs$core$IFn$_invoke$arity$0() : f__35255__auto__.call(null));
(statearr_42347[(6)] = c__35254__auto__);

return statearr_42347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35256__auto__);
}));

return c__35254__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__42354 = midi_num;
switch (G__42354) {
case (55):
return 0.5;

break;
case (56):
return 0.5297315471796479;

break;
case (57):
return 0.5612310241546867;

break;
case (58):
return 0.5946035575013607;

break;
case (59):
return 0.6299605249474368;

break;
case (60):
return 0.6674199270850174;

break;
case (61):
return 0.7071067811865477;

break;
case (62):
return 0.7491535384383409;

break;
case (63):
return 0.7937005259840998;

break;
case (64):
return 0.8408964152537146;

break;
case (65):
return 0.8908987181403394;

break;
case (66):
return 0.9438743126816935;

break;
case (67):
return (1);

break;
case (68):
return 1.0594630943592953;

break;
case (69):
return 1.122462048309373;

break;
case (70):
return 1.1892071150027212;

break;
case (71):
return 1.2599210498948734;

break;
case (72):
return 1.3348398541700346;

break;
case (73):
return 1.4142135623730954;

break;
case (74):
return 1.498307076876682;

break;
case (75):
return 1.5874010519682;

break;
case (76):
return 1.6817928305074297;

break;
case (77):
return 1.7817974362806792;

break;
case (78):
return 1.8877486253633877;

break;
case (79):
return (2);

break;
case (80):
return 2.1189261887185906;

break;
case (81):
return 2.244924096618746;

break;
case (82):
return 2.3784142300054425;

break;
case (83):
return 2.519842099789747;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42354)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var now = cljs.core.deref(context).currentTime;
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
var analyser = cljs.core.deref(context).createAnalyser();
var gain = cljs.core.deref(context).createGain();
var tempo = (function (){var G__42355 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42355) : re_frame.core.subscribe.call(null,G__42355));
})();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),now);

sample_source.connect(gain);

gain.connect(cljs.core.deref(context).destination);

gain.gain.setValueAtTime((0),(((60) / cljs.core.deref(tempo)) + now));

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = mecca.music.audiocontext;
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var tempo = (function (){var G__42357 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42357) : re_frame.core.subscribe.call(null,G__42357));
})();
var gain = cljs.core.deref(context).createGain();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(((((83) < pitch))?(pitch - (24)):pitch)),time);

sample_source.connect(gain);

gain.connect(cljs.core.deref(context).destination);

gain.gain.setValueAtTime(1.0,time);

gain.gain.exponentialRampToValueAtTime(0.01,(((60) / cljs.core.deref(tempo)) + time));

sample_source.start(time);

return sample_source;
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__42358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42358) : re_frame.core.subscribe.call(null,G__42358));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__42359 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42359) : re_frame.core.subscribe.call(null,G__42359));
})();
var G__42360_42395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42360_42395) : re_frame.core.dispatch.call(null,G__42360_42395));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__42361(s__42362){
return (new cljs.core.LazySeq(null,(function (){
var s__42362__$1 = s__42362;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42362__$1);
if(temp__5735__auto__){
var s__42362__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42362__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42362__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42364 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42363 = (0);
while(true){
if((i__42363 < size__4581__auto__)){
var map__42365 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42363);
var map__42365__$1 = (((((!((map__42365 == null))))?(((((map__42365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42365):map__42365);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42365__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42365__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42365__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__42364,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__42396 = (i__42363 + (1));
i__42363 = G__42396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42364),mecca$music$play_song_BANG__$_iter__42361(cljs.core.chunk_rest(s__42362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42364),null);
}
} else {
var map__42368 = cljs.core.first(s__42362__$2);
var map__42368__$1 = (((((!((map__42368 == null))))?(((((map__42368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42368):map__42368);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42368__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42368__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42368__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__42361(cljs.core.rest(s__42362__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});

//# sourceMappingURL=mecca.music.js.map
