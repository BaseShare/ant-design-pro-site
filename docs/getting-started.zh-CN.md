---
order: 0
title: 查询业务订单
type: 支付中心
---

## 应用场景

通过下单接口生成支付订单后，可根据返回的业务订单号，查询生成的订单信息。

订单状态有：初始、处理中、支付完成、确认、退款中等状态。

## 请求地址（URL）

生成环境：/account/queryPayOrderInfo
测试环境：/account/queryPayOrderInfo

## 请求参数

表格表格表格表格表格表格表格表格表格表格表格表格表格
表格表格表格表格表格表格表格表格表格表格表格
表格表格表格表格表格表格表格

## 返回参数

表格表格表格表格表格表格表格表格表格表格表格表格表格
表格表格表格表格表格表格表格表格表格表格表格
表格表格表格表格表格表格表格

## 请求示例

```

{
	"workOrderNo":"LMK_TIRA_2018090316PG66FWOQ"
} 

```

## 响应示例

```
{
	
    "result": "1",
	
    "data": {
	
        "data": "[{
	\"accountNo\":\"MA1534843725826530\",
	\"bankCardType\":\"1\",
	\"bankCode\":\"ABC\",
	\"bankName\":\"\",
	\"bindBankId\":\"\",
	\"callbackUrl\":\"http://192.168.110.177:8092/lmk-fin-export-api/comeBack/repaymentComeBack\",
	\"clentId\":\"\",
	\"clentType\":\"MOBILE\",
	\"collectMoneyAccountNo\":\"MA1489979035867259\",
	\"collectMoneyUserId\":\"\",
	\"createSubareaTime\":{
	\"date\":3,
	\"day\":1,
	\"hours\":16,
	\"minutes\":1,
	\"month\":8,
	\"seconds\":16,
	\"time\":1535961676398,
	\"timezoneOffset\":-480,
	\"year\":118
},
	\"createTime\":{
	\"date\":3,
	\"day\":1,
	\"hours\":16,
	\"minutes\":1,
	\"month\":8,
	\"seconds\":16,
	\"time\":1535961676398,
	\"timezoneOffset\":-480,
	\"year\":118
},
	\"extendParam\":{
	
},
	\"fcallbackUrl\":\"http://lmk.test-95155.com/lmk-fin-web-api/pay/callBack\",
	\"feeType\":\"\",
	\"id\":\"AF071193CFB14291A5251E73F57EFD93\",
	\"identityId\":\"\",
	\"identityType\":\"\",
	\"isClearing\":\"\",
	\"merchantCode\":\"\",
	\"methodName\":\"\",
	\"mobileNo\":\"\",
	\"orderAmount\":1,
	\"orderNo\":\"4002018090316011639700231589\",
	\"orderStatus\":\"-1\",
	\"orderSubject\":\"1007\",
	\"orderType\":\"4\",
	\"ownerUserNo\":\"180821172845452\",
	\"payChannel\":\"WITH_HOLD\",
	\"payPassword\":\"\",
	\"payType\":\"\",
	\"percentage\":0,
	\"productCatalog\":\"62\",
	\"productDesc\":\"\",
	\"productName\":\"油卡充值\",
	\"refundOrderNo\":\"\",
	\"remarks\":\"_可用余额不足_可用余额不足_可用余额不足\",
	\"reqChannel\":false,
	\"result\":\"\",
	\"reviewstatus\":\"\",
	\"securityTicket\":\"\",
	\"serviceProviderCode\":\"\",
	\"smscode\":\"\",
	\"storeCode\":\"201703082044068750659\",
	\"tradeExternalNo\":\"BN20180903160115648141\",
	\"userId\":\"07fac272-e606-4e19-b9ad-d0fea6b158f9\",
	\"userIp\":\"192.168.184.178\",
	\"userUa\":\"\",
	\"workOrderNo\":\"LMK_TIRA_2018090316PG66FWOQ\"
}]"
    
},
	
    "merchantcode": "201703082044068750659",
	
    "errorcode": "",
	
    "error": ""

} 

```

## 错误代码

```
29990 系统错误
```
