## 마스터 클래스

### lazy loading : 이미지 로딩 딜레이 이슈 해결 방법 중 하나

### 처음부터 모듈화하면 어렵다. 전체적으로 쉽게 만들어 놓고 리팩토링 과정에서 모듈화하자.

### Promise 패턴에서 then은 바로 실행된다. then의 콜백이 resolved된 후에 실행되는 것

### transition end? translate3d?

## 알게된 내용

### ele.children을 통해 자식 엘리먼트들을 배열로 얻을 수 있다.

### cloneNode()를 통해 엘리먼트를 복제할 수 있고, cloneNode(true)를 통해 하위 엘리먼트들 까지 전부 복사할 수 있다.

### 클래스 메서드에 get, set 함수 사용하면 함수 호출 없이 사용할 수 있다(?)

### setInterval은 실행 직후에 id를 반환한다.

### box 엘리먼트 가운데 정렬 하기 위해 상위 box 엘리먼트에 flex, `justify-content: center;`를 주면 화면 가로 방향으로 줄어들었을 때 좌우 overflow가 똑같이 생김(왼쪽 overflow는 스크롤도 안됨.. 그냥 범위 넘어가버림)
- 해결책 : `margin: 0 auto;`를 주면 가운데 정렬 + 왼쪽 overflow 방지 효과 있음