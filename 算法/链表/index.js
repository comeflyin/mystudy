let arr = [1,2,3,4,5,6,7,8] // 有序列表线性结构

// 1->2->3->null
let res = { 
  val: 1, // 数据域
  next: { // 指针域
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}
