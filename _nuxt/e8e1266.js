(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3],{327:function(t,e,r){"use strict";r.r(e);var o=[{key:"groupId",label:"團購編號"},{key:"startDate",label:"開始時間"},{key:"endDate",label:"結束時間"},{key:"productName",label:"團購商品名稱",sorter:!1},{key:"amount",label:"件數"},{key:"eid",label:"團主員工編號"},{key:"groupStatus",label:"團購狀態"}],n={name:"GroupListTable",props:{items:{type:Array,default:function(){return[]}}},data:function(){return{fields:o,pagination:{align:"center",doubleArrows:!1}}}},d=r(12),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CDataTable",{attrs:{border:"",items:t.items,fields:t.fields,sorter:"","items-per-page":20,pagination:t.pagination,hover:""},scopedSlots:t._u([{key:"groupId",fn:function(e){var o=e.item;return[r("td",[r("router-link",{attrs:{to:"/group/groupDetail/"+o.groupId,target:"_blank"}},[t._v(t._s(o.groupId))])],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,r){"use strict";r.r(e);var o={name:"GroupList",components:{DataTable:r(327).default},data:function(){return{items:[{groupId:"20897800001",startDate:"2021/07/12",endDate:"2021/07/17",productName:"多力多滋超濃起司口味玉米片 108g/包，10包/袋",amount:10,eid:"1920239",groupStatus:"待成團"},{groupId:"20897800001",startDate:"2021/07/12",endDate:"2021/07/17",productName:"多力多滋超濃起司口味玉米片 108g/包，10包/袋",amount:10,eid:"2019394",groupStatus:"已成團"},{groupId:"20893400005",startDate:"2021/07/10",endDate:"2021/07/15",productName:"多力多滋超濃起司口味玉米片 108g/包，10包/袋",amount:10,eid:"1213948",groupStatus:"待出貨"},{groupId:"20893400005",startDate:"2021/07/10",endDate:"2021/07/15",productName:"多力多滋超濃起司口味玉米片 108g/包，10包/袋",amount:10,eid:"1234123",groupStatus:"已取貨"},{groupId:"20893400005",startDate:"2021/07/10",endDate:"2021/07/15",productName:"多力多滋超濃起司口味玉米片 108g/包，10包/袋",amount:10,eid:"4123421",groupStatus:"已取消"},{groupId:"20897800001",startDate:"2021/07/01",endDate:"2021/07/16",productName:"多力多滋超濃起司口味玉米片 108g/包，10包/袋",amount:10,eid:"2111341",groupStatus:"待成團"},{groupId:"20897800001",startDate:"2021/07/01",endDate:"2021/07/16",productName:"多力多滋超濃起司口味玉米片 108g/包，10包/袋",amount:10,eid:"1231211",groupStatus:"待成團"}]}}},n=r(12),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CCard",[r("CCardHeader",[r("h3",[t._v("團購管理")]),t._v(" "),r("CButtonGroup",{staticClass:"float-right"},[r("router-link",{attrs:{to:"/group/groupSearch"}},[r("CButton",{staticClass:"ml-2",staticStyle:{width:"8em"},attrs:{color:"primary"}},[t._v("\n          搜尋\n        ")])],1)],1)],1),t._v(" "),r("CCardBody",[r("DataTable",{attrs:{items:t.items}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);