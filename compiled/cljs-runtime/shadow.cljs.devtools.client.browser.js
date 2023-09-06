goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50945 = arguments.length;
var i__5770__auto___50946 = (0);
while(true){
if((i__5770__auto___50946 < len__5769__auto___50945)){
args__5775__auto__.push((arguments[i__5770__auto___50946]));

var G__50947 = (i__5770__auto___50946 + (1));
i__5770__auto___50946 = G__50947;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50225){
var G__50226 = cljs.core.first(seq50225);
var seq50225__$1 = cljs.core.next(seq50225);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50226,seq50225__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50238 = cljs.core.seq(sources);
var chunk__50239 = null;
var count__50240 = (0);
var i__50241 = (0);
while(true){
if((i__50241 < count__50240)){
var map__50260 = chunk__50239.cljs$core$IIndexed$_nth$arity$2(null,i__50241);
var map__50260__$1 = cljs.core.__destructure_map(map__50260);
var src = map__50260__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50260__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50260__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50260__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50260__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50261){var e_50953 = e50261;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50953);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50953.message)].join('')));
}

var G__50954 = seq__50238;
var G__50955 = chunk__50239;
var G__50956 = count__50240;
var G__50957 = (i__50241 + (1));
seq__50238 = G__50954;
chunk__50239 = G__50955;
count__50240 = G__50956;
i__50241 = G__50957;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50238);
if(temp__5804__auto__){
var seq__50238__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50238__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50238__$1);
var G__50958 = cljs.core.chunk_rest(seq__50238__$1);
var G__50959 = c__5568__auto__;
var G__50960 = cljs.core.count(c__5568__auto__);
var G__50961 = (0);
seq__50238 = G__50958;
chunk__50239 = G__50959;
count__50240 = G__50960;
i__50241 = G__50961;
continue;
} else {
var map__50268 = cljs.core.first(seq__50238__$1);
var map__50268__$1 = cljs.core.__destructure_map(map__50268);
var src = map__50268__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50268__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50268__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50268__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50268__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50269){var e_50962 = e50269;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50962);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50962.message)].join('')));
}

var G__50963 = cljs.core.next(seq__50238__$1);
var G__50964 = null;
var G__50965 = (0);
var G__50966 = (0);
seq__50238 = G__50963;
chunk__50239 = G__50964;
count__50240 = G__50965;
i__50241 = G__50966;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50289 = cljs.core.seq(js_requires);
var chunk__50290 = null;
var count__50291 = (0);
var i__50292 = (0);
while(true){
if((i__50292 < count__50291)){
var js_ns = chunk__50290.cljs$core$IIndexed$_nth$arity$2(null,i__50292);
var require_str_50967 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50967);


var G__50968 = seq__50289;
var G__50969 = chunk__50290;
var G__50970 = count__50291;
var G__50971 = (i__50292 + (1));
seq__50289 = G__50968;
chunk__50290 = G__50969;
count__50291 = G__50970;
i__50292 = G__50971;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50289);
if(temp__5804__auto__){
var seq__50289__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50289__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50289__$1);
var G__50972 = cljs.core.chunk_rest(seq__50289__$1);
var G__50973 = c__5568__auto__;
var G__50974 = cljs.core.count(c__5568__auto__);
var G__50975 = (0);
seq__50289 = G__50972;
chunk__50290 = G__50973;
count__50291 = G__50974;
i__50292 = G__50975;
continue;
} else {
var js_ns = cljs.core.first(seq__50289__$1);
var require_str_50976 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50976);


