goog.provide('zprint.zprint');
/**
 * Produce a dot string of desired size.
 */
zprint.zprint.dots = (function zprint$zprint$dots(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"."));
});
/**
 * Make a version of conj! that takes multiple arguments.
 */
zprint.zprint.conj_it_BANG_ = (function zprint$zprint$conj_it_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43522 = arguments.length;
var i__5770__auto___43523 = (0);
while(true){
if((i__5770__auto___43523 < len__5769__auto___43522)){
args__5775__auto__.push((arguments[i__5770__auto___43523]));

var G__43524 = (i__5770__auto___43523 + (1));
i__5770__auto___43523 = G__43524;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (to,rest){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,rest);
}));

(zprint.zprint.conj_it_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.zprint.conj_it_BANG_.cljs$lang$applyTo = (function (seq42437){
var G__42439 = cljs.core.first(seq42437);
var seq42437__$1 = cljs.core.next(seq42437);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42439,seq42437__$1);
}));

/**
 * Do split for newlines, instead of using regular expressions.
 *   Maximum split is 2.
 */
zprint.zprint.split_lf_2 = (function zprint$zprint$split_lf_2(s){
var temp__5802__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"\n");
if(cljs.core.truth_(temp__5802__auto__)){
var next_lf = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),next_lf),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(next_lf + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}
});
/**
 * Possibly validate an options map and merge it correctly with the existing
 *   options map.  Validation only happens when the caller says to validate
 *   and the new-map doesn't have :no-validate? true (unless the existing
 *   options map has :force-validate? true).
 *   This is necessary instead of just doing a merge-deep, since
 *   that doesn't get styles and removal done correctly.  Returns
 *   [merged-options-map new-options] or throws an error.
 */
zprint.zprint.internal_config_and_validate = (function zprint$zprint$internal_config_and_validate(var_args){
var G__42443 = arguments.length;
switch (G__42443) {
case 4:
return zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$4 = (function (options,new_map,error_str,validate_QMARK_){
var validate_QMARK___$1 = (cljs.core.truth_(validate_QMARK_)?(cljs.core.truth_(new cljs.core.Keyword(null,"no-validate?","no-validate?",226707798).cljs$core$IFn$_invoke$arity$1(new_map))?(cljs.core.truth_(new cljs.core.Keyword(null,"force-validate?","force-validate?",1416433615).cljs$core$IFn$_invoke$arity$1(options))?new cljs.core.Keyword(null,"validate","validate",-201300827):null):new cljs.core.Keyword(null,"validate","validate",-201300827)):null);
var vec__42444 = zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$5(null,null,options,new_map,validate_QMARK___$1);
var updated_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42444,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42444,(1),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42444,(2),null);
var errors__$1 = (cljs.core.truth_(errors)?["Options resulting from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_str)," had these errors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)].join(''):null);
if((!(cljs.core.empty_QMARK_(errors__$1)))){
throw (new Error(errors__$1));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map,new_map], null);
}
}));

(zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$3 = (function (options,new_map,error_str){
return zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$4(options,new_map,error_str,new cljs.core.Keyword(null,"validate","validate",-201300827));
}));

(zprint.zprint.internal_config_and_validate.cljs$lang$maxFixedArity = 4);

/**
 * Given an option-fn, call it with no arguments to see if it returns its
 *   name.  To be used only in exceptions or other times when performance is
 *   not important, because historically many option-fn's didn't know to do this.
 */
zprint.zprint.option_fn_name = (function zprint$zprint$option_fn_name(option_fn){
try{var option_fn_name = (option_fn.cljs$core$IFn$_invoke$arity$0 ? option_fn.cljs$core$IFn$_invoke$arity$0() : option_fn.call(null));
if(typeof option_fn_name === 'string'){
return [" named '",option_fn_name,"'"].join('');
} else {
return null;
}
}catch (e42447){var e = e42447;
return null;
}});
/**
 * Call zsexpr?, but only if zloc is a :token
 */
zprint.zprint.zsexpr_token_QMARK_ = (function zprint$zprint$zsexpr_token_QMARK_(zloc){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"token","token",-1211463215))){
return (zprint.zfns.zsexpr_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr_QMARK_.call(null,zloc));
} else {
return null;
}
});
/**
 * For the major collections, returns a empty one. Essentially an
 *   implementation of empty for zlocs.
 */
zprint.zprint.empty_coll = (function zprint$zprint$empty_coll(zloc){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"list","list",765357683))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"vector","vector",1902966158))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"set","set",304602554))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"map","map",1371690461))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
}
}
});
/**
 * Given a zloc, do the best we can to get an sexpr out of it.
 */
zprint.zprint.get_sexpr = (function zprint$zprint$get_sexpr(options,zloc){
try{return (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsexpr.call(null,zloc));
}catch (e42450){var e = e42450;
var s = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc));
var new_s = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42448_SHARP_,p2__42449_SHARP_){
return clojure.string.replace(p1__42448_SHARP_,p2__42449_SHARP_,"");
}),s,new cljs.core.Keyword(null,"ignore-if-parse-fails","ignore-if-parse-fails",-31062657).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parse","parse",-1162164619).cljs$core$IFn$_invoke$arity$1(options)));
var sexpr = (function (){try{var n = rewrite_clj.parser.parse_string(clojure.string.trim(new_s));
var new_zloc = rewrite_clj.zip.edn_STAR_.cljs$core$IFn$_invoke$arity$1(n);
var sexpr = (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(new_zloc) : zprint.zfns.zsexpr.call(null,new_zloc));
return sexpr;
}catch (e42451){var e__$1 = e42451;
throw (new Error(["Unable to parse the string '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"' because of '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e__$1),"'.  Consider adding any unallowed elements to"," {:parse {:ignore-if-parse-fails #{ <string> }}}"].join('')));
}})();
return sexpr;
}});
/**
 * Try to get an sexpr of something, and return nil if we can't.
 */
zprint.zprint.get_sexpr_or_nil = (function zprint$zprint$get_sexpr_or_nil(options,zloc){
try{return zprint.zprint.get_sexpr(options,zloc);
}catch (e42455){var e = e42455;
return null;
}});
/**
 * Call an option-fn and return a (possibly) validated map of 
 *   the merged options. Returns [merged-options-map new-options]
 */
zprint.zprint.call_option_fn = (function zprint$zprint$call_option_fn(caller,options,option_fn,zloc){
var sexpr_seq = zprint.zprint.get_sexpr(options,zloc);
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"zloc","zloc",-2123059767),zloc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"caller","caller",-1275362879),caller], 0));
return zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$4(options__$1,(function (){try{var G__42460 = options__$1;
var G__42461 = cljs.core.count(sexpr_seq);
var G__42462 = sexpr_seq;
return (option_fn.cljs$core$IFn$_invoke$arity$3 ? option_fn.cljs$core$IFn$_invoke$arity$3(G__42460,G__42461,G__42462) : option_fn.call(null,G__42460,G__42461,G__42462));
}catch (e42459){var e = e42459;
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide-exception","guide-exception",1029205118).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$1));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"Failure in option-fn:",(function(){throw e})()], 0));
} else {
}

throw (new Error([" When ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(caller)," called an option-fn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.option_fn_name(option_fn))," it failed because: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')));
}})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(caller)," :option-fn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.option_fn_name(option_fn))," called with an sexpr of length ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sexpr_seq))].join(''),new cljs.core.Keyword(null,"validate","validate",-201300827));
});
/**
 * Call an option-fn-first with just the first thing in the zloc, and
 *   then return a validated map of just the new options.
 *   Returns [merge-options-map new-options]
 */
zprint.zprint.call_option_fn_first = (function zprint$zprint$call_option_fn_first(caller,options,option_fn_first,zloc){
var first_sexpr = zprint.zprint.get_sexpr(options,(zprint.zfns.zfirst_sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst_sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst_sexpr.call(null,zloc)));
return zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$4(options,(function (){try{return (option_fn_first.cljs$core$IFn$_invoke$arity$2 ? option_fn_first.cljs$core$IFn$_invoke$arity$2(options,first_sexpr) : option_fn_first.call(null,options,first_sexpr));
}catch (e42463){var e = e42463;
throw (new Error(["When ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(caller)," called an option-fn-first",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.option_fn_name(option_fn_first))," with '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_sexpr),"' failed because: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')));
}})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(caller)," :option-fn-first",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zprint.option_fn_name(option_fn_first))," called with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_sexpr)].join(''),new cljs.core.Keyword(null,"validate","validate",-201300827));
});
/**
 * Given the options map and a caller, look for :guide-debug in the options
 *   map.  It looks like [:caller :depth [:element ...]]  If the caller and 
 *   depth match, return the guide, else nil.
 */
zprint.zprint.guide_debug = (function zprint$zprint$guide_debug(caller,options){
var debug_vector = new cljs.core.Keyword(null,"guide-debug","guide-debug",1517505112).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(debug_vector)){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"guide-debug: caller:",caller,"depth:",new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),"guide:",debug_vector], 0));
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caller,cljs.core.first(debug_vector))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),cljs.core.second(debug_vector))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(debug_vector,(2));
} else {
return null;
}
} else {
return null;
}
});
zprint.zprint.condense = (function zprint$zprint$condense(depth,p__42464,p__42465){
var vec__42467 = p__42464;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42467,(0),null);
var accumulated_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42467,(1),null);
var current_depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42467,(2),null);
var vec__42470 = p__42465;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42470,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42470,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42470,(2),null);
var element = vec__42470;
var new_depth = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"left","left",-399115937)))?(current_depth + (1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"right","right",-452581833)))?(current_depth - (1)):current_depth
));
var accumulating_QMARK_ = (current_depth > depth);
var start_accumulating_QMARK_ = (new_depth > depth);
var new_accumulated_string = ((((accumulating_QMARK_) || (start_accumulating_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(accumulated_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''):accumulated_string);
var next_accumulated_string = ((start_accumulating_QMARK_)?new_accumulated_string:"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((accumulating_QMARK_) && ((!(start_accumulating_QMARK_)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_accumulated_string):((((accumulating_QMARK_) && (start_accumulating_QMARK_)))?out:(((((!(accumulating_QMARK_))) && ((!(start_accumulating_QMARK_)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,element):(((((!(accumulating_QMARK_))) && (start_accumulating_QMARK_)))?out:cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["shouldn't be an else"], 0))
)))),next_accumulated_string,new_depth], null);
});
/**
 * Take a style vec, and condense everything above the given depth.
 */
zprint.zprint.condense_depth = (function zprint$zprint$condense_depth(depth,coll){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.zprint.condense,depth),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"",(1)], null),coll));
});
zprint.zprint.zpmap = (function zprint$zprint$zpmap(var_args){
var G__42477 = arguments.length;
switch (G__42477) {
case 3:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3 = (function (options,f,coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll);
}));

(zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4 = (function (options,f,coll1,coll2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,coll1,coll2);
}));

(zprint.zprint.zpmap.cljs$lang$maxFixedArity = 4);

/**
 * Takes an option map and the return from zfuture.  If the
 *   options map has (:parallel? options) as true, then deref
 *   the value, otherwise just pass it through.
 */
zprint.zprint.zat = (function zprint$zprint$zat(options,value){
return value;
});
zprint.zprint.fzprint_dbg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * Accept a style-vec that we are about to hand to style-lines, and
 *   output it if called for, to aid in debugging.
 */
zprint.zprint.log_lines = (function zprint$zprint$log_lines(p__42480,dbg_output,ind,style_vec){
var map__42481 = p__42480;
var map__42481__$1 = cljs.core.__destructure_map(map__42481);
var options = map__42481__$1;
var dbg_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42481__$1,new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872));
var dbg_indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42481__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778));
var in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42481__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
if(cljs.core.truth_(dbg_print_QMARK_)){
if(cljs.core.truth_(style_vec)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dbg_indent,dbg_output,"--------------","in-hang?",in_hang_QMARK_], 0));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_vec], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dbg_indent,dbg_output,"--------------- no style-vec"], 0));
}
} else {
return null;
}
});
/**
 * Show this thing as a function?
 */
zprint.zprint.showfn_QMARK_ = (function zprint$zprint$showfn_QMARK_(p__42483,f){
var map__42489 = p__42483;
var map__42489__$1 = cljs.core.__destructure_map(map__42489);
var options = map__42489__$1;
var fn_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42489__$1,new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
var color_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42489__$1,new cljs.core.Keyword(null,"color?","color?",-1891974356));
if(cljs.core.truth_((function (){var and__5043__auto__ = color_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!(typeof f === 'string'));
} else {
return and__5043__auto__;
}
})())){
var f_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(f);
var fn_map__$1 = new cljs.core.Keyword(null,"fn-map","fn-map",565481146).cljs$core$IFn$_invoke$arity$1(options);
var or__5045__auto__ = (fn_map__$1.cljs$core$IFn$_invoke$arity$1 ? fn_map__$1.cljs$core$IFn$_invoke$arity$1(f_str) : fn_map__$1.call(null,f_str));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.re_find(/clojure/,f_str);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__5045__auto____$2 = cljs.core.re_find(/clojure/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f))));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var G__42491 = cljs.core.name(f);
return (fn_map__$1.cljs$core$IFn$_invoke$arity$1 ? fn_map__$1.cljs$core$IFn$_invoke$arity$1(G__42491) : fn_map__$1.call(null,G__42491));
}
}catch (e42490){var e = e42490;
return null;
}} else {
return null;
}
}
}
} else {
return null;
}
});
/**
 * Show this thing as a user defined function?  Assumes that we
 *   have already handled any clojure defined functions!
 */
zprint.zprint.show_user_fn_QMARK_ = (function zprint$zprint$show_user_fn_QMARK_(p__42493,f){
var map__42494 = p__42493;
var map__42494__$1 = cljs.core.__destructure_map(map__42494);
var options = map__42494__$1;
var user_fn_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42494__$1,new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227));
var color_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42494__$1,new cljs.core.Keyword(null,"color?","color?",-1891974356));
if(cljs.core.truth_((function (){var and__5043__auto__ = color_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!(typeof f === 'string'));
} else {
return and__5043__auto__;
}
})())){
var f_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(f);
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_fn_map,f_str);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if((f instanceof cljs.core.Symbol)){
try{var or__5045__auto____$1 = (!(cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f))))));
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_fn_map,cljs.core.name(f));
}
}catch (e42495){var e = e42495;
return null;
}} else {
return null;
}
}
} else {
return null;
}
});
zprint.zprint.right_separator_map = new cljs.core.PersistentArrayMap(null, 3, [")",(1),"]",(1),"}",(1)], null);
/**
 * Given the fn-style, is the first output good enough to be worth
 *   doing. p is pretty, which is typically hanging, and b is basic, which
 *   is typically flow. p-count is the number of elements in the hang.
 */
zprint.zprint.good_enough_QMARK_ = (function zprint$zprint$good_enough_QMARK_(caller,p__42496,fn_style,p_count,indent_diff,p__42497,p__42498){
var map__42499 = p__42496;
var map__42499__$1 = cljs.core.__destructure_map(map__42499);
var options = map__42499__$1;
var map__42500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42499__$1,new cljs.core.Keyword(null,"tuning","tuning",-48660925));
var map__42500__$1 = cljs.core.__destructure_map(map__42500);
var hang_flow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42500__$1,new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548));
var hang_type_flow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42500__$1,new cljs.core.Keyword(null,"hang-type-flow","hang-type-flow",-1585576590));
var hang_flow_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42500__$1,new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586));
var general_hang_adjust = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42500__$1,new cljs.core.Keyword(null,"general-hang-adjust","general-hang-adjust",-1631406987));
var hang_if_equal_flow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42500__$1,new cljs.core.Keyword(null,"hang-if-equal-flow?","hang-if-equal-flow?",-1113113992));
var map__42501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42499__$1,caller);
var map__42501__$1 = cljs.core.__destructure_map(map__42501);
var hang_expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42501__$1,new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559));
var hang_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42501__$1,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424));
var hang_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42501__$1,new cljs.core.Keyword(null,"hang-size","hang-size",-347944063));
var hang_adjust = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42501__$1,new cljs.core.Keyword(null,"hang-adjust","hang-adjust",-613514382));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42499__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42499__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42499__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var vec__42502 = p__42497;
var p_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42502,(0),null);
var p_maxwidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42502,(1),null);
var p_length_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42502,(2),null);
var p_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42502,(3),null);
var vec__42505 = p__42498;
var b_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42505,(0),null);
var b_maxwidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42505,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42505,(2),null);
var b_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42505,(3),null);
var p_last_maxwidth = cljs.core.last(p_length_seq);
var hang_diff__$1 = (function (){var or__5045__auto__ = hang_diff;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var hang_expand__$1 = (function (){var or__5045__auto__ = hang_expand;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 1000.0;
}
})();
var hang_adjust__$1 = (function (){var or__5045__auto__ = hang_adjust;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return general_hang_adjust;
}
})();
var options__$1 = (cljs.core.truth_((function (){var or__5045__auto__ = p_what;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return b_what;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),true):options);
var result = ((cljs.core.not(b_lines))?true:(function (){var and__5043__auto__ = p_lines;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = (p_last_maxwidth <= (width - (zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1(rightcnt) : zprint.zprint.fix_rightcnt.call(null,rightcnt))));
if(and__5043__auto____$1){
var and__5043__auto____$2 = (p_maxwidth <= width);
if(and__5043__auto____$2){
var or__5045__auto__ = (p_lines === (0));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto____$3 = (b_lines > (0));
if(and__5043__auto____$3){
var and__5043__auto____$4 = (p_count > (0));
if(and__5043__auto____$4){
if(cljs.core.truth_((function (){var and__5043__auto____$5 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p_lines,b_lines);
if(and__5043__auto____$5){
return hang_if_equal_flow_QMARK_;
} else {
return and__5043__auto____$5;
}
})())){
return true;
} else {
var and__5043__auto____$5 = (((indent_diff <= hang_diff__$1))?true:(((p_lines - (1)) / p_count) <= hang_expand__$1));
if(and__5043__auto____$5){
var and__5043__auto____$6 = (cljs.core.truth_(hang_size)?(p_lines < hang_size):true);
if(and__5043__auto____$6){
var factor = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?hang_type_flow:hang_flow);
if((p_lines > hang_flow_limit)){
return ((p_lines - (1)) <= b_lines);
} else {
return (((p_lines + hang_adjust__$1) / b_lines) < factor);
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
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
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),(cljs.core.truth_(result)?"++++++":"XXXXXX"),"p-what",p_what,"good-enough? caller:",caller,"fn-style:",fn_style,"width:",width,"rightcnt:",rightcnt,"hang-expand:",hang_expand__$1,"hang-flow-limit:",hang_flow_limit,"hang-adjust:",hang_adjust__$1,"(/ (+ p-lines hang-adjust) b-lines)",(cljs.core.truth_((function (){var and__5043__auto__ = p_lines;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = b_lines;
if(cljs.core.truth_(and__5043__auto____$1)){
return hang_adjust__$1;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?((p_lines + hang_adjust__$1) / b_lines):null),"factor:",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?hang_type_flow:hang_flow),"p-count:",p_count,"p-lines:",p_lines,"p-maxwidth:",p_maxwidth,"indent-diff:",indent_diff,"hang-diff:",hang_diff__$1,"p-last-maxwidth:",p_last_maxwidth,"b-lines:",b_lines,"b-maxwidth:",b_maxwidth], 0));
} else {
}

return result;
});
/**
 * Add :in-hang? true to the options map.
 */
zprint.zprint.in_hang = (function zprint$zprint$in_hang(options){
if(cljs.core.truth_(new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639).cljs$core$IFn$_invoke$arity$1(options))){
return options;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return true;
}
})());
} else {
return options;
}
}
});
/**
 * Scan a collection, and return true if it contains any nils or empty
 *   collections.
 */
zprint.zprint.contains_nil_QMARK_ = (function zprint$zprint$contains_nil_QMARK_(coll){
return cljs.core.some((function (p1__42509_SHARP_){
if(cljs.core.coll_QMARK_(p1__42509_SHARP_)){
return cljs.core.empty_QMARK_(p1__42509_SHARP_);
} else {
return (p1__42509_SHARP_ == null);
}
}),coll);
});
/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil.
 */
zprint.zprint.concat_no_nil_pre_noseq = (function zprint$zprint$concat_no_nil_pre_noseq(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43680 = arguments.length;
var i__5770__auto___43681 = (0);
while(true){
if((i__5770__auto___43681 < len__5769__auto___43680)){
args__5775__auto__.push((arguments[i__5770__auto___43681]));

var G__43682 = (i__5770__auto___43681 + (1));
i__5770__auto___43681 = G__43682;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil_pre_noseq.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(zprint.zprint.concat_no_nil_pre_noseq.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.coll_QMARK_(o)){
if(cljs.core.empty_QMARK_(o)){
return cljs.core.reduced(null);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,o);
}
} else {
if((o == null)){
return cljs.core.reduced(null);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
}
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
return cljs.core.persistent_BANG_(result);
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil_pre_noseq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil_pre_noseq.cljs$lang$applyTo = (function (seq42510){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42510));
}));

/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil. If any of them are :noseq, just skip them.
 *   When complete, check the last element-- if it is a :right, and if it
 *   the previous element is a :newline or :indent, then ensure that the
 *   number of spaces in that previous element matches the number to the
 *   right of the :right.
 */
zprint.zprint.concat_no_nil = (function zprint$zprint$concat_no_nil(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43689 = arguments.length;
var i__5770__auto___43690 = (0);
while(true){
if((i__5770__auto___43690 < len__5769__auto___43689)){
args__5775__auto__.push((arguments[i__5770__auto___43690]));

var G__43691 = (i__5770__auto___43690 + (1));
i__5770__auto___43690 = G__43691;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.coll_QMARK_(o)){
if(cljs.core.empty_QMARK_(o)){
return cljs.core.reduced(null);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,o);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"noseq","noseq",405935768),o)){
return v;
} else {
if((o == null)){
return cljs.core.reduced(null);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
}
}
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
var result__$1 = cljs.core.persistent_BANG_(result);
if((cljs.core.count(result__$1) < (2))){
return result__$1;
} else {
var vec__42512 = cljs.core.peek(result__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42512,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42512,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42512,(2),null);
var right_ind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42512,(3),null);
var last_element = vec__42512;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"right","right",-452581833))){
var previous_index = (cljs.core.count(result__$1) - (2));
var vec__42515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result__$1,previous_index);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42515,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42515,(1),null);
var previous_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42515,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(previous_what,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(previous_what,new cljs.core.Keyword(null,"indent","indent",-148200125))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zprint.count_right_blanks.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.count_right_blanks.cljs$core$IFn$_invoke$arity$1(s) : zprint.zprint.count_right_blanks.call(null,s)),right_ind)){
return result__$1;
} else {
var new_previous = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zprint.trimr_blanks.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.trimr_blanks.cljs$core$IFn$_invoke$arity$1(s) : zprint.zprint.trimr_blanks.call(null,s))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(right_ind))].join(''),color,previous_what], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,previous_index,new_previous);
}
} else {
return result__$1;
}
} else {
return result__$1;
}
}
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil.cljs$lang$applyTo = (function (seq42511){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42511));
}));

/**
 * Concatentate multiple sequences, but if any of them are nil or empty
 *   collections, return nil. If any of them are :noseq, just skip them.
 */
zprint.zprint.concat_no_nil_pre_right = (function zprint$zprint$concat_no_nil_pre_right(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43700 = arguments.length;
var i__5770__auto___43701 = (0);
while(true){
if((i__5770__auto___43701 < len__5769__auto___43700)){
args__5775__auto__.push((arguments[i__5770__auto___43701]));

var G__43702 = (i__5770__auto___43701 + (1));
i__5770__auto___43701 = G__43702;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return zprint.zprint.concat_no_nil_pre_right.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(zprint.zprint.concat_no_nil_pre_right.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.coll_QMARK_(o)){
if(cljs.core.empty_QMARK_(o)){
return cljs.core.reduced(null);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,o);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"noseq","noseq",405935768),o)){
return v;
} else {
if((o == null)){
return cljs.core.reduced(null);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
}
}
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),rest);
if(cljs.core.truth_(result)){
return cljs.core.persistent_BANG_(result);
} else {
return null;
}
}));

(zprint.zprint.concat_no_nil_pre_right.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(zprint.zprint.concat_no_nil_pre_right.cljs$lang$applyTo = (function (seq42518){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42518));
}));

/**
 * Remove a single thing from a sequence.
 */
zprint.zprint.remove_one = (function zprint$zprint$remove_one(s,index){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,s),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((index + (1)),s));
});
/**
 * Ensure that whatever we have is a vector.
 */
zprint.zprint.force_vector = (function zprint$zprint$force_vector(coll){
if(cljs.core.vector_QMARK_(coll)){
return coll;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,coll);
}
});
/**
 * Takes a string, and returns the fn-style if it is a keyword and
 *   without the : it can be found in the fn-map.
 */
zprint.zprint.keyword_fn_QMARK_ = (function zprint$zprint$keyword_fn_QMARK_(options,s){
var vec__42519 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/^:/);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42519,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42519,(1),null);
if(cljs.core.truth_(right)){
var fexpr__42522 = new cljs.core.Keyword(null,"fn-map","fn-map",565481146).cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__42522.cljs$core$IFn$_invoke$arity$1 ? fexpr__42522.cljs$core$IFn$_invoke$arity$1(right) : fexpr__42522.call(null,right));
} else {
return null;
}
});
/**
 * Given the options map, return the max length.  This might be
 *   a constant number, but it might be based on the depth as well.
 *   Returns nil of there is no max-length set.
 */
zprint.zprint.get_max_length = (function zprint$zprint$get_max_length(p__42523){
var map__42524 = p__42523;
var map__42524__$1 = cljs.core.__destructure_map(map__42524);
var options = map__42524__$1;
var max_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42524__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42524__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
if(cljs.core.truth_(max_length)){
if(cljs.core.vector_QMARK_(max_length)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(max_length,(function (){var x__5133__auto__ = (depth - (1));
var y__5134__auto__ = (cljs.core.count(max_length) - (1));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());
} else {
return max_length;
}
} else {
return null;
}
});
/**
 * Given an options map, return another options map with no
 *   :max-length key.  This is to that you can call a routine that
 *   normally deals with :max-length and get it to do the normal
 *   thing.
 */
zprint.zprint.no_max_length = (function zprint$zprint$no_max_length(options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"max-length","max-length",-254826109),(10000));
});
/**
 * Take the vector carrying the intermediate results, and
 *   do the right thing with a new string. Vector is
 *   [ 0 out - vector accumulating line lengths 
 *  1 cur-len - length of current line
 *  just-eol? - did we just do an eol?
 *  ]
 *   s - string to add to current line
 *   tag - element type of string (comment's don't count in length)
 *   eol? - should we terminate line after adding count of s
 */
zprint.zprint.accumulate_ll = (function zprint$zprint$accumulate_ll(count_comment_QMARK_,p__42525,s,tag,eol_QMARK_){
var vec__42526 = p__42525;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42526,(0),null);
var cur_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42526,(1),null);
var just_eol_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42526,(2),null);
var just_comment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42526,(3),null);
var in$ = vec__42526;
var comment_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var count_s = ((((comment_QMARK_) && (cljs.core.not(count_comment_QMARK_))))?(0):cljs.core.count(s));
if(cljs.core.truth_((function (){var or__5045__auto__ = (function (){var and__5043__auto__ = eol_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var and__5043__auto____$1 = just_eol_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
return (count_s === (0));
} else {
return and__5043__auto____$1;
}
})());
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return comment_QMARK_;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(cur_len + count_s)),(0),true,comment_QMARK_], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,(cur_len + count_s),null,comment_QMARK_], null);

}
});
zprint.zprint.generate_ll = (function zprint$zprint$generate_ll(count_comment_QMARK_,p__42529,p__42530){
var vec__42531 = p__42529;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42531,(0),null);
var cur_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42531,(1),null);
var just_eol_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42531,(2),null);
var just_comment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42531,(3),null);
var in$ = vec__42531;
var vec__42534 = p__42530;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42534,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42534,(1),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42534,(2),null);
var element = vec__42534;
var vec__42537 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"newline","newline",1790071323)))))))?zprint.zprint.split_lf_2(s):(new cljs.core.List(null,s,null,(1),null)));
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42537,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42537,(1),null);
var in$__$1 = zprint.zprint.accumulate_ll(count_comment_QMARK_,in$,l,tag,(!((r == null))));
var in$__$2 = ((cljs.core.empty_QMARK_(r))?in$__$1:zprint.zprint.accumulate_ll(count_comment_QMARK_,in$__$1,r,tag,null));
return in$__$2;
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments elsewhere.
 *   Note that only vectors with :whitespace, :indent, or :newline are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character. A single comment is counted as two lines. Lots of edge
 *   conditions that are really quite important.
 */
zprint.zprint.line_lengths_iter = (function zprint$zprint$line_lengths_iter(options,ind,style_vec){
var count_comment_QMARK_ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
var ind__$1 = ((cljs.core.coll_QMARK_(ind))?cljs.core.first(ind):ind);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["line-lengths-iter: style-vec:",style_vec], 0))], 0));
} else {
}

var next_vec = style_vec;
var current_string = null;
var line_length = ind__$1;
var previous_comment_QMARK_ = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_(next_vec)) && (cljs.core.empty_QMARK_(current_string)))){
if((((line_length === (0))) && (cljs.core.not(previous_comment_QMARK_)))){
return out;
} else {
if(cljs.core.truth_(previous_comment_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(out,line_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,line_length);

}
}
} else {
var advance_QMARK_ = cljs.core.empty_QMARK_(current_string);
var vec__42546 = ((advance_QMARK_)?cljs.core.first(next_vec):null);
var next_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42546,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42546,(1),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42546,(2),null);
var comment_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var s = ((advance_QMARK_)?next_string:current_string);
var vec__42549 = (cljs.core.truth_(s)?((((comment_QMARK_) && (cljs.core.not(count_comment_QMARK_))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null):(cljs.core.truth_((function (){var or__5045__auto__ = ((advance_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"indent","indent",-148200125))))))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return current_string;
}
})())?zprint.zprint.split_lf_2(s):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)
)):null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42549,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42549,(1),null);
var force_newline_QMARK_ = (function (){var and__5043__auto__ = previous_comment_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.empty_QMARK_(l)));
} else {
return and__5043__auto__;
}
})();
var r__$1 = (cljs.core.truth_(force_newline_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''):r);
var l__$1 = (cljs.core.truth_(force_newline_QMARK_)?null:l);
var new_line_length = (line_length + cljs.core.count(l__$1));
var G__43752 = ((advance_QMARK_)?cljs.core.next(next_vec):next_vec);
var G__43753 = r__$1;
var G__43754 = (cljs.core.truth_(r__$1)?(0):new_line_length);
var G__43755 = comment_QMARK_;
var G__43756 = (cljs.core.truth_(r__$1)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_line_length):out);
next_vec = G__43752;
current_string = G__43753;
line_length = G__43754;
previous_comment_QMARK_ = G__43755;
out = G__43756;
continue;
}
break;
}
});
/**
 * Take a style-vec, and output a sequence of numbers, one for each
 *   line, which contains the actual length. Must take the current
 *   indent to have a prayer of getting this right, but it is used
 *   only for the first line.  The ind can be an integer or a seq of
 *   integers, in which case only the first integer is used. Newlines
 *   can come anywhere in an element in a style-vec, it will account
 *   for both sides.  Will break lines on comments even if no newlines
 *   in them.  This doesn't count the length of comment lines unless
 *   [:comment :count?] is true, so that we don't format based on
 *   comment size -- that is handled with the wrap-comments at the
 *   end. Note that only vectors with :whitespace or :indent are scanned
 *   for newlines, and if consecutive newlines appear, only the first
 *   is counted as a newline -- the second is counted as a regular 
 *   character.
 */
zprint.zprint.line_lengths = (function zprint$zprint$line_lengths(options,ind,style_vec){
var length_vec = cljs.core.first((function (){var count_comment_QMARK_ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options));
var vec__42552 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.zprint.generate_ll,count_comment_QMARK_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,((cljs.core.coll_QMARK_(ind))?cljs.core.first(ind):ind),null,null], null),style_vec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42552,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42552,(1),null);
var just_eol_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42552,(2),null);
var just_comment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42552,(3),null);
var result = vec__42552;
if(cljs.core.truth_((function (){var and__5043__auto__ = just_eol_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(just_comment_QMARK_);
} else {
return and__5043__auto__;
}
})())){
return result;
} else {
return zprint.zprint.accumulate_ll(count_comment_QMARK_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,(2),null),"",null,true);
}
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["line-lengths: style-vec:",style_vec,"ind:",ind,"length-vec:",length_vec], 0))], 0));
} else {
}

return length_vec;
});
/**
 * This looks at a style vec and doesn't do all that style-lines does.
 *   It just looks for a new-line in the strings, and returns true if it
 *   doesn't find one.
 */
zprint.zprint.single_line_QMARK_ = (function zprint$zprint$single_line_QMARK_(style_vec){
return cljs.core.not(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42555_SHARP_,p2__42556_SHARP_){
var or__5045__auto__ = p1__42555_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return p2__42556_SHARP_;
}
}),false,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42557_SHARP_){
return clojure.string.includes_QMARK_(cljs.core.first(p1__42557_SHARP_),"\n");
}),style_vec)));
});
/**
 * Given a style-vec, come up with a string that gives some hint of 
 *   where this style-vec came from.
 */
zprint.zprint.find_what = (function zprint$zprint$find_what(style_vec){
var s_vec = style_vec;
while(true){
if(cljs.core.truth_(s_vec)){
var vec__42558 = cljs.core.first(s_vec);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42558,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42558,(1),null);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42558,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"element","element",1974019749))){
return what;
} else {
var G__43764 = cljs.core.next(s_vec);
s_vec = G__43764;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Look at a style vec ready to be given to concat-no-nil, and see if
 *   the first thing in there is a newline of some sort.
 */
zprint.zprint.first_nl_QMARK_ = (function zprint$zprint$first_nl_QMARK_(style_vec){
var vec__42561 = cljs.core.first(style_vec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(2),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"indent","indent",-148200125))));
});
/**
 * Given an indent ind and a style-vec coll, place a newline (actually an
 *   indent) at the front of coll.  If the first thing in coll is a newline,
 *   then don't add any spaces after the newline that we prepend.
 */
zprint.zprint.prepend_nl = (function zprint$zprint$prepend_nl(options,ind,coll){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(((zprint.zprint.first_nl_QMARK_(coll))?(0):ind)))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], null)], null),coll], 0));
});
/**
 * Take a style output, and tell us how many lines it takes to print it
 *   and the maximum width that it reaches. Returns 
 *   [<line-count> <max-width> [line-lengths]].
 *   Doesn't require any max-width inside the style-vec. Also returns the
 *   line lengths in case that is helpful (since we have them anyway).
 *   If (:dbg-ge options) has value, then uses find-what to see if what it
 *   finds matches the value, and if it does, place the value in the
 *   resulting vector.
 */
zprint.zprint.style_lines = (function zprint$zprint$style_lines(options,ind,style_vec){
if(cljs.core.truth_((function (){var and__5043__auto__ = style_vec;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(cljs.core.empty_QMARK_(style_vec)))) && (cljs.core.not(zprint.zprint.contains_nil_QMARK_(style_vec))));
} else {
return and__5043__auto__;
}
})())){
var lengths = zprint.zprint.line_lengths_iter(options,ind,style_vec);
var count_lengths = cljs.core.count(lengths);
var result = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [count_lengths,(((count_lengths === (0)))?(0):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,lengths)),lengths], null);
var dbg_ge = new cljs.core.Keyword(null,"dbg-ge","dbg-ge",257927017).cljs$core$IFn$_invoke$arity$1(options);
var what = (cljs.core.truth_((function (){var and__5043__auto__ = dbg_ge;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zprint.zprint.find_what(style_vec),dbg_ge);
} else {
return and__5043__auto__;
}
})())?dbg_ge:null);
if(cljs.core.truth_(what)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,what);
} else {
return result;
}
} else {
return null;
}
});
/**
 * Given output from style-lines and options, see if it fits the width.  
 *   Return the number of lines it takes if it fits, nil otherwise.
 */
zprint.zprint.fzfit = (function zprint$zprint$fzfit(p__42564,p__42565){
var map__42566 = p__42564;
var map__42566__$1 = cljs.core.__destructure_map(map__42566);
var options = map__42566__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42566__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42566__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42566__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var vec__42567 = p__42565;
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42567,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42567,(1),null);
var style_lines_return = vec__42567;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzfit: fixed-rightcnt:",(zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1(rightcnt) : zprint.zprint.fix_rightcnt.call(null,rightcnt)),"line-count:",line_count,"max-width:",max_width,"width:",width], 0));
} else {
}

if(cljs.core.truth_(style_lines_return)){
if((max_width <= (width - (zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fix_rightcnt.cljs$core$IFn$_invoke$arity$1(rightcnt) : zprint.zprint.fix_rightcnt.call(null,rightcnt))))){
return line_count;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given the return from style-lines  and options, 
 *   return true if it fits on a single line.
 */
zprint.zprint.fzfit_one_line = (function zprint$zprint$fzfit_one_line(options,style_lines_return){
var lines = zprint.zprint.fzfit(options,style_lines_return);
return ((typeof lines === 'number') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lines,(1))));
});
/**
 * Increase the rightmost count, if any, and return one if not.
 */
zprint.zprint.rightmost = (function zprint$zprint$rightmost(options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070),(new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$2(options,(0)) + (1)));
});
/**
 * Remove the rightmost count.
 */
zprint.zprint.not_rightmost = (function zprint$zprint$not_rightmost(options){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
});
/**
 * Handle the complexity of commas and rightmost-pair with options.
 *   If it isn't a rightmost, it loses rightmost status.
 *   If it is a rightmost, and in the rightmost pair, it gain one rightmost
 *   since it has the right end thing (and we don't care about the comma).
 *   If it is the rightmost of the non-rightmost-pair, then the comma
 *   matters, and we handle that appropriately.  Whew!
 */
zprint.zprint.c_r_pair = (function zprint$zprint$c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,rightmost_QMARK_,options){
if(cljs.core.not(rightmost_QMARK_)){
return zprint.zprint.not_rightmost(options);
} else {
if(cljs.core.truth_(rightmost_pair_QMARK_)){
return options;
} else {
if(cljs.core.truth_(commas_QMARK_)){
return zprint.zprint.rightmost(zprint.zprint.not_rightmost(options));
} else {
return zprint.zprint.not_rightmost(options);
}
}
}
});
/**
 * Handle issue with rightcnt.
 */
zprint.zprint.fix_rightcnt = (function zprint$zprint$fix_rightcnt(rightcnt){
if(typeof rightcnt === 'number'){
return rightcnt;
} else {
return (0);
}
});
zprint.zprint.str__GT_key = cljs.core.PersistentHashMap.fromArrays(["]","'",")","`","~@","~","#{","(","#(","{","}","[","#_","@"],[new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"deref","deref",-145586795)]);
/**
 * Look up the thing in the zprint-color-map.  Accepts keywords or
 *   strings.
 */
zprint.zprint.zcolor_map = (function zprint$zprint$zcolor_map(p__42570,key_or_str){
var map__42571 = p__42570;
var map__42571__$1 = cljs.core.__destructure_map(map__42571);
var options = map__42571__$1;
var color_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42571__$1,new cljs.core.Keyword(null,"color-map","color-map",-207789684));
var color_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42571__$1,new cljs.core.Keyword(null,"color?","color?",-1891974356));
if(cljs.core.truth_(color_QMARK_)){
var G__42572 = (((key_or_str instanceof cljs.core.Keyword))?key_or_str:(zprint.zprint.str__GT_key.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.str__GT_key.cljs$core$IFn$_invoke$arity$1(key_or_str) : zprint.zprint.str__GT_key.call(null,key_or_str)));
return (color_map.cljs$core$IFn$_invoke$arity$1 ? color_map.cljs$core$IFn$_invoke$arity$1(G__42572) : color_map.call(null,G__42572));
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);
}
});
/**
 * Take a style-vec, and if hangflow? is true, return a
 *   vector [hang-or-flow style-vec], else return style-vec.
 *   But a nil style-vec returns nil.
 */
zprint.zprint.hangflow = (function zprint$zprint$hangflow(hangflow_QMARK_,hang_or_flow,style_vec){
if(cljs.core.truth_(style_vec)){
if(cljs.core.truth_(hangflow_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,style_vec], null);
} else {
return style_vec;
}
} else {
return null;
}
});
/**
 * Try to hang something and if it doesn't hang at all, then flow it,
 *   but strongly prefer hang.  Has hang and flow indents, and fzfn is the
 *   fzprint-? function to use with zloc.  Callers need to know whether this
 *   was hang or flow, so it returns [{:hang | :flow} style-vec] all the time.
 */
zprint.zprint.fzprint_hang_unless_fail = (function zprint$zprint$fzprint_hang_unless_fail(options,hindent,findent,fzfn,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: hindent:",hindent,"findent:",findent,"zloc:",(function (){var G__42573 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42573) : zprint.zfns.zstring.call(null,G__42573));
})()], 0));
} else {
}

var hanging = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hindent,findent))?(function (){var G__42574 = zprint.zprint.in_hang(options);
var G__42575 = hindent;
var G__42576 = zloc;
return (fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(G__42574,G__42575,G__42576) : fzfn.call(null,G__42574,G__42575,G__42576));
})():null);
var value__26923__auto__ = (cljs.core.truth_((function (){var and__5043__auto__ = hanging;
if(cljs.core.truth_(and__5043__auto__)){
return zprint.zprint.fzfit(options,zprint.zprint.style_lines(options,hindent,hanging));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),hanging], null):(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: hang failed, doing flow"], 0));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.prepend_nl(options,findent,(fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(options,findent,zloc) : fzfn.call(null,options,findent,zloc)))], null);
})()
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-unless-fail: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__26923__auto__], 0))], 0));
} else {
}

return value__26923__auto__;
});
/**
 * Given a style-vec with exactly one thing in it, replace the color
 *   with whatever local color we have determined is correct.
 */
zprint.zprint.replace_color = (function zprint$zprint$replace_color(local_color,style_vec){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(style_vec),(1))){
var vec__42577 = style_vec;
var vec__42580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42577,(0),null);
var string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42580,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42580,(1),null);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42580,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,local_color,element], null)], null);
} else {
return style_vec;
}
});
/**
 * This routine tries to figure out if existing hang should be used without
 *   even bothering to do a flow and compare them with good-enough?.
 */
zprint.zprint.use_hang_QMARK_ = (function zprint$zprint$use_hang_QMARK_(caller,p__42583,ind,hang_count,hanging_line_count){
var map__42584 = p__42583;
var map__42584__$1 = cljs.core.__destructure_map(map__42584);
var options = map__42584__$1;
var map__42585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42584__$1,caller);
var map__42585__$1 = cljs.core.__destructure_map(map__42585);
var hang_accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42585__$1,new cljs.core.Keyword(null,"hang-accept","hang-accept",2078386607));
var ha_depth_factor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42585__$1,new cljs.core.Keyword(null,"ha-depth-factor","ha-depth-factor",534448962));
var ha_width_factor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42585__$1,new cljs.core.Keyword(null,"ha-width-factor","ha-width-factor",1818280581));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42584__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42584__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_((function (){var and__5043__auto__ = hanging_line_count;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = hang_accept;
if(cljs.core.truth_(and__5043__auto____$1)){
return (hang_count > (0));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var hang_accept__$1 = ((hang_accept + (depth * ha_depth_factor)) + ((ind / width) * ha_width_factor));
var result = (((hanging_line_count - (1)) / hang_count) <= hang_accept__$1);
return result;
} else {
return null;
}
});
/**
 * Print a single pair of things (though it might not be exactly a
 *   pair, given comments and :extend and the like), like bindings in
 *   a let, clauses in a cond, keys and values in a map.  Controlled
 *   by various maps, the key of which is caller.  Returns 
 *   [:hang <style-vec>] or [:flow <style-vec>] so that the upstream folks
 *   know whether this was a hang or flow and can do the right thing
 *   based on that.
 */
zprint.zprint.fzprint_two_up = (function zprint$zprint$fzprint_two_up(caller,p__42586,ind,commas_QMARK_,justify_width,justify_options,rightmost_pair_QMARK_,p__42587){
var map__42588 = p__42586;
var map__42588__$1 = cljs.core.__destructure_map(map__42588);
var options = map__42588__$1;
var map__42589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42588__$1,caller);
var map__42589__$1 = cljs.core.__destructure_map(map__42589);
var hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
var flow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"flow?","flow?",96929057));
var indent_arg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874));
var key_value_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"key-value-options","key-value-options",694765603));
var key_depth_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"key-depth-color","key-depth-color",1448522819));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"justify","justify",-722524056));
var key_value_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"key-value-color","key-value-color",676042889));
var dbg_cnt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"dbg-cnt?","dbg-cnt?",-1638028976));
var dbg_local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"dbg-local?","dbg-local?",-895545325));
var key_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"key-color","key-color",-209002572));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42588__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42588__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var dbg_indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42588__$1,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778));
var in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42588__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
var do_in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42588__$1,new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947));
var map_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42588__$1,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641));
var vec__42590 = p__42587;
var lloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42590,(0),null);
var rloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42590,(1),null);
var xloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42590,(2),null);
var pair = vec__42590;
if(cljs.core.truth_(dbg_cnt_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["two-up: caller:",caller,"hang?",hang_QMARK_,"dbg?",dbg_QMARK_], 0));
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-two-up:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.zstring.call(null,lloc)),"justify-width:",justify_width], 0));
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return dbg_local_QMARK_;
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = dbg_indent;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),"==========================",["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = dbg_indent;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})())].join(''),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.zstring.call(null,lloc)),"tag:",(zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.ztag.call(null,lloc)),"caller:",caller,"count:",cljs.core.count(pair),"ind:",ind,"indent:",indent,"indent-arg:",indent_arg,"justify-width:",justify_width,"one-line?:",one_line_QMARK_,"hang?:",hang_QMARK_,"in-hang?",in_hang_QMARK_,"do-in-hang?",do_in_hang_QMARK_,"flow?",flow_QMARK_,"commas?",commas_QMARK_,"rightmost-pair?",rightmost_pair_QMARK_], 0))], 0));
} else {
}

var local_hang_QMARK_ = (function (){var or__5045__auto__ = one_line_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return hang_QMARK_;
}
})();
var indent__$1 = (function (){var or__5045__auto__ = indent;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return indent_arg;
}
})();
var non_justify_options = options;
var options__$1 = justify_options;
var local_options = ((cljs.core.not(local_hang_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true):options__$1);
var loptions = zprint.zprint.c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,null,options__$1);
var roptions = zprint.zprint.c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),options__$1);
var non_justify_roptions = zprint.zprint.c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),non_justify_options);
var local_roptions = zprint.zprint.c_r_pair(commas_QMARK_,rightmost_pair_QMARK_,new cljs.core.Keyword(null,"rightmost","rightmost",800279518),local_options);
var value_color_map = (function (){var and__5043__auto__ = key_value_color;
if(cljs.core.truth_(and__5043__auto__)){
var G__42599 = zprint.zprint.get_sexpr(options__$1,lloc);
return (key_value_color.cljs$core$IFn$_invoke$arity$1 ? key_value_color.cljs$core$IFn$_invoke$arity$1(G__42599) : key_value_color.call(null,G__42599));
} else {
return and__5043__auto__;
}
})();
var local_roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([local_roptions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),value_color_map], null)], 0)):local_roptions);
var roptions__$1 = (cljs.core.truth_(value_color_map)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([roptions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),value_color_map], null)], 0)):roptions);
var value_options_map = (function (){var and__5043__auto__ = key_value_options;
if(cljs.core.truth_(and__5043__auto__)){
var G__42600 = zprint.zprint.get_sexpr(options__$1,lloc);
return (key_value_options.cljs$core$IFn$_invoke$arity$1 ? key_value_options.cljs$core$IFn$_invoke$arity$1(G__42600) : key_value_options.call(null,G__42600));
} else {
return and__5043__auto__;
}
})();
var local_roptions__$2 = (cljs.core.truth_(value_options_map)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([local_roptions__$1,value_options_map], 0)):local_roptions__$1);
var roptions__$2 = (cljs.core.truth_(value_options_map)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([roptions__$1,value_options_map], 0)):roptions__$1);
var modifier_set = new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1((options__$1.cljs$core$IFn$_invoke$arity$1 ? options__$1.cljs$core$IFn$_invoke$arity$1(caller) : options__$1.call(null,caller)));
var modifier_QMARK_ = (function (){var or__5045__auto__ = (function (){var and__5043__auto__ = modifier_set;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = (function (){var G__42601 = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.zstring.call(null,lloc));
return (modifier_set.cljs$core$IFn$_invoke$arity$1 ? modifier_set.cljs$core$IFn$_invoke$arity$1(G__42601) : modifier_set.call(null,G__42601));
})();
if(cljs.core.truth_(and__5043__auto____$1)){
return (cljs.core.count(pair) > (2));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (zprint.zprint.middle_element_QMARK_.cljs$core$IFn$_invoke$arity$2 ? zprint.zprint.middle_element_QMARK_.cljs$core$IFn$_invoke$arity$2(options__$1,rloc) : zprint.zprint.middle_element_QMARK_.call(null,options__$1,rloc));
}
})();
var local_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(key_depth_color,(map_depth - (1)));
var local_color__$1 = (cljs.core.truth_(key_color)?(function (){var G__42602 = zprint.zprint.get_sexpr(options__$1,lloc);
return (key_color.cljs$core$IFn$_invoke$arity$1 ? key_color.cljs$core$IFn$_invoke$arity$1(G__42602) : key_color.call(null,G__42602));
})():local_color);
var arg_1 = (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(loptions,ind,lloc) : zprint.zprint.fzprint_STAR_.call(null,loptions,ind,lloc));
var no_justify = new cljs.core.Keyword(null,"no-justify","no-justify",1864362078).cljs$core$IFn$_invoke$arity$1(justify);
var arg_1_newline_QMARK_ = (function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1));
if(and__5043__auto__){
return (zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1(lloc) : zprint.zfns.znewline_QMARK_.call(null,lloc));
} else {
return and__5043__auto__;
}
})();
var arg_1__$1 = (cljs.core.truth_(local_color__$1)?zprint.zprint.replace_color(local_color__$1,arg_1):arg_1);
var vec__42593 = zprint.zprint.style_lines(options__$1,ind,arg_1__$1);
var arg_1_line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42593,(0),null);
var arg_1_max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42593,(1),null);
var arg_1_lines = vec__42593;
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up before modifier: arg-1-line-count:",arg_1_line_count,"arg-1-max-width:",arg_1_max_width], 0)):null);
var modifier_QMARK___$1 = (cljs.core.truth_((function (){var or__5045__auto__ = (function (){var and__5043__auto__ = arg_1_line_count;
if(cljs.core.truth_(and__5043__auto__)){
return (arg_1_line_count > (1));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return arg_1_newline_QMARK_;
}
})())?null:modifier_QMARK_);
var combined_arg_1 = (cljs.core.truth_(modifier_QMARK___$1)?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(1)], null)], null),(function (){var G__42603 = zprint.zprint.in_hang(loptions);
var G__42604 = (ind + arg_1_max_width);
var G__42605 = rloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__42603,G__42604,G__42605) : zprint.zprint.fzprint_STAR_.call(null,G__42603,G__42604,G__42605));
})()], 0)):arg_1__$1);
var arg_1__$2 = (cljs.core.truth_(combined_arg_1)?combined_arg_1:arg_1__$1);
var modifier_QMARK___$2 = (cljs.core.truth_(combined_arg_1)?modifier_QMARK___$1:null);
var vec__42596 = (cljs.core.truth_(combined_arg_1)?zprint.zprint.style_lines(options__$1,ind,arg_1__$2):arg_1_lines);
var arg_1_line_count__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42596,(0),null);
var arg_1_max_width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42596,(1),null);
var arg_1_lines__$1 = vec__42596;
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up after modifier: arg-1-line-count:",arg_1_line_count__$1,"arg-1-max-width:",arg_1_max_width__$1], 0)):null);
var lloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?rloc:lloc);
var rloc__$1 = (cljs.core.truth_(modifier_QMARK___$2)?xloc:rloc);
var arg_1_fit_oneline_QMARK_ = ((cljs.core.not(flow_QMARK_)) && (zprint.zprint.fzfit_one_line(loptions,arg_1_lines__$1)));
var arg_1_fit_QMARK_ = (function (){var or__5045__auto__ = arg_1_fit_oneline_QMARK_;
if(or__5045__auto__){
return or__5045__auto__;
} else {
if(cljs.core.not(one_line_QMARK_)){
return zprint.zprint.fzfit(loptions,arg_1_lines__$1);
} else {
return null;
}
}
})();
var arg_1_width = ((function (){var or__5045__auto__ = arg_1_max_width__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() - ind);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: arg-1:",arg_1__$2], 0))], 0));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = arg_1__$2;
if(cljs.core.truth_(and__5043__auto__)){
var or__5045__auto__ = arg_1_fit_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not(in_hang_QMARK_);
}
} else {
return and__5043__auto__;
}
})())){
if(cljs.core.truth_(arg_1_newline_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),arg_1__$2], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),(zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(roptions__$2,ind,lloc__$1) : zprint.zprint.fzprint_STAR_.call(null,roptions__$2,ind,lloc__$1))], null);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(2));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = modifier_QMARK___$2;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(3));
} else {
return and__5043__auto__;
}
}
})())){
var justify_width__$1 = (cljs.core.truth_(justify_width)?(cljs.core.truth_((function (){var or__5045__auto__ = (arg_1_width > justify_width);
if(or__5045__auto__){
return or__5045__auto__;
} else {
if(cljs.core.truth_(no_justify)){
var G__42606 = cljs.core.ffirst(arg_1__$2);
return (no_justify.cljs$core$IFn$_invoke$arity$1 ? no_justify.cljs$core$IFn$_invoke$arity$1(G__42606) : no_justify.call(null,G__42606));
} else {
return null;
}
}
})())?null:justify_width):null);
var hanging_width = (cljs.core.truth_(justify_width__$1)?justify_width__$1:arg_1_width);
var justify_width_n = (function (){var or__5045__auto__ = justify_width__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var arg_1_width_n = (function (){var or__5045__auto__ = arg_1_width;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var hanging_spaces = (cljs.core.truth_(justify_width__$1)?((justify_width_n - arg_1_width_n) + (1)):(1));
var hanging_indent = (((1) + hanging_width) + ind);
var flow_indent = (indent__$1 + ind);
if(cljs.core.truth_((function (){var and__5043__auto__ = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1));
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = zprint.zprint.keyword_fn_QMARK_(options__$1,(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1)));
if(cljs.core.truth_(and__5043__auto____$1)){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caller,new cljs.core.Keyword(null,"map","map",1371690461))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
if(cljs.core.truth_((zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(rloc__$1) : zprint.zfns.zvector_QMARK_.call(null,rloc__$1)))){
var vec__42607 = zprint.zprint.fzprint_hang_unless_fail(loptions,hanging_indent,flow_indent,zprint.zprint.fzprint_binding_vec,rloc__$1);
var hang_or_flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42607,(0),null);
var style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42607,(1),null);
var arg_1__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(2)], null)], null)], 0)):arg_1__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$3,style_vec], 0))], null);
} else {
var vec__42610 = zprint.zprint.fzprint_hang_unless_fail(loptions,hanging_indent,flow_indent,zprint.zprint.fzprint_STAR_,rloc__$1);
var hang_or_flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42610,(0),null);
var style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42610,(1),null);
var arg_1__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(2)], null)], null)], 0)):arg_1__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_or_flow,zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$3,style_vec], 0))], null);
}
} else {
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up: before hang.  hanging tried?",((arg_1_fit_oneline_QMARK_) || (((cljs.core.not(flow_QMARK_)) && ((flow_indent >= hanging_indent)))))], 0)):null);
var hanging = ((((arg_1_fit_oneline_QMARK_) || (((cljs.core.not(flow_QMARK_)) && ((flow_indent >= hanging_indent))))))?(function (){var G__42613 = (((flow_indent < hanging_indent))?zprint.zprint.in_hang(local_roptions__$2):local_roptions__$2);
var G__42614 = hanging_indent;
var G__42615 = rloc__$1;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__42613,G__42614,G__42615) : zprint.zprint.fzprint_STAR_.call(null,G__42613,G__42614,G__42615));
})():null);
var hang_count = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(rloc__$1) : zprint.zfns.zcount.call(null,rloc__$1));
var ___$3 = zprint.zprint.log_lines(options__$1,"fzprint-two-up: hanging:",hanging_indent,hanging);
var hanging_lines = zprint.zprint.style_lines(options__$1,hanging_indent,hanging);
var fit_QMARK_ = zprint.zprint.fzfit_one_line(local_roptions__$2,hanging_lines);
var hanging_lines__$1 = ((fit_QMARK_)?hanging_lines:(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(one_line_QMARK_);
if(and__5043__auto__){
return hang_QMARK_;
} else {
return and__5043__auto__;
}
})())?hanging_lines:null));
var hanging_line_count = cljs.core.first(hanging_lines__$1);
var ___$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up: fit?",fit_QMARK_,"hanging-lines:",hanging_lines__$1], 0)):null);
var ___$5 = zprint.zprint.log_lines(options__$1,"fzprint-two-up: hanging-2:",hanging_indent,hanging);
var flow_it_QMARK_ = ((cljs.core.not(hanging_lines__$1)) || (((((((cljs.core.not(hanging_lines__$1)) && (cljs.core.not(one_line_QMARK_)))) || (cljs.core.not((function (){var or__5045__auto____$2 = fit_QMARK_;
if(or__5045__auto____$2){
return or__5045__auto____$2;
} else {
return one_line_QMARK_;
}
})())))) && ((((flow_indent < hanging_indent)) || (cljs.core.not(hanging_lines__$1)))))));
var flow_it_QMARK___$1 = (cljs.core.truth_(zprint.zprint.use_hang_QMARK_(caller,options__$1,ind,hang_count,hanging_line_count))?false:flow_it_QMARK_);
var ___$6 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up: before flow. flow-it?",flow_it_QMARK___$1], 0)):null);
var flow = ((flow_it_QMARK___$1)?(zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(roptions__$2,flow_indent,rloc__$1) : zprint.zprint.fzprint_STAR_.call(null,roptions__$2,flow_indent,rloc__$1)):null);
var ___$7 = zprint.zprint.log_lines(options__$1,"fzprint-two-up: flow:",(indent__$1 + ind),flow);
var flow_lines = zprint.zprint.style_lines(options__$1,(indent__$1 + ind),flow);
if(cljs.core.truth_(dbg_local_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: local-hang:",local_hang_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: one-line?:",one_line_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: hanging-indent:",hanging_indent], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: hanging-lines:",hanging_lines__$1], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow?:",flow_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow-it?:",flow_it_QMARK___$1], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: fit?:",fit_QMARK_], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow-indent:",flow_indent], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: hanging:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1)),hanging], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: (+ indent ind):",(indent__$1 + ind)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-two-up: flow:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1)),flow], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up: before good-enough"], 0));
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$1));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1)),"justify-width:",justify_width__$1,"fit?",fit_QMARK_], 0));
} else {
}

if(fit_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(3)], null)], null),hanging], 0))], null);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = hanging_lines__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return flow_lines;
}
})())){
if(cljs.core.truth_(zprint.zprint.good_enough_QMARK_(caller,(cljs.core.truth_(justify_width__$1)?roptions__$2:non_justify_roptions),new cljs.core.Keyword(null,"none-two-up","none-two-up",-457831686),hang_count,(hanging_indent - flow_indent),hanging_lines__$1,flow_lines))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hang","hang",-1007256173),zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(hanging_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(4)], null)], null),hanging], 0))], null);
} else {
if(cljs.core.truth_(justify_width__$1)){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$1));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-two-up:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(lloc__$1) : zprint.zfns.zstring.call(null,lloc__$1)),"justify-width:",justify_width__$1,"cancelled justification, returning nil!"], 0));
} else {
}

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,zprint.zprint.prepend_nl(options__$1,(indent__$1 + ind),flow)], 0))], null);
}
}
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_1__$2,(function (){var G__42616 = options__$1;
var G__42617 = (indent__$1 + ind);
var G__42618 = (cljs.core.truth_(modifier_QMARK___$2)?cljs.core.nnext(pair):cljs.core.next(pair));
var G__42619 = new cljs.core.Keyword(null,"force-nl","force-nl",-755040826);
var G__42620 = new cljs.core.Keyword(null,"newline-first","newline-first",-638470720);
return (zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5 ? zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(G__42616,G__42617,G__42618,G__42619,G__42620) : zprint.zprint.fzprint_flow_seq.call(null,G__42616,G__42617,G__42618,G__42619,G__42620));
})()], 0))], null);

}
}
}
} else {
return null;
}
});
/**
 * Figure the width for a justification of a set of pairs in coll.  
 *   Also, decide if it makes any sense to justify the pairs at all.
 */
zprint.zprint.fzprint_justify_width = (function zprint$zprint$fzprint_justify_width(caller,p__42627,ind,coll){
var map__42628 = p__42627;
var map__42628__$1 = cljs.core.__destructure_map(map__42628);
var options = map__42628__$1;
var map__42629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42628__$1,caller);
var map__42629__$1 = cljs.core.__destructure_map(map__42629);
var justify_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42629__$1,new cljs.core.Keyword(null,"justify?","justify?",294994148));
var justify = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42629__$1,new cljs.core.Keyword(null,"justify","justify",-722524056));
var ignore_for_variance = new cljs.core.Keyword(null,"ignore-for-variance","ignore-for-variance",1887521489).cljs$core$IFn$_invoke$arity$1(justify);
var no_justify = new cljs.core.Keyword(null,"no-justify","no-justify",1864362078).cljs$core$IFn$_invoke$arity$1(justify);
var justify_underscore_QMARK_ = (function (){var underscore_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(justify,new cljs.core.Keyword(null,"underscore?","underscore?",-782102006),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(underscore_QMARK_,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
return true;
} else {
return underscore_QMARK_;
}
})();
var firsts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42621_SHARP_){
if((cljs.core.count(p1__42621_SHARP_) > (1))){
var G__42630 = zprint.zprint.not_rightmost(options);
var G__42631 = ind;
var G__42632 = cljs.core.first(p1__42621_SHARP_);
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__42630,G__42631,G__42632) : zprint.zprint.fzprint_STAR_.call(null,G__42630,G__42631,G__42632));
} else {
return null;
}
}),coll));
var firsts__$1 = (cljs.core.truth_(no_justify)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42622_SHARP_){
var G__42633 = cljs.core.ffirst(p1__42622_SHARP_);
return (no_justify.cljs$core$IFn$_invoke$arity$1 ? no_justify.cljs$core$IFn$_invoke$arity$1(G__42633) : no_justify.call(null,G__42633));
}),firsts):firsts);
var firsts__$2 = (cljs.core.truth_(ignore_for_variance)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42623_SHARP_){
var G__42634 = cljs.core.ffirst(p1__42623_SHARP_);
return (ignore_for_variance.cljs$core$IFn$_invoke$arity$1 ? ignore_for_variance.cljs$core$IFn$_invoke$arity$1(G__42634) : ignore_for_variance.call(null,G__42634));
}),firsts__$1):firsts__$1);
var style_seq = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.zprint.style_lines,options,ind),firsts__$2);
var each_one_line_QMARK_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42624_SHARP_,p2__42625_SHARP_){
if(cljs.core.truth_(p1__42624_SHARP_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p2__42625_SHARP_),(1));
} else {
return null;
}
}),true,style_seq);
var max_variance = new cljs.core.Keyword(null,"max-variance","max-variance",-899998186).cljs$core$IFn$_invoke$arity$1(justify);
var alignment = (cljs.core.truth_(each_one_line_QMARK_)?zprint.util.column_width_variance(max_variance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42626_SHARP_){
return (cljs.core.second(p1__42626_SHARP_) - ind);
}),style_seq))], null),(0)):null);
var _ = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-justify-width max-variance:",max_variance,"ind:",ind,"ignore-for-variance:",ignore_for_variance,"no-justify",no_justify,"alignment:",alignment], 0)):null);
var justify_width = (cljs.core.truth_(each_one_line_QMARK_)?cljs.core.first(alignment):null);
return justify_width;
});
/**
 * Take a size and a collection of vectors with two or more elements
 *   per vector.  The elements are zlocs, the vectors are not.  Return
 *   the remaining character count or nil if it for sure doesn't fit.
 *   In order to be sure it doesn't fit, this version doesn't assume
 *   *any* separators, so it really underestimates the size.
 */
zprint.zprint.fit_within_QMARK_ = (function zprint$zprint$fit_within_QMARK_(var_args){
var G__42636 = arguments.length;
switch (G__42636) {
case 3:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (size,coll,depth){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (size__$1,element){
var or__5045__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(0)))?zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3(size__$1,element,(depth + (1))):(function (){var remaining = (size__$1 - cljs.core.count((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(element) : zprint.zfns.zstring.call(null,element))));
if((remaining > (0))){
return remaining;
} else {
return null;
}
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.reduced(null);
}
}),size,coll);
}));

(zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (size,coll){
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$3(size,coll,(0));
}));

(zprint.zprint.fit_within_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Convert a hangflow style-vec to a regular style-vec.
 */
zprint.zprint.remove_hangflow = (function zprint$zprint$remove_hangflow(hf_style_vec){
if(cljs.core.truth_(hf_style_vec)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,hf_style_vec);
} else {
return null;
}
});
/**
 * When given the output from fzprint-map-two-up, calculate return the
 *   output from style-lines for each thing.
 */
zprint.zprint.pair_lengths = (function zprint$zprint$pair_lengths(options,ind,result){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.zprint.style_lines,options,ind),cljs.core.second),result);
});
/**
 * Accept a sequence of pairs, and map fzprint-two-up across those pairs.
 *   If you have :one-line? set, this will return nil if it is way over,
 *   but it can't accurately tell exactly what will fit on one line, since
 *   it doesn't know the separators and such.  So, :one-line? true is a
 *   performance optimization, so it doesn't do a whole huge map just to
 *   find out that it could not possibly have fit on one line.  So, this
 *   returns a sequence of style-vecs, where the indentation for the
 *   stuff inside of the pairs is already there, but the separators of
 *   the style-vecs (including indentation and commas) is done by the
 *   caller of fzprint-map-two-up. Always returns a sequence of vector pairs:
 *   [[:hang <style-vec-for-one-pair>] [:flow <style-vec-for-one-pair>] ...].
 *   If you want a style vec instead, call remove-hangflow on the return 
 *   from fzprint-map-two-up.  This will use one-line?, but not check to see
 *   that it actually fits.  If you care about that, then you should check the
 *   return yourself.  It will, however, make an estimate of whether or not
 *   it will fit and if it clearly doesn't, it will return a nil.
 */
zprint.zprint.fzprint_map_two_up = (function zprint$zprint$fzprint_map_two_up(caller,p__42637,ind,commas_QMARK_,coll){
var map__42638 = p__42637;
var map__42638__$1 = cljs.core.__destructure_map(map__42638);
var options = map__42638__$1;
var map__42639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42638__$1,caller);
var map__42639__$1 = cljs.core.__destructure_map(map__42639);
var justify_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42639__$1,new cljs.core.Keyword(null,"justify?","justify?",294994148));
var force_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42639__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42638__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42638__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42638__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42638__$1,new cljs.core.Keyword(null,"parallel?","parallel?",-25273892));
var caller_map = (caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options));
var len = cljs.core.count(coll);
var justify_width = (cljs.core.truth_((function (){var and__5043__auto__ = justify_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(one_line_QMARK_);
} else {
return and__5043__auto__;
}
})())?zprint.zprint.fzprint_justify_width(caller,options,ind,coll):null);
var caller_options = (cljs.core.truth_(justify_width)?(options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller)):null);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: one-line?",new cljs.core.Keyword(null,"one-line?","one-line?",2055953111).cljs$core$IFn$_invoke$arity$1(options),"justify?:",justify_QMARK_], 0));
} else {
}

if(cljs.core.not((function (){var and__5043__auto__ = one_line_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = force_nl_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
return (len > (1));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var justify_width__$1 = justify_width;
var justify_options = (cljs.core.truth_(justify_width__$1)?zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,cljs.core.PersistentArrayMap.createAsIfByAssoc([caller,(caller_options.cljs$core$IFn$_invoke$arity$1 ? caller_options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243)) : caller_options.call(null,new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243)))])], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tuning","tuning",-48660925),(caller_options.cljs$core$IFn$_invoke$arity$1 ? caller_options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675)) : caller_options.call(null,new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675)))], null)], 0)):options);
while(true){
var beginning_coll = cljs.core.butlast(coll);
var beginning_remaining = (cljs.core.truth_(one_line_QMARK_)?zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((width - ind),beginning_coll):true);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: remaining:",(width - ind),"beginning-remaining:",beginning_remaining], 0)):null);
var beginning = (cljs.core.truth_(beginning_remaining)?zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$3(options,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(zprint.zprint.fzprint_two_up,caller,options,ind,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([commas_QMARK_,justify_width__$1,justify_options,null], 0)),beginning_coll):null);
var beginning__$1 = (cljs.core.truth_(zprint.zprint.contains_nil_QMARK_(beginning))?null:beginning);
var end_coll = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(coll)], null);
var end_remaining = (cljs.core.truth_(one_line_QMARK_)?(function (){var and__5043__auto__ = beginning__$1;
if(cljs.core.truth_(and__5043__auto__)){
return zprint.zprint.fit_within_QMARK_.cljs$core$IFn$_invoke$arity$2((beginning_remaining - (function (){var or__5045__auto__ = rightcnt;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()),end_coll);
} else {
return and__5043__auto__;
}
})():true);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-map-two-up: beginning-remaining:",beginning_remaining,"rightcnt:",rightcnt,"end-remaining:",end_remaining], 0)):null);
var end = (cljs.core.truth_(end_remaining)?(function (){var temp__5804__auto__ = zprint.zprint.fzprint_two_up(caller,options,ind,commas_QMARK_,justify_width__$1,justify_options,new cljs.core.Keyword(null,"rightmost-pair","rightmost-pair",-39229380),cljs.core.first(end_coll));
if(cljs.core.truth_(temp__5804__auto__)){
var end_result = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_result], null);
} else {
return null;
}
})():null);
var result = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(1)))?end:zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([beginning__$1,end], 0))
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map-two-up: len:",len,"(nil? end):",(end == null),"end:",end,"(nil? beginning):",(beginning__$1 == null),"beginning:",beginning__$1,"(count end):",cljs.core.count(end),"(count beginnging):",cljs.core.count(beginning__$1),"justify-width:",justify_width__$1,"result:",result], 0))], 0));
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = result;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not(justify_width__$1);
}
})())){
return result;
} else {
var G__43847 = null;
var G__43848 = options;
justify_width__$1 = G__43847;
justify_options = G__43848;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Do a key comparison that works well for numbers as well as
 *   strings.
 */
zprint.zprint.compare_keys = (function zprint$zprint$compare_keys(x,y){
if(((typeof x === 'number') && (typeof y === 'number'))){
return cljs.core.compare(x,y);
} else {
return cljs.core.compare(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));

}
});
/**
 * Do a key comparison that places ordered keys first.
 */
zprint.zprint.compare_ordered_keys = (function zprint$zprint$compare_ordered_keys(key_value,zdotdotdot,x,y){
if(cljs.core.truth_((function (){var and__5043__auto__ = (key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(x) : key_value.call(null,x));
if(cljs.core.truth_(and__5043__auto__)){
return (key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(y) : key_value.call(null,y));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.compare((key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(x) : key_value.call(null,x)),(key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(y) : key_value.call(null,y)));
} else {
if(cljs.core.truth_((key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(x) : key_value.call(null,x)))){
return (-1);
} else {
if(cljs.core.truth_((key_value.cljs$core$IFn$_invoke$arity$1 ? key_value.cljs$core$IFn$_invoke$arity$1(y) : key_value.call(null,y)))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zdotdotdot,x)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zdotdotdot,y)){
return (-1);
} else {
return zprint.zprint.compare_keys(x,y);

}
}
}
}
}
});
/**
 * A variety of sorting and ordering options for the output of
 *   partition-all-2-nc.  It can sort, which is the default, but if
 *   the caller has a key-order vector, it will extract any keys in
 *   that vector and place them first (in order) before sorting the
 *   other keys.  If sorting is not called for, does nothing.
 */
zprint.zprint.order_out = (function zprint$zprint$order_out(caller,p__42643,access,out){
var map__42644 = p__42643;
var map__42644__$1 = cljs.core.__destructure_map(map__42644);
var options = map__42644__$1;
var map__42645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42644__$1,caller);
var map__42645__$1 = cljs.core.__destructure_map(map__42645);
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42645__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42645__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var key_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42645__$1,new cljs.core.Keyword(null,"key-order","key-order",-356936372));
var key_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42645__$1,new cljs.core.Keyword(null,"key-value","key-value",-34906839));
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42644__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["order-out caller:",caller,"key-order:",key_order,"sort?",sort_QMARK_,"sort-in-code?",sort_in_code_QMARK_,"in-code?",in_code_QMARK_,"key-value:",key_value], 0))], 0));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = sort_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return sort_in_code_QMARK_;
} else {
return true;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__42640_SHARP_,p2__42641_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.zprint.compare_ordered_keys,(function (){var or__5045__auto__ = key_value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)))(zprint.zprint.get_sexpr(options,(access.cljs$core$IFn$_invoke$arity$1 ? access.cljs$core$IFn$_invoke$arity$1(p1__42640_SHARP_) : access.call(null,p1__42640_SHARP_))),zprint.zprint.get_sexpr(options,(access.cljs$core$IFn$_invoke$arity$1 ? access.cljs$core$IFn$_invoke$arity$1(p2__42641_SHARP_) : access.call(null,p2__42641_SHARP_))));
}),out);
} else {
return out;
}
});
/**
 * This checks to see if an element should be considered part of a
 *   pair if it comes between other elements, and a single element on
 *   its own if it would otherwise be the first part of a pair.  Mostly
 *   this will trigger on comments, but a #_(...) element will also
 *   trigger this, as will a newline if one appears.
 */
zprint.zprint.pair_element_QMARK_ = (function zprint$zprint$pair_element_QMARK_(zloc){
var or__5045__auto__ = (zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcomment_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (zprint.zfns.zuneval_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zuneval_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zuneval_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znewline_QMARK_.call(null,zloc));
}
}
});
/**
 * Check a zloc to see if this should trigger no-sort? for this set
 * of pairs.
 */
zprint.zprint.nosort_QMARK_ = (function zprint$zprint$nosort_QMARK_(no_sort_set,zloc){
if(cljs.core.truth_(no_sort_set)){
var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"token","token",-1211463215));
if(and__5043__auto__){
var s = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc));
var or__5045__auto__ = (no_sort_set.cljs$core$IFn$_invoke$arity$1 ? no_sort_set.cljs$core$IFn$_invoke$arity$1(s) : no_sort_set.call(null,s));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var regex_seq = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.string_QMARK_),no_sort_set);
if((!(cljs.core.empty_QMARK_(regex_seq)))){
return cljs.core.some((function (p1__42648_SHARP_){
return cljs.core.re_find(p1__42648_SHARP_,s);
}),regex_seq);
} else {
return null;
}
}
} else {
return and__5043__auto__;
}
} else {
return null;
}
});
/**
 * This checks to see if an element should be considered the middle element
 *   of a pair.  At some point, we can expand this, but for now there is only
 *   one middle element.
 */
zprint.zprint.middle_element_QMARK_ = (function zprint$zprint$middle_element_QMARK_(p__42649,zloc){
var map__42650 = p__42649;
var map__42650__$1 = cljs.core.__destructure_map(map__42650);
var options = map__42650__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42650__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_code_QMARK_,"condp")){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),":>>");
} else {
return null;
}
});
/**
 * If given a non-collection, simply does a dissoc of the key, but
 *   if given a sequence of keys, will remove the final one.
 */
zprint.zprint.remove_key_seq = (function zprint$zprint$remove_key_seq(m,ks){
if(cljs.core.coll_QMARK_(ks)){
var this_key = cljs.core.first(ks);
var next_key = cljs.core.next(ks);
if(next_key){
var removed_map = (function (){var G__42652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,this_key);
var G__42653 = cljs.core.next(ks);
return (zprint.zprint.remove_key_seq.cljs$core$IFn$_invoke$arity$2 ? zprint.zprint.remove_key_seq.cljs$core$IFn$_invoke$arity$2(G__42652,G__42653) : zprint.zprint.remove_key_seq.call(null,G__42652,G__42653));
})();
if(cljs.core.empty_QMARK_(removed_map)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,this_key);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,this_key,removed_map);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,this_key);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,ks);
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map, and terminate the reduce if it changes
 *   the map.
 */
zprint.zprint.ignore_key_seq_silent = (function zprint$zprint$ignore_key_seq_silent(m,ks){
if(cljs.core.coll_QMARK_(ks)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return zprint.zprint.remove_key_seq(m,ks);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,ks);
}
}
});
/**
 * Given a map and a key sequence, remove that key sequence if
 *   it appears in the map leaving behind a key :zprint-ignored, 
 *   and terminate the reduce if it changes the map.
 */
zprint.zprint.ignore_key_seq = (function zprint$zprint$ignore_key_seq(m,ks){
if(cljs.core.coll_QMARK_(ks)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.assoc_in(m,ks,new cljs.core.Keyword(null,"zprint-ignored","zprint-ignored",434436784));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411)),new cljs.core.Keyword(null,"zprint-not-found","zprint-not-found",-198220411))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword(null,"zprint-ignored","zprint-ignored",434436784));
}
}
});
/**
 * Take a map and remove any of the key sequences specified from it.
 *   Note that this only works for sexpressions, not for actual zippers.
 */
zprint.zprint.map_ignore = (function zprint$zprint$map_ignore(caller,p__42654,zloc){
var map__42655 = p__42654;
var map__42655__$1 = cljs.core.__destructure_map(map__42655);
var options = map__42655__$1;
var map__42656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42655__$1,caller);
var map__42656__$1 = cljs.core.__destructure_map(map__42656);
var key_ignore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42656__$1,new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668));
var key_ignore_silent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42656__$1,new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060));
var ignored_silent = (cljs.core.truth_(key_ignore_silent)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zprint.ignore_key_seq_silent,zloc,key_ignore_silent):zloc);
var ignored = (cljs.core.truth_(key_ignore)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zprint.ignore_key_seq,ignored_silent,key_ignore):ignored_silent);
return ignored;
});
/**
 * Input is (zseqnws zloc) or (zseqnws-w-nl) where one assumes that
 *   these are pairs.  Thus, a seq of zlocs.  Output is a sequence of
 *   seqs, where the seqs are usually pairs, but might be single things.
 *   Doesn't pair up comments or #_(...) unevaled sexpressions.  The
 *   ones before the first part of a pair come as a single element in
 *   what would usually be a pair, and the ones between the first and
 *   second parts of a pair come inside the pair.  There may be an
 *   arbitrary number of elements between the first and second elements
 *   of the pair (one per line).  If there are any comments or unevaled
 *   sexpressions, don't sort the keys, as we might lose track of where
 *   the comments or unevaled s-expressions go.
 */
zprint.zprint.partition_all_2_nc = (function zprint$zprint$partition_all_2_nc(caller,options,coll){
if(cljs.core.empty_QMARK_(coll)){
return null;
} else {
var max_length = zprint.zprint.get_max_length(options);
var no_sort_set = new cljs.core.Keyword(null,"key-no-sort","key-no-sort",-2047279260).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)));
var remaining = coll;
var no_sort_QMARK_ = null;
var index = (0);
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["partition-all-2-nc: index:",index,"no-sort?:",no_sort_QMARK_,"first remaining:",(function (){var G__42669 = cljs.core.first(remaining);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42669) : zprint.zfns.zstring.call(null,G__42669));
})(),"second remaining:",(function (){var G__42670 = cljs.core.second(remaining);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42670) : zprint.zfns.zstring.call(null,G__42670));
})()], 0))], 0));
} else {
}

if(cljs.core.not(remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [no_sort_QMARK_,cljs.core.persistent_BANG_(out)], null);
} else {
var vec__42671 = (cljs.core.truth_(zprint.zprint.pair_element_QMARK_(cljs.core.first(remaining)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining)], null),true], null):(cljs.core.truth_((function (){var or__5045__auto__ = zprint.zprint.pair_element_QMARK_(cljs.core.second(remaining));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return zprint.zprint.middle_element_QMARK_(options,cljs.core.second(remaining));
}
})())?(function (){var vec__42674 = cljs.core.split_with(((function (remaining,no_sort_QMARK_,index,out,max_length,no_sort_set){
return (function (p1__42657_SHARP_){
var or__5045__auto__ = zprint.zprint.pair_element_QMARK_(p1__42657_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return zprint.zprint.middle_element_QMARK_(options,p1__42657_SHARP_);
}
});})(remaining,no_sort_QMARK_,index,out,max_length,no_sort_set))
,cljs.core.next(remaining));
var comment_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42674,(0),null);
var rest_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42674,(1),null);
if(cljs.core.truth_(cljs.core.first(rest_seq))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(rest_seq),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining)], null),comment_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rest_seq)], null)], 0))),true], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining)], null),true], null);
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(remaining),(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining)], null),null], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(cljs.core.next(remaining)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining),cljs.core.second(remaining)], null),null], null)
)));
var new_remaining = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42671,(0),null);
var pair_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42671,(1),null);
var new_no_sort_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42671,(2),null);
var new_no_sort_QMARK___$1 = (function (){var or__5045__auto__ = new_no_sort_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return zprint.zprint.nosort_QMARK_(no_sort_set,cljs.core.first(remaining));
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["partition-all-2-nc: pair-vec: first:",(function (){var G__42677 = cljs.core.first(pair_vec);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42677) : zprint.zfns.zstring.call(null,G__42677));
})(),"first tag:",(function (){var G__42678 = cljs.core.first(pair_vec);
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__42678) : zprint.zfns.ztag.call(null,G__42678));
})(),"count:",cljs.core.count(pair_vec),"last:",(function (){var G__42679 = cljs.core.last(pair_vec);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42679) : zprint.zfns.zstring.call(null,G__42679));
})()], 0))], 0));
} else {
}

var G__43904 = ((((index + (1)) < max_length))?new_remaining:(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + (1)),max_length);
if(and__5043__auto__){
return new_remaining;
} else {
return and__5043__auto__;
}
})())?(new cljs.core.List(null,(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)),null,(1),null)):null
));
var G__43905 = (function (){var or__5045__auto__ = no_sort_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new_no_sort_QMARK___$1;
}
})();
var G__43906 = (index + (1));
var G__43907 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,pair_vec);
remaining = G__43904;
no_sort_QMARK_ = G__43905;
index = G__43906;
out = G__43907;
continue;
}
break;
}
}
});
/**
 * Take a seq, and if it is contains a single symbol, simply return
 *   it in another seq.  If it contains something else, remove any non
 *   collections off of the end and return them in their own double seqs,
 *   as well as return the remainder (the beginning) as a double seq.
 */
zprint.zprint.cleave_end = (function zprint$zprint$cleave_end(coll){
if(cljs.core.truth_((function (){var or__5045__auto__ = (function (){var G__42681 = cljs.core.first(coll);
return (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__42681) : zprint.zfns.zsymbol_QMARK_.call(null,G__42681));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__42682 = cljs.core.first(coll);
return (zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__42682) : zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,G__42682));
}
})())){
return (new cljs.core.List(null,coll,null,(1),null));
} else {
var rev_seq = cljs.core.reverse(coll);
var vec__42683 = cljs.core.split_with((function (p1__42680_SHARP_){
return cljs.core.not((function (){var or__5045__auto__ = (zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__42680_SHARP_) : zprint.zfns.zcoll_QMARK_.call(null,p1__42680_SHARP_));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (zprint.zfns.zreader_cond_w_coll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_coll_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__42680_SHARP_) : zprint.zfns.zreader_cond_w_coll_QMARK_.call(null,p1__42680_SHARP_));
}
})());
}),rev_seq);
var split_non_coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42683,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42683,(1),null);
var split_non_coll__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.reverse(split_non_coll));
var remainder = cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(coll) - cljs.core.count(split_non_coll__$1)),coll);
if(cljs.core.empty_QMARK_(remainder)){
return split_non_coll__$1;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,remainder,null,(1),null)),split_non_coll__$1);
}
}
});
/**
 * Similar to partition-all-2-nc, but instead of trying to pair things
 *   up (modulo comments and unevaled expressions), this begins things
 *   with a symbol, and then accumulates collections until the next symbol.
 *   Returns a seq of seqs, where the first thing in each internal seq is
 *   a protocol and the remaining thing(s) in that seq are the expressions that
 *   follow.  If there is a single thing, it is returned in its own internal
 *   seq. ((P (foo [this a) (bar-me [this] b) (barx [this y] (+ c y))) ...)
 *   Made harder by the fact that the symbol might be inside of a #?() reader
 *   conditional.  It handles comments before symbols on the symbol indent, 
 *   and the comments before the collections on the collection indent.  
 *   Since it doesn't know how many collections there are, this is not trivial.  
 *   Must be called with a sequence of z-things (these days called a zseq)
 */
zprint.zprint.partition_all_sym = (function zprint$zprint$partition_all_sym(options,modifier_set,coll){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["partition-all-sym:",modifier_set], 0))], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"partition-all-sym: coll:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,coll)], 0));
} else {
}

var part_sym = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__42686_SHARP_){
var or__5045__auto__ = (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__42686_SHARP_) : zprint.zfns.zsymbol_QMARK_.call(null,p1__42686_SHARP_));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__42686_SHARP_) : zprint.zfns.znil_QMARK_.call(null,p1__42686_SHARP_));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__42686_SHARP_) : zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,p1__42686_SHARP_));
}
}
}),coll);
var split_non_coll = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(zprint.zprint.cleave_end,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([part_sym], 0));
var remaining = split_non_coll;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(remaining)){
var result = cljs.core.persistent_BANG_(out);
return result;
} else {
var vec__42698 = (cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = (function (){var G__42701 = cljs.core.ffirst(remaining);
return (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__42701) : zprint.zfns.zsymbol_QMARK_.call(null,G__42701));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__42702 = cljs.core.ffirst(remaining);
return (zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1(G__42702) : zprint.zfns.znil_QMARK_.call(null,G__42702));
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var G__42703 = cljs.core.ffirst(remaining);
return (zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_cond_w_symbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__42703) : zprint.zfns.zreader_cond_w_symbol_QMARK_.call(null,G__42703));
}
}
})();
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = (!(cljs.core.empty_QMARK_(cljs.core.second(remaining))));
if(and__5043__auto____$1){
var or__5045__auto__ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42712 = cljs.core.first(cljs.core.second(remaining));
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__42712) : zprint.zfns.ztag.call(null,G__42712));
})(),new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42717 = cljs.core.first(cljs.core.second(remaining));
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__42717) : zprint.zfns.ztag.call(null,G__42717));
})(),new cljs.core.Keyword(null,"newline","newline",1790071323))))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var G__42718 = cljs.core.last(cljs.core.second(remaining));
return (zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(G__42718) : zprint.zfns.zcoll_QMARK_.call(null,G__42718));
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(remaining)),(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext(remaining,(2)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),cljs.core.second(remaining)))], null):(cljs.core.truth_((function (){var and__5043__auto__ = modifier_set;
if(cljs.core.truth_(and__5043__auto__)){
var G__42727 = (function (){var G__42728 = cljs.core.ffirst(remaining);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42728) : zprint.zfns.zstring.call(null,G__42728));
})();
return (modifier_set.cljs$core$IFn$_invoke$arity$1 ? modifier_set.cljs$core$IFn$_invoke$arity$1(G__42727) : modifier_set.call(null,G__42727));
} else {
return and__5043__auto__;
}
})())?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(remaining)),(2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nthnext(remaining,(2)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),cljs.core.second(remaining)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.next(cljs.core.next(cljs.core.first(remaining))))?cljs.core.cons(cljs.core.next(cljs.core.next(cljs.core.first(remaining))),cljs.core.next(remaining)):cljs.core.next(remaining)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(new cljs.core.List(null,cljs.core.ffirst(remaining),(new cljs.core.List(null,cljs.core.second(cljs.core.first(remaining)),null,(1),null)),(2),null)))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons(cljs.core.next(cljs.core.first(remaining)),cljs.core.next(remaining)),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(new cljs.core.List(null,cljs.core.ffirst(remaining),null,(1),null)))], null))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(remaining),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(remaining))], null)
);
var next_remaining = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42698,(0),null);
var new_out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42698,(1),null);
var G__43917 = next_remaining;
var G__43918 = new_out;
remaining = G__43917;
out = G__43918;
continue;
}
break;
}
});
/**
 * Create an r-str-vec with the indent appropriate for the r-str if
 *   it is preceded by a newline.
 */
zprint.zprint.rstr_vec = (function zprint$zprint$rstr_vec(var_args){
var G__42730 = arguments.length;
switch (G__42730) {
case 5:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5 = (function (options,ind,zloc,r_str,r_type){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_str,zprint.zprint.zcolor_map(options,(function (){var or__5045__auto__ = r_type;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return r_str;
}
})()),(function (){var or__5045__auto__ = r_type;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"right","right",-452581833);
}
})(),ind], null)], null);
}));

(zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,r_str){
return zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5(options,ind,zloc,r_str,null);
}));

(zprint.zprint.rstr_vec.cljs$lang$maxFixedArity = 5);

zprint.zprint.fzprint_binding_vec = (function zprint$zprint$fzprint_binding_vec(p__42734,ind,zloc){
var map__42735 = p__42734;
var map__42735__$1 = cljs.core.__destructure_map(map__42735);
var options = map__42735__$1;
var map__42736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42735__$1,new cljs.core.Keyword(null,"binding","binding",539932593));
var map__42736__$1 = cljs.core.__destructure_map(map__42736);
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42736__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-binding-vec: ind:",ind,"zloc:",(function (){var G__42737 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42737) : zprint.zfns.zstring.call(null,G__42737));
})()], 0));
} else {
}

var options__$1 = zprint.zprint.rightmost(options);
var l_str = "[";
var r_str = "]";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options__$1,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options__$1,ind,zloc,r_str);
var value__26923__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc)),(0)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0)):zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){var G__42738 = new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(options__$1);
var G__42739 = (ind + (1));
var G__42740 = zprint.zprint.fzprint_map_two_up(new cljs.core.Keyword(null,"binding","binding",539932593),options__$1,(ind + (1)),false,cljs.core.second(zprint.zprint.partition_all_2_nc(new cljs.core.Keyword(null,"binding","binding",539932593),options__$1,(zprint.zprint.fzprint_get_zloc_seq.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_get_zloc_seq.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"vector","vector",1902966158),options__$1,zloc) : zprint.zprint.fzprint_get_zloc_seq.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),options__$1,zloc)))));
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__42738,G__42739,G__42740) : zprint.zprint.interpose_nl_hf.call(null,G__42738,G__42739,G__42740));
})(),r_str_vec], 0)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-binding-vec exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__26923__auto__], 0))], 0));
} else {
}

return value__26923__auto__;
});
/**
 * Try to hang something and try to flow it, and then see which is
 *   better.  Has hang and flow indents. fzfn is the function to use 
 *   to do zloc.  Note what fzfn does with the input. Presumably the
 *   caller knows what the fzfn does, so it has to count the items
 *   itself and pass it in here as zloc-count if it isn't just (zcount zloc).
 */
zprint.zprint.fzprint_hang = (function zprint$zprint$fzprint_hang(p__42741,caller,hindent,findent,fzfn,zloc_count,zloc){
var map__42742 = p__42741;
var map__42742__$1 = cljs.core.__destructure_map(map__42742);
var options = map__42742__$1;
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42742__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var force_eol_blanks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42742__$1,new cljs.core.Keyword(null,"force-eol-blanks?","force-eol-blanks?",1917974011));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang: caller:",caller], 0));
} else {
}

var hanging = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hindent,findent);
if(and__5043__auto__){
var and__5043__auto____$1 = (function (){var fexpr__42743 = (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller));
return (fexpr__42743.cljs$core$IFn$_invoke$arity$1 ? fexpr__42743.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hang?","hang?",-579442854)) : fexpr__42743.call(null,new cljs.core.Keyword(null,"hang?","hang?",-579442854)));
})();
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not((function (){var G__42744 = cljs.core.first(zloc);
return (zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1(G__42744) : zprint.zfns.znewline_QMARK_.call(null,G__42744));
})());
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(5)], null)], null),(function (){var G__42745 = zprint.zprint.in_hang(options);
var G__42746 = hindent;
var G__42747 = zloc;
return (fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(G__42745,G__42746,G__42747) : fzfn.call(null,G__42745,G__42746,G__42747));
})()], 0)):null);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang: caller:",caller,"hang?",(function (){var fexpr__42748 = (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller));
return (fexpr__42748.cljs$core$IFn$_invoke$arity$1 ? fexpr__42748.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hang?","hang?",-579442854)) : fexpr__42748.call(null,new cljs.core.Keyword(null,"hang?","hang?",-579442854)));
})()], 0)):null);
var hanging__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.second(hanging),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)))?hanging:null);
var hang_count = (function (){var or__5045__auto__ = zloc_count;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc));
}
})();
var hr_lines = zprint.zprint.style_lines(options,(hindent - (1)),hanging__$1);
if(cljs.core.truth_((function (){var or__5045__auto__ = zprint.zprint.fzfit_one_line(options,hr_lines);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging__$1;
} else {
var flow = (function (){var result = (fzfn.cljs$core$IFn$_invoke$arity$3 ? fzfn.cljs$core$IFn$_invoke$arity$3(options,findent,zloc) : fzfn.call(null,options,findent,zloc));
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_((cljs.core.truth_(force_eol_blanks_QMARK_)?null:zprint.zprint.first_nl_QMARK_(result)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(42)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(findent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(4)], null)], null)),result], 0));
})();
var ___$1 = zprint.zprint.log_lines(options,"fzprint-hang: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines(options,findent,flow);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-hang: ending: hang-count:",hang_count,"hanging:",hanging__$1,"flow:",flow], 0))], 0)):null);
var hr_good_QMARK_ = (cljs.core.truth_(hanging__$1)?zprint.zprint.good_enough_QMARK_(caller,options,new cljs.core.Keyword(null,"none-hang","none-hang",-1101780299),hang_count,(hindent - findent),hr_lines,fd_lines):null);
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging__$1;
} else {
return flow;
}
}
});
/**
 * Always prints pairs on a different line from other pairs. Takes a zloc-seq.
 *   Defaults to caller as :pair, but will accept :binding as an alternative.
 */
zprint.zprint.fzprint_pairs = (function zprint$zprint$fzprint_pairs(var_args){
var G__42750 = arguments.length;
switch (G__42750) {
case 4:
return zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$4 = (function (p__42751,ind,zloc_seq,caller){
var map__42752 = p__42751;
var map__42752__$1 = cljs.core.__destructure_map(map__42752);
var options = map__42752__$1;
var map__42753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42752__$1,new cljs.core.Keyword(null,"pair","pair",-447516312));
var map__42753__$1 = cljs.core.__destructure_map(map__42753);
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42753__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var respect_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42753__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-pairs:",(function (){var G__42754 = cljs.core.first(zloc_seq);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42754) : zprint.zfns.zstring.call(null,G__42754));
})(),"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options)], 0))], 0));
} else {
}

var value__26923__auto__ = (function (){var G__42755 = (caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options));
var G__42756 = ind;
var G__42757 = zprint.zprint.fzprint_map_two_up(caller,options,ind,false,(function (){var vec__42758 = zprint.zprint.partition_all_2_nc(caller,options,zloc_seq);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42758,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42758,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-pairs: partition:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,cljs.core.first),part),"respect-nl?",respect_nl_QMARK_], 0))], 0));
} else {
}

return part;
})());
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__42755,G__42756,G__42757) : zprint.zprint.interpose_nl_hf.call(null,G__42755,G__42756,G__42757));
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-pairs: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__26923__auto__], 0))], 0));
} else {
}

return value__26923__auto__;
}));

(zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc_seq){
return zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$4(options,ind,zloc_seq,new cljs.core.Keyword(null,"pair","pair",-447516312));
}));

(zprint.zprint.fzprint_pairs.cljs$lang$maxFixedArity = 4);

/**
 * Return true if the first non-newline element in the seq is a coll?
 */
zprint.zprint.check_for_coll_QMARK_ = (function zprint$zprint$check_for_coll_QMARK_(zloc_seq){
var coll = zloc_seq;
while(true){
if(cljs.core.not(coll)){
return null;
} else {
var zloc = cljs.core.first(coll);
if(cljs.core.truth_((zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znewline_QMARK_.call(null,zloc)))){
var G__43932 = cljs.core.next(coll);
coll = G__43932;
continue;
} else {
if(cljs.core.truth_((zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcoll_QMARK_.call(null,zloc)))){
return true;
} else {
if(cljs.core.truth_((zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsymbol_QMARK_.call(null,zloc)))){
return null;
} else {
if(cljs.core.truth_((zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znil_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znil_QMARK_.call(null,zloc)))){
return null;
} else {
var G__43934 = cljs.core.next(coll);
coll = G__43934;
continue;

}
}
}
}
}
break;
}
});
/**
 * Check a series of sequences to see if the first non-newine thing in any 
 *   of them
 *   is a zcoll?.  If it is, return true, else nil.
 */
zprint.zprint.check_for_first_coll_QMARK_ = (function zprint$zprint$check_for_first_coll_QMARK_(seq_series){
return cljs.core.some(zprint.zprint.check_for_coll_QMARK_,seq_series);
});
/**
 * Print things with a symbol and collections following.  Kind of like with
 *   pairs, but not quite. Takes a zloc-seq.
 */
zprint.zprint.fzprint_extend = (function zprint$zprint$fzprint_extend(p__42762,ind,zloc_seq){
var map__42763 = p__42762;
var map__42763__$1 = cljs.core.__destructure_map(map__42763);
var options = map__42763__$1;
var map__42764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"extend","extend",1836484006));
var map__42764__$1 = cljs.core.__destructure_map(map__42764);
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42764__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend:",(function (){var G__42765 = cljs.core.first(zloc_seq);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42765) : zprint.zfns.zstring.call(null,G__42765));
})()], 0));
} else {
}

var part = zprint.zprint.partition_all_sym(options,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(options)),zloc_seq);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: partition:",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42761_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,p1__42761_SHARP_);
}),part)], 0));
} else {
}

if(cljs.core.truth_(zprint.zprint.check_for_first_coll_QMARK_(part))){
var value__26923__auto__ = (function (){var result = (function (){var G__42766 = new cljs.core.Keyword(null,"extend","extend",1836484006);
var G__42767 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204));
var G__42768 = ind;
var G__42769 = ind;
var G__42770 = zloc_seq;
var G__42771 = null;
return (zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6 ? zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(G__42766,G__42767,G__42768,G__42769,G__42770,G__42771) : zprint.zprint.fzprint_hang_remaining.call(null,G__42766,G__42767,G__42768,G__42769,G__42770,G__42771));
})();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(result),(2)),new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(result),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))))) && (clojure.string.starts_with_QMARK_(cljs.core.ffirst(result),"\n")))){
return cljs.core.next(result);
} else {
return result;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: fzprint-hang-remaining exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__26923__auto__], 0))], 0));
} else {
}

return value__26923__auto__;
} else {
var value__26923__auto__ = (function (){var G__42772 = new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(options);
var G__42773 = ind;
var G__42774 = zprint.zprint.fzprint_map_two_up(new cljs.core.Keyword(null,"extend","extend",1836484006),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)),ind,false,part);
return (zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.interpose_nl_hf.cljs$core$IFn$_invoke$arity$3(G__42772,G__42773,G__42774) : zprint.zprint.interpose_nl_hf.call(null,G__42772,G__42773,G__42774));
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-extend: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__26923__auto__], 0))], 0));
} else {
}

return value__26923__auto__;
}
});
/**
 * Given a transient vector v, concatenate all of the other
 *   elements in all of the remaining collections onto v.
 */
zprint.zprint.concatv_BANG_ = (function zprint$zprint$concatv_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43938 = arguments.length;
var i__5770__auto___43939 = (0);
while(true){
if((i__5770__auto___43939 < len__5769__auto___43938)){
args__5775__auto__.push((arguments[i__5770__auto___43939]));

var G__43940 = (i__5770__auto___43939 + (1));
i__5770__auto___43939 = G__43940;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (v,rest){
var cols = rest;
var out = v;
while(true){
if(cljs.core.truth_(cols)){
var G__43941 = cljs.core.next(cols);
var G__43942 = (function (){var col = cljs.core.first(cols);
var out__$1 = out;
while(true){
if(cljs.core.truth_(col)){
var G__43943 = cljs.core.next(col);
var G__43944 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out__$1,cljs.core.first(col));
col = G__43943;
out__$1 = G__43944;
continue;
} else {
return out__$1;
}
break;
}
})();
cols = G__43941;
out = G__43942;
continue;
} else {
return out;
}
break;
}
}));

(zprint.zprint.concatv_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(zprint.zprint.concatv_BANG_.cljs$lang$applyTo = (function (seq42775){
var G__42776 = cljs.core.first(seq42775);
var seq42775__$1 = cljs.core.next(seq42775);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42776,seq42775__$1);
}));

/**
 * Do a fzprint-seq like thing, but do it incrementally and
 *   if it gets too big, return nil.
 */
zprint.zprint.fzprint_one_line = (function zprint$zprint$fzprint_one_line(options,ind,zloc_seq){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-one-line:"], 0));
} else {
}

var seq_right = zloc_seq;
var len = cljs.core.count(seq_right);
var last_index = (len - (1));
var gt_1_QMARK_ = (cljs.core.count(seq_right) > (1));
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true);
var zloc_seq__$1 = seq_right;
var new_ind = cljs.core.long$(ind);
var index = (0);
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(zloc_seq__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: exiting count:",cljs.core.count(out)], 0));
} else {
}

return cljs.core.persistent_BANG_(out);
} else {
var next_zloc = cljs.core.first(zloc_seq__$1);
var vec__42783 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,last_index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((!((index === (0)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(6)], null)], null):null),options__$1], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,zprint.zprint.not_rightmost(options__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(7)], null)], null),zprint.zprint.not_rightmost(options__$1)], null)
));
var sep = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42783,(0),null);
var next_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42783,(1),null);
var next_out = (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(next_options,new_ind,next_zloc) : zprint.zprint.fzprint_STAR_.call(null,next_options,new_ind,next_zloc));
var _ = zprint.zprint.log_lines(options__$1,"fzprint-one-line:",new_ind,next_out);
var vec__42786 = zprint.zprint.style_lines(options__$1,new_ind,next_out);
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42786,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42786,(1),null);
var next_lines = vec__42786;
if((!(zprint.zprint.fzfit_one_line(next_options,next_lines)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),"fzprint-one-line: failed, too wide or too many lines!"], 0));
} else {
}

return null;
} else {
var G__43948 = cljs.core.next(zloc_seq__$1);
var G__43949 = (cljs.core.long$(max_width) + (1));
var G__43950 = (index + (1));
var G__43951 = zprint.zprint.concatv_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sep,next_out], 0));
zloc_seq__$1 = G__43948;
new_ind = G__43949;
index = G__43950;
out = G__43951;
continue;
}
}
break;
}
});
/**
 * Take a seq of a zloc, created by (zmap identity zloc).  Return
 *   a seq of the fzprint* of each element.  No spacing between any
 *   of these elements. Note that this is not a style-vec, but a seq
 *   of style-vecs of each of the elements.  These would need to be
 *   concatenated together to become a style-vec.  ind is either a
 *   constant or a seq of indents, one for each element in zloc-seq.
 *   Note that right gets evaluated immediately, while left yields a
 *   lazy sequence which get evaluated later.
 */
zprint.zprint.fzprint_seq = (function zprint$zprint$fzprint_seq(options,ind,zloc_seq){
var max_length = zprint.zprint.get_max_length(options);
var len = cljs.core.count(zloc_seq);
var zloc_seq__$1 = (((len > max_length))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_length,zloc_seq),(new cljs.core.List(null,(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)),null,(1),null))):zloc_seq);
var len__$1 = cljs.core.count(zloc_seq__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-seq: (count zloc-seq):",len__$1,"max-length:",max_length,"ind:",ind], 0));
} else {
}

if(cljs.core.empty_QMARK_(zloc_seq__$1)){
return null;
} else {
if((max_length === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#?#",zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null)], null);
} else {
var left = zprint.zprint.zpmap.cljs$core$IFn$_invoke$arity$4(options,(function (p1__42789_SHARP_,p2__42790_SHARP_){
var G__42791 = zprint.zprint.not_rightmost(options);
var G__42792 = p1__42789_SHARP_;
var G__42793 = p2__42790_SHARP_;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__42791,G__42792,G__42793) : zprint.zprint.fzprint_STAR_.call(null,G__42791,G__42792,G__42793));
}),((cljs.core.coll_QMARK_(ind))?ind:cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(ind)),cljs.core.butlast(zloc_seq__$1));
var right = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42794 = options;
var G__42795 = ((cljs.core.coll_QMARK_(ind))?cljs.core.last(ind):ind);
var G__42796 = cljs.core.last(zloc_seq__$1);
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__42794,G__42795,G__42796) : zprint.zprint.fzprint_STAR_.call(null,G__42794,G__42795,G__42796));
})()], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$1,(1))){
return right;
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([left,right], 0));

}

}
}
});
/**
 * Takes zloc-seq, a seq of a zloc, created by (zmap identity zloc),
 *   and returns a style-vec of the result.  Either it fits on one
 *   line, or it is rendered on multiple lines.  You can force multiple
 *   lines with force-nl?. If the seq is empty, returns :noseq, which
 *   is what you give concat-no-nil if you want this to just disappear.
 *   If you want it to do less than everything in the original zloc,
 *   modify the result of (zmap identity zloc) to just contain what
 *   you want to print. ind is either a single indent, or a seq of
 *   indents, one for each element in zloc-seq.  Don't concatenate an
 *   indent/newline on to the beginning of the output from this routine.
 *   Let this routine do it for you, as it needs to know one is there
 *   in order to properly deal with any newlines in the actual stream.
 *   Else you will get two where you only should have one.
 */
zprint.zprint.fzprint_flow_seq = (function zprint$zprint$fzprint_flow_seq(var_args){
var G__42798 = arguments.length;
switch (G__42798) {
case 5:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 3:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5 = (function (options,ind,zloc_seq,force_nl_QMARK_,nl_first_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-flow-seq: count zloc-seq:",cljs.core.count(zloc_seq),"nl-first?",nl_first_QMARK_,"zloc-seq:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq)], 0))], 0));
} else {
}

var coll_print = zprint.zprint.fzprint_seq(options,ind,zloc_seq);
var one_line = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(8)], null)], null),coll_print));
var _ = zprint.zprint.log_lines(options,"fzprint-flow-seq:",ind,one_line);
var one_line_lines = zprint.zprint.style_lines(options,ind,one_line);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-flow-seq: coll-print:",coll_print], 0))], 0));
} else {
}

var value__26923__auto__ = ((((cljs.core.not(force_nl_QMARK_)) && (zprint.zprint.fzfit_one_line(options,one_line_lines))))?one_line:(((!(cljs.core.empty_QMARK_(coll_print))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,(function (){var G__42799 = options;
var G__42800 = ind;
var G__42801 = coll_print;
var G__42802 = cljs.core.not(nl_first_QMARK_);
return (zprint.zprint.precede_w_nl.cljs$core$IFn$_invoke$arity$4 ? zprint.zprint.precede_w_nl.cljs$core$IFn$_invoke$arity$4(G__42799,G__42800,G__42801,G__42802) : zprint.zprint.precede_w_nl.call(null,G__42799,G__42800,G__42801,G__42802));
})()):new cljs.core.Keyword(null,"noseq","noseq",405935768)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-flow-seq: exit:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__26923__auto__], 0))], 0));
} else {
}

return value__26923__auto__;
}));

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc_seq){
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(options,ind,zloc_seq,null,null);
}));

(zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc_seq,force_nl_QMARK_){
return zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(options,ind,zloc_seq,force_nl_QMARK_,null);
}));

(zprint.zprint.fzprint_flow_seq.cljs$lang$maxFixedArity = 5);

/**
 * Try out the given zloc, and if it fits on the current line, just
 *   do that. It might fit on the same line, as this may not be the rest
 *   of the list that we are printing. If not, check it out with good-enough?
 *   and do the best you can.  Three choices, really: fits on same line, 
 *   does ok as hanging, or better with flow. hindent is hang-indent, and 
 *   findent is flow-indent, and each contains the initial separator.  
 *   Might be nice if the fn-style actually got sent to this fn.
 */
zprint.zprint.fzprint_hang_one = (function zprint$zprint$fzprint_hang_one(caller,p__42803,hindent,findent,zloc){
var map__42804 = p__42803;
var map__42804__$1 = cljs.core.__destructure_map(map__42804);
var options = map__42804__$1;
var map__42805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42804__$1,caller);
var map__42805__$1 = cljs.core.__destructure_map(map__42805);
var hang_avoid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42805__$1,new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42804__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42804__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-hang-one:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))," hindent:",hindent,"findent:",findent], 0))], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.dots(new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options)),"h1 caller:",caller,(function (){var G__42806 = (cljs.core.truth_((zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcoll_QMARK_.call(null,zloc)))?(zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc)):zloc);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42806) : zprint.zfns.zstring.call(null,G__42806));
})()], 0));
} else {
}

var local_options = ((((cljs.core.not(one_line_QMARK_)) && (cljs.core.not(new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true):options);
var hindent__$1 = (function (){var or__5045__auto__ = hindent;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return findent;
}
})();
var hang_count = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc));
var hanging = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hindent__$1,findent)) && (((cljs.core.not(hang_avoid)) || ((hang_count < ((width - hindent__$1) * hang_avoid)))))))?(function (){var G__42809 = zprint.zprint.in_hang(local_options);
var G__42810 = hindent__$1;
var G__42811 = zloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__42809,G__42810,G__42811) : zprint.zprint.fzprint_STAR_.call(null,G__42809,G__42810,G__42811));
})():null);
var hanging__$1 = zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(9)], null)], null),hanging], 0));
var _ = zprint.zprint.log_lines(options,"fzprint-hang-one: hanging:",(hindent__$1 - (1)),hanging__$1);
var hr_lines = zprint.zprint.style_lines(options,(hindent__$1 - (1)),hanging__$1);

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: hr-lines:",hr_lines,"hang-count:",hang_count], 0));
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = zprint.zprint.fzfit_one_line(options,hr_lines);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return one_line_QMARK_;
}
})())){
return hanging__$1;
} else {
var flow = zprint.zprint.prepend_nl(options,findent,(zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(options,findent,zloc) : zprint.zprint.fzprint_STAR_.call(null,options,findent,zloc)));
var ___$1 = zprint.zprint.log_lines(options,"fzprint-hang-one: flow:",findent,flow);
var fd_lines = zprint.zprint.style_lines(options,findent,flow);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: fd-lines:",fd_lines], 0)):null);
var ___$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-one: ending: hang-count:",hang_count,"hanging:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hanging__$1], 0)),"flow:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([flow], 0))], 0)):null);
var hr_good_QMARK_ = (function (){var and__5043__auto__ = new cljs.core.Keyword(null,"hang?","hang?",-579442854).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)));
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = hr_lines;
if(cljs.core.truth_(and__5043__auto____$1)){
return zprint.zprint.good_enough_QMARK_(caller,options,new cljs.core.Keyword(null,"none-hang-one","none-hang-one",-1392848107),hang_count,(hindent__$1 - findent),hr_lines,fd_lines);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(hr_good_QMARK_)){
return hanging__$1;
} else {
return flow;
}
}
});
/**
 * Given a seq of zlocs, work backwards from the end, and see how
 *   many elements are pairs of constants (using zconstant? or the
 *   supplied constant-pair-fn).  So that (... :a (stuff) :b (bother))
 *   returns 4, since both :a and :b are zconstant? true. This is made
 *   more difficult by having to skip comments along the way as part
 *   of the pair check, but keep track of the ones we skip so the count
 *   is right in the end.  We don't expect any spaces in this but
 *   newlines must be handled, because this seq should have been
 *   produced by zmap or its equivalent.  Returns two things:
 *   [paired-item-count actual-paired-items], where paired-item-count
 *   is the number of things from the end of the seq you have to trim
 *   off to get the constant pairs included, and the actual-paired-items
 *   is the count of the items to be checked against the constant-pair-min
 *   (which is exclusive of comments and newlines).
 */
zprint.zprint.count_constant_pairs = (function zprint$zprint$count_constant_pairs(options,constant_pair_fn,zloc_seq){
var zloc_seq_rev = cljs.core.reverse(zloc_seq);
var element_count = (0);
var paired_element_count = (0);
var constant_required_QMARK_ = null;
var pair_size = (0);
var actual_pair_size = (0);
while(true){
var element = cljs.core.first(zloc_seq_rev);
if(cljs.core.empty_QMARK_(zloc_seq_rev)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(element_count - pair_size),(paired_element_count - actual_pair_size)], null);
} else {
var comment_or_newline_QMARK_ = (zprint.zprint.zcomment_or_newline_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.zcomment_or_newline_QMARK_.cljs$core$IFn$_invoke$arity$1(element) : zprint.zprint.zcomment_or_newline_QMARK_.call(null,element));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(comment_or_newline_QMARK_);
if(and__5043__auto__){
var and__5043__auto____$1 = constant_required_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
if(cljs.core.truth_(constant_pair_fn)){
return cljs.core.not((cljs.core.truth_((zprint.zfns.zsexpr_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr_QMARK_.cljs$core$IFn$_invoke$arity$1(element) : zprint.zfns.zsexpr_QMARK_.call(null,element)))?(function (){var G__42825 = zprint.zprint.get_sexpr(options,element);
return (constant_pair_fn.cljs$core$IFn$_invoke$arity$1 ? constant_pair_fn.cljs$core$IFn$_invoke$arity$1(G__42825) : constant_pair_fn.call(null,G__42825));
})():null));
} else {
return cljs.core.not((zprint.zfns.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(element) : zprint.zfns.zconstant_QMARK_.call(null,element)));
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(element_count - pair_size),(paired_element_count - actual_pair_size)], null);
} else {
var G__43974 = cljs.core.next(zloc_seq_rev);
var G__43975 = (element_count + (1));
var G__43976 = (cljs.core.truth_(comment_or_newline_QMARK_)?paired_element_count:(paired_element_count + (1)));
var G__43977 = (cljs.core.truth_(comment_or_newline_QMARK_)?constant_required_QMARK_:cljs.core.not(constant_required_QMARK_));
var G__43978 = (cljs.core.truth_((function (){var and__5043__auto__ = constant_required_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(comment_or_newline_QMARK_);
} else {
return and__5043__auto__;
}
})())?(0):(pair_size + (1)));
var G__43979 = (cljs.core.truth_((function (){var and__5043__auto__ = constant_required_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(comment_or_newline_QMARK_);
} else {
return and__5043__auto__;
}
})())?(0):(cljs.core.truth_(comment_or_newline_QMARK_)?actual_pair_size:(actual_pair_size + (1))));
zloc_seq_rev = G__43974;
element_count = G__43975;
paired_element_count = G__43976;
constant_required_QMARK_ = G__43977;
pair_size = G__43978;
actual_pair_size = G__43979;
continue;
}
}
break;
}
});
/**
 * Argument is a zloc-seq.  Output is a [pair-seq non-paired-item-count],
 *   if any.  If there are no pair-seqs, pair-seq must be nil, not an
 *   empty seq.  This will largely ignore newlines and comments.
 */
zprint.zprint.constant_pair = (function zprint$zprint$constant_pair(caller,p__42828,zloc_seq){
var map__42832 = p__42828;
var map__42832__$1 = cljs.core.__destructure_map(map__42832);
var options = map__42832__$1;
var map__42833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42832__$1,caller);
var map__42833__$1 = cljs.core.__destructure_map(map__42833);
var constant_pair_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42833__$1,new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437));
var constant_pair_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42833__$1,new cljs.core.Keyword(null,"constant-pair-fn","constant-pair-fn",-1611174375));
var constant_pair_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42833__$1,new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721));
if(cljs.core.truth_(constant_pair_QMARK_)){
var vec__42836 = zprint.zprint.count_constant_pairs(options,constant_pair_fn,zloc_seq);
var paired_item_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42836,(0),null);
var actual_paired_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42836,(1),null);
var non_paired_item_count = (cljs.core.count(zloc_seq) - paired_item_count);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"constant-pair: non-paired-items:",non_paired_item_count,"paired-item-count:",paired_item_count,"actual-paired-items:",actual_paired_items], 0)):null);
var pair_seq = (((actual_paired_items >= constant_pair_min))?cljs.core.drop.cljs$core$IFn$_invoke$arity$2(non_paired_item_count,zloc_seq):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pair_seq,non_paired_item_count], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.count(zloc_seq)], null);
}
});
/**
 * If this zloc is a comment or a newline, return true.
 */
zprint.zprint.zcomment_or_newline_QMARK_ = (function zprint$zprint$zcomment_or_newline_QMARK_(zloc){
var or__5045__auto__ = (zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcomment_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znewline_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znewline_QMARK_.call(null,zloc));
}
});
/**
 * Given a style-vec, ensure it starts with a newline.  If it doesn't,
 *   then put one in.  We could take the whole newline, but the indent is
 *   really the only unique thing.
 */
zprint.zprint.ensure_start_w_nl = (function zprint$zprint$ensure_start_w_nl(ind,style_vec){
var element_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(style_vec),(2));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,new cljs.core.Keyword(null,"indent","indent",-148200125))))){
return style_vec;
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(6)], null)], null),style_vec], 0));
}
});
/**
 * Given a style-vec, ensure it ends with a newline.  If it doesn't,
 *   then put one in.
 */
zprint.zprint.ensure_end_w_nl = (function zprint$zprint$ensure_end_w_nl(ind,style_vec){
var element_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.last(style_vec),(2));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,new cljs.core.Keyword(null,"indent","indent",-148200125))))){
return style_vec;
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(7)], null)], null)], 0));
}
});
/**
 * zloc-seq is a seq of zlocs of a collection.  We already know
 *   that the given zloc won't fit on the current line. [Besides, we
 *   ensure that if there are two things remaining anyway. ???] So
 *   now, try hanging and see if that is better than flow.  Unless
 *   :hang? is nil, in which case we will just flow.  hindent is
 *   hang-indent, and findent is flow-indent. This should never be
 *   called with :one-line because this is only called from fzprint-list*
 *   after the one-line processing is done. If the hindent equals the
 *   flow indent, then just do flow.  Do only zloc-count non-whitespace
 *   elements of zloc-seq if it exists.
 */
zprint.zprint.fzprint_hang_remaining = (function zprint$zprint$fzprint_hang_remaining(var_args){
var G__42853 = arguments.length;
switch (G__42853) {
case 7:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 6:
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7 = (function (caller,p__42855,hindent,findent,zloc_seq,fn_style,zloc_count){
var map__42858 = p__42855;
var map__42858__$1 = cljs.core.__destructure_map(map__42858);
var options = map__42858__$1;
var map__42859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,caller);
var map__42859__$1 = cljs.core.__destructure_map(map__42859);
var hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42859__$1,new cljs.core.Keyword(null,"hang?","hang?",-579442854));
var constant_pair_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42859__$1,new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437));
var constant_pair_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42859__$1,new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721));
var hang_avoid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42859__$1,new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568));
var hang_expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42859__$1,new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559));
var hang_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42859__$1,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424));
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42859__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var respect_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42859__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,new cljs.core.Keyword(null,"width","width",-384071477));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.dots(new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options)),"hr:",(function (){var G__42862 = cljs.core.first(zloc_seq);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42862) : zprint.zfns.zstring.call(null,G__42862));
})()], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-hang-remaining first:",(function (){var G__42863 = cljs.core.first(zloc_seq);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__42863) : zprint.zfns.zstring.call(null,G__42863));
})(),"hindent:",hindent,"findent:",findent,"caller:",caller,"nl-separator?:",nl_separator_QMARK_,"(count zloc-seq):",cljs.core.count(zloc_seq)], 0))], 0));
} else {
}

var seq_right = zloc_seq;
var seq_right__$1 = (cljs.core.truth_(zloc_count)?cljs.core.take.cljs$core$IFn$_invoke$arity$2(zloc_count,seq_right):seq_right);
if(cljs.core.empty_QMARK_(seq_right__$1)){
return new cljs.core.Keyword(null,"noseq","noseq",405935768);
} else {
var vec__42868 = zprint.zprint.constant_pair(caller,options,seq_right__$1);
var pair_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42868,(0),null);
var non_paired_item_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42868,(1),null);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining count pair-seq:",cljs.core.count(pair_seq)], 0)):null);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: first hang?",hang_QMARK_,"hang-avoid",hang_avoid,"findent:",findent,"hindent:",hindent,"(count seq-right):",cljs.core.count(seq_right__$1),"thing:",(cljs.core.truth_(hang_avoid)?((width - hindent) * hang_avoid):null)], 0)):null);
var hang_QMARK___$1 = (function (){var and__5043__auto__ = hang_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hindent,findent)) && (((cljs.core.not(hang_avoid)) || ((cljs.core.count(seq_right__$1) < ((width - hindent) * hang_avoid))))));
} else {
return and__5043__auto__;
}
})();
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: second hang?",hang_QMARK___$1], 0)):null);
var hanging = (function (){var hang_result = (cljs.core.truth_(hang_QMARK___$1)?((cljs.core.not(pair_seq))?zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(zprint.zprint.in_hang(options),hindent,seq_right__$1,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),null):(((!((non_paired_item_count === (0)))))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var value__26923__auto__ = zprint.zprint.ensure_end_w_nl(hindent,zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(zprint.zprint.not_rightmost(zprint.zprint.in_hang(options)),hindent,cljs.core.take.cljs$core$IFn$_invoke$arity$2(non_paired_item_count,seq_right__$1),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: mapv:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__26923__auto__], 0))], 0));
} else {
}

return value__26923__auto__;
})(),(function (){var value__26923__auto__ = zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3(zprint.zprint.in_hang(options),hindent,pair_seq);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: fzprint-hang:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__26923__auto__], 0))], 0));
} else {
}

return value__26923__auto__;
})()], 0)):zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3(zprint.zprint.in_hang(options),hindent,pair_seq))):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hang_result,zprint.zprint.style_lines(options,hindent,hang_result)], null);
})();
var vec__42871 = zprint.zprint.zat(options,hanging);
var hanging__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42871,(0),null);
var vec__42874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42871,(1),null);
var hanging_line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42874,(0),null);
var hanging_lines = vec__42874;
var hang_count = cljs.core.count(seq_right__$1);
var flow_QMARK_ = cljs.core.not(zprint.zprint.use_hang_QMARK_(caller,options,hindent,hang_count,hanging_line_count));
var flow = ((flow_QMARK_)?(function (){var flow_result = ((cljs.core.not(pair_seq))?zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(options,findent,seq_right__$1,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"nl-first","nl-first",-462968863)):(((!((non_paired_item_count === (0)))))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.ensure_end_w_nl(findent,zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(zprint.zprint.not_rightmost(options),findent,cljs.core.take.cljs$core$IFn$_invoke$arity$2(non_paired_item_count,seq_right__$1),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"nl-first","nl-first",-462968863))),zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3(options,findent,pair_seq)], 0)):zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3(options,findent,pair_seq)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_result,zprint.zprint.style_lines(options,findent,flow_result)], null);
})():null);
var vec__42877 = (cljs.core.truth_(flow)?zprint.zprint.zat(options,flow):null);
var flow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42877,(0),null);
var flow_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42877,(1),null);
var ___$3 = zprint.zprint.log_lines(options,"fzprint-hang-remaining: hanging:",hindent,hanging__$1);
var ___$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: hanging-lines:",hanging_lines,"hang-count:",hang_count], 0)):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-hang-remaining: flow-lines:",flow_lines], 0));
} else {
}

if(cljs.core.truth_(dbg_QMARK_)){
if((hang_count === (0))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hang-count = 0:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq))], 0));
} else {
}
} else {
}

zprint.zprint.log_lines(options,"fzprint-hang-remaining: flow",findent,flow__$1);

if(cljs.core.truth_((function (){var and__5043__auto__ = hanging_lines;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(flow_lines);
} else {
return and__5043__auto__;
}
})())){
if(zprint.zprint.first_nl_QMARK_(hanging__$1)){
return hanging__$1;
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(10)], null)], null),hanging__$1], 0));
}
} else {
if(cljs.core.truth_(flow_lines)){
if(cljs.core.truth_((function (){var and__5043__auto__ = hanging_lines;
if(cljs.core.truth_(and__5043__auto__)){
return zprint.zprint.good_enough_QMARK_(caller,options,fn_style,hang_count,(hindent - findent),hanging_lines,((((cljs.core.not(pair_seq)) && ((cljs.core.first(flow_lines) > (1)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(flow_lines) - (1)),cljs.core.second(flow_lines),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flow_lines,(2))], null):flow_lines));
} else {
return and__5043__auto__;
}
})())){
if(zprint.zprint.first_nl_QMARK_(hanging__$1)){
return hanging__$1;
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(10)], null)], null),hanging__$1], 0));
}
} else {
return zprint.zprint.ensure_start_w_nl(findent,flow__$1);
}
} else {
return null;
}
}
}
}));

(zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6 = (function (caller,options,hindent,findent,zloc,fn_style){
return zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7(caller,options,hindent,findent,zloc,fn_style,null);
}));

(zprint.zprint.fzprint_hang_remaining.cljs$lang$maxFixedArity = 7);

/**
 * Get the zloc seq, with or without newlines, as indicated by the options.
 */
zprint.zprint.fzprint_get_zloc_seq = (function zprint$zprint$fzprint_get_zloc_seq(caller,options,zloc){
var caller_options = (caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options));
var zloc_seq = (cljs.core.truth_(new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635).cljs$core$IFn$_invoke$arity$1(caller_options))?(zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc)):(cljs.core.truth_(new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998).cljs$core$IFn$_invoke$arity$1(caller_options))?(zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc)):(zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc))
));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-get-zloc-seq:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq)], 0))], 0));
} else {
}

return zloc_seq;
});
/**
 * Given an zloc, is it a newline or a comment?
 */
zprint.zprint.newline_or_comment_QMARK_ = (function zprint$zprint$newline_or_comment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
var zloc_tag = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc_tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc_tag,new cljs.core.Keyword(null,"comment","comment",532206069))));
} else {
return null;
}
});
/**
 * Given a seq of style-vecs, look at the last one, and if it is a
 *   :newline, then remove it.  But the last one might be a single
 *   one, in which case we will remove the whole thing, and it might be
 *   the last one in a sequence, in which case we will remove just that
 *   one.  If there is nothing left, return [[["" :none :none]]].
 */
zprint.zprint.remove_last_newline = (function zprint$zprint$remove_last_newline(ssv){
var last_style_vec = cljs.core.last(ssv);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.last(last_style_vec),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))))){
return ssv;
} else {
var last_len = cljs.core.count(last_style_vec);
var total_len = cljs.core.count(ssv);
var remove_one = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(ssv),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_len,(1)))?cljs.core.PersistentVector.EMPTY:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.butlast(last_style_vec)],null))));
if(cljs.core.empty_QMARK_(remove_one)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)], null);
} else {
return remove_one;
}
}
});
/**
 * Given a single style-vec, look at the last element, and if it is a
 *   :newline, remove it.  If there is nothing left, return :noseq
 */
zprint.zprint.remove_one_newline = (function zprint$zprint$remove_one_newline(style_vec){
var last_style_vec = cljs.core.last(style_vec);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(last_style_vec,(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))))){
return style_vec;
} else {
var remaining = cljs.core.butlast(style_vec);
if(cljs.core.empty_QMARK_(remaining)){
return new cljs.core.Keyword(null,"noseq","noseq",405935768);
} else {
return remaining;
}
}
});
/**
 * Given [[[";stuff" :none :comment]]] or 
 *   [[[";bother" :none :comment-inline 1]]] add ["
 * " :none :newline]
 *   to the inside of it.
 */
zprint.zprint.add_newline_to_comment = (function zprint$zprint$add_newline_to_comment(indent,fzprint_STAR__return){
var the_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fzprint_STAR__return),(2));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_type,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_type,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fzprint_STAR__return,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(indent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"newline","newline",1790071323),(1)], null)], null));
} else {
return fzprint_STAR__return;
}
});
/**
 * Given a zloc-seq, gather newlines and comments up to the next
 *   zloc into a seq.  Returns [seq next-zloc next-count].
 */
zprint.zprint.gather_up_to_next_zloc = (function zprint$zprint$gather_up_to_next_zloc(zloc_seq){
var nloc_seq = zloc_seq;
var out = cljs.core.PersistentVector.EMPTY;
var next_count = (0);
while(true){
if(cljs.core.not(zprint.zprint.newline_or_comment_QMARK_(cljs.core.first(nloc_seq)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,cljs.core.first(nloc_seq),next_count], null);
} else {
var G__44025 = cljs.core.next(nloc_seq);
var G__44026 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(nloc_seq));
var G__44027 = (next_count + (1));
nloc_seq = G__44025;
out = G__44026;
next_count = G__44027;
continue;
}
break;
}
});
/**
 * Using the information returned from fzprint-up-to-first-zloc or
 *   fzprint-up-to-next-zloc, find the next zloc and return 
 *   [pre-next-style-vec next-zloc next-count zloc-seq]
 */
zprint.zprint.fzprint_up_to_next_zloc = (function zprint$zprint$fzprint_up_to_next_zloc(caller,options,ind,p__42901){
var vec__42906 = p__42901;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42906,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42906,(1),null);
var current_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42906,(2),null);
var zloc_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42906,(3),null);
var next_data = vec__42906;
var starting_count = (current_count + (1));
var nloc_seq = cljs.core.nthnext(zloc_seq,starting_count);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-up-to-next-zloc: starting-count:",starting_count,"zloc-seq:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq)], 0))], 0));
} else {
}

if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noseq","noseq",405935768),cljs.core.first(nloc_seq),starting_count,zloc_seq], null);
} else {
var vec__42917 = zprint.zprint.gather_up_to_next_zloc(nloc_seq);
var pre_next_zloc_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42917,(0),null);
var next_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42917,(1),null);
var next_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42917,(2),null);
var next_count__$1 = (starting_count + next_count);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-up-to-next-zloc: next-count:",next_count__$1,"pre-next-zloc-seq:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,pre_next_zloc_seq)], 0))], 0));
} else {
}

if(cljs.core.empty_QMARK_(pre_next_zloc_seq)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noseq","noseq",405935768),next_zloc,next_count__$1,zloc_seq], null);
} else {
var coll_print = zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3(options,ind,pre_next_zloc_seq);
var coll_print__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll_print);
var coll_print__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(starting_count,(0)))?zprint.zprint.remove_last_newline(coll_print__$1):coll_print__$1);
var coll_out = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,coll_print__$2);
var coll_out__$1 = (((function (){var and__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(starting_count,(0));
if(and__5043__auto__){
var first_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(coll_out),(2));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_type,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_type,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
} else {
return and__5043__auto__;
}
})())?zprint.zprint.ensure_start_w_nl(ind,coll_out):coll_out);
var coll_out__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(starting_count,(0)))?coll_out__$1:zprint.zprint.ensure_end_w_nl(ind,coll_out__$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_out__$2,next_zloc,next_count__$1,zloc_seq], null);
}
}
});
/**
 * Returns [pre-first-style-vec first-zloc first-count zloc-seq], where
 *   pre-first-style-vec will be :noseq if there isn't anything, and first-count
 *   is what you give to nthnext to get to the first-zloc in zloc-seq.
 */
zprint.zprint.fzprint_up_to_first_zloc = (function zprint$zprint$fzprint_up_to_first_zloc(caller,options,ind,zloc){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"noseq","noseq",405935768),cljs.core.first(zloc),(0),zloc], null);
} else {
var zloc_seq = zprint.zprint.fzprint_get_zloc_seq(caller,options,zloc);
return zprint.zprint.fzprint_up_to_next_zloc(caller,options,ind,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(-1),zloc_seq], null));
}
});
/**
 * Using return from fzprint-up-to-first-zloc or fzprint-up-to-next-zloc,
 *   [pre-next-style-vec next-zloc next-count zloc-seq], return a zloc-seq
 *   pointer to just beyond the specific zloc which was found by the
 *   fzprint-up-to-first or fzprint-up-to-next call.  You don't give this
 *   a number, you give it the data structure from the thing that you found.
 */
zprint.zprint.get_zloc_seq_right = (function zprint$zprint$get_zloc_seq_right(p__42926){
var vec__42927 = p__42926;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42927,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42927,(1),null);
var next_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42927,(2),null);
var zloc_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42927,(3),null);
var input_data = vec__42927;
if((next_count >= cljs.core.count(zloc_seq))){
throw (new Error(["get-zloc-seq-right input data inconsistent:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_data)].join('')));
} else {
var zloc_seq__$1 = cljs.core.nthnext(zloc_seq,(next_count + (1)));
return zloc_seq__$1;
}
});
/**
 * Is this a newline or equivalent?  Comments and newlines are both
 *   newlines for the purposed of this routine.
 */
zprint.zprint.at_newline_QMARK_ = (function zprint$zprint$at_newline_QMARK_(zloc){
var this_tag = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_tag,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_tag,new cljs.core.Keyword(null,"newline","newline",1790071323))));
});
/**
 * Given a zloc that is down inside of a collection, presumably
 *   a list, return a vector containing the number of printing elements
 *   we had to traverse to get to it as well as the newline.
 */
zprint.zprint.next_newline = (function zprint$zprint$next_newline(zloc){
var nloc = zloc;
var index = (0);
while(true){
var next_right = rewrite_clj.zip.right_STAR_(nloc);
if(cljs.core.truth_(next_right)){
if(zprint.zprint.at_newline_QMARK_(nloc)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,nloc], null);
} else {
var G__44037 = rewrite_clj.zip.right_STAR_(nloc);
var G__44038 = (((!(zprint.zutil.whitespace_QMARK_(nloc))))?(index + (1)):index);
nloc = G__44037;
index = G__44038;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,nloc], null);
}
break;
}
});
/**
 * Return the next actual element, ignoring comments and whitespace
 *   and everything else but real elements.
 */
zprint.zprint.next_actual = (function zprint$zprint$next_actual(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not(nloc)){
return nloc;
} else {
var next_nloc = zprint.zutil.zrightnws(nloc);
var next_tag = rewrite_clj.zip.tag(next_nloc);
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_tag,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_tag,new cljs.core.Keyword(null,"comment","comment",532206069))))))){
return next_nloc;
} else {
var G__44039 = next_nloc;
nloc = G__44039;
continue;
}
}
break;
}
});
/**
 * Return the first actual element, ignoring comments and whitespace
 *   and everything else but real elements.
 */
zprint.zprint.first_actual = (function zprint$zprint$first_actual(zloc){
if(zprint.zprint.at_newline_QMARK_(zloc)){
return zprint.zprint.next_actual(zloc);
} else {
return zloc;
}
});
/**
 * Should we hang this zloc, or flow it.  We assume that we are at
 *   the start of the collection (though this could be generalized to
 *   deal with other starting locations easily enough).  Return true
 *   if we should hang it based just on the information in the zloc
 *   itself.  The criteria are: If there is a newline after the second
 *   thing in the zloc, and the amount of space prior to the third thing
 *   is the same as the amount of space prior to the second thing, then
 *   the incoming zloc was hung and we should do the same. Of course, it
 *   would also only be hung if the second thing was on the same line as
 *   the first thing.
 */
zprint.zprint.hang_zloc_QMARK_ = (function zprint$zprint$hang_zloc_QMARK_(zloc){
var zloc__$1 = zprint.zprint.first_actual(zloc);
var vec__42930 = zprint.zprint.next_newline(zloc__$1);
var count_prior_to_newline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42930,(0),null);
var newline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42930,(1),null);
if((count_prior_to_newline < (2))){
return false;
} else {
var second_element = zprint.zutil.zrightnws(((zprint.zutil.whitespace_QMARK_(zloc__$1))?zprint.zutil.zrightnws(zloc__$1):zloc__$1));
var second_indent = zprint.comment.length_before(second_element);
var third_element = zprint.zprint.next_actual(second_element);
var third_indent = zprint.comment.length_before(third_element);
var and__5043__auto__ = second_element;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = third_element;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(second_indent,third_indent);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
/**
 * Take a style-vec that was once output from indent-zmap, and fix
 *   up all of the :indent elements in it by adding (- actual-ind ind)
 *   to them.  If we find a multiple thing in here, call indent-shift
 *   recursively with the ind and cur-ind that is approprite.  All of
 *   the actual indents are correct already -- all we are doing is
 *   setting up their base.  There is no attempt to determine if we
 *   are exceeding any configured width.
 */
zprint.zprint.indent_shift = (function zprint$zprint$indent_shift(caller,options,ind,actual_ind,svec){
var shift_ind = actual_ind;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["indent-shift: ind:",ind,"actual-ind:",actual_ind,"shift-ind:",shift_ind,"svec:",svec], 0))], 0));
} else {
}

var cur_seq = svec;
var cur_ind = actual_ind;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cur_seq)){
return out;
} else {
var this_seq = cljs.core.first(cur_seq);
var new_seq = ((cljs.core.vector_QMARK_(cljs.core.first(this_seq)))?(zprint.zprint.indent_shift.cljs$core$IFn$_invoke$arity$5 ? zprint.zprint.indent_shift.cljs$core$IFn$_invoke$arity$5(caller,options,ind,cur_ind,this_seq) : zprint.zprint.indent_shift.call(null,caller,options,ind,cur_ind,this_seq)):(function (){var vec__42942 = this_seq;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42942,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42942,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42942,(2),null);
var next_seq = cljs.core.first(cljs.core.next(cur_seq));
var this_shift = (cljs.core.truth_((function (){var and__5043__auto__ = next_seq;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(cljs.core.vector_QMARK_(cljs.core.first(next_seq))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(next_seq,(2)),new cljs.core.Keyword(null,"indent","indent",-148200125))));
} else {
return and__5043__auto__;
}
})())?(0):shift_ind);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"indent","indent",-148200125))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(this_shift))].join(''),color,type,(42)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"right","right",-452581833))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,color,type,shift_ind], null);
} else {
return this_seq;

}
}
})());
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["indent-shift: cur-ind:",cur_ind,"this-seq:",this_seq,"new-seq:",new_seq], 0))], 0)):null);
var vec__42939 = zprint.zprint.style_lines(options,cur_ind,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seq], null));
var linecnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42939,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42939,(1),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42939,(2),null);
var last_width = cljs.core.last(lines);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["indent-shift: last-width:",last_width,"new-seq:",new_seq], 0))], 0));
} else {
}

var G__44045 = cljs.core.next(cur_seq);
var G__44046 = last_width;
var G__44047 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_seq);
cur_seq = G__44045;
cur_ind = G__44046;
out = G__44047;
continue;
}
break;
}
});
/**
 * Implement :indent-only?.  This routine is the central one through
 *   which all :indent-only? processing flows, and replaces all of the
 *   detailed logic in fzprint-list*, fzprint-vec*, and fzprint-map*.
 *   This is called directly by fzprint-vec*, which handles both vectors
 *   and sets, and through fzprint-indent by fzprint-list* and
 *   fzprint-map*.  Thus, all of the data structures get their
 *   :indent-only? processing handled by ident-zmap.  coll-print is
 *   the output from fzprint-seq, which is a style-vec in the making
 *   without spacing, but with extra [] around the elements.  Everything
 *   is based off of ind, and we know nothing to the left of that.
 *   ind must be the left end of everything, not the right of l-str!
 *   The actual-ind is to the right of l-str.  When we get a newline,
 *   replace any spaces after it with our own, and that would be to
 *   bring it to ind + indent.  
 */
zprint.zprint.indent_zmap = (function zprint$zprint$indent_zmap(var_args){
var G__42946 = arguments.length;
switch (G__42946) {
case 7:
return zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 6:
return zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7 = (function (caller,p__42947,ind,actual_ind,coll_print,indent,first_indent_only_QMARK_){
var map__42948 = p__42947;
var map__42948__$1 = cljs.core.__destructure_map(map__42948);
var options = map__42948__$1;
var map__42949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42948__$1,caller);
var map__42949__$1 = cljs.core.__destructure_map(map__42949);
var wrap_after_multi_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42949__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42948__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42948__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var coll_print__$1 = (zprint.zprint.merge_fzprint_seq.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.merge_fzprint_seq.cljs$core$IFn$_invoke$arity$1(coll_print) : zprint.zprint.merge_fzprint_seq.call(null,coll_print));
var last_index = (cljs.core.count(coll_print__$1) - (1));
var rightcnt__$1 = zprint.zprint.fix_rightcnt(rightcnt);
var actual_indent = (ind + indent);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["indent-zmap: ind:",ind,"actual-ind:",actual_ind,"first-indent-only?",first_indent_only_QMARK_,"indent:",indent,"actual-indent:",actual_indent,"coll-print:",coll_print__$1], 0))], 0));
} else {
}

var cur_seq = coll_print__$1;
var cur_ind = actual_ind;
var index = (0);
var beginning_QMARK_ = true;
var l_str_indent_QMARK_ = true;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cur_seq)){
return out;
} else {
var this_seq = cljs.core.first(cur_seq);
if(cljs.core.truth_(this_seq)){
var multi_QMARK_ = (cljs.core.count(this_seq) > (1));
var _ = zprint.zprint.log_lines(options,"indent-zmap:",ind,this_seq);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["indent-zmap loop: cur-ind:",cur_ind,"multi?",multi_QMARK_,"(count this-seq):",cljs.core.count(this_seq),"this-seq:",this_seq,"out:",out], 0))], 0)):null);
var this_seq__$1 = ((multi_QMARK_)?zprint.zprint.indent_shift(caller,options,actual_ind,cur_ind,this_seq):this_seq);
var vec__42953 = zprint.zprint.style_lines(options,cur_ind,this_seq__$1);
var linecnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42953,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42953,(1),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42953,(2),null);
var last_width = cljs.core.last(lines);
var thetype = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.last(this_seq__$1),(2));
var len = (last_width - cur_ind);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"linecnt:",linecnt,"last-width:",last_width,"len:",len,"type:",thetype], 0)):null);
var len__$1 = (function (){var x__5130__auto__ = (0);
var y__5131__auto__ = len;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thetype,new cljs.core.Keyword(null,"newline","newline",1790071323));
var comma_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thetype,new cljs.core.Keyword(null,"comma","comma",1699024745));
var isempty_QMARK_ = cljs.core.empty_QMARK_(cljs.core.first(cljs.core.first(this_seq__$1)));
var comment_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thetype,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thetype,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var l_str_indent_QMARK___$1 = ((l_str_indent_QMARK_) && (((comment_QMARK_) || (newline_QMARK_))));
var actual_indent__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = (index > (0));
if(and__5043__auto__){
return first_indent_only_QMARK_;
} else {
return and__5043__auto__;
}
})())?ind:(ind + indent));
var width__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,last_index))?(width - rightcnt__$1):width);
var fit_QMARK_ = ((cur_ind + len__$1) <= width__$1);
var new_ind = ((newline_QMARK_)?actual_indent__$1:((cur_ind + (1)) + len__$1)
);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["------ this-seq:",this_seq__$1,"lines:",lines,"linecnt:",linecnt,"multi?",multi_QMARK_,"thetype:",thetype,"newline?:",newline_QMARK_,"comment?:",comment_QMARK_,"comma?:",comma_QMARK_,"l-str-indent?:",l_str_indent_QMARK___$1,"first-indent-only?",first_indent_only_QMARK_,"actual-indent:",actual_indent__$1,"index:",index,"beginning?:",beginning_QMARK_,"max-width:",max_width,"last-width:",last_width,"len:",len__$1,"cur-ind:",cur_ind,"isempty?:",isempty_QMARK_,"new-ind:",new_ind,"width:",width__$1,"fit?",fit_QMARK_], 0))], 0));
} else {
}

var G__44051 = cljs.core.next(cur_seq);
var G__44052 = new_ind;
var G__44053 = (index + (1));
var G__44054 = ((((isempty_QMARK_) && (beginning_QMARK_))) || (((newline_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thetype,new cljs.core.Keyword(null,"indent","indent",-148200125))))));
var G__44055 = l_str_indent_QMARK___$1;
var G__44056 = ((isempty_QMARK_)?out:cljs.core.concat.cljs$core$IFn$_invoke$arity$2(out,((newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var next_seq = cljs.core.first(cljs.core.next(cur_seq));
var newline_next_QMARK_ = (cljs.core.truth_(next_seq)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(next_seq),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323)):null);
if(cljs.core.truth_(newline_next_QMARK_)){
return "";
} else {
return zprint.comment.blanks(((l_str_indent_QMARK___$1)?actual_ind:actual_indent__$1));
}
})())].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(12)], null)], null):(((index === (0)))?this_seq__$1:((((beginning_QMARK_) || (comma_QMARK_)))?this_seq__$1:zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(12)], null)], null),this_seq__$1], 0)))
))));
cur_seq = G__44051;
cur_ind = G__44052;
index = G__44053;
beginning_QMARK_ = G__44054;
l_str_indent_QMARK_ = G__44055;
out = G__44056;
continue;
} else {
return null;
}
}
break;
}
}));

(zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$6 = (function (caller,options,ind,actual_ind,coll_print,indent){
return zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7(caller,options,ind,actual_ind,coll_print,indent,null);
}));

(zprint.zprint.indent_zmap.cljs$lang$maxFixedArity = 7);

zprint.zprint.hang_indent = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hang","hang",-1007256173),null,new cljs.core.Keyword(null,"none-body","none-body",-171554854),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null);
zprint.zprint.flow_indent = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"gt3-force-nl","gt3-force-nl",-1297517534),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),null,new cljs.core.Keyword(null,"flow","flow",590489032),null,new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),null,new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),null,new cljs.core.Keyword(null,"gt2-force-nl","gt2-force-nl",-1746243317),null,new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),null,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072),null,new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),null,new cljs.core.Keyword(null,"hang","hang",-1007256173),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null);
/**
 * Given a vector of vectors, decide if we should merge these individually
 *   into the top level vector.
 */
zprint.zprint.newline_seq_QMARK_ = (function zprint$zprint$newline_seq_QMARK_(newline_vec){
var starts_with_nl_vec = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42956_SHARP_){
return clojure.string.starts_with_QMARK_(cljs.core.first(p1__42956_SHARP_),"\n");
}),newline_vec);
var true_seq = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(starts_with_nl_vec);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(true_seq),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(true_seq),true)));
});
/**
 * Given the output from fzprint-seq, which is a seq of the
 *   output of fzprint*, apply a function to each of them that has
 *   more than one element (since less has no meaning) and when the
 *   function returns true, merge the vector in as individual elements.
 */
zprint.zprint.merge_fzprint_seq = (function zprint$zprint$merge_fzprint_seq(fzprint_seq_vec){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42958_SHARP_,p2__42957_SHARP_){
if(zprint.zprint.newline_seq_QMARK_(p2__42957_SHARP_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__42958_SHARP_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p2__42957_SHARP_)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__42958_SHARP_,p2__42957_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,fzprint_seq_vec));
});
/**
 * This function assumes that :indent-only? was set for the caller
 *   in the options (since anything else doesn't make sense).  It takes
 *   a zloc and the ind, which is where we are on the line this point,
 *   and will process the zloc to include any newlines.  Of course we
 *   have to have all of the white space in the zloc too, since we
 *   need to ask some questions about what we are starting with at
 *   some point.  We don't add newlines and we let the newlines that
 *   are in there do their thing.  We might add newlines if we move
 *   beyond the right margin, but for now, we don't (and it isn't
 *   entirely clear how or if that would work).  This routine has to
 *   make decisions about the indent, that is whether to hang or flow
 *   the expression. It does that based on what was done in the input
 *   if the configuration allows.
 */
zprint.zprint.fzprint_indent = (function zprint$zprint$fzprint_indent(var_args){
var G__42960 = arguments.length;
switch (G__42960) {
case 9:
return zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 8:
return zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9 = (function (caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent,first_indent_only_QMARK_){
var flow_indent = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)));
var flow_indent__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caller,new cljs.core.Keyword(null,"map","map",1371690461)))?cljs.core.count(l_str):flow_indent);
var l_str_len = cljs.core.count(l_str);
var flow_indent__$2 = (((((flow_indent__$1 > l_str_len)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caller,new cljs.core.Keyword(null,"list","list",765357683)))))?(cljs.core.truth_(arg_1_indent)?flow_indent__$1:l_str_len):flow_indent__$1);
var actual_ind = (ind + l_str_len);
var zloc_seq = (cljs.core.truth_(new cljs.core.Keyword(null,"comma?","comma?",1532168963).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options))))?(zprint.zfns.zmap_w_nl_comma.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_nl_comma.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_nl_comma.call(null,cljs.core.identity,zloc)):(zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc)));
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-indent: caller:",caller,"l-str-len:",l_str_len,"ind:",ind,"fn-style:",fn_style,"arg-1-indent:",arg_1_indent,"flow-indent:",flow_indent__$2,"actual-ind:",actual_ind,"comma?",new cljs.core.Keyword(null,"comma?","comma?",1532168963).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options))),"zloc",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"zloc-seq",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq)], 0))], 0)):null);
var coll_print = zprint.zprint.fzprint_seq(options,ind,zloc_seq);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-indent: coll-print:",coll_print], 0))], 0)):null);
var indent_only_style = new cljs.core.Keyword(null,"indent-only-style","indent-only-style",708921086).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)));
var already_hung_QMARK_ = (cljs.core.truth_((function (){var and__5043__auto__ = indent_only_style;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(indent_only_style,new cljs.core.Keyword(null,"input-hang","input-hang",-542766364));
} else {
return and__5043__auto__;
}
})())?zprint.zprint.hang_zloc_QMARK_(rewrite_clj.zip.down_STAR_(zloc)):null);
var raw_indent = (cljs.core.truth_((function (){var and__5043__auto__ = arg_1_indent;
if(cljs.core.truth_(and__5043__auto__)){
return already_hung_QMARK_;
} else {
return and__5043__auto__;
}
})())?(arg_1_indent - ind):flow_indent__$2);
var indent = raw_indent;
var coll_print_contains_nil_QMARK_ = zprint.zprint.contains_nil_QMARK_(coll_print);
var ___$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-indent:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"ind:",ind,"fn-style:",fn_style,"indent-only-style:",indent_only_style,"already-hung?:",already_hung_QMARK_,"arg-1-indent:",arg_1_indent,"l-str-len:",cljs.core.count(l_str),"actual-ind:",actual_ind,"raw-indent:",raw_indent,"coll-print-contains-nil?:",coll_print_contains_nil_QMARK_,"indent:",indent], 0))], 0)):null);
var coll_print__$1 = (cljs.core.truth_(coll_print_contains_nil_QMARK_)?null:coll_print);
var output = zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$7(caller,options,ind,actual_ind,coll_print__$1,indent,first_indent_only_QMARK_);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-indent: output:",output], 0))], 0));
} else {
}

return output;
}));

(zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8 = (function (caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent){
return zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9(caller,l_str,r_str,options,ind,zloc,fn_style,arg_1_indent,null);
}));

(zprint.zprint.fzprint_indent.cljs$lang$maxFixedArity = 9);

/**
 * Find the location, counting from zero, and counting every element 
 *   in the seq, of the first zthing?.  Return its index if it is found, 
 *   nil if not.
 */
zprint.zprint.zfind_seq = (function zprint$zprint$zfind_seq(zthing_QMARK_,zloc_seq){
var nloc = zloc_seq;
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_((function (){var G__42961 = cljs.core.first(nloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__42961) : zthing_QMARK_.call(null,G__42961));
})())){
return i;
} else {
var G__44075 = cljs.core.next(nloc);
var G__44076 = (i + (1));
nloc = G__44075;
i = G__44076;
continue;
}
} else {
return null;
}
break;
}
});
zprint.zprint.body_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),null,new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),null,new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),null,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072),null,new cljs.core.Keyword(null,"arg2-extend-body","arg2-extend-body",1108891857),null,new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null,new cljs.core.Keyword(null,"arg1-force-nl-body","arg1-force-nl-body",1109597845),null,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329),null,new cljs.core.Keyword(null,"none-body","none-body",-171554854),null], null), null);
zprint.zprint.body_map = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"arg1-force-nl-body","arg1-force-nl-body",1109597845),new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),new cljs.core.Keyword(null,"arg2-extend-body","arg2-extend-body",1108891857),new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)], null);
zprint.zprint.noarg1_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),null,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329),null], null), null);
zprint.zprint.noarg1_map = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953)], null);
/**
 * Set noarg1 in the options if it is the right fn-type.
 */
zprint.zprint.noarg1 = (function zprint$zprint$noarg1(options,fn_type){
if(cljs.core.truth_((zprint.zprint.noarg1_set.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.noarg1_set.cljs$core$IFn$_invoke$arity$1(fn_type) : zprint.zprint.noarg1_set.call(null,fn_type)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430),true);
} else {
return options;
}
});
zprint.zprint.fn_style__GT_caller = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg2-extend-body","arg2-extend-body",1108891857),new cljs.core.Keyword(null,"binding","binding",539932593)],[new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"binding","binding",539932593)]);
/**
 * Given an options map, get the respect-nl?, respect-bl? and indent-only?
 *   options from the caller's options, and if the caller doesn't define these,
 *   use the values from the backup section of the options map. Return
 *   [respect-nl? respect-bl? indent-only?]
 */
zprint.zprint.get_respect_indent = (function zprint$zprint$get_respect_indent(options,caller,backup){
var caller_options = (caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options));
var respect_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(caller_options,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),new cljs.core.Keyword(null,"undef","undef",-529926228));
var respect_bl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(caller_options,new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998),new cljs.core.Keyword(null,"undef","undef",-529926228));
var indent_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(caller_options,new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842),new cljs.core.Keyword(null,"undef","undef",-529926228));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(respect_nl_QMARK_,new cljs.core.Keyword(null,"undef","undef",-529926228)))?respect_nl_QMARK_:new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635).cljs$core$IFn$_invoke$arity$1((backup.cljs$core$IFn$_invoke$arity$1 ? backup.cljs$core$IFn$_invoke$arity$1(options) : backup.call(null,options)))),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(respect_bl_QMARK_,new cljs.core.Keyword(null,"undef","undef",-529926228)))?respect_bl_QMARK_:new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998).cljs$core$IFn$_invoke$arity$1((backup.cljs$core$IFn$_invoke$arity$1 ? backup.cljs$core$IFn$_invoke$arity$1(options) : backup.call(null,options)))),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(indent_only_QMARK_,new cljs.core.Keyword(null,"undef","undef",-529926228)))?indent_only_QMARK_:new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842).cljs$core$IFn$_invoke$arity$1((backup.cljs$core$IFn$_invoke$arity$1 ? backup.cljs$core$IFn$_invoke$arity$1(options) : backup.call(null,options))))], null);
});
/**
 * Should we allow this function to print on a single line?
 */
zprint.zprint.allow_one_line_QMARK_ = (function zprint$zprint$allow_one_line_QMARK_(p__42962,len,fn_style){
var map__42963 = p__42962;
var map__42963__$1 = cljs.core.__destructure_map(map__42963);
var options = map__42963__$1;
var fn_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42963__$1,new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692));
var fn_gt2_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42963__$1,new cljs.core.Keyword(null,"fn-gt2-force-nl","fn-gt2-force-nl",1348579537));
var fn_gt3_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42963__$1,new cljs.core.Keyword(null,"fn-gt3-force-nl","fn-gt3-force-nl",-58306985));
return cljs.core.not((function (){var or__5045__auto__ = (fn_force_nl.cljs$core$IFn$_invoke$arity$1 ? fn_force_nl.cljs$core$IFn$_invoke$arity$1(fn_style) : fn_force_nl.call(null,fn_style));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var and__5043__auto__ = (len > (3));
if(and__5043__auto__){
return (fn_gt2_force_nl.cljs$core$IFn$_invoke$arity$1 ? fn_gt2_force_nl.cljs$core$IFn$_invoke$arity$1(fn_style) : fn_gt2_force_nl.call(null,fn_style));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var and__5043__auto__ = (len > (4));
if(and__5043__auto__){
return (fn_gt3_force_nl.cljs$core$IFn$_invoke$arity$1 ? fn_gt3_force_nl.cljs$core$IFn$_invoke$arity$1(fn_style) : fn_gt3_force_nl.call(null,fn_style));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var temp__5802__auto__ = (zprint.zprint.fn_style__GT_caller.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.fn_style__GT_caller.cljs$core$IFn$_invoke$arity$1(fn_style) : zprint.zprint.fn_style__GT_caller.call(null,fn_style));
if(cljs.core.truth_(temp__5802__auto__)){
var future_caller = temp__5802__auto__;
var caller_map = (future_caller.cljs$core$IFn$_invoke$arity$1 ? future_caller.cljs$core$IFn$_invoke$arity$1(options) : future_caller.call(null,options));
var or__5045__auto____$3 = new cljs.core.Keyword(null,"flow?","flow?",96929057).cljs$core$IFn$_invoke$arity$1(caller_map);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462).cljs$core$IFn$_invoke$arity$1(caller_map);
}
} else {
return null;
}
}
}
}
})());
});
/**
 * If the (caller options) has a value for :return-altered-zipper, then
 *   examine the value.  It should be [<depth> <symbol> <fn>]. 
 *   If the <depth> is nil, any depth will do. If the
 *   <symbol> is nil, any symbol will do.  If the <depth> and <symbol>
 *   match, then the <fn> is called as (fn caller options zloc), and must
 *   return a new zloc.
 */
zprint.zprint.modify_zloc = (function zprint$zprint$modify_zloc(caller,options,zloc){
var vec__42968 = new cljs.core.Keyword(null,"return-altered-zipper","return-altered-zipper",837872379).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options) : caller.call(null,options)));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42968,(0),null);
var trigger_symbol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42968,(1),null);
var modify_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42968,(2),null);
var return_altered_zipper_value = vec__42968;
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc caller:",caller,"ztype",new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),"return-altered-zipper-value:",return_altered_zipper_value], 0));
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438))) || ((return_altered_zipper_value == null)))){
return zloc;
} else {
var call_fn_QMARK_ = (function (){var and__5043__auto__ = (((depth == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),depth)));
if(and__5043__auto__){
var and__5043__auto____$1 = (function (){var or__5045__auto__ = cljs.core.not(trigger_symbol);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto____$1 = (function (){var G__42971 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(G__42971) : zprint.zfns.zsymbol_QMARK_.call(null,G__42971));
})();
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trigger_symbol,(function (){var G__42972 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsexpr.cljs$core$IFn$_invoke$arity$1(G__42972) : zprint.zfns.zsexpr.call(null,G__42972));
})());
} else {
return and__5043__auto____$1;
}
}
})();
if(cljs.core.truth_(and__5043__auto____$1)){
return modify_fn;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc: zloc",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"call-fn?",call_fn_QMARK_], 0));
} else {
}

if(cljs.core.truth_(call_fn_QMARK_)){
var return$ = (modify_fn.cljs$core$IFn$_invoke$arity$3 ? modify_fn.cljs$core$IFn$_invoke$arity$3(caller,options,zloc) : modify_fn.call(null,caller,options,zloc));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"modify-zloc return:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(return$) : zprint.zfns.zstring.call(null,return$))], 0));
} else {
}

return return$;
} else {
return zloc;
}
}
});
/**
 * Print a list, which might be a list or an anon fn.  
 *   Lots of work to make a list look good, as that is typically code. 
 *   Presently all of the callers of this are :list or :vector-fn.
 */
zprint.zprint.fzprint_list_STAR_ = (function zprint$zprint$fzprint_list_STAR_(caller,l_str,r_str,p__42989,ind,zloc){
var map__42990 = p__42989;
var map__42990__$1 = cljs.core.__destructure_map(map__42990);
var options = map__42990__$1;
var fn_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42990__$1,new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
var user_fn_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42990__$1,new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42990__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var fn_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42990__$1,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917));
var no_arg1_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42990__$1,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430));
var fn_force_nl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42990__$1,new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692));
var quote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42990__$1,new cljs.core.Keyword(null,"quote?","quote?",-1114029317));
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-list*: ind:",ind,"fn-style:",fn_style,"option-fn:",new cljs.core.Keyword(null,"option-fn","option-fn",-959705456).cljs$core$IFn$_invoke$arity$1((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller))),"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options)], 0));
} else {
}

var max_length = zprint.zprint.get_max_length(options);
var zloc__$1 = zprint.zprint.modify_zloc(caller,options,zloc);
var len = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zcount.call(null,zloc__$1));
var zloc__$2 = (((len > max_length))?(function (){var G__43013 = max_length;
var G__43014 = zloc__$1;
var G__43015 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
return (zprint.zfns.ztake_append.cljs$core$IFn$_invoke$arity$3 ? zprint.zfns.ztake_append.cljs$core$IFn$_invoke$arity$3(G__43013,G__43014,G__43015) : zprint.zfns.ztake_append.call(null,G__43013,G__43014,G__43015));
})():zloc__$1);
var len__$1 = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc__$2) : zprint.zfns.zcount.call(null,zloc__$2));
var l_str_len = cljs.core.count(l_str);
var indent = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(caller) : options.call(null,caller)));
var vec__42995 = zprint.zprint.fzprint_up_to_first_zloc(caller,options,(ind + l_str_len),zloc__$2);
var pre_arg_1_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42995,(0),null);
var arg_1_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42995,(1),null);
var arg_1_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42995,(2),null);
var zloc_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42995,(3),null);
var first_data = vec__42995;
var arg_1_coll_QMARK_ = cljs.core.not((function (){var or__5045__auto__ = (zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_1_zloc) : zprint.zfns.zkeyword_QMARK_.call(null,arg_1_zloc));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsymbol_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_1_zloc) : zprint.zfns.zsymbol_QMARK_.call(null,arg_1_zloc));
}
})());
var arg_1_indent_alt_QMARK_ = (function (){var and__5043__auto__ = arg_1_coll_QMARK_;
if(and__5043__auto__){
return fn_style;
} else {
return and__5043__auto__;
}
})();
var fn_str = (((!(arg_1_coll_QMARK_)))?(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(arg_1_zloc) : zprint.zfns.zstring.call(null,arg_1_zloc)):null);
var fn_type = (cljs.core.truth_(fn_str)?null:(cljs.core.truth_((zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_1_zloc) : zprint.zfns.zlist_QMARK_.call(null,arg_1_zloc)))?new cljs.core.Keyword(null,"list","list",765357683):(cljs.core.truth_((zprint.zfns.zmap_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zmap_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_1_zloc) : zprint.zfns.zmap_QMARK_.call(null,arg_1_zloc)))?new cljs.core.Keyword(null,"map","map",1371690461):(cljs.core.truth_((zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_1_zloc) : zprint.zfns.zvector_QMARK_.call(null,arg_1_zloc)))?new cljs.core.Keyword(null,"vector","vector",1902966158):(cljs.core.truth_((zprint.zfns.zset_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zset_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_1_zloc) : zprint.zfns.zset_QMARK_.call(null,arg_1_zloc)))?new cljs.core.Keyword(null,"set","set",304602554):null
)))));
var vec__42998 = (cljs.core.truth_((function (){var and__5043__auto__ = quote_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(fn_map,new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"none","none",1333468478))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(user_fn_map,new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"none","none",1333468478))));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,new cljs.core.Keyword(null,"quote","quote",-262615245)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_style,fn_str,fn_type], null));
var fn_style__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42998,(0),null);
var fn_str__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42998,(1),null);
var fn_type__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42998,(2),null);
var fn_style__$2 = (function (){var or__5045__auto__ = fn_style__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (fn_map.cljs$core$IFn$_invoke$arity$1 ? fn_map.cljs$core$IFn$_invoke$arity$1(fn_str__$1) : fn_map.call(null,fn_str__$1));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (user_fn_map.cljs$core$IFn$_invoke$arity$1 ? user_fn_map.cljs$core$IFn$_invoke$arity$1(fn_str__$1) : user_fn_map.call(null,fn_str__$1));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = (fn_map.cljs$core$IFn$_invoke$arity$1 ? fn_map.cljs$core$IFn$_invoke$arity$1(fn_type__$1) : fn_map.call(null,fn_type__$1));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return (user_fn_map.cljs$core$IFn$_invoke$arity$1 ? user_fn_map.cljs$core$IFn$_invoke$arity$1(fn_type__$1) : user_fn_map.call(null,fn_type__$1));
}
}
}
}
})();
var fn_style__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(fn_style__$2);
if(and__5043__auto__){
return fn_str__$1;
} else {
return and__5043__auto__;
}
})())?(function (){var G__43017 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(fn_str__$1,/\//));
return (fn_map.cljs$core$IFn$_invoke$arity$1 ? fn_map.cljs$core$IFn$_invoke$arity$1(G__43017) : fn_map.call(null,G__43017));
})():fn_style__$2);
var fn_style__$4 = (cljs.core.truth_((function (){var and__5043__auto__ = fn_str__$1;
if(cljs.core.truth_(and__5043__auto__)){
return (fn_style__$3 == null);
} else {
return and__5043__auto__;
}
})())?new cljs.core.Keyword(null,"default-not-none","default-not-none",245382312).cljs$core$IFn$_invoke$arity$1(fn_map):fn_style__$3);
var fn_style__$5 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$4,new cljs.core.Keyword(null,"none","none",1333468478)))?null:fn_style__$4);
var fn_style__$6 = (cljs.core.truth_((function (){var and__5043__auto__ = fn_str__$1;
if(cljs.core.truth_(and__5043__auto__)){
return (fn_style__$5 == null);
} else {
return and__5043__auto__;
}
})())?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(fn_map):fn_style__$5);
var options__$1 = ((cljs.core.vector_QMARK_(fn_style__$6))?cljs.core.first(zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$5("fn-style:",null,options,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(fn_style__$6),(2)))?cljs.core.second(fn_style__$6):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zipper","zipper",1500694438),new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.second(fn_style__$6):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fn_style__$6,(2)))),null)):options);
var option_fn = new cljs.core.Keyword(null,"option-fn","option-fn",-959705456).cljs$core$IFn$_invoke$arity$1((options__$1.cljs$core$IFn$_invoke$arity$1 ? options__$1.cljs$core$IFn$_invoke$arity$1(caller) : options__$1.call(null,caller)));
var vec__43001 = (cljs.core.truth_(option_fn)?zprint.zprint.call_option_fn(caller,options__$1,option_fn,zloc__$2):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$1,null], null));
var options__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43001,(0),null);
var new_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43001,(1),null);
var _ = (cljs.core.truth_(option_fn)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list* option-fn new options",new_options], 0))], 0)):null):null);
var fn_style__$7 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"fn-style","fn-style",1330516917).cljs$core$IFn$_invoke$arity$1(new_options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return fn_style__$6;
}
})();
var guide = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(options__$2);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return zprint.zprint.guide_debug(caller,options__$2);
}
})();
var options__$3 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options__$2,new cljs.core.Keyword(null,"guide","guide",-935563924),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fn-style","fn-style",1330516917)], 0));
var ___$1 = (cljs.core.truth_(guide)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list* guide:",guide], 0))], 0)):null):null);
var vec__43004 = (cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.vector_QMARK_(fn_style__$7);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new_options;
}
})())?zprint.zprint.fzprint_up_to_first_zloc(caller,options__$3,(ind + l_str_len),zloc__$2):first_data);
var pre_arg_1_style_vec__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43004,(0),null);
var arg_1_zloc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43004,(1),null);
var arg_1_count__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43004,(2),null);
var zloc_seq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43004,(3),null);
var first_data__$1 = vec__43004;
var fn_style__$8 = ((cljs.core.vector_QMARK_(fn_style__$7))?cljs.core.first(fn_style__$7):fn_style__$7);
var vec__43007 = zprint.zprint.fzprint_up_to_next_zloc(caller,options__$3,(ind + indent),first_data__$1);
var pre_arg_2_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43007,(0),null);
var arg_2_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43007,(1),null);
var arg_2_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43007,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43007,(3),null);
var second_data = vec__43007;
var len__$2 = (zprint.zfns.zcount_zloc_seq_nc_nws.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount_zloc_seq_nc_nws.cljs$core$IFn$_invoke$arity$1(zloc_seq__$1) : zprint.zfns.zcount_zloc_seq_nc_nws.call(null,zloc_seq__$1));
var vec__43010 = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$8,new cljs.core.Keyword(null,"replace-w-string","replace-w-string",1411008615));
if(and__5043__auto__){
var and__5043__auto____$1 = new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1((options__$3.cljs$core$IFn$_invoke$arity$1 ? options__$3.cljs$core$IFn$_invoke$arity$1(caller) : options__$3.call(null,caller)));
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$2,(2));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(options__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [caller], null),cljs.core.dissoc,new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419)),new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070),(new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$3) - (1))),arg_2_zloc,new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1((options__$3.cljs$core$IFn$_invoke$arity$1 ? options__$3.cljs$core$IFn$_invoke$arity$1(caller) : options__$3.call(null,caller))),cljs.core.count(new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1((options__$3.cljs$core$IFn$_invoke$arity$1 ? options__$3.cljs$core$IFn$_invoke$arity$1(caller) : options__$3.call(null,caller)))),"",(1),zprint.zprint.remove_one(zloc_seq__$1,arg_1_count__$1)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$3,arg_1_zloc__$1,l_str,l_str_len,r_str,len__$2,zloc_seq__$1], null));
var options__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43010,(0),null);
var arg_1_zloc__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43010,(1),null);
var l_str__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43010,(2),null);
var l_str_len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43010,(3),null);
var r_str__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43010,(4),null);
var len__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43010,(5),null);
var zloc_seq__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43010,(6),null);
var indent__$1 = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1((options__$4.cljs$core$IFn$_invoke$arity$1 ? options__$4.cljs$core$IFn$_invoke$arity$1(caller) : options__$4.call(null,caller)));
var indent_arg = new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874).cljs$core$IFn$_invoke$arity$1((options__$4.cljs$core$IFn$_invoke$arity$1 ? options__$4.cljs$core$IFn$_invoke$arity$1(caller) : options__$4.call(null,caller)));
var indent_only_QMARK_ = new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842).cljs$core$IFn$_invoke$arity$1((options__$4.cljs$core$IFn$_invoke$arity$1 ? options__$4.cljs$core$IFn$_invoke$arity$1(caller) : options__$4.call(null,caller)));
var indent__$2 = (cljs.core.truth_((zprint.zprint.body_set.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.body_set.cljs$core$IFn$_invoke$arity$1(fn_style__$8) : zprint.zprint.body_set.call(null,fn_style__$8)))?indent__$1:(function (){var or__5045__auto__ = indent_arg;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return indent__$1;
}
})());
var indent__$3 = (indent__$2 + (l_str_len__$1 - (1)));
var fn_style__$9 = (cljs.core.truth_(guide)?new cljs.core.Keyword(null,"guided","guided",-297376298):fn_style__$8);
var one_line_ok_QMARK_ = zprint.zprint.allow_one_line_QMARK_(options__$4,len__$3,fn_style__$9);
var one_line_ok_QMARK___$1 = (cljs.core.truth_(indent_only_QMARK_)?null:one_line_ok_QMARK_);
var one_line_ok_QMARK___$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$9,new cljs.core.Keyword(null,"guided","guided",-297376298)))?null:one_line_ok_QMARK___$1);
var one_line_ok_QMARK___$3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pre_arg_1_style_vec__$1,new cljs.core.Keyword(null,"noseq","noseq",405935768)))?null:one_line_ok_QMARK___$2);
var one_line_ok_QMARK___$4 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$9,new cljs.core.Keyword(null,"binding","binding",539932593)))?(function (){var and__5043__auto__ = one_line_ok_QMARK___$3;
if(cljs.core.truth_(and__5043__auto__)){
return zprint.zprint.allow_one_line_QMARK_(options__$4,(zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(arg_2_zloc) : zprint.zfns.zcount.call(null,arg_2_zloc)),new cljs.core.Keyword(null,"binding-vector","binding-vector",466058868));
} else {
return and__5043__auto__;
}
})():one_line_ok_QMARK___$3);
var one_line_ok_QMARK___$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462).cljs$core$IFn$_invoke$arity$1((options__$4.cljs$core$IFn$_invoke$arity$1 ? options__$4.cljs$core$IFn$_invoke$arity$1(caller) : options__$4.call(null,caller))))?null:one_line_ok_QMARK___$4);
var fn_style__$10 = (function (){var or__5045__auto__ = (zprint.zprint.body_map.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.body_map.cljs$core$IFn$_invoke$arity$1(fn_style__$9) : zprint.zprint.body_map.call(null,fn_style__$9));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return fn_style__$9;
}
})();
var fn_style__$11 = (cljs.core.truth_((function (){var fexpr__43018 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"replace-w-string","replace-w-string",1411008615),null,new cljs.core.Keyword(null,"flow","flow",590489032),null,new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"hang","hang",-1007256173),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null,new cljs.core.Keyword(null,"guided","guided",-297376298),null], null), null);
return (fexpr__43018.cljs$core$IFn$_invoke$arity$1 ? fexpr__43018.cljs$core$IFn$_invoke$arity$1(fn_style__$10) : fexpr__43018.call(null,fn_style__$10));
})())?fn_style__$10:(((len__$3 < (3)))?null:fn_style__$10));
var fn_style__$12 = (cljs.core.truth_(no_arg1_QMARK_)?(function (){var or__5045__auto__ = (zprint.zprint.noarg1_map.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.noarg1_map.cljs$core$IFn$_invoke$arity$1(fn_style__$11) : zprint.zprint.noarg1_map.call(null,fn_style__$11));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return fn_style__$11;
}
})():fn_style__$11);
var options__$5 = (cljs.core.truth_(no_arg1_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$4,new cljs.core.Keyword(null,"no-arg1?","no-arg1?",1560368430)):options__$4);
var indent_adj = (l_str_len__$1 - (1));
var default_indent = (cljs.core.truth_((zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_1_zloc__$2) : zprint.zfns.zlist_QMARK_.call(null,arg_1_zloc__$2)))?indent__$3:l_str_len__$1);
var arg_1_indent = (((!(arg_1_coll_QMARK_)))?((ind + (l_str_len__$1 + (1))) + cljs.core.count(fn_str__$1)):null);
var arg_1_indent__$1 = (function (){var or__5045__auto__ = arg_1_indent;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.truth_(arg_1_indent_alt_QMARK_)){
return (indent__$3 + ind);
} else {
return null;
}
}
})();
var arg_1_indent__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_arg_2_style_vec,new cljs.core.Keyword(null,"noseq","noseq",405935768)))?arg_1_indent__$1:(cljs.core.truth_(arg_1_indent__$1)?(indent__$3 + ind):null));
var options__$6 = (((!(arg_1_coll_QMARK_)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$5,new cljs.core.Keyword(null,"in-code?","in-code?",194866464),fn_str__$1):options__$5);
var options__$7 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$6,new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342),(cljs.core.long$((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options__$6);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()) + (1)));
var ___$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg-hang","dbg-hang",-1928862076).cljs$core$IFn$_invoke$arity$1(options__$7))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.dots(new cljs.core.Keyword(null,"pdepth","pdepth",-1943862342).cljs$core$IFn$_invoke$arity$1(options__$7)),"fzs",fn_str__$1], 0)):null);
var new_ind = (indent__$3 + ind);
var one_line_ind = (l_str_len__$1 + ind);
var options__$8 = (cljs.core.truth_(fn_style__$12)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$7,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917)):options__$7);
var loptions = zprint.zprint.not_rightmost(options__$8);
var roptions = options__$8;
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str__$1,zprint.zprint.zcolor_map(options__$8,l_str__$1),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options__$8,(ind + (function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (l_str_len__$1 - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()),zloc__$2,r_str__$1);
var ___$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list*:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc__$2) : zprint.zfns.zstring.call(null,zloc__$2)),"fn-str",fn_str__$1,"fn-style:",fn_style__$12,"len:",len__$3,"ind:",ind,"indent:",indent__$3,"default-indent:",default_indent,"one-line-ok?",one_line_ok_QMARK___$5,"arg-1-coll?",arg_1_coll_QMARK_,"arg-1-indent:",arg_1_indent__$2,"arg-1-zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(arg_1_zloc__$2) : zprint.zfns.zstring.call(null,arg_1_zloc__$2)),"pre-arg-1-style-vec:",pre_arg_1_style_vec__$1,"l-str:",["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str__$1),"'"].join(''),"l-str-len:",l_str_len__$1,"r-str-vec:",r_str_vec,"indent-adj:",indent_adj,"one-line?",one_line_QMARK_,"indent-only?",indent_only_QMARK_,"in-code?",new cljs.core.Keyword(null,"in-code?","in-code?",194866464).cljs$core$IFn$_invoke$arity$1(options__$8),"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$8),"replacement-string:",new cljs.core.Keyword(null,"replacement-string","replacement-string",-1920084419).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options__$8) : caller.call(null,options__$8))),"force-nl?",new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options__$8) : caller.call(null,options__$8))),":ztype:",new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options__$8)], 0))], 0)):null);
var one_line = (((((len__$3 === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_arg_1_style_vec__$1,new cljs.core.Keyword(null,"noseq","noseq",405935768)))))?new cljs.core.Keyword(null,"empty","empty",767870958):(cljs.core.truth_(one_line_ok_QMARK___$5)?zprint.zprint.fzprint_one_line(options__$8,one_line_ind,zloc_seq__$2):null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(one_line,new cljs.core.Keyword(null,"empty","empty",767870958))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
if(cljs.core.truth_(indent_only_QMARK_)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8(caller,l_str__$1,r_str__$1,options__$8,ind,zloc__$2,fn_style__$12,arg_1_indent__$2),r_str_vec], 0));
} else {
if(cljs.core.truth_(one_line)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,one_line,r_str_vec], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"guided","guided",-297376298))){
var zloc_count = cljs.core.count(zloc_seq__$2);
var local_indent = (cljs.core.truth_(arg_1_indent__$2)?indent__$3:(default_indent + indent_adj));
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(zprint.zprint.fzprint_guide.cljs$core$IFn$_invoke$arity$7 ? zprint.zprint.fzprint_guide.cljs$core$IFn$_invoke$arity$7(caller,options__$8,ind,one_line_ind,local_indent,guide,zloc_seq__$2) : zprint.zprint.fzprint_guide.call(null,caller,options__$8,ind,one_line_ind,local_indent,guide,zloc_seq__$2)),r_str_vec], 0));
} else {
if(cljs.core.truth_(one_line_QMARK_)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),"fzprint-list*:",fn_str__$1," one-line did not work!!!"], 0));
} else {
return null;
}
} else {
if(cljs.core.truth_((cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),"fzprint-list*: fn-style:",fn_style__$12], 0)):null))){
return null;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$3,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_arg_1_style_vec__$1,new cljs.core.Keyword(null,"noseq","noseq",405935768))))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$3,(1))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3(roptions,one_line_ind,zloc_seq__$2),r_str_vec], 0));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"binding","binding",539932593));
if(and__5043__auto__){
var and__5043__auto____$1 = (len__$3 > (1));
if(and__5043__auto____$1){
return (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_2_zloc) : zprint.zfns.zvector_QMARK_.call(null,arg_2_zloc));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var vec__43019 = zprint.zprint.fzprint_hang_unless_fail(loptions,(function (){var or__5045__auto__ = arg_1_indent__$2;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (indent__$3 + ind);
}
})(),(indent__$3 + ind),zprint.zprint.fzprint_binding_vec,arg_2_zloc);
var hang_or_flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43019,(0),null);
var binding_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43019,(1),null);
var binding_style_vec__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hang_or_flow,new cljs.core.Keyword(null,"hang","hang",-1007256173)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(14)], null)], null),binding_style_vec], 0)):binding_style_vec);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__43023 = loptions;
var G__43024 = (ind + (1));
var G__43025 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43023,G__43024,G__43025) : zprint.zprint.fzprint_STAR_.call(null,G__43023,G__43024,G__43025));
})(),pre_arg_2_style_vec,binding_style_vec__$1,zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,options__$8,(indent__$3 + ind),(indent__$3 + ind),zprint.zprint.get_zloc_seq_right(second_data),new cljs.core.Keyword(null,"binding","binding",539932593)),r_str_vec], 0))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586))){
var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right(first_data__$1);
var zloc_count = cljs.core.count(zloc_seq__$2);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__43027 = loptions;
var G__43028 = (ind + (1));
var G__43029 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43027,G__43028,G__43029) : zprint.zprint.fzprint_STAR_.call(null,G__43027,G__43028,G__43029));
})(),zprint.zprint.fzprint_hang(options__$8,new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),arg_1_indent__$2,(indent__$3 + ind),zprint.zprint.fzprint_pairs,zloc_count,zloc_seq_right_first),r_str_vec], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"extend","extend",1836484006))){
var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right(first_data__$1);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__43030 = loptions;
var G__43031 = (ind + (1));
var G__43032 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43030,G__43031,G__43032) : zprint.zprint.fzprint_STAR_.call(null,G__43030,G__43031,G__43032));
})(),zprint.zprint.prepend_nl(options__$8,(indent__$3 + ind),zprint.zprint.fzprint_extend(options__$8,(indent__$3 + ind),zloc_seq_right_first)),r_str_vec], 0));
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"fn","fn",-1175266204))) && (cljs.core.not((zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_2_zloc) : zprint.zfns.zlist_QMARK_.call(null,arg_2_zloc)))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg2","arg2",1729550917))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186))))))))))){
var vec__43033 = zprint.zprint.fzprint_up_to_next_zloc(caller,options__$8,(ind + indent__$3),second_data);
var pre_arg_3_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43033,(0),null);
var arg_3_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43033,(1),null);
var arg_3_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43033,(2),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43033,(3),null);
var third_data = vec__43033;
var zloc_seq_right_third = zprint.zprint.get_zloc_seq_right(third_data);
var second_element = zprint.zprint.fzprint_hang_one(caller,((cljs.core.not(arg_3_zloc))?options__$8:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc);
var vec__43036 = zprint.zprint.style_lines(loptions,arg_1_indent__$2,second_element);
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43036,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43036,(1),null);
var first_three = (cljs.core.truth_(second_element)?(function (){var first_two_wo_pre_arg_1 = zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__43051 = loptions;
var G__43052 = (indent__$3 + ind);
var G__43053 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43051,G__43052,G__43053) : zprint.zprint.fzprint_STAR_.call(null,G__43051,G__43052,G__43053));
})(),pre_arg_2_style_vec,second_element,pre_arg_3_style_vec], 0));
var local_options = ((cljs.core.not(zloc_seq_right_third))?options__$8:loptions);
var first_two_one_line_QMARK_ = zprint.zprint.fzfit_one_line(local_options,zprint.zprint.style_lines(local_options,(ind + indent__$3),first_two_wo_pre_arg_1));
var first_two = zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pre_arg_1_style_vec__$1,first_two_wo_pre_arg_1], 0));
if(first_two_one_line_QMARK_){
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list*: :arg2-* first two didn't fit:",first_two], 0))], 0));
} else {
}
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([first_two,(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg2","arg2",1729550917));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126));
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072));
if(or__5045__auto____$2){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186));
if(or__5045__auto____$3){
return or__5045__auto____$3;
} else {
var and__5043__auto__ = (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_3_zloc) : zprint.zfns.zvector_QMARK_.call(null,arg_3_zloc));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_count,(1));
} else {
return and__5043__auto__;
}
}
}
}
}
})())?zprint.zprint.fzprint_hang_one(caller,((cljs.core.not(zloc_seq_right_third))?options__$8:loptions),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pre_arg_3_style_vec,new cljs.core.Keyword(null,"noseq","noseq",405935768))) && (first_two_one_line_QMARK_)))?max_width:(indent__$3 + ind)),(indent__$3 + ind),arg_3_zloc):zprint.zprint.prepend_nl(options__$8,(indent__$3 + ind),(function (){var G__43075 = ((cljs.core.not(zloc_seq_right_third))?options__$8:loptions);
var G__43076 = (indent__$3 + ind);
var G__43077 = arg_3_zloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43075,G__43076,G__43077) : zprint.zprint.fzprint_STAR_.call(null,G__43075,G__43076,G__43077));
})()))], 0));
})():null);
if(cljs.core.truth_(first_three)){
if(cljs.core.not(zloc_seq_right_third)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,first_three,r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,first_three,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126)))?zprint.zprint.prepend_nl(options__$8,(indent__$3 + ind),zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3(options__$8,(indent__$3 + ind),zloc_seq_right_third)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186)))?zprint.zprint.prepend_nl(options__$8,(indent__$3 + ind),zprint.zprint.fzprint_extend(options__$8,(indent__$3 + ind),zloc_seq_right_third)):zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$8,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"fn","fn",-1175266204)):options__$8),(indent__$3 + ind),(indent__$3 + ind),zloc_seq_right_third,fn_style__$12)
)),r_str_vec], 0));
}
} else {
return null;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120))) && ((len__$3 > (3))))){
var vec__43079 = zprint.zprint.fzprint_up_to_next_zloc(caller,options__$8,(ind + indent__$3),second_data);
var pre_arg_3_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43079,(0),null);
var arg_3_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43079,(1),null);
var arg_3_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43079,(2),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43079,(3),null);
var third_data = vec__43079;
var vec__43082 = zprint.zprint.fzprint_up_to_next_zloc(caller,options__$8,(ind + indent__$3),third_data);
var pre_arg_4_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43082,(0),null);
var arg_4_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43082,(1),null);
var arg_4_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43082,(2),null);
var ___$6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43082,(3),null);
var fourth_data = vec__43082;
var arg_vec_index = (function (){var or__5045__auto__ = zprint.zprint.zfind_seq((function (p1__42984_SHARP_){
var or__5045__auto__ = (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__42984_SHARP_) : zprint.zfns.zvector_QMARK_.call(null,p1__42984_SHARP_));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.truth_((zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__42984_SHARP_) : zprint.zfns.zlist_QMARK_.call(null,p1__42984_SHARP_)))){
var G__43085 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(p1__42984_SHARP_) : zprint.zfns.zfirst.call(null,p1__42984_SHARP_));
return (zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(G__43085) : zprint.zfns.zvector_QMARK_.call(null,G__43085));
} else {
return null;
}
}
}),zloc_seq__$2);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var doc_string_QMARK_ = typeof zprint.zprint.get_sexpr_or_nil(options__$8,arg_3_zloc) === 'string';
var mixin_start = ((doc_string_QMARK_)?arg_4_count:arg_3_count);
var mixin_length = ((arg_vec_index - mixin_start) - (1));
var mixins_QMARK_ = (mixin_length > (0));
var doc_string = ((doc_string_QMARK_)?zprint.zprint.fzprint_hang_one(caller,loptions,(indent__$3 + ind),(indent__$3 + ind),arg_3_zloc):null);
var mixins = ((mixins_QMARK_)?(function (){var mixin_sentinal = zprint.zprint.fzprint_hang_one(caller,loptions,(indent__$3 + ind),(indent__$3 + ind),((doc_string_QMARK_)?arg_4_zloc:arg_3_zloc));
var vec__43086 = zprint.zprint.style_lines(loptions,(indent__$3 + ind),mixin_sentinal);
var line_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43086,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43086,(1),null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((doc_string_QMARK_)?pre_arg_4_style_vec:pre_arg_3_style_vec),mixin_sentinal,zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$7(caller,loptions,(max_width + (1)),(((indent__$3 + indent__$3) + ind) - (1)),zprint.zprint.get_zloc_seq_right((cljs.core.truth_(doc_string)?fourth_data:third_data)),fn_style__$12,mixin_length)], 0));
})():null);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__43090 = loptions;
var G__43091 = (ind + (1));
var G__43092 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43090,G__43091,G__43092) : zprint.zprint.fzprint_STAR_.call(null,G__43090,G__43091,G__43092));
})(),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$3,(2)))?options__$8:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),((((doc_string_QMARK_) && (mixins_QMARK_)))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pre_arg_3_style_vec,doc_string,zprint.zprint.remove_one_newline(mixins)], 0)):((doc_string_QMARK_)?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pre_arg_3_style_vec,doc_string], 0)):((mixins_QMARK_)?zprint.zprint.remove_one_newline(mixins):new cljs.core.Keyword(null,"noseq","noseq",405935768)
))),zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,zprint.zprint.noarg1(options__$8,fn_style__$12),(indent__$3 + ind),(indent__$3 + ind),cljs.core.nthnext(zloc_seq__$2,((mixins_QMARK_)?arg_vec_index:((doc_string_QMARK_)?arg_4_count:arg_3_count))),fn_style__$12),r_str_vec], 0));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg1","arg1",951899358))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg1->","arg1->",1319654329))))))))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__43093 = loptions;
var G__43094 = (ind + (1));
var G__43095 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43093,G__43094,G__43095) : zprint.zprint.fzprint_STAR_.call(null,G__43093,G__43094,G__43095));
})(),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$3,(2)))?options__$8:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953)))?zprint.zprint.prepend_nl(options__$8,(indent__$3 + ind),zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3(options__$8,(indent__$3 + ind),zprint.zprint.get_zloc_seq_right(second_data))):zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,zprint.zprint.noarg1(options__$8,fn_style__$12),(indent__$3 + ind),(indent__$3 + ind),zprint.zprint.get_zloc_seq_right(second_data),fn_style__$12)),r_str_vec], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050))){
var zloc_seq_right_second = zprint.zprint.get_zloc_seq_right(second_data);
if(cljs.core.truth_((zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(arg_2_zloc) : zprint.zfns.zvector_QMARK_.call(null,arg_2_zloc)))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__43096 = loptions;
var G__43097 = (indent__$3 + ind);
var G__43098 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43096,G__43097,G__43098) : zprint.zprint.fzprint_STAR_.call(null,G__43096,G__43097,G__43098));
})(),pre_arg_2_style_vec,zprint.zprint.prepend_nl(options__$8,(indent__$3 + ind),(function (){var G__43099 = loptions;
var G__43100 = (indent__$3 + ind);
var G__43101 = arg_2_zloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43099,G__43100,G__43101) : zprint.zprint.fzprint_STAR_.call(null,G__43099,G__43100,G__43101));
})()),zprint.zprint.prepend_nl(options__$8,(indent__$3 + ind),zprint.zprint.fzprint_extend(options__$8,(indent__$3 + ind),zloc_seq_right_second)),r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(function (){var G__43102 = loptions;
var G__43103 = (ind + (1));
var G__43104 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43102,G__43103,G__43104) : zprint.zprint.fzprint_STAR_.call(null,G__43102,G__43103,G__43104));
})(),pre_arg_2_style_vec,zprint.zprint.fzprint_hang_one(caller,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len__$3,(2)))?options__$8:loptions),arg_1_indent__$2,(indent__$3 + ind),arg_2_zloc),zprint.zprint.prepend_nl(options__$8,(indent__$3 + ind),zprint.zprint.fzprint_extend(options__$8,(indent__$3 + ind),zloc_seq_right_second)),r_str_vec], 0));

}
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"wrap","wrap",851669987));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options__$8) : caller.call(null,options__$8)));
}
})())){
var new_ind__$1 = (indent__$3 + ind);
var coll_print = zprint.zprint.fzprint_seq(options__$8,new_ind__$1,zloc_seq__$2);
var ___$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list*: :wrap coll-print:",coll_print], 0))], 0)):null);
var wrap_coll_QMARK_ = new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571).cljs$core$IFn$_invoke$arity$1((caller.cljs$core$IFn$_invoke$arity$1 ? caller.cljs$core$IFn$_invoke$arity$1(options__$8) : caller.call(null,options__$8)));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(wrap_coll_QMARK_);
if(and__5043__auto__){
return (zprint.zprint.any_zcoll_QMARK_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.any_zcoll_QMARK_.cljs$core$IFn$_invoke$arity$3(options__$8,new_ind__$1,zloc__$2) : zprint.zprint.any_zcoll_QMARK_.call(null,options__$8,new_ind__$1,zloc__$2));
} else {
return and__5043__auto__;
}
})())){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,(zprint.zprint.precede_w_nl.cljs$core$IFn$_invoke$arity$4 ? zprint.zprint.precede_w_nl.cljs$core$IFn$_invoke$arity$4(options__$8,new_ind__$1,coll_print,new cljs.core.Keyword(null,"no-nl-first","no-nl-first",-1507054608)) : zprint.zprint.precede_w_nl.call(null,options__$8,new_ind__$1,coll_print,new cljs.core.Keyword(null,"no-nl-first","no-nl-first",-1507054608)))),r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list*: wrap coll-print:",coll_print], 0))], 0));
} else {
}

var G__43105 = caller;
var G__43106 = options__$8;
var G__43107 = (ind + l_str_len__$1);
var G__43108 = new_ind__$1;
var G__43109 = coll_print;
return (zprint.zprint.wrap_zmap.cljs$core$IFn$_invoke$arity$5 ? zprint.zprint.wrap_zmap.cljs$core$IFn$_invoke$arity$5(G__43105,G__43106,G__43107,G__43108,G__43109) : zprint.zprint.wrap_zmap.call(null,G__43105,G__43106,G__43107,G__43108,G__43109));
})()
,r_str_vec], 0));
}
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,pre_arg_1_style_vec__$1,(((!((len__$3 === (0)))))?(function (){var G__43110 = loptions;
var G__43111 = (l_str_len__$1 + ind);
var G__43112 = arg_1_zloc__$2;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43110,G__43111,G__43112) : zprint.zprint.fzprint_STAR_.call(null,G__43110,G__43111,G__43112));
})():new cljs.core.Keyword(null,"noseq","noseq",405935768)),(((!((len__$3 === (0)))))?(function (){var zloc_seq_right_first = zprint.zprint.get_zloc_seq_right(first_data__$1);
if(zloc_seq_right_first){
if(cljs.core.truth_(arg_1_indent__$2)){
var result = zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,zprint.zprint.noarg1(options__$8,fn_style__$12),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_style__$12,new cljs.core.Keyword(null,"flow","flow",590489032)))?(indent__$3 + ind):arg_1_indent__$2),(indent__$3 + ind),zloc_seq_right_first,fn_style__$12);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$8))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$8),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list*: r-str-vec:",r_str_vec,"result:",result], 0))], 0));
} else {
}

return result;
} else {
var local_indent = ((default_indent + ind) + indent_adj);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$5(zprint.zprint.noarg1(options__$8,fn_style__$12),local_indent,zloc_seq_right_first,new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"newline-first","newline-first",-638470720))], 0));
}
} else {
return new cljs.core.Keyword(null,"noseq","noseq",405935768);
}
})():new cljs.core.Keyword(null,"noseq","noseq",405935768)),r_str_vec], 0));

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
});
/**
 * Pretty print and focus style a :list element.
 */
zprint.zprint.fzprint_list = (function zprint$zprint$fzprint_list(options,ind,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-list"], 0))], 0));
} else {
}

return zprint.zprint.fzprint_list_STAR_(new cljs.core.Keyword(null,"list","list",765357683),"(",")",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Pretty print and focus style a fn element.
 */
zprint.zprint.fzprint_anon_fn = (function zprint$zprint$fzprint_anon_fn(options,ind,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-anon-fn"], 0))], 0));
} else {
}

return zprint.zprint.fzprint_list_STAR_(new cljs.core.Keyword(null,"list","list",765357683),"#(",")",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Return true if there are any collections in the collection.
 */
zprint.zprint.any_zcoll_QMARK_ = (function zprint$zprint$any_zcoll_QMARK_(options,ind,zloc){
var coll_QMARK__seq = (zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zcoll_QMARK_,zloc) : zprint.zfns.zmap.call(null,zprint.zfns.zcoll_QMARK_,zloc));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43113_SHARP_,p2__43114_SHARP_){
var or__5045__auto__ = p1__43113_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return p2__43114_SHARP_;
}
}),null,coll_QMARK__seq);
});
/**
 * Given the output from fzprint-seq, which is a style-vec in
 *   the making without spacing, but with extra [] around the elements,
 *   wrap the elements to the right margin. cur-ind is where we are now,
 *   and ind is where we should be after a newline.
 */
zprint.zprint.wrap_zmap = (function zprint$zprint$wrap_zmap(caller,p__43115,cur_ind,ind,coll_print){
var map__43116 = p__43115;
var map__43116__$1 = cljs.core.__destructure_map(map__43116);
var options = map__43116__$1;
var map__43117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43116__$1,caller);
var map__43117__$1 = cljs.core.__destructure_map(map__43117);
var wrap_after_multi_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43117__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var respect_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43117__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43116__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43116__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var last_index = (cljs.core.count(coll_print) - (1));
var rightcnt__$1 = zprint.zprint.fix_rightcnt(rightcnt);
var cur_seq = coll_print;
var cur_ind__$1 = cur_ind;
var index = (0);
var previous_newline_QMARK_ = false;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(cur_seq)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wrap-zmap: out:",out], 0))], 0));
} else {
}

return out;
} else {
var next_seq = cljs.core.first(cur_seq);
if(cljs.core.truth_(next_seq)){
var multi_QMARK_ = (cljs.core.count(cljs.core.first(cur_seq)) > (1));
var this_seq = cljs.core.first(cur_seq);
var _ = zprint.zprint.log_lines(options,"wrap-zmap:",ind,this_seq);
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["wrap-zmap: ind:",ind,"this-seq:",this_seq], 0))], 0)):null);
var vec__43121 = zprint.zprint.style_lines(options,ind,this_seq);
var linecnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43121,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43121,(1),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43121,(2),null);
var last_width = cljs.core.last(lines);
var len = (last_width - ind);
var len__$1 = (function (){var x__5130__auto__ = (0);
var y__5131__auto__ = len;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_seq),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var comment_QMARK_ = (cljs.core.truth_(respect_nl_QMARK_)?null:cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_seq),(2)),new cljs.core.Keyword(null,"comment","comment",532206069)));
var comment_inline_QMARK_ = (cljs.core.truth_(respect_nl_QMARK_)?null:cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_seq),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405)));
var width__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,last_index))?(width - rightcnt__$1):width);
var fit_QMARK_ = (function (){var and__5043__auto__ = (!(newline_QMARK_));
if(and__5043__auto__){
var and__5043__auto____$1 = (((index === (0))) || (cljs.core.not(comment_QMARK_)));
if(and__5043__auto____$1){
var or__5045__auto__ = (index === (0));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto____$2 = ((multi_QMARK_)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(linecnt,(1)):true);
if(and__5043__auto____$2){
return ((cur_ind__$1 + len__$1) <= width__$1);
} else {
return and__5043__auto____$2;
}
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
var new_ind = (cljs.core.truth_((function (){var or__5045__auto__ = comment_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return comment_inline_QMARK_;
}
})())?(width__$1 + (1)):((((multi_QMARK_) && ((((linecnt > (1))) && (cljs.core.not(wrap_after_multi_QMARK_))))))?width__$1:((fit_QMARK_)?((cur_ind__$1 + len__$1) + (1)):((newline_QMARK_)?ind:((ind + len__$1) + (1))
))));
var G__44160 = cljs.core.next(cur_seq);
var G__44161 = new_ind;
var G__44162 = (index + (1));
var G__44163 = newline_QMARK_;
var G__44164 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(out,((fit_QMARK_)?(((!((index === (0)))))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(15)], null)], null),this_seq], 0)):this_seq):((newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks((function (){var this_seq_next = cljs.core.first(cljs.core.next(cur_seq));
var newline_next_QMARK_ = (cljs.core.truth_(this_seq_next)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_seq_next),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323)):null);
if(cljs.core.truth_(newline_next_QMARK_)){
return (0);
} else {
return (new_ind - (1));
}
})()))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(21)], null)], null):((previous_newline_QMARK_)?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(16)], null)], null),this_seq], 0)):zprint.zprint.prepend_nl(options,ind,this_seq)))));
cur_seq = G__44160;
cur_ind__$1 = G__44161;
index = G__44162;
previous_newline_QMARK_ = G__44163;
out = G__44164;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Given a seq from fzprint-seq, count the newlines and contiguous comments
 *   at the beginning of the list.  A comment preceded by a newline or comment
 *   doesn't count.
 */
zprint.zprint.count_comments_and_newlines = (function zprint$zprint$count_comments_and_newlines(coll_print){
var cur_seq = coll_print;
var previous_comment_QMARK_ = false;
var previous_newline_QMARK_ = false;
var comment_and_newline_count = (0);
while(true){
if(cljs.core.not(cur_seq)){
return comment_and_newline_count;
} else {
var element_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.ffirst(cur_seq),(2));
var comment_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,new cljs.core.Keyword(null,"comment","comment",532206069))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))));
var newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,new cljs.core.Keyword(null,"newline","newline",1790071323));
if((!(((newline_QMARK_) || (comment_QMARK_))))){
return comment_and_newline_count;
} else {
var G__44168 = cljs.core.next(cur_seq);
var G__44169 = comment_QMARK_;
var G__44170 = newline_QMARK_;
var G__44171 = ((comment_QMARK_)?((previous_newline_QMARK_)?(comment_and_newline_count - (1)):comment_and_newline_count):(comment_and_newline_count + (1)));
cur_seq = G__44168;
previous_comment_QMARK_ = G__44169;
previous_newline_QMARK_ = G__44170;
comment_and_newline_count = G__44171;
continue;
}
}
break;
}
});
/**
 * Given a zloc-seq, count the newlines and contiguous comments
 *   at the beginning of the list.  A comment preceded by a newline or comment
 *   doesn't count.
 */
zprint.zprint.zcount_comments_and_newlines = (function zprint$zprint$zcount_comments_and_newlines(zloc_seq){
var cur_seq = zloc_seq;
var previous_comment_QMARK_ = false;
var previous_newline_QMARK_ = false;
var comment_and_newline_count = (0);
while(true){
if(cljs.core.not(cur_seq)){
return comment_and_newline_count;
} else {
var tag = (function (){var G__43124 = cljs.core.first(cur_seq);
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__43124) : zprint.zfns.ztag.call(null,G__43124));
})();
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"comment","comment",532206069));
var newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"newline","newline",1790071323));
if((!(((newline_QMARK_) || (comment_QMARK_))))){
return comment_and_newline_count;
} else {
var G__44174 = cljs.core.next(cur_seq);
var G__44175 = comment_QMARK_;
var G__44176 = newline_QMARK_;
var G__44177 = ((comment_QMARK_)?((previous_newline_QMARK_)?(comment_and_newline_count - (1)):comment_and_newline_count):(comment_and_newline_count + (1)));
cur_seq = G__44174;
previous_comment_QMARK_ = G__44175;
previous_newline_QMARK_ = G__44176;
comment_and_newline_count = G__44177;
continue;
}
}
break;
}
});
/**
 * Return information to be added to the output vector along
 *   with other information [param-map previous-data out].  Will do an
 *   fzprint* on zloc unless next-seq has data in it to use.
 */
zprint.zprint.guided_output = (function zprint$zprint$guided_output(caller,p__43125,zloc,rightmost_zloc_QMARK_,next_guide,cur_index,guide_seq,element_index,index,p__43126,mark_map,p__43127,out){
var map__43128 = p__43125;
var map__43128__$1 = cljs.core.__destructure_map(map__43128);
var options = map__43128__$1;
var map__43129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43128__$1,caller);
var map__43129__$1 = cljs.core.__destructure_map(map__43129);
var wrap_after_multi_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43129__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var wrap_multi_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43129__$1,new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774));
var respect_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43129__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43128__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43128__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43128__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var map__43130 = p__43126;
var map__43130__$1 = cljs.core.__destructure_map(map__43130);
var param_map = map__43130__$1;
var ind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"ind","ind",-20917030));
var cur_ind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var excess_guided_newline_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"excess-guided-newline-count","excess-guided-newline-count",117957353));
var rightcnt__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var group_seq = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027));
var last_cur_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"last-cur-index","last-cur-index",-1587510673));
var spaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"spaces","spaces",365984563));
var one_line_ind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"one-line-ind","one-line-ind",-1359589453));
var align_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43130__$1,new cljs.core.Keyword(null,"align-key","align-key",2084823123));
var vec__43131 = p__43127;
var previous_newline_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43131,(0),null);
var previous_guided_newline_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43131,(1),null);
var unguided_newline_out_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43131,(2),null);
var previous_comment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43131,(3),null);
var previous_data = vec__43131;
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"guided-output: zloc:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = group_seq;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.empty_QMARK_(group_seq)) && (cljs.core.not(zloc)));
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(param_map,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027)),previous_data,out], null);
} else {
var group_seq__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.empty_QMARK_(group_seq);
if(and__5043__auto__){
return zloc;
} else {
return and__5043__auto__;
}
})())?null:group_seq);
var guided_newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"newline","newline",1790071323));
var do_pairs_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"pair-end","pair-end",1334963659))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-pair-group","element-pair-group",2021364237))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-pair-*","element-pair-*",281146227))))));
var options__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-guide","element-guide",384986063)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"guide","guide",-935563924),cljs.core.second(guide_seq)):options);
var incoming_seq = null;
var incoming_seq__$1 = ((guided_newline_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)], null):incoming_seq);
var options__$2 = (cljs.core.truth_(rightmost_zloc_QMARK_)?options__$1:zprint.zprint.not_rightmost(options__$1));
var align_ind = (cljs.core.truth_(align_key)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(mark_map,align_key):null);
var align_ind__$1 = (cljs.core.truth_(align_ind)?(cljs.core.truth_(spaces)?(align_ind + spaces):align_ind):null);
var incoming_lines = zprint.zprint.style_lines(options__$2,(indent + ind),incoming_seq__$1);
var align_spaces = (cljs.core.truth_(align_ind__$1)?(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (align_ind__$1 - cur_ind);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():null);
var group_newline_QMARK_ = (cljs.core.truth_(group_seq__$1)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43140 = cljs.core.first(group_seq__$1);
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__43140) : zprint.zfns.ztag.call(null,G__43140));
})(),new cljs.core.Keyword(null,"newline","newline",1790071323)):null);
var regular_space = (cljs.core.truth_((function (){var or__5045__auto__ = previous_newline_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (element_index === (0));
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return group_newline_QMARK_;
}
}
})())?(0):(1));
var additional_spaces = (function (){var or__5045__auto__ = align_spaces;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = spaces;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (0);
}
}
})();
var beyond_cur_ind = (function (){var x__5130__auto__ = additional_spaces;
var y__5131__auto__ = regular_space;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var this_spaces = (cljs.core.truth_(previous_newline_QMARK_)?(beyond_cur_ind + cur_ind):beyond_cur_ind);
var this_ind = (beyond_cur_ind + cur_ind);
var early_next_ind = (function (){var or__5045__auto__ = align_ind__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((((element_index === (0)))?one_line_ind:(indent + ind)) + (function (){var or__5045__auto____$1 = spaces;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (0);
}
})());
}
})();
var this_early_next_ind = early_next_ind;
var vec__43134 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-newline-best-*","element-newline-best-*",-1915830000)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,group_seq__$1], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-best","element-best",1084358317))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-best-*","element-best-*",-572827078)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zloc], null)], null):null));
var do_hang_remaining_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43134,(0),null);
var hang_remaining_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43134,(1),null);
var try_this_QMARK_ = (function (){var and__5043__auto__ = (function (){var or__5045__auto__ = zloc;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = do_pairs_QMARK_;
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return group_seq__$1;
}
}
})();
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.not(previous_newline_QMARK_);
if(and__5043__auto____$1){
var and__5043__auto____$2 = (!(guided_newline_QMARK_));
if(and__5043__auto____$2){
var or__5045__auto__ = do_hang_remaining_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (((cur_ind < width)) && ((this_ind < width)));
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
})();
var this_result = (cljs.core.truth_(try_this_QMARK_)?((do_pairs_QMARK_)?zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3(zprint.zprint.in_hang(options__$2),this_ind,group_seq__$1):(cljs.core.truth_(do_hang_remaining_QMARK_)?zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,options__$2,this_ind,early_next_ind,hang_remaining_seq,null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-binding-vec","element-binding-vec",936510284)))?zprint.zprint.fzprint_binding_vec(zprint.zprint.in_hang(options__$2),this_ind,zloc):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893)))))?zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$4(zprint.zprint.in_hang(options__$2),this_ind,group_seq__$1,new cljs.core.Keyword(null,"binding","binding",539932593)):(function (){var G__43141 = zprint.zprint.in_hang(options__$2);
var G__43142 = this_ind;
var G__43143 = zloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43141,G__43142,G__43143) : zprint.zprint.fzprint_STAR_.call(null,G__43141,G__43142,G__43143));
})()
)))):null);
var this_result__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = do_hang_remaining_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_result),(2)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.ffirst(this_result)," ")));
} else {
return and__5043__auto__;
}
})())?cljs.core.next(this_result):this_result);
var this_lines = zprint.zprint.style_lines(options__$2,this_ind,this_result__$1);
var wrap_multi_QMARK___$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893)))))?true:wrap_multi_QMARK_);
var this_multi_QMARK_ = (cljs.core.truth_(this_result__$1)?(cljs.core.count(this_result__$1) > (1)):null);
var this_linecnt = (cljs.core.truth_(this_lines)?cljs.core.first(this_lines):null);
var this_fit_QMARK_ = (function (){var and__5043__auto__ = (function (){var or__5045__auto__ = zloc;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = do_pairs_QMARK_;
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return group_seq__$1;
}
}
})();
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = (!(cljs.core.empty_QMARK_(this_result__$1)));
if(and__5043__auto____$1){
if(cljs.core.truth_(this_multi_QMARK_)){
var or__5045__auto__ = wrap_multi_QMARK___$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (this_linecnt <= (1));
}
} else {
return true;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
var output_seq = (function (){var or__5045__auto__ = this_result__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return incoming_seq__$1;
}
})();
var output_newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(output_seq),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
var fail_fit_QMARK_ = (function (){var or__5045__auto__ = guided_newline_QMARK_;
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = output_newline_QMARK_;
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(output_seq),(2)),new cljs.core.Keyword(null,"indent","indent",-148200125));
if(or__5045__auto____$2){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(output_seq),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405));
if(or__5045__auto____$3){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = (((!((element_index === (0))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(output_seq),(2)),new cljs.core.Keyword(null,"comment","comment",532206069))));
if(or__5045__auto____$4){
return or__5045__auto____$4;
} else {
var and__5043__auto__ = try_this_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(this_fit_QMARK_);
} else {
return and__5043__auto__;
}
}
}
}
}
}
})();
var spaces__$1 = (cljs.core.truth_(spaces)?(cljs.core.truth_((function (){var and__5043__auto__ = try_this_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(this_fit_QMARK_);
} else {
return and__5043__auto__;
}
})())?null:spaces):null);
var align_ind__$2 = (cljs.core.truth_(align_ind__$1)?(cljs.core.truth_((function (){var and__5043__auto__ = try_this_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(this_fit_QMARK_);
} else {
return and__5043__auto__;
}
})())?null:align_ind__$1):null);
var next_ind = (function (){var or__5045__auto__ = align_ind__$2;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((((element_index === (0)))?one_line_ind:(indent + ind)) + (function (){var or__5045__auto____$1 = spaces__$1;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (0);
}
})());
}
})();
var early_next_ind__$1 = next_ind;
var test_fit_QMARK_ = (function (){var and__5043__auto__ = cljs.core.not(try_this_QMARK_);
if(and__5043__auto__){
var and__5043__auto____$1 = (function (){var or__5045__auto__ = align_ind__$2;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return spaces__$1;
}
})();
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639).cljs$core$IFn$_invoke$arity$1(options__$2));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
var try_next_QMARK_ = (function (){var and__5043__auto__ = (function (){var or__5045__auto__ = zloc;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = do_pairs_QMARK_;
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return group_seq__$1;
}
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not(this_fit_QMARK_)) && ((!(output_newline_QMARK_))));
} else {
return and__5043__auto__;
}
})();
var next_result = (cljs.core.truth_((function (){var and__5043__auto__ = test_fit_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return try_next_QMARK_;
} else {
return and__5043__auto__;
}
})())?((do_pairs_QMARK_)?zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3(zprint.zprint.in_hang(options__$2),next_ind,group_seq__$1):(function (){var G__43144 = zprint.zprint.in_hang(options__$2);
var G__43145 = next_ind;
var G__43146 = zloc;
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43144,G__43145,G__43146) : zprint.zprint.fzprint_STAR_.call(null,G__43144,G__43145,G__43146));
})()):null);
var first_next_result = next_result;
var next_ind__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = try_next_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = test_fit_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.empty_QMARK_(next_result);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?(((element_index === (0)))?one_line_ind:(indent + ind)):next_ind);
var next_result__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = try_next_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.empty_QMARK_(next_result);
} else {
return and__5043__auto__;
}
})())?((do_pairs_QMARK_)?zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$3(options__$2,next_ind__$1,group_seq__$1):(cljs.core.truth_(do_hang_remaining_QMARK_)?zprint.zprint.fzprint_hang_remaining.cljs$core$IFn$_invoke$arity$6(caller,options__$2,next_ind__$1,next_ind__$1,hang_remaining_seq,null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-binding-vec","element-binding-vec",936510284)))?zprint.zprint.fzprint_binding_vec(options__$2,next_ind__$1,zloc):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893)))))?zprint.zprint.fzprint_pairs.cljs$core$IFn$_invoke$arity$4(options__$2,next_ind__$1,group_seq__$1,new cljs.core.Keyword(null,"binding","binding",539932593)):(zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(options__$2,next_ind__$1,zloc) : zprint.zprint.fzprint_STAR_.call(null,options__$2,next_ind__$1,zloc))
)))):next_result);
var next_result__$2 = (cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = do_hang_remaining_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_guide,new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043))));
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(next_result__$1),(2)),new cljs.core.Keyword(null,"indent","indent",-148200125))) && (clojure.string.starts_with_QMARK_(cljs.core.ffirst(next_result__$1),"\n")));
} else {
return and__5043__auto__;
}
})())?cljs.core.next(next_result__$1):next_result__$1);
var next_lines = zprint.zprint.style_lines(options__$2,next_ind__$1,next_result__$2);
var output_seq__$1 = (function (){var or__5045__auto__ = next_result__$2;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return output_seq;
}
})();
var fail_fit_QMARK___$1 = (function (){var or__5045__auto__ = fail_fit_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return next_result__$2;
}
})();
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(output_seq__$1),(2)),new cljs.core.Keyword(null,"comment","comment",532206069));
var comment_inline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(output_seq__$1),(2)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405));
var newline_QMARK_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(output_seq__$1),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(output_seq__$1),(1))))) || (guided_newline_QMARK_));
var indent_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(output_seq__$1),(2)),new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(output_seq__$1),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))));
var multi_QMARK_ = (cljs.core.truth_(output_seq__$1)?(cljs.core.count(output_seq__$1) > (1)):null);
var vec__43137 = (cljs.core.truth_(output_seq__$1)?(function (){var or__5045__auto__ = next_lines;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = this_lines;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return incoming_lines;
}
}
})():null);
var linecnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43137,(0),null);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43137,(1),null);
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43137,(2),null);
var last_width = cljs.core.last(lines);
var fit_QMARK_ = cljs.core.not(fail_fit_QMARK___$1);
var new_ind = ((((comment_QMARK_) || (comment_inline_QMARK_)))?(width + (1)):(cljs.core.truth_((function (){var and__5043__auto__ = multi_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (((linecnt > (1))) && (cljs.core.not(wrap_after_multi_QMARK_)));
} else {
return and__5043__auto__;
}
})())?(width + (1)):(cljs.core.truth_((function (){var and__5043__auto__ = multi_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (linecnt > (1));
} else {
return and__5043__auto__;
}
})())?last_width:((fit_QMARK_)?last_width:((newline_QMARK_)?(((element_index === (0)))?one_line_ind:(indent + ind)):last_width
)))));
var param_map__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(param_map,new cljs.core.Keyword(null,"excess-guided-newline-count","excess-guided-newline-count",117957353));
var param_map__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$1,new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870),new_ind);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"guided-output: ------ incoming out:",zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic((function (){var G__43148 = cljs.core.PersistentArrayMap.EMPTY;
var G__43149 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var out_len = cljs.core.count(out);
var out_drop = ((0.8 * out_len) | (0));
var out_drop__$1 = ((((out_len - out_drop) < (10)))?(out_len - (10)):out_drop);
return zprint.zprint.condense_depth((1),out);
})());
var fexpr__43147 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$2);
return (fexpr__43147.cljs$core$IFn$_invoke$arity$2 ? fexpr__43147.cljs$core$IFn$_invoke$arity$2(G__43148,G__43149) : fexpr__43147.call(null,G__43148,G__43149));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blue","blue",-622100620)], 0))], 0));
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["guided-output; ------ next-guide:",next_guide], 0))], 0));
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"guided-output: ------ output-seq:",zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic((function (){var G__43151 = cljs.core.PersistentArrayMap.EMPTY;
var G__43152 = zprint.zprint.condense_depth((1),output_seq__$1);
var fexpr__43150 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$2);
return (fexpr__43150.cljs$core$IFn$_invoke$arity$2 ? fexpr__43150.cljs$core$IFn$_invoke$arity$2(G__43151,G__43152) : fexpr__43150.call(null,G__43151,G__43152));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"green","green",-945526839)], 0))], 0));
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["guided-output: ------ mark-map:",mark_map], 0))], 0));
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"guided-output:","\ncaller:",caller,"\nindex:",index,"\nzloc?",(!(cljs.core.empty_QMARK_(zloc))),"\ngroup-seq-len:",cljs.core.count(group_seq__$1),"\ngroup-newline?",group_newline_QMARK_,"\ncur-index:",cur_index,"\nelement-index:",element_index,"\nrightmost-zloc?",rightmost_zloc_QMARK_,"\none-line?",one_line_QMARK_,"\ndo-pairs?",do_pairs_QMARK_,"\nindent?",indent_QMARK_,"\nnewline?",newline_QMARK_,"\nguided-newline?",guided_newline_QMARK_,"\noutput-newline?",output_newline_QMARK_,"\nexcess-guided-newline-count:",excess_guided_newline_count,"\nprevious-newline?",previous_newline_QMARK_,"\nunguided-newline-out?",unguided_newline_out_QMARK_,"\nprevious-comment?",previous_comment_QMARK_,"\nalign-key:",align_key,"\nalign-ind:",align_ind__$2,"\nalign-spaces:",align_spaces,"\nspaces:",spaces__$1,"\nTHIS:","","\n this-lines:",this_lines,"\n this-ind:",this_ind,"\n this-early-next-ind:",this_early_next_ind,"\n this-spaces:",this_spaces,"\n this-multi?",this_multi_QMARK_,"\n this-linecnt:",this_linecnt,"\n try-this?",try_this_QMARK_,"\n this-fit?",this_fit_QMARK_,"\n fail-fit?",fail_fit_QMARK___$1,"\n do-hang-remaining?",do_hang_remaining_QMARK_,"\n regular-space:",regular_space,"\n additional-spaces:",additional_spaces,"\n beyond-cur-ind:",beyond_cur_ind,"\nNEXT:","","\n next-lines:",next_lines,"\n test-fit?",test_fit_QMARK_,"\n try-next?",try_next_QMARK_,"\n early-next-ind:",early_next_ind__$1,"\n next-ind:",next_ind__$1,"\n (+ indent ind):",(indent + ind),"\nmulti?",multi_QMARK_,"\nwrap-multi?",wrap_multi_QMARK___$1,"\nlines:",lines,"\nlinecnt:",linecnt,"\nmax-width:",max_width,"\nlast-width:",last_width,"\nind:",ind,"\nindent:",indent,"\ncur-ind:",cur_ind,"\nnew-ind:",new_ind,"\nwidth:",width,"\nfit?",fit_QMARK_,"\nfail-fit?",fail_fit_QMARK___$1], 0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_map__$2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [newline_QMARK_,guided_newline_QMARK_,(((!(guided_newline_QMARK_))) && (((cljs.core.not((function (){var and__5043__auto____$1 = previous_comment_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
return newline_QMARK_;
} else {
return and__5043__auto____$1;
}
})())) && ((((!(fit_QMARK_))) && (newline_QMARK_)))))),((comment_QMARK_) || (comment_inline_QMARK_))], null),(function (){var guided_output_out = ((fit_QMARK_)?(((!((index === (0)))))?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(this_spaces),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(25)], null)], null),output_seq__$1], 0)):output_seq__$1):((newline_QMARK_)?zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_((function (){var and__5043__auto__ = excess_guided_newline_count;
if(cljs.core.truth_(and__5043__auto__)){
return ((excess_guided_newline_count - (1)) > (0));
} else {
return and__5043__auto__;
}
})())?cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((excess_guided_newline_count - (1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"indent","indent",-148200125),(22)], null)):new cljs.core.Keyword(null,"noseq","noseq",405935768)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(21)], null)], null)], 0)):(cljs.core.truth_((function (){var and__5043__auto__ = previous_newline_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var and__5043__auto____$1 = comment_QMARK_;
if(and__5043__auto____$1){
return previous_guided_newline_QMARK_;
} else {
return and__5043__auto____$1;
}
})());
} else {
return and__5043__auto__;
}
})())?(function (){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"guided-output: previous-newline? etc."], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.comment.blanks(next_ind__$1),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(16)], null)], null),output_seq__$1], 0));
})()
:((((indent_QMARK_) || ((element_index === (0)))))?output_seq__$1:(function (){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),"guided-output: prepend-nl:"], 0));
} else {
}

return zprint.zprint.prepend_nl(options__$2,next_ind__$1,output_seq__$1);
})()
))));
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$2));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic(["guided-output returned additional out:",(((guided_output_out == null))?[" - ALTOGETHER FAILED TO FIT!",(cljs.core.truth_(one_line_QMARK_)?"\n *** ONE-LINE ***":null)].join(''):null)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-blue","bright-blue",-1256551583)], 0)),(function (){var G__43156 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color?","color?",-1891974356),true], null);
var G__43157 = guided_output_out;
var fexpr__43155 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$2);
return (fexpr__43155.cljs$core$IFn$_invoke$arity$2 ? fexpr__43155.cljs$core$IFn$_invoke$arity$2(G__43156,G__43157) : fexpr__43155.call(null,G__43156,G__43157));
})()], 0));
} else {
}

if(cljs.core.truth_(guided_output_out)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(out,guided_output_out);
} else {
return null;
}
})()], null);
}
});
/**
 * Is this element in the output from fzprint-seq a comment or a newline?
 */
zprint.zprint.comment_or_newline_QMARK_ = (function zprint$zprint$comment_or_newline_QMARK_(element){
var element_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(element),(2));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,new cljs.core.Keyword(null,"comment","comment",532206069))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element_type,new cljs.core.Keyword(null,"newline","newline",1790071323))))));
});
/**
 * Given the param map, return the location for here.
 */
zprint.zprint.guide_here = (function zprint$zprint$guide_here(param_map,mark_map){
var x__5130__auto__ = (function (){var or__5045__auto__ = (cljs.core.truth_(new cljs.core.Keyword(null,"align-key","align-key",2084823123).cljs$core$IFn$_invoke$arity$1(param_map))?(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(mark_map,new cljs.core.Keyword(null,"align-key","align-key",2084823123).cljs$core$IFn$_invoke$arity$1(param_map)) + (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()) - new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var y__5131__auto__ = ((new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870).cljs$core$IFn$_invoke$arity$1(param_map) + (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()) - new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
});
/**
 * Given a zloc-seq wrap the elements to the right margin 
 *   and be guided by the guide seq.
 */
zprint.zprint.fzprint_guide = (function zprint$zprint$fzprint_guide(caller,p__43170,ind,cur_ind,local_indent,guide,zloc_seq){
var map__43171 = p__43170;
var map__43171__$1 = cljs.core.__destructure_map(map__43171);
var options = map__43171__$1;
var map__43172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43171__$1,caller);
var map__43172__$1 = cljs.core.__destructure_map(map__43172);
var wrap_after_multi_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43172__$1,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052));
var respect_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43172__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43172__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43171__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43171__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43171__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic(["fzprint-guide: entry: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__43174 = cljs.core.first(zloc_seq);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__43174) : zprint.zfns.zstring.call(null,G__43174));
})())].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"purple","purple",-876021126)], 0)),"caller:",caller,"ind:",ind,"cur-ind:",cur_ind,"local-indent:",local_indent,"guide:",zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic((function (){var G__43176 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"guideguide","guideguide",753675352)], null);
var G__43177 = guide;
var fexpr__43175 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__43175.cljs$core$IFn$_invoke$arity$2 ? fexpr__43175.cljs$core$IFn$_invoke$arity$2(G__43176,G__43177) : fexpr__43175.call(null,G__43176,G__43177));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blue","blue",-622100620)], 0))], 0));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = one_line_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"newline","newline",1790071323),null], null), null),guide);
} else {
return and__5043__auto__;
}
})())){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-guide: returned nil - one-line? is true and guide","has :newline!"], 0));
} else {
}

return null;
} else {
var rightcnt__$1 = zprint.zprint.fix_rightcnt(rightcnt);
var last_cur_index = (cljs.core.count(zloc_seq) - (1));
if(cljs.core.truth_(guide)){
} else {
throw (new Error(["No guide but fn-style is :guide for this sequence: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq))].join('')));
}

var cur_zloc = zloc_seq;
var cur_index = (0);
var guide_seq = guide;
var element_index = (0);
var index = (0);
var param_map = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870),cur_ind,new cljs.core.Keyword(null,"ind","ind",-20917030),ind,new cljs.core.Keyword(null,"one-line-ind","one-line-ind",-1359589453),cur_ind,new cljs.core.Keyword(null,"indent","indent",-148200125),local_indent,new cljs.core.Keyword(null,"last-cur-index","last-cur-index",-1587510673),last_cur_index,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070),rightcnt__$1,new cljs.core.Keyword(null,"initial-options","initial-options",-1763564367),options], null);
var mark_map = cljs.core.PersistentArrayMap.EMPTY;
var G__43181 = null;
var vec__43182 = G__43181;
var previous_newline_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43182,(0),null);
var previous_guided_newline_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43182,(1),null);
var unguided_newline_out_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43182,(2),null);
var previous_comment_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43182,(3),null);
var previous_data = vec__43182;
var options__$1 = options;
var out = cljs.core.PersistentVector.EMPTY;
var cur_zloc__$1 = cur_zloc;
var cur_index__$1 = cur_index;
var guide_seq__$1 = guide_seq;
var element_index__$1 = element_index;
var index__$1 = index;
var param_map__$1 = param_map;
var mark_map__$1 = mark_map;
var G__43181__$1 = G__43181;
var options__$2 = options__$1;
var out__$1 = out;
while(true){
var cur_zloc__$2 = cur_zloc__$1;
var cur_index__$2 = cur_index__$1;
var guide_seq__$2 = guide_seq__$1;
var element_index__$2 = element_index__$1;
var index__$2 = index__$1;
var param_map__$2 = param_map__$1;
var mark_map__$2 = mark_map__$1;
var vec__43226 = G__43181__$1;
var previous_newline_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43226,(0),null);
var previous_guided_newline_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43226,(1),null);
var unguided_newline_out_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43226,(2),null);
var previous_comment_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43226,(3),null);
var previous_data__$1 = vec__43226;
var options__$3 = options__$2;
var out__$2 = out__$1;
if(((cljs.core.not((function (){var or__5045__auto__ = guide_seq__$2;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cur_zloc__$2;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2);
}
}
})())) || ((out__$2 == null)))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: out:",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),(function (){var G__43230 = cljs.core.PersistentArrayMap.EMPTY;
var G__43231 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,zprint.zprint.condense_depth((1),out__$2));
var fexpr__43229 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$3);
return (fexpr__43229.cljs$core$IFn$_invoke$arity$2 ? fexpr__43229.cljs$core$IFn$_invoke$arity$2(G__43230,G__43231) : fexpr__43229.call(null,G__43230,G__43231));
})()], 0));
} else {
}

return out__$2;
} else {
if((index__$2 > (3000))){
throw (new Error(["When processing a guide"," the iteration limit of 3000 was"," reached!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(guide_seq__$2))].join('')));
} else {
var first_guide_seq = cljs.core.first(guide_seq__$2);
var _ = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"\n\nfzprint-guide: =====> (first guide-seq):",first_guide_seq,"\nfzprint-guide: initial param-map:",(function (){var G__43233 = cljs.core.PersistentArrayMap.EMPTY;
var G__43234 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(param_map__$2,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-options","initial-options",-1763564367)], 0)),new cljs.core.Keyword(null,"group-seq-len","group-seq-len",-940766592),cljs.core.count(new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$2)));
var fexpr__43232 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$3);
return (fexpr__43232.cljs$core$IFn$_invoke$arity$2 ? fexpr__43232.cljs$core$IFn$_invoke$arity$2(G__43233,G__43234) : fexpr__43232.call(null,G__43233,G__43234));
})()], 0)):null);
var ___$1 = ((cljs.core.empty_QMARK_(guide_seq__$2))?(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint-guide: guide ran out! guide:",zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic((function (){var G__43236 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null)], null);
var G__43237 = guide;
var fexpr__43235 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$3);
return (fexpr__43235.cljs$core$IFn$_invoke$arity$2 ? fexpr__43235.cljs$core$IFn$_invoke$arity$2(G__43236,G__43237) : fexpr__43235.call(null,G__43236,G__43237));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),"\nexpression:",(function (){var G__43239 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null)], null);
var G__43240 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq));
var fexpr__43238 = new cljs.core.Keyword(null,"dzprint","dzprint",-403245762).cljs$core$IFn$_invoke$arity$1(options__$3);
return (fexpr__43238.cljs$core$IFn$_invoke$arity$2 ? fexpr__43238.cljs$core$IFn$_invoke$arity$2(G__43239,G__43240) : fexpr__43238.call(null,G__43239,G__43240));
})()], 0)):null):null);
var guide_seq__$3 = (function (){var or__5045__auto__ = guide_seq__$2;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element-*","element-*",-948937262)], null);
}
})();
var comment_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43241 = cljs.core.first(cur_zloc__$2);
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__43241) : zprint.zfns.ztag.call(null,G__43241));
})(),new cljs.core.Keyword(null,"comment","comment",532206069));
var comment_inline_QMARK_ = comment_QMARK_;
var next_newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43242 = cljs.core.first(cur_zloc__$2);
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__43242) : zprint.zfns.ztag.call(null,G__43242));
})(),new cljs.core.Keyword(null,"newline","newline",1790071323));
var uneval_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43243 = cljs.core.first(cur_zloc__$2);
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__43243) : zprint.zfns.ztag.call(null,G__43243));
})(),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$2);
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"grouping?","grouping?",1375753146).cljs$core$IFn$_invoke$arity$1(param_map__$2);
} else {
return and__5043__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"group-end","group-end",-574931147))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === end accumulating a group",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0))], 0));
} else {
}

var G__44251 = cur_zloc__$2;
var G__44252 = cur_index__$2;
var G__44253 = cljs.core.next(guide_seq__$3);
var G__44254 = element_index__$2;
var G__44255 = (index__$2 + (1));
var G__44256 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$2,new cljs.core.Keyword(null,"grouping?","grouping?",1375753146),null);
var G__44257 = mark_map__$2;
var G__44258 = previous_data__$1;
var G__44259 = options__$3;
var G__44260 = out__$2;
cur_zloc__$1 = G__44251;
cur_index__$1 = G__44252;
guide_seq__$1 = G__44253;
element_index__$1 = G__44254;
index__$1 = G__44255;
param_map__$1 = G__44256;
mark_map__$1 = G__44257;
G__43181__$1 = G__44258;
options__$2 = G__44259;
out__$1 = G__44260;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element","element",1974019749))){
var vec__43244 = cljs.core.split_with(zprint.zprint.pair_element_QMARK_,cur_zloc__$2);
var comments_or_newlines_cur_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43244,(0),null);
var remaining_cur_zloc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43244,(1),null);
var group_seq = new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$2);
var group_seq__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(group_seq,comments_or_newlines_cur_zloc));
var next_zloc = cljs.core.first(remaining_cur_zloc);
var group_seq__$2 = (cljs.core.truth_(next_zloc)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(group_seq__$1,cljs.core.first(remaining_cur_zloc)):group_seq__$1);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === save a group element",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0))], 0));
} else {
}

var G__44262 = cljs.core.next(remaining_cur_zloc);
var G__44263 = ((cur_index__$2 + cljs.core.count(comments_or_newlines_cur_zloc)) + (1));
var G__44264 = cljs.core.next(guide_seq__$3);
var G__44265 = element_index__$2;
var G__44266 = (index__$2 + (1));
var G__44267 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$2,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),group_seq__$2);
var G__44268 = mark_map__$2;
var G__44269 = previous_data__$1;
var G__44270 = options__$3;
var G__44271 = out__$2;
cur_zloc__$1 = G__44262;
cur_index__$1 = G__44263;
guide_seq__$1 = G__44264;
element_index__$1 = G__44265;
index__$1 = G__44266;
param_map__$1 = G__44267;
mark_map__$1 = G__44268;
G__43181__$1 = G__44269;
options__$2 = G__44270;
out__$1 = G__44271;
continue;
} else {
throw (new Error(["When processing a guide and accumulating a"," group only :element is allowed,"," but encountered: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq),"' instead!"].join('')));

}
}
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"newline","newline",1790071323));
if(and__5043__auto__){
return unguided_newline_out_QMARK___$1;
} else {
return and__5043__auto__;
}
})())){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === skip guided newline",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),"since we had unguided-newline-out on last output"], 0));
} else {
}

var G__44273 = cur_zloc__$2;
var G__44274 = cur_index__$2;
var G__44275 = cljs.core.next(guide_seq__$3);
var G__44276 = element_index__$2;
var G__44277 = (index__$2 + (1));
var G__44278 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(param_map__$2,new cljs.core.Keyword(null,"spaces","spaces",365984563),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"align-key","align-key",2084823123)], 0));
var G__44279 = mark_map__$2;
var G__44280 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [previous_newline_QMARK___$1,previous_guided_newline_QMARK___$1,null,previous_comment_QMARK___$1], null);
var G__44281 = options__$3;
var G__44282 = out__$2;
cur_zloc__$1 = G__44273;
cur_index__$1 = G__44274;
guide_seq__$1 = G__44275;
element_index__$1 = G__44276;
index__$1 = G__44277;
param_map__$1 = G__44278;
mark_map__$1 = G__44279;
G__43181__$1 = G__44280;
options__$2 = G__44281;
out__$1 = G__44282;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"mark","mark",-373816345))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === :mark key:",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),cljs.core.first(cljs.core.next(guide_seq__$3)),"value:",(new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870).cljs$core$IFn$_invoke$arity$1(param_map__$2) + (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map__$2);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})())], 0));
} else {
}

var G__44283 = cur_zloc__$2;
var G__44284 = cur_index__$2;
var G__44285 = cljs.core.nnext(guide_seq__$3);
var G__44286 = element_index__$2;
var G__44287 = (index__$2 + (1));
var G__44288 = param_map__$2;
var G__44289 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mark_map__$2,cljs.core.first(cljs.core.next(guide_seq__$3)),(new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870).cljs$core$IFn$_invoke$arity$1(param_map__$2) + (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map__$2);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()));
var G__44290 = previous_data__$1;
var G__44291 = options__$3;
var G__44292 = out__$2;
cur_zloc__$1 = G__44283;
cur_index__$1 = G__44284;
guide_seq__$1 = G__44285;
element_index__$1 = G__44286;
index__$1 = G__44287;
param_map__$1 = G__44288;
mark_map__$1 = G__44289;
G__43181__$1 = G__44290;
options__$2 = G__44291;
out__$1 = G__44292;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"mark-at","mark-at",-1321655498))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === :mark-at key:",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),cljs.core.first(cljs.core.next(guide_seq__$3)),"value:",(new cljs.core.Keyword(null,"one-line-ind","one-line-ind",-1359589453).cljs$core$IFn$_invoke$arity$1(param_map__$2) + cljs.core.first(cljs.core.nnext(guide_seq__$3)))], 0));
} else {
}

var G__44295 = cur_zloc__$2;
var G__44296 = cur_index__$2;
var G__44297 = cljs.core.nthnext(guide_seq__$3,(3));
var G__44298 = element_index__$2;
var G__44299 = (index__$2 + (1));
var G__44300 = param_map__$2;
var G__44301 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mark_map__$2,cljs.core.first(cljs.core.next(guide_seq__$3)),(new cljs.core.Keyword(null,"one-line-ind","one-line-ind",-1359589453).cljs$core$IFn$_invoke$arity$1(param_map__$2) + cljs.core.first(cljs.core.nnext(guide_seq__$3))));
var G__44302 = previous_data__$1;
var G__44303 = options__$3;
var G__44304 = out__$2;
cur_zloc__$1 = G__44295;
cur_index__$1 = G__44296;
guide_seq__$1 = G__44297;
element_index__$1 = G__44298;
index__$1 = G__44299;
param_map__$1 = G__44300;
mark_map__$1 = G__44301;
G__43181__$1 = G__44302;
options__$2 = G__44303;
out__$1 = G__44304;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"mark-at-indent","mark-at-indent",-126657684))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === :mark-at-indent key:",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),cljs.core.first(cljs.core.next(guide_seq__$3)),"value:",((new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$2) + new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$2)) + cljs.core.first(cljs.core.nnext(guide_seq__$3)))], 0));
} else {
}

var G__44305 = cur_zloc__$2;
var G__44306 = cur_index__$2;
var G__44307 = cljs.core.nthnext(guide_seq__$3,(3));
var G__44308 = element_index__$2;
var G__44309 = (index__$2 + (1));
var G__44310 = param_map__$2;
var G__44311 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mark_map__$2,cljs.core.first(cljs.core.next(guide_seq__$3)),((new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$2) + new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$2)) + cljs.core.first(cljs.core.nnext(guide_seq__$3))));
var G__44312 = previous_data__$1;
var G__44313 = options__$3;
var G__44314 = out__$2;
cur_zloc__$1 = G__44305;
cur_index__$1 = G__44306;
guide_seq__$1 = G__44307;
element_index__$1 = G__44308;
index__$1 = G__44309;
param_map__$1 = G__44310;
mark_map__$1 = G__44311;
G__43181__$1 = G__44312;
options__$2 = G__44313;
out__$1 = G__44314;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"spaces","spaces",365984563))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === spaces",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),cljs.core.first(cljs.core.next(guide_seq__$3))], 0));
} else {
}

var G__44317 = cur_zloc__$2;
var G__44318 = cur_index__$2;
var G__44319 = cljs.core.nnext(guide_seq__$3);
var G__44320 = element_index__$2;
var G__44321 = (index__$2 + (1));
var G__44322 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$2,new cljs.core.Keyword(null,"spaces","spaces",365984563),(cljs.core.first(cljs.core.next(guide_seq__$3)) + (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map__$2);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()));
var G__44323 = mark_map__$2;
var G__44324 = previous_data__$1;
var G__44325 = options__$3;
var G__44326 = out__$2;
cur_zloc__$1 = G__44317;
cur_index__$1 = G__44318;
guide_seq__$1 = G__44319;
element_index__$1 = G__44320;
index__$1 = G__44321;
param_map__$1 = G__44322;
mark_map__$1 = G__44323;
G__43181__$1 = G__44324;
options__$2 = G__44325;
out__$1 = G__44326;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"indent","indent",-148200125))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint-guide: === :indent",cljs.core.first(cljs.core.next(guide_seq__$3))], 0));
} else {
}

var G__44330 = cur_zloc__$2;
var G__44331 = cur_index__$2;
var G__44332 = cljs.core.nnext(guide_seq__$3);
var G__44333 = element_index__$2;
var G__44334 = (index__$2 + (1));
var G__44335 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$2,new cljs.core.Keyword(null,"indent","indent",-148200125),cljs.core.first(cljs.core.next(guide_seq__$3)));
var G__44336 = mark_map__$2;
var G__44337 = previous_data__$1;
var G__44338 = options__$3;
var G__44339 = out__$2;
cur_zloc__$1 = G__44330;
cur_index__$1 = G__44331;
guide_seq__$1 = G__44332;
element_index__$1 = G__44333;
index__$1 = G__44334;
param_map__$1 = G__44335;
mark_map__$1 = G__44336;
G__43181__$1 = G__44337;
options__$2 = G__44338;
out__$1 = G__44339;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"indent-here","indent-here",1856277408))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint-guide: === :indent-here","align-key:",new cljs.core.Keyword(null,"align-key","align-key",2084823123).cljs$core$IFn$_invoke$arity$1(param_map__$2),"align-ind:",(cljs.core.truth_(new cljs.core.Keyword(null,"align-key","align-key",2084823123).cljs$core$IFn$_invoke$arity$1(param_map__$2))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(mark_map__$2,new cljs.core.Keyword(null,"align-key","align-key",2084823123).cljs$core$IFn$_invoke$arity$1(param_map__$2)):null),"cur-ind:",new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870).cljs$core$IFn$_invoke$arity$1(param_map__$2),"spaces:",new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(param_map__$2)], 0));
} else {
}

var G__44343 = cur_zloc__$2;
var G__44344 = cur_index__$2;
var G__44345 = cljs.core.next(guide_seq__$3);
var G__44346 = element_index__$2;
var G__44347 = (index__$2 + (1));
var G__44348 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$2,new cljs.core.Keyword(null,"indent","indent",-148200125),zprint.zprint.guide_here(param_map__$2,mark_map__$2));
var G__44349 = mark_map__$2;
var G__44350 = previous_data__$1;
var G__44351 = options__$3;
var G__44352 = out__$2;
cur_zloc__$1 = G__44343;
cur_index__$1 = G__44344;
guide_seq__$1 = G__44345;
element_index__$1 = G__44346;
index__$1 = G__44347;
param_map__$1 = G__44348;
mark_map__$1 = G__44349;
G__43181__$1 = G__44350;
options__$2 = G__44351;
out__$1 = G__44352;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"indent-align","indent-align",1362687591))){
var align_key = cljs.core.first(cljs.core.next(guide_seq__$3));
var ___$2 = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === :indent-align",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),"key:",align_key,"value:",cljs.core.get.cljs$core$IFn$_invoke$arity$2(mark_map__$2,align_key),"cur-ind:",new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870).cljs$core$IFn$_invoke$arity$1(param_map__$2)], 0)):null);
var G__44354 = cur_zloc__$2;
var G__44355 = cur_index__$2;
var G__44356 = cljs.core.nnext(guide_seq__$3);
var G__44357 = element_index__$2;
var G__44358 = (index__$2 + (1));
var G__44359 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$2,new cljs.core.Keyword(null,"indent","indent",-148200125),(function (){var or__5045__auto__ = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mark_map__$2,align_key))?(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(mark_map__$2,align_key) - new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$2));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$2);
}
})());
var G__44360 = mark_map__$2;
var G__44361 = previous_data__$1;
var G__44362 = options__$3;
var G__44363 = out__$2;
cur_zloc__$1 = G__44354;
cur_index__$1 = G__44355;
guide_seq__$1 = G__44356;
element_index__$1 = G__44357;
index__$1 = G__44358;
param_map__$1 = G__44359;
mark_map__$1 = G__44360;
G__43181__$1 = G__44361;
options__$2 = G__44362;
out__$1 = G__44363;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"indent-reset","indent-reset",900463610))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === :indent-reset",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0))], 0));
} else {
}

var G__44373 = cur_zloc__$2;
var G__44374 = cur_index__$2;
var G__44375 = cljs.core.next(guide_seq__$3);
var G__44376 = element_index__$2;
var G__44377 = (index__$2 + (1));
var G__44378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$2,new cljs.core.Keyword(null,"indent","indent",-148200125),local_indent);
var G__44379 = mark_map__$2;
var G__44380 = previous_data__$1;
var G__44381 = options__$3;
var G__44382 = out__$2;
cur_zloc__$1 = G__44373;
cur_index__$1 = G__44374;
guide_seq__$1 = G__44375;
element_index__$1 = G__44376;
index__$1 = G__44377;
param_map__$1 = G__44378;
mark_map__$1 = G__44379;
G__43181__$1 = G__44380;
options__$2 = G__44381;
out__$1 = G__44382;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"options","options",99638489))){
var vec__43247 = zprint.zprint.internal_config_and_validate.cljs$core$IFn$_invoke$arity$4(options__$3,cljs.core.first(cljs.core.next(guide_seq__$3)),"fzprint-guide: options:",null);
var merged_option_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43247,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43247,(1),null);
var ___$3 = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === :options",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),cljs.core.first(cljs.core.next(guide_seq__$3))], 0)):null);
var G__44383 = cur_zloc__$2;
var G__44384 = cur_index__$2;
var G__44385 = cljs.core.nnext(guide_seq__$3);
var G__44386 = element_index__$2;
var G__44387 = (index__$2 + (1));
var G__44388 = param_map__$2;
var G__44389 = mark_map__$2;
var G__44390 = previous_data__$1;
var G__44391 = merged_option_map;
var G__44392 = out__$2;
cur_zloc__$1 = G__44383;
cur_index__$1 = G__44384;
guide_seq__$1 = G__44385;
element_index__$1 = G__44386;
index__$1 = G__44387;
param_map__$1 = G__44388;
mark_map__$1 = G__44389;
G__43181__$1 = G__44390;
options__$2 = G__44391;
out__$1 = G__44392;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"options-reset","options-reset",610833739))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === :options-reset",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0))], 0));
} else {
}

var G__44393 = cur_zloc__$2;
var G__44394 = cur_index__$2;
var G__44395 = cljs.core.next(guide_seq__$3);
var G__44396 = element_index__$2;
var G__44397 = (index__$2 + (1));
var G__44398 = param_map__$2;
var G__44399 = mark_map__$2;
var G__44400 = previous_data__$1;
var G__44401 = new cljs.core.Keyword(null,"initial-options","initial-options",-1763564367).cljs$core$IFn$_invoke$arity$1(param_map__$2);
var G__44402 = out__$2;
cur_zloc__$1 = G__44393;
cur_index__$1 = G__44394;
guide_seq__$1 = G__44395;
element_index__$1 = G__44396;
index__$1 = G__44397;
param_map__$1 = G__44398;
mark_map__$1 = G__44399;
G__43181__$1 = G__44400;
options__$2 = G__44401;
out__$1 = G__44402;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"align","align",1964212802))){
var align_key = cljs.core.first(cljs.core.next(guide_seq__$3));
var ___$2 = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === :align",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),"key:",align_key,"value:",cljs.core.get.cljs$core$IFn$_invoke$arity$2(mark_map__$2,align_key)], 0)):null);
var G__44403 = cur_zloc__$2;
var G__44404 = cur_index__$2;
var G__44405 = cljs.core.nnext(guide_seq__$3);
var G__44406 = element_index__$2;
var G__44407 = (index__$2 + (1));
var G__44408 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(param_map__$2,new cljs.core.Keyword(null,"spaces","spaces",365984563)),new cljs.core.Keyword(null,"align-key","align-key",2084823123),align_key);
var G__44409 = mark_map__$2;
var G__44410 = previous_data__$1;
var G__44411 = options__$3;
var G__44412 = out__$2;
cur_zloc__$1 = G__44403;
cur_index__$1 = G__44404;
guide_seq__$1 = G__44405;
element_index__$1 = G__44406;
index__$1 = G__44407;
param_map__$1 = G__44408;
mark_map__$1 = G__44409;
G__43181__$1 = G__44410;
options__$2 = G__44411;
out__$1 = G__44412;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2))){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"newline-force","newline-force",2057265840))))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === counting guided newlines:",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),(new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2) + (1))], 0));
} else {
}

var G__44414 = cur_zloc__$2;
var G__44415 = cur_index__$2;
var G__44416 = cljs.core.next(guide_seq__$3);
var G__44417 = element_index__$2;
var G__44418 = (index__$2 + (1));
var G__44419 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(param_map__$2,new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237),(cljs.core.truth_((function (){var or__5045__auto__ = cur_zloc__$2;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"newline-force","newline-force",2057265840));
}
})())?(new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2) + (1)):new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870),(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$2) + new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$2))], 0)),new cljs.core.Keyword(null,"spaces","spaces",365984563),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"align-key","align-key",2084823123)], 0));
var G__44420 = mark_map__$2;
var G__44421 = previous_data__$1;
var G__44422 = options__$3;
var G__44423 = out__$2;
cur_zloc__$1 = G__44414;
cur_index__$1 = G__44415;
guide_seq__$1 = G__44416;
element_index__$1 = G__44417;
index__$1 = G__44418;
param_map__$1 = G__44419;
mark_map__$1 = G__44420;
G__43181__$1 = G__44421;
options__$2 = G__44422;
out__$1 = G__44423;
continue;
} else {
var ___$2 = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === finished counting newlines",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),":guided-newline-count:",new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2)], 0)):null);
var comment_and_newline_count = zprint.zprint.zcount_comments_and_newlines(cur_zloc__$2);
var guided_newline_count = new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237).cljs$core$IFn$_invoke$arity$1(param_map__$2);
var excess_guided_newline_count = (function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (guided_newline_count - comment_and_newline_count);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var param_map__$3 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(param_map__$2,new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237));
var param_map__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$3,new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870),(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$3) + new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$3)));
var param_map__$5 = (((excess_guided_newline_count > (0)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$4,new cljs.core.Keyword(null,"excess-guided-newline-count","excess-guided-newline-count",117957353),excess_guided_newline_count):param_map__$4);
var vec__43250 = (((excess_guided_newline_count > (0)))?(function (){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide === excess-guided-newline-count:",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),excess_guided_newline_count], 0));
} else {
}

return zprint.zprint.guided_output(caller,options__$3,null,null,new cljs.core.Keyword(null,"newline","newline",1790071323),cur_index__$2,guide_seq__$3,element_index__$2,index__$2,param_map__$5,mark_map__$2,previous_data__$1,out__$2);
})()
:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_map__$5,previous_data__$1,out__$2], null));
var new_param_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43250,(0),null);
var new_previous_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43250,(1),null);
var new_out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43250,(2),null);
var G__44428 = cur_zloc__$2;
var G__44429 = cur_index__$2;
var G__44430 = guide_seq__$3;
var G__44431 = element_index__$2;
var G__44432 = (index__$2 + (1));
var G__44433 = new_param_map;
var G__44434 = mark_map__$2;
var G__44435 = new_previous_data;
var G__44436 = options__$3;
var G__44437 = new_out;
cur_zloc__$1 = G__44428;
cur_index__$1 = G__44429;
guide_seq__$1 = G__44430;
element_index__$1 = G__44431;
index__$1 = G__44432;
param_map__$1 = G__44433;
mark_map__$1 = G__44434;
G__43181__$1 = G__44435;
options__$2 = G__44436;
out__$1 = G__44437;
continue;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"newline-force","newline-force",2057265840))))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === start counting guided newlines",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0))], 0));
} else {
}

var G__44438 = cur_zloc__$2;
var G__44439 = cur_index__$2;
var G__44440 = cljs.core.next(guide_seq__$3);
var G__44441 = element_index__$2;
var G__44442 = (index__$2 + (1));
var G__44443 = (((((!(cljs.core.empty_QMARK_(cur_zloc__$2)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"newline-force","newline-force",2057265840)))))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(param_map__$2,new cljs.core.Keyword(null,"guided-newline-count","guided-newline-count",-687984237),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cur-ind","cur-ind",-440547870),(new cljs.core.Keyword(null,"ind","ind",-20917030).cljs$core$IFn$_invoke$arity$1(param_map__$2) + new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(param_map__$2))], 0)),new cljs.core.Keyword(null,"spaces","spaces",365984563),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"align-key","align-key",2084823123)], 0)):param_map__$2);
var G__44444 = mark_map__$2;
var G__44445 = previous_data__$1;
var G__44446 = options__$3;
var G__44447 = out__$2;
cur_zloc__$1 = G__44438;
cur_index__$1 = G__44439;
guide_seq__$1 = G__44440;
element_index__$1 = G__44441;
index__$1 = G__44442;
param_map__$1 = G__44443;
mark_map__$1 = G__44444;
G__43181__$1 = G__44445;
options__$2 = G__44446;
out__$1 = G__44447;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"group-begin","group-begin",447482475))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === start accumulating a group",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0))], 0));
} else {
}

var G__44448 = cur_zloc__$2;
var G__44449 = cur_index__$2;
var G__44450 = cljs.core.next(guide_seq__$3);
var G__44451 = element_index__$2;
var G__44452 = (index__$2 + (1));
var G__44453 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(param_map__$2,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"grouping?","grouping?",1375753146),true], 0));
var G__44454 = mark_map__$2;
var G__44455 = previous_data__$1;
var G__44456 = options__$3;
var G__44457 = out__$2;
cur_zloc__$1 = G__44448;
cur_index__$1 = G__44449;
guide_seq__$1 = G__44450;
element_index__$1 = G__44451;
index__$1 = G__44452;
param_map__$1 = G__44453;
mark_map__$1 = G__44454;
G__43181__$1 = G__44455;
options__$2 = G__44456;
out__$1 = G__44457;
continue;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-newline-best-*","element-newline-best-*",-1915830000))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-pair-*","element-pair-*",281146227))))))){
var ___$2 = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic(["fzprint-guide: === ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$3)], 0)):null);
var ___$3 = ((cljs.core.empty_QMARK_(cljs.core.next(guide_seq__$3)))?null:(function(){throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq),"not the last command in the guide!"].join('')))})());
var param_map__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$2))?param_map__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$2,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),cljs.core.PersistentVector.EMPTY));
var param_map__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(param_map__$3,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$3),cur_zloc__$2));
var ___$4 = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),"fzprint-guide: === ",first_guide_seq," group-seq:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$4))], 0))], 0)):null);
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$4))){
var G__44460 = cur_zloc__$2;
var G__44461 = cur_index__$2;
var G__44462 = cljs.core.next(guide_seq__$3);
var G__44463 = element_index__$2;
var G__44464 = (index__$2 + (1));
var G__44465 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(param_map__$4,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"grouping?","grouping?",1375753146)], 0));
var G__44466 = mark_map__$2;
var G__44467 = previous_data__$1;
var G__44468 = options__$3;
var G__44469 = out__$2;
cur_zloc__$1 = G__44460;
cur_index__$1 = G__44461;
guide_seq__$1 = G__44462;
element_index__$1 = G__44463;
index__$1 = G__44464;
param_map__$1 = G__44465;
mark_map__$1 = G__44466;
G__43181__$1 = G__44467;
options__$2 = G__44468;
out__$1 = G__44469;
continue;
} else {
var vec__43256 = zprint.zprint.guided_output(caller,options__$3,null,true,first_guide_seq,cur_index__$2,guide_seq__$3,element_index__$2,index__$2,param_map__$4,mark_map__$2,previous_data__$1,out__$2);
var new_param_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43256,(0),null);
var new_previous_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43256,(1),null);
var new_out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43256,(2),null);
var G__44470 = null;
var G__44471 = (cur_index__$2 + cljs.core.count(cur_zloc__$2));
var G__44472 = cljs.core.next(guide_seq__$3);
var G__44473 = element_index__$2;
var G__44474 = (index__$2 + (1));
var G__44475 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new_param_map,new cljs.core.Keyword(null,"group-seq","group-seq",-690875027),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"grouping","grouping",-1219230389)], 0));
var G__44476 = mark_map__$2;
var G__44477 = new_previous_data;
var G__44478 = options__$3;
var G__44479 = new_out;
cur_zloc__$1 = G__44470;
cur_index__$1 = G__44471;
guide_seq__$1 = G__44472;
element_index__$1 = G__44473;
index__$1 = G__44474;
param_map__$1 = G__44475;
mark_map__$1 = G__44476;
G__43181__$1 = G__44477;
options__$2 = G__44478;
out__$1 = G__44479;
continue;
}
} else {
if((((cur_zloc__$2 == null)) && (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"group-seq","group-seq",-690875027).cljs$core$IFn$_invoke$arity$1(param_map__$2))))){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === ran out of cur-zloc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0))], 0));
} else {
}

var G__44480 = cljs.core.next(cur_zloc__$2);
var G__44481 = (cur_index__$2 + (1));
var G__44482 = cljs.core.next(guide_seq__$3);
var G__44483 = element_index__$2;
var G__44484 = (index__$2 + (1));
var G__44485 = param_map__$2;
var G__44486 = mark_map__$2;
var G__44487 = previous_data__$1;
var G__44488 = options__$3;
var G__44489 = out__$2;
cur_zloc__$1 = G__44480;
cur_index__$1 = G__44481;
guide_seq__$1 = G__44482;
element_index__$1 = G__44483;
index__$1 = G__44484;
param_map__$1 = G__44485;
mark_map__$1 = G__44486;
G__43181__$1 = G__44487;
options__$2 = G__44488;
out__$1 = G__44489;
continue;
} else {
if(((comment_QMARK_) || (((comment_inline_QMARK_) || (((uneval_QMARK_) || (next_newline_QMARK_))))))){
var ___$2 = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic("fzprint-guide: === process comments, newlines, uneval",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0)),"comment?",comment_QMARK_,"comment-inline?",comment_inline_QMARK_,"uneval?",uneval_QMARK_,"next-newline?",next_newline_QMARK_], 0)):null);
var vec__43259 = zprint.zprint.guided_output(caller,options__$3,cljs.core.first(cur_zloc__$2),cljs.core.empty_QMARK_(cljs.core.next(cur_zloc__$2)),null,cur_index__$2,guide_seq__$3,element_index__$2,index__$2,param_map__$2,mark_map__$2,previous_data__$1,out__$2);
var new_param_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259,(0),null);
var new_previous_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259,(1),null);
var new_out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259,(2),null);
var G__44492 = cljs.core.next(cur_zloc__$2);
var G__44493 = (cur_index__$2 + (1));
var G__44494 = guide_seq__$3;
var G__44495 = element_index__$2;
var G__44496 = (index__$2 + (1));
var G__44497 = new_param_map;
var G__44498 = mark_map__$2;
var G__44499 = new_previous_data;
var G__44500 = options__$3;
var G__44501 = new_out;
cur_zloc__$1 = G__44492;
cur_index__$1 = G__44493;
guide_seq__$1 = G__44494;
element_index__$1 = G__44495;
index__$1 = G__44496;
param_map__$1 = G__44497;
mark_map__$1 = G__44498;
G__43181__$1 = G__44499;
options__$2 = G__44500;
out__$1 = G__44501;
continue;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element","element",1974019749))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-guide","element-guide",384986063))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-best","element-best",1084358317))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-best-*","element-best-*",-572827078))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-*","element-*",-948937262))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-binding-vec","element-binding-vec",936510284))))))))))))){
var ___$2 = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic(["fzprint-guide: === ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0))], 0)):null);
var ___$3 = ((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-*","element-*",-948937262))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-best-*","element-best-*",-572827078))))) && ((!(cljs.core.empty_QMARK_(cljs.core.next(guide_seq__$3)))))))?(function(){throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq)," is not the last command in guide!"].join('')))})():null);
var vec__43262 = zprint.zprint.guided_output(caller,options__$3,cljs.core.first(cur_zloc__$2),cljs.core.empty_QMARK_(cljs.core.next(cur_zloc__$2)),first_guide_seq,cur_index__$2,guide_seq__$3,element_index__$2,index__$2,param_map__$2,mark_map__$2,previous_data__$1,out__$2);
var new_param_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43262,(0),null);
var new_previous_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43262,(1),null);
var new_out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43262,(2),null);
var G__44505 = cljs.core.next(cur_zloc__$2);
var G__44506 = (cur_index__$2 + (1));
var G__44507 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-guide","element-guide",384986063)))?cljs.core.nnext(guide_seq__$3):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-*","element-*",-948937262))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-best-*","element-best-*",-572827078)))))?guide_seq__$3:cljs.core.next(guide_seq__$3)
));
var G__44508 = (element_index__$2 + (1));
var G__44509 = (index__$2 + (1));
var G__44510 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new_param_map,new cljs.core.Keyword(null,"spaces","spaces",365984563),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"align-key","align-key",2084823123)], 0));
var G__44511 = mark_map__$2;
var G__44512 = new_previous_data;
var G__44513 = options__$3;
var G__44514 = new_out;
cur_zloc__$1 = G__44505;
cur_index__$1 = G__44506;
guide_seq__$1 = G__44507;
element_index__$1 = G__44508;
index__$1 = G__44509;
param_map__$1 = G__44510;
mark_map__$1 = G__44511;
G__43181__$1 = G__44512;
options__$2 = G__44513;
out__$1 = G__44514;
continue;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-pair-group","element-pair-group",2021364237))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_guide_seq,new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043))))))){
var ___$2 = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic(["fzprint-guide: === ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bright-red","bright-red",-1249892480)], 0))], 0)):null);
var vec__43265 = zprint.zprint.guided_output(caller,options__$3,null,cljs.core.empty_QMARK_(cur_zloc__$2),first_guide_seq,cur_index__$2,guide_seq__$3,element_index__$2,index__$2,param_map__$2,mark_map__$2,previous_data__$1,out__$2);
var new_param_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43265,(0),null);
var new_previous_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43265,(1),null);
var new_out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43265,(2),null);
var G__44516 = cur_zloc__$2;
var G__44517 = cur_index__$2;
var G__44518 = cljs.core.next(guide_seq__$3);
var G__44519 = element_index__$2;
var G__44520 = (index__$2 + (1));
var G__44521 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new_param_map,new cljs.core.Keyword(null,"spaces","spaces",365984563),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"align-key","align-key",2084823123),new cljs.core.Keyword(null,"group-seq","group-seq",-690875027)], 0));
var G__44522 = mark_map__$2;
var G__44523 = new_previous_data;
var G__44524 = options__$3;
var G__44525 = new_out;
cur_zloc__$1 = G__44516;
cur_index__$1 = G__44517;
guide_seq__$1 = G__44518;
element_index__$1 = G__44519;
index__$1 = G__44520;
param_map__$1 = G__44521;
mark_map__$1 = G__44522;
G__43181__$1 = G__44523;
options__$2 = G__44524;
out__$1 = G__44525;
continue;
} else {
throw (new Error(["Unknown values: guide-seq: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_guide_seq),"' ","\ncur-zloc:",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__43269 = cljs.core.first(cur_zloc__$2);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__43269) : zprint.zfns.zstring.call(null,G__43269));
})())].join('')));

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
break;
}
}
});
/**
 * Remove any [_ _ :newline] from the seq.
 */
zprint.zprint.remove_nl = (function zprint$zprint$remove_nl(coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43270_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__43270_SHARP_),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323));
}),coll);
});
/**
 * If there are any comments at the top level of the zloc-seq, return true,
 *   else nil.
 */
zprint.zprint.comment_in_zloc_seq_QMARK_ = (function zprint$zprint$comment_in_zloc_seq_QMARK_(zloc_seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43272_SHARP_,p2__43271_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(p2__43271_SHARP_) : zprint.zfns.ztag.call(null,p2__43271_SHARP_)),new cljs.core.Keyword(null,"comment","comment",532206069))){
return cljs.core.reduced(true);
} else {
return null;
}
}),false,zloc_seq);
});
/**
 * Print basic stuff like a vector or a set or an array.  Several options 
 *   for how to print them.
 */
zprint.zprint.fzprint_vec_STAR_ = (function zprint$zprint$fzprint_vec_STAR_(caller,l_str,r_str,p__43273,ind,zloc){
var map__43274 = p__43273;
var map__43274__$1 = cljs.core.__destructure_map(map__43274);
var options = map__43274__$1;
var map__43275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43274__$1,caller);
var map__43275__$1 = cljs.core.__destructure_map(map__43275);
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43275__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43275__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var wrap_coll_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43275__$1,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43275__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var force_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43275__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var option_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43275__$1,new cljs.core.Keyword(null,"option-fn","option-fn",-959705456));
var wrap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43275__$1,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054));
var binding_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43275__$1,new cljs.core.Keyword(null,"binding?","binding?",-1071925644));
var option_fn_first = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43275__$1,new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201));
var fn_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43275__$1,new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43274__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43274__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint-vec* ind:",ind,"indent:",indent,"caller:",caller,"ztag:",(zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc))], 0));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = binding_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options),(1));
} else {
return and__5043__auto__;
}
})())){
return zprint.zprint.fzprint_binding_vec(options,ind,zloc);
} else {
var vec__43276 = zprint.zprint.get_respect_indent(options,caller,new cljs.core.Keyword(null,"vector","vector",1902966158));
var respect_nl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43276,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43276,(1),null);
var indent_only_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43276,(2),null);
var l_str_len = cljs.core.count(l_str);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,(ind + (function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (l_str_len - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()),zloc,r_str);
var len = (zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc));
var options__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caller,new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"quote","quote",-262615245),(zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"quote?","quote?",-1114029317),true):options);
var vec__43279 = (cljs.core.truth_(option_fn_first)?zprint.zprint.call_option_fn_first(caller,options__$1,option_fn_first,zloc):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$1,null], null));
var options__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279,(0),null);
var new_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279,(1),null);
var _ = (cljs.core.truth_(option_fn_first)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$2))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$2),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec* option-fn-first new options",new_options], 0))], 0)):null):null);
var vec__43282 = (cljs.core.truth_(option_fn)?zprint.zprint.call_option_fn(caller,options__$2,option_fn,zloc):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$2,null], null));
var options__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43282,(0),null);
var new_options__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43282,(1),null);
var ___$1 = (cljs.core.truth_(option_fn)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec* option-fn new options",new_options__$1], 0))], 0)):null):null);
var map__43285 = options__$3;
var map__43285__$1 = cljs.core.__destructure_map(map__43285);
var options__$4 = map__43285__$1;
var map__43286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,caller);
var map__43286__$1 = cljs.core.__destructure_map(map__43286);
var indent_only_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43286__$1,new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842));
var sort_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43286__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var sort_in_code_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43286__$1,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497));
var wrap_coll_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43286__$1,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571));
var indent__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43286__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var respect_nl_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43286__$1,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635));
var respect_bl_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43286__$1,new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998));
var wrap_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43286__$1,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054));
var binding_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43286__$1,new cljs.core.Keyword(null,"binding?","binding?",-1071925644));
var fn_format__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43286__$1,new cljs.core.Keyword(null,"fn-format","fn-format",-1408187784));
var guide = ((cljs.core.not(indent_only_QMARK___$1))?(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"guide","guide",-935563924).cljs$core$IFn$_invoke$arity$1(options__$4);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return zprint.zprint.guide_debug(caller,options__$4);
}
})():null);
var options__$5 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$4,new cljs.core.Keyword(null,"guide","guide",-935563924));
var ___$2 = (cljs.core.truth_(guide)?(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec* guide:",guide], 0))], 0)):null):null);
var zloc_seq = (cljs.core.truth_((function (){var or__5045__auto__ = respect_nl_QMARK___$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return indent_only_QMARK___$1;
}
})())?(zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc)):(cljs.core.truth_(respect_bl_QMARK___$1)?(zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc)):(zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc))
));
if(cljs.core.truth_(guide)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.fzprint_guide(new cljs.core.Keyword(null,"vector","vector",1902966158),options__$5,ind,(l_str_len + ind),indent__$1,guide,zloc_seq),r_str_vec], 0));
} else {
if(cljs.core.truth_(fn_format__$1)){
return zprint.zprint.fzprint_list_STAR_(new cljs.core.Keyword(null,"vector-fn","vector-fn",1515528250),l_str,r_str,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$5,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),fn_format__$1),ind,zloc);
} else {
var indent__$2 = (function (){var or__5045__auto__ = indent__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.count(l_str);
}
})();
var new_ind = (cljs.core.truth_(indent_only_QMARK___$1)?ind:(indent__$2 + ind));
var ___$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec*:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"new-ind:",new_ind], 0))], 0)):null);
var zloc_seq__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = sort_QMARK___$1;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = (cljs.core.truth_(in_code_QMARK_)?sort_in_code_QMARK___$1:true);
if(cljs.core.truth_(and__5043__auto____$1)){
return ((cljs.core.not(zprint.zprint.comment_in_zloc_seq_QMARK_(zloc_seq))) && (((cljs.core.not(respect_nl_QMARK___$1)) && (((cljs.core.not(respect_bl_QMARK___$1)) && (cljs.core.not(indent_only_QMARK___$1)))))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?zprint.zprint.order_out(caller,options__$5,cljs.core.identity,zloc_seq):zloc_seq);
var coll_print = (((len === (0)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(17)], null)], null)], null):zprint.zprint.fzprint_seq(options__$5,new_ind,zloc_seq__$1));
var ___$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec*: coll-print:",coll_print], 0))], 0)):null);
var coll_print__$1 = ((cljs.core.not(zprint.zprint.contains_nil_QMARK_(coll_print)))?coll_print:null);
var one_line = (cljs.core.truth_(coll_print__$1)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(18)], null)], null),(cljs.core.truth_((function (){var or__5045__auto__ = respect_nl_QMARK___$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return indent_only_QMARK___$1;
}
}
})())?coll_print__$1:zprint.zprint.remove_nl(coll_print__$1)))):null);
var ___$5 = zprint.zprint.log_lines(options__$5,"fzprint-vec*:",new_ind,one_line);
var ___$6 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec*: new-ind:",new_ind,"force-nl?",force_nl_QMARK_,"one-line:",one_line], 0))], 0)):null);
var one_line_lines = zprint.zprint.style_lines(options__$5,new_ind,one_line);
if((len === (0))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
if(cljs.core.truth_(one_line_lines)){
if(((cljs.core.not(force_nl_QMARK_)) && (zprint.zprint.fzfit_one_line(options__$5,one_line_lines)))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,one_line,r_str_vec], 0));
} else {
if(cljs.core.truth_(indent_only_QMARK___$1)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.indent_zmap.cljs$core$IFn$_invoke$arity$6(caller,options__$5,ind,(ind + l_str_len),coll_print__$1,indent__$2),r_str_vec], 0));
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = (function (){var and__5043__auto__ = cljs.core.not(wrap_coll_QMARK___$1);
if(and__5043__auto__){
return zprint.zprint.any_zcoll_QMARK_(options__$5,new_ind,zloc);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.not(wrap_QMARK___$1);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return force_nl_QMARK_;
}
}
})())){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,(zprint.zprint.precede_w_nl.cljs$core$IFn$_invoke$arity$4 ? zprint.zprint.precede_w_nl.cljs$core$IFn$_invoke$arity$4(options__$5,new_ind,coll_print__$1,new cljs.core.Keyword(null,"no-nl-first","no-nl-first",-1507054608)) : zprint.zprint.precede_w_nl.call(null,options__$5,new_ind,coll_print__$1,new cljs.core.Keyword(null,"no-nl-first","no-nl-first",-1507054608)))),r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$5))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$5),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-vec*: wrap coll-print:",coll_print__$1], 0))], 0));
} else {
}

return zprint.zprint.wrap_zmap(caller,options__$5,new_ind,new_ind,coll_print__$1);
})()
,r_str_vec], 0));
}
}
}
} else {
return null;
}
}

}
}
}
});
zprint.zprint.fzprint_vec = (function zprint$zprint$fzprint_vec(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(new cljs.core.Keyword(null,"vector","vector",1902966158),"[","]",zprint.zprint.rightmost(options),ind,zloc);
});
zprint.zprint.fzprint_array = (function zprint$zprint$fzprint_array(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(new cljs.core.Keyword(null,"array","array",-2080713842),"[","]",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Pretty print and focus style a :set element.
 */
zprint.zprint.fzprint_set = (function zprint$zprint$fzprint_set(options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(new cljs.core.Keyword(null,"set","set",304602554),"#{","}",zprint.zprint.rightmost(options),ind,zloc);
});
/**
 * Do the same as interpose, but different seps depending on pred?.
 *   If sep-nil is nil, then when pred? is false we don't interpose
 *   anything!
 */
zprint.zprint.interpose_either = (function zprint$zprint$interpose_either(sep_true,sep_nil,pred_QMARK_,coll){
var coll__$1 = coll;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var interpose_QMARK_ = null;
while(true){
if(cljs.core.empty_QMARK_(coll__$1)){
return cljs.core.persistent_BANG_(out);
} else {
var G__44543 = cljs.core.next(coll__$1);
var G__44544 = (cljs.core.truth_(interpose_QMARK_)?zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sep_true,cljs.core.first(coll__$1)], 0)):(((((cljs.core.count(out) === (0))) || ((sep_nil == null))))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(coll__$1)):zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sep_nil,cljs.core.first(coll__$1)], 0))));
var G__44545 = (function (){var G__43288 = cljs.core.first(coll__$1);
return (pred_QMARK_.cljs$core$IFn$_invoke$arity$1 ? pred_QMARK_.cljs$core$IFn$_invoke$arity$1(G__43288) : pred_QMARK_.call(null,G__43288));
})();
coll__$1 = G__44543;
out = G__44544;
interpose_QMARK_ = G__44545;
continue;
}
break;
}
});
/**
 * Move through a sequence of style vecs and ensure that at least
 *   one newline (actually an indent) appears before each element.  If
 *   a newline in the style-vecs is where we wanted one, well and good.
 *   Comments are now not recognized as different, increasing our
 *   appreciation of diversity.  If not-first? is truthy, then don't
 *   put a newline before the first element.
 */
zprint.zprint.precede_w_nl = (function zprint$zprint$precede_w_nl(options,ind,coll,not_first_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["precede-w-nl: (count coll)",cljs.core.count(coll),"not-first?",not_first_QMARK_], 0))], 0));
} else {
}

var coll__$1 = coll;
var ind_seq = ((cljs.core.coll_QMARK_(ind))?ind:(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[ind],null)));
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var added_nl_QMARK_ = not_first_QMARK_;
while(true){
if(cljs.core.empty_QMARK_(coll__$1)){
var result = cljs.core.persistent_BANG_(out);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["precede-w-nl: exit:",result], 0))], 0)):null);
var previous_element_index = (cljs.core.count(result) - (2));
var previous_type = (((!((previous_element_index < (0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,previous_element_index)),(2)):null);
return result;
} else {
var vec__43301 = cljs.core.first(coll__$1);
var vec__43304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43301,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43304,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43304,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43304,(2),null);
var element = vec__43301;
var indent = cljs.core.first(ind_seq);
var newline_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"newline","newline",1790071323));
var last_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.last(element),(2));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["precede-w-nl: element:",element,"added-nl?:",added_nl_QMARK_], 0))], 0));
} else {
}

var G__44546 = cljs.core.next(coll__$1);
var G__44547 = (function (){var temp__5802__auto__ = cljs.core.next(ind_seq);
if(temp__5802__auto__){
var next_ind = temp__5802__auto__;
return next_ind;
} else {
return ind_seq;
}
})();
var G__44548 = ((newline_QMARK_)?(function (){var next_coll = cljs.core.next(coll__$1);
if(cljs.core.empty_QMARK_(next_coll)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,element);
} else {
var vec__43307 = cljs.core.first(next_coll);
var vec__43310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43307,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43310,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43310,(1),null);
var next_what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43310,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_what,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",color,what], null)], null));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,element);
}
}
})():(cljs.core.truth_(added_nl_QMARK_)?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,element):zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(indent))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(28)], null)], null),element], 0))));
var G__44549 = newline_QMARK_;
coll__$1 = G__44546;
ind_seq = G__44547;
out = G__44548;
added_nl_QMARK_ = G__44549;
continue;
}
break;
}
});
/**
 * Analyze a style-vec which contains only newlines, and return the count 
 *   of newlines in the style vec.  We assume that each :newline style-vec 
 *   contains one newline (i.e., it was generated by fzprint-newlines).
 */
zprint.zprint.count_newline_types = (function zprint$zprint$count_newline_types(newline_style_vec){
var count_of_types = cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43313_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__43313_SHARP_,(2));
}),newline_style_vec)));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count_of_types,(1))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(newline_style_vec),(2)),new cljs.core.Keyword(null,"newline","newline",1790071323))))){
throw (new Error(["Internal Error!  Please submit an issue with an example"," of how to reproduce this error!"," count-newline-types: more than one type or wrong type! count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(count_of_types)," style-vec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(newline_style_vec)].join('')));
} else {
}

return cljs.core.count(newline_style_vec);
});
/**
 * Count the number of blanks at the right end of a string.
 */
zprint.zprint.count_right_blanks = (function zprint$zprint$count_right_blanks(s){
var i = cljs.core.count(s);
while(true){
if((i < (0))){
return cljs.core.count(s);
} else {
if(clojure.string.ends_with_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i)," ")){
var G__44550 = (i - (1));
i = G__44550;
continue;
} else {
return (cljs.core.count(s) - i);
}
}
break;
}
});
/**
 * Trim only blanks off the right end of a string.
 */
zprint.zprint.trimr_blanks = (function zprint$zprint$trimr_blanks(s){
var i = cljs.core.count(s);
while(true){
if((i < (0))){
return "";
} else {
if(clojure.string.ends_with_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i)," ")){
var G__44551 = (i - (1));
i = G__44551;
continue;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i);
}
}
break;
}
});
/**
 * Given a count n, and style vec that ends with a newline and an associated
 *   indent of some number of spaces, return a sequence of n of those style vecs
 *   but remove spaces from all but the last of them.
 */
zprint.zprint.repeat_style_vec_nl = (function zprint$zprint$repeat_style_vec_nl(n,style_vec){
var no_space_n = (function (){var x__5130__auto__ = (n - (1));
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
if((no_space_n === (0))){
return style_vec;
} else {
var vec__43314 = cljs.core.last(style_vec);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43314,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43314,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43314,(2),null);
var no_space_element = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks(s),color,what], null);
var no_space_style_vec = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(style_vec),no_space_element));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(no_space_n,no_space_style_vec),style_vec));
}
});
/**
 * Given an element, trim the blanks out of the string.
 */
zprint.zprint.trimr_blanks_element = (function zprint$zprint$trimr_blanks_element(p__43317){
var vec__43318 = p__43317;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks(s),color,what], null);
});
/**
 * Given a style-vec, trim the blanks out of each element.
 */
zprint.zprint.trimr_blanks_style_vec = (function zprint$zprint$trimr_blanks_style_vec(style_vec){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zprint.zprint.trimr_blanks_element,style_vec);
});
/**
 * Given a count n, and single element from a style-vec which
 *   contains a newline and an indent of some number of spaces, return
 *   a sequence of n of those style vecs but remove spaces from all
 *   but the last of them.  This is so that we don't have trailing spaces
 *   on lines.
 */
zprint.zprint.repeat_element_nl = (function zprint$zprint$repeat_element_nl(n,element){
var no_space_n = (function (){var x__5130__auto__ = (n - (1));
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
if((no_space_n === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null);
} else {
var vec__43321 = element;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43321,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43321,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43321,(2),null);
var no_space_element = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zprint.zprint.trimr_blanks(s),color,what], null);
var result = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(no_space_n,no_space_element),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null)));
return result;
}
});
/**
 * Given a coll of [hangflow style-vec] pairs, return the 
 *   [hangflow style-vec] pair where the style-vec is not a 
 *   :comment, :comment-inline, :newline or :indent.
 */
zprint.zprint.next_non_comment_nl = (function zprint$zprint$next_non_comment_nl(coll){
var coll__$1 = coll;
while(true){
if(cljs.core.empty_QMARK_(coll__$1)){
return null;
} else {
var vec__43324 = cljs.core.first(coll__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43324,(0),null);
var style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43324,(1),null);
var vec__43327 = cljs.core.first(style_vec);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43327,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43327,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43327,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"comment","comment",532206069))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"indent","indent",-148200125))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"newline","newline",1790071323))))))))){
var G__44552 = cljs.core.next(coll__$1);
coll__$1 = G__44552;
continue;
} else {
return cljs.core.first(coll__$1);
}
}
break;
}
});
/**
 * Do very specialized interpose, but different seps depending on pred-fn
 *   return and nl-separator? and nl-separator-all?. This assumes that 
 *   sep-* does one line, and sep-*-nl does two lines. coll is
 *   a series of [[:flow [['
 *   ' :none :newline 2]]] 
 *             [:flow [['ZprintType' :black :element] ...]]] fragments from
 *   fzprint-map-two-up.
 */
zprint.zprint.interpose_either_nl_hf = (function zprint$zprint$interpose_either_nl_hf(sep_comma,sep_comma_nl,sep,sep_nl,p__43330,comma_QMARK_,coll){
var map__43331 = p__43330;
var map__43331__$1 = cljs.core.__destructure_map(map__43331);
var suboptions = map__43331__$1;
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43331__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var nl_separator_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43331__$1,new cljs.core.Keyword(null,"nl-separator-all?","nl-separator-all?",-1332523641));
var coll__$1 = coll;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var previous_needs_comma_QMARK_ = null;
var add_nl_QMARK_ = null;
var first_QMARK_ = true;
var newline_count = (0);
while(true){
if(cljs.core.empty_QMARK_(coll__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,cljs.core.persistent_BANG_((((newline_count === (0)))?out:zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.repeat_element_nl(newline_count,cljs.core.first(sep))], 0)))));
} else {
var vec__43341 = cljs.core.first(coll__$1);
var hangflow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43341,(0),null);
var style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43341,(1),null);
var vec__43344 = cljs.core.first(style_vec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43344,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43344,(1),null);
var what = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43344,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"newline","newline",1790071323))){
var G__44553 = cljs.core.next(coll__$1);
var G__44554 = out;
var G__44555 = previous_needs_comma_QMARK_;
var G__44556 = add_nl_QMARK_;
var G__44557 = first_QMARK_;
var G__44558 = (newline_count + zprint.zprint.count_newline_types(style_vec));
coll__$1 = G__44553;
out = G__44554;
previous_needs_comma_QMARK_ = G__44555;
add_nl_QMARK_ = G__44556;
first_QMARK_ = G__44557;
newline_count = G__44558;
continue;
} else {
var vec__43347 = (cljs.core.truth_(previous_needs_comma_QMARK_)?(cljs.core.truth_(add_nl_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_comma_nl,(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_comma,(1)], null)):(cljs.core.truth_(add_nl_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_nl,(2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep,(1)], null)));
var interpose_style_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43347,(0),null);
var interpose_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43347,(1),null);
var interpose_count__$1 = (cljs.core.truth_(first_QMARK_)?(1):interpose_count);
var addtl_nl_needed = (function (){var x__5130__auto__ = (newline_count - interpose_count__$1);
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var G__44559 = cljs.core.next(coll__$1);
var G__44560 = (cljs.core.truth_(first_QMARK_)?(((addtl_nl_needed === (0)))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,style_vec):zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.repeat_element_nl(addtl_nl_needed,cljs.core.first(sep)),style_vec], 0))):(((addtl_nl_needed === (0)))?zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([interpose_style_vec,style_vec], 0)):zprint.zprint.conj_it_BANG_.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.zprint.trimr_blanks_style_vec(interpose_style_vec),zprint.zprint.repeat_element_nl(addtl_nl_needed,cljs.core.first(sep)),style_vec], 0))));
var G__44561 = (function (){var and__5043__auto__ = comma_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"comment","comment",532206069));
if(and__5043__auto____$1){
var and__5043__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(what,new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405));
if(and__5043__auto____$2){
return zprint.zprint.next_non_comment_nl(cljs.core.next(coll__$1));
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
var G__44562 = (function (){var or__5045__auto__ = (function (){var and__5043__auto__ = nl_separator_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hangflow,new cljs.core.Keyword(null,"flow","flow",590489032));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nl_separator_all_QMARK_;
}
})();
var G__44563 = null;
var G__44564 = (0);
coll__$1 = G__44559;
out = G__44560;
previous_needs_comma_QMARK_ = G__44561;
add_nl_QMARK_ = G__44562;
first_QMARK_ = G__44563;
newline_count = G__44564;
continue;

}
}
break;
}
});
/**
 * Put a single or double line between pairs returned from
 *   fzprint-map-two-up.  The second argument is the map resulting
 *   from (:map options) or (:pair options) or whatever.  It should
 *   have :nl-separator? and :nl-separator-all? in it.
 */
zprint.zprint.interpose_nl_hf = (function zprint$zprint$interpose_nl_hf(suboptions,ind,coll){
return zprint.zprint.interpose_either_nl_hf(null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(29)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(30)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(31)], null)], null),suboptions,null,coll);
});
zprint.zprint.fzprint_map_STAR_ = (function zprint$zprint$fzprint_map_STAR_(caller,l_str,r_str,p__43353,ind,zloc,ns){
var map__43354 = p__43353;
var map__43354__$1 = cljs.core.__destructure_map(map__43354);
var options = map__43354__$1;
var map__43355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43354__$1,caller);
var map__43355__$1 = cljs.core.__destructure_map(map__43355);
var map_options = map__43355__$1;
var comma_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"comma?","comma?",1532168963));
var key_ignore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668));
var key_ignore_silent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060));
var nl_separator_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767));
var force_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43354__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var ztype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43354__$1,new cljs.core.Keyword(null,"ztype","ztype",-562179020));
var map_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43354__$1,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641));
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43354__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var vec__43356 = zprint.zprint.get_respect_indent(options,caller,new cljs.core.Keyword(null,"map","map",1371690461));
var respect_nl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43356,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43356,(1),null);
var indent_only_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43356,(2),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map* caller:",caller], 0))], 0));
} else {
}

if(cljs.core.truth_(indent_only_QMARK_)){
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(map_depth + (1)));
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options__$1,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options__$1,ind,zloc,r_str);
if(((zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc)) === (0))){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8(caller,l_str,r_str,options__$1,ind,zloc,null,null),r_str_vec], 0));
}
} else {
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(map_depth + (1)));
var zloc__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztype,new cljs.core.Keyword(null,"sexpr","sexpr",-783344087));
if(and__5043__auto__){
var or__5045__auto__ = key_ignore;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return key_ignore_silent;
}
} else {
return and__5043__auto__;
}
})())?zprint.zprint.map_ignore(caller,options__$1,zloc):zloc);
var vec__43359 = zprint.zprint.partition_all_2_nc(caller,zprint.zprint.no_max_length(options__$1),(cljs.core.truth_(respect_nl_QMARK_)?(zprint.zfns.zseqnws_w_nl.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zseqnws_w_nl.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zseqnws_w_nl.call(null,zloc__$1)):(cljs.core.truth_(respect_bl_QMARK_)?(zprint.zfns.zseqnws_w_bl.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zseqnws_w_bl.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zseqnws_w_bl.call(null,zloc__$1)):(zprint.zfns.zseqnws.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zseqnws.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zseqnws.call(null,zloc__$1))
)));
var no_sort_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43359,(0),null);
var pair_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43359,(1),null);
var no_sort_QMARK___$1 = (function (){var or__5045__auto__ = no_sort_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = respect_nl_QMARK_;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return respect_bl_QMARK_;
}
}
})();
var vec__43362 = (function (){var G__43365 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(map_options,new cljs.core.Keyword(null,"in-code?","in-code?",194866464),in_code_QMARK_);
var G__43366 = pair_seq;
var G__43367 = ns;
return (zprint.zfns.zlift_ns.cljs$core$IFn$_invoke$arity$3 ? zprint.zfns.zlift_ns.cljs$core$IFn$_invoke$arity$3(G__43365,G__43366,G__43367) : zprint.zfns.zlift_ns.call(null,G__43365,G__43366,G__43367));
})();
var ns__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43362,(0),null);
var lift_pair_seq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43362,(1),null);
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map* zlift-ns ns:",ns__$1,"no-sort?",no_sort_QMARK___$1], 0))], 0)):null);
var l_str__$1 = (cljs.core.truth_(ns__$1)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str)].join(''):l_str);
var pair_seq__$1 = (function (){var or__5045__auto__ = lift_pair_seq;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return pair_seq;
}
})();
var pair_seq__$2 = (cljs.core.truth_(no_sort_QMARK___$1)?pair_seq__$1:zprint.zprint.order_out(caller,options__$1,cljs.core.first,pair_seq__$1));
var max_length = zprint.zprint.get_max_length(options__$1);
var pair_count = cljs.core.count(pair_seq__$2);
var pair_seq__$3 = (((pair_count > max_length))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_length,pair_seq__$2),(new cljs.core.List(null,(new cljs.core.List(null,(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)),null,(1),null)),null,(1),null))):pair_seq__$2);
var indent__$1 = cljs.core.count(l_str__$1);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str__$1,zprint.zprint.zcolor_map(options__$1,l_str__$1),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options__$1,ind,zloc__$1,r_str);
if(cljs.core.empty_QMARK_(pair_seq__$3)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,r_str_vec], 0));
} else {
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map*:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc__$1) : zprint.zfns.zstring.call(null,zloc__$1)),"ind:",ind,"comma?",comma_QMARK_,"rightcnt:",new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070).cljs$core$IFn$_invoke$arity$1(options__$1)], 0))], 0)):null);
var pair_print_one_line = zprint.zprint.fzprint_map_two_up(caller,(cljs.core.truth_(one_line_QMARK_)?options__$1:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111),true)),(indent__$1 + ind),comma_QMARK_,pair_seq__$3);
var pair_print_one_line__$1 = zprint.zprint.remove_hangflow(pair_print_one_line);
var pair_print_one_line__$2 = ((zprint.zprint.fzfit_one_line(options__$1,zprint.zprint.style_lines(options__$1,(indent__$1 + ind),pair_print_one_line__$1)))?pair_print_one_line__$1:null);
var one_line = (cljs.core.truth_(pair_print_one_line__$2)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(zprint.zprint.concat_no_nil,zprint.zprint.interpose_either(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map(options__$1,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(19)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(23)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(20)], null)], null),cljs.core.constantly(comma_QMARK_),pair_print_one_line__$2)):null);
var one_line_lines = zprint.zprint.style_lines(options__$1,(indent__$1 + ind),one_line);
var one_line__$1 = ((zprint.zprint.fzfit_one_line(options__$1,one_line_lines))?one_line:null);
if(cljs.core.truth_(one_line__$1)){
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,one_line__$1,r_str_vec], 0));
} else {
if(cljs.core.not(one_line_QMARK_)){
var pair_print = zprint.zprint.fzprint_map_two_up(caller,options__$1,(indent__$1 + ind),comma_QMARK_,pair_seq__$3);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,zprint.zprint.interpose_either_nl_hf(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map(options__$1,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(21)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks((ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(32)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map(options__$1,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(22)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(33)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks((ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(34)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks((ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(35)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(36)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks((ind + (1))))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"indent","indent",-148200125),(37)], null)], null),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(options__$1),comma_QMARK_,pair_print),r_str_vec], 0));
} else {
return null;
}
}
}
}
});
/**
 * Format a real map.
 */
zprint.zprint.fzprint_map = (function zprint$zprint$fzprint_map(options,ind,zloc){
var vec__43368 = (cljs.core.truth_((zprint.zfns.znamespacedmap_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znamespacedmap_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znamespacedmap_QMARK_.call(null,zloc)))?(function (){var zloc_seq = (zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map: zloc-seq",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.zfns.zstring,zloc_seq)], 0))], 0));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43371 = cljs.core.first(zloc_seq);
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__43371) : zprint.zfns.zstring.call(null,G__43371));
})(),cljs.core.second(zloc_seq)], null);
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43368,(0),null);
var lifted_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43368,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-map: ns:",ns,"indent:",new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(options)),"map-options:",cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"key-value-options","key-value-options",694765603))], 0))], 0));
} else {
}

if(cljs.core.truth_(ns)){
return zprint.zprint.fzprint_map_STAR_(new cljs.core.Keyword(null,"map","map",1371690461),"{","}",zprint.zprint.rightmost(options),ind,lifted_map,ns);
} else {
return zprint.zprint.fzprint_map_STAR_(new cljs.core.Keyword(null,"map","map",1371690461),"{","}",zprint.zprint.rightmost(options),ind,zloc,null);
}
});
/**
 * Return true if the string starts with #object[
 */
zprint.zprint.object_str_QMARK_ = (function zprint$zprint$object_str_QMARK_(s){
return cljs.core.re_find(/^#object\[/,s);
});
/**
 * Print something that looks like #object[...] in a way
 *   that will acknowledge the structure inside of the [...]
 */
zprint.zprint.fzprint_object = (function zprint$zprint$fzprint_object(var_args){
var G__43373 = arguments.length;
switch (G__43373) {
case 4:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4 = (function (options,ind,zloc,zloc_value){
return zprint.zprint.fzprint_vec_STAR_(new cljs.core.Keyword(null,"object","object",1474613949),"#object[","]",options,ind,(zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$2(zloc,zloc_value) : zprint.zfns.zobj_to_vec.call(null,zloc,zloc_value)));
}));

(zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3 = (function (options,ind,zloc){
return zprint.zprint.fzprint_vec_STAR_(new cljs.core.Keyword(null,"object","object",1474613949),"#object[","]",options,ind,(zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zobj_to_vec.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zobj_to_vec.call(null,zloc)));
}));

(zprint.zprint.fzprint_object.cljs$lang$maxFixedArity = 4);

/**
 * Find the hash-code identity for an object.
 */
zprint.zprint.hash_identity_str = (function zprint$zprint$hash_identity_str(obj){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(obj));
});
zprint.zprint.fzprint_atom = (function zprint$zprint$fzprint_atom(p__43374,ind,zloc){
var map__43375 = p__43374;
var map__43375__$1 = cljs.core.__destructure_map(map__43375);
var options = map__43375__$1;
var map__43376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43375__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var map__43376__$1 = cljs.core.__destructure_map(map__43376);
var object_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43376__$1,new cljs.core.Keyword(null,"object?","object?",-1313059217));
if(cljs.core.truth_((function (){var and__5043__auto__ = object_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return zprint.zprint.object_str_QMARK_((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)));
} else {
return and__5043__auto__;
}
})())){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc)));
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var arg_1 = ["Atom@",zprint.zprint.hash_identity_str(zloc)].join('');
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-atom: arg-1:",arg_1,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one(new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost(options),arg_1_indent,(indent + ind),(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc))),r_str_vec], 0));
}
});
/**
 * Print out a future or a promise or a delay.  These can only be 
 *   sexpressions, since they don't exist in a textual representation 
 *   of code (or data for that matter).  That means that we can use 
 *   regular sexpression operations on zloc.
 */
zprint.zprint.fzprint_future_promise_delay_agent = (function zprint$zprint$fzprint_future_promise_delay_agent(options,ind,zloc){
var zloc_type = (cljs.core.truth_((zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfuture_QMARK_.call(null,zloc)))?new cljs.core.Keyword(null,"future","future",1877842724):(cljs.core.truth_((zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zpromise_QMARK_.call(null,zloc)))?new cljs.core.Keyword(null,"promise","promise",1767129287):(cljs.core.truth_((zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zdelay_QMARK_.call(null,zloc)))?new cljs.core.Keyword(null,"delay","delay",-574225219):(cljs.core.truth_((zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zagent_QMARK_.call(null,zloc)))?new cljs.core.Keyword(null,"agent","agent",-766455027):(function(){throw (new Error("Not a future, promise, or delay:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))))})()
))));
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"object?","object?",-1313059217).cljs$core$IFn$_invoke$arity$1((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(zloc_type) : options.call(null,zloc_type)));
if(cljs.core.truth_(and__5043__auto__)){
return zprint.zprint.object_str_QMARK_((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)));
} else {
return and__5043__auto__;
}
})())){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc_type,new cljs.core.Keyword(null,"agent","agent",-766455027))) || (cljs.core.realized_QMARK_(zloc)))){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc)));
} else {
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3(options,ind,zloc);
}
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var type_str = (function (){var G__43377 = zloc_type;
var G__43377__$1 = (((G__43377 instanceof cljs.core.Keyword))?G__43377.fqn:null);
switch (G__43377__$1) {
case "future":
return "Future@";

break;
case "promise":
return "Promise@";

break;
case "delay":
return "Delay@";

break;
case "agent":
return "Agent@";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43377__$1)].join('')));

}
})();
var arg_1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_str),zprint.zprint.hash_identity_str(zloc)].join('');
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
var zloc_realized_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc_type,new cljs.core.Keyword(null,"agent","agent",-766455027)))?true:cljs.core.realized_QMARK_(zloc));
var value = ((zloc_realized_QMARK_)?(zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zderef.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zderef.call(null,zloc)):(function (){var G__43378 = zloc_type;
var G__43378__$1 = (((G__43378 instanceof cljs.core.Keyword))?G__43378.fqn:null);
switch (G__43378__$1) {
case "future":
return "pending";

break;
case "promise":
return "not-delivered";

break;
case "delay":
return "pending";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43378__$1)].join('')));

}
})());
var options__$1 = ((zloc_realized_QMARK_)?options:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352),true));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-fpda: arg-1:",arg_1,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map(options__$1,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one(new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost(options__$1),arg_1_indent,(indent + ind),value),r_str_vec], 0));
}
});
/**
 * Print a function object, what you get when you put a function in
 *   a collection, for instance.  This doesn't do macros, you will notice.
 *   It also can't be invoked when zloc is a zipper.
 */
zprint.zprint.fzprint_fn_obj = (function zprint$zprint$fzprint_fn_obj(p__43379,ind,zloc){
var map__43380 = p__43379;
var map__43380__$1 = cljs.core.__destructure_map(map__43380);
var options = map__43380__$1;
var map__43381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43380__$1,new cljs.core.Keyword(null,"fn-obj","fn-obj",465065936));
var map__43381__$1 = cljs.core.__destructure_map(map__43381);
var object_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43381__$1,new cljs.core.Keyword(null,"object?","object?",-1313059217));
if(cljs.core.truth_((function (){var and__5043__auto__ = object_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return zprint.zprint.object_str_QMARK_((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)));
} else {
return and__5043__auto__;
}
})())){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3(options,ind,zloc);
} else {
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$5(options,ind,zloc,r_str,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var arg_1_left = "Fn@";
var arg_1_right = zprint.zprint.hash_identity_str(zloc);
var arg_1_indent = ((((ind + indent) + (1)) + ((arg_1_left).length)) + ((arg_1_right).length));
var class_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(zloc)], 0));
var name_js = cljs.core.str.cljs$core$IFn$_invoke$arity$1(zloc.name);
var color = (cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.re_find(/^clojure/,name_js);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.re_find(/^cljs/,name_js);
}
})())?zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"fn","fn",-1175266204)):new cljs.core.Keyword(null,"none","none",1333468478));
var name_split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_js,/\$/);
var arg_2 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(name_split)))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(name_split))].join('');
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-fn-obj: arg-1:",arg_1_left,arg_1_right,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_left,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1_right,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one(new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string-color","string-color",-1853875244),color], 0))),arg_1_indent,(indent + ind),arg_2),r_str_vec], 0));
}
});
zprint.zprint.fzprint_ns = (function zprint$zprint$fzprint_ns(options,ind,zloc){
var l_str = "#<";
var r_str = ">";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var arg_1 = "Namespace";
var arg_1_indent = (((ind + indent) + (1)) + ((arg_1).length));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-ns: arg-1:",arg_1,"zstring arg-1:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one(new cljs.core.Keyword(null,"unknown","unknown",-935977881),zprint.zprint.rightmost(options),arg_1_indent,(indent + ind),cljs.core.ns_name(zloc)),r_str_vec], 0));
});
/**
 * Given an options map, decrement the :depth value and return the result.
 */
zprint.zprint.dec_depth = (function zprint$zprint$dec_depth(options){
if(cljs.core.truth_(options)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"depth","depth",1768663640),((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})() - (1)));
} else {
return null;
}
});
zprint.zprint.fzprint_record = (function zprint$zprint$fzprint_record(p__43385,ind,zloc){
var map__43386 = p__43385;
var map__43386__$1 = cljs.core.__destructure_map(map__43386);
var options = map__43386__$1;
var map__43387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43386__$1,new cljs.core.Keyword(null,"record","record",-779106859));
var map__43387__$1 = cljs.core.__destructure_map(map__43387);
var record_type_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43387__$1,new cljs.core.Keyword(null,"record-type?","record-type?",-1195765660));
var to_string_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43387__$1,new cljs.core.Keyword(null,"to-string?","to-string?",1452120886));
if(cljs.core.truth_(to_string_QMARK_)){
var G__43388 = options;
var G__43389 = ind;
var G__43390 = zloc.toString();
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43388,G__43389,G__43390) : zprint.zprint.fzprint_STAR_.call(null,G__43388,G__43389,G__43390));
} else {
if(cljs.core.not(record_type_QMARK_)){
var G__43391 = options;
var G__43392 = ind;
var G__43393 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,zloc);
return (zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3 ? zprint.zprint.fzprint_STAR_.cljs$core$IFn$_invoke$arity$3(G__43391,G__43392,G__43393) : zprint.zprint.fzprint_STAR_.call(null,G__43391,G__43392,G__43393));
} else {
var l_str = "#";
var r_str = "";
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var arg_1 = clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(zloc)], 0)),"/",".");
var arg_1__$1 = (function (){var tokens = clojure.string.split.cljs$core$IFn$_invoke$arity$2(arg_1,/\./);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(".",tokens)));
})();
var arg_1_indent = (((ind + indent) + (1)) + cljs.core.count(arg_1__$1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-record: arg-1:",arg_1__$1,"zstring zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_1__$1,zprint.zprint.zcolor_map(options,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),zprint.zprint.fzprint_hang_one(new cljs.core.Keyword(null,"record","record",-779106859),zprint.zprint.dec_depth(options),arg_1_indent,(indent + ind),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,zloc)),r_str_vec], 0));
}
}
});
/**
 * Print the two items in a meta node.  Different because it doesn't print
 *   a single collection, so it doesn't do any indent or rightmost.  It also
 *   uses a different approach to calling fzprint-flow-seq with the
 *   results zmap, so that it prints all of the seq, not just the rightmost.
 */
zprint.zprint.fzprint_meta = (function zprint$zprint$fzprint_meta(options,ind,zloc){
var l_str = "^";
var r_str = "";
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var zloc_seq = zprint.zprint.fzprint_get_zloc_seq(new cljs.core.Keyword(null,"list","list",765357683),options,zloc);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-meta: zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0));
} else {
}

return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,(cljs.core.truth_(new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(options)))?zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$9(new cljs.core.Keyword(null,"vector","vector",1902966158),l_str,"",options,ind,zloc,null,null,new cljs.core.Keyword(null,"first-indent-only?","first-indent-only?",319167353)):zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3(options,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,(((l_str).length) + ind),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(zloc_seq) - (1)),ind)),zloc_seq)),r_str_vec], 0));
});
/**
 * Print a reader-macro, often a reader-conditional. Adapted for differences
 *   in parsing #?@ between rewrite-clj and rewrite-cljs.  Also adapted for
 *   the rewrite-clj not parsing namespaced maps in the version presently
 *   used.
 */
zprint.zprint.fzprint_reader_macro = (function zprint$zprint$fzprint_reader_macro(options,ind,zloc){
var zstr = (function (){var G__43397 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__43397) : zprint.zfns.zstring.call(null,G__43397));
})();
var alt_at_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(zstr),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(zstr,(1),(2)),"@")));
var reader_cond_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(zstr,(0),(1)),"?");
var namespaced_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(zstr,(0),(1)),":");
var at_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43398 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(G__43398) : zprint.zfns.ztag.call(null,G__43398));
})(),new cljs.core.Keyword(null,"deref","deref",-145586795))) || (alt_at_QMARK_));
var vec__43394 = zprint.zprint.get_respect_indent(options,new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"map","map",1371690461));
var respect_nl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43394,(0),null);
var respect_bl_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43394,(1),null);
var indent_only_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43394,(2),null);
var l_str = ((((reader_cond_QMARK_) && (at_QMARK_)))?"#?@":(cljs.core.truth_((function (){var and__5043__auto__ = reader_cond_QMARK_;
if(and__5043__auto__){
var G__43399 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(G__43399) : zprint.zfns.zcoll_QMARK_.call(null,G__43399));
} else {
return and__5043__auto__;
}
})())?"#?":((reader_cond_QMARK_)?(function(){throw (new Error(["Unknown reader macro: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))),"' zfirst zloc: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__43401 = (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfirst.call(null,zloc));
return (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(G__43401) : zprint.zfns.zstring.call(null,G__43401));
})())].join('')))})():((namespaced_QMARK_)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zstr)].join(''):"#"
))));
var r_str = "";
var _ = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg-bug?","dbg-bug?",-315779526).cljs$core$IFn$_invoke$arity$1(options))?null:null);
var indent = ((l_str).length);
var l_str_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str,zprint.zprint.zcolor_map(options,l_str),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str);
var floc = ((((at_QMARK_) && ((!(alt_at_QMARK_)))))?(function (){var G__43402 = (zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc));
return (zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfirst.cljs$core$IFn$_invoke$arity$1(G__43402) : zprint.zfns.zfirst.call(null,G__43402));
})():(zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zsecond.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zsecond.call(null,zloc)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-reader-macro: zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"floc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(floc) : zprint.zfns.zstring.call(null,floc)),"l-str:",l_str], 0))], 0));
} else {
}

if(cljs.core.truth_(indent_only_QMARK_)){
var l_str_io = ((reader_cond_QMARK_)?[l_str,"("].join(''):l_str);
var r_str_io = ((reader_cond_QMARK_)?")":"");
var l_str_vec_io = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_str_io,zprint.zprint.zcolor_map(options,l_str_io),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
var r_str_vec_io = zprint.zprint.rstr_vec.cljs$core$IFn$_invoke$arity$4(options,ind,zloc,r_str_io);
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec_io,((reader_cond_QMARK_)?zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8(new cljs.core.Keyword(null,"map","map",1371690461),l_str_io,r_str_io,zprint.zprint.rightmost(options),ind,floc,null,null):zprint.zprint.fzprint_indent.cljs$core$IFn$_invoke$arity$8(new cljs.core.Keyword(null,"map","map",1371690461),l_str_io,r_str_io,zprint.zprint.rightmost(options),ind,((namespaced_QMARK_)?(zprint.zfns.znextnws_w_nl.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znextnws_w_nl.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znextnws_w_nl.call(null,zloc)):zloc),null,null)),r_str_vec_io], 0));
} else {
return zprint.zprint.concat_no_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l_str_vec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null),((reader_cond_QMARK_)?zprint.zprint.fzprint_map_STAR_(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),"(",")",zprint.zprint.rightmost(options),(indent + ind),floc,null):zprint.zprint.fzprint_flow_seq.cljs$core$IFn$_invoke$arity$3(options,(indent + ind),(function (){var zloc_seq = (cljs.core.truth_(respect_nl_QMARK_)?(zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_nl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_nl.call(null,cljs.core.identity,zloc)):(cljs.core.truth_(respect_bl_QMARK_)?(zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap_w_bl.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap_w_bl.call(null,cljs.core.identity,zloc)):(zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2 ? zprint.zfns.zmap.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,zloc) : zprint.zfns.zmap.call(null,cljs.core.identity,zloc))
));
if(namespaced_QMARK_){
return cljs.core.next(zloc_seq);
} else {
return zloc_seq;
}
})())),r_str_vec], 0));
}
});
/**
 * Given an element which contains newlines, split it up into individual
 *   newline elements.
 */
zprint.zprint.fzprint_newline = (function zprint$zprint$fzprint_newline(options,ind,zloc){
var zstr = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc));
var vec__43403 = zprint.finish.newline_vec(zstr);
var newline_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43403,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43403,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint-newline: zloc:",(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc)),"newline-count:",newline_count,"ind:",ind], 0))], 0));
} else {
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(newline_count,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.comment.blanks(ind))].join(''),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"newline","newline",1790071323),(2)], null)));
});
zprint.zprint.prefix_tags = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"quote","quote",-262615245),"'",new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),"`",new cljs.core.Keyword(null,"unquote","unquote",1649741032),"~",new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),"~@",new cljs.core.Keyword(null,"deref","deref",-145586795),"@",new cljs.core.Keyword(null,"var","var",-769682797),"#'",new cljs.core.Keyword(null,"uneval","uneval",1932037707),"#_"], null);
/**
 * Change options as necessary based on prefix tag.
 */
zprint.zprint.prefix_options = (function zprint$zprint$prefix_options(options,prefix_tag){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix_tag,new cljs.core.Keyword(null,"uneval","uneval",1932037707))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uneval","uneval",1932037707).cljs$core$IFn$_invoke$arity$1(options)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix_tag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))){
return cljs.core.assoc_in(cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"paren","paren",-294107600)], null),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(options))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562)], null),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return options;

}
}
});
/**
 * Sometime we need to give a caller to a routine, and there isn't
 *   a specific caller in the configuration.  So, we will use the configuration
 *   from some other caller and make up a new one just for this situation.
 *   The key-seq is the series of keys to both look up and create.  The
 *   caller is the new caller, and the existing-caller is the one from which
 *   we we will extract the information. This returns a new options map with
 *   the new-caller in it.
 */
zprint.zprint.make_caller = (function zprint$zprint$make_caller(options,new_caller,existing_caller,key_seq){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(options,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_caller], null),key_seq),(function (p1__43410_SHARP_){

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_caller], null),key_seq));
}));
});
/**
 * If the value of :next-inner is a map, then config-and-validate it. If
 *   the value of :next-inner is a vector of maps, then config-and-validate
 *   each of the maps in turn.
 */
zprint.zprint.integrate_next_inner = (function zprint$zprint$integrate_next_inner(options){
var next_inner = new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"unset","unset",-513298114));
if(cljs.core.map_QMARK_(next_inner)){
return cljs.core.first(zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$5("next-inner:",null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"next-inner","next-inner",608504966)),next_inner,null));
} else {
if(cljs.core.vector_QMARK_(next_inner)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43411_SHARP_,p2__43412_SHARP_){
return cljs.core.first(zprint.config.config_and_validate.cljs$core$IFn$_invoke$arity$5("next-inner-vector",null,p1__43411_SHARP_,p2__43412_SHARP_,null));
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"next-inner","next-inner",608504966)),next_inner);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_inner,new cljs.core.Keyword(null,"unset","unset",-513298114))){
return options;
} else {
return options;

}
}
}
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint_STAR_ = (function zprint$zprint$fzprint_STAR_(p__43416,indent,zloc){
var map__43417 = p__43416;
var map__43417__$1 = cljs.core.__destructure_map(map__43417);
var options = map__43417__$1;
var max_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"max-depth","max-depth",127060793));
var shift_seq = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"shift-seq","shift-seq",267527195));
var max_hang_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"max-hang-count","max-hang-count",637294812));
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var max_hang_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"max-hang-depth","max-hang-depth",-915232220));
var next_inner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"next-inner","next-inner",608504966));
var dbg_s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408));
var in_hang_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"in-hang?","in-hang?",-1065695639));
var rightcnt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"rightcnt","rightcnt",-45750070));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var hex_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"hex?","hex?",890937870));
var dbg_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872));
var dbg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771));
var string_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"string-color","string-color",-1853875244));
var trim_comments_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667));
var max_hang_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"max-hang-span","max-hang-span",256100693));
var one_line_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"one-line?","one-line?",2055953111));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var string_str_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43417__$1,new cljs.core.Keyword(null,"string-str?","string-str?",2059147352));
var avail = (width - indent);
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"depth","depth",1768663640),(depth + (1)));
var _ = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$1));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$1);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$1),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint* **** next-inner:",new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(options__$1)], 0))], 0)):null);
var options__$2 = (cljs.core.truth_(next_inner)?zprint.zprint.integrate_next_inner(options__$1):options__$1);
var options__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = dbg_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = dbg_print_QMARK_;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return dbg_s;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$2,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$2,new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778),"")),(cljs.core.truth_(one_line_QMARK_)?"o":(cljs.core.truth_(in_hang_QMARK_)?"h":"."
))].join('')):options__$2);
var ___$1 = (cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options__$3));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$3);
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$3),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint* **** rightcnt:",rightcnt,"depth:",depth,"indent:",indent,"in-hang?:",in_hang_QMARK_,":next-inner:",new cljs.core.Keyword(null,"next-inner","next-inner",608504966).cljs$core$IFn$_invoke$arity$1(options__$3),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))], 0))], 0))], 0)):null);
var dbg_data = cljs.core.deref(zprint.zprint.fzprint_dbg);
var dbg_focus_QMARK_ = (function (){var and__5043__auto__ = dbg_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dbg_data,cljs.core.second((zprint.zfns.zfind_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfind_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfind_path.call(null,zloc))));
} else {
return and__5043__auto__;
}
})();
var options__$4 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options__$3,new cljs.core.Keyword(null,"dbg","dbg",202767554),new cljs.core.Keyword(null,"on","on",173873944)):options__$3);
var ___$2 = (cljs.core.truth_(dbg_focus_QMARK_)?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fzprint dbg-data:",dbg_data], 0)):null);
if(cljs.core.truth_((function (){var and__5043__auto__ = (zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcoll_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcoll_QMARK_.call(null,zloc));
if(cljs.core.truth_(and__5043__auto__)){
return (((depth >= max_depth)) || ((zprint.zprint.get_max_length(options__$4) === (0))));
} else {
return and__5043__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zloc,(zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0 ? zprint.zfns.zdotdotdot.cljs$core$IFn$_invoke$arity$0() : zprint.zfns.zdotdotdot.call(null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["...",zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-depth-string","max-depth-string",-474325435).cljs$core$IFn$_invoke$arity$1(options__$4),zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
}
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not(one_line_QMARK_)) && (((cljs.core.not(in_code_QMARK_)) && (((((depth - in_hang_QMARK_) > max_hang_span)) || (((cljs.core.not(one_line_QMARK_)) && (((((zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcount.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcount.call(null,zloc)) > max_hang_count)) && ((depth > max_hang_depth)))))))))));
} else {
return and__5043__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((zprint.zfns.zrecord_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zrecord_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zrecord_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_record(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zlist_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zlist_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_list(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zvector_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zvector_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_vec(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = (zprint.zfns.zmap_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zmap_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zmap_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (zprint.zfns.znamespacedmap_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.znamespacedmap_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.znamespacedmap_QMARK_.call(null,zloc));
}
})())){
return zprint.zprint.fzprint_map(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zset_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zset_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zset_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_set(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zanonfn_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zanonfn_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zanonfn_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_anon_fn(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zfn_obj_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfn_obj_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfn_obj_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_fn_obj(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zarray_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zarray_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zarray_QMARK_.call(null,zloc)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"object?","object?",-1313059217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"array","array",-2080713842).cljs$core$IFn$_invoke$arity$1(options__$4)))){
return zprint.zprint.fzprint_object.cljs$core$IFn$_invoke$arity$3(options__$4,indent,zloc);
} else {
return zprint.zprint.fzprint_array(options__$4,indent,(zprint.zfns.zexpandarray.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zexpandarray.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zexpandarray.call(null,zloc)));
}
} else {
if(cljs.core.truth_((zprint.zfns.zatom_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zatom_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zatom_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_atom(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zmeta_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zmeta_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zmeta_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_meta(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((function (){var G__43422 = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc));
return (zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1(G__43422) : zprint.zprint.prefix_tags.call(null,G__43422));
})())){
return zprint.zprint.fzprint_vec_STAR_(new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),(function (){var G__43423 = (zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc));
return (zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1 ? zprint.zprint.prefix_tags.cljs$core$IFn$_invoke$arity$1(G__43423) : zprint.zprint.prefix_tags.call(null,G__43423));
})(),"",zprint.zprint.make_caller(zprint.zprint.make_caller(zprint.zprint.make_caller(zprint.zprint.prefix_options(options__$4,(zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc))),new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent-only?","indent-only?",375678842)], null)),new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635)], null)),new cljs.core.Keyword(null,"prefix-tags","prefix-tags",-348485792),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"respect-bl?","respect-bl?",298921998)], null)),indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zns_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zns_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zns_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_ns(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = (zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zpromise_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zpromise_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zfuture_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zfuture_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zdelay_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zdelay_QMARK_.call(null,zloc));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return (zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zagent_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zagent_QMARK_.call(null,zloc));
}
}
}
})())){
return zprint.zprint.fzprint_future_promise_delay_agent(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zreader_macro_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zreader_macro_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zreader_macro_QMARK_.call(null,zloc)))){
return zprint.zprint.fzprint_reader_macro(options__$4,indent,zloc);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323))) && ((depth > (0))))){
return zprint.zprint.fzprint_newline(options__$4,indent,zloc);
} else {
var zstr = (zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc));
var overflow_in_hang_QMARK_ = (function (){var and__5043__auto__ = in_hang_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (((cljs.core.count(zstr) + indent) + (function (){var or__5045__auto__ = rightcnt;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()) > width);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = (zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcomment_QMARK_.call(null,zloc));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [";",null], null), null),zstr));
} else {
return and__5043__auto__;
}
})())){
return zprint.zprint.fzprint_newline(options__$4,indent,zloc);
} else {
if(cljs.core.truth_((zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zcomment_QMARK_.call(null,zloc)))){
var zcomment = (((((depth === (0))) && (cljs.core.not(trim_comments_QMARK_))))?zstr:clojure.string.trimr(zstr));
var inline_comment_vec = (cljs.core.truth_(new cljs.core.Keyword(null,"inline?","inline?",-1674483791).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options__$4)))?zprint.comment.inlinecomment_QMARK_(zloc):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint* trim-comments?:",trim_comments_QMARK_,"inline-comment-vec:",inline_comment_vec], 0));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"count?","count?",-122202128).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(options__$4));
if(cljs.core.truth_(and__5043__auto__)){
return overflow_in_hang_QMARK_;
} else {
return and__5043__auto__;
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint*: overflow comment ========"], 0));
} else {
}

return null;
} else {
if(cljs.core.truth_(inline_comment_vec)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"comment","comment",532206069)),new cljs.core.Keyword(null,"comment-inline","comment-inline",712944405),cljs.core.first(inline_comment_vec),cljs.core.second(inline_comment_vec)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zcomment,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"comment","comment",532206069)),new cljs.core.Keyword(null,"comment","comment",532206069)], null)], null);
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"comma","comma",1699024745))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"comma","comma",1699024745)], null)], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.ztag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.ztag.call(null,zloc)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) && (clojure.string.includes_QMARK_(zstr,",")))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"comma","comma",1699024745)),new cljs.core.Keyword(null,"comma","comma",1699024745)], null)], null);
} else {
if(cljs.core.truth_((zprint.zfns.zwhitespaceorcomment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zwhitespaceorcomment_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zwhitespaceorcomment_QMARK_.call(null,zloc)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),(24)], null)], null);
} else {
if(cljs.core.truth_(overflow_in_hang_QMARK_)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options__$4))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options__$4),"fzprint*: overflow <<<<<<<<<<"], 0));
} else {
}

return null;
} else {
if(cljs.core.truth_((zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zkeyword_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zkeyword_QMARK_.call(null,zloc)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"keyword","keyword",811389747)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
var zloc_sexpr = zprint.zprint.get_sexpr(options__$4,zloc);
if(typeof zloc_sexpr === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(string_str_QMARK_)?zloc_sexpr:(zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1 ? zprint.zfns.zstring.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zfns.zstring.call(null,zloc))),(cljs.core.truth_(string_color)?string_color:zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"string","string",-1989541586))),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.showfn_QMARK_(options__$4,zloc_sexpr))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_(zprint.zprint.show_user_fn_QMARK_(options__$4,zloc_sexpr))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"user-fn","user-fn",223976490)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(typeof zloc_sexpr === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(hex_QMARK_)?(zprint.zfns.znumstr.cljs$core$IFn$_invoke$arity$3 ? zprint.zfns.znumstr.cljs$core$IFn$_invoke$arity$3(zloc,hex_QMARK_,shift_seq) : zprint.zfns.znumstr.call(null,zloc,hex_QMARK_,shift_seq)):zstr),zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"number","number",1570378438)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if((zloc_sexpr instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if((zloc_sexpr == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"nil","nil",99600501)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(zloc_sexpr === true){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"true","true",-1114210334)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(zloc_sexpr === false){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"false","false",1277713805)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.char_QMARK_(zloc_sexpr)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"char","char",-641587586)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = (function (){var c__5078__auto__ = cljs.core.type(/regex/);
var x__5079__auto__ = zloc_sexpr;
return (x__5079__auto__ instanceof c__5078__auto__);
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.re_find(/^#\".*\"$/,zstr);
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"regex","regex",939488856)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zstr,zprint.zprint.zcolor_map(options__$4,new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);

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
}
}
}
}
}
}
}
});
/**
 * The pretty print part of fzprint.
 */
zprint.zprint.fzprint = (function zprint$zprint$fzprint(options,indent,zloc){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(options))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"fzprint: indent:",indent,"(:indent options)",new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(options)], 0));
} else {
}

var zloc__$1 = ((cljs.core.not((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438));
if(and__5043__auto__){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__5043__auto__;
}
})()))?zloc:zprint.zutil.add_spec_to_docstring(zloc,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(options))));
var style_vec = zprint.zprint.fzprint_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"depth","depth",1768663640),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"map-depth","map-depth",-191378641),(0),new cljs.core.Keyword(null,"zfn-map","zfn-map",1068295789),zprint.zfns.zfn_map()], 0)),indent,zloc__$1);
return style_vec;
});
/**
 * Count lines in a string.
 */
zprint.zprint.line_count = (function zprint$zprint$line_count(s){
return (cljs.core.count(cljs.core.re_seq(/\n/,s)) + (1));
});
/**
 * Return a vector the lengths of lines.
 */
zprint.zprint.line_widths = (function zprint$zprint$line_widths(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\n/));
});
/**
 * Split a string into lines, and figure the max width.
 */
zprint.zprint.max_width = (function zprint$zprint$max_width(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,zprint.zprint.line_widths(s));
});
/**
 * Takes a string, and expands tabs inside of the string based
 *   on a tab-size argument.
 */
zprint.zprint.expand_tabs = (function zprint$zprint$expand_tabs(var_args){
var G__43430 = arguments.length;
switch (G__43430) {
case 2:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2 = (function (tab_size,s){
if(clojure.string.includes_QMARK_(s,"\t")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var char_seq = cljs.core.seq(s);
var cur_len = cljs.core.long$((0));
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(char_seq)){
return cljs.core.persistent_BANG_(out);
} else {
var this_char = cljs.core.first(char_seq);
var tab_expansion = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_char,"\t"))?(tab_size - cljs.core.mod(cur_len,tab_size)):null);
var G__44626 = cljs.core.rest(char_seq);
var G__44627 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_char,"\n"))?(0):(cur_len + cljs.core.long$((function (){var or__5045__auto__ = tab_expansion;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})())));
var G__44628 = (cljs.core.truth_(tab_expansion)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(zprint.zprint.conj_it_BANG_,out,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(tab_expansion," ")):cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,this_char));
char_seq = G__44626;
cur_len = G__44627;
out = G__44628;
continue;
}
break;
}
})());
} else {
return s;
}
}));

(zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$1 = (function (s){
return zprint.zprint.expand_tabs.cljs$core$IFn$_invoke$arity$2((8),s);
}));

(zprint.zprint.expand_tabs.cljs$lang$maxFixedArity = 2);

/**
 * Given a string, find the line ending that is predominent in the beginning
 *   of the string, and split the string into separate lines.  Returns 
 *   [line-ending-string vector-of-lines]
 */
zprint.zprint.determine_ending_split_lines = (function zprint$zprint$determine_ending_split_lines(s){
if(clojure.string.includes_QMARK_(s,"\r")){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,/\r\n|\r|\n/,(-1));
var first_lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(function (){var x__5133__auto__ = cljs.core.count(s);
var y__5134__auto__ = (2000);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()),/\r/);
var nl_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43439_SHARP_,p2__43438_SHARP_){
if(clojure.string.starts_with_QMARK_(p2__43438_SHARP_,"\n")){
return (p1__43439_SHARP_ + (1));
} else {
return p1__43439_SHARP_;
}
}),(0),first_lines);
var line_ending = (((nl_count >= (cljs.core.count(first_lines) / (2))))?"\r\n":"\r");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_ending,lines], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,/\n/,(-1))], null);
}
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
zprint.zprint.r = (function (left,right,__meta,__extmap,__hash){
this.left = left;
this.right = right;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(zprint.zprint.r.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k43462,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__43488 = k43462;
var G__43488__$1 = (((G__43488 instanceof cljs.core.Keyword))?G__43488.fqn:null);
switch (G__43488__$1) {
case "left":
return self__.left;

break;
case "right":
return self__.right;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43462,else__5346__auto__);

}
}));

(zprint.zprint.r.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__43489){
var vec__43490 = p__43489;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43490,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43490,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(zprint.zprint.r.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#zprint.zprint.r{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null))], null),self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43461){
var self__ = this;
var G__43461__$1 = this;
return (new cljs.core.RecordIter((0),G__43461__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(zprint.zprint.r.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(zprint.zprint.r.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,self__.__extmap,self__.__hash));
}));

(zprint.zprint.r.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1384233907 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(zprint.zprint.r.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43463,other43464){
var self__ = this;
var this43463__$1 = this;
return (((!((other43464 == null)))) && ((((this43463__$1.constructor === other43464.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43463__$1.left,other43464.left)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43463__$1.right,other43464.right)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43463__$1.__extmap,other43464.__extmap)))))))));
}));

(zprint.zprint.r.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(zprint.zprint.r.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k43462){
var self__ = this;
var this__5350__auto____$1 = this;
var G__43498 = k43462;
var G__43498__$1 = (((G__43498 instanceof cljs.core.Keyword))?G__43498.fqn:null);
switch (G__43498__$1) {
case "left":
case "right":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k43462);

}
}));

(zprint.zprint.r.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__43461){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__43499 = cljs.core.keyword_identical_QMARK_;
var expr__43500 = k__5352__auto__;
if(cljs.core.truth_((pred__43499.cljs$core$IFn$_invoke$arity$2 ? pred__43499.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),expr__43500) : pred__43499.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__43500)))){
return (new zprint.zprint.r(G__43461,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43499.cljs$core$IFn$_invoke$arity$2 ? pred__43499.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833),expr__43500) : pred__43499.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__43500)))){
return (new zprint.zprint.r(self__.left,G__43461,self__.__meta,self__.__extmap,null));
} else {
return (new zprint.zprint.r(self__.left,self__.right,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__43461),null));
}
}
}));

(zprint.zprint.r.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"left","left",-399115937),self__.left,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"right","right",-452581833),self__.right,null))], null),self__.__extmap));
}));

(zprint.zprint.r.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__43461){
var self__ = this;
var this__5342__auto____$1 = this;
return (new zprint.zprint.r(self__.left,self__.right,G__43461,self__.__extmap,self__.__hash));
}));

(zprint.zprint.r.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(zprint.zprint.r.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
}));

(zprint.zprint.r.cljs$lang$type = true);

(zprint.zprint.r.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"zprint.zprint/r",null,(1),null));
}));

(zprint.zprint.r.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"zprint.zprint/r");
}));

/**
 * Positional factory function for zprint.zprint/r.
 */
zprint.zprint.__GT_r = (function zprint$zprint$__GT_r(left,right){
return (new zprint.zprint.r(left,right,null,null,null));
});

/**
 * Factory function for zprint.zprint/r, taking a map of keywords to field values.
 */
zprint.zprint.map__GT_r = (function zprint$zprint$map__GT_r(G__43465){
var extmap__5385__auto__ = (function (){var G__43504 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43465,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"right","right",-452581833)], 0));
if(cljs.core.record_QMARK_(G__43465)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43504);
} else {
return G__43504;
}
})();
return (new zprint.zprint.r(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__43465),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__43465),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

zprint.zprint.make_record = (function zprint$zprint$make_record(left,right){
return (new zprint.zprint.r(left,right,null,null,null));
});

//# sourceMappingURL=zprint.zprint.js.map