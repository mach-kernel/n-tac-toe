goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__29814 = xs;
args__$2 = G__29814;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__29815 = xs;
args__$2 = G__29815;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs){
var vec__28717 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,let_val));
var bindings__$2 = cljs.core._assoc(bindings__$1,let_name,v);
if(cljs.core.not(rest_let_bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$2], null);
} else {
var G__29816 = ctx__$1;
var G__29817 = bindings__$2;
var G__29818 = rest_let_bindings;
ctx__$1 = G__29816;
bindings__$1 = G__29817;
let_bindings__$1 = G__29818;
continue;
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28717,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28717,(1),null);
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__29819 = nexprs;
exprs__$1 = G__29819;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,bindings,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5802__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5802__auto__)){
var mm = temp__5802__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,m) : sci.impl.evaluator.eval.call(null,ctx,bindings,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval_map = (function sci$impl$evaluator$eval_map(ctx,bindings,expr){
var temp__5802__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.truth_((function (){var G__28738 = new cljs.core.Keyword(null,"eval","eval",-1103567905);
var G__28739 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(m);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__28738,G__28739) : sci.impl.utils.kw_identical_QMARK_.call(null,G__28738,G__28739));
})())){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28736_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__28736_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__28736_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28737_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__28737_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__28737_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,bindings,m));
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,init) : sci.impl.evaluator.eval.call(null,ctx,bindings,init));
var m__$1 = (function (){var or__5045__auto__ = m;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(var_name);
}
})();
var m__$2 = sci.impl.evaluator.eval_map(ctx,bindings,m__$1);
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$2));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__28745 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28745,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return G__28745;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__28763 = arguments.length;
switch (G__28763) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__28768 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28768,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28768,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__28775 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28775,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28775,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_default) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_default));
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__28821 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__28822 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__28822);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,body) : sci.impl.evaluator.eval.call(null,ctx,bindings,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__28821);
}}catch (e28792){if((e28792 instanceof Error)){
var e = e28792;
var temp__5802__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5045__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),clazz) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),clazz));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if((clazz instanceof sci.impl.types.EvalFn)){
var c__5078__auto__ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,clazz) : sci.impl.evaluator.eval.call(null,ctx,bindings,clazz));
var x__5079__auto__ = e;
return (x__5079__auto__ instanceof c__5078__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__28814 = ctx;
var G__28815 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c),e);
var G__28816 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__28814,G__28815,G__28816) : sci.impl.evaluator.eval.call(null,G__28814,G__28815,G__28816));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__28817 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28817,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28817,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
} else {
throw e28792;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,finally$) : sci.impl.evaluator.eval.call(null,ctx,bindings,finally$));
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28825_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__28825_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__28825_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,bindings,instance_expr));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.map_QMARK_(instance_expr_STAR_);
if(and__5043__auto__){
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
var instance_class = (function (){var or__5045__auto__ = tag_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__5045__auto__ = allowed;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28831_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__28831_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__28831_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__28851 = arguments.length;
switch (G__28851) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null,ctx,bindings,sym));
var res = cljs.core.second((function (){var fexpr__28852 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__28852.cljs$core$IFn$_invoke$arity$3 ? fexpr__28852.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__28852.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.EvalFn)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29888 = arguments.length;
var i__5770__auto___29889 = (0);
while(true){
if((i__5770__auto___29889 < len__5769__auto___29888)){
args__5775__auto__.push((arguments[i__5770__auto___29889]));

var G__29890 = (i__5770__auto___29889 + (1));
i__5770__auto___29889 = G__29890;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28853_SHARP_){
if(((cljs.core.seq_QMARK_(p1__28853_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__28853_SHARP_))))){
return cljs.core.second(p1__28853_SHARP_);
} else {
return p1__28853_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__28862 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28862,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28862,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5802__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5802__auto____$1)){
var rec = temp__5802__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq28854){
var G__28855 = cljs.core.first(seq28854);
var seq28854__$1 = cljs.core.next(seq28854);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28855,seq28854__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__28884 = ctx;
var G__28885 = bindings;
var G__28886 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__28884,G__28885,G__28886) : sci.impl.evaluator.eval.call(null,G__28884,G__28885,G__28886));
})();
var temp__5802__auto__ = cljs.core.next(exprs__$2);
if(temp__5802__auto__){
var exprs__$3 = temp__5802__auto__;
var G__29892 = exprs__$3;
exprs__$2 = G__29892;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__29096 = cljs.core.count(args);
switch (G__29096) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg28904 = (function (){var G__29097 = ctx;
var G__29098 = bindings;
var G__29099 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29097,G__29098,G__29099) : sci.impl.evaluator.eval.call(null,G__29097,G__29098,G__29099));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg28904) : f.call(null,arg28904));

break;
case (2):
var arg28905 = (function (){var G__29115 = ctx;
var G__29116 = bindings;
var G__29117 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29115,G__29116,G__29117) : sci.impl.evaluator.eval.call(null,G__29115,G__29116,G__29117));
})();
var args__$1 = cljs.core.rest(args);
var arg28906 = (function (){var G__29118 = ctx;
var G__29119 = bindings;
var G__29120 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29118,G__29119,G__29120) : sci.impl.evaluator.eval.call(null,G__29118,G__29119,G__29120));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg28905,arg28906) : f.call(null,arg28905,arg28906));

break;
case (3):
var arg28907 = (function (){var G__29122 = ctx;
var G__29123 = bindings;
var G__29124 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29122,G__29123,G__29124) : sci.impl.evaluator.eval.call(null,G__29122,G__29123,G__29124));
})();
var args__$1 = cljs.core.rest(args);
var arg28908 = (function (){var G__29125 = ctx;
var G__29126 = bindings;
var G__29127 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29125,G__29126,G__29127) : sci.impl.evaluator.eval.call(null,G__29125,G__29126,G__29127));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28909 = (function (){var G__29129 = ctx;
var G__29131 = bindings;
var G__29132 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29129,G__29131,G__29132) : sci.impl.evaluator.eval.call(null,G__29129,G__29131,G__29132));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg28907,arg28908,arg28909) : f.call(null,arg28907,arg28908,arg28909));

