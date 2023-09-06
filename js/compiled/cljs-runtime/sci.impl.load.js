goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__27794){
var vec__27795 = p__27794;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27795,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27795,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = (k instanceof cljs.core.Symbol);
if(and__5043__auto__){
var and__5043__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__5043__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__27829){
var map__27835 = p__27829;
var map__27835__$1 = cljs.core.__destructure_map(map__27835);
var _parsed_libspec = map__27835__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27835__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27835__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27835__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27835__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27835__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27835__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5045__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5045__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5802__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__27910 = temp__5802__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27910,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27910,(1),null);
return v;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5804__auto___28191 = (function (){var G__27924 = the_loaded_ns;
var G__27924__$1 = (((G__27924 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27924));
var G__27924__$2 = (((G__27924__$1 == null))?null:cljs.core.meta(G__27924__$1));
if((G__27924__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__27924__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto___28191)){
var on_loaded_28193 = temp__5804__auto___28191;
var G__27929_28194 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_28193.cljs$core$IFn$_invoke$arity$1 ? on_loaded_28193.cljs$core$IFn$_invoke$arity$1(G__27929_28194) : on_loaded_28193.call(null,G__27929_28194));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var map__27938 = opts;
var map__27938__$1 = cljs.core.__destructure_map(map__27938);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27938__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27938__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var uberscript = new cljs.core.Keyword(null,"uberscript","uberscript",701571092).cljs$core$IFn$_invoke$arity$1(ctx);
var reload_STAR_ = (function (){var or__5045__auto__ = reload;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = reload_all;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return uberscript;
}
}
}
})();
var temp__5802__auto___28195 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5802__auto___28195)){
var the_loaded_ns_28196 = temp__5802__auto___28195;
var loading_28197 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5043__auto__ = loading_28197;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib)))) && (cljs.core.nat_int_QMARK_(loading_28197.indexOf(lib))));
} else {
return and__5043__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_28197,lib);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_28196,lib,opts));
}
} else {
var temp__5802__auto___28202__$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5802__auto___28202__$1)){
var load_fn_28203 = temp__5802__auto___28202__$1;
var temp__5802__auto___28204__$2 = (function (){var G__27956 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5045__auto__ = reload;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_28203.cljs$core$IFn$_invoke$arity$1 ? load_fn_28203.cljs$core$IFn$_invoke$arity$1(G__27956) : load_fn_28203.call(null,G__27956));
})();
if(cljs.core.truth_(temp__5802__auto___28204__$2)){
var map__27957_28205 = temp__5802__auto___28204__$2;
var map__27957_28206__$1 = cljs.core.__destructure_map(map__27957_28205);
var file_28207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27957_28206__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_28208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27957_28206__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var ctx_28210__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib);
}
}));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file_28207]));

try{var fexpr__27984_28212 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__27984_28212.cljs$core$IFn$_invoke$arity$2 ? fexpr__27984_28212.cljs$core$IFn$_invoke$arity$2(ctx_28210__$1,source_28208) : fexpr__27984_28212.call(null,ctx_28210__$1,source_28208));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e27963){if((e27963 instanceof Error)){
var e_28213 = e27963;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_28213;
} else {
throw e27963;

}
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__5045__auto___28214 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5804__auto__)){
var the_loaded_ns = temp__5804__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5045__auto___28214)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib);

