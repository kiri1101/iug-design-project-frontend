import n from"./Og8KnRTi.js";import{C as r,T as o,c as s,o as l,W as d,b as i,Z as a}from"#entry";var p=`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,v={root:"p-overlaybadge"},c=r.extend({name:"overlaybadge",style:p,classes:v}),g={name:"OverlayBadge",extends:n,style:c,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},m={name:"OverlayBadge",extends:g,inheritAttrs:!1,components:{Badge:n}};function y(e,u,b,B,f,$){var t=o("Badge");return l(),s("div",a({class:e.cx("root")},e.ptmi("root")),[d(e.$slots,"default"),i(t,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}m.render=y;export{m as default};