break;
case (4):
var arg28910 = (function (){var G__29134 = ctx;
var G__29135 = bindings;
var G__29136 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29134,G__29135,G__29136) : sci.impl.evaluator.eval.call(null,G__29134,G__29135,G__29136));
})();
var args__$1 = cljs.core.rest(args);
var arg28911 = (function (){var G__29139 = ctx;
var G__29140 = bindings;
var G__29141 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29139,G__29140,G__29141) : sci.impl.evaluator.eval.call(null,G__29139,G__29140,G__29141));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28912 = (function (){var G__29142 = ctx;
var G__29143 = bindings;
var G__29144 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29142,G__29143,G__29144) : sci.impl.evaluator.eval.call(null,G__29142,G__29143,G__29144));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg28913 = (function (){var G__29146 = ctx;
var G__29147 = bindings;
var G__29148 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29146,G__29147,G__29148) : sci.impl.evaluator.eval.call(null,G__29146,G__29147,G__29148));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg28910,arg28911,arg28912,arg28913) : f.call(null,arg28910,arg28911,arg28912,arg28913));

break;
case (5):
var arg28914 = (function (){var G__29149 = ctx;
var G__29150 = bindings;
var G__29151 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29149,G__29150,G__29151) : sci.impl.evaluator.eval.call(null,G__29149,G__29150,G__29151));
})();
var args__$1 = cljs.core.rest(args);
var arg28915 = (function (){var G__29152 = ctx;
var G__29153 = bindings;
var G__29154 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29152,G__29153,G__29154) : sci.impl.evaluator.eval.call(null,G__29152,G__29153,G__29154));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28916 = (function (){var G__29155 = ctx;
var G__29156 = bindings;
var G__29157 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29155,G__29156,G__29157) : sci.impl.evaluator.eval.call(null,G__29155,G__29156,G__29157));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg28917 = (function (){var G__29158 = ctx;
var G__29159 = bindings;
var G__29160 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29158,G__29159,G__29160) : sci.impl.evaluator.eval.call(null,G__29158,G__29159,G__29160));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg28918 = (function (){var G__29161 = ctx;
var G__29162 = bindings;
var G__29163 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29161,G__29162,G__29163) : sci.impl.evaluator.eval.call(null,G__29161,G__29162,G__29163));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg28914,arg28915,arg28916,arg28917,arg28918) : f.call(null,arg28914,arg28915,arg28916,arg28917,arg28918));

break;
case (6):
var arg28919 = (function (){var G__29164 = ctx;
var G__29165 = bindings;
var G__29166 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29164,G__29165,G__29166) : sci.impl.evaluator.eval.call(null,G__29164,G__29165,G__29166));
})();
var args__$1 = cljs.core.rest(args);
var arg28920 = (function (){var G__29167 = ctx;
var G__29168 = bindings;
var G__29169 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29167,G__29168,G__29169) : sci.impl.evaluator.eval.call(null,G__29167,G__29168,G__29169));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28921 = (function (){var G__29170 = ctx;
var G__29171 = bindings;
var G__29172 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29170,G__29171,G__29172) : sci.impl.evaluator.eval.call(null,G__29170,G__29171,G__29172));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg28922 = (function (){var G__29173 = ctx;
var G__29174 = bindings;
var G__29175 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29173,G__29174,G__29175) : sci.impl.evaluator.eval.call(null,G__29173,G__29174,G__29175));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg28923 = (function (){var G__29176 = ctx;
var G__29177 = bindings;
var G__29178 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29176,G__29177,G__29178) : sci.impl.evaluator.eval.call(null,G__29176,G__29177,G__29178));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg28924 = (function (){var G__29180 = ctx;
var G__29181 = bindings;
var G__29182 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29180,G__29181,G__29182) : sci.impl.evaluator.eval.call(null,G__29180,G__29181,G__29182));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg28919,arg28920,arg28921,arg28922,arg28923,arg28924) : f.call(null,arg28919,arg28920,arg28921,arg28922,arg28923,arg28924));

break;
case (7):
var arg28925 = (function (){var G__29183 = ctx;
var G__29184 = bindings;
var G__29185 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29183,G__29184,G__29185) : sci.impl.evaluator.eval.call(null,G__29183,G__29184,G__29185));
})();
var args__$1 = cljs.core.rest(args);
var arg28926 = (function (){var G__29186 = ctx;
var G__29187 = bindings;
var G__29188 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29186,G__29187,G__29188) : sci.impl.evaluator.eval.call(null,G__29186,G__29187,G__29188));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28927 = (function (){var G__29189 = ctx;
var G__29190 = bindings;
var G__29191 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29189,G__29190,G__29191) : sci.impl.evaluator.eval.call(null,G__29189,G__29190,G__29191));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg28928 = (function (){var G__29192 = ctx;
var G__29193 = bindings;
var G__29194 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29192,G__29193,G__29194) : sci.impl.evaluator.eval.call(null,G__29192,G__29193,G__29194));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg28929 = (function (){var G__29195 = ctx;
var G__29196 = bindings;
var G__29197 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29195,G__29196,G__29197) : sci.impl.evaluator.eval.call(null,G__29195,G__29196,G__29197));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg28930 = (function (){var G__29198 = ctx;
var G__29199 = bindings;
var G__29200 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29198,G__29199,G__29200) : sci.impl.evaluator.eval.call(null,G__29198,G__29199,G__29200));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg28931 = (function (){var G__29201 = ctx;
var G__29202 = bindings;
var G__29203 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29201,G__29202,G__29203) : sci.impl.evaluator.eval.call(null,G__29201,G__29202,G__29203));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg28925,arg28926,arg28927,arg28928,arg28929,arg28930,arg28931) : f.call(null,arg28925,arg28926,arg28927,arg28928,arg28929,arg28930,arg28931));

break;
case (8):
var arg28932 = (function (){var G__29204 = ctx;
var G__29205 = bindings;
var G__29206 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29204,G__29205,G__29206) : sci.impl.evaluator.eval.call(null,G__29204,G__29205,G__29206));
})();
var args__$1 = cljs.core.rest(args);
var arg28933 = (function (){var G__29208 = ctx;
var G__29209 = bindings;
var G__29210 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29208,G__29209,G__29210) : sci.impl.evaluator.eval.call(null,G__29208,G__29209,G__29210));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28934 = (function (){var G__29211 = ctx;
var G__29212 = bindings;
var G__29213 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29211,G__29212,G__29213) : sci.impl.evaluator.eval.call(null,G__29211,G__29212,G__29213));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg28935 = (function (){var G__29214 = ctx;
var G__29215 = bindings;
var G__29216 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29214,G__29215,G__29216) : sci.impl.evaluator.eval.call(null,G__29214,G__29215,G__29216));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg28936 = (function (){var G__29217 = ctx;
var G__29218 = bindings;
var G__29219 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29217,G__29218,G__29219) : sci.impl.evaluator.eval.call(null,G__29217,G__29218,G__29219));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg28937 = (function (){var G__29220 = ctx;
var G__29221 = bindings;
var G__29222 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29220,G__29221,G__29222) : sci.impl.evaluator.eval.call(null,G__29220,G__29221,G__29222));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg28938 = (function (){var G__29223 = ctx;
var G__29224 = bindings;
var G__29225 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29223,G__29224,G__29225) : sci.impl.evaluator.eval.call(null,G__29223,G__29224,G__29225));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg28939 = (function (){var G__29226 = ctx;
var G__29227 = bindings;
var G__29228 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29226,G__29227,G__29228) : sci.impl.evaluator.eval.call(null,G__29226,G__29227,G__29228));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg28932,arg28933,arg28934,arg28935,arg28936,arg28937,arg28938,arg28939) : f.call(null,arg28932,arg28933,arg28934,arg28935,arg28936,arg28937,arg28938,arg28939));

