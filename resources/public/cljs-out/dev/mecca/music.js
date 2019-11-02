// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var next_note_time = (function (){var G__18547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18547) : re_frame.core.subscribe.call(null,G__18547));
})();
var current_note = (function (){var G__18548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18548) : re_frame.core.subscribe.call(null,G__18548));
})();
var tempo = (function (){var G__18549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18549) : re_frame.core.subscribe.call(null,G__18549));
})();
if((cljs.core.deref(next_note_time) < (mecca.music.scheduleAheadTime + mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext))))){
var G__18550 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schedule_DASH_note,cljs.core.deref(current_note),cljs.core.deref(next_note_time)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18550) : re_frame.core.dispatch.call(null,G__18550));
} else {
var G__18551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18551) : re_frame.core.dispatch.call(null,G__18551));
}
});
mecca.music.mmbass_minor_triad = (function mecca$music$mmbass_minor_triad(time,root){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 1.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (2)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (3))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (3)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (7))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 4.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (5)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 5.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (6)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (3))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (7)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (7))], null)], null);
});
mecca.music.mmbass_major_triad = (function mecca$music$mmbass_major_triad(time,root){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 1.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (2)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (4))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (3)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (7))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 4.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (5)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 5.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (6)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (4))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (7)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (7))], null)], null);
});
mecca.music.mm8 = (function mecca$music$mm8(time,pitch){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4324__auto__ = (function mecca$music$mm8_$_iter__18552(s__18553){
return (new cljs.core.LazySeq(null,(function (){
var s__18553__$1 = s__18553;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18553__$1);
if(temp__5457__auto__){
var s__18553__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18553__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18553__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18555 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18554 = (0);
while(true){
if((i__18554 < size__4323__auto__)){
var beat = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18554);
cljs.core.chunk_append(b__18555,mecca.music.mmbass_minor_triad((beat + time),pitch));

var G__18556 = (i__18554 + (1));
i__18554 = G__18556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18555),mecca$music$mm8_$_iter__18552(cljs.core.chunk_rest(s__18553__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18555),null);
}
} else {
var beat = cljs.core.first(s__18553__$2);
return cljs.core.cons(mecca.music.mmbass_minor_triad((beat + time),pitch),mecca$music$mm8_$_iter__18552(cljs.core.rest(s__18553__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(8),(2)));
})());
});
mecca.music.mmbass = (function mecca$music$mmbass(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(mecca.music.mmbass_minor_triad((0),(64)),mecca.music.mmbass_major_triad((8),(60)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mecca.music.mmbass_major_triad((16),(62)),mecca.music.mmbass_minor_triad((24),(64))], 0));
});
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = (function (){var G__18558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18558) : re_frame.core.subscribe.call(null,G__18558));
})();
var notes = (function (){var G__18559 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18559) : re_frame.core.subscribe.call(null,G__18559));
})();
var jump = (function (){var G__18560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18560) : re_frame.core.subscribe.call(null,G__18560));
})();
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref((function (){var G__18562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18562) : re_frame.core.subscribe.call(null,G__18562));
})());
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__3938__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes,jump){
return (function (p1__18557_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18557_SHARP_),(cljs.core.deref(beat) + (1)));
});})(beat,notes,jump))
,cljs.core.deref(notes))))){
var G__18563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18563) : re_frame.core.dispatch.call(null,G__18563));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__18565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18565) : re_frame.core.subscribe.call(null,G__18565));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__18566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18566) : re_frame.core.subscribe.call(null,G__18566));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__18564_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__18564_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = (function (){var G__18567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18567) : re_frame.core.subscribe.call(null,G__18567));
})();
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__18568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18568) : re_frame.core.subscribe.call(null,G__18568));
})()));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__18569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18569) : re_frame.core.subscribe.call(null,G__18569));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__18570_18573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18570_18573) : re_frame.core.dispatch.call(null,G__18570_18573));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__18571_18574 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18571_18574) : re_frame.core.dispatch.call(null,G__18571_18574));

