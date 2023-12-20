goog.provide('mecca.music');
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
var next_note_time = (function (){var G__26498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26498) : re_frame.core.subscribe.call(null,G__26498));
})();
var current_note = (function (){var G__26499 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26499) : re_frame.core.subscribe.call(null,G__26499));
})();
var tempo = (function (){var G__26500 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26500) : re_frame.core.subscribe.call(null,G__26500));
})();
if((cljs.core.deref(next_note_time) < (mecca.music.scheduleAheadTime + mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext))))){
var G__26503 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),cljs.core.deref(current_note),cljs.core.deref(next_note_time)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26503) : re_frame.core.dispatch.call(null,G__26503));
} else {
var G__26504 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-note","next-note",-239967297)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26504) : re_frame.core.dispatch.call(null,G__26504));
}
});
mecca.music.mmbass_minor_triad = (function mecca$music$mmbass_minor_triad(time,root){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 1.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (2)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (3))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (3)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (7))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 4.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (5)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 5.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (6)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (3))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (7)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (7))], null)], null);
});
mecca.music.mmbass_major_triad = (function mecca$music$mmbass_major_triad(time,root){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 1.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (2)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (4))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (3)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (7))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 4.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (5)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + 5.5),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),root], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (6)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (4))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (7)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),(15),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(root + (7))], null)], null);
});
mecca.music.mm8 = (function mecca$music$mm8(time,pitch){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function mecca$music$mm8_$_iter__26523(s__26524){
return (new cljs.core.LazySeq(null,(function (){
var s__26524__$1 = s__26524;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26524__$1);
if(temp__5804__auto__){
var s__26524__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26524__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__26524__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__26526 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__26525 = (0);
while(true){
if((i__26525 < size__5522__auto__)){
var beat = cljs.core._nth(c__5521__auto__,i__26525);
cljs.core.chunk_append(b__26526,mecca.music.mmbass_minor_triad((beat + time),pitch));

var G__26746 = (i__26525 + (1));
i__26525 = G__26746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26526),mecca$music$mm8_$_iter__26523(cljs.core.chunk_rest(s__26524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26526),null);
}
} else {
var beat = cljs.core.first(s__26524__$2);
return cljs.core.cons(mecca.music.mmbass_minor_triad((beat + time),pitch),mecca$music$mm8_$_iter__26523(cljs.core.rest(s__26524__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(8),(2)));
})());
});
mecca.music.mmbass = (function mecca$music$mmbass(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(mecca.music.mmbass_minor_triad((0),(64)),mecca.music.mmbass_major_triad((8),(60)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mecca.music.mmbass_major_triad((16),(62)),mecca.music.mmbass_minor_triad((24),(64))], 0));
});
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = (function (){var G__26548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26548) : re_frame.core.subscribe.call(null,G__26548));
})();
var notes = (function (){var G__26549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26549) : re_frame.core.subscribe.call(null,G__26549));
})();
var jump = (function (){var G__26551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26551) : re_frame.core.subscribe.call(null,G__26551));
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref((function (){var G__26556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26556) : re_frame.core.subscribe.call(null,G__26556));
})());
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__5043__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26543_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__26543_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__26564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26564) : re_frame.core.dispatch.call(null,G__26564));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__26569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26569) : re_frame.core.subscribe.call(null,G__26569));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__26571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26571) : re_frame.core.subscribe.call(null,G__26571));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26567_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__26567_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__26572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26572) : re_frame.core.subscribe.call(null,G__26572));
})();
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__26573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26573) : re_frame.core.subscribe.call(null,G__26573));
})()));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__26574 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26574) : re_frame.core.subscribe.call(null,G__26574));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__26575_26756 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26575_26756) : re_frame.core.dispatch.call(null,G__26575_26756));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__26576_26757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26576_26757) : re_frame.core.dispatch.call(null,G__26576_26757));