break;
case (9):
var arg28940 = (function (){var G__29229 = ctx;
var G__29230 = bindings;
var G__29231 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29229,G__29230,G__29231) : sci.impl.evaluator.eval.call(null,G__29229,G__29230,G__29231));
})();
var args__$1 = cljs.core.rest(args);
var arg28941 = (function (){var G__29233 = ctx;
var G__29234 = bindings;
var G__29235 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29233,G__29234,G__29235) : sci.impl.evaluator.eval.call(null,G__29233,G__29234,G__29235));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28942 = (function (){var G__29236 = ctx;
var G__29237 = bindings;
var G__29238 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29236,G__29237,G__29238) : sci.impl.evaluator.eval.call(null,G__29236,G__29237,G__29238));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg28943 = (function (){var G__29241 = ctx;
var G__29242 = bindings;
var G__29243 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29241,G__29242,G__29243) : sci.impl.evaluator.eval.call(null,G__29241,G__29242,G__29243));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg28944 = (function (){var G__29244 = ctx;
var G__29245 = bindings;
var G__29246 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29244,G__29245,G__29246) : sci.impl.evaluator.eval.call(null,G__29244,G__29245,G__29246));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg28945 = (function (){var G__29247 = ctx;
var G__29248 = bindings;
var G__29249 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29247,G__29248,G__29249) : sci.impl.evaluator.eval.call(null,G__29247,G__29248,G__29249));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg28946 = (function (){var G__29251 = ctx;
var G__29252 = bindings;
var G__29253 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29251,G__29252,G__29253) : sci.impl.evaluator.eval.call(null,G__29251,G__29252,G__29253));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg28947 = (function (){var G__29254 = ctx;
var G__29255 = bindings;
var G__29256 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29254,G__29255,G__29256) : sci.impl.evaluator.eval.call(null,G__29254,G__29255,G__29256));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg28948 = (function (){var G__29257 = ctx;
var G__29258 = bindings;
var G__29259 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29257,G__29258,G__29259) : sci.impl.evaluator.eval.call(null,G__29257,G__29258,G__29259));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg28940,arg28941,arg28942,arg28943,arg28944,arg28945,arg28946,arg28947,arg28948) : f.call(null,arg28940,arg28941,arg28942,arg28943,arg28944,arg28945,arg28946,arg28947,arg28948));

break;
case (10):
var arg28949 = (function (){var G__29264 = ctx;
var G__29265 = bindings;
var G__29266 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29264,G__29265,G__29266) : sci.impl.evaluator.eval.call(null,G__29264,G__29265,G__29266));
})();
var args__$1 = cljs.core.rest(args);
var arg28950 = (function (){var G__29269 = ctx;
var G__29270 = bindings;
var G__29271 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29269,G__29270,G__29271) : sci.impl.evaluator.eval.call(null,G__29269,G__29270,G__29271));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28951 = (function (){var G__29272 = ctx;
var G__29273 = bindings;
var G__29274 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29272,G__29273,G__29274) : sci.impl.evaluator.eval.call(null,G__29272,G__29273,G__29274));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg28952 = (function (){var G__29298 = ctx;
var G__29299 = bindings;
var G__29300 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29298,G__29299,G__29300) : sci.impl.evaluator.eval.call(null,G__29298,G__29299,G__29300));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg28953 = (function (){var G__29301 = ctx;
var G__29302 = bindings;
var G__29303 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29301,G__29302,G__29303) : sci.impl.evaluator.eval.call(null,G__29301,G__29302,G__29303));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg28954 = (function (){var G__29304 = ctx;
var G__29305 = bindings;
var G__29306 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29304,G__29305,G__29306) : sci.impl.evaluator.eval.call(null,G__29304,G__29305,G__29306));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg28955 = (function (){var G__29308 = ctx;
var G__29309 = bindings;
var G__29310 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29308,G__29309,G__29310) : sci.impl.evaluator.eval.call(null,G__29308,G__29309,G__29310));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg28956 = (function (){var G__29312 = ctx;
var G__29313 = bindings;
var G__29314 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29312,G__29313,G__29314) : sci.impl.evaluator.eval.call(null,G__29312,G__29313,G__29314));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg28957 = (function (){var G__29321 = ctx;
var G__29322 = bindings;
var G__29323 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29321,G__29322,G__29323) : sci.impl.evaluator.eval.call(null,G__29321,G__29322,G__29323));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg28958 = (function (){var G__29324 = ctx;
var G__29325 = bindings;
var G__29326 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29324,G__29325,G__29326) : sci.impl.evaluator.eval.call(null,G__29324,G__29325,G__29326));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg28949,arg28950,arg28951,arg28952,arg28953,arg28954,arg28955,arg28956,arg28957,arg28958) : f.call(null,arg28949,arg28950,arg28951,arg28952,arg28953,arg28954,arg28955,arg28956,arg28957,arg28958));

