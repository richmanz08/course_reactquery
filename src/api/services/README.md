


## Provider caching data (!important)
code => { staleTime: Infinity }
::: ระบบจะทำการ caching data ไว้ จนกว่าจะ refresh หรือ close app
::: จะใส่เป็นบาง service ก็ได้

## Syntax to Query keys for Caching a data (!important)
code => useQuery(['this-key-name','key'],function)
::: 'key' อาจจะใช้เป็น ID ก็ได้ เช่น userId
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
::: ระบบจะไม่ทำการ call api เมื่อมีการ render page จนกว่าจะทำการสั่งด้วย  refetch()

## Pagination Query and Keep previous data
code => { keepPreviousData: true }
::: ระบบจะทำการ cache data ก่อนหน้านั้นไว้ เหมาะสำหรับการนำไปใช้ data ที่เป็นรูปแบบ pagination


## Invalidate Query
code => onSuccess: async () => { await queryClient.invalidateQueries(['key']) }
::: ระบบจะทำการไปเรียก api เส้นนั้นๆใหม่ *จะพบเจอได้บ่อยในระบบ การ add ข้อมูล 

## Refetch Data 
code => const {...,refetch} = func()  
::: ระบบจะทำการเรียก api เส้นนั้นๆใหม่อีกครั้ง โดยจะยึดตาม องค์ประกอบก่อนหน้า(params or query string)
::: refetch เป็นรูปแบบ ฟังก์ชันการทำงานดังนั้นตอนใช้ refetch()

## mutate VS mutateAsync
code => const {mutate,mutateAsync} = func()
::: mutate จะไม่คืนค่าอะไรกลับมา และ ไม่จำเป็นต้อง await
::: mutateAsync จะสามารถคืนค่ากลับมาได้และ จำเป็นต้อง await



## onSuccess vs onError vs onSettled
code=> {onSuccess:()=> ...to do something}
::: จำทำงานเมื่อการทำงานนั้นจบ และ สำเร็จ
code=> {onError:()=> ...to do something}
::: จะทำงานเมื่อการทำงานนั้นจบ และ พบข้อผิดพลาด
code=> {onSettled:()=> ...to do something}
::: จะทำงานเมื่อการทำงานจบ โดยไม่สนว่า สำเร็จหรือไม่ก็ตาม
@@@ สามารถทำที่ provider เพื่อทำการตรวจสอบและจัดการแบบรวบรัดได้ (***Good practice***)


## Cancelled API 
code =>  1. import { useQueryClient } from 'react-query';
         2. const queryClient = useQueryClient()
         2. queryClient.cancelQueries('key')
code => useQuery(['key'], async ({ signal }) => { 
    const resp = await fetch('/testapi', { signal })
 })
::: ระบบจะทำการ cancel api ตาม key ที่กำหนดหาก api เส้นนั้นๆยังคง pending อยู่