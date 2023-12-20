goog.provide('mecca.view');
mecca.view.note_guides = (function mecca$view$note_guides(){
var editor_x = (function (){var G__29702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29702) : re_frame.core.subscribe.call(null,G__29702));
})();
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__5523__auto__ = (function mecca$view$note_guides_$_iter__29703(s__29704){
return (new cljs.core.LazySeq(null,(function (){
var s__29704__$1 = s__29704;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29704__$1);
if(temp__5804__auto__){
var s__29704__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29704__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29704__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29706 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29705 = (0);
while(true){
if((i__29705 < size__5522__auto__)){
var beat = cljs.core._nth(c__5521__auto__,i__29705);
cljs.core.chunk_append(b__29706,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(((cljs.core.deref(editor_x) - (1)) + beat),(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((7) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((7) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(6),new cljs.core.Keyword(null,"y2","y2",-718691301),(31),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((7) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((7) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(6),new cljs.core.Keyword(null,"y2","y2",-718691301),(31),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.075,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)));

var G__29773 = (i__29705 + (1));
i__29705 = G__29773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29706),mecca$view$note_guides_$_iter__29703(cljs.core.chunk_rest(s__29704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29706),null);
}
} else {
var beat = cljs.core.first(s__29704__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(((cljs.core.deref(editor_x) - (1)) + beat),(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((7) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((7) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(6),new cljs.core.Keyword(null,"y2","y2",-718691301),(31),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((7) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((7) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(6),new cljs.core.Keyword(null,"y2","y2",-718691301),(31),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.075,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)),mecca$view$note_guides_$_iter__29703(cljs.core.rest(s__29704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(9),0.5));
})());
});
});
mecca.view.note_targets = (function mecca$view$note_targets(){
var instrument = (function (){var G__29707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29707) : re_frame.core.subscribe.call(null,G__29707));
})();
var focused = (function (){var G__29708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29708) : re_frame.core.subscribe.call(null,G__29708));
})();
var editor_x = (function (){var G__29709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29709) : re_frame.core.subscribe.call(null,G__29709));
})();
var sharp_QMARK_ = (function (){var G__29710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29710) : re_frame.core.subscribe.call(null,G__29710));
})();
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__5523__auto__ = (function mecca$view$note_targets_$_iter__29711(s__29712){
return (new cljs.core.LazySeq(null,(function (){
var s__29712__$1 = s__29712;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29712__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var time = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__29712__$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function mecca$view$note_targets_$_iter__29711_$_iter__29713(s__29714){
return (new cljs.core.LazySeq(null,((function (s__29712__$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function (){
var s__29714__$1 = s__29714;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__29714__$1);
if(temp__5804__auto____$1){
var s__29714__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29714__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29714__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29716 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29715 = (0);
while(true){
if((i__29715 < size__5522__auto__)){
var pitch = cljs.core._nth(c__5521__auto__,i__29715);
cljs.core.chunk_append(b__29716,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(pitch - (1)),"black","translate(7,5)",((function (i__29715,s__29712__$1,pitch,c__5521__auto__,size__5522__auto__,b__29716,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function (){
var G__29717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29717) : re_frame.core.dispatch.call(null,G__29717));
});})(i__29715,s__29712__$1,pitch,c__5521__auto__,size__5522__auto__,b__29716,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))
,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null),cljs.core.deref(focused)))?"magenta":"gray"),(3),(function (){var pitches = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55)], null);
if(cljs.core.truth_(cljs.core.deref((function (){var G__29718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eraser?","eraser?",-561181785)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29718) : re_frame.core.subscribe.call(null,G__29718));
})()))){
return ((function (i__29715,s__29712__$1,pitches,pitch,c__5521__auto__,size__5522__auto__,b__29716,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function (){
mecca.music.play_sample((18),(63));

var G__29719 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29719) : re_frame.core.dispatch.call(null,G__29719));
});
;})(i__29715,s__29712__$1,pitches,pitch,c__5521__auto__,size__5522__auto__,b__29716,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))
} else {
if(cljs.core.truth_(cljs.core.deref((function (){var G__29720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat?","repeat?",1245600428)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29720) : re_frame.core.subscribe.call(null,G__29720));
})()))){
return ((function (i__29715,s__29712__$1,pitches,pitch,c__5521__auto__,size__5522__auto__,b__29716,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function (){
var G__29721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),time], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29721) : re_frame.core.dispatch.call(null,G__29721));
});
;})(i__29715,s__29712__$1,pitches,pitch,c__5521__auto__,size__5522__auto__,b__29716,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))
} else {
return ((function (i__29715,s__29712__$1,pitches,pitch,c__5521__auto__,size__5522__auto__,b__29716,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function (){
var G__29722 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-note","add-note",-926319985),cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29722) : re_frame.core.dispatch.call(null,G__29722));
});
;})(i__29715,s__29712__$1,pitches,pitch,c__5521__auto__,size__5522__auto__,b__29716,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))

}
}
})(),0.2,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null),cljs.core.deref(focused)))?(1):0.2),((function (i__29715,s__29712__$1,pitch,c__5521__auto__,size__5522__auto__,b__29716,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function (){
if(cljs.core.not((function (){var and__5043__auto__ = cljs.core.deref(sharp_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(12))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(15))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(8))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(5))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(0))))))))))));
} else {
return and__5043__auto__;
}
})())){
var G__29723 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29723) : re_frame.core.dispatch.call(null,G__29723));
} else {
return null;
}
});})(i__29715,s__29712__$1,pitch,c__5521__auto__,size__5522__auto__,b__29716,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))
,((6) * time),"all","visible",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__29780 = (i__29715 + (1));
i__29715 = G__29780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29716),mecca$view$note_targets_$_iter__29711_$_iter__29713(cljs.core.chunk_rest(s__29714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29716),null);
}
} else {
var pitch = cljs.core.first(s__29714__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(pitch - (1)),"black","translate(7,5)",((function (s__29712__$1,pitch,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function (){
var G__29724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29724) : re_frame.core.dispatch.call(null,G__29724));
});})(s__29712__$1,pitch,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))
,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null),cljs.core.deref(focused)))?"magenta":"gray"),(3),(function (){var pitches = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55)], null);
if(cljs.core.truth_(cljs.core.deref((function (){var G__29725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eraser?","eraser?",-561181785)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29725) : re_frame.core.subscribe.call(null,G__29725));
})()))){
return ((function (s__29712__$1,pitches,pitch,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function (){
mecca.music.play_sample((18),(63));

var G__29726 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29726) : re_frame.core.dispatch.call(null,G__29726));
});
;})(s__29712__$1,pitches,pitch,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))
} else {
if(cljs.core.truth_(cljs.core.deref((function (){var G__29727 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat?","repeat?",1245600428)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29727) : re_frame.core.subscribe.call(null,G__29727));
})()))){
return ((function (s__29712__$1,pitches,pitch,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function (){
var G__29728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),time], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29728) : re_frame.core.dispatch.call(null,G__29728));
});
;})(s__29712__$1,pitches,pitch,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))
} else {
return ((function (s__29712__$1,pitches,pitch,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function (){
var G__29729 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-note","add-note",-926319985),cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29729) : re_frame.core.dispatch.call(null,G__29729));
});
;})(s__29712__$1,pitches,pitch,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))

}
}
})(),0.2,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null),cljs.core.deref(focused)))?(1):0.2),((function (s__29712__$1,pitch,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_){
return (function (){
if(cljs.core.not((function (){var and__5043__auto__ = cljs.core.deref(sharp_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(12))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(15))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(8))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(5))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(0))))))))))));
} else {
return and__5043__auto__;
}
})())){
var G__29730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29730) : re_frame.core.dispatch.call(null,G__29730));
} else {
return null;
}
});})(s__29712__$1,pitch,s__29714__$2,temp__5804__auto____$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))
,((6) * time),"all","visible",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$note_targets_$_iter__29711_$_iter__29713(cljs.core.rest(s__29714__$2)));
}
} else {
return null;
}
break;
}
});})(s__29712__$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))
,null,null));
});})(s__29712__$1,time,xs__6360__auto__,temp__5804__auto__,instrument,focused,editor_x,sharp_QMARK_))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((36))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,mecca$view$note_targets_$_iter__29711(cljs.core.rest(s__29712__$1)));
} else {
var G__29781 = cljs.core.rest(s__29712__$1);
s__29712__$1 = G__29781;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(9),0.5));
})());
});
});
mecca.view.note_cursor = (function mecca$view$note_cursor(){
var focused = (function (){var G__29731 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29731) : re_frame.core.subscribe.call(null,G__29731));
})();
var instrument = (function (){var G__29732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29732) : re_frame.core.subscribe.call(null,G__29732));
})();
var sharp_QMARK_ = (function (){var G__29733 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29733) : re_frame.core.subscribe.call(null,G__29733));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null))){
return null;
} else {
var x = cljs.core.first(cljs.core.deref(focused));
var y = cljs.core.last(cljs.core.deref(focused));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(cljs.core.truth_(cljs.core.deref(sharp_QMARK_))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * y)),0.07):null),(cljs.core.truth_(cljs.core.deref((function (){var G__29734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eraser?","eraser?",-561181785)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29734) : re_frame.core.subscribe.call(null,G__29734));
})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.eraser_cursor,((36) + ((30) * x)),(((5) * y) + (20)),0.2], null):(cljs.core.truth_(cljs.core.deref((function (){var G__29735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat?","repeat?",1245600428)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29735) : re_frame.core.subscribe.call(null,G__29735));
})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.repeat_sign,((7) + ((6) * x)),(8),0.13], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.triforce,((32) + ((60) * x)),(((10) * y) + (15)),0.2], null)
))], null);
}
});
mecca.view.score_notes = (function mecca$view$score_notes(){
var notes = (function (){var G__29736 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29736) : re_frame.core.subscribe.call(null,G__29736));
})();
var editor_x = (function (){var G__29737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29737) : re_frame.core.subscribe.call(null,G__29737));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__5523__auto__ = (function mecca$view$score_notes_$_iter__29738(s__29739){
return (new cljs.core.LazySeq(null,(function (){
var s__29739__$1 = s__29739;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29739__$1);
if(temp__5804__auto__){
var s__29739__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29739__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29739__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29741 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29740 = (0);
while(true){
if((i__29740 < size__5522__auto__)){
var map__29742 = cljs.core._nth(c__5521__auto__,i__29740);
var map__29742__$1 = cljs.core.__destructure_map(map__29742);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29742__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29742__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29742__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
if(((((cljs.core.deref(editor_x) - (1)) <= time)) && ((time <= ((16) + (cljs.core.deref(editor_x) - (1))))))){
cljs.core.chunk_append(b__29741,(function (){var x = (time - (cljs.core.deref(editor_x) - (1)));
var pitch_map = cljs.core.zipmap(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((18)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch)))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1))))),0.07):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.triforce,((2) + ((30) * x)),(((5) * (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null)], null);
})());

var G__29782 = (i__29740 + (1));
i__29740 = G__29782;
continue;
} else {
var G__29783 = (i__29740 + (1));
i__29740 = G__29783;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29741),mecca$view$score_notes_$_iter__29738(cljs.core.chunk_rest(s__29739__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29741),null);
}
} else {
var map__29743 = cljs.core.first(s__29739__$2);
var map__29743__$1 = cljs.core.__destructure_map(map__29743);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29743__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29743__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29743__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
if(((((cljs.core.deref(editor_x) - (1)) <= time)) && ((time <= ((16) + (cljs.core.deref(editor_x) - (1))))))){
return cljs.core.cons((function (){var x = (time - (cljs.core.deref(editor_x) - (1)));
var pitch_map = cljs.core.zipmap(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((18)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch)))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1))))),0.07):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.triforce,((2) + ((30) * x)),(((5) * (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null)], null);
})(),mecca$view$score_notes_$_iter__29738(cljs.core.rest(s__29739__$2)));
} else {
var G__29784 = cljs.core.rest(s__29739__$2);
s__29739__$1 = G__29784;
continue;
}
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
mecca.view.editor = (function mecca$view$editor(){
var notes = (function (){var G__29744 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29744) : re_frame.core.subscribe.call(null,G__29744));
})();
var focused = (function (){var G__29745 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29745) : re_frame.core.subscribe.call(null,G__29745));
})();
var current_position = (function (){var G__29746 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29746) : re_frame.core.subscribe.call(null,G__29746));
})();
var editor_x = (function (){var G__29747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29747) : re_frame.core.subscribe.call(null,G__29747));
})();
var play_start = (function (){var G__29748 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29748) : re_frame.core.subscribe.call(null,G__29748));
})();
var mario_run = (function (){var G__29749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29749) : re_frame.core.subscribe.call(null,G__29749));
})();
var mario_jump = (function (){var G__29750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29750) : re_frame.core.subscribe.call(null,G__29750));
})();
var instrument = (function (){var G__29751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29751) : re_frame.core.subscribe.call(null,G__29751));
})();
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__29752_29785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump-reset","jump-reset",-1337123824)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29752_29785) : re_frame.core.dispatch.call(null,G__29752_29785));
} else {
}