return null;
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28216 = arguments.length;
var i__5770__auto___28217 = (0);
while(true){
if((i__5770__auto___28217 < len__5769__auto___28216)){
args__5775__auto__.push((arguments[i__5770__auto___28217]));

var G__28218 = (i__5770__auto___28217 + (1));
i__5770__auto___28217 = G__28218;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5043__auto__ = prefix;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5043__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq27988){
var G__27989 = cljs.core.first(seq27988);
var seq27988__$1 = cljs.core.next(seq27988);
var G__27990 = cljs.core.first(seq27988__$1);
var seq27988__$2 = cljs.core.next(seq27988__$1);
var G__27991 = cljs.core.first(seq27988__$2);
var seq27988__$3 = cljs.core.next(seq27988__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27989,G__27990,G__27991,seq27988__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_28222 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_28223 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_28222,flags));
if(unsupported_28223){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_28223)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__28039 = cljs.core.seq(args_STAR___$1);
var chunk__28040 = null;
var count__28041 = (0);
var i__28042 = (0);
while(true){
if((i__28042 < count__28041)){
var arg = chunk__28040.cljs$core$IIndexed$_nth$arity$2(null,i__28042);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__28078_28226 = arg;
var seq__28079_28227 = cljs.core.seq(vec__28078_28226);
var first__28080_28228 = cljs.core.first(seq__28079_28227);
var seq__28079_28229__$1 = cljs.core.next(seq__28079_28227);
var prefix_28230 = first__28080_28228;
var args_STAR__28231__$2 = seq__28079_28229__$1;
if((prefix_28230 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__28082_28232 = cljs.core.seq(args_STAR__28231__$2);
var chunk__28083_28234 = null;
var count__28084_28235 = (0);
var i__28085_28236 = (0);
while(true){
if((i__28085_28236 < count__28084_28235)){
var arg_28237__$1 = chunk__28083_28234.cljs$core$IIndexed$_nth$arity$2(null,i__28085_28236);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_28230,sci.impl.load.prependss(arg_28237__$1,opts));


var G__28238 = seq__28082_28232;
var G__28239 = chunk__28083_28234;
var G__28240 = count__28084_28235;
var G__28241 = (i__28085_28236 + (1));
seq__28082_28232 = G__28238;
chunk__28083_28234 = G__28239;
count__28084_28235 = G__28240;
i__28085_28236 = G__28241;
continue;
} else {
var temp__5804__auto___28242 = cljs.core.seq(seq__28082_28232);
if(temp__5804__auto___28242){
var seq__28082_28243__$1 = temp__5804__auto___28242;
if(cljs.core.chunked_seq_QMARK_(seq__28082_28243__$1)){
var c__5568__auto___28244 = cljs.core.chunk_first(seq__28082_28243__$1);
var G__28245 = cljs.core.chunk_rest(seq__28082_28243__$1);
var G__28246 = c__5568__auto___28244;
var G__28247 = cljs.core.count(c__5568__auto___28244);
var G__28248 = (0);
seq__28082_28232 = G__28245;
chunk__28083_28234 = G__28246;
count__28084_28235 = G__28247;
i__28085_28236 = G__28248;
continue;
} else {
var arg_28249__$1 = cljs.core.first(seq__28082_28243__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_28230,sci.impl.load.prependss(arg_28249__$1,opts));


var G__28251 = cljs.core.next(seq__28082_28243__$1);
var G__28252 = null;
var G__28253 = (0);
var G__28254 = (0);
seq__28082_28232 = G__28251;
chunk__28083_28234 = G__28252;
count__28084_28235 = G__28253;
i__28085_28236 = G__28254;
continue;
}
} else {
}
}
break;
}
}


var G__28255 = seq__28039;
var G__28256 = chunk__28040;
var G__28257 = count__28041;
var G__28258 = (i__28042 + (1));
seq__28039 = G__28255;
chunk__28040 = G__28256;
count__28041 = G__28257;
i__28042 = G__28258;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28039);
if(temp__5804__auto__){
var seq__28039__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28039__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28039__$1);
var G__28259 = cljs.core.chunk_rest(seq__28039__$1);
var G__28260 = c__5568__auto__;
var G__28261 = cljs.core.count(c__5568__auto__);
var G__28262 = (0);
seq__28039 = G__28259;
chunk__28040 = G__28260;
count__28041 = G__28261;
i__28042 = G__28262;
continue;
} else {
var arg = cljs.core.first(seq__28039__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__28097_28264 = arg;
var seq__28098_28265 = cljs.core.seq(vec__28097_28264);
var first__28099_28266 = cljs.core.first(seq__28098_28265);
var seq__28098_28267__$1 = cljs.core.next(seq__28098_28265);
var prefix_28268 = first__28099_28266;
var args_STAR__28269__$2 = seq__28098_28267__$1;
if((prefix_28268 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__28103_28270 = cljs.core.seq(args_STAR__28269__$2);
var chunk__28104_28271 = null;
var count__28105_28272 = (0);
var i__28106_28273 = (0);
while(true){
if((i__28106_28273 < count__28105_28272)){
var arg_28274__$1 = chunk__28104_28271.cljs$core$IIndexed$_nth$arity$2(null,i__28106_28273);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_28268,sci.impl.load.prependss(arg_28274__$1,opts));


var G__28275 = seq__28103_28270;
var G__28276 = chunk__28104_28271;
var G__28277 = count__28105_28272;
var G__28278 = (i__28106_28273 + (1));
seq__28103_28270 = G__28275;
chunk__28104_28271 = G__28276;
count__28105_28272 = G__28277;
i__28106_28273 = G__28278;
continue;
} else {
var temp__5804__auto___28279__$1 = cljs.core.seq(seq__28103_28270);
if(temp__5804__auto___28279__$1){
var seq__28103_28280__$1 = temp__5804__auto___28279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28103_28280__$1)){
var c__5568__auto___28281 = cljs.core.chunk_first(seq__28103_28280__$1);
var G__28285 = cljs.core.chunk_rest(seq__28103_28280__$1);
var G__28286 = c__5568__auto___28281;
var G__28287 = cljs.core.count(c__5568__auto___28281);
var G__28288 = (0);
seq__28103_28270 = G__28285;
chunk__28104_28271 = G__28286;
count__28105_28272 = G__28287;
i__28106_28273 = G__28288;
continue;
} else {
var arg_28290__$1 = cljs.core.first(seq__28103_28280__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_28268,sci.impl.load.prependss(arg_28290__$1,opts));


var G__28291 = cljs.core.next(seq__28103_28280__$1);
var G__28292 = null;
var G__28293 = (0);
var G__28294 = (0);
seq__28103_28270 = G__28291;
chunk__28104_28271 = G__28292;
count__28105_28272 = G__28293;
i__28106_28273 = G__28294;
continue;
}
} else {
}
}
break;
}
}


var G__28295 = cljs.core.next(seq__28039__$1);
var G__28296 = null;
var G__28297 = (0);
var G__28298 = (0);
seq__28039 = G__28295;
chunk__28040 = G__28296;
count__28041 = G__28297;
i__28042 = G__28298;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28299 = arguments.length;
var i__5770__auto___28301 = (0);
while(true){
if((i__5770__auto___28301 < len__5769__auto___28299)){
args__5775__auto__.push((arguments[i__5770__auto___28301]));

var G__28303 = (i__5770__auto___28301 + (1));
i__5770__auto___28301 = G__28303;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq28113){
var G__28114 = cljs.core.first(seq28113);
var seq28113__$1 = cljs.core.next(seq28113);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28114,seq28113__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28308 = arguments.length;
var i__5770__auto___28309 = (0);
while(true){
if((i__5770__auto___28309 < len__5769__auto___28308)){
args__5775__auto__.push((arguments[i__5770__auto___28309]));

var G__28311 = (i__5770__auto___28309 + (1));
i__5770__auto___28309 = G__28311;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq28125){
var G__28126 = cljs.core.first(seq28125);
var seq28125__$1 = cljs.core.next(seq28125);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28126,seq28125__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__28130 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28130,(1),null);
var G__28134_28317 = k;
var G__28134_28318__$1 = (((G__28134_28317 instanceof cljs.core.Keyword))?G__28134_28317.fqn:null);
switch (G__28134_28318__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__28134_28317,G__28134_28318__$1,vec__28130,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__28134_28317,G__28134_28318__$1,vec__28130,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__28134_28317,G__28134_28318__$1,vec__28130,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__28134_28317,G__28134_28318__$1,vec__28130,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__28134_28317,G__28134_28318__$1,vec__28130,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__28134_28317,G__28134_28318__$1,vec__28130,k,v,ns_sym){
return (function (acc,p__28143){
var vec__28144 = p__28143;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28144,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28144,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__28134_28317,G__28134_28318__$1,vec__28130,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__28134_28317,G__28134_28318__$1,vec__28130,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28134_28318__$1)].join('')));

}

var G__28327 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__28327;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5043__auto__ = to_do;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5043__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5045__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28342 = arguments.length;
var i__5770__auto___28344 = (0);
while(true){
if((i__5770__auto___28344 < len__5769__auto___28342)){
args__5775__auto__.push((arguments[i__5770__auto___28344]));

var G__28346 = (i__5770__auto___28344 + (1));
i__5770__auto___28344 = G__28346;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq28152){
var G__28153 = cljs.core.first(seq28152);
var seq28152__$1 = cljs.core.next(seq28152);
var G__28154 = cljs.core.first(seq28152__$1);
var seq28152__$2 = cljs.core.next(seq28152__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28153,G__28154,seq28152__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
