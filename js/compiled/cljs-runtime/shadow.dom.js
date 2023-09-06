goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48736 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48736(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48737 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48737(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47811 = coll;
var G__47812 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47811,G__47812) : shadow.dom.lazy_native_coll_seq.call(null,G__47811,G__47812));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47852 = arguments.length;
switch (G__47852) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47859 = arguments.length;
switch (G__47859) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47868 = arguments.length;
switch (G__47868) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47878 = arguments.length;
switch (G__47878) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47891 = arguments.length;
switch (G__47891) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47905 = arguments.length;
switch (G__47905) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47931){if((e47931 instanceof Object)){
var e = e47931;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47931;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47954 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47955 = null;
var count__47956 = (0);
var i__47957 = (0);
while(true){
if((i__47957 < count__47956)){
var el = chunk__47955.cljs$core$IIndexed$_nth$arity$2(null,i__47957);
var handler_48744__$1 = ((function (seq__47954,chunk__47955,count__47956,i__47957,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47954,chunk__47955,count__47956,i__47957,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48744__$1);


var G__48745 = seq__47954;
var G__48746 = chunk__47955;
var G__48747 = count__47956;
var G__48748 = (i__47957 + (1));
seq__47954 = G__48745;
chunk__47955 = G__48746;
count__47956 = G__48747;
i__47957 = G__48748;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47954);
if(temp__5804__auto__){
var seq__47954__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47954__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47954__$1);
var G__48749 = cljs.core.chunk_rest(seq__47954__$1);
var G__48750 = c__5568__auto__;
var G__48751 = cljs.core.count(c__5568__auto__);
var G__48752 = (0);
seq__47954 = G__48749;
chunk__47955 = G__48750;
count__47956 = G__48751;
i__47957 = G__48752;
continue;
} else {
var el = cljs.core.first(seq__47954__$1);
var handler_48753__$1 = ((function (seq__47954,chunk__47955,count__47956,i__47957,el,seq__47954__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47954,chunk__47955,count__47956,i__47957,el,seq__47954__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48753__$1);


var G__48754 = cljs.core.next(seq__47954__$1);
var G__48755 = null;
var G__48756 = (0);
var G__48757 = (0);
seq__47954 = G__48754;
chunk__47955 = G__48755;
count__47956 = G__48756;
i__47957 = G__48757;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47994 = arguments.length;
switch (G__47994) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48014 = cljs.core.seq(events);
var chunk__48015 = null;
var count__48016 = (0);
var i__48017 = (0);
while(true){
if((i__48017 < count__48016)){
var vec__48027 = chunk__48015.cljs$core$IIndexed$_nth$arity$2(null,i__48017);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48027,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48759 = seq__48014;
var G__48760 = chunk__48015;
var G__48761 = count__48016;
var G__48762 = (i__48017 + (1));
seq__48014 = G__48759;
chunk__48015 = G__48760;
count__48016 = G__48761;
i__48017 = G__48762;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48014);
if(temp__5804__auto__){
var seq__48014__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48014__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48014__$1);
var G__48763 = cljs.core.chunk_rest(seq__48014__$1);
var G__48764 = c__5568__auto__;
var G__48765 = cljs.core.count(c__5568__auto__);
var G__48766 = (0);
seq__48014 = G__48763;
chunk__48015 = G__48764;
count__48016 = G__48765;
i__48017 = G__48766;
continue;
} else {
var vec__48031 = cljs.core.first(seq__48014__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48031,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48767 = cljs.core.next(seq__48014__$1);
var G__48768 = null;
var G__48769 = (0);
var G__48770 = (0);
seq__48014 = G__48767;
chunk__48015 = G__48768;
count__48016 = G__48769;
i__48017 = G__48770;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48036 = cljs.core.seq(styles);
var chunk__48037 = null;
var count__48038 = (0);
var i__48039 = (0);
while(true){
if((i__48039 < count__48038)){
var vec__48058 = chunk__48037.cljs$core$IIndexed$_nth$arity$2(null,i__48039);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48058,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48058,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48771 = seq__48036;
var G__48772 = chunk__48037;
var G__48773 = count__48038;
var G__48774 = (i__48039 + (1));
seq__48036 = G__48771;
chunk__48037 = G__48772;
count__48038 = G__48773;
i__48039 = G__48774;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48036);
if(temp__5804__auto__){
var seq__48036__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48036__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48036__$1);
var G__48775 = cljs.core.chunk_rest(seq__48036__$1);
var G__48776 = c__5568__auto__;
var G__48777 = cljs.core.count(c__5568__auto__);
var G__48778 = (0);
seq__48036 = G__48775;
chunk__48037 = G__48776;
count__48038 = G__48777;
i__48039 = G__48778;
continue;
} else {
var vec__48063 = cljs.core.first(seq__48036__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48063,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48063,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48779 = cljs.core.next(seq__48036__$1);
var G__48780 = null;
var G__48781 = (0);
var G__48782 = (0);
seq__48036 = G__48779;
chunk__48037 = G__48780;
count__48038 = G__48781;
i__48039 = G__48782;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48071_48783 = key;
var G__48071_48784__$1 = (((G__48071_48783 instanceof cljs.core.Keyword))?G__48071_48783.fqn:null);
switch (G__48071_48784__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48786 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_48786,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_48786,"aria-");
}
})())){
el.setAttribute(ks_48786,value);
} else {
(el[ks_48786] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48100){
var map__48101 = p__48100;
var map__48101__$1 = cljs.core.__destructure_map(map__48101);
var props = map__48101__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48101__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48103 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48103,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48103,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48103,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48108 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48108,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48108;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48114 = arguments.length;
switch (G__48114) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48124){
var vec__48127 = p__48124;
var seq__48128 = cljs.core.seq(vec__48127);
var first__48129 = cljs.core.first(seq__48128);
var seq__48128__$1 = cljs.core.next(seq__48128);
var nn = first__48129;
var first__48129__$1 = cljs.core.first(seq__48128__$1);
var seq__48128__$2 = cljs.core.next(seq__48128__$1);
var np = first__48129__$1;
var nc = seq__48128__$2;
var node = vec__48127;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48132 = nn;
var G__48133 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48132,G__48133) : create_fn.call(null,G__48132,G__48133));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48134 = nn;
var G__48135 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48134,G__48135) : create_fn.call(null,G__48134,G__48135));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48140 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48140,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48140,(1),null);
var seq__48143_48792 = cljs.core.seq(node_children);
var chunk__48144_48793 = null;
var count__48145_48794 = (0);
var i__48146_48795 = (0);
while(true){
if((i__48146_48795 < count__48145_48794)){
var child_struct_48796 = chunk__48144_48793.cljs$core$IIndexed$_nth$arity$2(null,i__48146_48795);
var children_48797 = shadow.dom.dom_node(child_struct_48796);
if(cljs.core.seq_QMARK_(children_48797)){
var seq__48175_48798 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48797));
var chunk__48177_48799 = null;
var count__48178_48800 = (0);
var i__48179_48801 = (0);
while(true){
if((i__48179_48801 < count__48178_48800)){
var child_48802 = chunk__48177_48799.cljs$core$IIndexed$_nth$arity$2(null,i__48179_48801);
if(cljs.core.truth_(child_48802)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48802);


var G__48803 = seq__48175_48798;
var G__48804 = chunk__48177_48799;
var G__48805 = count__48178_48800;
var G__48806 = (i__48179_48801 + (1));
seq__48175_48798 = G__48803;
chunk__48177_48799 = G__48804;
count__48178_48800 = G__48805;
i__48179_48801 = G__48806;
continue;
} else {
var G__48807 = seq__48175_48798;
var G__48808 = chunk__48177_48799;
var G__48809 = count__48178_48800;
var G__48810 = (i__48179_48801 + (1));
seq__48175_48798 = G__48807;
chunk__48177_48799 = G__48808;
count__48178_48800 = G__48809;
i__48179_48801 = G__48810;
continue;
}
} else {
var temp__5804__auto___48811 = cljs.core.seq(seq__48175_48798);
if(temp__5804__auto___48811){
var seq__48175_48812__$1 = temp__5804__auto___48811;
if(cljs.core.chunked_seq_QMARK_(seq__48175_48812__$1)){
var c__5568__auto___48813 = cljs.core.chunk_first(seq__48175_48812__$1);
var G__48814 = cljs.core.chunk_rest(seq__48175_48812__$1);
var G__48815 = c__5568__auto___48813;
var G__48816 = cljs.core.count(c__5568__auto___48813);
var G__48817 = (0);
seq__48175_48798 = G__48814;
chunk__48177_48799 = G__48815;
count__48178_48800 = G__48816;
i__48179_48801 = G__48817;
continue;
} else {
var child_48818 = cljs.core.first(seq__48175_48812__$1);
if(cljs.core.truth_(child_48818)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48818);


var G__48820 = cljs.core.next(seq__48175_48812__$1);
var G__48821 = null;
var G__48822 = (0);
var G__48823 = (0);
seq__48175_48798 = G__48820;
chunk__48177_48799 = G__48821;
count__48178_48800 = G__48822;
i__48179_48801 = G__48823;
continue;
} else {
var G__48824 = cljs.core.next(seq__48175_48812__$1);
var G__48825 = null;
var G__48826 = (0);
var G__48827 = (0);
seq__48175_48798 = G__48824;
chunk__48177_48799 = G__48825;
count__48178_48800 = G__48826;
i__48179_48801 = G__48827;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48797);
}


var G__48828 = seq__48143_48792;
var G__48829 = chunk__48144_48793;
var G__48830 = count__48145_48794;
var G__48831 = (i__48146_48795 + (1));
seq__48143_48792 = G__48828;
chunk__48144_48793 = G__48829;
count__48145_48794 = G__48830;
i__48146_48795 = G__48831;
continue;
} else {
var temp__5804__auto___48833 = cljs.core.seq(seq__48143_48792);
if(temp__5804__auto___48833){
var seq__48143_48834__$1 = temp__5804__auto___48833;
if(cljs.core.chunked_seq_QMARK_(seq__48143_48834__$1)){
var c__5568__auto___48835 = cljs.core.chunk_first(seq__48143_48834__$1);
var G__48836 = cljs.core.chunk_rest(seq__48143_48834__$1);
var G__48837 = c__5568__auto___48835;
var G__48838 = cljs.core.count(c__5568__auto___48835);
var G__48839 = (0);
seq__48143_48792 = G__48836;
chunk__48144_48793 = G__48837;
count__48145_48794 = G__48838;
i__48146_48795 = G__48839;
continue;
} else {
var child_struct_48840 = cljs.core.first(seq__48143_48834__$1);
var children_48841 = shadow.dom.dom_node(child_struct_48840);
if(cljs.core.seq_QMARK_(children_48841)){
var seq__48193_48842 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48841));
var chunk__48195_48843 = null;
var count__48196_48844 = (0);
var i__48197_48845 = (0);
while(true){
if((i__48197_48845 < count__48196_48844)){
var child_48846 = chunk__48195_48843.cljs$core$IIndexed$_nth$arity$2(null,i__48197_48845);
if(cljs.core.truth_(child_48846)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48846);


var G__48847 = seq__48193_48842;
var G__48848 = chunk__48195_48843;
var G__48849 = count__48196_48844;
var G__48850 = (i__48197_48845 + (1));
seq__48193_48842 = G__48847;
chunk__48195_48843 = G__48848;
count__48196_48844 = G__48849;
i__48197_48845 = G__48850;
continue;
} else {
var G__48851 = seq__48193_48842;
var G__48852 = chunk__48195_48843;
var G__48853 = count__48196_48844;
var G__48854 = (i__48197_48845 + (1));
seq__48193_48842 = G__48851;
chunk__48195_48843 = G__48852;
count__48196_48844 = G__48853;
i__48197_48845 = G__48854;
continue;
}
} else {
var temp__5804__auto___48855__$1 = cljs.core.seq(seq__48193_48842);
if(temp__5804__auto___48855__$1){
var seq__48193_48856__$1 = temp__5804__auto___48855__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48193_48856__$1)){
var c__5568__auto___48857 = cljs.core.chunk_first(seq__48193_48856__$1);
var G__48858 = cljs.core.chunk_rest(seq__48193_48856__$1);
var G__48859 = c__5568__auto___48857;
var G__48860 = cljs.core.count(c__5568__auto___48857);
var G__48861 = (0);
seq__48193_48842 = G__48858;
chunk__48195_48843 = G__48859;
count__48196_48844 = G__48860;
i__48197_48845 = G__48861;
continue;
} else {
var child_48862 = cljs.core.first(seq__48193_48856__$1);
if(cljs.core.truth_(child_48862)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48862);


var G__48863 = cljs.core.next(seq__48193_48856__$1);
var G__48864 = null;
var G__48865 = (0);
var G__48866 = (0);
seq__48193_48842 = G__48863;
chunk__48195_48843 = G__48864;
count__48196_48844 = G__48865;
i__48197_48845 = G__48866;
continue;
} else {
var G__48867 = cljs.core.next(seq__48193_48856__$1);
var G__48868 = null;
var G__48869 = (0);
var G__48870 = (0);
seq__48193_48842 = G__48867;
chunk__48195_48843 = G__48868;
count__48196_48844 = G__48869;
i__48197_48845 = G__48870;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48841);
}


var G__48871 = cljs.core.next(seq__48143_48834__$1);
var G__48872 = null;
var G__48873 = (0);
var G__48874 = (0);
seq__48143_48792 = G__48871;
chunk__48144_48793 = G__48872;
count__48145_48794 = G__48873;
i__48146_48795 = G__48874;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48229 = cljs.core.seq(node);
var chunk__48230 = null;
var count__48231 = (0);
var i__48232 = (0);
while(true){
if((i__48232 < count__48231)){
var n = chunk__48230.cljs$core$IIndexed$_nth$arity$2(null,i__48232);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48877 = seq__48229;
var G__48878 = chunk__48230;
var G__48879 = count__48231;
var G__48880 = (i__48232 + (1));
seq__48229 = G__48877;
chunk__48230 = G__48878;
count__48231 = G__48879;
i__48232 = G__48880;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48229);
if(temp__5804__auto__){
var seq__48229__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48229__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48229__$1);
var G__48881 = cljs.core.chunk_rest(seq__48229__$1);
var G__48882 = c__5568__auto__;
var G__48883 = cljs.core.count(c__5568__auto__);
var G__48884 = (0);
seq__48229 = G__48881;
chunk__48230 = G__48882;
count__48231 = G__48883;
i__48232 = G__48884;
continue;
} else {
var n = cljs.core.first(seq__48229__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48885 = cljs.core.next(seq__48229__$1);
var G__48886 = null;
var G__48887 = (0);
var G__48888 = (0);
seq__48229 = G__48885;
chunk__48230 = G__48886;
count__48231 = G__48887;
i__48232 = G__48888;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48249 = arguments.length;
switch (G__48249) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48254 = arguments.length;
switch (G__48254) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48279 = arguments.length;
switch (G__48279) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48898 = arguments.length;
var i__5770__auto___48899 = (0);
while(true){
if((i__5770__auto___48899 < len__5769__auto___48898)){
args__5775__auto__.push((arguments[i__5770__auto___48899]));

var G__48900 = (i__5770__auto___48899 + (1));
i__5770__auto___48899 = G__48900;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48302_48901 = cljs.core.seq(nodes);
var chunk__48303_48902 = null;
var count__48304_48903 = (0);
var i__48305_48904 = (0);
while(true){
if((i__48305_48904 < count__48304_48903)){
var node_48909 = chunk__48303_48902.cljs$core$IIndexed$_nth$arity$2(null,i__48305_48904);
fragment.appendChild(shadow.dom._to_dom(node_48909));


var G__48910 = seq__48302_48901;
var G__48911 = chunk__48303_48902;
var G__48912 = count__48304_48903;
var G__48913 = (i__48305_48904 + (1));
seq__48302_48901 = G__48910;
chunk__48303_48902 = G__48911;
count__48304_48903 = G__48912;
i__48305_48904 = G__48913;
continue;
} else {
var temp__5804__auto___48914 = cljs.core.seq(seq__48302_48901);
if(temp__5804__auto___48914){
var seq__48302_48915__$1 = temp__5804__auto___48914;
if(cljs.core.chunked_seq_QMARK_(seq__48302_48915__$1)){
var c__5568__auto___48916 = cljs.core.chunk_first(seq__48302_48915__$1);
var G__48917 = cljs.core.chunk_rest(seq__48302_48915__$1);
var G__48918 = c__5568__auto___48916;
var G__48919 = cljs.core.count(c__5568__auto___48916);
var G__48920 = (0);
seq__48302_48901 = G__48917;
chunk__48303_48902 = G__48918;
count__48304_48903 = G__48919;
i__48305_48904 = G__48920;
continue;
} else {
var node_48924 = cljs.core.first(seq__48302_48915__$1);
fragment.appendChild(shadow.dom._to_dom(node_48924));


var G__48925 = cljs.core.next(seq__48302_48915__$1);
var G__48926 = null;
var G__48927 = (0);
var G__48928 = (0);
seq__48302_48901 = G__48925;
chunk__48303_48902 = G__48926;
count__48304_48903 = G__48927;
i__48305_48904 = G__48928;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48300){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48300));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48318_48929 = cljs.core.seq(scripts);
var chunk__48320_48930 = null;
var count__48321_48931 = (0);
var i__48322_48932 = (0);
while(true){
if((i__48322_48932 < count__48321_48931)){
var vec__48339_48933 = chunk__48320_48930.cljs$core$IIndexed$_nth$arity$2(null,i__48322_48932);
var script_tag_48934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48339_48933,(0),null);
var script_body_48935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48339_48933,(1),null);
eval(script_body_48935);


var G__48939 = seq__48318_48929;
var G__48940 = chunk__48320_48930;
var G__48941 = count__48321_48931;
var G__48942 = (i__48322_48932 + (1));
seq__48318_48929 = G__48939;
chunk__48320_48930 = G__48940;
count__48321_48931 = G__48941;
i__48322_48932 = G__48942;
continue;
} else {
var temp__5804__auto___48943 = cljs.core.seq(seq__48318_48929);
if(temp__5804__auto___48943){
var seq__48318_48944__$1 = temp__5804__auto___48943;
if(cljs.core.chunked_seq_QMARK_(seq__48318_48944__$1)){
var c__5568__auto___48945 = cljs.core.chunk_first(seq__48318_48944__$1);
var G__48946 = cljs.core.chunk_rest(seq__48318_48944__$1);
var G__48947 = c__5568__auto___48945;
var G__48948 = cljs.core.count(c__5568__auto___48945);
var G__48949 = (0);
seq__48318_48929 = G__48946;
chunk__48320_48930 = G__48947;
count__48321_48931 = G__48948;
i__48322_48932 = G__48949;
continue;
} else {
var vec__48346_48950 = cljs.core.first(seq__48318_48944__$1);
var script_tag_48951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48346_48950,(0),null);
var script_body_48952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48346_48950,(1),null);
eval(script_body_48952);


var G__48956 = cljs.core.next(seq__48318_48944__$1);
var G__48957 = null;
var G__48958 = (0);
var G__48959 = (0);
seq__48318_48929 = G__48956;
chunk__48320_48930 = G__48957;
count__48321_48931 = G__48958;
i__48322_48932 = G__48959;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48352){
var vec__48353 = p__48352;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48353,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48353,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48368 = arguments.length;
switch (G__48368) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48384 = cljs.core.seq(style_keys);
var chunk__48385 = null;
var count__48386 = (0);
var i__48387 = (0);
while(true){
if((i__48387 < count__48386)){
var it = chunk__48385.cljs$core$IIndexed$_nth$arity$2(null,i__48387);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48966 = seq__48384;
var G__48967 = chunk__48385;
var G__48968 = count__48386;
var G__48969 = (i__48387 + (1));
seq__48384 = G__48966;
chunk__48385 = G__48967;
count__48386 = G__48968;
i__48387 = G__48969;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48384);
if(temp__5804__auto__){
var seq__48384__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48384__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48384__$1);
var G__48970 = cljs.core.chunk_rest(seq__48384__$1);
var G__48971 = c__5568__auto__;
var G__48972 = cljs.core.count(c__5568__auto__);
var G__48973 = (0);
seq__48384 = G__48970;
chunk__48385 = G__48971;
count__48386 = G__48972;
i__48387 = G__48973;
continue;
} else {
var it = cljs.core.first(seq__48384__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48976 = cljs.core.next(seq__48384__$1);
var G__48977 = null;
var G__48978 = (0);
var G__48979 = (0);
seq__48384 = G__48976;
chunk__48385 = G__48977;
count__48386 = G__48978;
i__48387 = G__48979;
continue;
}
} else {
return null;
}
}
break;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48403,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48420 = k48403;
var G__48420__$1 = (((G__48420 instanceof cljs.core.Keyword))?G__48420.fqn:null);
switch (G__48420__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48403,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48422){
var vec__48423 = p__48422;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48423,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48423,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48402){
var self__ = this;
var G__48402__$1 = this;
return (new cljs.core.RecordIter((0),G__48402__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48404,other48405){
var self__ = this;
var this48404__$1 = this;
return (((!((other48405 == null)))) && ((((this48404__$1.constructor === other48405.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48404__$1.x,other48405.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48404__$1.y,other48405.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48404__$1.__extmap,other48405.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48403){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48457 = k48403;
var G__48457__$1 = (((G__48457 instanceof cljs.core.Keyword))?G__48457.fqn:null);
switch (G__48457__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48403);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48402){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48462 = cljs.core.keyword_identical_QMARK_;
var expr__48463 = k__5352__auto__;
if(cljs.core.truth_((pred__48462.cljs$core$IFn$_invoke$arity$2 ? pred__48462.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__48463) : pred__48462.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__48463)))){
return (new shadow.dom.Coordinate(G__48402,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48462.cljs$core$IFn$_invoke$arity$2 ? pred__48462.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__48463) : pred__48462.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__48463)))){
return (new shadow.dom.Coordinate(self__.x,G__48402,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48402),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48402){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48402,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48407){
var extmap__5385__auto__ = (function (){var G__48495 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48407,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48407)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48495);
} else {
return G__48495;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48407),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48407),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48521,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48547 = k48521;
var G__48547__$1 = (((G__48547 instanceof cljs.core.Keyword))?G__48547.fqn:null);
switch (G__48547__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48521,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48551){
var vec__48553 = p__48551;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48553,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48553,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48520){
var self__ = this;
var G__48520__$1 = this;
return (new cljs.core.RecordIter((0),G__48520__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48522,other48523){
var self__ = this;
var this48522__$1 = this;
return (((!((other48523 == null)))) && ((((this48522__$1.constructor === other48523.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48522__$1.w,other48523.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48522__$1.h,other48523.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48522__$1.__extmap,other48523.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48521){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48585 = k48521;
var G__48585__$1 = (((G__48585 instanceof cljs.core.Keyword))?G__48585.fqn:null);
switch (G__48585__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48521);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48520){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48594 = cljs.core.keyword_identical_QMARK_;
var expr__48595 = k__5352__auto__;
if(cljs.core.truth_((pred__48594.cljs$core$IFn$_invoke$arity$2 ? pred__48594.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48595) : pred__48594.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48595)))){
return (new shadow.dom.Size(G__48520,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48594.cljs$core$IFn$_invoke$arity$2 ? pred__48594.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48595) : pred__48594.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48595)))){
return (new shadow.dom.Size(self__.w,G__48520,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48520),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48520){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48520,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48526){
var extmap__5385__auto__ = (function (){var G__48611 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48526,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48526)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48611);
} else {
return G__48611;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48526),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48526),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__49004 = (i + (1));
var G__49005 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49004;
ret = G__49005;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48633){
var vec__48634 = p__48633;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48634,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48634,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48642 = arguments.length;
switch (G__48642) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49007 = ps;
var G__49008 = (i + (1));
el__$1 = G__49007;
i = G__49008;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48659 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48659,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48659,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48659,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48662_49016 = cljs.core.seq(props);
var chunk__48664_49017 = null;
var count__48665_49018 = (0);
var i__48666_49019 = (0);
while(true){
if((i__48666_49019 < count__48665_49018)){
var vec__48675_49020 = chunk__48664_49017.cljs$core$IIndexed$_nth$arity$2(null,i__48666_49019);
var k_49021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48675_49020,(0),null);
var v_49022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48675_49020,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_49021);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49021),v_49022);


var G__49023 = seq__48662_49016;
var G__49024 = chunk__48664_49017;
var G__49025 = count__48665_49018;
var G__49026 = (i__48666_49019 + (1));
seq__48662_49016 = G__49023;
chunk__48664_49017 = G__49024;
count__48665_49018 = G__49025;
i__48666_49019 = G__49026;
continue;
} else {
var temp__5804__auto___49027 = cljs.core.seq(seq__48662_49016);
if(temp__5804__auto___49027){
var seq__48662_49028__$1 = temp__5804__auto___49027;
if(cljs.core.chunked_seq_QMARK_(seq__48662_49028__$1)){
var c__5568__auto___49029 = cljs.core.chunk_first(seq__48662_49028__$1);
var G__49030 = cljs.core.chunk_rest(seq__48662_49028__$1);
var G__49031 = c__5568__auto___49029;
var G__49032 = cljs.core.count(c__5568__auto___49029);
var G__49033 = (0);
seq__48662_49016 = G__49030;
chunk__48664_49017 = G__49031;
count__48665_49018 = G__49032;
i__48666_49019 = G__49033;
continue;
} else {
var vec__48678_49034 = cljs.core.first(seq__48662_49028__$1);
var k_49035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48678_49034,(0),null);
var v_49036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48678_49034,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_49035);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49035),v_49036);


var G__49037 = cljs.core.next(seq__48662_49028__$1);
var G__49038 = null;
var G__49039 = (0);
var G__49040 = (0);
seq__48662_49016 = G__49037;
chunk__48664_49017 = G__49038;
count__48665_49018 = G__49039;
i__48666_49019 = G__49040;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48682 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48682,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48682,(1),null);
var seq__48685_49041 = cljs.core.seq(node_children);
var chunk__48687_49042 = null;
var count__48688_49043 = (0);
var i__48689_49044 = (0);
while(true){
if((i__48689_49044 < count__48688_49043)){
var child_struct_49048 = chunk__48687_49042.cljs$core$IIndexed$_nth$arity$2(null,i__48689_49044);
if((!((child_struct_49048 == null)))){
if(typeof child_struct_49048 === 'string'){
var text_49049 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49049),child_struct_49048].join(''));
} else {
var children_49050 = shadow.dom.svg_node(child_struct_49048);
if(cljs.core.seq_QMARK_(children_49050)){
var seq__48703_49051 = cljs.core.seq(children_49050);
var chunk__48705_49052 = null;
var count__48706_49053 = (0);
var i__48707_49054 = (0);
while(true){
if((i__48707_49054 < count__48706_49053)){
var child_49055 = chunk__48705_49052.cljs$core$IIndexed$_nth$arity$2(null,i__48707_49054);
if(cljs.core.truth_(child_49055)){
node.appendChild(child_49055);


var G__49056 = seq__48703_49051;
var G__49057 = chunk__48705_49052;
var G__49058 = count__48706_49053;
var G__49059 = (i__48707_49054 + (1));
seq__48703_49051 = G__49056;
chunk__48705_49052 = G__49057;
count__48706_49053 = G__49058;
i__48707_49054 = G__49059;
continue;
} else {
var G__49060 = seq__48703_49051;
var G__49061 = chunk__48705_49052;
var G__49062 = count__48706_49053;
var G__49063 = (i__48707_49054 + (1));
seq__48703_49051 = G__49060;
chunk__48705_49052 = G__49061;
count__48706_49053 = G__49062;
i__48707_49054 = G__49063;
continue;
}
} else {
var temp__5804__auto___49064 = cljs.core.seq(seq__48703_49051);
if(temp__5804__auto___49064){
var seq__48703_49065__$1 = temp__5804__auto___49064;
if(cljs.core.chunked_seq_QMARK_(seq__48703_49065__$1)){
var c__5568__auto___49066 = cljs.core.chunk_first(seq__48703_49065__$1);
var G__49067 = cljs.core.chunk_rest(seq__48703_49065__$1);
var G__49068 = c__5568__auto___49066;
var G__49069 = cljs.core.count(c__5568__auto___49066);
var G__49070 = (0);
seq__48703_49051 = G__49067;
chunk__48705_49052 = G__49068;
count__48706_49053 = G__49069;
i__48707_49054 = G__49070;
continue;
} else {
var child_49071 = cljs.core.first(seq__48703_49065__$1);
if(cljs.core.truth_(child_49071)){
node.appendChild(child_49071);


var G__49073 = cljs.core.next(seq__48703_49065__$1);
var G__49074 = null;
var G__49075 = (0);
var G__49076 = (0);
seq__48703_49051 = G__49073;
chunk__48705_49052 = G__49074;
count__48706_49053 = G__49075;
i__48707_49054 = G__49076;
continue;
} else {
var G__49078 = cljs.core.next(seq__48703_49065__$1);
var G__49079 = null;
var G__49080 = (0);
var G__49081 = (0);
seq__48703_49051 = G__49078;
chunk__48705_49052 = G__49079;
count__48706_49053 = G__49080;
i__48707_49054 = G__49081;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49050);
}
}


var G__49082 = seq__48685_49041;
var G__49083 = chunk__48687_49042;
var G__49084 = count__48688_49043;
var G__49085 = (i__48689_49044 + (1));
seq__48685_49041 = G__49082;
chunk__48687_49042 = G__49083;
count__48688_49043 = G__49084;
i__48689_49044 = G__49085;
continue;
} else {
var G__49086 = seq__48685_49041;
var G__49087 = chunk__48687_49042;
var G__49088 = count__48688_49043;
var G__49089 = (i__48689_49044 + (1));
seq__48685_49041 = G__49086;
chunk__48687_49042 = G__49087;
count__48688_49043 = G__49088;
i__48689_49044 = G__49089;
continue;
}
} else {
var temp__5804__auto___49090 = cljs.core.seq(seq__48685_49041);
if(temp__5804__auto___49090){
var seq__48685_49091__$1 = temp__5804__auto___49090;
if(cljs.core.chunked_seq_QMARK_(seq__48685_49091__$1)){
var c__5568__auto___49092 = cljs.core.chunk_first(seq__48685_49091__$1);
var G__49093 = cljs.core.chunk_rest(seq__48685_49091__$1);
var G__49094 = c__5568__auto___49092;
var G__49095 = cljs.core.count(c__5568__auto___49092);
var G__49096 = (0);
seq__48685_49041 = G__49093;
chunk__48687_49042 = G__49094;
count__48688_49043 = G__49095;
i__48689_49044 = G__49096;
continue;
} else {
var child_struct_49098 = cljs.core.first(seq__48685_49091__$1);
if((!((child_struct_49098 == null)))){
if(typeof child_struct_49098 === 'string'){
var text_49106 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49106),child_struct_49098].join(''));
} else {
var children_49107 = shadow.dom.svg_node(child_struct_49098);
if(cljs.core.seq_QMARK_(children_49107)){
var seq__48709_49108 = cljs.core.seq(children_49107);
var chunk__48711_49109 = null;
var count__48712_49110 = (0);
var i__48713_49111 = (0);
while(true){
if((i__48713_49111 < count__48712_49110)){
var child_49112 = chunk__48711_49109.cljs$core$IIndexed$_nth$arity$2(null,i__48713_49111);
if(cljs.core.truth_(child_49112)){
node.appendChild(child_49112);


var G__49115 = seq__48709_49108;
var G__49116 = chunk__48711_49109;
var G__49117 = count__48712_49110;
var G__49118 = (i__48713_49111 + (1));
seq__48709_49108 = G__49115;
chunk__48711_49109 = G__49116;
count__48712_49110 = G__49117;
i__48713_49111 = G__49118;
continue;
} else {
var G__49119 = seq__48709_49108;
var G__49120 = chunk__48711_49109;
var G__49121 = count__48712_49110;
var G__49122 = (i__48713_49111 + (1));
seq__48709_49108 = G__49119;
chunk__48711_49109 = G__49120;
count__48712_49110 = G__49121;
i__48713_49111 = G__49122;
continue;
}
} else {
var temp__5804__auto___49123__$1 = cljs.core.seq(seq__48709_49108);
if(temp__5804__auto___49123__$1){
var seq__48709_49124__$1 = temp__5804__auto___49123__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48709_49124__$1)){
var c__5568__auto___49125 = cljs.core.chunk_first(seq__48709_49124__$1);
var G__49126 = cljs.core.chunk_rest(seq__48709_49124__$1);
var G__49127 = c__5568__auto___49125;
var G__49128 = cljs.core.count(c__5568__auto___49125);
var G__49129 = (0);
seq__48709_49108 = G__49126;
chunk__48711_49109 = G__49127;
count__48712_49110 = G__49128;
i__48713_49111 = G__49129;
continue;
} else {
var child_49130 = cljs.core.first(seq__48709_49124__$1);
if(cljs.core.truth_(child_49130)){
node.appendChild(child_49130);


var G__49133 = cljs.core.next(seq__48709_49124__$1);
var G__49134 = null;
var G__49135 = (0);
var G__49136 = (0);
seq__48709_49108 = G__49133;
chunk__48711_49109 = G__49134;
count__48712_49110 = G__49135;
i__48713_49111 = G__49136;
continue;
} else {
var G__49137 = cljs.core.next(seq__48709_49124__$1);
var G__49138 = null;
var G__49139 = (0);
var G__49140 = (0);
seq__48709_49108 = G__49137;
chunk__48711_49109 = G__49138;
count__48712_49110 = G__49139;
i__48713_49111 = G__49140;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49107);
}
}


var G__49141 = cljs.core.next(seq__48685_49091__$1);
var G__49142 = null;
var G__49143 = (0);
var G__49144 = (0);
seq__48685_49041 = G__49141;
chunk__48687_49042 = G__49142;
count__48688_49043 = G__49143;
i__48689_49044 = G__49144;
continue;
} else {
var G__49145 = cljs.core.next(seq__48685_49091__$1);
var G__49146 = null;
var G__49147 = (0);
var G__49148 = (0);
seq__48685_49041 = G__49145;
chunk__48687_49042 = G__49146;
count__48688_49043 = G__49147;
i__48689_49044 = G__49148;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49153 = arguments.length;
var i__5770__auto___49154 = (0);
while(true){
if((i__5770__auto___49154 < len__5769__auto___49153)){
args__5775__auto__.push((arguments[i__5770__auto___49154]));

var G__49155 = (i__5770__auto___49154 + (1));
i__5770__auto___49154 = G__49155;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48720){
var G__48721 = cljs.core.first(seq48720);
var seq48720__$1 = cljs.core.next(seq48720);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48721,seq48720__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48723 = arguments.length;
switch (G__48723) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__45531__auto___49162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_48728){
var state_val_48729 = (state_48728[(1)]);
if((state_val_48729 === (1))){
var state_48728__$1 = state_48728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48728__$1,(2),once_or_cleanup);
} else {
if((state_val_48729 === (2))){
var inst_48725 = (state_48728[(2)]);
var inst_48726 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48728__$1 = (function (){var statearr_48730 = state_48728;
(statearr_48730[(7)] = inst_48725);

return statearr_48730;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48728__$1,inst_48726);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45402__auto__ = null;
var shadow$dom$state_machine__45402__auto____0 = (function (){
var statearr_48731 = [null,null,null,null,null,null,null,null];
(statearr_48731[(0)] = shadow$dom$state_machine__45402__auto__);

(statearr_48731[(1)] = (1));

return statearr_48731;
});
var shadow$dom$state_machine__45402__auto____1 = (function (state_48728){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_48728);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e48732){var ex__45405__auto__ = e48732;
var statearr_48733_49164 = state_48728;
(statearr_48733_49164[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_48728[(4)]))){
var statearr_48734_49167 = state_48728;
(statearr_48734_49167[(1)] = cljs.core.first((state_48728[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49168 = state_48728;
state_48728 = G__49168;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
shadow$dom$state_machine__45402__auto__ = function(state_48728){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45402__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45402__auto____1.call(this,state_48728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45402__auto____0;
shadow$dom$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45402__auto____1;
return shadow$dom$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_48735 = f__45532__auto__();
(statearr_48735[(6)] = c__45531__auto___49162);

return statearr_48735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
