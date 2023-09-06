goog.provide('sci.impl.analyzer');
goog.scope(function(){
  sci.impl.analyzer.goog$module$goog$object = goog.module.get('goog.object');
});
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});



sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
var G__33613 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var G__33614 = expr;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__33613,G__33614) : sci.impl.analyzer.analyze.call(null,G__33613,G__33614));
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
}catch (e33615){var _ = e33615;
return new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858);
}})();
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f)))){
return expr;
} else {
var f__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = sci.impl.vars.var_QMARK_(f);
if(and__5043__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__5043__auto__;
}
})())?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var f__$2 = (((sci.impl.utils.needs_ctx === (function (){var G__33616 = f__$1;
var G__33616__$1 = (((G__33616 == null))?null:cljs.core.meta(G__33616));
if((G__33616__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__33616__$1);
}
})()))?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(expr,analyzed_children){
var G__33619 = cljs.core.count(analyzed_children);
switch (G__33619) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
sci.impl.evaluator.eval(ctx,bindings,arg0);

return sci.impl.evaluator.eval(ctx,bindings,arg1);
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
sci.impl.evaluator.eval(ctx,bindings,arg0);

sci.impl.evaluator.eval(ctx,bindings,arg1);

return sci.impl.evaluator.eval(ctx,bindings,arg2);
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_do(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(expr,analyzed_children){
var G__33623 = cljs.core.count(analyzed_children);
switch (G__33623) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg1);
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg2);
}
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg3);
}
}
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg4);
}
}
}
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg5);
}
}
}
}
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg6);
}
}
}
}
}
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg7);
}
}
}
}
}
}
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg8);
}
}
}
}
}
}
}
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg9);
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg10);
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg11);
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg12);
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg13);
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg14);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg15);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
var or__5045__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5045__auto____$15)){
return or__5045__auto____$15;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg16);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
var or__5045__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5045__auto____$15)){
return or__5045__auto____$15;
} else {
var or__5045__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(or__5045__auto____$16)){
return or__5045__auto____$16;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg17);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__5045__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var or__5045__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__5045__auto____$5)){
return or__5045__auto____$5;
} else {
var or__5045__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__5045__auto____$6)){
return or__5045__auto____$6;
} else {
var or__5045__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__5045__auto____$7)){
return or__5045__auto____$7;
} else {
var or__5045__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__5045__auto____$8)){
return or__5045__auto____$8;
} else {
var or__5045__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__5045__auto____$9)){
return or__5045__auto____$9;
} else {
var or__5045__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__5045__auto____$10)){
return or__5045__auto____$10;
} else {
var or__5045__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__5045__auto____$11)){
return or__5045__auto____$11;
} else {
var or__5045__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__5045__auto____$12)){
return or__5045__auto____$12;
} else {
var or__5045__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__5045__auto____$13)){
return or__5045__auto____$13;
} else {
var or__5045__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__5045__auto____$14)){
return or__5045__auto____$14;
} else {
var or__5045__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__5045__auto____$15)){
return or__5045__auto____$15;
} else {
var or__5045__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(or__5045__auto____$16)){
return or__5045__auto____$16;
} else {
var or__5045__auto____$17 = sci.impl.evaluator.eval(ctx,bindings,arg17);
if(cljs.core.truth_(or__5045__auto____$17)){
return or__5045__auto____$17;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg18);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_or(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(expr,analyzed_children){
var G__33643 = cljs.core.count(analyzed_children);
switch (G__33643) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
return sci.impl.evaluator.eval(ctx,bindings,arg1);
} else {
return and__5043__auto__;
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
return sci.impl.evaluator.eval(ctx,bindings,arg2);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
return sci.impl.evaluator.eval(ctx,bindings,arg3);
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
return sci.impl.evaluator.eval(ctx,bindings,arg4);
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
return sci.impl.evaluator.eval(ctx,bindings,arg5);
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
return sci.impl.evaluator.eval(ctx,bindings,arg6);
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
return sci.impl.evaluator.eval(ctx,bindings,arg7);
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
return sci.impl.evaluator.eval(ctx,bindings,arg8);
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
return sci.impl.evaluator.eval(ctx,bindings,arg9);
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
return sci.impl.evaluator.eval(ctx,bindings,arg10);
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
return sci.impl.evaluator.eval(ctx,bindings,arg11);
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
return sci.impl.evaluator.eval(ctx,bindings,arg12);
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
return sci.impl.evaluator.eval(ctx,bindings,arg13);
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
return sci.impl.evaluator.eval(ctx,bindings,arg14);
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
return sci.impl.evaluator.eval(ctx,bindings,arg15);
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
var and__5043__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5043__auto____$15)){
return sci.impl.evaluator.eval(ctx,bindings,arg16);
} else {
return and__5043__auto____$15;
}
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
var and__5043__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5043__auto____$15)){
var and__5043__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(and__5043__auto____$16)){
return sci.impl.evaluator.eval(ctx,bindings,arg17);
} else {
return and__5043__auto____$16;
}
} else {
return and__5043__auto____$15;
}
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__5043__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__5043__auto____$3)){
var and__5043__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__5043__auto____$4)){
var and__5043__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__5043__auto____$5)){
var and__5043__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__5043__auto____$6)){
var and__5043__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__5043__auto____$7)){
var and__5043__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__5043__auto____$8)){
var and__5043__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__5043__auto____$9)){
var and__5043__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__5043__auto____$10)){
var and__5043__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__5043__auto____$11)){
var and__5043__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__5043__auto____$12)){
var and__5043__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__5043__auto____$13)){
var and__5043__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__5043__auto____$14)){
var and__5043__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__5043__auto____$15)){
var and__5043__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(and__5043__auto____$16)){
var and__5043__auto____$17 = sci.impl.evaluator.eval(ctx,bindings,arg17);
if(cljs.core.truth_(and__5043__auto____$17)){
return sci.impl.evaluator.eval(ctx,bindings,arg18);
} else {
return and__5043__auto____$17;
}
} else {
return and__5043__auto____$16;
}
} else {
return and__5043__auto____$15;
}
} else {
return and__5043__auto____$14;
}
} else {
return and__5043__auto____$13;
}
} else {
return and__5043__auto____$12;
}
} else {
return and__5043__auto____$11;
}
} else {
return and__5043__auto____$10;
}
} else {
return and__5043__auto____$9;
}
} else {
return and__5043__auto____$8;
}
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_and(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.recur_0 = sci.impl.fns.__GT_Recur(cljs.core.PersistentVector.EMPTY);
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(expr,analyzed_children){
var G__33839 = cljs.core.count(analyzed_children);
switch (G__33839) {
case (0):
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_,_bindings){
return sci.impl.analyzer.recur_0;
}),expr);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0)], null));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1)], null));
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2)], null));
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3)], null));
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4)], null));
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5)], null));
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6)], null));
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7)], null));
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8)], null));
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9)], null));
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10)], null));
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11)], null));
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12)], null));
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13)], null));
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14)], null));
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15)], null));
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16)], null));
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16),sci.impl.evaluator.eval(ctx,bindings,arg17)], null));
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16),sci.impl.evaluator.eval(ctx,bindings,arg17),sci.impl.evaluator.eval(ctx,bindings,arg18)], null));
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),analyzed_children);
}),expr);

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33874_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__33874_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__33874_SHARP_));
}),children);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.analyzer.FnBody = (function (params,body,fixed_arity,var_arg_name,bindings_fn,__meta,__extmap,__hash){
this.params = params;
this.body = body;
this.fixed_arity = fixed_arity;
this.var_arg_name = var_arg_name;
this.bindings_fn = bindings_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k33877,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__33891 = k33877;
var G__33891__$1 = (((G__33891 instanceof cljs.core.Keyword))?G__33891.fqn:null);
switch (G__33891__$1) {
case "params":
return self__.params;

break;
case "body":
return self__.body;

break;
case "fixed-arity":
return self__.fixed_arity;

break;
case "var-arg-name":
return self__.var_arg_name;

break;
case "bindings-fn":
return self__.bindings_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33877,else__5346__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__33892){
var vec__33894 = p__33892;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33894,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33894,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),self__.bindings_fn],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33876){
var self__ = this;
var G__33876__$1 = this;
return (new cljs.core.RecordIter((0),G__33876__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33878,other33879){
var self__ = this;
var this33878__$1 = this;
return (((!((other33879 == null)))) && ((((this33878__$1.constructor === other33879.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33878__$1.params,other33879.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33878__$1.body,other33879.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33878__$1.fixed_arity,other33879.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33878__$1.var_arg_name,other33879.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33878__$1.bindings_fn,other33879.bindings_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33878__$1.__extmap,other33879.__extmap)))))))))))))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),null,new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k33877){
var self__ = this;
var this__5350__auto____$1 = this;
var G__33909 = k33877;
var G__33909__$1 = (((G__33909 instanceof cljs.core.Keyword))?G__33909.fqn:null);
switch (G__33909__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "bindings-fn":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33877);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__33876){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__33910 = cljs.core.keyword_identical_QMARK_;
var expr__33911 = k__5352__auto__;
if(cljs.core.truth_((pred__33910.cljs$core$IFn$_invoke$arity$2 ? pred__33910.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__33911) : pred__33910.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__33911)))){
return (new sci.impl.analyzer.FnBody(G__33876,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33910.cljs$core$IFn$_invoke$arity$2 ? pred__33910.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__33911) : pred__33910.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__33911)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__33876,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33910.cljs$core$IFn$_invoke$arity$2 ? pred__33910.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__33911) : pred__33910.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__33911)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__33876,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33910.cljs$core$IFn$_invoke$arity$2 ? pred__33910.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__33911) : pred__33910.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__33911)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__33876,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33910.cljs$core$IFn$_invoke$arity$2 ? pred__33910.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),expr__33911) : pred__33910.call(null,new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),expr__33911)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__33876,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__33876),null));
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951),self__.bindings_fn,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__33876){
var self__ = this;
var this__5342__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,G__33876,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"fixed-arity","fixed-arity",-1067989900,null),new cljs.core.Symbol(null,"var-arg-name","var-arg-name",540506640,null),new cljs.core.Symbol(null,"bindings-fn","bindings-fn",1941331478,null)], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"sci.impl.analyzer/FnBody");
}));

/**
 * Positional factory function for sci.impl.analyzer/FnBody.
 */
sci.impl.analyzer.__GT_FnBody = (function sci$impl$analyzer$__GT_FnBody(params,body,fixed_arity,var_arg_name,bindings_fn){
return (new sci.impl.analyzer.FnBody(params,body,fixed_arity,var_arg_name,bindings_fn,null,null,null));
});