var G__50977 = cljs.core.next(seq__50289__$1);
var G__50978 = null;
var G__50979 = (0);
var G__50980 = (0);
seq__50289 = G__50977;
chunk__50290 = G__50978;
count__50291 = G__50979;
i__50292 = G__50980;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50302){
var map__50303 = p__50302;
var map__50303__$1 = cljs.core.__destructure_map(map__50303);
var msg = map__50303__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50303__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50303__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50304(s__50305){
return (new cljs.core.LazySeq(null,(function (){
var s__50305__$1 = s__50305;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__50305__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__50313 = cljs.core.first(xs__6360__auto__);
var map__50313__$1 = cljs.core.__destructure_map(map__50313);
var src = map__50313__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50313__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50313__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__50305__$1,map__50313,map__50313__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50303,map__50303__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50304_$_iter__50306(s__50307){
return (new cljs.core.LazySeq(null,((function (s__50305__$1,map__50313,map__50313__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50303,map__50303__$1,msg,info,reload_info){
return (function (){
var s__50307__$1 = s__50307;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__50307__$1);
if(temp__5804__auto____$1){
var s__50307__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50307__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50307__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50309 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50308 = (0);
while(true){
if((i__50308 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__50308);
cljs.core.chunk_append(b__50309,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50982 = (i__50308 + (1));
i__50308 = G__50982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50309),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50304_$_iter__50306(cljs.core.chunk_rest(s__50307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50309),null);
}
} else {
var warning = cljs.core.first(s__50307__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50304_$_iter__50306(cljs.core.rest(s__50307__$2)));
}
} else {
return null;
}
break;
}
});})(s__50305__$1,map__50313,map__50313__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50303,map__50303__$1,msg,info,reload_info))
,null,null));
});})(s__50305__$1,map__50313,map__50313__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50303,map__50303__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50304(cljs.core.rest(s__50305__$1)));
} else {
var G__50984 = cljs.core.rest(s__50305__$1);
s__50305__$1 = G__50984;
continue;
}
} else {
var G__50985 = cljs.core.rest(s__50305__$1);
s__50305__$1 = G__50985;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50345_50986 = cljs.core.seq(warnings);
var chunk__50346_50987 = null;
var count__50347_50988 = (0);
var i__50348_50989 = (0);
while(true){
if((i__50348_50989 < count__50347_50988)){
var map__50400_50990 = chunk__50346_50987.cljs$core$IIndexed$_nth$arity$2(null,i__50348_50989);
var map__50400_50991__$1 = cljs.core.__destructure_map(map__50400_50990);
var w_50992 = map__50400_50991__$1;
var msg_50993__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50400_50991__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50400_50991__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50400_50991__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50400_50991__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50996)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50994),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50995),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50993__$1)].join(''));


var G__50997 = seq__50345_50986;
var G__50998 = chunk__50346_50987;
var G__50999 = count__50347_50988;
var G__51000 = (i__50348_50989 + (1));
seq__50345_50986 = G__50997;
chunk__50346_50987 = G__50998;
count__50347_50988 = G__50999;
i__50348_50989 = G__51000;
continue;
} else {
var temp__5804__auto___51003 = cljs.core.seq(seq__50345_50986);
if(temp__5804__auto___51003){
var seq__50345_51005__$1 = temp__5804__auto___51003;
if(cljs.core.chunked_seq_QMARK_(seq__50345_51005__$1)){
var c__5568__auto___51006 = cljs.core.chunk_first(seq__50345_51005__$1);
var G__51007 = cljs.core.chunk_rest(seq__50345_51005__$1);
var G__51008 = c__5568__auto___51006;
var G__51009 = cljs.core.count(c__5568__auto___51006);
var G__51010 = (0);
seq__50345_50986 = G__51007;
chunk__50346_50987 = G__51008;
count__50347_50988 = G__51009;
i__50348_50989 = G__51010;
continue;
} else {
var map__50403_51015 = cljs.core.first(seq__50345_51005__$1);
var map__50403_51016__$1 = cljs.core.__destructure_map(map__50403_51015);
var w_51017 = map__50403_51016__$1;
var msg_51018__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50403_51016__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50403_51016__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50403_51016__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50403_51016__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51021)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51019),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51020),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51018__$1)].join(''));


