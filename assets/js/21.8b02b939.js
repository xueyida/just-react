(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{367:function(t,s,e){"use strict";e.r(s);var a=e(43),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在本章剩下部分我们会讲解"),e("code",[t._v("Fiber节点")]),t._v("是如何被创建并构建"),e("code",[t._v("Fiber树")]),t._v("的。")]),t._v(" "),e("p",[e("code",[t._v("render阶段")]),t._v("开始于"),e("code",[t._v("performSyncWorkOnRoot")]),t._v("或"),e("code",[t._v("performConcurrentWorkOnRoot")]),t._v("方法的调用。这取决于本次更新是同步更新还是异步更新。")]),t._v(" "),e("p",[t._v("我们现在还不需要学习这两个方法，只需要知道在这两个方法中会调用如下两个方法：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// performSyncWorkOnRoot会调用该方法")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("workLoopSync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// performConcurrentWorkOnRoot会调用该方法")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("workLoopConcurrent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldYield")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("可以看到，他们唯一的区别是是否调用"),e("code",[t._v("shouldYield")]),t._v("。如果当前浏览器帧没有剩余时间，"),e("code",[t._v("shouldYield")]),t._v("会中止循环，直到浏览器有空闲时间后再继续遍历。")]),t._v(" "),e("p",[e("code",[t._v("workInProgress")]),t._v("代表当前已创建的"),e("code",[t._v("workInProgress fiber")]),t._v("。")]),t._v(" "),e("p",[e("code",[t._v("performUnitOfWork")]),t._v("方法会创建下一个"),e("code",[t._v("Fiber节点")]),t._v("并赋值给"),e("code",[t._v("workInProgress")]),t._v("，并将"),e("code",[t._v("workInProgress")]),t._v("与已创建的"),e("code",[t._v("Fiber节点")]),t._v("连接起来构成"),e("code",[t._v("Fiber树")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("你可以从"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1534",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("看到"),e("code",[t._v("workLoopConcurrent")]),t._v("的源码")])]),t._v(" "),e("p",[t._v("我们知道"),e("code",[t._v("Fiber Reconciler")]),t._v("是从"),e("code",[t._v("Stack Reconciler")]),t._v("重构而来，通过遍历的方式实现可中断的递归，所以"),e("code",[t._v("performUnitOfWork")]),t._v("的工作可以分为两部分：“递”和“归”。")]),t._v(" "),e("h2",{attrs:{id:"递-阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#递-阶段"}},[t._v("#")]),t._v(" “递”阶段")]),t._v(" "),e("p",[t._v("首先从"),e("code",[t._v("rootFiber")]),t._v("开始向下深度优先遍历。为遍历到的每个"),e("code",[t._v("Fiber节点")]),t._v("调用"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberBeginWork.new.js#L3040",target:"_blank",rel:"noopener noreferrer"}},[t._v("beginWork方法"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("该方法会根据传入的"),e("code",[t._v("Fiber节点")]),t._v("创建"),e("code",[t._v("子Fiber节点")]),t._v("，并将这两个"),e("code",[t._v("Fiber节点")]),t._v("连接起来。")]),t._v(" "),e("p",[t._v("当遍历到叶子节点（即没有子组件的组件）时就会进入“归”阶段。")]),t._v(" "),e("h2",{attrs:{id:"归-阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#归-阶段"}},[t._v("#")]),t._v(" “归”阶段")]),t._v(" "),e("p",[t._v("在“归”阶段会调用"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L652",target:"_blank",rel:"noopener noreferrer"}},[t._v("completeWork"),e("OutboundLink")],1),t._v("处理"),e("code",[t._v("Fiber节点")]),t._v("。")]),t._v(" "),e("p",[t._v("当某个"),e("code",[t._v("Fiber节点")]),t._v("执行完"),e("code",[t._v("completeWork")]),t._v("，如果其存在"),e("code",[t._v("兄弟Fiber节点")]),t._v("（即"),e("code",[t._v("fiber.sibling !== null")]),t._v("），会进入其"),e("code",[t._v("兄弟Fiber")]),t._v("的“递”阶段。")]),t._v(" "),e("p",[t._v("如果不存在"),e("code",[t._v("兄弟Fiber")]),t._v("，会进入"),e("code",[t._v("父级Fiber")]),t._v("的“归”阶段。")]),t._v(" "),e("p",[t._v("“递”和“归”阶段会交错执行直到“归”到"),e("code",[t._v("rootFiber")]),t._v("。至此，"),e("code",[t._v("render阶段")]),t._v("的工作就结束了。")]),t._v(" "),e("h2",{attrs:{id:"例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),e("p",[t._v("以上一节的例子举例：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      i am\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("KaSong"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nReactDOM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("对应的"),e("code",[t._v("Fiber树")]),t._v("结构：\n"),e("img",{attrs:{src:t.$withBase("/img/fiber.png"),alt:"Fiber架构"}})]),t._v(" "),e("p",[e("code",[t._v("render阶段")]),t._v("会依次执行：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". rootFiber beginWork\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(". App Fiber beginWork\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". div Fiber beginWork\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(". "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i am"')]),t._v(" Fiber beginWork\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(". "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i am"')]),t._v(" Fiber completeWork\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(". span Fiber beginWork\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(". span Fiber completeWork\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(". div Fiber completeWork\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(". App Fiber completeWork\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(". rootFiber completeWork\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("之所以没有 “KaSong” Fiber 的 beginWork/completeWork，是因为作为一种性能优化手段，针对只有单一文本子节点的"),e("code",[t._v("Fiber")]),t._v("，"),e("code",[t._v("React")]),t._v("会特殊处理。")])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("自己试一试 Demo")]),t._v(" "),e("p",[t._v("我在"),e("code",[t._v("beginWork")]),t._v("和"),e("code",[t._v("completeWork")]),t._v("调用时打印"),e("code",[t._v("fiber.tag")]),t._v("和"),e("code",[t._v("fiber.type")]),t._v("。")]),t._v(" "),e("p",[t._v("你可以从"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactWorkTags.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReactWorkTags.js"),e("OutboundLink")],1),t._v("看到"),e("code",[t._v("Fiber节点")]),t._v("的所有"),e("code",[t._v("tag")]),t._v("定义。")]),t._v(" "),e("p",[t._v("相信多调试几次，你一定能明白方法的调用顺序")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://code.h5jun.com/kexev/edit?html,js,console,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo"),e("OutboundLink")],1)])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("performUnitOfWork 的递归版本")]),t._v(" "),e("p",[t._v("如果将"),e("code",[t._v("performUnitOfWork")]),t._v("转化为递归版本，大体代码如下：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fiber")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行beginWork")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行completeWork")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("本节我们介绍了"),e("code",[t._v("render阶段")]),t._v("会调用的方法。在接下来两节中，我们会讲解"),e("code",[t._v("beginWork")]),t._v("和"),e("code",[t._v("completeWork")]),t._v("做的具体工作。")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://indepth.dev/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-to-walk-the-components-tree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The how and why on React’s usage of linked list in Fiber to walk the component’s tree"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);