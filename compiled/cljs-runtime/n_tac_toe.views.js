goog.provide('n_tac_toe.views');
n_tac_toe.views.home_panel = (function n_tac_toe$views$home_panel(){
var game = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.subs","game","n-tac-toe.subs/game",13200684)], null));
var win_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.subs","win?","n-tac-toe.subs/win?",-428816909)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sans-serif h-100 w-100 pa2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"f1 lh-title"], null),"n-tac-toe"], null),(function (){var temp__5804__auto__ = cljs.core.deref(win_QMARK_);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__38694 = temp__5804__auto__;
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38694,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38694,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["f3 lh-copy ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,"x"))?"green":"red")].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player)," wins!"].join('')], null);
} else {
return null;
}
})(),(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.not(cljs.core.deref(game));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.deref(win_QMARK_);
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","new-game","n-tac-toe.events/new-game",1199756189)], null));
})], null),"New game"], null):null),(cljs.core.truth_(cljs.core.deref(game))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n_tac_toe.components.board.board,cljs.core.deref(game)], null):null)], null);
});
n_tac_toe.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n_tac_toe.views.home_panel], null);
}));
n_tac_toe.views.about_panel = (function n_tac_toe$views$about_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"This is the About Page."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","navigate","n-tac-toe.events/navigate",1822346644),new cljs.core.Keyword(null,"home","home",-74557309)], null));
})], null),"go to Home Page"], null)], null)], null);
});
n_tac_toe.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"about-panel","about-panel",334628515),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n_tac_toe.views.about_panel], null);
}));
n_tac_toe.views.main_panel = (function n_tac_toe$views$main_panel(){
var active_panel = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.subs","active-panel","n-tac-toe.subs/active-panel",934004809)], null));
return n_tac_toe.routes.panels.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(active_panel));
});

//# sourceMappingURL=n_tac_toe.views.js.map
