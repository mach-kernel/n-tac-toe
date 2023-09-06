goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28714 = cljs.core.get_global_hierarchy;
return (fexpr__28714.cljs$core$IFn$_invoke$arity$0 ? fexpr__28714.cljs$core$IFn$_invoke$arity$0() : fexpr__28714.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__28734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__28734.cljs$core$IFn$_invoke$arity$1 ? fexpr__28734.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__28734.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28771 = cljs.core.get_global_hierarchy;
return (fexpr__28771.cljs$core$IFn$_invoke$arity$0 ? fexpr__28771.cljs$core$IFn$_invoke$arity$0() : fexpr__28771.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28791 = cljs.core.get_global_hierarchy;
return (fexpr__28791.cljs$core$IFn$_invoke$arity$0 ? fexpr__28791.cljs$core$IFn$_invoke$arity$0() : fexpr__28791.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__28856 = null;
var G__28856__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__28795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__28795.cljs$core$IFn$_invoke$arity$2 ? fexpr__28795.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__28795.call(null,ref,f));
});
var G__28856__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__28797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__28797.cljs$core$IFn$_invoke$arity$3 ? fexpr__28797.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__28797.call(null,ref,f,a1));
});
var G__28856__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__28798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__28798.cljs$core$IFn$_invoke$arity$4 ? fexpr__28798.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__28798.call(null,ref,f,a1,a2));
});
var G__28856__5 = (function() { 
var G__28857__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__28857 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__28858__i = 0, G__28858__a = new Array(arguments.length -  4);
while (G__28858__i < G__28858__a.length) {G__28858__a[G__28858__i] = arguments[G__28858__i + 4]; ++G__28858__i;}
  args = new cljs.core.IndexedSeq(G__28858__a,0,null);
} 
return G__28857__delegate.call(this,ref,f,a1,a2,args);};
G__28857.cljs$lang$maxFixedArity = 4;
G__28857.cljs$lang$applyTo = (function (arglist__28859){
var ref = cljs.core.first(arglist__28859);
arglist__28859 = cljs.core.next(arglist__28859);
var f = cljs.core.first(arglist__28859);
arglist__28859 = cljs.core.next(arglist__28859);
var a1 = cljs.core.first(arglist__28859);
arglist__28859 = cljs.core.next(arglist__28859);
var a2 = cljs.core.first(arglist__28859);
var args = cljs.core.rest(arglist__28859);
return G__28857__delegate(ref,f,a1,a2,args);
});
G__28857.cljs$core$IFn$_invoke$arity$variadic = G__28857__delegate;
return G__28857;
})()
;
G__28856 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__28856__2.call(this,ref,f);
case 3:
return G__28856__3.call(this,ref,f,a1);
case 4:
return G__28856__4.call(this,ref,f,a1,a2);
default:
var G__28860 = null;
if (arguments.length > 4) {
var G__28861__i = 0, G__28861__a = new Array(arguments.length -  4);
while (G__28861__i < G__28861__a.length) {G__28861__a[G__28861__i] = arguments[G__28861__i + 4]; ++G__28861__i;}
G__28860 = new cljs.core.IndexedSeq(G__28861__a,0,null);
}
return G__28856__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__28860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28856.cljs$lang$maxFixedArity = 4;
G__28856.cljs$lang$applyTo = G__28856__5.cljs$lang$applyTo;
G__28856.cljs$core$IFn$_invoke$arity$2 = G__28856__2;
G__28856.cljs$core$IFn$_invoke$arity$3 = G__28856__3;
G__28856.cljs$core$IFn$_invoke$arity$4 = G__28856__4;
G__28856.cljs$core$IFn$_invoke$arity$variadic = G__28856__5.cljs$core$IFn$_invoke$arity$variadic;
return G__28856;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__28824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__28824.cljs$core$IFn$_invoke$arity$2 ? fexpr__28824.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__28824.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__28865__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__28865 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__28866__i = 0, G__28866__a = new Array(arguments.length -  2);
while (G__28866__i < G__28866__a.length) {G__28866__a[G__28866__i] = arguments[G__28866__i + 2]; ++G__28866__i;}
  args = new cljs.core.IndexedSeq(G__28866__a,0,null);
} 
return G__28865__delegate.call(this,ref,f,args);};
G__28865.cljs$lang$maxFixedArity = 2;
G__28865.cljs$lang$applyTo = (function (arglist__28867){
var ref = cljs.core.first(arglist__28867);
arglist__28867 = cljs.core.next(arglist__28867);
var f = cljs.core.first(arglist__28867);
var args = cljs.core.rest(arglist__28867);
return G__28865__delegate(ref,f,args);
});
G__28865.cljs$core$IFn$_invoke$arity$variadic = G__28865__delegate;
return G__28865;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28868 = arguments.length;
var i__5770__auto___28870 = (0);
while(true){
if((i__5770__auto___28870 < len__5769__auto___28868)){
args__5775__auto__.push((arguments[i__5770__auto___28870]));

var G__28871 = (i__5770__auto___28870 + (1));
i__5770__auto___28870 = G__28871;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq28846){
var G__28847 = cljs.core.first(seq28846);
var seq28846__$1 = cljs.core.next(seq28846);
var G__28848 = cljs.core.first(seq28846__$1);
var seq28846__$2 = cljs.core.next(seq28846__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28847,G__28848,seq28846__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
