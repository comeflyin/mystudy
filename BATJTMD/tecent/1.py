import openai

openai.api_key = "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" #API密钥
COMPLETION_MODEL = "text-davinci-003" #模型常量 达芬奇第三版 完成

# 声明一个字符串模板
# 换行
# 描述细节需求 
# 分步去执行
# 输出的格式
prompt == """
Consideration product:工厂现货PVC充气青蛙
夜市地摊热卖充气玩具发光蛙儿童水上玩具

1.Compose human readable product title used on 
Amazon in english with 20 words

2.Write 5 selling points for the product in Amazon

3.Evaluat a price range for this product in U.S.

Output the result in json format with three properties called title,
selling_points and price_range 
"""
# 定义函数
def get_response(prompt):
    completions = openai.Completion.create(
      # 大模型很值钱
      engine=COMPLETION_MODEL,  # 模型
      prompt=prompt,  # 提示词
      max_tokens=512, # 省点钱
      n=1, # 返回的结果数量 1条
      stop=None,
      temperature=0.0,   # 自由发挥度 0-2
    )

    print(completions)
    message = completions.choices[0].text # 
    return message

print(get_response(prompt))

# {
#   title: "",
#   selling_points: "",
#   price_range: "",
# }