var G__51022 = cljs.core.next(seq__50345_51005__$1);
var G__51023 = null;
var G__51024 = (0);
var G__51025 = (0);
seq__50345_50986 = G__51022;
chunk__50346_50987 = G__51023;
count__50347_50988 = G__51024;
i__50348_50989 = G__51025;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50300_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50300_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50415){
var map__50416 = p__50415;
var map__50416__$1 = cljs.core.__destructure_map(map__50416);
var msg = map__50416__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__50417 = cljs.core.seq(updates);
var chunk__50419 = null;
var count__50420 = (0);
var i__50421 = (0);
while(true){
if((i__50421 < count__50420)){
var path = chunk__50419.cljs$core$IIndexed$_nth$arity$2(null,i__50421);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50662_51037 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50666_51038 = null;
var count__50667_51039 = (0);
var i__50668_51040 = (0);
while(true){
if((i__50668_51040 < count__50667_51039)){
var node_51041 = chunk__50666_51038.cljs$core$IIndexed$_nth$arity$2(null,i__50668_51040);
if(cljs.core.not(node_51041.shadow$old)){
var path_match_51044 = shadow.cljs.devtools.client.browser.match_paths(node_51041.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51044)){
var new_link_51046 = (function (){var G__50720 = node_51041.cloneNode(true);
G__50720.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51044),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50720;
})();
(node_51041.shadow$old = true);

(new_link_51046.onload = ((function (seq__50662_51037,chunk__50666_51038,count__50667_51039,i__50668_51040,seq__50417,chunk__50419,count__50420,i__50421,new_link_51046,path_match_51044,node_51041,path,map__50416,map__50416__$1,msg,updates,reload_info){
return (function (e){
var seq__50721_51049 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50723_51050 = null;
var count__50724_51051 = (0);
var i__50725_51052 = (0);
while(true){
if((i__50725_51052 < count__50724_51051)){
var map__50737_51057 = chunk__50723_51050.cljs$core$IIndexed$_nth$arity$2(null,i__50725_51052);
var map__50737_51058__$1 = cljs.core.__destructure_map(map__50737_51057);
var task_51059 = map__50737_51058__$1;
var fn_str_51060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50737_51058__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50737_51058__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51062 = goog.getObjectByName(fn_str_51060,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51061)].join(''));

(fn_obj_51062.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51062.cljs$core$IFn$_invoke$arity$2(path,new_link_51046) : fn_obj_51062.call(null,path,new_link_51046));


var G__51065 = seq__50721_51049;
var G__51066 = chunk__50723_51050;
var G__51067 = count__50724_51051;
var G__51068 = (i__50725_51052 + (1));
seq__50721_51049 = G__51065;
chunk__50723_51050 = G__51066;
count__50724_51051 = G__51067;
i__50725_51052 = G__51068;
continue;
} else {
var temp__5804__auto___51069 = cljs.core.seq(seq__50721_51049);
if(temp__5804__auto___51069){
var seq__50721_51071__$1 = temp__5804__auto___51069;
if(cljs.core.chunked_seq_QMARK_(seq__50721_51071__$1)){
var c__5568__auto___51072 = cljs.core.chunk_first(seq__50721_51071__$1);
var G__51074 = cljs.core.chunk_rest(seq__50721_51071__$1);
var G__51075 = c__5568__auto___51072;
var G__51076 = cljs.core.count(c__5568__auto___51072);
var G__51077 = (0);
seq__50721_51049 = G__51074;
chunk__50723_51050 = G__51075;
count__50724_51051 = G__51076;
i__50725_51052 = G__51077;
continue;
} else {
var map__50739_51079 = cljs.core.first(seq__50721_51071__$1);
var map__50739_51080__$1 = cljs.core.__destructure_map(map__50739_51079);
var task_51081 = map__50739_51080__$1;
var fn_str_51082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50739_51080__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50739_51080__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51084 = goog.getObjectByName(fn_str_51082,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51083)].join(''));

(fn_obj_51084.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51084.cljs$core$IFn$_invoke$arity$2(path,new_link_51046) : fn_obj_51084.call(null,path,new_link_51046));


var G__51085 = cljs.core.next(seq__50721_51071__$1);
var G__51086 = null;
var G__51087 = (0);
var G__51088 = (0);
seq__50721_51049 = G__51085;
chunk__50723_51050 = G__51086;
count__50724_51051 = G__51087;
i__50725_51052 = G__51088;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51041);
});})(seq__50662_51037,chunk__50666_51038,count__50667_51039,i__50668_51040,seq__50417,chunk__50419,count__50420,i__50421,new_link_51046,path_match_51044,node_51041,path,map__50416,map__50416__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51044], 0));

goog.dom.insertSiblingAfter(new_link_51046,node_51041);


var G__51091 = seq__50662_51037;
var G__51092 = chunk__50666_51038;
var G__51093 = count__50667_51039;
var G__51094 = (i__50668_51040 + (1));
seq__50662_51037 = G__51091;
chunk__50666_51038 = G__51092;
count__50667_51039 = G__51093;
i__50668_51040 = G__51094;
continue;
} else {
var G__51096 = seq__50662_51037;
var G__51097 = chunk__50666_51038;
var G__51098 = count__50667_51039;
var G__51099 = (i__50668_51040 + (1));
seq__50662_51037 = G__51096;
chunk__50666_51038 = G__51097;
count__50667_51039 = G__51098;
i__50668_51040 = G__51099;
continue;
}
} else {
var G__51103 = seq__50662_51037;
var G__51104 = chunk__50666_51038;
var G__51105 = count__50667_51039;
var G__51106 = (i__50668_51040 + (1));
seq__50662_51037 = G__51103;
chunk__50666_51038 = G__51104;
count__50667_51039 = G__51105;
i__50668_51040 = G__51106;
continue;
}
} else {
var temp__5804__auto___51107 = cljs.core.seq(seq__50662_51037);
if(temp__5804__auto___51107){
var seq__50662_51108__$1 = temp__5804__auto___51107;
if(cljs.core.chunked_seq_QMARK_(seq__50662_51108__$1)){
var c__5568__auto___51110 = cljs.core.chunk_first(seq__50662_51108__$1);
var G__51111 = cljs.core.chunk_rest(seq__50662_51108__$1);
var G__51112 = c__5568__auto___51110;
var G__51113 = cljs.core.count(c__5568__auto___51110);
var G__51114 = (0);
seq__50662_51037 = G__51111;
chunk__50666_51038 = G__51112;
count__50667_51039 = G__51113;
i__50668_51040 = G__51114;
continue;
} else {
var node_51116 = cljs.core.first(seq__50662_51108__$1);
if(cljs.core.not(node_51116.shadow$old)){
var path_match_51117 = shadow.cljs.devtools.client.browser.match_paths(node_51116.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51117)){
var new_link_51119 = (function (){var G__50740 = node_51116.cloneNode(true);
G__50740.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51117),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50740;
})();
(node_51116.shadow$old = true);

(new_link_51119.onload = ((function (seq__50662_51037,chunk__50666_51038,count__50667_51039,i__50668_51040,seq__50417,chunk__50419,count__50420,i__50421,new_link_51119,path_match_51117,node_51116,seq__50662_51108__$1,temp__5804__auto___51107,path,map__50416,map__50416__$1,msg,updates,reload_info){
return (function (e){
var seq__50741_51122 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50743_51123 = null;
var count__50744_51124 = (0);
var i__50745_51125 = (0);
while(true){
if((i__50745_51125 < count__50744_51124)){
var map__50760_51126 = chunk__50743_51123.cljs$core$IIndexed$_nth$arity$2(null,i__50745_51125);
var map__50760_51127__$1 = cljs.core.__destructure_map(map__50760_51126);
var task_51128 = map__50760_51127__$1;
var fn_str_51129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50760_51127__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50760_51127__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51131 = goog.getObjectByName(fn_str_51129,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51130)].join(''));

(fn_obj_51131.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51131.cljs$core$IFn$_invoke$arity$2(path,new_link_51119) : fn_obj_51131.call(null,path,new_link_51119));


var G__51132 = seq__50741_51122;
var G__51133 = chunk__50743_51123;
var G__51134 = count__50744_51124;
var G__51135 = (i__50745_51125 + (1));
seq__50741_51122 = G__51132;
chunk__50743_51123 = G__51133;
count__50744_51124 = G__51134;
i__50745_51125 = G__51135;
continue;
} else {
var temp__5804__auto___51136__$1 = cljs.core.seq(seq__50741_51122);
if(temp__5804__auto___51136__$1){
var seq__50741_51137__$1 = temp__5804__auto___51136__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50741_51137__$1)){
var c__5568__auto___51138 = cljs.core.chunk_first(seq__50741_51137__$1);
var G__51139 = cljs.core.chunk_rest(seq__50741_51137__$1);
var G__51140 = c__5568__auto___51138;
var G__51141 = cljs.core.count(c__5568__auto___51138);
var G__51142 = (0);
seq__50741_51122 = G__51139;
chunk__50743_51123 = G__51140;
count__50744_51124 = G__51141;
i__50745_51125 = G__51142;
continue;
} else {
var map__50765_51143 = cljs.core.first(seq__50741_51137__$1);
var map__50765_51144__$1 = cljs.core.__destructure_map(map__50765_51143);
var task_51145 = map__50765_51144__$1;
var fn_str_51146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50765_51144__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50765_51144__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51148 = goog.getObjectByName(fn_str_51146,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51147)].join(''));

(fn_obj_51148.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51148.cljs$core$IFn$_invoke$arity$2(path,new_link_51119) : fn_obj_51148.call(null,path,new_link_51119));


var G__51149 = cljs.core.next(seq__50741_51137__$1);
var G__51150 = null;
var G__51151 = (0);
var G__51152 = (0);
seq__50741_51122 = G__51149;
chunk__50743_51123 = G__51150;
count__50744_51124 = G__51151;
i__50745_51125 = G__51152;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51116);
});})(seq__50662_51037,chunk__50666_51038,count__50667_51039,i__50668_51040,seq__50417,chunk__50419,count__50420,i__50421,new_link_51119,path_match_51117,node_51116,seq__50662_51108__$1,temp__5804__auto___51107,path,map__50416,map__50416__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51117], 0));

goog.dom.insertSiblingAfter(new_link_51119,node_51116);


var G__51157 = cljs.core.next(seq__50662_51108__$1);
var G__51158 = null;
var G__51159 = (0);
var G__51160 = (0);
seq__50662_51037 = G__51157;
chunk__50666_51038 = G__51158;
count__50667_51039 = G__51159;
i__50668_51040 = G__51160;
continue;
} else {
var G__51161 = cljs.core.next(seq__50662_51108__$1);
var G__51162 = null;
var G__51163 = (0);
var G__51164 = (0);
seq__50662_51037 = G__51161;
chunk__50666_51038 = G__51162;
count__50667_51039 = G__51163;
i__50668_51040 = G__51164;
continue;
}
} else {
var G__51165 = cljs.core.next(seq__50662_51108__$1);
var G__51166 = null;
var G__51167 = (0);
var G__51168 = (0);
seq__50662_51037 = G__51165;
chunk__50666_51038 = G__51166;
count__50667_51039 = G__51167;
i__50668_51040 = G__51168;
continue;
}
}
} else {
}
}
break;
}


