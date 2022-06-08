# 🌦 Weather People App _ API  

'WeatherPeople' Backend using Express 





***

Abstract
------------
사람들이 직접 경험한 오늘의 날씨정보를 토대로 옷차림을 공유한다면,   
내가 직접 느낀 날씨를 기록할 수 있다면 어떨까요?    
웨더피플은 날씨에 관련된 경험을 공유하고 , 소통하는 서비스 입니다.

이 레포지토리에는 백엔드 코드가 담겨있습니다. 
#### 프론트엔드에 관련된 내용은 여기서 확인할 수 있습니다: [Click Here][front_link]

[front_link]: https://github.com/jungjihyoun/weather-people-api "프론트엔드 깃허브"


Composition
-----------
프로젝트의 주요 구성 요소는 다음과 같습니다:      

### Description

```bash
📦src
 ┣ 📂graphql
 ┃ ┣ 📂image
 ┃ ┣ 📂record
 ┃ ┃ ┣ 📜record.mutations.js
 ┃ ┃ ┣ 📜record.queries.js
 ┃ ┃ ┣ 📜record.typeDefs.js
 ┃ ┃ ┗ 📜recordModel.js
 ┃ ┣ 📂user
 ┃ ┃ ┣ 📜user.mutations.js
 ┃ ┃ ┣ 📜user.queries.js
 ┃ ┃ ┣ 📜user.typeDefs.js
 ┃ ┃ ┗ 📜userModel.js
 ┃ ┗ 📂weather
 ┣ 📂routes
 ┃ ┣ 📜dust.js
 ┃ ┣ 📜image.js
 ┃ ┣ 📜midRain.js
 ┃ ┣ 📜midWeather.js
 ┃ ┗ 📜shortWeather.js
 ┗ 📂utils
 ┃ ┗ 📜getCoordinate.js
```


## Installation    

######  1. Add env

######  2. Install NPM packages
```
npm install

```
######  3. Start
```
npm start

```

---


### License
Distributed under Jihyoun Jung.

### Contact
Jihyoun Jung - jihyoun0602@gmail.com
