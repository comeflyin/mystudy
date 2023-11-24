# 搜索

- 项目亮点 
    搜索比较难，可以在面试的时候讲出来
- 全栈
    - 前端 防抖和节流 
    - 后端 
        - SQL posts LIKE '%${Keyword}%'
        - 各种数据放入hahop flink 
        - Elastic Search node
    - AIGC 

- 数据？
    - python 爬虫 
    - AIGC 生成数据
        get_response
        prompt 电商网站 手机 50 条

## 数据清洗
- pandas 来处理aigc 生成的text 文本
    - split('\n')按换行符切割
    - pandas 提供了DataFrame 实例
        pd.DataFrame({"product_name"}) colume_name
    - pd.head()
        默认给五条

- 文本 如何转成向量 数学表达 openai 提供embedding 接口
    cosin 值

- embedding Completion \ chat
    openai 的新接口
    查询 keyword + 数据 都进行向量计算
    cosine_smilarity 两个向量间的相似度-> 0 相同，或 相似的
    相反的话 负值