break;
case (11):
var arg28959 = (function (){var G__29327 = ctx;
var G__29328 = bindings;
var G__29329 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29327,G__29328,G__29329) : sci.impl.evaluator.eval.call(null,G__29327,G__29328,G__29329));
})();
var args__$1 = cljs.core.rest(args);
var arg28960 = (function (){var G__29330 = ctx;
var G__29331 = bindings;
var G__29332 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29330,G__29331,G__29332) : sci.impl.evaluator.eval.call(null,G__29330,G__29331,G__29332));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28961 = (function (){var G__29333 = ctx;
var G__29334 = bindings;
var G__29335 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29333,G__29334,G__29335) : sci.impl.evaluator.eval.call(null,G__29333,G__29334,G__29335));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg28962 = (function (){var G__29337 = ctx;
var G__29338 = bindings;
var G__29339 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29337,G__29338,G__29339) : sci.impl.evaluator.eval.call(null,G__29337,G__29338,G__29339));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg28963 = (function (){var G__29340 = ctx;
var G__29341 = bindings;
var G__29342 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29340,G__29341,G__29342) : sci.impl.evaluator.eval.call(null,G__29340,G__29341,G__29342));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg28964 = (function (){var G__29343 = ctx;
var G__29344 = bindings;
var G__29345 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29343,G__29344,G__29345) : sci.impl.evaluator.eval.call(null,G__29343,G__29344,G__29345));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg28965 = (function (){var G__29346 = ctx;
var G__29347 = bindings;
var G__29348 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29346,G__29347,G__29348) : sci.impl.evaluator.eval.call(null,G__29346,G__29347,G__29348));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg28966 = (function (){var G__29349 = ctx;
var G__29350 = bindings;
var G__29351 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29349,G__29350,G__29351) : sci.impl.evaluator.eval.call(null,G__29349,G__29350,G__29351));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg28967 = (function (){var G__29352 = ctx;
var G__29353 = bindings;
var G__29354 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29352,G__29353,G__29354) : sci.impl.evaluator.eval.call(null,G__29352,G__29353,G__29354));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg28968 = (function (){var G__29355 = ctx;
var G__29356 = bindings;
var G__29357 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29355,G__29356,G__29357) : sci.impl.evaluator.eval.call(null,G__29355,G__29356,G__29357));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg28969 = (function (){var G__29358 = ctx;
var G__29359 = bindings;
var G__29360 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29358,G__29359,G__29360) : sci.impl.evaluator.eval.call(null,G__29358,G__29359,G__29360));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg28959,arg28960,arg28961,arg28962,arg28963,arg28964,arg28965,arg28966,arg28967,arg28968,arg28969) : f.call(null,arg28959,arg28960,arg28961,arg28962,arg28963,arg28964,arg28965,arg28966,arg28967,arg28968,arg28969));

break;
case (12):
var arg28970 = (function (){var G__29361 = ctx;
var G__29362 = bindings;
var G__29363 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29361,G__29362,G__29363) : sci.impl.evaluator.eval.call(null,G__29361,G__29362,G__29363));
})();
var args__$1 = cljs.core.rest(args);
var arg28971 = (function (){var G__29364 = ctx;
var G__29365 = bindings;
var G__29366 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29364,G__29365,G__29366) : sci.impl.evaluator.eval.call(null,G__29364,G__29365,G__29366));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28972 = (function (){var G__29369 = ctx;
var G__29370 = bindings;
var G__29371 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29369,G__29370,G__29371) : sci.impl.evaluator.eval.call(null,G__29369,G__29370,G__29371));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg28973 = (function (){var G__29372 = ctx;
var G__29373 = bindings;
var G__29374 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29372,G__29373,G__29374) : sci.impl.evaluator.eval.call(null,G__29372,G__29373,G__29374));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg28974 = (function (){var G__29375 = ctx;
var G__29376 = bindings;
var G__29377 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29375,G__29376,G__29377) : sci.impl.evaluator.eval.call(null,G__29375,G__29376,G__29377));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg28975 = (function (){var G__29379 = ctx;
var G__29380 = bindings;
var G__29381 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29379,G__29380,G__29381) : sci.impl.evaluator.eval.call(null,G__29379,G__29380,G__29381));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg28976 = (function (){var G__29382 = ctx;
var G__29383 = bindings;
var G__29384 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29382,G__29383,G__29384) : sci.impl.evaluator.eval.call(null,G__29382,G__29383,G__29384));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg28977 = (function (){var G__29385 = ctx;
var G__29386 = bindings;
var G__29387 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29385,G__29386,G__29387) : sci.impl.evaluator.eval.call(null,G__29385,G__29386,G__29387));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg28978 = (function (){var G__29388 = ctx;
var G__29389 = bindings;
var G__29390 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29388,G__29389,G__29390) : sci.impl.evaluator.eval.call(null,G__29388,G__29389,G__29390));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg28979 = (function (){var G__29391 = ctx;
var G__29392 = bindings;
var G__29393 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29391,G__29392,G__29393) : sci.impl.evaluator.eval.call(null,G__29391,G__29392,G__29393));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg28980 = (function (){var G__29394 = ctx;
var G__29395 = bindings;
var G__29396 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29394,G__29395,G__29396) : sci.impl.evaluator.eval.call(null,G__29394,G__29395,G__29396));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg28981 = (function (){var G__29397 = ctx;
var G__29398 = bindings;
var G__29399 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29397,G__29398,G__29399) : sci.impl.evaluator.eval.call(null,G__29397,G__29398,G__29399));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg28970,arg28971,arg28972,arg28973,arg28974,arg28975,arg28976,arg28977,arg28978,arg28979,arg28980,arg28981) : f.call(null,arg28970,arg28971,arg28972,arg28973,arg28974,arg28975,arg28976,arg28977,arg28978,arg28979,arg28980,arg28981));

break;
case (13):
var arg28982 = (function (){var G__29400 = ctx;
var G__29401 = bindings;
var G__29402 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29400,G__29401,G__29402) : sci.impl.evaluator.eval.call(null,G__29400,G__29401,G__29402));
})();
var args__$1 = cljs.core.rest(args);
var arg28983 = (function (){var G__29405 = ctx;
var G__29406 = bindings;
var G__29407 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29405,G__29406,G__29407) : sci.impl.evaluator.eval.call(null,G__29405,G__29406,G__29407));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28984 = (function (){var G__29414 = ctx;
var G__29415 = bindings;
var G__29416 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29414,G__29415,G__29416) : sci.impl.evaluator.eval.call(null,G__29414,G__29415,G__29416));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg28985 = (function (){var G__29418 = ctx;
var G__29419 = bindings;
var G__29420 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29418,G__29419,G__29420) : sci.impl.evaluator.eval.call(null,G__29418,G__29419,G__29420));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg28986 = (function (){var G__29421 = ctx;
var G__29422 = bindings;
var G__29423 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29421,G__29422,G__29423) : sci.impl.evaluator.eval.call(null,G__29421,G__29422,G__29423));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg28987 = (function (){var G__29424 = ctx;
var G__29425 = bindings;
var G__29426 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29424,G__29425,G__29426) : sci.impl.evaluator.eval.call(null,G__29424,G__29425,G__29426));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg28988 = (function (){var G__29427 = ctx;
var G__29428 = bindings;
var G__29429 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29427,G__29428,G__29429) : sci.impl.evaluator.eval.call(null,G__29427,G__29428,G__29429));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg28989 = (function (){var G__29430 = ctx;
var G__29431 = bindings;
var G__29432 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29430,G__29431,G__29432) : sci.impl.evaluator.eval.call(null,G__29430,G__29431,G__29432));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg28990 = (function (){var G__29434 = ctx;
var G__29435 = bindings;
var G__29436 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29434,G__29435,G__29436) : sci.impl.evaluator.eval.call(null,G__29434,G__29435,G__29436));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg28991 = (function (){var G__29437 = ctx;
var G__29438 = bindings;
var G__29439 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29437,G__29438,G__29439) : sci.impl.evaluator.eval.call(null,G__29437,G__29438,G__29439));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg28992 = (function (){var G__29444 = ctx;
var G__29445 = bindings;
var G__29446 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29444,G__29445,G__29446) : sci.impl.evaluator.eval.call(null,G__29444,G__29445,G__29446));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg28993 = (function (){var G__29447 = ctx;
var G__29448 = bindings;
var G__29449 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29447,G__29448,G__29449) : sci.impl.evaluator.eval.call(null,G__29447,G__29448,G__29449));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg28994 = (function (){var G__29452 = ctx;
var G__29453 = bindings;
var G__29454 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29452,G__29453,G__29454) : sci.impl.evaluator.eval.call(null,G__29452,G__29453,G__29454));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg28982,arg28983,arg28984,arg28985,arg28986,arg28987,arg28988,arg28989,arg28990,arg28991,arg28992,arg28993,arg28994) : f.call(null,arg28982,arg28983,arg28984,arg28985,arg28986,arg28987,arg28988,arg28989,arg28990,arg28991,arg28992,arg28993,arg28994));

