goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52649 = arguments.length;
var i__5770__auto___52650 = (0);
while(true){
if((i__5770__auto___52650 < len__5769__auto___52649)){
args__5775__auto__.push((arguments[i__5770__auto___52650]));

var G__52651 = (i__5770__auto___52650 + (1));
i__5770__auto___52650 = G__52651;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__52652__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__52652 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__52653__i = 0, G__52653__a = new Array(arguments.length -  0);
while (G__52653__i < G__52653__a.length) {G__52653__a[G__52653__i] = arguments[G__52653__i + 0]; ++G__52653__i;}
  children = new cljs.core.IndexedSeq(G__52653__a,0,null);
} 
return G__52652__delegate.call(this,children);};
G__52652.cljs$lang$maxFixedArity = 0;
G__52652.cljs$lang$applyTo = (function (arglist__52654){
var children = cljs.core.seq(arglist__52654);
return G__52652__delegate(children);
});
G__52652.cljs$core$IFn$_invoke$arity$variadic = G__52652__delegate;
return G__52652;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq52557){
var G__52558 = cljs.core.first(seq52557);
var seq52557__$1 = cljs.core.next(seq52557);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52558,seq52557__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__52655__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__52655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52656__i = 0, G__52656__a = new Array(arguments.length -  0);
while (G__52656__i < G__52656__a.length) {G__52656__a[G__52656__i] = arguments[G__52656__i + 0]; ++G__52656__i;}
  args = new cljs.core.IndexedSeq(G__52656__a,0,null);
} 
return G__52655__delegate.call(this,args);};
G__52655.cljs$lang$maxFixedArity = 0;
G__52655.cljs$lang$applyTo = (function (arglist__52657){
var args = cljs.core.seq(arglist__52657);
return G__52655__delegate(args);
});
G__52655.cljs$core$IFn$_invoke$arity$variadic = G__52655__delegate;
return G__52655;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52660 = arguments.length;
var i__5770__auto___52661 = (0);
while(true){
if((i__5770__auto___52661 < len__5769__auto___52660)){
args__5775__auto__.push((arguments[i__5770__auto___52661]));

var G__52662 = (i__5770__auto___52661 + (1));
i__5770__auto___52661 = G__52662;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq52570){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52570));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__52595 = arguments.length;
switch (G__52595) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___52665 = arguments.length;
var i__5770__auto___52666 = (0);
while(true){
if((i__5770__auto___52666 < len__5769__auto___52665)){
args_arr__5794__auto__.push((arguments[i__5770__auto___52666]));

var G__52667 = (i__5770__auto___52666 + (1));
i__5770__auto___52666 = G__52667;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq52593){
var G__52594 = cljs.core.first(seq52593);
var seq52593__$1 = cljs.core.next(seq52593);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52594,seq52593__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52686 = arguments.length;
var i__5770__auto___52690 = (0);
while(true){
if((i__5770__auto___52690 < len__5769__auto___52686)){
args__5775__auto__.push((arguments[i__5770__auto___52690]));

var G__52691 = (i__5770__auto___52690 + (1));
i__5770__auto___52690 = G__52691;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq52596){
var G__52597 = cljs.core.first(seq52596);
var seq52596__$1 = cljs.core.next(seq52596);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52597,seq52596__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52705 = arguments.length;
var i__5770__auto___52706 = (0);
while(true){
if((i__5770__auto___52706 < len__5769__auto___52705)){
args__5775__auto__.push((arguments[i__5770__auto___52706]));

var G__52707 = (i__5770__auto___52706 + (1));
i__5770__auto___52706 = G__52707;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq52598){
var G__52599 = cljs.core.first(seq52598);
var seq52598__$1 = cljs.core.next(seq52598);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52599,seq52598__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52715 = arguments.length;
var i__5770__auto___52720 = (0);
while(true){
if((i__5770__auto___52720 < len__5769__auto___52715)){
args__5775__auto__.push((arguments[i__5770__auto___52720]));

var G__52723 = (i__5770__auto___52720 + (1));
i__5770__auto___52720 = G__52723;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq52643){
var G__52644 = cljs.core.first(seq52643);
var seq52643__$1 = cljs.core.next(seq52643);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52644,seq52643__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
