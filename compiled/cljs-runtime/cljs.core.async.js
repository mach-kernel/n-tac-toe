goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45618 = arguments.length;
switch (G__45618) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45621 = (function (f,blockable,meta45622){
this.f = f;
this.blockable = blockable;
this.meta45622 = meta45622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45623,meta45622__$1){
var self__ = this;
var _45623__$1 = this;
return (new cljs.core.async.t_cljs$core$async45621(self__.f,self__.blockable,meta45622__$1));
}));

(cljs.core.async.t_cljs$core$async45621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45623){
var self__ = this;
var _45623__$1 = this;
return self__.meta45622;
}));

(cljs.core.async.t_cljs$core$async45621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45622","meta45622",1788680386,null)], null);
}));

(cljs.core.async.t_cljs$core$async45621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45621");

(cljs.core.async.t_cljs$core$async45621.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45621.
 */
cljs.core.async.__GT_t_cljs$core$async45621 = (function cljs$core$async$__GT_t_cljs$core$async45621(f__$1,blockable__$1,meta45622){
return (new cljs.core.async.t_cljs$core$async45621(f__$1,blockable__$1,meta45622));
});

}

return (new cljs.core.async.t_cljs$core$async45621(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45650 = arguments.length;
switch (G__45650) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45663 = arguments.length;
switch (G__45663) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45669 = arguments.length;
switch (G__45669) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47734 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47734) : fn1.call(null,val_47734));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47734) : fn1.call(null,val_47734));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45676 = arguments.length;
switch (G__45676) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___47743 = n;
var x_47744 = (0);
while(true){
if((x_47744 < n__5636__auto___47743)){
(a[x_47744] = x_47744);

var G__47746 = (x_47744 + (1));
x_47744 = G__47746;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45691 = (function (flag,meta45692){
this.flag = flag;
this.meta45692 = meta45692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45693,meta45692__$1){
var self__ = this;
var _45693__$1 = this;
return (new cljs.core.async.t_cljs$core$async45691(self__.flag,meta45692__$1));
}));

(cljs.core.async.t_cljs$core$async45691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45693){
var self__ = this;
var _45693__$1 = this;
return self__.meta45692;
}));

(cljs.core.async.t_cljs$core$async45691.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45691.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45692","meta45692",-1214745102,null)], null);
}));

(cljs.core.async.t_cljs$core$async45691.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45691");

(cljs.core.async.t_cljs$core$async45691.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45691");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45691.
 */
cljs.core.async.__GT_t_cljs$core$async45691 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45691(flag__$1,meta45692){
return (new cljs.core.async.t_cljs$core$async45691(flag__$1,meta45692));
});

}

return (new cljs.core.async.t_cljs$core$async45691(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45712 = (function (flag,cb,meta45713){
this.flag = flag;
this.cb = cb;
this.meta45713 = meta45713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45714,meta45713__$1){
var self__ = this;
var _45714__$1 = this;
return (new cljs.core.async.t_cljs$core$async45712(self__.flag,self__.cb,meta45713__$1));
}));

(cljs.core.async.t_cljs$core$async45712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45714){
var self__ = this;
var _45714__$1 = this;
return self__.meta45713;
}));

(cljs.core.async.t_cljs$core$async45712.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45712.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45713","meta45713",897306508,null)], null);
}));

(cljs.core.async.t_cljs$core$async45712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45712");

(cljs.core.async.t_cljs$core$async45712.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45712.
 */
cljs.core.async.__GT_t_cljs$core$async45712 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45712(flag__$1,cb__$1,meta45713){
return (new cljs.core.async.t_cljs$core$async45712(flag__$1,cb__$1,meta45713));
});

}