break;
case (14):
var arg28995 = (function (){var G__29456 = ctx;
var G__29457 = bindings;
var G__29458 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29456,G__29457,G__29458) : sci.impl.evaluator.eval.call(null,G__29456,G__29457,G__29458));
})();
var args__$1 = cljs.core.rest(args);
var arg28996 = (function (){var G__29459 = ctx;
var G__29460 = bindings;
var G__29461 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29459,G__29460,G__29461) : sci.impl.evaluator.eval.call(null,G__29459,G__29460,G__29461));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg28997 = (function (){var G__29463 = ctx;
var G__29464 = bindings;
var G__29465 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29463,G__29464,G__29465) : sci.impl.evaluator.eval.call(null,G__29463,G__29464,G__29465));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg28998 = (function (){var G__29468 = ctx;
var G__29469 = bindings;
var G__29470 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29468,G__29469,G__29470) : sci.impl.evaluator.eval.call(null,G__29468,G__29469,G__29470));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg28999 = (function (){var G__29472 = ctx;
var G__29473 = bindings;
var G__29474 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29472,G__29473,G__29474) : sci.impl.evaluator.eval.call(null,G__29472,G__29473,G__29474));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29000 = (function (){var G__29475 = ctx;
var G__29476 = bindings;
var G__29477 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29475,G__29476,G__29477) : sci.impl.evaluator.eval.call(null,G__29475,G__29476,G__29477));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29001 = (function (){var G__29478 = ctx;
var G__29479 = bindings;
var G__29480 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29478,G__29479,G__29480) : sci.impl.evaluator.eval.call(null,G__29478,G__29479,G__29480));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29002 = (function (){var G__29481 = ctx;
var G__29482 = bindings;
var G__29483 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29481,G__29482,G__29483) : sci.impl.evaluator.eval.call(null,G__29481,G__29482,G__29483));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29003 = (function (){var G__29484 = ctx;
var G__29485 = bindings;
var G__29486 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29484,G__29485,G__29486) : sci.impl.evaluator.eval.call(null,G__29484,G__29485,G__29486));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29004 = (function (){var G__29489 = ctx;
var G__29490 = bindings;
var G__29491 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29489,G__29490,G__29491) : sci.impl.evaluator.eval.call(null,G__29489,G__29490,G__29491));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29005 = (function (){var G__29493 = ctx;
var G__29494 = bindings;
var G__29495 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29493,G__29494,G__29495) : sci.impl.evaluator.eval.call(null,G__29493,G__29494,G__29495));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29006 = (function (){var G__29496 = ctx;
var G__29497 = bindings;
var G__29498 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29496,G__29497,G__29498) : sci.impl.evaluator.eval.call(null,G__29496,G__29497,G__29498));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29007 = (function (){var G__29499 = ctx;
var G__29500 = bindings;
var G__29501 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29499,G__29500,G__29501) : sci.impl.evaluator.eval.call(null,G__29499,G__29500,G__29501));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29008 = (function (){var G__29502 = ctx;
var G__29503 = bindings;
var G__29504 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29502,G__29503,G__29504) : sci.impl.evaluator.eval.call(null,G__29502,G__29503,G__29504));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg28995,arg28996,arg28997,arg28998,arg28999,arg29000,arg29001,arg29002,arg29003,arg29004,arg29005,arg29006,arg29007,arg29008) : f.call(null,arg28995,arg28996,arg28997,arg28998,arg28999,arg29000,arg29001,arg29002,arg29003,arg29004,arg29005,arg29006,arg29007,arg29008));

