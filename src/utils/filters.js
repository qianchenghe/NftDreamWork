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
const ToLocale = value => { // 
  if (value && myIsNaN(value)) {
    value = value.toFixed(2);
    value = parseFloat(value)
    return value.toLocaleString()
  } else {
    return value
  }
}
function myIsNaN(value) {
  return typeof value === 'number' && !isNaN(value);
}
export { DateFormat, TimeFormat, RemoveZeros, ToLocale }