/**
 * Factory function for sci.impl.analyzer/FnBody, taking a map of keywords to field values.
 */
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__33882){
var extmap__5385__auto__ = (function (){var G__33918 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33882,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951)], 0));
if(cljs.core.record_QMARK_(G__33882)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33918);
} else {
return G__33918;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__33882),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__33882),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__33882),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__33882),new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(G__33882),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__33928,p__33929,macro_QMARK_){
var map__33930 = p__33928;
var map__33930__$1 = cljs.core.__destructure_map(map__33930);
var ctx = map__33930__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33930__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__33931 = p__33929;
var seq__33932 = cljs.core.seq(vec__33931);
var first__33933 = cljs.core.first(seq__33932);
var seq__33932__$1 = cljs.core.next(seq__33932);
var binding_vector = first__33933;
var body_exprs = seq__33932__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__33922_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__33922_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__33923_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__33923_SHARP_);
}),binding_vector__$1));
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__5045__auto__ = conds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__33934 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__33934__$1 = cljs.core.__destructure_map(map__33934);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33934__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33934__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var param_bindings = cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var binding_cnt = cljs.core.count(bindings);
var vec__33935 = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5802__auto__)){
var cb = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"param-map","param-map",-514769759),param_bindings),cb], null);
} else {
if(cljs.core.empty_QMARK_(bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,null], null);
} else {
var cb = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037),cb,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"param-map","param-map",-514769759),param_bindings], 0)),cb], null);
}
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33935,(0),null);
var closure_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33935,(1),null);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings,param_bindings], 0)));
var ana_children = sci.impl.analyzer.analyze_children(ctx__$2,body);
var body__$1 = sci.impl.analyzer.return_do(fn_expr,ana_children);
var closure_bindings__$1 = (cljs.core.truth_(closure_bindings)?cljs.core.deref(closure_bindings):null);
var closure_binding_cnt = (cljs.core.truth_(closure_bindings__$1)?cljs.core.count(closure_bindings__$1):null);
var bindings_fn = (cljs.core.truth_(closure_bindings__$1)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding_cnt,closure_binding_cnt))?cljs.core.identity:(function (p1__33926_SHARP_){
return cljs.core.select_keys(p1__33926_SHARP_,closure_bindings__$1);
})):cljs.core.identity);
return sci.impl.analyzer.__GT_FnBody(params,body__$1,fixed_arity,var_arg_name,bindings_fn);
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__33942 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__33943 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__33942,G__33943) : sci.impl.analyzer.analyze.call(null,G__33942,G__33943));
})(),cljs.core.assoc,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)):m);
return m__$1;
});
sci.impl.analyzer.expand_fn_STAR_ = (function sci$impl$analyzer$expand_fn_STAR_(ctx,p__33952,macro_QMARK_){
var vec__33953 = p__33952;
var seq__33954 = cljs.core.seq(vec__33953);
var first__33955 = cljs.core.first(seq__33954);
var seq__33954__$1 = cljs.core.next(seq__33954);
var _fn = first__33955;
var first__33955__$1 = cljs.core.first(seq__33954__$1);
var seq__33954__$2 = cljs.core.next(seq__33954__$1);
var name_QMARK_ = first__33955__$1;
var body = seq__33954__$2;
var fn_expr = vec__33953;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var self_ref = (cljs.core.truth_(fn_name)?cljs.core.volatile_BANG_(null):null);
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"self-ref","self-ref",1760385189),self_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794)):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__33960,body__$2){
var map__33961 = p__33960;
var map__33961__$1 = cljs.core.__destructure_map(map__33961);
var acc = map__33961__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33961__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$2,body__$2,macro_QMARK_);
var var_arg_name = body__$3.var_arg_name;
var fixed_arity = body__$3.fixed_arity;
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__5043__auto__ = var_arg_name;
if(cljs.core.truth_(and__5043__auto__)){
return min_varargs;
} else {
return and__5043__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(var_arg_name);
if(and__5043__auto__){
var and__5043__auto____$1 = min_varargs;
if(cljs.core.truth_(and__5043__auto____$1)){
return (fixed_arity > min_varargs);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__5130__auto__ = fixed_arity;
var y__5131__auto__ = max_fixed;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,body__$3),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var arities = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.meta(fn_expr);
var ana_fn_meta = sci.impl.analyzer.analyzed_fn_meta(ctx__$2,fn_meta);
var fn_meta__$1 = (((fn_meta === ana_fn_meta))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ana_fn_meta,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514)], 0)));
var struct = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),arities,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","self-ref","sci.impl/self-ref",-1645822084),(cljs.core.truth_(self_ref)?cljs.core.deref(self_ref):null),new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true,new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639),fn_meta__$1], null);
return struct;
});
sci.impl.analyzer.fn_ctx_fn = (function sci$impl$analyzer$fn_ctx_fn(_ctx,struct,fn_meta){
var fn_name = new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569).cljs$core$IFn$_invoke$arity$1(struct);
var fn_bodies = new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661).cljs$core$IFn$_invoke$arity$1(struct);
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(struct);
var self_ref = new cljs.core.Keyword("sci.impl","self-ref","sci.impl/self-ref",-1645822084).cljs$core$IFn$_invoke$arity$1(struct);
var single_arity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies)))?cljs.core.first(fn_bodies):null);
if(cljs.core.truth_(fn_meta)){
return (function (ctx,bindings){
var fn_meta__$1 = sci.impl.evaluator.handle_meta(ctx,bindings,fn_meta);
var f = sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$1);
});
} else {
return (function (ctx,bindings){
return sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref);
});
}
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,fn_expr,macro_QMARK_){
var struct = sci.impl.analyzer.expand_fn_STAR_(ctx,fn_expr,macro_QMARK_);
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(struct);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,struct,fn_meta);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(ctxfn,struct,fn_expr,null);
});
sci.impl.analyzer.expand_let_STAR_ = (function sci$impl$analyzer$expand_let_STAR_(ctx,expr,destructured_let_bindings,exprs){
var vec__33975 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__33978,p__33979){
var vec__33980 = p__33978;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33980,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33980,(1),null);
var vec__33983 = p__33979;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33983,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33983,(1),null);
var m = cljs.core.meta(binding_value);
var t = (cljs.core.truth_(m)?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m):null);
var binding_name__$1 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(binding_name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):binding_name);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name__$1,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33975,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33975,(1),null);
var body = sci.impl.analyzer.analyze_children(ctx__$1,exprs);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
return sci.impl.evaluator.eval_let(ctx__$2,bindings,new_let_bindings,body);
}),expr);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__33986){
var vec__33987 = p__33986;
var seq__33988 = cljs.core.seq(vec__33987);
var first__33989 = cljs.core.first(seq__33988);
var seq__33988__$1 = cljs.core.next(seq__33988);
var _let = first__33989;
var first__33989__$1 = cljs.core.first(seq__33988__$1);
var seq__33988__$2 = cljs.core.next(seq__33988__$1);
var let_bindings = first__33989__$1;
var exprs = seq__33988__$2;
var expr = vec__33987;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,expr){
var vec__33992 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33992,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33992,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33992,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33992,(3),null);
var G__33995_35483 = ctx;
var G__33996_35484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__33995_35483,G__33996_35484) : sci.impl.analyzer.expand_declare.call(null,G__33995_35483,G__33996_35484));

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647):(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.analyzer.analyze.call(null,ctx,init)));
var m = cljs.core.meta(var_name);
var m__$1 = (function (){var G__33999 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__34000 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__33999,G__34000) : sci.impl.analyzer.analyze.call(null,G__33999,G__34000));
})();
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,var_name,init__$1,m__$3);
}),expr);
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__34005){
var vec__34008 = p__34005;
var seq__34009 = cljs.core.seq(vec__34008);
var first__34010 = cljs.core.first(seq__34009);
var seq__34009__$1 = cljs.core.next(seq__34009);
var op = first__34010;
var first__34010__$1 = cljs.core.first(seq__34009__$1);
var seq__34009__$2 = cljs.core.next(seq__34009__$1);
var fn_name = first__34010__$1;
var body = seq__34009__$2;
var expr = vec__34008;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var G__34012_35491 = ctx;
var G__34013_35492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__34012_35491,G__34013_35492) : sci.impl.analyzer.expand_declare.call(null,G__34012_35491,G__34013_35492));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__34014 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34014,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34014,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5804__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5804__auto__)){
var ds = temp__5804__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5804__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var vec__34017 = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?(function (){var lb = cljs.core.last(body__$1);
if(cljs.core.map_QMARK_(lb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lb,cljs.core.butlast(body__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null));
var meta_map2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34017,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34017,(1),null);
var meta_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
var meta_map__$2 = (cljs.core.truth_(meta_map2)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_map__$1,meta_map2], 0)):meta_map__$1);
var meta_map__$3 = (function (){var G__34024 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__34025 = meta_map__$2;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__34024,G__34025) : sci.impl.analyzer.analyze.call(null,G__34024,G__34025));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$2),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn_STAR_(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$3,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var meta_map__$5 = (function (){var G__34027 = meta_map__$4;
var G__34027__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34027,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__34027);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34027__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__34027__$1;
}
})();
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","defn","sci.impl/defn",1087257818),true], 0));
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(f__$1);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,f__$1,fn_meta);
var f__$2 = sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$3(ctxfn,f__$1,f__$1);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,fn_name,f__$2,meta_map__$5);
}),expr);
});
sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__34031 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34031,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34031,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.analyze_lazy_seq = (function sci$impl$analyzer$analyze_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
var ana = (function (){var G__34037 = ctx;
var G__34038 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__34037,G__34038) : sci.impl.analyzer.analyze.call(null,G__34037,G__34038));
})();
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return (new cljs.core.LazySeq(null,(function (){
return sci.impl.evaluator.eval(ctx__$1,bindings,ana);
}),null,null));
}),expr);
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var G__34041 = cljs.core.count(children);
switch (G__34041) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
if(cljs.core.not(condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return null;
}
}),null,expr,null);

}
}