break;
case (15):
var arg29009 = (function (){var G__29506 = ctx;
var G__29507 = bindings;
var G__29508 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29506,G__29507,G__29508) : sci.impl.evaluator.eval.call(null,G__29506,G__29507,G__29508));
})();
var args__$1 = cljs.core.rest(args);
var arg29010 = (function (){var G__29511 = ctx;
var G__29512 = bindings;
var G__29513 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29511,G__29512,G__29513) : sci.impl.evaluator.eval.call(null,G__29511,G__29512,G__29513));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29011 = (function (){var G__29515 = ctx;
var G__29516 = bindings;
var G__29517 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29515,G__29516,G__29517) : sci.impl.evaluator.eval.call(null,G__29515,G__29516,G__29517));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29012 = (function (){var G__29518 = ctx;
var G__29519 = bindings;
var G__29520 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29518,G__29519,G__29520) : sci.impl.evaluator.eval.call(null,G__29518,G__29519,G__29520));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29013 = (function (){var G__29523 = ctx;
var G__29524 = bindings;
var G__29525 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29523,G__29524,G__29525) : sci.impl.evaluator.eval.call(null,G__29523,G__29524,G__29525));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29014 = (function (){var G__29527 = ctx;
var G__29528 = bindings;
var G__29529 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29527,G__29528,G__29529) : sci.impl.evaluator.eval.call(null,G__29527,G__29528,G__29529));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29015 = (function (){var G__29530 = ctx;
var G__29531 = bindings;
var G__29532 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29530,G__29531,G__29532) : sci.impl.evaluator.eval.call(null,G__29530,G__29531,G__29532));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29016 = (function (){var G__29533 = ctx;
var G__29534 = bindings;
var G__29535 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29533,G__29534,G__29535) : sci.impl.evaluator.eval.call(null,G__29533,G__29534,G__29535));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29017 = (function (){var G__29536 = ctx;
var G__29537 = bindings;
var G__29538 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29536,G__29537,G__29538) : sci.impl.evaluator.eval.call(null,G__29536,G__29537,G__29538));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29018 = (function (){var G__29539 = ctx;
var G__29540 = bindings;
var G__29541 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29539,G__29540,G__29541) : sci.impl.evaluator.eval.call(null,G__29539,G__29540,G__29541));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29019 = (function (){var G__29542 = ctx;
var G__29543 = bindings;
var G__29544 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29542,G__29543,G__29544) : sci.impl.evaluator.eval.call(null,G__29542,G__29543,G__29544));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29020 = (function (){var G__29545 = ctx;
var G__29546 = bindings;
var G__29547 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29545,G__29546,G__29547) : sci.impl.evaluator.eval.call(null,G__29545,G__29546,G__29547));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29021 = (function (){var G__29548 = ctx;
var G__29549 = bindings;
var G__29550 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29548,G__29549,G__29550) : sci.impl.evaluator.eval.call(null,G__29548,G__29549,G__29550));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29022 = (function (){var G__29551 = ctx;
var G__29552 = bindings;
var G__29553 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29551,G__29552,G__29553) : sci.impl.evaluator.eval.call(null,G__29551,G__29552,G__29553));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg29023 = (function (){var G__29554 = ctx;
var G__29555 = bindings;
var G__29556 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29554,G__29555,G__29556) : sci.impl.evaluator.eval.call(null,G__29554,G__29555,G__29556));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg29009,arg29010,arg29011,arg29012,arg29013,arg29014,arg29015,arg29016,arg29017,arg29018,arg29019,arg29020,arg29021,arg29022,arg29023) : f.call(null,arg29009,arg29010,arg29011,arg29012,arg29013,arg29014,arg29015,arg29016,arg29017,arg29018,arg29019,arg29020,arg29021,arg29022,arg29023));

break;
case (16):
var arg29024 = (function (){var G__29558 = ctx;
var G__29559 = bindings;
var G__29560 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29558,G__29559,G__29560) : sci.impl.evaluator.eval.call(null,G__29558,G__29559,G__29560));
})();
var args__$1 = cljs.core.rest(args);
var arg29025 = (function (){var G__29561 = ctx;
var G__29562 = bindings;
var G__29563 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29561,G__29562,G__29563) : sci.impl.evaluator.eval.call(null,G__29561,G__29562,G__29563));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29026 = (function (){var G__29564 = ctx;
var G__29565 = bindings;
var G__29566 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29564,G__29565,G__29566) : sci.impl.evaluator.eval.call(null,G__29564,G__29565,G__29566));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29027 = (function (){var G__29568 = ctx;
var G__29569 = bindings;
var G__29570 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29568,G__29569,G__29570) : sci.impl.evaluator.eval.call(null,G__29568,G__29569,G__29570));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29028 = (function (){var G__29575 = ctx;
var G__29576 = bindings;
var G__29577 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29575,G__29576,G__29577) : sci.impl.evaluator.eval.call(null,G__29575,G__29576,G__29577));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29029 = (function (){var G__29578 = ctx;
var G__29579 = bindings;
var G__29580 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29578,G__29579,G__29580) : sci.impl.evaluator.eval.call(null,G__29578,G__29579,G__29580));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29030 = (function (){var G__29587 = ctx;
var G__29588 = bindings;
var G__29589 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29587,G__29588,G__29589) : sci.impl.evaluator.eval.call(null,G__29587,G__29588,G__29589));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29031 = (function (){var G__29590 = ctx;
var G__29591 = bindings;
var G__29592 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29590,G__29591,G__29592) : sci.impl.evaluator.eval.call(null,G__29590,G__29591,G__29592));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29032 = (function (){var G__29593 = ctx;
var G__29594 = bindings;
var G__29595 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29593,G__29594,G__29595) : sci.impl.evaluator.eval.call(null,G__29593,G__29594,G__29595));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29033 = (function (){var G__29596 = ctx;
var G__29597 = bindings;
var G__29598 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29596,G__29597,G__29598) : sci.impl.evaluator.eval.call(null,G__29596,G__29597,G__29598));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29034 = (function (){var G__29599 = ctx;
var G__29600 = bindings;
var G__29601 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29599,G__29600,G__29601) : sci.impl.evaluator.eval.call(null,G__29599,G__29600,G__29601));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29035 = (function (){var G__29602 = ctx;
var G__29603 = bindings;
var G__29604 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29602,G__29603,G__29604) : sci.impl.evaluator.eval.call(null,G__29602,G__29603,G__29604));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29036 = (function (){var G__29606 = ctx;
var G__29607 = bindings;
var G__29608 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29606,G__29607,G__29608) : sci.impl.evaluator.eval.call(null,G__29606,G__29607,G__29608));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29037 = (function (){var G__29609 = ctx;
var G__29610 = bindings;
var G__29611 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29609,G__29610,G__29611) : sci.impl.evaluator.eval.call(null,G__29609,G__29610,G__29611));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg29038 = (function (){var G__29612 = ctx;
var G__29613 = bindings;
var G__29614 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29612,G__29613,G__29614) : sci.impl.evaluator.eval.call(null,G__29612,G__29613,G__29614));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg29039 = (function (){var G__29619 = ctx;
var G__29620 = bindings;
var G__29621 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29619,G__29620,G__29621) : sci.impl.evaluator.eval.call(null,G__29619,G__29620,G__29621));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg29024,arg29025,arg29026,arg29027,arg29028,arg29029,arg29030,arg29031,arg29032,arg29033,arg29034,arg29035,arg29036,arg29037,arg29038,arg29039) : f.call(null,arg29024,arg29025,arg29026,arg29027,arg29028,arg29029,arg29030,arg29031,arg29032,arg29033,arg29034,arg29035,arg29036,arg29037,arg29038,arg29039));

