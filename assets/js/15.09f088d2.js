(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{481:function(t,e,_){"use strict";_.r(e);var r=_(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("Block",[_("h1",{attrs:{id:"api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),_("h2",{attrs:{id:"http-convention"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-convention"}},[t._v("#")]),t._v(" HTTP convention")]),t._v(" "),_("ul",[_("li",[t._v("All read endpoints use "),_("code",[t._v("GET")]),t._v(" method. They accept only request parameters. No request body will be read.")]),t._v(" "),_("li",[_("code",[t._v("DELETE")]),t._v(" methods remove resources(like orders), but not all removing operation using "),_("code",[t._v("DELETE")]),t._v(",\nas "),_("code",[t._v("DELETE")]),t._v("s don't read request body either. For complex removing operations, "),_("code",[t._v("POST")]),t._v(" method is used\nwith parameters filled in request body.")]),t._v(" "),_("li",[t._v("Updating is done using "),_("code",[t._v("POST")]),t._v(", "),_("code",[t._v("PUT")]),t._v(" or "),_("code",[t._v("PATCH")]),t._v(" method. Their parameters are either in body or\nrequest parameters for different endpoints. Refer to endpoint detail for how to send the request.")]),t._v(" "),_("li",[t._v("All endpoints return HTTP status code "),_("code",[t._v("2xx")]),t._v(" on success. "),_("code",[t._v("401")]),t._v(" is returned on authentication failure.\nOther "),_("code",[t._v("4xx")]),t._v(" codes mean the request is malformed. "),_("code",[t._v("5xx")]),t._v(" means the server encounter some critical error\non processing the request. Commit issues if "),_("code",[t._v("5xx")]),t._v(" is met.")])]),t._v(" "),_("h2",{attrs:{id:"time"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#time"}},[t._v("#")]),t._v(" Time")]),t._v(" "),_("p",[t._v("All time related fields are unix timestamp in "),_("strong",[t._v("seconds")]),t._v(" if no extra note, but they may differ\nin formats(int64, number or string). Possible values like the following may be returned:")]),t._v(" "),_("ul",[_("li",[t._v("1596531048")]),t._v(" "),_("li",[t._v('"1596531048"')]),t._v(" "),_("li",[t._v("1596531048.285")]),t._v(" "),_("li",[t._v('"1596531048.285"')])]),t._v(" "),_("p",[t._v("The best way to handle time fields is parsing them as a number with decimal places.\nIf higher precision is not needed, you can safely cast them to integer(or long). Our SDKs listed\nabove has already taken proper deserialization to handle them")]),t._v(" "),_("h2",{attrs:{id:"pagination"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pagination"}},[t._v("#")]),t._v(" Pagination")]),t._v(" "),_("p",[t._v("Pagination is achieved using one of the following method")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("page-limit")])]),t._v(" "),_("li",[_("code",[t._v("limit-offset")])])]),t._v(" "),_("p",[t._v("In both method, "),_("code",[t._v("limit")]),t._v(" limits the maximum number of records returned in one request.\nIf no additional explanation, it defaults to "),_("code",[t._v("100")]),t._v(" if not provided and its maximum value is\nlimited to "),_("code",[t._v("1000")]),t._v(".")]),t._v(" "),_("p",[_("code",[t._v("page")]),t._v(" starts from "),_("code",[t._v("1")]),t._v(", mimicking common paging used in web pages. To iterate the whole list,\nuse the same "),_("code",[t._v("limit")]),t._v(" and increment "),_("code",[t._v("page")]),t._v(" by "),_("code",[t._v("1")]),t._v(" until the records' length is shorter than the\n"),_("code",[t._v("limit")])]),t._v(" "),_("p",[_("code",[t._v("offset")]),t._v(" starts from "),_("code",[t._v("0")]),t._v(", behaving like common DB search. To iterate the whole list, increment\n"),_("code",[t._v("offset")]),t._v(" by "),_("code",[t._v("limit")]),t._v(" until the records' length is shorter than the "),_("code",[t._v("limit")]),t._v(".")]),t._v(" "),_("p",[t._v("For example, if the total number of orders is 201. Using page-limit method, send request parameters\nlike the following:")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("page=1&limit=100")])]),t._v(" "),_("li",[_("code",[t._v("page=2&limit=100")])]),t._v(" "),_("li",[_("code",[t._v("page=3&limit=100")])])]),t._v(" "),_("p",[t._v("Using limit-offset method, send request parameters like:")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("limit=100&offset=0")])]),t._v(" "),_("li",[_("code",[t._v("limit=100&offset=100")])]),t._v(" "),_("li",[_("code",[t._v("limit=100&offset=200")])])]),t._v(" "),_("p",[t._v("Some endpoints may return additional pagination metadata. If present, they are sent back through\nthe response header. Take "),_("code",[t._v("GET /futures/{settle}/orders")]),t._v(" as an example, following headers will be\nreturned")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("X-Pagination-Limit")]),t._v(": request limit")]),t._v(" "),_("li",[_("code",[t._v("X-Pagination-Offset")]),t._v(": request offset")]),t._v(" "),_("li",[_("code",[t._v("X-Pagination-Total")]),t._v(": total record number satisfying the request")])]),t._v(" "),_("h2",{attrs:{id:"frequency-limit-rule"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#frequency-limit-rule"}},[t._v("#")]),t._v(" Frequency limit rule")]),t._v(" "),_("p",[t._v("Withdraw:")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("POST /withdrawals")]),t._v(" limits 1 request per 10 seconds per user.")])]),t._v(" "),_("p",[t._v("Spot:")]),t._v(" "),_("ul",[_("li",[t._v("300 read operations per IP per second")])]),t._v(" "),_("p",[t._v("Futures:")]),t._v(" "),_("ul",[_("li",[t._v("200 requests/second each user for private operations")]),t._v(" "),_("li",[t._v("Perpetual and delivery operations share the same limit")])]),t._v(" "),_("h2",{attrs:{id:"return-format"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#return-format"}},[t._v("#")]),t._v(" Return Format")]),t._v(" "),_("p",[t._v("All API responses are in JSON format, and users need to transform and extract data by themselves.")]),t._v(" "),_("p",[t._v("The HTTP status code 2XX will be returned when all operations are successful. 401 indicates that there is a problem with the certification. Other 4xx status codes indicate that the request is invalid. If it is a 5xx error, the server has encountered an unknown serious error when processing the request. Please give feedback as soon as possible。")]),t._v(" "),_("p",[_("strong",[t._v("Return Status")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Status Code")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("200/201")]),t._v(" "),_("td",[t._v("Request succeeded")])]),t._v(" "),_("tr",[_("td",[t._v("202")]),t._v(" "),_("td",[t._v("Request accepted by the server, but processing is not done yet")])]),t._v(" "),_("tr",[_("td",[t._v("204")]),t._v(" "),_("td",[t._v("Request succeeded, but the server doesn't return body")])]),t._v(" "),_("tr",[_("td",[t._v("400")]),t._v(" "),_("td",[t._v("Invalid request")])]),t._v(" "),_("tr",[_("td",[t._v("401")]),t._v(" "),_("td",[t._v("Authentication failed")])]),t._v(" "),_("tr",[_("td",[t._v("404")]),t._v(" "),_("td",[t._v("Not Found")])]),t._v(" "),_("tr",[_("td",[t._v("5xx")]),t._v(" "),_("td",[t._v("Server Error")])])])]),t._v(" "),_("h2",{attrs:{id:"data-type"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#data-type"}},[t._v("#")]),t._v(" Data Type")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Status Code")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("string")])]),t._v(" "),_("td",[t._v("String type, in double quotation marks. Price and amount are also formatted in string format")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("integer")])]),t._v(" "),_("td",[t._v("32-bit integer，Mainly related to status codes, size, times, etc.")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("integer(int64)")])]),t._v(" "),_("td",[t._v("64-bit integer，Mainly involves ID and higher precision timestamp")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("float")])]),t._v(" "),_("td",[t._v("Floating point number. Some time and stat fields use float.")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("object")])]),t._v(" "),_("td",[t._v("Object，Contains a child object{}")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("array")])]),t._v(" "),_("td",[t._v("List，Includes multiple groups of content")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("boolean")])]),t._v(" "),_("td",[t._v("true is true，false is false")])])])]),t._v(" "),_("h2",{attrs:{id:"error-handling"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#error-handling"}},[t._v("#")]),t._v(" Error Handling")]),t._v(" "),_("p",[t._v("For all abnormal requests, APIv4 will return non-2xx status code, with a response body in JSON format to\nexplain the error.")]),t._v(" "),_("p",[t._v("The error response body follows a format like:")]),t._v(" "),_("div",{staticClass:"language-json extra-class"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INVALID_PARAM_VALUE"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Invalid parameter `text` with value: abc"')]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),_("ul",[_("li",[_("code",[t._v("label")]),t._v(": denotes error type in "),_("code",[t._v("string")]),t._v(" format. Its value are chosen from a certain list(see below).\nPrograms can use "),_("code",[t._v("label")]),t._v(" to identify and catch a specific error.")]),t._v(" "),_("li",[_("code",[t._v("message")]),t._v("(or "),_("code",[t._v("detail")]),t._v("): detailed error message. A longer explanation showing why the error is generated\nor how to avoid it. Its purpose is helping to better understand the API. Error handling\nmechanism with this field is highly "),_("strong",[t._v("NOT")]),t._v(" recommended.")])]),t._v(" "),_("p",[t._v("Take Python "),_("a",{attrs:{href:"https://requests.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("requests"),_("OutboundLink")],1),t._v(" for example,\nerror handling can be written like:")]),t._v(" "),_("blockquote",[_("p",[t._v("Following examples only deal with business-related errors. Network timeout or other\ncommon errors need to be handled separately:")])]),t._v(" "),_("div",{staticClass:"language-python extra-class"},[_("pre",{pre:!0,attrs:{class:"language-python"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\nr "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.gateio.ws/api/v4/futures/btc/contracts/BTC_USD"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    r"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raise_for_status"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" requests"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPError"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# catch 2xx errors, parse error message in body, and do something based on `label`")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" r"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'label'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),_("p",[t._v("or with "),_("a",{attrs:{href:"https://github.com/gateio/gateapi-python",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python SDK"),_("OutboundLink")],1),t._v(":")]),t._v(" "),_("div",{staticClass:"language-python extra-class"},[_("pre",{pre:!0,attrs:{class:"language-python"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" gate_api "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FuturesApi\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" gate_api"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ApiException\n\napi "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FuturesApi"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    \n    api"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_futures_contract"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("settle"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'btc'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contract"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BTC_USD"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" ApiException "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ApiException wraps whole error information, see implementation for details")]),t._v("\n    detail "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" detail"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'label'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("detail"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),_("h2",{attrs:{id:"label-list"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#label-list"}},[t._v("#")]),t._v(" "),_("code",[t._v("label")]),t._v(" list")]),t._v(" "),_("ul",[_("li",[t._v("Request parameter or format related")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("code",[t._v("label")])]),t._v(" "),_("th",[t._v("Meaning")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("INVALID_PARAM_VALUE")]),t._v(" "),_("td",[t._v("Invalid parameter value")])]),t._v(" "),_("tr",[_("td",[t._v("INVALID_PROTOCOL")]),t._v(" "),_("td",[t._v("Invalid parameter value")])]),t._v(" "),_("tr",[_("td",[t._v("INVALID_ARGUMENT")]),t._v(" "),_("td",[t._v("Invalid argument")])]),t._v(" "),_("tr",[_("td",[t._v("INVALID_REQUEST_BODY")]),t._v(" "),_("td",[t._v("Invalid request body")])]),t._v(" "),_("tr",[_("td",[t._v("MISSING_REQUIRED_PARAM")]),t._v(" "),_("td",[t._v("Missing required parameter")])]),t._v(" "),_("tr",[_("td",[t._v("BAD_REQUEST")]),t._v(" "),_("td",[t._v("Invalid request")])]),t._v(" "),_("tr",[_("td",[t._v("INVALID_CONTENT_TYPE")]),t._v(" "),_("td",[t._v("Invalid "),_("code",[t._v("Content-Type")]),t._v(" header")])]),t._v(" "),_("tr",[_("td",[t._v("NOT_ACCEPTABLE")]),t._v(" "),_("td",[t._v("Invalid "),_("code",[t._v("Accept-")]),t._v(" Header")])]),t._v(" "),_("tr",[_("td",[t._v("METHOD_NOT_ALLOWED")]),t._v(" "),_("td",[t._v("Request method is not allowed")])]),t._v(" "),_("tr",[_("td",[t._v("NOT_FOUND")]),t._v(" "),_("td",[t._v("Request URL not exists")])])])]),t._v(" "),_("ul",[_("li",[t._v("Authentication related")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("code",[t._v("label")])]),t._v(" "),_("th",[t._v("Meaning")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("INVALID_CREDENTIALS")]),t._v(" "),_("td",[t._v("Invalid credentials provided")])]),t._v(" "),_("tr",[_("td",[t._v("INVALID_KEY")]),t._v(" "),_("td",[t._v("Invalid API Key")])]),t._v(" "),_("tr",[_("td",[t._v("IP_FORBIDDEN")]),t._v(" "),_("td",[t._v("Request IP not in whitelist")])]),t._v(" "),_("tr",[_("td",[t._v("READ_ONLY")]),t._v(" "),_("td",[t._v("API key is read-only")])]),t._v(" "),_("tr",[_("td",[t._v("INVALID_SIGNATURE")]),t._v(" "),_("td",[t._v("Invalid signature")])]),t._v(" "),_("tr",[_("td",[t._v("MISSING_REQUIRED_HEADER")]),t._v(" "),_("td",[t._v("Missing required authentication header")])]),t._v(" "),_("tr",[_("td",[t._v("REQUEST_EXPIRED")]),t._v(" "),_("td",[t._v("Request "),_("code",[t._v("Timestamp")]),t._v(" is far from the server time")])]),t._v(" "),_("tr",[_("td",[t._v("ACCOUNT_LOCKED")]),t._v(" "),_("td",[t._v("Account is locked")])]),t._v(" "),_("tr",[_("td",[t._v("FORBIDDEN")]),t._v(" "),_("td",[t._v("Account has no permission to request operation")])])])]),t._v(" "),_("ul",[_("li",[t._v("Wallet related")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("code",[t._v("label")])]),t._v(" "),_("th",[t._v("Meaning")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("SUB_ACCOUNT_NOT_FOUND")]),t._v(" "),_("td",[t._v("Sub account not found")])]),t._v(" "),_("tr",[_("td",[t._v("SUB_ACCOUNT_LOCKED")]),t._v(" "),_("td",[t._v("Sub account is locked")])]),t._v(" "),_("tr",[_("td",[t._v("MARGIN_BALANCE_EXCEPTION")]),t._v(" "),_("td",[t._v("Abnormal margin account")])]),t._v(" "),_("tr",[_("td",[t._v("MARGIN_TRANSFER_FAILED")]),t._v(" "),_("td",[t._v("Failed to transfer with margin account")])]),t._v(" "),_("tr",[_("td",[t._v("TOO_MUCH_FUTURES_AVAILABLE")]),t._v(" "),_("td",[t._v("Futures balance exceeds max allowed")])]),t._v(" "),_("tr",[_("td",[t._v("FUTURES_BALANCE_NOT_ENOUGH")]),t._v(" "),_("td",[t._v("Futures balance not enough")])]),t._v(" "),_("tr",[_("td",[t._v("ACCOUNT_EXCEPTION")]),t._v(" "),_("td",[t._v("Abnormal account")])]),t._v(" "),_("tr",[_("td",[t._v("SUB_ACCOUNT_TRANSFER_FAILED")]),t._v(" "),_("td",[t._v("Failed to transfer with sub account")])]),t._v(" "),_("tr",[_("td",[t._v("ADDRESS_NOT_USED")]),t._v(" "),_("td",[t._v("Address never being used in web console")])]),t._v(" "),_("tr",[_("td",[t._v("TOO_FAST")]),t._v(" "),_("td",[t._v("Withdrawing request exceeds frequency limit")])]),t._v(" "),_("tr",[_("td",[t._v("WITHDRAWAL_OVER_LIMIT")]),t._v(" "),_("td",[t._v("Withdrawal limit exceeded")])]),t._v(" "),_("tr",[_("td",[t._v("API_WITHDRAW_DISABLED")]),t._v(" "),_("td",[t._v("API withdrawal operation is disabled temporarily")])]),t._v(" "),_("tr",[_("td",[t._v("INVALID_WITHDRAW_ID")]),t._v(" "),_("td",[t._v("Invalid withdraw ID")])]),t._v(" "),_("tr",[_("td",[t._v("INVALID_WITHDRAW_CANCEL_STATUS")]),t._v(" "),_("td",[t._v("Cancelling withdrawal not allowed with current status")])])])]),t._v(" "),_("ul",[_("li",[t._v("Spot and margin trading related")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("code",[t._v("label")])]),t._v(" "),_("th",[t._v("Meaning")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("INVALID_PRECISION")]),t._v(" "),_("td",[t._v("Invalid precision")])]),t._v(" "),_("tr",[_("td",[t._v("INVALID_CURRENCY")]),t._v(" "),_("td",[t._v("Invalid currency")])]),t._v(" "),_("tr",[_("td",[t._v("INVALID_CURRENCY_PAIR")]),t._v(" "),_("td",[t._v("Invalid currency pair")])]),t._v(" "),_("tr",[_("td",[t._v("POC_FILL_IMMEDIATELY")]),t._v(" "),_("td",[t._v("Order would match and take immediately so it's cancelled")])]),t._v(" "),_("tr",[_("td",[t._v("ORDER_NOT_FOUND")]),t._v(" "),_("td",[t._v("Order not found")])]),t._v(" "),_("tr",[_("td",[t._v("ORDER_CLOSED")]),t._v(" "),_("td",[t._v("Order already closed")])]),t._v(" "),_("tr",[_("td",[t._v("ORDER_CANCELLED")]),t._v(" "),_("td",[t._v("Order already cancelled")])]),t._v(" "),_("tr",[_("td",[t._v("QUANTITY_NOT_ENOUGH")]),t._v(" "),_("td",[t._v("Amount is not enough")])]),t._v(" "),_("tr",[_("td",[t._v("BALANCE_NOT_ENOUGH")]),t._v(" "),_("td",[t._v("Balance is not enough")])]),t._v(" "),_("tr",[_("td",[t._v("MARGIN_NOT_SUPPORTED")]),t._v(" "),_("td",[t._v("Request currency pair doesn't provide margin trading")])]),t._v(" "),_("tr",[_("td",[t._v("MARGIN_BALANCE_NOT_ENOUGH")]),t._v(" "),_("td",[t._v("Margin balance is not enough")])]),t._v(" "),_("tr",[_("td",[t._v("AMOUNT_TOO_LITTLE")]),t._v(" "),_("td",[t._v("Amount does not reach minimum required")])]),t._v(" "),_("tr",[_("td",[t._v("AMOUNT_TOO_MUCH")]),t._v(" "),_("td",[t._v("Amount exceeds maximum allowed")])]),t._v(" "),_("tr",[_("td",[t._v("REPEATED_CREATION")]),t._v(" "),_("td",[t._v("Repeated creation")])]),t._v(" "),_("tr",[_("td",[t._v("LOAN_NOT_FOUND")]),t._v(" "),_("td",[t._v("Margin loan is not found")])]),t._v(" "),_("tr",[_("td",[t._v("LOAN_RECORD_NOT_FOUND")]),t._v(" "),_("td",[t._v("Margin loan record is not found")])]),t._v(" "),_("tr",[_("td",[t._v("NO_MATCHED_LOAN")]),t._v(" "),_("td",[t._v("No loan can match request borrow requirement")])]),t._v(" "),_("tr",[_("td",[t._v("NOT_MERGEABLE")]),t._v(" "),_("td",[t._v("Request loans cannot be merged")])]),t._v(" "),_("tr",[_("td",[t._v("NO_CHANGE")]),t._v(" "),_("td",[t._v("No change is made")])]),t._v(" "),_("tr",[_("td",[t._v("REPAY_TOO_MUCH")]),t._v(" "),_("td",[t._v("Repay more than required")])]),t._v(" "),_("tr",[_("td",[t._v("TOO_MANY_CURRENCY_PAIRS")]),t._v(" "),_("td",[t._v("Too many currency pairs in batch orders creation")])]),t._v(" "),_("tr",[_("td",[t._v("TOO_MANY_ORDERS")]),t._v(" "),_("td",[t._v("Too many orders in one currency pair in batch orders creation")])]),t._v(" "),_("tr",[_("td",[t._v("MIXED_ACCOUNT_TYPE")]),t._v(" "),_("td",[t._v("More than one account type is used in batch orders creation")])]),t._v(" "),_("tr",[_("td",[t._v("AUTO_BORROW_TOO_MUCH")]),t._v(" "),_("td",[t._v("Auto borrow exceeds maximum allowed")])]),t._v(" "),_("tr",[_("td",[t._v("TRADE_RESTRICTED")]),t._v(" "),_("td",[t._v("Trading is restricted due to high debt ratio")])])])]),t._v(" "),_("ul",[_("li",[t._v("Futures related")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("code",[t._v("label")])]),t._v(" "),_("th",[t._v("Meaning")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("USER_NOT_FOUND")]),t._v(" "),_("td",[t._v("User has no futures account")])]),t._v(" "),_("tr",[_("td",[t._v("CONTRACT_NO_COUNTER")]),t._v(" "),_("td",[t._v("No counter order found")])]),t._v(" "),_("tr",[_("td",[t._v("CONTRACT_NOT_FOUND")]),t._v(" "),_("td",[t._v("Contract not found")])]),t._v(" "),_("tr",[_("td",[t._v("RISK_LIMIT_EXCEEDED")]),t._v(" "),_("td",[t._v("Risk limit exceeded")])]),t._v(" "),_("tr",[_("td",[t._v("INSUFFICIENT_AVAILABLE")]),t._v(" "),_("td",[t._v("Balance is not enough")])]),t._v(" "),_("tr",[_("td",[t._v("LIQUIDATE_IMMEDIATELY")]),t._v(" "),_("td",[t._v("Operation may cause liquidation")])]),t._v(" "),_("tr",[_("td",[t._v("LEVERAGE_TOO_HIGH")]),t._v(" "),_("td",[t._v("leverage too high")])]),t._v(" "),_("tr",[_("td",[t._v("LEVERAGE_TOO_LOW")]),t._v(" "),_("td",[t._v("leverage too low")])]),t._v(" "),_("tr",[_("td",[t._v("ORDER_NOT_FOUND")]),t._v(" "),_("td",[t._v("Order not found")])]),t._v(" "),_("tr",[_("td",[t._v("ORDER_NOT_OWNED")]),t._v(" "),_("td",[t._v("Order not owned")])]),t._v(" "),_("tr",[_("td",[t._v("ORDER_FINISHED")]),t._v(" "),_("td",[t._v("Order already finished")])]),t._v(" "),_("tr",[_("td",[t._v("TOO_MANY_ORDERS")]),t._v(" "),_("td",[t._v("Too many open orders")])]),t._v(" "),_("tr",[_("td",[t._v("POSITION_CROSS_MARGIN")]),t._v(" "),_("td",[t._v("margin updating is not allowed in cross margin")])]),t._v(" "),_("tr",[_("td",[t._v("POSITION_IN_LIQUIDATION")]),t._v(" "),_("td",[t._v("Position is being liquidated")])]),t._v(" "),_("tr",[_("td",[t._v("POSITION_IN_CLOSE")]),t._v(" "),_("td",[t._v("Position is closing")])]),t._v(" "),_("tr",[_("td",[t._v("POSITION_EMPTY")]),t._v(" "),_("td",[t._v("Position is empty")])]),t._v(" "),_("tr",[_("td",[t._v("REMOVE_TOO_MUCH")]),t._v(" "),_("td",[t._v("Changed margin exceeds allowed")])]),t._v(" "),_("tr",[_("td",[t._v("RISK_LIMIT_NOT_MULTIPLE")]),t._v(" "),_("td",[t._v("Risk limit is not a multiple of step")])]),t._v(" "),_("tr",[_("td",[t._v("RISK_LIMIT_TOO_HIGH")]),t._v(" "),_("td",[t._v("Risk limit too high")])]),t._v(" "),_("tr",[_("td",[t._v("RISK_LIMIT_TOO_lOW")]),t._v(" "),_("td",[t._v("Risk limit too low")])]),t._v(" "),_("tr",[_("td",[t._v("PRICE_TOO_DEVIATED")]),t._v(" "),_("td",[t._v("Order price deviates too much from mark price")])]),t._v(" "),_("tr",[_("td",[t._v("SIZE_TOO_LARGE")]),t._v(" "),_("td",[t._v("Order size exceeds maximum")])]),t._v(" "),_("tr",[_("td",[t._v("SIZE_TOO_SMALL")]),t._v(" "),_("td",[t._v("Order size does not reach minimum")])]),t._v(" "),_("tr",[_("td",[t._v("PRICE_OVER_LIQUIDATION")]),t._v(" "),_("td",[t._v("Price to increase position can not exceeds liquidation price")])]),t._v(" "),_("tr",[_("td",[t._v("PRICE_OVER_BANKRUPT")]),t._v(" "),_("td",[t._v("Price to decrease position cannot exceeds bankrupting price")])]),t._v(" "),_("tr",[_("td",[t._v("ORDER_POC_IMMEDIATE")]),t._v(" "),_("td",[t._v("POC order will be finished immediately")])]),t._v(" "),_("tr",[_("td",[t._v("INCREASE_POSITION")]),t._v(" "),_("td",[t._v("POC order will increase position")])]),t._v(" "),_("tr",[_("td",[t._v("CONTRACT_IN_DELISTING")]),t._v(" "),_("td",[t._v("Contract is delisting, only reduce-only order or close order is allowed")])])])]),t._v(" "),_("ul",[_("li",[t._v("Server errors")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("code",[t._v("label")])]),t._v(" "),_("th",[t._v("Meaning")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("INTERNAL")]),t._v(" "),_("td",[t._v("Internal server error")])]),t._v(" "),_("tr",[_("td",[t._v("SERVER_ERROR")]),t._v(" "),_("td",[t._v("Internal server error")])]),t._v(" "),_("tr",[_("td",[t._v("TOO_BUSY")]),t._v(" "),_("td",[t._v("Server is too busy at the moment")])])])])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);