break;
case (3):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(2));
if(cljs.core.not(condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,else$);
}
}),null,expr,null);

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.analyze_case = (function sci$impl$analyzer$analyze_case(ctx,expr){
var case_val = (function (){var G__34051 = ctx;
var G__34052 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__34051,G__34052) : sci.impl.analyzer.analyze.call(null,G__34051,G__34052));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__34048 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__34055 = ctx;
var G__34056 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__34055,G__34056) : sci.impl.analyzer.analyze.call(null,G__34055,G__34056));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34048,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34048,(1),null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__34062 = cases__$1;
var seq__34063 = cljs.core.seq(vec__34062);
var first__34064 = cljs.core.first(seq__34063);
var seq__34063__$1 = cljs.core.next(seq__34063);
var k = first__34064;
var first__34064__$1 = cljs.core.first(seq__34063__$1);
var seq__34063__$2 = cljs.core.next(seq__34063__$1);
var v = first__34064__$1;
var cases__$2 = seq__34063__$2;
if(cljs.core.seq_QMARK_(k)){
var G__35510 = cases__$2;
var G__35511 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__34062,seq__34063,first__34064,seq__34063__$1,k,first__34064__$1,seq__34063__$2,v,cases__$2,case_val,clauses,match_clauses,result_clauses,vec__34048,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__34062,seq__34063,first__34064,seq__34063__$1,k,first__34064__$1,seq__34063__$2,v,cases__$2,case_val,clauses,match_clauses,result_clauses,vec__34048,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__35510;
ret_map = G__35511;
continue;
} else {
var G__35516 = cases__$2;
var G__35517 = assoc_new(ret_map,k,v);
cases__$1 = G__35516;
ret_map = G__35517;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var f = (cljs.core.truth_(default_QMARK_)?(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5(ctx__$1,bindings,case_map,case_val,case_default);
}):(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,case_map,case_val);
}));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(f,null,expr,null);
});
sci.impl.analyzer.analyze_try = (function sci$impl$analyzer$analyze_try(ctx,expr){
var body = cljs.core.next(expr);
var vec__34071 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__35525 = exprs__$1;
var G__35526 = body_exprs;
var G__35527 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__35528 = finally_expr;
exprs = G__35525;
body_exprs = G__35526;
catch_exprs = G__35527;
finally_expr = G__35528;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__35530 = exprs__$1;
var G__35531 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__35532 = catch_exprs;
var G__35533 = finally_expr;
exprs = G__35530;
body_exprs = G__35531;
catch_exprs = G__35532;
finally_expr = G__35533;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34071,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34071,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34071,(2),null);
var body__$1 = (function (){var G__34086 = ctx;
var G__34087 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__34086,G__34087) : sci.impl.analyzer.analyze.call(null,G__34086,G__34087));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__34100 = c;
var seq__34101 = cljs.core.seq(vec__34100);
var first__34102 = cljs.core.first(seq__34101);
var seq__34101__$1 = cljs.core.next(seq__34101);
var _ = first__34102;
var first__34102__$1 = cljs.core.first(seq__34101__$1);
var seq__34101__$2 = cljs.core.next(seq__34101__$1);
var ex = first__34102__$1;
var first__34102__$2 = cljs.core.first(seq__34101__$2);
var seq__34101__$3 = cljs.core.next(seq__34101__$2);
var binding = first__34102__$2;
var body__$2 = seq__34101__$3;
var temp__5802__auto__ = (function (){var G__34103 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__34103)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__34103)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__34103)){
return new cljs.core.Keyword(null,"default","default",-1987822328);
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.analyze.call(null,ctx,ex));

}
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__34112 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),null);
var G__34113 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__34112,G__34113) : sci.impl.analyzer.analyze.call(null,G__34112,G__34113));
})()], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__34115 = ctx;
var G__34116 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__34115,G__34116) : sci.impl.analyzer.analyze.call(null,G__34115,G__34116));
})():null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_try(ctx__$1,bindings,body__$1,catches__$1,finally$__$1);
}),expr);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__34119){
var vec__34126 = p__34119;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34126,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34126,(1),null);
var expr = vec__34126;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Too many arguments to throw",expr);
}

var ana = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.analyze.call(null,ctx,ex));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
throw sci.impl.evaluator.eval(ctx__$1,bindings,ana);
}),expr,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0)));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__34130){
var vec__34131 = p__34130;
var seq__34132 = cljs.core.seq(vec__34131);
var first__34133 = cljs.core.first(seq__34132);
var seq__34132__$1 = cljs.core.next(seq__34132);
var _declare = first__34133;
var names = seq__34132__$1;
var expr = vec__34131;
var cnn_35539 = sci.impl.vars.current_ns_name();
var env_35540 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_35541 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_35540),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_35539], null));
var refers_35542 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_35541);
var the_current_ns_35543__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
var temp__5802__auto__ = (function (){var and__5043__auto__ = refers_35542;
if(cljs.core.truth_(and__5043__auto__)){
return refers_35542.get(name);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var x = temp__5802__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_35539)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_35541,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__34135 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_35539),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)),false);
G__34135.sci$impl$vars$IVar$unbind$arity$1(null);

return G__34135;
})());
} else {
return the_current_ns_35541;
}
}
}),the_current_ns_35541,names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_35540,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_35539,the_current_ns_35543__$1);
}));

