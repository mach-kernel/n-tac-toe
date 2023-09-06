goog.provide('n_tac_toe.routes');
if((typeof n_tac_toe !== 'undefined') && (typeof n_tac_toe.routes !== 'undefined') && (typeof n_tac_toe.routes.panels !== 'undefined')){
} else {
n_tac_toe.routes.panels = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__38013 = cljs.core.get_global_hierarchy;
return (fexpr__38013.cljs$core$IFn$_invoke$arity$0 ? fexpr__38013.cljs$core$IFn$_invoke$arity$0() : fexpr__38013.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("n-tac-toe.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
n_tac_toe.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
n_tac_toe.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, ["",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
n_tac_toe.routes.parse = (function n_tac_toe$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(n_tac_toe.routes.routes),url);
});
n_tac_toe.routes.url_for = (function n_tac_toe$routes$url_for(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38041 = arguments.length;
var i__5770__auto___38042 = (0);
while(true){
if((i__5770__auto___38042 < len__5769__auto___38041)){
args__5775__auto__.push((arguments[i__5770__auto___38042]));

var G__38043 = (i__5770__auto___38042 + (1));
i__5770__auto___38042 = G__38043;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return n_tac_toe.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(n_tac_toe.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(n_tac_toe.routes.routes)], null),args));
}));

(n_tac_toe.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(n_tac_toe.routes.url_for.cljs$lang$applyTo = (function (seq38026){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38026));
}));

n_tac_toe.routes.dispatch = (function n_tac_toe$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","set-active-panel","n-tac-toe.events/set-active-panel",-2000622145),panel], null));
});
if((typeof n_tac_toe !== 'undefined') && (typeof n_tac_toe.routes !== 'undefined') && (typeof n_tac_toe.routes.history !== 'undefined')){
} else {
n_tac_toe.routes.history = pushy.core.pushy(n_tac_toe.routes.dispatch,n_tac_toe.routes.parse);
}
n_tac_toe.routes.navigate_BANG_ = (function n_tac_toe$routes$navigate_BANG_(handler){
return n_tac_toe.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,n_tac_toe.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler], 0)));
});
n_tac_toe.routes.start_BANG_ = (function n_tac_toe$routes$start_BANG_(){
return n_tac_toe.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return n_tac_toe.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=n_tac_toe.routes.js.map
