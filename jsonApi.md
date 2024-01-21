		
		
		
食物推荐的表格		get
		
请求参数		
{"type": "蛋类"}		
		
返回响应		
"data":{		
"tableData":[{		
    "good": "鸡蛋",		
    "ordinary": "1111",		
    "reduce": "2222"		
}],		
"status":"true"		
}		
		
		
		
		
		
搜索食物名称		post
		
请求参数		
{"keyword": ""}		
		
返回响应		
"data":{		
"selectList":[{		
    "id": "1",		
    "title": "鸡蛋",		
}],		
"status":"true"		
}		
		
		
		
		
		
提交计算评分		post
		
请求参数		
{		
 "name": "",		
 "weight": ""		
}		
		
返回响应		
"data":{		
    "score": "85",		
    "promote": "抗炎",   //或促炎		
    "helpful": "有利于",    //或不利于		
}		
		
		
		
评价与反馈的功能没有用		
