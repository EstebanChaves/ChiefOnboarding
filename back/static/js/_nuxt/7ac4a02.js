/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{662:function(t,e,n){t.exports=function(){"use strict";var t=Object.prototype.toString,e=Array.isArray||function(object){return"[object Array]"===t.call(object)};function n(object){return"function"==typeof object}function r(t){return e(t)?"array":typeof t}function o(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function c(t,e){return null!=t&&"object"==typeof t&&e in t}function l(t,e){return null!=t&&"object"!=typeof t&&t.hasOwnProperty&&t.hasOwnProperty(e)}var f=RegExp.prototype.test;function h(t,e){return f.call(t,e)}var d=/\S/;function v(t){return!h(d,t)}var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function _(t){return String(t).replace(/[&<>"'`=\/]/g,(function(s){return m[s]}))}var y=/\s*/,w=/\s+/,x=/\s*=/,k=/\s*\}/,$=/#|\^|\/|>|\{|&|=|!/;function C(template,t){if(!template)return[];var n,r,c,l=!1,f=[],h=[],d=[],m=!1,_=!1,C="",E=0;function j(){if(m&&!_)for(;d.length;)delete h[d.pop()];else d=[];m=!1,_=!1}function O(t){if("string"==typeof t&&(t=t.split(w,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);n=new RegExp(o(t[0])+"\\s*"),r=new RegExp("\\s*"+o(t[1])),c=new RegExp("\\s*"+o("}"+t[1]))}O(t||V.tags);for(var U,P,M,R,A,F,H=new T(template);!H.eos();){if(U=H.pos,M=H.scanUntil(n))for(var i=0,J=M.length;i<J;++i)v(R=M.charAt(i))?(d.push(h.length),C+=R):(_=!0,l=!0,C+=" "),h.push(["text",R,U,U+1]),U+=1,"\n"===R&&(j(),C="",E=0,l=!1);if(!H.scan(n))break;if(m=!0,P=H.scan($)||"name",H.scan(y),"="===P?(M=H.scanUntil(x),H.scan(x),H.scanUntil(r)):"{"===P?(M=H.scanUntil(c),H.scan(k),H.scanUntil(r),P="&"):M=H.scanUntil(r),!H.scan(r))throw new Error("Unclosed tag at "+H.pos);if(A=">"==P?[P,M,U,H.pos,C,E,l]:[P,M,U,H.pos],E++,h.push(A),"#"===P||"^"===P)f.push(A);else if("/"===P){if(!(F=f.pop()))throw new Error('Unopened section "'+M+'" at '+U);if(F[1]!==M)throw new Error('Unclosed section "'+F[1]+'" at '+U)}else"name"===P||"{"===P||"&"===P?_=!0:"="===P&&O(M)}if(j(),F=f.pop())throw new Error('Unclosed section "'+F[1]+'" at '+H.pos);return I(S(h))}function S(t){for(var e,n,r=[],i=0,o=t.length;i<o;++i)(e=t[i])&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(r.push(e),n=e));return r}function I(t){for(var e,n=[],r=n,o=[],i=0,c=t.length;i<c;++i)switch((e=t[i])[0]){case"#":case"^":r.push(e),o.push(e),r=e[4]=[];break;case"/":o.pop()[5]=e[2],r=o.length>0?o[o.length-1][4]:n;break;default:r.push(e)}return n}function T(t){this.string=t,this.tail=t,this.pos=0}function E(view,t){this.view=view,this.cache={".":this.view},this.parent=t}function j(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}T.prototype.eos=function(){return""===this.tail},T.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},T.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},E.prototype.push=function(view){return new E(view,this)},E.prototype.lookup=function(t){var e,r=this.cache;if(r.hasOwnProperty(t))e=r[t];else{for(var o,f,h,d=this,v=!1;d;){if(t.indexOf(".")>0)for(o=d.view,f=t.split("."),h=0;null!=o&&h<f.length;)h===f.length-1&&(v=c(o,f[h])||l(o,f[h])),o=o[f[h++]];else o=d.view[t],v=c(d.view,t);if(v){e=o;break}d=d.parent}r[t]=e}return n(e)&&(e=e.call(this.view)),e},j.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},j.prototype.parse=function(template,t){var e=this.templateCache,n=template+":"+(t||V.tags).join(":"),r=void 0!==e,o=r?e.get(n):void 0;return null==o&&(o=C(template,t),r&&e.set(n,o)),o},j.prototype.render=function(template,view,t,e){var n=this.getConfigTags(e),r=this.parse(template,n),o=view instanceof E?view:new E(view,void 0);return this.renderTokens(r,o,t,template,e)},j.prototype.renderTokens=function(t,e,n,r,o){for(var c,symbol,l,f="",i=0,h=t.length;i<h;++i)l=void 0,"#"===(symbol=(c=t[i])[0])?l=this.renderSection(c,e,n,r,o):"^"===symbol?l=this.renderInverted(c,e,n,r,o):">"===symbol?l=this.renderPartial(c,e,n,o):"&"===symbol?l=this.unescapedValue(c,e):"name"===symbol?l=this.escapedValue(c,e,o):"text"===symbol&&(l=this.rawValue(c)),void 0!==l&&(f+=l);return f},j.prototype.renderSection=function(t,r,o,c,l){var f=this,h="",d=r.lookup(t[1]);function v(template){return f.render(template,r,o,l)}if(d){if(e(d))for(var m=0,_=d.length;m<_;++m)h+=this.renderTokens(t[4],r.push(d[m]),o,c,l);else if("object"==typeof d||"string"==typeof d||"number"==typeof d)h+=this.renderTokens(t[4],r.push(d),o,c,l);else if(n(d)){if("string"!=typeof c)throw new Error("Cannot use higher-order sections without the original template");null!=(d=d.call(r.view,c.slice(t[3],t[5]),v))&&(h+=d)}else h+=this.renderTokens(t[4],r,o,c,l);return h}},j.prototype.renderInverted=function(t,n,r,o,c){var l=n.lookup(t[1]);if(!l||e(l)&&0===l.length)return this.renderTokens(t[4],n,r,o,c)},j.prototype.indentPartial=function(t,e,n){for(var r=e.replace(/[^ \t]/g,""),o=t.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!n)&&(o[i]=r+o[i]);return o.join("\n")},j.prototype.renderPartial=function(t,e,r,o){if(r){var c=this.getConfigTags(o),l=n(r)?r(t[1]):r[t[1]];if(null!=l){var f=t[6],h=t[5],d=t[4],v=l;0==h&&d&&(v=this.indentPartial(l,d,f));var m=this.parse(v,c);return this.renderTokens(m,e,r,v,o)}}},j.prototype.unescapedValue=function(t,e){var n=e.lookup(t[1]);if(null!=n)return n},j.prototype.escapedValue=function(t,e,n){var r=this.getConfigEscape(n)||V.escape,o=e.lookup(t[1]);if(null!=o)return"number"==typeof o&&r===V.escape?String(o):r(o)},j.prototype.rawValue=function(t){return t[1]},j.prototype.getConfigTags=function(t){return e(t)?t:t&&"object"==typeof t?t.tags:void 0},j.prototype.getConfigEscape=function(t){return t&&"object"==typeof t&&!e(t)?t.escape:void 0};var V={name:"mustache.js",version:"4.1.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){O.templateCache=t},get templateCache(){return O.templateCache}},O=new j;return V.clearCache=function(){return O.clearCache()},V.parse=function(template,t){return O.parse(template,t)},V.render=function(template,view,t,e){if("string"!=typeof template)throw new TypeError('Invalid template! Template should be a "string" but "'+r(template)+'" was given as the first argument for mustache#render(template, view, partials)');return O.render(template,view,t,e)},V.escape=_,V.Scanner=T,V.Context=E,V.Writer=j,V}()},690:function(t,e,n){"use strict";var r=n(662),o=n.n(r),c={name:"IntroductionItem",props:{title:{type:String,default:""},user:{type:Object,default:function(){return{}}},disableMustache:{type:Boolean,default:!1}},computed:{message:function(){return this.disableMustache?this.user.message:o.a.render(this.user.message,this.$store.state.baseInfo.new_hire)}}},l=n(23),f=n(24),h=n.n(f),d=n(208),v=n(43),m=n(175),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("v-card",{attrs:{"max-width":"344",outlined:""}},[null!==t.user.profile_image?n("v-img",{staticClass:"white--text align-end",attrs:{src:t.user.profile_image.file_url,height:"200px"}}):t._e(),t._v(" "),n("v-card-text",{staticClass:"text--primary"},[n("h4",[t._v(t._s(t.user.first_name)+" "+t._s(t.user.last_name))]),t._v(" "),n("div",[t._v(t._s(t.message))]),t._v(" "),""!==t.user.linkedin?n("a",{attrs:{href:t._f("addHTTPS")(t.user.linkedin)}},[n("font-awesome-icon",{staticStyle:{color:"#0077b5 !important"},attrs:{icon:["fab","linkedin"]}})],1):t._e(),t._v(" "),""!==t.user.facebook?n("a",{attrs:{href:t._f("addHTTPS")(t.user.facebook)}},[n("font-awesome-icon",{staticStyle:{color:"#3b5998 !important"},attrs:{icon:["fab","facebook"]}})],1):t._e(),t._v(" "),""!==t.user.twitter?n("a",{attrs:{href:t._f("addHTTPS")(t.user.twitter)}},[n("font-awesome-icon",{staticStyle:{color:"#1da1f2 !important"},attrs:{icon:["fab","twitter"]}})],1):t._e(),t._v(" "),""!==t.user.email?n("a",{attrs:{href:"mailto:"+t.user.email}},[n("font-awesome-icon",{staticStyle:{color:"green !important"},attrs:{icon:["fas","envelope"]}})],1):t._e(),t._v(" "),""!==t.user.phone?n("a",{attrs:{href:"tel:"+t.user.phone}},[n("font-awesome-icon",{staticStyle:{color:"gray !important"},attrs:{icon:["fas","phone-square"]}})],1):t._e()])],1)],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VCard:d.a,VCardText:v.b,VImg:m.a})},699:function(t,e,n){"use strict";var r={components:{IntroductionItem:n(690).a},props:{value:{type:Object,default:function(){return{}}},errors:{type:Object,default:function(){return{}}}},data:function(t){return{search:"",text:t.$t("intro.placeholders")}},computed:{errorMessages:function(){return JSON.parse(JSON.stringify(this.errors))}},watch:{value:{handler:function(t){this.$emit("input",t)},deep:!0},"value.intro_person":function(t){this.value.intro_person_id=t.id},errors:function(t){"content"in t&&this.$store.dispatch("showSnackbar","Content: "+t.content[0])}}},o=n(23),c=n(24),l=n.n(c),f=n(126),h=n(644),d=n(652),v=n(648),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-md":"","pa-4":""}},[n("v-row",[n("v-col",{attrs:{xs:"4"}},[n("v-col",{attrs:{xs:"12"}},[n("VTextFieldEmoji",{attrs:{label:t.$t("intro.title"),errors:t.errorMessages.name},on:{removeError:function(e){t.errorMessages.name=""}},model:{value:t.value.name,callback:function(e){t.$set(t.value,"name",e)},expression:"value.name"}})],1),t._v(" "),n("v-col",{attrs:{xs:"12"}},[n("v-autocomplete",{attrs:{items:t.$store.state.employees.all,label:t.$t("intro.selectEmployee"),"error-messages":t.errorMessages.intro_person,"item-text":"full_name","return-object":""},on:{change:function(e){t.errorMessages.intro_person=""}},model:{value:t.value.intro_person,callback:function(e){t.$set(t.value,"intro_person",e)},expression:"value.intro_person"}})],1),t._v(" "),n("v-col",{attrs:{xs:"12"}},[n("TagsSelector",{staticClass:"pt-2",model:{value:t.value.tags,callback:function(e){t.$set(t.value,"tags",e)},expression:"value.tags"}})],1)],1),t._v(" "),n("v-col",{staticStyle:{"margin-left":"20px"},attrs:{xs:"8"}},[t.value.intro_person?n("div",[n("IntroductionItem",{attrs:{title:t.value.name,user:t.value.intro_person,"disable-mustache":""}})],1):t._e(),t._v(" "),n("div",[n("i",{staticStyle:{"font-size":"12px",top:"10px",position:"relative"}},[t._v(t._s(t.text)+" ")])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VAutocomplete:f.a,VCol:h.a,VContainer:d.a,VRow:v.a})},751:function(t,e,n){var content=n(841);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("112d9f04",content,!0,{sourceMap:!1})},840:function(t,e,n){"use strict";n(751)},841:function(t,e,n){var r=n(16)(!1);r.push([t.i,".border-bottom[data-v-de190f2a]{border-bottom:1px solid #e4e4e4}.second[data-v-de190f2a]{margin-left:10px}.first[data-v-de190f2a]{margin-right:10px}",""]),t.exports=r},912:function(t,e,n){"use strict";n.r(e);n(7);var r={layout:"admin",components:{IntroForm:n(699).a},data:function(){return{loading:!0,saving:!1,removing:!1,submittingForm:!1,errors:{},employee:{},intro:{}}},watch:{$route:function(t,e){this.getIntro()}},mounted:function(){this.getIntro()},methods:{getIntro:function(){var t=this;this.$intros.get(this.$route.params.id).then((function(data){t.intro=data})).catch((function(e){t.$store.dispatch("showSnackbar",t.$t("intro.couldNotRemove"))})).finally((function(){t.loading=!1}))},saveIntro:function(){var t=this;this.saving=!0,this.$intros.update(this.$route.params.id,this.intro).then((function(data){t.$router.push({name:"admin-templates-intros"}),t.$store.dispatch("showSnackbar",t.$t("intro.updated"))})).catch((function(e){t.errors=e})).finally((function(){t.saving=!1}))},removeIntro:function(){var t=this;this.removing=!0,this.$intros.remove(this.$route.params.id).then((function(data){t.$router.push({name:"admin-templates-intros"}),t.$store.dispatch("showSnackbar",t.$t("intro.removed"))})).catch((function(e){t.errors=e})).finally((function(){t.removing=!1}))}}},o=(n(840),n(23)),c=n(24),l=n.n(c),f=n(140),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("TemplateCompInner",[n("template",{slot:"header"},[n("h1",{staticClass:"heading",staticStyle:{"margin-top":"10px"}},[t._v("\n      "+t._s(t.$t("intro.changeHeader"))+"\n    ")])]),t._v(" "),n("template",{slot:"header-right"},[n("v-btn",{staticStyle:{"margin-right":"0px"},attrs:{loading:t.removing,color:"error"},on:{click:t.removeIntro}},[t._v("\n      "+t._s(t.$t("buttons.remove"))+"\n    ")])],1),t._v(" "),n("template",{slot:"formpart"},[n("LoadingIcon",{attrs:{"is-loading":t.loading}}),t._v(" "),t.loading?t._e():n("div",[n("IntroForm",{attrs:{loading:t.loading,errors:t.errors},model:{value:t.intro,callback:function(e){t.intro=e},expression:"intro"}})],1)],1),t._v(" "),n("template",{slot:"footer"},[n("v-btn",{staticStyle:{float:"right"},attrs:{loading:t.saving,color:"primary"},on:{click:t.saveIntro}},[t._v("\n      "+t._s(t.$t("buttons.save"))+"\n    ")])],1)],2)}),[],!1,null,"de190f2a",null);e.default=component.exports;l()(component,{VBtn:f.a})}}]);