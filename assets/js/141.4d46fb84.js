(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{447:function(t,s,e){"use strict";e.r(s);var a=e(43),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Vert.x-tcp-eventbus-bridge is a TCP bridge to Vert.x EventBus. To use\nthis project, add the following dependency to the "),e("em",[t._v("dependencies")]),t._v(" section\nof your build descriptor:")]),t._v(" "),e("p",[t._v("Maven (in your "),e("code",[t._v("pom.xml")]),t._v("):")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${maven.groupId}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${maven.artifactId}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${maven.version}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Gradle (in your "),e("code",[t._v("build.gradle")]),t._v(" file):")]),t._v(" "),e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("compile "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${maven.groupId}:${maven.artifactId}:${maven.version}'")]),t._v("\n")])])]),e("p",[t._v("The TCP EventBus bridge is built on top of TCP, meaning that any\napplication that can create TCP sockets can interact with a remote\nVert.x instance via its event bus.")]),t._v(" "),e("p",[t._v("The main use case for the TCP bridge "),e("em",[t._v("versus")]),t._v(" the SockJS bridge is for\napplications that are more resource-constrained and that need to be\nlightweight since the whole HTTP WebSockets is replaced with plain TCP\nsockets.")]),t._v(" "),e("p",[t._v("It remains of course useful even for applications that don’t have tight\nresource constraints: the protocol is simple enough to efficiently\nprovide an integration interface with non-JVM applications.")]),t._v(" "),e("p",[t._v("The protocol has been kept as simple as possible and communications use\nFrames both ways. The structure of a Frame looks like this:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("<Length: uInt32><{\n  type: String,\n  address: String,\n  (replyAddress: String)?,\n  headers: JsonObject,\n  body: JsonObject\n}: JsonObject>\n")])])]),e("p",[t._v("The message consists of a JSON document that may or may not have been\nminified. The message must be prefixed by a "),e("em",[t._v("big endian")]),t._v(" 32 bits\npositive integer (4 bytes) that indicates the full length of the JSON\ndocument, in bytes.")]),t._v(" "),e("p",[t._v("The message "),e("code",[t._v("type")]),t._v(" can be the following for messages sent by the TCP\nclient:")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("send")]),t._v(" to send a message to an "),e("code",[t._v("address")]),t._v(",")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("publish")]),t._v(" to publish a message to an "),e("code",[t._v("address")]),t._v(",")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("register")]),t._v(" to subscribe to the messages sent or published to an\n"),e("code",[t._v("address")]),t._v(",")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("unregister")]),t._v(" to unsubscribe to the messages sent or published to an\n"),e("code",[t._v("address")]),t._v(",")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("ping")]),t._v(" to send a "),e("code",[t._v("ping")]),t._v(" request to the bridge.")])])]),t._v(" "),e("p",[t._v("Note that the "),e("code",[t._v("replyAddress")]),t._v(" field is optional and may only be used for\na "),e("code",[t._v("send")]),t._v(" message. A message with that field is expected to "),e("em",[t._v("eventually")]),t._v("\nreceive a message back from the server whose "),e("code",[t._v("address")]),t._v(" field will be\nthat of the original "),e("code",[t._v("replyAddress")]),t._v(" value.")]),t._v(" "),e("p",[t._v("The server posts messages back to the client, and they can be of the\nfollowing "),e("code",[t._v("type")]),t._v(":")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("message")]),t._v(" for messages sent or published to an "),e("code",[t._v("address")]),t._v(", or")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("err")]),t._v(" to indicate an error (the "),e("code",[t._v("body")]),t._v(" shall contain details), or")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("pong")]),t._v(" to respond the "),e("code",[t._v("ping")]),t._v(" request sent from client.")])])]),t._v(" "),e("p",[t._v("An example NodeJS client is available in the source of the project. This\nclient uses the same API as the SockJS counter part so it should make it\neasier to switch between the TCP and SockJS implementations.")]),t._v(" "),e("p",[t._v("An example on how to get started with this bridge could be:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TcpEventBusBridge "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vertx/tcp-eventbus-bridge"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bridge "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TcpEventBusBridge"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BridgeOptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInboundPermitteds")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PermittedOptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAddress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"in"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOutboundPermitteds")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PermittedOptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAddress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"out"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbridge"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("succeeded")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// succeed...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fail...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);