return null;
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__34139){
var vec__34140 = p__34139;
var seq__34141 = cljs.core.seq(vec__34140);
var first__34142 = cljs.core.first(seq__34141);
var seq__34141__$1 = cljs.core.next(seq__34141);
var _dot = first__34142;
var first__34142__$1 = cljs.core.first(seq__34141__$1);
var seq__34141__$2 = cljs.core.next(seq__34141__$1);
var instance_expr = first__34142__$1;
var first__34142__$2 = cljs.core.first(seq__34141__$2);
var seq__34141__$3 = cljs.core.next(seq__34141__$2);
var method_expr = first__34142__$2;
var args = seq__34141__$3;
var expr = vec__34140;
var vec__34145 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__34146 = cljs.core.seq(vec__34145);
var first__34147 = cljs.core.first(seq__34146);
var seq__34146__$1 = cljs.core.next(seq__34146);
var method_expr__$1 = first__34147;
var args__$1 = seq__34146__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx,instance_expr));
var instance_expr__$2 = sci.impl.utils.vary_meta_STAR_(instance_expr__$1,(function (m){
var temp__5802__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5802__auto__)){
var t = temp__5802__auto__;
var clazz = (function (){var or__5045__auto__ = sci.impl.interop.resolve_class(ctx,t);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = sci.impl.records.resolve_record_class(ctx,t);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),t);
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"tag-class","tag-class",714967874),clazz);
} else {
return m;
}
}));
var method_name = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx,args__$1):null);
var res = (function (){var field_access = clojure.string.starts_with_QMARK_(method_name,"-");
var meth_name = ((field_access)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1)):method_name);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var allowed_QMARK_ = (method_expr__$1 === sci.impl.utils.allowed_append);
return (function (ctx__$1,bindings){
return sci.impl.evaluator.eval_instance_method_invocation(ctx__$1,bindings,instance_expr__$2,meth_name,field_access,args__$2,allowed_QMARK_);
});
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719),instance_expr__$2,new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667),method_name], null),expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
})();
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__34156){
var vec__34157 = p__34156;
var seq__34158 = cljs.core.seq(vec__34157);
var first__34159 = cljs.core.first(seq__34158);
var seq__34158__$1 = cljs.core.next(seq__34158);
var method_name = first__34159;
var first__34159__$1 = cljs.core.first(seq__34158__$1);
var seq__34158__$2 = cljs.core.next(seq__34158__$1);
var obj = first__34159__$1;
var args = seq__34158__$2;
var expr = vec__34157;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__34164){
var vec__34165 = p__34164;
var seq__34166 = cljs.core.seq(vec__34165);
var first__34167 = cljs.core.first(seq__34166);
var seq__34166__$1 = cljs.core.next(seq__34166);
var _new = first__34167;
var first__34167__$1 = cljs.core.first(seq__34166__$1);
var seq__34166__$2 = cljs.core.next(seq__34166__$1);
var class_sym = first__34167__$1;
var args = seq__34166__$2;
var expr = vec__34165;
var temp__5802__auto__ = (function (){var or__5045__auto__ = (function (){var temp__5804__auto__ = (function (){var temp__5804__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5804__auto__)){
var opts = temp__5804__auto__;
var or__5045__auto__ = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var clazz = temp__5804__auto__;
return clazz;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,class_sym) : sci.impl.analyzer.analyze.call(null,ctx,class_sym));
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var class$ = temp__5802__auto__;
var var_QMARK_ = (class$ instanceof sci.impl.types.EvalVar);
var maybe_var = ((var_QMARK_)?sci.impl.types.getVal(class$):null);
var maybe_record = ((var_QMARK_)?cljs.core.deref(maybe_var):(((class$ instanceof cljs.core.Symbol))?class$:null));
var maybe_record_constructor = (cljs.core.truth_(maybe_record)?new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(maybe_record)):null);
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
if(cljs.core.truth_(maybe_record_constructor)){
var G__34169 = ctx;
var G__34170 = expr;
var G__34171 = maybe_record_constructor;
var G__34172 = args__$1;
var G__34173 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__34174 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__34169,G__34170,G__34171,G__34172,G__34173,G__34174) : sci.impl.analyzer.return_call.call(null,G__34169,G__34170,G__34171,G__34172,G__34173,G__34174));
} else {
if(var_QMARK_){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(cljs.core.deref(maybe_var),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34161_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__34161_SHARP_);
}),args__$1));
}),expr);
} else {
if((class$ instanceof sci.impl.types.EvalFn)){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.evaluator.eval(ctx__$1,bindings,class$),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34162_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__34162_SHARP_);
}),args__$1));
}),expr);
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(class$,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34163_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__34163_SHARP_);
}),args__$1));
}),expr);

}
}
}
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_class(ctx,class_sym);
if(cljs.core.truth_(temp__5802__auto____$1)){
var record = temp__5802__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
var G__34177 = ctx;
var G__34178 = expr;
var G__34179 = new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__34180 = args__$1;
var G__34181 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__34182 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__34177,G__34178,G__34179,G__34180,G__34181,G__34182) : sci.impl.analyzer.return_call.call(null,G__34177,G__34178,G__34179,G__34180,G__34181,G__34182));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__34184){
var vec__34185 = p__34184;
var seq__34186 = cljs.core.seq(vec__34185);
var first__34187 = cljs.core.first(seq__34186);
var seq__34186__$1 = cljs.core.next(seq__34186);
var constructor_sym = first__34187;
var args = seq__34186__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}),expr,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)], 0)));
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__34191){
var vec__34192 = p__34191;
var seq__34193 = cljs.core.seq(vec__34192);
var first__34194 = cljs.core.first(seq__34193);
var seq__34193__$1 = cljs.core.next(seq__34193);
var _ns = first__34194;
var first__34194__$1 = cljs.core.first(seq__34193__$1);
var seq__34193__$2 = cljs.core.next(seq__34193__$1);
var ns_name = first__34194__$1;
var exprs = seq__34193__$2;
var expr = vec__34192;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__34197 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34197,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34197,(1),null);
var vec__34200 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34200,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34200,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__34216 = cljs.core.first(exprs__$3);
var seq__34217 = cljs.core.seq(vec__34216);
var first__34218 = cljs.core.first(seq__34217);
var seq__34217__$1 = cljs.core.next(seq__34217);
var k = first__34218;
var args = seq__34217__$1;
var expr__$1 = vec__34216;
var G__34219 = k;
var G__34219__$1 = (((G__34219 instanceof cljs.core.Keyword))?G__34219.fqn:null);
switch (G__34219__$1) {
case "require":
case "use":
case "import":
case "refer-clojure":
var G__35570 = cljs.core.next(exprs__$3);
var G__35571 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__34222 = k;
var G__34222__$1 = (((G__34222 instanceof cljs.core.Keyword))?G__34222.fqn:null);
switch (G__34222__$1) {
case "require":
return sci.impl.load.eval_require;

break;
case "use":
return sci.impl.load.eval_use;

break;
case "import":
return sci.impl.evaluator.eval_import;

break;
case "refer-clojure":
return ((function (exprs__$3,ret,G__34222,G__34222__$1,G__34219,G__34219__$1,vec__34216,seq__34217,first__34218,seq__34217__$1,k,args,expr__$1,vec__34197,docstring,exprs__$1,vec__34200,attr_map,exprs__$2,attr_map__$1,vec__34192,seq__34193,first__34194,seq__34193__$1,_ns,first__34194__$1,seq__34193__$2,ns_name,exprs,expr){
return (function() { 
var G__35573__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__35573 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__35576__i = 0, G__35576__a = new Array(arguments.length -  1);
while (G__35576__i < G__35576__a.length) {G__35576__a[G__35576__i] = arguments[G__35576__i + 1]; ++G__35576__i;}
  args__$1 = new cljs.core.IndexedSeq(G__35576__a,0,null);
} 
return G__35573__delegate.call(this,ctx__$1,args__$1);};
G__35573.cljs$lang$maxFixedArity = 1;
G__35573.cljs$lang$applyTo = (function (arglist__35580){
var ctx__$1 = cljs.core.first(arglist__35580);
var args__$1 = cljs.core.rest(arglist__35580);
return G__35573__delegate(ctx__$1,args__$1);
});
G__35573.cljs$core$IFn$_invoke$arity$variadic = G__35573__delegate;
return G__35573;
})()
;
;})(exprs__$3,ret,G__34222,G__34222__$1,G__34219,G__34219__$1,vec__34216,seq__34217,first__34218,seq__34217__$1,k,args,expr__$1,vec__34197,docstring,exprs__$1,vec__34200,attr_map,exprs__$2,attr_map__$1,vec__34192,seq__34193,first__34194,seq__34193__$1,_ns,first__34194__$1,seq__34193__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34222__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__35570;
ret = G__35571;
continue;

break;
case "gen-class":
var G__35581 = cljs.core.next(exprs__$3);
var G__35582 = ret;
exprs__$3 = G__35581;
ret = G__35582;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34219__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2(((function (exprs__$3,ret,vec__34197,docstring,exprs__$1,vec__34200,attr_map,exprs__$2,attr_map__$1,vec__34192,seq__34193,first__34194,seq__34193__$1,_ns,first__34194__$1,seq__34193__$2,ns_name,exprs,expr){
return (function (ctx__$1,_bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__34197,docstring,exprs__$1,vec__34200,attr_map,exprs__$2,attr_map__$1,vec__34192,seq__34193,first__34194,seq__34193__$1,_ns,first__34194__$1,seq__34193__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__34227){
var vec__34228 = p__34227;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34228,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34228,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__34236){
var vec__34237 = p__34236;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34237,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34237,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34237,(2),null);
var expr = vec__34237;
if((obj instanceof cljs.core.Symbol)){
var obj__$1 = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,obj);
var ___$1 = ((sci.impl.vars.var_QMARK_(obj__$1))?null:sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return sci.impl.types.setVal(obj__$1,v__$2);
}),expr);
} else {
if(cljs.core.seq_QMARK_(obj)){
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var obj__$2 = sci.impl.types.info(obj__$1);
var k = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667).cljs$core$IFn$_invoke$arity$1(obj__$2),(1));
var obj__$3 = new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719).cljs$core$IFn$_invoke$arity$1(obj__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var obj__$4 = sci.impl.evaluator.eval(ctx__$1,bindings,obj__$3);
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return sci.impl.analyzer.goog$module$goog$object.set(obj__$4,k,v__$2);
}),expr);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,f,analyzed_children,stack){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__34245 = cljs.core.count(analyzed_children);
switch (G__34245) {
case (0):
return (function (ctx,bindings){
var fexpr__34246 = bindings.get(f);
return (fexpr__34246.cljs$core$IFn$_invoke$arity$0 ? fexpr__34246.cljs$core$IFn$_invoke$arity$0() : fexpr__34246.call(null));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__34248 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var fexpr__34247 = bindings.get(f);
return (fexpr__34247.cljs$core$IFn$_invoke$arity$1 ? fexpr__34247.cljs$core$IFn$_invoke$arity$1(G__34248) : fexpr__34247.call(null,G__34248));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__34250 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34251 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var fexpr__34249 = bindings.get(f);
return (fexpr__34249.cljs$core$IFn$_invoke$arity$2 ? fexpr__34249.cljs$core$IFn$_invoke$arity$2(G__34250,G__34251) : fexpr__34249.call(null,G__34250,G__34251));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__34255 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34256 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34257 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var fexpr__34254 = bindings.get(f);
return (fexpr__34254.cljs$core$IFn$_invoke$arity$3 ? fexpr__34254.cljs$core$IFn$_invoke$arity$3(G__34255,G__34256,G__34257) : fexpr__34254.call(null,G__34255,G__34256,G__34257));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__34260 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34261 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34262 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34263 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var fexpr__34259 = bindings.get(f);
return (fexpr__34259.cljs$core$IFn$_invoke$arity$4 ? fexpr__34259.cljs$core$IFn$_invoke$arity$4(G__34260,G__34261,G__34262,G__34263) : fexpr__34259.call(null,G__34260,G__34261,G__34262,G__34263));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__34268 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34269 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34270 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34271 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34272 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var fexpr__34267 = bindings.get(f);
return (fexpr__34267.cljs$core$IFn$_invoke$arity$5 ? fexpr__34267.cljs$core$IFn$_invoke$arity$5(G__34268,G__34269,G__34270,G__34271,G__34272) : fexpr__34267.call(null,G__34268,G__34269,G__34270,G__34271,G__34272));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__34276 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34277 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34278 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34279 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34280 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34281 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var fexpr__34275 = bindings.get(f);
return (fexpr__34275.cljs$core$IFn$_invoke$arity$6 ? fexpr__34275.cljs$core$IFn$_invoke$arity$6(G__34276,G__34277,G__34278,G__34279,G__34280,G__34281) : fexpr__34275.call(null,G__34276,G__34277,G__34278,G__34279,G__34280,G__34281));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__34283 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34284 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34285 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34286 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34287 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34288 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34289 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var fexpr__34282 = bindings.get(f);
return (fexpr__34282.cljs$core$IFn$_invoke$arity$7 ? fexpr__34282.cljs$core$IFn$_invoke$arity$7(G__34283,G__34284,G__34285,G__34286,G__34287,G__34288,G__34289) : fexpr__34282.call(null,G__34283,G__34284,G__34285,G__34286,G__34287,G__34288,G__34289));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__34291 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34292 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34293 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34294 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34295 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34296 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34297 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34298 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var fexpr__34290 = bindings.get(f);
return (fexpr__34290.cljs$core$IFn$_invoke$arity$8 ? fexpr__34290.cljs$core$IFn$_invoke$arity$8(G__34291,G__34292,G__34293,G__34294,G__34295,G__34296,G__34297,G__34298) : fexpr__34290.call(null,G__34291,G__34292,G__34293,G__34294,G__34295,G__34296,G__34297,G__34298));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__34304 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34305 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34306 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34307 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34308 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34309 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34310 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34311 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34312 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var fexpr__34303 = bindings.get(f);
return (fexpr__34303.cljs$core$IFn$_invoke$arity$9 ? fexpr__34303.cljs$core$IFn$_invoke$arity$9(G__34304,G__34305,G__34306,G__34307,G__34308,G__34309,G__34310,G__34311,G__34312) : fexpr__34303.call(null,G__34304,G__34305,G__34306,G__34307,G__34308,G__34309,G__34310,G__34311,G__34312));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__34316 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34317 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34318 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34319 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34320 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34321 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34322 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34323 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34324 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34325 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var fexpr__34315 = bindings.get(f);
return (fexpr__34315.cljs$core$IFn$_invoke$arity$10 ? fexpr__34315.cljs$core$IFn$_invoke$arity$10(G__34316,G__34317,G__34318,G__34319,G__34320,G__34321,G__34322,G__34323,G__34324,G__34325) : fexpr__34315.call(null,G__34316,G__34317,G__34318,G__34319,G__34320,G__34321,G__34322,G__34323,G__34324,G__34325));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__34327 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34328 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34329 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34330 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34331 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34332 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34333 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34334 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34335 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34336 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34337 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var fexpr__34326 = bindings.get(f);
return (fexpr__34326.cljs$core$IFn$_invoke$arity$11 ? fexpr__34326.cljs$core$IFn$_invoke$arity$11(G__34327,G__34328,G__34329,G__34330,G__34331,G__34332,G__34333,G__34334,G__34335,G__34336,G__34337) : fexpr__34326.call(null,G__34327,G__34328,G__34329,G__34330,G__34331,G__34332,G__34333,G__34334,G__34335,G__34336,G__34337));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__34340 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34341 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34342 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34343 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34344 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34345 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34346 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34347 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34348 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34349 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34350 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34351 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var fexpr__34338 = bindings.get(f);
return (fexpr__34338.cljs$core$IFn$_invoke$arity$12 ? fexpr__34338.cljs$core$IFn$_invoke$arity$12(G__34340,G__34341,G__34342,G__34343,G__34344,G__34345,G__34346,G__34347,G__34348,G__34349,G__34350,G__34351) : fexpr__34338.call(null,G__34340,G__34341,G__34342,G__34343,G__34344,G__34345,G__34346,G__34347,G__34348,G__34349,G__34350,G__34351));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__34360 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34361 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34362 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34363 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34364 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34365 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34366 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34367 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34368 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34369 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34370 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34371 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34372 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var fexpr__34359 = bindings.get(f);
return (fexpr__34359.cljs$core$IFn$_invoke$arity$13 ? fexpr__34359.cljs$core$IFn$_invoke$arity$13(G__34360,G__34361,G__34362,G__34363,G__34364,G__34365,G__34366,G__34367,G__34368,G__34369,G__34370,G__34371,G__34372) : fexpr__34359.call(null,G__34360,G__34361,G__34362,G__34363,G__34364,G__34365,G__34366,G__34367,G__34368,G__34369,G__34370,G__34371,G__34372));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__34374 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34375 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34376 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34377 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34378 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34379 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34380 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34381 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34382 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34383 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34384 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34385 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34386 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34387 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var fexpr__34373 = bindings.get(f);
return (fexpr__34373.cljs$core$IFn$_invoke$arity$14 ? fexpr__34373.cljs$core$IFn$_invoke$arity$14(G__34374,G__34375,G__34376,G__34377,G__34378,G__34379,G__34380,G__34381,G__34382,G__34383,G__34384,G__34385,G__34386,G__34387) : fexpr__34373.call(null,G__34374,G__34375,G__34376,G__34377,G__34378,G__34379,G__34380,G__34381,G__34382,G__34383,G__34384,G__34385,G__34386,G__34387));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__34395 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34396 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34397 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34398 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34399 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34400 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34401 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34402 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34403 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34404 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34405 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34406 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34407 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34408 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__34409 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var fexpr__34394 = bindings.get(f);
return (fexpr__34394.cljs$core$IFn$_invoke$arity$15 ? fexpr__34394.cljs$core$IFn$_invoke$arity$15(G__34395,G__34396,G__34397,G__34398,G__34399,G__34400,G__34401,G__34402,G__34403,G__34404,G__34405,G__34406,G__34407,G__34408,G__34409) : fexpr__34394.call(null,G__34395,G__34396,G__34397,G__34398,G__34399,G__34400,G__34401,G__34402,G__34403,G__34404,G__34405,G__34406,G__34407,G__34408,G__34409));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__34416 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34417 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34418 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34419 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34420 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34421 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34422 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34423 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34424 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34425 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34426 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34427 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34428 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34429 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__34430 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__34431 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var fexpr__34415 = bindings.get(f);
return (fexpr__34415.cljs$core$IFn$_invoke$arity$16 ? fexpr__34415.cljs$core$IFn$_invoke$arity$16(G__34416,G__34417,G__34418,G__34419,G__34420,G__34421,G__34422,G__34423,G__34424,G__34425,G__34426,G__34427,G__34428,G__34429,G__34430,G__34431) : fexpr__34415.call(null,G__34416,G__34417,G__34418,G__34419,G__34420,G__34421,G__34422,G__34423,G__34424,G__34425,G__34426,G__34427,G__34428,G__34429,G__34430,G__34431));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__34434 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34435 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34436 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34437 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34438 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34439 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34440 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34441 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34442 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34443 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34444 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34445 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34446 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34447 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__34448 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__34449 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__34450 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var fexpr__34433 = bindings.get(f);
return (fexpr__34433.cljs$core$IFn$_invoke$arity$17 ? fexpr__34433.cljs$core$IFn$_invoke$arity$17(G__34434,G__34435,G__34436,G__34437,G__34438,G__34439,G__34440,G__34441,G__34442,G__34443,G__34444,G__34445,G__34446,G__34447,G__34448,G__34449,G__34450) : fexpr__34433.call(null,G__34434,G__34435,G__34436,G__34437,G__34438,G__34439,G__34440,G__34441,G__34442,G__34443,G__34444,G__34445,G__34446,G__34447,G__34448,G__34449,G__34450));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__34456 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34457 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34458 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34459 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34460 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34461 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34462 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34463 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34464 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34465 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34466 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34467 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34468 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34469 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__34470 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__34471 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__34473 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__34474 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var fexpr__34455 = bindings.get(f);
return (fexpr__34455.cljs$core$IFn$_invoke$arity$18 ? fexpr__34455.cljs$core$IFn$_invoke$arity$18(G__34456,G__34457,G__34458,G__34459,G__34460,G__34461,G__34462,G__34463,G__34464,G__34465,G__34466,G__34467,G__34468,G__34469,G__34470,G__34471,G__34473,G__34474) : fexpr__34455.call(null,G__34456,G__34457,G__34458,G__34459,G__34460,G__34461,G__34462,G__34463,G__34464,G__34465,G__34466,G__34467,G__34468,G__34469,G__34470,G__34471,G__34473,G__34474));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__34483 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34484 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34485 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34486 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34487 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34488 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34489 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34490 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34491 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34492 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34493 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34494 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34495 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34496 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__34497 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__34498 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__34499 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__34500 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__34501 = sci.impl.evaluator.eval(ctx,bindings,arg18);
var fexpr__34482 = bindings.get(f);
return (fexpr__34482.cljs$core$IFn$_invoke$arity$19 ? fexpr__34482.cljs$core$IFn$_invoke$arity$19(G__34483,G__34484,G__34485,G__34486,G__34487,G__34488,G__34489,G__34490,G__34491,G__34492,G__34493,G__34494,G__34495,G__34496,G__34497,G__34498,G__34499,G__34500,G__34501) : fexpr__34482.call(null,G__34483,G__34484,G__34485,G__34486,G__34487,G__34488,G__34489,G__34490,G__34491,G__34492,G__34493,G__34494,G__34495,G__34496,G__34497,G__34498,G__34499,G__34500,G__34501));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,bindings.get(f),analyzed_children);
});

}
})(),null,expr,stack);
});
sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (){var G__34513 = cljs.core.count(analyzed_children);
switch (G__34513) {
case (0):
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__34514 = ctx;
var G__34515 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__34514,G__34515) : f.call(null,G__34514,G__34515));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__34517 = ctx;
var G__34518 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34519 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__34517,G__34518,G__34519) : f.call(null,G__34517,G__34518,G__34519));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__34523 = ctx;
var G__34524 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34525 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34526 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__34523,G__34524,G__34525,G__34526) : f.call(null,G__34523,G__34524,G__34525,G__34526));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__34527 = ctx;
var G__34528 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34529 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34530 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34531 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__34527,G__34528,G__34529,G__34530,G__34531) : f.call(null,G__34527,G__34528,G__34529,G__34530,G__34531));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__34534 = ctx;
var G__34535 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34536 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34537 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34538 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34539 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__34534,G__34535,G__34536,G__34537,G__34538,G__34539) : f.call(null,G__34534,G__34535,G__34536,G__34537,G__34538,G__34539));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__34540 = ctx;
var G__34541 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34542 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34543 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34544 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34545 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34546 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__34540,G__34541,G__34542,G__34543,G__34544,G__34545,G__34546) : f.call(null,G__34540,G__34541,G__34542,G__34543,G__34544,G__34545,G__34546));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__34547 = ctx;
var G__34548 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34549 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34550 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34551 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34552 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34553 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34554 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__34547,G__34548,G__34549,G__34550,G__34551,G__34552,G__34553,G__34554) : f.call(null,G__34547,G__34548,G__34549,G__34550,G__34551,G__34552,G__34553,G__34554));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__34555 = ctx;
var G__34556 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34557 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34558 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34559 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34560 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34561 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34562 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34563 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__34555,G__34556,G__34557,G__34558,G__34559,G__34560,G__34561,G__34562,G__34563) : f.call(null,G__34555,G__34556,G__34557,G__34558,G__34559,G__34560,G__34561,G__34562,G__34563));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__34564 = ctx;
var G__34565 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34566 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34567 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34568 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34569 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34570 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34571 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34572 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34573 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__34564,G__34565,G__34566,G__34567,G__34568,G__34569,G__34570,G__34571,G__34572,G__34573) : f.call(null,G__34564,G__34565,G__34566,G__34567,G__34568,G__34569,G__34570,G__34571,G__34572,G__34573));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__34574 = ctx;
var G__34575 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34576 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34577 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34578 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34579 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34580 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34581 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34582 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34583 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34584 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__34574,G__34575,G__34576,G__34577,G__34578,G__34579,G__34580,G__34581,G__34582,G__34583,G__34584) : f.call(null,G__34574,G__34575,G__34576,G__34577,G__34578,G__34579,G__34580,G__34581,G__34582,G__34583,G__34584));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__34587 = ctx;
var G__34588 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34589 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34590 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34591 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34592 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34593 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34594 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34595 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34596 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34597 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34598 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__34587,G__34588,G__34589,G__34590,G__34591,G__34592,G__34593,G__34594,G__34595,G__34596,G__34597,G__34598) : f.call(null,G__34587,G__34588,G__34589,G__34590,G__34591,G__34592,G__34593,G__34594,G__34595,G__34596,G__34597,G__34598));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__34600 = ctx;
var G__34601 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34602 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34603 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34604 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34605 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34606 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34607 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34608 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34609 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34610 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34611 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34612 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__34600,G__34601,G__34602,G__34603,G__34604,G__34605,G__34606,G__34607,G__34608,G__34609,G__34610,G__34611,G__34612) : f.call(null,G__34600,G__34601,G__34602,G__34603,G__34604,G__34605,G__34606,G__34607,G__34608,G__34609,G__34610,G__34611,G__34612));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__34614 = ctx;
var G__34615 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34616 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34617 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34618 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34619 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34620 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34621 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34622 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34623 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34624 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34625 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34626 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34627 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__34614,G__34615,G__34616,G__34617,G__34618,G__34619,G__34620,G__34621,G__34622,G__34623,G__34624,G__34625,G__34626,G__34627) : f.call(null,G__34614,G__34615,G__34616,G__34617,G__34618,G__34619,G__34620,G__34621,G__34622,G__34623,G__34624,G__34625,G__34626,G__34627));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__34629 = ctx;
var G__34630 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34631 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34632 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34633 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34634 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34635 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34636 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34637 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34638 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34639 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34640 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34641 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34642 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34643 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__34629,G__34630,G__34631,G__34632,G__34633,G__34634,G__34635,G__34636,G__34637,G__34638,G__34639,G__34640,G__34641,G__34642,G__34643) : f.call(null,G__34629,G__34630,G__34631,G__34632,G__34633,G__34634,G__34635,G__34636,G__34637,G__34638,G__34639,G__34640,G__34641,G__34642,G__34643));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__34645 = ctx;
var G__34646 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34647 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34648 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34649 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34650 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34651 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34652 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34653 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34654 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34655 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34656 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34657 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34658 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34659 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__34660 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__34645,G__34646,G__34647,G__34648,G__34649,G__34650,G__34651,G__34652,G__34653,G__34654,G__34655,G__34656,G__34657,G__34658,G__34659,G__34660) : f.call(null,G__34645,G__34646,G__34647,G__34648,G__34649,G__34650,G__34651,G__34652,G__34653,G__34654,G__34655,G__34656,G__34657,G__34658,G__34659,G__34660));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__34663 = ctx;
var G__34664 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34665 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34666 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34667 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34668 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34669 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34670 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34671 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34672 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34673 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34674 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34675 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34676 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34677 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__34678 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__34679 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__34663,G__34664,G__34665,G__34666,G__34667,G__34668,G__34669,G__34670,G__34671,G__34672,G__34673,G__34674,G__34675,G__34676,G__34677,G__34678,G__34679) : f.call(null,G__34663,G__34664,G__34665,G__34666,G__34667,G__34668,G__34669,G__34670,G__34671,G__34672,G__34673,G__34674,G__34675,G__34676,G__34677,G__34678,G__34679));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__34680 = ctx;
var G__34681 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34682 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34683 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34684 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34685 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34686 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34687 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34688 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34689 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34690 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34691 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34692 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34693 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34694 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__34695 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__34696 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__34697 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__34680,G__34681,G__34682,G__34683,G__34684,G__34685,G__34686,G__34687,G__34688,G__34689,G__34690,G__34691,G__34692,G__34693,G__34694,G__34695,G__34696,G__34697) : f.call(null,G__34680,G__34681,G__34682,G__34683,G__34684,G__34685,G__34686,G__34687,G__34688,G__34689,G__34690,G__34691,G__34692,G__34693,G__34694,G__34695,G__34696,G__34697));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__34708 = ctx;
var G__34709 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34710 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34711 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34712 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34713 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34714 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34715 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34716 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34717 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34718 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34719 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34720 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34721 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34722 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__34723 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__34724 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__34725 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__34726 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__34708,G__34709,G__34710,G__34711,G__34712,G__34713,G__34714,G__34715,G__34716,G__34717,G__34718,G__34719,G__34720,G__34721,G__34722,G__34723,G__34724,G__34725,G__34726) : f.call(null,G__34708,G__34709,G__34710,G__34711,G__34712,G__34713,G__34714,G__34715,G__34716,G__34717,G__34718,G__34719,G__34720,G__34721,G__34722,G__34723,G__34724,G__34725,G__34726));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__34728 = ctx;
var G__34729 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34730 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34731 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34732 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34733 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34734 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34735 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34736 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34737 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34738 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34739 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34740 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34741 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__34742 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__34743 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__34744 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__34746 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__34747 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__34748 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__34728,G__34729,G__34730,G__34731,G__34732,G__34733,G__34734,G__34735,G__34736,G__34737,G__34738,G__34739,G__34740,G__34741,G__34742,G__34743,G__34744,G__34746,G__34747,G__34748) : f.call(null,G__34728,G__34729,G__34730,G__34731,G__34732,G__34733,G__34734,G__34735,G__34736,G__34737,G__34738,G__34739,G__34740,G__34741,G__34742,G__34743,G__34744,G__34746,G__34747,G__34748));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
});

}
})(),expr);
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__34756 = cljs.core.count(analyzed_children);
switch (G__34756) {
case (0):
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var fexpr__34757 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34757.cljs$core$IFn$_invoke$arity$0 ? fexpr__34757.cljs$core$IFn$_invoke$arity$0() : fexpr__34757.call(null));
});
} else {
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34759 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var fexpr__34758 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34758.cljs$core$IFn$_invoke$arity$1 ? fexpr__34758.cljs$core$IFn$_invoke$arity$1(G__34759) : fexpr__34758.call(null,G__34759));
});
} else {
return (function (ctx,bindings){
var G__34760 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34760) : f.call(null,G__34760));
});
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34763 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34764 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var fexpr__34762 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34762.cljs$core$IFn$_invoke$arity$2 ? fexpr__34762.cljs$core$IFn$_invoke$arity$2(G__34763,G__34764) : fexpr__34762.call(null,G__34763,G__34764));
});
} else {
return (function (ctx,bindings){
var G__34765 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34766 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__34765,G__34766) : f.call(null,G__34765,G__34766));
});
}

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34768 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34769 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34770 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var fexpr__34767 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34767.cljs$core$IFn$_invoke$arity$3 ? fexpr__34767.cljs$core$IFn$_invoke$arity$3(G__34768,G__34769,G__34770) : fexpr__34767.call(null,G__34768,G__34769,G__34770));
});
} else {
return (function (ctx,bindings){
var G__34771 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34772 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34773 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__34771,G__34772,G__34773) : f.call(null,G__34771,G__34772,G__34773));
});
}

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34776 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34777 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34778 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34779 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var fexpr__34775 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34775.cljs$core$IFn$_invoke$arity$4 ? fexpr__34775.cljs$core$IFn$_invoke$arity$4(G__34776,G__34777,G__34778,G__34779) : fexpr__34775.call(null,G__34776,G__34777,G__34778,G__34779));
});
} else {
return (function (ctx,bindings){
var G__34781 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34782 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34783 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34784 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__34781,G__34782,G__34783,G__34784) : f.call(null,G__34781,G__34782,G__34783,G__34784));
});
}

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34787 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34788 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34789 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34790 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34791 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var fexpr__34786 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34786.cljs$core$IFn$_invoke$arity$5 ? fexpr__34786.cljs$core$IFn$_invoke$arity$5(G__34787,G__34788,G__34789,G__34790,G__34791) : fexpr__34786.call(null,G__34787,G__34788,G__34789,G__34790,G__34791));
});
} else {
return (function (ctx,bindings){
var G__34793 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34794 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34795 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34796 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34797 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__34793,G__34794,G__34795,G__34796,G__34797) : f.call(null,G__34793,G__34794,G__34795,G__34796,G__34797));
});
}

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34800 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34801 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34802 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34803 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34804 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34805 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var fexpr__34799 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34799.cljs$core$IFn$_invoke$arity$6 ? fexpr__34799.cljs$core$IFn$_invoke$arity$6(G__34800,G__34801,G__34802,G__34803,G__34804,G__34805) : fexpr__34799.call(null,G__34800,G__34801,G__34802,G__34803,G__34804,G__34805));
});
} else {
return (function (ctx,bindings){
var G__34807 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34808 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34809 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34810 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34811 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34812 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__34807,G__34808,G__34809,G__34810,G__34811,G__34812) : f.call(null,G__34807,G__34808,G__34809,G__34810,G__34811,G__34812));
});
}

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34818 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34819 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34820 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34821 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34822 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34823 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34824 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var fexpr__34817 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34817.cljs$core$IFn$_invoke$arity$7 ? fexpr__34817.cljs$core$IFn$_invoke$arity$7(G__34818,G__34819,G__34820,G__34821,G__34822,G__34823,G__34824) : fexpr__34817.call(null,G__34818,G__34819,G__34820,G__34821,G__34822,G__34823,G__34824));
});
} else {
return (function (ctx,bindings){
var G__34825 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34826 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34827 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34828 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34829 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34830 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34831 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__34825,G__34826,G__34827,G__34828,G__34829,G__34830,G__34831) : f.call(null,G__34825,G__34826,G__34827,G__34828,G__34829,G__34830,G__34831));
});
}

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34838 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34839 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34840 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34841 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34842 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34843 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34844 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34845 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var fexpr__34837 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34837.cljs$core$IFn$_invoke$arity$8 ? fexpr__34837.cljs$core$IFn$_invoke$arity$8(G__34838,G__34839,G__34840,G__34841,G__34842,G__34843,G__34844,G__34845) : fexpr__34837.call(null,G__34838,G__34839,G__34840,G__34841,G__34842,G__34843,G__34844,G__34845));
});
} else {
return (function (ctx,bindings){
var G__34847 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34848 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34849 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34850 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34851 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34852 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34853 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34854 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__34847,G__34848,G__34849,G__34850,G__34851,G__34852,G__34853,G__34854) : f.call(null,G__34847,G__34848,G__34849,G__34850,G__34851,G__34852,G__34853,G__34854));
});
}

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34863 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34864 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34865 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34866 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34867 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34868 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34869 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34870 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34871 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var fexpr__34862 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34862.cljs$core$IFn$_invoke$arity$9 ? fexpr__34862.cljs$core$IFn$_invoke$arity$9(G__34863,G__34864,G__34865,G__34866,G__34867,G__34868,G__34869,G__34870,G__34871) : fexpr__34862.call(null,G__34863,G__34864,G__34865,G__34866,G__34867,G__34868,G__34869,G__34870,G__34871));
});
} else {
return (function (ctx,bindings){
var G__34873 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34874 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34875 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34876 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34877 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34878 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34879 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34880 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34881 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__34873,G__34874,G__34875,G__34876,G__34877,G__34878,G__34879,G__34880,G__34881) : f.call(null,G__34873,G__34874,G__34875,G__34876,G__34877,G__34878,G__34879,G__34880,G__34881));
});
}

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34884 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34885 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34886 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34887 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34888 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34889 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34890 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34891 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34892 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34893 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var fexpr__34883 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34883.cljs$core$IFn$_invoke$arity$10 ? fexpr__34883.cljs$core$IFn$_invoke$arity$10(G__34884,G__34885,G__34886,G__34887,G__34888,G__34889,G__34890,G__34891,G__34892,G__34893) : fexpr__34883.call(null,G__34884,G__34885,G__34886,G__34887,G__34888,G__34889,G__34890,G__34891,G__34892,G__34893));
});
} else {
return (function (ctx,bindings){
var G__34897 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34898 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34899 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34900 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34901 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34902 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34903 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34904 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34905 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34906 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__34897,G__34898,G__34899,G__34900,G__34901,G__34902,G__34903,G__34904,G__34905,G__34906) : f.call(null,G__34897,G__34898,G__34899,G__34900,G__34901,G__34902,G__34903,G__34904,G__34905,G__34906));
});
}

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34910 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34911 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34912 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34913 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34914 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34915 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34916 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34917 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34918 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34919 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34920 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var fexpr__34909 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34909.cljs$core$IFn$_invoke$arity$11 ? fexpr__34909.cljs$core$IFn$_invoke$arity$11(G__34910,G__34911,G__34912,G__34913,G__34914,G__34915,G__34916,G__34917,G__34918,G__34919,G__34920) : fexpr__34909.call(null,G__34910,G__34911,G__34912,G__34913,G__34914,G__34915,G__34916,G__34917,G__34918,G__34919,G__34920));
});
} else {
return (function (ctx,bindings){
var G__34921 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34922 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34923 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34924 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34925 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34926 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34927 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34928 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34929 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34930 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34931 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__34921,G__34922,G__34923,G__34924,G__34925,G__34926,G__34927,G__34928,G__34929,G__34930,G__34931) : f.call(null,G__34921,G__34922,G__34923,G__34924,G__34925,G__34926,G__34927,G__34928,G__34929,G__34930,G__34931));
});
}

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34935 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34936 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34937 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34938 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34939 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34940 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34941 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34942 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34943 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34944 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34945 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34946 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var fexpr__34934 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34934.cljs$core$IFn$_invoke$arity$12 ? fexpr__34934.cljs$core$IFn$_invoke$arity$12(G__34935,G__34936,G__34937,G__34938,G__34939,G__34940,G__34941,G__34942,G__34943,G__34944,G__34945,G__34946) : fexpr__34934.call(null,G__34935,G__34936,G__34937,G__34938,G__34939,G__34940,G__34941,G__34942,G__34943,G__34944,G__34945,G__34946));
});
} else {
return (function (ctx,bindings){
var G__34950 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34951 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34952 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34953 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34954 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34955 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34956 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34957 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34958 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34959 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34960 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34961 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__34950,G__34951,G__34952,G__34953,G__34954,G__34955,G__34956,G__34957,G__34958,G__34959,G__34960,G__34961) : f.call(null,G__34950,G__34951,G__34952,G__34953,G__34954,G__34955,G__34956,G__34957,G__34958,G__34959,G__34960,G__34961));
});
}

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__34967 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34968 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34969 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34970 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34971 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34972 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34973 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34974 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34975 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34976 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34977 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34978 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__34979 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var fexpr__34966 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__34966.cljs$core$IFn$_invoke$arity$13 ? fexpr__34966.cljs$core$IFn$_invoke$arity$13(G__34967,G__34968,G__34969,G__34970,G__34971,G__34972,G__34973,G__34974,G__34975,G__34976,G__34977,G__34978,G__34979) : fexpr__34966.call(null,G__34967,G__34968,G__34969,G__34970,G__34971,G__34972,G__34973,G__34974,G__34975,G__34976,G__34977,G__34978,G__34979));
});
} else {
return (function (ctx,bindings){
var G__34988 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__34989 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__34990 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__34991 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__34992 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__34993 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__34994 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__34995 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__34996 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__34997 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__34998 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__34999 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35000 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__34988,G__34989,G__34990,G__34991,G__34992,G__34993,G__34994,G__34995,G__34996,G__34997,G__34998,G__34999,G__35000) : f.call(null,G__34988,G__34989,G__34990,G__34991,G__34992,G__34993,G__34994,G__34995,G__34996,G__34997,G__34998,G__34999,G__35000));
});
}

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__35004 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35005 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35006 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35007 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35008 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35009 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35011 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35012 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35013 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35014 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35015 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35016 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35017 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35018 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var fexpr__35003 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__35003.cljs$core$IFn$_invoke$arity$14 ? fexpr__35003.cljs$core$IFn$_invoke$arity$14(G__35004,G__35005,G__35006,G__35007,G__35008,G__35009,G__35011,G__35012,G__35013,G__35014,G__35015,G__35016,G__35017,G__35018) : fexpr__35003.call(null,G__35004,G__35005,G__35006,G__35007,G__35008,G__35009,G__35011,G__35012,G__35013,G__35014,G__35015,G__35016,G__35017,G__35018));
});
} else {
return (function (ctx,bindings){
var G__35021 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35022 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35023 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35024 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35025 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35026 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35027 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35028 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35029 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35030 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35031 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35032 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35033 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35034 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__35021,G__35022,G__35023,G__35024,G__35025,G__35026,G__35027,G__35028,G__35029,G__35030,G__35031,G__35032,G__35033,G__35034) : f.call(null,G__35021,G__35022,G__35023,G__35024,G__35025,G__35026,G__35027,G__35028,G__35029,G__35030,G__35031,G__35032,G__35033,G__35034));
});
}

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__35038 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35039 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35040 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35041 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35042 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35043 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35044 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35045 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35046 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35047 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35048 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35049 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35050 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35051 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__35052 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var fexpr__35037 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__35037.cljs$core$IFn$_invoke$arity$15 ? fexpr__35037.cljs$core$IFn$_invoke$arity$15(G__35038,G__35039,G__35040,G__35041,G__35042,G__35043,G__35044,G__35045,G__35046,G__35047,G__35048,G__35049,G__35050,G__35051,G__35052) : fexpr__35037.call(null,G__35038,G__35039,G__35040,G__35041,G__35042,G__35043,G__35044,G__35045,G__35046,G__35047,G__35048,G__35049,G__35050,G__35051,G__35052));
});
} else {
return (function (ctx,bindings){
var G__35054 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35055 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35056 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35057 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35058 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35059 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35060 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35061 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35062 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35063 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35064 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35065 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35066 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35067 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__35068 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__35054,G__35055,G__35056,G__35057,G__35058,G__35059,G__35060,G__35061,G__35062,G__35063,G__35064,G__35065,G__35066,G__35067,G__35068) : f.call(null,G__35054,G__35055,G__35056,G__35057,G__35058,G__35059,G__35060,G__35061,G__35062,G__35063,G__35064,G__35065,G__35066,G__35067,G__35068));
});
}

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__35076 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35077 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35078 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35079 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35080 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35081 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35082 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35083 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35084 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35085 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35086 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35087 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35088 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35089 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__35090 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__35091 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var fexpr__35075 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__35075.cljs$core$IFn$_invoke$arity$16 ? fexpr__35075.cljs$core$IFn$_invoke$arity$16(G__35076,G__35077,G__35078,G__35079,G__35080,G__35081,G__35082,G__35083,G__35084,G__35085,G__35086,G__35087,G__35088,G__35089,G__35090,G__35091) : fexpr__35075.call(null,G__35076,G__35077,G__35078,G__35079,G__35080,G__35081,G__35082,G__35083,G__35084,G__35085,G__35086,G__35087,G__35088,G__35089,G__35090,G__35091));
});
} else {
return (function (ctx,bindings){
var G__35093 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35094 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35095 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35096 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35097 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35098 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35099 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35100 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35101 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35102 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35103 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35104 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35105 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35106 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__35107 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__35108 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__35093,G__35094,G__35095,G__35096,G__35097,G__35098,G__35099,G__35100,G__35101,G__35102,G__35103,G__35104,G__35105,G__35106,G__35107,G__35108) : f.call(null,G__35093,G__35094,G__35095,G__35096,G__35097,G__35098,G__35099,G__35100,G__35101,G__35102,G__35103,G__35104,G__35105,G__35106,G__35107,G__35108));
});
}

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__35117 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35118 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35119 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35120 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35121 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35122 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35123 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35124 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35125 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35126 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35127 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35128 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35129 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35130 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__35131 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__35132 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__35133 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var fexpr__35116 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__35116.cljs$core$IFn$_invoke$arity$17 ? fexpr__35116.cljs$core$IFn$_invoke$arity$17(G__35117,G__35118,G__35119,G__35120,G__35121,G__35122,G__35123,G__35124,G__35125,G__35126,G__35127,G__35128,G__35129,G__35130,G__35131,G__35132,G__35133) : fexpr__35116.call(null,G__35117,G__35118,G__35119,G__35120,G__35121,G__35122,G__35123,G__35124,G__35125,G__35126,G__35127,G__35128,G__35129,G__35130,G__35131,G__35132,G__35133));
});
} else {
return (function (ctx,bindings){
var G__35135 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35136 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35137 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35138 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35139 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35140 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35141 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35142 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35143 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35144 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35145 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35146 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35147 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35148 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__35149 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__35150 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__35151 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__35135,G__35136,G__35137,G__35138,G__35139,G__35140,G__35141,G__35142,G__35143,G__35144,G__35145,G__35146,G__35147,G__35148,G__35149,G__35150,G__35151) : f.call(null,G__35135,G__35136,G__35137,G__35138,G__35139,G__35140,G__35141,G__35142,G__35143,G__35144,G__35145,G__35146,G__35147,G__35148,G__35149,G__35150,G__35151));
});
}

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__35154 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35155 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35156 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35157 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35158 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35159 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35160 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35161 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35162 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35163 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35164 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35165 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35166 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35167 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__35168 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__35169 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__35170 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__35171 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var fexpr__35153 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__35153.cljs$core$IFn$_invoke$arity$18 ? fexpr__35153.cljs$core$IFn$_invoke$arity$18(G__35154,G__35155,G__35156,G__35157,G__35158,G__35159,G__35160,G__35161,G__35162,G__35163,G__35164,G__35165,G__35166,G__35167,G__35168,G__35169,G__35170,G__35171) : fexpr__35153.call(null,G__35154,G__35155,G__35156,G__35157,G__35158,G__35159,G__35160,G__35161,G__35162,G__35163,G__35164,G__35165,G__35166,G__35167,G__35168,G__35169,G__35170,G__35171));
});
} else {
return (function (ctx,bindings){
var G__35183 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35184 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35185 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35186 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35187 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35188 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35189 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35190 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35191 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35192 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35193 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35194 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35195 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35196 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__35197 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__35198 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__35199 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__35200 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__35183,G__35184,G__35185,G__35186,G__35187,G__35188,G__35189,G__35190,G__35191,G__35192,G__35193,G__35194,G__35195,G__35196,G__35197,G__35198,G__35199,G__35200) : f.call(null,G__35183,G__35184,G__35185,G__35186,G__35187,G__35188,G__35189,G__35190,G__35191,G__35192,G__35193,G__35194,G__35195,G__35196,G__35197,G__35198,G__35199,G__35200));
});
}

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
var G__35213 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35214 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35215 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35216 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35217 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35218 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35219 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35220 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35221 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35222 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35223 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35224 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35225 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35226 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__35227 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__35228 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__35229 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__35230 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__35231 = sci.impl.evaluator.eval(ctx,bindings,arg18);
var fexpr__35212 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__35212.cljs$core$IFn$_invoke$arity$19 ? fexpr__35212.cljs$core$IFn$_invoke$arity$19(G__35213,G__35214,G__35215,G__35216,G__35217,G__35218,G__35219,G__35220,G__35221,G__35222,G__35223,G__35224,G__35225,G__35226,G__35227,G__35228,G__35229,G__35230,G__35231) : fexpr__35212.call(null,G__35213,G__35214,G__35215,G__35216,G__35217,G__35218,G__35219,G__35220,G__35221,G__35222,G__35223,G__35224,G__35225,G__35226,G__35227,G__35228,G__35229,G__35230,G__35231));
});
} else {
return (function (ctx,bindings){
var G__35233 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__35234 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__35235 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__35236 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__35237 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__35238 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__35239 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__35240 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__35241 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__35242 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__35243 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__35244 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__35245 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__35246 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__35247 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__35248 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__35249 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__35250 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__35251 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__35233,G__35234,G__35235,G__35236,G__35237,G__35238,G__35239,G__35240,G__35241,G__35242,G__35243,G__35244,G__35245,G__35246,G__35247,G__35248,G__35249,G__35250,G__35251) : f.call(null,G__35233,G__35234,G__35235,G__35236,G__35237,G__35238,G__35239,G__35240,G__35241,G__35242,G__35243,G__35244,G__35245,G__35246,G__35247,G__35248,G__35249,G__35250,G__35251));
});
}

