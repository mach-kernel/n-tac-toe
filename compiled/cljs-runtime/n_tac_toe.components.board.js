goog.provide('n_tac_toe.components.board');
/**
 * Makes buttons to play game, annotates coord metadata
 * to child boards and hiccup fragments
 */
n_tac_toe.components.board.make_buttons_and_coords = (function n_tac_toe$components$board$make_buttons_and_coords(p__38664){
var map__38665 = p__38664;
var map__38665__$1 = cljs.core.__destructure_map(map__38665);
var board = map__38665__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38665__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var n = cljs.core.count(rows);
var coords = (function (){var iter__5523__auto__ = (function n_tac_toe$components$board$make_buttons_and_coords_$_iter__38676(s__38677){
return (new cljs.core.LazySeq(null,(function (){
var s__38677__$1 = s__38677;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38677__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y1 = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__38677__$1,y1,xs__6360__auto__,temp__5804__auto__,n,map__38665,map__38665__$1,board,rows){
return (function n_tac_toe$components$board$make_buttons_and_coords_$_iter__38676_$_iter__38678(s__38679){
return (new cljs.core.LazySeq(null,((function (s__38677__$1,y1,xs__6360__auto__,temp__5804__auto__,n,map__38665,map__38665__$1,board,rows){
return (function (){
var s__38679__$1 = s__38679;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38679__$1);
if(temp__5804__auto____$1){
var s__38679__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38679__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38679__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38681 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38680 = (0);
while(true){
if((i__38680 < size__5522__auto__)){
var x1 = cljs.core._nth(c__5521__auto__,i__38680);
cljs.core.chunk_append(b__38681,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,x1], null));

var G__38692 = (i__38680 + (1));
i__38680 = G__38692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38681),n_tac_toe$components$board$make_buttons_and_coords_$_iter__38676_$_iter__38678(cljs.core.chunk_rest(s__38679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38681),null);
}
} else {
var x1 = cljs.core.first(s__38679__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,x1], null),n_tac_toe$components$board$make_buttons_and_coords_$_iter__38676_$_iter__38678(cljs.core.rest(s__38679__$2)));
}
} else {
return null;
}
break;
}
});})(s__38677__$1,y1,xs__6360__auto__,temp__5804__auto__,n,map__38665,map__38665__$1,board,rows))
,null,null));
});})(s__38677__$1,y1,xs__6360__auto__,temp__5804__auto__,n,map__38665,map__38665__$1,board,rows))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,n_tac_toe$components$board$make_buttons_and_coords_$_iter__38676(cljs.core.rest(s__38677__$1)));
} else {
var G__38693 = cljs.core.rest(s__38677__$1);
s__38677__$1 = G__38693;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})();
var map__38666 = cljs.core.meta(board);
var map__38666__$1 = cljs.core.__destructure_map(map__38666);
var coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38666__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var vec__38667 = coord;
var yb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38667,(0),null);
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38667,(1),null);
var allowed = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.subs","allowed","n-tac-toe.subs/allowed",708467588)], null));
var win_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.subs","win?","n-tac-toe.subs/win?",-428816909)], null));
var vec__38670 = cljs.core.deref(allowed);
var ya = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38670,(0),null);
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38670,(1),null);
var vec__38673 = cljs.core.deref(win_QMARK_);
var won = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38673,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38673,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38663_SHARP_){
var vec__38682 = p1__38663_SHARP_;
var vec__38685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38682,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38685,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38685,(1),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38682,(1),null);
var coord_meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)], null);
var disabled = (function (){var or__5045__auto__ = won;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (((!((cell == null)))) || ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yb,ya)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xa,xb)))))));
}
})();
var cell__$1 = (((((!((cell == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === cell.n_tac_toe$game$TicTacToe$))))?true:(((!cell.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(n_tac_toe.game.TicTacToe,cell):false)):cljs.core.native_satisfies_QMARK_(n_tac_toe.game.TicTacToe,cell)))?(function (){var G__38689 = cljs.core.with_meta(cell,coord_meta);
return (n_tac_toe.components.board.make_buttons_and_coords.cljs$core$IFn$_invoke$arity$1 ? n_tac_toe.components.board.make_buttons_and_coords.cljs$core$IFn$_invoke$arity$1(G__38689) : n_tac_toe.components.board.make_buttons_and_coords.call(null,G__38689));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","play","n-tac-toe.events/play",-1744522707),"x",yb,xb,y,x], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"class","class",-2030961996),["h-100 w-100 ttu ",(cljs.core.truth_(disabled)?null:"grow hover-bg-washed-green "),(cljs.core.truth_(disabled)?"ba b--light-gray ":"ba b--green "),(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_empty(won);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell,won);
} else {
return and__5043__auto__;
}
})())?"bg-washed-green ":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"b ma3 f4 lh-copy"], null),(function (){var or__5045__auto__ = cell;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pa3"], null)], null);
}
})()], null)], null)], null));
return cljs.core.with_meta(cell__$1,coord_meta);
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(coords,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rows], 0)))))));
});
n_tac_toe.components.board.board = (function n_tac_toe$components$board$board(board){
var tableify = (function n_tac_toe$components$board$board_$_tableify(cells){
if(((cljs.core.sequential_QMARK_(cells)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cells,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-100 w-100"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38690_SHARP_){
return cljs.core.cons(new cljs.core.Keyword(null,"tr","tr",-1424774646),p1__38690_SHARP_);
}),cells))], null);
} else {
return cells;
}
});
var delazy = (function n_tac_toe$components$board$board_$_delazy(maybe_seq){
if(cljs.core.sequential_QMARK_(maybe_seq)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,maybe_seq);
} else {
return maybe_seq;
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-100 w-80 center"], null),clojure.walk.prewalk(delazy,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-100 w-100"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38691_SHARP_){
return cljs.core.cons(new cljs.core.Keyword(null,"tr","tr",-1424774646),p1__38691_SHARP_);
}),clojure.walk.prewalk(tableify,n_tac_toe.components.board.make_buttons_and_coords(board)))))], null);
});

//# sourceMappingURL=n_tac_toe.components.board.js.map
