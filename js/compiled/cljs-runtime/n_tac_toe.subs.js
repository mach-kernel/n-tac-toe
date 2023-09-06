goog.provide('n_tac_toe.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("n-tac-toe.subs","name","n-tac-toe.subs/name",-758529060),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("n-tac-toe.subs","active-panel","n-tac-toe.subs/active-panel",934004809),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("n-tac-toe.subs","game","n-tac-toe.subs/game",13200684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("n-tac-toe.subs","win?","n-tac-toe.subs/win?",-428816909),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"win?","win?",235817510).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("n-tac-toe.subs","allowed","n-tac-toe.subs/allowed",708467588),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__37403){
var map__37404 = p__37403;
var map__37404__$1 = cljs.core.__destructure_map(map__37404);
var allowed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"allowed","allowed",1436019743));
var game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37404__$1,new cljs.core.Keyword(null,"game","game",-441523833));
var n = cljs.core.count(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(game));
var or__5045__auto__ = allowed;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(n),cljs.core.rand_int(n)], null);
}
})], 0));

//# sourceMappingURL=n_tac_toe.subs.js.map