break;
default:
if(cljs.core.truth_(wrap)){
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f)),analyzed_children);
});
} else {
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,analyzed_children);
});
}

}
})(),null,expr,stack);
});
sci.impl.analyzer.analyze_quote = (function sci$impl$analyzer$analyze_quote(_ctx,expr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Wrong number of args (0) passed to quote",expr);
}

var snd = cljs.core.second(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_ctx__$1,_bindings){
return snd;
}),expr);
});
sci.impl.analyzer.analyze_in_ns = (function sci$impl$analyzer$analyze_in_ns(ctx,expr){
var ns_expr = (function (){var G__35255 = ctx;
var G__35256 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__35255,G__35256) : sci.impl.analyzer.analyze.call(null,G__35255,G__35256));
})();
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var ns_sym = sci.impl.evaluator.eval(ctx__$1,bindings,ns_expr);
sci.impl.utils.set_namespace_BANG_(ctx__$1,ns_sym,null);

return null;
}),expr);
});
sci.impl.analyzer.analyze_import = (function sci$impl$analyzer$analyze_import(_ctx,expr){
var args = cljs.core.rest(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,args);
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,m,top_level_QMARK_){
var eval_file = new cljs.core.Keyword("clojure.core","eval-file","clojure.core/eval-file",801420726).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(eval_file)){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_file,eval_file]));
} else {
}