var G__18572_18575 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18572_18575) : re_frame.core.dispatch.call(null,G__18572_18575));
} else {
}
}
} else {
}

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__18576_18577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18576_18577) : re_frame.core.dispatch.call(null,G__18576_18577));

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
req.responseType = "arraybuffer";

req.onload = ((function (out,req){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.status,(200))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,cljs.core.cst$kw$buffer,req.response));

return cljs.core.async.close_BANG_(out);
} else {
return cljs.core.async.close_BANG_(out);
}
});})(out,req))
;

req.open("GET",cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref(mecca.music.audiocontext).decodeAudioData(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(named_url),((function (out){
return (function (decoded_buffer){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,cljs.core.cst$kw$decoded_DASH_buffer,decoded_buffer));

return cljs.core.async.close_BANG_(out);
});})(out))
,((function (out){
return (function (){
console.error("Error loading file ",cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_url], 0)));

return cljs.core.async.close_BANG_(out);
});})(out))
);
} else {
cljs.core.async.close_BANG_(out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref(mecca.music.audiocontext).createBufferSource();
source.buffer = buffer;

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_18589){
var state_val_18590 = (state_18589[(1)]);
if((state_val_18590 === (1))){
var inst_18578 = mecca.music.load_sound(named_url);
var state_18589__$1 = state_18589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18589__$1,(2),inst_18578);
} else {
if((state_val_18590 === (2))){
var inst_18580 = (state_18589[(7)]);
var inst_18580__$1 = (state_18589[(2)]);
var state_18589__$1 = (function (){var statearr_18591 = state_18589;
(statearr_18591[(7)] = inst_18580__$1);

return statearr_18591;
})();
if(cljs.core.truth_(inst_18580__$1)){
var statearr_18592_18600 = state_18589__$1;
(statearr_18592_18600[(1)] = (3));

} else {
var statearr_18593_18601 = state_18589__$1;
(statearr_18593_18601[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18590 === (3))){
var inst_18580 = (state_18589[(7)]);
var inst_18582 = mecca.music.decode(inst_18580);
var state_18589__$1 = state_18589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18589__$1,(6),inst_18582);
} else {
if((state_val_18590 === (4))){
var state_18589__$1 = state_18589;
var statearr_18594_18602 = state_18589__$1;
(statearr_18594_18602[(2)] = null);

(statearr_18594_18602[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18590 === (5))){
var inst_18587 = (state_18589[(2)]);
var state_18589__$1 = state_18589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18589__$1,inst_18587);
} else {
if((state_val_18590 === (6))){
var inst_18584 = (state_18589[(2)]);
var state_18589__$1 = state_18589;
var statearr_18595_18603 = state_18589__$1;
(statearr_18595_18603[(2)] = inst_18584);

(statearr_18595_18603[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__14553__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__14553__auto____0 = (function (){
var statearr_18596 = [null,null,null,null,null,null,null,null];
(statearr_18596[(0)] = mecca$music$get_and_decode_$_state_machine__14553__auto__);

(statearr_18596[(1)] = (1));

return statearr_18596;
});
var mecca$music$get_and_decode_$_state_machine__14553__auto____1 = (function (state_18589){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18589);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18597){if((e18597 instanceof Object)){
var ex__14556__auto__ = e18597;
var statearr_18598_18604 = state_18589;
(statearr_18598_18604[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18589);

return cljs.core.cst$kw$recur;
} else {
throw e18597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18605 = state_18589;
state_18589 = G__18605;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__14553__auto__ = function(state_18589){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__14553__auto____1.call(this,state_18589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__14553__auto____0;
mecca$music$get_and_decode_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__14553__auto____1;
return mecca$music$get_and_decode_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18599 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18599[(6)] = c__14735__auto__);

return statearr_18599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_18634){
var state_val_18635 = (state_18634[(1)]);
if((state_val_18635 === (1))){
var inst_18606 = cljs.core.PersistentHashMap.EMPTY;
var inst_18607 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(34));
var inst_18608 = inst_18606;
var inst_18609 = inst_18607;
var state_18634__$1 = (function (){var statearr_18636 = state_18634;
(statearr_18636[(7)] = inst_18608);

(statearr_18636[(8)] = inst_18609);

return statearr_18636;
})();
var statearr_18637_18649 = state_18634__$1;
(statearr_18637_18649[(2)] = null);

(statearr_18637_18649[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18635 === (2))){
var inst_18609 = (state_18634[(8)]);
var inst_18611 = cljs.core.first(inst_18609);
var inst_18612 = (inst_18611 == null);
var inst_18613 = cljs.core.not(inst_18612);
var state_18634__$1 = state_18634;
if(inst_18613){
var statearr_18638_18650 = state_18634__$1;
(statearr_18638_18650[(1)] = (4));

} else {
var statearr_18639_18651 = state_18634__$1;
(statearr_18639_18651[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18635 === (3))){
var inst_18632 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18634__$1,inst_18632);
} else {
if((state_val_18635 === (4))){
var inst_18615 = (state_18634[(9)]);
var inst_18609 = (state_18634[(8)]);
var inst_18615__$1 = cljs.core.first(inst_18609);
var inst_18616 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_18617 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18615__$1),".mp3"].join('');
var inst_18618 = [inst_18617,inst_18615__$1];
var inst_18619 = cljs.core.PersistentHashMap.fromArrays(inst_18616,inst_18618);
var inst_18620 = mecca.music.get_and_decode(inst_18619);
var state_18634__$1 = (function (){var statearr_18640 = state_18634;
(statearr_18640[(9)] = inst_18615__$1);

return statearr_18640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18634__$1,(7),inst_18620);
} else {
if((state_val_18635 === (5))){
var inst_18608 = (state_18634[(7)]);
var state_18634__$1 = state_18634;
var statearr_18641_18652 = state_18634__$1;
(statearr_18641_18652[(2)] = inst_18608);

(statearr_18641_18652[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18635 === (6))){
var inst_18630 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18642_18653 = state_18634__$1;
(statearr_18642_18653[(2)] = inst_18630);

(statearr_18642_18653[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18635 === (7))){
var inst_18608 = (state_18634[(7)]);
var inst_18615 = (state_18634[(9)]);
var inst_18609 = (state_18634[(8)]);
var inst_18622 = (state_18634[(2)]);
var inst_18623 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18615], 0));
var inst_18624 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_18622], 0));
var inst_18625 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_18608,inst_18615,inst_18622);
var inst_18626 = cljs.core.rest(inst_18609);
var inst_18608__$1 = inst_18625;
var inst_18609__$1 = inst_18626;
var state_18634__$1 = (function (){var statearr_18643 = state_18634;
(statearr_18643[(7)] = inst_18608__$1);

(statearr_18643[(10)] = inst_18623);

(statearr_18643[(8)] = inst_18609__$1);

(statearr_18643[(11)] = inst_18624);

return statearr_18643;
})();
var statearr_18644_18654 = state_18634__$1;
(statearr_18644_18654[(2)] = null);

(statearr_18644_18654[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__14553__auto__ = null;
var mecca$music$load_samples_$_state_machine__14553__auto____0 = (function (){
var statearr_18645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18645[(0)] = mecca$music$load_samples_$_state_machine__14553__auto__);

(statearr_18645[(1)] = (1));

return statearr_18645;
});
var mecca$music$load_samples_$_state_machine__14553__auto____1 = (function (state_18634){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18634);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18646){if((e18646 instanceof Object)){
var ex__14556__auto__ = e18646;
var statearr_18647_18655 = state_18634;
(statearr_18647_18655[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18634);

return cljs.core.cst$kw$recur;
} else {
throw e18646;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18656 = state_18634;
state_18634 = G__18656;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__14553__auto__ = function(state_18634){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__14553__auto____1.call(this,state_18634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__14553__auto____0;
mecca$music$load_samples_$_state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__14553__auto____1;
return mecca$music$load_samples_$_state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18648 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18648[(6)] = c__14735__auto__);

return statearr_18648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__14735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto__){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto__){
return (function (state_18663){
var state_val_18664 = (state_18663[(1)]);
if((state_val_18664 === (1))){
var inst_18657 = mecca.music.load_samples();
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18663__$1,(2),inst_18657);
} else {
if((state_val_18664 === (2))){
var inst_18659 = (state_18663[(2)]);
var inst_18660 = mecca.music.samples = inst_18659;
var inst_18661 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_18663__$1 = (function (){var statearr_18665 = state_18663;
(statearr_18665[(7)] = inst_18660);

return statearr_18665;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18663__$1,inst_18661);
} else {
return null;
}
}
});})(c__14735__auto__))
;
return ((function (switch__14552__auto__,c__14735__auto__){
return (function() {
var mecca$music$state_machine__14553__auto__ = null;
var mecca$music$state_machine__14553__auto____0 = (function (){
var statearr_18666 = [null,null,null,null,null,null,null,null];
(statearr_18666[(0)] = mecca$music$state_machine__14553__auto__);

(statearr_18666[(1)] = (1));

return statearr_18666;
});
var mecca$music$state_machine__14553__auto____1 = (function (state_18663){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_18663);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e18667){if((e18667 instanceof Object)){
var ex__14556__auto__ = e18667;
var statearr_18668_18670 = state_18663;
(statearr_18668_18670[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18663);

return cljs.core.cst$kw$recur;
} else {
throw e18667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__18671 = state_18663;
state_18663 = G__18671;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$music$state_machine__14553__auto__ = function(state_18663){
switch(arguments.length){
case 0:
return mecca$music$state_machine__14553__auto____0.call(this);
case 1:
return mecca$music$state_machine__14553__auto____1.call(this,state_18663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__14553__auto____0;
mecca$music$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__14553__auto____1;
return mecca$music$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto__))
})();
var state__14737__auto__ = (function (){var statearr_18669 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_18669[(6)] = c__14735__auto__);

return statearr_18669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto__))
);

return c__14735__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__18672 = midi_num;
switch (G__18672) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18672)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var now = cljs.core.deref(context).currentTime;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
var analyser = cljs.core.deref(context).createAnalyser();
var gain = cljs.core.deref(context).createGain();
var tempo = (function (){var G__18674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18674) : re_frame.core.subscribe.call(null,G__18674));
})();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),now);

sample_source.connect(gain);

gain.connect(cljs.core.deref(context).destination);

gain.gain.setValueAtTime((0),(((60) / cljs.core.deref(tempo)) + now));

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var tempo = (function (){var G__18675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18675) : re_frame.core.subscribe.call(null,G__18675));
})();
var gain = cljs.core.deref(context).createGain();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(((((83) < pitch))?(pitch - (24)):pitch)),time);

sample_source.connect(gain);

gain.connect(cljs.core.deref(context).destination);

gain.gain.setValueAtTime(1.0,time);

gain.gain.exponentialRampToValueAtTime(0.01,(((60) / cljs.core.deref(tempo)) + time));

sample_source.start(time);

return sample_source;
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__18676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18676) : re_frame.core.subscribe.call(null,G__18676));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__18677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18677) : re_frame.core.subscribe.call(null,G__18677));
})();
var G__18678_18687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18678_18687) : re_frame.core.dispatch.call(null,G__18678_18687));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__18679(s__18680){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__18680__$1 = s__18680;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18680__$1);
if(temp__5457__auto__){
var s__18680__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18680__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__18680__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__18682 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__18681 = (0);
while(true){
if((i__18681 < size__4323__auto__)){
var map__18683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__18681);
var map__18683__$1 = ((((!((map__18683 == null)))?(((((map__18683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18683):map__18683);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18683__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18683__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18683__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__18682,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__18688 = (i__18681 + (1));
i__18681 = G__18688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18682),mecca$music$play_song_BANG__$_iter__18679(cljs.core.chunk_rest(s__18680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18682),null);
}
} else {
var map__18685 = cljs.core.first(s__18680__$2);
var map__18685__$1 = ((((!((map__18685 == null)))?(((((map__18685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18685):map__18685);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18685__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__18679(cljs.core.rest(s__18680__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo))
,null,null));
});})(notes,now,tempo))
;
return iter__4324__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});
