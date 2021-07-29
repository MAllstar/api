(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{476:function(t,e,a){"use strict";a.r(e);var r=a(0),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Block",[a("h1",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),a("h2",{attrs:{id:"matching-mechanism"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matching-mechanism"}},[t._v("#")]),t._v(" Matching mechanism")]),t._v(" "),a("h3",{attrs:{id:"matching-priority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matching-priority"}},[t._v("#")]),t._v(" Matching priority")]),t._v(" "),a("p",[t._v("Gate.io Order matching follows Price Priority > Time priority principle.")]),t._v(" "),a("p",[t._v("Suppose that the order book is as follows：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Order")]),t._v(" "),a("th",[t._v("Order time")]),t._v(" "),a("th",[t._v("Ask/Selling price")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("A")]),t._v(" "),a("td",[t._v("10:00")]),t._v(" "),a("td",[t._v("100")])]),t._v(" "),a("tr",[a("td",[t._v("B")]),t._v(" "),a("td",[t._v("10:00")]),t._v(" "),a("td",[t._v("102")])]),t._v(" "),a("tr",[a("td",[t._v("C")]),t._v(" "),a("td",[t._v("10:01")]),t._v(" "),a("td",[t._v("100")])])])]),t._v(" "),a("p",[t._v("If the current price of 10:02 pays 102, the final transaction order is: A, C, B")]),t._v(" "),a("h3",{attrs:{id:"order-life-cycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-life-cycle"}},[t._v("#")]),t._v(" Order life cycle")]),t._v(" "),a("p",[t._v("A valid order sent to the matching engine is immediately confirmed and executed with existing orders,\nwith the executing result sent back to the client.")]),t._v(" "),a("p",[t._v("If an order is fully executed, then it is closed. If any part of the order is not executed immediately,\norders with TimeInForce set to "),a("code",[t._v("IOC")]),t._v(" will be cancelled, while others will be appended to the price list,\nwaiting for subsequent filling or being cancelled.")]),t._v(" "),a("h2",{attrs:{id:"data-center"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-center"}},[t._v("#")]),t._v(" Data Center")]),t._v(" "),a("p",[t._v("Gate.io data center is located in AWS Japan's ap-northeast-1 region.")]),t._v(" "),a("h2",{attrs:{id:"api-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-overview"}},[t._v("#")]),t._v(" API Overview")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("API Classification")]),t._v(" "),a("th",[t._v("Category Links")]),t._v(" "),a("th",[t._v("Overview")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("host + "),a("code",[t._v("/api/v4/spot/*")])]),t._v(" "),a("td",[t._v("Spot Trading")]),t._v(" "),a("td",[t._v("Including currency status, market information, order, transaction records and other functions")])]),t._v(" "),a("tr",[a("td",[t._v("host + "),a("code",[t._v("/api/v4/margin/*")])]),t._v(" "),a("td",[t._v("Margin Trading")]),t._v(" "),a("td",[t._v("Margin account management, lending, repayment, etc")])]),t._v(" "),a("tr",[a("td",[t._v("host + "),a("code",[t._v("/api/v4/wallet/*")])]),t._v(" "),a("td",[t._v("Wallet Management")]),t._v(" "),a("td",[t._v("Charge and withdrawal records, balance inquiries, fund transfers, etc.")])]),t._v(" "),a("tr",[a("td",[t._v("host + "),a("code",[t._v("/api/v4/withdrawals/*")])]),t._v(" "),a("td",[t._v("Withdrawal")]),t._v(" "),a("td",[t._v("Withdrawal of digital currency")])])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);