import Category from './cateEnum'
class DataItem {
  id!: number;
  categoryId!: number
  title!: string
  content!: string
  createTime!: string
  constructor(id: number = -1, categoryId: Category = -1, title: string = '', content: string = '', createTime1: number = -1) {
    this.id = id
    this.categoryId = categoryId
    this.title = title
    this.content = content
    this.createTime = this.dateFormat(createTime1)
  }

  dateFormat(timeNum: number): string {
    let date = new Date()
    let str = `${date.getFullYear()}---${date.getMonth() + 1}---${date.getHours().toString().padStart(2, '0')}---${date.getMinutes().toString().padStart(2, '0')}`
    return str
  }
}

export default DataItem