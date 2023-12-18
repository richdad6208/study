## Life Cycle

1. A 쿼리 인스턴스가 mount 됨.
2. 네트워크에서 데이터를 fetch하고 A라는 query key로 캐싱함
3. 이 데이터는 fresh 상태에서 staleTime(기본값 0) 이후 stale 상태로 변경됨
4. A쿼리 인스턴스가 unmount 됨
5. 캐시는 cacheTime(기본값 5분)만큼 유지되다가 가비지 콜렉터로 수집됨
6. 만일 cacheTime이 지나기 전에 A쿼리 인스턴스가 새롭게 mount되면, fetch가 실행되고, fresh한 값을 가져오는 동안 캐시 데이터를 보여줌.

## Query

- 데이터를 캐시하고 관리하기 위해 사용하는 고유한 공간, query key는 해당 공간에 이름을 뜻한다.
- 배열로 집어넣는다. ['data', checked]

## stale

- useQuery를 사용하면 기본적으로 데이터(cache)를 신선하지 못한 상태로 인식을 해서 계속 리패치를 해온다.
- 그래서 옵션으로 신선한 상태를 유지할 수 있도록 옵션을 변경해야한다. staleTime: 5000,

## cache

- 캐시는 기본적으로 5분동안 저장하도록 설정한다. query에 실질적으로 데이터를 저장하는 것을 말하며, stale은 이 캐시에 신선도를 표시하는 마크를 뜻한다.

## client.invalidateQueryies

- 이것은 쿼리 캐시데이터에 마크를 stale로 변하게 만들어 다시 패치해오도록 만드는 api이다.
