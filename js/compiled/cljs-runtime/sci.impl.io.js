goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__28712 = arguments.length;
switch (G__28712) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__28715 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__28716 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__28716);

try{var G__28720 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__28720);

return G__28720;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__28715);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__28722 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__28723 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__28723);

try{var G__28725 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__28725);

return G__28725;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__28722);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__28726 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__28727 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__28727);

try{var G__28730 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__28730);

return G__28730;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__28726);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__28732 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__28733 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__28733);

try{var G__28735 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__28735);

return G__28735;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__28732);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__28742 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__28743 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28743);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28742);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29262 = arguments.length;
var i__5770__auto___29263 = (0);
while(true){
if((i__5770__auto___29263 < len__5769__auto___29262)){
args__5775__auto__.push((arguments[i__5770__auto___29263]));

var G__29267 = (i__5770__auto___29263 + (1));
i__5770__auto___29263 = G__29267;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__28748 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__28749 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28750 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28751 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28752 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28753 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28754 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__28755 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__28756 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28757 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28758 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28759 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28760 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28761 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28755);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28756);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28757);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28758);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28759);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28760);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28761);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28754);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28753);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28752);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28751);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28750);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28749);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28748);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq28744){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28744));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__28766 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__28767 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28767);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28766);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29279 = arguments.length;
var i__5770__auto___29280 = (0);
while(true){
if((i__5770__auto___29280 < len__5769__auto___29279)){
args__5775__auto__.push((arguments[i__5770__auto___29280]));

var G__29281 = (i__5770__auto___29280 + (1));
i__5770__auto___29280 = G__29281;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__28779 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28780 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28781 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28782 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28783 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28784 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__28785 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28786 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28787 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28788 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28789 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28790 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28785);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28786);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28787);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28788);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28789);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28790);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28784);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28783);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28782);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28781);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28780);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28779);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq28774){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28774));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29282 = arguments.length;
var i__5770__auto___29283 = (0);
while(true){
if((i__5770__auto___29283 < len__5769__auto___29282)){
args__5775__auto__.push((arguments[i__5770__auto___29283]));

var G__29284 = (i__5770__auto___29283 + (1));
i__5770__auto___29283 = G__29284;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__28800 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__28801 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28802 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28803 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28804 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28805 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28806 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__28807 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__28808 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28809 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28810 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28811 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28812 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28813 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28807);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28808);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28809);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28810);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28811);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28812);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28813);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28806);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28805);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28804);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28803);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28802);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28801);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28800);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq28793){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28793));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29367 = arguments.length;
var i__5770__auto___29368 = (0);
while(true){
if((i__5770__auto___29368 < len__5769__auto___29367)){
args__5775__auto__.push((arguments[i__5770__auto___29368]));

var G__29403 = (i__5770__auto___29368 + (1));
i__5770__auto___29368 = G__29403;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__28834 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28835 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28836 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28837 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28838 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28839 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__28840 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28841 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28842 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28843 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28844 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28845 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28840);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28841);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28842);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28843);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28844);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28845);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28839);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28838);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28837);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28836);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28835);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28834);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq28828){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28828));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29450 = arguments.length;
var i__5770__auto___29451 = (0);
while(true){
if((i__5770__auto___29451 < len__5769__auto___29450)){
args__5775__auto__.push((arguments[i__5770__auto___29451]));

var G__29455 = (i__5770__auto___29451 + (1));
i__5770__auto___29451 = G__29455;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__28872 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__28873 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28874 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28875 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28876 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28877 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__28878 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__28879 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28880 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__28881 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28882 = null;
var _STAR_print_newline_STAR__temp_val__28883 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28878);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28879);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28880);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28881);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28882);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28883);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28877);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28876);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28875);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28874);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28873);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28872);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq28869){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28869));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29466 = arguments.length;
var i__5770__auto___29467 = (0);
while(true){
if((i__5770__auto___29467 < len__5769__auto___29466)){
args__5775__auto__.push((arguments[i__5770__auto___29467]));

var G__29471 = (i__5770__auto___29467 + (1));
i__5770__auto___29467 = G__29471;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__28889 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28890 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28891 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28892 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28893 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28894 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__28895 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28896 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28897 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28898 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28899 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28900 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28895);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28896);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28897);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28898);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28899);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28900);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28894);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28893);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28892);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28891);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28890);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28889);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq28887){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28887));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29487 = arguments.length;
var i__5770__auto___29488 = (0);
while(true){
if((i__5770__auto___29488 < len__5769__auto___29487)){
args__5775__auto__.push((arguments[i__5770__auto___29488]));

var G__29492 = (i__5770__auto___29488 + (1));
i__5770__auto___29488 = G__29492;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__29101 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__29102 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__29103 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__29104 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__29105 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__29106 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__29107 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__29108 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__29109 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__29110 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__29111 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__29112 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__29113 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__29114 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29108);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__29109);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__29110);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__29111);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__29112);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__29113);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29114);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29107);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__29106);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__29105);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__29104);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__29103);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__29102);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29101);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq29094){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29094));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29505 = arguments.length;
var i__5770__auto___29509 = (0);
while(true){
if((i__5770__auto___29509 < len__5769__auto___29505)){
args__5775__auto__.push((arguments[i__5770__auto___29509]));

var G__29510 = (i__5770__auto___29509 + (1));
i__5770__auto___29509 = G__29510;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__29128__auto__","s__29128__auto__",-1146685389,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__29130__auto__","x__29130__auto__",-1008761337,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__29128__auto__","s__29128__auto__",-1146685389,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__29130__auto__","x__29130__auto__",-1008761337,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__29128__auto__","s__29128__auto__",-1146685389,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq29133){
var G__29137 = cljs.core.first(seq29133);
var seq29133__$1 = cljs.core.next(seq29133);
var G__29138 = cljs.core.first(seq29133__$1);
var seq29133__$2 = cljs.core.next(seq29133__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29137,G__29138,seq29133__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
