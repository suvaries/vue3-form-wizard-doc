import{_ as o,r as a,c as s,b as e,a as i,d as n,e as d,o as c}from"./app.3e464938.js";const r={},l=e("h3",{id:"events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#"),n(" Events")],-1),h=n("Vue-form-wizard emits certain events when certain actions happen inside the component. The events can be noticed in some of the demos and especially in the "),g={href:"https://jsfiddle.net/bt5dhqtf/272/",target:"_blank",rel:"noopener noreferrer"},m=n("async validation demo"),f=d("<ul><li><strong>on-complete</strong> Called when the finish button is clicked and the <code>before-change</code> for the last step (if present) was executed. No params are sent together with this event. <code>this.$emit(&#39;on-complete&#39;)</code></li><li><strong>on-loading</strong> Called whenever an async <code>before-change</code> is executed. This event is emitted before executing <code>before-change</code> and after finishing execution of <code>before-change</code> method. <code>on-loading</code> is emitted together with a Boolean value. <code>this.$emit(&#39;on-loading&#39;, value)</code></li><li><strong>on-validate</strong> Called whenever the execution of a <code>before-change</code> method is completed. The event sends along a Boolean which represents the validation result as well as an int with te tab index. <code>this.$emit(&#39;on-validate&#39;, validationResult, this.activeTabIndex)</code></li><li><strong>on-error</strong> Called when <code>before-change</code> is a promised and is rejected with a message. The message is passed along <code>this.$emit(&#39;on-error&#39;, error)</code> See async validation fiddle</li><li><strong>on-change</strong> Called upon step changes. Has prevIndex and nextIndes as params. <code>this.$emit(&#39;on-change&#39;, prevIndex, nextIndex)</code></li></ul>",1);function p(_,v){const t=a("ExternalLinkIcon");return c(),s("div",null,[l,e("p",null,[h,e("a",g,[m,i(t)])]),f])}const x=o(r,[["render",p],["__file","index.html.vue"]]);export{x as default};
