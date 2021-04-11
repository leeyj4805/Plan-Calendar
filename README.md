# 공휴일 API 연동 캘린더 웹페이지

## 요구사항

- 달력 UI는 첨부한 '샘플이미지1' 같이 구현
- 오른쪽 상단의 화살표를 선택했을 때 이전/다음 달로 변경
- '오늘' 버튼을 선택했을 때 해당 월로 화면 이동 후, 오늘에 해당하는 날짜 하이라이트
- 공공데이터포털 사이트의 특일정보 API를 활용하여 공휴일 정보 안내
- 날짜 선택 시 첨부한 '샘플이미지2'와 같이 간단한 스케줄 추가 및 삭제
- 스케줄 추가 시 날짜와 스케줄 이름을 받음
- 스케줄 추가 및 삭제 부분 UI는 임의로 구현
- 브라우저 새로고침 전까지 데이터 유지
- UI Framework(React) 사용 가능 (React 사용 시 필수 사항은 아니나 redux, redux-saga 활용을 추천 )

## Tech/framework used

```jsx
react, react-hooks, react-datepicker
```

## Install and build

```jsx
npm install
npm start
```