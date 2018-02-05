Page({
<<<<<<< HEAD
  data:{
      listArr = []
  },
  onReachBottom(){
      alert('is bottom');
  },
  updataArrList(){
      let arr = this.data.listArr;
      arr.push(...createData())
      this.setData(
          arrList:arr
      )
  },
  createData(){
      let length = this.data.listArr.length;
      if(length >= 30 ) return [];
      return Array.from({length: 3},(v, i)=>`数据${1+i+length}`)
  }
=======
  onReachBottom(){
    console.log('1');
  }

>>>>>>> f4d393bc802279ce71d3bb077ae9093c0f05b574
})