break;
case (17):
var arg29040 = (function (){var G__29622 = ctx;
var G__29623 = bindings;
var G__29624 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29622,G__29623,G__29624) : sci.impl.evaluator.eval.call(null,G__29622,G__29623,G__29624));
})();
var args__$1 = cljs.core.rest(args);
var arg29041 = (function (){var G__29625 = ctx;
var G__29626 = bindings;
var G__29627 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29625,G__29626,G__29627) : sci.impl.evaluator.eval.call(null,G__29625,G__29626,G__29627));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29042 = (function (){var G__29628 = ctx;
var G__29629 = bindings;
var G__29630 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29628,G__29629,G__29630) : sci.impl.evaluator.eval.call(null,G__29628,G__29629,G__29630));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29043 = (function (){var G__29631 = ctx;
var G__29632 = bindings;
var G__29633 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29631,G__29632,G__29633) : sci.impl.evaluator.eval.call(null,G__29631,G__29632,G__29633));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29044 = (function (){var G__29634 = ctx;
var G__29635 = bindings;
var G__29636 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29634,G__29635,G__29636) : sci.impl.evaluator.eval.call(null,G__29634,G__29635,G__29636));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29045 = (function (){var G__29637 = ctx;
var G__29638 = bindings;
var G__29639 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29637,G__29638,G__29639) : sci.impl.evaluator.eval.call(null,G__29637,G__29638,G__29639));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29046 = (function (){var G__29641 = ctx;
var G__29642 = bindings;
var G__29643 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29641,G__29642,G__29643) : sci.impl.evaluator.eval.call(null,G__29641,G__29642,G__29643));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29047 = (function (){var G__29644 = ctx;
var G__29645 = bindings;
var G__29646 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29644,G__29645,G__29646) : sci.impl.evaluator.eval.call(null,G__29644,G__29645,G__29646));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29048 = (function (){var G__29647 = ctx;
var G__29648 = bindings;
var G__29649 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29647,G__29648,G__29649) : sci.impl.evaluator.eval.call(null,G__29647,G__29648,G__29649));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29049 = (function (){var G__29650 = ctx;
var G__29651 = bindings;
var G__29652 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29650,G__29651,G__29652) : sci.impl.evaluator.eval.call(null,G__29650,G__29651,G__29652));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29050 = (function (){var G__29653 = ctx;
var G__29654 = bindings;
var G__29655 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29653,G__29654,G__29655) : sci.impl.evaluator.eval.call(null,G__29653,G__29654,G__29655));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29051 = (function (){var G__29656 = ctx;
var G__29657 = bindings;
var G__29658 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29656,G__29657,G__29658) : sci.impl.evaluator.eval.call(null,G__29656,G__29657,G__29658));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29052 = (function (){var G__29659 = ctx;
var G__29660 = bindings;
var G__29661 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29659,G__29660,G__29661) : sci.impl.evaluator.eval.call(null,G__29659,G__29660,G__29661));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29053 = (function (){var G__29662 = ctx;
var G__29663 = bindings;
var G__29664 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29662,G__29663,G__29664) : sci.impl.evaluator.eval.call(null,G__29662,G__29663,G__29664));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg29054 = (function (){var G__29665 = ctx;
var G__29666 = bindings;
var G__29667 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29665,G__29666,G__29667) : sci.impl.evaluator.eval.call(null,G__29665,G__29666,G__29667));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg29055 = (function (){var G__29668 = ctx;
var G__29669 = bindings;
var G__29670 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29668,G__29669,G__29670) : sci.impl.evaluator.eval.call(null,G__29668,G__29669,G__29670));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg29056 = (function (){var G__29671 = ctx;
var G__29672 = bindings;
var G__29673 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29671,G__29672,G__29673) : sci.impl.evaluator.eval.call(null,G__29671,G__29672,G__29673));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg29040,arg29041,arg29042,arg29043,arg29044,arg29045,arg29046,arg29047,arg29048,arg29049,arg29050,arg29051,arg29052,arg29053,arg29054,arg29055,arg29056) : f.call(null,arg29040,arg29041,arg29042,arg29043,arg29044,arg29045,arg29046,arg29047,arg29048,arg29049,arg29050,arg29051,arg29052,arg29053,arg29054,arg29055,arg29056));

break;
case (18):
var arg29057 = (function (){var G__29675 = ctx;
var G__29676 = bindings;
var G__29677 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29675,G__29676,G__29677) : sci.impl.evaluator.eval.call(null,G__29675,G__29676,G__29677));
})();
var args__$1 = cljs.core.rest(args);
var arg29058 = (function (){var G__29678 = ctx;
var G__29679 = bindings;
var G__29680 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29678,G__29679,G__29680) : sci.impl.evaluator.eval.call(null,G__29678,G__29679,G__29680));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29059 = (function (){var G__29681 = ctx;
var G__29682 = bindings;
var G__29683 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29681,G__29682,G__29683) : sci.impl.evaluator.eval.call(null,G__29681,G__29682,G__29683));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29060 = (function (){var G__29684 = ctx;
var G__29685 = bindings;
var G__29686 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29684,G__29685,G__29686) : sci.impl.evaluator.eval.call(null,G__29684,G__29685,G__29686));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29061 = (function (){var G__29687 = ctx;
var G__29688 = bindings;
var G__29689 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29687,G__29688,G__29689) : sci.impl.evaluator.eval.call(null,G__29687,G__29688,G__29689));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29062 = (function (){var G__29690 = ctx;
var G__29691 = bindings;
var G__29692 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29690,G__29691,G__29692) : sci.impl.evaluator.eval.call(null,G__29690,G__29691,G__29692));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29063 = (function (){var G__29693 = ctx;
var G__29694 = bindings;
var G__29695 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29693,G__29694,G__29695) : sci.impl.evaluator.eval.call(null,G__29693,G__29694,G__29695));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29064 = (function (){var G__29696 = ctx;
var G__29697 = bindings;
var G__29698 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29696,G__29697,G__29698) : sci.impl.evaluator.eval.call(null,G__29696,G__29697,G__29698));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29065 = (function (){var G__29700 = ctx;
var G__29701 = bindings;
var G__29702 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29700,G__29701,G__29702) : sci.impl.evaluator.eval.call(null,G__29700,G__29701,G__29702));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29066 = (function (){var G__29703 = ctx;
var G__29704 = bindings;
var G__29705 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29703,G__29704,G__29705) : sci.impl.evaluator.eval.call(null,G__29703,G__29704,G__29705));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29067 = (function (){var G__29711 = ctx;
var G__29712 = bindings;
var G__29713 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29711,G__29712,G__29713) : sci.impl.evaluator.eval.call(null,G__29711,G__29712,G__29713));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29068 = (function (){var G__29714 = ctx;
var G__29715 = bindings;
var G__29716 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29714,G__29715,G__29716) : sci.impl.evaluator.eval.call(null,G__29714,G__29715,G__29716));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29069 = (function (){var G__29717 = ctx;
var G__29718 = bindings;
var G__29719 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29717,G__29718,G__29719) : sci.impl.evaluator.eval.call(null,G__29717,G__29718,G__29719));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29070 = (function (){var G__29720 = ctx;
var G__29721 = bindings;
var G__29722 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29720,G__29721,G__29722) : sci.impl.evaluator.eval.call(null,G__29720,G__29721,G__29722));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg29071 = (function (){var G__29724 = ctx;
var G__29725 = bindings;
var G__29726 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29724,G__29725,G__29726) : sci.impl.evaluator.eval.call(null,G__29724,G__29725,G__29726));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg29072 = (function (){var G__29727 = ctx;
var G__29728 = bindings;
var G__29729 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29727,G__29728,G__29729) : sci.impl.evaluator.eval.call(null,G__29727,G__29728,G__29729));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg29073 = (function (){var G__29730 = ctx;
var G__29731 = bindings;
var G__29732 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29730,G__29731,G__29732) : sci.impl.evaluator.eval.call(null,G__29730,G__29731,G__29732));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg29074 = (function (){var G__29733 = ctx;
var G__29734 = bindings;
var G__29735 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29733,G__29734,G__29735) : sci.impl.evaluator.eval.call(null,G__29733,G__29734,G__29735));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg29057,arg29058,arg29059,arg29060,arg29061,arg29062,arg29063,arg29064,arg29065,arg29066,arg29067,arg29068,arg29069,arg29070,arg29071,arg29072,arg29073,arg29074) : f.call(null,arg29057,arg29058,arg29059,arg29060,arg29061,arg29062,arg29063,arg29064,arg29065,arg29066,arg29067,arg29068,arg29069,arg29070,arg29071,arg29072,arg29073,arg29074));