return (new cljs.core.async.t_cljs$core$async45712(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45733_SHARP_){
var G__45749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45733_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45749) : fret.call(null,G__45749));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45734_SHARP_){
var G__45756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45734_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45756) : fret.call(null,G__45756));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47761 = (i + (1));
i = G__47761;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47762 = arguments.length;
var i__5770__auto___47765 = (0);
while(true){
if((i__5770__auto___47765 < len__5769__auto___47762)){
args__5775__auto__.push((arguments[i__5770__auto___47765]));

var G__47766 = (i__5770__auto___47765 + (1));
i__5770__auto___47765 = G__47766;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45760){
var map__45761 = p__45760;
var map__45761__$1 = cljs.core.__destructure_map(map__45761);
var opts = map__45761__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45758){
var G__45759 = cljs.core.first(seq45758);
var seq45758__$1 = cljs.core.next(seq45758);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45759,seq45758__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45769 = arguments.length;
switch (G__45769) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45531__auto___47775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_45804){
var state_val_45805 = (state_45804[(1)]);
if((state_val_45805 === (7))){
var inst_45800 = (state_45804[(2)]);
var state_45804__$1 = state_45804;
var statearr_45813_47779 = state_45804__$1;
(statearr_45813_47779[(2)] = inst_45800);

(statearr_45813_47779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45805 === (1))){
var state_45804__$1 = state_45804;
var statearr_45814_47780 = state_45804__$1;
(statearr_45814_47780[(2)] = null);

(statearr_45814_47780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45805 === (4))){
var inst_45781 = (state_45804[(7)]);
var inst_45781__$1 = (state_45804[(2)]);
var inst_45783 = (inst_45781__$1 == null);
var state_45804__$1 = (function (){var statearr_45822 = state_45804;
(statearr_45822[(7)] = inst_45781__$1);

return statearr_45822;
})();
if(cljs.core.truth_(inst_45783)){
var statearr_45823_47781 = state_45804__$1;
(statearr_45823_47781[(1)] = (5));

} else {
var statearr_45824_47782 = state_45804__$1;
(statearr_45824_47782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45805 === (13))){
var state_45804__$1 = state_45804;
var statearr_45830_47783 = state_45804__$1;
(statearr_45830_47783[(2)] = null);

(statearr_45830_47783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45805 === (6))){
var inst_45781 = (state_45804[(7)]);
var state_45804__$1 = state_45804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45804__$1,(11),to,inst_45781);
} else {
if((state_val_45805 === (3))){
var inst_45802 = (state_45804[(2)]);
var state_45804__$1 = state_45804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45804__$1,inst_45802);
} else {
if((state_val_45805 === (12))){
var state_45804__$1 = state_45804;
var statearr_45831_47785 = state_45804__$1;
(statearr_45831_47785[(2)] = null);

(statearr_45831_47785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45805 === (2))){
var state_45804__$1 = state_45804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45804__$1,(4),from);
} else {
if((state_val_45805 === (11))){
var inst_45793 = (state_45804[(2)]);
var state_45804__$1 = state_45804;
if(cljs.core.truth_(inst_45793)){
var statearr_45832_47786 = state_45804__$1;
(statearr_45832_47786[(1)] = (12));

} else {
var statearr_45833_47787 = state_45804__$1;
(statearr_45833_47787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45805 === (9))){
var state_45804__$1 = state_45804;
var statearr_45834_47788 = state_45804__$1;
(statearr_45834_47788[(2)] = null);

(statearr_45834_47788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45805 === (5))){
var state_45804__$1 = state_45804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45835_47789 = state_45804__$1;
(statearr_45835_47789[(1)] = (8));

} else {
var statearr_45836_47790 = state_45804__$1;
(statearr_45836_47790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45805 === (14))){
var inst_45798 = (state_45804[(2)]);
var state_45804__$1 = state_45804;
var statearr_45838_47791 = state_45804__$1;
(statearr_45838_47791[(2)] = inst_45798);

(statearr_45838_47791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45805 === (10))){
var inst_45790 = (state_45804[(2)]);
var state_45804__$1 = state_45804;
var statearr_45840_47794 = state_45804__$1;
(statearr_45840_47794[(2)] = inst_45790);

(statearr_45840_47794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45805 === (8))){
var inst_45786 = cljs.core.async.close_BANG_(to);
var state_45804__$1 = state_45804;
var statearr_45841_47797 = state_45804__$1;
(statearr_45841_47797[(2)] = inst_45786);

(statearr_45841_47797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__45402__auto__ = null;
var cljs$core$async$state_machine__45402__auto____0 = (function (){
var statearr_45842 = [null,null,null,null,null,null,null,null];
(statearr_45842[(0)] = cljs$core$async$state_machine__45402__auto__);

(statearr_45842[(1)] = (1));

return statearr_45842;
});
var cljs$core$async$state_machine__45402__auto____1 = (function (state_45804){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_45804);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e45843){var ex__45405__auto__ = e45843;
var statearr_45844_47798 = state_45804;
(statearr_45844_47798[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_45804[(4)]))){
var statearr_45845_47799 = state_45804;
(statearr_45845_47799[(1)] = cljs.core.first((state_45804[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47800 = state_45804;
state_45804 = G__47800;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$state_machine__45402__auto__ = function(state_45804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45402__auto____1.call(this,state_45804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45402__auto____0;
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45402__auto____1;
return cljs$core$async$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_45846 = f__45532__auto__();
(statearr_45846[(6)] = c__45531__auto___47775);

return statearr_45846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__45847){
var vec__45848 = p__45847;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45848,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45848,(1),null);
var job = vec__45848;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45531__auto___47803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_45855){
var state_val_45856 = (state_45855[(1)]);
if((state_val_45856 === (1))){
var state_45855__$1 = state_45855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45855__$1,(2),res,v);
} else {
if((state_val_45856 === (2))){
var inst_45852 = (state_45855[(2)]);
var inst_45853 = cljs.core.async.close_BANG_(res);
var state_45855__$1 = (function (){var statearr_45857 = state_45855;
(statearr_45857[(7)] = inst_45852);

return statearr_45857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45855__$1,inst_45853);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0 = (function (){
var statearr_45858 = [null,null,null,null,null,null,null,null];
(statearr_45858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__);

(statearr_45858[(1)] = (1));

return statearr_45858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1 = (function (state_45855){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_45855);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e45859){var ex__45405__auto__ = e45859;
var statearr_45861_47804 = state_45855;
(statearr_45861_47804[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_45855[(4)]))){
var statearr_45862_47805 = state_45855;
(statearr_45862_47805[(1)] = cljs.core.first((state_45855[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47806 = state_45855;
state_45855 = G__47806;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__ = function(state_45855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1.call(this,state_45855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_45864 = f__45532__auto__();
(statearr_45864[(6)] = c__45531__auto___47803);

return statearr_45864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45866){
var vec__45867 = p__45866;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45867,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45867,(1),null);
var job = vec__45867;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___47813 = n;
var __47814 = (0);
while(true){
if((__47814 < n__5636__auto___47813)){
var G__45870_47815 = type;
var G__45870_47816__$1 = (((G__45870_47815 instanceof cljs.core.Keyword))?G__45870_47815.fqn:null);
switch (G__45870_47816__$1) {
case "compute":
var c__45531__auto___47818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47814,c__45531__auto___47818,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async){
return (function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = ((function (__47814,c__45531__auto___47818,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async){
return (function (state_45883){
var state_val_45884 = (state_45883[(1)]);
if((state_val_45884 === (1))){
var state_45883__$1 = state_45883;
var statearr_45885_47819 = state_45883__$1;
(statearr_45885_47819[(2)] = null);

(statearr_45885_47819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (2))){
var state_45883__$1 = state_45883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45883__$1,(4),jobs);
} else {
if((state_val_45884 === (3))){
var inst_45881 = (state_45883[(2)]);
var state_45883__$1 = state_45883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45883__$1,inst_45881);
} else {
if((state_val_45884 === (4))){
var inst_45873 = (state_45883[(2)]);
var inst_45874 = process__$1(inst_45873);
var state_45883__$1 = state_45883;
if(cljs.core.truth_(inst_45874)){
var statearr_45886_47820 = state_45883__$1;
(statearr_45886_47820[(1)] = (5));

} else {
var statearr_45887_47821 = state_45883__$1;
(statearr_45887_47821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (5))){
var state_45883__$1 = state_45883;
var statearr_45888_47822 = state_45883__$1;
(statearr_45888_47822[(2)] = null);

(statearr_45888_47822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (6))){
var state_45883__$1 = state_45883;
var statearr_45889_47823 = state_45883__$1;
(statearr_45889_47823[(2)] = null);

(statearr_45889_47823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45884 === (7))){
var inst_45879 = (state_45883[(2)]);
var state_45883__$1 = state_45883;
var statearr_45891_47824 = state_45883__$1;
(statearr_45891_47824[(2)] = inst_45879);

(statearr_45891_47824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47814,c__45531__auto___47818,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async))
;
return ((function (__47814,switch__45401__auto__,c__45531__auto___47818,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0 = (function (){
var statearr_45893 = [null,null,null,null,null,null,null];
(statearr_45893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__);

(statearr_45893[(1)] = (1));

return statearr_45893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1 = (function (state_45883){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_45883);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e45895){var ex__45405__auto__ = e45895;
var statearr_45896_47827 = state_45883;
(statearr_45896_47827[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_45883[(4)]))){
var statearr_45897_47828 = state_45883;
(statearr_45897_47828[(1)] = cljs.core.first((state_45883[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47829 = state_45883;
state_45883 = G__47829;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__ = function(state_45883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1.call(this,state_45883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__;
})()
;})(__47814,switch__45401__auto__,c__45531__auto___47818,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async))
})();
var state__45533__auto__ = (function (){var statearr_45899 = f__45532__auto__();
(statearr_45899[(6)] = c__45531__auto___47818);

return statearr_45899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
});})(__47814,c__45531__auto___47818,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async))
);


break;
case "async":
var c__45531__auto___47830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47814,c__45531__auto___47830,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async){
return (function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = ((function (__47814,c__45531__auto___47830,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async){
return (function (state_45912){
var state_val_45913 = (state_45912[(1)]);
if((state_val_45913 === (1))){
var state_45912__$1 = state_45912;
var statearr_45915_47831 = state_45912__$1;
(statearr_45915_47831[(2)] = null);

(statearr_45915_47831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (2))){
var state_45912__$1 = state_45912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45912__$1,(4),jobs);
} else {
if((state_val_45913 === (3))){
var inst_45910 = (state_45912[(2)]);
var state_45912__$1 = state_45912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45912__$1,inst_45910);
} else {
if((state_val_45913 === (4))){
var inst_45902 = (state_45912[(2)]);
var inst_45903 = async(inst_45902);
var state_45912__$1 = state_45912;
if(cljs.core.truth_(inst_45903)){
var statearr_45916_47832 = state_45912__$1;
(statearr_45916_47832[(1)] = (5));

} else {
var statearr_45917_47833 = state_45912__$1;
(statearr_45917_47833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (5))){
var state_45912__$1 = state_45912;
var statearr_45918_47834 = state_45912__$1;
(statearr_45918_47834[(2)] = null);

(statearr_45918_47834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (6))){
var state_45912__$1 = state_45912;
var statearr_45920_47836 = state_45912__$1;
(statearr_45920_47836[(2)] = null);

(statearr_45920_47836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45913 === (7))){
var inst_45908 = (state_45912[(2)]);
var state_45912__$1 = state_45912;
var statearr_45921_47838 = state_45912__$1;
(statearr_45921_47838[(2)] = inst_45908);

(statearr_45921_47838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47814,c__45531__auto___47830,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async))
;
return ((function (__47814,switch__45401__auto__,c__45531__auto___47830,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0 = (function (){
var statearr_45923 = [null,null,null,null,null,null,null];
(statearr_45923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__);

(statearr_45923[(1)] = (1));

return statearr_45923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1 = (function (state_45912){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_45912);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e45924){var ex__45405__auto__ = e45924;
var statearr_45925_47839 = state_45912;
(statearr_45925_47839[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_45912[(4)]))){
var statearr_45926_47842 = state_45912;
(statearr_45926_47842[(1)] = cljs.core.first((state_45912[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47843 = state_45912;
state_45912 = G__47843;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__ = function(state_45912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1.call(this,state_45912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__;
})()
;})(__47814,switch__45401__auto__,c__45531__auto___47830,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async))
})();
var state__45533__auto__ = (function (){var statearr_45927 = f__45532__auto__();
(statearr_45927[(6)] = c__45531__auto___47830);

return statearr_45927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
});})(__47814,c__45531__auto___47830,G__45870_47815,G__45870_47816__$1,n__5636__auto___47813,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45870_47816__$1)].join('')));

}

var G__47845 = (__47814 + (1));
__47814 = G__47845;
continue;
} else {
}
break;
}

var c__45531__auto___47846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_45954){
var state_val_45955 = (state_45954[(1)]);
if((state_val_45955 === (7))){
var inst_45950 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45962_47847 = state_45954__$1;
(statearr_45962_47847[(2)] = inst_45950);

(statearr_45962_47847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (1))){
var state_45954__$1 = state_45954;
var statearr_45963_47848 = state_45954__$1;
(statearr_45963_47848[(2)] = null);

(statearr_45963_47848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (4))){
var inst_45930 = (state_45954[(7)]);
var inst_45930__$1 = (state_45954[(2)]);
var inst_45931 = (inst_45930__$1 == null);
var state_45954__$1 = (function (){var statearr_45964 = state_45954;
(statearr_45964[(7)] = inst_45930__$1);

return statearr_45964;
})();
if(cljs.core.truth_(inst_45931)){
var statearr_45965_47849 = state_45954__$1;
(statearr_45965_47849[(1)] = (5));

} else {
var statearr_45966_47850 = state_45954__$1;
(statearr_45966_47850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (6))){
var inst_45930 = (state_45954[(7)]);
var inst_45935 = (state_45954[(8)]);
var inst_45935__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45942 = [inst_45930,inst_45935__$1];
var inst_45943 = (new cljs.core.PersistentVector(null,2,(5),inst_45940,inst_45942,null));
var state_45954__$1 = (function (){var statearr_45967 = state_45954;
(statearr_45967[(8)] = inst_45935__$1);

return statearr_45967;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45954__$1,(8),jobs,inst_45943);
} else {
if((state_val_45955 === (3))){
var inst_45952 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45954__$1,inst_45952);
} else {
if((state_val_45955 === (2))){
var state_45954__$1 = state_45954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45954__$1,(4),from);
} else {
if((state_val_45955 === (9))){
var inst_45947 = (state_45954[(2)]);
var state_45954__$1 = (function (){var statearr_45968 = state_45954;
(statearr_45968[(9)] = inst_45947);

return statearr_45968;
})();
var statearr_45969_47853 = state_45954__$1;
(statearr_45969_47853[(2)] = null);

(statearr_45969_47853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (5))){
var inst_45933 = cljs.core.async.close_BANG_(jobs);
var state_45954__$1 = state_45954;
var statearr_45970_47854 = state_45954__$1;
(statearr_45970_47854[(2)] = inst_45933);

(statearr_45970_47854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (8))){
var inst_45935 = (state_45954[(8)]);
var inst_45945 = (state_45954[(2)]);
var state_45954__$1 = (function (){var statearr_45974 = state_45954;
(statearr_45974[(10)] = inst_45945);

return statearr_45974;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45954__$1,(9),results,inst_45935);
} else {
return null;
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0 = (function (){
var statearr_45975 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__);

(statearr_45975[(1)] = (1));

return statearr_45975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1 = (function (state_45954){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_45954);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e45976){var ex__45405__auto__ = e45976;
var statearr_45977_47855 = state_45954;
(statearr_45977_47855[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_45954[(4)]))){
var statearr_45978_47856 = state_45954;
(statearr_45978_47856[(1)] = cljs.core.first((state_45954[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47857 = state_45954;
state_45954 = G__47857;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__ = function(state_45954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1.call(this,state_45954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_45979 = f__45532__auto__();
(statearr_45979[(6)] = c__45531__auto___47846);

return statearr_45979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


var c__45531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_46018){
var state_val_46019 = (state_46018[(1)]);
if((state_val_46019 === (7))){
var inst_46014 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46020_47860 = state_46018__$1;
(statearr_46020_47860[(2)] = inst_46014);

(statearr_46020_47860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (20))){
var state_46018__$1 = state_46018;
var statearr_46021_47861 = state_46018__$1;
(statearr_46021_47861[(2)] = null);

(statearr_46021_47861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (1))){
var state_46018__$1 = state_46018;
var statearr_46022_47862 = state_46018__$1;
(statearr_46022_47862[(2)] = null);

(statearr_46022_47862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (4))){
var inst_45982 = (state_46018[(7)]);
var inst_45982__$1 = (state_46018[(2)]);
var inst_45983 = (inst_45982__$1 == null);
var state_46018__$1 = (function (){var statearr_46023 = state_46018;
(statearr_46023[(7)] = inst_45982__$1);

return statearr_46023;
})();
if(cljs.core.truth_(inst_45983)){
var statearr_46024_47863 = state_46018__$1;
(statearr_46024_47863[(1)] = (5));

} else {
var statearr_46025_47864 = state_46018__$1;
(statearr_46025_47864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (15))){
var inst_45996 = (state_46018[(8)]);
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46018__$1,(18),to,inst_45996);
} else {
if((state_val_46019 === (21))){
var inst_46009 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46026_47866 = state_46018__$1;
(statearr_46026_47866[(2)] = inst_46009);

(statearr_46026_47866[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (13))){
var inst_46011 = (state_46018[(2)]);
var state_46018__$1 = (function (){var statearr_46027 = state_46018;
(statearr_46027[(9)] = inst_46011);

return statearr_46027;
})();
var statearr_46028_47869 = state_46018__$1;
(statearr_46028_47869[(2)] = null);

(statearr_46028_47869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (6))){
var inst_45982 = (state_46018[(7)]);
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46018__$1,(11),inst_45982);
} else {
if((state_val_46019 === (17))){
var inst_46004 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
if(cljs.core.truth_(inst_46004)){
var statearr_46029_47870 = state_46018__$1;
(statearr_46029_47870[(1)] = (19));

} else {
var statearr_46030_47871 = state_46018__$1;
(statearr_46030_47871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (3))){
var inst_46016 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46018__$1,inst_46016);
} else {
if((state_val_46019 === (12))){
var inst_45992 = (state_46018[(10)]);
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46018__$1,(14),inst_45992);
} else {
if((state_val_46019 === (2))){
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46018__$1,(4),results);
} else {
if((state_val_46019 === (19))){
var state_46018__$1 = state_46018;
var statearr_46031_47872 = state_46018__$1;
(statearr_46031_47872[(2)] = null);

(statearr_46031_47872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (11))){
var inst_45992 = (state_46018[(2)]);
var state_46018__$1 = (function (){var statearr_46032 = state_46018;
(statearr_46032[(10)] = inst_45992);

return statearr_46032;
})();
var statearr_46033_47873 = state_46018__$1;
(statearr_46033_47873[(2)] = null);

(statearr_46033_47873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (9))){
var state_46018__$1 = state_46018;
var statearr_46034_47874 = state_46018__$1;
(statearr_46034_47874[(2)] = null);

(statearr_46034_47874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (5))){
var state_46018__$1 = state_46018;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46035_47875 = state_46018__$1;
(statearr_46035_47875[(1)] = (8));

} else {
var statearr_46036_47877 = state_46018__$1;
(statearr_46036_47877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (14))){
var inst_45996 = (state_46018[(8)]);
var inst_45998 = (state_46018[(11)]);
var inst_45996__$1 = (state_46018[(2)]);
var inst_45997 = (inst_45996__$1 == null);
var inst_45998__$1 = cljs.core.not(inst_45997);
var state_46018__$1 = (function (){var statearr_46037 = state_46018;
(statearr_46037[(8)] = inst_45996__$1);

(statearr_46037[(11)] = inst_45998__$1);

return statearr_46037;
})();
if(inst_45998__$1){
var statearr_46038_47879 = state_46018__$1;
(statearr_46038_47879[(1)] = (15));

} else {
var statearr_46039_47880 = state_46018__$1;
(statearr_46039_47880[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (16))){
var inst_45998 = (state_46018[(11)]);
var state_46018__$1 = state_46018;
var statearr_46040_47881 = state_46018__$1;
(statearr_46040_47881[(2)] = inst_45998);

(statearr_46040_47881[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (10))){
var inst_45989 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46041_47883 = state_46018__$1;
(statearr_46041_47883[(2)] = inst_45989);

(statearr_46041_47883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (18))){
var inst_46001 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46042_47884 = state_46018__$1;
(statearr_46042_47884[(2)] = inst_46001);

(statearr_46042_47884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (8))){
var inst_45986 = cljs.core.async.close_BANG_(to);
var state_46018__$1 = state_46018;
var statearr_46043_47885 = state_46018__$1;
(statearr_46043_47885[(2)] = inst_45986);

(statearr_46043_47885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0 = (function (){
var statearr_46044 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__);

(statearr_46044[(1)] = (1));

return statearr_46044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1 = (function (state_46018){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_46018);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e46045){var ex__45405__auto__ = e46045;
var statearr_46046_47886 = state_46018;
(statearr_46046_47886[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_46018[(4)]))){
var statearr_46047_47887 = state_46018;
(statearr_46047_47887[(1)] = cljs.core.first((state_46018[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47888 = state_46018;
state_46018 = G__47888;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__ = function(state_46018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1.call(this,state_46018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_46048 = f__45532__auto__();
(statearr_46048[(6)] = c__45531__auto__);

return statearr_46048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));

return c__45531__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46050 = arguments.length;
switch (G__46050) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46052 = arguments.length;
switch (G__46052) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46054 = arguments.length;
switch (G__46054) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45531__auto___47898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_46080){
var state_val_46081 = (state_46080[(1)]);
if((state_val_46081 === (7))){
var inst_46076 = (state_46080[(2)]);
var state_46080__$1 = state_46080;
var statearr_46082_47899 = state_46080__$1;
(statearr_46082_47899[(2)] = inst_46076);

(statearr_46082_47899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (1))){
var state_46080__$1 = state_46080;
var statearr_46083_47900 = state_46080__$1;
(statearr_46083_47900[(2)] = null);

(statearr_46083_47900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (4))){
var inst_46057 = (state_46080[(7)]);
var inst_46057__$1 = (state_46080[(2)]);
var inst_46058 = (inst_46057__$1 == null);
var state_46080__$1 = (function (){var statearr_46084 = state_46080;
(statearr_46084[(7)] = inst_46057__$1);

return statearr_46084;
})();
if(cljs.core.truth_(inst_46058)){
var statearr_46085_47902 = state_46080__$1;
(statearr_46085_47902[(1)] = (5));

} else {
var statearr_46086_47903 = state_46080__$1;
(statearr_46086_47903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (13))){
var state_46080__$1 = state_46080;
var statearr_46087_47904 = state_46080__$1;
(statearr_46087_47904[(2)] = null);

(statearr_46087_47904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (6))){
var inst_46057 = (state_46080[(7)]);
var inst_46063 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46057) : p.call(null,inst_46057));
var state_46080__$1 = state_46080;
if(cljs.core.truth_(inst_46063)){
var statearr_46088_47906 = state_46080__$1;
(statearr_46088_47906[(1)] = (9));

} else {
var statearr_46089_47907 = state_46080__$1;
(statearr_46089_47907[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (3))){
var inst_46078 = (state_46080[(2)]);
var state_46080__$1 = state_46080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46080__$1,inst_46078);
} else {
if((state_val_46081 === (12))){
var state_46080__$1 = state_46080;
var statearr_46090_47912 = state_46080__$1;
(statearr_46090_47912[(2)] = null);

(statearr_46090_47912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (2))){
var state_46080__$1 = state_46080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46080__$1,(4),ch);
} else {
if((state_val_46081 === (11))){
var inst_46057 = (state_46080[(7)]);
var inst_46067 = (state_46080[(2)]);
var state_46080__$1 = state_46080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46080__$1,(8),inst_46067,inst_46057);
} else {
if((state_val_46081 === (9))){
var state_46080__$1 = state_46080;
var statearr_46091_47917 = state_46080__$1;
(statearr_46091_47917[(2)] = tc);

(statearr_46091_47917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (5))){
var inst_46060 = cljs.core.async.close_BANG_(tc);
var inst_46061 = cljs.core.async.close_BANG_(fc);
var state_46080__$1 = (function (){var statearr_46092 = state_46080;
(statearr_46092[(8)] = inst_46060);

return statearr_46092;
})();
var statearr_46093_47918 = state_46080__$1;
(statearr_46093_47918[(2)] = inst_46061);

(statearr_46093_47918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (14))){
var inst_46074 = (state_46080[(2)]);
var state_46080__$1 = state_46080;
var statearr_46094_47922 = state_46080__$1;
(statearr_46094_47922[(2)] = inst_46074);

(statearr_46094_47922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (10))){
var state_46080__$1 = state_46080;
var statearr_46095_47926 = state_46080__$1;
(statearr_46095_47926[(2)] = fc);

(statearr_46095_47926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46081 === (8))){
var inst_46069 = (state_46080[(2)]);
var state_46080__$1 = state_46080;
if(cljs.core.truth_(inst_46069)){
var statearr_46096_47928 = state_46080__$1;
(statearr_46096_47928[(1)] = (12));

} else {
var statearr_46097_47930 = state_46080__$1;
(statearr_46097_47930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__45402__auto__ = null;
var cljs$core$async$state_machine__45402__auto____0 = (function (){
var statearr_46098 = [null,null,null,null,null,null,null,null,null];
(statearr_46098[(0)] = cljs$core$async$state_machine__45402__auto__);

(statearr_46098[(1)] = (1));

return statearr_46098;
});
var cljs$core$async$state_machine__45402__auto____1 = (function (state_46080){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_46080);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e46099){var ex__45405__auto__ = e46099;
var statearr_46100_47933 = state_46080;
(statearr_46100_47933[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_46080[(4)]))){
var statearr_46101_47935 = state_46080;
(statearr_46101_47935[(1)] = cljs.core.first((state_46080[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47937 = state_46080;
state_46080 = G__47937;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$state_machine__45402__auto__ = function(state_46080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45402__auto____1.call(this,state_46080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45402__auto____0;
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45402__auto____1;
return cljs$core$async$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_46102 = f__45532__auto__();
(statearr_46102[(6)] = c__45531__auto___47898);

return statearr_46102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_46144){
var state_val_46145 = (state_46144[(1)]);
if((state_val_46145 === (7))){
var inst_46140 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
var statearr_46146_47944 = state_46144__$1;
(statearr_46146_47944[(2)] = inst_46140);

(statearr_46146_47944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (1))){
var inst_46123 = init;
var inst_46124 = inst_46123;
var state_46144__$1 = (function (){var statearr_46147 = state_46144;
(statearr_46147[(7)] = inst_46124);

return statearr_46147;
})();
var statearr_46148_47945 = state_46144__$1;
(statearr_46148_47945[(2)] = null);

(statearr_46148_47945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (4))){
var inst_46127 = (state_46144[(8)]);
var inst_46127__$1 = (state_46144[(2)]);
var inst_46128 = (inst_46127__$1 == null);
var state_46144__$1 = (function (){var statearr_46149 = state_46144;
(statearr_46149[(8)] = inst_46127__$1);

return statearr_46149;
})();
if(cljs.core.truth_(inst_46128)){
var statearr_46150_47946 = state_46144__$1;
(statearr_46150_47946[(1)] = (5));

} else {
var statearr_46151_47947 = state_46144__$1;
(statearr_46151_47947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (6))){
var inst_46131 = (state_46144[(9)]);
var inst_46124 = (state_46144[(7)]);
var inst_46127 = (state_46144[(8)]);
var inst_46131__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46124,inst_46127) : f.call(null,inst_46124,inst_46127));
var inst_46132 = cljs.core.reduced_QMARK_(inst_46131__$1);
var state_46144__$1 = (function (){var statearr_46153 = state_46144;
(statearr_46153[(9)] = inst_46131__$1);

return statearr_46153;
})();
if(inst_46132){
var statearr_46154_47952 = state_46144__$1;
(statearr_46154_47952[(1)] = (8));

} else {
var statearr_46155_47953 = state_46144__$1;
(statearr_46155_47953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (3))){
var inst_46142 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46144__$1,inst_46142);
} else {
if((state_val_46145 === (2))){
var state_46144__$1 = state_46144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46144__$1,(4),ch);
} else {
if((state_val_46145 === (9))){
var inst_46131 = (state_46144[(9)]);
var inst_46124 = inst_46131;
var state_46144__$1 = (function (){var statearr_46156 = state_46144;
(statearr_46156[(7)] = inst_46124);

return statearr_46156;
})();
var statearr_46157_47961 = state_46144__$1;
(statearr_46157_47961[(2)] = null);

(statearr_46157_47961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (5))){
var inst_46124 = (state_46144[(7)]);
var state_46144__$1 = state_46144;
var statearr_46158_47962 = state_46144__$1;
(statearr_46158_47962[(2)] = inst_46124);

(statearr_46158_47962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (10))){
var inst_46138 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
var statearr_46159_47963 = state_46144__$1;
(statearr_46159_47963[(2)] = inst_46138);

(statearr_46159_47963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (8))){
var inst_46131 = (state_46144[(9)]);
var inst_46134 = cljs.core.deref(inst_46131);
var state_46144__$1 = state_46144;
var statearr_46160_47964 = state_46144__$1;
(statearr_46160_47964[(2)] = inst_46134);

(statearr_46160_47964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$reduce_$_state_machine__45402__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45402__auto____0 = (function (){
var statearr_46161 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46161[(0)] = cljs$core$async$reduce_$_state_machine__45402__auto__);

(statearr_46161[(1)] = (1));

return statearr_46161;
});
var cljs$core$async$reduce_$_state_machine__45402__auto____1 = (function (state_46144){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_46144);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e46162){var ex__45405__auto__ = e46162;
var statearr_46163_47972 = state_46144;
(statearr_46163_47972[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_46144[(4)]))){
var statearr_46164_47973 = state_46144;
(statearr_46164_47973[(1)] = cljs.core.first((state_46144[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47974 = state_46144;
state_46144 = G__47974;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45402__auto__ = function(state_46144){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45402__auto____1.call(this,state_46144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45402__auto____0;
cljs$core$async$reduce_$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45402__auto____1;
return cljs$core$async$reduce_$_state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_46166 = f__45532__auto__();
(statearr_46166[(6)] = c__45531__auto__);

return statearr_46166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));

return c__45531__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_46172){
var state_val_46173 = (state_46172[(1)]);
if((state_val_46173 === (1))){
var inst_46167 = cljs.core.async.reduce(f__$1,init,ch);
var state_46172__$1 = state_46172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46172__$1,(2),inst_46167);
} else {
if((state_val_46173 === (2))){
var inst_46169 = (state_46172[(2)]);
var inst_46170 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46169) : f__$1.call(null,inst_46169));
var state_46172__$1 = state_46172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46172__$1,inst_46170);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45402__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45402__auto____0 = (function (){
var statearr_46174 = [null,null,null,null,null,null,null];
(statearr_46174[(0)] = cljs$core$async$transduce_$_state_machine__45402__auto__);

(statearr_46174[(1)] = (1));

return statearr_46174;
});
var cljs$core$async$transduce_$_state_machine__45402__auto____1 = (function (state_46172){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_46172);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e46175){var ex__45405__auto__ = e46175;
var statearr_46176_47985 = state_46172;
(statearr_46176_47985[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_46172[(4)]))){
var statearr_46177_47986 = state_46172;
(statearr_46177_47986[(1)] = cljs.core.first((state_46172[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47987 = state_46172;
state_46172 = G__47987;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45402__auto__ = function(state_46172){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45402__auto____1.call(this,state_46172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45402__auto____0;
cljs$core$async$transduce_$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45402__auto____1;
return cljs$core$async$transduce_$_state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_46180 = f__45532__auto__();
(statearr_46180[(6)] = c__45531__auto__);

return statearr_46180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));

return c__45531__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__46186 = arguments.length;
switch (G__46186) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_46222){
var state_val_46223 = (state_46222[(1)]);
if((state_val_46223 === (7))){
var inst_46203 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46233_47991 = state_46222__$1;
(statearr_46233_47991[(2)] = inst_46203);

(statearr_46233_47991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (1))){
var inst_46189 = cljs.core.seq(coll);
var inst_46190 = inst_46189;
var state_46222__$1 = (function (){var statearr_46234 = state_46222;
(statearr_46234[(7)] = inst_46190);

return statearr_46234;
})();
var statearr_46235_47993 = state_46222__$1;
(statearr_46235_47993[(2)] = null);

(statearr_46235_47993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (4))){
var inst_46190 = (state_46222[(7)]);
var inst_46201 = cljs.core.first(inst_46190);
var state_46222__$1 = state_46222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46222__$1,(7),ch,inst_46201);
} else {
if((state_val_46223 === (13))){
var inst_46215 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46236_47995 = state_46222__$1;
(statearr_46236_47995[(2)] = inst_46215);

(statearr_46236_47995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (6))){
var inst_46206 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
if(cljs.core.truth_(inst_46206)){
var statearr_46238_47996 = state_46222__$1;
(statearr_46238_47996[(1)] = (8));

} else {
var statearr_46240_47998 = state_46222__$1;
(statearr_46240_47998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (3))){
var inst_46219 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46222__$1,inst_46219);
} else {
if((state_val_46223 === (12))){
var state_46222__$1 = state_46222;
var statearr_46241_48000 = state_46222__$1;
(statearr_46241_48000[(2)] = null);

(statearr_46241_48000[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (2))){
var inst_46190 = (state_46222[(7)]);
var state_46222__$1 = state_46222;
if(cljs.core.truth_(inst_46190)){
var statearr_46242_48001 = state_46222__$1;
(statearr_46242_48001[(1)] = (4));

} else {
var statearr_46243_48002 = state_46222__$1;
(statearr_46243_48002[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (11))){
var inst_46212 = cljs.core.async.close_BANG_(ch);
var state_46222__$1 = state_46222;
var statearr_46244_48005 = state_46222__$1;
(statearr_46244_48005[(2)] = inst_46212);

(statearr_46244_48005[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (9))){
var state_46222__$1 = state_46222;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46245_48006 = state_46222__$1;
(statearr_46245_48006[(1)] = (11));

} else {
var statearr_46249_48007 = state_46222__$1;
(statearr_46249_48007[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (5))){
var inst_46190 = (state_46222[(7)]);
var state_46222__$1 = state_46222;
var statearr_46250_48008 = state_46222__$1;
(statearr_46250_48008[(2)] = inst_46190);

(statearr_46250_48008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (10))){
var inst_46217 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46251_48009 = state_46222__$1;
(statearr_46251_48009[(2)] = inst_46217);

(statearr_46251_48009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (8))){
var inst_46190 = (state_46222[(7)]);
var inst_46208 = cljs.core.next(inst_46190);
var inst_46190__$1 = inst_46208;
var state_46222__$1 = (function (){var statearr_46252 = state_46222;
(statearr_46252[(7)] = inst_46190__$1);

return statearr_46252;
})();
var statearr_46253_48010 = state_46222__$1;
(statearr_46253_48010[(2)] = null);

(statearr_46253_48010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__45402__auto__ = null;
var cljs$core$async$state_machine__45402__auto____0 = (function (){
var statearr_46254 = [null,null,null,null,null,null,null,null];
(statearr_46254[(0)] = cljs$core$async$state_machine__45402__auto__);

(statearr_46254[(1)] = (1));

return statearr_46254;
});
var cljs$core$async$state_machine__45402__auto____1 = (function (state_46222){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_46222);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e46255){var ex__45405__auto__ = e46255;
var statearr_46256_48012 = state_46222;
(statearr_46256_48012[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_46222[(4)]))){
var statearr_46257_48013 = state_46222;
(statearr_46257_48013[(1)] = cljs.core.first((state_46222[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48018 = state_46222;
state_46222 = G__48018;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$state_machine__45402__auto__ = function(state_46222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45402__auto____1.call(this,state_46222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45402__auto____0;
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45402__auto____1;
return cljs$core$async$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_46258 = f__45532__auto__();
(statearr_46258[(6)] = c__45531__auto__);

return statearr_46258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));

return c__45531__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46260 = arguments.length;
switch (G__46260) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_48023 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48023(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48030 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48030(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48034 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48034(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48035 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48035(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46261 = (function (ch,cs,meta46262){
this.ch = ch;
this.cs = cs;
this.meta46262 = meta46262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46263,meta46262__$1){
var self__ = this;
var _46263__$1 = this;
return (new cljs.core.async.t_cljs$core$async46261(self__.ch,self__.cs,meta46262__$1));
}));

(cljs.core.async.t_cljs$core$async46261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46263){
var self__ = this;
var _46263__$1 = this;
return self__.meta46262;
}));

(cljs.core.async.t_cljs$core$async46261.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46261.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46261.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46261.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46261.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46262","meta46262",1741625120,null)], null);
}));

(cljs.core.async.t_cljs$core$async46261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46261");

(cljs.core.async.t_cljs$core$async46261.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46261.
 */
cljs.core.async.__GT_t_cljs$core$async46261 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46261(ch__$1,cs__$1,meta46262){
return (new cljs.core.async.t_cljs$core$async46261(ch__$1,cs__$1,meta46262));
});

}

return (new cljs.core.async.t_cljs$core$async46261(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45531__auto___48061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_46500){
var state_val_46501 = (state_46500[(1)]);
if((state_val_46501 === (7))){
var inst_46496 = (state_46500[(2)]);
var state_46500__$1 = state_46500;
var statearr_46502_48062 = state_46500__$1;
(statearr_46502_48062[(2)] = inst_46496);

(statearr_46502_48062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (20))){
var inst_46401 = (state_46500[(7)]);
var inst_46413 = cljs.core.first(inst_46401);
var inst_46414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46413,(0),null);
var inst_46415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46413,(1),null);
var state_46500__$1 = (function (){var statearr_46503 = state_46500;
(statearr_46503[(8)] = inst_46414);

return statearr_46503;
})();
if(cljs.core.truth_(inst_46415)){
var statearr_46504_48066 = state_46500__$1;
(statearr_46504_48066[(1)] = (22));

} else {
var statearr_46505_48067 = state_46500__$1;
(statearr_46505_48067[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (27))){
var inst_46445 = (state_46500[(9)]);
var inst_46443 = (state_46500[(10)]);
var inst_46450 = (state_46500[(11)]);
var inst_46267 = (state_46500[(12)]);
var inst_46450__$1 = cljs.core._nth(inst_46443,inst_46445);
var inst_46451 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46450__$1,inst_46267,done);
var state_46500__$1 = (function (){var statearr_46506 = state_46500;
(statearr_46506[(11)] = inst_46450__$1);

return statearr_46506;
})();
if(cljs.core.truth_(inst_46451)){
var statearr_46507_48068 = state_46500__$1;
(statearr_46507_48068[(1)] = (30));

} else {
var statearr_46508_48069 = state_46500__$1;
(statearr_46508_48069[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (1))){
var state_46500__$1 = state_46500;
var statearr_46509_48070 = state_46500__$1;
(statearr_46509_48070[(2)] = null);

(statearr_46509_48070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (24))){
var inst_46401 = (state_46500[(7)]);
var inst_46420 = (state_46500[(2)]);
var inst_46421 = cljs.core.next(inst_46401);
var inst_46379 = inst_46421;
var inst_46380 = null;
var inst_46381 = (0);
var inst_46382 = (0);
var state_46500__$1 = (function (){var statearr_46510 = state_46500;
(statearr_46510[(13)] = inst_46420);

(statearr_46510[(14)] = inst_46381);

(statearr_46510[(15)] = inst_46382);

(statearr_46510[(16)] = inst_46380);

(statearr_46510[(17)] = inst_46379);

return statearr_46510;
})();
var statearr_46511_48072 = state_46500__$1;
(statearr_46511_48072[(2)] = null);

(statearr_46511_48072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (39))){
var state_46500__$1 = state_46500;
var statearr_46515_48073 = state_46500__$1;
(statearr_46515_48073[(2)] = null);

(statearr_46515_48073[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (4))){
var inst_46267 = (state_46500[(12)]);
var inst_46267__$1 = (state_46500[(2)]);
var inst_46371 = (inst_46267__$1 == null);
var state_46500__$1 = (function (){var statearr_46516 = state_46500;
(statearr_46516[(12)] = inst_46267__$1);

return statearr_46516;
})();
if(cljs.core.truth_(inst_46371)){
var statearr_46517_48074 = state_46500__$1;
(statearr_46517_48074[(1)] = (5));

} else {
var statearr_46518_48075 = state_46500__$1;
(statearr_46518_48075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (15))){
var inst_46381 = (state_46500[(14)]);
var inst_46382 = (state_46500[(15)]);
var inst_46380 = (state_46500[(16)]);
var inst_46379 = (state_46500[(17)]);
var inst_46397 = (state_46500[(2)]);
var inst_46398 = (inst_46382 + (1));
var tmp46512 = inst_46381;
var tmp46513 = inst_46380;
var tmp46514 = inst_46379;
var inst_46379__$1 = tmp46514;
var inst_46380__$1 = tmp46513;
var inst_46381__$1 = tmp46512;
var inst_46382__$1 = inst_46398;
var state_46500__$1 = (function (){var statearr_46519 = state_46500;
(statearr_46519[(14)] = inst_46381__$1);

(statearr_46519[(15)] = inst_46382__$1);

(statearr_46519[(18)] = inst_46397);

(statearr_46519[(16)] = inst_46380__$1);

(statearr_46519[(17)] = inst_46379__$1);

return statearr_46519;
})();
var statearr_46520_48076 = state_46500__$1;
(statearr_46520_48076[(2)] = null);

(statearr_46520_48076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (21))){
var inst_46424 = (state_46500[(2)]);
var state_46500__$1 = state_46500;
var statearr_46524_48077 = state_46500__$1;
(statearr_46524_48077[(2)] = inst_46424);

(statearr_46524_48077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (31))){
var inst_46450 = (state_46500[(11)]);
var inst_46454 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46450);
var state_46500__$1 = state_46500;
var statearr_46525_48078 = state_46500__$1;
(statearr_46525_48078[(2)] = inst_46454);

(statearr_46525_48078[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (32))){
var inst_46445 = (state_46500[(9)]);
var inst_46444 = (state_46500[(19)]);
var inst_46443 = (state_46500[(10)]);
var inst_46442 = (state_46500[(20)]);
var inst_46456 = (state_46500[(2)]);
var inst_46457 = (inst_46445 + (1));
var tmp46521 = inst_46444;
var tmp46522 = inst_46443;
var tmp46523 = inst_46442;
var inst_46442__$1 = tmp46523;
var inst_46443__$1 = tmp46522;
var inst_46444__$1 = tmp46521;
var inst_46445__$1 = inst_46457;
var state_46500__$1 = (function (){var statearr_46526 = state_46500;
(statearr_46526[(9)] = inst_46445__$1);

(statearr_46526[(21)] = inst_46456);

(statearr_46526[(19)] = inst_46444__$1);

(statearr_46526[(10)] = inst_46443__$1);

(statearr_46526[(20)] = inst_46442__$1);

return statearr_46526;
})();
var statearr_46527_48079 = state_46500__$1;
(statearr_46527_48079[(2)] = null);

(statearr_46527_48079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (40))){
var inst_46469 = (state_46500[(22)]);
var inst_46473 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46469);
var state_46500__$1 = state_46500;
var statearr_46528_48080 = state_46500__$1;
(statearr_46528_48080[(2)] = inst_46473);

(statearr_46528_48080[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (33))){
var inst_46460 = (state_46500[(23)]);
var inst_46462 = cljs.core.chunked_seq_QMARK_(inst_46460);
var state_46500__$1 = state_46500;
if(inst_46462){
var statearr_46529_48081 = state_46500__$1;
(statearr_46529_48081[(1)] = (36));

} else {
var statearr_46530_48082 = state_46500__$1;
(statearr_46530_48082[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (13))){
var inst_46391 = (state_46500[(24)]);
var inst_46394 = cljs.core.async.close_BANG_(inst_46391);
var state_46500__$1 = state_46500;
var statearr_46531_48083 = state_46500__$1;
(statearr_46531_48083[(2)] = inst_46394);

(statearr_46531_48083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (22))){
var inst_46414 = (state_46500[(8)]);
var inst_46417 = cljs.core.async.close_BANG_(inst_46414);
var state_46500__$1 = state_46500;
var statearr_46532_48084 = state_46500__$1;
(statearr_46532_48084[(2)] = inst_46417);

(statearr_46532_48084[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (36))){
var inst_46460 = (state_46500[(23)]);
var inst_46464 = cljs.core.chunk_first(inst_46460);
var inst_46465 = cljs.core.chunk_rest(inst_46460);
var inst_46466 = cljs.core.count(inst_46464);
var inst_46442 = inst_46465;
var inst_46443 = inst_46464;
var inst_46444 = inst_46466;
var inst_46445 = (0);
var state_46500__$1 = (function (){var statearr_46533 = state_46500;
(statearr_46533[(9)] = inst_46445);

(statearr_46533[(19)] = inst_46444);

(statearr_46533[(10)] = inst_46443);

(statearr_46533[(20)] = inst_46442);

return statearr_46533;
})();
var statearr_46534_48085 = state_46500__$1;
(statearr_46534_48085[(2)] = null);

(statearr_46534_48085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (41))){
var inst_46460 = (state_46500[(23)]);
var inst_46475 = (state_46500[(2)]);
var inst_46476 = cljs.core.next(inst_46460);
var inst_46442 = inst_46476;
var inst_46443 = null;
var inst_46444 = (0);
var inst_46445 = (0);
var state_46500__$1 = (function (){var statearr_46535 = state_46500;
(statearr_46535[(9)] = inst_46445);

(statearr_46535[(19)] = inst_46444);

(statearr_46535[(10)] = inst_46443);

(statearr_46535[(20)] = inst_46442);

(statearr_46535[(25)] = inst_46475);

return statearr_46535;
})();
var statearr_46536_48086 = state_46500__$1;
(statearr_46536_48086[(2)] = null);

(statearr_46536_48086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (43))){
var state_46500__$1 = state_46500;
var statearr_46537_48087 = state_46500__$1;
(statearr_46537_48087[(2)] = null);

(statearr_46537_48087[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (29))){
var inst_46484 = (state_46500[(2)]);
var state_46500__$1 = state_46500;
var statearr_46538_48088 = state_46500__$1;
(statearr_46538_48088[(2)] = inst_46484);

(statearr_46538_48088[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (44))){
var inst_46493 = (state_46500[(2)]);
var state_46500__$1 = (function (){var statearr_46539 = state_46500;
(statearr_46539[(26)] = inst_46493);

return statearr_46539;
})();
var statearr_46540_48089 = state_46500__$1;
(statearr_46540_48089[(2)] = null);

(statearr_46540_48089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (6))){
var inst_46434 = (state_46500[(27)]);
var inst_46433 = cljs.core.deref(cs);
var inst_46434__$1 = cljs.core.keys(inst_46433);
var inst_46435 = cljs.core.count(inst_46434__$1);
var inst_46436 = cljs.core.reset_BANG_(dctr,inst_46435);
var inst_46441 = cljs.core.seq(inst_46434__$1);
var inst_46442 = inst_46441;
var inst_46443 = null;
var inst_46444 = (0);
var inst_46445 = (0);
var state_46500__$1 = (function (){var statearr_46541 = state_46500;
(statearr_46541[(9)] = inst_46445);

(statearr_46541[(28)] = inst_46436);

(statearr_46541[(19)] = inst_46444);

(statearr_46541[(10)] = inst_46443);

(statearr_46541[(20)] = inst_46442);

(statearr_46541[(27)] = inst_46434__$1);

return statearr_46541;
})();
var statearr_46542_48090 = state_46500__$1;
(statearr_46542_48090[(2)] = null);

(statearr_46542_48090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (28))){
var inst_46460 = (state_46500[(23)]);
var inst_46442 = (state_46500[(20)]);
var inst_46460__$1 = cljs.core.seq(inst_46442);
var state_46500__$1 = (function (){var statearr_46543 = state_46500;
(statearr_46543[(23)] = inst_46460__$1);

return statearr_46543;
})();
if(inst_46460__$1){
var statearr_46544_48091 = state_46500__$1;
(statearr_46544_48091[(1)] = (33));

} else {
var statearr_46545_48092 = state_46500__$1;
(statearr_46545_48092[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (25))){
var inst_46445 = (state_46500[(9)]);
var inst_46444 = (state_46500[(19)]);
var inst_46447 = (inst_46445 < inst_46444);
var inst_46448 = inst_46447;
var state_46500__$1 = state_46500;
if(cljs.core.truth_(inst_46448)){
var statearr_46546_48093 = state_46500__$1;
(statearr_46546_48093[(1)] = (27));

} else {
var statearr_46547_48094 = state_46500__$1;
(statearr_46547_48094[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (34))){
var state_46500__$1 = state_46500;
var statearr_46548_48095 = state_46500__$1;
(statearr_46548_48095[(2)] = null);

(statearr_46548_48095[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (17))){
var state_46500__$1 = state_46500;
var statearr_46549_48096 = state_46500__$1;
(statearr_46549_48096[(2)] = null);

(statearr_46549_48096[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (3))){
var inst_46498 = (state_46500[(2)]);
var state_46500__$1 = state_46500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46500__$1,inst_46498);
} else {
if((state_val_46501 === (12))){
var inst_46429 = (state_46500[(2)]);
var state_46500__$1 = state_46500;
var statearr_46550_48097 = state_46500__$1;
(statearr_46550_48097[(2)] = inst_46429);

(statearr_46550_48097[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (2))){
var state_46500__$1 = state_46500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46500__$1,(4),ch);
} else {
if((state_val_46501 === (23))){
var state_46500__$1 = state_46500;
var statearr_46551_48098 = state_46500__$1;
(statearr_46551_48098[(2)] = null);

(statearr_46551_48098[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (35))){
var inst_46482 = (state_46500[(2)]);
var state_46500__$1 = state_46500;
var statearr_46552_48099 = state_46500__$1;
(statearr_46552_48099[(2)] = inst_46482);

(statearr_46552_48099[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (19))){
var inst_46401 = (state_46500[(7)]);
var inst_46405 = cljs.core.chunk_first(inst_46401);
var inst_46406 = cljs.core.chunk_rest(inst_46401);
var inst_46407 = cljs.core.count(inst_46405);
var inst_46379 = inst_46406;
var inst_46380 = inst_46405;
var inst_46381 = inst_46407;
var inst_46382 = (0);
var state_46500__$1 = (function (){var statearr_46553 = state_46500;
(statearr_46553[(14)] = inst_46381);

(statearr_46553[(15)] = inst_46382);

(statearr_46553[(16)] = inst_46380);

(statearr_46553[(17)] = inst_46379);

return statearr_46553;
})();
var statearr_46554_48102 = state_46500__$1;
(statearr_46554_48102[(2)] = null);

(statearr_46554_48102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (11))){
var inst_46401 = (state_46500[(7)]);
var inst_46379 = (state_46500[(17)]);
var inst_46401__$1 = cljs.core.seq(inst_46379);
var state_46500__$1 = (function (){var statearr_46555 = state_46500;
(statearr_46555[(7)] = inst_46401__$1);

return statearr_46555;
})();
if(inst_46401__$1){
var statearr_46556_48106 = state_46500__$1;
(statearr_46556_48106[(1)] = (16));

} else {
var statearr_46557_48107 = state_46500__$1;
(statearr_46557_48107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (9))){
var inst_46431 = (state_46500[(2)]);
var state_46500__$1 = state_46500;
var statearr_46558_48109 = state_46500__$1;
(statearr_46558_48109[(2)] = inst_46431);

(statearr_46558_48109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (5))){
var inst_46377 = cljs.core.deref(cs);
var inst_46378 = cljs.core.seq(inst_46377);
var inst_46379 = inst_46378;
var inst_46380 = null;
var inst_46381 = (0);
var inst_46382 = (0);
var state_46500__$1 = (function (){var statearr_46559 = state_46500;
(statearr_46559[(14)] = inst_46381);

(statearr_46559[(15)] = inst_46382);

(statearr_46559[(16)] = inst_46380);

(statearr_46559[(17)] = inst_46379);

return statearr_46559;
})();
var statearr_46560_48110 = state_46500__$1;
(statearr_46560_48110[(2)] = null);

(statearr_46560_48110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (14))){
var state_46500__$1 = state_46500;
var statearr_46561_48112 = state_46500__$1;
(statearr_46561_48112[(2)] = null);

(statearr_46561_48112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (45))){
var inst_46490 = (state_46500[(2)]);
var state_46500__$1 = state_46500;
var statearr_46562_48113 = state_46500__$1;
(statearr_46562_48113[(2)] = inst_46490);

(statearr_46562_48113[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (26))){
var inst_46434 = (state_46500[(27)]);
var inst_46486 = (state_46500[(2)]);
var inst_46487 = cljs.core.seq(inst_46434);
var state_46500__$1 = (function (){var statearr_46563 = state_46500;
(statearr_46563[(29)] = inst_46486);

return statearr_46563;
})();
if(inst_46487){
var statearr_46564_48115 = state_46500__$1;
(statearr_46564_48115[(1)] = (42));

} else {
var statearr_46565_48116 = state_46500__$1;
(statearr_46565_48116[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (16))){
var inst_46401 = (state_46500[(7)]);
var inst_46403 = cljs.core.chunked_seq_QMARK_(inst_46401);
var state_46500__$1 = state_46500;
if(inst_46403){
var statearr_46566_48117 = state_46500__$1;
(statearr_46566_48117[(1)] = (19));

} else {
var statearr_46567_48118 = state_46500__$1;
(statearr_46567_48118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (38))){
var inst_46479 = (state_46500[(2)]);
var state_46500__$1 = state_46500;
var statearr_46568_48119 = state_46500__$1;
(statearr_46568_48119[(2)] = inst_46479);

(statearr_46568_48119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (30))){
var state_46500__$1 = state_46500;
var statearr_46569_48120 = state_46500__$1;
(statearr_46569_48120[(2)] = null);

(statearr_46569_48120[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (10))){
var inst_46382 = (state_46500[(15)]);
var inst_46380 = (state_46500[(16)]);
var inst_46390 = cljs.core._nth(inst_46380,inst_46382);
var inst_46391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46390,(0),null);
var inst_46392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46390,(1),null);
var state_46500__$1 = (function (){var statearr_46570 = state_46500;
(statearr_46570[(24)] = inst_46391);

return statearr_46570;
})();
if(cljs.core.truth_(inst_46392)){
var statearr_46571_48121 = state_46500__$1;
(statearr_46571_48121[(1)] = (13));

} else {
var statearr_46572_48122 = state_46500__$1;
(statearr_46572_48122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (18))){
var inst_46427 = (state_46500[(2)]);
var state_46500__$1 = state_46500;
var statearr_46573_48123 = state_46500__$1;
(statearr_46573_48123[(2)] = inst_46427);

(statearr_46573_48123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (42))){
var state_46500__$1 = state_46500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46500__$1,(45),dchan);
} else {
if((state_val_46501 === (37))){
var inst_46460 = (state_46500[(23)]);
var inst_46469 = (state_46500[(22)]);
var inst_46267 = (state_46500[(12)]);
var inst_46469__$1 = cljs.core.first(inst_46460);
var inst_46470 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46469__$1,inst_46267,done);
var state_46500__$1 = (function (){var statearr_46574 = state_46500;
(statearr_46574[(22)] = inst_46469__$1);

return statearr_46574;
})();
if(cljs.core.truth_(inst_46470)){
var statearr_46575_48125 = state_46500__$1;
(statearr_46575_48125[(1)] = (39));

} else {
var statearr_46576_48126 = state_46500__$1;
(statearr_46576_48126[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46501 === (8))){
var inst_46381 = (state_46500[(14)]);
var inst_46382 = (state_46500[(15)]);
var inst_46384 = (inst_46382 < inst_46381);
var inst_46385 = inst_46384;
var state_46500__$1 = state_46500;
if(cljs.core.truth_(inst_46385)){
var statearr_46577_48130 = state_46500__$1;
(statearr_46577_48130[(1)] = (10));

} else {
var statearr_46578_48131 = state_46500__$1;
(statearr_46578_48131[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$mult_$_state_machine__45402__auto__ = null;
var cljs$core$async$mult_$_state_machine__45402__auto____0 = (function (){
var statearr_46579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46579[(0)] = cljs$core$async$mult_$_state_machine__45402__auto__);

(statearr_46579[(1)] = (1));

return statearr_46579;
});
var cljs$core$async$mult_$_state_machine__45402__auto____1 = (function (state_46500){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_46500);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e46580){var ex__45405__auto__ = e46580;
var statearr_46581_48136 = state_46500;
(statearr_46581_48136[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_46500[(4)]))){
var statearr_46582_48137 = state_46500;
(statearr_46582_48137[(1)] = cljs.core.first((state_46500[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48138 = state_46500;
state_46500 = G__48138;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45402__auto__ = function(state_46500){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45402__auto____1.call(this,state_46500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45402__auto____0;
cljs$core$async$mult_$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45402__auto____1;
return cljs$core$async$mult_$_state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_46583 = f__45532__auto__();
(statearr_46583[(6)] = c__45531__auto___48061);

return statearr_46583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46586 = arguments.length;
switch (G__46586) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_48147 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48147(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48154 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48154(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48155 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48155(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48156 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48156(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48157 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48157(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48158 = arguments.length;
var i__5770__auto___48159 = (0);
while(true){
if((i__5770__auto___48159 < len__5769__auto___48158)){
args__5775__auto__.push((arguments[i__5770__auto___48159]));

var G__48160 = (i__5770__auto___48159 + (1));
i__5770__auto___48159 = G__48160;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46592){
var map__46593 = p__46592;
var map__46593__$1 = cljs.core.__destructure_map(map__46593);
var opts = map__46593__$1;
var statearr_46594_48161 = state;
(statearr_46594_48161[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46595_48162 = state;
(statearr_46595_48162[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_46596_48163 = state;
(statearr_46596_48163[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46588){
var G__46589 = cljs.core.first(seq46588);
var seq46588__$1 = cljs.core.next(seq46588);
var G__46590 = cljs.core.first(seq46588__$1);
var seq46588__$2 = cljs.core.next(seq46588__$1);
var G__46591 = cljs.core.first(seq46588__$2);
var seq46588__$3 = cljs.core.next(seq46588__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46589,G__46590,G__46591,seq46588__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46597 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46598){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46598 = meta46598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46599,meta46598__$1){
var self__ = this;
var _46599__$1 = this;
return (new cljs.core.async.t_cljs$core$async46597(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46598__$1));
}));

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46599){
var self__ = this;
var _46599__$1 = this;
return self__.meta46598;
}));

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46598","meta46598",1104093729,null)], null);
}));

(cljs.core.async.t_cljs$core$async46597.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46597");

(cljs.core.async.t_cljs$core$async46597.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46597");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46597.
 */
cljs.core.async.__GT_t_cljs$core$async46597 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46597(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46598){
return (new cljs.core.async.t_cljs$core$async46597(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46598));
});

}

return (new cljs.core.async.t_cljs$core$async46597(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45531__auto___48181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_46667){
var state_val_46668 = (state_46667[(1)]);
if((state_val_46668 === (7))){
var inst_46627 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
if(cljs.core.truth_(inst_46627)){
var statearr_46669_48183 = state_46667__$1;
(statearr_46669_48183[(1)] = (8));

} else {
var statearr_46670_48184 = state_46667__$1;
(statearr_46670_48184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (20))){
var inst_46620 = (state_46667[(7)]);
var state_46667__$1 = state_46667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46667__$1,(23),out,inst_46620);
} else {
if((state_val_46668 === (1))){
var inst_46603 = calc_state();
var inst_46604 = cljs.core.__destructure_map(inst_46603);
var inst_46605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46604,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46604,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46604,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46608 = inst_46603;
var state_46667__$1 = (function (){var statearr_46671 = state_46667;
(statearr_46671[(8)] = inst_46605);

(statearr_46671[(9)] = inst_46606);

(statearr_46671[(10)] = inst_46607);

(statearr_46671[(11)] = inst_46608);

return statearr_46671;
})();
var statearr_46672_48185 = state_46667__$1;
(statearr_46672_48185[(2)] = null);

(statearr_46672_48185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (24))){
var inst_46611 = (state_46667[(12)]);
var inst_46608 = inst_46611;
var state_46667__$1 = (function (){var statearr_46673 = state_46667;
(statearr_46673[(11)] = inst_46608);

return statearr_46673;
})();
var statearr_46674_48186 = state_46667__$1;
(statearr_46674_48186[(2)] = null);

(statearr_46674_48186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (4))){
var inst_46622 = (state_46667[(13)]);
var inst_46620 = (state_46667[(7)]);
var inst_46619 = (state_46667[(2)]);
var inst_46620__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46619,(0),null);
var inst_46621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46619,(1),null);
var inst_46622__$1 = (inst_46620__$1 == null);
var state_46667__$1 = (function (){var statearr_46675 = state_46667;
(statearr_46675[(13)] = inst_46622__$1);

(statearr_46675[(14)] = inst_46621);

(statearr_46675[(7)] = inst_46620__$1);

return statearr_46675;
})();
if(cljs.core.truth_(inst_46622__$1)){
var statearr_46676_48187 = state_46667__$1;
(statearr_46676_48187[(1)] = (5));

} else {
var statearr_46677_48188 = state_46667__$1;
(statearr_46677_48188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (15))){
var inst_46641 = (state_46667[(15)]);
var inst_46612 = (state_46667[(16)]);
var inst_46641__$1 = cljs.core.empty_QMARK_(inst_46612);
var state_46667__$1 = (function (){var statearr_46678 = state_46667;
(statearr_46678[(15)] = inst_46641__$1);

return statearr_46678;
})();
if(inst_46641__$1){
var statearr_46679_48189 = state_46667__$1;
(statearr_46679_48189[(1)] = (17));

} else {
var statearr_46680_48190 = state_46667__$1;
(statearr_46680_48190[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (21))){
var inst_46611 = (state_46667[(12)]);
var inst_46608 = inst_46611;
var state_46667__$1 = (function (){var statearr_46681 = state_46667;
(statearr_46681[(11)] = inst_46608);

return statearr_46681;
})();
var statearr_46682_48191 = state_46667__$1;
(statearr_46682_48191[(2)] = null);

(statearr_46682_48191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (13))){
var inst_46634 = (state_46667[(2)]);
var inst_46635 = calc_state();
var inst_46608 = inst_46635;
var state_46667__$1 = (function (){var statearr_46683 = state_46667;
(statearr_46683[(17)] = inst_46634);

(statearr_46683[(11)] = inst_46608);

return statearr_46683;
})();
var statearr_46684_48192 = state_46667__$1;
(statearr_46684_48192[(2)] = null);

(statearr_46684_48192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (22))){
var inst_46661 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
var statearr_46685_48199 = state_46667__$1;
(statearr_46685_48199[(2)] = inst_46661);

(statearr_46685_48199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (6))){
var inst_46621 = (state_46667[(14)]);
var inst_46625 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46621,change);
var state_46667__$1 = state_46667;
var statearr_46686_48201 = state_46667__$1;
(statearr_46686_48201[(2)] = inst_46625);

(statearr_46686_48201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (25))){
var state_46667__$1 = state_46667;
var statearr_46687_48202 = state_46667__$1;
(statearr_46687_48202[(2)] = null);

(statearr_46687_48202[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (17))){
var inst_46621 = (state_46667[(14)]);
var inst_46613 = (state_46667[(18)]);
var inst_46643 = (inst_46613.cljs$core$IFn$_invoke$arity$1 ? inst_46613.cljs$core$IFn$_invoke$arity$1(inst_46621) : inst_46613.call(null,inst_46621));
var inst_46644 = cljs.core.not(inst_46643);
var state_46667__$1 = state_46667;
var statearr_46688_48203 = state_46667__$1;
(statearr_46688_48203[(2)] = inst_46644);

(statearr_46688_48203[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (3))){
var inst_46665 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46667__$1,inst_46665);
} else {
if((state_val_46668 === (12))){
var state_46667__$1 = state_46667;
var statearr_46689_48204 = state_46667__$1;
(statearr_46689_48204[(2)] = null);

(statearr_46689_48204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (2))){
var inst_46611 = (state_46667[(12)]);
var inst_46608 = (state_46667[(11)]);
var inst_46611__$1 = cljs.core.__destructure_map(inst_46608);
var inst_46612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46611__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46611__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46611__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46667__$1 = (function (){var statearr_46690 = state_46667;
(statearr_46690[(16)] = inst_46612);

(statearr_46690[(12)] = inst_46611__$1);

(statearr_46690[(18)] = inst_46613);

return statearr_46690;
})();
return cljs.core.async.ioc_alts_BANG_(state_46667__$1,(4),inst_46614);
} else {
if((state_val_46668 === (23))){
var inst_46652 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
if(cljs.core.truth_(inst_46652)){
var statearr_46691_48205 = state_46667__$1;
(statearr_46691_48205[(1)] = (24));

} else {
var statearr_46692_48206 = state_46667__$1;
(statearr_46692_48206[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (19))){
var inst_46647 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
var statearr_46693_48207 = state_46667__$1;
(statearr_46693_48207[(2)] = inst_46647);

(statearr_46693_48207[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (11))){
var inst_46621 = (state_46667[(14)]);
var inst_46631 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46621);
var state_46667__$1 = state_46667;
var statearr_46694_48208 = state_46667__$1;
(statearr_46694_48208[(2)] = inst_46631);

(statearr_46694_48208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (9))){
var inst_46638 = (state_46667[(19)]);
var inst_46612 = (state_46667[(16)]);
var inst_46621 = (state_46667[(14)]);
var inst_46638__$1 = (inst_46612.cljs$core$IFn$_invoke$arity$1 ? inst_46612.cljs$core$IFn$_invoke$arity$1(inst_46621) : inst_46612.call(null,inst_46621));
var state_46667__$1 = (function (){var statearr_46695 = state_46667;
(statearr_46695[(19)] = inst_46638__$1);

return statearr_46695;
})();
if(cljs.core.truth_(inst_46638__$1)){
var statearr_46696_48209 = state_46667__$1;
(statearr_46696_48209[(1)] = (14));

} else {
var statearr_46697_48210 = state_46667__$1;
(statearr_46697_48210[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (5))){
var inst_46622 = (state_46667[(13)]);
var state_46667__$1 = state_46667;
var statearr_46698_48212 = state_46667__$1;
(statearr_46698_48212[(2)] = inst_46622);

(statearr_46698_48212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (14))){
var inst_46638 = (state_46667[(19)]);
var state_46667__$1 = state_46667;
var statearr_46699_48214 = state_46667__$1;
(statearr_46699_48214[(2)] = inst_46638);

(statearr_46699_48214[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (26))){
var inst_46657 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
var statearr_46700_48216 = state_46667__$1;
(statearr_46700_48216[(2)] = inst_46657);

(statearr_46700_48216[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (16))){
var inst_46649 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
if(cljs.core.truth_(inst_46649)){
var statearr_46701_48217 = state_46667__$1;
(statearr_46701_48217[(1)] = (20));

} else {
var statearr_46702_48218 = state_46667__$1;
(statearr_46702_48218[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (10))){
var inst_46663 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
var statearr_46703_48219 = state_46667__$1;
(statearr_46703_48219[(2)] = inst_46663);

(statearr_46703_48219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (18))){
var inst_46641 = (state_46667[(15)]);
var state_46667__$1 = state_46667;
var statearr_46704_48220 = state_46667__$1;
(statearr_46704_48220[(2)] = inst_46641);

(statearr_46704_48220[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (8))){
var inst_46620 = (state_46667[(7)]);
var inst_46629 = (inst_46620 == null);
var state_46667__$1 = state_46667;
if(cljs.core.truth_(inst_46629)){
var statearr_46705_48221 = state_46667__$1;
(statearr_46705_48221[(1)] = (11));

} else {
var statearr_46706_48222 = state_46667__$1;
(statearr_46706_48222[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$mix_$_state_machine__45402__auto__ = null;
var cljs$core$async$mix_$_state_machine__45402__auto____0 = (function (){
var statearr_46707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46707[(0)] = cljs$core$async$mix_$_state_machine__45402__auto__);

(statearr_46707[(1)] = (1));

return statearr_46707;
});
var cljs$core$async$mix_$_state_machine__45402__auto____1 = (function (state_46667){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_46667);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e46708){var ex__45405__auto__ = e46708;
var statearr_46709_48223 = state_46667;
(statearr_46709_48223[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_46667[(4)]))){
var statearr_46710_48224 = state_46667;
(statearr_46710_48224[(1)] = cljs.core.first((state_46667[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48225 = state_46667;
state_46667 = G__48225;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45402__auto__ = function(state_46667){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45402__auto____1.call(this,state_46667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45402__auto____0;
cljs$core$async$mix_$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45402__auto____1;
return cljs$core$async$mix_$_state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_46711 = f__45532__auto__();
(statearr_46711[(6)] = c__45531__auto___48181);

return statearr_46711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48227 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48227(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48233 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48233(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48239 = (function() {
var G__48240 = null;
var G__48240__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48240__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48240 = function(p,v){
switch(arguments.length){
case 1:
return G__48240__1.call(this,p);
case 2:
return G__48240__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48240.cljs$core$IFn$_invoke$arity$1 = G__48240__1;
G__48240.cljs$core$IFn$_invoke$arity$2 = G__48240__2;
return G__48240;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46713 = arguments.length;
switch (G__46713) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48239(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48239(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46716 = arguments.length;
switch (G__46716) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46714_SHARP_){
if(cljs.core.truth_((p1__46714_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46714_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46714_SHARP_.call(null,topic)))){
return p1__46714_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46714_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46717 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46718){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46718 = meta46718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46719,meta46718__$1){
var self__ = this;
var _46719__$1 = this;
return (new cljs.core.async.t_cljs$core$async46717(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46718__$1));
}));

(cljs.core.async.t_cljs$core$async46717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46719){
var self__ = this;
var _46719__$1 = this;
return self__.meta46718;
}));

(cljs.core.async.t_cljs$core$async46717.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46717.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46717.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46717.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46718","meta46718",201479186,null)], null);
}));

(cljs.core.async.t_cljs$core$async46717.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46717");

(cljs.core.async.t_cljs$core$async46717.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46717");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46717.
 */
cljs.core.async.__GT_t_cljs$core$async46717 = (function cljs$core$async$__GT_t_cljs$core$async46717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46718){
return (new cljs.core.async.t_cljs$core$async46717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46718));
});

}

return (new cljs.core.async.t_cljs$core$async46717(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45531__auto___48253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_46791){
var state_val_46792 = (state_46791[(1)]);
if((state_val_46792 === (7))){
var inst_46787 = (state_46791[(2)]);
var state_46791__$1 = state_46791;
var statearr_46793_48255 = state_46791__$1;
(statearr_46793_48255[(2)] = inst_46787);

(statearr_46793_48255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (20))){
var state_46791__$1 = state_46791;
var statearr_46794_48257 = state_46791__$1;
(statearr_46794_48257[(2)] = null);

(statearr_46794_48257[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (1))){
var state_46791__$1 = state_46791;
var statearr_46795_48259 = state_46791__$1;
(statearr_46795_48259[(2)] = null);

(statearr_46795_48259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (24))){
var inst_46770 = (state_46791[(7)]);
var inst_46779 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46770);
var state_46791__$1 = state_46791;
var statearr_46796_48260 = state_46791__$1;
(statearr_46796_48260[(2)] = inst_46779);

(statearr_46796_48260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (4))){
var inst_46722 = (state_46791[(8)]);
var inst_46722__$1 = (state_46791[(2)]);
var inst_46723 = (inst_46722__$1 == null);
var state_46791__$1 = (function (){var statearr_46797 = state_46791;
(statearr_46797[(8)] = inst_46722__$1);

return statearr_46797;
})();
if(cljs.core.truth_(inst_46723)){
var statearr_46798_48261 = state_46791__$1;
(statearr_46798_48261[(1)] = (5));

} else {
var statearr_46799_48263 = state_46791__$1;
(statearr_46799_48263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (15))){
var inst_46764 = (state_46791[(2)]);
var state_46791__$1 = state_46791;
var statearr_46800_48265 = state_46791__$1;
(statearr_46800_48265[(2)] = inst_46764);

(statearr_46800_48265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (21))){
var inst_46784 = (state_46791[(2)]);
var state_46791__$1 = (function (){var statearr_46801 = state_46791;
(statearr_46801[(9)] = inst_46784);

return statearr_46801;
})();
var statearr_46802_48266 = state_46791__$1;
(statearr_46802_48266[(2)] = null);

(statearr_46802_48266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (13))){
var inst_46746 = (state_46791[(10)]);
var inst_46748 = cljs.core.chunked_seq_QMARK_(inst_46746);
var state_46791__$1 = state_46791;
if(inst_46748){
var statearr_46803_48267 = state_46791__$1;
(statearr_46803_48267[(1)] = (16));

} else {
var statearr_46804_48268 = state_46791__$1;
(statearr_46804_48268[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (22))){
var inst_46776 = (state_46791[(2)]);
var state_46791__$1 = state_46791;
if(cljs.core.truth_(inst_46776)){
var statearr_46805_48269 = state_46791__$1;
(statearr_46805_48269[(1)] = (23));

} else {
var statearr_46806_48270 = state_46791__$1;
(statearr_46806_48270[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (6))){
var inst_46770 = (state_46791[(7)]);
var inst_46772 = (state_46791[(11)]);
var inst_46722 = (state_46791[(8)]);
var inst_46770__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46722) : topic_fn.call(null,inst_46722));
var inst_46771 = cljs.core.deref(mults);
var inst_46772__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46771,inst_46770__$1);
var state_46791__$1 = (function (){var statearr_46807 = state_46791;
(statearr_46807[(7)] = inst_46770__$1);

(statearr_46807[(11)] = inst_46772__$1);

return statearr_46807;
})();
if(cljs.core.truth_(inst_46772__$1)){
var statearr_46808_48271 = state_46791__$1;
(statearr_46808_48271[(1)] = (19));

} else {
var statearr_46809_48272 = state_46791__$1;
(statearr_46809_48272[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (25))){
var inst_46781 = (state_46791[(2)]);
var state_46791__$1 = state_46791;
var statearr_46810_48274 = state_46791__$1;
(statearr_46810_48274[(2)] = inst_46781);

(statearr_46810_48274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (17))){
var inst_46746 = (state_46791[(10)]);
var inst_46755 = cljs.core.first(inst_46746);
var inst_46756 = cljs.core.async.muxch_STAR_(inst_46755);
var inst_46757 = cljs.core.async.close_BANG_(inst_46756);
var inst_46758 = cljs.core.next(inst_46746);
var inst_46732 = inst_46758;
var inst_46733 = null;
var inst_46734 = (0);
var inst_46735 = (0);
var state_46791__$1 = (function (){var statearr_46811 = state_46791;
(statearr_46811[(12)] = inst_46732);

(statearr_46811[(13)] = inst_46733);

(statearr_46811[(14)] = inst_46735);

(statearr_46811[(15)] = inst_46757);

(statearr_46811[(16)] = inst_46734);

return statearr_46811;
})();
var statearr_46812_48276 = state_46791__$1;
(statearr_46812_48276[(2)] = null);

(statearr_46812_48276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (3))){
var inst_46789 = (state_46791[(2)]);
var state_46791__$1 = state_46791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46791__$1,inst_46789);
} else {
if((state_val_46792 === (12))){
var inst_46766 = (state_46791[(2)]);
var state_46791__$1 = state_46791;
var statearr_46813_48278 = state_46791__$1;
(statearr_46813_48278[(2)] = inst_46766);

(statearr_46813_48278[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (2))){
var state_46791__$1 = state_46791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46791__$1,(4),ch);
} else {
if((state_val_46792 === (23))){
var state_46791__$1 = state_46791;
var statearr_46814_48280 = state_46791__$1;
(statearr_46814_48280[(2)] = null);

(statearr_46814_48280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (19))){
var inst_46772 = (state_46791[(11)]);
var inst_46722 = (state_46791[(8)]);
var inst_46774 = cljs.core.async.muxch_STAR_(inst_46772);
var state_46791__$1 = state_46791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46791__$1,(22),inst_46774,inst_46722);
} else {
if((state_val_46792 === (11))){
var inst_46732 = (state_46791[(12)]);
var inst_46746 = (state_46791[(10)]);
var inst_46746__$1 = cljs.core.seq(inst_46732);
var state_46791__$1 = (function (){var statearr_46815 = state_46791;
(statearr_46815[(10)] = inst_46746__$1);

return statearr_46815;
})();
if(inst_46746__$1){
var statearr_46816_48281 = state_46791__$1;
(statearr_46816_48281[(1)] = (13));

} else {
var statearr_46817_48282 = state_46791__$1;
(statearr_46817_48282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (9))){
var inst_46768 = (state_46791[(2)]);
var state_46791__$1 = state_46791;
var statearr_46818_48283 = state_46791__$1;
(statearr_46818_48283[(2)] = inst_46768);

(statearr_46818_48283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (5))){
var inst_46729 = cljs.core.deref(mults);
var inst_46730 = cljs.core.vals(inst_46729);
var inst_46731 = cljs.core.seq(inst_46730);
var inst_46732 = inst_46731;
var inst_46733 = null;
var inst_46734 = (0);
var inst_46735 = (0);
var state_46791__$1 = (function (){var statearr_46819 = state_46791;
(statearr_46819[(12)] = inst_46732);

(statearr_46819[(13)] = inst_46733);

(statearr_46819[(14)] = inst_46735);

(statearr_46819[(16)] = inst_46734);

return statearr_46819;
})();
var statearr_46821_48284 = state_46791__$1;
(statearr_46821_48284[(2)] = null);

(statearr_46821_48284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (14))){
var state_46791__$1 = state_46791;
var statearr_46825_48285 = state_46791__$1;
(statearr_46825_48285[(2)] = null);

(statearr_46825_48285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (16))){
var inst_46746 = (state_46791[(10)]);
var inst_46750 = cljs.core.chunk_first(inst_46746);
var inst_46751 = cljs.core.chunk_rest(inst_46746);
var inst_46752 = cljs.core.count(inst_46750);
var inst_46732 = inst_46751;
var inst_46733 = inst_46750;
var inst_46734 = inst_46752;
var inst_46735 = (0);
var state_46791__$1 = (function (){var statearr_46826 = state_46791;
(statearr_46826[(12)] = inst_46732);

(statearr_46826[(13)] = inst_46733);

(statearr_46826[(14)] = inst_46735);

(statearr_46826[(16)] = inst_46734);

return statearr_46826;
})();
var statearr_46827_48290 = state_46791__$1;
(statearr_46827_48290[(2)] = null);

(statearr_46827_48290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (10))){
var inst_46732 = (state_46791[(12)]);
var inst_46733 = (state_46791[(13)]);
var inst_46735 = (state_46791[(14)]);
var inst_46734 = (state_46791[(16)]);
var inst_46740 = cljs.core._nth(inst_46733,inst_46735);
var inst_46741 = cljs.core.async.muxch_STAR_(inst_46740);
var inst_46742 = cljs.core.async.close_BANG_(inst_46741);
var inst_46743 = (inst_46735 + (1));
var tmp46822 = inst_46732;
var tmp46823 = inst_46733;
var tmp46824 = inst_46734;
var inst_46732__$1 = tmp46822;
var inst_46733__$1 = tmp46823;
var inst_46734__$1 = tmp46824;
var inst_46735__$1 = inst_46743;
var state_46791__$1 = (function (){var statearr_46828 = state_46791;
(statearr_46828[(12)] = inst_46732__$1);

(statearr_46828[(13)] = inst_46733__$1);

(statearr_46828[(14)] = inst_46735__$1);

(statearr_46828[(17)] = inst_46742);

(statearr_46828[(16)] = inst_46734__$1);

return statearr_46828;
})();
var statearr_46829_48292 = state_46791__$1;
(statearr_46829_48292[(2)] = null);

(statearr_46829_48292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (18))){
var inst_46761 = (state_46791[(2)]);
var state_46791__$1 = state_46791;
var statearr_46830_48293 = state_46791__$1;
(statearr_46830_48293[(2)] = inst_46761);

(statearr_46830_48293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46792 === (8))){
var inst_46735 = (state_46791[(14)]);
var inst_46734 = (state_46791[(16)]);
var inst_46737 = (inst_46735 < inst_46734);
var inst_46738 = inst_46737;
var state_46791__$1 = state_46791;
if(cljs.core.truth_(inst_46738)){
var statearr_46831_48294 = state_46791__$1;
(statearr_46831_48294[(1)] = (10));

} else {
var statearr_46832_48295 = state_46791__$1;
(statearr_46832_48295[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__45402__auto__ = null;
var cljs$core$async$state_machine__45402__auto____0 = (function (){
var statearr_46833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46833[(0)] = cljs$core$async$state_machine__45402__auto__);

(statearr_46833[(1)] = (1));

return statearr_46833;
});
var cljs$core$async$state_machine__45402__auto____1 = (function (state_46791){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_46791);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e46834){var ex__45405__auto__ = e46834;
var statearr_46835_48296 = state_46791;
(statearr_46835_48296[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_46791[(4)]))){
var statearr_46836_48297 = state_46791;
(statearr_46836_48297[(1)] = cljs.core.first((state_46791[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48298 = state_46791;
state_46791 = G__48298;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$state_machine__45402__auto__ = function(state_46791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45402__auto____1.call(this,state_46791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45402__auto____0;
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45402__auto____1;
return cljs$core$async$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_46838 = f__45532__auto__();
(statearr_46838[(6)] = c__45531__auto___48253);

return statearr_46838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46840 = arguments.length;
switch (G__46840) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46842 = arguments.length;
switch (G__46842) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46844 = arguments.length;
switch (G__46844) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__45531__auto___48309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_46887){
var state_val_46888 = (state_46887[(1)]);
if((state_val_46888 === (7))){
var state_46887__$1 = state_46887;
var statearr_46889_48310 = state_46887__$1;
(statearr_46889_48310[(2)] = null);

(statearr_46889_48310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (1))){
var state_46887__$1 = state_46887;
var statearr_46890_48311 = state_46887__$1;
(statearr_46890_48311[(2)] = null);

(statearr_46890_48311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (4))){
var inst_46847 = (state_46887[(7)]);
var inst_46848 = (state_46887[(8)]);
var inst_46850 = (inst_46848 < inst_46847);
var state_46887__$1 = state_46887;
if(cljs.core.truth_(inst_46850)){
var statearr_46891_48312 = state_46887__$1;
(statearr_46891_48312[(1)] = (6));

} else {
var statearr_46892_48314 = state_46887__$1;
(statearr_46892_48314[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (15))){
var inst_46873 = (state_46887[(9)]);
var inst_46878 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46873);
var state_46887__$1 = state_46887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46887__$1,(17),out,inst_46878);
} else {
if((state_val_46888 === (13))){
var inst_46873 = (state_46887[(9)]);
var inst_46873__$1 = (state_46887[(2)]);
var inst_46874 = cljs.core.some(cljs.core.nil_QMARK_,inst_46873__$1);
var state_46887__$1 = (function (){var statearr_46893 = state_46887;
(statearr_46893[(9)] = inst_46873__$1);

return statearr_46893;
})();
if(cljs.core.truth_(inst_46874)){
var statearr_46894_48315 = state_46887__$1;
(statearr_46894_48315[(1)] = (14));

} else {
var statearr_46895_48316 = state_46887__$1;
(statearr_46895_48316[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (6))){
var state_46887__$1 = state_46887;
var statearr_46896_48317 = state_46887__$1;
(statearr_46896_48317[(2)] = null);

(statearr_46896_48317[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (17))){
var inst_46880 = (state_46887[(2)]);
var state_46887__$1 = (function (){var statearr_46898 = state_46887;
(statearr_46898[(10)] = inst_46880);

return statearr_46898;
})();
var statearr_46899_48323 = state_46887__$1;
(statearr_46899_48323[(2)] = null);

(statearr_46899_48323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (3))){
var inst_46885 = (state_46887[(2)]);
var state_46887__$1 = state_46887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46887__$1,inst_46885);
} else {
if((state_val_46888 === (12))){
var _ = (function (){var statearr_46900 = state_46887;
(statearr_46900[(4)] = cljs.core.rest((state_46887[(4)])));

return statearr_46900;
})();
var state_46887__$1 = state_46887;
var ex46897 = (state_46887__$1[(2)]);
var statearr_46901_48330 = state_46887__$1;
(statearr_46901_48330[(5)] = ex46897);


if((ex46897 instanceof Object)){
var statearr_46902_48332 = state_46887__$1;
(statearr_46902_48332[(1)] = (11));

(statearr_46902_48332[(5)] = null);

} else {
throw ex46897;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (2))){
var inst_46846 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46847 = cnt;
var inst_46848 = (0);
var state_46887__$1 = (function (){var statearr_46903 = state_46887;
(statearr_46903[(11)] = inst_46846);

(statearr_46903[(7)] = inst_46847);

(statearr_46903[(8)] = inst_46848);

return statearr_46903;
})();
var statearr_46904_48333 = state_46887__$1;
(statearr_46904_48333[(2)] = null);

(statearr_46904_48333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (11))){
var inst_46852 = (state_46887[(2)]);
var inst_46853 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46887__$1 = (function (){var statearr_46905 = state_46887;
(statearr_46905[(12)] = inst_46852);

return statearr_46905;
})();
var statearr_46906_48337 = state_46887__$1;
(statearr_46906_48337[(2)] = inst_46853);

(statearr_46906_48337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (9))){
var inst_46848 = (state_46887[(8)]);
var _ = (function (){var statearr_46907 = state_46887;
(statearr_46907[(4)] = cljs.core.cons((12),(state_46887[(4)])));

return statearr_46907;
})();
var inst_46859 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46848) : chs__$1.call(null,inst_46848));
var inst_46860 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46848) : done.call(null,inst_46848));
var inst_46861 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46859,inst_46860);
var ___$1 = (function (){var statearr_46908 = state_46887;
(statearr_46908[(4)] = cljs.core.rest((state_46887[(4)])));

return statearr_46908;
})();
var state_46887__$1 = state_46887;
var statearr_46909_48342 = state_46887__$1;
(statearr_46909_48342[(2)] = inst_46861);

(statearr_46909_48342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (5))){
var inst_46871 = (state_46887[(2)]);
var state_46887__$1 = (function (){var statearr_46910 = state_46887;
(statearr_46910[(13)] = inst_46871);

return statearr_46910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46887__$1,(13),dchan);
} else {
if((state_val_46888 === (14))){
var inst_46876 = cljs.core.async.close_BANG_(out);
var state_46887__$1 = state_46887;
var statearr_46911_48343 = state_46887__$1;
(statearr_46911_48343[(2)] = inst_46876);

(statearr_46911_48343[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (16))){
var inst_46883 = (state_46887[(2)]);
var state_46887__$1 = state_46887;
var statearr_46912_48344 = state_46887__$1;
(statearr_46912_48344[(2)] = inst_46883);

(statearr_46912_48344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (10))){
var inst_46848 = (state_46887[(8)]);
var inst_46864 = (state_46887[(2)]);
var inst_46865 = (inst_46848 + (1));
var inst_46848__$1 = inst_46865;
var state_46887__$1 = (function (){var statearr_46913 = state_46887;
(statearr_46913[(14)] = inst_46864);

(statearr_46913[(8)] = inst_46848__$1);

return statearr_46913;
})();
var statearr_46914_48349 = state_46887__$1;
(statearr_46914_48349[(2)] = null);

(statearr_46914_48349[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (8))){
var inst_46869 = (state_46887[(2)]);
var state_46887__$1 = state_46887;
var statearr_46915_48350 = state_46887__$1;
(statearr_46915_48350[(2)] = inst_46869);

(statearr_46915_48350[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__45402__auto__ = null;
var cljs$core$async$state_machine__45402__auto____0 = (function (){
var statearr_46916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46916[(0)] = cljs$core$async$state_machine__45402__auto__);

(statearr_46916[(1)] = (1));

return statearr_46916;
});
var cljs$core$async$state_machine__45402__auto____1 = (function (state_46887){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_46887);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e46917){var ex__45405__auto__ = e46917;
var statearr_46918_48356 = state_46887;
(statearr_46918_48356[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_46887[(4)]))){
var statearr_46919_48357 = state_46887;
(statearr_46919_48357[(1)] = cljs.core.first((state_46887[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48358 = state_46887;
state_46887 = G__48358;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$state_machine__45402__auto__ = function(state_46887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45402__auto____1.call(this,state_46887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45402__auto____0;
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45402__auto____1;
return cljs$core$async$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_46920 = f__45532__auto__();
(statearr_46920[(6)] = c__45531__auto___48309);

return statearr_46920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46923 = arguments.length;
switch (G__46923) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45531__auto___48360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_46955){
var state_val_46956 = (state_46955[(1)]);
if((state_val_46956 === (7))){
var inst_46935 = (state_46955[(7)]);
var inst_46934 = (state_46955[(8)]);
var inst_46934__$1 = (state_46955[(2)]);
var inst_46935__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46934__$1,(0),null);
var inst_46936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46934__$1,(1),null);
var inst_46937 = (inst_46935__$1 == null);
var state_46955__$1 = (function (){var statearr_46957 = state_46955;
(statearr_46957[(7)] = inst_46935__$1);

(statearr_46957[(8)] = inst_46934__$1);

(statearr_46957[(9)] = inst_46936);

return statearr_46957;
})();
if(cljs.core.truth_(inst_46937)){
var statearr_46958_48361 = state_46955__$1;
(statearr_46958_48361[(1)] = (8));

} else {
var statearr_46959_48363 = state_46955__$1;
(statearr_46959_48363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (1))){
var inst_46924 = cljs.core.vec(chs);
var inst_46925 = inst_46924;
var state_46955__$1 = (function (){var statearr_46960 = state_46955;
(statearr_46960[(10)] = inst_46925);

return statearr_46960;
})();
var statearr_46961_48365 = state_46955__$1;
(statearr_46961_48365[(2)] = null);

(statearr_46961_48365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (4))){
var inst_46925 = (state_46955[(10)]);
var state_46955__$1 = state_46955;
return cljs.core.async.ioc_alts_BANG_(state_46955__$1,(7),inst_46925);
} else {
if((state_val_46956 === (6))){
var inst_46951 = (state_46955[(2)]);
var state_46955__$1 = state_46955;
var statearr_46962_48370 = state_46955__$1;
(statearr_46962_48370[(2)] = inst_46951);

(statearr_46962_48370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (3))){
var inst_46953 = (state_46955[(2)]);
var state_46955__$1 = state_46955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46955__$1,inst_46953);
} else {
if((state_val_46956 === (2))){
var inst_46925 = (state_46955[(10)]);
var inst_46927 = cljs.core.count(inst_46925);
var inst_46928 = (inst_46927 > (0));
var state_46955__$1 = state_46955;
if(cljs.core.truth_(inst_46928)){
var statearr_46964_48371 = state_46955__$1;
(statearr_46964_48371[(1)] = (4));

} else {
var statearr_46965_48372 = state_46955__$1;
(statearr_46965_48372[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (11))){
var inst_46925 = (state_46955[(10)]);
var inst_46944 = (state_46955[(2)]);
var tmp46963 = inst_46925;
var inst_46925__$1 = tmp46963;
var state_46955__$1 = (function (){var statearr_46966 = state_46955;
(statearr_46966[(10)] = inst_46925__$1);

(statearr_46966[(11)] = inst_46944);

return statearr_46966;
})();
var statearr_46967_48373 = state_46955__$1;
(statearr_46967_48373[(2)] = null);

(statearr_46967_48373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (9))){
var inst_46935 = (state_46955[(7)]);
var state_46955__$1 = state_46955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46955__$1,(11),out,inst_46935);
} else {
if((state_val_46956 === (5))){
var inst_46949 = cljs.core.async.close_BANG_(out);
var state_46955__$1 = state_46955;
var statearr_46968_48374 = state_46955__$1;
(statearr_46968_48374[(2)] = inst_46949);

(statearr_46968_48374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (10))){
var inst_46947 = (state_46955[(2)]);
var state_46955__$1 = state_46955;
var statearr_46969_48375 = state_46955__$1;
(statearr_46969_48375[(2)] = inst_46947);

(statearr_46969_48375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46956 === (8))){
var inst_46925 = (state_46955[(10)]);
var inst_46935 = (state_46955[(7)]);
var inst_46934 = (state_46955[(8)]);
var inst_46936 = (state_46955[(9)]);
var inst_46939 = (function (){var cs = inst_46925;
var vec__46930 = inst_46934;
var v = inst_46935;
var c = inst_46936;
return (function (p1__46921_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46921_SHARP_);
});
})();
var inst_46940 = cljs.core.filterv(inst_46939,inst_46925);
var inst_46925__$1 = inst_46940;
var state_46955__$1 = (function (){var statearr_46970 = state_46955;
(statearr_46970[(10)] = inst_46925__$1);

return statearr_46970;
})();
var statearr_46971_48376 = state_46955__$1;
(statearr_46971_48376[(2)] = null);

(statearr_46971_48376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__45402__auto__ = null;
var cljs$core$async$state_machine__45402__auto____0 = (function (){
var statearr_46972 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46972[(0)] = cljs$core$async$state_machine__45402__auto__);

(statearr_46972[(1)] = (1));

return statearr_46972;
});
var cljs$core$async$state_machine__45402__auto____1 = (function (state_46955){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_46955);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e46973){var ex__45405__auto__ = e46973;
var statearr_46974_48378 = state_46955;
(statearr_46974_48378[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_46955[(4)]))){
var statearr_46975_48379 = state_46955;
(statearr_46975_48379[(1)] = cljs.core.first((state_46955[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48381 = state_46955;
state_46955 = G__48381;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$state_machine__45402__auto__ = function(state_46955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45402__auto____1.call(this,state_46955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45402__auto____0;
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45402__auto____1;
return cljs$core$async$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_46976 = f__45532__auto__();
(statearr_46976[(6)] = c__45531__auto___48360);

return statearr_46976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46978 = arguments.length;
switch (G__46978) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45531__auto___48383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_47002){
var state_val_47003 = (state_47002[(1)]);
if((state_val_47003 === (7))){
var inst_46984 = (state_47002[(7)]);
var inst_46984__$1 = (state_47002[(2)]);
var inst_46985 = (inst_46984__$1 == null);
var inst_46986 = cljs.core.not(inst_46985);
var state_47002__$1 = (function (){var statearr_47004 = state_47002;
(statearr_47004[(7)] = inst_46984__$1);

return statearr_47004;
})();
if(inst_46986){
var statearr_47005_48388 = state_47002__$1;
(statearr_47005_48388[(1)] = (8));

} else {
var statearr_47006_48389 = state_47002__$1;
(statearr_47006_48389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47003 === (1))){
var inst_46979 = (0);
var state_47002__$1 = (function (){var statearr_47007 = state_47002;
(statearr_47007[(8)] = inst_46979);

return statearr_47007;
})();
var statearr_47008_48391 = state_47002__$1;
(statearr_47008_48391[(2)] = null);

(statearr_47008_48391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47003 === (4))){
var state_47002__$1 = state_47002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47002__$1,(7),ch);
} else {
if((state_val_47003 === (6))){
var inst_46997 = (state_47002[(2)]);
var state_47002__$1 = state_47002;
var statearr_47009_48392 = state_47002__$1;
(statearr_47009_48392[(2)] = inst_46997);

(statearr_47009_48392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47003 === (3))){
var inst_46999 = (state_47002[(2)]);
var inst_47000 = cljs.core.async.close_BANG_(out);
var state_47002__$1 = (function (){var statearr_47010 = state_47002;
(statearr_47010[(9)] = inst_46999);

return statearr_47010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47002__$1,inst_47000);
} else {
if((state_val_47003 === (2))){
var inst_46979 = (state_47002[(8)]);
var inst_46981 = (inst_46979 < n);
var state_47002__$1 = state_47002;
if(cljs.core.truth_(inst_46981)){
var statearr_47011_48396 = state_47002__$1;
(statearr_47011_48396[(1)] = (4));

} else {
var statearr_47012_48397 = state_47002__$1;
(statearr_47012_48397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47003 === (11))){
var inst_46979 = (state_47002[(8)]);
var inst_46989 = (state_47002[(2)]);
var inst_46990 = (inst_46979 + (1));
var inst_46979__$1 = inst_46990;
var state_47002__$1 = (function (){var statearr_47013 = state_47002;
(statearr_47013[(8)] = inst_46979__$1);

(statearr_47013[(10)] = inst_46989);

return statearr_47013;
})();
var statearr_47014_48398 = state_47002__$1;
(statearr_47014_48398[(2)] = null);

(statearr_47014_48398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47003 === (9))){
var state_47002__$1 = state_47002;
var statearr_47015_48399 = state_47002__$1;
(statearr_47015_48399[(2)] = null);

(statearr_47015_48399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47003 === (5))){
var state_47002__$1 = state_47002;
var statearr_47017_48400 = state_47002__$1;
(statearr_47017_48400[(2)] = null);

(statearr_47017_48400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47003 === (10))){
var inst_46994 = (state_47002[(2)]);
var state_47002__$1 = state_47002;
var statearr_47019_48401 = state_47002__$1;
(statearr_47019_48401[(2)] = inst_46994);

(statearr_47019_48401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47003 === (8))){
var inst_46984 = (state_47002[(7)]);
var state_47002__$1 = state_47002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47002__$1,(11),out,inst_46984);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__45402__auto__ = null;
var cljs$core$async$state_machine__45402__auto____0 = (function (){
var statearr_47021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47021[(0)] = cljs$core$async$state_machine__45402__auto__);

(statearr_47021[(1)] = (1));

return statearr_47021;
});
var cljs$core$async$state_machine__45402__auto____1 = (function (state_47002){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_47002);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e47022){var ex__45405__auto__ = e47022;
var statearr_47023_48406 = state_47002;
(statearr_47023_48406[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_47002[(4)]))){
var statearr_47024_48408 = state_47002;
(statearr_47024_48408[(1)] = cljs.core.first((state_47002[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48409 = state_47002;
state_47002 = G__48409;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$state_machine__45402__auto__ = function(state_47002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45402__auto____1.call(this,state_47002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45402__auto____0;
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45402__auto____1;
return cljs$core$async$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_47027 = f__45532__auto__();
(statearr_47027[(6)] = c__45531__auto___48383);

return statearr_47027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47029 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47029 = (function (f,ch,meta47030){
this.f = f;
this.ch = ch;
this.meta47030 = meta47030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47031,meta47030__$1){
var self__ = this;
var _47031__$1 = this;
return (new cljs.core.async.t_cljs$core$async47029(self__.f,self__.ch,meta47030__$1));
}));

(cljs.core.async.t_cljs$core$async47029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47031){
var self__ = this;
var _47031__$1 = this;
return self__.meta47030;
}));

(cljs.core.async.t_cljs$core$async47029.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47029.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47029.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47029.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47029.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47038 = (function (f,ch,meta47030,_,fn1,meta47039){
this.f = f;
this.ch = ch;
this.meta47030 = meta47030;
this._ = _;
this.fn1 = fn1;
this.meta47039 = meta47039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47040,meta47039__$1){
var self__ = this;
var _47040__$1 = this;
return (new cljs.core.async.t_cljs$core$async47038(self__.f,self__.ch,self__.meta47030,self__._,self__.fn1,meta47039__$1));
}));

(cljs.core.async.t_cljs$core$async47038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47040){
var self__ = this;
var _47040__$1 = this;
return self__.meta47039;
}));

(cljs.core.async.t_cljs$core$async47038.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47038.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47028_SHARP_){
var G__47050 = (((p1__47028_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47028_SHARP_) : self__.f.call(null,p1__47028_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47050) : f1.call(null,G__47050));
});
}));

(cljs.core.async.t_cljs$core$async47038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47030","meta47030",1454227749,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47029","cljs.core.async/t_cljs$core$async47029",2100656857,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47039","meta47039",-356023314,null)], null);
}));

(cljs.core.async.t_cljs$core$async47038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47038");

(cljs.core.async.t_cljs$core$async47038.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47038.
 */
cljs.core.async.__GT_t_cljs$core$async47038 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47038(f__$1,ch__$1,meta47030__$1,___$2,fn1__$1,meta47039){
return (new cljs.core.async.t_cljs$core$async47038(f__$1,ch__$1,meta47030__$1,___$2,fn1__$1,meta47039));
});

}

return (new cljs.core.async.t_cljs$core$async47038(self__.f,self__.ch,self__.meta47030,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47053 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47053) : self__.f.call(null,G__47053));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47029.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47029.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47030","meta47030",1454227749,null)], null);
}));

(cljs.core.async.t_cljs$core$async47029.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47029");

(cljs.core.async.t_cljs$core$async47029.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47029");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47029.
 */
cljs.core.async.__GT_t_cljs$core$async47029 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47029(f__$1,ch__$1,meta47030){
return (new cljs.core.async.t_cljs$core$async47029(f__$1,ch__$1,meta47030));
});

}

return (new cljs.core.async.t_cljs$core$async47029(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47064 = (function (f,ch,meta47065){
this.f = f;
this.ch = ch;
this.meta47065 = meta47065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47066,meta47065__$1){
var self__ = this;
var _47066__$1 = this;
return (new cljs.core.async.t_cljs$core$async47064(self__.f,self__.ch,meta47065__$1));
}));

(cljs.core.async.t_cljs$core$async47064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47066){
var self__ = this;
var _47066__$1 = this;
return self__.meta47065;
}));

(cljs.core.async.t_cljs$core$async47064.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47064.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47064.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47065","meta47065",1253718598,null)], null);
}));

(cljs.core.async.t_cljs$core$async47064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47064");

(cljs.core.async.t_cljs$core$async47064.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47064.
 */
cljs.core.async.__GT_t_cljs$core$async47064 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47064(f__$1,ch__$1,meta47065){
return (new cljs.core.async.t_cljs$core$async47064(f__$1,ch__$1,meta47065));
});

}

return (new cljs.core.async.t_cljs$core$async47064(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47090 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47090 = (function (p,ch,meta47091){
this.p = p;
this.ch = ch;
this.meta47091 = meta47091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47092,meta47091__$1){
var self__ = this;
var _47092__$1 = this;
return (new cljs.core.async.t_cljs$core$async47090(self__.p,self__.ch,meta47091__$1));
}));

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47092){
var self__ = this;
var _47092__$1 = this;
return self__.meta47091;
}));

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47090.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47091","meta47091",-1897576322,null)], null);
}));

(cljs.core.async.t_cljs$core$async47090.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47090");

(cljs.core.async.t_cljs$core$async47090.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47090");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47090.
 */
cljs.core.async.__GT_t_cljs$core$async47090 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47090(p__$1,ch__$1,meta47091){
return (new cljs.core.async.t_cljs$core$async47090(p__$1,ch__$1,meta47091));
});

}

return (new cljs.core.async.t_cljs$core$async47090(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47112 = arguments.length;
switch (G__47112) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45531__auto___48445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_47139){
var state_val_47140 = (state_47139[(1)]);
if((state_val_47140 === (7))){
var inst_47135 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
var statearr_47147_48448 = state_47139__$1;
(statearr_47147_48448[(2)] = inst_47135);

(statearr_47147_48448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (1))){
var state_47139__$1 = state_47139;
var statearr_47149_48449 = state_47139__$1;
(statearr_47149_48449[(2)] = null);

(statearr_47149_48449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (4))){
var inst_47121 = (state_47139[(7)]);
var inst_47121__$1 = (state_47139[(2)]);
var inst_47122 = (inst_47121__$1 == null);
var state_47139__$1 = (function (){var statearr_47150 = state_47139;
(statearr_47150[(7)] = inst_47121__$1);

return statearr_47150;
})();
if(cljs.core.truth_(inst_47122)){
var statearr_47151_48455 = state_47139__$1;
(statearr_47151_48455[(1)] = (5));

} else {
var statearr_47152_48456 = state_47139__$1;
(statearr_47152_48456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (6))){
var inst_47121 = (state_47139[(7)]);
var inst_47126 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47121) : p.call(null,inst_47121));
var state_47139__$1 = state_47139;
if(cljs.core.truth_(inst_47126)){
var statearr_47154_48458 = state_47139__$1;
(statearr_47154_48458[(1)] = (8));

} else {
var statearr_47155_48459 = state_47139__$1;
(statearr_47155_48459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (3))){
var inst_47137 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47139__$1,inst_47137);
} else {
if((state_val_47140 === (2))){
var state_47139__$1 = state_47139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47139__$1,(4),ch);
} else {
if((state_val_47140 === (11))){
var inst_47129 = (state_47139[(2)]);
var state_47139__$1 = state_47139;
var statearr_47157_48461 = state_47139__$1;
(statearr_47157_48461[(2)] = inst_47129);

(statearr_47157_48461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (9))){
var state_47139__$1 = state_47139;
var statearr_47158_48466 = state_47139__$1;
(statearr_47158_48466[(2)] = null);

(statearr_47158_48466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (5))){
var inst_47124 = cljs.core.async.close_BANG_(out);
var state_47139__$1 = state_47139;
var statearr_47160_48467 = state_47139__$1;
(statearr_47160_48467[(2)] = inst_47124);

(statearr_47160_48467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (10))){
var inst_47132 = (state_47139[(2)]);
var state_47139__$1 = (function (){var statearr_47161 = state_47139;
(statearr_47161[(8)] = inst_47132);

return statearr_47161;
})();
var statearr_47162_48469 = state_47139__$1;
(statearr_47162_48469[(2)] = null);

(statearr_47162_48469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47140 === (8))){
var inst_47121 = (state_47139[(7)]);
var state_47139__$1 = state_47139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47139__$1,(11),out,inst_47121);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__45402__auto__ = null;
var cljs$core$async$state_machine__45402__auto____0 = (function (){
var statearr_47163 = [null,null,null,null,null,null,null,null,null];
(statearr_47163[(0)] = cljs$core$async$state_machine__45402__auto__);

(statearr_47163[(1)] = (1));

return statearr_47163;
});
var cljs$core$async$state_machine__45402__auto____1 = (function (state_47139){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_47139);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e47166){var ex__45405__auto__ = e47166;
var statearr_47167_48473 = state_47139;
(statearr_47167_48473[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_47139[(4)]))){
var statearr_47168_48474 = state_47139;
(statearr_47168_48474[(1)] = cljs.core.first((state_47139[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48475 = state_47139;
state_47139 = G__48475;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$state_machine__45402__auto__ = function(state_47139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45402__auto____1.call(this,state_47139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45402__auto____0;
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45402__auto____1;
return cljs$core$async$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_47173 = f__45532__auto__();
(statearr_47173[(6)] = c__45531__auto___48445);

return statearr_47173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47177 = arguments.length;
switch (G__47177) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_47278){
var state_val_47279 = (state_47278[(1)]);
if((state_val_47279 === (7))){
var inst_47273 = (state_47278[(2)]);
var state_47278__$1 = state_47278;
var statearr_47282_48482 = state_47278__$1;
(statearr_47282_48482[(2)] = inst_47273);

(statearr_47282_48482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (20))){
var inst_47242 = (state_47278[(7)]);
var inst_47253 = (state_47278[(2)]);
var inst_47254 = cljs.core.next(inst_47242);
var inst_47227 = inst_47254;
var inst_47228 = null;
var inst_47229 = (0);
var inst_47230 = (0);
var state_47278__$1 = (function (){var statearr_47283 = state_47278;
(statearr_47283[(8)] = inst_47228);

(statearr_47283[(9)] = inst_47230);

(statearr_47283[(10)] = inst_47229);

(statearr_47283[(11)] = inst_47227);

(statearr_47283[(12)] = inst_47253);

return statearr_47283;
})();
var statearr_47284_48486 = state_47278__$1;
(statearr_47284_48486[(2)] = null);

(statearr_47284_48486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (1))){
var state_47278__$1 = state_47278;
var statearr_47285_48488 = state_47278__$1;
(statearr_47285_48488[(2)] = null);

(statearr_47285_48488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (4))){
var inst_47215 = (state_47278[(13)]);
var inst_47215__$1 = (state_47278[(2)]);
var inst_47216 = (inst_47215__$1 == null);
var state_47278__$1 = (function (){var statearr_47287 = state_47278;
(statearr_47287[(13)] = inst_47215__$1);

return statearr_47287;
})();
if(cljs.core.truth_(inst_47216)){
var statearr_47288_48490 = state_47278__$1;
(statearr_47288_48490[(1)] = (5));

} else {
var statearr_47297_48492 = state_47278__$1;
(statearr_47297_48492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (15))){
var state_47278__$1 = state_47278;
var statearr_47313_48496 = state_47278__$1;
(statearr_47313_48496[(2)] = null);

(statearr_47313_48496[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (21))){
var state_47278__$1 = state_47278;
var statearr_47322_48499 = state_47278__$1;
(statearr_47322_48499[(2)] = null);

(statearr_47322_48499[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (13))){
var inst_47228 = (state_47278[(8)]);
var inst_47230 = (state_47278[(9)]);
var inst_47229 = (state_47278[(10)]);
var inst_47227 = (state_47278[(11)]);
var inst_47238 = (state_47278[(2)]);
var inst_47239 = (inst_47230 + (1));
var tmp47302 = inst_47228;
var tmp47303 = inst_47229;
var tmp47304 = inst_47227;
var inst_47227__$1 = tmp47304;
var inst_47228__$1 = tmp47302;
var inst_47229__$1 = tmp47303;
var inst_47230__$1 = inst_47239;
var state_47278__$1 = (function (){var statearr_47323 = state_47278;
(statearr_47323[(8)] = inst_47228__$1);

(statearr_47323[(9)] = inst_47230__$1);

(statearr_47323[(14)] = inst_47238);

(statearr_47323[(10)] = inst_47229__$1);

(statearr_47323[(11)] = inst_47227__$1);

return statearr_47323;
})();
var statearr_47324_48508 = state_47278__$1;
(statearr_47324_48508[(2)] = null);

(statearr_47324_48508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (22))){
var state_47278__$1 = state_47278;
var statearr_47330_48511 = state_47278__$1;
(statearr_47330_48511[(2)] = null);

(statearr_47330_48511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (6))){
var inst_47215 = (state_47278[(13)]);
var inst_47225 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47215) : f.call(null,inst_47215));
var inst_47226 = cljs.core.seq(inst_47225);
var inst_47227 = inst_47226;
var inst_47228 = null;
var inst_47229 = (0);
var inst_47230 = (0);
var state_47278__$1 = (function (){var statearr_47341 = state_47278;
(statearr_47341[(8)] = inst_47228);

(statearr_47341[(9)] = inst_47230);

(statearr_47341[(10)] = inst_47229);

(statearr_47341[(11)] = inst_47227);

return statearr_47341;
})();
var statearr_47346_48515 = state_47278__$1;
(statearr_47346_48515[(2)] = null);

(statearr_47346_48515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (17))){
var inst_47242 = (state_47278[(7)]);
var inst_47246 = cljs.core.chunk_first(inst_47242);
var inst_47247 = cljs.core.chunk_rest(inst_47242);
var inst_47248 = cljs.core.count(inst_47246);
var inst_47227 = inst_47247;
var inst_47228 = inst_47246;
var inst_47229 = inst_47248;
var inst_47230 = (0);
var state_47278__$1 = (function (){var statearr_47351 = state_47278;
(statearr_47351[(8)] = inst_47228);

(statearr_47351[(9)] = inst_47230);

(statearr_47351[(10)] = inst_47229);

(statearr_47351[(11)] = inst_47227);

return statearr_47351;
})();
var statearr_47352_48516 = state_47278__$1;
(statearr_47352_48516[(2)] = null);

(statearr_47352_48516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (3))){
var inst_47275 = (state_47278[(2)]);
var state_47278__$1 = state_47278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47278__$1,inst_47275);
} else {
if((state_val_47279 === (12))){
var inst_47262 = (state_47278[(2)]);
var state_47278__$1 = state_47278;
var statearr_47353_48518 = state_47278__$1;
(statearr_47353_48518[(2)] = inst_47262);

(statearr_47353_48518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (2))){
var state_47278__$1 = state_47278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47278__$1,(4),in$);
} else {
if((state_val_47279 === (23))){
var inst_47271 = (state_47278[(2)]);
var state_47278__$1 = state_47278;
var statearr_47359_48519 = state_47278__$1;
(statearr_47359_48519[(2)] = inst_47271);

(statearr_47359_48519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (19))){
var inst_47257 = (state_47278[(2)]);
var state_47278__$1 = state_47278;
var statearr_47360_48524 = state_47278__$1;
(statearr_47360_48524[(2)] = inst_47257);

(statearr_47360_48524[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (11))){
var inst_47242 = (state_47278[(7)]);
var inst_47227 = (state_47278[(11)]);
var inst_47242__$1 = cljs.core.seq(inst_47227);
var state_47278__$1 = (function (){var statearr_47361 = state_47278;
(statearr_47361[(7)] = inst_47242__$1);

return statearr_47361;
})();
if(inst_47242__$1){
var statearr_47362_48527 = state_47278__$1;
(statearr_47362_48527[(1)] = (14));

} else {
var statearr_47363_48528 = state_47278__$1;
(statearr_47363_48528[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (9))){
var inst_47265 = (state_47278[(2)]);
var inst_47266 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47278__$1 = (function (){var statearr_47364 = state_47278;
(statearr_47364[(15)] = inst_47265);

return statearr_47364;
})();
if(cljs.core.truth_(inst_47266)){
var statearr_47365_48529 = state_47278__$1;
(statearr_47365_48529[(1)] = (21));

} else {
var statearr_47366_48530 = state_47278__$1;
(statearr_47366_48530[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (5))){
var inst_47218 = cljs.core.async.close_BANG_(out);
var state_47278__$1 = state_47278;
var statearr_47367_48531 = state_47278__$1;
(statearr_47367_48531[(2)] = inst_47218);

(statearr_47367_48531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (14))){
var inst_47242 = (state_47278[(7)]);
var inst_47244 = cljs.core.chunked_seq_QMARK_(inst_47242);
var state_47278__$1 = state_47278;
if(inst_47244){
var statearr_47368_48536 = state_47278__$1;
(statearr_47368_48536[(1)] = (17));

} else {
var statearr_47369_48537 = state_47278__$1;
(statearr_47369_48537[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (16))){
var inst_47260 = (state_47278[(2)]);
var state_47278__$1 = state_47278;
var statearr_47382_48542 = state_47278__$1;
(statearr_47382_48542[(2)] = inst_47260);

(statearr_47382_48542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47279 === (10))){
var inst_47228 = (state_47278[(8)]);
var inst_47230 = (state_47278[(9)]);
var inst_47236 = cljs.core._nth(inst_47228,inst_47230);
var state_47278__$1 = state_47278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47278__$1,(13),out,inst_47236);
} else {
if((state_val_47279 === (18))){
var inst_47242 = (state_47278[(7)]);
var inst_47251 = cljs.core.first(inst_47242);
var state_47278__$1 = state_47278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47278__$1,(20),out,inst_47251);
} else {
if((state_val_47279 === (8))){
var inst_47230 = (state_47278[(9)]);
var inst_47229 = (state_47278[(10)]);
var inst_47233 = (inst_47230 < inst_47229);
var inst_47234 = inst_47233;
var state_47278__$1 = state_47278;
if(cljs.core.truth_(inst_47234)){
var statearr_47397_48549 = state_47278__$1;
(statearr_47397_48549[(1)] = (10));

} else {
var statearr_47404_48550 = state_47278__$1;
(statearr_47404_48550[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45402__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45402__auto____0 = (function (){
var statearr_47422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47422[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45402__auto__);

(statearr_47422[(1)] = (1));

return statearr_47422;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45402__auto____1 = (function (state_47278){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_47278);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e47427){var ex__45405__auto__ = e47427;
var statearr_47428_48556 = state_47278;
(statearr_47428_48556[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_47278[(4)]))){
var statearr_47429_48557 = state_47278;
(statearr_47429_48557[(1)] = cljs.core.first((state_47278[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48558 = state_47278;
state_47278 = G__48558;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45402__auto__ = function(state_47278){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45402__auto____1.call(this,state_47278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45402__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45402__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_47440 = f__45532__auto__();
(statearr_47440[(6)] = c__45531__auto__);

return statearr_47440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));

return c__45531__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47450 = arguments.length;
switch (G__47450) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47453 = arguments.length;
switch (G__47453) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47455 = arguments.length;
switch (G__47455) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45531__auto___48565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_47484){
var state_val_47485 = (state_47484[(1)]);
if((state_val_47485 === (7))){
var inst_47479 = (state_47484[(2)]);
var state_47484__$1 = state_47484;
var statearr_47487_48567 = state_47484__$1;
(statearr_47487_48567[(2)] = inst_47479);

(statearr_47487_48567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47485 === (1))){
var inst_47461 = null;
var state_47484__$1 = (function (){var statearr_47489 = state_47484;
(statearr_47489[(7)] = inst_47461);

return statearr_47489;
})();
var statearr_47490_48568 = state_47484__$1;
(statearr_47490_48568[(2)] = null);

(statearr_47490_48568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47485 === (4))){
var inst_47464 = (state_47484[(8)]);
var inst_47464__$1 = (state_47484[(2)]);
var inst_47465 = (inst_47464__$1 == null);
var inst_47466 = cljs.core.not(inst_47465);
var state_47484__$1 = (function (){var statearr_47499 = state_47484;
(statearr_47499[(8)] = inst_47464__$1);

return statearr_47499;
})();
if(inst_47466){
var statearr_47500_48569 = state_47484__$1;
(statearr_47500_48569[(1)] = (5));

} else {
var statearr_47501_48571 = state_47484__$1;
(statearr_47501_48571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47485 === (6))){
var state_47484__$1 = state_47484;
var statearr_47502_48572 = state_47484__$1;
(statearr_47502_48572[(2)] = null);

(statearr_47502_48572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47485 === (3))){
var inst_47481 = (state_47484[(2)]);
var inst_47482 = cljs.core.async.close_BANG_(out);
var state_47484__$1 = (function (){var statearr_47503 = state_47484;
(statearr_47503[(9)] = inst_47481);

return statearr_47503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47484__$1,inst_47482);
} else {
if((state_val_47485 === (2))){
var state_47484__$1 = state_47484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47484__$1,(4),ch);
} else {
if((state_val_47485 === (11))){
var inst_47464 = (state_47484[(8)]);
var inst_47473 = (state_47484[(2)]);
var inst_47461 = inst_47464;
var state_47484__$1 = (function (){var statearr_47504 = state_47484;
(statearr_47504[(10)] = inst_47473);

(statearr_47504[(7)] = inst_47461);

return statearr_47504;
})();
var statearr_47505_48574 = state_47484__$1;
(statearr_47505_48574[(2)] = null);

(statearr_47505_48574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47485 === (9))){
var inst_47464 = (state_47484[(8)]);
var state_47484__$1 = state_47484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47484__$1,(11),out,inst_47464);
} else {
if((state_val_47485 === (5))){
var inst_47464 = (state_47484[(8)]);
var inst_47461 = (state_47484[(7)]);
var inst_47468 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47464,inst_47461);
var state_47484__$1 = state_47484;
if(inst_47468){
var statearr_47511_48575 = state_47484__$1;
(statearr_47511_48575[(1)] = (8));

} else {
var statearr_47512_48576 = state_47484__$1;
(statearr_47512_48576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47485 === (10))){
var inst_47476 = (state_47484[(2)]);
var state_47484__$1 = state_47484;
var statearr_47513_48577 = state_47484__$1;
(statearr_47513_48577[(2)] = inst_47476);

(statearr_47513_48577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47485 === (8))){
var inst_47461 = (state_47484[(7)]);
var tmp47510 = inst_47461;
var inst_47461__$1 = tmp47510;
var state_47484__$1 = (function (){var statearr_47514 = state_47484;
(statearr_47514[(7)] = inst_47461__$1);

return statearr_47514;
})();
var statearr_47515_48578 = state_47484__$1;
(statearr_47515_48578[(2)] = null);

(statearr_47515_48578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__45402__auto__ = null;
var cljs$core$async$state_machine__45402__auto____0 = (function (){
var statearr_47516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47516[(0)] = cljs$core$async$state_machine__45402__auto__);

(statearr_47516[(1)] = (1));

return statearr_47516;
});
var cljs$core$async$state_machine__45402__auto____1 = (function (state_47484){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_47484);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e47517){var ex__45405__auto__ = e47517;
var statearr_47518_48579 = state_47484;
(statearr_47518_48579[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_47484[(4)]))){
var statearr_47519_48580 = state_47484;
(statearr_47519_48580[(1)] = cljs.core.first((state_47484[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48581 = state_47484;
state_47484 = G__48581;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$state_machine__45402__auto__ = function(state_47484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45402__auto____1.call(this,state_47484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45402__auto____0;
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45402__auto____1;
return cljs$core$async$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_47521 = f__45532__auto__();
(statearr_47521[(6)] = c__45531__auto___48565);

return statearr_47521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47526 = arguments.length;
switch (G__47526) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45531__auto___48584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_47565){
var state_val_47566 = (state_47565[(1)]);
if((state_val_47566 === (7))){
var inst_47561 = (state_47565[(2)]);
var state_47565__$1 = state_47565;
var statearr_47567_48586 = state_47565__$1;
(statearr_47567_48586[(2)] = inst_47561);

(statearr_47567_48586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47566 === (1))){
var inst_47527 = (new Array(n));
var inst_47528 = inst_47527;
var inst_47529 = (0);
var state_47565__$1 = (function (){var statearr_47568 = state_47565;
(statearr_47568[(7)] = inst_47529);

(statearr_47568[(8)] = inst_47528);

return statearr_47568;
})();
var statearr_47569_48590 = state_47565__$1;
(statearr_47569_48590[(2)] = null);

(statearr_47569_48590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47566 === (4))){
var inst_47532 = (state_47565[(9)]);
var inst_47532__$1 = (state_47565[(2)]);
var inst_47533 = (inst_47532__$1 == null);
var inst_47534 = cljs.core.not(inst_47533);
var state_47565__$1 = (function (){var statearr_47570 = state_47565;
(statearr_47570[(9)] = inst_47532__$1);

return statearr_47570;
})();
if(inst_47534){
var statearr_47571_48599 = state_47565__$1;
(statearr_47571_48599[(1)] = (5));

} else {
var statearr_47572_48600 = state_47565__$1;
(statearr_47572_48600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47566 === (15))){
var inst_47555 = (state_47565[(2)]);
var state_47565__$1 = state_47565;
var statearr_47573_48601 = state_47565__$1;
(statearr_47573_48601[(2)] = inst_47555);

(statearr_47573_48601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47566 === (13))){
var state_47565__$1 = state_47565;
var statearr_47574_48602 = state_47565__$1;
(statearr_47574_48602[(2)] = null);

(statearr_47574_48602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47566 === (6))){
var inst_47529 = (state_47565[(7)]);
var inst_47551 = (inst_47529 > (0));
var state_47565__$1 = state_47565;
if(cljs.core.truth_(inst_47551)){
var statearr_47575_48603 = state_47565__$1;
(statearr_47575_48603[(1)] = (12));

} else {
var statearr_47576_48604 = state_47565__$1;
(statearr_47576_48604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47566 === (3))){
var inst_47563 = (state_47565[(2)]);
var state_47565__$1 = state_47565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47565__$1,inst_47563);
} else {
if((state_val_47566 === (12))){
var inst_47528 = (state_47565[(8)]);
var inst_47553 = cljs.core.vec(inst_47528);
var state_47565__$1 = state_47565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47565__$1,(15),out,inst_47553);
} else {
if((state_val_47566 === (2))){
var state_47565__$1 = state_47565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47565__$1,(4),ch);
} else {
if((state_val_47566 === (11))){
var inst_47545 = (state_47565[(2)]);
var inst_47546 = (new Array(n));
var inst_47528 = inst_47546;
var inst_47529 = (0);
var state_47565__$1 = (function (){var statearr_47578 = state_47565;
(statearr_47578[(10)] = inst_47545);

(statearr_47578[(7)] = inst_47529);

(statearr_47578[(8)] = inst_47528);

return statearr_47578;
})();
var statearr_47579_48605 = state_47565__$1;
(statearr_47579_48605[(2)] = null);

(statearr_47579_48605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47566 === (9))){
var inst_47528 = (state_47565[(8)]);
var inst_47543 = cljs.core.vec(inst_47528);
var state_47565__$1 = state_47565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47565__$1,(11),out,inst_47543);
} else {
if((state_val_47566 === (5))){
var inst_47538 = (state_47565[(11)]);
var inst_47532 = (state_47565[(9)]);
var inst_47529 = (state_47565[(7)]);
var inst_47528 = (state_47565[(8)]);
var inst_47536 = (inst_47528[inst_47529] = inst_47532);
var inst_47538__$1 = (inst_47529 + (1));
var inst_47539 = (inst_47538__$1 < n);
var state_47565__$1 = (function (){var statearr_47582 = state_47565;
(statearr_47582[(11)] = inst_47538__$1);

(statearr_47582[(12)] = inst_47536);

return statearr_47582;
})();
if(cljs.core.truth_(inst_47539)){
var statearr_47583_48606 = state_47565__$1;
(statearr_47583_48606[(1)] = (8));

} else {
var statearr_47584_48607 = state_47565__$1;
(statearr_47584_48607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47566 === (14))){
var inst_47558 = (state_47565[(2)]);
var inst_47559 = cljs.core.async.close_BANG_(out);
var state_47565__$1 = (function (){var statearr_47588 = state_47565;
(statearr_47588[(13)] = inst_47558);

return statearr_47588;
})();
var statearr_47589_48609 = state_47565__$1;
(statearr_47589_48609[(2)] = inst_47559);

(statearr_47589_48609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47566 === (10))){
var inst_47549 = (state_47565[(2)]);
var state_47565__$1 = state_47565;
var statearr_47590_48610 = state_47565__$1;
(statearr_47590_48610[(2)] = inst_47549);

(statearr_47590_48610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47566 === (8))){
var inst_47538 = (state_47565[(11)]);
var inst_47528 = (state_47565[(8)]);
var tmp47586 = inst_47528;
var inst_47528__$1 = tmp47586;
var inst_47529 = inst_47538;
var state_47565__$1 = (function (){var statearr_47591 = state_47565;
(statearr_47591[(7)] = inst_47529);

(statearr_47591[(8)] = inst_47528__$1);

return statearr_47591;
})();
var statearr_47594_48612 = state_47565__$1;
(statearr_47594_48612[(2)] = null);

(statearr_47594_48612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__45402__auto__ = null;
var cljs$core$async$state_machine__45402__auto____0 = (function (){
var statearr_47595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47595[(0)] = cljs$core$async$state_machine__45402__auto__);

(statearr_47595[(1)] = (1));

return statearr_47595;
});
var cljs$core$async$state_machine__45402__auto____1 = (function (state_47565){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_47565);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e47598){var ex__45405__auto__ = e47598;
var statearr_47599_48613 = state_47565;
(statearr_47599_48613[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_47565[(4)]))){
var statearr_47600_48614 = state_47565;
(statearr_47600_48614[(1)] = cljs.core.first((state_47565[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48615 = state_47565;
state_47565 = G__48615;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$state_machine__45402__auto__ = function(state_47565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45402__auto____1.call(this,state_47565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45402__auto____0;
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45402__auto____1;
return cljs$core$async$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_47601 = f__45532__auto__();
(statearr_47601[(6)] = c__45531__auto___48584);

return statearr_47601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47603 = arguments.length;
switch (G__47603) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45531__auto___48617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45532__auto__ = (function (){var switch__45401__auto__ = (function (state_47652){
var state_val_47653 = (state_47652[(1)]);
if((state_val_47653 === (7))){
var inst_47647 = (state_47652[(2)]);
var state_47652__$1 = state_47652;
var statearr_47658_48618 = state_47652__$1;
(statearr_47658_48618[(2)] = inst_47647);

(statearr_47658_48618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (1))){
var inst_47605 = [];
var inst_47606 = inst_47605;
var inst_47607 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47652__$1 = (function (){var statearr_47659 = state_47652;
(statearr_47659[(7)] = inst_47606);

(statearr_47659[(8)] = inst_47607);

return statearr_47659;
})();
var statearr_47660_48619 = state_47652__$1;
(statearr_47660_48619[(2)] = null);

(statearr_47660_48619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (4))){
var inst_47611 = (state_47652[(9)]);
var inst_47611__$1 = (state_47652[(2)]);
var inst_47612 = (inst_47611__$1 == null);
var inst_47613 = cljs.core.not(inst_47612);
var state_47652__$1 = (function (){var statearr_47663 = state_47652;
(statearr_47663[(9)] = inst_47611__$1);

return statearr_47663;
})();
if(inst_47613){
var statearr_47664_48620 = state_47652__$1;
(statearr_47664_48620[(1)] = (5));

} else {
var statearr_47665_48621 = state_47652__$1;
(statearr_47665_48621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (15))){
var inst_47606 = (state_47652[(7)]);
var inst_47638 = cljs.core.vec(inst_47606);
var state_47652__$1 = state_47652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47652__$1,(18),out,inst_47638);
} else {
if((state_val_47653 === (13))){
var inst_47633 = (state_47652[(2)]);
var state_47652__$1 = state_47652;
var statearr_47668_48622 = state_47652__$1;
(statearr_47668_48622[(2)] = inst_47633);

(statearr_47668_48622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (6))){
var inst_47606 = (state_47652[(7)]);
var inst_47635 = inst_47606.length;
var inst_47636 = (inst_47635 > (0));
var state_47652__$1 = state_47652;
if(cljs.core.truth_(inst_47636)){
var statearr_47671_48623 = state_47652__$1;
(statearr_47671_48623[(1)] = (15));

} else {
var statearr_47672_48624 = state_47652__$1;
(statearr_47672_48624[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (17))){
var inst_47643 = (state_47652[(2)]);
var inst_47645 = cljs.core.async.close_BANG_(out);
var state_47652__$1 = (function (){var statearr_47674 = state_47652;
(statearr_47674[(10)] = inst_47643);

return statearr_47674;
})();
var statearr_47676_48625 = state_47652__$1;
(statearr_47676_48625[(2)] = inst_47645);

(statearr_47676_48625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (3))){
var inst_47649 = (state_47652[(2)]);
var state_47652__$1 = state_47652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47652__$1,inst_47649);
} else {
if((state_val_47653 === (12))){
var inst_47606 = (state_47652[(7)]);
var inst_47626 = cljs.core.vec(inst_47606);
var state_47652__$1 = state_47652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47652__$1,(14),out,inst_47626);
} else {
if((state_val_47653 === (2))){
var state_47652__$1 = state_47652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47652__$1,(4),ch);
} else {
if((state_val_47653 === (11))){
var inst_47606 = (state_47652[(7)]);
var inst_47611 = (state_47652[(9)]);
var inst_47615 = (state_47652[(11)]);
var inst_47623 = inst_47606.push(inst_47611);
var tmp47677 = inst_47606;
var inst_47606__$1 = tmp47677;
var inst_47607 = inst_47615;
var state_47652__$1 = (function (){var statearr_47678 = state_47652;
(statearr_47678[(7)] = inst_47606__$1);

(statearr_47678[(8)] = inst_47607);

(statearr_47678[(12)] = inst_47623);

return statearr_47678;
})();
var statearr_47679_48627 = state_47652__$1;
(statearr_47679_48627[(2)] = null);

(statearr_47679_48627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (9))){
var inst_47607 = (state_47652[(8)]);
var inst_47619 = cljs.core.keyword_identical_QMARK_(inst_47607,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47652__$1 = state_47652;
var statearr_47682_48632 = state_47652__$1;
(statearr_47682_48632[(2)] = inst_47619);

(statearr_47682_48632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (5))){
var inst_47607 = (state_47652[(8)]);
var inst_47616 = (state_47652[(13)]);
var inst_47611 = (state_47652[(9)]);
var inst_47615 = (state_47652[(11)]);
var inst_47615__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47611) : f.call(null,inst_47611));
var inst_47616__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47615__$1,inst_47607);
var state_47652__$1 = (function (){var statearr_47685 = state_47652;
(statearr_47685[(13)] = inst_47616__$1);

(statearr_47685[(11)] = inst_47615__$1);

return statearr_47685;
})();
if(inst_47616__$1){
var statearr_47686_48637 = state_47652__$1;
(statearr_47686_48637[(1)] = (8));

} else {
var statearr_47687_48638 = state_47652__$1;
(statearr_47687_48638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (14))){
var inst_47611 = (state_47652[(9)]);
var inst_47615 = (state_47652[(11)]);
var inst_47628 = (state_47652[(2)]);
var inst_47629 = [];
var inst_47630 = inst_47629.push(inst_47611);
var inst_47606 = inst_47629;
var inst_47607 = inst_47615;
var state_47652__$1 = (function (){var statearr_47690 = state_47652;
(statearr_47690[(7)] = inst_47606);

(statearr_47690[(8)] = inst_47607);

(statearr_47690[(14)] = inst_47628);

(statearr_47690[(15)] = inst_47630);

return statearr_47690;
})();
var statearr_47691_48639 = state_47652__$1;
(statearr_47691_48639[(2)] = null);

(statearr_47691_48639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (16))){
var state_47652__$1 = state_47652;
var statearr_47692_48641 = state_47652__$1;
(statearr_47692_48641[(2)] = null);

(statearr_47692_48641[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (10))){
var inst_47621 = (state_47652[(2)]);
var state_47652__$1 = state_47652;
if(cljs.core.truth_(inst_47621)){
var statearr_47693_48644 = state_47652__$1;
(statearr_47693_48644[(1)] = (11));

} else {
var statearr_47694_48646 = state_47652__$1;
(statearr_47694_48646[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (18))){
var inst_47640 = (state_47652[(2)]);
var state_47652__$1 = state_47652;
var statearr_47695_48647 = state_47652__$1;
(statearr_47695_48647[(2)] = inst_47640);

(statearr_47695_48647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47653 === (8))){
var inst_47616 = (state_47652[(13)]);
var state_47652__$1 = state_47652;
var statearr_47696_48650 = state_47652__$1;
(statearr_47696_48650[(2)] = inst_47616);

(statearr_47696_48650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
return (function() {
var cljs$core$async$state_machine__45402__auto__ = null;
var cljs$core$async$state_machine__45402__auto____0 = (function (){
var statearr_47697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47697[(0)] = cljs$core$async$state_machine__45402__auto__);

(statearr_47697[(1)] = (1));

return statearr_47697;
});
var cljs$core$async$state_machine__45402__auto____1 = (function (state_47652){
while(true){
var ret_value__45403__auto__ = (function (){try{while(true){
var result__45404__auto__ = switch__45401__auto__(state_47652);
if(cljs.core.keyword_identical_QMARK_(result__45404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45404__auto__;
}
break;
}
}catch (e47699){var ex__45405__auto__ = e47699;
var statearr_47701_48652 = state_47652;
(statearr_47701_48652[(2)] = ex__45405__auto__);


if(cljs.core.seq((state_47652[(4)]))){
var statearr_47702_48653 = state_47652;
(statearr_47702_48653[(1)] = cljs.core.first((state_47652[(4)])));

} else {
throw ex__45405__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48654 = state_47652;
state_47652 = G__48654;
continue;
} else {
return ret_value__45403__auto__;
}
break;
}
});
cljs$core$async$state_machine__45402__auto__ = function(state_47652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45402__auto____1.call(this,state_47652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45402__auto____0;
cljs$core$async$state_machine__45402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45402__auto____1;
return cljs$core$async$state_machine__45402__auto__;
})()
})();
var state__45533__auto__ = (function (){var statearr_47705 = f__45532__auto__();
(statearr_47705[(6)] = c__45531__auto___48617);

return statearr_47705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45533__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