try{var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var fsym = f;
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_((function (){var and__5043__auto__ = special_sym;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__5043__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_(ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__5045__auto__ = special_sym;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__5043__auto__ = f_meta;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = f_meta;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5043__auto__;
}
})())){
var vec__35264 = f__$1;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35264,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35264,(1),null);
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var len = method_name__$1.length;
var idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(method_name__$1,".");
var f__$2 = (cljs.core.truth_((function (){var and__5043__auto__ = idx;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((len - (1)),idx);
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.analyzer.goog$module$goog$object.getValueByKeys(class$,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(method_name__$1,(0),idx).split("."))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name__$1,(idx + (1)))], null):f__$1);
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_static_method_invocation(ctx__$1,bindings,cljs.core.cons(f__$2,children));
}),expr);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(eval_QMARK_);
if(and__5043__auto__){
var or__5045__auto__ = special_sym;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
} else {
return and__5043__auto__;
}
})())){
var G__35267 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__35267)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__35267)){
return sci.impl.analyzer.return_and(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__35267)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__35267)){
return sci.impl.analyzer.analyze_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__35267)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__35267)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__35267)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__35267)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__35267)){
return sci.impl.analyzer.return_do(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__35267)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__35267)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__35267)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__35267)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__35267)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__35267)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__35267)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__35267)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__35267)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__35267)){
return sci.impl.analyzer.analyze_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__35267)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__35267)){
return sci.impl.analyzer.return_recur(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__35267)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__35267)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__35267)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__35267)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__35267)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__35267)){
return sci.impl.analyzer.return_or(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35267)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)));
var f__$2 = ((sci.impl.vars.var_QMARK_(f__$1))?cljs.core.deref(f__$1):f__$1);
var v = ((needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__5043__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__5043__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(function (){var v__$1 = (cljs.core.truth_(m)?(((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.meta(v)], 0))):v):v);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v__$1) : sci.impl.analyzer.analyze.call(null,ctx,v__$1));
})()
));
return expanded;
} else {
var temp__5802__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5802__auto__)){
var f__$2 = temp__5802__auto__;
return sci.impl.analyzer.return_call(ctx,expr,f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
} else {
var temp__5802__auto____$1 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
if(cljs.core.truth_(temp__5802__auto____$1)){
var op = temp__5802__auto____$1;
var G__35282 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__35282)){
if((sci.impl.utils.needs_ctx === op)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__35282)){
return sci.impl.analyzer.return_binding_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);

}
}
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794),f__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl.analyzer","self-ref","sci.impl.analyzer/self-ref",-976932794),f__$1)))){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),(function (bindings,___$1){
return cljs.core.deref(bindings.get(fsym));
}));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),((sci.impl.vars.var_QMARK_(f__$1))?(function (___$1,v){
return cljs.core.deref(v);
}):null));
}
}
}
}
}catch (e35275){if((e35275 instanceof Error)){
var e = e35275;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(null,null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0))));
} else {
throw e35275;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__35284 = ccount;
switch (G__35284) {
case (1):
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.evaluator.eval(ctx__$1,bindings,arg));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.evaluator.eval(ctx__$1,bindings,arg0),sci.impl.evaluator.eval(ctx__$1,bindings,arg1));
}),expr);

