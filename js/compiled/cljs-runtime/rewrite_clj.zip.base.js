goog.provide('rewrite_clj.zip.base');
/**
 * Create and return zipper from Clojure/ClojureScript/EDN `node` (likely parsed by [[rewrite-clj.parse]]).
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.edn_STAR_ = (function rewrite_clj$zip$base$edn_STAR_(var_args){
var G__23471 = arguments.length;
switch (G__23471) {
case 1:
return rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
return rewrite_clj.zip.options.set_opts((cljs.core.truth_(new cljs.core.Keyword(null,"track-position?","track-position?",1860535489).cljs$core$IFn$_invoke$arity$1(opts))?rewrite_clj.custom_zipper.core.custom_zipper(node):rewrite_clj.custom_zipper.core.zipper(node)),opts);
}));

(rewrite_clj.zip.base.edn_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Create and return zipper from Clojure/ClojureScript/EDN `node` (likely parsed by [[rewrite-clj.parse]]),
 *   and move to the first non-whitespace/non-comment child. If node is not forms node, is wrapped in forms node
 *   for a consistent root.
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.edn = (function rewrite_clj$zip$base$edn(var_args){
var G__23476 = arguments.length;
switch (G__23476) {
case 1:
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2 = (function (node,opts){
var node__$1 = node;
var opts__$1 = opts;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.tag(node__$1),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_clj.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2(node__$1,opts__$1);
var or__5045__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(rewrite_clj.custom_zipper.core.down(top));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return top;
}
} else {
var G__23496 = rewrite_clj.node.forms.forms_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node__$1], null));
var G__23497 = opts__$1;
node__$1 = G__23496;
opts__$1 = G__23497;
continue;
}
break;
}
}));

(rewrite_clj.zip.base.edn.cljs$lang$maxFixedArity = 2);

/**
 * Return tag of current node in `zloc`.
 */