var G__51169 = seq__50417;
var G__51170 = chunk__50419;
var G__51171 = count__50420;
var G__51172 = (i__50421 + (1));
seq__50417 = G__51169;
chunk__50419 = G__51170;
count__50420 = G__51171;
i__50421 = G__51172;
continue;
} else {
var G__51173 = seq__50417;
var G__51174 = chunk__50419;
var G__51175 = count__50420;
var G__51176 = (i__50421 + (1));
seq__50417 = G__51173;
chunk__50419 = G__51174;
count__50420 = G__51175;
i__50421 = G__51176;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50417);
if(temp__5804__auto__){
var seq__50417__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50417__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50417__$1);
var G__51177 = cljs.core.chunk_rest(seq__50417__$1);
var G__51178 = c__5568__auto__;
var G__51179 = cljs.core.count(c__5568__auto__);
var G__51180 = (0);
seq__50417 = G__51177;
chunk__50419 = G__51178;
count__50420 = G__51179;
i__50421 = G__51180;
continue;
} else {
var path = cljs.core.first(seq__50417__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50768_51181 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50772_51182 = null;
var count__50773_51183 = (0);
var i__50774_51184 = (0);
while(true){
if((i__50774_51184 < count__50773_51183)){
var node_51185 = chunk__50772_51182.cljs$core$IIndexed$_nth$arity$2(null,i__50774_51184);
if(cljs.core.not(node_51185.shadow$old)){
var path_match_51186 = shadow.cljs.devtools.client.browser.match_paths(node_51185.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51186)){
var new_link_51188 = (function (){var G__50829 = node_51185.cloneNode(true);
G__50829.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51186),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50829;
})();
(node_51185.shadow$old = true);

(new_link_51188.onload = ((function (seq__50768_51181,chunk__50772_51182,count__50773_51183,i__50774_51184,seq__50417,chunk__50419,count__50420,i__50421,new_link_51188,path_match_51186,node_51185,path,seq__50417__$1,temp__5804__auto__,map__50416,map__50416__$1,msg,updates,reload_info){
return (function (e){
var seq__50832_51198 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50834_51199 = null;
var count__50835_51200 = (0);
var i__50836_51201 = (0);
while(true){
if((i__50836_51201 < count__50835_51200)){
var map__50842_51202 = chunk__50834_51199.cljs$core$IIndexed$_nth$arity$2(null,i__50836_51201);
var map__50842_51203__$1 = cljs.core.__destructure_map(map__50842_51202);
var task_51204 = map__50842_51203__$1;
var fn_str_51205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50842_51203__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50842_51203__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51207 = goog.getObjectByName(fn_str_51205,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51206)].join(''));

(fn_obj_51207.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51207.cljs$core$IFn$_invoke$arity$2(path,new_link_51188) : fn_obj_51207.call(null,path,new_link_51188));


var G__51210 = seq__50832_51198;
var G__51211 = chunk__50834_51199;
var G__51212 = count__50835_51200;
var G__51213 = (i__50836_51201 + (1));
seq__50832_51198 = G__51210;
chunk__50834_51199 = G__51211;
count__50835_51200 = G__51212;
i__50836_51201 = G__51213;
continue;
} else {
var temp__5804__auto___51214__$1 = cljs.core.seq(seq__50832_51198);
if(temp__5804__auto___51214__$1){
var seq__50832_51215__$1 = temp__5804__auto___51214__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50832_51215__$1)){
var c__5568__auto___51218 = cljs.core.chunk_first(seq__50832_51215__$1);
var G__51219 = cljs.core.chunk_rest(seq__50832_51215__$1);
var G__51220 = c__5568__auto___51218;
var G__51221 = cljs.core.count(c__5568__auto___51218);
var G__51222 = (0);
seq__50832_51198 = G__51219;
chunk__50834_51199 = G__51220;
count__50835_51200 = G__51221;
i__50836_51201 = G__51222;
continue;
} else {
var map__50844_51226 = cljs.core.first(seq__50832_51215__$1);
var map__50844_51227__$1 = cljs.core.__destructure_map(map__50844_51226);
var task_51228 = map__50844_51227__$1;
var fn_str_51229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50844_51227__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50844_51227__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51233 = goog.getObjectByName(fn_str_51229,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51230)].join(''));

(fn_obj_51233.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51233.cljs$core$IFn$_invoke$arity$2(path,new_link_51188) : fn_obj_51233.call(null,path,new_link_51188));


var G__51234 = cljs.core.next(seq__50832_51215__$1);
var G__51235 = null;
var G__51236 = (0);
var G__51237 = (0);
seq__50832_51198 = G__51234;
chunk__50834_51199 = G__51235;
count__50835_51200 = G__51236;
i__50836_51201 = G__51237;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51185);
});})(seq__50768_51181,chunk__50772_51182,count__50773_51183,i__50774_51184,seq__50417,chunk__50419,count__50420,i__50421,new_link_51188,path_match_51186,node_51185,path,seq__50417__$1,temp__5804__auto__,map__50416,map__50416__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51186], 0));

goog.dom.insertSiblingAfter(new_link_51188,node_51185);


var G__51243 = seq__50768_51181;
var G__51244 = chunk__50772_51182;
var G__51245 = count__50773_51183;
var G__51246 = (i__50774_51184 + (1));
seq__50768_51181 = G__51243;
chunk__50772_51182 = G__51244;
count__50773_51183 = G__51245;
i__50774_51184 = G__51246;
continue;
} else {
var G__51248 = seq__50768_51181;
var G__51249 = chunk__50772_51182;
var G__51250 = count__50773_51183;
var G__51251 = (i__50774_51184 + (1));
seq__50768_51181 = G__51248;
chunk__50772_51182 = G__51249;
count__50773_51183 = G__51250;
i__50774_51184 = G__51251;
continue;
}
} else {
var G__51252 = seq__50768_51181;
var G__51253 = chunk__50772_51182;
var G__51254 = count__50773_51183;
var G__51255 = (i__50774_51184 + (1));
seq__50768_51181 = G__51252;
chunk__50772_51182 = G__51253;
count__50773_51183 = G__51254;
i__50774_51184 = G__51255;
continue;
}
} else {
var temp__5804__auto___51256__$1 = cljs.core.seq(seq__50768_51181);
if(temp__5804__auto___51256__$1){
var seq__50768_51258__$1 = temp__5804__auto___51256__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50768_51258__$1)){
var c__5568__auto___51259 = cljs.core.chunk_first(seq__50768_51258__$1);
var G__51260 = cljs.core.chunk_rest(seq__50768_51258__$1);
var G__51261 = c__5568__auto___51259;
var G__51262 = cljs.core.count(c__5568__auto___51259);
var G__51263 = (0);
seq__50768_51181 = G__51260;
chunk__50772_51182 = G__51261;
count__50773_51183 = G__51262;
i__50774_51184 = G__51263;
continue;
} else {
var node_51264 = cljs.core.first(seq__50768_51258__$1);
if(cljs.core.not(node_51264.shadow$old)){
var path_match_51266 = shadow.cljs.devtools.client.browser.match_paths(node_51264.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51266)){
var new_link_51267 = (function (){var G__50845 = node_51264.cloneNode(true);
G__50845.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51266),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50845;
})();
(node_51264.shadow$old = true);

(new_link_51267.onload = ((function (seq__50768_51181,chunk__50772_51182,count__50773_51183,i__50774_51184,seq__50417,chunk__50419,count__50420,i__50421,new_link_51267,path_match_51266,node_51264,seq__50768_51258__$1,temp__5804__auto___51256__$1,path,seq__50417__$1,temp__5804__auto__,map__50416,map__50416__$1,msg,updates,reload_info){
return (function (e){
var seq__50848_51268 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50850_51269 = null;
var count__50851_51270 = (0);
var i__50852_51271 = (0);
while(true){
if((i__50852_51271 < count__50851_51270)){
var map__50859_51274 = chunk__50850_51269.cljs$core$IIndexed$_nth$arity$2(null,i__50852_51271);
var map__50859_51275__$1 = cljs.core.__destructure_map(map__50859_51274);
var task_51276 = map__50859_51275__$1;
var fn_str_51277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50859_51275__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50859_51275__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51280 = goog.getObjectByName(fn_str_51277,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51278)].join(''));

(fn_obj_51280.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51280.cljs$core$IFn$_invoke$arity$2(path,new_link_51267) : fn_obj_51280.call(null,path,new_link_51267));


var G__51282 = seq__50848_51268;
var G__51283 = chunk__50850_51269;
var G__51284 = count__50851_51270;
var G__51285 = (i__50852_51271 + (1));
seq__50848_51268 = G__51282;
chunk__50850_51269 = G__51283;
count__50851_51270 = G__51284;
i__50852_51271 = G__51285;
continue;
} else {
var temp__5804__auto___51286__$2 = cljs.core.seq(seq__50848_51268);
if(temp__5804__auto___51286__$2){
var seq__50848_51287__$1 = temp__5804__auto___51286__$2;
if(cljs.core.chunked_seq_QMARK_(seq__50848_51287__$1)){
var c__5568__auto___51288 = cljs.core.chunk_first(seq__50848_51287__$1);
var G__51289 = cljs.core.chunk_rest(seq__50848_51287__$1);
var G__51290 = c__5568__auto___51288;
var G__51291 = cljs.core.count(c__5568__auto___51288);
var G__51292 = (0);
seq__50848_51268 = G__51289;
chunk__50850_51269 = G__51290;
count__50851_51270 = G__51291;
i__50852_51271 = G__51292;
continue;
} else {
var map__50861_51293 = cljs.core.first(seq__50848_51287__$1);
var map__50861_51294__$1 = cljs.core.__destructure_map(map__50861_51293);
var task_51295 = map__50861_51294__$1;
var fn_str_51296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50861_51294__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50861_51294__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51298 = goog.getObjectByName(fn_str_51296,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51297)].join(''));

(fn_obj_51298.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51298.cljs$core$IFn$_invoke$arity$2(path,new_link_51267) : fn_obj_51298.call(null,path,new_link_51267));


var G__51300 = cljs.core.next(seq__50848_51287__$1);
var G__51301 = null;
var G__51302 = (0);
var G__51303 = (0);
seq__50848_51268 = G__51300;
chunk__50850_51269 = G__51301;
count__50851_51270 = G__51302;
i__50852_51271 = G__51303;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51264);
});})(seq__50768_51181,chunk__50772_51182,count__50773_51183,i__50774_51184,seq__50417,chunk__50419,count__50420,i__50421,new_link_51267,path_match_51266,node_51264,seq__50768_51258__$1,temp__5804__auto___51256__$1,path,seq__50417__$1,temp__5804__auto__,map__50416,map__50416__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51266], 0));