break;
default:
return sci.impl.analyzer.throw_error_with_location(["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ccount),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),expr);

}
} else {
var f__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.analyzer.analyze.call(null,ctx,f));
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
var f__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,f__$1);
if(cljs.core.ifn_QMARK_(f__$2)){
return sci.impl.evaluator.fn_call(ctx__$1,bindings,f__$2,children);
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$2], 0))," as a function."].join('')));
}
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)));

}
}
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}});
sci.impl.analyzer.constant_colls = true;
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,the_map);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx,children);
if((cljs.core.count(analyzed_children) <= (16))){
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.array_map,analyzed_children,null,null);
} else {
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.hash_map,analyzed_children,null,null);
}
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ks = cljs.core.keys(expr);
var vs = cljs.core.vals(expr);
var constant_map_QMARK_ = ((true) && (((cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,ks)) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,vs)))));
var analyzed_map = ((constant_map_QMARK_)?expr:((cljs.core.not(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(ctx)))?sci.impl.analyzer.return_map(ctx,expr):cljs.core.zipmap(sci.impl.analyzer.analyze_children(ctx,ks),sci.impl.analyzer.analyze_children(ctx,vs))
));
var analyzed_meta = (cljs.core.truth_(m)?(function (){var G__35294 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__35295 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__35294,G__35295) : sci.impl.analyzer.analyze.call(null,G__35294,G__35295));
})():null);
var analyzed_meta__$1 = ((((constant_map_QMARK_) && ((m === analyzed_meta))))?analyzed_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(analyzed_meta,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)));
var ret = (cljs.core.truth_(analyzed_meta__$1)?(((analyzed_map instanceof sci.impl.types.EvalFn))?sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var md = sci.impl.evaluator.handle_meta(ctx__$1,bindings,analyzed_meta__$1);
var coll = sci.impl.evaluator.eval(ctx__$1,bindings,analyzed_map);
return cljs.core.with_meta(coll,md);
}),expr):cljs.core.with_meta(analyzed_map,analyzed_meta__$1)):analyzed_map);
return ret;
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,_f1,f2,expr,m){
var constant_coll_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,expr)));
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m)):null);
var must_eval = (((!(constant_coll_QMARK_))) || ((!((m === analyzed_meta)))));
var analyzed_coll = (((!(must_eval)))?expr:(cljs.core.truth_(m)?(function (){var ef = sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr),null,null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var md = sci.impl.evaluator.eval(ctx__$1,bindings,analyzed_meta);
var coll = sci.impl.evaluator.eval(ctx__$1,bindings,ef);
return cljs.core.with_meta(coll,md);
}),expr);
})():sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr),null,null)));
return analyzed_coll;
});
sci.impl.analyzer.analyze_js_obj = (function sci$impl$analyzer$analyze_js_obj(ctx,js_val){
var v = js_val.val;
if(cljs.core.map_QMARK_(v)){
var ks = cljs.core.keys(v);
var ks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks);
var vs = cljs.core.vals(v);
var vs__$1 = sci.impl.analyzer.analyze_children(ctx,vs);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35302_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__35302_SHARP_);
}),vs__$1)));
}),js_val);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var arr = [];
var seq__35304_35813 = cljs.core.seq(vs);
var chunk__35305_35814 = null;
var count__35306_35815 = (0);
var i__35307_35816 = (0);
while(true){
if((i__35307_35816 < count__35306_35815)){
var x_35817 = chunk__35305_35814.cljs$core$IIndexed$_nth$arity$2(null,i__35307_35816);
arr.push(sci.impl.evaluator.eval(ctx__$1,bindings,x_35817));


var G__35818 = seq__35304_35813;
var G__35819 = chunk__35305_35814;
var G__35820 = count__35306_35815;
var G__35821 = (i__35307_35816 + (1));
seq__35304_35813 = G__35818;
chunk__35305_35814 = G__35819;
count__35306_35815 = G__35820;
i__35307_35816 = G__35821;
continue;
} else {
var temp__5804__auto___35822 = cljs.core.seq(seq__35304_35813);
if(temp__5804__auto___35822){
var seq__35304_35823__$1 = temp__5804__auto___35822;
if(cljs.core.chunked_seq_QMARK_(seq__35304_35823__$1)){
var c__5568__auto___35824 = cljs.core.chunk_first(seq__35304_35823__$1);
var G__35825 = cljs.core.chunk_rest(seq__35304_35823__$1);
var G__35826 = c__5568__auto___35824;
var G__35827 = cljs.core.count(c__5568__auto___35824);
var G__35828 = (0);
seq__35304_35813 = G__35825;
chunk__35305_35814 = G__35826;
count__35306_35815 = G__35827;
i__35307_35816 = G__35828;
continue;
} else {
var x_35829 = cljs.core.first(seq__35304_35823__$1);
arr.push(sci.impl.evaluator.eval(ctx__$1,bindings,x_35829));


var G__35830 = cljs.core.next(seq__35304_35823__$1);
var G__35831 = null;
var G__35832 = (0);
var G__35833 = (0);
seq__35304_35813 = G__35830;
chunk__35305_35814 = G__35831;
count__35306_35815 = G__35832;
i__35307_35816 = G__35833;
continue;
}
} else {
}
}
break;
}

return arr;
}),js_val);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__35313 = arguments.length;
switch (G__35313) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
if(sci.impl.utils.constant_QMARK_(expr)){
return expr;
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,expr,false,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m));
var mv = cljs.core.meta(v);
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if((sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,ctx);
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_EvalVar(v);
}
}
} else {
return v;

}
}
}
} else {
if(cljs.core.record_QMARK_(expr)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return sci.impl.analyzer.analyze_map(ctx,expr,m);
} else {
if((expr instanceof cljs.tagged_literals.JSValue)){
return sci.impl.analyzer.analyze_js_obj(ctx,expr);
} else {
if(cljs.core.vector_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_(expr)){
if(cljs.core.seq(expr)){
return sci.impl.analyzer.analyze_call(ctx,expr,m,top_level_QMARK_);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.analyzer.js.map
