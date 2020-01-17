goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_pressed.core');
goog.require('day8.re_frame.undo');
goog.require('mecca.mario');
goog.require('mecca.music');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"play-start","play-start",-898241782),new cljs.core.Keyword(null,"current-note","current-note",-1767945909),new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),new cljs.core.Keyword(null,"jumping?","jumping?",-2092574161),new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"lead","lead",1214038903),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"drums","drums",641393692),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),new cljs.core.Keyword(null,"xml","xml",-1170142052),new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681)],[(1),(28),false,"C",false,(0),(0),(0),(0),(1),false,false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(220),cljs.core.PersistentVector.EMPTY,(54),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__44977){
var vec__44978 = p__44977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44978,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44978,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44978,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),(function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44976_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__44976_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__44976_SHARP_))));
}),note);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-time-signature","set-time-signature",-674659703),(function (db,p__44981){
var vec__44982 = p__44981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44982,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44982,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-notes","set-notes",-1718182261),(function (db,p__44985){
var vec__44986 = p__44985;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44986,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44986,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__44989){
var vec__44990 = p__44989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44990,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44990,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"play-start","play-start",-898241782),cljs.core.deref(mecca.music.audiocontext).currentTime),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-on","sharp-on",-1157509082),(function (db,p__44993){
var vec__44994 = p__44993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44994,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44994,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-toggle","sharp-toggle",1733862740),(function (db,p__44997){
var vec__44998 = p__44997;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44998,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44998,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eraser-toggle","eraser-toggle",360211261),(function (db,p__45001){
var vec__45002 = p__45001;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45002,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45002,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sharp-off","sharp-off",2041506931),(function (db,p__45005){
var vec__45006 = p__45005;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45006,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45006,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,p__45009){
var vec__45010 = p__45009;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45010,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45010,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (db,p__45013){
var vec__45014 = p__45013;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45014,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45014,(1),null);
var G__45017_45117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45017_45117) : re_frame.core.dispatch.call(null,G__45017_45117));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false),new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),(function (db,p__45018){
var vec__45019 = p__45018;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45019,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45019,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-instrument","select-instrument",75005084),(function (db,p__45022){
var vec__45023 = p__45022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45023,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45023,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__45026){
var vec__45027 = p__45026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45027,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45027,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__45032){
var vec__45033 = p__45032;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45033,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45033,(1),null);
var notes = (function (){var G__45036 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45036) : re_frame.core.subscribe.call(null,G__45036));
})();
var beat = (function (){var G__45037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45037) : re_frame.core.subscribe.call(null,G__45037));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45030_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__45030_SHARP_));
}),cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
var G__45038_45118 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45038_45118) : re_frame.core.dispatch.call(null,G__45038_45118));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(function (p1__45031_SHARP_){
return (0.5 + p1__45031_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),(function (db,p__45040){
var vec__45041 = p__45040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45041,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45041,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__45039_SHARP_){
return (0.5 + p1__45039_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-mario","move-mario",-317739908),(function (db,p__45045){
var vec__45046 = p__45045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45046,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45046,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(function (p1__45044_SHARP_){
return ((10) + p1__45044_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585),(function (db,p__45049){
var vec__45050 = p__45049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45050,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45050,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retract-editor","retract-editor",777879449),(function (db,p__45054){
var vec__45055 = p__45054;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45055,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45055,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(function (p1__45053_SHARP_){
return (p1__45053_SHARP_ - 0.5);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__45058){
var vec__45059 = p__45058;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45059,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45059,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__45062){
var vec__45063 = p__45062;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45063,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45063,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-tempo","inc-tempo",-1684511808),(function (db,p__45067){
var vec__45068 = p__45067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45068,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45068,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__45066_SHARP_){
return ((8) + p1__45066_SHARP_);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec-tempo","dec-tempo",375495204),(function (db,p__45072){
var vec__45073 = p__45072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45073,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45073,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(function (p1__45071_SHARP_){
return (p1__45071_SHARP_ - (8));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__45076){
var vec__45077 = p__45076;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45077,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45077,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repeat-toggle","repeat-toggle",-221009908),(function (db,p__45080){
var vec__45081 = p__45080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45081,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45081,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),(function (db,p__45084){
var vec__45085 = p__45084;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45085,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45085,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-note","next-note",-239967297),(function (db,p__45089){
var vec__45090 = p__45089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45090,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45090,(1),null);
var tempo = (function (){var G__45093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45093) : re_frame.core.subscribe.call(null,G__45093));
})();
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-note","current-note",-1767945909),cljs.core.inc),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),(function (p1__45088_SHARP_){
return (p1__45088_SHARP_ + seconds_per_beat);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),(function (db,p__45095){
var vec__45096 = p__45095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45096,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45096,(1),null);
var notes = (function (){var G__45099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45099) : re_frame.core.subscribe.call(null,G__45099));
})();
var beat = (function (){var G__45100 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45100) : re_frame.core.subscribe.call(null,G__45100));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45094_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__45094_SHARP_));
}),cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"add-note","add-note",-926319985),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__45101){
var vec__45102 = p__45101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45102,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45102,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45102,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45102,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref((function (){var G__45105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45105) : re_frame.core.subscribe.call(null,G__45105));
})()))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(cljs.core.truth_(cljs.core.deref((function (){var G__45106 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45106) : re_frame.core.subscribe.call(null,G__45106));
})()))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__45107){
var vec__45108 = p__45107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45108,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45108,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref((function (){var G__45111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45111) : re_frame.core.subscribe.call(null,G__45111));
})()))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(20),(24),(27),(29),(30),(30),(29),(27),(24),(20),(15),(10),(5)], null),cljs.core.deref((function (){var G__45112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45112) : re_frame.core.subscribe.call(null,G__45112));
})()))));
} else {
return null;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"play-note","play-note",76179144),(function (db,p__45113){
var vec__45114 = p__45113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45114,(0),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45114,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch,new cljs.core.Keyword(null,"time","time",1385887882),(0)], null)], null));
}));

//# sourceMappingURL=mecca.events.js.map
