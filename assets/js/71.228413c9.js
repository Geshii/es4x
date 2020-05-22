(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{505:function(t,e,v){"use strict";v.r(e);var _=v(43),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"clientauth"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#clientauth"}},[t._v("#")]),t._v(" ClientAuth")]),t._v(" "),v("p",[t._v("Configures the engine to require/request client authentication.")]),t._v(" "),v("p",[t._v("Created by manishk on 10/2/2015.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("NONE")])]),t._v(" "),v("td",[t._v("No client authentication is requested or required.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("REQUEST")])]),t._v(" "),v("td",[t._v("Accept authentication if presented by client. If this option is set and the client chooses not to provide authentication information about itself, the negotiations will continue.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("REQUIRED")])]),t._v(" "),v("td",[t._v("Require client to present authentication, if not presented then negotiations will be declined.")])])])]),t._v(" "),v("h1",{attrs:{id:"cookiesamesite"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookiesamesite"}},[t._v("#")]),t._v(" CookieSameSite")]),t._v(" "),v("p",[t._v("Represents the Cookie SameSite policy to be used. For more info")]),t._v(" "),v("p",[t._v("https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#SameSite_cookies")]),t._v(" "),v("p",[t._v(".")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("NONE")])]),t._v(" "),v("td",[t._v("The browser will send cookies with both cross-site requests and same-site requests.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("STRICT")])]),t._v(" "),v("td",[t._v("The browser will only send cookies for same-site requests (requests originating from the site that set the cookie). If the request originated from a different URL than the URL of the current location, none of the cookies tagged with the Strict attribute will be included.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("LAX")])]),t._v(" "),v("td",[t._v("Same-site cookies are withheld on cross-site subrequests, such as calls to load images or frames, but will be sent when a user navigates to the URL from an external site; for example, by following a link.")])])])]),t._v(" "),v("h1",{attrs:{id:"dnsresponsecode"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dnsresponsecode"}},[t._v("#")]),t._v(" DnsResponseCode")]),t._v(" "),v("p",[t._v("Represents the possible response codes a server may send after receiving\na query. A response code of 0 indicates no error.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("NOERROR")])]),t._v(" "),v("td",[t._v("ID 0, no error")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("FORMERROR")])]),t._v(" "),v("td",[t._v("ID 1, format error")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SERVFAIL")])]),t._v(" "),v("td",[t._v("ID 2, server failure")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("NXDOMAIN")])]),t._v(" "),v("td",[t._v("ID 3, name error")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("NOTIMPL")])]),t._v(" "),v("td",[t._v("ID 4, not implemented")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("REFUSED")])]),t._v(" "),v("td",[t._v("ID 5, operation refused")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("YXDOMAIN")])]),t._v(" "),v("td",[t._v("ID 6, domain name should not exist")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("YXRRSET")])]),t._v(" "),v("td",[t._v("ID 7, resource record set should not exist")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("NXRRSET")])]),t._v(" "),v("td",[t._v("ID 8, rrset does not exist")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("NOTAUTH")])]),t._v(" "),v("td",[t._v("ID 9, not authoritative for zone")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("NOTZONE")])]),t._v(" "),v("td",[t._v("ID 10, name not in zone")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("BADVERS")])]),t._v(" "),v("td",[t._v("ID 11, bad extension mechanism for version")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("BADSIG")])]),t._v(" "),v("td",[t._v("ID 12, bad signature")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("BADKEY")])]),t._v(" "),v("td",[t._v("ID 13, bad key")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("BADTIME")])]),t._v(" "),v("td",[t._v("ID 14, bad timestamp")])])])]),t._v(" "),v("h1",{attrs:{id:"httpmethod"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#httpmethod"}},[t._v("#")]),t._v(" HttpMethod")]),t._v(" "),v("p",[t._v("Represents an HTTP method")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("OPTIONS")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("GET")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("HEAD")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("POST")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("PUT")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("DELETE")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("TRACE")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("CONNECT")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("PATCH")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("OTHER")])]),t._v(" "),v("td",[t._v("-")])])])]),t._v(" "),v("h1",{attrs:{id:"httpversion"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#httpversion"}},[t._v("#")]),t._v(" HttpVersion")]),t._v(" "),v("p",[t._v("Represents the version of the HTTP protocol.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("HTTP_1_0")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("HTTP_1_1")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("HTTP_2")])]),t._v(" "),v("td",[t._v("-")])])])]),t._v(" "),v("h1",{attrs:{id:"jsoneventtype"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jsoneventtype"}},[t._v("#")]),t._v(" JsonEventType")]),t._v(" "),v("p",[t._v("The possibles types of link emitted by the link.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("START_OBJECT")])]),t._v(" "),v("td",[t._v("Signals the start of a JSON object.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("END_OBJECT")])]),t._v(" "),v("td",[t._v("Signals the end of a JSON object.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("START_ARRAY")])]),t._v(" "),v("td",[t._v("Signals the start of a JSON array.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("END_ARRAY")])]),t._v(" "),v("td",[t._v("Signals the end of a JSON array.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("VALUE")])]),t._v(" "),v("td",[t._v("Signals a JSON value.")])])])]),t._v(" "),v("h1",{attrs:{id:"proxytype"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#proxytype"}},[t._v("#")]),t._v(" ProxyType")]),t._v(" "),v("p",[t._v("The type of a TCP proxy server.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("HTTP")])]),t._v(" "),v("td",[t._v("HTTP CONNECT ssl proxy")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SOCKS4")])]),t._v(" "),v("td",[t._v("SOCKS4/4a tcp proxy")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SOCKS5")])]),t._v(" "),v("td",[t._v("SOCSK5 tcp proxy")])])])]),t._v(" "),v("h1",{attrs:{id:"replyfailure"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#replyfailure"}},[t._v("#")]),t._v(" ReplyFailure")]),t._v(" "),v("p",[t._v("Represents the type of reply failure")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("TIMEOUT")])]),t._v(" "),v("td",[t._v("The message send failed because no reply was received before the timeout time.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("NO_HANDLERS")])]),t._v(" "),v("td",[t._v("The message send failed because no handlers were available to handle the message.")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("RECIPIENT_FAILURE")])]),t._v(" "),v("td",[t._v("The message send failed because the recipient actively sent back a failure (rejected the message)")])])])]),t._v(" "),v("h1",{attrs:{id:"websocketversion"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#websocketversion"}},[t._v("#")]),t._v(" WebsocketVersion")]),t._v(" "),v("p",[t._v("Represents the WebSocket version")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Name")]),t._v(" "),v("td",[t._v("Description")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("V00")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("V07")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("V08")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("V13")])]),t._v(" "),v("td",[t._v("-")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);