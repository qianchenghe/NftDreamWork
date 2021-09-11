const DateFormat = value => { // 将 “20200708“ 格式的日期 过滤成“2020-07-09”
  if (value) {
    return value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
  }
}
const TimeFormat = value => { // 将 “092321“ 格式的时间 过滤成“09:23:21”
  if (value) {
    return value.replace(/(\d{2})(\d{2})(\d{2})/g, '$1:$2:$3')
  }
}
const RemoveZeros = value => { // 去掉前导零 0001 转换成 1
  if (value) {
    return value.replace(/\b(0+)/gi, "")
  }
}
export { DateFormat, TimeFormat, RemoveZeros }