var G__26581_26758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26581_26758) : re_frame.core.dispatch.call(null,G__26581_26758));
} else {
}
}
} else {
}

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__26582_26759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26582_26759) : re_frame.core.dispatch.call(null,G__26582_26759));

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
var c__17409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_26603){
var state_val_26604 = (state_26603[(1)]);
if((state_val_26604 === (1))){
var inst_26591 = mecca.music.load_sound(named_url);
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26603__$1,(2),inst_26591);
} else {
if((state_val_26604 === (2))){
var inst_26593 = (state_26603[(7)]);
var inst_26593__$1 = (state_26603[(2)]);
var state_26603__$1 = (function (){var statearr_26605 = state_26603;
(statearr_26605[(7)] = inst_26593__$1);

return statearr_26605;
})();
if(cljs.core.truth_(inst_26593__$1)){
var statearr_26608_26760 = state_26603__$1;
(statearr_26608_26760[(1)] = (3));

} else {
var statearr_26609_26761 = state_26603__$1;
(statearr_26609_26761[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (3))){
var inst_26593 = (state_26603[(7)]);
var inst_26595 = mecca.music.decode(inst_26593);
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26603__$1,(6),inst_26595);
} else {
if((state_val_26604 === (4))){
var state_26603__$1 = state_26603;
var statearr_26621_26763 = state_26603__$1;
(statearr_26621_26763[(2)] = null);

(statearr_26621_26763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (5))){
var inst_26601 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26603__$1,inst_26601);
} else {
if((state_val_26604 === (6))){
var inst_26597 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
var statearr_26622_26764 = state_26603__$1;
(statearr_26622_26764[(2)] = inst_26597);

(statearr_26622_26764[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__16978__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__16978__auto____0 = (function (){
var statearr_26630 = [null,null,null,null,null,null,null,null];
(statearr_26630[(0)] = mecca$music$get_and_decode_$_state_machine__16978__auto__);

(statearr_26630[(1)] = (1));

return statearr_26630;
});
var mecca$music$get_and_decode_$_state_machine__16978__auto____1 = (function (state_26603){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_26603);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e26631){var ex__16981__auto__ = e26631;
var statearr_26632_26765 = state_26603;
(statearr_26632_26765[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_26603[(4)]))){
var statearr_26633_26766 = state_26603;
(statearr_26633_26766[(1)] = cljs.core.first((state_26603[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26767 = state_26603;
state_26603 = G__26767;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__16978__auto__ = function(state_26603){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__16978__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__16978__auto____1.call(this,state_26603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__16978__auto____0;
mecca$music$get_and_decode_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__16978__auto____1;
return mecca$music$get_and_decode_$_state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_26641 = f__17410__auto__();
(statearr_26641[(6)] = c__17409__auto__);

return statearr_26641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));

return c__17409__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__17409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_26672){
var state_val_26673 = (state_26672[(1)]);
if((state_val_26673 === (1))){
var inst_26642 = cljs.core.PersistentHashMap.EMPTY;
var inst_26643 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(34));
var inst_26644 = inst_26642;
var inst_26645 = inst_26643;
var state_26672__$1 = (function (){var statearr_26674 = state_26672;
(statearr_26674[(7)] = inst_26644);

(statearr_26674[(8)] = inst_26645);

return statearr_26674;
})();
var statearr_26675_26768 = state_26672__$1;
(statearr_26675_26768[(2)] = null);

(statearr_26675_26768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (2))){
var inst_26645 = (state_26672[(8)]);
var inst_26647 = cljs.core.first(inst_26645);
var inst_26648 = (inst_26647 == null);
var inst_26649 = cljs.core.not(inst_26648);
var state_26672__$1 = state_26672;
if(inst_26649){
var statearr_26677_26769 = state_26672__$1;
(statearr_26677_26769[(1)] = (4));

} else {
var statearr_26678_26770 = state_26672__$1;
(statearr_26678_26770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (3))){
var inst_26669 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26672__$1,inst_26669);
} else {
if((state_val_26673 === (4))){
var inst_26651 = (state_26672[(9)]);
var inst_26645 = (state_26672[(8)]);
var inst_26651__$1 = cljs.core.first(inst_26645);
var inst_26652 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_26654 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26651__$1),".mp3"].join('');
var inst_26655 = [inst_26654,inst_26651__$1];
var inst_26656 = cljs.core.PersistentHashMap.fromArrays(inst_26652,inst_26655);
var inst_26657 = mecca.music.get_and_decode(inst_26656);
var state_26672__$1 = (function (){var statearr_26683 = state_26672;
(statearr_26683[(9)] = inst_26651__$1);

return statearr_26683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26672__$1,(7),inst_26657);
} else {
if((state_val_26673 === (5))){
var inst_26644 = (state_26672[(7)]);
var state_26672__$1 = state_26672;
var statearr_26684_26771 = state_26672__$1;
(statearr_26684_26771[(2)] = inst_26644);

(statearr_26684_26771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (6))){
var inst_26667 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26685_26772 = state_26672__$1;
(statearr_26685_26772[(2)] = inst_26667);

(statearr_26685_26772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (7))){
var inst_26644 = (state_26672[(7)]);
var inst_26651 = (state_26672[(9)]);
var inst_26645 = (state_26672[(8)]);
var inst_26659 = (state_26672[(2)]);
var inst_26660 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26651], 0));
var inst_26661 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26659], 0));
var inst_26662 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_26644,inst_26651,inst_26659);
var inst_26663 = cljs.core.rest(inst_26645);
var inst_26644__$1 = inst_26662;
var inst_26645__$1 = inst_26663;
var state_26672__$1 = (function (){var statearr_26686 = state_26672;
(statearr_26686[(7)] = inst_26644__$1);

(statearr_26686[(10)] = inst_26660);

(statearr_26686[(11)] = inst_26661);

(statearr_26686[(8)] = inst_26645__$1);

return statearr_26686;
})();
var statearr_26687_26773 = state_26672__$1;
(statearr_26687_26773[(2)] = null);

(statearr_26687_26773[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__16978__auto__ = null;
var mecca$music$load_samples_$_state_machine__16978__auto____0 = (function (){
var statearr_26694 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26694[(0)] = mecca$music$load_samples_$_state_machine__16978__auto__);

(statearr_26694[(1)] = (1));

return statearr_26694;
});
var mecca$music$load_samples_$_state_machine__16978__auto____1 = (function (state_26672){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_26672);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e26696){var ex__16981__auto__ = e26696;
var statearr_26697_26774 = state_26672;
(statearr_26697_26774[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_26672[(4)]))){
var statearr_26699_26775 = state_26672;
(statearr_26699_26775[(1)] = cljs.core.first((state_26672[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26776 = state_26672;
state_26672 = G__26776;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__16978__auto__ = function(state_26672){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__16978__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__16978__auto____1.call(this,state_26672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__16978__auto____0;
mecca$music$load_samples_$_state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__16978__auto____1;
return mecca$music$load_samples_$_state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_26700 = f__17410__auto__();
(statearr_26700[(6)] = c__17409__auto__);

return statearr_26700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));

return c__17409__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__17409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17410__auto__ = (function (){var switch__16977__auto__ = (function (state_26707){
var state_val_26708 = (state_26707[(1)]);
if((state_val_26708 === (1))){
var inst_26701 = mecca.music.load_samples();
var state_26707__$1 = state_26707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26707__$1,(2),inst_26701);
} else {
if((state_val_26708 === (2))){
var inst_26703 = (state_26707[(2)]);
var inst_26704 = mecca.music.samples = inst_26703;
var inst_26705 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_26707__$1 = (function (){var statearr_26709 = state_26707;
(statearr_26709[(7)] = inst_26704);

return statearr_26709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26707__$1,inst_26705);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__16978__auto__ = null;
var mecca$music$state_machine__16978__auto____0 = (function (){
var statearr_26710 = [null,null,null,null,null,null,null,null];
(statearr_26710[(0)] = mecca$music$state_machine__16978__auto__);

(statearr_26710[(1)] = (1));

return statearr_26710;
});
var mecca$music$state_machine__16978__auto____1 = (function (state_26707){
while(true){
var ret_value__16979__auto__ = (function (){try{while(true){
var result__16980__auto__ = switch__16977__auto__(state_26707);
if(cljs.core.keyword_identical_QMARK_(result__16980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16980__auto__;
}
break;
}
}catch (e26711){var ex__16981__auto__ = e26711;
var statearr_26712_26777 = state_26707;
(statearr_26712_26777[(2)] = ex__16981__auto__);


if(cljs.core.seq((state_26707[(4)]))){
var statearr_26713_26778 = state_26707;
(statearr_26713_26778[(1)] = cljs.core.first((state_26707[(4)])));

} else {
throw ex__16981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26779 = state_26707;
state_26707 = G__26779;
continue;
} else {
return ret_value__16979__auto__;
}
break;
}
});
mecca$music$state_machine__16978__auto__ = function(state_26707){
switch(arguments.length){
case 0:
return mecca$music$state_machine__16978__auto____0.call(this);
case 1:
return mecca$music$state_machine__16978__auto____1.call(this,state_26707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__16978__auto____0;
mecca$music$state_machine__16978__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__16978__auto____1;
return mecca$music$state_machine__16978__auto__;
})()
})();
var state__17411__auto__ = (function (){var statearr_26714 = f__17410__auto__();
(statearr_26714[(6)] = c__17409__auto__);

return statearr_26714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17411__auto__);
}));

return c__17409__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__26715 = midi_num;
switch (G__26715) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26715)].join('')));

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
var tempo = (function (){var G__26717 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26717) : re_frame.core.subscribe.call(null,G__26717));
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
var tempo = (function (){var G__26718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26718) : re_frame.core.subscribe.call(null,G__26718));
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
var notes = (function (){var G__26719 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26719) : re_frame.core.subscribe.call(null,G__26719));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__26720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26720) : re_frame.core.subscribe.call(null,G__26720));
})();
var G__26721_26781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26721_26781) : re_frame.core.dispatch.call(null,G__26721_26781));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function mecca$music$play_song_BANG__$_iter__26722(s__26723){
return (new cljs.core.LazySeq(null,(function (){
var s__26723__$1 = s__26723;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26723__$1);
if(temp__5804__auto__){
var s__26723__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26723__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__26723__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__26725 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__26724 = (0);
while(true){
if((i__26724 < size__5522__auto__)){
var map__26726 = cljs.core._nth(c__5521__auto__,i__26724);
var map__26726__$1 = cljs.core.__destructure_map(map__26726);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26726__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26726__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26726__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__26725,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__26782 = (i__26724 + (1));
i__26724 = G__26782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26725),mecca$music$play_song_BANG__$_iter__26722(cljs.core.chunk_rest(s__26723__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26725),null);
}
} else {
var map__26727 = cljs.core.first(s__26723__$2);
var map__26727__$1 = cljs.core.__destructure_map(map__26727);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26727__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26727__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26727__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__26722(cljs.core.rest(s__26723__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});

//# sourceMappingURL=mecca.music.js.map