goog.dom.insertSiblingAfter(new_link_51267,node_51264);


var G__51307 = cljs.core.next(seq__50768_51258__$1);
var G__51308 = null;
var G__51309 = (0);
var G__51310 = (0);
seq__50768_51181 = G__51307;
chunk__50772_51182 = G__51308;
count__50773_51183 = G__51309;
i__50774_51184 = G__51310;
continue;
} else {
var G__51311 = cljs.core.next(seq__50768_51258__$1);
var G__51312 = null;
var G__51313 = (0);
var G__51314 = (0);
seq__50768_51181 = G__51311;
chunk__50772_51182 = G__51312;
count__50773_51183 = G__51313;
i__50774_51184 = G__51314;
continue;
}
} else {
var G__51315 = cljs.core.next(seq__50768_51258__$1);
var G__51316 = null;
var G__51317 = (0);
var G__51318 = (0);
seq__50768_51181 = G__51315;
chunk__50772_51182 = G__51316;
count__50773_51183 = G__51317;
i__50774_51184 = G__51318;
continue;
}
}
} else {
}
}
break;
}


var G__51319 = cljs.core.next(seq__50417__$1);
var G__51320 = null;
var G__51321 = (0);
var G__51322 = (0);
seq__50417 = G__51319;
chunk__50419 = G__51320;
count__50420 = G__51321;
i__50421 = G__51322;
continue;
} else {
var G__51323 = cljs.core.next(seq__50417__$1);
var G__51324 = null;
var G__51325 = (0);
var G__51326 = (0);
seq__50417 = G__51323;
chunk__50419 = G__51324;
count__50420 = G__51325;
i__50421 = G__51326;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50875){
var map__50876 = p__50875;
var map__50876__$1 = cljs.core.__destructure_map(map__50876);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50876__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50896){
var map__50897 = p__50896;
var map__50897__$1 = cljs.core.__destructure_map(map__50897);
var _ = map__50897__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50897__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50898,done,error){
var map__50899 = p__50898;
var map__50899__$1 = cljs.core.__destructure_map(map__50899);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50899__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50903,done,error){
var map__50904 = p__50903;
var map__50904__$1 = cljs.core.__destructure_map(map__50904);
var msg = map__50904__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50908){
var map__50909 = p__50908;
var map__50909__$1 = cljs.core.__destructure_map(map__50909);
var src = map__50909__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50910 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50910) : done.call(null,G__50910));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50914){
var map__50915 = p__50914;
var map__50915__$1 = cljs.core.__destructure_map(map__50915);
var msg__$1 = map__50915__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50915__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50916){var ex = e50916;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50917){
var map__50918 = p__50917;
var map__50918__$1 = cljs.core.__destructure_map(map__50918);
var env = map__50918__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50918__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50927){
var map__50928 = p__50927;
var map__50928__$1 = cljs.core.__destructure_map(map__50928);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50928__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50928__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__50929){
var map__50930 = p__50929;
var map__50930__$1 = cljs.core.__destructure_map(map__50930);
var svc = map__50930__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50930__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