rewrite_clj.zip.base.tag = (function rewrite_clj$zip$base$tag(zloc){
var G__23477 = zloc;
var G__23477__$1 = (((G__23477 == null))?null:rewrite_clj.custom_zipper.core.node(G__23477));
if((G__23477__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.tag(G__23477__$1);
}
});
/**
 * Return true if current node's element type in `zloc` can be [[sexpr]]-ed.
 * 
 * See [related docs in user guide](/doc/01-user-guide.adoc#not-all-clojure-is-sexpr-able)
 */
rewrite_clj.zip.base.sexpr_able_QMARK_ = (function rewrite_clj$zip$base$sexpr_able_QMARK_(zloc){
var G__23478 = zloc;
var G__23478__$1 = (((G__23478 == null))?null:rewrite_clj.custom_zipper.core.node(G__23478));
if((G__23478__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.sexpr_able_QMARK_(G__23478__$1);
}
});
/**
 * Return s-expression (the Clojure form) of current node in `zloc`.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.base.sexpr = (function rewrite_clj$zip$base$sexpr(zloc){
var G__23479 = zloc;
var G__23479__$1 = (((G__23479 == null))?null:rewrite_clj.custom_zipper.core.node(G__23479));
if((G__23479__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.sexpr.cljs$core$IFn$_invoke$arity$2(G__23479__$1,rewrite_clj.zip.options.get_opts(zloc));
}
});
/**
 * Return s-expression (the Clojure forms) of children of current node in `zloc`.
 * 
 *   See docs for [sexpr nuances](/doc/01-user-guide.adoc#sexpr-nuances).
 */
rewrite_clj.zip.base.child_sexprs = (function rewrite_clj$zip$base$child_sexprs(zloc){
var G__23480 = zloc;
var G__23480__$1 = (((G__23480 == null))?null:rewrite_clj.custom_zipper.core.node(G__23480));
if((G__23480__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.child_sexprs.cljs$core$IFn$_invoke$arity$2(G__23480__$1,rewrite_clj.zip.options.get_opts(zloc));
}
});
/**
 * Return length of printable [[string]] of current node in `zloc`.
 */
rewrite_clj.zip.base.length = (function rewrite_clj$zip$base$length(zloc){
var or__5045__auto__ = (function (){var G__23481 = zloc;
var G__23481__$1 = (((G__23481 == null))?null:rewrite_clj.custom_zipper.core.node(G__23481));
if((G__23481__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.length(G__23481__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
/**
 * DEPRECATED. Return a tag/s-expression pair for inner nodes, or
 * the s-expression itself for leaves.
 */
rewrite_clj.zip.base.value = (function rewrite_clj$zip$base$value(zloc){
var G__23482 = zloc;
var G__23482__$1 = (((G__23482 == null))?null:rewrite_clj.custom_zipper.core.node(G__23482));
if((G__23482__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.value(G__23482__$1);
}
});
/**
 * Create and return zipper from all forms in Clojure/ClojureScript/EDN string `s`.
 * 
 *   Optional `opts` can specify:
 *   - `:track-position?` set to `true` to enable ones-based row/column tracking, see [docs on position tracking](/doc/01-user-guide.adoc#position-tracking).
 *   - `:auto-resolve` specify a function to customize namespaced element auto-resolve behavior, see [docs on namespaced elements](/doc/01-user-guide.adoc#namespaced-elements)
 */
rewrite_clj.zip.base.of_string = (function rewrite_clj$zip$base$of_string(var_args){
var G__23484 = arguments.length;
switch (G__23484) {
case 1:
return rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.zip.base.of_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var G__23485 = s;
var G__23485__$1 = (((G__23485 == null))?null:rewrite_clj.parser.parse_string_all(G__23485));
if((G__23485__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.edn.cljs$core$IFn$_invoke$arity$2(G__23485__$1,opts);
}
}));

(rewrite_clj.zip.base.of_string.cljs$lang$maxFixedArity = 2);

/**
 * Return string representing the current node in `zloc`.
 */
rewrite_clj.zip.base.string = (function rewrite_clj$zip$base$string(zloc){
var G__23486 = zloc;
var G__23486__$1 = (((G__23486 == null))?null:rewrite_clj.custom_zipper.core.node(G__23486));
if((G__23486__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.string(G__23486__$1);
}
});
/**
 * DEPRECATED. Renamed to [[string]].
 */
rewrite_clj.zip.base.__GT_string = (function rewrite_clj$zip$base$__GT_string(zloc){
return rewrite_clj.zip.base.string(zloc);
});
/**
 * Return string representing the zipped-up `zloc` zipper.
 */
rewrite_clj.zip.base.root_string = (function rewrite_clj$zip$base$root_string(zloc){
var G__23487 = zloc;
var G__23487__$1 = (((G__23487 == null))?null:rewrite_clj.custom_zipper.core.root(G__23487));
if((G__23487__$1 == null)){
return null;
} else {
return rewrite_clj.node.protocols.string(G__23487__$1);
}
});
/**
 * DEPRECATED. Renamed to [[root-string]].
 */
rewrite_clj.zip.base.__GT_root_string = (function rewrite_clj$zip$base$__GT_root_string(zloc){
return rewrite_clj.zip.base.root_string(zloc);
});
rewrite_clj.zip.base.print_BANG_ = (function rewrite_clj$zip$base$print_BANG_(s,_writer){
return cljs.core.string_print(s);
});
/**
 * Print current node in `zloc`.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_clj.zip.base.print = (function rewrite_clj$zip$base$print(var_args){
var G__23489 = arguments.length;
switch (G__23489) {
case 2:
return rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$2 = (function (zloc,writer){
var G__23490 = zloc;
var G__23490__$1 = (((G__23490 == null))?null:rewrite_clj.zip.base.string(G__23490));
if((G__23490__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.print_BANG_(G__23490__$1,writer);
}
}));

(rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.base.print.cljs$core$IFn$_invoke$arity$2(zloc,null);
}));

(rewrite_clj.zip.base.print.cljs$lang$maxFixedArity = 2);

/**
 * Zip up and print `zloc` from root node.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_clj.zip.base.print_root = (function rewrite_clj$zip$base$print_root(var_args){
var G__23492 = arguments.length;
switch (G__23492) {
case 2:
return rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$2 = (function (zloc,writer){
var G__23493 = zloc;
var G__23493__$1 = (((G__23493 == null))?null:rewrite_clj.zip.base.root_string(G__23493));
if((G__23493__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.print_BANG_(G__23493__$1,writer);
}
}));

(rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.base.print_root.cljs$core$IFn$_invoke$arity$2(zloc,null);
}));

(rewrite_clj.zip.base.print_root.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.zip.base.js.map
