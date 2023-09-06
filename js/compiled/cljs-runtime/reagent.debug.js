goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__18369__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18370__i = 0, G__18370__a = new Array(arguments.length -  0);
while (G__18370__i < G__18370__a.length) {G__18370__a[G__18370__i] = arguments[G__18370__i + 0]; ++G__18370__i;}
  args = new cljs.core.IndexedSeq(G__18370__a,0,null);
} 
return G__18369__delegate.call(this,args);};
G__18369.cljs$lang$maxFixedArity = 0;
G__18369.cljs$lang$applyTo = (function (arglist__18371){
var args = cljs.core.seq(arglist__18371);
return G__18369__delegate(args);
});
G__18369.cljs$core$IFn$_invoke$arity$variadic = G__18369__delegate;
return G__18369;
})()
);

(o.error = (function() { 
var G__18372__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__18372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18373__i = 0, G__18373__a = new Array(arguments.length -  0);
while (G__18373__i < G__18373__a.length) {G__18373__a[G__18373__i] = arguments[G__18373__i + 0]; ++G__18373__i;}
  args = new cljs.core.IndexedSeq(G__18373__a,0,null);
} 
return G__18372__delegate.call(this,args);};
G__18372.cljs$lang$maxFixedArity = 0;
G__18372.cljs$lang$applyTo = (function (arglist__18374){
var args = cljs.core.seq(arglist__18374);
return G__18372__delegate(args);
});
G__18372.cljs$core$IFn$_invoke$arity$variadic = G__18372__delegate;
return G__18372;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
