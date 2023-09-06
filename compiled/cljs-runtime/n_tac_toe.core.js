goog.provide('n_tac_toe.core');
n_tac_toe.core.dev_setup = (function n_tac_toe$core$dev_setup(){
if(n_tac_toe.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
n_tac_toe.core.mount_root = (function n_tac_toe$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n_tac_toe.views.main_panel], null),root_el);
});
n_tac_toe.core.init = (function n_tac_toe$core$init(){
n_tac_toe.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("n-tac-toe.events","initialize-db","n-tac-toe.events/initialize-db",1044377001)], null));

n_tac_toe.core.dev_setup();

return n_tac_toe.core.mount_root();
});

//# sourceMappingURL=n_tac_toe.core.js.map
