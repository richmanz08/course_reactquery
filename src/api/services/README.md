





## Syntax to Query keys for Caching a data
code => useQuery(['this-key-name','key'],function)

## How to retry to fetch api When api error

code => { retry: 3} 
::: ระบบจะทำงานอีก 3 รอบหลังจาก failed ครั้งแรก

code => { retryDelay: 1000 } 
::: หน่วงระยะเวลาการเริ่มต้น fetch อีกครั้ง  หน่วยจะเป็น ms


## Window Focus Refetching Of Structure
code => { refetchOnWindowFocus: true }
::: ระบบจะทำการ fetch api ใหม่ให้อีกรอบถ้ามีการ กลับมายัง tab บน browser
::: จะใส่เป็นบาง service ก็ได้

## Disable auto load api when render page
code => { enabled: false }
:: ระบบจะไม่ทำการ call api เมื่อมีการ render page จนกว่าจะทำการสั่งด้วย  refetch()

