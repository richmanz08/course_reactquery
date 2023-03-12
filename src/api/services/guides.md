## Services caching  (!important)
code => { staleTime: Infinity }
::: ระบบจะทำการ caching service ไว้ จนกว่าจะ refresh หรือ close app
::: จะใส่เป็นบาง service ก็ได้

## Time of Cache data
code => { cacheTime: Infinity}
::: ระบบจะทำการ caching data ไว้ จนกว่าจะ refresh หรือ close app
::: จะใส่เป็นบาง service ก็ได้

## cacheTime VS staleTime ?
::: cacheTime นั้นคือเวลามีอยู่ของข้อมูลหลังจากการ fetch
example => cacheTime: 5000 // นั่นคือข้อมูลจะคงอยู่เป็นระยะเวลา 5 วินาที ** จะเริ่มนับถอยหลังเมื่อ เป็น inactive เท่านั้น

::: staleTime นั้นคือเวลาการมีอยู่ของ service ที่ถูกเรียก
example => staleTime: 5000 // เส้น api นี้จะไม่ถูกเรียกซ้ำอีกครั้งหากองค์ประกอบเหมือนเดิม เป็นระยะเวลา 5 วินาที ** จะเริ่มนับถอยหลังทันทีหลังจากเรียกใช้งาน



## Fresh & Fetching & Stale & Inactive
::: fresh คือ services ใดๆ ที่มีการเรียกและยังคงใช้งานอยู่
::: fetching คือ services ใดๆ ที่มีการเรียกอยู่และยังทำงานไม่เสร็จ
::: stale คือ services ใดๆ ที่หมดอายุและยังใช้งานอยู่  หากมีการเรียกใช้จะทำงานใหม่อีกครั้ง 
::: inactive คือ services ใดๆ ที่เคยเรียก และไม่ได้ใช้งานแล้ว

## Syntax to Query keys for Caching a data (!important)
code => useQuery(['this-key-name','key'],function)
::: 'key' อาจจะใช้เป็น ID ก็ได้ เช่น userId
## How to retry to fetch api When api error
code => { retry: 3} 
::: ระบบจะทำงานอีก 3 รอบหลังจาก failed ครั้งแรก
::: หากไม่กำหนดไว้ ค่า default คือ 3 รอบ 
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
code =>  await queryClient.invalidateQueries(['key']) 
::: ระบบจะทำการไปเรียก api เส้นนั้นๆใหม่ *จะพบเจอได้บ่อยในระบบ การ add ข้อมูล 

## Refetch Query
code => await queryClient.refetchQueries()
::: ระบบจะทำการ fetch query ที่เชื่อมต่ออยู่ ทั้งหมดอีกครั้ง 
code => await queryClient.refetchQueries(['key'])
::: ระบบจะทำการ fetch query ที่เชื่อมต่ออยู่ จาก key แบบไม่เจาะจง
code => await queryClient.refetchQueries(['key',id])
::: ระบบจะทำการ fetch query ที่เชื่อมต่ออยู่ จาก key แบบเจาะจง 

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
@@@ onSuccess,onError,onSettled สามารถทำที่ provider เพื่อทำการตรวจสอบและจัดการแบบรวบรัดได้ (***Good practice***)


## Cancelled API 
code =>  1. import { useQueryClient } from 'react-query';
         2. const queryClient = useQueryClient()
         2. queryClient.cancelQueries('key')
code => useQuery(['key'], async ({ signal }) => { 
    const resp = await fetch('/testapi', { signal })
 })
::: ระบบจะทำการ cancel api ตาม key ที่กำหนดหาก api เส้นนั้นๆยังคง pending อยู่




## Infinite Scroll (จะประกอบไปด้วยคำสั่งที่สำคัญ 2 คำสั่ง)
code => useInfiniteQuery(['key], async ({pageParam}) => {...})
1. fetchNextPage() to getNextPageParam:()=>{}
::: จะทำการเรียกข้อมูลชุดต่อไป มาต่อท้าย
2. fetchPreviousPage() to getPreviousPageParam:()=>{}
::: จะทำการเรียกข้อมูลชุดต่อไป มาต่อหัว



## Initial of data when first time render file
code => {placeholderData: initialData}
::: api เส้นนี้จะทำการคืนค่า initial ให้กับ client เพื่อ ลดการเจอปัญหา data ที่เป็น undefined อาจทำให้งาน error


## Access data in React-query
code => 1. const queryClient = useQueryClient()
        - 1.1 queryClient.getQueryData(['key', id]) ::: การเข้าถึงแบบเฉพาะเจาะจงของรายการ
        - 1.2 queryClient.getQueriesData(['key']) ::: การเข้าถึงข้อมูลแบบทั้งหมดของรายการ


## Clear cache in React-query
code => queryClient.clear()
::: ระบบจะทำการ clear cache ทั้งหมดออกจากระบบ



