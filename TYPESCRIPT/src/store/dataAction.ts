import ItemData from '@/model/dataItem'
import Category from '@/model/cateEnum'

// 用localStorage 操作数据 你应该怎么封装
// 规范 
class DataAction {
  dataKey: string;
  memoList!: Array<ItemData>
  constructor(dataKey: string = 'bianqian') {
    this.dataKey = dataKey
    // 读取localStorage的数据
    this.memoList = this.readData()
  }

  readData(): any {
    let strData: string | null = localStorage.getItem(this.dataKey)
    let arrData: any[] = []
    if (strData != null) {
      arrData = JSON.parse(strData)
    }
    return arrData
  }
  // 添加完数据  返回数据的id
  addData(newData: ItemData): number {
    let dataArray = this.memoList
    if (dataArray == null) {
      dataArray = []
    }
    let newId = dataArray.length == 0 ? 1 : dataArray[dataArray.length - 1].id + 1
    newData.id = newId
    dataArray.push(newData)
    // 保存到localstorage中去
    this.saveData(dataArray)
    return newId
  }

  saveData(arrData: Array<ItemData>): void {
    let str: string = JSON.stringify(arrData)
    localStorage.setItem(this.dataKey, str)
  }

  editData(item: ItemData) {
    let editData: ItemData | undefined = this.memoList.find((ele) => {
      return ele.id === item.id
    })
    if (editData) {
      editData.categoryId = item.categoryId
      editData.title = item.title
      editData.content = item.content
      this.saveData(this.memoList)
    }
  }

  removeData(id: string | number): boolean {
    let arr = this.memoList
    let index = arr.findIndex((ele) => {
      return ele.id === id
    })
    if (index > -1) {
      arr.splice(index, 1)
      this.saveData(arr)
      return true
    }
    return false
  }
}

export default DataAction