break;
case (19):
var arg29075 = (function (){var G__29736 = ctx;
var G__29737 = bindings;
var G__29738 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29736,G__29737,G__29738) : sci.impl.evaluator.eval.call(null,G__29736,G__29737,G__29738));
})();
var args__$1 = cljs.core.rest(args);
var arg29076 = (function (){var G__29739 = ctx;
var G__29740 = bindings;
var G__29741 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29739,G__29740,G__29741) : sci.impl.evaluator.eval.call(null,G__29739,G__29740,G__29741));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29077 = (function (){var G__29742 = ctx;
var G__29743 = bindings;
var G__29744 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29742,G__29743,G__29744) : sci.impl.evaluator.eval.call(null,G__29742,G__29743,G__29744));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29078 = (function (){var G__29745 = ctx;
var G__29746 = bindings;
var G__29747 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29745,G__29746,G__29747) : sci.impl.evaluator.eval.call(null,G__29745,G__29746,G__29747));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29079 = (function (){var G__29748 = ctx;
var G__29749 = bindings;
var G__29750 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29748,G__29749,G__29750) : sci.impl.evaluator.eval.call(null,G__29748,G__29749,G__29750));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29080 = (function (){var G__29756 = ctx;
var G__29757 = bindings;
var G__29758 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29756,G__29757,G__29758) : sci.impl.evaluator.eval.call(null,G__29756,G__29757,G__29758));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29081 = (function (){var G__29761 = ctx;
var G__29762 = bindings;
var G__29763 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29761,G__29762,G__29763) : sci.impl.evaluator.eval.call(null,G__29761,G__29762,G__29763));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29082 = (function (){var G__29764 = ctx;
var G__29765 = bindings;
var G__29766 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29764,G__29765,G__29766) : sci.impl.evaluator.eval.call(null,G__29764,G__29765,G__29766));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29083 = (function (){var G__29767 = ctx;
var G__29768 = bindings;
var G__29769 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29767,G__29768,G__29769) : sci.impl.evaluator.eval.call(null,G__29767,G__29768,G__29769));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29084 = (function (){var G__29770 = ctx;
var G__29771 = bindings;
var G__29772 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29770,G__29771,G__29772) : sci.impl.evaluator.eval.call(null,G__29770,G__29771,G__29772));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29085 = (function (){var G__29775 = ctx;
var G__29776 = bindings;
var G__29777 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29775,G__29776,G__29777) : sci.impl.evaluator.eval.call(null,G__29775,G__29776,G__29777));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29086 = (function (){var G__29779 = ctx;
var G__29780 = bindings;
var G__29781 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29779,G__29780,G__29781) : sci.impl.evaluator.eval.call(null,G__29779,G__29780,G__29781));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29087 = (function (){var G__29782 = ctx;
var G__29783 = bindings;
var G__29784 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29782,G__29783,G__29784) : sci.impl.evaluator.eval.call(null,G__29782,G__29783,G__29784));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29088 = (function (){var G__29786 = ctx;
var G__29787 = bindings;
var G__29788 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29786,G__29787,G__29788) : sci.impl.evaluator.eval.call(null,G__29786,G__29787,G__29788));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg29089 = (function (){var G__29789 = ctx;
var G__29790 = bindings;
var G__29791 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29789,G__29790,G__29791) : sci.impl.evaluator.eval.call(null,G__29789,G__29790,G__29791));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg29090 = (function (){var G__29792 = ctx;
var G__29793 = bindings;
var G__29794 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29792,G__29793,G__29794) : sci.impl.evaluator.eval.call(null,G__29792,G__29793,G__29794));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg29091 = (function (){var G__29795 = ctx;
var G__29796 = bindings;
var G__29797 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29795,G__29796,G__29797) : sci.impl.evaluator.eval.call(null,G__29795,G__29796,G__29797));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg29092 = (function (){var G__29798 = ctx;
var G__29799 = bindings;
var G__29800 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29798,G__29799,G__29800) : sci.impl.evaluator.eval.call(null,G__29798,G__29799,G__29800));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg29093 = (function (){var G__29801 = ctx;
var G__29802 = bindings;
var G__29803 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29801,G__29802,G__29803) : sci.impl.evaluator.eval.call(null,G__29801,G__29802,G__29803));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg29075,arg29076,arg29077,arg29078,arg29079,arg29080,arg29081,arg29082,arg29083,arg29084,arg29085,arg29086,arg29087,arg29088,arg29089,arg29090,arg29091,arg29092,arg29093) : f.call(null,arg29075,arg29076,arg29077,arg29078,arg29079,arg29080,arg29081,arg29082,arg29083,arg29084,arg29085,arg29086,arg29087,arg29088,arg29089,arg29090,arg29091,arg29092,arg29093));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28480_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__28480_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__28480_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,bindings,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,bindings) : f.call(null,ctx,bindings));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
if((((expr == null))?false:(((!((expr == null))))?(((((expr.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === expr.cljs$core$IMap$))))?true:(((!expr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr)))){
return sci.impl.evaluator.eval_map(ctx,bindings,expr);
} else {
return expr;

}
}
}
}catch (e29805){if((e29805 instanceof Error)){
var e = e29805;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,expr);
} else {
throw e29805;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