return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 64 54"], null),mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(mecca.megaman.cloud1,(-64),(0),0.15),mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(mecca.megaman.cloud1,(128),(0),0.15),mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(mecca.megaman.airman,(150),(1),0.2),mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(mecca.megaman.megaman1,(0),(48),0.2),mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(mecca.megaman.roll,(20),(48),0.2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.block,(28),(30)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.triforce,30.47,0.88,0.072], null)], null),mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(mecca.megaman.tile,(-8),(71),0.2),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.staff","g.staff",1070451758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,13.5) scale(1)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"url(/images/hand.png),crosshair"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.staff_lines], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.retract_editor,(2)], null),mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(mecca.editor.piano,(0),(30),"0.12,0.2"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.advance_editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_guides], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.score_notes], null),(cljs.core.truth_(cljs.core.deref((function (){var G__29753 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loop-end","loop-end",-88908047)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29753) : re_frame.core.subscribe.call(null,G__29753));
})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.repeat_sign,((7) + ((6) * cljs.core.deref((function (){var G__29754 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loop-end","loop-end",-88908047)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29754) : re_frame.core.subscribe.call(null,G__29754));
})()))),(8),0.13], null):null)], null)], null);
});
});
mecca.view.debug_info = (function mecca$view$debug_info(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Play start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__29756 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29756) : re_frame.core.subscribe.call(null,G__29756));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Song time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(mecca.music.audiocontext).currentTime - cljs.core.deref((function (){var G__29758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29758) : re_frame.core.subscribe.call(null,G__29758));
})())))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Song data: "], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(function (){var iter__5523__auto__ = (function mecca$view$debug_info_$_iter__29759(s__29760){
return (new cljs.core.LazySeq(null,(function (){
var s__29760__$1 = s__29760;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29760__$1);
if(temp__5804__auto__){
var s__29760__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29760__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29760__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29762 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29761 = (0);
while(true){
if((i__29761 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__29761);
cljs.core.chunk_append(b__29762,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([note], 0)));

var G__29786 = (i__29761 + (1));
i__29761 = G__29786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29762),mecca$view$debug_info_$_iter__29759(cljs.core.chunk_rest(s__29760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29762),null);
}
} else {
var note = cljs.core.first(s__29760__$2);
return cljs.core.cons(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([note], 0)),mecca$view$debug_info_$_iter__29759(cljs.core.rest(s__29760__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref((function (){var G__29763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29763) : re_frame.core.subscribe.call(null,G__29763));
})()));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__29765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29765) : re_frame.core.subscribe.call(null,G__29765));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var mouse_pos = (function (){var G__29766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29766) : re_frame.core.subscribe.call(null,G__29766));
})();
return ["Beat: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(mouse_pos)))," Pitch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.deref(mouse_pos)))].join('');
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__29768 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29768) : re_frame.core.subscribe.call(null,G__29768));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__29770 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29770) : re_frame.core.subscribe.call(null,G__29770));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__29772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29772) : re_frame.core.subscribe.call(null,G__29772));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.transport.transport,(140),(0),0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.toolbar,(71),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});

//# sourceMappingURL=mecca.view.js.map
