(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{466:function(t,s,e){"use strict";e.r(s);var a=e(43),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"consul-bridge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consul-bridge"}},[t._v("#")]),t._v(" Consul bridge")]),t._v(" "),e("p",[t._v("This discovery bridge imports services from "),e("a",{attrs:{href:"http://consul.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Consul"),e("OutboundLink")],1),t._v("\ninto the Vert.x service discovery. The bridge connects to a Consul agent\n(server) and periodically scan for services:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("new services are imported")])]),t._v(" "),e("li",[e("p",[t._v("services in maintenance mode or that has been removed from consul\nare removed")])])]),t._v(" "),e("p",[t._v("This bridge uses the HTTP API for Consul. It does not export to Consul\nand does not support service modification.")]),t._v(" "),e("p",[t._v("The service type is deduced from "),e("code",[t._v("tags")]),t._v(". If a "),e("code",[t._v("tag")]),t._v(" matches a known\nservice type, this service type will be used. If not, the service is\nimported as "),e("code",[t._v("unknown")]),t._v(". Only "),e("code",[t._v("http-endpoint")]),t._v(" is supported for now.")]),t._v(" "),e("h2",{attrs:{id:"using-the-bridge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-bridge"}},[t._v("#")]),t._v(" Using the bridge")]),t._v(" "),e("p",[t._v("To use this Vert.x discovery bridge, add the following dependency to the\n"),e("em",[t._v("dependencies")]),t._v(" section of your build descriptor:")]),t._v(" "),e("ul",[e("li",[t._v("Maven (in your "),e("code",[t._v("pom.xml")]),t._v("):")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.vertx"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("vertx-service-discovery-bridge-consul"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${maven.version}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("ul",[e("li",[t._v("Gradle (in your "),e("code",[t._v("build.gradle")]),t._v(" file):")])]),t._v(" "),e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("compile "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'io.vertx:vertx-service-discovery-bridge-consul:${maven.version}'")]),t._v("\n")])])]),e("p",[t._v("Then, when creating the service discovery registers this bridge as\nfollows:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ServiceDiscovery "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vertx/service-discovery"')]),t._v("\nServiceDiscovery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerServiceImporter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.vertx.servicediscovery.consul.ConsulServiceImporter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"port"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scan-period"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("You can configure the:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("agent host using the "),e("code",[t._v("host")]),t._v(" property, it defaults to "),e("code",[t._v("localhost")])])]),t._v(" "),e("li",[e("p",[t._v("agent port using the "),e("code",[t._v("port")]),t._v(" property, it defaults to 8500")])]),t._v(" "),e("li",[e("p",[t._v("acl token using the "),e("code",[t._v("acl_token")]),t._v(" property, it defaults to null")])]),t._v(" "),e("li",[e("p",[t._v("scan period using the "),e("code",[t._v("scan-period")]),t._v(" property. The time is set in ms,\nand is 2000 ms by default")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);